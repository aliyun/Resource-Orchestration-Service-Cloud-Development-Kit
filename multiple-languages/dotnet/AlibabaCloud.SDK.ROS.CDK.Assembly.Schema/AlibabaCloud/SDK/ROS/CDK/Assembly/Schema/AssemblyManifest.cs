using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Assembly.Schema
{
    #pragma warning disable CS8618

    /// <summary>A manifest which describes the cloud assembly.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-assembly-schema.AssemblyManifest")]
    public class AssemblyManifest : AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IAssemblyManifest
    {
        /// <summary>Protocol version.</summary>
        [JsiiProperty(name: "version", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Version
        {
            get;
            set;
        }

        /// <summary>The set of artifacts in this assembly.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - no artifacts.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "artifacts", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.ArtifactManifest\"},\"kind\":\"map\"}}", isOptional: true, isOverride: true)]
        public System.Collections.Generic.IDictionary<string, AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IArtifactManifest>? Artifacts
        {
            get;
            set;
        }

        /// <summary>Missing context information.</summary>
        /// <remarks>
        /// If this field has values, it means that the
        /// cloud assembly is not complete and should not be deployed.
        /// 
        /// <strong>Default</strong>: - no missing context.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "missing", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.MissingContext\"},\"kind\":\"array\"}}", isOptional: true, isOverride: true)]
        public AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IMissingContext[]? Missing
        {
            get;
            set;
        }

        /// <summary>Runtime information.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - no info.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "runtime", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.RuntimeInfo\"}", isOptional: true, isOverride: true)]
        public AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IRuntimeInfo? Runtime
        {
            get;
            set;
        }
    }
}
