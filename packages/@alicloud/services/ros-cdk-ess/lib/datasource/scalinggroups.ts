import * as ros from '@alicloud/ros-cdk-core';
import { RosScalingGroups } from './ess.generated';
// Generated from the AliCloud ROS Resource Specification
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
     * Property scalingGroupIds: The ID of scaling group that you want to query.Valid values: 1 to 20. The IDs of inactive scaling groups are not displayed in the query results, and no error is reported.
     */
    readonly scalingGroupIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property scalingGroupNames: The name of scaling group that you want to query. Valid values: 1 to 20. The names of inactive scaling groups are not displayed in the query results, and no error is reported.
     */
    readonly scalingGroupNames?: Array<string | ros.IResolvable> | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ESS::ScalingGroups`, which is used to query scaling groups.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosScalingGroups`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ess-scalinggroups
 */
export class ScalingGroups extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: ScalingGroupsProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ScalingGroupIds: The list of scaling group IDs.
     */
    public readonly attrScalingGroupIds: ros.IResolvable;

    /**
     * Attribute ScalingGroups: The list of scaling groups.
     */
    public readonly attrScalingGroups: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ScalingGroupsProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

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
