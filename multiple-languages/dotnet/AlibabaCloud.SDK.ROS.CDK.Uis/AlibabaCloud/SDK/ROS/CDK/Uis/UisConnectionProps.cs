using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Uis
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::UIS::UisConnection`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-uis.UisConnectionProps")]
    public class UisConnectionProps : AlibabaCloud.SDK.ROS.CDK.Uis.IUisConnectionProps
    {
        /// <summary>Property uisNodeId: Node instance ID.</summary>
        [JsiiProperty(name: "uisNodeId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string UisNodeId
        {
            get;
            set;
        }

        /// <summary>Property uisProtocol: The protocol name used by the software and server.</summary>
        /// <remarks>
        /// The default value is SSLVPN.
        /// </remarks>
        [JsiiProperty(name: "uisProtocol", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string UisProtocol
        {
            get;
            set;
        }

        /// <summary>Property description: A description of the tunnel connection.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Description
        {
            get;
            set;
        }

        /// <summary>Property greConfig: The config for GRE.</summary>
        /// <remarks>
        /// Item can be overwritten, but removed.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "greConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-uis.RosUisConnection.GreConfigProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? GreConfig
        {
            get;
            set;
        }

        /// <summary>Property name: The name of the tunnel connection.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Name
        {
            get;
            set;
        }

        /// <summary>Property sslConfig: The config for SSLVPN.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "sslConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-uis.RosUisConnection.SslConfigProperty\"}]}}", isOptional: true, isOverride: true)]
        public object? SslConfig
        {
            get;
            set;
        }
    }
}
