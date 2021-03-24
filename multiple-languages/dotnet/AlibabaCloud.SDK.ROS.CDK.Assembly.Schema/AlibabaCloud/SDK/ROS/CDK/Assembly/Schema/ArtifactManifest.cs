using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Assembly.Schema
{
    #pragma warning disable CS8618

    /// <summary>A manifest for a single artifact within the cloud assembly.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-assembly-schema.ArtifactManifest")]
    public class ArtifactManifest : AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IArtifactManifest
    {
        /// <summary>The type of artifact.</summary>
        [JsiiProperty(name: "type", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.ArtifactType\"}", isOverride: true)]
        public AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.ArtifactType Type
        {
            get;
            set;
        }

        /// <summary>IDs of artifacts that must be deployed before this artifact.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - no dependencies.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dependencies", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true, isOverride: true)]
        public string[]? Dependencies
        {
            get;
            set;
        }

        /// <summary>Associated metadata.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - no metadata.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "metadata", typeJson: "{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.MetadataEntry\"},\"kind\":\"array\"}},\"kind\":\"map\"}}", isOptional: true, isOverride: true)]
        public System.Collections.Generic.IDictionary<string, AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IMetadataEntry[]>? Metadata
        {
            get;
            set;
        }

        /// <summary>The set of properties for this artifact (depends on type).</summary>
        /// <remarks>
        /// <strong>Default</strong>: - no properties.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "properties", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.AliyunRosStackProperties\"},{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.TreeArtifactProperties\"},{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.NestedCloudAssemblyProperties\"}]}}", isOptional: true, isOverride: true)]
        public object? Properties
        {
            get;
            set;
        }
    }
}
