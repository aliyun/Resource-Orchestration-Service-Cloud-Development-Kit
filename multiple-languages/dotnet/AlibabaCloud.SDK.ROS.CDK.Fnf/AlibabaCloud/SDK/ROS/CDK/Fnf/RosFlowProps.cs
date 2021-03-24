using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Fnf
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::FNF::Flow`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-fnf.RosFlowProps")]
    public class RosFlowProps : AlibabaCloud.SDK.ROS.CDK.Fnf.IRosFlowProps
    {
        /// <remarks>
        /// <strong>Property</strong>: definition: The definition of the created flow following the FDL syntax standard.
        /// </remarks>
        [JsiiProperty(name: "definition", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Definition
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: name: The name of the flow created. This name is unique under the account.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Name
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: Create a description of the flow.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Description
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: requestId: The specified Request ID for this request. If not specified, our system will help you generate a random one.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "requestId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? RequestId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: roleArn: Optional parameter, the resource descriptor information required for the execution of the flow, used to perform the assume role during FnF execution.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "roleArn", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? RoleArn
        {
            get;
            set;
        }
    }
}
