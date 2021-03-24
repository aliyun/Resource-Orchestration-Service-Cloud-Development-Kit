using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Rocketmq
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ROCKETMQ::Topic`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-rocketmq.RosTopicProps")]
    public class RosTopicProps : AlibabaCloud.SDK.ROS.CDK.Rocketmq.IRosTopicProps
    {
        /// <remarks>
        /// <strong>Property</strong>: instanceId: The ID of the instance.
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string InstanceId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: messageType: The type of the message. Valid values:
        /// 0: normal message
        /// 1: partitionally ordered message
        /// 2: globally ordered message
        /// 4: transactional message
        /// 5: scheduled/delayed message
        /// </remarks>
        [JsiiProperty(name: "messageType", typeJson: "{\"primitive\":\"number\"}", isOverride: true)]
        public double MessageType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: topic: The name of the topic you want to create.
        /// Note:
        /// "CID" and "GID" are the reserved fields of a group ID, and they cannot be the start of a topic name.
        /// If namespaces are available in the instance for which the topic is created, the topic name must be unique in the instance and can be duplicated across instances.
        /// If no namespaces are available in the instance, the topic name must be unique both in the instance and across instances.
        /// </remarks>
        [JsiiProperty(name: "topic", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Topic
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: perm: Set the read-write mode for the topic Valid values.:
        /// 6: Both read and write operations are supported.
        /// 4: Write operation is prohibited.
        /// 2: Read operation is prohibited.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "perm", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? Perm
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: remark: The remarks on the request. This parameter can be left blank.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "remark", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Remark
        {
            get;
            set;
        }
    }
}
