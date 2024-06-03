using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Assembly.Schema
{
    /// <summary>Describe the source of a file asset.</summary>
    [JsiiInterface(nativeType: typeof(IFileSource), fullyQualifiedName: "@alicloud/ros-cdk-assembly-schema.FileSource")]
    public interface IFileSource
    {
        /// <summary>External command which will produce the file asset to upload.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - Exactly one of `executable` and `path` is required.
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

        /// <summary>Packaging method.</summary>
        /// <remarks>
        /// Only allowed when <c>path</c> is specified.
        ///
        /// <strong>Default</strong>: FILE
        /// </remarks>
        [JsiiProperty(name: "packaging", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.FileAssetPackaging\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.FileAssetPackaging? Packaging
        {
            get
            {
                return null;
            }
        }

        /// <summary>The filesystem object to upload.</summary>
        /// <remarks>
        /// This path is relative to the asset manifest location.
        ///
        /// <strong>Default</strong>: - Exactly one of `executable` and `path` is required.
        /// </remarks>
        [JsiiProperty(name: "path", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Path
        {
            get
            {
                return null;
            }
        }

        /// <summary>Describe the source of a file asset.</summary>
        [JsiiTypeProxy(nativeType: typeof(IFileSource), fullyQualifiedName: "@alicloud/ros-cdk-assembly-schema.FileSource")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IFileSource
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>External command which will produce the file asset to upload.</summary>
            /// <remarks>
            /// <strong>Default</strong>: - Exactly one of `executable` and `path` is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "executable", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
            public string[]? Executable
            {
                get => GetInstanceProperty<string[]?>();
            }

            /// <summary>Packaging method.</summary>
            /// <remarks>
            /// Only allowed when <c>path</c> is specified.
            ///
            /// <strong>Default</strong>: FILE
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "packaging", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.FileAssetPackaging\"}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.FileAssetPackaging? Packaging
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.FileAssetPackaging?>();
            }

            /// <summary>The filesystem object to upload.</summary>
            /// <remarks>
            /// This path is relative to the asset manifest location.
            ///
            /// <strong>Default</strong>: - Exactly one of `executable` and `path` is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "path", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Path
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
