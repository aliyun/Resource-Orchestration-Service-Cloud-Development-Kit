import * as ros from '@alicloud/ros-cdk-core';
import { RosInstance } from './sas.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosInstance as InstanceProperty };

/**
 * Properties for defining a `Instance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sas-instance
 */
export interface InstanceProps {

    /**
     * Property period: The subscription period of the firewallIf PeriodUnit is month, the valid range is 1, 3, 6
     * If periodUnit is year, the valid range is 1, 2, 3
     */
    readonly period: number | ros.IResolvable;

    /**
     * Property periodUnit: The unit of the subscription duration. Valid values:
     * Month
     * Year
     *
     */
    readonly periodUnit: string | ros.IResolvable;

    /**
     * Property antiRansomware: Security Center provides a comprehensive anti-ransomware solution to protect your business. We recommend that you configure a data protection capacity of 50GB for each server.
     */
    readonly antiRansomware?: number | ros.IResolvable;

    /**
     * Property antiRansomwareManageService: Provide you with security hosting services such as anti-ransomware configuration, monitoring, and anti-ransomware incident emergency response.
     * Note:
     */
    readonly antiRansomwareManageService?: boolean | ros.IResolvable;

    /**
     * Property autoPay: Whether to auto pay the bill.Default: True
     */
    readonly autoPay?: boolean | ros.IResolvable;

    /**
     * Property autoRenew: Whether to auto renew the prepay instance.Default: False
     */
    readonly autoRenew?: boolean | ros.IResolvable;

    /**
     * Property cloudHoneypot: The cloud honeypot feature can capture attacks in a timely and efficient manner. You can use the feature to protect your core assets and detect attacks in attack and defense scenarios.
     */
    readonly cloudHoneypot?: boolean | ros.IResolvable;

    /**
     * Property configurationAssessment: The configuration assessment feature detects configuration errors and security risks on cloud services from the following dimensions: identity and permission management, security risks in Alibaba Cloud services, and compliance risks.This ensures the security of the running environment of your cloud services.
     */
    readonly configurationAssessment?: boolean | ros.IResolvable;

    /**
     * Property containerImageScan: Security Center provides the container image scan feature to protect containers. Security Center can detect CVEs, application vulnerabilities, viruses, and malicious samples and allows you to handle the detected risks. You can configure this parameter based on the number of images or digests. For example, if the number of images or digests that are updated in the previous day is 10, you can set this parameter to 300 for a monthly subscription or to 3650 for a yearly subscription. This is more cost-effective.
     */
    readonly containerImageScan?: number | ros.IResolvable;

    /**
     * Property edition: The version of Security center.
     */
    readonly edition?: string | ros.IResolvable;

    /**
     * Property logAnalysis: In response to the requirements of the network security law, which requires logs to be stored for at least 180 days, we recommend that you configure a 40GB log storage each server. Log analysis supports multi-dimensional security logs of cloud assets, out-of-the-box reports, and powerful SQL syntax analysis, so as to monitor business status, troubleshoot attacks, security operations such as traceability and positioning are easier.
     */
    readonly logAnalysis?: number | ros.IResolvable;

    /**
     * Property maliciousFileDetectionSdk: The configuration assessment feature detects configuration errors and security risks on cloud services from the following dimensions: identity and permission management, security risks in Alibaba Cloud services, and compliance risks. This ensures the security of the running environment of your cloud services.
     */
    readonly maliciousFileDetectionSdk?: boolean | ros.IResolvable;

    /**
     * Property protectedServers: Authorization is the same as the number of servers you have.
     */
    readonly protectedServers?: number | ros.IResolvable;

    /**
     * Property quotaForApplicationProtection: The application protection feature can detect attacks on applications and provide self-protection during application runtime. The feature supports simple and convenient O&M and can effectively defend against zero-day and OWASP Top vulnerabilities. The feature is a value-added feature. You are charged based on the number of assets on which the RASP agent is installed. You must configure protection policies after you purchase the feature.
     */
    readonly quotaForApplicationProtection?: number | ros.IResolvable;

    /**
     * Property quotaForCloudHoneypot:
     */
    readonly quotaForCloudHoneypot?: number | ros.IResolvable;

    /**
     * Property quotaForConfigurationAssessment:
     */
    readonly quotaForConfigurationAssessment?: number | ros.IResolvable;

    /**
     * Property quotaForMaliciousFileDetectionSdk:
     */
    readonly quotaForMaliciousFileDetectionSdk?: number | ros.IResolvable;

    /**
     * Property quotaForVulnerabilityFixing: Specify the quota for vulnerability fixing based on the number of vulnerabilities that you want to fix each month. The quota is equal to the total number of vulnerabilities that you want to fix on all servers regardless of the vulnerability names. For example, if you use Security Center to fix the same vulnerability on 10 servers, the quota is deducted by 10.
     */
    readonly quotaForVulnerabilityFixing?: number | ros.IResolvable;

    /**
     * Property quotaForWebTamperProofing:
     */
    readonly quotaForWebTamperProofing?: number | ros.IResolvable;

    /**
     * Property threatAnalysis: The threat analysis feature allows you to handle alerts that are generated for assets in the cloud within different accounts and assets of multiple cloud services in a centralized manner. The feature also allows you to handle risks with a few clicks. The feature provides automatic orchestration and response capabilities.
     */
    readonly threatAnalysis?: boolean | ros.IResolvable;

    /**
     * Property threatAnalysisLogStorageCapacity:
     */
    readonly threatAnalysisLogStorageCapacity?: number | ros.IResolvable;

    /**
     * Property vCore: This parameter indicates the number of server vCPUs.
     */
    readonly vCore?: number | ros.IResolvable;

    /**
     * Property vulnerabilityFixing: The vulnerability fixing feature allows you to fix system vulnerabilities with a few clicks. This improves O&M efficiency. You can separately purchase the vulnerability fixing feature. You are charged based on the number of times that you perform vulnerability fixing.
     */
    readonly vulnerabilityFixing?: boolean | ros.IResolvable;

    /**
     * Property webTamperProtection: To ensure that the website information of important systems is not maliciously tampered with, there are bad content such as hanging horses, black chains, illegal implantation of terrorist threats, pornography, etc.
     */
    readonly webTamperProtection?: boolean | ros.IResolvable;
}

/**
 * Represents a `Instance`.
 */
export interface IInstance extends ros.IResource {
    readonly props: InstanceProps;

    /**
     * Attribute InstanceId: Instance Id.
     */
    readonly attrInstanceId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::SAS::Instance`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sas-instance
 */
export class Instance extends ros.Resource implements IInstance {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: InstanceProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute InstanceId: Instance Id.
     */
    public readonly attrInstanceId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosInstance = new RosInstance(this, id,  {
            quotaForApplicationProtection: props.quotaForApplicationProtection,
            threatAnalysis: props.threatAnalysis,
            quotaForMaliciousFileDetectionSdk: props.quotaForMaliciousFileDetectionSdk,
            containerImageScan: props.containerImageScan,
            threatAnalysisLogStorageCapacity: props.threatAnalysisLogStorageCapacity,
            autoRenew: props.autoRenew === undefined || props.autoRenew === null ? false : props.autoRenew,
            maliciousFileDetectionSdk: props.maliciousFileDetectionSdk,
            vCore: props.vCore,
            period: props.period,
            vulnerabilityFixing: props.vulnerabilityFixing,
            quotaForCloudHoneypot: props.quotaForCloudHoneypot,
            quotaForWebTamperProofing: props.quotaForWebTamperProofing,
            autoPay: props.autoPay === undefined || props.autoPay === null ? true : props.autoPay,
            antiRansomwareManageService: props.antiRansomwareManageService,
            edition: props.edition,
            configurationAssessment: props.configurationAssessment,
            logAnalysis: props.logAnalysis,
            protectedServers: props.protectedServers,
            cloudHoneypot: props.cloudHoneypot,
            webTamperProtection: props.webTamperProtection,
            quotaForConfigurationAssessment: props.quotaForConfigurationAssessment,
            quotaForVulnerabilityFixing: props.quotaForVulnerabilityFixing,
            antiRansomware: props.antiRansomware,
            periodUnit: props.periodUnit,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstance;
        this.attrInstanceId = rosInstance.attrInstanceId;
    }
}
