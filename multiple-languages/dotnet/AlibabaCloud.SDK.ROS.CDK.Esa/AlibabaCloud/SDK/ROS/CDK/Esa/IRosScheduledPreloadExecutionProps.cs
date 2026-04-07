using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Esa
{
    /// <summary>Properties for defining a `RosScheduledPreloadExecution`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-scheduledpreloadexecution
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosScheduledPreloadExecutionProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.RosScheduledPreloadExecutionProps")]
    public interface IRosScheduledPreloadExecutionProps
    {
        /// <remarks>
        /// <strong>Property</strong>: interval: The time interval between each batch execution. Unit: seconds.
        /// </remarks>
        [JsiiProperty(name: "interval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Interval
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: scheduledPreloadJobId: The ID of the prefetch task.
        /// </remarks>
        [JsiiProperty(name: "scheduledPreloadJobId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ScheduledPreloadJobId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: sliceLen: The number of URLs prefetched in each batch.
        /// </remarks>
        [JsiiProperty(name: "sliceLen", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SliceLen
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: endTime: The end time of the prefetch plan.
        /// </remarks>
        [JsiiProperty(name: "endTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EndTime
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: startTime: The start time of the prefetch plan.
        /// </remarks>
        [JsiiProperty(name: "startTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? StartTime
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosScheduledPreloadExecution`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-scheduledpreloadexecution
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosScheduledPreloadExecutionProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.RosScheduledPreloadExecutionProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Esa.IRosScheduledPreloadExecutionProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: interval: The time interval between each batch execution. Unit: seconds.
            /// </remarks>
            [JsiiProperty(name: "interval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Interval
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: scheduledPreloadJobId: The ID of the prefetch task.
            /// </remarks>
            [JsiiProperty(name: "scheduledPreloadJobId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ScheduledPreloadJobId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: sliceLen: The number of URLs prefetched in each batch.
            /// </remarks>
            [JsiiProperty(name: "sliceLen", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SliceLen
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: endTime: The end time of the prefetch plan.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "endTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EndTime
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: startTime: The start time of the prefetch plan.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "startTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? StartTime
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
