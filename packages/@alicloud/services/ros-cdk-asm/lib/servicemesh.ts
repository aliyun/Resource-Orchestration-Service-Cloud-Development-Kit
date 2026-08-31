import * as ros from '@alicloud/ros-cdk-core';
import { RosServiceMesh } from './asm.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosServiceMesh as ServiceMeshProperty };

/**
 * Properties for defining a `ServiceMesh`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-asm-servicemesh
 */
export interface ServiceMeshProps {

    /**
     * Property vpcId: The ID of the virtual private cloud (VPC).
     */
    readonly vpcId: string | ros.IResolvable;

    /**
     * Property vSwitches: The ID of the vSwitch, eg: ["vsw-xzegf5dndkbf4m6eg****"]
     */
    readonly vSwitches: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * Property accessLogEnabled: Specifies whether to enable access log. Valid values:
     * - `true`: Enables access log.
     * - `false`: Disables access log.
     * Default value: `false`.
     */
    readonly accessLogEnabled?: boolean | ros.IResolvable;

    /**
     * Property accessLogFile: Enable and disable access logs. Value:
     * - "" : Turn off access logs.
     * - \/dev\/stdout: Enables access logging
     */
    readonly accessLogFile?: string | ros.IResolvable;

    /**
     * Property accessLogFormat: The custom format of access logs. This parameter is available only if you enable
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
     * Property accessLogProject: The Log Service project for access logs.
     */
    readonly accessLogProject?: string | ros.IResolvable;

    /**
     * Property accessLogServiceEnabled: Whether Envoy's gRPC logging service (ALS) is enabled. Value:
     * - true: Enables Envoy's gRPC logging service.
     * - false: Envoy's gRPC logging service is not enabled.
     * Default value: false
     */
    readonly accessLogServiceEnabled?: boolean | ros.IResolvable;

    /**
     * Property accessLogServiceHost: Address where Envoy's gRPC logging service (ALS) is enabled.
     */
    readonly accessLogServiceHost?: string | ros.IResolvable;

    /**
     * Property accessLogServicePort: Port on which Envoy's gRPC logging service (ALS) is enabled.
     */
    readonly accessLogServicePort?: number | ros.IResolvable;

    /**
     * Property apiServerLoadBalancerSpec: CLB specification for the APIServer binding. Value: Compact type I (slb.s1.small), Standard type I (slb.s2.small), Standard Type II (slb.s2.medium), high-order type I (slb.s3.small), high-order type II (slb.s3.medium), Super type I (slb.s3.large).
     */
    readonly apiServerLoadBalancerSpec?: string | ros.IResolvable;

    /**
     * Property apiServerPublicEip: Specifies whether to expose the API server to the Internet.
     * Valid values: true and false. Default value: false.
     * If you do not set this parameter, the API server of clusters added to the ASM instance
     * cannot be accessed from the Internet.
     */
    readonly apiServerPublicEip?: boolean | ros.IResolvable;

    /**
     * Property auditProject: The name of the Log Service project that is used for mesh audit.
     * Default value: mesh-log-{meshId}.
     */
    readonly auditProject?: string | ros.IResolvable;

    /**
     * Property autoRenew: If CLB is annual and monthly, whether it will be automatically renewed. Value:
     * - true: Automatic renewal.
     * - false: No automatic renewal.
     */
    readonly autoRenew?: boolean | ros.IResolvable;

    /**
     * Property autoRenewPeriod: This parameter is valid only if you set `ChargeType` to `PrePay`. The
     * auto-renewal period. If the subscription duration is less than one year, the
     * value of this parameter indicates the number of months for which you want to
     * renew the instance. If the subscription duration is more than one year, the value
     * of this parameter indicates the number of years for which you want to renew the
     * instance.
     */
    readonly autoRenewPeriod?: number | ros.IResolvable;

    /**
     * Property certChain: The certificate chain from CaCert to RootCert contains at least two certificates.
     */
    readonly certChain?: string | ros.IResolvable;

    /**
     * Property chargeType: CLB payment type. Value:
     * - PayOnDemand: pay-as-you-go type
     * - PrePay: Annual and monthly.
     */
    readonly chargeType?: string | ros.IResolvable;

    /**
     * Property clusterSpec: Service grid instance specification, value:
     * - standard: The standard version.
     * - enterprise: Enterprise Edition
     * - ultimate: ultimate.
     */
    readonly clusterSpec?: string | ros.IResolvable;

    /**
     * Property configSourceEnabled: Whether to enable an external service registry. Value:
     * - true: Enables the external service registry.
     * - false: The external service registry is not enabled.
     * Default value: false
     */
    readonly configSourceEnabled?: boolean | ros.IResolvable;

    /**
     * Property configSourceNacosId: The Nacos ID for config source.
     */
    readonly configSourceNacosId?: string | ros.IResolvable;

    /**
     * Property controlPlaneLogEnabled: Specifies whether to enable control plane log collection. Valid values:
     * - `true`: Enables control plane log collection.
     * - `false`: Disables control plane log collection.
     * Default value: `false`.
     */
    readonly controlPlaneLogEnabled?: boolean | ros.IResolvable;

    /**
     * Property controlPlaneLogProject: The Log Service project for control plane logs.
     */
    readonly controlPlaneLogProject?: string | ros.IResolvable;

    /**
     * Property crAggregationEnabled: Whether to enable Kubernetes API for data plane cluster to access Istio resources (ASM instance v1.9.7.93 or later). Value:
     * - true: Enable data plane cluster Kubernetes API to access Istio resources.
     * - false: Data plane cluster Kubernetes API is not enabled to access Istio resources.
     * Default value: false
     */
    readonly crAggregationEnabled?: boolean | ros.IResolvable;

    /**
     * Property customizedPrometheus: Specifies whether to use a self-managed Prometheus system. Valid values:
     * - `true`: Uses a self-managed Prometheus system.
     * - `false`: Does not use a self-managed Prometheus system.
     * Default value: `false`.
     */
    readonly customizedPrometheus?: boolean | ros.IResolvable;

    /**
     * Property customizedZipkin: Specifies whether to use a self-managed Zipkin system. Valid values:
     * - `true`: Uses a self-managed Zipkin system.
     * - `false`: Uses Tracing Analysis.
     * Default value: `false`.
     */
    readonly customizedZipkin?: boolean | ros.IResolvable;

    /**
     * Property dnsProxyingEnabled: Specifies whether to enable DNS proxy. Valid values:
     * - `true`: Enables DNS proxy.
     * - `false`: Disables DNS proxy.
     * Default value: `false`.
     */
    readonly dnsProxyingEnabled?: boolean | ros.IResolvable;

    /**
     * Property dubboFilterEnabled: Specifies whether to enable the Dubbo filter. Valid values:
     * - `true`: Enables the Dubbo filter.
     * - `false`: Disables the Dubbo filter.
     * Default value: `false`.
     */
    readonly dubboFilterEnabled?: boolean | ros.IResolvable;

    /**
     * Property edition: The edition of the ASM instance.
     */
    readonly edition?: string | ros.IResolvable;

    /**
     * Property enableAcmg: Specifies whether to enable ACMG.
     */
    readonly enableAcmg?: boolean | ros.IResolvable;

    /**
     * Property enableAmbient: Specifies whether to enable ambient mode.
     */
    readonly enableAmbient?: boolean | ros.IResolvable;

    /**
     * Property enableAudit: Specifies whether to enable the mesh audit feature. To enable this feature, make sure
     * that you have activated Alibaba Cloud Log Service.
     * Valid values: true and false. Default value: false.
     */
    readonly enableAudit?: boolean | ros.IResolvable;

    /**
     * Property enableCrHistory: Specifies whether to enable the history version management feature for Istio
     * resources in ASM. Valid values:
     * - `true`: Enables the history version management feature.
     * - `false`: Disables the history version management feature.
     * Default value: `false`.
     */
    readonly enableCrHistory?: boolean | ros.IResolvable;

    /**
     * Property enableSdsServer: Specifies whether to enable the Secret Discovery Service (SDS). Valid values:
     * - `true`: Enables SDS.
     * - `false`: Disables SDS.
     * Default value: `false`.
     */
    readonly enableSdsServer?: boolean | ros.IResolvable;

    /**
     * Property excludeInboundPorts: The inbound ports to exclude from traffic management.
     */
    readonly excludeInboundPorts?: string | ros.IResolvable;

    /**
     * Property excludeIpRanges: The IP ranges to exclude from traffic management.
     */
    readonly excludeIpRanges?: string | ros.IResolvable;

    /**
     * Property excludeOutboundPorts: The outbound ports to exclude from traffic management.
     */
    readonly excludeOutboundPorts?: string | ros.IResolvable;

    /**
     * Property existingCaCert: The existing CA certificate.
     */
    readonly existingCaCert?: string | ros.IResolvable;

    /**
     * Property existingCaKey: The existing CA key.
     */
    readonly existingCaKey?: string | ros.IResolvable;

    /**
     * Property existingCaType: The type of the existing certificate:
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
     * Property existingRootCaCert: The existing root CA certificate.
     */
    readonly existingRootCaCert?: string | ros.IResolvable;

    /**
     * Property existingRootCaKey: The existing root CA key.
     */
    readonly existingRootCaKey?: string | ros.IResolvable;

    /**
     * Property filterGatewayClusterConfig: Specifies whether to enable gateway configuration filtering. Valid values:
     * - `true`: Enables gateway configuration filtering.
     * - `false`: Disables gateway configuration filtering.
     * Default value: `false`.
     */
    readonly filterGatewayClusterConfig?: boolean | ros.IResolvable;

    /**
     * Property gatewayApiEnabled: Specifies whether to enable the Gateway API. Valid values:
     * - `true`: Enables the Gateway API.
     * - `false`: Disables the Gateway API.
     * Default value: `false`.
     */
    readonly gatewayApiEnabled?: boolean | ros.IResolvable;

    /**
     * Property guestCluster: When you create a Service Mesh instance, you can add a cluster to the instance.
     * If you do not specify this parameter, no cluster is added. The cluster must be in
     * the same VPC and vSwitch as the Service Mesh instance, and must have the same
     * domain name.
     */
    readonly guestCluster?: string | ros.IResolvable;

    /**
     * Property includeIpRanges: The IP address ranges that are allowed to access the proxy.
     */
    readonly includeIpRanges?: string | ros.IResolvable;

    /**
     * Property istioVersion: The Istio version of the ASM instance.
     */
    readonly istioVersion?: string | ros.IResolvable;

    /**
     * Property kialiEnabled: Specifies whether to enable the mesh topology feature. To enable this feature,
     * you must first enable Prometheus monitoring. If Prometheus monitoring is
     * disabled, this feature is forcibly disabled. Valid values:
     * - `true`: Enables the mesh topology feature.
     * - `false`: Disables the mesh topology feature.
     * Default value: `false`.
     */
    readonly kialiEnabled?: boolean | ros.IResolvable;

    /**
     * Property localityLbConf: The locality load balancing configuration.
     */
    readonly localityLbConf?: string | ros.IResolvable;

    /**
     * Property localityLoadBalancing: Specifies whether to route traffic to the nearest instance.
     * Valid values: true and false. Default value: false.
     */
    readonly localityLoadBalancing?: boolean | ros.IResolvable;

    /**
     * Property mseEnabled: Specifies whether to enable Microservices Engine (MSE). Valid values:
     * - `true`: Enables MSE.
     * - `false`: Disables MSE.
     * Default value: `false`.
     */
    readonly mseEnabled?: boolean | ros.IResolvable;

    /**
     * Property multiBufferEnabled: Specifies whether to enable TLS performance optimization that is based on
     * MultiBuffer. Valid values:
     * - `true`: Enables the feature.
     * - `false`: Disables the feature.
     * Default value: `true`.
     */
    readonly multiBufferEnabled?: boolean | ros.IResolvable;

    /**
     * Property multiBufferPollDelay: The synchronization period of the MultiBuffer enabling status. Default value:
     * `30s`.
     */
    readonly multiBufferPollDelay?: string | ros.IResolvable;

    /**
     * Property mysqlFilterEnabled: Specifies whether to enable the MySQL filter. Valid values:
     * - `true`: Enables the MySQL filter.
     * - `false`: Disables the MySQL filter.
     * Default value: `false`.
     */
    readonly mysqlFilterEnabled?: boolean | ros.IResolvable;

    /**
     * Property name: The name of the ASM instance.
     */
    readonly name?: string | ros.IResolvable;

    /**
     * Property opa: OPA settings.
     */
    readonly opa?: RosServiceMesh.OPAProperty | ros.IResolvable;

    /**
     * Property opaEnabled: Specifies whether to enable OPA. Valid values:
     * - `true`: Enables OPA.
     * - `false`: Disables OPA.
     * Default value: `false`.
     */
    readonly opaEnabled?: boolean | ros.IResolvable;

    /**
     * Property outboundTrafficPolicy: The outbound traffic policy of the ASM instance.
     */
    readonly outboundTrafficPolicy?: string | ros.IResolvable;

    /**
     * Property period: This parameter is valid only if you set `ChargeType` to `PrePay`. The
     * subscription duration of the SLB instance. Unit: months. If you want to purchase
     * the instance for one year, enter 12.
     */
    readonly period?: number | ros.IResolvable;

    /**
     * Property pilotLoadBalancerSpec: The specification of the SLB instance that is bound to Istio Pilot of the control
     * plane. Valid values: `slb.s1.small`, `slb.s2.small`, `slb.s2.medium`,
     * `slb.s3.small`, `slb.s3.medium`, and `slb.s3.large`.
     */
    readonly pilotLoadBalancerSpec?: string | ros.IResolvable;

    /**
     * Property pilotPublicEip: Specifies whether to expose Istio Pilot to the Internet.
     * Valid values: true and false. Default value: false.
     * If you do not set this parameter, only clusters in the same VPC as the ASM instance
     * can access Istio Pilot of the instance.
     */
    readonly pilotPublicEip?: boolean | ros.IResolvable;

    /**
     * Property playgroundScene: The playground scenario. If you specify this parameter, an ASM playground
     * instance is created. Valid value:
     * - ewmaLb: the exponentially weighted moving average (EWMA) load balancing
     * scenario
     */
    readonly playgroundScene?: string | ros.IResolvable;

    /**
     * Property prometheusUrl: The URL for Prometheus.
     */
    readonly prometheusUrl?: string | ros.IResolvable;

    /**
     * Property proxy: Proxy settings.
     */
    readonly proxy?: RosServiceMesh.ProxyProperty | ros.IResolvable;

    /**
     * Property telemetry: Specifies whether to enable Prometheus monitoring. We recommend that you use
     * Managed Service for Prometheus. Valid values:
     * - `true`: Enables Prometheus monitoring.
     * - `false`: Disables Prometheus monitoring.
     * Default value: `false`.
     */
    readonly telemetry?: boolean | ros.IResolvable;

    /**
     * Property traceSampling: The sampling percentage of tracing.
     */
    readonly traceSampling?: number | ros.IResolvable;

    /**
     * Property tracing: Specifies whether to enable the tracing feature. To enable this feature, make sure
     * that you have activated Alibaba Cloud Tracing Analysis.
     * Valid values: true and false. Default value: false.
     */
    readonly tracing?: boolean | ros.IResolvable;

    /**
     * Property useExistingCa: Specifies whether to use an existing CA.
     */
    readonly useExistingCa?: boolean | ros.IResolvable;

    /**
     * Property webAssemblyFilterEnabled: Specifies whether to enable the WebAssembly filter. Valid values:
     * - `true`: Enables the WebAssembly filter.
     * - `false`: Disables the WebAssembly filter.
     * Default value: `false`.
     */
    readonly webAssemblyFilterEnabled?: boolean | ros.IResolvable;
}

/**
 * Represents a `ServiceMesh`.
 */
export interface IServiceMesh extends ros.IResource {
    readonly props: ServiceMeshProps;

    /**
     * Attribute ServiceMeshId: The ID of the ASM instance.
     */
    readonly attrServiceMeshId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ASM::ServiceMesh`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosServiceMesh`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-asm-servicemesh
 */
export class ServiceMesh extends ros.Resource implements IServiceMesh {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: ServiceMeshProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ServiceMeshId: The ID of the ASM instance.
     */
    public readonly attrServiceMeshId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ServiceMeshProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosServiceMesh = new RosServiceMesh(this, id,  {
            opa: props.opa,
            excludeInboundPorts: props.excludeInboundPorts,
            dubboFilterEnabled: props.dubboFilterEnabled,
            prometheusUrl: props.prometheusUrl,
            localityLoadBalancing: props.localityLoadBalancing,
            name: props.name,
            accessLogServicePort: props.accessLogServicePort,
            apiServerLoadBalancerSpec: props.apiServerLoadBalancerSpec,
            multiBufferEnabled: props.multiBufferEnabled,
            dnsProxyingEnabled: props.dnsProxyingEnabled,
            opaEnabled: props.opaEnabled,
            existingCaType: props.existingCaType,
            vSwitches: props.vSwitches,
            excludeIpRanges: props.excludeIpRanges,
            guestCluster: props.guestCluster,
            accessLogServiceEnabled: props.accessLogServiceEnabled,
            localityLbConf: props.localityLbConf,
            mseEnabled: props.mseEnabled,
            istioVersion: props.istioVersion,
            period: props.period,
            accessLogServiceHost: props.accessLogServiceHost,
            outboundTrafficPolicy: props.outboundTrafficPolicy,
            edition: props.edition,
            playgroundScene: props.playgroundScene,
            gatewayApiEnabled: props.gatewayApiEnabled,
            includeIpRanges: props.includeIpRanges,
            vpcId: props.vpcId,
            controlPlaneLogEnabled: props.controlPlaneLogEnabled,
            tracing: props.tracing,
            configSourceNacosId: props.configSourceNacosId,
            accessLogEnabled: props.accessLogEnabled,
            certChain: props.certChain,
            autoRenew: props.autoRenew,
            pilotLoadBalancerSpec: props.pilotLoadBalancerSpec,
            existingRootCaCert: props.existingRootCaCert,
            proxy: props.proxy,
            customizedPrometheus: props.customizedPrometheus,
            multiBufferPollDelay: props.multiBufferPollDelay,
            enableSdsServer: props.enableSdsServer,
            mysqlFilterEnabled: props.mysqlFilterEnabled,
            enableAmbient: props.enableAmbient,
            controlPlaneLogProject: props.controlPlaneLogProject,
            autoRenewPeriod: props.autoRenewPeriod,
            enableAudit: props.enableAudit,
            configSourceEnabled: props.configSourceEnabled,
            accessLogProject: props.accessLogProject,
            accessLogFormat: props.accessLogFormat,
            filterGatewayClusterConfig: props.filterGatewayClusterConfig,
            apiServerPublicEip: props.apiServerPublicEip,
            accessLogFile: props.accessLogFile,
            clusterSpec: props.clusterSpec,
            telemetry: props.telemetry,
            auditProject: props.auditProject,
            useExistingCa: props.useExistingCa,
            traceSampling: props.traceSampling,
            enableCrHistory: props.enableCrHistory,
            kialiEnabled: props.kialiEnabled,
            existingRootCaKey: props.existingRootCaKey,
            webAssemblyFilterEnabled: props.webAssemblyFilterEnabled,
            pilotPublicEip: props.pilotPublicEip,
            chargeType: props.chargeType,
            crAggregationEnabled: props.crAggregationEnabled,
            excludeOutboundPorts: props.excludeOutboundPorts,
            existingCaKey: props.existingCaKey,
            customizedZipkin: props.customizedZipkin,
            enableAcmg: props.enableAcmg,
            existingCaCert: props.existingCaCert,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosServiceMesh;
        this.attrServiceMeshId = rosServiceMesh.attrServiceMeshId;
    }
}
