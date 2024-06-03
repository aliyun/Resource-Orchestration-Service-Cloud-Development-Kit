using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    #pragma warning disable CS8618

    [JsiiByValue(fqn: "@alicloud/ros-cdk-core.DockerImageAssetSource")]
    public class DockerImageAssetSource : AlibabaCloud.SDK.ROS.CDK.Core.IDockerImageAssetSource
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
        public string SourceHash
        {
            get;
            set;
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
            get;
            set;
        }

        /// <summary>The directory where the Dockerfile is stored, must be relative to the cloud assembly root.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - Exactly one of `directoryName` and `executable` is required
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "directoryName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public string? DirectoryName
        {
            get;
            set;
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
            get;
            set;
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
            get;
            set;
        }

        /// <summary>SSH agent socket or keys to pass to the `docker buildx` command.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - no ssh arg is passed
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dockerBuildSsh", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public string? DockerBuildSsh
        {
            get;
            set;
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
            get;
            set;
        }

        /// <summary>Disable the cache and pass `--no-cache` to the `docker build` command.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - cache is used
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dockerCacheDisabled", typeJson: "{\"primitive\":\"boolean\"}", isOptional: true)]
        public bool? DockerCacheDisabled
        {
            get;
            set;
        }

        /// <summary>Cache from options to pass to the `docker build` command.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - no cache from args are passed
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dockerCacheFrom", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-core.DockerCacheOption\"},\"kind\":\"array\"}}", isOptional: true)]
        public AlibabaCloud.SDK.ROS.CDK.Core.IDockerCacheOption[]? DockerCacheFrom
        {
            get;
            set;
        }

        /// <summary>Cache to options to pass to the `docker build` command.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - no cache to args are passed
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dockerCacheTo", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.DockerCacheOption\"}", isOptional: true)]
        public AlibabaCloud.SDK.ROS.CDK.Core.IDockerCacheOption? DockerCacheTo
        {
            get;
            set;
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
            get;
            set;
        }

        /// <summary>Outputs to pass to the `docker build` command.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - no build args are passed
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dockerOutputs", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
        public string[]? DockerOutputs
        {
            get;
            set;
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
            get;
            set;
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
            get;
            set;
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
            get;
            set;
        }
    }
}
