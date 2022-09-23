using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cxapi
{
    /// <summary>Asset manifest is a description of a set of assets which need to be built and published.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Cxapi.NestedCloudAssemblyArtifact), fullyQualifiedName: "@alicloud/ros-cdk-cxapi.NestedCloudAssemblyArtifact", parametersJson: "[{\"name\":\"assembly\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-cxapi.CloudAssembly\"}},{\"name\":\"name\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"artifact\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.ArtifactManifest\"}}]")]
    public class NestedCloudAssemblyArtifact : AlibabaCloud.SDK.ROS.CDK.Cxapi.CloudArtifact
    {
        public NestedCloudAssemblyArtifact(AlibabaCloud.SDK.ROS.CDK.Cxapi.CloudAssembly assembly, string name, AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IArtifactManifest artifact): base(_MakeDeputyProps(assembly, name, artifact))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Cxapi.CloudAssembly assembly, string name, AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IArtifactManifest artifact)
        {
            return new DeputyProps(new object?[]{assembly, name, artifact});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected NestedCloudAssemblyArtifact(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected NestedCloudAssemblyArtifact(DeputyProps props): base(props)
        {
        }

        /// <summary>The relative directory name of the asset manifest.</summary>
        [JsiiProperty(name: "directoryName", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string DirectoryName
        {
            get => GetInstanceProperty<string>()!;
        }

        /// <summary>Display name.</summary>
        [JsiiProperty(name: "displayName", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string DisplayName
        {
            get => GetInstanceProperty<string>()!;
        }

        /// <summary>Full path to the nested assembly directory.</summary>
        [JsiiProperty(name: "fullPath", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string FullPath
        {
            get => GetInstanceProperty<string>()!;
        }

        /// <summary>The nested Assembly.</summary>
        [JsiiProperty(name: "nestedAssembly", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cxapi.CloudAssembly\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Cxapi.CloudAssembly NestedAssembly
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Cxapi.CloudAssembly>()!;
        }
    }
}
