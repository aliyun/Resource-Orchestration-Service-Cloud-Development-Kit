import * as ros from '@alicloud/ros-cdk-core';
import { RosSchedule } from './fnf.generated';
export { RosSchedule as ScheduleProperty };
/**
 * Properties for defining a `ALIYUN::FNF::Schedule`
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
 * A ROS resource type:  `ALIYUN::FNF::Schedule`
 */
export declare class Schedule extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute FlowName: Flow name.
     */
    readonly attrFlowName: ros.IResolvable;
    /**
     * Attribute ScheduleId: Schedule Id
     */
    readonly attrScheduleId: ros.IResolvable;
    /**
     * Attribute ScheduleName: Schedule name.
     */
    readonly attrScheduleName: ros.IResolvable;
    /**
     * Create a new `ALIYUN::FNF::Schedule`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ScheduleProps, enableResourcePropertyConstraint?: boolean);
}
