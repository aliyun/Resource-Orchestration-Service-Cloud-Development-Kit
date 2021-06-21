import * as ros from '@alicloud/ros-cdk-core';
import { RosRamAccountAlias } from './ram.generated';
export { RosRamAccountAlias as RamAccountAliasProperty };
/**
 * Properties for defining a `ALIYUN::RAM::RamAccountAlias`
 */
export interface RamAccountAliasProps {
    /**
     * Property accountAlias: The alias of the Alibaba Cloud account.
     * The alias must be 3 to 32 characters in length, and can contain lowercase letters,
     * digits, and hyphens (-).
     * Note It cannot start or end with a hyphen (-), and cannot contain consecutive hyphens (-).
     */
    readonly accountAlias: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::RAM::RamAccountAlias`
 */
export declare class RamAccountAlias extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute AccountAlias: The alias of the Alibaba Cloud account.
     */
    readonly attrAccountAlias: ros.IResolvable;
    /**
     * Create a new `ALIYUN::RAM::RamAccountAlias`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RamAccountAliasProps, enableResourcePropertyConstraint?: boolean);
}
