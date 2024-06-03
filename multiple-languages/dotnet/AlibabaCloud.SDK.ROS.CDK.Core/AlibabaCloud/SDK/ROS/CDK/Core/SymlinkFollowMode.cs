using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{

    /// <summary>Determines how symlinks are followed.</summary>
    [JsiiEnum(nativeType: typeof(SymlinkFollowMode), fullyQualifiedName: "@alicloud/ros-cdk-core.SymlinkFollowMode")]
    public enum SymlinkFollowMode
    {
        /// <summary>Never follow symlinks.</summary>
        [JsiiEnumMember(name: "NEVER")]
        NEVER,
        /// <summary>Materialize all symlinks, whether they are internal or external to the source directory.</summary>
        [JsiiEnumMember(name: "ALWAYS")]
        ALWAYS,
        /// <summary>Only follows symlinks that are external to the source directory.</summary>
        [JsiiEnumMember(name: "EXTERNAL")]
        EXTERNAL,
        /// <summary>Forbids source from having any symlinks pointing outside of the source tree.</summary>
        /// <remarks>
        /// This is the safest mode of operation as it ensures that copy operations
        /// won't materialize files from the user's file system. Internal symlinks are
        /// not followed.
        ///
        /// If the copy operation runs into an external symlink, it will fail.
        /// </remarks>
        [JsiiEnumMember(name: "BLOCK_EXTERNAL")]
        BLOCK_EXTERNAL
    }
}
