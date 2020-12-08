import * as ros from '@alicloud/ros-cdk-core'
import { VSwitch, Vpc } from '@alicloud/ecs';

export class VSwitchExample extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, props);

    const vswitch = new VSwitch(this, 'ROS-VSwitch', {
      vpcId: 'example_VPC_ID',
      zoneId: 'cn-beijing-h',
      vSwitchName: 'example_VSwtich_Name',
      cidrBlock: '10.0.0.0/8',
      tags: [
        {
          key: 'KeyExample',
          value: 'ValueExample',
        },
      ],
    });
  }
}

export class VSwitchWithVPC extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, props);

    const vpc = new Vpc(this, 'ROS-VPC', {
      vpcName: 'vpcName',
      cidrBlock: '10.0.0.0/8',
      enableIpv6: false,
      description: 'This is the description of VPC',
      resourceGroupId: 'rg-acfm2xwmxvrzq6q',
      tags: [
        {
          key: 'KeyExample',
          value: 'ValueExample',
        },
      ],
    });

    const vswitch = new VSwitch(this, 'ROS-VSwitch', {
      vpcId: vpc.attrVpcId,
      zoneId: 'cn-beijing-h',
      vSwitchName: 'example_VSwtich_Name',
      cidrBlock: '10.0.0.0/20',
      tags: [
        {
          key: 'KeyExample',
          value: 'ValueExample',
        },
      ],
    });
  }
}
