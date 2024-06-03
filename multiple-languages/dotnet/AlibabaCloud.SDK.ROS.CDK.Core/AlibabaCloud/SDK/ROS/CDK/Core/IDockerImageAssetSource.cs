using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    [JsiiInterface(nativeType: typeof(IDockerImageAssetSource), fullyQualifiedName: "@alicloud/ros-cdk-core.DockerImageAssetSource")]
    public interface IDockerImageAssetSource
    {
        /// <summary>The hash of the contents of the docker build context.</summary>
        /// <remarks>
        /// This hash is used
        /// throughout the system to identify this image and avoid duplicate work
        /// in case the source did not change.
        ///
        /// NOTE: this means that if you wish to update your docker image, you
        /// must make a modification to the source (e.g. add some metadata to your Dockerfile).
        /// </remarks>
        [JsiiProperty(name: "sourceHash", typeJson: "{\"primitive\":\"string\"}")]
        string SourceHash
        {
            get;
        }

        /// <summary>Unique identifier of the docker image asset and its potential revisions.</summary>
        /// <remarks>
        /// Required if using AppScopedStagingSynthesizer.
        ///
        /// <strong>Default</strong>: - no asset name
        /// </remarks>
        [JsiiProperty(name: "assetName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? AssetName
        {
            get
            {
                return null;
            }
        }

        /// <summary>The directory where the Dockerfile is stored, must be relative to the cloud assembly root.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - Exactly one of `directoryName` and `executable` is required
        /// </remarks>
        [JsiiProperty(name: "directoryName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? DirectoryName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Build args to pass to the `docker build` command.</summary>
        /// <remarks>
        /// Since Docker build arguments are resolved before deployment, keys and
        /// values cannot refer to unresolved tokens.
        ///
        /// Only allowed when <c>directoryName</c> is specified.
        ///
        /// <strong>Default</strong>: - no build args are passed
        /// </remarks>
        [JsiiProperty(name: "dockerBuildArgs", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"map\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        System.Collections.Generic.IDictionary<string, string>? DockerBuildArgs
        {
            get
            {
                return null;
            }
        }

        /// <summary>Build sACRets to pass to the `docker build` command.</summary>
        /// <remarks>
        /// Since Docker build sACRets are resolved before deployment, keys and
        /// values cannot refer to unresolved tokens.
        ///
        /// Only allowed when <c>directoryName</c> is specified.
        ///
        /// <strong>Default</strong>: - no build sACRets are passed
        /// </remarks>
        [JsiiProperty(name: "dockerBuildSACRets", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"map\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        System.Collections.Generic.IDictionary<string, string>? DockerBuildSACRets
        {
            get
            {
                return null;
            }
        }

        /// <summary>SSH agent socket or keys to pass to the `docker buildx` command.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - no ssh arg is passed
        /// </remarks>
        [JsiiProperty(name: "dockerBuildSsh", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? DockerBuildSsh
        {
            get
            {
                return null;
            }
        }

        /// <summary>Docker target to build to.</summary>
        /// <remarks>
        /// Only allowed when <c>directoryName</c> is specified.
        ///
        /// <strong>Default</strong>: - no target
        /// </remarks>
        [JsiiProperty(name: "dockerBuildTarget", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? DockerBuildTarget
        {
            get
            {
                return null;
            }
        }

        /// <summary>Disable the cache and pass `--no-cache` to the `docker build` command.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - cache is used
        /// </remarks>
        [JsiiProperty(name: "dockerCacheDisabled", typeJson: "{\"primitive\":\"boolean\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        bool? DockerCacheDisabled
        {
            get
            {
                return null;
            }
        }

        /// <summary>Cache from options to pass to the `docker build` command.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - no cache from args are passed
        /// </remarks>
        [JsiiProperty(name: "dockerCacheFrom", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-core.DockerCacheOption\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Core.IDockerCacheOption[]? DockerCacheFrom
        {
            get
            {
                return null;
            }
        }

        /// <summary>Cache to options to pass to the `docker build` command.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - no cache to args are passed
        /// </remarks>
        [JsiiProperty(name: "dockerCacheTo", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.DockerCacheOption\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Core.IDockerCacheOption? DockerCacheTo
        {
            get
            {
                return null;
            }
        }

        /// <summary>Path to the Dockerfile (relative to the directory).</summary>
        /// <remarks>
        /// Only allowed when <c>directoryName</c> is specified.
        ///
        /// <strong>Default</strong>: - no file
        /// </remarks>
        [JsiiProperty(name: "dockerFile", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? DockerFile
        {
            get
            {
                return null;
            }
        }

        /// <summary>Outputs to pass to the `docker build` command.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - no build args are passed
        /// </remarks>
        [JsiiProperty(name: "dockerOutputs", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string[]? DockerOutputs
        {
            get
            {
                return null;
            }
        }

        /// <summary>An external command that will produce the packaged asset.</summary>
        /// <remarks>
        /// The command should produce the name of a local Docker image on <c>stdout</c>.
        ///
        /// <strong>Default</strong>: - Exactly one of `directoryName` and `executable` is required
        /// </remarks>
        [JsiiProperty(name: "executable", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string[]? Executable
        {
            get
            {
                return null;
            }
        }

        /// <summary>Networking mode for the RUN commands during build. _Requires Docker Engine API v1.25+_.</summary>
        /// <remarks>
        /// Specify this property to build images on a specific networking mode.
        ///
        /// <strong>Default</strong>: - no networking mode specified
        /// </remarks>
        [JsiiProperty(name: "networkMode", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? NetworkMode
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

        [JsiiTypeProxy(nativeType: typeof(IDockerImageAssetSource), fullyQualifiedName: "@alicloud/ros-cdk-core.DockerImageAssetSource")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Core.IDockerImageAssetSource
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>The hash of the contents of the docker build context.</summary>
            /// <remarks>
            /// This hash is used
            /// throughout the system to identify this image and avoid duplicate work
            /// in case the source did not change.
            ///
            /// NOTE: this means that if you wish to update your docker image, you
            /// must make a modification to the source (e.g. add some metadata to your Dockerfile).
            /// </remarks>
            [JsiiProperty(name: "sourceHash", typeJson: "{\"primitive\":\"string\"}")]
            public string SourceHash
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Unique identifier of the docker image asset and its potential revisions.</summary>
            /// <remarks>
            /// Required if using AppScopedStagingSynthesizer.
            ///
            /// <strong>Default</strong>: - no asset name
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "assetName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? AssetName
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>The directory where the Dockerfile is stored, must be relative to the cloud assembly root.</summary>
            /// <remarks>
            /// <strong>Default</strong>: - Exactly one of `directoryName` and `executable` is required
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "directoryName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? DirectoryName
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Build args to pass to the `docker build` command.</summary>
            /// <remarks>
            /// Since Docker build arguments are resolved before deployment, keys and
            /// values cannot refer to unresolved tokens.
            ///
            /// Only allowed when <c>directoryName</c> is specified.
            ///
            /// <strong>Default</strong>: - no build args are passed
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dockerBuildArgs", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"map\"}}", isOptional: true)]
            public System.Collections.Generic.IDictionary<string, string>? DockerBuildArgs
            {
                get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, string>?>();
            }

            /// <summary>Build sACRets to pass to the `docker build` command.</summary>
            /// <remarks>
            /// Since Docker build sACRets are resolved before deployment, keys and
            /// values cannot refer to unresolved tokens.
            ///
            /// Only allowed when <c>directoryName</c> is specified.
            ///
            /// <strong>Default</strong>: - no build sACRets are passed
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dockerBuildSACRets", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"map\"}}", isOptional: true)]
            public System.Collections.Generic.IDictionary<string, string>? DockerBuildSACRets
            {
                get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, string>?>();
            }

            /// <summary>SSH agent socket or keys to pass to the `docker buildx` command.</summary>
            /// <remarks>
            /// <strong>Default</strong>: - no ssh arg is passed
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dockerBuildSsh", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? DockerBuildSsh
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Docker target to build to.</summary>
            /// <remarks>
            /// Only allowed when <c>directoryName</c> is specified.
            ///
            /// <strong>Default</strong>: - no target
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dockerBuildTarget", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? DockerBuildTarget
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Disable the cache and pass `--no-cache` to the `docker build` command.</summary>
            /// <remarks>
            /// <strong>Default</strong>: - cache is used
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dockerCacheDisabled", typeJson: "{\"primitive\":\"boolean\"}", isOptional: true)]
            public bool? DockerCacheDisabled
            {
                get => GetInstanceProperty<bool?>();
            }

            /// <summary>Cache from options to pass to the `docker build` command.</summary>
            /// <remarks>
            /// <strong>Default</strong>: - no cache from args are passed
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dockerCacheFrom", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-core.DockerCacheOption\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Core.IDockerCacheOption[]? DockerCacheFrom
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IDockerCacheOption[]?>();
            }

            /// <summary>Cache to options to pass to the `docker build` command.</summary>
            /// <remarks>
            /// <strong>Default</strong>: - no cache to args are passed
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dockerCacheTo", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.DockerCacheOption\"}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Core.IDockerCacheOption? DockerCacheTo
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IDockerCacheOption?>();
            }

            /// <summary>Path to the Dockerfile (relative to the directory).</summary>
            /// <remarks>
            /// Only allowed when <c>directoryName</c> is specified.
            ///
            /// <strong>Default</strong>: - no file
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dockerFile", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? DockerFile
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Outputs to pass to the `docker build` command.</summary>
            /// <remarks>
            /// <strong>Default</strong>: - no build args are passed
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dockerOutputs", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
            public string[]? DockerOutputs
            {
                get => GetInstanceProperty<string[]?>();
            }

            /// <summary>An external command that will produce the packaged asset.</summary>
            /// <remarks>
            /// The command should produce the name of a local Docker image on <c>stdout</c>.
            ///
            /// <strong>Default</strong>: - Exactly one of `directoryName` and `executable` is required
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "executable", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
            public string[]? Executable
            {
                get => GetInstanceProperty<string[]?>();
            }

            /// <summary>Networking mode for the RUN commands during build. _Requires Docker Engine API v1.25+_.</summary>
            /// <remarks>
            /// Specify this property to build images on a specific networking mode.
            ///
            /// <strong>Default</strong>: - no networking mode specified
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "networkMode", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? NetworkMode
            {
                get => GetInstanceProperty<string?>();
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
        }
    }
}
