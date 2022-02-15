using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Alb
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ALB::Listener`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-alb.ListenerProps")]
    public class ListenerProps : AlibabaCloud.SDK.ROS.CDK.Alb.IListenerProps
    {
        /// <summary>Property defaultActions: The actions of the rule.</summary>
        [JsiiProperty(name: "defaultActions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosListener.DefaultActionsProperty\"}]}},\"kind\":\"array\"}}]}}")]
        public object DefaultActions
        {
            get;
            set;
        }

        /// <summary>Property listenerPort: The frontend port that is used by the ALB instance.</summary>
        /// <remarks>
        /// Valid values: 1 to 65535.
        /// </remarks>
        [JsiiProperty(name: "listenerPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ListenerPort
        {
            get;
            set;
        }

        /// <summary>Property listenerProtocol: The listener protocol.</summary>
        /// <remarks>
        /// Valid values: HTTP, HTTPS, and QUIC.
        /// </remarks>
        [JsiiProperty(name: "listenerProtocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ListenerProtocol
        {
            get;
            set;
        }

        /// <summary>Property loadBalancerId: The ID of the ALB instance.</summary>
        [JsiiProperty(name: "loadBalancerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object LoadBalancerId
        {
            get;
            set;
        }

        /// <summary>Property certificates: The content of the SSL certificate.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "certificates", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosListener.CertificatesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? Certificates
        {
            get;
            set;
        }

        /// <summary>Property gzipEnabled: Specifies whether to enable gzip compression to compress files of a specific type.</summary>
        /// <remarks>
        /// Valid values: true and false.
        /// Default value: true.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "gzipEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? GzipEnabled
        {
            get;
            set;
        }

        /// <summary>Property http2Enabled: Specifies whether to enable HTTP/2.</summary>
        /// <remarks>
        /// Default value: on.
        /// Valid values: true and false.
        /// Default value: true.
        /// Note Only HTTPS listeners support this parameter.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "http2Enabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Http2Enabled
        {
            get;
            set;
        }

        /// <summary>Property idleTimeout: The timeout period of idle connections.</summary>
        /// <remarks>
        /// Valid values: 1 to 60. Unit: seconds.
        /// Default value: 15.
        /// If no request is received within the specified timeout period, ALB closes the connection.
        /// ALB recreates the connection when a new connection request is received.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "idleTimeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? IdleTimeout
        {
            get;
            set;
        }

        /// <summary>Property listenerDescription: The description of the listener.</summary>
        /// <remarks>
        /// The description must be 2 to 256 characters in length.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "listenerDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ListenerDescription
        {
            get;
            set;
        }

        /// <summary>Property quicConfig: Select a QUIC listener and associate it with the ALB instance.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "quicConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosListener.QuicConfigProperty\"}]}}", isOptional: true)]
        public object? QuicConfig
        {
            get;
            set;
        }

        /// <summary>Property requestTimeout: The timeout period of the request.</summary>
        /// <remarks>
        /// Valid values: 1 to 180. Unit: seconds.
        /// Default value: 60.
        /// If no response is received from the backend server during the request timeout period,
        /// ALB sends an HTTP 504 error code to the client.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "requestTimeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? RequestTimeout
        {
            get;
            set;
        }

        /// <summary>Property securityPolicyId: The ID of the security policy.</summary>
        /// <remarks>
        /// System security policies and custom security policies
        /// are supported.
        /// Default value: tls_cipher_policy_1_0. This value indicates a system security policy.
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
        [JsiiProperty(name: "xForwardedForConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosListener.XForwardedForConfigProperty\"}]}}", isOptional: true)]
        public object? XForwardedForConfig
        {
            get;
            set;
        }
    }
}
