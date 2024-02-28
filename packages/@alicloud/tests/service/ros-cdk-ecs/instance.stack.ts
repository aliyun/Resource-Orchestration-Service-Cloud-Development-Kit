import * as ros from '@alicloud/ros-cdk-core'
import * as ecs from '@alicloud/ros-cdk-ecs';
export class InstanceTest extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, props);
    new ros.RosInfo(
      this,
      ros.RosInfo.description,
      'Create a set of ECS instances of the same configuration under the newly created VPC, VSwitch, and security groups.',
    );
    const imageId = new ros.RosParameter(this, 'ImageId', {
      defaultValue: 'centos_7',
      type: ros.RosParameterType.STRING,
      description: `Instance Image ID. see detail: <b><a href='https://www.alibabacloud.com/help/doc-detail/112977.html' target='_blank'><font color='blue'>Find the mirror</font></a></b>`,
      label: 'Image ID',
    });

    const instanceType = new ros.RosParameter(this, 'InstanceType', {
      type: ros.RosParameterType.STRING,
      description: `Fill in specifications that can be used under the VSwitch availability zone;</b></font><br>general specifications：<font color='red'><b>ecs.c5.large</b></font><br>note: a few zones do not support general specifications<br>see detail: <a href='https://www.alibabacloud.com/help/en/doc-detail/25378.html' target='_blank'><b><font color='blue'>Instance Specification Family</font></a></b>`,
      label: 'Instance Type',
      defaultValue: 'ecs.ic5.large',
    });

    const ecsVpc = new ecs.Vpc(this, 'EcsVpc', {
      vpcName: 'myVpc',
      cidrBlock: '192.168.0.0/16',
    });

    const ecsVSwitch = new ecs.VSwitch(this, 'EcsVSwitch', {
      vSwitchName: 'mySWitch',
      vpcId: ecsVpc.attrVpcId,
      cidrBlock: '192.168.1.0/24',
      zoneId: 'cn-beijing-h',
    });
    const Instance = new ecs.Instance(this, 'Instance', {
      vSwitchId: ecsVSwitch.attrVSwitchId,
      vpcId: ecsVpc.attrVpcId,
      imageId: imageId.valueAsString,
      instanceType: instanceType.valueAsString,
      password: 'Wksjdfs123!@#',
    });
  }
}

export class TestAutoCreateDependencies extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, props);

    const imageId = new ros.RosParameter(this, 'ImageId', {
      defaultValue: 'centos_7',
      type: ros.RosParameterType.STRING,
      label: 'Image ID',
    });

    const instanceType = new ros.RosParameter(this, 'InstanceType', {
      type: ros.RosParameterType.STRING,
      label: 'Instance Type',
      defaultValue: 'ecs.ic5.large',
    });

    const Instance = new ecs.Instance(this, 'Instance', {
      imageId: imageId,
      instanceType: instanceType
    });

    Instance.autoCreateDependencies('cn-beijing-h');
  }
}


export class TestAddSecurityGroup extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, props);

    const imageId = new ros.RosParameter(this, 'ImageId', {
      defaultValue: 'centos_7',
      type: ros.RosParameterType.STRING,
      label: 'Image ID',
    });

    const instanceType = new ros.RosParameter(this, 'InstanceType', {
      type: ros.RosParameterType.STRING,
      label: 'Instance Type',
      defaultValue: 'ecs.ic5.large',
    });

    const vpc = new ecs.Vpc(this, 'vpc');

    const originSecurityGroup = new ecs.SecurityGroup(this, 'originSecurityGroup', {
      vpcId: vpc.attrVpcId,
    });

    const Instance = new ecs.Instance(this, 'Instance', {
      imageId: imageId,
      instanceType: instanceType,
      autoRenewPeriod: 2,
      // securityGroupId: 'sg-1234567890',
      securityGroupIds: [
          originSecurityGroup.attrSecurityGroupId,
          'sg-9876543210'
      ]
    });

    Instance.addSecurityGroups('sg-1234567890');

    const securityGroup = new ecs.SecurityGroup(this, 'securityGroup', {
      vpcId: vpc.attrVpcId,
      securityGroupName: 'mySecurityGroup',
      description: 'mySecurityGroup',
    });

    Instance.addSecurityGroups(securityGroup, 'sg-99999999');
  }
}

export class TestAddSecurityGroupWithResolvableObject extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, props);

    const imageId = new ros.RosParameter(this, 'ImageId', {
      defaultValue: 'centos_7',
      type: ros.RosParameterType.STRING,
      label: 'Image ID',
    });

    const instanceType = new ros.RosParameter(this, 'InstanceType', {
      type: ros.RosParameterType.STRING,
      label: 'Instance Type',
      defaultValue: 'ecs.ic5.large',
    });

    const vpc = new ecs.Vpc(this, 'vpc');

    const originSecurityGroup = new ecs.SecurityGroup(this, 'originSecurityGroup', {
      vpcId: vpc.attrVpcId,
    });

    const Instance = new ecs.Instance(this, 'Instance', {
      imageId: imageId,
      instanceType: instanceType,
      autoRenewPeriod: 2,
      // securityGroupId: 'sg-1234567890',
      securityGroupIds: ros.Fn.listMerge([[originSecurityGroup.attrSecurityGroupId], ['sg-9876543210']])
    });

    Instance.addSecurityGroups('sg-1234567890');

    const securityGroup = new ecs.SecurityGroup(this, 'securityGroup', {
      vpcId: vpc.attrVpcId,
      securityGroupName: 'mySecurityGroup',
      description: 'mySecurityGroup',
    });

    Instance.addSecurityGroups(securityGroup, 'sg-99999999');
  }
}

export class TestAddUserData extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, props);

    const imageId = new ros.RosParameter(this, 'ImageId', {
      defaultValue: 'centos_7',
      type: ros.RosParameterType.STRING,
      label: 'Image ID',
    });

    const instanceType = new ros.RosParameter(this, 'InstanceType', {
      type: ros.RosParameterType.STRING,
      label: 'Instance Type',
      defaultValue: 'ecs.ic5.large',
    });

    const beginCommand = new ros.RosParameter(this, 'BeginCommand', {
      type: ros.RosParameterType.STRING,
      label: 'Command',
      defaultValue: '#!/bin/bash',
    });

    const Instance = new ecs.Instance(this, 'Instance', {
      imageId: imageId,
      instanceType: instanceType,
      userData: beginCommand
    });

    Instance.addUserDataCommands('echo "hello world"',
        ros.Fn.sub('echo "This command is created by ${stackName}."', {
          stackName: this.stackName
        } ));

    Instance.addUserDataCommands('echo "bye world"');
  }
}