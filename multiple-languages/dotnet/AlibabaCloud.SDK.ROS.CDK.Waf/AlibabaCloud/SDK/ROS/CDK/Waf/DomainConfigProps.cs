using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Waf
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::WAF::DomainConfig`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-waf.DomainConfigProps")]
    public class DomainConfigProps : AlibabaCloud.SDK.ROS.CDK.Waf.IDomainConfigProps
    {
        /// <summary>Property domain: Domain name.</summary>
        [JsiiProperty(name: "domain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object Domain
        {
            get;
            set;
        }

        /// <summary>Property instanceId: WAF instance ID.</summary>
        /// <remarks>
        /// Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object InstanceId
        {
            get;
            set;
        }

        /// <summary>Property isAccessProduct: The domain before WAF is configured with seven agents (eg, high defense, CDN, etc.), the value of: 0: none. 1: expressed.</summary>
        [JsiiProperty(name: "isAccessProduct", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object IsAccessProduct
        {
            get;
            set;
        }

        /// <summary>Property protocols: The domain supports access protocols, values: http: expressed support for the HTTP protocol.</summary>
        /// <remarks>
        /// https: support for HTTPS protocol.
        /// http, https: supports HTTP, HTTPS protocol.
        /// </remarks>
        [JsiiProperty(name: "protocols", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object Protocols
        {
            get;
            set;
        }

        /// <summary>Property httpPort: HTTP protocol configuration port.</summary>
        /// <remarks>
        /// When specifying a plurality of HTTP port "," separated. Example values: [80].
        /// Configure the HTTP protocol, this parameter is required. The default value is 80. HttpPort HttpsPort with at least two parameters need to fill a request.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "httpPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? HttpPort
        {
            get;
            set;
        }

        /// <summary>Property httpsPort: HTTPS protocol configuration port.</summary>
        /// <remarks>
        /// When specifying a plurality HTTPS port, using the "," separated. Example values: [443].
        /// Configure the protocol is HTTPS, this parameter is required. The default value is 443. HttpPort HttpsPort with at least two parameters need to fill a request.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "httpsPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? HttpsPort
        {
            get;
            set;
        }

        /// <summary>Property httpsRedirect: HTTPS is turned forcefully jump the argument: 0: off (default) 1: Turn Description required to complete the request parameters using only HTTPS access protocol.</summary>
        /// <remarks>
        /// After opening force will show a jump HTTP request is HTTPS, a default jump to 443.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "httpsRedirect", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? HttpsRedirect
        {
            get;
            set;
        }

        /// <summary>Property httpToUserIp: Whether to open HTTPS access request is forwarded back to the source station via the HTTP protocol, the value of: 0: off (default) 1: Turn Note If your site does not support HTTPS back to the source, open source HTTP return (default back to the source port is port 80) function key, can be realized by WAF HTTPS access.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "httpToUserIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? HttpToUserIp
        {
            get;
            set;
        }

        /// <summary>Property loadBalancing: Back to the source load balancing policy values: 0: IP Hash way.</summary>
        /// <remarks>
        /// 1: represents a polling mode.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "loadBalancing", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? LoadBalancing
        {
            get;
            set;
        }

        /// <summary>Property region: Examples of areas where the WAF.</summary>
        /// <remarks>
        /// Value:
        /// cn: China mainland (default)
        /// cn-hongkong: China HongKong and other overseas
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "region", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Region
        {
            get;
            set;
        }

        /// <summary>Property rsType: Back to the source address type the domain name values: 0: back to the source to IP.</summary>
        /// <remarks>
        /// 1: Indicates the domain name back to the source.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "rsType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? RsType
        {
            get;
            set;
        }

        /// <summary>Property sourceIps: Source station IP, supports a plurality of specified IP.</summary>
        /// <remarks>
        /// Example values: [ "1.1.1.1"].
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "sourceIps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? SourceIps
        {
            get;
            set;
        }
    }
}
