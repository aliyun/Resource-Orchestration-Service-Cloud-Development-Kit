using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Arms
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ARMS::AlertContact`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-arms.RosAlertContactProps")]
    public class RosAlertContactProps : AlibabaCloud.SDK.ROS.CDK.Arms.IRosAlertContactProps
    {
        /// <remarks>
        /// <strong>Property</strong>: contactName: The name of the alert contact that you want to create.
        /// </remarks>
        [JsiiProperty(name: "contactName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ContactName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: dingRobotWebhookUrl: The DingTalk Chatbot address of the contact.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dingRobotWebhookUrl", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? DingRobotWebhookUrl
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: email: The email address of the contact.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "email", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Email
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: phoneNum: The phone number of the contact.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "phoneNum", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? PhoneNum
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: proxyUserId: Internal parameters
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "proxyUserId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ProxyUserId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: regionId: Region ID. Default to region of stack.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "regionId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? RegionId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: systemNoc: Specifies whether to receive system alerts.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "systemNoc", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? SystemNoc
        {
            get;
            set;
        }
    }
}
