using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cxapi
{
    /// <summary>Can be used to build a cloud assembly.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Cxapi.CloudAssemblyBuilder), fullyQualifiedName: "@alicloud/ros-cdk-cxapi.CloudAssemblyBuilder", parametersJson: "[{\"docs\":{\"summary\":\"The output directory, uses temporary directory if undefined.\"},\"name\":\"outdir\",\"optional\":true,\"type\":{\"primitive\":\"string\"}}]")]
    public class CloudAssemblyBuilder : DeputyBase
    {
        /// <summary>Initializes a cloud assembly builder.</summary>
        /// <param name="outdir">The output directory, uses temporary directory if undefined.</param>
        public CloudAssemblyBuilder(string? outdir = null): base(new DeputyProps(new object?[]{outdir}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected CloudAssemblyBuilder(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected CloudAssemblyBuilder(DeputyProps props): base(props)
        {
        }

        /// <summary>Adds an artifact into the cloud assembly.</summary>
        /// <param name="id">The ID of the artifact.</param>
        /// <param name="manifest">The artifact manifest.</param>
        [JsiiMethod(name: "addArtifact", parametersJson: "[{\"docs\":{\"summary\":\"The ID of the artifact.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"The artifact manifest.\"},\"name\":\"manifest\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.ArtifactManifest\"}}]")]
        public virtual void AddArtifact(string id, AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IArtifactManifest manifest)
        {
            InvokeInstanceVoidMethod(new System.Type[]{typeof(string), typeof(AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IArtifactManifest)}, new object[]{id, manifest});
        }

        /// <summary>Reports that some context is missing in order for this cloud assembly to be fully synthesized.</summary>
        /// <param name="missing">Missing context information.</param>
        [JsiiMethod(name: "addMissing", parametersJson: "[{\"docs\":{\"summary\":\"Missing context information.\"},\"name\":\"missing\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.MissingContext\"}}]")]
        public virtual void AddMissing(AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IMissingContext missing)
        {
            InvokeInstanceVoidMethod(new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IMissingContext)}, new object[]{missing});
        }

        /// <summary>Finalizes the cloud assembly into the output directory returns a 'CloudAssembly' object that can be used to inspect the assembly.</summary>
        [JsiiMethod(name: "buildAssembly", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-cxapi.CloudAssembly\"}}", parametersJson: "[{\"name\":\"options\",\"optional\":true,\"type\":{\"fqn\":\"@alicloud/ros-cdk-cxapi.AssemblyBuildOptions\"}}]")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Cxapi.CloudAssembly BuildAssembly(AlibabaCloud.SDK.ROS.CDK.Cxapi.IAssemblyBuildOptions? options = null)
        {
            return InvokeInstanceMethod<AlibabaCloud.SDK.ROS.CDK.Cxapi.CloudAssembly>(new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Cxapi.IAssemblyBuildOptions)}, new object?[]{options})!;
        }

        /// <summary>Creates a nested cloud assembly.</summary>
        [JsiiMethod(name: "createNestedAssembly", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-cxapi.CloudAssemblyBuilder\"}}", parametersJson: "[{\"name\":\"artifactId\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"displayName\",\"type\":{\"primitive\":\"string\"}}]")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Cxapi.CloudAssemblyBuilder CreateNestedAssembly(string artifactId, string displayName)
        {
            return InvokeInstanceMethod<AlibabaCloud.SDK.ROS.CDK.Cxapi.CloudAssemblyBuilder>(new System.Type[]{typeof(string), typeof(string)}, new object[]{artifactId, displayName})!;
        }

        /// <summary>The root directory of the resulting cloud assembly.</summary>
        [JsiiProperty(name: "outdir", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string Outdir
        {
            get => GetInstanceProperty<string>()!;
        }
    }
}
