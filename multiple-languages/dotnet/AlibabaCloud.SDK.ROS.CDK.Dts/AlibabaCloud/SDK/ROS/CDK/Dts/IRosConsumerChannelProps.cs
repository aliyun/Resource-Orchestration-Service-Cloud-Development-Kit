using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dts
{
    /// <summary>Properties for defining a `RosConsumerChannel`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-consumerchannel
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosConsumerChannelProps), fullyQualifiedName: "@alicloud/ros-cdk-dts.RosConsumerChannelProps")]
    public interface IRosConsumerChannelProps
    {
        /// <remarks>
        /// <strong>Property</strong>: consumerGroupName: Consumer group name, up to 128 characters.
        /// </remarks>
        [JsiiProperty(name: "consumerGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ConsumerGroupName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: consumerGroupPassword: Consumer group password, composed of uppercase letters, lowercase letters, numbers, and special characters (at least two types), 8-32 characters long.
        /// </remarks>
        [JsiiProperty(name: "consumerGroupPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ConsumerGroupPassword
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: consumerGroupUserName: Username, composed of uppercase letters, lowercase letters, numbers, and underscores, up to 16 characters.
        /// </remarks>
        [JsiiProperty(name: "consumerGroupUserName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ConsumerGroupUserName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: dtsInstanceId: DTS subscription instance ID. Either DtsInstanceId or DtsJobId must be provided.
        /// </remarks>
        [JsiiProperty(name: "dtsInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DtsInstanceId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: dtsJobId: DTS subscription job ID. Either DtsInstanceId or DtsJobId must be provided.
        /// </remarks>
        [JsiiProperty(name: "dtsJobId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DtsJobId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosConsumerChannel`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-consumerchannel
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosConsumerChannelProps), fullyQualifiedName: "@alicloud/ros-cdk-dts.RosConsumerChannelProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dts.IRosConsumerChannelProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: consumerGroupName: Consumer group name, up to 128 characters.
            /// </remarks>
            [JsiiProperty(name: "consumerGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ConsumerGroupName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: consumerGroupPassword: Consumer group password, composed of uppercase letters, lowercase letters, numbers, and special characters (at least two types), 8-32 characters long.
            /// </remarks>
            [JsiiProperty(name: "consumerGroupPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ConsumerGroupPassword
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: consumerGroupUserName: Username, composed of uppercase letters, lowercase letters, numbers, and underscores, up to 16 characters.
            /// </remarks>
            [JsiiProperty(name: "consumerGroupUserName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ConsumerGroupUserName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: dtsInstanceId: DTS subscription instance ID. Either DtsInstanceId or DtsJobId must be provided.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dtsInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DtsInstanceId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: dtsJobId: DTS subscription job ID. Either DtsInstanceId or DtsJobId must be provided.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dtsJobId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DtsJobId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
