import * as ros from '@alicloud/ros-cdk-core';
import { RosStackGroup } from './ros.generated';
export { RosStackGroup as StackGroupProperty };
/**
 * Properties for defining a `StackGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ros-stackgroup
 */
export interface StackGroupProps {
    /**
     * Property stackGroupName: undefined
     */
    readonly stackGroupName: string | ros.IResolvable;
    /**
     * Property administrationRoleName: undefined
     */
    readonly administrationRoleName?: string | ros.IResolvable;
    /**
     * Property autoDeployment: undefined
     */
    readonly autoDeployment?: RosStackGroup.AutoDeploymentProperty | ros.IResolvable;
    /**
     * Property description: undefined
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property dynamicTemplateBody: undefined
     */
    readonly dynamicTemplateBody?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * Property executionRoleName: undefined
     */
    readonly executionRoleName?: string | ros.IResolvable;
    /**
     * Property parameters: undefined
     */
    readonly parameters?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * Property permissionModel: undefined
     */
    readonly permissionModel?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: undefined
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property templateBody: undefined
     */
    readonly templateBody?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * Property templateId: undefined
     */
    readonly templateId?: string | ros.IResolvable;
    /**
     * Property templateUrl: undefined
     */
    readonly templateUrl?: string | ros.IResolvable;
    /**
     * Property templateVersion: undefined
     */
    readonly templateVersion?: string | ros.IResolvable;
}
/**
 * Represents a `StackGroup`.
 */
export interface IStackGroup extends ros.IResource {
    readonly props: StackGroupProps;
    /**
     * Attribute StackGroupId: undefined
     */
    readonly attrStackGroupId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ROS::StackGroup`, which is used to create a stack group.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosStackGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ros-stackgroup
 */
export declare class StackGroup extends ros.Resource implements IStackGroup {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: StackGroupProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute StackGroupId: undefined
     */
    readonly attrStackGroupId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: StackGroupProps, enableResourcePropertyConstraint?: boolean);
}
