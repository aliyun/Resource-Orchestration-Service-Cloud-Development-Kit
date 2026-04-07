using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dts
{
    /// <summary>Properties for defining a `ConsumerChannel`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-consumerchannel
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IConsumerChannelProps), fullyQualifiedName: "@alicloud/ros-cdk-dts.ConsumerChannelProps")]
    public interface IConsumerChannelProps
    {
        /// <summary>Property consumerGroupName: Consumer group name, up to 128 characters.</summary>
        [JsiiProperty(name: "consumerGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ConsumerGroupName
        {
            get;
        }

        /// <summary>Property consumerGroupPassword: Consumer group password, composed of uppercase letters, lowercase letters, numbers, and special characters (at least two types), 8-32 characters long.</summary>
        [JsiiProperty(name: "consumerGroupPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ConsumerGroupPassword
        {
            get;
        }

        /// <summary>Property consumerGroupUserName: Username, composed of uppercase letters, lowercase letters, numbers, and underscores, up to 16 characters.</summary>
        [JsiiProperty(name: "consumerGroupUserName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ConsumerGroupUserName
        {
            get;
        }

        /// <summary>Property dtsInstanceId: DTS subscription instance ID.</summary>
        /// <remarks>
        /// Either DtsInstanceId or DtsJobId must be provided.
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

        /// <summary>Property dtsJobId: DTS subscription job ID.</summary>
        /// <remarks>
        /// Either DtsInstanceId or DtsJobId must be provided.
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

        /// <summary>Properties for defining a `ConsumerChannel`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-consumerchannel
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IConsumerChannelProps), fullyQualifiedName: "@alicloud/ros-cdk-dts.ConsumerChannelProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dts.IConsumerChannelProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property consumerGroupName: Consumer group name, up to 128 characters.</summary>
            [JsiiProperty(name: "consumerGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ConsumerGroupName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property consumerGroupPassword: Consumer group password, composed of uppercase letters, lowercase letters, numbers, and special characters (at least two types), 8-32 characters long.</summary>
            [JsiiProperty(name: "consumerGroupPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ConsumerGroupPassword
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property consumerGroupUserName: Username, composed of uppercase letters, lowercase letters, numbers, and underscores, up to 16 characters.</summary>
            [JsiiProperty(name: "consumerGroupUserName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ConsumerGroupUserName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property dtsInstanceId: DTS subscription instance ID.</summary>
            /// <remarks>
            /// Either DtsInstanceId or DtsJobId must be provided.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dtsInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DtsInstanceId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dtsJobId: DTS subscription job ID.</summary>
            /// <remarks>
            /// Either DtsInstanceId or DtsJobId must be provided.
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
