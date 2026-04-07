using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `TrafficQosQueue`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-trafficqosqueue
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ITrafficQosQueueProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.TrafficQosQueueProps")]
    public interface ITrafficQosQueueProps
    {
        /// <summary>Property qosId: The ID of the QoS policy.</summary>
        [JsiiProperty(name: "qosId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object QosId
        {
            get;
        }

        /// <summary>Property queueType: QoS queue type, value: - **High**: High priority queue.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description><strong>Medium</strong>: Normal priority queue.</description>
        /// <description><strong>Default</strong>: the Default priority queue.</description>
        /// </list>
        ///
        ///     Default priority queue cannot be created.
        /// </remarks>
        [JsiiProperty(name: "queueType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object QueueType
        {
            get;
        }

        /// <summary>Property bandwidthPercent: QoS queue bandwidth percentage.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description>When the QoS queue type is <strong>Medium</strong>, this field must be entered. Valid values: 1 to 100.</description>
        /// <description>When the QoS queue type is <strong>Default</strong>, this field is "-".</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "bandwidthPercent", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BandwidthPercent
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property queueDescription: The description of the QoS queue.</summary>
        /// <remarks>
        /// The length is 0 to 256 characters and cannot start with 'http:// 'or 'https.
        /// </remarks>
        [JsiiProperty(name: "queueDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? QueueDescription
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property queueName: The name of the QoS queue.</summary>
        /// <remarks>
        /// The length is 0 to 128 characters and cannot start with 'http:// 'or 'https.
        /// </remarks>
        [JsiiProperty(name: "queueName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? QueueName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `TrafficQosQueue`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-trafficqosqueue
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ITrafficQosQueueProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.TrafficQosQueueProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.ITrafficQosQueueProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property qosId: The ID of the QoS policy.</summary>
            [JsiiProperty(name: "qosId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object QosId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property queueType: QoS queue type, value: - **High**: High priority queue.</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description><strong>Medium</strong>: Normal priority queue.</description>
            /// <description><strong>Default</strong>: the Default priority queue.</description>
            /// </list>
            ///
            ///     Default priority queue cannot be created.
            /// </remarks>
            [JsiiProperty(name: "queueType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object QueueType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property bandwidthPercent: QoS queue bandwidth percentage.</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description>When the QoS queue type is <strong>Medium</strong>, this field must be entered. Valid values: 1 to 100.</description>
            /// <description>When the QoS queue type is <strong>Default</strong>, this field is "-".</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "bandwidthPercent", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? BandwidthPercent
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property queueDescription: The description of the QoS queue.</summary>
            /// <remarks>
            /// The length is 0 to 256 characters and cannot start with 'http:// 'or 'https.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "queueDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? QueueDescription
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property queueName: The name of the QoS queue.</summary>
            /// <remarks>
            /// The length is 0 to 128 characters and cannot start with 'http:// 'or 'https.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "queueName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? QueueName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
