import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sas-instance
 */
export interface RosInstanceProps {
    /**
     * @Property period: The subscription period of the firewallIf PeriodUnit is month, the valid range is 1, 3, 6
     * If periodUnit is year, the valid range is 1, 2, 3
     */
    readonly period: number | ros.IResolvable;
    /**
     * @Property periodUnit: The unit of the subscription duration. Valid values:
     * Month
     * Year
     *
     */
    readonly periodUnit: string | ros.IResolvable;
    /**
     * @Property antiRansomware: Security Center provides a comprehensive anti-ransomware solution to protect your business. We recommend that you configure a data protection capacity of 50GB for each server.
     */
    readonly antiRansomware?: number | ros.IResolvable;
    /**
     * @Property autoPay: Whether to auto pay the bill.Default: True
     */
    readonly autoPay?: boolean | ros.IResolvable;
    /**
     * @Property autoRenew: Whether to auto renew the prepay instance.Default: False
     */
    readonly autoRenew?: boolean | ros.IResolvable;
    /**
     * @Property cloudHoneypot: The cloud honeypot feature can capture attacks in a timely and efficient manner. You can use the feature to protect your core assets and detect attacks in attack and defense scenarios.
     */
    readonly cloudHoneypot?: boolean | ros.IResolvable;
    /**
     * @Property configurationAssessment: The configuration assessment feature detects configuration errors and security risks on cloud services from the following dimensions: identity and permission management, security risks in Alibaba Cloud services, and compliance risks.This ensures the security of the running environment of your cloud services.
     */
    readonly configurationAssessment?: boolean | ros.IResolvable;
    /**
     * @Property containerImageScan: Security Center provides the container image scan feature to protect containers. Security Center can detect CVEs, application vulnerabilities, viruses, and malicious samples and allows you to handle the detected risks. You can configure this parameter based on the number of images or digests. For example, if the number of images or digests that are updated in the previous day is 10, you can set this parameter to 300 for a monthly subscription or to 3650 for a yearly subscription. This is more cost-effective.
     */
    readonly containerImageScan?: number | ros.IResolvable;
    /**
     * @Property edition: The version of Security center.
     */
    readonly edition?: string | ros.IResolvable;
    /**
     * @Property logAnalysis: In response to the requirements of the network security law, which requires logs to be stored for at least 180 days, we recommend that you configure a 40GB log storage each server. Log analysis supports multi-dimensional security logs of cloud assets, out-of-the-box reports, and powerful SQL syntax analysis, so as to monitor business status, troubleshoot attacks, security operations such as traceability and positioning are easier.
     */
    readonly logAnalysis?: number | ros.IResolvable;
    /**
     * @Property maliciousFileDetectionSdk: The configuration assessment feature detects configuration errors and security risks on cloud services from the following dimensions: identity and permission management, security risks in Alibaba Cloud services, and compliance risks. This ensures the security of the running environment of your cloud services.
     */
    readonly maliciousFileDetectionSdk?: boolean | ros.IResolvable;
    /**
     * @Property protectedServers: Authorization is the same as the number of servers you have.
     */
    readonly protectedServers?: number | ros.IResolvable;
    /**
     * @Property quotaForApplicationProtection: The application protection feature can detect attacks on applications and provide self-protection during application runtime. The feature supports simple and convenient O&M and can effectively defend against zero-day and OWASP Top vulnerabilities. The feature is a value-added feature. You are charged based on the number of assets on which the RASP agent is installed. You must configure protection policies after you purchase the feature.
     */
    readonly quotaForApplicationProtection?: number | ros.IResolvable;
    /**
     * @Property quotaForCloudHoneypot:
     */
    readonly quotaForCloudHoneypot?: number | ros.IResolvable;
    /**
     * @Property quotaForConfigurationAssessment:
     */
    readonly quotaForConfigurationAssessment?: number | ros.IResolvable;
    /**
     * @Property quotaForMaliciousFileDetectionSdk:
     */
    readonly quotaForMaliciousFileDetectionSdk?: number | ros.IResolvable;
    /**
     * @Property quotaForVulnerabilityFixing: Specify the quota for vulnerability fixing based on the number of vulnerabilities that you want to fix each month. The quota is equal to the total number of vulnerabilities that you want to fix on all servers regardless of the vulnerability names. For example, if you use Security Center to fix the same vulnerability on 10 servers, the quota is deducted by 10.
     */
    readonly quotaForVulnerabilityFixing?: number | ros.IResolvable;
    /**
     * @Property quotaForWebTamperProofing:
     */
    readonly quotaForWebTamperProofing?: number | ros.IResolvable;
    /**
     * @Property threatAnalysis: The threat analysis feature allows you to handle alerts that are generated for assets in the cloud within different accounts and assets of multiple cloud services in a centralized manner. The feature also allows you to handle risks with a few clicks. The feature provides automatic orchestration and response capabilities.
     */
    readonly threatAnalysis?: boolean | ros.IResolvable;
    /**
     * @Property threatAnalysisLogStorageCapacity:
     */
    readonly threatAnalysisLogStorageCapacity?: number | ros.IResolvable;
    /**
     * @Property vCore: This parameter indicates the number of server vCPUs.
     */
    readonly vCore?: number | ros.IResolvable;
    /**
     * @Property vulnerabilityFixing: The vulnerability fixing feature allows you to fix system vulnerabilities with a few clicks. This improves O&M efficiency. You can separately purchase the vulnerability fixing feature. You are charged based on the number of times that you perform vulnerability fixing.
     */
    readonly vulnerabilityFixing?: boolean | ros.IResolvable;
    /**
     * @Property webTamperProtection: To ensure that the website information of important systems is not maliciously tampered with, there are bad content such as hanging horses, black chains, illegal implantation of terrorist threats, pornography, etc.
     */
    readonly webTamperProtection?: boolean | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SAS::Instance`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sas-instance
 */
export declare class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SAS::Instance";
    /**
     * @Attribute InstanceId: Instance Id.
     */
    readonly attrInstanceId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property period: The subscription period of the firewallIf PeriodUnit is month, the valid range is 1, 3, 6
     * If periodUnit is year, the valid range is 1, 2, 3
     */
    period: number | ros.IResolvable;
    /**
     * @Property periodUnit: The unit of the subscription duration. Valid values:
     * Month
     * Year
     *
     */
    periodUnit: string | ros.IResolvable;
    /**
     * @Property antiRansomware: Security Center provides a comprehensive anti-ransomware solution to protect your business. We recommend that you configure a data protection capacity of 50GB for each server.
     */
    antiRansomware: number | ros.IResolvable | undefined;
    /**
     * @Property autoPay: Whether to auto pay the bill.Default: True
     */
    autoPay: boolean | ros.IResolvable | undefined;
    /**
     * @Property autoRenew: Whether to auto renew the prepay instance.Default: False
     */
    autoRenew: boolean | ros.IResolvable | undefined;
    /**
     * @Property cloudHoneypot: The cloud honeypot feature can capture attacks in a timely and efficient manner. You can use the feature to protect your core assets and detect attacks in attack and defense scenarios.
     */
    cloudHoneypot: boolean | ros.IResolvable | undefined;
    /**
     * @Property configurationAssessment: The configuration assessment feature detects configuration errors and security risks on cloud services from the following dimensions: identity and permission management, security risks in Alibaba Cloud services, and compliance risks.This ensures the security of the running environment of your cloud services.
     */
    configurationAssessment: boolean | ros.IResolvable | undefined;
    /**
     * @Property containerImageScan: Security Center provides the container image scan feature to protect containers. Security Center can detect CVEs, application vulnerabilities, viruses, and malicious samples and allows you to handle the detected risks. You can configure this parameter based on the number of images or digests. For example, if the number of images or digests that are updated in the previous day is 10, you can set this parameter to 300 for a monthly subscription or to 3650 for a yearly subscription. This is more cost-effective.
     */
    containerImageScan: number | ros.IResolvable | undefined;
    /**
     * @Property edition: The version of Security center.
     */
    edition: string | ros.IResolvable | undefined;
    /**
     * @Property logAnalysis: In response to the requirements of the network security law, which requires logs to be stored for at least 180 days, we recommend that you configure a 40GB log storage each server. Log analysis supports multi-dimensional security logs of cloud assets, out-of-the-box reports, and powerful SQL syntax analysis, so as to monitor business status, troubleshoot attacks, security operations such as traceability and positioning are easier.
     */
    logAnalysis: number | ros.IResolvable | undefined;
    /**
     * @Property maliciousFileDetectionSdk: The configuration assessment feature detects configuration errors and security risks on cloud services from the following dimensions: identity and permission management, security risks in Alibaba Cloud services, and compliance risks. This ensures the security of the running environment of your cloud services.
     */
    maliciousFileDetectionSdk: boolean | ros.IResolvable | undefined;
    /**
     * @Property protectedServers: Authorization is the same as the number of servers you have.
     */
    protectedServers: number | ros.IResolvable | undefined;
    /**
     * @Property quotaForApplicationProtection: The application protection feature can detect attacks on applications and provide self-protection during application runtime. The feature supports simple and convenient O&M and can effectively defend against zero-day and OWASP Top vulnerabilities. The feature is a value-added feature. You are charged based on the number of assets on which the RASP agent is installed. You must configure protection policies after you purchase the feature.
     */
    quotaForApplicationProtection: number | ros.IResolvable | undefined;
    /**
     * @Property quotaForCloudHoneypot:
     */
    quotaForCloudHoneypot: number | ros.IResolvable | undefined;
    /**
     * @Property quotaForConfigurationAssessment:
     */
    quotaForConfigurationAssessment: number | ros.IResolvable | undefined;
    /**
     * @Property quotaForMaliciousFileDetectionSdk:
     */
    quotaForMaliciousFileDetectionSdk: number | ros.IResolvable | undefined;
    /**
     * @Property quotaForVulnerabilityFixing: Specify the quota for vulnerability fixing based on the number of vulnerabilities that you want to fix each month. The quota is equal to the total number of vulnerabilities that you want to fix on all servers regardless of the vulnerability names. For example, if you use Security Center to fix the same vulnerability on 10 servers, the quota is deducted by 10.
     */
    quotaForVulnerabilityFixing: number | ros.IResolvable | undefined;
    /**
     * @Property quotaForWebTamperProofing:
     */
    quotaForWebTamperProofing: number | ros.IResolvable | undefined;
    /**
     * @Property threatAnalysis: The threat analysis feature allows you to handle alerts that are generated for assets in the cloud within different accounts and assets of multiple cloud services in a centralized manner. The feature also allows you to handle risks with a few clicks. The feature provides automatic orchestration and response capabilities.
     */
    threatAnalysis: boolean | ros.IResolvable | undefined;
    /**
     * @Property threatAnalysisLogStorageCapacity:
     */
    threatAnalysisLogStorageCapacity: number | ros.IResolvable | undefined;
    /**
     * @Property vCore: This parameter indicates the number of server vCPUs.
     */
    vCore: number | ros.IResolvable | undefined;
    /**
     * @Property vulnerabilityFixing: The vulnerability fixing feature allows you to fix system vulnerabilities with a few clicks. This improves O&M efficiency. You can separately purchase the vulnerability fixing feature. You are charged based on the number of times that you perform vulnerability fixing.
     */
    vulnerabilityFixing: boolean | ros.IResolvable | undefined;
    /**
     * @Property webTamperProtection: To ensure that the website information of important systems is not maliciously tampered with, there are bad content such as hanging horses, black chains, illegal implantation of terrorist threats, pornography, etc.
     */
    webTamperProtection: boolean | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
