import * as ros from '@ros-cdk/core'
import { Vpc } from '@ros-cdk/ecs';

export class OutputStack extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, props);

    const vpc = new Vpc(this, 'ROS-VPC', {
      vpcName: 'VPC_Name',
      cidrBlock: '10.0.0.0/8',
      enableIpv6: false,
      description: 'This is the description of VPC',
      resourceGroupId: 'rg-acfm2xwmxvrzq6q',
    });

    const theFirstOutput = new ros.RosOutput(this, 'VpcId', {
      value: vpc.getAtt('VpcId'),
      description: 'VpcId',
    });
  }
}

export class MultipleValueInOneOutputStack extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, props);

    const vpc = new Vpc(this, 'ROS-VPC', {
      vpcName: 'VPC_Name',
      cidrBlock: '10.0.0.0/8',
      enableIpv6: false,
      description: 'This is the description of VPC',
      resourceGroupId: 'rg-acfm2xwmxvrzq6q',
    });

    const theFirstOutput = new ros.RosOutput(this, 'VpcId', {
      value: [vpc.getAtt('VpcId'), vpc.getAtt('VRouterId'), vpc.getAtt('RouteTableId')],
      description: 'VPC detail information(VpcId, VRouterId, RouteTableId)',
    });
  }
}

export class MultipleOutputStack extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, props);

    const vpc = new Vpc(this, 'ROS-VPC', {
      vpcName: 'VPC_Name',
      cidrBlock: '10.0.0.0/8',
      enableIpv6: false,
      description: 'This is the description of VPC',
      resourceGroupId: 'rg-acfm2xwmxvrzq6q',
    });

    const theFirstOutput = new ros.RosOutput(this, 'VpcId', {
      value: vpc.getAtt('VpcId'),
      description: 'VpcId',
    });
    const theSecondOutput = new ros.RosOutput(this, 'VRouterId', {
      value: vpc.getAtt('VRouterId'),
      description: 'VRouterId',
    });
    const theThirdOutput = new ros.RosOutput(this, 'RouteTableId', {
      value: vpc.getAtt('RouteTableId'),
      description: 'RouteTableId',
    });
  }
}

export class OutputWithConditionStack extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, props);

    const vpc = new Vpc(this, 'ROS-VPC', {
      vpcName: 'VPC_Name',
      cidrBlock: '10.0.0.0/8',
      enableIpv6: false,
      description: 'This is the description of VPC',
      resourceGroupId: 'rg-acfm2xwmxvrzq6q',
    });

    const isProduction = new ros.RosParameter(this, 'env', {
      type: ros.RosParameterType.STRING,
      defaultValue: 'Production',
    });

    const isProd = new ros.RosCondition(this, 'IsProduction', {
      expression: ros.Fn.conditionEquals('Production', isProduction.valueAsString),
    });

    const theFirstOutput = new ros.RosOutput(this, 'VpcId', {
      value: vpc.getAtt('VpcId'),
      description: 'VpcId',
      condition: isProd,
    });
  }
}
