using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ess
{
    /// <summary>Properties for defining a `AlarmTask`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-alarmtask
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IAlarmTaskProps), fullyQualifiedName: "@alicloud/ros-cdk-ess.AlarmTaskProps")]
    public interface IAlarmTaskProps
    {
        /// <summary>Property alarmAction: The list of unique identifiers of the scaling rules that are associated with the event-triggered task.</summary>
        [JsiiProperty(name: "alarmAction", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object AlarmAction
        {
            get;
        }

        /// <summary>Property metricName: The name of the metric.</summary>
        /// <remarks>
        /// Valid values of MetricName vary based on the value of
        /// MetricType.
        ///
        /// <list type="bullet">
        /// <description>If you set MetricType to custom, the valid values of MetricName are your
        /// custom metrics.</description>
        /// <description>If you set MetricType to system, MetricName has the following valid values:</description>
        /// <description>CpuUtilization: (ECS) the CPU utilization. Unit: %.</description>
        /// <description>IntranetTx: the outbound traffic over the internal network from an ECS
        /// instance. Unit: KB/min.</description>
        /// <description>IntranetRx: the inbound traffic over the internal network to an ECS instance.
        /// Unit: KB/min.</description>
        /// <description>VpcInternetTx: the outbound traffic over the Internet from an ECS instance
        /// that resides in a virtual private cloud (VPC). Unit: KB/min.</description>
        /// <description>VpcInternetRx: the inbound traffic over the Internet to an ECS instance that
        /// resides in a VPC. Unit: KB/min.</description>
        /// <description>SystemDiskReadBps: the number of bytes read from the system disk that is used
        /// by an ECS instance per second.</description>
        /// <description>SystemDiskWriteBps: the number of bytes written to the system disk that is
        /// used by an ECS instance per second.</description>
        /// <description>SystemDiskReadOps: the number of read operations on the system disk that is
        /// used by an ECS instance per second.</description>
        /// <description>SystemDiskWriteOps: the number of write operations on the system disk that is
        /// used by an ECS instance per second.</description>
        /// <description>CpuUtilizationAgent: the CPU utilization of an agent. Unit: %.</description>
        /// <description>GpuMemoryFreeUtilizationAgent: the percentage of idle GPU memory of an agent.</description>
        /// <description>GpuMemoryUtilizationAgent: the GPU memory usage of an agent. Unit: %.</description>
        /// <description>MemoryUtilization: the memory usage of an agent. Unit: %.</description>
        /// <description>LoadAverage: the average system load of an agent.</description>
        /// <description>TcpConnection: the total number of TCP connections of an agent.</description>
        /// <description>TcpConnection: the number of established TCP connections of an agent.</description>
        /// <description>PackagesNetOut: the number of packets that are sent by the internal network
        /// interface controller (NIC) used by an agent.</description>
        /// <description>PackagesNetIn: the number of packets that are received by the internal NIC
        /// used by an agent.</description>
        /// <description>EciPodCpuUtilization: the CPU utilization of an elastic container instance.
        /// Unit: %.</description>
        /// <description>EciPodMemoryUtilization: the memory usage of an elastic container instance.
        /// Unit: %.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "metricName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object MetricName
        {
            get;
        }

        /// <summary>Property scalingGroupId: The ID of the scaling group.</summary>
        [JsiiProperty(name: "scalingGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ScalingGroupId
        {
            get;
        }

        /// <summary>Property threshold: The threshold of a metric in the multi-metric alert rule.</summary>
        /// <remarks>
        /// If the threshold is
        /// reached the specified number of times within the specified period, a scaling rule
        /// is executed.
        /// </remarks>
        [JsiiProperty(name: "threshold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Threshold
        {
            get;
        }

        /// <summary>Property comparisonOperator: The operator that is used to compare the metric value and the metric threshold.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>If the metric value is greater than or equal to the metric threshold, set the
        /// value to <c>&gt;=</c>.</description>
        /// <description>If the metric value is less than or equal to the metric threshold, set the
        /// value to <c>&lt;=</c>.</description>
        /// <description>If the metric value is greater than the metric threshold, set the value to
        /// <c>&gt;</c>.</description>
        /// <description>If the metric value is less than the metric threshold, set the value to <c>&lt;</c>.</description>
        /// </list>
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

        /// <summary>Property description: The description of the event-triggered task.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dimensions: Dimensions.</summary>
        [JsiiProperty(name: "dimensions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ess.RosAlarmTask.DimensionsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Dimensions
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property evaluationCount: The number of times that the threshold must be reached before a scaling rule can be executed.</summary>
        /// <remarks>
        /// For example, if you set this parameter to 3, the average CPU
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

        /// <summary>Property groupId: The ID of the application group to which the custom metric belongs.</summary>
        /// <remarks>
        /// This
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

        /// <summary>Property metricType: The type of the metric.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>system: system metrics of CloudMonitor</description>
        /// <description>custom: custom metrics that are reported to CloudMonitor</description>
        /// </list>
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

        /// <summary>Property name: The name of the event-triggered task.</summary>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Name
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property period: The period of time during which statistics about the metric is collected.</summary>
        /// <remarks>
        /// Unit:
        /// seconds. Valid values:
        ///
        /// <list type="bullet">
        /// <description>15</description>
        /// <description>60</description>
        /// <description>120</description>
        /// <description>300</description>
        /// <description>900</description>
        /// </list>
        ///
        ///     If your scaling group is of the ECS type and uses CloudMonitor metrics, you can
        ///     set Period to 15. In other cases, you can set Period to 60, 120, 300, or 900. In
        ///     most cases, the name of a CloudMonitor metric contains Agent.
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

        /// <summary>Property statistics: The method that is used to aggregate statistics for the metric.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>Average</description>
        /// <description>Minimum</description>
        /// <description>Maximum</description>
        /// </list>
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

        /// <summary>Properties for defining a `AlarmTask`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-alarmtask
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IAlarmTaskProps), fullyQualifiedName: "@alicloud/ros-cdk-ess.AlarmTaskProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ess.IAlarmTaskProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property alarmAction: The list of unique identifiers of the scaling rules that are associated with the event-triggered task.</summary>
            [JsiiProperty(name: "alarmAction", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object AlarmAction
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property metricName: The name of the metric.</summary>
            /// <remarks>
            /// Valid values of MetricName vary based on the value of
            /// MetricType.
            ///
            /// <list type="bullet">
            /// <description>If you set MetricType to custom, the valid values of MetricName are your
            /// custom metrics.</description>
            /// <description>If you set MetricType to system, MetricName has the following valid values:</description>
            /// <description>CpuUtilization: (ECS) the CPU utilization. Unit: %.</description>
            /// <description>IntranetTx: the outbound traffic over the internal network from an ECS
            /// instance. Unit: KB/min.</description>
            /// <description>IntranetRx: the inbound traffic over the internal network to an ECS instance.
            /// Unit: KB/min.</description>
            /// <description>VpcInternetTx: the outbound traffic over the Internet from an ECS instance
            /// that resides in a virtual private cloud (VPC). Unit: KB/min.</description>
            /// <description>VpcInternetRx: the inbound traffic over the Internet to an ECS instance that
            /// resides in a VPC. Unit: KB/min.</description>
            /// <description>SystemDiskReadBps: the number of bytes read from the system disk that is used
            /// by an ECS instance per second.</description>
            /// <description>SystemDiskWriteBps: the number of bytes written to the system disk that is
            /// used by an ECS instance per second.</description>
            /// <description>SystemDiskReadOps: the number of read operations on the system disk that is
            /// used by an ECS instance per second.</description>
            /// <description>SystemDiskWriteOps: the number of write operations on the system disk that is
            /// used by an ECS instance per second.</description>
            /// <description>CpuUtilizationAgent: the CPU utilization of an agent. Unit: %.</description>
            /// <description>GpuMemoryFreeUtilizationAgent: the percentage of idle GPU memory of an agent.</description>
            /// <description>GpuMemoryUtilizationAgent: the GPU memory usage of an agent. Unit: %.</description>
            /// <description>MemoryUtilization: the memory usage of an agent. Unit: %.</description>
            /// <description>LoadAverage: the average system load of an agent.</description>
            /// <description>TcpConnection: the total number of TCP connections of an agent.</description>
            /// <description>TcpConnection: the number of established TCP connections of an agent.</description>
            /// <description>PackagesNetOut: the number of packets that are sent by the internal network
            /// interface controller (NIC) used by an agent.</description>
            /// <description>PackagesNetIn: the number of packets that are received by the internal NIC
            /// used by an agent.</description>
            /// <description>EciPodCpuUtilization: the CPU utilization of an elastic container instance.
            /// Unit: %.</description>
            /// <description>EciPodMemoryUtilization: the memory usage of an elastic container instance.
            /// Unit: %.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "metricName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object MetricName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property scalingGroupId: The ID of the scaling group.</summary>
            [JsiiProperty(name: "scalingGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ScalingGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property threshold: The threshold of a metric in the multi-metric alert rule.</summary>
            /// <remarks>
            /// If the threshold is
            /// reached the specified number of times within the specified period, a scaling rule
            /// is executed.
            /// </remarks>
            [JsiiProperty(name: "threshold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Threshold
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property comparisonOperator: The operator that is used to compare the metric value and the metric threshold.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>If the metric value is greater than or equal to the metric threshold, set the
            /// value to <c>&gt;=</c>.</description>
            /// <description>If the metric value is less than or equal to the metric threshold, set the
            /// value to <c>&lt;=</c>.</description>
            /// <description>If the metric value is greater than the metric threshold, set the value to
            /// <c>&gt;</c>.</description>
            /// <description>If the metric value is less than the metric threshold, set the value to <c>&lt;</c>.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "comparisonOperator", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ComparisonOperator
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property description: The description of the event-triggered task.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dimensions: Dimensions.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dimensions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ess.RosAlarmTask.DimensionsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Dimensions
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property evaluationCount: The number of times that the threshold must be reached before a scaling rule can be executed.</summary>
            /// <remarks>
            /// For example, if you set this parameter to 3, the average CPU
            /// utilization must reach or exceed 80% three times in a row before a scaling rule
            /// is triggered.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "evaluationCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EvaluationCount
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property groupId: The ID of the application group to which the custom metric belongs.</summary>
            /// <remarks>
            /// This
            /// parameter must be specified when MetricType is set to custom.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "groupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? GroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property metricType: The type of the metric.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>system: system metrics of CloudMonitor</description>
            /// <description>custom: custom metrics that are reported to CloudMonitor</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "metricType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MetricType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property name: The name of the event-triggered task.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Name
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property period: The period of time during which statistics about the metric is collected.</summary>
            /// <remarks>
            /// Unit:
            /// seconds. Valid values:
            ///
            /// <list type="bullet">
            /// <description>15</description>
            /// <description>60</description>
            /// <description>120</description>
            /// <description>300</description>
            /// <description>900</description>
            /// </list>
            ///
            ///     If your scaling group is of the ECS type and uses CloudMonitor metrics, you can
            ///     set Period to 15. In other cases, you can set Period to 60, 120, 300, or 900. In
            ///     most cases, the name of a CloudMonitor metric contains Agent.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Period
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property statistics: The method that is used to aggregate statistics for the metric.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>Average</description>
            /// <description>Minimum</description>
            /// <description>Maximum</description>
            /// </list>
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
