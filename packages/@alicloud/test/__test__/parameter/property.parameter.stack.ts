import * as ros from '@alicloud/ros-cdk-core'
import { Vpc, VSwitch } from '@alicloud/ecs';

export class parameterWithManyProperties extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, props);

    const firstPara = new ros.RosParameter(this, 'parameter', {
      type: ros.RosParameterType.STRING,
      description: 'VSwtich zone ID',
      associationProperty: ros.RosParameter.AssociationProperty.ZONE_ID,
      minLength: 5,
      maxLength: 20,
      noEcho: false,
      confirm: false,
      label: 'VPC Name Label',
    });

    const vpc = new Vpc(this, 'ROS-VPC', {
      vpcName: 'VPC_name',
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
      vpcId: vpc.getAtt('VpcId'),
      zoneId: firstPara.valueAsString,
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

export class parameterWithConstrain extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, props);

    const firstPara = new ros.RosParameter(this, 'parameter', {
      type: ros.RosParameterType.STRING,
      description: 'VPC name',
      allowedPattern: '[a-zA-Z0-9]{6,}',
      constraintDescription: 'The min length of vpc name is 6 and it should be uppercase, lowercase letters or number',
    });

    const vpc = new Vpc(this, 'ROS-VPC', {
      vpcName: firstPara.valueAsString,
      cidrBlock: '10.0.0.0/8',
      enableIpv6: false,
      description: 'This is the description of VPC',
      resourceGroupId: 'rg-acfm2xwmxvrzq6q',
    });
  }
}

export class invalidMinLength extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, props);

    const para = new ros.RosParameter(this, 'parameter', {
      type: ros.RosParameterType.STRING,
      description: 'the subnet mask of cidrBlock',
      minLength: 12,
      maxLength: 4,
    });
  }
}

export class invalidMinValue extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, props);

    const para = new ros.RosParameter(this, 'parameter', {
      type: ros.RosParameterType.NUMBER,
      description: 'the subnet mask of cidrBlock',
      minValue: 12,
      maxValue: 4,
    });
  }
}

export class invalidAssociationProperty extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, props);

    const para = new ros.RosParameter(this, 'parameter', {
      type: ros.RosParameterType.NUMBER,
      description: 'the subnet mask of cidrBlock',
      associationProperty: 'theWrongProperty',
    });
  }
}
