import * as ros from '@alicloud/ros-cdk-core';
import { RosSchedule } from './fnf.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosSchedule as ScheduleProperty };

/**
 * Properties for defining a `Schedule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fnf-schedule
 */
export interface ScheduleProps {

    /**
     * Property cronExpression: Cron expression.
     */
    readonly cronExpression: string | ros.IResolvable;

    /**
     * Property flowName: Flow name.
     */
    readonly flowName: string | ros.IResolvable;

    /**
     * Property scheduleName: Schedule name.
     */
    readonly scheduleName: string | ros.IResolvable;

    /**
     * Property description: Description of the schedule.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property enable: Whether enable schedule.
     */
    readonly enable?: boolean | ros.IResolvable;

    /**
     * Property payload: Payload.
     */
    readonly payload?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::FNF::Schedule`, which is used to create a time-based schedule.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSchedule`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fnf-schedule
 */
export class Schedule extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: ScheduleProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute FlowName: Flow name.
     */
    public readonly attrFlowName: ros.IResolvable;

    /**
     * Attribute ScheduleId: Schedule Id
     */
    public readonly attrScheduleId: ros.IResolvable;

    /**
     * Attribute ScheduleName: Schedule name.
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
            description: props.description,
            flowName: props.flowName,
            enable: props.enable,
            payload: props.payload,
            cronExpression: props.cronExpression,
            scheduleName: props.scheduleName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSchedule;
        this.attrFlowName = rosSchedule.attrFlowName;
        this.attrScheduleId = rosSchedule.attrScheduleId;
        this.attrScheduleName = rosSchedule.attrScheduleName;
    }
}
