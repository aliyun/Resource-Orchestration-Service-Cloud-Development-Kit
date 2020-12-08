import { Vpc } from '@alicloud/ecs';
import * as ros from '@alicloud/ros-cdk-core'

class MyNestedStack extends ros.NestedStack {
  constructor(scope: ros.Construct, id: string, props?: ros.NestedStackProps) {
    super(scope, id, props);
    const para = new ros.RosParameter(this, 'forNestedStack', {
      type: ros.RosParameterType.STRING,
    });

    const vpcName = new ros.RosParameter(this, 'vpcName', {
      type: ros.RosParameterType.STRING,
    });
    const vpc = new Vpc(this, 'ROS-VPC', {
      vpcName: vpcName.valueAsString,
      cidrBlock: '10.0.0.0/8',
      enableIpv6: false,
      description: 'This is the description of VPC',
      resourceGroupId: 'rg-acfm2xwmxvrzq6q',
      tags: [
        {
          key: 'KeyExample' + para.valueAsString,
          value: 'ValueExample',
        },
      ],
    });
  }
}

export class UseParameterDefineNestedResource extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, props);
    new MyNestedStack(this, 'Nested1', {
      parameters: {
        forNestedStack: 'valueForNestedStackResources',
        vpcName: 'vpcNameExample',
      },
      timeout: 11,
    });
  }
}

export class UseFunctionDefineNestedResource extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, props);
    const nestedStack = new MyNestedStack(this, 'Nested1', {
      timeout: 11,
    });
    nestedStack.setParameter('forNestedStack', 'valueForNestedStackResources');
    nestedStack.setParameter('vpcName', 'vpcNameExample');
  }
}

export class UseUrlDefineNestedResource extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, props);
    const nestedStack = new ros.NestedStack(this, 'Nested1', {
      timeout: 11,
      templateUrl: 'https://www.aliyun.com/',
      parameters: {
        KeyExample: 'ValueExample',
      },
    });
  }
}

class Level1NestedStack extends ros.NestedStack {
  constructor(scope: ros.Construct, id: string, props?: ros.NestedStackProps) {
    super(scope, id, props);
    const vpc = new Vpc(this, 'ROS-VPC', {
      vpcName: 'vpcName',
      cidrBlock: '10.0.0.0/8',
    });
  }
}

class Level2NestedStack extends ros.NestedStack {
  constructor(scope: ros.Construct, id: string, props?: ros.NestedStackProps) {
    super(scope, id, props);
    const nestedStack = new Level1NestedStack(this, 'Nested2');
  }
}

class Level3NestedStack extends ros.NestedStack {
  constructor(scope: ros.Construct, id: string, props?: ros.NestedStackProps) {
    super(scope, id, props);
    const nestedStack = new Level2NestedStack(this, 'Nested3');
  }
}

class Level4NestedStack extends ros.NestedStack {
  constructor(scope: ros.Construct, id: string, props?: ros.NestedStackProps) {
    super(scope, id, props);
    const nestedStack = new Level3NestedStack(this, 'Nested4');
  }
}

export class Level5NestedStack extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, props);
    const nestedStack = new Level4NestedStack(this, 'Nested5');
  }
}
