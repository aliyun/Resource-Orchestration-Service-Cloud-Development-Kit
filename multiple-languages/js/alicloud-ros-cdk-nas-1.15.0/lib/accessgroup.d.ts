import * as ros from '@alicloud/ros-cdk-core';
import { RosAccessGroup } from './nas.generated';
export { RosAccessGroup as AccessGroupProperty };
/**
 * Properties for defining a `AccessGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-accessgroup
 */
export interface AccessGroupProps {
    /**
     * Property accessGroupName: The name of the permission group.
     * Limits:
     * *   The name must be 3 to 64 characters in length.
     * *   The name must start with a letter and can contain letters, digits,
     * underscores (_), and hyphens (-).
     * *   The name must be different from the name of the default permission group.
     * The default permission group for virtual private clouds (VPCs) is named
     * DEFAULT_VPC_GROUP_NAME.
     */
    readonly accessGroupName: string | ros.IResolvable;
    /**
     * Property accessGroupType: Permission group type, including the Vpc and Classic types
     */
    readonly accessGroupType: string | ros.IResolvable;
    /**
     * Property description: The description of the permission group.
     * Limits:
     * *   By default, the description of a permission group is the same as the name of
     * the permission group. The description must be 2 to 128 characters in length.
     * *   The name must start with a letter and cannot start with `http:\/\/` or
     * `https:\/\/`.
     * *   The description can contain digits, colons (:), underscores (_), and hyphens
     * (-).
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property fileSystemType: File system type.
     * Values: standard (default), extreme
     */
    readonly fileSystemType?: string | ros.IResolvable;
}
/**
 * Represents a `AccessGroup`.
 */
export interface IAccessGroup extends ros.IResource {
    readonly props: AccessGroupProps;
    /**
     * Attribute AccessGroupName: Permission group name
     */
    readonly attrAccessGroupName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::NAS::AccessGroup`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAccessGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-accessgroup
 */
export declare class AccessGroup extends ros.Resource implements IAccessGroup {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: AccessGroupProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AccessGroupName: Permission group name
     */
    readonly attrAccessGroupName: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AccessGroupProps, enableResourcePropertyConstraint?: boolean);
}
