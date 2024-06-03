using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{

    /// <summary>Supported Docker volume consistency types.</summary>
    /// <remarks>
    /// Only valid on macOS due to the way file storage works on Mac
    /// </remarks>
    [JsiiEnum(nativeType: typeof(DockerVolumeConsistency), fullyQualifiedName: "@alicloud/ros-cdk-core.DockerVolumeConsistency")]
    public enum DockerVolumeConsistency
    {
        /// <summary>Read/write operations inside the Docker container are applied immediately on the mounted host machine volumes.</summary>
        [JsiiEnumMember(name: "CONSISTENT")]
        CONSISTENT,
        /// <summary>Read/write operations on mounted Docker volumes are first written inside the container and then synchronized to the host machine.</summary>
        [JsiiEnumMember(name: "DELEGATED")]
        DELEGATED,
        /// <summary>Read/write operations on mounted Docker volumes are first applied on the host machine and then synchronized to the container.</summary>
        [JsiiEnumMember(name: "CACHED")]
        CACHED
    }
}
