using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mns
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::MNS::Queue`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-mns.QueueProps")]
    public class QueueProps : AlibabaCloud.SDK.ROS.CDK.Mns.IQueueProps
    {
        /// <summary>Property queueName: Queue name.</summary>
        [JsiiProperty(name: "queueName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string QueueName
        {
            get;
            set;
        }

        /// <summary>Property delaySeconds: It is measured in seconds.</summary>
        /// <remarks>
        /// All messages sent to the queue can be consumed until the DelaySeconds expires.
        /// An integer between 0 and 604800 (7 days). The default value is 0
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "delaySeconds", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? DelaySeconds
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

        /// <summary>Property maximumMessageSize: Maximum body length of a message sent to the queue, measured in bytes.</summary>
        /// <remarks>
        /// An integer between 1024 (1K) and 65536 (64K). The default value is 65536 (64K).
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "maximumMessageSize", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? MaximumMessageSize
        {
            get;
            set;
        }

        /// <summary>Property messageRetentionPeriod: Maximum lifetime of the message in the queue, measured in seconds.</summary>
        /// <remarks>
        /// After the time specified by this parameter expires, the message will be deleted no matter whether it has been consumed or not.
        /// An integer between 60 (1 minute) and 1296000 (15 days). The default value is 345600 (4 days)
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "messageRetentionPeriod", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? MessageRetentionPeriod
        {
            get;
            set;
        }

        /// <summary>Property pollingWaitSeconds: It is the maximum time that a ReceiveMessage request could be waiting for any incoming messages, while there are no message in the queue.</summary>
        /// <remarks>
        /// Measured in seconds.
        /// An integer between 0 and 30 seconds. The default value is 0 (seconds)
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "pollingWaitSeconds", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? PollingWaitSeconds
        {
            get;
            set;
        }

        /// <summary>Property visibilityTimeout: Duration in which a message stays in Inactive status after it is consumed from the queue.</summary>
        /// <remarks>
        /// Measured in seconds.
        /// An integer between 1 and 43200 (12 hours). The default value is 30 (seconds)
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "visibilityTimeout", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? VisibilityTimeout
        {
            get;
            set;
        }
    }
}
