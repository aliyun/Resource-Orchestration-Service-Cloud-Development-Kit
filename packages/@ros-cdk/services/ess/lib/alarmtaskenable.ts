import * as ros from '@ros-cdk/core';
import { RosAlarmTaskEnable } from './ess.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAlarmTaskEnable as AlarmTaskEnableProperty };

/**
 * Properties for defining a `ALIYUN::ESS::AlarmTaskEnable`
 */
export interface AlarmTaskEnableProps {

    /**
     * @Property alarmTaskId: The id of alarm task.
     */
    readonly alarmTaskId: string;

    /**
     * @Property enable: Enable alarm task or not
     */
    readonly enable: boolean | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::ESS::AlarmTaskEnable`
 */
export class AlarmTaskEnable extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Create a new `ALIYUN::ESS::AlarmTaskEnable`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
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
