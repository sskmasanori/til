## VPC Endpoints For Systems Manager
2021.03.01<br>

VPCエンドポイント
```
インターネットゲートウェイやNATゲートウェイ、NATインスタンスなどを経由せずに、VPCと他のAWSサービスとをプライベートに接続できるAWSのサービス。
```
AWS Systems Managerを利用するためには、以下AWSサービスへのVPCエンドポイントが必要。
 - com.amazonaws.region.ssm
 - com.amazonaws.region.ec2messages
 - com.amazonaws.region.ec2
 - com.amazonaws.region.ssmmessages
 - com.amazonaws.region.s3
 - (com.amazonaws.region.kms)

[図: ec2messagesとssmmessagesについて](../visualizations/20200325_ssmmessages_ec2messages.jpeg)<br>
<br>
[AWS公式: Systems Manager の VPC エンドポイントの作成](https://docs.aws.amazon.com/ja_jp/systems-manager/latest/userguide/setup-create-vpc.html)<br>
[AWS公式: SSM エージェントの使用](https://docs.aws.amazon.com/ja_jp/systems-manager/latest/userguide/ssm-agent.html)<br>
[AWS公式: ec2messages、ssmmessages](https://docs.aws.amazon.com/ja_jp/systems-manager/latest/userguide/systems-manager-setting-up-messageAPIs.html)<br>
[NEC: VPCエンドポイント](https://jpn.nec.com/clusterpro/blog/20180115.html)<br>