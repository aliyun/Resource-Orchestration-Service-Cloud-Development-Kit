import * as ros from '@alicloud/ros-cdk-core';
import { RosScheduledPreloadExecution } from './esa.generated';
export { RosScheduledPreloadExecution as ScheduledPreloadExecutionProperty };
/**
 * Properties for defining a `ScheduledPreloadExecution`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-scheduledpreloadexecution
 */
export interface ScheduledPreloadExecutionProps {
    /**
     * Property interval: The time interval between each batch execution. Unit: seconds.
     */
    readonly interval: number | ros.IResolvable;
    /**
     * Property scheduledPreloadJobId: The ID of the prefetch task.
     */
    readonly scheduledPreloadJobId: string | ros.IResolvable;
    /**
     * Property sliceLen: The number of URLs prefetched in each batch.
     */
    readonly sliceLen: number | ros.IResolvable;
    /**
     * Property endTime: The end time of the prefetch plan.
     */
    readonly endTime?: string | ros.IResolvable;
    /**
     * Property startTime: The start time of the prefetch plan.
     */
    readonly startTime?: string | ros.IResolvable;
}
/**
 * Represents a `ScheduledPreloadExecution`.
 */
export interface IScheduledPreloadExecution extends ros.IResource {
    readonly props: ScheduledPreloadExecutionProps;
    /**
     * Attribute EndTime: The end time of the prefetch plan.
     */
    readonly attrEndTime: ros.IResolvable | string;
    /**
     * Attribute Interval: The time interval between each batch execution. Unit: seconds.
     */
    readonly attrInterval: ros.IResolvable | string;
    /**
     * Attribute ScheduledPreloadExecutionId: The ID of the prefetch plan.
     */
    readonly attrScheduledPreloadExecutionId: ros.IResolvable | string;
    /**
     * Attribute ScheduledPreloadJobId: The ID of the prefetch task.
     */
    readonly attrScheduledPreloadJobId: ros.IResolvable | string;
    /**
     * Attribute SliceLen: The number of URLs prefetched in each batch.
     */
    readonly attrSliceLen: ros.IResolvable | string;
    /**
     * Attribute StartTime: The start time of the prefetch plan.
     */
    readonly attrStartTime: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ESA::ScheduledPreloadExecution`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosScheduledPreloadExecution`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-scheduledpreloadexecution
 */
export declare class ScheduledPreloadExecution extends ros.Resource implements IScheduledPreloadExecution {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ScheduledPreloadExecutionProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute EndTime: The end time of the prefetch plan.
     */
    readonly attrEndTime: ros.IResolvable | string;
    /**
     * Attribute Interval: The time interval between each batch execution. Unit: seconds.
     */
    readonly attrInterval: ros.IResolvable | string;
    /**
     * Attribute ScheduledPreloadExecutionId: The ID of the prefetch plan.
     */
    readonly attrScheduledPreloadExecutionId: ros.IResolvable | string;
    /**
     * Attribute ScheduledPreloadJobId: The ID of the prefetch task.
     */
    readonly attrScheduledPreloadJobId: ros.IResolvable | string;
    /**
     * Attribute SliceLen: The number of URLs prefetched in each batch.
     */
    readonly attrSliceLen: ros.IResolvable | string;
    /**
     * Attribute StartTime: The start time of the prefetch plan.
     */
    readonly attrStartTime: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ScheduledPreloadExecutionProps, enableResourcePropertyConstraint?: boolean);
}
