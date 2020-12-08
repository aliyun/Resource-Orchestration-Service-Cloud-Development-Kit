import * as ros from '@alicloud/ros-cdk-core'
import { Vpc } from '@alicloud/ecs';

export class noTypeParameter extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, props);

    const firstPara = new ros.RosParameter(this, 'parameter', {
      description: 'VPC name',
    });

    const vpc = new Vpc(this, 'ROS-VPC', {
      vpcName: firstPara.valueAsString,
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

export class stringParameter extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, props);

    const firstPara = new ros.RosParameter(this, 'parameter', {
      type: ros.RosParameterType.STRING,
      description: 'VPC name',
    });

    const vpc = new Vpc(this, 'ROS-VPC', {
      vpcName: firstPara.valueAsString,
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

export class booleanParameter extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, props);

    const para = new ros.RosParameter(this, 'parameter', {
      type: ros.RosParameterType.BOOLEAN,
      description: 'enableIpv6(boolean type)',
    });

    const vpc = new Vpc(this, 'ROS-VPC', {
      vpcName: 'nameOfVPC',
      cidrBlock: '10.0.0.0/8',
      enableIpv6: para.valueAsBoolean,
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

export class CommaDelimitedListFunctionStack extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, props);

    const cidrList = new ros.RosParameter(this, 'cidrList', {
      type: ros.RosParameterType.COMMAD_ELIMITED_LIST,
    });

    const vpc = new Vpc(this, 'ROS-VPC', {
      vpcName: 'vpcName1',
      cidrBlock: ros.Fn.select(1, cidrList.valueAsList),
      enableIpv6: false,
      description: 'This is the description of VPC',
      resourceGroupId: 'rg-acfm2xwmxvrzq6q',
    });
  }
}

export class numberParameter extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, props);

    const inputNumber = new ros.RosParameter(this, 'inputNumber', {
      type: ros.RosParameterType.NUMBER,
      minValue: 10,
      maxValue: 20,
    });

    const output = new ros.RosOutput(this, 'result', {
      value: inputNumber.valueAsNumber,
      description: 'result',
    });
  }
}

export class jsonParameter extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, props);

    const para = new ros.RosParameter(this, 'parameter', {
      type: ros.RosParameterType.JSON,
      description: '',
    });

    const vpc = new Vpc(this, 'ROS-VPC', {
      vpcName: 'nameOfVPC',
      description: 'This is the description of VPC',
      resourceGroupId: 'rg-acfm2xwmxvrzq6q',
      tags: para.valueAsAny,
    });
  }
}
