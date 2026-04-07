const ros = require('@alicloud/ros-cdk-core');

class %name.PascalCased%Stack extends ros.Stack {
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
  }
}

module.exports = { %name.PascalCased%Stack }
