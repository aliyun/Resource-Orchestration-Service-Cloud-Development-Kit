using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Arms
{
    /// <summary>Properties for defining a `RosAlertContact`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-alertcontact
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosAlertContactProps), fullyQualifiedName: "@alicloud/ros-cdk-arms.RosAlertContactProps")]
    public interface IRosAlertContactProps
    {
        /// <remarks>
        /// <strong>Property</strong>: contactName: The name of the alert contact that you want to create.
        /// </remarks>
        [JsiiProperty(name: "contactName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ContactName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: dingRobotWebhookUrl: The DingTalk Chatbot address of the contact.
        /// </remarks>
        [JsiiProperty(name: "dingRobotWebhookUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DingRobotWebhookUrl
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: email: The email address of the contact.
        /// </remarks>
        [JsiiProperty(name: "email", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Email
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: phoneNum: The phone number of the contact.
        /// </remarks>
        [JsiiProperty(name: "phoneNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PhoneNum
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: proxyUserId: Internal parameters
        /// </remarks>
        [JsiiProperty(name: "proxyUserId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ProxyUserId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: regionId: Region ID. Default to region of stack.
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

        /// <summary>Properties for defining a `RosAlertContact`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-alertcontact
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosAlertContactProps), fullyQualifiedName: "@alicloud/ros-cdk-arms.RosAlertContactProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Arms.IRosAlertContactProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: contactName: The name of the alert contact that you want to create.
            /// </remarks>
            [JsiiProperty(name: "contactName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ContactName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: dingRobotWebhookUrl: The DingTalk Chatbot address of the contact.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dingRobotWebhookUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DingRobotWebhookUrl
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: email: The email address of the contact.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "email", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Email
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: phoneNum: The phone number of the contact.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "phoneNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PhoneNum
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: proxyUserId: Internal parameters
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "proxyUserId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ProxyUserId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: regionId: Region ID. Default to region of stack.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "regionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RegionId
            {
                get => GetInstanceProperty<object?>();
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
