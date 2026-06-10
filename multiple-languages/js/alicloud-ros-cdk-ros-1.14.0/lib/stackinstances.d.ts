import * as ros from '@alicloud/ros-cdk-core';
import { RosStackInstances } from './ros.generated';
export { RosStackInstances as StackInstancesProperty };
/**
 * Properties for defining a `StackInstances`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ros-stackinstances
 */
export interface StackInstancesProps {
    /**
     * Property regionIds: undefined
     */
    readonly regionIds: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property stackGroupName: undefined
     */
    readonly stackGroupName: string | ros.IResolvable;
    /**
     * Property accountIds: undefined
     */
    readonly accountIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property deploymentTargets: undefined
     */
    readonly deploymentTargets?: RosStackInstances.DeploymentTargetsProperty | ros.IResolvable;
    /**
     * Property disableRollback: undefined
     */
    readonly disableRollback?: boolean | ros.IResolvable;
    /**
     * Property operationDescription: undefined
     */
    readonly operationDescription?: string | ros.IResolvable;
    /**
     * Property operationPreferences: undefined
     */
    readonly operationPreferences?: RosStackInstances.OperationPreferencesProperty | ros.IResolvable;
    /**
     * Property parameterOverrides: undefined
     */
    readonly parameterOverrides?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * Property retainStacks: undefined
     */
    readonly retainStacks?: boolean | ros.IResolvable;
    /**
     * Property timeoutInMinutes: undefined
     */
    readonly timeoutInMinutes?: number | ros.IResolvable;
}
/**
 * Represents a `StackInstances`.
 */
export interface IStackInstances extends ros.IResource {
    readonly props: StackInstancesProps;
    /**
     * Attribute LastOperationId: undefined
     */
    readonly attrLastOperationId: ros.IResolvable | string;
    /**
     * Attribute Stacks: undefined
     */
    readonly attrStacks: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ROS::StackInstances`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosStackInstances`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ros-stackinstances
 */
export declare class StackInstances extends ros.Resource implements IStackInstances {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: StackInstancesProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute LastOperationId: undefined
     */
    readonly attrLastOperationId: ros.IResolvable | string;
    /**
     * Attribute Stacks: undefined
     */
    readonly attrStacks: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: StackInstancesProps, enableResourcePropertyConstraint?: boolean);
}
