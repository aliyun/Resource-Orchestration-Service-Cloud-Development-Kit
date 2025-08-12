using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Appflow
{
    /// <summary>Properties for defining a `ChatbotFlow`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-chatbotflow
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IChatbotFlowProps), fullyQualifiedName: "@alicloud/ros-cdk-appflow.ChatbotFlowProps")]
    public interface IChatbotFlowProps
    {
        /// <summary>Property chatbotId: The ID of the chatbot.</summary>
        [JsiiProperty(name: "chatbotId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ChatbotId
        {
            get;
        }

        /// <summary>Property flowConfig: The config of the chatbot flow.</summary>
        [JsiiProperty(name: "flowConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FlowConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property flowName: The name of the chatbot flow.</summary>
        [JsiiProperty(name: "flowName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FlowName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property flowType: The type of the chatbot flow.</summary>
        [JsiiProperty(name: "flowType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FlowType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ChatbotFlow`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-chatbotflow
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IChatbotFlowProps), fullyQualifiedName: "@alicloud/ros-cdk-appflow.ChatbotFlowProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Appflow.IChatbotFlowProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property chatbotId: The ID of the chatbot.</summary>
            [JsiiProperty(name: "chatbotId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ChatbotId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property flowConfig: The config of the chatbot flow.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "flowConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? FlowConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property flowName: The name of the chatbot flow.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "flowName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FlowName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property flowType: The type of the chatbot flow.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "flowType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FlowType
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
