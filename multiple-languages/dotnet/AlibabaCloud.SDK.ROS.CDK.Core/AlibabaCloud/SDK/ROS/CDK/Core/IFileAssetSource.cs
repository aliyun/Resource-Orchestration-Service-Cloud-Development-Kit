using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>Represents the source for a file asset.</summary>
    [JsiiInterface(nativeType: typeof(IFileAssetSource), fullyQualifiedName: "@alicloud/ros-cdk-core.FileAssetSource")]
    public interface IFileAssetSource
    {
        /// <summary>A hash on the content source.</summary>
        /// <remarks>
        /// This hash is used to uniquely identify this
        /// asset throughout the system. If this value doesn't change, the asset will
        /// not be rebuilt or republished.
        /// </remarks>
        [JsiiProperty(name: "sourceHash", typeJson: "{\"primitive\":\"string\"}")]
        string SourceHash
        {
            get;
        }

        /// <summary>Whether or not the asset needs to exist beyond deployment time;</summary>
        /// <remarks>
        /// i.e.
        /// are copied over to a different location and not needed afterwards.
        /// Setting this property to true has an impact on the lifecycle of the asset,
        /// because we will assume that it is safe to delete after the ROS
        /// deployment succeeds.
        ///
        /// For example, FC Function assets are copied over to FC during
        /// deployment. Therefore, it is not necessary to store the asset in OSS bucket, so
        /// we consider those deployTime assets.
        ///
        /// <strong>Default</strong>: false
        /// </remarks>
        [JsiiProperty(name: "deployTime", typeJson: "{\"primitive\":\"boolean\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        bool? DeployTime
        {
            get
            {
                return null;
            }
        }

        /// <summary>An external command that will produce the packaged asset.</summary>
        /// <remarks>
        /// The command should produce the location of a ZIP file on <c>stdout</c>.
        ///
        /// <strong>Default</strong>: - Exactly one of `fileName` and `executable` is required
        /// </remarks>
        [JsiiProperty(name: "executable", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string[]? Executable
        {
            get
            {
                return null;
            }
        }

        /// <summary>The path, relative to the root of the cloud assembly, in which this asset source resides.</summary>
        /// <remarks>
        /// This can be a path to a file or a directory, depending on the
        /// packaging type.
        ///
        /// <strong>Default</strong>: - Exactly one of `fileName` and `executable` is required
        /// </remarks>
        [JsiiProperty(name: "fileName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? FileName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Which type of packaging to perform.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - Required if `fileName` is specified.
        /// </remarks>
        [JsiiProperty(name: "packaging", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.FileAssetPackaging\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Core.FileAssetPackaging? Packaging
        {
            get
            {
                return null;
            }
        }

        /// <summary>Represents the source for a file asset.</summary>
        [JsiiTypeProxy(nativeType: typeof(IFileAssetSource), fullyQualifiedName: "@alicloud/ros-cdk-core.FileAssetSource")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Core.IFileAssetSource
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>A hash on the content source.</summary>
            /// <remarks>
            /// This hash is used to uniquely identify this
            /// asset throughout the system. If this value doesn't change, the asset will
            /// not be rebuilt or republished.
            /// </remarks>
            [JsiiProperty(name: "sourceHash", typeJson: "{\"primitive\":\"string\"}")]
            public string SourceHash
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Whether or not the asset needs to exist beyond deployment time;</summary>
            /// <remarks>
            /// i.e.
            /// are copied over to a different location and not needed afterwards.
            /// Setting this property to true has an impact on the lifecycle of the asset,
            /// because we will assume that it is safe to delete after the ROS
            /// deployment succeeds.
            ///
            /// For example, FC Function assets are copied over to FC during
            /// deployment. Therefore, it is not necessary to store the asset in OSS bucket, so
            /// we consider those deployTime assets.
            ///
            /// <strong>Default</strong>: false
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "deployTime", typeJson: "{\"primitive\":\"boolean\"}", isOptional: true)]
            public bool? DeployTime
            {
                get => GetInstanceProperty<bool?>();
            }

            /// <summary>An external command that will produce the packaged asset.</summary>
            /// <remarks>
            /// The command should produce the location of a ZIP file on <c>stdout</c>.
            ///
            /// <strong>Default</strong>: - Exactly one of `fileName` and `executable` is required
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "executable", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
            public string[]? Executable
            {
                get => GetInstanceProperty<string[]?>();
            }

            /// <summary>The path, relative to the root of the cloud assembly, in which this asset source resides.</summary>
            /// <remarks>
            /// This can be a path to a file or a directory, depending on the
            /// packaging type.
            ///
            /// <strong>Default</strong>: - Exactly one of `fileName` and `executable` is required
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "fileName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? FileName
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Which type of packaging to perform.</summary>
            /// <remarks>
            /// <strong>Default</strong>: - Required if `fileName` is specified.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "packaging", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.FileAssetPackaging\"}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Core.FileAssetPackaging? Packaging
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.FileAssetPackaging?>();
            }
        }
    }
}
