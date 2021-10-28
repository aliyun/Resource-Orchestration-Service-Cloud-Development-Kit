using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    [JsiiByValue(fqn: "@alicloud/ros-cdk-core.StackProps")]
    public class StackProps : AlibabaCloud.SDK.ROS.CDK.Core.IStackProps
    {
        /// <summary>A description of the stack.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - No description.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Description
        {
            get;
            set;
        }

        [JsiiOptional]
        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}", isOptional: true, isOverride: true)]
        public bool? EnableResourcePropertyConstraint
        {
            get;
            set;
        }

        [JsiiOptional]
        [JsiiProperty(name: "metadata", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}", isOptional: true, isOverride: true)]
        public System.Collections.Generic.IDictionary<string, object>? Metadata
        {
            get;
            set;
        }

        /// <summary>Name to deploy the stack with.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - Derived from construct path.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "stackName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? StackName
        {
            get;
            set;
        }

        /// <summary>Synthesis method to use while deploying this stack.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - `DefaultStackSynthesizer`
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "synthesizer", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IStackSynthesizer\"}", isOptional: true, isOverride: true)]
        public AlibabaCloud.SDK.ROS.CDK.Core.IStackSynthesizer? Synthesizer
        {
            get;
            set;
        }

        /// <summary>Stack tags that will be applied to all the taggable resources and the stack itself.</summary>
        /// <remarks>
        /// <strong>Default</strong>: {}
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"map\"}}", isOptional: true, isOverride: true)]
        public System.Collections.Generic.IDictionary<string, string>? Tags
        {
            get;
            set;
        }

        [JsiiOptional]
        [JsiiProperty(name: "version", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Version
        {
            get;
            set;
        }
    }
}
