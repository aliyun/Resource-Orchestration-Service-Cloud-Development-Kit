using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>Docker run options.</summary>
    [JsiiInterface(nativeType: typeof(IDockerRunOptions), fullyQualifiedName: "@alicloud/ros-cdk-core.DockerRunOptions")]
    public interface IDockerRunOptions
    {
        /// <summary>The command to run in the container.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - run the command defined in the image
        /// </remarks>
        [JsiiProperty(name: "command", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string[]? Command
        {
            get
            {
                return null;
            }
        }

        /// <summary>The entrypoint to run in the container.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - run the entrypoint defined in the image
        /// </remarks>
        [JsiiProperty(name: "entrypoint", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string[]? Entrypoint
        {
            get
            {
                return null;
            }
        }

        /// <summary>The environment variables to pass to the container.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - no environment variables.
        /// </remarks>
        [JsiiProperty(name: "environment", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"map\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        System.Collections.Generic.IDictionary<string, string>? Environment
        {
            get
            {
                return null;
            }
        }

        /// <summary>Docker [Networking options](https://docs.docker.com/engine/reference/commandline/run/#connect-a-container-to-a-network---network).</summary>
        /// <remarks>
        /// <strong>Default</strong>: - no networking options
        /// </remarks>
        [JsiiProperty(name: "network", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Network
        {
            get
            {
                return null;
            }
        }

        /// <summary>Set platform if server is multi-platform capable. _Requires Docker Engine API v1.38+_.</summary>
        /// <remarks>
        /// Example value: <c>linux/amd64</c>
        ///
        /// <strong>Default</strong>: - no platform specified
        /// </remarks>
        [JsiiProperty(name: "platform", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Platform
        {
            get
            {
                return null;
            }
        }

        /// <summary>[Security configuration](https://docs.docker.com/engine/reference/run/#security-configuration) when running the docker container.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - no security options
        /// </remarks>
        [JsiiProperty(name: "securityOpt", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? SecurityOpt
        {
            get
            {
                return null;
            }
        }

        /// <summary>The user to use when running the container.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - root or image default
        /// </remarks>
        [JsiiProperty(name: "user", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? User
        {
            get
            {
                return null;
            }
        }

        /// <summary>Docker volumes to mount.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - no volumes are mounted
        /// </remarks>
        [JsiiProperty(name: "volumes", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-core.DockerVolume\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Core.IDockerVolume[]? Volumes
        {
            get
            {
                return null;
            }
        }

        /// <summary>Where to mount the specified volumes from.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - no containers are specified to mount volumes from
        ///
        /// <strong>See</strong>: https://docs.docker.com/engine/reference/commandline/run/#mount-volumes-from-container---volumes-from
        /// </remarks>
        [JsiiProperty(name: "volumesFrom", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string[]? VolumesFrom
        {
            get
            {
                return null;
            }
        }

        /// <summary>Working directory inside the container.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - image default
        /// </remarks>
        [JsiiProperty(name: "workingDirectory", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? WorkingDirectory
        {
            get
            {
                return null;
            }
        }

        /// <summary>Docker run options.</summary>
        [JsiiTypeProxy(nativeType: typeof(IDockerRunOptions), fullyQualifiedName: "@alicloud/ros-cdk-core.DockerRunOptions")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Core.IDockerRunOptions
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>The command to run in the container.</summary>
            /// <remarks>
            /// <strong>Default</strong>: - run the command defined in the image
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "command", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
            public string[]? Command
            {
                get => GetInstanceProperty<string[]?>();
            }

            /// <summary>The entrypoint to run in the container.</summary>
            /// <remarks>
            /// <strong>Default</strong>: - run the entrypoint defined in the image
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "entrypoint", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
            public string[]? Entrypoint
            {
                get => GetInstanceProperty<string[]?>();
            }

            /// <summary>The environment variables to pass to the container.</summary>
            /// <remarks>
            /// <strong>Default</strong>: - no environment variables.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "environment", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"map\"}}", isOptional: true)]
            public System.Collections.Generic.IDictionary<string, string>? Environment
            {
                get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, string>?>();
            }

            /// <summary>Docker [Networking options](https://docs.docker.com/engine/reference/commandline/run/#connect-a-container-to-a-network---network).</summary>
            /// <remarks>
            /// <strong>Default</strong>: - no networking options
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "network", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Network
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Set platform if server is multi-platform capable. _Requires Docker Engine API v1.38+_.</summary>
            /// <remarks>
            /// Example value: <c>linux/amd64</c>
            ///
            /// <strong>Default</strong>: - no platform specified
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "platform", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Platform
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>[Security configuration](https://docs.docker.com/engine/reference/run/#security-configuration) when running the docker container.</summary>
            /// <remarks>
            /// <strong>Default</strong>: - no security options
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "securityOpt", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? SecurityOpt
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>The user to use when running the container.</summary>
            /// <remarks>
            /// <strong>Default</strong>: - root or image default
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "user", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? User
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Docker volumes to mount.</summary>
            /// <remarks>
            /// <strong>Default</strong>: - no volumes are mounted
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "volumes", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-core.DockerVolume\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Core.IDockerVolume[]? Volumes
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IDockerVolume[]?>();
            }

            /// <summary>Where to mount the specified volumes from.</summary>
            /// <remarks>
            /// <strong>Default</strong>: - no containers are specified to mount volumes from
            ///
            /// <strong>See</strong>: https://docs.docker.com/engine/reference/commandline/run/#mount-volumes-from-container---volumes-from
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "volumesFrom", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
            public string[]? VolumesFrom
            {
                get => GetInstanceProperty<string[]?>();
            }

            /// <summary>Working directory inside the container.</summary>
            /// <remarks>
            /// <strong>Default</strong>: - image default
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "workingDirectory", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? WorkingDirectory
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
