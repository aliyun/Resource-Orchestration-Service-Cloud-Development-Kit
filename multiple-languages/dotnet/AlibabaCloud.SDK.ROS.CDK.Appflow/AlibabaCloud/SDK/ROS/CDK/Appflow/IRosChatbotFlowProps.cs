using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Appflow
{
    /// <summary>Properties for defining a `RosChatbotFlow`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-chatbotflow
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosChatbotFlowProps), fullyQualifiedName: "@alicloud/ros-cdk-appflow.RosChatbotFlowProps")]
    public interface IRosChatbotFlowProps
    {
        /// <remarks>
        /// <strong>Property</strong>: chatbotId: The ID of the chatbot.
        /// </remarks>
        [JsiiProperty(name: "chatbotId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ChatbotId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: flowConfig: The config of the chatbot flow.
        /// </remarks>
        [JsiiProperty(name: "flowConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FlowConfig
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: flowName: The name of the chatbot flow.
        /// </remarks>
        [JsiiProperty(name: "flowName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FlowName
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: flowType: The type of the chatbot flow.
        /// </remarks>
        [JsiiProperty(name: "flowType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FlowType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosChatbotFlow`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-chatbotflow
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosChatbotFlowProps), fullyQualifiedName: "@alicloud/ros-cdk-appflow.RosChatbotFlowProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Appflow.IRosChatbotFlowProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: chatbotId: The ID of the chatbot.
            /// </remarks>
            [JsiiProperty(name: "chatbotId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ChatbotId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: flowConfig: The config of the chatbot flow.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "flowConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? FlowConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: flowName: The name of the chatbot flow.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "flowName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FlowName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: flowType: The type of the chatbot flow.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "flowType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FlowType
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
