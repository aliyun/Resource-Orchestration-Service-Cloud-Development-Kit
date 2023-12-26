using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Iot
{
    /// <summary>Properties for defining a `ProductTopic`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-iot-producttopic
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IProductTopicProps), fullyQualifiedName: "@alicloud/ros-cdk-iot.ProductTopicProps")]
    public interface IProductTopicProps
    {
        /// <summary>Property operation: Operation permissions of devices on the topic category.</summary>
        /// <remarks>
        /// Value options:
        /// SUB: Subscribe. Devices can subscribe to the topics of this category.
        /// PUB: Publish. Devices can publish messages using the topics of this category.
        /// ALL: Subscribe and publish. Devices can subscribe to and publish messages to the topics of this category.
        /// </remarks>
        [JsiiProperty(name: "operation", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Operation
        {
            get;
        }

        /// <summary>Property productKey: The unique identifier of the product for which you want to create a topic category.</summary>
        [JsiiProperty(name: "productKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ProductKey
        {
            get;
        }

        /// <summary>Property topicShortName: The custom category hierarchy in the topic category.</summary>
        /// <remarks>
        /// By default, a topic category contains two system defined category hierarchies: productKey and ${deviceName}. Forward slashes (/) are used to delimit the topic hierarchies. The format of a topic category is productKey/${deviceName}/topicShortName.
        /// Note The name of each category hierarchy can contain English letters, digits, and underscores (_), and cannot be empty.
        /// </remarks>
        [JsiiProperty(name: "topicShortName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TopicShortName
        {
            get;
        }

        /// <summary>Property desc: The description of the topic category.</summary>
        /// <remarks>
        /// You can enter a description with up to 100 characters.
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

        /// <summary>Property iotInstanceId: Instance ID you purchased.</summary>
        /// <remarks>
        /// Public instances do not need pass this property.
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

        /// <summary>Properties for defining a `ProductTopic`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-iot-producttopic
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IProductTopicProps), fullyQualifiedName: "@alicloud/ros-cdk-iot.ProductTopicProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Iot.IProductTopicProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property operation: Operation permissions of devices on the topic category.</summary>
            /// <remarks>
            /// Value options:
            /// SUB: Subscribe. Devices can subscribe to the topics of this category.
            /// PUB: Publish. Devices can publish messages using the topics of this category.
            /// ALL: Subscribe and publish. Devices can subscribe to and publish messages to the topics of this category.
            /// </remarks>
            [JsiiProperty(name: "operation", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Operation
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property productKey: The unique identifier of the product for which you want to create a topic category.</summary>
            [JsiiProperty(name: "productKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ProductKey
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property topicShortName: The custom category hierarchy in the topic category.</summary>
            /// <remarks>
            /// By default, a topic category contains two system defined category hierarchies: productKey and ${deviceName}. Forward slashes (/) are used to delimit the topic hierarchies. The format of a topic category is productKey/${deviceName}/topicShortName.
            /// Note The name of each category hierarchy can contain English letters, digits, and underscores (_), and cannot be empty.
            /// </remarks>
            [JsiiProperty(name: "topicShortName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TopicShortName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property desc: The description of the topic category.</summary>
            /// <remarks>
            /// You can enter a description with up to 100 characters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "desc", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Desc
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property iotInstanceId: Instance ID you purchased.</summary>
            /// <remarks>
            /// Public instances do not need pass this property.
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
