using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Iot
{
    /// <summary>Properties for defining a `RosProductTopic`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-iot-producttopic
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosProductTopicProps), fullyQualifiedName: "@alicloud/ros-cdk-iot.RosProductTopicProps")]
    public interface IRosProductTopicProps
    {
        /// <remarks>
        /// <strong>Property</strong>: operation: Operation permissions of devices on the topic category. Value options:
        /// SUB: Subscribe. Devices can subscribe to the topics of this category.
        /// PUB: Publish. Devices can publish messages using the topics of this category.
        /// ALL: Subscribe and publish. Devices can subscribe to and publish messages to the topics of this category.
        /// </remarks>
        [JsiiProperty(name: "operation", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Operation
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: productKey: The unique identifier of the product for which you want to create a topic category.
        /// </remarks>
        [JsiiProperty(name: "productKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ProductKey
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: topicShortName: The custom category hierarchy in the topic category. By default, a topic category contains two system defined category hierarchies: productKey and ${deviceName}. Forward slashes (\/) are used to delimit the topic hierarchies. The format of a topic category is productKey\/${deviceName}\/topicShortName.
        /// Note The name of each category hierarchy can contain English letters, digits, and underscores (_), and cannot be empty.
        /// </remarks>
        [JsiiProperty(name: "topicShortName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TopicShortName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: desc: The description of the topic category. You can enter a description with up to 100 characters.
        /// </remarks>
        [JsiiProperty(name: "desc", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Desc
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: iotInstanceId: Instance ID you purchased. Public instances do not need pass this property.
        /// </remarks>
        [JsiiProperty(name: "iotInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IotInstanceId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosProductTopic`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-iot-producttopic
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosProductTopicProps), fullyQualifiedName: "@alicloud/ros-cdk-iot.RosProductTopicProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Iot.IRosProductTopicProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: operation: Operation permissions of devices on the topic category. Value options:
            /// SUB: Subscribe. Devices can subscribe to the topics of this category.
            /// PUB: Publish. Devices can publish messages using the topics of this category.
            /// ALL: Subscribe and publish. Devices can subscribe to and publish messages to the topics of this category.
            /// </remarks>
            [JsiiProperty(name: "operation", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Operation
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: productKey: The unique identifier of the product for which you want to create a topic category.
            /// </remarks>
            [JsiiProperty(name: "productKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ProductKey
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: topicShortName: The custom category hierarchy in the topic category. By default, a topic category contains two system defined category hierarchies: productKey and ${deviceName}. Forward slashes (\/) are used to delimit the topic hierarchies. The format of a topic category is productKey\/${deviceName}\/topicShortName.
            /// Note The name of each category hierarchy can contain English letters, digits, and underscores (_), and cannot be empty.
            /// </remarks>
            [JsiiProperty(name: "topicShortName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TopicShortName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: desc: The description of the topic category. You can enter a description with up to 100 characters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "desc", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Desc
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: iotInstanceId: Instance ID you purchased. Public instances do not need pass this property.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "iotInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IotInstanceId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
