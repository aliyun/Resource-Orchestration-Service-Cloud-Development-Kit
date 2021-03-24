using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Waf
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::WAF::Domain`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-waf.RosDomainProps")]
    public class RosDomainProps : AlibabaCloud.SDK.ROS.CDK.Waf.IRosDomainProps
    {
        /// <remarks>
        /// <strong>Property</strong>: domainName: Domain name
        /// </remarks>
        [JsiiProperty(name: "domainName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string DomainName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceId: Instance id
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string InstanceId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: isAccessProduct: Is there a seven-layer agency before WAF
        /// </remarks>
        [JsiiProperty(name: "isAccessProduct", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string IsAccessProduct
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: sourceIps: Back to source IP configuration
        /// </remarks>
        [JsiiProperty(name: "sourceIps", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOverride: true)]
        public string[] SourceIps
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: clusterType: Cluster type
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "clusterType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ClusterType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: connectionTime: Connection timeout
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "connectionTime", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? ConnectionTime
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: http2Port: Http2 port configuration
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "http2Port", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true, isOverride: true)]
        public string[]? Http2Port
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: httpPort: Http port configuration
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "httpPort", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true, isOverride: true)]
        public string[]? HttpPort
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: httpsPort: Https port configuration
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "httpsPort", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true, isOverride: true)]
        public string[]? HttpsPort
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: httpsRedirect: Https forced redirect configuration
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "httpsRedirect", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? HttpsRedirect
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: httpToUserIp: Http back to source
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "httpToUserIp", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? HttpToUserIp
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: loadBalancing: Load balancing configuration
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "loadBalancing", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? LoadBalancing
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: logHeaders: Domain traffic tagging
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "logHeaders", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-waf.RosDomain.LogHeadersProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? LogHeaders
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: readTime: Read connection timeout period
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "readTime", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? ReadTime
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceGroupId: Resource group Id
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ResourceGroupId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: writeTime: Write connection timeout period
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "writeTime", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? WriteTime
        {
            get;
            set;
        }
    }
}
