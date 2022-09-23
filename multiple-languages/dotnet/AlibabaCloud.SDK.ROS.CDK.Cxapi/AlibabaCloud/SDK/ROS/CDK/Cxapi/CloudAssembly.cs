using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cxapi
{
    /// <summary>Represents a deployable cloud application.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Cxapi.CloudAssembly), fullyQualifiedName: "@alicloud/ros-cdk-cxapi.CloudAssembly", parametersJson: "[{\"docs\":{\"summary\":\"The root directory of the assembly.\"},\"name\":\"directory\",\"type\":{\"primitive\":\"string\"}}]")]
    public class CloudAssembly : DeputyBase
    {
        /// <summary>Reads a cloud assembly from the specified directory.</summary>
        /// <param name="directory">The root directory of the assembly.</param>
        public CloudAssembly(string directory): base(_MakeDeputyProps(directory))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(string directory)
        {
            return new DeputyProps(new object?[]{directory});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected CloudAssembly(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected CloudAssembly(DeputyProps props): base(props)
        {
        }

        /// <summary>Returns a nested assembly.</summary>
        /// <param name="artifactId">The artifact ID of the nested assembly.</param>
        [JsiiMethod(name: "getNestedAssembly", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-cxapi.CloudAssembly\"}}", parametersJson: "[{\"docs\":{\"summary\":\"The artifact ID of the nested assembly.\"},\"name\":\"artifactId\",\"type\":{\"primitive\":\"string\"}}]")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Cxapi.CloudAssembly GetNestedAssembly(string artifactId)
        {
            return InvokeInstanceMethod<AlibabaCloud.SDK.ROS.CDK.Cxapi.CloudAssembly>(new System.Type[]{typeof(string)}, new object[]{artifactId})!;
        }

        /// <summary>Returns a nested assembly artifact.</summary>
        /// <param name="artifactId">The artifact ID of the nested assembly.</param>
        [JsiiMethod(name: "getNestedAssemblyArtifact", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-cxapi.NestedCloudAssemblyArtifact\"}}", parametersJson: "[{\"docs\":{\"summary\":\"The artifact ID of the nested assembly.\"},\"name\":\"artifactId\",\"type\":{\"primitive\":\"string\"}}]")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Cxapi.NestedCloudAssemblyArtifact GetNestedAssemblyArtifact(string artifactId)
        {
            return InvokeInstanceMethod<AlibabaCloud.SDK.ROS.CDK.Cxapi.NestedCloudAssemblyArtifact>(new System.Type[]{typeof(string)}, new object[]{artifactId})!;
        }

        /// <summary>Returns a ROS stack artifact by name from this assembly.</summary>
        /// <remarks>
        /// Deprecated renamed to 'getStackByName' (or 'getStackArtifact(id)')
        /// </remarks>
        [JsiiMethod(name: "getStack", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-cxapi.RosStackArtifact\"}}", parametersJson: "[{\"name\":\"stackName\",\"type\":{\"primitive\":\"string\"}}]")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Cxapi.RosStackArtifact GetStack(string stackName)
        {
            return InvokeInstanceMethod<AlibabaCloud.SDK.ROS.CDK.Cxapi.RosStackArtifact>(new System.Type[]{typeof(string)}, new object[]{stackName})!;
        }

        /// <summary>Returns a ROS stack artifact from this assembly.</summary>
        /// <remarks>
        /// Param artifactId the artifact id of the stack (can be obtained through 'stack.artifactId').
        /// Throws if there is no stack artifact with that id
        /// Returns a 'RosStackArtifact' object.
        /// </remarks>
        [JsiiMethod(name: "getStackArtifact", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-cxapi.RosStackArtifact\"}}", parametersJson: "[{\"name\":\"artifactId\",\"type\":{\"primitive\":\"string\"}}]")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Cxapi.RosStackArtifact GetStackArtifact(string artifactId)
        {
            return InvokeInstanceMethod<AlibabaCloud.SDK.ROS.CDK.Cxapi.RosStackArtifact>(new System.Type[]{typeof(string)}, new object[]{artifactId})!;
        }

        /// <summary>Returns a ROS stack artifact from this assembly.</summary>
        /// <remarks>
        /// Will only search the current assembly.
        ///
        /// Param stackName the name of the ROS stack.
        /// Throws if there is no stack artifact by that name
        /// Throws if there is more than one stack with the same stack name. You can
        /// use 'getStackArtifact - stack.artifactId' instead.
        /// Returns a 'RosStackArtifact' object.
        /// </remarks>
        [JsiiMethod(name: "getStackByName", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-cxapi.RosStackArtifact\"}}", parametersJson: "[{\"name\":\"stackName\",\"type\":{\"primitive\":\"string\"}}]")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Cxapi.RosStackArtifact GetStackByName(string stackName)
        {
            return InvokeInstanceMethod<AlibabaCloud.SDK.ROS.CDK.Cxapi.RosStackArtifact>(new System.Type[]{typeof(string)}, new object[]{stackName})!;
        }

        /// <summary>Returns the tree metadata artifact from this assembly.</summary>
        /// <remarks>
        /// Throws if there is no metadata artifact by that name
        /// Returns a 'TreeCloudArtifact' object if there is one defined in the manifest, 'undefined' otherwise.
        /// </remarks>
        [JsiiMethod(name: "tree", returnsJson: "{\"optional\":true,\"type\":{\"fqn\":\"@alicloud/ros-cdk-cxapi.TreeCloudArtifact\"}}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Cxapi.TreeCloudArtifact? Tree()
        {
            return InvokeInstanceMethod<AlibabaCloud.SDK.ROS.CDK.Cxapi.TreeCloudArtifact?>(new System.Type[]{}, new object[]{});
        }

        /// <summary>Attempts to find an artifact with a specific identity.</summary>
        /// <remarks>
        /// Returns A 'CloudArtifact' object or 'undefined' if the artifact does not exist in this assembly.
        /// Param id The artifact ID
        /// </remarks>
        [JsiiMethod(name: "tryGetArtifact", returnsJson: "{\"optional\":true,\"type\":{\"fqn\":\"@alicloud/ros-cdk-cxapi.CloudArtifact\"}}", parametersJson: "[{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}}]")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Cxapi.CloudArtifact? TryGetArtifact(string id)
        {
            return InvokeInstanceMethod<AlibabaCloud.SDK.ROS.CDK.Cxapi.CloudArtifact?>(new System.Type[]{typeof(string)}, new object[]{id});
        }

        /// <summary>All artifacts included in this assembly.</summary>
        [JsiiProperty(name: "artifacts", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-cxapi.CloudArtifact\"},\"kind\":\"array\"}}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Cxapi.CloudArtifact[] Artifacts
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Cxapi.CloudArtifact[]>()!;
        }

        /// <summary>The root directory of the cloud assembly.</summary>
        [JsiiProperty(name: "directory", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string Directory
        {
            get => GetInstanceProperty<string>()!;
        }

        /// <summary>The raw assembly manifest.</summary>
        [JsiiProperty(name: "manifest", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.AssemblyManifest\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IAssemblyManifest Manifest
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IAssemblyManifest>()!;
        }

        /// <summary>Runtime information such as module versions used to synthesize this assembly.</summary>
        [JsiiProperty(name: "runtime", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.RuntimeInfo\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IRuntimeInfo Runtime
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IRuntimeInfo>()!;
        }

        /// <returns>all the ROS stack artifacts that are included in this assembly.</returns>
        [JsiiProperty(name: "stacks", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-cxapi.RosStackArtifact\"},\"kind\":\"array\"}}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Cxapi.RosStackArtifact[] Stacks
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Cxapi.RosStackArtifact[]>()!;
        }

        /// <summary>The schema version of the assembly manifest.</summary>
        [JsiiProperty(name: "version", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string Version
        {
            get => GetInstanceProperty<string>()!;
        }
    }
}
