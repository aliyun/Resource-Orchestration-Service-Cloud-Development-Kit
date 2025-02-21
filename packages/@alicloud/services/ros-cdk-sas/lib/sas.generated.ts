// Generated from the AliCloud ROS Resource Specification

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
     * @Property antiRansomwareManageService: Provide you with security hosting services such as anti-ransomware configuration, monitoring, and anti-ransomware incident emergency response.
     * Note:
     */
    readonly antiRansomwareManageService?: boolean | ros.IResolvable;

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
 * Determine whether the given properties match those of a `RosInstanceProps`
 *
 * @param properties - the TypeScript properties of a `RosInstanceProps`
 *
 * @returns the result of the validation.
 */
function RosInstancePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('quotaForApplicationProtection', ros.validateNumber)(properties.quotaForApplicationProtection));
    errors.collect(ros.propertyValidator('threatAnalysis', ros.validateBoolean)(properties.threatAnalysis));
    errors.collect(ros.propertyValidator('quotaForMaliciousFileDetectionSdk', ros.validateNumber)(properties.quotaForMaliciousFileDetectionSdk));
    errors.collect(ros.propertyValidator('containerImageScan', ros.validateNumber)(properties.containerImageScan));
    errors.collect(ros.propertyValidator('threatAnalysisLogStorageCapacity', ros.validateNumber)(properties.threatAnalysisLogStorageCapacity));
    errors.collect(ros.propertyValidator('autoRenew', ros.validateBoolean)(properties.autoRenew));
    errors.collect(ros.propertyValidator('maliciousFileDetectionSdk', ros.validateBoolean)(properties.maliciousFileDetectionSdk));
    errors.collect(ros.propertyValidator('vCore', ros.validateNumber)(properties.vCore));
    errors.collect(ros.propertyValidator('period', ros.requiredValidator)(properties.period));
    if(properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateAllowedValues)({
          data: properties.period,
          allowedValues: [1,2,3,6],
        }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    errors.collect(ros.propertyValidator('vulnerabilityFixing', ros.validateBoolean)(properties.vulnerabilityFixing));
    errors.collect(ros.propertyValidator('quotaForCloudHoneypot', ros.validateNumber)(properties.quotaForCloudHoneypot));
    errors.collect(ros.propertyValidator('quotaForWebTamperProofing', ros.validateNumber)(properties.quotaForWebTamperProofing));
    errors.collect(ros.propertyValidator('autoPay', ros.validateBoolean)(properties.autoPay));
    errors.collect(ros.propertyValidator('antiRansomwareManageService', ros.validateBoolean)(properties.antiRansomwareManageService));
    if(properties.edition && (typeof properties.edition) !== 'object') {
        errors.collect(ros.propertyValidator('edition', ros.validateAllowedValues)({
          data: properties.edition,
          allowedValues: ["Anti-virus","Advanced","Enterprise","Ultimate","Value-added Plan"],
        }));
    }
    errors.collect(ros.propertyValidator('edition', ros.validateString)(properties.edition));
    errors.collect(ros.propertyValidator('configurationAssessment', ros.validateBoolean)(properties.configurationAssessment));
    errors.collect(ros.propertyValidator('logAnalysis', ros.validateNumber)(properties.logAnalysis));
    errors.collect(ros.propertyValidator('protectedServers', ros.validateNumber)(properties.protectedServers));
    errors.collect(ros.propertyValidator('cloudHoneypot', ros.validateBoolean)(properties.cloudHoneypot));
    errors.collect(ros.propertyValidator('webTamperProtection', ros.validateBoolean)(properties.webTamperProtection));
    errors.collect(ros.propertyValidator('quotaForConfigurationAssessment', ros.validateNumber)(properties.quotaForConfigurationAssessment));
    errors.collect(ros.propertyValidator('quotaForVulnerabilityFixing', ros.validateNumber)(properties.quotaForVulnerabilityFixing));
    errors.collect(ros.propertyValidator('antiRansomware', ros.validateNumber)(properties.antiRansomware));
    errors.collect(ros.propertyValidator('periodUnit', ros.requiredValidator)(properties.periodUnit));
    if(properties.periodUnit && (typeof properties.periodUnit) !== 'object') {
        errors.collect(ros.propertyValidator('periodUnit', ros.validateAllowedValues)({
          data: properties.periodUnit,
          allowedValues: ["Month","Year"],
        }));
    }
    errors.collect(ros.propertyValidator('periodUnit', ros.validateString)(properties.periodUnit));
    return errors.wrap('supplied properties not correct for "RosInstanceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SAS::Instance` resource
 *
 * @param properties - the TypeScript properties of a `RosInstanceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SAS::Instance` resource.
 */
// @ts-ignore TS6133
function rosInstancePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosInstancePropsValidator(properties).assertSuccess();
    }
    return {
      'Period': ros.numberToRosTemplate(properties.period),
      'PeriodUnit': ros.stringToRosTemplate(properties.periodUnit),
      'AntiRansomware': ros.numberToRosTemplate(properties.antiRansomware),
      'AntiRansomwareManageService': ros.booleanToRosTemplate(properties.antiRansomwareManageService),
      'AutoPay': ros.booleanToRosTemplate(properties.autoPay),
      'AutoRenew': ros.booleanToRosTemplate(properties.autoRenew),
      'CloudHoneypot': ros.booleanToRosTemplate(properties.cloudHoneypot),
      'ConfigurationAssessment': ros.booleanToRosTemplate(properties.configurationAssessment),
      'ContainerImageScan': ros.numberToRosTemplate(properties.containerImageScan),
      'Edition': ros.stringToRosTemplate(properties.edition),
      'LogAnalysis': ros.numberToRosTemplate(properties.logAnalysis),
      'MaliciousFileDetectionSDK': ros.booleanToRosTemplate(properties.maliciousFileDetectionSdk),
      'ProtectedServers': ros.numberToRosTemplate(properties.protectedServers),
      'QuotaForApplicationProtection': ros.numberToRosTemplate(properties.quotaForApplicationProtection),
      'QuotaForCloudHoneypot': ros.numberToRosTemplate(properties.quotaForCloudHoneypot),
      'QuotaForConfigurationAssessment': ros.numberToRosTemplate(properties.quotaForConfigurationAssessment),
      'QuotaForMaliciousFileDetectionSDK': ros.numberToRosTemplate(properties.quotaForMaliciousFileDetectionSdk),
      'QuotaForVulnerabilityFixing': ros.numberToRosTemplate(properties.quotaForVulnerabilityFixing),
      'QuotaForWebTamperProofing': ros.numberToRosTemplate(properties.quotaForWebTamperProofing),
      'ThreatAnalysis': ros.booleanToRosTemplate(properties.threatAnalysis),
      'ThreatAnalysisLogStorageCapacity': ros.numberToRosTemplate(properties.threatAnalysisLogStorageCapacity),
      'VCore': ros.numberToRosTemplate(properties.vCore),
      'VulnerabilityFixing': ros.booleanToRosTemplate(properties.vulnerabilityFixing),
      'WebTamperProtection': ros.booleanToRosTemplate(properties.webTamperProtection),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SAS::Instance`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sas-instance
 */
export class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SAS::Instance";

    /**
     * @Attribute InstanceId: Instance Id.
     */
    public readonly attrInstanceId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property period: The subscription period of the firewallIf PeriodUnit is month, the valid range is 1, 3, 6
     * If periodUnit is year, the valid range is 1, 2, 3
     */
    public period: number | ros.IResolvable;

    /**
     * @Property periodUnit: The unit of the subscription duration. Valid values:
     * Month
     * Year
     *
     */
    public periodUnit: string | ros.IResolvable;

    /**
     * @Property antiRansomware: Security Center provides a comprehensive anti-ransomware solution to protect your business. We recommend that you configure a data protection capacity of 50GB for each server.
     */
    public antiRansomware: number | ros.IResolvable | undefined;

    /**
     * @Property antiRansomwareManageService: Provide you with security hosting services such as anti-ransomware configuration, monitoring, and anti-ransomware incident emergency response.
     * Note:
     */
    public antiRansomwareManageService: boolean | ros.IResolvable | undefined;

    /**
     * @Property autoPay: Whether to auto pay the bill.Default: True
     */
    public autoPay: boolean | ros.IResolvable | undefined;

    /**
     * @Property autoRenew: Whether to auto renew the prepay instance.Default: False
     */
    public autoRenew: boolean | ros.IResolvable | undefined;

    /**
     * @Property cloudHoneypot: The cloud honeypot feature can capture attacks in a timely and efficient manner. You can use the feature to protect your core assets and detect attacks in attack and defense scenarios.
     */
    public cloudHoneypot: boolean | ros.IResolvable | undefined;

    /**
     * @Property configurationAssessment: The configuration assessment feature detects configuration errors and security risks on cloud services from the following dimensions: identity and permission management, security risks in Alibaba Cloud services, and compliance risks.This ensures the security of the running environment of your cloud services.
     */
    public configurationAssessment: boolean | ros.IResolvable | undefined;

    /**
     * @Property containerImageScan: Security Center provides the container image scan feature to protect containers. Security Center can detect CVEs, application vulnerabilities, viruses, and malicious samples and allows you to handle the detected risks. You can configure this parameter based on the number of images or digests. For example, if the number of images or digests that are updated in the previous day is 10, you can set this parameter to 300 for a monthly subscription or to 3650 for a yearly subscription. This is more cost-effective.
     */
    public containerImageScan: number | ros.IResolvable | undefined;

    /**
     * @Property edition: The version of Security center.
     */
    public edition: string | ros.IResolvable | undefined;

    /**
     * @Property logAnalysis: In response to the requirements of the network security law, which requires logs to be stored for at least 180 days, we recommend that you configure a 40GB log storage each server. Log analysis supports multi-dimensional security logs of cloud assets, out-of-the-box reports, and powerful SQL syntax analysis, so as to monitor business status, troubleshoot attacks, security operations such as traceability and positioning are easier.
     */
    public logAnalysis: number | ros.IResolvable | undefined;

    /**
     * @Property maliciousFileDetectionSdk: The configuration assessment feature detects configuration errors and security risks on cloud services from the following dimensions: identity and permission management, security risks in Alibaba Cloud services, and compliance risks. This ensures the security of the running environment of your cloud services.
     */
    public maliciousFileDetectionSdk: boolean | ros.IResolvable | undefined;

    /**
     * @Property protectedServers: Authorization is the same as the number of servers you have.
     */
    public protectedServers: number | ros.IResolvable | undefined;

    /**
     * @Property quotaForApplicationProtection: The application protection feature can detect attacks on applications and provide self-protection during application runtime. The feature supports simple and convenient O&M and can effectively defend against zero-day and OWASP Top vulnerabilities. The feature is a value-added feature. You are charged based on the number of assets on which the RASP agent is installed. You must configure protection policies after you purchase the feature.
     */
    public quotaForApplicationProtection: number | ros.IResolvable | undefined;

    /**
     * @Property quotaForCloudHoneypot:
     */
    public quotaForCloudHoneypot: number | ros.IResolvable | undefined;

    /**
     * @Property quotaForConfigurationAssessment:
     */
    public quotaForConfigurationAssessment: number | ros.IResolvable | undefined;

    /**
     * @Property quotaForMaliciousFileDetectionSdk:
     */
    public quotaForMaliciousFileDetectionSdk: number | ros.IResolvable | undefined;

    /**
     * @Property quotaForVulnerabilityFixing: Specify the quota for vulnerability fixing based on the number of vulnerabilities that you want to fix each month. The quota is equal to the total number of vulnerabilities that you want to fix on all servers regardless of the vulnerability names. For example, if you use Security Center to fix the same vulnerability on 10 servers, the quota is deducted by 10.
     */
    public quotaForVulnerabilityFixing: number | ros.IResolvable | undefined;

    /**
     * @Property quotaForWebTamperProofing:
     */
    public quotaForWebTamperProofing: number | ros.IResolvable | undefined;

    /**
     * @Property threatAnalysis: The threat analysis feature allows you to handle alerts that are generated for assets in the cloud within different accounts and assets of multiple cloud services in a centralized manner. The feature also allows you to handle risks with a few clicks. The feature provides automatic orchestration and response capabilities.
     */
    public threatAnalysis: boolean | ros.IResolvable | undefined;

    /**
     * @Property threatAnalysisLogStorageCapacity:
     */
    public threatAnalysisLogStorageCapacity: number | ros.IResolvable | undefined;

    /**
     * @Property vCore: This parameter indicates the number of server vCPUs.
     */
    public vCore: number | ros.IResolvable | undefined;

    /**
     * @Property vulnerabilityFixing: The vulnerability fixing feature allows you to fix system vulnerabilities with a few clicks. This improves O&M efficiency. You can separately purchase the vulnerability fixing feature. You are charged based on the number of times that you perform vulnerability fixing.
     */
    public vulnerabilityFixing: boolean | ros.IResolvable | undefined;

    /**
     * @Property webTamperProtection: To ensure that the website information of important systems is not maliciously tampered with, there are bad content such as hanging horses, black chains, illegal implantation of terrorist threats, pornography, etc.
     */
    public webTamperProtection: boolean | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrInstanceId = this.getAtt('InstanceId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.period = props.period;
        this.periodUnit = props.periodUnit;
        this.antiRansomware = props.antiRansomware;
        this.antiRansomwareManageService = props.antiRansomwareManageService;
        this.autoPay = props.autoPay;
        this.autoRenew = props.autoRenew;
        this.cloudHoneypot = props.cloudHoneypot;
        this.configurationAssessment = props.configurationAssessment;
        this.containerImageScan = props.containerImageScan;
        this.edition = props.edition;
        this.logAnalysis = props.logAnalysis;
        this.maliciousFileDetectionSdk = props.maliciousFileDetectionSdk;
        this.protectedServers = props.protectedServers;
        this.quotaForApplicationProtection = props.quotaForApplicationProtection;
        this.quotaForCloudHoneypot = props.quotaForCloudHoneypot;
        this.quotaForConfigurationAssessment = props.quotaForConfigurationAssessment;
        this.quotaForMaliciousFileDetectionSdk = props.quotaForMaliciousFileDetectionSdk;
        this.quotaForVulnerabilityFixing = props.quotaForVulnerabilityFixing;
        this.quotaForWebTamperProofing = props.quotaForWebTamperProofing;
        this.threatAnalysis = props.threatAnalysis;
        this.threatAnalysisLogStorageCapacity = props.threatAnalysisLogStorageCapacity;
        this.vCore = props.vCore;
        this.vulnerabilityFixing = props.vulnerabilityFixing;
        this.webTamperProtection = props.webTamperProtection;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            period: this.period,
            periodUnit: this.periodUnit,
            antiRansomware: this.antiRansomware,
            antiRansomwareManageService: this.antiRansomwareManageService,
            autoPay: this.autoPay,
            autoRenew: this.autoRenew,
            cloudHoneypot: this.cloudHoneypot,
            configurationAssessment: this.configurationAssessment,
            containerImageScan: this.containerImageScan,
            edition: this.edition,
            logAnalysis: this.logAnalysis,
            maliciousFileDetectionSdk: this.maliciousFileDetectionSdk,
            protectedServers: this.protectedServers,
            quotaForApplicationProtection: this.quotaForApplicationProtection,
            quotaForCloudHoneypot: this.quotaForCloudHoneypot,
            quotaForConfigurationAssessment: this.quotaForConfigurationAssessment,
            quotaForMaliciousFileDetectionSdk: this.quotaForMaliciousFileDetectionSdk,
            quotaForVulnerabilityFixing: this.quotaForVulnerabilityFixing,
            quotaForWebTamperProofing: this.quotaForWebTamperProofing,
            threatAnalysis: this.threatAnalysis,
            threatAnalysisLogStorageCapacity: this.threatAnalysisLogStorageCapacity,
            vCore: this.vCore,
            vulnerabilityFixing: this.vulnerabilityFixing,
            webTamperProtection: this.webTamperProtection,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosInstancePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
