using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Waf
{
    /// <summary>Properties for defining a `ALIYUN::WAF::Domain`.</summary>
    [JsiiInterface(nativeType: typeof(IDomainProps), fullyQualifiedName: "@alicloud/ros-cdk-waf.DomainProps")]
    public interface IDomainProps
    {
        /// <summary>Property domainName: Domain name.</summary>
        [JsiiProperty(name: "domainName", typeJson: "{\"primitive\":\"string\"}")]
        string DomainName
        {
            get;
        }

        /// <summary>Property instanceId: Instance id.</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}")]
        string InstanceId
        {
            get;
        }

        /// <summary>Property isAccessProduct: Is there a seven-layer agency before WAF.</summary>
        [JsiiProperty(name: "isAccessProduct", typeJson: "{\"primitive\":\"string\"}")]
        string IsAccessProduct
        {
            get;
        }

        /// <summary>Property sourceIps: Back to source IP configuration.</summary>
        [JsiiProperty(name: "sourceIps", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}")]
        string[] SourceIps
        {
            get;
        }

        /// <summary>Property clusterType: Cluster type.</summary>
        [JsiiProperty(name: "clusterType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? ClusterType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property connectionTime: Connection timeout.</summary>
        [JsiiProperty(name: "connectionTime", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? ConnectionTime
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property http2Port: Http2 port configuration.</summary>
        [JsiiProperty(name: "http2Port", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string[]? Http2Port
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property httpPort: Http port configuration.</summary>
        [JsiiProperty(name: "httpPort", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string[]? HttpPort
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property httpsPort: Https port configuration.</summary>
        [JsiiProperty(name: "httpsPort", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string[]? HttpsPort
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property httpsRedirect: Https forced redirect configuration.</summary>
        [JsiiProperty(name: "httpsRedirect", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? HttpsRedirect
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property httpToUserIp: Http back to source.</summary>
        [JsiiProperty(name: "httpToUserIp", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? HttpToUserIp
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property loadBalancing: Load balancing configuration.</summary>
        [JsiiProperty(name: "loadBalancing", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? LoadBalancing
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property logHeaders: Domain traffic tagging.</summary>
        [JsiiProperty(name: "logHeaders", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-waf.RosDomain.LogHeadersProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LogHeaders
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property readTime: Read connection timeout period.</summary>
        [JsiiProperty(name: "readTime", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? ReadTime
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: Resource group Id.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property writeTime: Write connection timeout period.</summary>
        [JsiiProperty(name: "writeTime", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? WriteTime
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::WAF::Domain`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IDomainProps), fullyQualifiedName: "@alicloud/ros-cdk-waf.DomainProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Waf.IDomainProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property domainName: Domain name.</summary>
            [JsiiProperty(name: "domainName", typeJson: "{\"primitive\":\"string\"}")]
            public string DomainName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property instanceId: Instance id.</summary>
            [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}")]
            public string InstanceId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property isAccessProduct: Is there a seven-layer agency before WAF.</summary>
            [JsiiProperty(name: "isAccessProduct", typeJson: "{\"primitive\":\"string\"}")]
            public string IsAccessProduct
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property sourceIps: Back to source IP configuration.</summary>
            [JsiiProperty(name: "sourceIps", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}")]
            public string[] SourceIps
            {
                get => GetInstanceProperty<string[]>()!;
            }

            /// <summary>Property clusterType: Cluster type.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "clusterType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ClusterType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property connectionTime: Connection timeout.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "connectionTime", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? ConnectionTime
            {
                get => GetInstanceProperty<double?>();
            }

            /// <summary>Property http2Port: Http2 port configuration.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "http2Port", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
            public string[]? Http2Port
            {
                get => GetInstanceProperty<string[]?>();
            }

            /// <summary>Property httpPort: Http port configuration.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "httpPort", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
            public string[]? HttpPort
            {
                get => GetInstanceProperty<string[]?>();
            }

            /// <summary>Property httpsPort: Https port configuration.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "httpsPort", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
            public string[]? HttpsPort
            {
                get => GetInstanceProperty<string[]?>();
            }

            /// <summary>Property httpsRedirect: Https forced redirect configuration.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "httpsRedirect", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? HttpsRedirect
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property httpToUserIp: Http back to source.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "httpToUserIp", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? HttpToUserIp
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property loadBalancing: Load balancing configuration.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "loadBalancing", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? LoadBalancing
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property logHeaders: Domain traffic tagging.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "logHeaders", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-waf.RosDomain.LogHeadersProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? LogHeaders
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property readTime: Read connection timeout period.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "readTime", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? ReadTime
            {
                get => GetInstanceProperty<double?>();
            }

            /// <summary>Property resourceGroupId: Resource group Id.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ResourceGroupId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property writeTime: Write connection timeout period.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "writeTime", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? WriteTime
            {
                get => GetInstanceProperty<double?>();
            }
        }
    }
}
