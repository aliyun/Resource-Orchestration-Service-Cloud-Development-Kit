using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Assembly.Schema
{

    /// <summary>Packaging strategy for file assets.</summary>
    [JsiiEnum(nativeType: typeof(FileAssetPackaging), fullyQualifiedName: "@alicloud/ros-cdk-assembly-schema.FileAssetPackaging")]
    public enum FileAssetPackaging
    {
        /// <summary>Upload the given path as a file.</summary>
        [JsiiEnumMember(name: "FILE")]
        FILE,
        /// <summary>The given path is a directory, zip it and upload.</summary>
        [JsiiEnumMember(name: "ZIP_DIRECTORY")]
        ZIP_DIRECTORY
    }
}
