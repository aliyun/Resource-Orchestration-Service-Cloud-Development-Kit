using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Fnf
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::FNF::Flow`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-fnf.FlowProps")]
    public class FlowProps : AlibabaCloud.SDK.ROS.CDK.Fnf.IFlowProps
    {
        /// <summary>Property definition: The definition of the created flow following the FDL syntax standard.</summary>
        [JsiiProperty(name: "definition", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Definition
        {
            get;
            set;
        }

        /// <summary>Property name: The name of the flow created.</summary>
        /// <remarks>
        /// This name is unique under the account.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Name
        {
            get;
            set;
        }

        /// <summary>Property description: Create a description of the flow.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Description
        {
            get;
            set;
        }

        /// <summary>Property requestId: The specified Request ID for this request.</summary>
        /// <remarks>
        /// If not specified, our system will help you generate a random one.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "requestId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? RequestId
        {
            get;
            set;
        }

        /// <summary>Property roleArn: Optional parameter, the resource descriptor information required for the execution of the flow, used to perform the assume role during FnF execution.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "roleArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? RoleArn
        {
            get;
            set;
        }
    }
}
