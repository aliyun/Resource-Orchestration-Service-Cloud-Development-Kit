using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Arms
{
    /// <summary>Properties for defining a `ALIYUN::ARMS::AlertContact`.</summary>
    [JsiiInterface(nativeType: typeof(IAlertContactProps), fullyQualifiedName: "@alicloud/ros-cdk-arms.AlertContactProps")]
    public interface IAlertContactProps
    {
        /// <summary>Property contactName: The name of the alert contact that you want to create.</summary>
        [JsiiProperty(name: "contactName", typeJson: "{\"primitive\":\"string\"}")]
        string ContactName
        {
            get;
        }

        /// <summary>Property dingRobotWebhookUrl: The DingTalk Chatbot address of the contact.</summary>
        [JsiiProperty(name: "dingRobotWebhookUrl", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? DingRobotWebhookUrl
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property email: The email address of the contact.</summary>
        [JsiiProperty(name: "email", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Email
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property phoneNum: The phone number of the contact.</summary>
        [JsiiProperty(name: "phoneNum", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? PhoneNum
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property proxyUserId: Internal parameters.</summary>
        [JsiiProperty(name: "proxyUserId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? ProxyUserId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property regionId: Region ID.</summary>
        /// <remarks>
        /// Default to region of stack.
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

        /// <summary>Property systemNoc: Specifies whether to receive system alerts.</summary>
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
        [JsiiTypeProxy(nativeType: typeof(IAlertContactProps), fullyQualifiedName: "@alicloud/ros-cdk-arms.AlertContactProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Arms.IAlertContactProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property contactName: The name of the alert contact that you want to create.</summary>
            [JsiiProperty(name: "contactName", typeJson: "{\"primitive\":\"string\"}")]
            public string ContactName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property dingRobotWebhookUrl: The DingTalk Chatbot address of the contact.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dingRobotWebhookUrl", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? DingRobotWebhookUrl
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property email: The email address of the contact.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "email", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Email
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property phoneNum: The phone number of the contact.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "phoneNum", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? PhoneNum
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property proxyUserId: Internal parameters.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "proxyUserId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ProxyUserId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property regionId: Region ID.</summary>
            /// <remarks>
            /// Default to region of stack.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "regionId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? RegionId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property systemNoc: Specifies whether to receive system alerts.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "systemNoc", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SystemNoc
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
