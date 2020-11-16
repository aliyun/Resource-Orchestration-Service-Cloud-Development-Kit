import * as ros from '@ros-cdk/core'
import { Vpc } from '@ros-cdk/ecs';

export class VpcExample extends ros.Stack {
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
  }
}

// in specification there is no default vaule for cidrblock
export class VPCWithoutCidrBlock extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, props);

    const vpc = new Vpc(this, 'ROS-VPC', {
      vpcName: 'vpcName',
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
  }
}

export class VPCWithoutEnableIpv6 extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, props);

    const vpc = new Vpc(this, 'ROS-VPC', {
      vpcName: 'vpcName',
      resourceGroupId: 'rg-acfm2xwmxvrzq6q',
      cidrBlock: '172.16.0.0/12',
      tags: [
        {
          key: 'KeyExample',
          value: 'ValueExample',
        },
      ],
    });
  }
}
