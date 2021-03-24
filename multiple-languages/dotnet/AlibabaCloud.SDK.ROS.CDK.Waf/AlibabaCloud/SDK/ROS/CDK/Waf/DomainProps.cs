using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Waf
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::WAF::Domain`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-waf.DomainProps")]
    public class DomainProps : AlibabaCloud.SDK.ROS.CDK.Waf.IDomainProps
    {
        /// <summary>Property domainName: Domain name.</summary>
        [JsiiProperty(name: "domainName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string DomainName
        {
            get;
            set;
        }

        /// <summary>Property instanceId: Instance id.</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string InstanceId
        {
            get;
            set;
        }

        /// <summary>Property isAccessProduct: Is there a seven-layer agency before WAF.</summary>
        [JsiiProperty(name: "isAccessProduct", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string IsAccessProduct
        {
            get;
            set;
        }

        /// <summary>Property sourceIps: Back to source IP configuration.</summary>
        [JsiiProperty(name: "sourceIps", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOverride: true)]
        public string[] SourceIps
        {
            get;
            set;
        }

        /// <summary>Property clusterType: Cluster type.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "clusterType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ClusterType
        {
            get;
            set;
        }

        /// <summary>Property connectionTime: Connection timeout.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "connectionTime", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? ConnectionTime
        {
            get;
            set;
        }

        /// <summary>Property http2Port: Http2 port configuration.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "http2Port", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true, isOverride: true)]
        public string[]? Http2Port
        {
            get;
            set;
        }

        /// <summary>Property httpPort: Http port configuration.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "httpPort", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true, isOverride: true)]
        public string[]? HttpPort
        {
            get;
            set;
        }

        /// <summary>Property httpsPort: Https port configuration.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "httpsPort", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true, isOverride: true)]
        public string[]? HttpsPort
        {
            get;
            set;
        }

        /// <summary>Property httpsRedirect: Https forced redirect configuration.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "httpsRedirect", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? HttpsRedirect
        {
            get;
            set;
        }

        /// <summary>Property httpToUserIp: Http back to source.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "httpToUserIp", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? HttpToUserIp
        {
            get;
            set;
        }

        /// <summary>Property loadBalancing: Load balancing configuration.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "loadBalancing", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? LoadBalancing
        {
            get;
            set;
        }

        /// <summary>Property logHeaders: Domain traffic tagging.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "logHeaders", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-waf.RosDomain.LogHeadersProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? LogHeaders
        {
            get;
            set;
        }

        /// <summary>Property readTime: Read connection timeout period.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "readTime", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? ReadTime
        {
            get;
            set;
        }

        /// <summary>Property resourceGroupId: Resource group Id.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ResourceGroupId
        {
            get;
            set;
        }

        /// <summary>Property writeTime: Write connection timeout period.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "writeTime", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? WriteTime
        {
            get;
            set;
        }
    }
}
