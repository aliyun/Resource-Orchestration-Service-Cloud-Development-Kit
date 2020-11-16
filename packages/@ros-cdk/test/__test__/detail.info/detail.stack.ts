import * as ros from '@ros-cdk/core'

export class VersionStack extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, props);
  }
}

export class VersionAndDescStack extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, props);

    const description = new ros.RosInfo(
      this,
      ros.RosInfo.description,
      'The description of the stack is defined from here.',
    );
  }
}

export class MetadataVersionDesc extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, props);
    const metaData = new ros.RosInfo(this, ros.RosInfo.metadata, {
      key1: 'v1',
      key2: 'v2',
    });
  }
}
