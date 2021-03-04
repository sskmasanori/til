## Share AWS Resources Between Stacks
2021.03.04<br>
AWS CDK, TypeScript<br>

StackAとStackBは同じアカウントかつ同じリージョンで作成される。StackAでVPCを作成しているとして、StackBでStackAで作成したVPCを使いたい。<br>

lib/stack-a.ts
```
interface StackA extends cdk.StackProps {
  ***
  env: Environment; // 大事
  ***
}

export class StackA extends cdk.Stack {
  readonly vpc: CfnVPC;

  constructor(scope: cdk.Construct, id: string, props: SamplePropsA) {
    super(scope, id, props);

    // VPC
    this.vpc = new CfnVPC(this, 'VPC', {
      cidrBlock: ***,
      ***
    });
```
lib/stack-b.ts
```
interface StackB extends cdk.StackProps {
  ***
  env: Environment; // 大事
  vpc: CfnVPC;
  ***
}

export class StackB extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props: SamplePropsB) {
    super(scope, id, props);

    // Security Group
    const endpointSecurityGroup = new CfnSecurityGroup(this, 'endpointSG', {
      ***
      securityGroupIngress: [
        {
          ***
          cidrIp: props.vpc.cidrBlock,
          ***
        },
      ],
      vpcId: props.vpc.ref,
      ***
    });
```

bin/stack.ts
```
// 共通propsは書き出し。
const commonProps = {
  ***
};

const stack: Stack = new Stack(app, `TakedaStack-${stage}`, {
  ...commonProps,
  ***
});

new VpcSsmEndpointStack(app, `TakedaVpcSSmEndpointStack-${stage}`, {
  ...commonProps,
  vpc: stack.vpc,
});
```
Environmentについて<br>
node_modules/@ws-cdk/core/lib/environment.d.tsによると
> Note that certain features, such as cross-stack references and environmental context providers require concerete region information and will cause this stack to emit synthesis errors.

NOTE:<br>
もしStackB.tsにthis.regionがなくてもenvironment情報が無いと...
```
Error: Stack "StackB" cannot consume a cross reference from stack "StackA".
Cross stack references are only supported for stacks deployed to the same environment or between nested stacks and their parent stack
```
TODO:<br>
VPCはCIDRを設定しているが、StackBでもStackAで作成したVPCを作成すると、同じアカウントかつ同じリージョン内に同じCIDRを持つVPCが既に存在するということでエラーになる。(既存リソースがある場合、cloud formationはそのリソースを新規作成せずに既存を使ってくれるんじゃなかったっけ？)そもそもどこに作るかのデータが無いから分からんと言われているのか。
