using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ess
{
    /// <summary>Properties for defining a `RosAlarmTask`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-alarmtask
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosAlarmTaskProps), fullyQualifiedName: "@alicloud/ros-cdk-ess.RosAlarmTaskProps")]
    public interface IRosAlarmTaskProps
    {
        /// <remarks>
        /// <strong>Property</strong>: alarmAction: The list of unique identifiers of the scaling rules that are associated with the
        /// event-triggered task.
        /// </remarks>
        [JsiiProperty(name: "alarmAction", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object AlarmAction
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: metricName: The name of the metric. Valid values of MetricName vary based on the value of
        /// MetricType.
        /// *   If you set MetricType to custom, the valid values of MetricName are your
        /// custom metrics.
        /// *   If you set MetricType to system, MetricName has the following valid values:
        /// *   CpuUtilization: (ECS) the CPU utilization. Unit: %.
        /// *   IntranetTx: the outbound traffic over the internal network from an ECS
        /// instance. Unit: KB\/min.
        /// *   IntranetRx: the inbound traffic over the internal network to an ECS instance.
        /// Unit: KB\/min.
        /// *   VpcInternetTx: the outbound traffic over the Internet from an ECS instance
        /// that resides in a virtual private cloud (VPC). Unit: KB\/min.
        /// *   VpcInternetRx: the inbound traffic over the Internet to an ECS instance that
        /// resides in a VPC. Unit: KB\/min.
        /// *   SystemDiskReadBps: the number of bytes read from the system disk that is used
        /// by an ECS instance per second.
        /// *   SystemDiskWriteBps: the number of bytes written to the system disk that is
        /// used by an ECS instance per second.
        /// *   SystemDiskReadOps: the number of read operations on the system disk that is
        /// used by an ECS instance per second.
        /// *   SystemDiskWriteOps: the number of write operations on the system disk that is
        /// used by an ECS instance per second.
        /// *   CpuUtilizationAgent: the CPU utilization of an agent. Unit: %.
        /// *   GpuMemoryFreeUtilizationAgent: the percentage of idle GPU memory of an agent.
        /// *   GpuMemoryUtilizationAgent: the GPU memory usage of an agent. Unit: %.
        /// *   MemoryUtilization: the memory usage of an agent. Unit: %.
        /// *   LoadAverage: the average system load of an agent.
        /// *   TcpConnection: the total number of TCP connections of an agent.
        /// *   TcpConnection: the number of established TCP connections of an agent.
        /// *   PackagesNetOut: the number of packets that are sent by the internal network
        /// interface controller (NIC) used by an agent.
        /// *   PackagesNetIn: the number of packets that are received by the internal NIC
        /// used by an agent.
        /// *   EciPodCpuUtilization: the CPU utilization of an elastic container instance.
        /// Unit: %.
        /// *   EciPodMemoryUtilization: the memory usage of an elastic container instance.
        /// Unit: %.
        /// </remarks>
        [JsiiProperty(name: "metricName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object MetricName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: scalingGroupId: The ID of the scaling group.
        /// </remarks>
        [JsiiProperty(name: "scalingGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ScalingGroupId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: threshold: The threshold of a metric in the multi-metric alert rule. If the threshold is
        /// reached the specified number of times within the specified period, a scaling rule
        /// is executed.
        /// </remarks>
        [JsiiProperty(name: "threshold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Threshold
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: comparisonOperator: The operator that is used to compare the metric value and the metric threshold.
        /// Valid values:
        /// *   If the metric value is greater than or equal to the metric threshold, set the
        /// value to `>=`.
        /// *   If the metric value is less than or equal to the metric threshold, set the
        /// value to `<=`.
        /// *   If the metric value is greater than the metric threshold, set the value to
        /// `>`.
        /// *   If the metric value is less than the metric threshold, set the value to `<`.
        /// </remarks>
        [JsiiProperty(name: "comparisonOperator", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ComparisonOperator
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: description: The description of the event-triggered task.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: dimensions: Dimensions
        /// </remarks>
        [JsiiProperty(name: "dimensions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ess.RosAlarmTask.DimensionsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Dimensions
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: evaluationCount: The number of times that the threshold must be reached before a scaling rule can
        /// be executed. For example, if you set this parameter to 3, the average CPU
        /// utilization must reach or exceed 80% three times in a row before a scaling rule
        /// is triggered.
        /// </remarks>
        [JsiiProperty(name: "evaluationCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EvaluationCount
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: groupId: The ID of the application group to which the custom metric belongs. This
        /// parameter must be specified when MetricType is set to custom.
        /// </remarks>
        [JsiiProperty(name: "groupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? GroupId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: metricType: The type of the metric. Valid values:
        /// *   system: system metrics of CloudMonitor
        /// *   custom: custom metrics that are reported to CloudMonitor
        /// </remarks>
        [JsiiProperty(name: "metricType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MetricType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: name: The name of the event-triggered task.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Name
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: period: The period of time during which statistics about the metric is collected. Unit:
        /// seconds. Valid values:
        /// *   15
        /// *   60
        /// *   120
        /// *   300
        /// *   900
        /// > If your scaling group is of the ECS type and uses CloudMonitor metrics, you can
        /// set Period to 15. In other cases, you can set Period to 60, 120, 300, or 900. In
        /// most cases, the name of a CloudMonitor metric contains Agent.
        /// </remarks>
        [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Period
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: statistics: The method that is used to aggregate statistics for the metric. Valid values:
        /// *   Average
        /// *   Minimum
        /// *   Maximum
        /// </remarks>
        [JsiiProperty(name: "statistics", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Statistics
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosAlarmTask`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-alarmtask
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosAlarmTaskProps), fullyQualifiedName: "@alicloud/ros-cdk-ess.RosAlarmTaskProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ess.IRosAlarmTaskProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: alarmAction: The list of unique identifiers of the scaling rules that are associated with the
            /// event-triggered task.
            /// </remarks>
            [JsiiProperty(name: "alarmAction", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object AlarmAction
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: metricName: The name of the metric. Valid values of MetricName vary based on the value of
            /// MetricType.
            /// *   If you set MetricType to custom, the valid values of MetricName are your
            /// custom metrics.
            /// *   If you set MetricType to system, MetricName has the following valid values:
            /// *   CpuUtilization: (ECS) the CPU utilization. Unit: %.
            /// *   IntranetTx: the outbound traffic over the internal network from an ECS
            /// instance. Unit: KB\/min.
            /// *   IntranetRx: the inbound traffic over the internal network to an ECS instance.
            /// Unit: KB\/min.
            /// *   VpcInternetTx: the outbound traffic over the Internet from an ECS instance
            /// that resides in a virtual private cloud (VPC). Unit: KB\/min.
            /// *   VpcInternetRx: the inbound traffic over the Internet to an ECS instance that
            /// resides in a VPC. Unit: KB\/min.
            /// *   SystemDiskReadBps: the number of bytes read from the system disk that is used
            /// by an ECS instance per second.
            /// *   SystemDiskWriteBps: the number of bytes written to the system disk that is
            /// used by an ECS instance per second.
            /// *   SystemDiskReadOps: the number of read operations on the system disk that is
            /// used by an ECS instance per second.
            /// *   SystemDiskWriteOps: the number of write operations on the system disk that is
            /// used by an ECS instance per second.
            /// *   CpuUtilizationAgent: the CPU utilization of an agent. Unit: %.
            /// *   GpuMemoryFreeUtilizationAgent: the percentage of idle GPU memory of an agent.
            /// *   GpuMemoryUtilizationAgent: the GPU memory usage of an agent. Unit: %.
            /// *   MemoryUtilization: the memory usage of an agent. Unit: %.
            /// *   LoadAverage: the average system load of an agent.
            /// *   TcpConnection: the total number of TCP connections of an agent.
            /// *   TcpConnection: the number of established TCP connections of an agent.
            /// *   PackagesNetOut: the number of packets that are sent by the internal network
            /// interface controller (NIC) used by an agent.
            /// *   PackagesNetIn: the number of packets that are received by the internal NIC
            /// used by an agent.
            /// *   EciPodCpuUtilization: the CPU utilization of an elastic container instance.
            /// Unit: %.
            /// *   EciPodMemoryUtilization: the memory usage of an elastic container instance.
            /// Unit: %.
            /// </remarks>
            [JsiiProperty(name: "metricName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object MetricName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: scalingGroupId: The ID of the scaling group.
            /// </remarks>
            [JsiiProperty(name: "scalingGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ScalingGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: threshold: The threshold of a metric in the multi-metric alert rule. If the threshold is
            /// reached the specified number of times within the specified period, a scaling rule
            /// is executed.
            /// </remarks>
            [JsiiProperty(name: "threshold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Threshold
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: comparisonOperator: The operator that is used to compare the metric value and the metric threshold.
            /// Valid values:
            /// *   If the metric value is greater than or equal to the metric threshold, set the
            /// value to `>=`.
            /// *   If the metric value is less than or equal to the metric threshold, set the
            /// value to `<=`.
            /// *   If the metric value is greater than the metric threshold, set the value to
            /// `>`.
            /// *   If the metric value is less than the metric threshold, set the value to `<`.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "comparisonOperator", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ComparisonOperator
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: description: The description of the event-triggered task.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: dimensions: Dimensions
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dimensions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ess.RosAlarmTask.DimensionsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Dimensions
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: evaluationCount: The number of times that the threshold must be reached before a scaling rule can
            /// be executed. For example, if you set this parameter to 3, the average CPU
            /// utilization must reach or exceed 80% three times in a row before a scaling rule
            /// is triggered.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "evaluationCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EvaluationCount
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: groupId: The ID of the application group to which the custom metric belongs. This
            /// parameter must be specified when MetricType is set to custom.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "groupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? GroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: metricType: The type of the metric. Valid values:
            /// *   system: system metrics of CloudMonitor
            /// *   custom: custom metrics that are reported to CloudMonitor
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "metricType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MetricType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: name: The name of the event-triggered task.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Name
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: period: The period of time during which statistics about the metric is collected. Unit:
            /// seconds. Valid values:
            /// *   15
            /// *   60
            /// *   120
            /// *   300
            /// *   900
            /// > If your scaling group is of the ECS type and uses CloudMonitor metrics, you can
            /// set Period to 15. In other cases, you can set Period to 60, 120, 300, or 900. In
            /// most cases, the name of a CloudMonitor metric contains Agent.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Period
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: statistics: The method that is used to aggregate statistics for the metric. Valid values:
            /// *   Average
            /// *   Minimum
            /// *   Maximum
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "statistics", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Statistics
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
