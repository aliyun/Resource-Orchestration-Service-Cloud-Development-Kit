using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Arms
{
    /// <summary>Properties for defining a `ALIYUN::ARMS::AlertContact`.</summary>
    [JsiiInterface(nativeType: typeof(IRosAlertContactProps), fullyQualifiedName: "@alicloud/ros-cdk-arms.RosAlertContactProps")]
    public interface IRosAlertContactProps
    {
        /// <remarks>
        /// <strong>Property</strong>: contactName: The name of the alert contact that you want to create.
        /// </remarks>
        [JsiiProperty(name: "contactName", typeJson: "{\"primitive\":\"string\"}")]
        string ContactName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: dingRobotWebhookUrl: The DingTalk Chatbot address of the contact.
        /// </remarks>
        [JsiiProperty(name: "dingRobotWebhookUrl", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? DingRobotWebhookUrl
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: email: The email address of the contact.
        /// </remarks>
        [JsiiProperty(name: "email", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Email
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: phoneNum: The phone number of the contact.
        /// </remarks>
        [JsiiProperty(name: "phoneNum", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? PhoneNum
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: proxyUserId: Internal parameters
        /// </remarks>
        [JsiiProperty(name: "proxyUserId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? ProxyUserId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: regionId: Region ID. Default to region of stack.
        /// </remarks>
        [JsiiProperty(name: "regionId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? RegionId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: systemNoc: Specifies whether to receive system alerts.
        /// </remarks>
        [JsiiProperty(name: "systemNoc", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SystemNoc
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::ARMS::AlertContact`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosAlertContactProps), fullyQualifiedName: "@alicloud/ros-cdk-arms.RosAlertContactProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Arms.IRosAlertContactProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: contactName: The name of the alert contact that you want to create.
            /// </remarks>
            [JsiiProperty(name: "contactName", typeJson: "{\"primitive\":\"string\"}")]
            public string ContactName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: dingRobotWebhookUrl: The DingTalk Chatbot address of the contact.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dingRobotWebhookUrl", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? DingRobotWebhookUrl
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: email: The email address of the contact.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "email", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Email
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: phoneNum: The phone number of the contact.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "phoneNum", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? PhoneNum
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: proxyUserId: Internal parameters
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "proxyUserId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ProxyUserId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: regionId: Region ID. Default to region of stack.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "regionId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? RegionId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: systemNoc: Specifies whether to receive system alerts.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "systemNoc", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SystemNoc
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
