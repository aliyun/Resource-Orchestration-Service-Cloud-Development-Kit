using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `RosTrafficQosQueue`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-trafficqosqueue
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosTrafficQosQueueProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosTrafficQosQueueProps")]
    public interface IRosTrafficQosQueueProps
    {
        /// <remarks>
        /// <strong>Property</strong>: qosId: The ID of the QoS policy.
        /// </remarks>
        [JsiiProperty(name: "qosId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object QosId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: queueType: QoS queue type, value:
        /// - **High**: High priority queue.
        /// - **Medium**: Normal priority queue.
        /// - **Default**: the Default priority queue.
        /// > Default priority queue cannot be created.
        /// </remarks>
        [JsiiProperty(name: "queueType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object QueueType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: bandwidthPercent: QoS queue bandwidth percentage.
        /// * When the QoS queue type is **Medium**, this field must be entered. Valid values: 1 to 100.
        /// * When the QoS queue type is **Default**, this field is "-".
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

        /// <remarks>
        /// <strong>Property</strong>: queueDescription: The description of the QoS queue.
        /// The length is 0 to 256 characters and cannot start with 'http:\/\/ 'or 'https.
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

        /// <remarks>
        /// <strong>Property</strong>: queueName: The name of the QoS queue.
        /// The length is 0 to 128 characters and cannot start with 'http:\/\/ 'or 'https.
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

        /// <summary>Properties for defining a `RosTrafficQosQueue`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-trafficqosqueue
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosTrafficQosQueueProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosTrafficQosQueueProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IRosTrafficQosQueueProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: qosId: The ID of the QoS policy.
            /// </remarks>
            [JsiiProperty(name: "qosId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object QosId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: queueType: QoS queue type, value:
            /// - **High**: High priority queue.
            /// - **Medium**: Normal priority queue.
            /// - **Default**: the Default priority queue.
            /// > Default priority queue cannot be created.
            /// </remarks>
            [JsiiProperty(name: "queueType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object QueueType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: bandwidthPercent: QoS queue bandwidth percentage.
            /// * When the QoS queue type is **Medium**, this field must be entered. Valid values: 1 to 100.
            /// * When the QoS queue type is **Default**, this field is "-".
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "bandwidthPercent", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? BandwidthPercent
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: queueDescription: The description of the QoS queue.
            /// The length is 0 to 256 characters and cannot start with 'http:\/\/ 'or 'https.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "queueDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? QueueDescription
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: queueName: The name of the QoS queue.
            /// The length is 0 to 128 characters and cannot start with 'http:\/\/ 'or 'https.
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
