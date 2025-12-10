using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mse
{
    /// <summary>Properties for defining a `GatewayService`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-gatewayservice
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IGatewayServiceProps), fullyQualifiedName: "@alicloud/ros-cdk-mse.GatewayServiceProps")]
    public interface IGatewayServiceProps
    {
        /// <summary>Property gatewayUniqueId: Unique identifier of the gateway.</summary>
        [JsiiProperty(name: "gatewayUniqueId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object GatewayUniqueId
        {
            get;
        }

        /// <summary>Property name: Name of the service.</summary>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Name
        {
            get;
        }

        /// <summary>Property sourceType: Type of service source.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>MSE: MSE-NACOS</description>
        /// <description>K8s: ACK container service</description>
        /// <description>VIP: Fixed address</description>
        /// <description>DNS: DNS domain name</description>
        /// <description>FC: Function Compute</description>
        /// <description>EDAS: EDAS</description>
        /// <description>MSE_ZK: MSE-Zookeeper</description>
        /// <description>SAE: SAE</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "sourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SourceType
        {
            get;
        }

        /// <summary>Property dnsServerList: List of DNS servers.</summary>
        [JsiiProperty(name: "dnsServerList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DnsServerList
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property fcAlias: Function Compute service alias.</summary>
        /// <remarks>
        /// Used when SourceType is FC.
        /// </remarks>
        [JsiiProperty(name: "fcAlias", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FcAlias
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property fcServiceName: Function Compute service name.</summary>
        /// <remarks>
        /// Required when SourceType is FC.
        /// </remarks>
        [JsiiProperty(name: "fcServiceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FcServiceName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property fcVersion: Function Compute service version.</summary>
        /// <remarks>
        /// Used when SourceType is FC.
        /// </remarks>
        [JsiiProperty(name: "fcVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FcVersion
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property groupName: Group name of the service.</summary>
        [JsiiProperty(name: "groupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? GroupName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ips: List of IPs.</summary>
        [JsiiProperty(name: "ips", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Ips
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property namespace: Namespace of the service.</summary>
        [JsiiProperty(name: "namespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Namespace
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property saeAppId: SAE application ID.</summary>
        [JsiiProperty(name: "saeAppId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SaeAppId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property servicePort: Port of the service.</summary>
        [JsiiProperty(name: "servicePort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ServicePort
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property serviceProtocol: Protocol of the service.</summary>
        [JsiiProperty(name: "serviceProtocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ServiceProtocol
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property sourceId: Source ID of the service.</summary>
        /// <remarks>
        /// Used when specifying a source to add services.
        /// </remarks>
        [JsiiProperty(name: "sourceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SourceId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tlsSetting: TLS settings for the service.</summary>
        [JsiiProperty(name: "tlsSetting", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TlsSetting
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `GatewayService`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-gatewayservice
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IGatewayServiceProps), fullyQualifiedName: "@alicloud/ros-cdk-mse.GatewayServiceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Mse.IGatewayServiceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property gatewayUniqueId: Unique identifier of the gateway.</summary>
            [JsiiProperty(name: "gatewayUniqueId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object GatewayUniqueId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property name: Name of the service.</summary>
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Name
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property sourceType: Type of service source.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>MSE: MSE-NACOS</description>
            /// <description>K8s: ACK container service</description>
            /// <description>VIP: Fixed address</description>
            /// <description>DNS: DNS domain name</description>
            /// <description>FC: Function Compute</description>
            /// <description>EDAS: EDAS</description>
            /// <description>MSE_ZK: MSE-Zookeeper</description>
            /// <description>SAE: SAE</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "sourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SourceType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property dnsServerList: List of DNS servers.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dnsServerList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? DnsServerList
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property fcAlias: Function Compute service alias.</summary>
            /// <remarks>
            /// Used when SourceType is FC.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "fcAlias", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FcAlias
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property fcServiceName: Function Compute service name.</summary>
            /// <remarks>
            /// Required when SourceType is FC.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "fcServiceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FcServiceName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property fcVersion: Function Compute service version.</summary>
            /// <remarks>
            /// Used when SourceType is FC.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "fcVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FcVersion
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property groupName: Group name of the service.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "groupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? GroupName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ips: List of IPs.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "ips", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Ips
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property namespace: Namespace of the service.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "namespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Namespace
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property saeAppId: SAE application ID.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "saeAppId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SaeAppId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property servicePort: Port of the service.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "servicePort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ServicePort
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property serviceProtocol: Protocol of the service.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "serviceProtocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ServiceProtocol
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property sourceId: Source ID of the service.</summary>
            /// <remarks>
            /// Used when specifying a source to add services.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sourceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SourceId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tlsSetting: TLS settings for the service.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "tlsSetting", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? TlsSetting
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
