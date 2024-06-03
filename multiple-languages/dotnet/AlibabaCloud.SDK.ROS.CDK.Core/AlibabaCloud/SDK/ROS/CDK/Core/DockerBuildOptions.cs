using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>Docker build options.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-core.DockerBuildOptions")]
    public class DockerBuildOptions : AlibabaCloud.SDK.ROS.CDK.Core.IDockerBuildOptions
    {
        /// <summary>Build args.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - no build args
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "buildArgs", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"map\"}}", isOptional: true)]
        public System.Collections.Generic.IDictionary<string, string>? BuildArgs
        {
            get;
            set;
        }

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
        /// <strong>Default</strong>: - no cache from args are passed
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "cacheFrom", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-core.DockerCacheOption\"},\"kind\":\"array\"}}", isOptional: true)]
        public AlibabaCloud.SDK.ROS.CDK.Core.IDockerCacheOption[]? CacheFrom
        {
            get;
            set;
        }

        /// <summary>Cache to options to pass to the `docker build` command.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - no cache to args are passed
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "cacheTo", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.DockerCacheOption\"}", isOptional: true)]
        public AlibabaCloud.SDK.ROS.CDK.Core.IDockerCacheOption? CacheTo
        {
            get;
            set;
        }

        /// <summary>Name of the Dockerfile, must relative to the docker build path.</summary>
        /// <remarks>
        /// <strong>Default</strong>: `Dockerfile`
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "file", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public string? File
        {
            get;
            set;
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
            get;
            set;
        }

        /// <summary>Set build target for multi-stage container builds. Any stage defined afterwards will be ignored.</summary>
        /// <remarks>
        /// Example value: <c>build-env</c>
        ///
        /// <strong>Default</strong>: - Build all stages defined in the Dockerfile
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "targetStage", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public string? TargetStage
        {
            get;
            set;
        }
    }
}
