using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Assembly.Schema
{
    #pragma warning disable CS8618

    /// <summary>Metadata Entry spec for files.</summary>
    /// <example>
    /// <code>const entry = {
    ///   packaging: 'file',
    ///   ossBucketParameter: 'bucket-parameter',
    ///   ossKeyParameter: 'key-parameter',
    ///   artifactHashParameter: 'hash-parameter',
    /// }</code>
    /// </example>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-assembly-schema.FileAssetMetadataEntry")]
    public class FileAssetMetadataEntry : AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IFileAssetMetadataEntry
    {
        /// <summary>The name of the parameter where the hash of the bundled asset should be passed in.</summary>
        [JsiiProperty(name: "artifactHashParameter", typeJson: "{\"primitive\":\"string\"}")]
        public string ArtifactHashParameter
        {
            get;
            set;
        }

        /// <summary>Logical identifier for the asset.</summary>
        [JsiiProperty(name: "id", typeJson: "{\"primitive\":\"string\"}")]
        public string Id
        {
            get;
            set;
        }

        /// <summary>Name of parameter where OSS bucket should be passed in.</summary>
        [JsiiProperty(name: "ossBucketParameter", typeJson: "{\"primitive\":\"string\"}")]
        public string OssBucketParameter
        {
            get;
            set;
        }

        /// <summary>Name of parameter where OSS object key should be passed in.</summary>
        [JsiiProperty(name: "ossKeyParameter", typeJson: "{\"primitive\":\"string\"}")]
        public string OssKeyParameter
        {
            get;
            set;
        }

        /// <summary>Requested packaging style.</summary>
        [JsiiProperty(name: "packaging", typeJson: "{\"primitive\":\"string\"}")]
        public string Packaging
        {
            get;
            set;
        }

        /// <summary>Path on disk to the asset.</summary>
        [JsiiProperty(name: "path", typeJson: "{\"primitive\":\"string\"}")]
        public string Path
        {
            get;
            set;
        }

        /// <summary>The hash of the asset source.</summary>
        [JsiiProperty(name: "sourceHash", typeJson: "{\"primitive\":\"string\"}")]
        public string SourceHash
        {
            get;
            set;
        }
    }
}
