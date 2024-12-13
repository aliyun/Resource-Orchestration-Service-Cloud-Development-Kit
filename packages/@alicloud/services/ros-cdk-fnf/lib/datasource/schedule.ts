import * as ros from '@alicloud/ros-cdk-core';
import { RosSchedule } from './fnf.generated';
// Generated from the AliCloud ROS Resource Specification
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
 * This class encapsulates and extends the ROS resource type `DATASOURCE::FNF::Schedule`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSchedule`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fnf-schedule
 */
export class Schedule extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: ScheduleProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CreateTime: The time when the time-based schedule was created.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * Attribute CronExpression: The CRON expression of the time-based schedule to be created.
     */
    public readonly attrCronExpression: ros.IResolvable;

    /**
     * Attribute Description: The description of the time-based schedule to be created.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * Attribute LastModifiedTime: The time when the time-based schedule was last updated.
     */
    public readonly attrLastModifiedTime: ros.IResolvable;

    /**
     * Attribute Payload: The trigger message of the time-based schedule to be created.
     */
    public readonly attrPayload: ros.IResolvable;

    /**
     * Attribute ScheduleId: The ID of the time-based schedule.
     */
    public readonly attrScheduleId: ros.IResolvable;

    /**
     * Attribute ScheduleName: The name of the time-based schedule to be created.
     */
    public readonly attrScheduleName: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ScheduleProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosSchedule = new RosSchedule(this, id,  {
            flowName: props.flowName,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
            scheduleName: props.scheduleName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSchedule;
        this.attrCreateTime = rosSchedule.attrCreateTime;
        this.attrCronExpression = rosSchedule.attrCronExpression;
        this.attrDescription = rosSchedule.attrDescription;
        this.attrLastModifiedTime = rosSchedule.attrLastModifiedTime;
        this.attrPayload = rosSchedule.attrPayload;
        this.attrScheduleId = rosSchedule.attrScheduleId;
        this.attrScheduleName = rosSchedule.attrScheduleName;
    }
}
