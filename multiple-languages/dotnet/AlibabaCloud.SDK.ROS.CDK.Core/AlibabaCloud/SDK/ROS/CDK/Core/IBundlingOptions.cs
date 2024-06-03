using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>Bundling options.</summary>
    [JsiiInterface(nativeType: typeof(IBundlingOptions), fullyQualifiedName: "@alicloud/ros-cdk-core.BundlingOptions")]
    public interface IBundlingOptions
    {
        /// <summary>The Docker image where the command will run.</summary>
        [JsiiProperty(name: "image", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.DockerImage\"}")]
        AlibabaCloud.SDK.ROS.CDK.Core.DockerImage Image
        {
            get;
        }

        /// <summary>The access mechanism used to make source files available to the bundling container and to return the bundling output back to the host.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - BundlingFileAccess.BIND_MOUNT
        /// </remarks>
        [JsiiProperty(name: "bundlingFileAccess", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.BundlingFileAccess\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Core.BundlingFileAccess? BundlingFileAccess
        {
            get
            {
                return null;
            }
        }

        /// <summary>The command to run in the Docker container.</summary>
        /// <remarks>
        /// Example value: <c>['npm', 'install']</c>
        ///
        /// <strong>Default</strong>: - run the command defined in the image
        ///
        /// <strong>See</strong>: https://docs.docker.com/engine/reference/run/
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

        /// <summary>The entrypoint to run in the Docker container.</summary>
        /// <remarks>
        /// Example value: <c>['/bin/sh', '-c']</c>
        ///
        /// <strong>Default</strong>: - run the entrypoint defined in the image
        ///
        /// <strong>See</strong>: https://docs.docker.com/engine/reference/builder/#entrypoint
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

        /// <summary>The environment variables to pass to the Docker container.</summary>
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

        /// <summary>Local bundling provider.</summary>
        /// <remarks>
        /// The provider implements a method <c>tryBundle()</c> which should return <c>true</c>
        /// if local bundling was performed. If <c>false</c> is returned, docker bundling
        /// will be done.
        ///
        /// <strong>Default</strong>: - bundling will only be performed in a Docker container
        /// </remarks>
        [JsiiProperty(name: "local", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ILocalBundling\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Core.ILocalBundling? Local
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

        /// <summary>The type of output that this bundling operation is producing.</summary>
        /// <remarks>
        /// <strong>Default</strong>: BundlingOutput.AUTO_DISCOVER
        /// </remarks>
        [JsiiProperty(name: "outputType", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.BundlingOutput\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Core.BundlingOutput? OutputType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Platform to build for. _Requires Docker Buildx_.</summary>
        /// <remarks>
        /// Specify this property to build images on a specific platform.
        ///
        /// <strong>Default</strong>: - no platform specified (the current machine architecture will be used)
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

        /// <summary>The user to use when running the Docker container.</summary>
        /// <remarks>
        /// user | user:group | uid | uid:gid | user:gid | uid:group
        ///
        /// <strong>Default</strong>: - uid:gid of the current user or 1000:1000 on Windows
        ///
        /// <strong>See</strong>: https://docs.docker.com/engine/reference/run/#user
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

        /// <summary>Additional Docker volumes to mount.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - no additional volumes are mounted
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

        /// <summary>Working directory inside the Docker container.</summary>
        /// <remarks>
        /// <strong>Default</strong>: /asset-input
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

        /// <summary>Bundling options.</summary>
        [JsiiTypeProxy(nativeType: typeof(IBundlingOptions), fullyQualifiedName: "@alicloud/ros-cdk-core.BundlingOptions")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Core.IBundlingOptions
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>The Docker image where the command will run.</summary>
            [JsiiProperty(name: "image", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.DockerImage\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.DockerImage Image
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.DockerImage>()!;
            }

            /// <summary>The access mechanism used to make source files available to the bundling container and to return the bundling output back to the host.</summary>
            /// <remarks>
            /// <strong>Default</strong>: - BundlingFileAccess.BIND_MOUNT
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "bundlingFileAccess", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.BundlingFileAccess\"}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Core.BundlingFileAccess? BundlingFileAccess
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.BundlingFileAccess?>();
            }

            /// <summary>The command to run in the Docker container.</summary>
            /// <remarks>
            /// Example value: <c>['npm', 'install']</c>
            ///
            /// <strong>Default</strong>: - run the command defined in the image
            ///
            /// <strong>See</strong>: https://docs.docker.com/engine/reference/run/
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "command", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
            public string[]? Command
            {
                get => GetInstanceProperty<string[]?>();
            }

            /// <summary>The entrypoint to run in the Docker container.</summary>
            /// <remarks>
            /// Example value: <c>['/bin/sh', '-c']</c>
            ///
            /// <strong>Default</strong>: - run the entrypoint defined in the image
            ///
            /// <strong>See</strong>: https://docs.docker.com/engine/reference/builder/#entrypoint
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "entrypoint", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
            public string[]? Entrypoint
            {
                get => GetInstanceProperty<string[]?>();
            }

            /// <summary>The environment variables to pass to the Docker container.</summary>
            /// <remarks>
            /// <strong>Default</strong>: - no environment variables.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "environment", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"map\"}}", isOptional: true)]
            public System.Collections.Generic.IDictionary<string, string>? Environment
            {
                get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, string>?>();
            }

            /// <summary>Local bundling provider.</summary>
            /// <remarks>
            /// The provider implements a method <c>tryBundle()</c> which should return <c>true</c>
            /// if local bundling was performed. If <c>false</c> is returned, docker bundling
            /// will be done.
            ///
            /// <strong>Default</strong>: - bundling will only be performed in a Docker container
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "local", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ILocalBundling\"}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Core.ILocalBundling? Local
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.ILocalBundling?>();
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

            /// <summary>The type of output that this bundling operation is producing.</summary>
            /// <remarks>
            /// <strong>Default</strong>: BundlingOutput.AUTO_DISCOVER
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "outputType", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.BundlingOutput\"}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Core.BundlingOutput? OutputType
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.BundlingOutput?>();
            }

            /// <summary>Platform to build for. _Requires Docker Buildx_.</summary>
            /// <remarks>
            /// Specify this property to build images on a specific platform.
            ///
            /// <strong>Default</strong>: - no platform specified (the current machine architecture will be used)
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

            /// <summary>The user to use when running the Docker container.</summary>
            /// <remarks>
            /// user | user:group | uid | uid:gid | user:gid | uid:group
            ///
            /// <strong>Default</strong>: - uid:gid of the current user or 1000:1000 on Windows
            ///
            /// <strong>See</strong>: https://docs.docker.com/engine/reference/run/#user
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "user", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? User
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Additional Docker volumes to mount.</summary>
            /// <remarks>
            /// <strong>Default</strong>: - no additional volumes are mounted
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

            /// <summary>Working directory inside the Docker container.</summary>
            /// <remarks>
            /// <strong>Default</strong>: /asset-input
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
