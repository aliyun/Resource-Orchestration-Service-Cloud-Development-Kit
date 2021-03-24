using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Fnf
{
    /// <summary>Properties for defining a `ALIYUN::FNF::Flow`.</summary>
    [JsiiInterface(nativeType: typeof(IFlowProps), fullyQualifiedName: "@alicloud/ros-cdk-fnf.FlowProps")]
    public interface IFlowProps
    {
        /// <summary>Property definition: The definition of the created flow following the FDL syntax standard.</summary>
        [JsiiProperty(name: "definition", typeJson: "{\"primitive\":\"string\"}")]
        string Definition
        {
            get;
        }

        /// <summary>Property name: The name of the flow created.</summary>
        /// <remarks>
        /// This name is unique under the account.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}")]
        string Name
        {
            get;
        }

        /// <summary>Property description: Create a description of the flow.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Description
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
        [JsiiProperty(name: "requestId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? RequestId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property roleArn: Optional parameter, the resource descriptor information required for the execution of the flow, used to perform the assume role during FnF execution.</summary>
        [JsiiProperty(name: "roleArn", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? RoleArn
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
            [JsiiProperty(name: "definition", typeJson: "{\"primitive\":\"string\"}")]
            public string Definition
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property name: The name of the flow created.</summary>
            /// <remarks>
            /// This name is unique under the account.
            /// </remarks>
            [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}")]
            public string Name
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property description: Create a description of the flow.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Description
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property requestId: The specified Request ID for this request.</summary>
            /// <remarks>
            /// If not specified, our system will help you generate a random one.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "requestId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? RequestId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property roleArn: Optional parameter, the resource descriptor information required for the execution of the flow, used to perform the assume role during FnF execution.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "roleArn", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? RoleArn
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
