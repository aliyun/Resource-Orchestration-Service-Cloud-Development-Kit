import * as ros from '@alicloud/ros-cdk-core';
import { RosSchedule } from './fnf.generated';
export { RosSchedule as ScheduleProperty };
/**
 * Properties for defining a `Schedule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fnf-schedule
 */
export interface ScheduleProps {
    /**
     * Property flowName: The name of the flow that is associated with the time-based schedule. The name must be unique within the region and cannot be modified after the time-based schedule is created. The name must meet the following conventions:
     * The name can contain letters, digits, underscores (_), and hyphens (-).
     * The name must start with a letter or an underscore (_).
     * The name is case-sensitive.
     * The name must be 1 to 128 characters in length.
     */
    readonly flowName: string | ros.IResolvable;
    /**
     * Property scheduleName: The name of the time-based schedule. The name must meet the following conventions:
     * The name can contain letters, digits, underscores (_), and hyphens (-).
     * The name must start with a letter or an underscore (_).
     * The name is case-sensitive.
     * The name must be 1 to 128 characters in length.
     */
    readonly scheduleName: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * Represents a `Schedule`.
 */
export interface ISchedule extends ros.IResource {
    readonly props: ScheduleProps;
    /**
     * Attribute CreateTime: The time when the time-based schedule was created.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute CronExpression: The CRON expression of the time-based schedule to be created.
     */
    readonly attrCronExpression: ros.IResolvable | string;
    /**
     * Attribute Description: The description of the time-based schedule to be created.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute LastModifiedTime: The time when the time-based schedule was last updated.
     */
    readonly attrLastModifiedTime: ros.IResolvable | string;
    /**
     * Attribute Payload: The trigger message of the time-based schedule to be created.
     */
    readonly attrPayload: ros.IResolvable | string;
    /**
     * Attribute ScheduleId: The ID of the time-based schedule.
     */
    readonly attrScheduleId: ros.IResolvable | string;
    /**
     * Attribute ScheduleName: The name of the time-based schedule to be created.
     */
    readonly attrScheduleName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::FNF::Schedule`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSchedule`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fnf-schedule
 */
export declare class Schedule extends ros.Resource implements ISchedule {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ScheduleProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute CreateTime: The time when the time-based schedule was created.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute CronExpression: The CRON expression of the time-based schedule to be created.
     */
    readonly attrCronExpression: ros.IResolvable | string;
    /**
     * Attribute Description: The description of the time-based schedule to be created.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute LastModifiedTime: The time when the time-based schedule was last updated.
     */
    readonly attrLastModifiedTime: ros.IResolvable | string;
    /**
     * Attribute Payload: The trigger message of the time-based schedule to be created.
     */
    readonly attrPayload: ros.IResolvable | string;
    /**
     * Attribute ScheduleId: The ID of the time-based schedule.
     */
    readonly attrScheduleId: ros.IResolvable | string;
    /**
     * Attribute ScheduleName: The name of the time-based schedule to be created.
     */
    readonly attrScheduleName: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ScheduleProps, enableResourcePropertyConstraint?: boolean);
}
