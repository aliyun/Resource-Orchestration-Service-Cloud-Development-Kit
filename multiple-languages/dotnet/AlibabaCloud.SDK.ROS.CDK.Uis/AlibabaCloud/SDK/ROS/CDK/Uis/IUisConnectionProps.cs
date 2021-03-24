using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Uis
{
    /// <summary>Properties for defining a `ALIYUN::UIS::UisConnection`.</summary>
    [JsiiInterface(nativeType: typeof(IUisConnectionProps), fullyQualifiedName: "@alicloud/ros-cdk-uis.UisConnectionProps")]
    public interface IUisConnectionProps
    {
        /// <summary>Property uisNodeId: Node instance ID.</summary>
        [JsiiProperty(name: "uisNodeId", typeJson: "{\"primitive\":\"string\"}")]
        string UisNodeId
        {
            get;
        }

        /// <summary>Property uisProtocol: The protocol name used by the software and server.</summary>
        /// <remarks>
        /// The default value is SSLVPN.
        /// </remarks>
        [JsiiProperty(name: "uisProtocol", typeJson: "{\"primitive\":\"string\"}")]
        string UisProtocol
        {
            get;
        }

        /// <summary>Property description: A description of the tunnel connection.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property greConfig: The config for GRE.</summary>
        /// <remarks>
        /// Item can be overwritten, but removed.
        /// </remarks>
        [JsiiProperty(name: "greConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-uis.RosUisConnection.GreConfigProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? GreConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property name: The name of the tunnel connection.</summary>
        [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Name
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property sslConfig: The config for SSLVPN.</summary>
        [JsiiProperty(name: "sslConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-uis.RosUisConnection.SslConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SslConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::UIS::UisConnection`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IUisConnectionProps), fullyQualifiedName: "@alicloud/ros-cdk-uis.UisConnectionProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Uis.IUisConnectionProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property uisNodeId: Node instance ID.</summary>
            [JsiiProperty(name: "uisNodeId", typeJson: "{\"primitive\":\"string\"}")]
            public string UisNodeId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property uisProtocol: The protocol name used by the software and server.</summary>
            /// <remarks>
            /// The default value is SSLVPN.
            /// </remarks>
            [JsiiProperty(name: "uisProtocol", typeJson: "{\"primitive\":\"string\"}")]
            public string UisProtocol
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property description: A description of the tunnel connection.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Description
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property greConfig: The config for GRE.</summary>
            /// <remarks>
            /// Item can be overwritten, but removed.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "greConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-uis.RosUisConnection.GreConfigProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? GreConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property name: The name of the tunnel connection.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Name
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property sslConfig: The config for SSLVPN.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "sslConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-uis.RosUisConnection.SslConfigProperty\"}]}}", isOptional: true)]
            public object? SslConfig
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
