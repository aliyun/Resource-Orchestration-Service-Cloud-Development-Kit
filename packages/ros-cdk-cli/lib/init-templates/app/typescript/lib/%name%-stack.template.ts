import * as ros from 'ros-cdk-zero/lib/core';

export class %name.PascalCased%Stack extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, props);
    new ros.RosInfo(this, ros.InfoType.DESCRIPTION, "This is the simple ros cdk app example.");
    // The code that defines your stack goes here
  }
}
