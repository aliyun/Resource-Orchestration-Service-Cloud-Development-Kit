import * as ros from '@alicloud/ros-cdk-core';
import { RosAlias } from './kms.generated';
export { RosAlias as AliasProperty };
/**
 * Properties for defining a `ALIYUN::KMS::Alias`
 */
export interface AliasProps {
    /**
     * @Property aliasName: - The display name of the key. You can use the alias to call APIs such as Encrypt, GenerateDataKey, and DescribeKey. - Not including the prefix, the minimum length of an alias is 1 and the maximum length is 255. - The prefix alias/ must be included.
     */
    readonly aliasName: string;
    /**
     * @Property keyId: Globally unique identifier of the CMK.
     */
    readonly keyId: string;
}
/**
 * A ROS resource type:  `ALIYUN::KMS::Alias`
 */
export declare class Alias extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Create a new `ALIYUN::KMS::Alias`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AliasProps, enableResourcePropertyConstraint?: boolean);
}
