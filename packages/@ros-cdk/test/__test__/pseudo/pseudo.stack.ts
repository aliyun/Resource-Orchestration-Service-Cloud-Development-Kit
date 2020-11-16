import * as ros from '@ros-cdk/core'
import { Vpc } from '@ros-cdk/ecs';

export class PseudoDataParameter extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, props);

    const pseudo_data = new ros.RosOutput(this, 'pseudo_data', {
      value: [
        ros.RosPseudo.accountId,
        ros.RosPseudo.region,
        ros.RosPseudo.stackName,
        ros.RosPseudo.stackId,
        ros.RosPseudo.tenantId,
        ros.RosPseudo.noValue,
      ],
    });
  }
}

export class PseudoNoValueParameter extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, props);

    const vpc = new Vpc(this, 'ROS-VPC', {
      vpcName: 'vpcName',
      cidrBlock: '10.0.0.0/8',
      enableIpv6: false,
      description: ros.RosPseudo.noValue,
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
