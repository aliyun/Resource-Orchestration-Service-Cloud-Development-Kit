import * as ros from '@alicloud/ros-cdk-core';
import { RosAccessGroups } from './nas.generated';
export { RosAccessGroups as AccessGroupsProperty };
/**
 * Properties for defining a `AccessGroups`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-nas-accessgroups
 */
export interface AccessGroupsProps {
    /**
     * Property accessGroupName: The name of the permission group.
     */
    readonly accessGroupName?: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * Represents a `AccessGroups`.
 */
export interface IAccessGroups extends ros.IResource {
    readonly props: AccessGroupsProps;
    /**
     * Attribute AccessGroupNames: The list of access group names.
     */
    readonly attrAccessGroupNames: ros.IResolvable | string;
    /**
     * Attribute AccessGroups: The list of access groups.
     */
    readonly attrAccessGroups: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::NAS::AccessGroups`, which is used to query the information about permission groups.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAccessGroups`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-nas-accessgroups
 */
export declare class AccessGroups extends ros.Resource implements IAccessGroups {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: AccessGroupsProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AccessGroupNames: The list of access group names.
     */
    readonly attrAccessGroupNames: ros.IResolvable | string;
    /**
     * Attribute AccessGroups: The list of access groups.
     */
    readonly attrAccessGroups: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: AccessGroupsProps, enableResourcePropertyConstraint?: boolean);
}
