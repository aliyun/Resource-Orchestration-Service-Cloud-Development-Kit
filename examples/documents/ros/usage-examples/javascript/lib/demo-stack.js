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
    const vpc = new ecs.Vpc(this, 'vpc-from-ros-cdk', {
      vpcName: 'test-ros-cdk-javascript',
      cidrBlock: '10.0.0.0/8',
      description: 'This is ros cdk test',
    });

    new ecs.VSwitch(this, 'vsw-from-ros-cdk', {
      vSwitchName: 'test-ros-cdk-javascript',
      cidrBlock: '10.0.0.0/16',
      zoneId: 'cn-hangzhou-i',
      vpcId: vpc.ref,
    });
  }
}

module.exports = { DemoStack }
