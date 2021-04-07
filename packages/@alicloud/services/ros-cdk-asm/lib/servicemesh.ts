import * as ros from '@alicloud/ros-cdk-core';
import { RosServiceMesh } from './asm.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosServiceMesh as ServiceMeshProperty };

/**
 * Properties for defining a `ALIYUN::ASM::ServiceMesh`
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
     * Property customizedZipkin: Specifies whether to use a user-created Zipkin system.
     */
    readonly customizedZipkin?: boolean | ros.IResolvable;

    /**
     * Property enableAudit: Specifies whether to enable the mesh audit feature. To enable this feature, make sure
     * that you have activated Alibaba Cloud Log Service.
     * Valid values: true and false. Default value: false.
     */
    readonly enableAudit?: boolean | ros.IResolvable;

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
     * Property localityLoadBalancing: Specifies whether to route traffic to the nearest instance.
     * Valid values: true and false. Default value: false.
     */
    readonly localityLoadBalancing?: boolean | ros.IResolvable;

    /**
     * Property name: The name of the ASM instance.
     */
    readonly name?: string | ros.IResolvable;

    /**
     * Property opa: OPA settings.
     */
    readonly opa?: RosServiceMesh.OPAProperty | ros.IResolvable;

    /**
     * Property outboundTrafficPolicy: The outbound traffic policy of the ASM instance.
     */
    readonly outboundTrafficPolicy?: string | ros.IResolvable;

    /**
     * Property pilotPublicEip: Specifies whether to expose Istio Pilot to the Internet.
     * Valid values: true and false. Default value: false.
     * If you do not set this parameter, only clusters in the same VPC as the ASM instance
     * can access Istio Pilot of the instance.
     */
    readonly pilotPublicEip?: boolean | ros.IResolvable;

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
}

/**
 * A ROS resource type:  `ALIYUN::ASM::ServiceMesh`
 */
export class ServiceMesh extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute ServiceMeshId: The ID of the ASM instance.
     */
    public readonly attrServiceMeshId: ros.IResolvable;

    /**
     * Create a new `ALIYUN::ASM::ServiceMesh`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ServiceMeshProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosServiceMesh = new RosServiceMesh(this, id,  {
            enableAudit: props.enableAudit,
            opa: props.opa,
            istioVersion: props.istioVersion,
            apiServerPublicEip: props.apiServerPublicEip,
            localityLoadBalancing: props.localityLoadBalancing,
            telemetry: props.telemetry,
            outboundTrafficPolicy: props.outboundTrafficPolicy,
            auditProject: props.auditProject,
            traceSampling: props.traceSampling,
            name: props.name,
            proxy: props.proxy,
            vpcId: props.vpcId,
            pilotPublicEip: props.pilotPublicEip,
            includeIpRanges: props.includeIpRanges,
            vSwitches: props.vSwitches,
            tracing: props.tracing,
            customizedZipkin: props.customizedZipkin,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosServiceMesh;
        this.attrServiceMeshId = rosServiceMesh.attrServiceMeshId;
    }
}
