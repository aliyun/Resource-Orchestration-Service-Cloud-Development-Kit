using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Threatdetection
{
    /// <summary>Properties for defining a `CycleTask`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-cycletask
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ICycleTaskProps), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.CycleTaskProps")]
    public interface ICycleTaskProps
    {
        /// <summary>Property enable: Specifies whether to enable the task.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description><strong>1</strong>: yes</description>
        /// <description><strong>0</strong>: no.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "enable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Enable
        {
            get;
        }

        /// <summary>Property firstDateStr: The first time when the task is performed.</summary>
        [JsiiProperty(name: "firstDateStr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object FirstDateStr
        {
            get;
        }

        /// <summary>Property intervalPeriod: The interval at which the task is run.</summary>
        [JsiiProperty(name: "intervalPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object IntervalPeriod
        {
            get;
        }

        /// <summary>Property periodUnit: The unit of the scan interval.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description><strong>day</strong></description>
        /// <description><strong>hour</strong>.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "periodUnit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PeriodUnit
        {
            get;
        }

        /// <summary>Property targetEndTime: The time when the task ends.</summary>
        /// <remarks>
        /// Unit: hours.
        /// </remarks>
        [JsiiProperty(name: "targetEndTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TargetEndTime
        {
            get;
        }

        /// <summary>Property targetStartTime: The time when the task is started.</summary>
        /// <remarks>
        /// Unit: hours.
        /// </remarks>
        [JsiiProperty(name: "targetStartTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TargetStartTime
        {
            get;
        }

        /// <summary>Property taskName: The task name.</summary>
        [JsiiProperty(name: "taskName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TaskName
        {
            get;
        }

        /// <summary>Property taskType: The type of the task.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description><strong>VIRUS_VUL_SCHEDULE_SCAN</strong>: virus scan task</description>
        /// <description><strong>IMAGE_SCAN</strong>: image scan task</description>
        /// <description><strong>EMG_VUL_SCHEDULE_SCAN</strong>: urgent vulnerability scan task.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "taskType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TaskType
        {
            get;
        }

        /// <summary>Property param: The additional information.</summary>
        [JsiiProperty(name: "param", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Param
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property source: The additional source for the task.</summary>
        [JsiiProperty(name: "source", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Source
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `CycleTask`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-cycletask
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ICycleTaskProps), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.CycleTaskProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Threatdetection.ICycleTaskProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property enable: Specifies whether to enable the task.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description><strong>1</strong>: yes</description>
            /// <description><strong>0</strong>: no.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "enable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Enable
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property firstDateStr: The first time when the task is performed.</summary>
            [JsiiProperty(name: "firstDateStr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object FirstDateStr
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property intervalPeriod: The interval at which the task is run.</summary>
            [JsiiProperty(name: "intervalPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object IntervalPeriod
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property periodUnit: The unit of the scan interval.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description><strong>day</strong></description>
            /// <description><strong>hour</strong>.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "periodUnit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PeriodUnit
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property targetEndTime: The time when the task ends.</summary>
            /// <remarks>
            /// Unit: hours.
            /// </remarks>
            [JsiiProperty(name: "targetEndTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TargetEndTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property targetStartTime: The time when the task is started.</summary>
            /// <remarks>
            /// Unit: hours.
            /// </remarks>
            [JsiiProperty(name: "targetStartTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TargetStartTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property taskName: The task name.</summary>
            [JsiiProperty(name: "taskName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TaskName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property taskType: The type of the task.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description><strong>VIRUS_VUL_SCHEDULE_SCAN</strong>: virus scan task</description>
            /// <description><strong>IMAGE_SCAN</strong>: image scan task</description>
            /// <description><strong>EMG_VUL_SCHEDULE_SCAN</strong>: urgent vulnerability scan task.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "taskType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TaskType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property param: The additional information.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "param", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? Param
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property source: The additional source for the task.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "source", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Source
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
