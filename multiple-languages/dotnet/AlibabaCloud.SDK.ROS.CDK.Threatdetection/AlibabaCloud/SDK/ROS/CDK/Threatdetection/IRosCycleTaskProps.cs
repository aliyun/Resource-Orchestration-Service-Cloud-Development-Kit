using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Threatdetection
{
    /// <summary>Properties for defining a `RosCycleTask`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-cycletask
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosCycleTaskProps), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.RosCycleTaskProps")]
    public interface IRosCycleTaskProps
    {
        /// <remarks>
        /// <strong>Property</strong>: enable: Specifies whether to enable the task. Valid values:
        /// *   **1**: yes
        /// *   **0**: no.
        /// </remarks>
        [JsiiProperty(name: "enable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Enable
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: firstDateStr: The first time when the task is performed.
        /// </remarks>
        [JsiiProperty(name: "firstDateStr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object FirstDateStr
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: intervalPeriod: The interval at which the task is run.
        /// </remarks>
        [JsiiProperty(name: "intervalPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object IntervalPeriod
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: periodUnit: The unit of the scan interval. Valid values:
        /// *   **day**
        /// *   **hour**.
        /// </remarks>
        [JsiiProperty(name: "periodUnit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PeriodUnit
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: targetEndTime: The time when the task ends. Unit: hours.
        /// </remarks>
        [JsiiProperty(name: "targetEndTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TargetEndTime
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: targetStartTime: The time when the task is started. Unit: hours.
        /// </remarks>
        [JsiiProperty(name: "targetStartTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TargetStartTime
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: taskName: The task name.
        /// </remarks>
        [JsiiProperty(name: "taskName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TaskName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: taskType: The type of the task. Valid values:
        /// *   **VIRUS_VUL_SCHEDULE_SCAN**: virus scan task
        /// *   **IMAGE_SCAN**: image scan task
        /// *   **EMG_VUL_SCHEDULE_SCAN**: urgent vulnerability scan task.
        /// </remarks>
        [JsiiProperty(name: "taskType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TaskType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: param: The additional information.
        /// </remarks>
        [JsiiProperty(name: "param", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Param
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: source: The additional source for the task.
        /// </remarks>
        [JsiiProperty(name: "source", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Source
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosCycleTask`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-cycletask
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosCycleTaskProps), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.RosCycleTaskProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Threatdetection.IRosCycleTaskProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: enable: Specifies whether to enable the task. Valid values:
            /// *   **1**: yes
            /// *   **0**: no.
            /// </remarks>
            [JsiiProperty(name: "enable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Enable
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: firstDateStr: The first time when the task is performed.
            /// </remarks>
            [JsiiProperty(name: "firstDateStr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object FirstDateStr
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: intervalPeriod: The interval at which the task is run.
            /// </remarks>
            [JsiiProperty(name: "intervalPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object IntervalPeriod
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: periodUnit: The unit of the scan interval. Valid values:
            /// *   **day**
            /// *   **hour**.
            /// </remarks>
            [JsiiProperty(name: "periodUnit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PeriodUnit
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: targetEndTime: The time when the task ends. Unit: hours.
            /// </remarks>
            [JsiiProperty(name: "targetEndTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TargetEndTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: targetStartTime: The time when the task is started. Unit: hours.
            /// </remarks>
            [JsiiProperty(name: "targetStartTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TargetStartTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: taskName: The task name.
            /// </remarks>
            [JsiiProperty(name: "taskName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TaskName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: taskType: The type of the task. Valid values:
            /// *   **VIRUS_VUL_SCHEDULE_SCAN**: virus scan task
            /// *   **IMAGE_SCAN**: image scan task
            /// *   **EMG_VUL_SCHEDULE_SCAN**: urgent vulnerability scan task.
            /// </remarks>
            [JsiiProperty(name: "taskType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TaskType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: param: The additional information.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "param", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? Param
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: source: The additional source for the task.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "source", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Source
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
