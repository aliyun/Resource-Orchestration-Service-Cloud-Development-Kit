using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Esa
{
    /// <summary>Properties for defining a `ScheduledPreloadExecution`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-scheduledpreloadexecution
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IScheduledPreloadExecutionProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.ScheduledPreloadExecutionProps")]
    public interface IScheduledPreloadExecutionProps
    {
        /// <summary>Property interval: The time interval between each batch execution.</summary>
        /// <remarks>
        /// Unit: seconds.
        /// </remarks>
        [JsiiProperty(name: "interval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Interval
        {
            get;
        }

        /// <summary>Property scheduledPreloadJobId: The ID of the prefetch task.</summary>
        [JsiiProperty(name: "scheduledPreloadJobId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ScheduledPreloadJobId
        {
            get;
        }

        /// <summary>Property sliceLen: The number of URLs prefetched in each batch.</summary>
        [JsiiProperty(name: "sliceLen", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SliceLen
        {
            get;
        }

        /// <summary>Property endTime: The end time of the prefetch plan.</summary>
        [JsiiProperty(name: "endTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EndTime
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property startTime: The start time of the prefetch plan.</summary>
        [JsiiProperty(name: "startTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? StartTime
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ScheduledPreloadExecution`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-scheduledpreloadexecution
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IScheduledPreloadExecutionProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.ScheduledPreloadExecutionProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Esa.IScheduledPreloadExecutionProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property interval: The time interval between each batch execution.</summary>
            /// <remarks>
            /// Unit: seconds.
            /// </remarks>
            [JsiiProperty(name: "interval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Interval
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property scheduledPreloadJobId: The ID of the prefetch task.</summary>
            [JsiiProperty(name: "scheduledPreloadJobId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ScheduledPreloadJobId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property sliceLen: The number of URLs prefetched in each batch.</summary>
            [JsiiProperty(name: "sliceLen", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SliceLen
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property endTime: The end time of the prefetch plan.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "endTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EndTime
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property startTime: The start time of the prefetch plan.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "startTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? StartTime
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
