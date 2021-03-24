using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Iot
{
    /// <summary>Properties for defining a `ALIYUN::IOT::ProductTopic`.</summary>
    [JsiiInterface(nativeType: typeof(IRosProductTopicProps), fullyQualifiedName: "@alicloud/ros-cdk-iot.RosProductTopicProps")]
    public interface IRosProductTopicProps
    {
        /// <remarks>
        /// <strong>Property</strong>: operation: Operation permissions of devices on the topic category. Value options:
        /// SUB: Subscribe. Devices can subscribe to the topics of this category.
        /// PUB: Publish. Devices can publish messages using the topics of this category.
        /// ALL: Subscribe and publish. Devices can subscribe to and publish messages to the topics of this category.
        /// </remarks>
        [JsiiProperty(name: "operation", typeJson: "{\"primitive\":\"string\"}")]
        string Operation
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: productKey: The unique identifier of the product for which you want to create a topic category.
        /// </remarks>
        [JsiiProperty(name: "productKey", typeJson: "{\"primitive\":\"string\"}")]
        string ProductKey
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: topicShortName: The custom category hierarchy in the topic category. By default, a topic category contains two system defined category hierarchies: productKey and ${deviceName}. Forward slashes (/) are used to delimit the topic hierarchies. The format of a topic category is productKey/${deviceName}/topicShortName.
        /// Note The name of each category hierarchy can contain English letters, digits, and underscores (_), and cannot be empty.
        /// </remarks>
        [JsiiProperty(name: "topicShortName", typeJson: "{\"primitive\":\"string\"}")]
        string TopicShortName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: desc: The description of the topic category. You can enter a description with up to 100 characters.
        /// </remarks>
        [JsiiProperty(name: "desc", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Desc
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: iotInstanceId: Instance ID you purchased. Public instances do not need pass this property.
        /// </remarks>
        [JsiiProperty(name: "iotInstanceId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? IotInstanceId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::IOT::ProductTopic`.</summary>
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
            [JsiiProperty(name: "operation", typeJson: "{\"primitive\":\"string\"}")]
            public string Operation
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: productKey: The unique identifier of the product for which you want to create a topic category.
            /// </remarks>
            [JsiiProperty(name: "productKey", typeJson: "{\"primitive\":\"string\"}")]
            public string ProductKey
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: topicShortName: The custom category hierarchy in the topic category. By default, a topic category contains two system defined category hierarchies: productKey and ${deviceName}. Forward slashes (/) are used to delimit the topic hierarchies. The format of a topic category is productKey/${deviceName}/topicShortName.
            /// Note The name of each category hierarchy can contain English letters, digits, and underscores (_), and cannot be empty.
            /// </remarks>
            [JsiiProperty(name: "topicShortName", typeJson: "{\"primitive\":\"string\"}")]
            public string TopicShortName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: desc: The description of the topic category. You can enter a description with up to 100 characters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "desc", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Desc
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: iotInstanceId: Instance ID you purchased. Public instances do not need pass this property.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "iotInstanceId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? IotInstanceId
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
