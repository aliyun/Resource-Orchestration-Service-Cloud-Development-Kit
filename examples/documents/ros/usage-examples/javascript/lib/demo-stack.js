const ros = require('@alicloud/ros-cdk-core');
const ecs = require('@alicloud/ros-cdk-ecs');

class DemoStack extends ros.Stack {
  /**
   *
   * @param {ros.Construct} scope
   * @param {string} id
   * @param {ros.StackProps} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);
    new ros.RosInfo(this, ros.RosInfo.description, "This is the simple ros cdk app example.");
    // The code that defines your stack goes here
    new ecs.Vpc(this, 'vpc-from-ros-cdk', {
      vpcName: 'test-ros-cdk-javascript',
      cidrBlock: '10.0.0.0/8',
      description: 'This is ros cdk test'
   });
  }
}

module.exports = { DemoStack }