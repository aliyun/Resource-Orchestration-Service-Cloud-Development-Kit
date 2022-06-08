import * as ros from '@alicloud/ros-cdk-core';
import { RosStackGroup } from './ros.generated';
export { RosStackGroup as StackGroupProperty };
/**
 * Properties for defining a `ALIYUN::ROS::StackGroup`
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
 * A ROS resource type:  `ALIYUN::ROS::StackGroup`
 */
export declare class StackGroup extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute StackGroupId: undefined
     */
    readonly attrStackGroupId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::ROS::StackGroup`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: StackGroupProps, enableResourcePropertyConstraint?: boolean);
}
//# sourceMappingURL=stackgroup.d.ts.map