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
        [JsiiProperty(name: "domainName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object DomainName
        {
            get;
            set;
        }

        /// <summary>Property instanceId: Instance id.</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object InstanceId
        {
            get;
            set;
        }

        /// <summary>Property isAccessProduct: Is there a seven-layer agency before WAF.</summary>
        [JsiiProperty(name: "isAccessProduct", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object IsAccessProduct
        {
            get;
            set;
        }

        /// <summary>Property sourceIps: Back to source IP configuration.</summary>
        [JsiiProperty(name: "sourceIps", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        public object SourceIps
        {
            get;
            set;
        }

        /// <summary>Property clusterType: Cluster type.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "clusterType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ClusterType
        {
            get;
            set;
        }

        /// <summary>Property connectionTime: Connection timeout.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "connectionTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ConnectionTime
        {
            get;
            set;
        }

        /// <summary>Property http2Port: Http2 port configuration.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "http2Port", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? Http2Port
        {
            get;
            set;
        }

        /// <summary>Property httpPort: Http port configuration.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "httpPort", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? HttpPort
        {
            get;
            set;
        }

        /// <summary>Property httpsPort: Https port configuration.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "httpsPort", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? HttpsPort
        {
            get;
            set;
        }

        /// <summary>Property httpsRedirect: Https forced redirect configuration.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "httpsRedirect", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? HttpsRedirect
        {
            get;
            set;
        }

        /// <summary>Property httpToUserIp: Http back to source.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "httpToUserIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? HttpToUserIp
        {
            get;
            set;
        }

        /// <summary>Property loadBalancing: Load balancing configuration.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "loadBalancing", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? LoadBalancing
        {
            get;
            set;
        }

        /// <summary>Property logHeaders: Domain traffic tagging.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "logHeaders", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-waf.RosDomain.LogHeadersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? LogHeaders
        {
            get;
            set;
        }

        /// <summary>Property readTime: Read connection timeout period.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "readTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ReadTime
        {
            get;
            set;
        }

        /// <summary>Property resourceGroupId: Resource group Id.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ResourceGroupId
        {
            get;
            set;
        }

        /// <summary>Property writeTime: Write connection timeout period.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "writeTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? WriteTime
        {
            get;
            set;
        }
    }
}
