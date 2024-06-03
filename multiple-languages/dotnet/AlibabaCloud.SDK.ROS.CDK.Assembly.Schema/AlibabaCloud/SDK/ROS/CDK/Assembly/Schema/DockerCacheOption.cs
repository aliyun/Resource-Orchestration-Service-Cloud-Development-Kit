using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Assembly.Schema
{
    #pragma warning disable CS8618

    /// <summary>Options for configuring the Docker cache backend.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-assembly-schema.DockerCacheOption")]
    public class DockerCacheOption : AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IDockerCacheOption
    {
        /// <summary>The type of cache to use.</summary>
        /// <remarks>
        /// Refer to https://docs.docker.com/build/cache/backends/ for full list of backends.
        ///
        /// <strong>Default</strong>: - unspecified
        /// </remarks>
        /// <example>
        /// <code>'registry'</code>
        /// </example>
        [JsiiProperty(name: "type", typeJson: "{\"primitive\":\"string\"}")]
        public string Type
        {
            get;
            set;
        }

        /// <summary>Any parameters to pass into the docker cache backend configuration.</summary>
        /// <remarks>
        /// Refer to https://docs.docker.com/build/cache/backends/ for cache backend configuration.
        ///
        /// <strong>Default</strong>: {} No options provided
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "params", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"map\"}}", isOptional: true)]
        public System.Collections.Generic.IDictionary<string, string>? Params
        {
            get;
            set;
        }
    }
}
