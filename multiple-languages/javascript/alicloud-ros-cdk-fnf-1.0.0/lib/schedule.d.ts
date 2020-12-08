import * as ros from '@alicloud/ros-cdk-core';
import { RosSchedule } from './fnf.generated';
export { RosSchedule as ScheduleProperty };
/**
 * Properties for defining a `ALIYUN::FNF::Schedule`
 */
export interface ScheduleProps {
    /**
     * @Property cronExpression: Cron expression.
     */
    readonly cronExpression: string;
    /**
     * @Property flowName: Flow name.
     */
    readonly flowName: string;
    /**
     * @Property scheduleName: Schedule name.
     */
    readonly scheduleName: string;
    /**
     * @Property description: Description of the schedule.
     */
    readonly description?: string;
    /**
     * @Property enable: Whether enable schedule.
     */
    readonly enable?: boolean | ros.IResolvable;
    /**
     * @Property payload: Payload.
     */
    readonly payload?: string;
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
     * @Attribute FlowName: Flow name.
     */
    readonly attrFlowName: any;
    /**
     * @Attribute ScheduleId: Schedule Id
     */
    readonly attrScheduleId: any;
    /**
     * @Attribute ScheduleName: Schedule name.
     */
    readonly attrScheduleName: any;
    /**
     * Create a new `ALIYUN::FNF::Schedule`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ScheduleProps, enableResourcePropertyConstraint?: boolean);
}
