using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Waf
{
    /// <summary>Properties for defining a `ALIYUN::WAF::DomainConfig`.</summary>
    [JsiiInterface(nativeType: typeof(IDomainConfigProps), fullyQualifiedName: "@alicloud/ros-cdk-waf.DomainConfigProps")]
    public interface IDomainConfigProps
    {
        /// <summary>Property domain: Domain name.</summary>
        [JsiiProperty(name: "domain", typeJson: "{\"primitive\":\"string\"}")]
        string Domain
        {
            get;
        }

        /// <summary>Property instanceId: WAF instance ID.</summary>
        /// <remarks>
        /// Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}")]
        string InstanceId
        {
            get;
        }

        /// <summary>Property isAccessProduct: The domain before WAF is configured with seven agents (eg, high defense, CDN, etc.), the value of: 0: none. 1: expressed.</summary>
        [JsiiProperty(name: "isAccessProduct", typeJson: "{\"primitive\":\"number\"}")]
        double IsAccessProduct
        {
            get;
        }

        /// <summary>Property protocols: The domain supports access protocols, values: http: expressed support for the HTTP protocol.</summary>
        /// <remarks>
        /// https: support for HTTPS protocol.
        /// http, https: supports HTTP, HTTPS protocol.
        /// </remarks>
        [JsiiProperty(name: "protocols", typeJson: "{\"primitive\":\"string\"}")]
        string Protocols
        {
            get;
        }

        /// <summary>Property httpPort: HTTP protocol configuration port.</summary>
        /// <remarks>
        /// When specifying a plurality of HTTP port "," separated. Example values: [80].
        /// Configure the HTTP protocol, this parameter is required. The default value is 80. HttpPort HttpsPort with at least two parameters need to fill a request.
        /// </remarks>
        [JsiiProperty(name: "httpPort", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? HttpPort
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property httpsPort: HTTPS protocol configuration port.</summary>
        /// <remarks>
        /// When specifying a plurality HTTPS port, using the "," separated. Example values: [443].
        /// Configure the protocol is HTTPS, this parameter is required. The default value is 443. HttpPort HttpsPort with at least two parameters need to fill a request.
        /// </remarks>
        [JsiiProperty(name: "httpsPort", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? HttpsPort
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property httpsRedirect: HTTPS is turned forcefully jump the argument: 0: off (default) 1: Turn Description required to complete the request parameters using only HTTPS access protocol.</summary>
        /// <remarks>
        /// After opening force will show a jump HTTP request is HTTPS, a default jump to 443.
        /// </remarks>
        [JsiiProperty(name: "httpsRedirect", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? HttpsRedirect
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property httpToUserIp: Whether to open HTTPS access request is forwarded back to the source station via the HTTP protocol, the value of: 0: off (default) 1: Turn Note If your site does not support HTTPS back to the source, open source HTTP return (default back to the source port is port 80) function key, can be realized by WAF HTTPS access.</summary>
        [JsiiProperty(name: "httpToUserIp", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? HttpToUserIp
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property loadBalancing: Back to the source load balancing policy values: 0: IP Hash way.</summary>
        /// <remarks>
        /// 1: represents a polling mode.
        /// </remarks>
        [JsiiProperty(name: "loadBalancing", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? LoadBalancing
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property region: Examples of areas where the WAF.</summary>
        /// <remarks>
        /// Value:
        /// cn: China mainland (default)
        /// cn-hongkong: China HongKong and other overseas
        /// </remarks>
        [JsiiProperty(name: "region", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Region
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property rsType: Back to the source address type the domain name values: 0: back to the source to IP.</summary>
        /// <remarks>
        /// 1: Indicates the domain name back to the source.
        /// </remarks>
        [JsiiProperty(name: "rsType", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? RsType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property sourceIps: Source station IP, supports a plurality of specified IP.</summary>
        /// <remarks>
        /// Example values: [ "1.1.1.1"].
        /// </remarks>
        [JsiiProperty(name: "sourceIps", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? SourceIps
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::WAF::DomainConfig`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IDomainConfigProps), fullyQualifiedName: "@alicloud/ros-cdk-waf.DomainConfigProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Waf.IDomainConfigProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property domain: Domain name.</summary>
            [JsiiProperty(name: "domain", typeJson: "{\"primitive\":\"string\"}")]
            public string Domain
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property instanceId: WAF instance ID.</summary>
            /// <remarks>
            /// Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
            /// </remarks>
            [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}")]
            public string InstanceId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property isAccessProduct: The domain before WAF is configured with seven agents (eg, high defense, CDN, etc.), the value of: 0: none. 1: expressed.</summary>
            [JsiiProperty(name: "isAccessProduct", typeJson: "{\"primitive\":\"number\"}")]
            public double IsAccessProduct
            {
                get => GetInstanceProperty<double>()!;
            }

            /// <summary>Property protocols: The domain supports access protocols, values: http: expressed support for the HTTP protocol.</summary>
            /// <remarks>
            /// https: support for HTTPS protocol.
            /// http, https: supports HTTP, HTTPS protocol.
            /// </remarks>
            [JsiiProperty(name: "protocols", typeJson: "{\"primitive\":\"string\"}")]
            public string Protocols
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property httpPort: HTTP protocol configuration port.</summary>
            /// <remarks>
            /// When specifying a plurality of HTTP port "," separated. Example values: [80].
            /// Configure the HTTP protocol, this parameter is required. The default value is 80. HttpPort HttpsPort with at least two parameters need to fill a request.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "httpPort", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? HttpPort
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property httpsPort: HTTPS protocol configuration port.</summary>
            /// <remarks>
            /// When specifying a plurality HTTPS port, using the "," separated. Example values: [443].
            /// Configure the protocol is HTTPS, this parameter is required. The default value is 443. HttpPort HttpsPort with at least two parameters need to fill a request.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "httpsPort", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? HttpsPort
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property httpsRedirect: HTTPS is turned forcefully jump the argument: 0: off (default) 1: Turn Description required to complete the request parameters using only HTTPS access protocol.</summary>
            /// <remarks>
            /// After opening force will show a jump HTTP request is HTTPS, a default jump to 443.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "httpsRedirect", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? HttpsRedirect
            {
                get => GetInstanceProperty<double?>();
            }

            /// <summary>Property httpToUserIp: Whether to open HTTPS access request is forwarded back to the source station via the HTTP protocol, the value of: 0: off (default) 1: Turn Note If your site does not support HTTPS back to the source, open source HTTP return (default back to the source port is port 80) function key, can be realized by WAF HTTPS access.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "httpToUserIp", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? HttpToUserIp
            {
                get => GetInstanceProperty<double?>();
            }

            /// <summary>Property loadBalancing: Back to the source load balancing policy values: 0: IP Hash way.</summary>
            /// <remarks>
            /// 1: represents a polling mode.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "loadBalancing", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? LoadBalancing
            {
                get => GetInstanceProperty<double?>();
            }

            /// <summary>Property region: Examples of areas where the WAF.</summary>
            /// <remarks>
            /// Value:
            /// cn: China mainland (default)
            /// cn-hongkong: China HongKong and other overseas
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "region", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Region
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property rsType: Back to the source address type the domain name values: 0: back to the source to IP.</summary>
            /// <remarks>
            /// 1: Indicates the domain name back to the source.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "rsType", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? RsType
            {
                get => GetInstanceProperty<double?>();
            }

            /// <summary>Property sourceIps: Source station IP, supports a plurality of specified IP.</summary>
            /// <remarks>
            /// Example values: [ "1.1.1.1"].
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sourceIps", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? SourceIps
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
