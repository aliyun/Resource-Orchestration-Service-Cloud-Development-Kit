using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Asm
{
    /// <summary>Properties for defining a `RosServiceMesh`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-asm-servicemesh
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosServiceMeshProps), fullyQualifiedName: "@alicloud/ros-cdk-asm.RosServiceMeshProps")]
    public interface IRosServiceMeshProps
    {
        /// <remarks>
        /// <strong>Property</strong>: vpcId: The ID of the virtual private cloud (VPC).
        /// </remarks>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VpcId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: vSwitches: The ID of the vSwitch, eg: ["vsw-xzegf5dndkbf4m6eg****"]
        /// </remarks>
        [JsiiProperty(name: "vSwitches", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VSwitches
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: accessLogEnabled: Specifies whether to enable access log. Valid values:
        /// - `true`: Enables access log.
        /// - `false`: Disables access log.
        /// Default value: `false`.
        /// </remarks>
        [JsiiProperty(name: "accessLogEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AccessLogEnabled
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: accessLogFile: Enable and disable access logs. Value:
        /// - "" : Turn off access logs.
        /// - \/dev\/stdout: Enables access logging
        /// </remarks>
        [JsiiProperty(name: "accessLogFile", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AccessLogFile
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: accessLogFormat: The custom format of access logs. This parameter is available only if you enable
        /// access log. The value must be a JSON string that contains the following keys:
        /// authority_for, bytes_received, bytes_sent, downstream_local_address,
        /// downstream_remote_address, duration, istio_policy_status, method, path, protocol,
        /// requested_server_name, response_code, response_flags, route_name, start_time,
        /// trace_id, upstream_cluster, upstream_host, upstream_local_address,
        /// upstream_service_time, upstream_transport_failure_reason, user_agent, and
        /// x_forwarded_for.
        /// </remarks>
        [JsiiProperty(name: "accessLogFormat", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AccessLogFormat
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: accessLogProject: The Log Service project for access logs.
        /// </remarks>
        [JsiiProperty(name: "accessLogProject", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AccessLogProject
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: accessLogServiceEnabled: Whether Envoy's gRPC logging service (ALS) is enabled. Value:
        /// - true: Enables Envoy's gRPC logging service.
        /// - false: Envoy's gRPC logging service is not enabled.
        /// Default value: false
        /// </remarks>
        [JsiiProperty(name: "accessLogServiceEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AccessLogServiceEnabled
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: accessLogServiceHost: Address where Envoy's gRPC logging service (ALS) is enabled.
        /// </remarks>
        [JsiiProperty(name: "accessLogServiceHost", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AccessLogServiceHost
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: accessLogServicePort: Port on which Envoy's gRPC logging service (ALS) is enabled.
        /// </remarks>
        [JsiiProperty(name: "accessLogServicePort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AccessLogServicePort
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: apiServerLoadBalancerSpec: CLB specification for the APIServer binding. Value: Compact type I (slb.s1.small), Standard type I (slb.s2.small), Standard Type II (slb.s2.medium), high-order type I (slb.s3.small), high-order type II (slb.s3.medium), Super type I (slb.s3.large).
        /// </remarks>
        [JsiiProperty(name: "apiServerLoadBalancerSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ApiServerLoadBalancerSpec
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: apiServerPublicEip: Specifies whether to expose the API server to the Internet.
        /// Valid values: true and false. Default value: false.
        /// If you do not set this parameter, the API server of clusters added to the ASM instance
        /// cannot be accessed from the Internet.
        /// </remarks>
        [JsiiProperty(name: "apiServerPublicEip", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ApiServerPublicEip
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: auditProject: The name of the Log Service project that is used for mesh audit.
        /// Default value: mesh-log-{meshId}.
        /// </remarks>
        [JsiiProperty(name: "auditProject", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AuditProject
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: autoRenew: If CLB is annual and monthly, whether it will be automatically renewed. Value:
        /// - true: Automatic renewal.
        /// - false: No automatic renewal.
        /// </remarks>
        [JsiiProperty(name: "autoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoRenew
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: autoRenewPeriod: This parameter is valid only if you set `ChargeType` to `PrePay`. The
        /// auto-renewal period. If the subscription duration is less than one year, the
        /// value of this parameter indicates the number of months for which you want to
        /// renew the instance. If the subscription duration is more than one year, the value
        /// of this parameter indicates the number of years for which you want to renew the
        /// instance.
        /// </remarks>
        [JsiiProperty(name: "autoRenewPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoRenewPeriod
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: certChain: The certificate chain from CaCert to RootCert contains at least two certificates.
        /// </remarks>
        [JsiiProperty(name: "certChain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CertChain
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: chargeType: CLB payment type. Value:
        /// - PayOnDemand: pay-as-you-go type
        /// - PrePay: Annual and monthly.
        /// </remarks>
        [JsiiProperty(name: "chargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ChargeType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: clusterSpec: Service grid instance specification, value:
        /// - standard: The standard version.
        /// - enterprise: Enterprise Edition
        /// - ultimate: ultimate.
        /// </remarks>
        [JsiiProperty(name: "clusterSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ClusterSpec
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: configSourceEnabled: Whether to enable an external service registry. Value:
        /// - true: Enables the external service registry.
        /// - false: The external service registry is not enabled.
        /// Default value: false
        /// </remarks>
        [JsiiProperty(name: "configSourceEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ConfigSourceEnabled
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: configSourceNacosId: The Nacos ID for config source.
        /// </remarks>
        [JsiiProperty(name: "configSourceNacosId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ConfigSourceNacosId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: controlPlaneLogEnabled: Specifies whether to enable control plane log collection. Valid values:
        /// - `true`: Enables control plane log collection.
        /// - `false`: Disables control plane log collection.
        /// Default value: `false`.
        /// </remarks>
        [JsiiProperty(name: "controlPlaneLogEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ControlPlaneLogEnabled
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: controlPlaneLogProject: The Log Service project for control plane logs.
        /// </remarks>
        [JsiiProperty(name: "controlPlaneLogProject", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ControlPlaneLogProject
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: crAggregationEnabled: Whether to enable Kubernetes API for data plane cluster to access Istio resources (ASM instance v1.9.7.93 or later). Value:
        /// - true: Enable data plane cluster Kubernetes API to access Istio resources.
        /// - false: Data plane cluster Kubernetes API is not enabled to access Istio resources.
        /// Default value: false
        /// </remarks>
        [JsiiProperty(name: "crAggregationEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CrAggregationEnabled
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: customizedPrometheus: Specifies whether to use a self-managed Prometheus system. Valid values:
        /// - `true`: Uses a self-managed Prometheus system.
        /// - `false`: Does not use a self-managed Prometheus system.
        /// Default value: `false`.
        /// </remarks>
        [JsiiProperty(name: "customizedPrometheus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CustomizedPrometheus
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: customizedZipkin: Specifies whether to use a self-managed Zipkin system. Valid values:
        /// - `true`: Uses a self-managed Zipkin system.
        /// - `false`: Uses Tracing Analysis.
        /// Default value: `false`.
        /// </remarks>
        [JsiiProperty(name: "customizedZipkin", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CustomizedZipkin
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: dnsProxyingEnabled: Specifies whether to enable DNS proxy. Valid values:
        /// - `true`: Enables DNS proxy.
        /// - `false`: Disables DNS proxy.
        /// Default value: `false`.
        /// </remarks>
        [JsiiProperty(name: "dnsProxyingEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DnsProxyingEnabled
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: dubboFilterEnabled: Specifies whether to enable the Dubbo filter. Valid values:
        /// - `true`: Enables the Dubbo filter.
        /// - `false`: Disables the Dubbo filter.
        /// Default value: `false`.
        /// </remarks>
        [JsiiProperty(name: "dubboFilterEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DubboFilterEnabled
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: edition: The edition of the ASM instance.
        /// </remarks>
        [JsiiProperty(name: "edition", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Edition
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: enableAcmg: Specifies whether to enable ACMG.
        /// </remarks>
        [JsiiProperty(name: "enableAcmg", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnableAcmg
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: enableAmbient: Specifies whether to enable ambient mode.
        /// </remarks>
        [JsiiProperty(name: "enableAmbient", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnableAmbient
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: enableAudit: Specifies whether to enable the mesh audit feature. To enable this feature, make sure
        /// that you have activated Alibaba Cloud Log Service.
        /// Valid values: true and false. Default value: false.
        /// </remarks>
        [JsiiProperty(name: "enableAudit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnableAudit
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: enableCrHistory: Specifies whether to enable the history version management feature for Istio
        /// resources in ASM. Valid values:
        /// - `true`: Enables the history version management feature.
        /// - `false`: Disables the history version management feature.
        /// Default value: `false`.
        /// </remarks>
        [JsiiProperty(name: "enableCrHistory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnableCrHistory
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: enableSdsServer: Specifies whether to enable the Secret Discovery Service (SDS). Valid values:
        /// - `true`: Enables SDS.
        /// - `false`: Disables SDS.
        /// Default value: `false`.
        /// </remarks>
        [JsiiProperty(name: "enableSdsServer", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnableSdsServer
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: excludeInboundPorts: The inbound ports to exclude from traffic management.
        /// </remarks>
        [JsiiProperty(name: "excludeInboundPorts", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ExcludeInboundPorts
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: excludeIpRanges: The IP ranges to exclude from traffic management.
        /// </remarks>
        [JsiiProperty(name: "excludeIpRanges", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ExcludeIpRanges
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: excludeOutboundPorts: The outbound ports to exclude from traffic management.
        /// </remarks>
        [JsiiProperty(name: "excludeOutboundPorts", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ExcludeOutboundPorts
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: existingCaCert: The existing CA certificate.
        /// </remarks>
        [JsiiProperty(name: "existingCaCert", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ExistingCaCert
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: existingCaKey: The existing CA key.
        /// </remarks>
        [JsiiProperty(name: "existingCaKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ExistingCaKey
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: existingCaType: The type of the existing certificate:
        /// - 1: A self-signed certificate of Istiod. This corresponds to the istio-ca-secret
        /// secret in the istio-system namespace. If you use this type, you must also provide
        /// the `ExistingCaCert` and `ExsitingCaKey` parameters.
        /// - 2: An external certificate of Istiod. For more information, see plugin ca cert.
        /// This generally corresponds to the cacerts secret in the istio-system namespace.
        /// If you use this type, you must also provide the `ExisingRootCaCert` and
        /// `ExisingRootCaKey` parameters.
        /// </remarks>
        [JsiiProperty(name: "existingCaType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ExistingCaType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: existingRootCaCert: The existing root CA certificate.
        /// </remarks>
        [JsiiProperty(name: "existingRootCaCert", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ExistingRootCaCert
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: existingRootCaKey: The existing root CA key.
        /// </remarks>
        [JsiiProperty(name: "existingRootCaKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ExistingRootCaKey
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: filterGatewayClusterConfig: Specifies whether to enable gateway configuration filtering. Valid values:
        /// - `true`: Enables gateway configuration filtering.
        /// - `false`: Disables gateway configuration filtering.
        /// Default value: `false`.
        /// </remarks>
        [JsiiProperty(name: "filterGatewayClusterConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FilterGatewayClusterConfig
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: gatewayApiEnabled: Specifies whether to enable the Gateway API. Valid values:
        /// - `true`: Enables the Gateway API.
        /// - `false`: Disables the Gateway API.
        /// Default value: `false`.
        /// </remarks>
        [JsiiProperty(name: "gatewayApiEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? GatewayApiEnabled
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: guestCluster: When you create a Service Mesh instance, you can add a cluster to the instance.
        /// If you do not specify this parameter, no cluster is added. The cluster must be in
        /// the same VPC and vSwitch as the Service Mesh instance, and must have the same
        /// domain name.
        /// </remarks>
        [JsiiProperty(name: "guestCluster", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? GuestCluster
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: includeIpRanges: The IP address ranges that are allowed to access the proxy.
        /// </remarks>
        [JsiiProperty(name: "includeIpRanges", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IncludeIpRanges
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: istioVersion: The Istio version of the ASM instance.
        /// </remarks>
        [JsiiProperty(name: "istioVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IstioVersion
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: kialiEnabled: Specifies whether to enable the mesh topology feature. To enable this feature,
        /// you must first enable Prometheus monitoring. If Prometheus monitoring is
        /// disabled, this feature is forcibly disabled. Valid values:
        /// - `true`: Enables the mesh topology feature.
        /// - `false`: Disables the mesh topology feature.
        /// Default value: `false`.
        /// </remarks>
        [JsiiProperty(name: "kialiEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? KialiEnabled
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: localityLbConf: The locality load balancing configuration.
        /// </remarks>
        [JsiiProperty(name: "localityLbConf", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LocalityLbConf
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: localityLoadBalancing: Specifies whether to route traffic to the nearest instance.
        /// Valid values: true and false. Default value: false.
        /// </remarks>
        [JsiiProperty(name: "localityLoadBalancing", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LocalityLoadBalancing
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: mseEnabled: Specifies whether to enable Microservices Engine (MSE). Valid values:
        /// - `true`: Enables MSE.
        /// - `false`: Disables MSE.
        /// Default value: `false`.
        /// </remarks>
        [JsiiProperty(name: "mseEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MseEnabled
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: multiBufferEnabled: Specifies whether to enable TLS performance optimization that is based on
        /// MultiBuffer. Valid values:
        /// - `true`: Enables the feature.
        /// - `false`: Disables the feature.
        /// Default value: `true`.
        /// </remarks>
        [JsiiProperty(name: "multiBufferEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MultiBufferEnabled
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: multiBufferPollDelay: The synchronization period of the MultiBuffer enabling status. Default value:
        /// `30s`.
        /// </remarks>
        [JsiiProperty(name: "multiBufferPollDelay", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MultiBufferPollDelay
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: mysqlFilterEnabled: Specifies whether to enable the MySQL filter. Valid values:
        /// - `true`: Enables the MySQL filter.
        /// - `false`: Disables the MySQL filter.
        /// Default value: `false`.
        /// </remarks>
        [JsiiProperty(name: "mysqlFilterEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MysqlFilterEnabled
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: name: The name of the ASM instance.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Name
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: opa: OPA settings.
        /// </remarks>
        [JsiiProperty(name: "opa", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-asm.RosServiceMesh.OPAProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Opa
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: opaEnabled: Specifies whether to enable OPA. Valid values:
        /// - `true`: Enables OPA.
        /// - `false`: Disables OPA.
        /// Default value: `false`.
        /// </remarks>
        [JsiiProperty(name: "opaEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OpaEnabled
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: outboundTrafficPolicy: The outbound traffic policy of the ASM instance.
        /// </remarks>
        [JsiiProperty(name: "outboundTrafficPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OutboundTrafficPolicy
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: period: This parameter is valid only if you set `ChargeType` to `PrePay`. The
        /// subscription duration of the SLB instance. Unit: months. If you want to purchase
        /// the instance for one year, enter 12.
        /// </remarks>
        [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Period
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: pilotLoadBalancerSpec: The specification of the SLB instance that is bound to Istio Pilot of the control
        /// plane. Valid values: `slb.s1.small`, `slb.s2.small`, `slb.s2.medium`,
        /// `slb.s3.small`, `slb.s3.medium`, and `slb.s3.large`.
        /// </remarks>
        [JsiiProperty(name: "pilotLoadBalancerSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PilotLoadBalancerSpec
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: pilotPublicEip: Specifies whether to expose Istio Pilot to the Internet.
        /// Valid values: true and false. Default value: false.
        /// If you do not set this parameter, only clusters in the same VPC as the ASM instance
        /// can access Istio Pilot of the instance.
        /// </remarks>
        [JsiiProperty(name: "pilotPublicEip", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PilotPublicEip
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: playgroundScene: The playground scenario. If you specify this parameter, an ASM playground
        /// instance is created. Valid value:
        /// - ewmaLb: the exponentially weighted moving average (EWMA) load balancing
        /// scenario
        /// </remarks>
        [JsiiProperty(name: "playgroundScene", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PlaygroundScene
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: prometheusUrl: The URL for Prometheus.
        /// </remarks>
        [JsiiProperty(name: "prometheusUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PrometheusUrl
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: proxy: Proxy settings.
        /// </remarks>
        [JsiiProperty(name: "proxy", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-asm.RosServiceMesh.ProxyProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Proxy
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: telemetry: Specifies whether to enable Prometheus monitoring. We recommend that you use
        /// Managed Service for Prometheus. Valid values:
        /// - `true`: Enables Prometheus monitoring.
        /// - `false`: Disables Prometheus monitoring.
        /// Default value: `false`.
        /// </remarks>
        [JsiiProperty(name: "telemetry", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Telemetry
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: traceSampling: The sampling percentage of tracing.
        /// </remarks>
        [JsiiProperty(name: "traceSampling", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TraceSampling
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: tracing: Specifies whether to enable the tracing feature. To enable this feature, make sure
        /// that you have activated Alibaba Cloud Tracing Analysis.
        /// Valid values: true and false. Default value: false.
        /// </remarks>
        [JsiiProperty(name: "tracing", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Tracing
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: useExistingCa: Specifies whether to use an existing CA.
        /// </remarks>
        [JsiiProperty(name: "useExistingCa", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? UseExistingCa
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: webAssemblyFilterEnabled: Specifies whether to enable the WebAssembly filter. Valid values:
        /// - `true`: Enables the WebAssembly filter.
        /// - `false`: Disables the WebAssembly filter.
        /// Default value: `false`.
        /// </remarks>
        [JsiiProperty(name: "webAssemblyFilterEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? WebAssemblyFilterEnabled
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosServiceMesh`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-asm-servicemesh
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosServiceMeshProps), fullyQualifiedName: "@alicloud/ros-cdk-asm.RosServiceMeshProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Asm.IRosServiceMeshProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: vpcId: The ID of the virtual private cloud (VPC).
            /// </remarks>
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: vSwitches: The ID of the vSwitch, eg: ["vsw-xzegf5dndkbf4m6eg****"]
            /// </remarks>
            [JsiiProperty(name: "vSwitches", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VSwitches
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: accessLogEnabled: Specifies whether to enable access log. Valid values:
            /// - `true`: Enables access log.
            /// - `false`: Disables access log.
            /// Default value: `false`.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "accessLogEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AccessLogEnabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: accessLogFile: Enable and disable access logs. Value:
            /// - "" : Turn off access logs.
            /// - \/dev\/stdout: Enables access logging
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "accessLogFile", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AccessLogFile
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: accessLogFormat: The custom format of access logs. This parameter is available only if you enable
            /// access log. The value must be a JSON string that contains the following keys:
            /// authority_for, bytes_received, bytes_sent, downstream_local_address,
            /// downstream_remote_address, duration, istio_policy_status, method, path, protocol,
            /// requested_server_name, response_code, response_flags, route_name, start_time,
            /// trace_id, upstream_cluster, upstream_host, upstream_local_address,
            /// upstream_service_time, upstream_transport_failure_reason, user_agent, and
            /// x_forwarded_for.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "accessLogFormat", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AccessLogFormat
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: accessLogProject: The Log Service project for access logs.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "accessLogProject", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AccessLogProject
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: accessLogServiceEnabled: Whether Envoy's gRPC logging service (ALS) is enabled. Value:
            /// - true: Enables Envoy's gRPC logging service.
            /// - false: Envoy's gRPC logging service is not enabled.
            /// Default value: false
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "accessLogServiceEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AccessLogServiceEnabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: accessLogServiceHost: Address where Envoy's gRPC logging service (ALS) is enabled.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "accessLogServiceHost", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AccessLogServiceHost
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: accessLogServicePort: Port on which Envoy's gRPC logging service (ALS) is enabled.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "accessLogServicePort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AccessLogServicePort
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: apiServerLoadBalancerSpec: CLB specification for the APIServer binding. Value: Compact type I (slb.s1.small), Standard type I (slb.s2.small), Standard Type II (slb.s2.medium), high-order type I (slb.s3.small), high-order type II (slb.s3.medium), Super type I (slb.s3.large).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "apiServerLoadBalancerSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ApiServerLoadBalancerSpec
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: apiServerPublicEip: Specifies whether to expose the API server to the Internet.
            /// Valid values: true and false. Default value: false.
            /// If you do not set this parameter, the API server of clusters added to the ASM instance
            /// cannot be accessed from the Internet.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "apiServerPublicEip", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ApiServerPublicEip
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: auditProject: The name of the Log Service project that is used for mesh audit.
            /// Default value: mesh-log-{meshId}.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "auditProject", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AuditProject
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: autoRenew: If CLB is annual and monthly, whether it will be automatically renewed. Value:
            /// - true: Automatic renewal.
            /// - false: No automatic renewal.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoRenew
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: autoRenewPeriod: This parameter is valid only if you set `ChargeType` to `PrePay`. The
            /// auto-renewal period. If the subscription duration is less than one year, the
            /// value of this parameter indicates the number of months for which you want to
            /// renew the instance. If the subscription duration is more than one year, the value
            /// of this parameter indicates the number of years for which you want to renew the
            /// instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoRenewPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoRenewPeriod
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: certChain: The certificate chain from CaCert to RootCert contains at least two certificates.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "certChain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CertChain
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: chargeType: CLB payment type. Value:
            /// - PayOnDemand: pay-as-you-go type
            /// - PrePay: Annual and monthly.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "chargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ChargeType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: clusterSpec: Service grid instance specification, value:
            /// - standard: The standard version.
            /// - enterprise: Enterprise Edition
            /// - ultimate: ultimate.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "clusterSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ClusterSpec
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: configSourceEnabled: Whether to enable an external service registry. Value:
            /// - true: Enables the external service registry.
            /// - false: The external service registry is not enabled.
            /// Default value: false
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "configSourceEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ConfigSourceEnabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: configSourceNacosId: The Nacos ID for config source.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "configSourceNacosId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ConfigSourceNacosId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: controlPlaneLogEnabled: Specifies whether to enable control plane log collection. Valid values:
            /// - `true`: Enables control plane log collection.
            /// - `false`: Disables control plane log collection.
            /// Default value: `false`.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "controlPlaneLogEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ControlPlaneLogEnabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: controlPlaneLogProject: The Log Service project for control plane logs.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "controlPlaneLogProject", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ControlPlaneLogProject
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: crAggregationEnabled: Whether to enable Kubernetes API for data plane cluster to access Istio resources (ASM instance v1.9.7.93 or later). Value:
            /// - true: Enable data plane cluster Kubernetes API to access Istio resources.
            /// - false: Data plane cluster Kubernetes API is not enabled to access Istio resources.
            /// Default value: false
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "crAggregationEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CrAggregationEnabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: customizedPrometheus: Specifies whether to use a self-managed Prometheus system. Valid values:
            /// - `true`: Uses a self-managed Prometheus system.
            /// - `false`: Does not use a self-managed Prometheus system.
            /// Default value: `false`.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "customizedPrometheus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CustomizedPrometheus
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: customizedZipkin: Specifies whether to use a self-managed Zipkin system. Valid values:
            /// - `true`: Uses a self-managed Zipkin system.
            /// - `false`: Uses Tracing Analysis.
            /// Default value: `false`.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "customizedZipkin", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CustomizedZipkin
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: dnsProxyingEnabled: Specifies whether to enable DNS proxy. Valid values:
            /// - `true`: Enables DNS proxy.
            /// - `false`: Disables DNS proxy.
            /// Default value: `false`.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dnsProxyingEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DnsProxyingEnabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: dubboFilterEnabled: Specifies whether to enable the Dubbo filter. Valid values:
            /// - `true`: Enables the Dubbo filter.
            /// - `false`: Disables the Dubbo filter.
            /// Default value: `false`.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dubboFilterEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DubboFilterEnabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: edition: The edition of the ASM instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "edition", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Edition
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: enableAcmg: Specifies whether to enable ACMG.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enableAcmg", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableAcmg
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: enableAmbient: Specifies whether to enable ambient mode.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enableAmbient", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableAmbient
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: enableAudit: Specifies whether to enable the mesh audit feature. To enable this feature, make sure
            /// that you have activated Alibaba Cloud Log Service.
            /// Valid values: true and false. Default value: false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enableAudit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableAudit
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: enableCrHistory: Specifies whether to enable the history version management feature for Istio
            /// resources in ASM. Valid values:
            /// - `true`: Enables the history version management feature.
            /// - `false`: Disables the history version management feature.
            /// Default value: `false`.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enableCrHistory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableCrHistory
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: enableSdsServer: Specifies whether to enable the Secret Discovery Service (SDS). Valid values:
            /// - `true`: Enables SDS.
            /// - `false`: Disables SDS.
            /// Default value: `false`.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enableSdsServer", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableSdsServer
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: excludeInboundPorts: The inbound ports to exclude from traffic management.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "excludeInboundPorts", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ExcludeInboundPorts
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: excludeIpRanges: The IP ranges to exclude from traffic management.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "excludeIpRanges", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ExcludeIpRanges
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: excludeOutboundPorts: The outbound ports to exclude from traffic management.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "excludeOutboundPorts", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ExcludeOutboundPorts
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: existingCaCert: The existing CA certificate.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "existingCaCert", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ExistingCaCert
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: existingCaKey: The existing CA key.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "existingCaKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ExistingCaKey
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: existingCaType: The type of the existing certificate:
            /// - 1: A self-signed certificate of Istiod. This corresponds to the istio-ca-secret
            /// secret in the istio-system namespace. If you use this type, you must also provide
            /// the `ExistingCaCert` and `ExsitingCaKey` parameters.
            /// - 2: An external certificate of Istiod. For more information, see plugin ca cert.
            /// This generally corresponds to the cacerts secret in the istio-system namespace.
            /// If you use this type, you must also provide the `ExisingRootCaCert` and
            /// `ExisingRootCaKey` parameters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "existingCaType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ExistingCaType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: existingRootCaCert: The existing root CA certificate.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "existingRootCaCert", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ExistingRootCaCert
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: existingRootCaKey: The existing root CA key.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "existingRootCaKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ExistingRootCaKey
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: filterGatewayClusterConfig: Specifies whether to enable gateway configuration filtering. Valid values:
            /// - `true`: Enables gateway configuration filtering.
            /// - `false`: Disables gateway configuration filtering.
            /// Default value: `false`.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "filterGatewayClusterConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FilterGatewayClusterConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: gatewayApiEnabled: Specifies whether to enable the Gateway API. Valid values:
            /// - `true`: Enables the Gateway API.
            /// - `false`: Disables the Gateway API.
            /// Default value: `false`.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "gatewayApiEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? GatewayApiEnabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: guestCluster: When you create a Service Mesh instance, you can add a cluster to the instance.
            /// If you do not specify this parameter, no cluster is added. The cluster must be in
            /// the same VPC and vSwitch as the Service Mesh instance, and must have the same
            /// domain name.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "guestCluster", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? GuestCluster
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: includeIpRanges: The IP address ranges that are allowed to access the proxy.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "includeIpRanges", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IncludeIpRanges
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: istioVersion: The Istio version of the ASM instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "istioVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IstioVersion
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: kialiEnabled: Specifies whether to enable the mesh topology feature. To enable this feature,
            /// you must first enable Prometheus monitoring. If Prometheus monitoring is
            /// disabled, this feature is forcibly disabled. Valid values:
            /// - `true`: Enables the mesh topology feature.
            /// - `false`: Disables the mesh topology feature.
            /// Default value: `false`.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "kialiEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? KialiEnabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: localityLbConf: The locality load balancing configuration.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "localityLbConf", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LocalityLbConf
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: localityLoadBalancing: Specifies whether to route traffic to the nearest instance.
            /// Valid values: true and false. Default value: false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "localityLoadBalancing", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LocalityLoadBalancing
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: mseEnabled: Specifies whether to enable Microservices Engine (MSE). Valid values:
            /// - `true`: Enables MSE.
            /// - `false`: Disables MSE.
            /// Default value: `false`.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "mseEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MseEnabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: multiBufferEnabled: Specifies whether to enable TLS performance optimization that is based on
            /// MultiBuffer. Valid values:
            /// - `true`: Enables the feature.
            /// - `false`: Disables the feature.
            /// Default value: `true`.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "multiBufferEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MultiBufferEnabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: multiBufferPollDelay: The synchronization period of the MultiBuffer enabling status. Default value:
            /// `30s`.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "multiBufferPollDelay", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MultiBufferPollDelay
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: mysqlFilterEnabled: Specifies whether to enable the MySQL filter. Valid values:
            /// - `true`: Enables the MySQL filter.
            /// - `false`: Disables the MySQL filter.
            /// Default value: `false`.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "mysqlFilterEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MysqlFilterEnabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: name: The name of the ASM instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Name
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: opa: OPA settings.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "opa", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-asm.RosServiceMesh.OPAProperty\"}]}}", isOptional: true)]
            public object? Opa
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: opaEnabled: Specifies whether to enable OPA. Valid values:
            /// - `true`: Enables OPA.
            /// - `false`: Disables OPA.
            /// Default value: `false`.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "opaEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OpaEnabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: outboundTrafficPolicy: The outbound traffic policy of the ASM instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "outboundTrafficPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OutboundTrafficPolicy
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: period: This parameter is valid only if you set `ChargeType` to `PrePay`. The
            /// subscription duration of the SLB instance. Unit: months. If you want to purchase
            /// the instance for one year, enter 12.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Period
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: pilotLoadBalancerSpec: The specification of the SLB instance that is bound to Istio Pilot of the control
            /// plane. Valid values: `slb.s1.small`, `slb.s2.small`, `slb.s2.medium`,
            /// `slb.s3.small`, `slb.s3.medium`, and `slb.s3.large`.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "pilotLoadBalancerSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PilotLoadBalancerSpec
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: pilotPublicEip: Specifies whether to expose Istio Pilot to the Internet.
            /// Valid values: true and false. Default value: false.
            /// If you do not set this parameter, only clusters in the same VPC as the ASM instance
            /// can access Istio Pilot of the instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "pilotPublicEip", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PilotPublicEip
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: playgroundScene: The playground scenario. If you specify this parameter, an ASM playground
            /// instance is created. Valid value:
            /// - ewmaLb: the exponentially weighted moving average (EWMA) load balancing
            /// scenario
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "playgroundScene", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PlaygroundScene
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: prometheusUrl: The URL for Prometheus.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "prometheusUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PrometheusUrl
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: proxy: Proxy settings.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "proxy", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-asm.RosServiceMesh.ProxyProperty\"}]}}", isOptional: true)]
            public object? Proxy
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: telemetry: Specifies whether to enable Prometheus monitoring. We recommend that you use
            /// Managed Service for Prometheus. Valid values:
            /// - `true`: Enables Prometheus monitoring.
            /// - `false`: Disables Prometheus monitoring.
            /// Default value: `false`.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "telemetry", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Telemetry
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: traceSampling: The sampling percentage of tracing.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "traceSampling", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TraceSampling
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: tracing: Specifies whether to enable the tracing feature. To enable this feature, make sure
            /// that you have activated Alibaba Cloud Tracing Analysis.
            /// Valid values: true and false. Default value: false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tracing", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Tracing
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: useExistingCa: Specifies whether to use an existing CA.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "useExistingCa", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? UseExistingCa
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: webAssemblyFilterEnabled: Specifies whether to enable the WebAssembly filter. Valid values:
            /// - `true`: Enables the WebAssembly filter.
            /// - `false`: Disables the WebAssembly filter.
            /// Default value: `false`.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "webAssemblyFilterEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? WebAssemblyFilterEnabled
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
