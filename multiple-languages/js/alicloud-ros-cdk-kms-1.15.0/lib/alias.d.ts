import * as ros from '@alicloud/ros-cdk-core';
import { RosAlias } from './kms.generated';
export { RosAlias as AliasProperty };
/**
 * Properties for defining a `Alias`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-alias
 */
export interface AliasProps {
    /**
     * Property aliasName: The alias of the CMK.
     * The alias must be 1 to 255 characters in length and must contain the prefix
     * `alias\/`. The alias cannot be prefixed with the reserved word `alias\/acs`.
     */
    readonly aliasName: string | ros.IResolvable;
    /**
     * Property keyId: Globally unique identifier of the CMK.
     */
    readonly keyId: string | ros.IResolvable;
}
/**
 * Represents a `Alias`.
 */
export interface IAlias extends ros.IResource {
    readonly props: AliasProps;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::KMS::Alias`Creates an alias for a customer master key (CMK) in Key Management Service (KMS).
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAlias`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-alias
 */
export declare class Alias extends ros.Resource implements IAlias {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: AliasProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AliasProps, enableResourcePropertyConstraint?: boolean);
}
