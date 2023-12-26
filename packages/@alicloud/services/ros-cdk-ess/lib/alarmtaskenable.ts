import * as ros from '@alicloud/ros-cdk-core';
import { RosAlarmTaskEnable } from './ess.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAlarmTaskEnable as AlarmTaskEnableProperty };

/**
 * Properties for defining a `AlarmTaskEnable`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-alarmtaskenable
 */
export interface AlarmTaskEnableProps {

    /**
     * Property alarmTaskId: The id of alarm task.
     */
    readonly alarmTaskId: string | ros.IResolvable;

    /**
     * Property enable: Enable alarm task or not
     */
    readonly enable: boolean | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ESS::AlarmTaskEnable`, which is used to start an alarm task. You can call this operation to enable alarm tasks when the task is stopped.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAlarmTaskEnable`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-alarmtaskenable
 */
export class AlarmTaskEnable extends ros.Resource {

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AlarmTaskEnableProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosAlarmTaskEnable = new RosAlarmTaskEnable(this, id,  {
            enable: props.enable,
            alarmTaskId: props.alarmTaskId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAlarmTaskEnable;
    }
}
