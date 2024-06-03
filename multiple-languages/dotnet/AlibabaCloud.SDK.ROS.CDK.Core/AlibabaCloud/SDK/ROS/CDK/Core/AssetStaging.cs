using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>Stages a file or directory from a location on the file system into a staging directory.</summary>
    /// <remarks>
    /// This is controlled by the context key 'aliyun:ros:disable-asset-staging' and enabled
    /// by the CLI by default in order to ensure that when the CDK app exists, all
    /// assets are available for deployment. Otherwise, if an app references assets
    /// in temporary locations, those will not be available when it exists.
    ///
    /// The <c>stagedPath</c> property is a stringified token that represents the location
    /// of the file or directory after staging. It will be resolved only during the
    /// "prepare" stage and may be either the original path or the staged path
    /// depending on the context setting.
    ///
    /// The file/directory are staged based on their content hash (fingerprint). This
    /// means that only if content was changed, copy will happen.
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Core.AssetStaging), fullyQualifiedName: "@alicloud/ros-cdk-core.AssetStaging", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.AssetStagingProps\"}}]")]
    public class AssetStaging : AlibabaCloud.SDK.ROS.CDK.Core.Construct
    {
        public AssetStaging(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Core.IAssetStagingProps props): base(_MakeDeputyProps(scope, id, props))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Core.IAssetStagingProps props)
        {
            return new DeputyProps(new object?[]{scope, id, props});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected AssetStaging(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected AssetStaging(DeputyProps props): base(props)
        {
        }

        /// <summary>Clears the asset hash cache.</summary>
        [JsiiMethod(name: "clearAssetHashCache")]
        public static void ClearAssetHashCache()
        {
            InvokeStaticVoidMethod(typeof(AlibabaCloud.SDK.ROS.CDK.Core.AssetStaging), new System.Type[]{}, new object[]{});
        }

        /// <summary>Return the path to the staged asset, relative to the Cloud Assembly (manifest) directory of the given stack.</summary>
        /// <remarks>
        /// Only returns a relative path if the asset was staged, returns an absolute path if
        /// it was not staged.
        ///
        /// A bundled asset might end up in the outDir and still not count as
        /// "staged"; if asset staging is disabled we're technically expected to
        /// reference source directories, but we don't have a source directory for the
        /// bundled outputs (as the bundle output is written to a temporary
        /// directory). Nevertheless, we will still return an absolute path.
        ///
        /// A non-obvious directory layout may look like this:
        ///
        /// <code><![CDATA[
        ///    CLOUD ASSEMBLY ROOT
        ///      +-- asset.12345abcdef/
        ///      +-- assembly-Stage
        ///            +-- MyStack.template.json
        ///            +-- MyStack.assets.json <- will contain { "path": "../asset.12345abcdef" }
        /// ]]></code>
        /// </remarks>
        [JsiiMethod(name: "relativeStagedPath", returnsJson: "{\"type\":{\"primitive\":\"string\"}}", parametersJson: "[{\"name\":\"stack\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Stack\"}}]")]
        public virtual string RelativeStagedPath(AlibabaCloud.SDK.ROS.CDK.Core.Stack stack)
        {
            return InvokeInstanceMethod<string>(new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Core.Stack)}, new object[]{stack})!;
        }

        /// <summary>The directory inside the bundling container into which the asset sources will be mounted.</summary>
        [JsiiProperty(name: "BUNDLING_INPUT_DIR", typeJson: "{\"primitive\":\"string\"}")]
        public static string BUNDLING_INPUT_DIR
        {
            get;
        }
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.AssetStaging))!;

        /// <summary>The directory inside the bundling container into which the bundled output should be written.</summary>
        [JsiiProperty(name: "BUNDLING_OUTPUT_DIR", typeJson: "{\"primitive\":\"string\"}")]
        public static string BUNDLING_OUTPUT_DIR
        {
            get;
        }
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.AssetStaging))!;

        /// <summary>Absolute path to the asset data.</summary>
        /// <remarks>
        /// If asset staging is disabled, this will just be the source path or
        /// a temporary directory used for bundling.
        ///
        /// If asset staging is enabled it will be the staged path.
        ///
        /// IMPORTANT: If you are going to call <c>addFileAsset()</c>, use
        /// <c>relativeStagedPath()</c> instead.
        /// </remarks>
        [JsiiProperty(name: "absoluteStagedPath", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string AbsoluteStagedPath
        {
            get => GetInstanceProperty<string>()!;
        }

        /// <summary>A cryptographic hash of the asset.</summary>
        [JsiiProperty(name: "assetHash", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string AssetHash
        {
            get => GetInstanceProperty<string>()!;
        }

        /// <summary>Whether this asset is an archive (zip or jar).</summary>
        [JsiiProperty(name: "isArchive", typeJson: "{\"primitive\":\"boolean\"}")]
        public virtual bool IsArchive
        {
            get => GetInstanceProperty<bool>()!;
        }

        /// <summary>How this asset should be packaged.</summary>
        [JsiiProperty(name: "packaging", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.FileAssetPackaging\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.FileAssetPackaging Packaging
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.FileAssetPackaging>()!;
        }

        /// <summary>The absolute path of the asset as it was referenced by the user.</summary>
        [JsiiProperty(name: "sourcePath", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string SourcePath
        {
            get => GetInstanceProperty<string>()!;
        }
    }
}
