using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Assembly.Schema
{
    /// <summary>A manifest for a single artifact within the cloud assembly.</summary>
    [JsiiInterface(nativeType: typeof(IArtifactManifest), fullyQualifiedName: "@alicloud/ros-cdk-assembly-schema.ArtifactManifest")]
    public interface IArtifactManifest
    {
        /// <summary>The type of artifact.</summary>
        [JsiiProperty(name: "type", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.ArtifactType\"}")]
        AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.ArtifactType Type
        {
            get;
        }

        /// <summary>IDs of artifacts that must be deployed before this artifact.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - no dependencies.
        /// </remarks>
        [JsiiProperty(name: "dependencies", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string[]? Dependencies
        {
            get
            {
                return null;
            }
        }

        /// <summary>Associated metadata.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - no metadata.
        /// </remarks>
        [JsiiProperty(name: "metadata", typeJson: "{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.MetadataEntry\"},\"kind\":\"array\"}},\"kind\":\"map\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        System.Collections.Generic.IDictionary<string, AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IMetadataEntry[]>? Metadata
        {
            get
            {
                return null;
            }
        }

        /// <summary>The set of properties for this artifact (depends on type).</summary>
        /// <remarks>
        /// <strong>Default</strong>: - no properties.
        /// </remarks>
        [JsiiProperty(name: "properties", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.AliyunRosStackProperties\"},{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.TreeArtifactProperties\"},{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.NestedCloudAssemblyProperties\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Properties
        {
            get
            {
                return null;
            }
        }

        /// <summary>A manifest for a single artifact within the cloud assembly.</summary>
        [JsiiTypeProxy(nativeType: typeof(IArtifactManifest), fullyQualifiedName: "@alicloud/ros-cdk-assembly-schema.ArtifactManifest")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IArtifactManifest
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>The type of artifact.</summary>
            [JsiiProperty(name: "type", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.ArtifactType\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.ArtifactType Type
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.ArtifactType>()!;
            }

            /// <summary>IDs of artifacts that must be deployed before this artifact.</summary>
            /// <remarks>
            /// <strong>Default</strong>: - no dependencies.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dependencies", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
            public string[]? Dependencies
            {
                get => GetInstanceProperty<string[]?>();
            }

            /// <summary>Associated metadata.</summary>
            /// <remarks>
            /// <strong>Default</strong>: - no metadata.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "metadata", typeJson: "{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.MetadataEntry\"},\"kind\":\"array\"}},\"kind\":\"map\"}}", isOptional: true)]
            public System.Collections.Generic.IDictionary<string, AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IMetadataEntry[]>? Metadata
            {
                get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IMetadataEntry[]>?>();
            }

            /// <summary>The set of properties for this artifact (depends on type).</summary>
            /// <remarks>
            /// <strong>Default</strong>: - no properties.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "properties", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.AliyunRosStackProperties\"},{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.TreeArtifactProperties\"},{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.NestedCloudAssemblyProperties\"}]}}", isOptional: true)]
            public object? Properties
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
