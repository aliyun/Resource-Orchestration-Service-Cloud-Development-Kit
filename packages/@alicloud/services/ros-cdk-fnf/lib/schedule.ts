import * as ros from '@alicloud/ros-cdk-core';
import { RosSchedule } from './fnf.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosSchedule as ScheduleProperty };

/**
 * Properties for defining a `ALIYUN::FNF::Schedule`
 */
export interface ScheduleProps {

    /**
     * Property cronExpression: Cron expression.
     */
    readonly cronExpression: string;

    /**
     * Property flowName: Flow name.
     */
    readonly flowName: string;

    /**
     * Property scheduleName: Schedule name.
     */
    readonly scheduleName: string;

    /**
     * Property description: Description of the schedule.
     */
    readonly description?: string;

    /**
     * Property enable: Whether enable schedule.
     */
    readonly enable?: boolean | ros.IResolvable;

    /**
     * Property payload: Payload.
     */
    readonly payload?: string;
}

/**
 * A ROS resource type:  `ALIYUN::FNF::Schedule`
 */
export class Schedule extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute FlowName: Flow name.
     */
    public readonly attrFlowName: any;

    /**
     * Attribute ScheduleId: Schedule Id
     */
    public readonly attrScheduleId: any;

    /**
     * Attribute ScheduleName: Schedule name.
     */
    public readonly attrScheduleName: any;

    /**
     * Create a new `ALIYUN::FNF::Schedule`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ScheduleProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

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
