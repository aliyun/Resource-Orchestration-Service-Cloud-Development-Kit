import * as ros from '@alicloud/ros-cdk-core'

import { Vpc } from '@alicloud/ecs';
export class MappingStack extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, props);

    const map = new ros.RosMapping(this, 'vpcInfo', {
      mapping: {
        vpcName: {
          vpc1: 'vpc1_name',
          vpc2: 'vpc2_name',
        },
        testMap: {
          k1: 'v1',
          k2: 'v2',
        },
      },
    });

    const vpc = new Vpc(this, 'ROS-VPC', {
      vpcName: map.findInMap('vpcName', 'vpc1'),
      cidrBlock: '10.0.0.0/8',
      enableIpv6: false,
      description: 'This is the description of VPC',
      resourceGroupId: 'rg-acfm2xwmxvrzq6q',
    });
  }
}

export class MappingWithParameterStack extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, props);

    const region = new ros.RosParameter(this, 'env', {
      type: ros.RosParameterType.STRING,
      allowedValues: ['北京', '杭州', '青岛'],
    });

    const map = new ros.RosMapping(this, 'vpcInfo', {
      mapping: {
        vpcName: {
          北京: 'cn-beijing-h',
          杭州: 'cn-hangzhou',
          青岛: 'cn-qingdao',
        },
      },
    });

    const vpc = new Vpc(this, 'ROS-VPC', {
      vpcName: map.findInMap('vpcName', region.valueAsString),
      cidrBlock: '10.0.0.0/8',
      enableIpv6: false,
      description: 'This is the description of VPC',
      resourceGroupId: 'rg-acfm2xwmxvrzq6q',
    });
  }
}
