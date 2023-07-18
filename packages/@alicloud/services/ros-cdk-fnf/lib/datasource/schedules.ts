import * as ros from '@alicloud/ros-cdk-core';
import { RosSchedules } from './fnf.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosSchedules as SchedulesProperty };

/**
 * Properties for defining a `DATASOURCE::FNF::Schedules`
 */
export interface SchedulesProps {

    /**
     * Property flowName: The name of the flow that is bound to the time-based schedule. 
     * The name is unique within the region and cannot be modified after the time-based schedule is created. Valid values:
     * The name can contain letters, digits, underscores (_), and hyphens (-).
     * The name must start with a letter or an underscore (_).
     * The name is case-sensitive.
     * The name must be 1 to 128 characters in length.
     */
    readonly flowName: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `DATASOURCE::FNF::Schedules`
 */
export class Schedules extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute ScheduleNames: The list of schedule names.
     */
    public readonly attrScheduleNames: ros.IResolvable;

    /**
     * Attribute Schedules: The queried time-based schedules.
     */
    public readonly attrSchedules: ros.IResolvable;

    /**
     * Create a new `DATASOURCE::FNF::Schedules`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SchedulesProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosSchedules = new RosSchedules(this, id,  {
            flowName: props.flowName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSchedules;
        this.attrScheduleNames = rosSchedules.attrScheduleNames;
        this.attrSchedules = rosSchedules.attrSchedules;
    }
}
