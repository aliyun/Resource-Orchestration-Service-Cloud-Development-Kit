using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Appflow
{
    /// <summary>Properties for defining a `ChatbotModel`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-chatbotmodel
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IChatbotModelProps), fullyQualifiedName: "@alicloud/ros-cdk-appflow.ChatbotModelProps")]
    public interface IChatbotModelProps
    {
        /// <summary>Property chatbotId: The ID of the chatbot.</summary>
        [JsiiProperty(name: "chatbotId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ChatbotId
        {
            get;
        }

        /// <summary>Property modelActionId: The ID of the model action.</summary>
        [JsiiProperty(name: "modelActionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ModelActionId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property modelId: The ID of the model.</summary>
        [JsiiProperty(name: "modelId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ModelId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property parameters: The parameters of the model.</summary>
        [JsiiProperty(name: "parameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Parameters
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property status: The status of the model.</summary>
        [JsiiProperty(name: "status", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Status
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property userAuthConfigId: The ID of the user auth config.</summary>
        [JsiiProperty(name: "userAuthConfigId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? UserAuthConfigId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ChatbotModel`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-chatbotmodel
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IChatbotModelProps), fullyQualifiedName: "@alicloud/ros-cdk-appflow.ChatbotModelProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Appflow.IChatbotModelProps
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

            /// <summary>Property modelActionId: The ID of the model action.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "modelActionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ModelActionId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property modelId: The ID of the model.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "modelId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ModelId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property parameters: The parameters of the model.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "parameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? Parameters
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property status: The status of the model.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "status", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Status
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property userAuthConfigId: The ID of the user auth config.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "userAuthConfigId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? UserAuthConfigId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
