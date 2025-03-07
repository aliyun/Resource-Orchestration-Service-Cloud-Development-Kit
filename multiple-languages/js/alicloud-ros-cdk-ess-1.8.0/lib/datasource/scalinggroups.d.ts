import * as ros from '@alicloud/ros-cdk-core';
import { RosScalingGroups } from './ess.generated';
export { RosScalingGroups as ScalingGroupsProperty };
/**
 * Properties for defining a `ScalingGroups`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ess-scalinggroups
 */
export interface ScalingGroupsProps {
    /**
     * Property groupType: The type of instances that are managed by the scaling group. Valid values:
     * ECS: the Elastic Compute Service (ECS) instances
     * ECI: the elastic container instances
     * Default value: ECS.
     */
    readonly groupType?: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
    /**
     * Property scalingGroupIds: The ID of scaling group that you want to query.Valid values: 1 to 20. The IDs of inactive scaling groups are not displayed in the query results, and no error is reported.
     */
    readonly scalingGroupIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property scalingGroupNames: The name of scaling group that you want to query. Valid values: 1 to 20. The names of inactive scaling groups are not displayed in the query results, and no error is reported.
     */
    readonly scalingGroupNames?: Array<string | ros.IResolvable> | ros.IResolvable;
}
/**
 * Represents a `ScalingGroups`.
 */
export interface IScalingGroups extends ros.IResource {
    readonly props: ScalingGroupsProps;
    /**
     * Attribute ScalingGroupIds: The list of scaling group IDs.
     */
    readonly attrScalingGroupIds: ros.IResolvable | string;
    /**
     * Attribute ScalingGroups: The list of scaling groups.
     */
    readonly attrScalingGroups: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ESS::ScalingGroups`, which is used to query scaling groups.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosScalingGroups`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ess-scalinggroups
 */
export declare class ScalingGroups extends ros.Resource implements IScalingGroups {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ScalingGroupsProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ScalingGroupIds: The list of scaling group IDs.
     */
    readonly attrScalingGroupIds: ros.IResolvable | string;
    /**
     * Attribute ScalingGroups: The list of scaling groups.
     */
    readonly attrScalingGroups: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: ScalingGroupsProps, enableResourcePropertyConstraint?: boolean);
}
