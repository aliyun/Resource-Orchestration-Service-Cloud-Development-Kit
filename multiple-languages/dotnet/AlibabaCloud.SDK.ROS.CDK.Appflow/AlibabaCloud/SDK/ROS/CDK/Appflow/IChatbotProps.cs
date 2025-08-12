using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Appflow
{
    /// <summary>Properties for defining a `Chatbot`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-chatbot
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IChatbotProps), fullyQualifiedName: "@alicloud/ros-cdk-appflow.ChatbotProps")]
    public interface IChatbotProps
    {
        /// <summary>Property chatbotName: The name of the chatbot.</summary>
        [JsiiProperty(name: "chatbotName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ChatbotName
        {
            get;
        }

        /// <summary>Property chatbotConfig: AI assistant configuration.</summary>
        [JsiiProperty(name: "chatbotConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-appflow.RosChatbot.ChatbotConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ChatbotConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property chatbotDesc: The description of the chatbot.</summary>
        [JsiiProperty(name: "chatbotDesc", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ChatbotDesc
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property chatbotIcon: The icon of the chatbot.</summary>
        [JsiiProperty(name: "chatbotIcon", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ChatbotIcon
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property from: The source of the request.</summary>
        [JsiiProperty(name: "from", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? From
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property templateId: The ID of the chatbot template.</summary>
        [JsiiProperty(name: "templateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TemplateId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Chatbot`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-chatbot
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IChatbotProps), fullyQualifiedName: "@alicloud/ros-cdk-appflow.ChatbotProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Appflow.IChatbotProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property chatbotName: The name of the chatbot.</summary>
            [JsiiProperty(name: "chatbotName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ChatbotName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property chatbotConfig: AI assistant configuration.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "chatbotConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-appflow.RosChatbot.ChatbotConfigProperty\"}]}}", isOptional: true)]
            public object? ChatbotConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property chatbotDesc: The description of the chatbot.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "chatbotDesc", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ChatbotDesc
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property chatbotIcon: The icon of the chatbot.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "chatbotIcon", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ChatbotIcon
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property from: The source of the request.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "from", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? From
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property templateId: The ID of the chatbot template.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "templateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TemplateId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
