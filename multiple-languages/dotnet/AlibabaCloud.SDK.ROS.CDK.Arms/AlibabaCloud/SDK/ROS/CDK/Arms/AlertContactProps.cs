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
        [JsiiProperty(name: "contactName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ContactName
        {
            get;
            set;
        }

        /// <summary>Property dingRobotWebhookUrl: The DingTalk Chatbot address of the contact.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "dingRobotWebhookUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? DingRobotWebhookUrl
        {
            get;
            set;
        }

        /// <summary>Property email: The email address of the contact.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "email", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Email
        {
            get;
            set;
        }

        /// <summary>Property phoneNum: The phone number of the contact.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "phoneNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? PhoneNum
        {
            get;
            set;
        }

        /// <summary>Property proxyUserId: Internal parameters.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "proxyUserId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ProxyUserId
        {
            get;
            set;
        }

        /// <summary>Property regionId: Region ID.</summary>
        /// <remarks>
        /// Default to region of stack.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "regionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? RegionId
        {
            get;
            set;
        }

        /// <summary>Property systemNoc: Specifies whether to receive system alerts.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "systemNoc", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? SystemNoc
        {
            get;
            set;
        }
    }
}
