import { Construct } from "../construct-compat";
import { RosParameter } from '../ros-parameter';
export declare class FileAssetParameters extends Construct {
    readonly bucketNameParameter: RosParameter;
    readonly objectKeyParameter: RosParameter;
    readonly artifactHashParameter: RosParameter;
    constructor(scope: Construct, id: string);
}
