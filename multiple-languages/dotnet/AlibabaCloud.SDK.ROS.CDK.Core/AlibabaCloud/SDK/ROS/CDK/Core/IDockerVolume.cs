using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>A Docker volume.</summary>
    [JsiiInterface(nativeType: typeof(IDockerVolume), fullyQualifiedName: "@alicloud/ros-cdk-core.DockerVolume")]
    public interface IDockerVolume
    {
        /// <summary>The path where the file or directory is mounted in the container.</summary>
        [JsiiProperty(name: "containerPath", typeJson: "{\"primitive\":\"string\"}")]
        string ContainerPath
        {
            get;
        }

        /// <summary>The path to the file or directory on the host machine.</summary>
        [JsiiProperty(name: "hostPath", typeJson: "{\"primitive\":\"string\"}")]
        string HostPath
        {
            get;
        }

        /// <summary>Mount consistency.</summary>
        /// <remarks>
        /// Only applicable for macOS
        ///
        /// <strong>Default</strong>: DockerConsistency.DELEGATED
        ///
        /// <strong>See</strong>: https://docs.docker.com/storage/bind-mounts/#configure-mount-consistency-for-macos
        /// </remarks>
        [JsiiProperty(name: "consistency", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.DockerVolumeConsistency\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Core.DockerVolumeConsistency? Consistency
        {
            get
            {
                return null;
            }
        }

        /// <summary>A Docker volume.</summary>
        [JsiiTypeProxy(nativeType: typeof(IDockerVolume), fullyQualifiedName: "@alicloud/ros-cdk-core.DockerVolume")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Core.IDockerVolume
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>The path where the file or directory is mounted in the container.</summary>
            [JsiiProperty(name: "containerPath", typeJson: "{\"primitive\":\"string\"}")]
            public string ContainerPath
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>The path to the file or directory on the host machine.</summary>
            [JsiiProperty(name: "hostPath", typeJson: "{\"primitive\":\"string\"}")]
            public string HostPath
            {
                get => GetInstanceProperty<string>()!;
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
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.DockerVolumeConsistency?>();
            }
        }
    }
}
