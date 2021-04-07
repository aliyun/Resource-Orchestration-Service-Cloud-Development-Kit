using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Fnf
{
    /// <summary>Properties for defining a `ALIYUN::FNF::Flow`.</summary>
    [JsiiInterface(nativeType: typeof(IFlowProps), fullyQualifiedName: "@alicloud/ros-cdk-fnf.FlowProps")]
    public interface IFlowProps
    {
        /// <summary>Property definition: The definition of the created flow following the FDL syntax standard.</summary>
        [JsiiProperty(name: "definition", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Definition
        {
            get;
        }

        /// <summary>Property name: The name of the flow created.</summary>
        /// <remarks>
        /// This name is unique under the account.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Name
        {
            get;
        }

        /// <summary>Property description: Create a description of the flow.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property requestId: The specified Request ID for this request.</summary>
        /// <remarks>
        /// If not specified, our system will help you generate a random one.
        /// </remarks>
        [JsiiProperty(name: "requestId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RequestId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property roleArn: Optional parameter, the resource descriptor information required for the execution of the flow, used to perform the assume role during FnF execution.</summary>
        [JsiiProperty(name: "roleArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RoleArn
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::FNF::Flow`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IFlowProps), fullyQualifiedName: "@alicloud/ros-cdk-fnf.FlowProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Fnf.IFlowProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property definition: The definition of the created flow following the FDL syntax standard.</summary>
            [JsiiProperty(name: "definition", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Definition
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property name: The name of the flow created.</summary>
            /// <remarks>
            /// This name is unique under the account.
            /// </remarks>
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Name
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property description: Create a description of the flow.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property requestId: The specified Request ID for this request.</summary>
            /// <remarks>
            /// If not specified, our system will help you generate a random one.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "requestId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RequestId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property roleArn: Optional parameter, the resource descriptor information required for the execution of the flow, used to perform the assume role during FnF execution.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "roleArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RoleArn
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
