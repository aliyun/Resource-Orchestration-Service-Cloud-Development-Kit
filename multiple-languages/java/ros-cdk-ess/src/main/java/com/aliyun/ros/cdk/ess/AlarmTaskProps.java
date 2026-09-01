package com.aliyun.ros.cdk.ess;

/**
 * Properties for defining a <code>AlarmTask</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-alarmtask
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-08-31T09:06:45.525Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ess.$Module.class, fqn = "@alicloud/ros-cdk-ess.AlarmTaskProps")
@software.amazon.jsii.Jsii.Proxy(AlarmTaskProps.Jsii$Proxy.class)
public interface AlarmTaskProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property alarmAction: The list of unique identifiers of the scaling rules that are associated with the event-triggered task.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAlarmAction();

    /**
     * Property metricName: The name of the metric.
     * <p>
     * Valid values of MetricName vary based on the value of
     * MetricType.
     * <p>
     * <ul>
     * <li>If you set MetricType to custom, the valid values of MetricName are your
     * custom metrics.</li>
     * <li>If you set MetricType to system, MetricName has the following valid values:</li>
     * <li>CpuUtilization: (ECS) the CPU utilization. Unit: %.</li>
     * <li>IntranetTx: the outbound traffic over the internal network from an ECS
     * instance. Unit: KB/min.</li>
     * <li>IntranetRx: the inbound traffic over the internal network to an ECS instance.
     * Unit: KB/min.</li>
     * <li>VpcInternetTx: the outbound traffic over the Internet from an ECS instance
     * that resides in a virtual private cloud (VPC). Unit: KB/min.</li>
     * <li>VpcInternetRx: the inbound traffic over the Internet to an ECS instance that
     * resides in a VPC. Unit: KB/min.</li>
     * <li>SystemDiskReadBps: the number of bytes read from the system disk that is used
     * by an ECS instance per second.</li>
     * <li>SystemDiskWriteBps: the number of bytes written to the system disk that is
     * used by an ECS instance per second.</li>
     * <li>SystemDiskReadOps: the number of read operations on the system disk that is
     * used by an ECS instance per second.</li>
     * <li>SystemDiskWriteOps: the number of write operations on the system disk that is
     * used by an ECS instance per second.</li>
     * <li>CpuUtilizationAgent: the CPU utilization of an agent. Unit: %.</li>
     * <li>GpuMemoryFreeUtilizationAgent: the percentage of idle GPU memory of an agent.</li>
     * <li>GpuMemoryUtilizationAgent: the GPU memory usage of an agent. Unit: %.</li>
     * <li>MemoryUtilization: the memory usage of an agent. Unit: %.</li>
     * <li>LoadAverage: the average system load of an agent.</li>
     * <li>TcpConnection: the total number of TCP connections of an agent.</li>
     * <li>TcpConnection: the number of established TCP connections of an agent.</li>
     * <li>PackagesNetOut: the number of packets that are sent by the internal network
     * interface controller (NIC) used by an agent.</li>
     * <li>PackagesNetIn: the number of packets that are received by the internal NIC
     * used by an agent.</li>
     * <li>EciPodCpuUtilization: the CPU utilization of an elastic container instance.
     * Unit: %.</li>
     * <li>EciPodMemoryUtilization: the memory usage of an elastic container instance.
     * Unit: %.</li>
     * </ul>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getMetricName();

    /**
     * Property scalingGroupId: The ID of the scaling group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getScalingGroupId();

    /**
     * Property threshold: The threshold of a metric in the multi-metric alert rule.
     * <p>
     * If the threshold is
     * reached the specified number of times within the specified period, a scaling rule
     * is executed.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getThreshold();

    /**
     * Property comparisonOperator: The operator that is used to compare the metric value and the metric threshold.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>If the metric value is greater than or equal to the metric threshold, set the
     * value to <code>&gt;=</code>.</li>
     * <li>If the metric value is less than or equal to the metric threshold, set the
     * value to <code>&lt;=</code>.</li>
     * <li>If the metric value is greater than the metric threshold, set the value to
     * <code>&gt;</code>.</li>
     * <li>If the metric value is less than the metric threshold, set the value to <code>&lt;</code>.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getComparisonOperator() {
        return null;
    }

    /**
     * Property description: The description of the event-triggered task.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property dimensions: Dimensions.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDimensions() {
        return null;
    }

    /**
     * Property evaluationCount: The number of times that the threshold must be reached before a scaling rule can be executed.
     * <p>
     * For example, if you set this parameter to 3, the average CPU
     * utilization must reach or exceed 80% three times in a row before a scaling rule
     * is triggered.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEvaluationCount() {
        return null;
    }

    /**
     * Property groupId: The ID of the application group to which the custom metric belongs.
     * <p>
     * This
     * parameter must be specified when MetricType is set to custom.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getGroupId() {
        return null;
    }

    /**
     * Property metricType: The type of the metric.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>system: system metrics of CloudMonitor</li>
     * <li>custom: custom metrics that are reported to CloudMonitor</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMetricType() {
        return null;
    }

    /**
     * Property name: The name of the event-triggered task.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
        return null;
    }

    /**
     * Property period: The period of time during which statistics about the metric is collected.
     * <p>
     * Unit:
     * seconds. Valid values:
     * <p>
     * <ul>
     * <li>15</li>
     * <li>60</li>
     * <li>120</li>
     * <li>300</li>
     * <li>900</li>
     * </ul>
     * <p>
     * <blockquote>
     * <p>
     * If your scaling group is of the ECS type and uses CloudMonitor metrics, you can
     * set Period to 15. In other cases, you can set Period to 60, 120, 300, or 900. In
     * most cases, the name of a CloudMonitor metric contains Agent.
     * <p>
     * </blockquote>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
        return null;
    }

    /**
     * Property statistics: The method that is used to aggregate statistics for the metric.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>Average</li>
     * <li>Minimum</li>
     * <li>Maximum</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStatistics() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link AlarmTaskProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link AlarmTaskProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<AlarmTaskProps> {
        java.lang.Object alarmAction;
        java.lang.Object metricName;
        java.lang.Object scalingGroupId;
        java.lang.Object threshold;
        java.lang.Object comparisonOperator;
        java.lang.Object description;
        java.lang.Object dimensions;
        java.lang.Object evaluationCount;
        java.lang.Object groupId;
        java.lang.Object metricType;
        java.lang.Object name;
        java.lang.Object period;
        java.lang.Object statistics;

        /**
         * Sets the value of {@link AlarmTaskProps#getAlarmAction}
         * @param alarmAction Property alarmAction: The list of unique identifiers of the scaling rules that are associated with the event-triggered task. This parameter is required.
         * @return {@code this}
         */
        public Builder alarmAction(com.aliyun.ros.cdk.core.IResolvable alarmAction) {
            this.alarmAction = alarmAction;
            return this;
        }

        /**
         * Sets the value of {@link AlarmTaskProps#getAlarmAction}
         * @param alarmAction Property alarmAction: The list of unique identifiers of the scaling rules that are associated with the event-triggered task. This parameter is required.
         * @return {@code this}
         */
        public Builder alarmAction(java.util.List<? extends java.lang.Object> alarmAction) {
            this.alarmAction = alarmAction;
            return this;
        }

        /**
         * Sets the value of {@link AlarmTaskProps#getMetricName}
         * @param metricName Property metricName: The name of the metric. This parameter is required.
         *                   Valid values of MetricName vary based on the value of
         *                   MetricType.
         *                   <p>
         *                   <ul>
         *                   <li>If you set MetricType to custom, the valid values of MetricName are your
         *                   custom metrics.</li>
         *                   <li>If you set MetricType to system, MetricName has the following valid values:</li>
         *                   <li>CpuUtilization: (ECS) the CPU utilization. Unit: %.</li>
         *                   <li>IntranetTx: the outbound traffic over the internal network from an ECS
         *                   instance. Unit: KB/min.</li>
         *                   <li>IntranetRx: the inbound traffic over the internal network to an ECS instance.
         *                   Unit: KB/min.</li>
         *                   <li>VpcInternetTx: the outbound traffic over the Internet from an ECS instance
         *                   that resides in a virtual private cloud (VPC). Unit: KB/min.</li>
         *                   <li>VpcInternetRx: the inbound traffic over the Internet to an ECS instance that
         *                   resides in a VPC. Unit: KB/min.</li>
         *                   <li>SystemDiskReadBps: the number of bytes read from the system disk that is used
         *                   by an ECS instance per second.</li>
         *                   <li>SystemDiskWriteBps: the number of bytes written to the system disk that is
         *                   used by an ECS instance per second.</li>
         *                   <li>SystemDiskReadOps: the number of read operations on the system disk that is
         *                   used by an ECS instance per second.</li>
         *                   <li>SystemDiskWriteOps: the number of write operations on the system disk that is
         *                   used by an ECS instance per second.</li>
         *                   <li>CpuUtilizationAgent: the CPU utilization of an agent. Unit: %.</li>
         *                   <li>GpuMemoryFreeUtilizationAgent: the percentage of idle GPU memory of an agent.</li>
         *                   <li>GpuMemoryUtilizationAgent: the GPU memory usage of an agent. Unit: %.</li>
         *                   <li>MemoryUtilization: the memory usage of an agent. Unit: %.</li>
         *                   <li>LoadAverage: the average system load of an agent.</li>
         *                   <li>TcpConnection: the total number of TCP connections of an agent.</li>
         *                   <li>TcpConnection: the number of established TCP connections of an agent.</li>
         *                   <li>PackagesNetOut: the number of packets that are sent by the internal network
         *                   interface controller (NIC) used by an agent.</li>
         *                   <li>PackagesNetIn: the number of packets that are received by the internal NIC
         *                   used by an agent.</li>
         *                   <li>EciPodCpuUtilization: the CPU utilization of an elastic container instance.
         *                   Unit: %.</li>
         *                   <li>EciPodMemoryUtilization: the memory usage of an elastic container instance.
         *                   Unit: %.</li>
         *                   </ul>
         * @return {@code this}
         */
        public Builder metricName(java.lang.String metricName) {
            this.metricName = metricName;
            return this;
        }

        /**
         * Sets the value of {@link AlarmTaskProps#getMetricName}
         * @param metricName Property metricName: The name of the metric. This parameter is required.
         *                   Valid values of MetricName vary based on the value of
         *                   MetricType.
         *                   <p>
         *                   <ul>
         *                   <li>If you set MetricType to custom, the valid values of MetricName are your
         *                   custom metrics.</li>
         *                   <li>If you set MetricType to system, MetricName has the following valid values:</li>
         *                   <li>CpuUtilization: (ECS) the CPU utilization. Unit: %.</li>
         *                   <li>IntranetTx: the outbound traffic over the internal network from an ECS
         *                   instance. Unit: KB/min.</li>
         *                   <li>IntranetRx: the inbound traffic over the internal network to an ECS instance.
         *                   Unit: KB/min.</li>
         *                   <li>VpcInternetTx: the outbound traffic over the Internet from an ECS instance
         *                   that resides in a virtual private cloud (VPC). Unit: KB/min.</li>
         *                   <li>VpcInternetRx: the inbound traffic over the Internet to an ECS instance that
         *                   resides in a VPC. Unit: KB/min.</li>
         *                   <li>SystemDiskReadBps: the number of bytes read from the system disk that is used
         *                   by an ECS instance per second.</li>
         *                   <li>SystemDiskWriteBps: the number of bytes written to the system disk that is
         *                   used by an ECS instance per second.</li>
         *                   <li>SystemDiskReadOps: the number of read operations on the system disk that is
         *                   used by an ECS instance per second.</li>
         *                   <li>SystemDiskWriteOps: the number of write operations on the system disk that is
         *                   used by an ECS instance per second.</li>
         *                   <li>CpuUtilizationAgent: the CPU utilization of an agent. Unit: %.</li>
         *                   <li>GpuMemoryFreeUtilizationAgent: the percentage of idle GPU memory of an agent.</li>
         *                   <li>GpuMemoryUtilizationAgent: the GPU memory usage of an agent. Unit: %.</li>
         *                   <li>MemoryUtilization: the memory usage of an agent. Unit: %.</li>
         *                   <li>LoadAverage: the average system load of an agent.</li>
         *                   <li>TcpConnection: the total number of TCP connections of an agent.</li>
         *                   <li>TcpConnection: the number of established TCP connections of an agent.</li>
         *                   <li>PackagesNetOut: the number of packets that are sent by the internal network
         *                   interface controller (NIC) used by an agent.</li>
         *                   <li>PackagesNetIn: the number of packets that are received by the internal NIC
         *                   used by an agent.</li>
         *                   <li>EciPodCpuUtilization: the CPU utilization of an elastic container instance.
         *                   Unit: %.</li>
         *                   <li>EciPodMemoryUtilization: the memory usage of an elastic container instance.
         *                   Unit: %.</li>
         *                   </ul>
         * @return {@code this}
         */
        public Builder metricName(com.aliyun.ros.cdk.core.IResolvable metricName) {
            this.metricName = metricName;
            return this;
        }

        /**
         * Sets the value of {@link AlarmTaskProps#getScalingGroupId}
         * @param scalingGroupId Property scalingGroupId: The ID of the scaling group. This parameter is required.
         * @return {@code this}
         */
        public Builder scalingGroupId(java.lang.String scalingGroupId) {
            this.scalingGroupId = scalingGroupId;
            return this;
        }

        /**
         * Sets the value of {@link AlarmTaskProps#getScalingGroupId}
         * @param scalingGroupId Property scalingGroupId: The ID of the scaling group. This parameter is required.
         * @return {@code this}
         */
        public Builder scalingGroupId(com.aliyun.ros.cdk.core.IResolvable scalingGroupId) {
            this.scalingGroupId = scalingGroupId;
            return this;
        }

        /**
         * Sets the value of {@link AlarmTaskProps#getThreshold}
         * @param threshold Property threshold: The threshold of a metric in the multi-metric alert rule. This parameter is required.
         *                  If the threshold is
         *                  reached the specified number of times within the specified period, a scaling rule
         *                  is executed.
         * @return {@code this}
         */
        public Builder threshold(java.lang.Number threshold) {
            this.threshold = threshold;
            return this;
        }

        /**
         * Sets the value of {@link AlarmTaskProps#getThreshold}
         * @param threshold Property threshold: The threshold of a metric in the multi-metric alert rule. This parameter is required.
         *                  If the threshold is
         *                  reached the specified number of times within the specified period, a scaling rule
         *                  is executed.
         * @return {@code this}
         */
        public Builder threshold(com.aliyun.ros.cdk.core.IResolvable threshold) {
            this.threshold = threshold;
            return this;
        }

        /**
         * Sets the value of {@link AlarmTaskProps#getComparisonOperator}
         * @param comparisonOperator Property comparisonOperator: The operator that is used to compare the metric value and the metric threshold.
         *                           Valid values:
         *                           <p>
         *                           <ul>
         *                           <li>If the metric value is greater than or equal to the metric threshold, set the
         *                           value to <code>&gt;=</code>.</li>
         *                           <li>If the metric value is less than or equal to the metric threshold, set the
         *                           value to <code>&lt;=</code>.</li>
         *                           <li>If the metric value is greater than the metric threshold, set the value to
         *                           <code>&gt;</code>.</li>
         *                           <li>If the metric value is less than the metric threshold, set the value to <code>&lt;</code>.</li>
         *                           </ul>
         * @return {@code this}
         */
        public Builder comparisonOperator(java.lang.String comparisonOperator) {
            this.comparisonOperator = comparisonOperator;
            return this;
        }

        /**
         * Sets the value of {@link AlarmTaskProps#getComparisonOperator}
         * @param comparisonOperator Property comparisonOperator: The operator that is used to compare the metric value and the metric threshold.
         *                           Valid values:
         *                           <p>
         *                           <ul>
         *                           <li>If the metric value is greater than or equal to the metric threshold, set the
         *                           value to <code>&gt;=</code>.</li>
         *                           <li>If the metric value is less than or equal to the metric threshold, set the
         *                           value to <code>&lt;=</code>.</li>
         *                           <li>If the metric value is greater than the metric threshold, set the value to
         *                           <code>&gt;</code>.</li>
         *                           <li>If the metric value is less than the metric threshold, set the value to <code>&lt;</code>.</li>
         *                           </ul>
         * @return {@code this}
         */
        public Builder comparisonOperator(com.aliyun.ros.cdk.core.IResolvable comparisonOperator) {
            this.comparisonOperator = comparisonOperator;
            return this;
        }

        /**
         * Sets the value of {@link AlarmTaskProps#getDescription}
         * @param description Property description: The description of the event-triggered task.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link AlarmTaskProps#getDescription}
         * @param description Property description: The description of the event-triggered task.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link AlarmTaskProps#getDimensions}
         * @param dimensions Property dimensions: Dimensions.
         * @return {@code this}
         */
        public Builder dimensions(com.aliyun.ros.cdk.core.IResolvable dimensions) {
            this.dimensions = dimensions;
            return this;
        }

        /**
         * Sets the value of {@link AlarmTaskProps#getDimensions}
         * @param dimensions Property dimensions: Dimensions.
         * @return {@code this}
         */
        public Builder dimensions(java.util.List<? extends java.lang.Object> dimensions) {
            this.dimensions = dimensions;
            return this;
        }

        /**
         * Sets the value of {@link AlarmTaskProps#getEvaluationCount}
         * @param evaluationCount Property evaluationCount: The number of times that the threshold must be reached before a scaling rule can be executed.
         *                        For example, if you set this parameter to 3, the average CPU
         *                        utilization must reach or exceed 80% three times in a row before a scaling rule
         *                        is triggered.
         * @return {@code this}
         */
        public Builder evaluationCount(java.lang.Number evaluationCount) {
            this.evaluationCount = evaluationCount;
            return this;
        }

        /**
         * Sets the value of {@link AlarmTaskProps#getEvaluationCount}
         * @param evaluationCount Property evaluationCount: The number of times that the threshold must be reached before a scaling rule can be executed.
         *                        For example, if you set this parameter to 3, the average CPU
         *                        utilization must reach or exceed 80% three times in a row before a scaling rule
         *                        is triggered.
         * @return {@code this}
         */
        public Builder evaluationCount(com.aliyun.ros.cdk.core.IResolvable evaluationCount) {
            this.evaluationCount = evaluationCount;
            return this;
        }

        /**
         * Sets the value of {@link AlarmTaskProps#getGroupId}
         * @param groupId Property groupId: The ID of the application group to which the custom metric belongs.
         *                This
         *                parameter must be specified when MetricType is set to custom.
         * @return {@code this}
         */
        public Builder groupId(java.lang.Number groupId) {
            this.groupId = groupId;
            return this;
        }

        /**
         * Sets the value of {@link AlarmTaskProps#getGroupId}
         * @param groupId Property groupId: The ID of the application group to which the custom metric belongs.
         *                This
         *                parameter must be specified when MetricType is set to custom.
         * @return {@code this}
         */
        public Builder groupId(com.aliyun.ros.cdk.core.IResolvable groupId) {
            this.groupId = groupId;
            return this;
        }

        /**
         * Sets the value of {@link AlarmTaskProps#getMetricType}
         * @param metricType Property metricType: The type of the metric.
         *                   Valid values:
         *                   <p>
         *                   <ul>
         *                   <li>system: system metrics of CloudMonitor</li>
         *                   <li>custom: custom metrics that are reported to CloudMonitor</li>
         *                   </ul>
         * @return {@code this}
         */
        public Builder metricType(java.lang.String metricType) {
            this.metricType = metricType;
            return this;
        }

        /**
         * Sets the value of {@link AlarmTaskProps#getMetricType}
         * @param metricType Property metricType: The type of the metric.
         *                   Valid values:
         *                   <p>
         *                   <ul>
         *                   <li>system: system metrics of CloudMonitor</li>
         *                   <li>custom: custom metrics that are reported to CloudMonitor</li>
         *                   </ul>
         * @return {@code this}
         */
        public Builder metricType(com.aliyun.ros.cdk.core.IResolvable metricType) {
            this.metricType = metricType;
            return this;
        }

        /**
         * Sets the value of {@link AlarmTaskProps#getName}
         * @param name Property name: The name of the event-triggered task.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link AlarmTaskProps#getName}
         * @param name Property name: The name of the event-triggered task.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link AlarmTaskProps#getPeriod}
         * @param period Property period: The period of time during which statistics about the metric is collected.
         *               Unit:
         *               seconds. Valid values:
         *               <p>
         *               <ul>
         *               <li>15</li>
         *               <li>60</li>
         *               <li>120</li>
         *               <li>300</li>
         *               <li>900</li>
         *               </ul>
         *               <p>
         *               <blockquote>
         *               <p>
         *               If your scaling group is of the ECS type and uses CloudMonitor metrics, you can
         *               set Period to 15. In other cases, you can set Period to 60, 120, 300, or 900. In
         *               most cases, the name of a CloudMonitor metric contains Agent.
         *               <p>
         *               </blockquote>
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link AlarmTaskProps#getPeriod}
         * @param period Property period: The period of time during which statistics about the metric is collected.
         *               Unit:
         *               seconds. Valid values:
         *               <p>
         *               <ul>
         *               <li>15</li>
         *               <li>60</li>
         *               <li>120</li>
         *               <li>300</li>
         *               <li>900</li>
         *               </ul>
         *               <p>
         *               <blockquote>
         *               <p>
         *               If your scaling group is of the ECS type and uses CloudMonitor metrics, you can
         *               set Period to 15. In other cases, you can set Period to 60, 120, 300, or 900. In
         *               most cases, the name of a CloudMonitor metric contains Agent.
         *               <p>
         *               </blockquote>
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link AlarmTaskProps#getStatistics}
         * @param statistics Property statistics: The method that is used to aggregate statistics for the metric.
         *                   Valid values:
         *                   <p>
         *                   <ul>
         *                   <li>Average</li>
         *                   <li>Minimum</li>
         *                   <li>Maximum</li>
         *                   </ul>
         * @return {@code this}
         */
        public Builder statistics(java.lang.String statistics) {
            this.statistics = statistics;
            return this;
        }

        /**
         * Sets the value of {@link AlarmTaskProps#getStatistics}
         * @param statistics Property statistics: The method that is used to aggregate statistics for the metric.
         *                   Valid values:
         *                   <p>
         *                   <ul>
         *                   <li>Average</li>
         *                   <li>Minimum</li>
         *                   <li>Maximum</li>
         *                   </ul>
         * @return {@code this}
         */
        public Builder statistics(com.aliyun.ros.cdk.core.IResolvable statistics) {
            this.statistics = statistics;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link AlarmTaskProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public AlarmTaskProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link AlarmTaskProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AlarmTaskProps {
        private final java.lang.Object alarmAction;
        private final java.lang.Object metricName;
        private final java.lang.Object scalingGroupId;
        private final java.lang.Object threshold;
        private final java.lang.Object comparisonOperator;
        private final java.lang.Object description;
        private final java.lang.Object dimensions;
        private final java.lang.Object evaluationCount;
        private final java.lang.Object groupId;
        private final java.lang.Object metricType;
        private final java.lang.Object name;
        private final java.lang.Object period;
        private final java.lang.Object statistics;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.alarmAction = software.amazon.jsii.Kernel.get(this, "alarmAction", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.metricName = software.amazon.jsii.Kernel.get(this, "metricName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.scalingGroupId = software.amazon.jsii.Kernel.get(this, "scalingGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.threshold = software.amazon.jsii.Kernel.get(this, "threshold", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.comparisonOperator = software.amazon.jsii.Kernel.get(this, "comparisonOperator", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dimensions = software.amazon.jsii.Kernel.get(this, "dimensions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.evaluationCount = software.amazon.jsii.Kernel.get(this, "evaluationCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.groupId = software.amazon.jsii.Kernel.get(this, "groupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.metricType = software.amazon.jsii.Kernel.get(this, "metricType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.statistics = software.amazon.jsii.Kernel.get(this, "statistics", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.alarmAction = java.util.Objects.requireNonNull(builder.alarmAction, "alarmAction is required");
            this.metricName = java.util.Objects.requireNonNull(builder.metricName, "metricName is required");
            this.scalingGroupId = java.util.Objects.requireNonNull(builder.scalingGroupId, "scalingGroupId is required");
            this.threshold = java.util.Objects.requireNonNull(builder.threshold, "threshold is required");
            this.comparisonOperator = builder.comparisonOperator;
            this.description = builder.description;
            this.dimensions = builder.dimensions;
            this.evaluationCount = builder.evaluationCount;
            this.groupId = builder.groupId;
            this.metricType = builder.metricType;
            this.name = builder.name;
            this.period = builder.period;
            this.statistics = builder.statistics;
        }

        @Override
        public final java.lang.Object getAlarmAction() {
            return this.alarmAction;
        }

        @Override
        public final java.lang.Object getMetricName() {
            return this.metricName;
        }

        @Override
        public final java.lang.Object getScalingGroupId() {
            return this.scalingGroupId;
        }

        @Override
        public final java.lang.Object getThreshold() {
            return this.threshold;
        }

        @Override
        public final java.lang.Object getComparisonOperator() {
            return this.comparisonOperator;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getDimensions() {
            return this.dimensions;
        }

        @Override
        public final java.lang.Object getEvaluationCount() {
            return this.evaluationCount;
        }

        @Override
        public final java.lang.Object getGroupId() {
            return this.groupId;
        }

        @Override
        public final java.lang.Object getMetricType() {
            return this.metricType;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getPeriod() {
            return this.period;
        }

        @Override
        public final java.lang.Object getStatistics() {
            return this.statistics;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("alarmAction", om.valueToTree(this.getAlarmAction()));
            data.set("metricName", om.valueToTree(this.getMetricName()));
            data.set("scalingGroupId", om.valueToTree(this.getScalingGroupId()));
            data.set("threshold", om.valueToTree(this.getThreshold()));
            if (this.getComparisonOperator() != null) {
                data.set("comparisonOperator", om.valueToTree(this.getComparisonOperator()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getDimensions() != null) {
                data.set("dimensions", om.valueToTree(this.getDimensions()));
            }
            if (this.getEvaluationCount() != null) {
                data.set("evaluationCount", om.valueToTree(this.getEvaluationCount()));
            }
            if (this.getGroupId() != null) {
                data.set("groupId", om.valueToTree(this.getGroupId()));
            }
            if (this.getMetricType() != null) {
                data.set("metricType", om.valueToTree(this.getMetricType()));
            }
            if (this.getName() != null) {
                data.set("name", om.valueToTree(this.getName()));
            }
            if (this.getPeriod() != null) {
                data.set("period", om.valueToTree(this.getPeriod()));
            }
            if (this.getStatistics() != null) {
                data.set("statistics", om.valueToTree(this.getStatistics()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ess.AlarmTaskProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            AlarmTaskProps.Jsii$Proxy that = (AlarmTaskProps.Jsii$Proxy) o;

            if (!alarmAction.equals(that.alarmAction)) return false;
            if (!metricName.equals(that.metricName)) return false;
            if (!scalingGroupId.equals(that.scalingGroupId)) return false;
            if (!threshold.equals(that.threshold)) return false;
            if (this.comparisonOperator != null ? !this.comparisonOperator.equals(that.comparisonOperator) : that.comparisonOperator != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.dimensions != null ? !this.dimensions.equals(that.dimensions) : that.dimensions != null) return false;
            if (this.evaluationCount != null ? !this.evaluationCount.equals(that.evaluationCount) : that.evaluationCount != null) return false;
            if (this.groupId != null ? !this.groupId.equals(that.groupId) : that.groupId != null) return false;
            if (this.metricType != null ? !this.metricType.equals(that.metricType) : that.metricType != null) return false;
            if (this.name != null ? !this.name.equals(that.name) : that.name != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            return this.statistics != null ? this.statistics.equals(that.statistics) : that.statistics == null;
        }

        @Override
        public final int hashCode() {
            int result = this.alarmAction.hashCode();
            result = 31 * result + (this.metricName.hashCode());
            result = 31 * result + (this.scalingGroupId.hashCode());
            result = 31 * result + (this.threshold.hashCode());
            result = 31 * result + (this.comparisonOperator != null ? this.comparisonOperator.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.dimensions != null ? this.dimensions.hashCode() : 0);
            result = 31 * result + (this.evaluationCount != null ? this.evaluationCount.hashCode() : 0);
            result = 31 * result + (this.groupId != null ? this.groupId.hashCode() : 0);
            result = 31 * result + (this.metricType != null ? this.metricType.hashCode() : 0);
            result = 31 * result + (this.name != null ? this.name.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.statistics != null ? this.statistics.hashCode() : 0);
            return result;
        }
    }
}
