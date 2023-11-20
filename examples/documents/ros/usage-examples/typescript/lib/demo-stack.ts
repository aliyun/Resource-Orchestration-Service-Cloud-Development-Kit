import * as ros from '@alicloud/ros-cdk-core';
import * as ecs from '@alicloud/ros-cdk-ecs';

export class DemoStack extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, props);
    new ros.RosInfo(this, ros.RosInfo.description, "This is the simple ros cdk app example.");
    // The code that defines your stack goes here
    new ecs.Vpc(this, 'vpc-from-ros-cdk', {
      vpcName: 'test-ros-cdk',
      cidrBlock: '10.0.0.0/8',
      description: 'This is ros cdk test'
   });
  }
}