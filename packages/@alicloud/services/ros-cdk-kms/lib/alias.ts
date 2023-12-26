import * as ros from '@alicloud/ros-cdk-core';
import { RosAlias } from './kms.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAlias as AliasProperty };

/**
 * Properties for defining a `Alias`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-alias
 */
export interface AliasProps {

    /**
     * Property aliasName: - The display name of the key. You can use the alias to call APIs such as Encrypt, GenerateDataKey, and DescribeKey. - Not including the prefix, the minimum length of an alias is 1 and the maximum length is 255. - The prefix alias\/ must be included.
     */
    readonly aliasName: string | ros.IResolvable;

    /**
     * Property keyId: Globally unique identifier of the CMK.
     */
    readonly keyId: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::KMS::Alias`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAlias`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-alias
 */
export class Alias extends ros.Resource {

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AliasProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosAlias = new RosAlias(this, id,  {
            aliasName: props.aliasName,
            keyId: props.keyId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAlias;
    }
}
