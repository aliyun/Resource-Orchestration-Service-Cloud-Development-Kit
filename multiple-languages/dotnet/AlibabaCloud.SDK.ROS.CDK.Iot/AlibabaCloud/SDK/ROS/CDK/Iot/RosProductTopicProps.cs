using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Iot
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::IOT::ProductTopic`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-iot.RosProductTopicProps")]
    public class RosProductTopicProps : AlibabaCloud.SDK.ROS.CDK.Iot.IRosProductTopicProps
    {
        /// <remarks>
        /// <strong>Property</strong>: operation: Operation permissions of devices on the topic category. Value options:
        /// SUB: Subscribe. Devices can subscribe to the topics of this category.
        /// PUB: Publish. Devices can publish messages using the topics of this category.
        /// ALL: Subscribe and publish. Devices can subscribe to and publish messages to the topics of this category.
        /// </remarks>
        [JsiiProperty(name: "operation", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Operation
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: productKey: The unique identifier of the product for which you want to create a topic category.
        /// </remarks>
        [JsiiProperty(name: "productKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ProductKey
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: topicShortName: The custom category hierarchy in the topic category. By default, a topic category contains two system defined category hierarchies: productKey and ${deviceName}. Forward slashes (/) are used to delimit the topic hierarchies. The format of a topic category is productKey/${deviceName}/topicShortName.
        /// Note The name of each category hierarchy can contain English letters, digits, and underscores (_), and cannot be empty.
        /// </remarks>
        [JsiiProperty(name: "topicShortName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object TopicShortName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: desc: The description of the topic category. You can enter a description with up to 100 characters.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "desc", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Desc
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: iotInstanceId: Instance ID you purchased. Public instances do not need pass this property.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "iotInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? IotInstanceId
        {
            get;
            set;
        }
    }
}
