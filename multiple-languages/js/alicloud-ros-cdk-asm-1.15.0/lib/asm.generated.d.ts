import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosServiceMesh`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-asm-servicemesh
 */
export interface RosServiceMeshProps {
    /**
     * @Property vpcId: The ID of the virtual private cloud (VPC).
     */
    readonly vpcId: string | ros.IResolvable;
    /**
     * @Property vSwitches: The ID of the vSwitch, eg: ["vsw-xzegf5dndkbf4m6eg****"]
     */
    readonly vSwitches: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property accessLogEnabled: Specifies whether to enable access log. Valid values:
     * - `true`: Enables access log.
     * - `false`: Disables access log.
     * Default value: `false`.
     */
    readonly accessLogEnabled?: boolean | ros.IResolvable;
    /**
     * @Property accessLogFile: Enable and disable access logs. Value:
     * - "" : Turn off access logs.
     * - \/dev\/stdout: Enables access logging
     */
    readonly accessLogFile?: string | ros.IResolvable;
    /**
     * @Property accessLogFormat: The custom format of access logs. This parameter is available only if you enable
     * access log. The value must be a JSON string that contains the following keys:
     * authority_for, bytes_received, bytes_sent, downstream_local_address,
     * downstream_remote_address, duration, istio_policy_status, method, path, protocol,
     * requested_server_name, response_code, response_flags, route_name, start_time,
     * trace_id, upstream_cluster, upstream_host, upstream_local_address,
     * upstream_service_time, upstream_transport_failure_reason, user_agent, and
     * x_forwarded_for.
     */
    readonly accessLogFormat?: string | ros.IResolvable;
    /**
     * @Property accessLogProject: The Log Service project for access logs.
     */
    readonly accessLogProject?: string | ros.IResolvable;
    /**
     * @Property accessLogServiceEnabled: Whether Envoy's gRPC logging service (ALS) is enabled. Value:
     * - true: Enables Envoy's gRPC logging service.
     * - false: Envoy's gRPC logging service is not enabled.
     * Default value: false
     */
    readonly accessLogServiceEnabled?: boolean | ros.IResolvable;
    /**
     * @Property accessLogServiceHost: Address where Envoy's gRPC logging service (ALS) is enabled.
     */
    readonly accessLogServiceHost?: string | ros.IResolvable;
    /**
     * @Property accessLogServicePort: Port on which Envoy's gRPC logging service (ALS) is enabled.
     */
    readonly accessLogServicePort?: number | ros.IResolvable;
    /**
     * @Property apiServerLoadBalancerSpec: CLB specification for the APIServer binding. Value: Compact type I (slb.s1.small), Standard type I (slb.s2.small), Standard Type II (slb.s2.medium), high-order type I (slb.s3.small), high-order type II (slb.s3.medium), Super type I (slb.s3.large).
     */
    readonly apiServerLoadBalancerSpec?: string | ros.IResolvable;
    /**
     * @Property apiServerPublicEip: Specifies whether to expose the API server to the Internet.
     * Valid values: true and false. Default value: false.
     * If you do not set this parameter, the API server of clusters added to the ASM instance
     * cannot be accessed from the Internet.
     */
    readonly apiServerPublicEip?: boolean | ros.IResolvable;
    /**
     * @Property auditProject: The name of the Log Service project that is used for mesh audit.
     * Default value: mesh-log-{meshId}.
     */
    readonly auditProject?: string | ros.IResolvable;
    /**
     * @Property autoRenew: If CLB is annual and monthly, whether it will be automatically renewed. Value:
     * - true: Automatic renewal.
     * - false: No automatic renewal.
     */
    readonly autoRenew?: boolean | ros.IResolvable;
    /**
     * @Property autoRenewPeriod: This parameter is valid only if you set `ChargeType` to `PrePay`. The
     * auto-renewal period. If the subscription duration is less than one year, the
     * value of this parameter indicates the number of months for which you want to
     * renew the instance. If the subscription duration is more than one year, the value
     * of this parameter indicates the number of years for which you want to renew the
     * instance.
     */
    readonly autoRenewPeriod?: number | ros.IResolvable;
    /**
     * @Property certChain: The certificate chain from CaCert to RootCert contains at least two certificates.
     */
    readonly certChain?: string | ros.IResolvable;
    /**
     * @Property chargeType: CLB payment type. Value:
     * - PayOnDemand: pay-as-you-go type
     * - PrePay: Annual and monthly.
     */
    readonly chargeType?: string | ros.IResolvable;
    /**
     * @Property clusterSpec: Service grid instance specification, value:
     * - standard: The standard version.
     * - enterprise: Enterprise Edition
     * - ultimate: ultimate.
     */
    readonly clusterSpec?: string | ros.IResolvable;
    /**
     * @Property configSourceEnabled: Whether to enable an external service registry. Value:
     * - true: Enables the external service registry.
     * - false: The external service registry is not enabled.
     * Default value: false
     */
    readonly configSourceEnabled?: boolean | ros.IResolvable;
    /**
     * @Property configSourceNacosId: The Nacos ID for config source.
     */
    readonly configSourceNacosId?: string | ros.IResolvable;
    /**
     * @Property controlPlaneLogEnabled: Specifies whether to enable control plane log collection. Valid values:
     * - `true`: Enables control plane log collection.
     * - `false`: Disables control plane log collection.
     * Default value: `false`.
     */
    readonly controlPlaneLogEnabled?: boolean | ros.IResolvable;
    /**
     * @Property controlPlaneLogProject: The Log Service project for control plane logs.
     */
    readonly controlPlaneLogProject?: string | ros.IResolvable;
    /**
     * @Property crAggregationEnabled: Whether to enable Kubernetes API for data plane cluster to access Istio resources (ASM instance v1.9.7.93 or later). Value:
     * - true: Enable data plane cluster Kubernetes API to access Istio resources.
     * - false: Data plane cluster Kubernetes API is not enabled to access Istio resources.
     * Default value: false
     */
    readonly crAggregationEnabled?: boolean | ros.IResolvable;
    /**
     * @Property customizedPrometheus: Specifies whether to use a self-managed Prometheus system. Valid values:
     * - `true`: Uses a self-managed Prometheus system.
     * - `false`: Does not use a self-managed Prometheus system.
     * Default value: `false`.
     */
    readonly customizedPrometheus?: boolean | ros.IResolvable;
    /**
     * @Property customizedZipkin: Specifies whether to use a self-managed Zipkin system. Valid values:
     * - `true`: Uses a self-managed Zipkin system.
     * - `false`: Uses Tracing Analysis.
     * Default value: `false`.
     */
    readonly customizedZipkin?: boolean | ros.IResolvable;
    /**
     * @Property dnsProxyingEnabled: Specifies whether to enable DNS proxy. Valid values:
     * - `true`: Enables DNS proxy.
     * - `false`: Disables DNS proxy.
     * Default value: `false`.
     */
    readonly dnsProxyingEnabled?: boolean | ros.IResolvable;
    /**
     * @Property dubboFilterEnabled: Specifies whether to enable the Dubbo filter. Valid values:
     * - `true`: Enables the Dubbo filter.
     * - `false`: Disables the Dubbo filter.
     * Default value: `false`.
     */
    readonly dubboFilterEnabled?: boolean | ros.IResolvable;
    /**
     * @Property edition: The edition of the ASM instance.
     */
    readonly edition?: string | ros.IResolvable;
    /**
     * @Property enableAcmg: Specifies whether to enable ACMG.
     */
    readonly enableAcmg?: boolean | ros.IResolvable;
    /**
     * @Property enableAmbient: Specifies whether to enable ambient mode.
     */
    readonly enableAmbient?: boolean | ros.IResolvable;
    /**
     * @Property enableAudit: Specifies whether to enable the mesh audit feature. To enable this feature, make sure
     * that you have activated Alibaba Cloud Log Service.
     * Valid values: true and false. Default value: false.
     */
    readonly enableAudit?: boolean | ros.IResolvable;
    /**
     * @Property enableCrHistory: Specifies whether to enable the history version management feature for Istio
     * resources in ASM. Valid values:
     * - `true`: Enables the history version management feature.
     * - `false`: Disables the history version management feature.
     * Default value: `false`.
     */
    readonly enableCrHistory?: boolean | ros.IResolvable;
    /**
     * @Property enableSdsServer: Specifies whether to enable the Secret Discovery Service (SDS). Valid values:
     * - `true`: Enables SDS.
     * - `false`: Disables SDS.
     * Default value: `false`.
     */
    readonly enableSdsServer?: boolean | ros.IResolvable;
    /**
     * @Property excludeInboundPorts: The inbound ports to exclude from traffic management.
     */
    readonly excludeInboundPorts?: string | ros.IResolvable;
    /**
     * @Property excludeIpRanges: The IP ranges to exclude from traffic management.
     */
    readonly excludeIpRanges?: string | ros.IResolvable;
    /**
     * @Property excludeOutboundPorts: The outbound ports to exclude from traffic management.
     */
    readonly excludeOutboundPorts?: string | ros.IResolvable;
    /**
     * @Property existingCaCert: The existing CA certificate.
     */
    readonly existingCaCert?: string | ros.IResolvable;
    /**
     * @Property existingCaKey: The existing CA key.
     */
    readonly existingCaKey?: string | ros.IResolvable;
    /**
     * @Property existingCaType: The type of the existing certificate:
     * - 1: A self-signed certificate of Istiod. This corresponds to the istio-ca-secret
     * secret in the istio-system namespace. If you use this type, you must also provide
     * the `ExistingCaCert` and `ExsitingCaKey` parameters.
     * - 2: An external certificate of Istiod. For more information, see plugin ca cert.
     * This generally corresponds to the cacerts secret in the istio-system namespace.
     * If you use this type, you must also provide the `ExisingRootCaCert` and
     * `ExisingRootCaKey` parameters.
     */
    readonly existingCaType?: string | ros.IResolvable;
    /**
     * @Property existingRootCaCert: The existing root CA certificate.
     */
    readonly existingRootCaCert?: string | ros.IResolvable;
    /**
     * @Property existingRootCaKey: The existing root CA key.
     */
    readonly existingRootCaKey?: string | ros.IResolvable;
    /**
     * @Property filterGatewayClusterConfig: Specifies whether to enable gateway configuration filtering. Valid values:
     * - `true`: Enables gateway configuration filtering.
     * - `false`: Disables gateway configuration filtering.
     * Default value: `false`.
     */
    readonly filterGatewayClusterConfig?: boolean | ros.IResolvable;
    /**
     * @Property gatewayApiEnabled: Specifies whether to enable the Gateway API. Valid values:
     * - `true`: Enables the Gateway API.
     * - `false`: Disables the Gateway API.
     * Default value: `false`.
     */
    readonly gatewayApiEnabled?: boolean | ros.IResolvable;
    /**
     * @Property guestCluster: When you create a Service Mesh instance, you can add a cluster to the instance.
     * If you do not specify this parameter, no cluster is added. The cluster must be in
     * the same VPC and vSwitch as the Service Mesh instance, and must have the same
     * domain name.
     */
    readonly guestCluster?: string | ros.IResolvable;
    /**
     * @Property includeIpRanges: The IP address ranges that are allowed to access the proxy.
     */
    readonly includeIpRanges?: string | ros.IResolvable;
    /**
     * @Property istioVersion: The Istio version of the ASM instance.
     */
    readonly istioVersion?: string | ros.IResolvable;
    /**
     * @Property kialiEnabled: Specifies whether to enable the mesh topology feature. To enable this feature,
     * you must first enable Prometheus monitoring. If Prometheus monitoring is
     * disabled, this feature is forcibly disabled. Valid values:
     * - `true`: Enables the mesh topology feature.
     * - `false`: Disables the mesh topology feature.
     * Default value: `false`.
     */
    readonly kialiEnabled?: boolean | ros.IResolvable;
    /**
     * @Property localityLbConf: The locality load balancing configuration.
     */
    readonly localityLbConf?: string | ros.IResolvable;
    /**
     * @Property localityLoadBalancing: Specifies whether to route traffic to the nearest instance.
     * Valid values: true and false. Default value: false.
     */
    readonly localityLoadBalancing?: boolean | ros.IResolvable;
    /**
     * @Property mseEnabled: Specifies whether to enable Microservices Engine (MSE). Valid values:
     * - `true`: Enables MSE.
     * - `false`: Disables MSE.
     * Default value: `false`.
     */
    readonly mseEnabled?: boolean | ros.IResolvable;
    /**
     * @Property multiBufferEnabled: Specifies whether to enable TLS performance optimization that is based on
     * MultiBuffer. Valid values:
     * - `true`: Enables the feature.
     * - `false`: Disables the feature.
     * Default value: `true`.
     */
    readonly multiBufferEnabled?: boolean | ros.IResolvable;
    /**
     * @Property multiBufferPollDelay: The synchronization period of the MultiBuffer enabling status. Default value:
     * `30s`.
     */
    readonly multiBufferPollDelay?: string | ros.IResolvable;
    /**
     * @Property mysqlFilterEnabled: Specifies whether to enable the MySQL filter. Valid values:
     * - `true`: Enables the MySQL filter.
     * - `false`: Disables the MySQL filter.
     * Default value: `false`.
     */
    readonly mysqlFilterEnabled?: boolean | ros.IResolvable;
    /**
     * @Property name: The name of the ASM instance.
     */
    readonly name?: string | ros.IResolvable;
    /**
     * @Property opa: OPA settings.
     */
    readonly opa?: RosServiceMesh.OPAProperty | ros.IResolvable;
    /**
     * @Property opaEnabled: Specifies whether to enable OPA. Valid values:
     * - `true`: Enables OPA.
     * - `false`: Disables OPA.
     * Default value: `false`.
     */
    readonly opaEnabled?: boolean | ros.IResolvable;
    /**
     * @Property outboundTrafficPolicy: The outbound traffic policy of the ASM instance.
     */
    readonly outboundTrafficPolicy?: string | ros.IResolvable;
    /**
     * @Property period: This parameter is valid only if you set `ChargeType` to `PrePay`. The
     * subscription duration of the SLB instance. Unit: months. If you want to purchase
     * the instance for one year, enter 12.
     */
    readonly period?: number | ros.IResolvable;
    /**
     * @Property pilotLoadBalancerSpec: The specification of the SLB instance that is bound to Istio Pilot of the control
     * plane. Valid values: `slb.s1.small`, `slb.s2.small`, `slb.s2.medium`,
     * `slb.s3.small`, `slb.s3.medium`, and `slb.s3.large`.
     */
    readonly pilotLoadBalancerSpec?: string | ros.IResolvable;
    /**
     * @Property pilotPublicEip: Specifies whether to expose Istio Pilot to the Internet.
     * Valid values: true and false. Default value: false.
     * If you do not set this parameter, only clusters in the same VPC as the ASM instance
     * can access Istio Pilot of the instance.
     */
    readonly pilotPublicEip?: boolean | ros.IResolvable;
    /**
     * @Property playgroundScene: The playground scenario. If you specify this parameter, an ASM playground
     * instance is created. Valid value:
     * - ewmaLb: the exponentially weighted moving average (EWMA) load balancing
     * scenario
     */
    readonly playgroundScene?: string | ros.IResolvable;
    /**
     * @Property prometheusUrl: The URL for Prometheus.
     */
    readonly prometheusUrl?: string | ros.IResolvable;
    /**
     * @Property proxy: Proxy settings.
     */
    readonly proxy?: RosServiceMesh.ProxyProperty | ros.IResolvable;
    /**
     * @Property telemetry: Specifies whether to enable Prometheus monitoring. We recommend that you use
     * Managed Service for Prometheus. Valid values:
     * - `true`: Enables Prometheus monitoring.
     * - `false`: Disables Prometheus monitoring.
     * Default value: `false`.
     */
    readonly telemetry?: boolean | ros.IResolvable;
    /**
     * @Property traceSampling: The sampling percentage of tracing.
     */
    readonly traceSampling?: number | ros.IResolvable;
    /**
     * @Property tracing: Specifies whether to enable the tracing feature. To enable this feature, make sure
     * that you have activated Alibaba Cloud Tracing Analysis.
     * Valid values: true and false. Default value: false.
     */
    readonly tracing?: boolean | ros.IResolvable;
    /**
     * @Property useExistingCa: Specifies whether to use an existing CA.
     */
    readonly useExistingCa?: boolean | ros.IResolvable;
    /**
     * @Property webAssemblyFilterEnabled: Specifies whether to enable the WebAssembly filter. Valid values:
     * - `true`: Enables the WebAssembly filter.
     * - `false`: Disables the WebAssembly filter.
     * Default value: `false`.
     */
    readonly webAssemblyFilterEnabled?: boolean | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ASM::ServiceMesh`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ServiceMesh` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-asm-servicemesh
 */
export declare class RosServiceMesh extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ASM::ServiceMesh";
    /**
     * @Attribute ServiceMeshId: The ID of the ASM instance.
     */
    readonly attrServiceMeshId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property vpcId: The ID of the virtual private cloud (VPC).
     */
    vpcId: string | ros.IResolvable;
    /**
     * @Property vSwitches: The ID of the vSwitch, eg: ["vsw-xzegf5dndkbf4m6eg****"]
     */
    vSwitches: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property accessLogEnabled: Specifies whether to enable access log. Valid values:
     * - `true`: Enables access log.
     * - `false`: Disables access log.
     * Default value: `false`.
     */
    accessLogEnabled: boolean | ros.IResolvable | undefined;
    /**
     * @Property accessLogFile: Enable and disable access logs. Value:
     * - "" : Turn off access logs.
     * - \/dev\/stdout: Enables access logging
     */
    accessLogFile: string | ros.IResolvable | undefined;
    /**
     * @Property accessLogFormat: The custom format of access logs. This parameter is available only if you enable
     * access log. The value must be a JSON string that contains the following keys:
     * authority_for, bytes_received, bytes_sent, downstream_local_address,
     * downstream_remote_address, duration, istio_policy_status, method, path, protocol,
     * requested_server_name, response_code, response_flags, route_name, start_time,
     * trace_id, upstream_cluster, upstream_host, upstream_local_address,
     * upstream_service_time, upstream_transport_failure_reason, user_agent, and
     * x_forwarded_for.
     */
    accessLogFormat: string | ros.IResolvable | undefined;
    /**
     * @Property accessLogProject: The Log Service project for access logs.
     */
    accessLogProject: string | ros.IResolvable | undefined;
    /**
     * @Property accessLogServiceEnabled: Whether Envoy's gRPC logging service (ALS) is enabled. Value:
     * - true: Enables Envoy's gRPC logging service.
     * - false: Envoy's gRPC logging service is not enabled.
     * Default value: false
     */
    accessLogServiceEnabled: boolean | ros.IResolvable | undefined;
    /**
     * @Property accessLogServiceHost: Address where Envoy's gRPC logging service (ALS) is enabled.
     */
    accessLogServiceHost: string | ros.IResolvable | undefined;
    /**
     * @Property accessLogServicePort: Port on which Envoy's gRPC logging service (ALS) is enabled.
     */
    accessLogServicePort: number | ros.IResolvable | undefined;
    /**
     * @Property apiServerLoadBalancerSpec: CLB specification for the APIServer binding. Value: Compact type I (slb.s1.small), Standard type I (slb.s2.small), Standard Type II (slb.s2.medium), high-order type I (slb.s3.small), high-order type II (slb.s3.medium), Super type I (slb.s3.large).
     */
    apiServerLoadBalancerSpec: string | ros.IResolvable | undefined;
    /**
     * @Property apiServerPublicEip: Specifies whether to expose the API server to the Internet.
     * Valid values: true and false. Default value: false.
     * If you do not set this parameter, the API server of clusters added to the ASM instance
     * cannot be accessed from the Internet.
     */
    apiServerPublicEip: boolean | ros.IResolvable | undefined;
    /**
     * @Property auditProject: The name of the Log Service project that is used for mesh audit.
     * Default value: mesh-log-{meshId}.
     */
    auditProject: string | ros.IResolvable | undefined;
    /**
     * @Property autoRenew: If CLB is annual and monthly, whether it will be automatically renewed. Value:
     * - true: Automatic renewal.
     * - false: No automatic renewal.
     */
    autoRenew: boolean | ros.IResolvable | undefined;
    /**
     * @Property autoRenewPeriod: This parameter is valid only if you set `ChargeType` to `PrePay`. The
     * auto-renewal period. If the subscription duration is less than one year, the
     * value of this parameter indicates the number of months for which you want to
     * renew the instance. If the subscription duration is more than one year, the value
     * of this parameter indicates the number of years for which you want to renew the
     * instance.
     */
    autoRenewPeriod: number | ros.IResolvable | undefined;
    /**
     * @Property certChain: The certificate chain from CaCert to RootCert contains at least two certificates.
     */
    certChain: string | ros.IResolvable | undefined;
    /**
     * @Property chargeType: CLB payment type. Value:
     * - PayOnDemand: pay-as-you-go type
     * - PrePay: Annual and monthly.
     */
    chargeType: string | ros.IResolvable | undefined;
    /**
     * @Property clusterSpec: Service grid instance specification, value:
     * - standard: The standard version.
     * - enterprise: Enterprise Edition
     * - ultimate: ultimate.
     */
    clusterSpec: string | ros.IResolvable | undefined;
    /**
     * @Property configSourceEnabled: Whether to enable an external service registry. Value:
     * - true: Enables the external service registry.
     * - false: The external service registry is not enabled.
     * Default value: false
     */
    configSourceEnabled: boolean | ros.IResolvable | undefined;
    /**
     * @Property configSourceNacosId: The Nacos ID for config source.
     */
    configSourceNacosId: string | ros.IResolvable | undefined;
    /**
     * @Property controlPlaneLogEnabled: Specifies whether to enable control plane log collection. Valid values:
     * - `true`: Enables control plane log collection.
     * - `false`: Disables control plane log collection.
     * Default value: `false`.
     */
    controlPlaneLogEnabled: boolean | ros.IResolvable | undefined;
    /**
     * @Property controlPlaneLogProject: The Log Service project for control plane logs.
     */
    controlPlaneLogProject: string | ros.IResolvable | undefined;
    /**
     * @Property crAggregationEnabled: Whether to enable Kubernetes API for data plane cluster to access Istio resources (ASM instance v1.9.7.93 or later). Value:
     * - true: Enable data plane cluster Kubernetes API to access Istio resources.
     * - false: Data plane cluster Kubernetes API is not enabled to access Istio resources.
     * Default value: false
     */
    crAggregationEnabled: boolean | ros.IResolvable | undefined;
    /**
     * @Property customizedPrometheus: Specifies whether to use a self-managed Prometheus system. Valid values:
     * - `true`: Uses a self-managed Prometheus system.
     * - `false`: Does not use a self-managed Prometheus system.
     * Default value: `false`.
     */
    customizedPrometheus: boolean | ros.IResolvable | undefined;
    /**
     * @Property customizedZipkin: Specifies whether to use a self-managed Zipkin system. Valid values:
     * - `true`: Uses a self-managed Zipkin system.
     * - `false`: Uses Tracing Analysis.
     * Default value: `false`.
     */
    customizedZipkin: boolean | ros.IResolvable | undefined;
    /**
     * @Property dnsProxyingEnabled: Specifies whether to enable DNS proxy. Valid values:
     * - `true`: Enables DNS proxy.
     * - `false`: Disables DNS proxy.
     * Default value: `false`.
     */
    dnsProxyingEnabled: boolean | ros.IResolvable | undefined;
    /**
     * @Property dubboFilterEnabled: Specifies whether to enable the Dubbo filter. Valid values:
     * - `true`: Enables the Dubbo filter.
     * - `false`: Disables the Dubbo filter.
     * Default value: `false`.
     */
    dubboFilterEnabled: boolean | ros.IResolvable | undefined;
    /**
     * @Property edition: The edition of the ASM instance.
     */
    edition: string | ros.IResolvable | undefined;
    /**
     * @Property enableAcmg: Specifies whether to enable ACMG.
     */
    enableAcmg: boolean | ros.IResolvable | undefined;
    /**
     * @Property enableAmbient: Specifies whether to enable ambient mode.
     */
    enableAmbient: boolean | ros.IResolvable | undefined;
    /**
     * @Property enableAudit: Specifies whether to enable the mesh audit feature. To enable this feature, make sure
     * that you have activated Alibaba Cloud Log Service.
     * Valid values: true and false. Default value: false.
     */
    enableAudit: boolean | ros.IResolvable | undefined;
    /**
     * @Property enableCrHistory: Specifies whether to enable the history version management feature for Istio
     * resources in ASM. Valid values:
     * - `true`: Enables the history version management feature.
     * - `false`: Disables the history version management feature.
     * Default value: `false`.
     */
    enableCrHistory: boolean | ros.IResolvable | undefined;
    /**
     * @Property enableSdsServer: Specifies whether to enable the Secret Discovery Service (SDS). Valid values:
     * - `true`: Enables SDS.
     * - `false`: Disables SDS.
     * Default value: `false`.
     */
    enableSdsServer: boolean | ros.IResolvable | undefined;
    /**
     * @Property excludeInboundPorts: The inbound ports to exclude from traffic management.
     */
    excludeInboundPorts: string | ros.IResolvable | undefined;
    /**
     * @Property excludeIpRanges: The IP ranges to exclude from traffic management.
     */
    excludeIpRanges: string | ros.IResolvable | undefined;
    /**
     * @Property excludeOutboundPorts: The outbound ports to exclude from traffic management.
     */
    excludeOutboundPorts: string | ros.IResolvable | undefined;
    /**
     * @Property existingCaCert: The existing CA certificate.
     */
    existingCaCert: string | ros.IResolvable | undefined;
    /**
     * @Property existingCaKey: The existing CA key.
     */
    existingCaKey: string | ros.IResolvable | undefined;
    /**
     * @Property existingCaType: The type of the existing certificate:
     * - 1: A self-signed certificate of Istiod. This corresponds to the istio-ca-secret
     * secret in the istio-system namespace. If you use this type, you must also provide
     * the `ExistingCaCert` and `ExsitingCaKey` parameters.
     * - 2: An external certificate of Istiod. For more information, see plugin ca cert.
     * This generally corresponds to the cacerts secret in the istio-system namespace.
     * If you use this type, you must also provide the `ExisingRootCaCert` and
     * `ExisingRootCaKey` parameters.
     */
    existingCaType: string | ros.IResolvable | undefined;
    /**
     * @Property existingRootCaCert: The existing root CA certificate.
     */
    existingRootCaCert: string | ros.IResolvable | undefined;
    /**
     * @Property existingRootCaKey: The existing root CA key.
     */
    existingRootCaKey: string | ros.IResolvable | undefined;
    /**
     * @Property filterGatewayClusterConfig: Specifies whether to enable gateway configuration filtering. Valid values:
     * - `true`: Enables gateway configuration filtering.
     * - `false`: Disables gateway configuration filtering.
     * Default value: `false`.
     */
    filterGatewayClusterConfig: boolean | ros.IResolvable | undefined;
    /**
     * @Property gatewayApiEnabled: Specifies whether to enable the Gateway API. Valid values:
     * - `true`: Enables the Gateway API.
     * - `false`: Disables the Gateway API.
     * Default value: `false`.
     */
    gatewayApiEnabled: boolean | ros.IResolvable | undefined;
    /**
     * @Property guestCluster: When you create a Service Mesh instance, you can add a cluster to the instance.
     * If you do not specify this parameter, no cluster is added. The cluster must be in
     * the same VPC and vSwitch as the Service Mesh instance, and must have the same
     * domain name.
     */
    guestCluster: string | ros.IResolvable | undefined;
    /**
     * @Property includeIpRanges: The IP address ranges that are allowed to access the proxy.
     */
    includeIpRanges: string | ros.IResolvable | undefined;
    /**
     * @Property istioVersion: The Istio version of the ASM instance.
     */
    istioVersion: string | ros.IResolvable | undefined;
    /**
     * @Property kialiEnabled: Specifies whether to enable the mesh topology feature. To enable this feature,
     * you must first enable Prometheus monitoring. If Prometheus monitoring is
     * disabled, this feature is forcibly disabled. Valid values:
     * - `true`: Enables the mesh topology feature.
     * - `false`: Disables the mesh topology feature.
     * Default value: `false`.
     */
    kialiEnabled: boolean | ros.IResolvable | undefined;
    /**
     * @Property localityLbConf: The locality load balancing configuration.
     */
    localityLbConf: string | ros.IResolvable | undefined;
    /**
     * @Property localityLoadBalancing: Specifies whether to route traffic to the nearest instance.
     * Valid values: true and false. Default value: false.
     */
    localityLoadBalancing: boolean | ros.IResolvable | undefined;
    /**
     * @Property mseEnabled: Specifies whether to enable Microservices Engine (MSE). Valid values:
     * - `true`: Enables MSE.
     * - `false`: Disables MSE.
     * Default value: `false`.
     */
    mseEnabled: boolean | ros.IResolvable | undefined;
    /**
     * @Property multiBufferEnabled: Specifies whether to enable TLS performance optimization that is based on
     * MultiBuffer. Valid values:
     * - `true`: Enables the feature.
     * - `false`: Disables the feature.
     * Default value: `true`.
     */
    multiBufferEnabled: boolean | ros.IResolvable | undefined;
    /**
     * @Property multiBufferPollDelay: The synchronization period of the MultiBuffer enabling status. Default value:
     * `30s`.
     */
    multiBufferPollDelay: string | ros.IResolvable | undefined;
    /**
     * @Property mysqlFilterEnabled: Specifies whether to enable the MySQL filter. Valid values:
     * - `true`: Enables the MySQL filter.
     * - `false`: Disables the MySQL filter.
     * Default value: `false`.
     */
    mysqlFilterEnabled: boolean | ros.IResolvable | undefined;
    /**
     * @Property name: The name of the ASM instance.
     */
    name: string | ros.IResolvable | undefined;
    /**
     * @Property opa: OPA settings.
     */
    opa: RosServiceMesh.OPAProperty | ros.IResolvable | undefined;
    /**
     * @Property opaEnabled: Specifies whether to enable OPA. Valid values:
     * - `true`: Enables OPA.
     * - `false`: Disables OPA.
     * Default value: `false`.
     */
    opaEnabled: boolean | ros.IResolvable | undefined;
    /**
     * @Property outboundTrafficPolicy: The outbound traffic policy of the ASM instance.
     */
    outboundTrafficPolicy: string | ros.IResolvable | undefined;
    /**
     * @Property period: This parameter is valid only if you set `ChargeType` to `PrePay`. The
     * subscription duration of the SLB instance. Unit: months. If you want to purchase
     * the instance for one year, enter 12.
     */
    period: number | ros.IResolvable | undefined;
    /**
     * @Property pilotLoadBalancerSpec: The specification of the SLB instance that is bound to Istio Pilot of the control
     * plane. Valid values: `slb.s1.small`, `slb.s2.small`, `slb.s2.medium`,
     * `slb.s3.small`, `slb.s3.medium`, and `slb.s3.large`.
     */
    pilotLoadBalancerSpec: string | ros.IResolvable | undefined;
    /**
     * @Property pilotPublicEip: Specifies whether to expose Istio Pilot to the Internet.
     * Valid values: true and false. Default value: false.
     * If you do not set this parameter, only clusters in the same VPC as the ASM instance
     * can access Istio Pilot of the instance.
     */
    pilotPublicEip: boolean | ros.IResolvable | undefined;
    /**
     * @Property playgroundScene: The playground scenario. If you specify this parameter, an ASM playground
     * instance is created. Valid value:
     * - ewmaLb: the exponentially weighted moving average (EWMA) load balancing
     * scenario
     */
    playgroundScene: string | ros.IResolvable | undefined;
    /**
     * @Property prometheusUrl: The URL for Prometheus.
     */
    prometheusUrl: string | ros.IResolvable | undefined;
    /**
     * @Property proxy: Proxy settings.
     */
    proxy: RosServiceMesh.ProxyProperty | ros.IResolvable | undefined;
    /**
     * @Property telemetry: Specifies whether to enable Prometheus monitoring. We recommend that you use
     * Managed Service for Prometheus. Valid values:
     * - `true`: Enables Prometheus monitoring.
     * - `false`: Disables Prometheus monitoring.
     * Default value: `false`.
     */
    telemetry: boolean | ros.IResolvable | undefined;
    /**
     * @Property traceSampling: The sampling percentage of tracing.
     */
    traceSampling: number | ros.IResolvable | undefined;
    /**
     * @Property tracing: Specifies whether to enable the tracing feature. To enable this feature, make sure
     * that you have activated Alibaba Cloud Tracing Analysis.
     * Valid values: true and false. Default value: false.
     */
    tracing: boolean | ros.IResolvable | undefined;
    /**
     * @Property useExistingCa: Specifies whether to use an existing CA.
     */
    useExistingCa: boolean | ros.IResolvable | undefined;
    /**
     * @Property webAssemblyFilterEnabled: Specifies whether to enable the WebAssembly filter. Valid values:
     * - `true`: Enables the WebAssembly filter.
     * - `false`: Disables the WebAssembly filter.
     * Default value: `false`.
     */
    webAssemblyFilterEnabled: boolean | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosServiceMeshProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosServiceMesh {
    /**
     * @stability external
     */
    interface OPAProperty {
        /**
         * @Property opaRequestCpu: The number of CPU cores requested by the OPA container.
         */
        readonly opaRequestCpu?: string | ros.IResolvable;
        /**
         * @Property openAgentPolicy: Specifies whether to enable the Open Policy Agent (OPA) plug-in.
     * Valid values: true and false. Default value: false.
         */
        readonly openAgentPolicy?: boolean | ros.IResolvable;
        /**
         * @Property opaLogLevel: The log level of the OPA container.
         */
        readonly opaLogLevel?: string | ros.IResolvable;
        /**
         * @Property opaLimitCpu: The limit on the CPU of the OPA container.
         */
        readonly opaLimitCpu?: string | ros.IResolvable;
        /**
         * @Property opaLimitMemory: The limit on the memory size of the OPA container.
         */
        readonly opaLimitMemory?: string | ros.IResolvable;
        /**
         * @Property opaRequestMemory: The size of the memory requested by the OPA container.
         */
        readonly opaRequestMemory?: string | ros.IResolvable;
    }
}
export declare namespace RosServiceMesh {
    /**
     * @stability external
     */
    interface ProxyProperty {
        /**
         * @Property clusterDomain: The domain name of the cluster.
         */
        readonly clusterDomain?: string | ros.IResolvable;
        /**
         * @Property proxyLimitCpu: The limit on the CPU of the sidecar.
         */
        readonly proxyLimitCpu?: string | ros.IResolvable;
        /**
         * @Property proxyLimitMemory: The limit on the memory size of the sidecar.
         */
        readonly proxyLimitMemory?: string | ros.IResolvable;
        /**
         * @Property proxyRequestCpu: The number of CPU cores requested by the sidecar.
         */
        readonly proxyRequestCpu?: string | ros.IResolvable;
        /**
         * @Property proxyRequestMemory: The size of the memory requested by the sidecar.
         */
        readonly proxyRequestMemory?: string | ros.IResolvable;
    }
}
