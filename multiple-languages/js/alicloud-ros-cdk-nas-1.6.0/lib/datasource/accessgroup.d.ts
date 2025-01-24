import * as ros from '@alicloud/ros-cdk-core';
import { RosAccessGroup } from './nas.generated';
export { RosAccessGroup as AccessGroupProperty };
/**
 * Properties for defining a `AccessGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-nas-accessgroup
 */
export interface AccessGroupProps {
    /**
     * Property accessGroupName: The name of the permission group.
     */
    readonly accessGroupName: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * Represents a `AccessGroup`.
 */
export interface IAccessGroup extends ros.IResource {
    readonly props: AccessGroupProps;
    /**
     * Attribute AccessGroupName: The name of the permission group.
     */
    readonly attrAccessGroupName: ros.IResolvable | string;
    /**
     * Attribute AccessGroupType: Permission group types, including VPC and Classic.
     */
    readonly attrAccessGroupType: ros.IResolvable | string;
    /**
     * Attribute Description: Permission group description information.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute MountTargetCount: The number of Mount points to which this permission group is applied.
     */
    readonly attrMountTargetCount: ros.IResolvable | string;
    /**
     * Attribute RuleCount: The number of permission group rules contained in this permission group.
     */
    readonly attrRuleCount: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::NAS::AccessGroup`, which is used to query the information about a permission group.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAccessGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-nas-accessgroup
 */
export declare class AccessGroup extends ros.Resource implements IAccessGroup {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: AccessGroupProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AccessGroupName: The name of the permission group.
     */
    readonly attrAccessGroupName: ros.IResolvable | string;
    /**
     * Attribute AccessGroupType: Permission group types, including VPC and Classic.
     */
    readonly attrAccessGroupType: ros.IResolvable | string;
    /**
     * Attribute Description: Permission group description information.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute MountTargetCount: The number of Mount points to which this permission group is applied.
     */
    readonly attrMountTargetCount: ros.IResolvable | string;
    /**
     * Attribute RuleCount: The number of permission group rules contained in this permission group.
     */
    readonly attrRuleCount: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AccessGroupProps, enableResourcePropertyConstraint?: boolean);
}
