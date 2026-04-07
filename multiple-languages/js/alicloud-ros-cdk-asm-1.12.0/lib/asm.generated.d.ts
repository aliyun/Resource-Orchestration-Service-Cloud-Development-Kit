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
     * @Property accessLogEnabled: Specifies whether to enable access logging.
     */
    readonly accessLogEnabled?: boolean | ros.IResolvable;
    /**
     * @Property accessLogFile: Enable and disable access logs. Value:
     * - "" : Turn off access logs.
     * - \/dev\/stdout: Enables access logging
     */
    readonly accessLogFile?: string | ros.IResolvable;
    /**
     * @Property accessLogFormat: The format of access logs.
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
     * @Property autoRenewPeriod: ChargeType is a PrePay. Indicates the automatic renewal time when purchasing a CLB of the year and month type. If the purchase is less than 1 year old, this parameter indicates how many months the auto-renewal will take. If the purchase is longer than 1 year, this parameter indicates how many years the automatic renewal will be made.
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
     * @Property controlPlaneLogEnabled: Specifies whether to enable control plane logging.
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
     * @Property customizedPrometheus: Specifies whether to use a customized Prometheus system.
     */
    readonly customizedPrometheus?: boolean | ros.IResolvable;
    /**
     * @Property customizedZipkin: Specifies whether to use a user-created Zipkin system.
     */
    readonly customizedZipkin?: boolean | ros.IResolvable;
    /**
     * @Property dnsProxyingEnabled: Specifies whether to enable DNS proxying.
     */
    readonly dnsProxyingEnabled?: boolean | ros.IResolvable;
    /**
     * @Property dubboFilterEnabled: Specifies whether to enable Dubbo filter.
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
     * @Property enableCrHistory: Specifies whether to enable CR history.
     */
    readonly enableCrHistory?: boolean | ros.IResolvable;
    /**
     * @Property enableSdsServer: Specifies whether to enable SDS server.
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
     * @Property existingCaType: The type of existing CA.
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
     * @Property filterGatewayClusterConfig: Specifies whether to filter gateway cluster configuration.
     */
    readonly filterGatewayClusterConfig?: boolean | ros.IResolvable;
    /**
     * @Property gatewayApiEnabled: Specifies whether to enable Gateway API.
     */
    readonly gatewayApiEnabled?: boolean | ros.IResolvable;
    /**
     * @Property guestCluster: The guest cluster configuration.
     */
    readonly guestCluster?: string | ros.IResolvable;
    /**
     * @Property includeIpRanges: The Classless Inter-Domain Routing (CIDR) block in the ASM instance that are denied
     * to access external services.
     */
    readonly includeIpRanges?: string | ros.IResolvable;
    /**
     * @Property istioVersion: The Istio version of the ASM instance.
     */
    readonly istioVersion?: string | ros.IResolvable;
    /**
     * @Property kialiEnabled: Specifies whether to enable Kiali.
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
     * @Property mseEnabled: Specifies whether to enable MSE.
     */
    readonly mseEnabled?: boolean | ros.IResolvable;
    /**
     * @Property multiBufferEnabled: Specifies whether to enable multi-buffer.
     */
    readonly multiBufferEnabled?: boolean | ros.IResolvable;
    /**
     * @Property multiBufferPollDelay: The poll delay for multi-buffer.
     */
    readonly multiBufferPollDelay?: string | ros.IResolvable;
    /**
     * @Property mysqlFilterEnabled: Specifies whether to enable MySQL filter.
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
     * @Property opaEnabled: Specifies whether to enable OPA.
     */
    readonly opaEnabled?: boolean | ros.IResolvable;
    /**
     * @Property outboundTrafficPolicy: The outbound traffic policy of the ASM instance.
     */
    readonly outboundTrafficPolicy?: string | ros.IResolvable;
    /**
     * @Property period: The subscription period.
     */
    readonly period?: number | ros.IResolvable;
    /**
     * @Property pilotLoadBalancerSpec: The specification for the pilot load balancer.
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
     * @Property playgroundScene: The playground scene configuration.
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
     * @Property telemetry: Specifies whether to enable Prometheus monitoring. We recommend that you use Application Real-Time Monitoring Service (ARMS).
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
     * @Property webAssemblyFilterEnabled: Specifies whether to enable WebAssembly filter.
     */
    readonly webAssemblyFilterEnabled?: boolean | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ASM::ServiceMesh`, which is used to create a Service Mesh (ASM) instance.
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
     * @Property accessLogEnabled: Specifies whether to enable access logging.
     */
    accessLogEnabled: boolean | ros.IResolvable | undefined;
    /**
     * @Property accessLogFile: Enable and disable access logs. Value:
     * - "" : Turn off access logs.
     * - \/dev\/stdout: Enables access logging
     */
    accessLogFile: string | ros.IResolvable | undefined;
    /**
     * @Property accessLogFormat: The format of access logs.
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
     * @Property autoRenewPeriod: ChargeType is a PrePay. Indicates the automatic renewal time when purchasing a CLB of the year and month type. If the purchase is less than 1 year old, this parameter indicates how many months the auto-renewal will take. If the purchase is longer than 1 year, this parameter indicates how many years the automatic renewal will be made.
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
     * @Property controlPlaneLogEnabled: Specifies whether to enable control plane logging.
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
     * @Property customizedPrometheus: Specifies whether to use a customized Prometheus system.
     */
    customizedPrometheus: boolean | ros.IResolvable | undefined;
    /**
     * @Property customizedZipkin: Specifies whether to use a user-created Zipkin system.
     */
    customizedZipkin: boolean | ros.IResolvable | undefined;
    /**
     * @Property dnsProxyingEnabled: Specifies whether to enable DNS proxying.
     */
    dnsProxyingEnabled: boolean | ros.IResolvable | undefined;
    /**
     * @Property dubboFilterEnabled: Specifies whether to enable Dubbo filter.
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
     * @Property enableCrHistory: Specifies whether to enable CR history.
     */
    enableCrHistory: boolean | ros.IResolvable | undefined;
    /**
     * @Property enableSdsServer: Specifies whether to enable SDS server.
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
     * @Property existingCaType: The type of existing CA.
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
     * @Property filterGatewayClusterConfig: Specifies whether to filter gateway cluster configuration.
     */
    filterGatewayClusterConfig: boolean | ros.IResolvable | undefined;
    /**
     * @Property gatewayApiEnabled: Specifies whether to enable Gateway API.
     */
    gatewayApiEnabled: boolean | ros.IResolvable | undefined;
    /**
     * @Property guestCluster: The guest cluster configuration.
     */
    guestCluster: string | ros.IResolvable | undefined;
    /**
     * @Property includeIpRanges: The Classless Inter-Domain Routing (CIDR) block in the ASM instance that are denied
     * to access external services.
     */
    includeIpRanges: string | ros.IResolvable | undefined;
    /**
     * @Property istioVersion: The Istio version of the ASM instance.
     */
    istioVersion: string | ros.IResolvable | undefined;
    /**
     * @Property kialiEnabled: Specifies whether to enable Kiali.
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
     * @Property mseEnabled: Specifies whether to enable MSE.
     */
    mseEnabled: boolean | ros.IResolvable | undefined;
    /**
     * @Property multiBufferEnabled: Specifies whether to enable multi-buffer.
     */
    multiBufferEnabled: boolean | ros.IResolvable | undefined;
    /**
     * @Property multiBufferPollDelay: The poll delay for multi-buffer.
     */
    multiBufferPollDelay: string | ros.IResolvable | undefined;
    /**
     * @Property mysqlFilterEnabled: Specifies whether to enable MySQL filter.
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
     * @Property opaEnabled: Specifies whether to enable OPA.
     */
    opaEnabled: boolean | ros.IResolvable | undefined;
    /**
     * @Property outboundTrafficPolicy: The outbound traffic policy of the ASM instance.
     */
    outboundTrafficPolicy: string | ros.IResolvable | undefined;
    /**
     * @Property period: The subscription period.
     */
    period: number | ros.IResolvable | undefined;
    /**
     * @Property pilotLoadBalancerSpec: The specification for the pilot load balancer.
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
     * @Property playgroundScene: The playground scene configuration.
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
     * @Property telemetry: Specifies whether to enable Prometheus monitoring. We recommend that you use Application Real-Time Monitoring Service (ARMS).
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
     * @Property webAssemblyFilterEnabled: Specifies whether to enable WebAssembly filter.
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
