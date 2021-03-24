using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Waf
{
    /// <summary>Properties for defining a `ALIYUN::WAF::Domain`.</summary>
    [JsiiInterface(nativeType: typeof(IRosDomainProps), fullyQualifiedName: "@alicloud/ros-cdk-waf.RosDomainProps")]
    public interface IRosDomainProps
    {
        /// <remarks>
        /// <strong>Property</strong>: domainName: Domain name
        /// </remarks>
        [JsiiProperty(name: "domainName", typeJson: "{\"primitive\":\"string\"}")]
        string DomainName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceId: Instance id
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}")]
        string InstanceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: isAccessProduct: Is there a seven-layer agency before WAF
        /// </remarks>
        [JsiiProperty(name: "isAccessProduct", typeJson: "{\"primitive\":\"string\"}")]
        string IsAccessProduct
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: sourceIps: Back to source IP configuration
        /// </remarks>
        [JsiiProperty(name: "sourceIps", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}")]
        string[] SourceIps
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: clusterType: Cluster type
        /// </remarks>
        [JsiiProperty(name: "clusterType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? ClusterType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: connectionTime: Connection timeout
        /// </remarks>
        [JsiiProperty(name: "connectionTime", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? ConnectionTime
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: http2Port: Http2 port configuration
        /// </remarks>
        [JsiiProperty(name: "http2Port", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string[]? Http2Port
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: httpPort: Http port configuration
        /// </remarks>
        [JsiiProperty(name: "httpPort", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string[]? HttpPort
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: httpsPort: Https port configuration
        /// </remarks>
        [JsiiProperty(name: "httpsPort", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string[]? HttpsPort
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: httpsRedirect: Https forced redirect configuration
        /// </remarks>
        [JsiiProperty(name: "httpsRedirect", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? HttpsRedirect
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: httpToUserIp: Http back to source
        /// </remarks>
        [JsiiProperty(name: "httpToUserIp", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? HttpToUserIp
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: loadBalancing: Load balancing configuration
        /// </remarks>
        [JsiiProperty(name: "loadBalancing", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? LoadBalancing
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: logHeaders: Domain traffic tagging
        /// </remarks>
        [JsiiProperty(name: "logHeaders", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-waf.RosDomain.LogHeadersProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LogHeaders
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: readTime: Read connection timeout period
        /// </remarks>
        [JsiiProperty(name: "readTime", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? ReadTime
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceGroupId: Resource group Id
        /// </remarks>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: writeTime: Write connection timeout period
        /// </remarks>
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
        [JsiiTypeProxy(nativeType: typeof(IRosDomainProps), fullyQualifiedName: "@alicloud/ros-cdk-waf.RosDomainProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Waf.IRosDomainProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: domainName: Domain name
            /// </remarks>
            [JsiiProperty(name: "domainName", typeJson: "{\"primitive\":\"string\"}")]
            public string DomainName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceId: Instance id
            /// </remarks>
            [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}")]
            public string InstanceId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: isAccessProduct: Is there a seven-layer agency before WAF
            /// </remarks>
            [JsiiProperty(name: "isAccessProduct", typeJson: "{\"primitive\":\"string\"}")]
            public string IsAccessProduct
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: sourceIps: Back to source IP configuration
            /// </remarks>
            [JsiiProperty(name: "sourceIps", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}")]
            public string[] SourceIps
            {
                get => GetInstanceProperty<string[]>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: clusterType: Cluster type
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "clusterType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ClusterType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: connectionTime: Connection timeout
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "connectionTime", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? ConnectionTime
            {
                get => GetInstanceProperty<double?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: http2Port: Http2 port configuration
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "http2Port", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
            public string[]? Http2Port
            {
                get => GetInstanceProperty<string[]?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: httpPort: Http port configuration
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "httpPort", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
            public string[]? HttpPort
            {
                get => GetInstanceProperty<string[]?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: httpsPort: Https port configuration
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "httpsPort", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
            public string[]? HttpsPort
            {
                get => GetInstanceProperty<string[]?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: httpsRedirect: Https forced redirect configuration
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "httpsRedirect", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? HttpsRedirect
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: httpToUserIp: Http back to source
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "httpToUserIp", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? HttpToUserIp
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: loadBalancing: Load balancing configuration
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "loadBalancing", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? LoadBalancing
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: logHeaders: Domain traffic tagging
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "logHeaders", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-waf.RosDomain.LogHeadersProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? LogHeaders
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: readTime: Read connection timeout period
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "readTime", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? ReadTime
            {
                get => GetInstanceProperty<double?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceGroupId: Resource group Id
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ResourceGroupId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: writeTime: Write connection timeout period
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "writeTime", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? WriteTime
            {
                get => GetInstanceProperty<double?>();
            }
        }
    }
}
