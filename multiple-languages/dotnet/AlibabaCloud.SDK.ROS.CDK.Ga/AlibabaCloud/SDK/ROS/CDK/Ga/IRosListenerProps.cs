using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ga
{
    /// <summary>Properties for defining a `ALIYUN::GA::Listener`.</summary>
    [JsiiInterface(nativeType: typeof(IRosListenerProps), fullyQualifiedName: "@alicloud/ros-cdk-ga.RosListenerProps")]
    public interface IRosListenerProps
    {
        /// <remarks>
        /// <strong>Property</strong>: acceleratorId: The ID of the Global Accelerator instance to which the listener will be added.
        /// </remarks>
        [JsiiProperty(name: "acceleratorId", typeJson: "{\"primitive\":\"string\"}")]
        string AcceleratorId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: portRanges:
        /// </remarks>
        [JsiiProperty(name: "portRanges", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ga.RosListener.PortRangesProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object PortRanges
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: protocol: The network transmission protocol of the listener. Valid values:
        /// tcp: TCP protocol
        /// udp: UDP protocol
        /// </remarks>
        [JsiiProperty(name: "protocol", typeJson: "{\"primitive\":\"string\"}")]
        string Protocol
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: clientAffinity: Specifies whether to enable client affinity for the listener.
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

        /// <remarks>
        /// <strong>Property</strong>: description: The description of the listener.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Description
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: name: The name of the listener.
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
        [JsiiTypeProxy(nativeType: typeof(IRosListenerProps), fullyQualifiedName: "@alicloud/ros-cdk-ga.RosListenerProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ga.IRosListenerProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: acceleratorId: The ID of the Global Accelerator instance to which the listener will be added.
            /// </remarks>
            [JsiiProperty(name: "acceleratorId", typeJson: "{\"primitive\":\"string\"}")]
            public string AcceleratorId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: portRanges:
            /// </remarks>
            [JsiiProperty(name: "portRanges", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ga.RosListener.PortRangesProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object PortRanges
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: protocol: The network transmission protocol of the listener. Valid values:
            /// tcp: TCP protocol
            /// udp: UDP protocol
            /// </remarks>
            [JsiiProperty(name: "protocol", typeJson: "{\"primitive\":\"string\"}")]
            public string Protocol
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: clientAffinity: Specifies whether to enable client affinity for the listener.
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

            /// <remarks>
            /// <strong>Property</strong>: description: The description of the listener.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Description
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: name: The name of the listener.
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
