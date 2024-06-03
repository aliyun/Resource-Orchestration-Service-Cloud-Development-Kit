using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{

    /// <summary>The type of output that a bundling operation is producing.</summary>
    [JsiiEnum(nativeType: typeof(BundlingOutput), fullyQualifiedName: "@alicloud/ros-cdk-core.BundlingOutput")]
    public enum BundlingOutput
    {
        /// <summary>The bundling output directory includes a single .zip or .jar file which will be used as the final bundle. If the output directory does not include exactly a single archive, bundling will fail.</summary>
        [JsiiEnumMember(name: "ARCHIVED")]
        ARCHIVED,
        /// <summary>The bundling output directory contains one or more files which will be archived and uploaded as a .zip file to OSS bucket.</summary>
        [JsiiEnumMember(name: "NOT_ARCHIVED")]
        NOT_ARCHIVED,
        /// <summary>If the bundling output directory contains a single archive file (zip or jar) it will be used as the bundle output as-is.</summary>
        /// <remarks>
        /// Otherwise, all the files in the bundling output directory will be zipped.
        /// </remarks>
        [JsiiEnumMember(name: "AUTO_DISCOVER")]
        AUTO_DISCOVER,
        /// <summary>The bundling output directory includes a single file which will be used as the final bundle.</summary>
        /// <remarks>
        /// If the output directory does not
        /// include exactly a single file, bundling will fail.
        ///
        /// Similar to ARCHIVED but for non-archive files
        /// </remarks>
        [JsiiEnumMember(name: "SINGLE_FILE")]
        SINGLE_FILE
    }
}
