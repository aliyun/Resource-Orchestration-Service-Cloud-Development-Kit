import * as ros from '@alicloud/ros-cdk-core';
import { RosAlarmTaskEnable } from './ess.generated';
export { RosAlarmTaskEnable as AlarmTaskEnableProperty };
/**
 * Properties for defining a `ALIYUN::ESS::AlarmTaskEnable`
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
 * A ROS resource type:  `ALIYUN::ESS::AlarmTaskEnable`
 */
export declare class AlarmTaskEnable extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Create a new `ALIYUN::ESS::AlarmTaskEnable`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AlarmTaskEnableProps, enableResourcePropertyConstraint?: boolean);
}
//# sourceMappingURL=alarmtaskenable.d.ts.map