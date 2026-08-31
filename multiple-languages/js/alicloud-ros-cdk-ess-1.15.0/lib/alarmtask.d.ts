import * as ros from '@alicloud/ros-cdk-core';
import { RosAlarmTask } from './ess.generated';
export { RosAlarmTask as AlarmTaskProperty };
/**
 * Properties for defining a `AlarmTask`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-alarmtask
 */
export interface AlarmTaskProps {
    /**
     * Property alarmAction: The list of unique identifiers of the scaling rules that are associated with the
     * event-triggered task.
     */
    readonly alarmAction: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property metricName: The name of the metric. Valid values of MetricName vary based on the value of
     * MetricType.
     * *   If you set MetricType to custom, the valid values of MetricName are your
     * custom metrics.
     * *   If you set MetricType to system, MetricName has the following valid values:
     * *   CpuUtilization: (ECS) the CPU utilization. Unit: %.
     * *   IntranetTx: the outbound traffic over the internal network from an ECS
     * instance. Unit: KB\/min.
     * *   IntranetRx: the inbound traffic over the internal network to an ECS instance.
     * Unit: KB\/min.
     * *   VpcInternetTx: the outbound traffic over the Internet from an ECS instance
     * that resides in a virtual private cloud (VPC). Unit: KB\/min.
     * *   VpcInternetRx: the inbound traffic over the Internet to an ECS instance that
     * resides in a VPC. Unit: KB\/min.
     * *   SystemDiskReadBps: the number of bytes read from the system disk that is used
     * by an ECS instance per second.
     * *   SystemDiskWriteBps: the number of bytes written to the system disk that is
     * used by an ECS instance per second.
     * *   SystemDiskReadOps: the number of read operations on the system disk that is
     * used by an ECS instance per second.
     * *   SystemDiskWriteOps: the number of write operations on the system disk that is
     * used by an ECS instance per second.
     * *   CpuUtilizationAgent: the CPU utilization of an agent. Unit: %.
     * *   GpuMemoryFreeUtilizationAgent: the percentage of idle GPU memory of an agent.
     * *   GpuMemoryUtilizationAgent: the GPU memory usage of an agent. Unit: %.
     * *   MemoryUtilization: the memory usage of an agent. Unit: %.
     * *   LoadAverage: the average system load of an agent.
     * *   TcpConnection: the total number of TCP connections of an agent.
     * *   TcpConnection: the number of established TCP connections of an agent.
     * *   PackagesNetOut: the number of packets that are sent by the internal network
     * interface controller (NIC) used by an agent.
     * *   PackagesNetIn: the number of packets that are received by the internal NIC
     * used by an agent.
     * *   EciPodCpuUtilization: the CPU utilization of an elastic container instance.
     * Unit: %.
     * *   EciPodMemoryUtilization: the memory usage of an elastic container instance.
     * Unit: %.
     */
    readonly metricName: string | ros.IResolvable;
    /**
     * Property scalingGroupId: The ID of the scaling group.
     */
    readonly scalingGroupId: string | ros.IResolvable;
    /**
     * Property threshold: The threshold of a metric in the multi-metric alert rule. If the threshold is
     * reached the specified number of times within the specified period, a scaling rule
     * is executed.
     */
    readonly threshold: number | ros.IResolvable;
    /**
     * Property comparisonOperator: The operator that is used to compare the metric value and the metric threshold.
     * Valid values:
     * *   If the metric value is greater than or equal to the metric threshold, set the
     * value to `>=`.
     * *   If the metric value is less than or equal to the metric threshold, set the
     * value to `<=`.
     * *   If the metric value is greater than the metric threshold, set the value to
     * `>`.
     * *   If the metric value is less than the metric threshold, set the value to `<`.
     */
    readonly comparisonOperator?: string | ros.IResolvable;
    /**
     * Property description: The description of the event-triggered task.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property dimensions: Dimensions
     */
    readonly dimensions?: Array<RosAlarmTask.DimensionsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property evaluationCount: The number of times that the threshold must be reached before a scaling rule can
     * be executed. For example, if you set this parameter to 3, the average CPU
     * utilization must reach or exceed 80% three times in a row before a scaling rule
     * is triggered.
     */
    readonly evaluationCount?: number | ros.IResolvable;
    /**
     * Property groupId: The ID of the application group to which the custom metric belongs. This
     * parameter must be specified when MetricType is set to custom.
     */
    readonly groupId?: number | ros.IResolvable;
    /**
     * Property metricType: The type of the metric. Valid values:
     * *   system: system metrics of CloudMonitor
     * *   custom: custom metrics that are reported to CloudMonitor
     */
    readonly metricType?: string | ros.IResolvable;
    /**
     * Property name: The name of the event-triggered task.
     */
    readonly name?: string | ros.IResolvable;
    /**
     * Property period: The period of time during which statistics about the metric is collected. Unit:
     * seconds. Valid values:
     * *   15
     * *   60
     * *   120
     * *   300
     * *   900
     * > If your scaling group is of the ECS type and uses CloudMonitor metrics, you can
     * set Period to 15. In other cases, you can set Period to 60, 120, 300, or 900. In
     * most cases, the name of a CloudMonitor metric contains Agent.
     */
    readonly period?: number | ros.IResolvable;
    /**
     * Property statistics: The method that is used to aggregate statistics for the metric. Valid values:
     * *   Average
     * *   Minimum
     * *   Maximum
     */
    readonly statistics?: string | ros.IResolvable;
}
/**
 * Represents a `AlarmTask`.
 */
export interface IAlarmTask extends ros.IResource {
    readonly props: AlarmTaskProps;
    /**
     * Attribute AlarmTaskId: The alarm task ID
     */
    readonly attrAlarmTaskId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ESS::AlarmTask`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAlarmTask`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-alarmtask
 */
export declare class AlarmTask extends ros.Resource implements IAlarmTask {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: AlarmTaskProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AlarmTaskId: The alarm task ID
     */
    readonly attrAlarmTaskId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AlarmTaskProps, enableResourcePropertyConstraint?: boolean);
}
