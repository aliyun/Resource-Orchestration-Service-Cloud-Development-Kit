using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Appflow
{
    /// <summary>Properties for defining a `Flow`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-flow
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IFlowProps), fullyQualifiedName: "@alicloud/ros-cdk-appflow.FlowProps")]
    public interface IFlowProps
    {
        /// <summary>Property flowName: The name of the flow.</summary>
        [JsiiProperty(name: "flowName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object FlowName
        {
            get;
        }

        /// <summary>Property flowDesc: The description of the flow.</summary>
        [JsiiProperty(name: "flowDesc", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FlowDesc
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property flowId: The ID of the flow.</summary>
        [JsiiProperty(name: "flowId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FlowId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property flowStatus: The status of the flow.</summary>
        /// <remarks>
        /// Allowed values:
        /// Enable: enable flow
        /// Disable: disable flow
        /// </remarks>
        [JsiiProperty(name: "flowStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FlowStatus
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property launchFlow: Whether to launch the flow.</summary>
        [JsiiProperty(name: "launchFlow", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LaunchFlow
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property parameters: The parameters of the flow.</summary>
        [JsiiProperty(name: "parameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Parameters
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property template: The template of the flow.</summary>
        [JsiiProperty(name: "template", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Template
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property templateId: The ID of the template.</summary>
        [JsiiProperty(name: "templateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TemplateId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Flow`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-flow
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IFlowProps), fullyQualifiedName: "@alicloud/ros-cdk-appflow.FlowProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Appflow.IFlowProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property flowName: The name of the flow.</summary>
            [JsiiProperty(name: "flowName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object FlowName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property flowDesc: The description of the flow.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "flowDesc", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FlowDesc
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property flowId: The ID of the flow.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "flowId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FlowId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property flowStatus: The status of the flow.</summary>
            /// <remarks>
            /// Allowed values:
            /// Enable: enable flow
            /// Disable: disable flow
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "flowStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FlowStatus
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property launchFlow: Whether to launch the flow.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "launchFlow", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LaunchFlow
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property parameters: The parameters of the flow.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "parameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? Parameters
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property template: The template of the flow.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "template", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? Template
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property templateId: The ID of the template.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "templateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TemplateId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
