// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `ALIYUN::ASM::ServiceMesh`
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
 * Determine whether the given properties match those of a `RosServiceMeshProps`
 *
 * @param properties - the TypeScript properties of a `RosServiceMeshProps`
 *
 * @returns the result of the validation.
 */
function RosServiceMeshPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('enableAudit', ros.validateBoolean)(properties.enableAudit));
    errors.collect(ros.propertyValidator('opa', RosServiceMesh_OPAPropertyValidator)(properties.opa));
    errors.collect(ros.propertyValidator('istioVersion', ros.validateString)(properties.istioVersion));
    errors.collect(ros.propertyValidator('apiServerPublicEip', ros.validateBoolean)(properties.apiServerPublicEip));
    errors.collect(ros.propertyValidator('localityLoadBalancing', ros.validateBoolean)(properties.localityLoadBalancing));
    errors.collect(ros.propertyValidator('telemetry', ros.validateBoolean)(properties.telemetry));
    errors.collect(ros.propertyValidator('outboundTrafficPolicy', ros.validateString)(properties.outboundTrafficPolicy));
    errors.collect(ros.propertyValidator('auditProject', ros.validateString)(properties.auditProject));
    errors.collect(ros.propertyValidator('traceSampling', ros.validateNumber)(properties.traceSampling));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    errors.collect(ros.propertyValidator('proxy', RosServiceMesh_ProxyPropertyValidator)(properties.proxy));
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('pilotPublicEip', ros.validateBoolean)(properties.pilotPublicEip));
    errors.collect(ros.propertyValidator('includeIpRanges', ros.validateString)(properties.includeIpRanges));
    errors.collect(ros.propertyValidator('vSwitches', ros.requiredValidator)(properties.vSwitches));
    errors.collect(ros.propertyValidator('vSwitches', ros.listValidator(ros.validateAny))(properties.vSwitches));
    errors.collect(ros.propertyValidator('tracing', ros.validateBoolean)(properties.tracing));
    errors.collect(ros.propertyValidator('customizedZipkin', ros.validateBoolean)(properties.customizedZipkin));
    return errors.wrap('supplied properties not correct for "RosServiceMeshProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ASM::ServiceMesh` resource
 *
 * @param properties - the TypeScript properties of a `RosServiceMeshProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ASM::ServiceMesh` resource.
 */
// @ts-ignore TS6133
function rosServiceMeshPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosServiceMeshPropsValidator(properties).assertSuccess();
    }
    return {
      VpcId: ros.stringToRosTemplate(properties.vpcId),
      VSwitches: ros.listMapper(ros.objectToRosTemplate)(properties.vSwitches),
      ApiServerPublicEip: ros.booleanToRosTemplate(properties.apiServerPublicEip),
      AuditProject: ros.stringToRosTemplate(properties.auditProject),
      CustomizedZipkin: ros.booleanToRosTemplate(properties.customizedZipkin),
      EnableAudit: ros.booleanToRosTemplate(properties.enableAudit),
      IncludeIPRanges: ros.stringToRosTemplate(properties.includeIpRanges),
      IstioVersion: ros.stringToRosTemplate(properties.istioVersion),
      LocalityLoadBalancing: ros.booleanToRosTemplate(properties.localityLoadBalancing),
      Name: ros.stringToRosTemplate(properties.name),
      OPA: rosServiceMeshOPAPropertyToRosTemplate(properties.opa),
      OutboundTrafficPolicy: ros.stringToRosTemplate(properties.outboundTrafficPolicy),
      PilotPublicEip: ros.booleanToRosTemplate(properties.pilotPublicEip),
      Proxy: rosServiceMeshProxyPropertyToRosTemplate(properties.proxy),
      Telemetry: ros.booleanToRosTemplate(properties.telemetry),
      TraceSampling: ros.numberToRosTemplate(properties.traceSampling),
      Tracing: ros.booleanToRosTemplate(properties.tracing),
    };
}

/**
 * A ROS template type:  `ALIYUN::ASM::ServiceMesh`
 */
export class RosServiceMesh extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ASM::ServiceMesh";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ServiceMeshId: The ID of the ASM instance.
     */
    public readonly attrServiceMeshId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property vpcId: The ID of the virtual private cloud (VPC).
     */
    public vpcId: string | ros.IResolvable;

    /**
     * @Property vSwitches: The ID of the vSwitch, eg: ["vsw-xzegf5dndkbf4m6eg****"]
     */
    public vSwitches: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property apiServerPublicEip: Specifies whether to expose the API server to the Internet.
     * Valid values: true and false. Default value: false.
     * If you do not set this parameter, the API server of clusters added to the ASM instance
     * cannot be accessed from the Internet.
     */
    public apiServerPublicEip: boolean | ros.IResolvable | undefined;

    /**
     * @Property auditProject: The name of the Log Service project that is used for mesh audit.
     * Default value: mesh-log-{meshId}.
     */
    public auditProject: string | ros.IResolvable | undefined;

    /**
     * @Property customizedZipkin: Specifies whether to use a user-created Zipkin system.
     */
    public customizedZipkin: boolean | ros.IResolvable | undefined;

    /**
     * @Property enableAudit: Specifies whether to enable the mesh audit feature. To enable this feature, make sure
     * that you have activated Alibaba Cloud Log Service.
     * Valid values: true and false. Default value: false.
     */
    public enableAudit: boolean | ros.IResolvable | undefined;

    /**
     * @Property includeIpRanges: The Classless Inter-Domain Routing (CIDR) block in the ASM instance that are denied
     * to access external services.
     */
    public includeIpRanges: string | ros.IResolvable | undefined;

    /**
     * @Property istioVersion: The Istio version of the ASM instance.
     */
    public istioVersion: string | ros.IResolvable | undefined;

    /**
     * @Property localityLoadBalancing: Specifies whether to route traffic to the nearest instance.
     * Valid values: true and false. Default value: false.
     */
    public localityLoadBalancing: boolean | ros.IResolvable | undefined;

    /**
     * @Property name: The name of the ASM instance.
     */
    public name: string | ros.IResolvable | undefined;

    /**
     * @Property opa: OPA settings.
     */
    public opa: RosServiceMesh.OPAProperty | ros.IResolvable | undefined;

    /**
     * @Property outboundTrafficPolicy: The outbound traffic policy of the ASM instance.
     */
    public outboundTrafficPolicy: string | ros.IResolvable | undefined;

    /**
     * @Property pilotPublicEip: Specifies whether to expose Istio Pilot to the Internet.
     * Valid values: true and false. Default value: false.
     * If you do not set this parameter, only clusters in the same VPC as the ASM instance
     * can access Istio Pilot of the instance.
     */
    public pilotPublicEip: boolean | ros.IResolvable | undefined;

    /**
     * @Property proxy: Proxy settings.
     */
    public proxy: RosServiceMesh.ProxyProperty | ros.IResolvable | undefined;

    /**
     * @Property telemetry: Specifies whether to enable Prometheus monitoring. We recommend that you use Application Real-Time Monitoring Service (ARMS).
     */
    public telemetry: boolean | ros.IResolvable | undefined;

    /**
     * @Property traceSampling: The sampling percentage of tracing.
     */
    public traceSampling: number | ros.IResolvable | undefined;

    /**
     * @Property tracing: Specifies whether to enable the tracing feature. To enable this feature, make sure
     * that you have activated Alibaba Cloud Tracing Analysis.
     * Valid values: true and false. Default value: false.
     */
    public tracing: boolean | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::ASM::ServiceMesh`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosServiceMeshProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosServiceMesh.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrServiceMeshId = this.getAtt('ServiceMeshId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.vpcId = props.vpcId;
        this.vSwitches = props.vSwitches;
        this.apiServerPublicEip = props.apiServerPublicEip;
        this.auditProject = props.auditProject;
        this.customizedZipkin = props.customizedZipkin;
        this.enableAudit = props.enableAudit;
        this.includeIpRanges = props.includeIpRanges;
        this.istioVersion = props.istioVersion;
        this.localityLoadBalancing = props.localityLoadBalancing;
        this.name = props.name;
        this.opa = props.opa;
        this.outboundTrafficPolicy = props.outboundTrafficPolicy;
        this.pilotPublicEip = props.pilotPublicEip;
        this.proxy = props.proxy;
        this.telemetry = props.telemetry;
        this.traceSampling = props.traceSampling;
        this.tracing = props.tracing;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            vpcId: this.vpcId,
            vSwitches: this.vSwitches,
            apiServerPublicEip: this.apiServerPublicEip,
            auditProject: this.auditProject,
            customizedZipkin: this.customizedZipkin,
            enableAudit: this.enableAudit,
            includeIpRanges: this.includeIpRanges,
            istioVersion: this.istioVersion,
            localityLoadBalancing: this.localityLoadBalancing,
            name: this.name,
            opa: this.opa,
            outboundTrafficPolicy: this.outboundTrafficPolicy,
            pilotPublicEip: this.pilotPublicEip,
            proxy: this.proxy,
            telemetry: this.telemetry,
            traceSampling: this.traceSampling,
            tracing: this.tracing,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosServiceMeshPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosServiceMesh {
    /**
     * @stability external
     */
    export interface OPAProperty {
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
/**
 * Determine whether the given properties match those of a `OPAProperty`
 *
 * @param properties - the TypeScript properties of a `OPAProperty`
 *
 * @returns the result of the validation.
 */
function RosServiceMesh_OPAPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('opaRequestCpu', ros.validateString)(properties.opaRequestCpu));
    errors.collect(ros.propertyValidator('openAgentPolicy', ros.validateBoolean)(properties.openAgentPolicy));
    errors.collect(ros.propertyValidator('opaLogLevel', ros.validateString)(properties.opaLogLevel));
    errors.collect(ros.propertyValidator('opaLimitCpu', ros.validateString)(properties.opaLimitCpu));
    errors.collect(ros.propertyValidator('opaLimitMemory', ros.validateString)(properties.opaLimitMemory));
    errors.collect(ros.propertyValidator('opaRequestMemory', ros.validateString)(properties.opaRequestMemory));
    return errors.wrap('supplied properties not correct for "OPAProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ASM::ServiceMesh.OPA` resource
 *
 * @param properties - the TypeScript properties of a `OPAProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ASM::ServiceMesh.OPA` resource.
 */
// @ts-ignore TS6133
function rosServiceMeshOPAPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosServiceMesh_OPAPropertyValidator(properties).assertSuccess();
    return {
      OPARequestCPU: ros.stringToRosTemplate(properties.opaRequestCpu),
      OpenAgentPolicy: ros.booleanToRosTemplate(properties.openAgentPolicy),
      OPALogLevel: ros.stringToRosTemplate(properties.opaLogLevel),
      OPALimitCPU: ros.stringToRosTemplate(properties.opaLimitCpu),
      OPALimitMemory: ros.stringToRosTemplate(properties.opaLimitMemory),
      OPARequestMemory: ros.stringToRosTemplate(properties.opaRequestMemory),
    };
}

export namespace RosServiceMesh {
    /**
     * @stability external
     */
    export interface ProxyProperty {
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
/**
 * Determine whether the given properties match those of a `ProxyProperty`
 *
 * @param properties - the TypeScript properties of a `ProxyProperty`
 *
 * @returns the result of the validation.
 */
function RosServiceMesh_ProxyPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('clusterDomain', ros.validateString)(properties.clusterDomain));
    errors.collect(ros.propertyValidator('proxyLimitCpu', ros.validateString)(properties.proxyLimitCpu));
    errors.collect(ros.propertyValidator('proxyLimitMemory', ros.validateString)(properties.proxyLimitMemory));
    errors.collect(ros.propertyValidator('proxyRequestCpu', ros.validateString)(properties.proxyRequestCpu));
    errors.collect(ros.propertyValidator('proxyRequestMemory', ros.validateString)(properties.proxyRequestMemory));
    return errors.wrap('supplied properties not correct for "ProxyProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ASM::ServiceMesh.Proxy` resource
 *
 * @param properties - the TypeScript properties of a `ProxyProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ASM::ServiceMesh.Proxy` resource.
 */
// @ts-ignore TS6133
function rosServiceMeshProxyPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosServiceMesh_ProxyPropertyValidator(properties).assertSuccess();
    return {
      ClusterDomain: ros.stringToRosTemplate(properties.clusterDomain),
      ProxyLimitCPU: ros.stringToRosTemplate(properties.proxyLimitCpu),
      ProxyLimitMemory: ros.stringToRosTemplate(properties.proxyLimitMemory),
      ProxyRequestCPU: ros.stringToRosTemplate(properties.proxyRequestCpu),
      ProxyRequestMemory: ros.stringToRosTemplate(properties.proxyRequestMemory),
    };
}
