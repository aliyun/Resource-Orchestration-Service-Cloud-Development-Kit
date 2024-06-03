import { Construct } from "../construct-compat";
import {RosParameter, RosParameterType} from '../ros-parameter';

export class FileAssetParameters extends Construct {
  public readonly bucketNameParameter: RosParameter;
  public readonly objectKeyParameter: RosParameter;
  public readonly artifactHashParameter: RosParameter;

  constructor(scope: Construct, id: string) {
    super(scope, id);

    // add parameters for OSS bucket and object key. those will be set by
    // the toolkit or by CI/CD when the stack is deployed and will include
    // the name of the bucket and the object key where the code lives.

    this.bucketNameParameter = new RosParameter(this, 'OSSBucket', {
      type: RosParameterType.STRING,
      description: `OSS bucket for asset "${id}"`,
    });

    this.objectKeyParameter = new RosParameter(this, 'OSSObjectKey', {
      type: RosParameterType.STRING,
      description: `OSS object key for asset "${id}"`,
    });

    this.artifactHashParameter = new RosParameter(this, 'ArtifactHash', {
      type: RosParameterType.STRING,
      description: `Artifact hash for asset "${id}"`,
    });
  }
}
