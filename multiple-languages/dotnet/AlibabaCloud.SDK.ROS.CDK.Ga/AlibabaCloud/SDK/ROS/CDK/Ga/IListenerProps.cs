using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ga
{
    /// <summary>Properties for defining a `ALIYUN::GA::Listener`.</summary>
    [JsiiInterface(nativeType: typeof(IListenerProps), fullyQualifiedName: "@alicloud/ros-cdk-ga.ListenerProps")]
    public interface IListenerProps
    {
        /// <summary>Property acceleratorId: The ID of the Global Accelerator instance to which the listener will be added.</summary>
        [JsiiProperty(name: "acceleratorId", typeJson: "{\"primitive\":\"string\"}")]
        string AcceleratorId
        {
            get;
        }

        /// <summary>Property portRanges:.</summary>
        [JsiiProperty(name: "portRanges", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ga.RosListener.PortRangesProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object PortRanges
        {
            get;
        }

        /// <summary>Property protocol: The network transmission protocol of the listener.</summary>
        /// <remarks>
        /// Valid values:
        /// tcp: TCP protocol
        /// udp: UDP protocol
        /// </remarks>
        [JsiiProperty(name: "protocol", typeJson: "{\"primitive\":\"string\"}")]
        string Protocol
        {
            get;
        }

        /// <summary>Property clientAffinity: Specifies whether to enable client affinity for the listener.</summary>
        /// <remarks>
        /// If you do not specify the default value in the parameter, client affinity is disabled.
        /// When client affinity is disabled, the connections from a specific source (client)
        /// IP address are not always routed to the same endpoint.
        /// If you set the value to SOURCE_IP, client affinity is enabled. When client affinity is enabled, the connections from
        /// a specific source (client) IP address are always routed to the same endpoint.
        /// </remarks>
        [JsiiProperty(name: "clientAffinity", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? ClientAffinity
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property description: The description of the listener.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property name: The name of the listener.</summary>
        /// <remarks>
        /// The name must be 2 to 128 characters in length and can contain letters, digits, underscores
        /// (_), and hyphens (-). It must start with a letter or Chinese character.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Name
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::GA::Listener`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IListenerProps), fullyQualifiedName: "@alicloud/ros-cdk-ga.ListenerProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ga.IListenerProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property acceleratorId: The ID of the Global Accelerator instance to which the listener will be added.</summary>
            [JsiiProperty(name: "acceleratorId", typeJson: "{\"primitive\":\"string\"}")]
            public string AcceleratorId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property portRanges:.</summary>
            [JsiiProperty(name: "portRanges", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ga.RosListener.PortRangesProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object PortRanges
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property protocol: The network transmission protocol of the listener.</summary>
            /// <remarks>
            /// Valid values:
            /// tcp: TCP protocol
            /// udp: UDP protocol
            /// </remarks>
            [JsiiProperty(name: "protocol", typeJson: "{\"primitive\":\"string\"}")]
            public string Protocol
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property clientAffinity: Specifies whether to enable client affinity for the listener.</summary>
            /// <remarks>
            /// If you do not specify the default value in the parameter, client affinity is disabled.
            /// When client affinity is disabled, the connections from a specific source (client)
            /// IP address are not always routed to the same endpoint.
            /// If you set the value to SOURCE_IP, client affinity is enabled. When client affinity is enabled, the connections from
            /// a specific source (client) IP address are always routed to the same endpoint.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "clientAffinity", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ClientAffinity
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property description: The description of the listener.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Description
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property name: The name of the listener.</summary>
            /// <remarks>
            /// The name must be 2 to 128 characters in length and can contain letters, digits, underscores
            /// (_), and hyphens (-). It must start with a letter or Chinese character.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Name
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
