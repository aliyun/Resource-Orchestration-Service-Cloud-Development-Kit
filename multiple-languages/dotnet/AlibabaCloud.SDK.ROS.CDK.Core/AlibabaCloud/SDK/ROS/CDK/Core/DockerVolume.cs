using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    #pragma warning disable CS8618

    /// <summary>A Docker volume.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-core.DockerVolume")]
    public class DockerVolume : AlibabaCloud.SDK.ROS.CDK.Core.IDockerVolume
    {
        /// <summary>The path where the file or directory is mounted in the container.</summary>
        [JsiiProperty(name: "containerPath", typeJson: "{\"primitive\":\"string\"}")]
        public string ContainerPath
        {
            get;
            set;
        }

        /// <summary>The path to the file or directory on the host machine.</summary>
        [JsiiProperty(name: "hostPath", typeJson: "{\"primitive\":\"string\"}")]
        public string HostPath
        {
            get;
            set;
        }

        /// <summary>Mount consistency.</summary>
        /// <remarks>
        /// Only applicable for macOS
        ///
        /// <strong>Default</strong>: DockerConsistency.DELEGATED
        ///
        /// <strong>See</strong>: https://docs.docker.com/storage/bind-mounts/#configure-mount-consistency-for-macos
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "consistency", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.DockerVolumeConsistency\"}", isOptional: true)]
        public AlibabaCloud.SDK.ROS.CDK.Core.DockerVolumeConsistency? Consistency
        {
            get;
            set;
        }
    }
}
