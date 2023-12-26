using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Waf
{
    /// <summary>Properties for defining a `RosDomainConfig`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-waf-domainconfig
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosDomainConfigProps), fullyQualifiedName: "@alicloud/ros-cdk-waf.RosDomainConfigProps")]
    public interface IRosDomainConfigProps
    {
        /// <remarks>
        /// <strong>Property</strong>: domain: Domain name.
        /// </remarks>
        [JsiiProperty(name: "domain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Domain
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceId: WAF instance ID.
        /// Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: isAccessProduct: The domain before WAF is configured with seven agents (eg, high defense, CDN, etc.), the value of:
        /// 0: none.
        /// 1: expressed.
        /// </remarks>
        [JsiiProperty(name: "isAccessProduct", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object IsAccessProduct
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: protocols: The domain supports access protocols, values:
        /// http: expressed support for the HTTP protocol.
        /// https: support for HTTPS protocol.
        /// http, https: supports HTTP, HTTPS protocol.
        /// </remarks>
        [JsiiProperty(name: "protocols", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Protocols
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: httpPort: HTTP protocol configuration port. When specifying a plurality of HTTP port "," separated. Example values: [80].
        /// Configure the HTTP protocol, this parameter is required. The default value is 80. HttpPort HttpsPort with at least two parameters need to fill a request.
        /// </remarks>
        [JsiiProperty(name: "httpPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? HttpPort
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: httpsPort: HTTPS protocol configuration port. When specifying a plurality HTTPS port, using the "," separated. Example values: [443].
        /// Configure the protocol is HTTPS, this parameter is required. The default value is 443. HttpPort HttpsPort with at least two parameters need to fill a request.
        /// </remarks>
        [JsiiProperty(name: "httpsPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? HttpsPort
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: httpsRedirect: HTTPS is turned forcefully jump the argument:
        /// 0: off (default)
        /// 1: Turn
        /// Description required to complete the request parameters using only HTTPS access protocol. After opening force will show a jump HTTP request is HTTPS, a default jump to 443.
        /// </remarks>
        [JsiiProperty(name: "httpsRedirect", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? HttpsRedirect
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: httpToUserIp: Whether to open HTTPS access request is forwarded back to the source station via the HTTP protocol, the value of:
        /// 0: off (default)
        /// 1: Turn
        /// Note If your site does not support HTTPS back to the source, open source HTTP return (default back to the source port is port 80) function key, can be realized by WAF HTTPS access.
        /// </remarks>
        [JsiiProperty(name: "httpToUserIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? HttpToUserIp
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: loadBalancing: Back to the source load balancing policy values:
        /// 0: IP Hash way.
        /// 1: represents a polling mode.
        /// </remarks>
        [JsiiProperty(name: "loadBalancing", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LoadBalancing
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: region: Examples of areas where the WAF. Value:
        /// cn: China mainland (default)
        /// cn-hongkong: China HongKong and other overseas
        /// </remarks>
        [JsiiProperty(name: "region", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Region
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: rsType: Back to the source address type the domain name values:
        /// 0: back to the source to IP.
        /// 1: Indicates the domain name back to the source.
        /// </remarks>
        [JsiiProperty(name: "rsType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RsType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: sourceIps: Source station IP, supports a plurality of specified IP. Example values: [ "1.1.1.1"].
        /// </remarks>
        [JsiiProperty(name: "sourceIps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SourceIps
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosDomainConfig`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-waf-domainconfig
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosDomainConfigProps), fullyQualifiedName: "@alicloud/ros-cdk-waf.RosDomainConfigProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Waf.IRosDomainConfigProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: domain: Domain name.
            /// </remarks>
            [JsiiProperty(name: "domain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Domain
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceId: WAF instance ID.
            /// Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
            /// </remarks>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: isAccessProduct: The domain before WAF is configured with seven agents (eg, high defense, CDN, etc.), the value of:
            /// 0: none.
            /// 1: expressed.
            /// </remarks>
            [JsiiProperty(name: "isAccessProduct", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object IsAccessProduct
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: protocols: The domain supports access protocols, values:
            /// http: expressed support for the HTTP protocol.
            /// https: support for HTTPS protocol.
            /// http, https: supports HTTP, HTTPS protocol.
            /// </remarks>
            [JsiiProperty(name: "protocols", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Protocols
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: httpPort: HTTP protocol configuration port. When specifying a plurality of HTTP port "," separated. Example values: [80].
            /// Configure the HTTP protocol, this parameter is required. The default value is 80. HttpPort HttpsPort with at least two parameters need to fill a request.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "httpPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HttpPort
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: httpsPort: HTTPS protocol configuration port. When specifying a plurality HTTPS port, using the "," separated. Example values: [443].
            /// Configure the protocol is HTTPS, this parameter is required. The default value is 443. HttpPort HttpsPort with at least two parameters need to fill a request.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "httpsPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HttpsPort
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: httpsRedirect: HTTPS is turned forcefully jump the argument:
            /// 0: off (default)
            /// 1: Turn
            /// Description required to complete the request parameters using only HTTPS access protocol. After opening force will show a jump HTTP request is HTTPS, a default jump to 443.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "httpsRedirect", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HttpsRedirect
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: httpToUserIp: Whether to open HTTPS access request is forwarded back to the source station via the HTTP protocol, the value of:
            /// 0: off (default)
            /// 1: Turn
            /// Note If your site does not support HTTPS back to the source, open source HTTP return (default back to the source port is port 80) function key, can be realized by WAF HTTPS access.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "httpToUserIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HttpToUserIp
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: loadBalancing: Back to the source load balancing policy values:
            /// 0: IP Hash way.
            /// 1: represents a polling mode.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "loadBalancing", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LoadBalancing
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: region: Examples of areas where the WAF. Value:
            /// cn: China mainland (default)
            /// cn-hongkong: China HongKong and other overseas
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "region", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Region
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: rsType: Back to the source address type the domain name values:
            /// 0: back to the source to IP.
            /// 1: Indicates the domain name back to the source.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "rsType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RsType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: sourceIps: Source station IP, supports a plurality of specified IP. Example values: [ "1.1.1.1"].
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sourceIps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SourceIps
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
