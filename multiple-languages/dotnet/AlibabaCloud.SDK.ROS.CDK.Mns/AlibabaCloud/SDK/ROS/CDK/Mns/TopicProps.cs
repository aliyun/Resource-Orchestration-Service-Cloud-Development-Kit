using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mns
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::MNS::Topic`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-mns.TopicProps")]
    public class TopicProps : AlibabaCloud.SDK.ROS.CDK.Mns.ITopicProps
    {
        /// <summary>Property topicName: Topic name.</summary>
        [JsiiProperty(name: "topicName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string TopicName
        {
            get;
            set;
        }

        /// <summary>Property loggingEnabled: Whether to enable log management.</summary>
        /// <remarks>
        /// "true" indicates that log management is enabled, whereas "false" indicates that log management is disabled.
        /// The default value is false
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "loggingEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? LoggingEnabled
        {
            get;
            set;
        }

        /// <summary>Property maximumMessageSize: Maximum body length of a message sent to the topic, in the unit of bytes.</summary>
        /// <remarks>
        /// An integer in the range of 1,024 (1 KB) to 65, 536 (64 KB); default value: 65,536 (64 KB).
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "maximumMessageSize", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? MaximumMessageSize
        {
            get;
            set;
        }
    }
}
