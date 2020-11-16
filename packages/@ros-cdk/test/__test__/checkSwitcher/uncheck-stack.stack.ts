import * as ros from '@ros-cdk/core'
import * as ecs from '@ros-cdk/ecs';
export class UncheckStackTest extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, { enableResourcePropertyConstraint: false });
    let invalidLengthTags: {
      key: string;
      value?: any;
    }[] = [];

    for (let i = 0; i < 21; i++) {
      invalidLengthTags.push({
        key: 'KeyExample' + i,
        value: 'ValueExample' + i,
      });
    }

    const vpc = new ecs.Vpc(this, 'ROS-VPC', {
      vpcName: 'vpcName',
      cidrBlock: '10.0.0.0/8',
      enableIpv6: false,
      description: 'This is the description of VPC',
      resourceGroupId: 'rg-acfm2xwmxvrzq6q',
      tags: invalidLengthTags,
    });

    const vswitch = new ecs.VSwitch(this, 'ROS-VSwitch', {
      vpcId: vpc.attrVpcId,
      zoneId: 'cn-beijing-h',
      vSwitchName: 'example_VSwtich_Name',
      cidrBlock: '10.0.0.0/20',
      tags: invalidLengthTags,
    });
  }
}
