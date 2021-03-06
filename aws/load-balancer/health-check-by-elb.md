## Health Check By ELB
2021.02.24<br>

dockerを利用して本番環境を構成するとして。
 - ELBによるヘルスチェック: HTTP通信を受け付けるコンテナに対して*1
 - ECSによるヘルスチェック: HTTP通信を受け付けないコンテナに対して(イベントドリブンで動くコンテナなど*2)

*1: AWSでは、ELBによるヘルスチェックの結果がunhealthyの場合にも、ECS配下にあるサービス(コンテナの集まり)を再起動してくれる。

*2: 例えばサインアップがトリガーとなり、ユーザー登録だけではなく、別のコンテナを使って他の処理を行うなど。
<br>
<br>
### application側の設定
 - ヘルスチェック用のAPIパスを作成。
```
{domain}/api/health-check みたいな。
```
 - そのAPIパスが叩かれると以下の処理を行うように設定。
```
<?php
***
public function *** (Request $request)
{
    // User agentの取得
    $userAgentString = $request->userAgent();

    // User agentがELB-HealthChecker以外の場合は404を。
    if (strpos($userAgentString, "ELB-HealthChecker") === false) {
        abort(404);
    }

    try {
        // DBとの接続を確認する。
        DB::connection()->getDatabaseName();
    } catch (Exception $e) {
        return response()->json([
            'status'        => 'unhealthy',
            'db-connection' => 'failed',
            ***
        ], 500);
    }

    return response()->json([
        'status'        => 'healthy',
        'db-connection' => 'success',
        ***,
    ], 200);
}
```

### aws target group (stack)の設定
 - ターゲットグループの作成。
 - 必要なリソーススタックをそのグループに所属させる。
```
AWS CDK, TypeScript

const targetGroup = new CfnTargetGroup(this, 'targetGroup', {
    healthCheckPath: '/api/health-check',
    ***
});
```

### ELB health checkをローカル環境で確認してみよう。(Dockerを使っているとして)
 - 本番環境用のコンテナをローカルで起動。
 - ブラウザのコンソール画面にて、User agentをELB-HealthCheckerに変更。
 - health checkのapiパスを叩いてみる。

<br>
TODO: docker-compose.ymlファイルを使っているなら、それぞれのcontainerに対して本番環境用のimageに書き換えてもよい。これってローカルでbuildしたimageは設定できるのかな？無理かもな。

