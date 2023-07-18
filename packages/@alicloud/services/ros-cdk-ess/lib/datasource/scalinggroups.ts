import * as ros from '@alicloud/ros-cdk-core';
import { RosScalingGroups } from './ess.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosScalingGroups as ScalingGroupsProperty };

/**
 * Properties for defining a `DATASOURCE::ESS::ScalingGroups`
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
     * Property scalingGroupIds: The ID of scaling group that you want to query.Valid values: 1 to 20. The IDs of inactive scaling groups are not displayed in the query results, and no error is reported.
     */
    readonly scalingGroupIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property scalingGroupNames: The name of scaling group that you want to query. Valid values: 1 to 20. The names of inactive scaling groups are not displayed in the query results, and no error is reported.
     */
    readonly scalingGroupNames?: Array<string | ros.IResolvable> | ros.IResolvable;
}

/**
 * A ROS resource type:  `DATASOURCE::ESS::ScalingGroups`
 */
export class ScalingGroups extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute ScalingGroupIds: The list of scaling group IDs.
     */
    public readonly attrScalingGroupIds: ros.IResolvable;

    /**
     * Attribute ScalingGroups: The list of scaling groups.
     */
    public readonly attrScalingGroups: ros.IResolvable;

    /**
     * Create a new `DATASOURCE::ESS::ScalingGroups`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ScalingGroupsProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosScalingGroups = new RosScalingGroups(this, id,  {
            scalingGroupNames: props.scalingGroupNames,
            groupType: props.groupType === undefined || props.groupType === null ? 'ECS' : props.groupType,
            scalingGroupIds: props.scalingGroupIds,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosScalingGroups;
        this.attrScalingGroupIds = rosScalingGroups.attrScalingGroupIds;
        this.attrScalingGroups = rosScalingGroups.attrScalingGroups;
    }
}
