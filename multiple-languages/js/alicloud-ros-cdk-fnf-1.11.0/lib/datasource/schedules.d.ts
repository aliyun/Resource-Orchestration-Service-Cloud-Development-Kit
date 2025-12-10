import * as ros from '@alicloud/ros-cdk-core';
import { RosSchedules } from './fnf.generated';
export { RosSchedules as SchedulesProperty };
/**
 * Properties for defining a `Schedules`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fnf-schedules
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
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * Represents a `Schedules`.
 */
export interface ISchedules extends ros.IResource {
    readonly props: SchedulesProps;
    /**
     * Attribute ScheduleNames: The list of schedule names.
     */
    readonly attrScheduleNames: ros.IResolvable | string;
    /**
     * Attribute Schedules: The queried time-based schedules.
     */
    readonly attrSchedules: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::FNF::Schedules`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSchedules`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fnf-schedules
 */
export declare class Schedules extends ros.Resource implements ISchedules {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: SchedulesProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ScheduleNames: The list of schedule names.
     */
    readonly attrScheduleNames: ros.IResolvable | string;
    /**
     * Attribute Schedules: The queried time-based schedules.
     */
    readonly attrSchedules: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SchedulesProps, enableResourcePropertyConstraint?: boolean);
}
