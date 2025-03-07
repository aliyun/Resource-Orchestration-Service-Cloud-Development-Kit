import * as ros from '@alicloud/ros-cdk-core';
import { RosAccessGroup } from './dfs.generated';
export { RosAccessGroup as AccessGroupProperty };
/**
 * Properties for defining a `AccessGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dfs-accessgroup
 */
export interface AccessGroupProps {
    /**
     * Property accessGroupName: The Name of Access Group. The naming rules are as follows:
     * The value contains 6 to 100 characters.
     * Globally unique and cannot be an empty string.
     */
    readonly accessGroupName?: string | ros.IResolvable;
    /**
     * Property description: The description of the access_group.
     * The value contains 0 to 100 characters
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property networkType: The NetworkType of Access Group. Valid values: VPC.
     */
    readonly networkType?: string | ros.IResolvable;
}
/**
 * Represents a `AccessGroup`.
 */
export interface IAccessGroup extends ros.IResource {
    readonly props: AccessGroupProps;
    /**
     * Attribute AccessGroupId: The ID of the access_group.
     */
    readonly attrAccessGroupId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::DFS::AccessGroup`, which is used to create a permission group.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAccessGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dfs-accessgroup
 */
export declare class AccessGroup extends ros.Resource implements IAccessGroup {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: AccessGroupProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AccessGroupId: The ID of the access_group.
     */
    readonly attrAccessGroupId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: AccessGroupProps, enableResourcePropertyConstraint?: boolean);
}
