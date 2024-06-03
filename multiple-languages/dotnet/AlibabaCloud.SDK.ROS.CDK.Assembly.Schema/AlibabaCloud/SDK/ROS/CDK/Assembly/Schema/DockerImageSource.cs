using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Assembly.Schema
{
    /// <summary>Properties for how to produce a Docker image from a source.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-assembly-schema.DockerImageSource")]
    public class DockerImageSource : AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IDockerImageSource
    {
        /// <summary>Disable the cache and pass `--no-cache` to the `docker build` command.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - cache is used
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "cacheDisabled", typeJson: "{\"primitive\":\"boolean\"}", isOptional: true)]
        public bool? CacheDisabled
        {
            get;
            set;
        }

        /// <summary>Cache from options to pass to the `docker build` command.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - no cache from options are passed to the build command
        ///
        /// <strong>See</strong>: https://docs.docker.com/build/cache/backends/
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "cacheFrom", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.DockerCacheOption\"},\"kind\":\"array\"}}", isOptional: true)]
        public AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IDockerCacheOption[]? CacheFrom
        {
            get;
            set;
        }

        /// <summary>Cache to options to pass to the `docker build` command.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - no cache to options are passed to the build command
        ///
        /// <strong>See</strong>: https://docs.docker.com/build/cache/backends/
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "cacheTo", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.DockerCacheOption\"}", isOptional: true)]
        public AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IDockerCacheOption? CacheTo
        {
            get;
            set;
        }

        /// <summary>The directory containing the Docker image build instructions.</summary>
        /// <remarks>
        /// This path is relative to the asset manifest location.
        ///
        /// <strong>Default</strong>: - Exactly one of `directory` and `executable` is required
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "directory", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public string? Directory
        {
            get;
            set;
        }

        /// <summary>Additional build arguments.</summary>
        /// <remarks>
        /// Only allowed when <c>directory</c> is set.
        ///
        /// <strong>Default</strong>: - No additional build arguments
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dockerBuildArgs", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"map\"}}", isOptional: true)]
        public System.Collections.Generic.IDictionary<string, string>? DockerBuildArgs
        {
            get;
            set;
        }

        /// <summary>Additional build secrets.</summary>
        /// <remarks>
        /// Only allowed when <c>directory</c> is set.
        ///
        /// <strong>Default</strong>: - No additional build secrets
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dockerBuildSecrets", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"map\"}}", isOptional: true)]
        public System.Collections.Generic.IDictionary<string, string>? DockerBuildSecrets
        {
            get;
            set;
        }

        /// <summary>SSH agent socket or keys.</summary>
        /// <remarks>
        /// Requires building with docker buildkit.
        ///
        /// <strong>Default</strong>: - No ssh flag is set
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dockerBuildSsh", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public string? DockerBuildSsh
        {
            get;
            set;
        }

        /// <summary>Target build stage in a Dockerfile with multiple build stages.</summary>
        /// <remarks>
        /// Only allowed when <c>directory</c> is set.
        ///
        /// <strong>Default</strong>: - The last stage in the Dockerfile
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dockerBuildTarget", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public string? DockerBuildTarget
        {
            get;
            set;
        }

        /// <summary>The name of the file with build instructions.</summary>
        /// <remarks>
        /// Only allowed when <c>directory</c> is set.
        ///
        /// <strong>Default</strong>: "Dockerfile"
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dockerFile", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public string? DockerFile
        {
            get;
            set;
        }

        /// <summary>Outputs.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - no outputs are passed to the build command (default outputs are used)
        ///
        /// <strong>See</strong>: https://docs.docker.com/engine/reference/commandline/build/#custom-build-outputs
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dockerOutputs", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
        public string[]? DockerOutputs
        {
            get;
            set;
        }

        /// <summary>A command-line executable that returns the name of a local Docker image on stdout after being run.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - Exactly one of `directory` and `executable` is required
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
        /// Specify this property to build images on a specific platform/architecture.
        ///
        /// <strong>Default</strong>: - current machine platform
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
