using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Arms
{
    /// <summary>Properties for defining a `ALIYUN::ARMS::AlertContact`.</summary>
    [JsiiInterface(nativeType: typeof(IAlertContactProps), fullyQualifiedName: "@alicloud/ros-cdk-arms.AlertContactProps")]
    public interface IAlertContactProps
    {
        /// <summary>Property contactName: The name of the alert contact that you want to create.</summary>
        [JsiiProperty(name: "contactName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ContactName
        {
            get;
        }

        /// <summary>Property dingRobotWebhookUrl: The DingTalk Chatbot address of the contact.</summary>
        [JsiiProperty(name: "dingRobotWebhookUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DingRobotWebhookUrl
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property email: The email address of the contact.</summary>
        [JsiiProperty(name: "email", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Email
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property phoneNum: The phone number of the contact.</summary>
        [JsiiProperty(name: "phoneNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PhoneNum
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property proxyUserId: Internal parameters.</summary>
        [JsiiProperty(name: "proxyUserId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ProxyUserId
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
        [JsiiProperty(name: "regionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RegionId
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
            [JsiiProperty(name: "contactName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ContactName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property dingRobotWebhookUrl: The DingTalk Chatbot address of the contact.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dingRobotWebhookUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DingRobotWebhookUrl
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property email: The email address of the contact.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "email", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Email
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property phoneNum: The phone number of the contact.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "phoneNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PhoneNum
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property proxyUserId: Internal parameters.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "proxyUserId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ProxyUserId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property regionId: Region ID.</summary>
            /// <remarks>
            /// Default to region of stack.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "regionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RegionId
            {
                get => GetInstanceProperty<object?>();
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
