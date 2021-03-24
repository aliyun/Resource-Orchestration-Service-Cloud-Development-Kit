using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cxapi
{
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Cxapi.TreeCloudArtifact), fullyQualifiedName: "@alicloud/ros-cdk-cxapi.TreeCloudArtifact", parametersJson: "[{\"name\":\"assembly\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-cxapi.CloudAssembly\"}},{\"name\":\"name\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"artifact\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.ArtifactManifest\"}}]")]
    public class TreeCloudArtifact : AlibabaCloud.SDK.ROS.CDK.Cxapi.CloudArtifact
    {
        public TreeCloudArtifact(AlibabaCloud.SDK.ROS.CDK.Cxapi.CloudAssembly assembly, string name, AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IArtifactManifest artifact): base(new DeputyProps(new object?[]{assembly, name, artifact}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected TreeCloudArtifact(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected TreeCloudArtifact(DeputyProps props): base(props)
        {
        }

        [JsiiProperty(name: "file", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string File
        {
            get => GetInstanceProperty<string>()!;
        }
    }
}
