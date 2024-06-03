using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{

    /// <summary>The access mechanism used to make source files available to the bundling container and to return the bundling output back to the host.</summary>
    [JsiiEnum(nativeType: typeof(BundlingFileAccess), fullyQualifiedName: "@alicloud/ros-cdk-core.BundlingFileAccess")]
    public enum BundlingFileAccess
    {
        /// <summary>Creates temporary volumes and containers to copy files from the host to the bundling container and back.</summary>
        /// <remarks>
        /// This is slower, but works also in more complex situations with remote or shared docker sockets.
        /// </remarks>
        [JsiiEnumMember(name: "VOLUME_COPY")]
        VOLUME_COPY,
        /// <summary>The source and output folders will be mounted as bind mount from the host system This is faster and simpler, but less portable than `VOLUME_COPY`.</summary>
        [JsiiEnumMember(name: "BIND_MOUNT")]
        BIND_MOUNT
    }
}
