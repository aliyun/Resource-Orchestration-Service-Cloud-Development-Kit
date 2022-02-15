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
        [JsiiProperty(name: "contactName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ContactName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: dingRobotWebhookUrl: The DingTalk Chatbot address of the contact.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dingRobotWebhookUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? DingRobotWebhookUrl
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: email: The email address of the contact.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "email", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Email
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: phoneNum: The phone number of the contact.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "phoneNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? PhoneNum
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: proxyUserId: Internal parameters
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "proxyUserId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ProxyUserId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: regionId: Region ID. Default to region of stack.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "regionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? RegionId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: systemNoc: Specifies whether to receive system alerts.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "systemNoc", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? SystemNoc
        {
            get;
            set;
        }
    }
}
