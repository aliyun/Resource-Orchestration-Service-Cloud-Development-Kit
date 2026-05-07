import * as ros from '@alicloud/ros-cdk-core';
import { RosCycleTask } from './threatdetection.generated';
export { RosCycleTask as CycleTaskProperty };
/**
 * Properties for defining a `CycleTask`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-cycletask
 */
export interface CycleTaskProps {
    /**
     * Property enable: Specifies whether to enable the task. Valid values:
     * *   **1**: yes
     * *   **0**: no.
     */
    readonly enable: number | ros.IResolvable;
    /**
     * Property firstDateStr: The first time when the task is performed.
     */
    readonly firstDateStr: number | ros.IResolvable;
    /**
     * Property intervalPeriod: The interval at which the task is run.
     */
    readonly intervalPeriod: number | ros.IResolvable;
    /**
     * Property periodUnit: The unit of the scan interval. Valid values:
     * *   **day**
     * *   **hour**.
     */
    readonly periodUnit: string | ros.IResolvable;
    /**
     * Property targetEndTime: The time when the task ends. Unit: hours.
     */
    readonly targetEndTime: number | ros.IResolvable;
    /**
     * Property targetStartTime: The time when the task is started. Unit: hours.
     */
    readonly targetStartTime: number | ros.IResolvable;
    /**
     * Property taskName: The task name.
     */
    readonly taskName: string | ros.IResolvable;
    /**
     * Property taskType: The type of the task. Valid values:
     * *   **VIRUS_VUL_SCHEDULE_SCAN**: virus scan task
     * *   **IMAGE_SCAN**: image scan task
     * *   **EMG_VUL_SCHEDULE_SCAN**: urgent vulnerability scan task.
     */
    readonly taskType: string | ros.IResolvable;
    /**
     * Property param: The additional information.
     */
    readonly param?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * Property source: The additional source for the task.
     */
    readonly source?: string | ros.IResolvable;
}
/**
 * Represents a `CycleTask`.
 */
export interface ICycleTask extends ros.IResource {
    readonly props: CycleTaskProps;
    /**
     * Attribute ConfigId: Configuration ID.
     */
    readonly attrConfigId: ros.IResolvable | string;
    /**
     * Attribute Enable: Specifies whether to enable the task.
     */
    readonly attrEnable: ros.IResolvable | string;
    /**
     * Attribute FirstDateStr: The first time when the task is performed.
     */
    readonly attrFirstDateStr: ros.IResolvable | string;
    /**
     * Attribute IntervalPeriod: The interval at which the task is run.
     */
    readonly attrIntervalPeriod: ros.IResolvable | string;
    /**
     * Attribute Param: The additional information.
     */
    readonly attrParam: ros.IResolvable | string;
    /**
     * Attribute PeriodUnit: The unit of the scan interval.
     */
    readonly attrPeriodUnit: ros.IResolvable | string;
    /**
     * Attribute TargetEndTime: The time when the task ends. Unit: hours.
     */
    readonly attrTargetEndTime: ros.IResolvable | string;
    /**
     * Attribute TargetStartTime: The time when the task is started. Unit: hours.
     */
    readonly attrTargetStartTime: ros.IResolvable | string;
    /**
     * Attribute TaskName: The task name.
     */
    readonly attrTaskName: ros.IResolvable | string;
    /**
     * Attribute TaskType: The type of the task.
     */
    readonly attrTaskType: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ThreatDetection::CycleTask`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCycleTask`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-cycletask
 */
export declare class CycleTask extends ros.Resource implements ICycleTask {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: CycleTaskProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ConfigId: Configuration ID.
     */
    readonly attrConfigId: ros.IResolvable | string;
    /**
     * Attribute Enable: Specifies whether to enable the task.
     */
    readonly attrEnable: ros.IResolvable | string;
    /**
     * Attribute FirstDateStr: The first time when the task is performed.
     */
    readonly attrFirstDateStr: ros.IResolvable | string;
    /**
     * Attribute IntervalPeriod: The interval at which the task is run.
     */
    readonly attrIntervalPeriod: ros.IResolvable | string;
    /**
     * Attribute Param: The additional information.
     */
    readonly attrParam: ros.IResolvable | string;
    /**
     * Attribute PeriodUnit: The unit of the scan interval.
     */
    readonly attrPeriodUnit: ros.IResolvable | string;
    /**
     * Attribute TargetEndTime: The time when the task ends. Unit: hours.
     */
    readonly attrTargetEndTime: ros.IResolvable | string;
    /**
     * Attribute TargetStartTime: The time when the task is started. Unit: hours.
     */
    readonly attrTargetStartTime: ros.IResolvable | string;
    /**
     * Attribute TaskName: The task name.
     */
    readonly attrTaskName: ros.IResolvable | string;
    /**
     * Attribute TaskType: The type of the task.
     */
    readonly attrTaskType: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CycleTaskProps, enableResourcePropertyConstraint?: boolean);
}
