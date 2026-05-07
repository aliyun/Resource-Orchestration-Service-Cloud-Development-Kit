import * as ros from '@alicloud/ros-cdk-core';
import { RosUserGroup } from './bastionhost.generated';
export { RosUserGroup as UserGroupProperty };
/**
 * Properties for defining a `UserGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-usergroup
 */
export interface UserGroupProps {
    /**
     * Property instanceId: The ID of the BastionHost instance.
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * Property userGroupName: The name of the user group.
     */
    readonly userGroupName: string | ros.IResolvable;
    /**
     * Property comment: The comment of the user group.
     */
    readonly comment?: string | ros.IResolvable;
}
/**
 * Represents a `UserGroup`.
 */
export interface IUserGroup extends ros.IResource {
    readonly props: UserGroupProps;
    /**
     * Attribute UserGroupId: The ID of the user group.
     */
    readonly attrUserGroupId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::BastionHost::UserGroup`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosUserGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-usergroup
 */
export declare class UserGroup extends ros.Resource implements IUserGroup {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: UserGroupProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute UserGroupId: The ID of the user group.
     */
    readonly attrUserGroupId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: UserGroupProps, enableResourcePropertyConstraint?: boolean);
}
