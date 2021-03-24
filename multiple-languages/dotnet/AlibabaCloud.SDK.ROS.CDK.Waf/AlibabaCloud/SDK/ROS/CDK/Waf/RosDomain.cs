using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Waf
{
    /// <summary>A ROS template type:  `ALIYUN::WAF::Domain`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Waf.RosDomain), fullyQualifiedName: "@alicloud/ros-cdk-waf.RosDomain", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-waf.RosDomainProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosDomain : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <summary>Create a new `ALIYUN::WAF::Domain`.</summary>
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosDomain(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Waf.IRosDomainProps props, bool enableResourcePropertyConstraint): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosDomain(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosDomain(DeputyProps props): base(props)
        {
        }

        [JsiiMethod(name: "renderProperties", returnsJson: "{\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}", parametersJson: "[{\"name\":\"props\",\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}]", isOverride: true)]
        protected override System.Collections.Generic.IDictionary<string, object> RenderProperties(System.Collections.Generic.IDictionary<string, object> props)
        {
            return InvokeInstanceMethod<System.Collections.Generic.IDictionary<string, object>>(new System.Type[]{typeof(System.Collections.Generic.IDictionary<string, object>)}, new object[]{props})!;
        }

        /// <summary>The resource type name for this resource class.</summary>
        [JsiiProperty(name: "ROS_RESOURCE_TYPE_NAME", typeJson: "{\"primitive\":\"string\"}")]
        public static string ROS_RESOURCE_TYPE_NAME
        {
            get;
        }
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Waf.RosDomain))!;

        /// <remarks>
        /// <strong>Attribute</strong>: ClusterType: Cluster type
        /// </remarks>
        [JsiiProperty(name: "attrClusterType", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrClusterType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: Cname: CNAME assigned by WAF instance
        /// </remarks>
        [JsiiProperty(name: "attrCname", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrCname
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: DomainName: Domain name
        /// </remarks>
        [JsiiProperty(name: "attrDomainName", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrDomainName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: Http2Port: Http2 port configuration
        /// </remarks>
        [JsiiProperty(name: "attrHttp2Port", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrHttp2Port
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: HttpPort: Http port configuration
        /// </remarks>
        [JsiiProperty(name: "attrHttpPort", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrHttpPort
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: HttpsPort: Https port configuration
        /// </remarks>
        [JsiiProperty(name: "attrHttpsPort", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrHttpsPort
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: HttpsRedirect: Https forced redirect configuration
        /// </remarks>
        [JsiiProperty(name: "attrHttpsRedirect", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrHttpsRedirect
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: HttpToUserIp: Http back to source
        /// </remarks>
        [JsiiProperty(name: "attrHttpToUserIp", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrHttpToUserIp
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: InstanceId: Instance id
        /// </remarks>
        [JsiiProperty(name: "attrInstanceId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrInstanceId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: IsAccessProduct: Is there a seven-layer agency before WAF
        /// </remarks>
        [JsiiProperty(name: "attrIsAccessProduct", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrIsAccessProduct
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: LoadBalancing: Load balancing configuration
        /// </remarks>
        [JsiiProperty(name: "attrLoadBalancing", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrLoadBalancing
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: LogHeaders: Domain traffic tagging
        /// </remarks>
        [JsiiProperty(name: "attrLogHeaders", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrLogHeaders
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: ResourceGroupId: Resource group Id
        /// </remarks>
        [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrResourceGroupId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: SourceIps: Back to source IP configuration
        /// </remarks>
        [JsiiProperty(name: "attrSourceIps", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrSourceIps
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: Version: Optimistic lock version
        /// </remarks>
        [JsiiProperty(name: "attrVersion", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrVersion
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "rosProperties", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
        protected override System.Collections.Generic.IDictionary<string, object> RosProperties
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>>()!;
        }

        /// <remarks>
        /// <strong>Property</strong>: domainName: Domain name
        /// </remarks>
        [JsiiProperty(name: "domainName", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string DomainName
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        public virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceId: Instance id
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string InstanceId
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: isAccessProduct: Is there a seven-layer agency before WAF
        /// </remarks>
        [JsiiProperty(name: "isAccessProduct", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string IsAccessProduct
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: sourceIps: Back to source IP configuration
        /// </remarks>
        [JsiiProperty(name: "sourceIps", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}")]
        public virtual string[] SourceIps
        {
            get => GetInstanceProperty<string[]>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: clusterType: Cluster type
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "clusterType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? ClusterType
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: connectionTime: Connection timeout
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "connectionTime", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        public virtual double? ConnectionTime
        {
            get => GetInstanceProperty<double?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: http2Port: Http2 port configuration
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "http2Port", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
        public virtual string[]? Http2Port
        {
            get => GetInstanceProperty<string[]?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: httpPort: Http port configuration
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "httpPort", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
        public virtual string[]? HttpPort
        {
            get => GetInstanceProperty<string[]?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: httpsPort: Https port configuration
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "httpsPort", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
        public virtual string[]? HttpsPort
        {
            get => GetInstanceProperty<string[]?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: httpsRedirect: Https forced redirect configuration
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "httpsRedirect", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? HttpsRedirect
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: httpToUserIp: Http back to source
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "httpToUserIp", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? HttpToUserIp
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: loadBalancing: Load balancing configuration
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "loadBalancing", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? LoadBalancing
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: logHeaders: Domain traffic tagging
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "logHeaders", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-waf.RosDomain.LogHeadersProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public virtual object? LogHeaders
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: readTime: Read connection timeout period
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "readTime", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        public virtual double? ReadTime
        {
            get => GetInstanceProperty<double?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceGroupId: Resource group Id
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? ResourceGroupId
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: writeTime: Write connection timeout period
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "writeTime", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        public virtual double? WriteTime
        {
            get => GetInstanceProperty<double?>();
            set => SetInstanceProperty(value);
        }
        [JsiiInterface(nativeType: typeof(ILogHeadersProperty), fullyQualifiedName: "@alicloud/ros-cdk-waf.RosDomain.LogHeadersProperty")]
        public interface ILogHeadersProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: k: The field name of the traffic tag of the domain name
            /// </remarks>
            [JsiiProperty(name: "k", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? K
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: v: The value of the traffic tag of the domain name
            /// </remarks>
            [JsiiProperty(name: "v", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? V
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(ILogHeadersProperty), fullyQualifiedName: "@alicloud/ros-cdk-waf.RosDomain.LogHeadersProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Waf.RosDomain.ILogHeadersProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: k: The field name of the traffic tag of the domain name
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "k", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? K
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: v: The value of the traffic tag of the domain name
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "v", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? V
                {
                    get => GetInstanceProperty<string?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-waf.RosDomain.LogHeadersProperty")]
        public class LogHeadersProperty : AlibabaCloud.SDK.ROS.CDK.Waf.RosDomain.ILogHeadersProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: k: The field name of the traffic tag of the domain name
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "k", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? K
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: v: The value of the traffic tag of the domain name
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "v", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? V
            {
                get;
                set;
            }
        }
    }
}
