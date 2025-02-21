import * as ros from '@alicloud/ros-cdk-core';
import { RosServiceMesh } from './asm.generated';
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
     * Property accessLogEnabled: Specifies whether to enable access logging.
     */
    readonly accessLogEnabled?: boolean | ros.IResolvable;
    /**
     * Property accessLogFile: Enable and disable access logs. Value:
     * - "" : Turn off access logs.
     * - \/dev\/stdout: Enables access logging
     */
    readonly accessLogFile?: string | ros.IResolvable;
    /**
     * Property accessLogFormat: The format of access logs.
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
     * Property autoRenewPeriod: ChargeType is a PrePay. Indicates the automatic renewal time when purchasing a CLB of the year and month type. If the purchase is less than 1 year old, this parameter indicates how many months the auto-renewal will take. If the purchase is longer than 1 year, this parameter indicates how many years the automatic renewal will be made.
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
     * Property controlPlaneLogEnabled: Specifies whether to enable control plane logging.
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
     * Property customizedPrometheus: Specifies whether to use a customized Prometheus system.
     */
    readonly customizedPrometheus?: boolean | ros.IResolvable;
    /**
     * Property customizedZipkin: Specifies whether to use a user-created Zipkin system.
     */
    readonly customizedZipkin?: boolean | ros.IResolvable;
    /**
     * Property dnsProxyingEnabled: Specifies whether to enable DNS proxying.
     */
    readonly dnsProxyingEnabled?: boolean | ros.IResolvable;
    /**
     * Property dubboFilterEnabled: Specifies whether to enable Dubbo filter.
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
     * Property enableCrHistory: Specifies whether to enable CR history.
     */
    readonly enableCrHistory?: boolean | ros.IResolvable;
    /**
     * Property enableSdsServer: Specifies whether to enable SDS server.
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
     * Property existingCaType: The type of existing CA.
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
     * Property filterGatewayClusterConfig: Specifies whether to filter gateway cluster configuration.
     */
    readonly filterGatewayClusterConfig?: boolean | ros.IResolvable;
    /**
     * Property gatewayApiEnabled: Specifies whether to enable Gateway API.
     */
    readonly gatewayApiEnabled?: boolean | ros.IResolvable;
    /**
     * Property guestCluster: The guest cluster configuration.
     */
    readonly guestCluster?: string | ros.IResolvable;
    /**
     * Property includeIpRanges: The Classless Inter-Domain Routing (CIDR) block in the ASM instance that are denied
     * to access external services.
     */
    readonly includeIpRanges?: string | ros.IResolvable;
    /**
     * Property istioVersion: The Istio version of the ASM instance.
     */
    readonly istioVersion?: string | ros.IResolvable;
    /**
     * Property kialiEnabled: Specifies whether to enable Kiali.
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
     * Property mseEnabled: Specifies whether to enable MSE.
     */
    readonly mseEnabled?: boolean | ros.IResolvable;
    /**
     * Property multiBufferEnabled: Specifies whether to enable multi-buffer.
     */
    readonly multiBufferEnabled?: boolean | ros.IResolvable;
    /**
     * Property multiBufferPollDelay: The poll delay for multi-buffer.
     */
    readonly multiBufferPollDelay?: string | ros.IResolvable;
    /**
     * Property mysqlFilterEnabled: Specifies whether to enable MySQL filter.
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
     * Property opaEnabled: Specifies whether to enable OPA.
     */
    readonly opaEnabled?: boolean | ros.IResolvable;
    /**
     * Property outboundTrafficPolicy: The outbound traffic policy of the ASM instance.
     */
    readonly outboundTrafficPolicy?: string | ros.IResolvable;
    /**
     * Property period: The subscription period.
     */
    readonly period?: number | ros.IResolvable;
    /**
     * Property pilotLoadBalancerSpec: The specification for the pilot load balancer.
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
     * Property playgroundScene: The playground scene configuration.
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
     * Property telemetry: Specifies whether to enable Prometheus monitoring. We recommend that you use Application Real-Time Monitoring Service (ARMS).
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
     * Property webAssemblyFilterEnabled: Specifies whether to enable WebAssembly filter.
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::ASM::ServiceMesh`, which is used to create a Service Mesh (ASM) instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosServiceMesh`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-asm-servicemesh
 */
export declare class ServiceMesh extends ros.Resource implements IServiceMesh {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ServiceMeshProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ServiceMeshId: The ID of the ASM instance.
     */
    readonly attrServiceMeshId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ServiceMeshProps, enableResourcePropertyConstraint?: boolean);
}
