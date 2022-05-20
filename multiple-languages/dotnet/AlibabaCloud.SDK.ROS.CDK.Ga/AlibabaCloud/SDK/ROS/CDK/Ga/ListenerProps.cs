using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ga
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::GA::Listener`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ga.ListenerProps")]
    public class ListenerProps : AlibabaCloud.SDK.ROS.CDK.Ga.IListenerProps
    {
        /// <summary>Property acceleratorId: The ID of the Global Accelerator instance to which the listener will be added.</summary>
        [JsiiProperty(name: "acceleratorId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object AcceleratorId
        {
            get;
            set;
        }

        /// <summary>Property portRanges:.</summary>
        [JsiiProperty(name: "portRanges", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ga.RosListener.PortRangesProperty\"}]}},\"kind\":\"array\"}}]}}")]
        public object PortRanges
        {
            get;
            set;
        }

        /// <summary>Property protocol: The network transmission protocol of the listener.</summary>
        /// <remarks>
        /// Valid values:
        /// tcp: TCP protocol
        /// udp: UDP protocol
        /// http: HTTP protocolhttps: HTTPS protocol.
        /// </remarks>
        [JsiiProperty(name: "protocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Protocol
        {
            get;
            set;
        }

        /// <summary>Property certificates:.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "certificates", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ga.RosListener.CertificatesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? Certificates
        {
            get;
            set;
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
        [JsiiProperty(name: "clientAffinity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ClientAffinity
        {
            get;
            set;
        }

        /// <summary>Property description: The description of the listener.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Description
        {
            get;
            set;
        }

        /// <summary>Property name: The name of the listener.</summary>
        /// <remarks>
        /// The name must be 2 to 128 characters in length and can contain letters, digits, underscores
        /// (_), and hyphens (-). It must start with a letter or Chinese character.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Name
        {
            get;
            set;
        }

        /// <summary>Property proxyProtocol: Specifies whether to preserve client IP addresses.</summary>
        /// <remarks>
        /// Valid values:
        /// true: preserves client IP addresses. After this feature is enabled, backend servers can retrieve client IP addresses.
        /// false (default): does not preserve client IP addresses.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "proxyProtocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ProxyProtocol
        {
            get;
            set;
        }

        /// <summary>Property securityPolicyId: The ID of the security policy.</summary>
        /// <remarks>
        /// Valid values:
        /// tls_cipher_policy_1_0
        /// tls_cipher_policy_1_1
        /// tls_cipher_policy_1_2
        /// tls_cipher_policy_1_2_strict
        /// tls_cipher_policy_1_2_strict_with_1_3
        /// Note Only HTTPS listeners support this parameter.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "securityPolicyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? SecurityPolicyId
        {
            get;
            set;
        }

        /// <summary>Property xForwardedForConfig: The configuration of the XForward field.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "xForwardedForConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ga.RosListener.XForwardedForConfigProperty\"}]}}", isOptional: true)]
        public object? XForwardedForConfig
        {
            get;
            set;
        }
    }
}
