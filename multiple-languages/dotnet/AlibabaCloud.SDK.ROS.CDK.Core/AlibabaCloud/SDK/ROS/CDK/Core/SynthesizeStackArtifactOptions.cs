using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>Stack artifact options.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-core.SynthesizeStackArtifactOptions")]
    public class SynthesizeStackArtifactOptions : AlibabaCloud.SDK.ROS.CDK.Core.ISynthesizeStackArtifactOptions
    {
        /// <summary>Identifiers of additional dependencies.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - No additional dependencies
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "additionalDependencies", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
        public string[]? AdditionalDependencies
        {
            get;
            set;
        }

        /// <summary>Values for ROS stack parameters that should be passed when the stack is deployed.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - No parameters
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "parameters", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"map\"}}", isOptional: true)]
        public System.Collections.Generic.IDictionary<string, string>? Parameters
        {
            get;
            set;
        }
    }
}
