import * as ros from '@ros-cdk/core'
import * as ecs from '@ros-cdk/ecs';
export class InstanceTest extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, props);
    new ros.RosInfo(
      this,
      ros.RosInfo.description,
      'Create a set of ECS instances of the same configuration under the newly created VPC, VSwitch, and security groups.',
    );
    const imageId = new ros.RosParameter(this, 'ImageId', {
      defaultValue: 'centos_7',
      type: ros.RosParameterType.STRING,
      description: `Instance Image ID. see detail: <b><a href='https://www.alibabacloud.com/help/doc-detail/112977.html' target='_blank'><font color='blue'>Find the mirror</font></a></b>`,
      label: 'Image ID',
    });

    const instanceType = new ros.RosParameter(this, 'InstanceType', {
      type: ros.RosParameterType.STRING,
      description: `Fill in specifications that can be used under the VSwitch availability zone;</b></font><br>general specifications：<font color='red'><b>ecs.c5.large</b></font><br>note: a few zones do not support general specifications<br>see detail: <a href='https://www.alibabacloud.com/help/en/doc-detail/25378.html' target='_blank'><b><font color='blue'>Instance Specification Family</font></a></b>`,
      label: 'Instance Type',
      defaultValue: 'ecs.ic5.large',
    });

    const ecsVpc = new ecs.Vpc(this, 'EcsVpc', {
      vpcName: 'myVpc',
      cidrBlock: '192.168.0.0/16',
    });

    const ecsVSwitch = new ecs.VSwitch(this, 'EcsVSwitch', {
      vSwitchName: 'mySWitch',
      vpcId: ecsVpc.attrVpcId,
      cidrBlock: '192.168.1.0/24',
      zoneId: 'cn-beijing-h',
    });
    const instance = new ecs.Instance(this, 'instance', {
      vSwitchId: ecsVSwitch.attrVSwitchId,
      vpcId: ecsVpc.attrVpcId,
      imageId: imageId.valueAsString,
      instanceType: instanceType.valueAsString,
      password: 'Wksjdfs123!@#',
    });
  }
}
