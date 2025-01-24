// Generated from the AliCloud ROS Resource Specification

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
 * Determine whether the given properties match those of a `RosServiceMeshProps`
 *
 * @param properties - the TypeScript properties of a `RosServiceMeshProps`
 *
 * @returns the result of the validation.
 */
function RosServiceMeshPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('excludeInboundPorts', ros.validateString)(properties.excludeInboundPorts));
    errors.collect(ros.propertyValidator('opa', RosServiceMesh_OPAPropertyValidator)(properties.opa));
    errors.collect(ros.propertyValidator('dubboFilterEnabled', ros.validateBoolean)(properties.dubboFilterEnabled));
    errors.collect(ros.propertyValidator('prometheusUrl', ros.validateString)(properties.prometheusUrl));
    errors.collect(ros.propertyValidator('localityLoadBalancing', ros.validateBoolean)(properties.localityLoadBalancing));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    if(properties.accessLogServicePort && (typeof properties.accessLogServicePort) !== 'object') {
        errors.collect(ros.propertyValidator('accessLogServicePort', ros.validateRange)({
            data: properties.accessLogServicePort,
            min: 0,
            max: 65535,
          }));
    }
    errors.collect(ros.propertyValidator('accessLogServicePort', ros.validateNumber)(properties.accessLogServicePort));
    if(properties.apiServerLoadBalancerSpec && (typeof properties.apiServerLoadBalancerSpec) !== 'object') {
        errors.collect(ros.propertyValidator('apiServerLoadBalancerSpec', ros.validateAllowedValues)({
          data: properties.apiServerLoadBalancerSpec,
          allowedValues: ["slb.s1.small","slb.s2.small","slb.s2.medium","slb.s3.small","slb.s3.medium","slb.s3.large"],
        }));
    }
    errors.collect(ros.propertyValidator('apiServerLoadBalancerSpec', ros.validateString)(properties.apiServerLoadBalancerSpec));
    errors.collect(ros.propertyValidator('multiBufferEnabled', ros.validateBoolean)(properties.multiBufferEnabled));
    errors.collect(ros.propertyValidator('dnsProxyingEnabled', ros.validateBoolean)(properties.dnsProxyingEnabled));
    errors.collect(ros.propertyValidator('opaEnabled', ros.validateBoolean)(properties.opaEnabled));
    errors.collect(ros.propertyValidator('existingCaType', ros.validateString)(properties.existingCaType));
    errors.collect(ros.propertyValidator('excludeIpRanges', ros.validateString)(properties.excludeIpRanges));
    errors.collect(ros.propertyValidator('vSwitches', ros.requiredValidator)(properties.vSwitches));
    errors.collect(ros.propertyValidator('vSwitches', ros.listValidator(ros.validateAny))(properties.vSwitches));
    errors.collect(ros.propertyValidator('guestCluster', ros.validateString)(properties.guestCluster));
    errors.collect(ros.propertyValidator('accessLogServiceEnabled', ros.validateBoolean)(properties.accessLogServiceEnabled));
    errors.collect(ros.propertyValidator('localityLbConf', ros.validateString)(properties.localityLbConf));
    errors.collect(ros.propertyValidator('mseEnabled', ros.validateBoolean)(properties.mseEnabled));
    errors.collect(ros.propertyValidator('istioVersion', ros.validateString)(properties.istioVersion));
    if(properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateRange)({
            data: properties.period,
            min: 1,
            max: 36,
          }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    errors.collect(ros.propertyValidator('accessLogServiceHost', ros.validateString)(properties.accessLogServiceHost));
    errors.collect(ros.propertyValidator('outboundTrafficPolicy', ros.validateString)(properties.outboundTrafficPolicy));
    errors.collect(ros.propertyValidator('playgroundScene', ros.validateString)(properties.playgroundScene));
    errors.collect(ros.propertyValidator('edition', ros.validateString)(properties.edition));
    errors.collect(ros.propertyValidator('gatewayApiEnabled', ros.validateBoolean)(properties.gatewayApiEnabled));
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('includeIpRanges', ros.validateString)(properties.includeIpRanges));
    errors.collect(ros.propertyValidator('controlPlaneLogEnabled', ros.validateBoolean)(properties.controlPlaneLogEnabled));
    errors.collect(ros.propertyValidator('tracing', ros.validateBoolean)(properties.tracing));
    errors.collect(ros.propertyValidator('configSourceNacosId', ros.validateString)(properties.configSourceNacosId));
    errors.collect(ros.propertyValidator('accessLogEnabled', ros.validateBoolean)(properties.accessLogEnabled));
    errors.collect(ros.propertyValidator('certChain', ros.validateString)(properties.certChain));
    errors.collect(ros.propertyValidator('autoRenew', ros.validateBoolean)(properties.autoRenew));
    errors.collect(ros.propertyValidator('pilotLoadBalancerSpec', ros.validateString)(properties.pilotLoadBalancerSpec));
    errors.collect(ros.propertyValidator('existingRootCaCert', ros.validateString)(properties.existingRootCaCert));
    errors.collect(ros.propertyValidator('proxy', RosServiceMesh_ProxyPropertyValidator)(properties.proxy));
    errors.collect(ros.propertyValidator('customizedPrometheus', ros.validateBoolean)(properties.customizedPrometheus));
    errors.collect(ros.propertyValidator('multiBufferPollDelay', ros.validateString)(properties.multiBufferPollDelay));
    errors.collect(ros.propertyValidator('mysqlFilterEnabled', ros.validateBoolean)(properties.mysqlFilterEnabled));
    errors.collect(ros.propertyValidator('enableSdsServer', ros.validateBoolean)(properties.enableSdsServer));
    errors.collect(ros.propertyValidator('enableAmbient', ros.validateBoolean)(properties.enableAmbient));
    errors.collect(ros.propertyValidator('controlPlaneLogProject', ros.validateString)(properties.controlPlaneLogProject));
    if(properties.autoRenewPeriod && (typeof properties.autoRenewPeriod) !== 'object') {
        errors.collect(ros.propertyValidator('autoRenewPeriod', ros.validateAllowedValues)({
          data: properties.autoRenewPeriod,
          allowedValues: [1,2,3,6],
        }));
    }
    errors.collect(ros.propertyValidator('autoRenewPeriod', ros.validateNumber)(properties.autoRenewPeriod));
    errors.collect(ros.propertyValidator('enableAudit', ros.validateBoolean)(properties.enableAudit));
    errors.collect(ros.propertyValidator('configSourceEnabled', ros.validateBoolean)(properties.configSourceEnabled));
    errors.collect(ros.propertyValidator('accessLogProject', ros.validateString)(properties.accessLogProject));
    errors.collect(ros.propertyValidator('accessLogFormat', ros.validateString)(properties.accessLogFormat));
    errors.collect(ros.propertyValidator('filterGatewayClusterConfig', ros.validateBoolean)(properties.filterGatewayClusterConfig));
    errors.collect(ros.propertyValidator('accessLogFile', ros.validateString)(properties.accessLogFile));
    if(properties.clusterSpec && (typeof properties.clusterSpec) !== 'object') {
        errors.collect(ros.propertyValidator('clusterSpec', ros.validateAllowedValues)({
          data: properties.clusterSpec,
          allowedValues: ["standard","enterprise","ultimate"],
        }));
    }
    errors.collect(ros.propertyValidator('clusterSpec', ros.validateString)(properties.clusterSpec));
    errors.collect(ros.propertyValidator('apiServerPublicEip', ros.validateBoolean)(properties.apiServerPublicEip));
    errors.collect(ros.propertyValidator('telemetry', ros.validateBoolean)(properties.telemetry));
    errors.collect(ros.propertyValidator('auditProject', ros.validateString)(properties.auditProject));
    errors.collect(ros.propertyValidator('useExistingCa', ros.validateBoolean)(properties.useExistingCa));
    errors.collect(ros.propertyValidator('traceSampling', ros.validateNumber)(properties.traceSampling));
    errors.collect(ros.propertyValidator('enableCrHistory', ros.validateBoolean)(properties.enableCrHistory));
    errors.collect(ros.propertyValidator('kialiEnabled', ros.validateBoolean)(properties.kialiEnabled));
    errors.collect(ros.propertyValidator('webAssemblyFilterEnabled', ros.validateBoolean)(properties.webAssemblyFilterEnabled));
    errors.collect(ros.propertyValidator('existingRootCaKey', ros.validateString)(properties.existingRootCaKey));
    errors.collect(ros.propertyValidator('pilotPublicEip', ros.validateBoolean)(properties.pilotPublicEip));
    if(properties.chargeType && (typeof properties.chargeType) !== 'object') {
        errors.collect(ros.propertyValidator('chargeType', ros.validateAllowedValues)({
          data: properties.chargeType,
          allowedValues: ["PayAsYouGo","PostPaid","PayOnDemand","Postpaid","PostPay","Postpay","POSTPAY","POST","Subscription","PrePaid","Prepaid","PrePay","Prepay","PREPAY","PRE"],
        }));
    }
    errors.collect(ros.propertyValidator('chargeType', ros.validateString)(properties.chargeType));
    errors.collect(ros.propertyValidator('crAggregationEnabled', ros.validateBoolean)(properties.crAggregationEnabled));
    errors.collect(ros.propertyValidator('excludeOutboundPorts', ros.validateString)(properties.excludeOutboundPorts));
    errors.collect(ros.propertyValidator('existingCaKey', ros.validateString)(properties.existingCaKey));
    errors.collect(ros.propertyValidator('enableAcmg', ros.validateBoolean)(properties.enableAcmg));
    errors.collect(ros.propertyValidator('existingCaCert', ros.validateString)(properties.existingCaCert));
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
      'VpcId': ros.stringToRosTemplate(properties.vpcId),
      'VSwitches': ros.listMapper(ros.objectToRosTemplate)(properties.vSwitches),
      'AccessLogEnabled': ros.booleanToRosTemplate(properties.accessLogEnabled),
      'AccessLogFile': ros.stringToRosTemplate(properties.accessLogFile),
      'AccessLogFormat': ros.stringToRosTemplate(properties.accessLogFormat),
      'AccessLogProject': ros.stringToRosTemplate(properties.accessLogProject),
      'AccessLogServiceEnabled': ros.booleanToRosTemplate(properties.accessLogServiceEnabled),
      'AccessLogServiceHost': ros.stringToRosTemplate(properties.accessLogServiceHost),
      'AccessLogServicePort': ros.numberToRosTemplate(properties.accessLogServicePort),
      'ApiServerLoadBalancerSpec': ros.stringToRosTemplate(properties.apiServerLoadBalancerSpec),
      'ApiServerPublicEip': ros.booleanToRosTemplate(properties.apiServerPublicEip),
      'AuditProject': ros.stringToRosTemplate(properties.auditProject),
      'AutoRenew': ros.booleanToRosTemplate(properties.autoRenew),
      'AutoRenewPeriod': ros.numberToRosTemplate(properties.autoRenewPeriod),
      'CertChain': ros.stringToRosTemplate(properties.certChain),
      'ChargeType': ros.stringToRosTemplate(properties.chargeType),
      'ClusterSpec': ros.stringToRosTemplate(properties.clusterSpec),
      'ConfigSourceEnabled': ros.booleanToRosTemplate(properties.configSourceEnabled),
      'ConfigSourceNacosID': ros.stringToRosTemplate(properties.configSourceNacosId),
      'ControlPlaneLogEnabled': ros.booleanToRosTemplate(properties.controlPlaneLogEnabled),
      'ControlPlaneLogProject': ros.stringToRosTemplate(properties.controlPlaneLogProject),
      'CRAggregationEnabled': ros.booleanToRosTemplate(properties.crAggregationEnabled),
      'CustomizedPrometheus': ros.booleanToRosTemplate(properties.customizedPrometheus),
      'CustomizedZipkin': ros.booleanToRosTemplate(properties.customizedZipkin),
      'DNSProxyingEnabled': ros.booleanToRosTemplate(properties.dnsProxyingEnabled),
      'DubboFilterEnabled': ros.booleanToRosTemplate(properties.dubboFilterEnabled),
      'Edition': ros.stringToRosTemplate(properties.edition),
      'EnableACMG': ros.booleanToRosTemplate(properties.enableAcmg),
      'EnableAmbient': ros.booleanToRosTemplate(properties.enableAmbient),
      'EnableAudit': ros.booleanToRosTemplate(properties.enableAudit),
      'EnableCRHistory': ros.booleanToRosTemplate(properties.enableCrHistory),
      'EnableSDSServer': ros.booleanToRosTemplate(properties.enableSdsServer),
      'ExcludeInboundPorts': ros.stringToRosTemplate(properties.excludeInboundPorts),
      'ExcludeIPRanges': ros.stringToRosTemplate(properties.excludeIpRanges),
      'ExcludeOutboundPorts': ros.stringToRosTemplate(properties.excludeOutboundPorts),
      'ExistingCaCert': ros.stringToRosTemplate(properties.existingCaCert),
      'ExistingCaKey': ros.stringToRosTemplate(properties.existingCaKey),
      'ExistingCaType': ros.stringToRosTemplate(properties.existingCaType),
      'ExistingRootCaCert': ros.stringToRosTemplate(properties.existingRootCaCert),
      'ExistingRootCaKey': ros.stringToRosTemplate(properties.existingRootCaKey),
      'FilterGatewayClusterConfig': ros.booleanToRosTemplate(properties.filterGatewayClusterConfig),
      'GatewayAPIEnabled': ros.booleanToRosTemplate(properties.gatewayApiEnabled),
      'GuestCluster': ros.stringToRosTemplate(properties.guestCluster),
      'IncludeIPRanges': ros.stringToRosTemplate(properties.includeIpRanges),
      'IstioVersion': ros.stringToRosTemplate(properties.istioVersion),
      'KialiEnabled': ros.booleanToRosTemplate(properties.kialiEnabled),
      'LocalityLBConf': ros.stringToRosTemplate(properties.localityLbConf),
      'LocalityLoadBalancing': ros.booleanToRosTemplate(properties.localityLoadBalancing),
      'MSEEnabled': ros.booleanToRosTemplate(properties.mseEnabled),
      'MultiBufferEnabled': ros.booleanToRosTemplate(properties.multiBufferEnabled),
      'MultiBufferPollDelay': ros.stringToRosTemplate(properties.multiBufferPollDelay),
      'MysqlFilterEnabled': ros.booleanToRosTemplate(properties.mysqlFilterEnabled),
      'Name': ros.stringToRosTemplate(properties.name),
      'OPA': rosServiceMeshOPAPropertyToRosTemplate(properties.opa),
      'OpaEnabled': ros.booleanToRosTemplate(properties.opaEnabled),
      'OutboundTrafficPolicy': ros.stringToRosTemplate(properties.outboundTrafficPolicy),
      'Period': ros.numberToRosTemplate(properties.period),
      'PilotLoadBalancerSpec': ros.stringToRosTemplate(properties.pilotLoadBalancerSpec),
      'PilotPublicEip': ros.booleanToRosTemplate(properties.pilotPublicEip),
      'PlaygroundScene': ros.stringToRosTemplate(properties.playgroundScene),
      'PrometheusUrl': ros.stringToRosTemplate(properties.prometheusUrl),
      'Proxy': rosServiceMeshProxyPropertyToRosTemplate(properties.proxy),
      'Telemetry': ros.booleanToRosTemplate(properties.telemetry),
      'TraceSampling': ros.numberToRosTemplate(properties.traceSampling),
      'Tracing': ros.booleanToRosTemplate(properties.tracing),
      'UseExistingCA': ros.booleanToRosTemplate(properties.useExistingCa),
      'WebAssemblyFilterEnabled': ros.booleanToRosTemplate(properties.webAssemblyFilterEnabled),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ASM::ServiceMesh`, which is used to create a Service Mesh (ASM) instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `ServiceMesh` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-asm-servicemesh
 */
export class RosServiceMesh extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ASM::ServiceMesh";

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
     * @Property accessLogEnabled: Specifies whether to enable access logging.
     */
    public accessLogEnabled: boolean | ros.IResolvable | undefined;

    /**
     * @Property accessLogFile: Enable and disable access logs. Value:
     * - "" : Turn off access logs.
     * - \/dev\/stdout: Enables access logging
     */
    public accessLogFile: string | ros.IResolvable | undefined;

    /**
     * @Property accessLogFormat: The format of access logs.
     */
    public accessLogFormat: string | ros.IResolvable | undefined;

    /**
     * @Property accessLogProject: The Log Service project for access logs.
     */
    public accessLogProject: string | ros.IResolvable | undefined;

    /**
     * @Property accessLogServiceEnabled: Whether Envoy's gRPC logging service (ALS) is enabled. Value:
     * - true: Enables Envoy's gRPC logging service.
     * - false: Envoy's gRPC logging service is not enabled.
     * Default value: false
     */
    public accessLogServiceEnabled: boolean | ros.IResolvable | undefined;

    /**
     * @Property accessLogServiceHost: Address where Envoy's gRPC logging service (ALS) is enabled.
     */
    public accessLogServiceHost: string | ros.IResolvable | undefined;

    /**
     * @Property accessLogServicePort: Port on which Envoy's gRPC logging service (ALS) is enabled.
     */
    public accessLogServicePort: number | ros.IResolvable | undefined;

    /**
     * @Property apiServerLoadBalancerSpec: CLB specification for the APIServer binding. Value: Compact type I (slb.s1.small), Standard type I (slb.s2.small), Standard Type II (slb.s2.medium), high-order type I (slb.s3.small), high-order type II (slb.s3.medium), Super type I (slb.s3.large).
     */
    public apiServerLoadBalancerSpec: string | ros.IResolvable | undefined;

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
     * @Property autoRenew: If CLB is annual and monthly, whether it will be automatically renewed. Value:
     * - true: Automatic renewal.
     * - false: No automatic renewal.
     */
    public autoRenew: boolean | ros.IResolvable | undefined;

    /**
     * @Property autoRenewPeriod: ChargeType is a PrePay. Indicates the automatic renewal time when purchasing a CLB of the year and month type. If the purchase is less than 1 year old, this parameter indicates how many months the auto-renewal will take. If the purchase is longer than 1 year, this parameter indicates how many years the automatic renewal will be made.
     */
    public autoRenewPeriod: number | ros.IResolvable | undefined;

    /**
     * @Property certChain: The certificate chain from CaCert to RootCert contains at least two certificates.
     */
    public certChain: string | ros.IResolvable | undefined;

    /**
     * @Property chargeType: CLB payment type. Value:
     * - PayOnDemand: pay-as-you-go type
     * - PrePay: Annual and monthly.
     */
    public chargeType: string | ros.IResolvable | undefined;

    /**
     * @Property clusterSpec: Service grid instance specification, value:
     * - standard: The standard version.
     * - enterprise: Enterprise Edition
     * - ultimate: ultimate.
     */
    public clusterSpec: string | ros.IResolvable | undefined;

    /**
     * @Property configSourceEnabled: Whether to enable an external service registry. Value:
     * - true: Enables the external service registry.
     * - false: The external service registry is not enabled.
     * Default value: false
     */
    public configSourceEnabled: boolean | ros.IResolvable | undefined;

    /**
     * @Property configSourceNacosId: The Nacos ID for config source.
     */
    public configSourceNacosId: string | ros.IResolvable | undefined;

    /**
     * @Property controlPlaneLogEnabled: Specifies whether to enable control plane logging.
     */
    public controlPlaneLogEnabled: boolean | ros.IResolvable | undefined;

    /**
     * @Property controlPlaneLogProject: The Log Service project for control plane logs.
     */
    public controlPlaneLogProject: string | ros.IResolvable | undefined;

    /**
     * @Property crAggregationEnabled: Whether to enable Kubernetes API for data plane cluster to access Istio resources (ASM instance v1.9.7.93 or later). Value:
     * - true: Enable data plane cluster Kubernetes API to access Istio resources.
     * - false: Data plane cluster Kubernetes API is not enabled to access Istio resources.
     * Default value: false
     */
    public crAggregationEnabled: boolean | ros.IResolvable | undefined;

    /**
     * @Property customizedPrometheus: Specifies whether to use a customized Prometheus system.
     */
    public customizedPrometheus: boolean | ros.IResolvable | undefined;

    /**
     * @Property customizedZipkin: Specifies whether to use a user-created Zipkin system.
     */
    public customizedZipkin: boolean | ros.IResolvable | undefined;

    /**
     * @Property dnsProxyingEnabled: Specifies whether to enable DNS proxying.
     */
    public dnsProxyingEnabled: boolean | ros.IResolvable | undefined;

    /**
     * @Property dubboFilterEnabled: Specifies whether to enable Dubbo filter.
     */
    public dubboFilterEnabled: boolean | ros.IResolvable | undefined;

    /**
     * @Property edition: The edition of the ASM instance.
     */
    public edition: string | ros.IResolvable | undefined;

    /**
     * @Property enableAcmg: Specifies whether to enable ACMG.
     */
    public enableAcmg: boolean | ros.IResolvable | undefined;

    /**
     * @Property enableAmbient: Specifies whether to enable ambient mode.
     */
    public enableAmbient: boolean | ros.IResolvable | undefined;

    /**
     * @Property enableAudit: Specifies whether to enable the mesh audit feature. To enable this feature, make sure
     * that you have activated Alibaba Cloud Log Service.
     * Valid values: true and false. Default value: false.
     */
    public enableAudit: boolean | ros.IResolvable | undefined;

    /**
     * @Property enableCrHistory: Specifies whether to enable CR history.
     */
    public enableCrHistory: boolean | ros.IResolvable | undefined;

    /**
     * @Property enableSdsServer: Specifies whether to enable SDS server.
     */
    public enableSdsServer: boolean | ros.IResolvable | undefined;

    /**
     * @Property excludeInboundPorts: The inbound ports to exclude from traffic management.
     */
    public excludeInboundPorts: string | ros.IResolvable | undefined;

    /**
     * @Property excludeIpRanges: The IP ranges to exclude from traffic management.
     */
    public excludeIpRanges: string | ros.IResolvable | undefined;

    /**
     * @Property excludeOutboundPorts: The outbound ports to exclude from traffic management.
     */
    public excludeOutboundPorts: string | ros.IResolvable | undefined;

    /**
     * @Property existingCaCert: The existing CA certificate.
     */
    public existingCaCert: string | ros.IResolvable | undefined;

    /**
     * @Property existingCaKey: The existing CA key.
     */
    public existingCaKey: string | ros.IResolvable | undefined;

    /**
     * @Property existingCaType: The type of existing CA.
     */
    public existingCaType: string | ros.IResolvable | undefined;

    /**
     * @Property existingRootCaCert: The existing root CA certificate.
     */
    public existingRootCaCert: string | ros.IResolvable | undefined;

    /**
     * @Property existingRootCaKey: The existing root CA key.
     */
    public existingRootCaKey: string | ros.IResolvable | undefined;

    /**
     * @Property filterGatewayClusterConfig: Specifies whether to filter gateway cluster configuration.
     */
    public filterGatewayClusterConfig: boolean | ros.IResolvable | undefined;

    /**
     * @Property gatewayApiEnabled: Specifies whether to enable Gateway API.
     */
    public gatewayApiEnabled: boolean | ros.IResolvable | undefined;

    /**
     * @Property guestCluster: The guest cluster configuration.
     */
    public guestCluster: string | ros.IResolvable | undefined;

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
     * @Property kialiEnabled: Specifies whether to enable Kiali.
     */
    public kialiEnabled: boolean | ros.IResolvable | undefined;

    /**
     * @Property localityLbConf: The locality load balancing configuration.
     */
    public localityLbConf: string | ros.IResolvable | undefined;

    /**
     * @Property localityLoadBalancing: Specifies whether to route traffic to the nearest instance.
     * Valid values: true and false. Default value: false.
     */
    public localityLoadBalancing: boolean | ros.IResolvable | undefined;

    /**
     * @Property mseEnabled: Specifies whether to enable MSE.
     */
    public mseEnabled: boolean | ros.IResolvable | undefined;

    /**
     * @Property multiBufferEnabled: Specifies whether to enable multi-buffer.
     */
    public multiBufferEnabled: boolean | ros.IResolvable | undefined;

    /**
     * @Property multiBufferPollDelay: The poll delay for multi-buffer.
     */
    public multiBufferPollDelay: string | ros.IResolvable | undefined;

    /**
     * @Property mysqlFilterEnabled: Specifies whether to enable MySQL filter.
     */
    public mysqlFilterEnabled: boolean | ros.IResolvable | undefined;

    /**
     * @Property name: The name of the ASM instance.
     */
    public name: string | ros.IResolvable | undefined;

    /**
     * @Property opa: OPA settings.
     */
    public opa: RosServiceMesh.OPAProperty | ros.IResolvable | undefined;

    /**
     * @Property opaEnabled: Specifies whether to enable OPA.
     */
    public opaEnabled: boolean | ros.IResolvable | undefined;

    /**
     * @Property outboundTrafficPolicy: The outbound traffic policy of the ASM instance.
     */
    public outboundTrafficPolicy: string | ros.IResolvable | undefined;

    /**
     * @Property period: The subscription period.
     */
    public period: number | ros.IResolvable | undefined;

    /**
     * @Property pilotLoadBalancerSpec: The specification for the pilot load balancer.
     */
    public pilotLoadBalancerSpec: string | ros.IResolvable | undefined;

    /**
     * @Property pilotPublicEip: Specifies whether to expose Istio Pilot to the Internet.
     * Valid values: true and false. Default value: false.
     * If you do not set this parameter, only clusters in the same VPC as the ASM instance
     * can access Istio Pilot of the instance.
     */
    public pilotPublicEip: boolean | ros.IResolvable | undefined;

    /**
     * @Property playgroundScene: The playground scene configuration.
     */
    public playgroundScene: string | ros.IResolvable | undefined;

    /**
     * @Property prometheusUrl: The URL for Prometheus.
     */
    public prometheusUrl: string | ros.IResolvable | undefined;

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
     * @Property useExistingCa: Specifies whether to use an existing CA.
     */
    public useExistingCa: boolean | ros.IResolvable | undefined;

    /**
     * @Property webAssemblyFilterEnabled: Specifies whether to enable WebAssembly filter.
     */
    public webAssemblyFilterEnabled: boolean | ros.IResolvable | undefined;

    /**
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
        this.accessLogEnabled = props.accessLogEnabled;
        this.accessLogFile = props.accessLogFile;
        this.accessLogFormat = props.accessLogFormat;
        this.accessLogProject = props.accessLogProject;
        this.accessLogServiceEnabled = props.accessLogServiceEnabled;
        this.accessLogServiceHost = props.accessLogServiceHost;
        this.accessLogServicePort = props.accessLogServicePort;
        this.apiServerLoadBalancerSpec = props.apiServerLoadBalancerSpec;
        this.apiServerPublicEip = props.apiServerPublicEip;
        this.auditProject = props.auditProject;
        this.autoRenew = props.autoRenew;
        this.autoRenewPeriod = props.autoRenewPeriod;
        this.certChain = props.certChain;
        this.chargeType = props.chargeType;
        this.clusterSpec = props.clusterSpec;
        this.configSourceEnabled = props.configSourceEnabled;
        this.configSourceNacosId = props.configSourceNacosId;
        this.controlPlaneLogEnabled = props.controlPlaneLogEnabled;
        this.controlPlaneLogProject = props.controlPlaneLogProject;
        this.crAggregationEnabled = props.crAggregationEnabled;
        this.customizedPrometheus = props.customizedPrometheus;
        this.customizedZipkin = props.customizedZipkin;
        this.dnsProxyingEnabled = props.dnsProxyingEnabled;
        this.dubboFilterEnabled = props.dubboFilterEnabled;
        this.edition = props.edition;
        this.enableAcmg = props.enableAcmg;
        this.enableAmbient = props.enableAmbient;
        this.enableAudit = props.enableAudit;
        this.enableCrHistory = props.enableCrHistory;
        this.enableSdsServer = props.enableSdsServer;
        this.excludeInboundPorts = props.excludeInboundPorts;
        this.excludeIpRanges = props.excludeIpRanges;
        this.excludeOutboundPorts = props.excludeOutboundPorts;
        this.existingCaCert = props.existingCaCert;
        this.existingCaKey = props.existingCaKey;
        this.existingCaType = props.existingCaType;
        this.existingRootCaCert = props.existingRootCaCert;
        this.existingRootCaKey = props.existingRootCaKey;
        this.filterGatewayClusterConfig = props.filterGatewayClusterConfig;
        this.gatewayApiEnabled = props.gatewayApiEnabled;
        this.guestCluster = props.guestCluster;
        this.includeIpRanges = props.includeIpRanges;
        this.istioVersion = props.istioVersion;
        this.kialiEnabled = props.kialiEnabled;
        this.localityLbConf = props.localityLbConf;
        this.localityLoadBalancing = props.localityLoadBalancing;
        this.mseEnabled = props.mseEnabled;
        this.multiBufferEnabled = props.multiBufferEnabled;
        this.multiBufferPollDelay = props.multiBufferPollDelay;
        this.mysqlFilterEnabled = props.mysqlFilterEnabled;
        this.name = props.name;
        this.opa = props.opa;
        this.opaEnabled = props.opaEnabled;
        this.outboundTrafficPolicy = props.outboundTrafficPolicy;
        this.period = props.period;
        this.pilotLoadBalancerSpec = props.pilotLoadBalancerSpec;
        this.pilotPublicEip = props.pilotPublicEip;
        this.playgroundScene = props.playgroundScene;
        this.prometheusUrl = props.prometheusUrl;
        this.proxy = props.proxy;
        this.telemetry = props.telemetry;
        this.traceSampling = props.traceSampling;
        this.tracing = props.tracing;
        this.useExistingCa = props.useExistingCa;
        this.webAssemblyFilterEnabled = props.webAssemblyFilterEnabled;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            vpcId: this.vpcId,
            vSwitches: this.vSwitches,
            accessLogEnabled: this.accessLogEnabled,
            accessLogFile: this.accessLogFile,
            accessLogFormat: this.accessLogFormat,
            accessLogProject: this.accessLogProject,
            accessLogServiceEnabled: this.accessLogServiceEnabled,
            accessLogServiceHost: this.accessLogServiceHost,
            accessLogServicePort: this.accessLogServicePort,
            apiServerLoadBalancerSpec: this.apiServerLoadBalancerSpec,
            apiServerPublicEip: this.apiServerPublicEip,
            auditProject: this.auditProject,
            autoRenew: this.autoRenew,
            autoRenewPeriod: this.autoRenewPeriod,
            certChain: this.certChain,
            chargeType: this.chargeType,
            clusterSpec: this.clusterSpec,
            configSourceEnabled: this.configSourceEnabled,
            configSourceNacosId: this.configSourceNacosId,
            controlPlaneLogEnabled: this.controlPlaneLogEnabled,
            controlPlaneLogProject: this.controlPlaneLogProject,
            crAggregationEnabled: this.crAggregationEnabled,
            customizedPrometheus: this.customizedPrometheus,
            customizedZipkin: this.customizedZipkin,
            dnsProxyingEnabled: this.dnsProxyingEnabled,
            dubboFilterEnabled: this.dubboFilterEnabled,
            edition: this.edition,
            enableAcmg: this.enableAcmg,
            enableAmbient: this.enableAmbient,
            enableAudit: this.enableAudit,
            enableCrHistory: this.enableCrHistory,
            enableSdsServer: this.enableSdsServer,
            excludeInboundPorts: this.excludeInboundPorts,
            excludeIpRanges: this.excludeIpRanges,
            excludeOutboundPorts: this.excludeOutboundPorts,
            existingCaCert: this.existingCaCert,
            existingCaKey: this.existingCaKey,
            existingCaType: this.existingCaType,
            existingRootCaCert: this.existingRootCaCert,
            existingRootCaKey: this.existingRootCaKey,
            filterGatewayClusterConfig: this.filterGatewayClusterConfig,
            gatewayApiEnabled: this.gatewayApiEnabled,
            guestCluster: this.guestCluster,
            includeIpRanges: this.includeIpRanges,
            istioVersion: this.istioVersion,
            kialiEnabled: this.kialiEnabled,
            localityLbConf: this.localityLbConf,
            localityLoadBalancing: this.localityLoadBalancing,
            mseEnabled: this.mseEnabled,
            multiBufferEnabled: this.multiBufferEnabled,
            multiBufferPollDelay: this.multiBufferPollDelay,
            mysqlFilterEnabled: this.mysqlFilterEnabled,
            name: this.name,
            opa: this.opa,
            opaEnabled: this.opaEnabled,
            outboundTrafficPolicy: this.outboundTrafficPolicy,
            period: this.period,
            pilotLoadBalancerSpec: this.pilotLoadBalancerSpec,
            pilotPublicEip: this.pilotPublicEip,
            playgroundScene: this.playgroundScene,
            prometheusUrl: this.prometheusUrl,
            proxy: this.proxy,
            telemetry: this.telemetry,
            traceSampling: this.traceSampling,
            tracing: this.tracing,
            useExistingCa: this.useExistingCa,
            webAssemblyFilterEnabled: this.webAssemblyFilterEnabled,
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
      'OPARequestCPU': ros.stringToRosTemplate(properties.opaRequestCpu),
      'OpenAgentPolicy': ros.booleanToRosTemplate(properties.openAgentPolicy),
      'OPALogLevel': ros.stringToRosTemplate(properties.opaLogLevel),
      'OPALimitCPU': ros.stringToRosTemplate(properties.opaLimitCpu),
      'OPALimitMemory': ros.stringToRosTemplate(properties.opaLimitMemory),
      'OPARequestMemory': ros.stringToRosTemplate(properties.opaRequestMemory),
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
      'ClusterDomain': ros.stringToRosTemplate(properties.clusterDomain),
      'ProxyLimitCPU': ros.stringToRosTemplate(properties.proxyLimitCpu),
      'ProxyLimitMemory': ros.stringToRosTemplate(properties.proxyLimitMemory),
      'ProxyRequestCPU': ros.stringToRosTemplate(properties.proxyRequestCpu),
      'ProxyRequestMemory': ros.stringToRosTemplate(properties.proxyRequestMemory),
    };
}
