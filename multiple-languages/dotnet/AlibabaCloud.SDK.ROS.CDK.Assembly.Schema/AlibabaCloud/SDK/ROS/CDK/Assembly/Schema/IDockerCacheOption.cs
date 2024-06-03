using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Assembly.Schema
{
    /// <summary>Options for configuring the Docker cache backend.</summary>
    [JsiiInterface(nativeType: typeof(IDockerCacheOption), fullyQualifiedName: "@alicloud/ros-cdk-assembly-schema.DockerCacheOption")]
    public interface IDockerCacheOption
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
        string Type
        {
            get;
        }

        /// <summary>Any parameters to pass into the docker cache backend configuration.</summary>
        /// <remarks>
        /// Refer to https://docs.docker.com/build/cache/backends/ for cache backend configuration.
        ///
        /// <strong>Default</strong>: {} No options provided
        /// </remarks>
        [JsiiProperty(name: "params", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"map\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        System.Collections.Generic.IDictionary<string, string>? Params
        {
            get
            {
                return null;
            }
        }

        /// <summary>Options for configuring the Docker cache backend.</summary>
        [JsiiTypeProxy(nativeType: typeof(IDockerCacheOption), fullyQualifiedName: "@alicloud/ros-cdk-assembly-schema.DockerCacheOption")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IDockerCacheOption
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

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
                get => GetInstanceProperty<string>()!;
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
                get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, string>?>();
            }
        }
    }
}
