package com.aliyun.ros.cdk.ess;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ESS::AlarmTask</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-08-31T09:06:45.515Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ess.$Module.class, fqn = "@alicloud/ros-cdk-ess.AlarmTask")
public class AlarmTask extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.ess.IAlarmTask {

    protected AlarmTask(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected AlarmTask(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public AlarmTask(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ess.AlarmTaskProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public AlarmTask(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ess.AlarmTaskProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AlarmTaskId: The alarm task ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAlarmTaskId() {
        return software.amazon.jsii.Kernel.get(this, "attrAlarmTaskId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ess.AlarmTaskProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ess.AlarmTaskProps.class));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    protected void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.String getId() {
        return software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    protected void setId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "id", java.util.Objects.requireNonNull(value, "id is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ess.AlarmTask}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ess.AlarmTask> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.ess.AlarmTaskProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ess.AlarmTaskProps.Builder();
        }

        /**
         * Property alarmAction: The list of unique identifiers of the scaling rules that are associated with the event-triggered task.
         * <p>
         * @return {@code this}
         * @param alarmAction Property alarmAction: The list of unique identifiers of the scaling rules that are associated with the event-triggered task. This parameter is required.
         */
        public Builder alarmAction(final com.aliyun.ros.cdk.core.IResolvable alarmAction) {
            this.props.alarmAction(alarmAction);
            return this;
        }
        /**
         * Property alarmAction: The list of unique identifiers of the scaling rules that are associated with the event-triggered task.
         * <p>
         * @return {@code this}
         * @param alarmAction Property alarmAction: The list of unique identifiers of the scaling rules that are associated with the event-triggered task. This parameter is required.
         */
        public Builder alarmAction(final java.util.List<? extends java.lang.Object> alarmAction) {
            this.props.alarmAction(alarmAction);
            return this;
        }

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
         * <p>
         * @return {@code this}
         * @param metricName Property metricName: The name of the metric. This parameter is required.
         */
        public Builder metricName(final java.lang.String metricName) {
            this.props.metricName(metricName);
            return this;
        }
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
         * <p>
         * @return {@code this}
         * @param metricName Property metricName: The name of the metric. This parameter is required.
         */
        public Builder metricName(final com.aliyun.ros.cdk.core.IResolvable metricName) {
            this.props.metricName(metricName);
            return this;
        }

        /**
         * Property scalingGroupId: The ID of the scaling group.
         * <p>
         * @return {@code this}
         * @param scalingGroupId Property scalingGroupId: The ID of the scaling group. This parameter is required.
         */
        public Builder scalingGroupId(final java.lang.String scalingGroupId) {
            this.props.scalingGroupId(scalingGroupId);
            return this;
        }
        /**
         * Property scalingGroupId: The ID of the scaling group.
         * <p>
         * @return {@code this}
         * @param scalingGroupId Property scalingGroupId: The ID of the scaling group. This parameter is required.
         */
        public Builder scalingGroupId(final com.aliyun.ros.cdk.core.IResolvable scalingGroupId) {
            this.props.scalingGroupId(scalingGroupId);
            return this;
        }

        /**
         * Property threshold: The threshold of a metric in the multi-metric alert rule.
         * <p>
         * If the threshold is
         * reached the specified number of times within the specified period, a scaling rule
         * is executed.
         * <p>
         * @return {@code this}
         * @param threshold Property threshold: The threshold of a metric in the multi-metric alert rule. This parameter is required.
         */
        public Builder threshold(final java.lang.Number threshold) {
            this.props.threshold(threshold);
            return this;
        }
        /**
         * Property threshold: The threshold of a metric in the multi-metric alert rule.
         * <p>
         * If the threshold is
         * reached the specified number of times within the specified period, a scaling rule
         * is executed.
         * <p>
         * @return {@code this}
         * @param threshold Property threshold: The threshold of a metric in the multi-metric alert rule. This parameter is required.
         */
        public Builder threshold(final com.aliyun.ros.cdk.core.IResolvable threshold) {
            this.props.threshold(threshold);
            return this;
        }

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
         * <p>
         * @return {@code this}
         * @param comparisonOperator Property comparisonOperator: The operator that is used to compare the metric value and the metric threshold. This parameter is required.
         */
        public Builder comparisonOperator(final java.lang.String comparisonOperator) {
            this.props.comparisonOperator(comparisonOperator);
            return this;
        }
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
         * <p>
         * @return {@code this}
         * @param comparisonOperator Property comparisonOperator: The operator that is used to compare the metric value and the metric threshold. This parameter is required.
         */
        public Builder comparisonOperator(final com.aliyun.ros.cdk.core.IResolvable comparisonOperator) {
            this.props.comparisonOperator(comparisonOperator);
            return this;
        }

        /**
         * Property description: The description of the event-triggered task.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the event-triggered task. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of the event-triggered task.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the event-triggered task. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property dimensions: Dimensions.
         * <p>
         * @return {@code this}
         * @param dimensions Property dimensions: Dimensions. This parameter is required.
         */
        public Builder dimensions(final com.aliyun.ros.cdk.core.IResolvable dimensions) {
            this.props.dimensions(dimensions);
            return this;
        }
        /**
         * Property dimensions: Dimensions.
         * <p>
         * @return {@code this}
         * @param dimensions Property dimensions: Dimensions. This parameter is required.
         */
        public Builder dimensions(final java.util.List<? extends java.lang.Object> dimensions) {
            this.props.dimensions(dimensions);
            return this;
        }

        /**
         * Property evaluationCount: The number of times that the threshold must be reached before a scaling rule can be executed.
         * <p>
         * For example, if you set this parameter to 3, the average CPU
         * utilization must reach or exceed 80% three times in a row before a scaling rule
         * is triggered.
         * <p>
         * @return {@code this}
         * @param evaluationCount Property evaluationCount: The number of times that the threshold must be reached before a scaling rule can be executed. This parameter is required.
         */
        public Builder evaluationCount(final java.lang.Number evaluationCount) {
            this.props.evaluationCount(evaluationCount);
            return this;
        }
        /**
         * Property evaluationCount: The number of times that the threshold must be reached before a scaling rule can be executed.
         * <p>
         * For example, if you set this parameter to 3, the average CPU
         * utilization must reach or exceed 80% three times in a row before a scaling rule
         * is triggered.
         * <p>
         * @return {@code this}
         * @param evaluationCount Property evaluationCount: The number of times that the threshold must be reached before a scaling rule can be executed. This parameter is required.
         */
        public Builder evaluationCount(final com.aliyun.ros.cdk.core.IResolvable evaluationCount) {
            this.props.evaluationCount(evaluationCount);
            return this;
        }

        /**
         * Property groupId: The ID of the application group to which the custom metric belongs.
         * <p>
         * This
         * parameter must be specified when MetricType is set to custom.
         * <p>
         * @return {@code this}
         * @param groupId Property groupId: The ID of the application group to which the custom metric belongs. This parameter is required.
         */
        public Builder groupId(final java.lang.Number groupId) {
            this.props.groupId(groupId);
            return this;
        }
        /**
         * Property groupId: The ID of the application group to which the custom metric belongs.
         * <p>
         * This
         * parameter must be specified when MetricType is set to custom.
         * <p>
         * @return {@code this}
         * @param groupId Property groupId: The ID of the application group to which the custom metric belongs. This parameter is required.
         */
        public Builder groupId(final com.aliyun.ros.cdk.core.IResolvable groupId) {
            this.props.groupId(groupId);
            return this;
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
         * <p>
         * @return {@code this}
         * @param metricType Property metricType: The type of the metric. This parameter is required.
         */
        public Builder metricType(final java.lang.String metricType) {
            this.props.metricType(metricType);
            return this;
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
         * <p>
         * @return {@code this}
         * @param metricType Property metricType: The type of the metric. This parameter is required.
         */
        public Builder metricType(final com.aliyun.ros.cdk.core.IResolvable metricType) {
            this.props.metricType(metricType);
            return this;
        }

        /**
         * Property name: The name of the event-triggered task.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the event-triggered task. This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * Property name: The name of the event-triggered task.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the event-triggered task. This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
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
         * <p>
         * @return {@code this}
         * @param period Property period: The period of time during which statistics about the metric is collected. This parameter is required.
         */
        public Builder period(final java.lang.Number period) {
            this.props.period(period);
            return this;
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
         * <p>
         * @return {@code this}
         * @param period Property period: The period of time during which statistics about the metric is collected. This parameter is required.
         */
        public Builder period(final com.aliyun.ros.cdk.core.IResolvable period) {
            this.props.period(period);
            return this;
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
         * <p>
         * @return {@code this}
         * @param statistics Property statistics: The method that is used to aggregate statistics for the metric. This parameter is required.
         */
        public Builder statistics(final java.lang.String statistics) {
            this.props.statistics(statistics);
            return this;
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
         * <p>
         * @return {@code this}
         * @param statistics Property statistics: The method that is used to aggregate statistics for the metric. This parameter is required.
         */
        public Builder statistics(final com.aliyun.ros.cdk.core.IResolvable statistics) {
            this.props.statistics(statistics);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ess.AlarmTask}.
         */
        @Override
        public com.aliyun.ros.cdk.ess.AlarmTask build() {
            return new com.aliyun.ros.cdk.ess.AlarmTask(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
