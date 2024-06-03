using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>Docker run options.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-core.DockerRunOptions")]
    public class DockerRunOptions : AlibabaCloud.SDK.ROS.CDK.Core.IDockerRunOptions
    {
        /// <summary>The command to run in the container.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - run the command defined in the image
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "command", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
        public string[]? Command
        {
            get;
            set;
        }

        /// <summary>The entrypoint to run in the container.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - run the entrypoint defined in the image
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "entrypoint", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
        public string[]? Entrypoint
        {
            get;
            set;
        }

        /// <summary>The environment variables to pass to the container.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - no environment variables.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "environment", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"map\"}}", isOptional: true)]
        public System.Collections.Generic.IDictionary<string, string>? Environment
        {
            get;
            set;
        }

        /// <summary>Docker [Networking options](https://docs.docker.com/engine/reference/commandline/run/#connect-a-container-to-a-network---network).</summary>
        /// <remarks>
        /// <strong>Default</strong>: - no networking options
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "network", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public string? Network
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

        /// <summary>[Security configuration](https://docs.docker.com/engine/reference/run/#security-configuration) when running the docker container.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - no security options
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "securityOpt", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public string? SecurityOpt
        {
            get;
            set;
        }

        /// <summary>The user to use when running the container.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - root or image default
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "user", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public string? User
        {
            get;
            set;
        }

        /// <summary>Docker volumes to mount.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - no volumes are mounted
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "volumes", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-core.DockerVolume\"},\"kind\":\"array\"}}", isOptional: true)]
        public AlibabaCloud.SDK.ROS.CDK.Core.IDockerVolume[]? Volumes
        {
            get;
            set;
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
            get;
            set;
        }

        /// <summary>Working directory inside the container.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - image default
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "workingDirectory", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public string? WorkingDirectory
        {
            get;
            set;
        }
    }
}
