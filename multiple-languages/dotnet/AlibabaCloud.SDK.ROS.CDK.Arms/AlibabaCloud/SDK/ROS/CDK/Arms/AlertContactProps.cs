using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Arms
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ARMS::AlertContact`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-arms.AlertContactProps")]
    public class AlertContactProps : AlibabaCloud.SDK.ROS.CDK.Arms.IAlertContactProps
    {
        /// <summary>Property contactName: The name of the alert contact that you want to create.</summary>
        [JsiiProperty(name: "contactName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ContactName
        {
            get;
            set;
        }

        /// <summary>Property dingRobotWebhookUrl: The DingTalk Chatbot address of the contact.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "dingRobotWebhookUrl", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? DingRobotWebhookUrl
        {
            get;
            set;
        }

        /// <summary>Property email: The email address of the contact.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "email", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Email
        {
            get;
            set;
        }

        /// <summary>Property phoneNum: The phone number of the contact.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "phoneNum", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? PhoneNum
        {
            get;
            set;
        }

        /// <summary>Property proxyUserId: Internal parameters.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "proxyUserId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ProxyUserId
        {
            get;
            set;
        }

        /// <summary>Property regionId: Region ID.</summary>
        /// <remarks>
        /// Default to region of stack.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "regionId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? RegionId
        {
            get;
            set;
        }

        /// <summary>Property systemNoc: Specifies whether to receive system alerts.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "systemNoc", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? SystemNoc
        {
            get;
            set;
        }
    }
}
