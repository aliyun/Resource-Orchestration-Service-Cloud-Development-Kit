import * as ros from '@alicloud/ros-cdk-core';
import * as ecs from '@alicloud/ros-cdk-ecs';

export class DemoStack extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, props);
    new ros.RosInfo(this, ros.RosInfo.description, "Deploy 2048 game through ROS CDK.");

    const zoneId = new ros.RosParameter(this, 'ZoneId', {
      type: ros.RosParameterType.STRING
    });

    const vpc = new ecs.Vpc(this, 'Vpc', {
      cidrBlock: '192.168.0.0/16'
    });

    const sg = new ecs.SecurityGroup(this, 'SecurityGroup', {
      vpcId: vpc.ref
    });

    const vsw = new ecs.VSwitch(this, 'VSwitch', {
      cidrBlock: '192.168.0.0/24',
      zoneId: zoneId,
      vpcId: vpc.ref
    })

    const instance = new ecs.Instance(this, 'Instance', {
      vpcId: vpc.ref,
      vSwitchId: vsw.ref,
      securityGroupId: sg.ref,
      zoneId: zoneId,
      instanceType: 'ecs.c6e.large',
      imageId: 'centos_7_8',
      systemDiskCategory: 'cloud_essd',
      ioOptimized: 'optimized'
    });

    const sgIngress = new ecs.SecurityGroupIngress(this, 'SecurityGroupIngress', {
      ipProtocol: 'tcp',
      portRange: '80/80',
      sourceCidrIp: '0.0.0.0/0',
      securityGroupId: sg.ref,
      nicType: 'intranet'
    });

    const runCommand = new ecs.RunCommand(this, 'RunCommand', {
      instanceIds: [instance.ref],
      type: 'RunShellScript',
      sync: true,
      timeout: 3600,
      commandContent: `yum install -y httpd wget\nsystemctl start httpd\nwget 'https://computenest-artifacts-cn-hangzhou.oss-cn-hangzhou-internal.aliyuncs.com/1853370294850618/cn-beijing/1697533575326/2048.tgz' -O 2048.tgz\ntar xvf 2048.tgz\nmv 2048/* /var/www/html && rm -rf 2048`
    });
    runCommand.addDependency(sgIngress)

    new ros.RosOutput(this, 'Url', {
      value: `http://${instance.attrPublicIp}:80`
    });
  }
}
