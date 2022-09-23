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
        [JsiiProperty(name: "type", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.ArtifactType\"}")]
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
        [JsiiProperty(name: "dependencies", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
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
        [JsiiProperty(name: "metadata", typeJson: "{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.MetadataEntry\"},\"kind\":\"array\"}},\"kind\":\"map\"}}", isOptional: true)]
        public System.Collections.Generic.IDictionary<string, AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IMetadataEntry[]>? Metadata
        {
            get;
            set;
        }

        private object? _properties;

        /// <summary>The set of properties for this artifact (depends on type).</summary>
        /// <remarks>
        /// <strong>Default</strong>: - no properties.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "properties", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.AliyunRosStackProperties\"},{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.TreeArtifactProperties\"},{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.NestedCloudAssemblyProperties\"}]}}", isOptional: true)]
        public object? Properties
        {
            get => _properties;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IAliyunRosStackProperties cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.ITreeArtifactProperties cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.INestedCloudAssemblyProperties cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IAliyunRosStackProperties).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.ITreeArtifactProperties).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.INestedCloudAssemblyProperties).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _properties = value;
            }
        }
    }
}
