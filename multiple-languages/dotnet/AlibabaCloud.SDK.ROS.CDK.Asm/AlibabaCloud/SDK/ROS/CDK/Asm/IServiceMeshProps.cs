using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Asm
{
    /// <summary>Properties for defining a `ServiceMesh`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-asm-servicemesh
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IServiceMeshProps), fullyQualifiedName: "@alicloud/ros-cdk-asm.ServiceMeshProps")]
    public interface IServiceMeshProps
    {
        /// <summary>Property vpcId: The ID of the virtual private cloud (VPC).</summary>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VpcId
        {
            get;
        }

        /// <summary>Property vSwitches: The ID of the vSwitch, eg: ["vsw-xzegf5dndkbf4m6eg****"].</summary>
        [JsiiProperty(name: "vSwitches", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VSwitches
        {
            get;
        }

        /// <summary>Property accessLogEnabled: Specifies whether to enable access log.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description><c>true</c>: Enables access log.</description>
        /// <description><c>false</c>: Disables access log.
        /// Default value: <c>false</c>.</description>
        /// </list>
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

        /// <summary>Property accessLogFile: Enable and disable access logs.</summary>
        /// <remarks>
        /// Value:
        ///
        /// <list type="bullet">
        /// <description>"" : Turn off access logs.</description>
        /// <description>/dev/stdout: Enables access logging</description>
        /// </list>
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

        /// <summary>Property accessLogFormat: The custom format of access logs.</summary>
        /// <remarks>
        /// This parameter is available only if you enable
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

        /// <summary>Property accessLogProject: The Log Service project for access logs.</summary>
        [JsiiProperty(name: "accessLogProject", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AccessLogProject
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property accessLogServiceEnabled: Whether Envoy's gRPC logging service (ALS) is enabled.</summary>
        /// <remarks>
        /// Value:
        ///
        /// <list type="bullet">
        /// <description>true: Enables Envoy's gRPC logging service.</description>
        /// <description>false: Envoy's gRPC logging service is not enabled.
        /// Default value: false</description>
        /// </list>
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

        /// <summary>Property accessLogServiceHost: Address where Envoy's gRPC logging service (ALS) is enabled.</summary>
        [JsiiProperty(name: "accessLogServiceHost", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AccessLogServiceHost
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property accessLogServicePort: Port on which Envoy's gRPC logging service (ALS) is enabled.</summary>
        [JsiiProperty(name: "accessLogServicePort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AccessLogServicePort
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property apiServerLoadBalancerSpec: CLB specification for the APIServer binding.</summary>
        /// <remarks>
        /// Value: Compact type I (slb.s1.small), Standard type I (slb.s2.small), Standard Type II (slb.s2.medium), high-order type I (slb.s3.small), high-order type II (slb.s3.medium), Super type I (slb.s3.large).
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

        /// <summary>Property apiServerPublicEip: Specifies whether to expose the API server to the Internet.</summary>
        /// <remarks>
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

        /// <summary>Property auditProject: The name of the Log Service project that is used for mesh audit.</summary>
        /// <remarks>
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

        /// <summary>Property autoRenew: If CLB is annual and monthly, whether it will be automatically renewed.</summary>
        /// <remarks>
        /// Value:
        ///
        /// <list type="bullet">
        /// <description>true: Automatic renewal.</description>
        /// <description>false: No automatic renewal.</description>
        /// </list>
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

        /// <summary>Property autoRenewPeriod: This parameter is valid only if you set `ChargeType` to `PrePay`.</summary>
        /// <remarks>
        /// The
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

        /// <summary>Property certChain: The certificate chain from CaCert to RootCert contains at least two certificates.</summary>
        [JsiiProperty(name: "certChain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CertChain
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property chargeType: CLB payment type.</summary>
        /// <remarks>
        /// Value:
        ///
        /// <list type="bullet">
        /// <description>PayOnDemand: pay-as-you-go type</description>
        /// <description>PrePay: Annual and monthly.</description>
        /// </list>
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

        /// <summary>Property clusterSpec: Service grid instance specification, value: - standard: The standard version.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description>enterprise: Enterprise Edition</description>
        /// <description>ultimate: ultimate.</description>
        /// </list>
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

        /// <summary>Property configSourceEnabled: Whether to enable an external service registry.</summary>
        /// <remarks>
        /// Value:
        ///
        /// <list type="bullet">
        /// <description>true: Enables the external service registry.</description>
        /// <description>false: The external service registry is not enabled.
        /// Default value: false</description>
        /// </list>
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

        /// <summary>Property configSourceNacosId: The Nacos ID for config source.</summary>
        [JsiiProperty(name: "configSourceNacosId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ConfigSourceNacosId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property controlPlaneLogEnabled: Specifies whether to enable control plane log collection.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description><c>true</c>: Enables control plane log collection.</description>
        /// <description><c>false</c>: Disables control plane log collection.
        /// Default value: <c>false</c>.</description>
        /// </list>
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

        /// <summary>Property controlPlaneLogProject: The Log Service project for control plane logs.</summary>
        [JsiiProperty(name: "controlPlaneLogProject", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ControlPlaneLogProject
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property crAggregationEnabled: Whether to enable Kubernetes API for data plane cluster to access Istio resources (ASM instance v1.9.7.93 or later). Value: - true: Enable data plane cluster Kubernetes API to access Istio resources. - false: Data plane cluster Kubernetes API is not enabled to access Istio resources. Default value: false.</summary>
        [JsiiProperty(name: "crAggregationEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CrAggregationEnabled
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property customizedPrometheus: Specifies whether to use a self-managed Prometheus system.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description><c>true</c>: Uses a self-managed Prometheus system.</description>
        /// <description><c>false</c>: Does not use a self-managed Prometheus system.
        /// Default value: <c>false</c>.</description>
        /// </list>
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

        /// <summary>Property customizedZipkin: Specifies whether to use a self-managed Zipkin system.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description><c>true</c>: Uses a self-managed Zipkin system.</description>
        /// <description><c>false</c>: Uses Tracing Analysis.
        /// Default value: <c>false</c>.</description>
        /// </list>
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

        /// <summary>Property dnsProxyingEnabled: Specifies whether to enable DNS proxy.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description><c>true</c>: Enables DNS proxy.</description>
        /// <description><c>false</c>: Disables DNS proxy.
        /// Default value: <c>false</c>.</description>
        /// </list>
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

        /// <summary>Property dubboFilterEnabled: Specifies whether to enable the Dubbo filter.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description><c>true</c>: Enables the Dubbo filter.</description>
        /// <description><c>false</c>: Disables the Dubbo filter.
        /// Default value: <c>false</c>.</description>
        /// </list>
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

        /// <summary>Property edition: The edition of the ASM instance.</summary>
        [JsiiProperty(name: "edition", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Edition
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property enableAcmg: Specifies whether to enable ACMG.</summary>
        [JsiiProperty(name: "enableAcmg", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnableAcmg
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property enableAmbient: Specifies whether to enable ambient mode.</summary>
        [JsiiProperty(name: "enableAmbient", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnableAmbient
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property enableAudit: Specifies whether to enable the mesh audit feature.</summary>
        /// <remarks>
        /// To enable this feature, make sure
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

        /// <summary>Property enableCrHistory: Specifies whether to enable the history version management feature for Istio resources in ASM.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description><c>true</c>: Enables the history version management feature.</description>
        /// <description><c>false</c>: Disables the history version management feature.
        /// Default value: <c>false</c>.</description>
        /// </list>
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

        /// <summary>Property enableSdsServer: Specifies whether to enable the Secret Discovery Service (SDS).</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description><c>true</c>: Enables SDS.</description>
        /// <description><c>false</c>: Disables SDS.
        /// Default value: <c>false</c>.</description>
        /// </list>
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

        /// <summary>Property excludeInboundPorts: The inbound ports to exclude from traffic management.</summary>
        [JsiiProperty(name: "excludeInboundPorts", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ExcludeInboundPorts
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property excludeIpRanges: The IP ranges to exclude from traffic management.</summary>
        [JsiiProperty(name: "excludeIpRanges", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ExcludeIpRanges
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property excludeOutboundPorts: The outbound ports to exclude from traffic management.</summary>
        [JsiiProperty(name: "excludeOutboundPorts", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ExcludeOutboundPorts
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property existingCaCert: The existing CA certificate.</summary>
        [JsiiProperty(name: "existingCaCert", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ExistingCaCert
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property existingCaKey: The existing CA key.</summary>
        [JsiiProperty(name: "existingCaKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ExistingCaKey
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property existingCaType: The type of the existing certificate: - 1: A self-signed certificate of Istiod.</summary>
        /// <remarks>
        /// This corresponds to the istio-ca-secret
        /// secret in the istio-system namespace. If you use this type, you must also provide
        /// the <c>ExistingCaCert</c> and <c>ExsitingCaKey</c> parameters.
        ///
        /// <list type="bullet">
        /// <description>2: An external certificate of Istiod. For more information, see plugin ca cert.
        /// This generally corresponds to the cacerts secret in the istio-system namespace.
        /// If you use this type, you must also provide the <c>ExisingRootCaCert</c> and
        /// <c>ExisingRootCaKey</c> parameters.</description>
        /// </list>
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

        /// <summary>Property existingRootCaCert: The existing root CA certificate.</summary>
        [JsiiProperty(name: "existingRootCaCert", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ExistingRootCaCert
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property existingRootCaKey: The existing root CA key.</summary>
        [JsiiProperty(name: "existingRootCaKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ExistingRootCaKey
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property filterGatewayClusterConfig: Specifies whether to enable gateway configuration filtering.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description><c>true</c>: Enables gateway configuration filtering.</description>
        /// <description><c>false</c>: Disables gateway configuration filtering.
        /// Default value: <c>false</c>.</description>
        /// </list>
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

        /// <summary>Property gatewayApiEnabled: Specifies whether to enable the Gateway API.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description><c>true</c>: Enables the Gateway API.</description>
        /// <description><c>false</c>: Disables the Gateway API.
        /// Default value: <c>false</c>.</description>
        /// </list>
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

        /// <summary>Property guestCluster: When you create a Service Mesh instance, you can add a cluster to the instance.</summary>
        /// <remarks>
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

        /// <summary>Property includeIpRanges: The IP address ranges that are allowed to access the proxy.</summary>
        [JsiiProperty(name: "includeIpRanges", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IncludeIpRanges
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property istioVersion: The Istio version of the ASM instance.</summary>
        [JsiiProperty(name: "istioVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IstioVersion
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property kialiEnabled: Specifies whether to enable the mesh topology feature.</summary>
        /// <remarks>
        /// To enable this feature,
        /// you must first enable Prometheus monitoring. If Prometheus monitoring is
        /// disabled, this feature is forcibly disabled. Valid values:
        ///
        /// <list type="bullet">
        /// <description><c>true</c>: Enables the mesh topology feature.</description>
        /// <description><c>false</c>: Disables the mesh topology feature.
        /// Default value: <c>false</c>.</description>
        /// </list>
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

        /// <summary>Property localityLbConf: The locality load balancing configuration.</summary>
        [JsiiProperty(name: "localityLbConf", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LocalityLbConf
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property localityLoadBalancing: Specifies whether to route traffic to the nearest instance.</summary>
        /// <remarks>
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

        /// <summary>Property mseEnabled: Specifies whether to enable Microservices Engine (MSE).</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description><c>true</c>: Enables MSE.</description>
        /// <description><c>false</c>: Disables MSE.
        /// Default value: <c>false</c>.</description>
        /// </list>
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

        /// <summary>Property multiBufferEnabled: Specifies whether to enable TLS performance optimization that is based on MultiBuffer.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description><c>true</c>: Enables the feature.</description>
        /// <description><c>false</c>: Disables the feature.
        /// Default value: <c>true</c>.</description>
        /// </list>
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

        /// <summary>Property multiBufferPollDelay: The synchronization period of the MultiBuffer enabling status.</summary>
        /// <remarks>
        /// Default value:
        /// <c>30s</c>.
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

        /// <summary>Property mysqlFilterEnabled: Specifies whether to enable the MySQL filter.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description><c>true</c>: Enables the MySQL filter.</description>
        /// <description><c>false</c>: Disables the MySQL filter.
        /// Default value: <c>false</c>.</description>
        /// </list>
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

        /// <summary>Property name: The name of the ASM instance.</summary>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Name
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property opa: OPA settings.</summary>
        [JsiiProperty(name: "opa", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-asm.RosServiceMesh.OPAProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Opa
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property opaEnabled: Specifies whether to enable OPA.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description><c>true</c>: Enables OPA.</description>
        /// <description><c>false</c>: Disables OPA.
        /// Default value: <c>false</c>.</description>
        /// </list>
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

        /// <summary>Property outboundTrafficPolicy: The outbound traffic policy of the ASM instance.</summary>
        [JsiiProperty(name: "outboundTrafficPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OutboundTrafficPolicy
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property period: This parameter is valid only if you set `ChargeType` to `PrePay`.</summary>
        /// <remarks>
        /// The
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

        /// <summary>Property pilotLoadBalancerSpec: The specification of the SLB instance that is bound to Istio Pilot of the control plane.</summary>
        /// <remarks>
        /// Valid values: <c>slb.s1.small</c>, <c>slb.s2.small</c>, <c>slb.s2.medium</c>,
        /// <c>slb.s3.small</c>, <c>slb.s3.medium</c>, and <c>slb.s3.large</c>.
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

        /// <summary>Property pilotPublicEip: Specifies whether to expose Istio Pilot to the Internet.</summary>
        /// <remarks>
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

        /// <summary>Property playgroundScene: The playground scenario.</summary>
        /// <remarks>
        /// If you specify this parameter, an ASM playground
        /// instance is created. Valid value:
        ///
        /// <list type="bullet">
        /// <description>ewmaLb: the exponentially weighted moving average (EWMA) load balancing
        /// scenario</description>
        /// </list>
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

        /// <summary>Property prometheusUrl: The URL for Prometheus.</summary>
        [JsiiProperty(name: "prometheusUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PrometheusUrl
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property proxy: Proxy settings.</summary>
        [JsiiProperty(name: "proxy", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-asm.RosServiceMesh.ProxyProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Proxy
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property telemetry: Specifies whether to enable Prometheus monitoring.</summary>
        /// <remarks>
        /// We recommend that you use
        /// Managed Service for Prometheus. Valid values:
        ///
        /// <list type="bullet">
        /// <description><c>true</c>: Enables Prometheus monitoring.</description>
        /// <description><c>false</c>: Disables Prometheus monitoring.
        /// Default value: <c>false</c>.</description>
        /// </list>
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

        /// <summary>Property traceSampling: The sampling percentage of tracing.</summary>
        [JsiiProperty(name: "traceSampling", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TraceSampling
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tracing: Specifies whether to enable the tracing feature.</summary>
        /// <remarks>
        /// To enable this feature, make sure
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

        /// <summary>Property useExistingCa: Specifies whether to use an existing CA.</summary>
        [JsiiProperty(name: "useExistingCa", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? UseExistingCa
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property webAssemblyFilterEnabled: Specifies whether to enable the WebAssembly filter.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description><c>true</c>: Enables the WebAssembly filter.</description>
        /// <description><c>false</c>: Disables the WebAssembly filter.
        /// Default value: <c>false</c>.</description>
        /// </list>
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

        /// <summary>Properties for defining a `ServiceMesh`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-asm-servicemesh
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IServiceMeshProps), fullyQualifiedName: "@alicloud/ros-cdk-asm.ServiceMeshProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Asm.IServiceMeshProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property vpcId: The ID of the virtual private cloud (VPC).</summary>
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property vSwitches: The ID of the vSwitch, eg: ["vsw-xzegf5dndkbf4m6eg****"].</summary>
            [JsiiProperty(name: "vSwitches", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VSwitches
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property accessLogEnabled: Specifies whether to enable access log.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description><c>true</c>: Enables access log.</description>
            /// <description><c>false</c>: Disables access log.
            /// Default value: <c>false</c>.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "accessLogEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AccessLogEnabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property accessLogFile: Enable and disable access logs.</summary>
            /// <remarks>
            /// Value:
            ///
            /// <list type="bullet">
            /// <description>"" : Turn off access logs.</description>
            /// <description>/dev/stdout: Enables access logging</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "accessLogFile", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AccessLogFile
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property accessLogFormat: The custom format of access logs.</summary>
            /// <remarks>
            /// This parameter is available only if you enable
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

            /// <summary>Property accessLogProject: The Log Service project for access logs.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "accessLogProject", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AccessLogProject
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property accessLogServiceEnabled: Whether Envoy's gRPC logging service (ALS) is enabled.</summary>
            /// <remarks>
            /// Value:
            ///
            /// <list type="bullet">
            /// <description>true: Enables Envoy's gRPC logging service.</description>
            /// <description>false: Envoy's gRPC logging service is not enabled.
            /// Default value: false</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "accessLogServiceEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AccessLogServiceEnabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property accessLogServiceHost: Address where Envoy's gRPC logging service (ALS) is enabled.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "accessLogServiceHost", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AccessLogServiceHost
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property accessLogServicePort: Port on which Envoy's gRPC logging service (ALS) is enabled.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "accessLogServicePort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AccessLogServicePort
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property apiServerLoadBalancerSpec: CLB specification for the APIServer binding.</summary>
            /// <remarks>
            /// Value: Compact type I (slb.s1.small), Standard type I (slb.s2.small), Standard Type II (slb.s2.medium), high-order type I (slb.s3.small), high-order type II (slb.s3.medium), Super type I (slb.s3.large).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "apiServerLoadBalancerSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ApiServerLoadBalancerSpec
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property apiServerPublicEip: Specifies whether to expose the API server to the Internet.</summary>
            /// <remarks>
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

            /// <summary>Property auditProject: The name of the Log Service project that is used for mesh audit.</summary>
            /// <remarks>
            /// Default value: mesh-log-{meshId}.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "auditProject", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AuditProject
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property autoRenew: If CLB is annual and monthly, whether it will be automatically renewed.</summary>
            /// <remarks>
            /// Value:
            ///
            /// <list type="bullet">
            /// <description>true: Automatic renewal.</description>
            /// <description>false: No automatic renewal.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoRenew
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property autoRenewPeriod: This parameter is valid only if you set `ChargeType` to `PrePay`.</summary>
            /// <remarks>
            /// The
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

            /// <summary>Property certChain: The certificate chain from CaCert to RootCert contains at least two certificates.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "certChain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CertChain
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property chargeType: CLB payment type.</summary>
            /// <remarks>
            /// Value:
            ///
            /// <list type="bullet">
            /// <description>PayOnDemand: pay-as-you-go type</description>
            /// <description>PrePay: Annual and monthly.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "chargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ChargeType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property clusterSpec: Service grid instance specification, value: - standard: The standard version.</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description>enterprise: Enterprise Edition</description>
            /// <description>ultimate: ultimate.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "clusterSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ClusterSpec
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property configSourceEnabled: Whether to enable an external service registry.</summary>
            /// <remarks>
            /// Value:
            ///
            /// <list type="bullet">
            /// <description>true: Enables the external service registry.</description>
            /// <description>false: The external service registry is not enabled.
            /// Default value: false</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "configSourceEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ConfigSourceEnabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property configSourceNacosId: The Nacos ID for config source.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "configSourceNacosId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ConfigSourceNacosId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property controlPlaneLogEnabled: Specifies whether to enable control plane log collection.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description><c>true</c>: Enables control plane log collection.</description>
            /// <description><c>false</c>: Disables control plane log collection.
            /// Default value: <c>false</c>.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "controlPlaneLogEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ControlPlaneLogEnabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property controlPlaneLogProject: The Log Service project for control plane logs.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "controlPlaneLogProject", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ControlPlaneLogProject
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property crAggregationEnabled: Whether to enable Kubernetes API for data plane cluster to access Istio resources (ASM instance v1.9.7.93 or later). Value: - true: Enable data plane cluster Kubernetes API to access Istio resources. - false: Data plane cluster Kubernetes API is not enabled to access Istio resources. Default value: false.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "crAggregationEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CrAggregationEnabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property customizedPrometheus: Specifies whether to use a self-managed Prometheus system.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description><c>true</c>: Uses a self-managed Prometheus system.</description>
            /// <description><c>false</c>: Does not use a self-managed Prometheus system.
            /// Default value: <c>false</c>.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "customizedPrometheus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CustomizedPrometheus
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property customizedZipkin: Specifies whether to use a self-managed Zipkin system.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description><c>true</c>: Uses a self-managed Zipkin system.</description>
            /// <description><c>false</c>: Uses Tracing Analysis.
            /// Default value: <c>false</c>.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "customizedZipkin", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CustomizedZipkin
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dnsProxyingEnabled: Specifies whether to enable DNS proxy.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description><c>true</c>: Enables DNS proxy.</description>
            /// <description><c>false</c>: Disables DNS proxy.
            /// Default value: <c>false</c>.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dnsProxyingEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DnsProxyingEnabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dubboFilterEnabled: Specifies whether to enable the Dubbo filter.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description><c>true</c>: Enables the Dubbo filter.</description>
            /// <description><c>false</c>: Disables the Dubbo filter.
            /// Default value: <c>false</c>.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dubboFilterEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DubboFilterEnabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property edition: The edition of the ASM instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "edition", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Edition
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property enableAcmg: Specifies whether to enable ACMG.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "enableAcmg", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableAcmg
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property enableAmbient: Specifies whether to enable ambient mode.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "enableAmbient", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableAmbient
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property enableAudit: Specifies whether to enable the mesh audit feature.</summary>
            /// <remarks>
            /// To enable this feature, make sure
            /// that you have activated Alibaba Cloud Log Service.
            /// Valid values: true and false. Default value: false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enableAudit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableAudit
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property enableCrHistory: Specifies whether to enable the history version management feature for Istio resources in ASM.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description><c>true</c>: Enables the history version management feature.</description>
            /// <description><c>false</c>: Disables the history version management feature.
            /// Default value: <c>false</c>.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enableCrHistory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableCrHistory
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property enableSdsServer: Specifies whether to enable the Secret Discovery Service (SDS).</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description><c>true</c>: Enables SDS.</description>
            /// <description><c>false</c>: Disables SDS.
            /// Default value: <c>false</c>.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enableSdsServer", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableSdsServer
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property excludeInboundPorts: The inbound ports to exclude from traffic management.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "excludeInboundPorts", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ExcludeInboundPorts
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property excludeIpRanges: The IP ranges to exclude from traffic management.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "excludeIpRanges", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ExcludeIpRanges
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property excludeOutboundPorts: The outbound ports to exclude from traffic management.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "excludeOutboundPorts", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ExcludeOutboundPorts
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property existingCaCert: The existing CA certificate.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "existingCaCert", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ExistingCaCert
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property existingCaKey: The existing CA key.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "existingCaKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ExistingCaKey
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property existingCaType: The type of the existing certificate: - 1: A self-signed certificate of Istiod.</summary>
            /// <remarks>
            /// This corresponds to the istio-ca-secret
            /// secret in the istio-system namespace. If you use this type, you must also provide
            /// the <c>ExistingCaCert</c> and <c>ExsitingCaKey</c> parameters.
            ///
            /// <list type="bullet">
            /// <description>2: An external certificate of Istiod. For more information, see plugin ca cert.
            /// This generally corresponds to the cacerts secret in the istio-system namespace.
            /// If you use this type, you must also provide the <c>ExisingRootCaCert</c> and
            /// <c>ExisingRootCaKey</c> parameters.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "existingCaType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ExistingCaType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property existingRootCaCert: The existing root CA certificate.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "existingRootCaCert", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ExistingRootCaCert
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property existingRootCaKey: The existing root CA key.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "existingRootCaKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ExistingRootCaKey
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property filterGatewayClusterConfig: Specifies whether to enable gateway configuration filtering.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description><c>true</c>: Enables gateway configuration filtering.</description>
            /// <description><c>false</c>: Disables gateway configuration filtering.
            /// Default value: <c>false</c>.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "filterGatewayClusterConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FilterGatewayClusterConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property gatewayApiEnabled: Specifies whether to enable the Gateway API.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description><c>true</c>: Enables the Gateway API.</description>
            /// <description><c>false</c>: Disables the Gateway API.
            /// Default value: <c>false</c>.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "gatewayApiEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? GatewayApiEnabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property guestCluster: When you create a Service Mesh instance, you can add a cluster to the instance.</summary>
            /// <remarks>
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

            /// <summary>Property includeIpRanges: The IP address ranges that are allowed to access the proxy.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "includeIpRanges", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IncludeIpRanges
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property istioVersion: The Istio version of the ASM instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "istioVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IstioVersion
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property kialiEnabled: Specifies whether to enable the mesh topology feature.</summary>
            /// <remarks>
            /// To enable this feature,
            /// you must first enable Prometheus monitoring. If Prometheus monitoring is
            /// disabled, this feature is forcibly disabled. Valid values:
            ///
            /// <list type="bullet">
            /// <description><c>true</c>: Enables the mesh topology feature.</description>
            /// <description><c>false</c>: Disables the mesh topology feature.
            /// Default value: <c>false</c>.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "kialiEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? KialiEnabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property localityLbConf: The locality load balancing configuration.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "localityLbConf", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LocalityLbConf
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property localityLoadBalancing: Specifies whether to route traffic to the nearest instance.</summary>
            /// <remarks>
            /// Valid values: true and false. Default value: false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "localityLoadBalancing", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LocalityLoadBalancing
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property mseEnabled: Specifies whether to enable Microservices Engine (MSE).</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description><c>true</c>: Enables MSE.</description>
            /// <description><c>false</c>: Disables MSE.
            /// Default value: <c>false</c>.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "mseEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MseEnabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property multiBufferEnabled: Specifies whether to enable TLS performance optimization that is based on MultiBuffer.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description><c>true</c>: Enables the feature.</description>
            /// <description><c>false</c>: Disables the feature.
            /// Default value: <c>true</c>.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "multiBufferEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MultiBufferEnabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property multiBufferPollDelay: The synchronization period of the MultiBuffer enabling status.</summary>
            /// <remarks>
            /// Default value:
            /// <c>30s</c>.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "multiBufferPollDelay", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MultiBufferPollDelay
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property mysqlFilterEnabled: Specifies whether to enable the MySQL filter.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description><c>true</c>: Enables the MySQL filter.</description>
            /// <description><c>false</c>: Disables the MySQL filter.
            /// Default value: <c>false</c>.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "mysqlFilterEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MysqlFilterEnabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property name: The name of the ASM instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Name
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property opa: OPA settings.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "opa", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-asm.RosServiceMesh.OPAProperty\"}]}}", isOptional: true)]
            public object? Opa
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property opaEnabled: Specifies whether to enable OPA.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description><c>true</c>: Enables OPA.</description>
            /// <description><c>false</c>: Disables OPA.
            /// Default value: <c>false</c>.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "opaEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OpaEnabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property outboundTrafficPolicy: The outbound traffic policy of the ASM instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "outboundTrafficPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OutboundTrafficPolicy
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property period: This parameter is valid only if you set `ChargeType` to `PrePay`.</summary>
            /// <remarks>
            /// The
            /// subscription duration of the SLB instance. Unit: months. If you want to purchase
            /// the instance for one year, enter 12.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Period
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property pilotLoadBalancerSpec: The specification of the SLB instance that is bound to Istio Pilot of the control plane.</summary>
            /// <remarks>
            /// Valid values: <c>slb.s1.small</c>, <c>slb.s2.small</c>, <c>slb.s2.medium</c>,
            /// <c>slb.s3.small</c>, <c>slb.s3.medium</c>, and <c>slb.s3.large</c>.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "pilotLoadBalancerSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PilotLoadBalancerSpec
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property pilotPublicEip: Specifies whether to expose Istio Pilot to the Internet.</summary>
            /// <remarks>
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

            /// <summary>Property playgroundScene: The playground scenario.</summary>
            /// <remarks>
            /// If you specify this parameter, an ASM playground
            /// instance is created. Valid value:
            ///
            /// <list type="bullet">
            /// <description>ewmaLb: the exponentially weighted moving average (EWMA) load balancing
            /// scenario</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "playgroundScene", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PlaygroundScene
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property prometheusUrl: The URL for Prometheus.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "prometheusUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PrometheusUrl
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property proxy: Proxy settings.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "proxy", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-asm.RosServiceMesh.ProxyProperty\"}]}}", isOptional: true)]
            public object? Proxy
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property telemetry: Specifies whether to enable Prometheus monitoring.</summary>
            /// <remarks>
            /// We recommend that you use
            /// Managed Service for Prometheus. Valid values:
            ///
            /// <list type="bullet">
            /// <description><c>true</c>: Enables Prometheus monitoring.</description>
            /// <description><c>false</c>: Disables Prometheus monitoring.
            /// Default value: <c>false</c>.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "telemetry", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Telemetry
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property traceSampling: The sampling percentage of tracing.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "traceSampling", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TraceSampling
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tracing: Specifies whether to enable the tracing feature.</summary>
            /// <remarks>
            /// To enable this feature, make sure
            /// that you have activated Alibaba Cloud Tracing Analysis.
            /// Valid values: true and false. Default value: false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tracing", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Tracing
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property useExistingCa: Specifies whether to use an existing CA.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "useExistingCa", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? UseExistingCa
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property webAssemblyFilterEnabled: Specifies whether to enable the WebAssembly filter.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description><c>true</c>: Enables the WebAssembly filter.</description>
            /// <description><c>false</c>: Disables the WebAssembly filter.
            /// Default value: <c>false</c>.</description>
            /// </list>
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
