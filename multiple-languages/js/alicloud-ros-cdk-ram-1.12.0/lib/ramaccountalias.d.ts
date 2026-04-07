import * as ros from '@alicloud/ros-cdk-core';
import { RosRamAccountAlias } from './ram.generated';
export { RosRamAccountAlias as RamAccountAliasProperty };
/**
 * Properties for defining a `RamAccountAlias`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-ramaccountalias
 */
export interface RamAccountAliasProps {
    /**
     * Property accountAlias: The alias of the Alibaba Cloud account.
     * The alias must be 1 to 50 characters in length, and can contain lowercase letters,
     * digits, hyphens (-), periods (.) and underscores (_).
     * Note It cannot start or end with a hyphen (-).The default domain name cannot start or end with a
     * hyphen (-) and cannot have two consecutive hyphens (-).
     */
    readonly accountAlias: string | ros.IResolvable;
}
/**
 * Represents a `RamAccountAlias`.
 */
export interface IRamAccountAlias extends ros.IResource {
    readonly props: RamAccountAliasProps;
    /**
     * Attribute AccountAlias: The alias of the Alibaba Cloud account.
     */
    readonly attrAccountAlias: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::RAM::RamAccountAlias`, which is used to create an alias for an Alibaba Cloud account.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosRamAccountAlias`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-ramaccountalias
 */
export declare class RamAccountAlias extends ros.Resource implements IRamAccountAlias {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: RamAccountAliasProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AccountAlias: The alias of the Alibaba Cloud account.
     */
    readonly attrAccountAlias: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RamAccountAliasProps, enableResourcePropertyConstraint?: boolean);
}
