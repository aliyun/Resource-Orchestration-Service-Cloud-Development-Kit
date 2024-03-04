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
     * @Property customizedZipkin: Specifies whether to use a user-created Zipkin system.
     */
    readonly customizedZipkin?: boolean | ros.IResolvable;
    /**
     * @Property enableAudit: Specifies whether to enable the mesh audit feature. To enable this feature, make sure
     * that you have activated Alibaba Cloud Log Service.
     * Valid values: true and false. Default value: false.
     */
    readonly enableAudit?: boolean | ros.IResolvable;
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
     * @Property localityLoadBalancing: Specifies whether to route traffic to the nearest instance.
     * Valid values: true and false. Default value: false.
     */
    readonly localityLoadBalancing?: boolean | ros.IResolvable;
    /**
     * @Property name: The name of the ASM instance.
     */
    readonly name?: string | ros.IResolvable;
    /**
     * @Property opa: OPA settings.
     */
    readonly opa?: RosServiceMesh.OPAProperty | ros.IResolvable;
    /**
     * @Property outboundTrafficPolicy: The outbound traffic policy of the ASM instance.
     */
    readonly outboundTrafficPolicy?: string | ros.IResolvable;
    /**
     * @Property pilotPublicEip: Specifies whether to expose Istio Pilot to the Internet.
     * Valid values: true and false. Default value: false.
     * If you do not set this parameter, only clusters in the same VPC as the ASM instance
     * can access Istio Pilot of the instance.
     */
    readonly pilotPublicEip?: boolean | ros.IResolvable;
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
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ASM::ServiceMesh`, which is used to create an Alibaba Cloud Service Mesh (ASM) instance.
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
     * @Property customizedZipkin: Specifies whether to use a user-created Zipkin system.
     */
    customizedZipkin: boolean | ros.IResolvable | undefined;
    /**
     * @Property enableAudit: Specifies whether to enable the mesh audit feature. To enable this feature, make sure
     * that you have activated Alibaba Cloud Log Service.
     * Valid values: true and false. Default value: false.
     */
    enableAudit: boolean | ros.IResolvable | undefined;
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
     * @Property localityLoadBalancing: Specifies whether to route traffic to the nearest instance.
     * Valid values: true and false. Default value: false.
     */
    localityLoadBalancing: boolean | ros.IResolvable | undefined;
    /**
     * @Property name: The name of the ASM instance.
     */
    name: string | ros.IResolvable | undefined;
    /**
     * @Property opa: OPA settings.
     */
    opa: RosServiceMesh.OPAProperty | ros.IResolvable | undefined;
    /**
     * @Property outboundTrafficPolicy: The outbound traffic policy of the ASM instance.
     */
    outboundTrafficPolicy: string | ros.IResolvable | undefined;
    /**
     * @Property pilotPublicEip: Specifies whether to expose Istio Pilot to the Internet.
     * Valid values: true and false. Default value: false.
     * If you do not set this parameter, only clusters in the same VPC as the ASM instance
     * can access Istio Pilot of the instance.
     */
    pilotPublicEip: boolean | ros.IResolvable | undefined;
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
