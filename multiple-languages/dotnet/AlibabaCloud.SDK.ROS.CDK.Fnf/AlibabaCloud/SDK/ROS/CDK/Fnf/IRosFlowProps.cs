using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Fnf
{
    /// <summary>Properties for defining a `ALIYUN::FNF::Flow`.</summary>
    [JsiiInterface(nativeType: typeof(IRosFlowProps), fullyQualifiedName: "@alicloud/ros-cdk-fnf.RosFlowProps")]
    public interface IRosFlowProps
    {
        /// <remarks>
        /// <strong>Property</strong>: definition: The definition of the created flow following the FDL syntax standard.
        /// </remarks>
        [JsiiProperty(name: "definition", typeJson: "{\"primitive\":\"string\"}")]
        string Definition
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: name: The name of the flow created. This name is unique under the account.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}")]
        string Name
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: Create a description of the flow.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Description
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: requestId: The specified Request ID for this request. If not specified, our system will help you generate a random one.
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

        /// <remarks>
        /// <strong>Property</strong>: roleArn: Optional parameter, the resource descriptor information required for the execution of the flow, used to perform the assume role during FnF execution.
        /// </remarks>
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
        [JsiiTypeProxy(nativeType: typeof(IRosFlowProps), fullyQualifiedName: "@alicloud/ros-cdk-fnf.RosFlowProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Fnf.IRosFlowProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: definition: The definition of the created flow following the FDL syntax standard.
            /// </remarks>
            [JsiiProperty(name: "definition", typeJson: "{\"primitive\":\"string\"}")]
            public string Definition
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: name: The name of the flow created. This name is unique under the account.
            /// </remarks>
            [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}")]
            public string Name
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: description: Create a description of the flow.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Description
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: requestId: The specified Request ID for this request. If not specified, our system will help you generate a random one.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "requestId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? RequestId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: roleArn: Optional parameter, the resource descriptor information required for the execution of the flow, used to perform the assume role during FnF execution.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "roleArn", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? RoleArn
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
