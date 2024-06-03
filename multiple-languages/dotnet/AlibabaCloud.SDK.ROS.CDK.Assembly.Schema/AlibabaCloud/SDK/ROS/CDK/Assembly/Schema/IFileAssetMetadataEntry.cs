using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Assembly.Schema
{
    /// <summary>Metadata Entry spec for files.</summary>
    /// <example>
    /// <code>const entry = {
    ///   packaging: 'file',
    ///   ossBucketParameter: 'bucket-parameter',
    ///   ossKeyParameter: 'key-parameter',
    ///   artifactHashParameter: 'hash-parameter',
    /// }</code>
    /// </example>
    [JsiiInterface(nativeType: typeof(IFileAssetMetadataEntry), fullyQualifiedName: "@alicloud/ros-cdk-assembly-schema.FileAssetMetadataEntry")]
    public interface IFileAssetMetadataEntry
    {
        /// <summary>The name of the parameter where the hash of the bundled asset should be passed in.</summary>
        [JsiiProperty(name: "artifactHashParameter", typeJson: "{\"primitive\":\"string\"}")]
        string ArtifactHashParameter
        {
            get;
        }

        /// <summary>Logical identifier for the asset.</summary>
        [JsiiProperty(name: "id", typeJson: "{\"primitive\":\"string\"}")]
        string Id
        {
            get;
        }

        /// <summary>Name of parameter where OSS bucket should be passed in.</summary>
        [JsiiProperty(name: "ossBucketParameter", typeJson: "{\"primitive\":\"string\"}")]
        string OssBucketParameter
        {
            get;
        }

        /// <summary>Name of parameter where OSS object key should be passed in.</summary>
        [JsiiProperty(name: "ossKeyParameter", typeJson: "{\"primitive\":\"string\"}")]
        string OssKeyParameter
        {
            get;
        }

        /// <summary>Requested packaging style.</summary>
        [JsiiProperty(name: "packaging", typeJson: "{\"primitive\":\"string\"}")]
        string Packaging
        {
            get;
        }

        /// <summary>Path on disk to the asset.</summary>
        [JsiiProperty(name: "path", typeJson: "{\"primitive\":\"string\"}")]
        string Path
        {
            get;
        }

        /// <summary>The hash of the asset source.</summary>
        [JsiiProperty(name: "sourceHash", typeJson: "{\"primitive\":\"string\"}")]
        string SourceHash
        {
            get;
        }

        /// <summary>Metadata Entry spec for files.</summary>
        /// <example>
        /// <code>const entry = {
        ///   packaging: 'file',
        ///   ossBucketParameter: 'bucket-parameter',
        ///   ossKeyParameter: 'key-parameter',
        ///   artifactHashParameter: 'hash-parameter',
        /// }</code>
        /// </example>
        [JsiiTypeProxy(nativeType: typeof(IFileAssetMetadataEntry), fullyQualifiedName: "@alicloud/ros-cdk-assembly-schema.FileAssetMetadataEntry")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IFileAssetMetadataEntry
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>The name of the parameter where the hash of the bundled asset should be passed in.</summary>
            [JsiiProperty(name: "artifactHashParameter", typeJson: "{\"primitive\":\"string\"}")]
            public string ArtifactHashParameter
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Logical identifier for the asset.</summary>
            [JsiiProperty(name: "id", typeJson: "{\"primitive\":\"string\"}")]
            public string Id
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Name of parameter where OSS bucket should be passed in.</summary>
            [JsiiProperty(name: "ossBucketParameter", typeJson: "{\"primitive\":\"string\"}")]
            public string OssBucketParameter
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Name of parameter where OSS object key should be passed in.</summary>
            [JsiiProperty(name: "ossKeyParameter", typeJson: "{\"primitive\":\"string\"}")]
            public string OssKeyParameter
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Requested packaging style.</summary>
            [JsiiProperty(name: "packaging", typeJson: "{\"primitive\":\"string\"}")]
            public string Packaging
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Path on disk to the asset.</summary>
            [JsiiProperty(name: "path", typeJson: "{\"primitive\":\"string\"}")]
            public string Path
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>The hash of the asset source.</summary>
            [JsiiProperty(name: "sourceHash", typeJson: "{\"primitive\":\"string\"}")]
            public string SourceHash
            {
                get => GetInstanceProperty<string>()!;
            }
        }
    }
}
