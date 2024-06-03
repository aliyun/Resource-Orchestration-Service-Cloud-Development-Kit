using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>Build an asset manifest from assets added to a stack.</summary>
    /// <remarks>
    /// This class does not need to be used by app builders; it is only necessary for building Stack Synthesizers.
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Core.AssetManifestBuilder), fullyQualifiedName: "@alicloud/ros-cdk-core.AssetManifestBuilder")]
    public class AssetManifestBuilder : DeputyBase
    {
        public AssetManifestBuilder(): base(_MakeDeputyProps())
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps()
        {
            return new DeputyProps(System.Array.Empty<object?>());
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected AssetManifestBuilder(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected AssetManifestBuilder(DeputyProps props): base(props)
        {
        }

        /// <summary>Add a docker asset source and destination to the manifest.</summary>
        /// <remarks>
        /// sourceHash should be unique for every source.
        /// </remarks>
        [JsiiMethod(name: "addDockerImageAsset", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.DockerImageDestination\"}}", parametersJson: "[{\"name\":\"stack\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Stack\"}},{\"name\":\"sourceHash\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"source\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.DockerImageSource\"}},{\"name\":\"dest\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.DockerImageDestination\"}}]")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IDockerImageDestination AddDockerImageAsset(AlibabaCloud.SDK.ROS.CDK.Core.Stack stack, string sourceHash, AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IDockerImageSource source, AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IDockerImageDestination dest)
        {
            return InvokeInstanceMethod<AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IDockerImageDestination>(new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Core.Stack), typeof(string), typeof(AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IDockerImageSource), typeof(AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IDockerImageDestination)}, new object[]{stack, sourceHash, source, dest})!;
        }

        /// <summary>Add a file asset source and destination to the manifest.</summary>
        /// <remarks>
        /// sourceHash should be unique for every source.
        /// </remarks>
        [JsiiMethod(name: "addFileAsset", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.FileDestination\"}}", parametersJson: "[{\"name\":\"stack\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Stack\"}},{\"name\":\"sourceHash\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"source\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.FileSource\"}},{\"name\":\"dest\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.FileDestination\"}}]")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IFileDestination AddFileAsset(AlibabaCloud.SDK.ROS.CDK.Core.Stack stack, string sourceHash, AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IFileSource source, AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IFileDestination dest)
        {
            return InvokeInstanceMethod<AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IFileDestination>(new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Core.Stack), typeof(string), typeof(AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IFileSource), typeof(AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IFileDestination)}, new object[]{stack, sourceHash, source, dest})!;
        }

        /// <summary>Add a docker image asset to the manifest with default settings.</summary>
        /// <remarks>
        /// Derive the region from the stack, use the asset hash as the key, and set the prefix.
        /// </remarks>
        [JsiiMethod(name: "defaultAddDockerImageAsset", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.DockerImageDestination\"}}", parametersJson: "[{\"name\":\"stack\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Stack\"}},{\"name\":\"asset\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.DockerImageAssetSource\"}},{\"name\":\"target\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.AssetManifestDockerImageDestination\"}}]")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IDockerImageDestination DefaultAddDockerImageAsset(AlibabaCloud.SDK.ROS.CDK.Core.Stack stack, AlibabaCloud.SDK.ROS.CDK.Core.IDockerImageAssetSource asset, AlibabaCloud.SDK.ROS.CDK.Core.IAssetManifestDockerImageDestination target)
        {
            return InvokeInstanceMethod<AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IDockerImageDestination>(new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Core.Stack), typeof(AlibabaCloud.SDK.ROS.CDK.Core.IDockerImageAssetSource), typeof(AlibabaCloud.SDK.ROS.CDK.Core.IAssetManifestDockerImageDestination)}, new object[]{stack, asset, target})!;
        }

        /// <summary>Add a file asset to the manifest with default settings.</summary>
        /// <remarks>
        /// Derive the region from the stack, use the asset hash as the key, copy the
        /// file extension over, and set the prefix.
        /// </remarks>
        [JsiiMethod(name: "defaultAddFileAsset", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.FileDestination\"}}", parametersJson: "[{\"name\":\"stack\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Stack\"}},{\"name\":\"asset\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.FileAssetSource\"}},{\"name\":\"target\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.AssetManifestFileDestination\"}}]")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IFileDestination DefaultAddFileAsset(AlibabaCloud.SDK.ROS.CDK.Core.Stack stack, AlibabaCloud.SDK.ROS.CDK.Core.IFileAssetSource asset, AlibabaCloud.SDK.ROS.CDK.Core.IAssetManifestFileDestination target)
        {
            return InvokeInstanceMethod<AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IFileDestination>(new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Core.Stack), typeof(AlibabaCloud.SDK.ROS.CDK.Core.IFileAssetSource), typeof(AlibabaCloud.SDK.ROS.CDK.Core.IAssetManifestFileDestination)}, new object[]{stack, asset, target})!;
        }

        /// <summary>Write the manifest to disk, and add it to the synthesis session.</summary>
        /// <remarks>
        /// Return the artifact id, which should be added to the <c>additionalDependencies</c>
        /// field of the stack artifact.
        /// </remarks>
        [JsiiMethod(name: "emitManifest", returnsJson: "{\"type\":{\"primitive\":\"string\"}}", parametersJson: "[{\"name\":\"stack\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Stack\"}},{\"name\":\"session\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.ISynthesisSession\"}},{\"name\":\"options\",\"optional\":true,\"type\":{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.AssetManifestOptions\"}},{\"name\":\"dependencies\",\"optional\":true,\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}}]")]
        public virtual string EmitManifest(AlibabaCloud.SDK.ROS.CDK.Core.Stack stack, AlibabaCloud.SDK.ROS.CDK.Core.ISynthesisSession session, AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IAssetManifestOptions? options = null, string[]? dependencies = null)
        {
            return InvokeInstanceMethod<string>(new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Core.Stack), typeof(AlibabaCloud.SDK.ROS.CDK.Core.ISynthesisSession), typeof(AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IAssetManifestOptions), typeof(string[])}, new object?[]{stack, session, options, dependencies})!;
        }

        /// <summary>Whether there are any assets registered in the manifest.</summary>
        [JsiiProperty(name: "hasAssets", typeJson: "{\"primitive\":\"boolean\"}")]
        public virtual bool HasAssets
        {
            get => GetInstanceProperty<bool>()!;
        }
    }
}
