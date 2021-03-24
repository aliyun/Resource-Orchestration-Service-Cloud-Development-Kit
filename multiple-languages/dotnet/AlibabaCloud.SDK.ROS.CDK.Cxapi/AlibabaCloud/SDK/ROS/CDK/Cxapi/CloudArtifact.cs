using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cxapi
{
    /// <summary>Represents an artifact within a cloud assembly.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Cxapi.CloudArtifact), fullyQualifiedName: "@alicloud/ros-cdk-cxapi.CloudArtifact", parametersJson: "[{\"name\":\"assembly\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-cxapi.CloudAssembly\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"manifest\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.ArtifactManifest\"}}]")]
    public class CloudArtifact : DeputyBase
    {
        public CloudArtifact(AlibabaCloud.SDK.ROS.CDK.Cxapi.CloudAssembly assembly, string id, AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IArtifactManifest manifest): base(new DeputyProps(new object?[]{assembly, id, manifest}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected CloudArtifact(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected CloudArtifact(DeputyProps props): base(props)
        {
        }

        /// <summary>Returns a subclass of `CloudArtifact` based on the artifact type defined in the artifact manifest.</summary>
        /// <param name="assembly">The cloud assembly from which to load the artifact.</param>
        /// <param name="id">The artifact ID.</param>
        /// <param name="artifact">The artifact manifest.</param>
        /// <returns>the `CloudArtifact` that matches the artifact type or `undefined` if it's an artifact type that is unrecognized by this module.</returns>
        [JsiiMethod(name: "fromManifest", returnsJson: "{\"optional\":true,\"type\":{\"fqn\":\"@alicloud/ros-cdk-cxapi.CloudArtifact\"}}", parametersJson: "[{\"docs\":{\"summary\":\"The cloud assembly from which to load the artifact.\"},\"name\":\"assembly\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-cxapi.CloudAssembly\"}},{\"docs\":{\"summary\":\"The artifact ID.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"The artifact manifest.\"},\"name\":\"artifact\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.ArtifactManifest\"}}]")]
        public static AlibabaCloud.SDK.ROS.CDK.Cxapi.CloudArtifact? FromManifest(AlibabaCloud.SDK.ROS.CDK.Cxapi.CloudAssembly assembly, string id, AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IArtifactManifest artifact)
        {
            return InvokeStaticMethod<AlibabaCloud.SDK.ROS.CDK.Cxapi.CloudArtifact?>(typeof(AlibabaCloud.SDK.ROS.CDK.Cxapi.CloudArtifact), new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Cxapi.CloudAssembly), typeof(string), typeof(AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IArtifactManifest)}, new object[]{assembly, id, artifact});
        }

        /// <returns>all the metadata entries of a specific type in this artifact.</returns>
        [JsiiMethod(name: "findMetadataByType", returnsJson: "{\"type\":{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-cxapi.MetadataEntryResult\"},\"kind\":\"array\"}}}", parametersJson: "[{\"name\":\"type\",\"type\":{\"primitive\":\"string\"}}]")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Cxapi.IMetadataEntryResult[] FindMetadataByType(string type)
        {
            return InvokeInstanceMethod<AlibabaCloud.SDK.ROS.CDK.Cxapi.IMetadataEntryResult[]>(new System.Type[]{typeof(string)}, new object[]{type})!;
        }

        [JsiiProperty(name: "assembly", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cxapi.CloudAssembly\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Cxapi.CloudAssembly Assembly
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Cxapi.CloudAssembly>()!;
        }

        [JsiiProperty(name: "id", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string Id
        {
            get => GetInstanceProperty<string>()!;
        }

        /// <summary>The artifact's manifest.</summary>
        [JsiiProperty(name: "manifest", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.ArtifactManifest\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IArtifactManifest Manifest
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IArtifactManifest>()!;
        }

        /// <summary>The set of messages extracted from the artifact's metadata.</summary>
        [JsiiProperty(name: "messages", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-cxapi.SynthesisMessage\"},\"kind\":\"array\"}}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Cxapi.ISynthesisMessage[] Messages
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Cxapi.ISynthesisMessage[]>()!;
        }

        /// <summary>Returns all the artifacts that this artifact depends on.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "dependencies", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-cxapi.CloudArtifact\"},\"kind\":\"array\"}}", isOptional: true)]
        public virtual AlibabaCloud.SDK.ROS.CDK.Cxapi.CloudArtifact[]? Dependencies
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Cxapi.CloudArtifact[]?>();
        }
    }
}
