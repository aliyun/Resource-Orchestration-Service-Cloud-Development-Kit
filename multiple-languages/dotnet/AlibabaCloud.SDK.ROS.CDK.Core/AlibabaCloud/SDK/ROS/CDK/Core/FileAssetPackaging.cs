using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{

    /// <summary>Packaging modes for file assets.</summary>
    [JsiiEnum(nativeType: typeof(FileAssetPackaging), fullyQualifiedName: "@alicloud/ros-cdk-core.FileAssetPackaging")]
    public enum FileAssetPackaging
    {
        /// <summary>The asset source path points to a directory, which should be archived using zip and and then uploaded to Aliyun OSS bucket.</summary>
        [JsiiEnumMember(name: "ZIP_DIRECTORY")]
        ZIP_DIRECTORY,
        /// <summary>The asset source path points to a single file, which should be uploaded to Aliyun OSS bucket.</summary>
        [JsiiEnumMember(name: "FILE")]
        FILE
    }
}
