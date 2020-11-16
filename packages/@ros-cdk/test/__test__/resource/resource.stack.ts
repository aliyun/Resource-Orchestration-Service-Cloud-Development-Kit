import * as ros from '@ros-cdk/core'
import { Vpc } from '@ros-cdk/ecs';
import { VSwitch } from '@ros-cdk/ecs';

export class ResourceDescription extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, props);

    const vpc = new Vpc(this, 'ROS-VPC', {
      vpcName: 'VPC_Name',
      cidrBlock: '10.0.0.0/8',
      enableIpv6: false,
      description: 'This is the description of VPC',
      resourceGroupId: 'rg-acfm2xwmxvrzq6q',
    });
    vpc.addResourceDesc('resource description test');
  }
}

export class ResourceMetadata extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, props);

    const vpc = new Vpc(this, 'ROS-VPC', {
      vpcName: 'VPC_Name',
      cidrBlock: '10.0.0.0/8',
      enableIpv6: false,
      description: 'This is the description of VPC',
      resourceGroupId: 'rg-acfm2xwmxvrzq6q',
    });
    vpc.setMetadata('k1', 'v1');
    vpc.setMetadata('k2', 'v2');
  }
}

export class ResourceDeletionPolicy extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, props);

    const vpc = new Vpc(this, 'ROS-VPC', {
      vpcName: 'VPC_Name',
      cidrBlock: '10.0.0.0/8',
      enableIpv6: false,
      description: 'This is the description of VPC',
      resourceGroupId: 'rg-acfm2xwmxvrzq6q',
    });

    vpc.applyRemovalPolicy(ros.RemovalPolicy.RETAIN);
  }
}

export class GetAttribute extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, props);

    const vpc = new Vpc(this, 'ROS-VPC', {
      vpcName: 'VPC_Name',
      cidrBlock: '10.0.0.0/8',
      enableIpv6: false,
      description: 'This is the description of VPC',
      resourceGroupId: 'rg-acfm2xwmxvrzq6q',
    });

    const vswitch = new VSwitch(this, 'ROS-VSwitch', {
      vpcId: vpc.attrVpcId,
      zoneId: 'cn-beijing-h',
      vSwitchName: 'VSwitch_Name',
      cidrBlock: '10.0.0.0/20',
      description: 'DescriptionData',
    });
  }
}

export class AddDependency extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, props);

    const vpc = new Vpc(this, 'ROS-VPC', {
      vpcName: 'VPC_Name',
      cidrBlock: '10.0.0.0/8',
      enableIpv6: false,
      description: 'This is the description of VPC',
      resourceGroupId: 'rg-acfm2xwmxvrzq6q',
    });

    const vswitch = new VSwitch(this, 'ROS-VSwitch', {
      vpcId: vpc.getAtt('VpcId'),
      zoneId: 'cn-beijing-h',
      vSwitchName: 'VSwitch_Name',
      cidrBlock: '10.0.0.0/20',
      description: 'DescriptionData',
    });

    vswitch.addDependency(vpc);
  }
}

export class AddCondition extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, props);
    const isProduction = new ros.RosParameter(this, 'env', {
      type: ros.RosParameterType.STRING,
      defaultValue: 'Production',
    });

    const isProd = new ros.RosCondition(this, 'IsProduction', {
      expression: ros.Fn.conditionEquals('Production', isProduction.valueAsString),
    });

    const vpc = new Vpc(this, 'ROS-VPC', {
      vpcName: 'VPC_Name',
      cidrBlock: '10.0.0.0/8',
      enableIpv6: false,
      description: 'This is the description of VPC',
      resourceGroupId: 'rg-acfm2xwmxvrzq6q',
    });

    vpc.addCondition(isProd);
  }
}
