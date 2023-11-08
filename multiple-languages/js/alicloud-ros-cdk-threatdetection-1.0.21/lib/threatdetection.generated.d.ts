import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::ThreatDetection::AntiBruteForceRule`
 */
export interface RosAntiBruteForceRuleProps {
    /**
     * @Property antiBruteForceRuleName: The name of the defense rule.
     */
    readonly antiBruteForceRuleName: string | ros.IResolvable;
    /**
     * @Property failCount: The maximum number of failed logon attempts from an account.
     * Valid values: 2, 3, 4, 5, 10, 50, 80, and 100.
     */
    readonly failCount: number | ros.IResolvable;
    /**
     * @Property forbiddenTime: The period of time during which logons from an account are not allowed.
     * Unit: minutes. Valid values:
     * - 5: 5 minutes
     * - 15: 15 minutes
     * - 30: 30 minutes
     * - 60: 1 hour
     * - 120: 2 hours
     * - 360: 6 hours
     * - 720: 12 hours
     * - 1440: 24 hours
     * - 10080: 7 days
     * - 52560000: permanent
     */
    readonly forbiddenTime: number | ros.IResolvable;
    /**
     * @Property span: The maximum period of time during which failed logon attempts from an account can occur.
     * Unit: minutes. Valid values:
     * - 1
     * - 2
     * - 5
     * - 10
     * - 15
     */
    readonly span: number | ros.IResolvable;
    /**
     * @Property uuidList: The UUIDs of the servers to which you want to apply the defense rule.
     */
    readonly uuidList: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property defaultRule: Specifies whether to set the defense rule as the default rule.
     * Valid values:
     * - true: yes
     * - false: no
     */
    readonly defaultRule?: boolean | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::ThreatDetection::AntiBruteForceRule`
 */
export declare class RosAntiBruteForceRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ThreatDetection::AntiBruteForceRule";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute AntiBruteForceRuleId: The ID of the defense rule.
     */
    readonly attrAntiBruteForceRuleId: ros.IResolvable;
    /**
     * @Attribute AntiBruteForceRuleName: The name of the defense rule.
     */
    readonly attrAntiBruteForceRuleName: ros.IResolvable;
    /**
     * @Attribute DefaultRule: Specifies whether to set the defense rule as the default rule.
Valid values:
- true: yes
- false: no
     */
    readonly attrDefaultRule: ros.IResolvable;
    /**
     * @Attribute FailCount: The threshold for the number of failed user logins when the brute-force defense rule takes effect.
     */
    readonly attrFailCount: ros.IResolvable;
    /**
     * @Attribute ForbiddenTime: The period of time during which logons from an account are not allowed. Unit: minutes.
     */
    readonly attrForbiddenTime: ros.IResolvable;
    /**
     * @Attribute Span: The period of time during which logon failures from an account are measured. Unit: minutes. If Span is set to 10, the defense rule takes effect when the logon failures measured within 10 minutes reaches the specified threshold. The IP addresses of attackers cannot be used to log on to the server within the specified period of time.
     */
    readonly attrSpan: ros.IResolvable;
    /**
     * @Attribute UuidList: The UUIDs of the server to which the defense rule is applied.
     */
    readonly attrUuidList: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property antiBruteForceRuleName: The name of the defense rule.
     */
    antiBruteForceRuleName: string | ros.IResolvable;
    /**
     * @Property failCount: The maximum number of failed logon attempts from an account.
     * Valid values: 2, 3, 4, 5, 10, 50, 80, and 100.
     */
    failCount: number | ros.IResolvable;
    /**
     * @Property forbiddenTime: The period of time during which logons from an account are not allowed.
     * Unit: minutes. Valid values:
     * - 5: 5 minutes
     * - 15: 15 minutes
     * - 30: 30 minutes
     * - 60: 1 hour
     * - 120: 2 hours
     * - 360: 6 hours
     * - 720: 12 hours
     * - 1440: 24 hours
     * - 10080: 7 days
     * - 52560000: permanent
     */
    forbiddenTime: number | ros.IResolvable;
    /**
     * @Property span: The maximum period of time during which failed logon attempts from an account can occur.
     * Unit: minutes. Valid values:
     * - 1
     * - 2
     * - 5
     * - 10
     * - 15
     */
    span: number | ros.IResolvable;
    /**
     * @Property uuidList: The UUIDs of the servers to which you want to apply the defense rule.
     */
    uuidList: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property defaultRule: Specifies whether to set the defense rule as the default rule.
     * Valid values:
     * - true: yes
     * - false: no
     */
    defaultRule: boolean | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::ThreatDetection::AntiBruteForceRule`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAntiBruteForceRuleProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `ALIYUN::ThreatDetection::Instance`
 */
export interface RosInstanceProps {
    /**
     * @Property paymentType: The payment type of the resource.
     */
    readonly paymentType: string | ros.IResolvable;
    /**
     * @Property versionCode: Select the security center version. Value:
     * - level7: Antivirus Edition.
     * - level3: Premium version.
     * - level2: Enterprise Edition.
     * - level8: Ultimate.
     * - level10: Purchase value-added services only.
     */
    readonly versionCode: string | ros.IResolvable;
    /**
     * @Property buyNumber: Number of servers.
     */
    readonly buyNumber?: string | ros.IResolvable;
    /**
     * @Property containerImageScan: Container Image security scan. Interval type, value interval:[0,200000].
     * > The step size is 20, that is, only multiples of 20 can be filled in.
     */
    readonly containerImageScan?: string | ros.IResolvable;
    /**
     * @Property containerImageScanNew: Container Image security scan. Interval type, value interval:[0,200000].
     * > The step size is 20, that is, only multiples of 20 can be filled in.
     */
    readonly containerImageScanNew?: string | ros.IResolvable;
    /**
     * @Property honeypot: Number of cloud honeypot licenses. Interval type, value interval:[20,500].
     * > This module can only be purchased when honeypot_switch = 1, starting with 20.
     */
    readonly honeypot?: string | ros.IResolvable;
    /**
     * @Property honeypotSwitch: Cloud honeypot. Value:
     * - 1: Yes.
     * - 2: No.
     */
    readonly honeypotSwitch?: string | ros.IResolvable;
    /**
     * @Property modifyType: Change configuration type, value
     * - Upgrade: Upgrade.
     * - Downgrade: Downgrade.
     */
    readonly modifyType?: string | ros.IResolvable;
    /**
     * @Property period: Prepaid cycle. The unit is Monthly, please enter an integer multiple of 12 for annual paid products.
     * > must be set when creating a prepaid instance.
     */
    readonly period?: number | ros.IResolvable;
    /**
     * @Property productType: Product type, only China station needs to be set to sas, international station does not need to set.
     */
    readonly productType?: string | ros.IResolvable;
    /**
     * @Property raspCount: Number of application protection licenses. Interval type, value interval:[1,100000000].
     */
    readonly raspCount?: string | ros.IResolvable;
    /**
     * @Property renewalPeriodUnit: Automatic renewal period unit, value:
     * - M: month.
     * - Y: years.
     * > Must be set when RenewalStatus = AutoRenewal.
     */
    readonly renewalPeriodUnit?: string | ros.IResolvable;
    /**
     * @Property renewalStatus: Automatic renewal status, value:
     * - AutoRenewal: automatic renewal.
     * - ManualRenewal: manual renewal.
     * Default ManualRenewal.
     */
    readonly renewalStatus?: string | ros.IResolvable;
    /**
     * @Property renewPeriod: Automatic renewal cycle, in months.
     * > When **RenewalStatus** is set to **AutoRenewal**, it must be set.
     */
    readonly renewPeriod?: number | ros.IResolvable;
    /**
     * @Property sasAntiRansomware: Anti-ransomware capacity. Unit: GB. Interval type, value interval:[0,9999999999].
     * > The step size is 10, that is, only multiples of 10 can be filled in.
     */
    readonly sasAntiRansomware?: string | ros.IResolvable;
    /**
     * @Property sasCspm: Cloud platform configuration check scan times, interval type, value range:[1000,9999999999].
     * > You must have sas_cspm_switch = 1 to purchase this module. The step size is 100, that is, only multiples of 10 can be filled in.
     */
    readonly sasCspm?: string | ros.IResolvable;
    /**
     * @Property sasCspmSwitch: Cloud platform configuration check switch. Value:
     * - 0: No.
     * - 1: Yes.
     */
    readonly sasCspmSwitch?: string | ros.IResolvable;
    /**
     * @Property sasSc: Security screen. Value:
     * - true: Yes.
     * - false: No.
     */
    readonly sasSc?: string | ros.IResolvable;
    /**
     * @Property sasSdk: Number of malicious file detections. Unit: 10,000 times. Interval type, value interval:[10,9999999999].
     * > This module can only be purchased when sas_sdk_switch = 1. The step size is 10, that is, only multiples of 10 can be filled in.
     */
    readonly sasSdk?: string | ros.IResolvable;
    /**
     * @Property sasSdkSwitch: Malicious file detection SDK.
     */
    readonly sasSdkSwitch?: string | ros.IResolvable;
    /**
     * @Property sasSlsStorage: Log analysis storage capacity. Unit: GB. Interval type, value interval:[0,600000].
     * > The step size is 10, that is, only multiples of 10 can be filled in.
     */
    readonly sasSlsStorage?: string | ros.IResolvable;
    /**
     * @Property sasWebguardBoolean: Web tamper-proof switch. Value:
     * - 0: No.
     * - 1: Yes.
     */
    readonly sasWebguardBoolean?: string | ros.IResolvable;
    /**
     * @Property sasWebguardOrderNum: Tamper-proof authorization number. Value:
     * - 0: No
     * - 1: Yes.
     */
    readonly sasWebguardOrderNum?: string | ros.IResolvable;
    /**
     * @Property threatAnalysis: Threat Analysis log storage capacity. Interval type, value interval:[0,9999999999].
     * > This module can only be purchased when Threat_analysis_switch = 1. The step size is 10, that is, only multiples of 10 can be filled in.
     */
    readonly threatAnalysis?: string | ros.IResolvable;
    /**
     * @Property threatAnalysisSwitch: Threat analysis. Value:
     * - 0: No.
     * - 1: Yes.
     */
    readonly threatAnalysisSwitch?: string | ros.IResolvable;
    /**
     * @Property vCore: Number of cores.
     */
    readonly vCore?: string | ros.IResolvable;
    /**
     * @Property vulCount: Vulnerability repair times, interval type, value range:[20,100000000].
     * > This module can only be purchased when vul_switch = 1. Only when the version_code value is level7 or level10. other versions do not need to be purchased separately.
     */
    readonly vulCount?: string | ros.IResolvable;
    /**
     * @Property vulSwitch: Vulnerability fix switch. Value:
     * - 0: No.
     * - 1: Yes.
     * > When the value of version_code is level7 or level10, the purchase is allowed. Other versions do not need to be purchased separately.
     */
    readonly vulSwitch?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::ThreatDetection::Instance`
 */
export declare class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ThreatDetection::Instance";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute BuyNumber: Number of servers.
     */
    readonly attrBuyNumber: ros.IResolvable;
    /**
     * @Attribute ContainerImageScan: Container Image security scan. Interval type, value interval:[0,200000].
     */
    readonly attrContainerImageScan: ros.IResolvable;
    /**
     * @Attribute ContainerImageScanNew: Container Image security scan. Interval type, value interval:[0,200000].
     */
    readonly attrContainerImageScanNew: ros.IResolvable;
    /**
     * @Attribute CreateTime: The creation time of the resource.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute Honeypot: Number of cloud honeypot licenses. Interval type, value interval:[20,500].
     */
    readonly attrHoneypot: ros.IResolvable;
    /**
     * @Attribute HoneypotSwitch: Cloud honeypot.
     */
    readonly attrHoneypotSwitch: ros.IResolvable;
    /**
     * @Attribute InstanceId: The first ID of the resource.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * @Attribute PaymentType: The payment type of the resource.
     */
    readonly attrPaymentType: ros.IResolvable;
    /**
     * @Attribute RaspCount: Number of application protection licenses. Interval type, value interval:[1,100000000].
     */
    readonly attrRaspCount: ros.IResolvable;
    /**
     * @Attribute RenewPeriod: Automatic renewal cycle, in months.
     */
    readonly attrRenewPeriod: ros.IResolvable;
    /**
     * @Attribute RenewalPeriodUnit: Automatic renewal period unit, value:.
     */
    readonly attrRenewalPeriodUnit: ros.IResolvable;
    /**
     * @Attribute RenewalStatus: Automatic renewal status, value:.
     */
    readonly attrRenewalStatus: ros.IResolvable;
    /**
     * @Attribute SasAntiRansomware: Anti-ransomware capacity. Unit: GB. Interval type, value interval:[0,9999999999].
     */
    readonly attrSasAntiRansomware: ros.IResolvable;
    /**
     * @Attribute SasCspm: Cloud platform configuration check scan times, interval type, value range:[1000,9999999999].
     */
    readonly attrSasCspm: ros.IResolvable;
    /**
     * @Attribute SasCspmSwitch: Cloud platform configuration check switch.
     */
    readonly attrSasCspmSwitch: ros.IResolvable;
    /**
     * @Attribute SasSc: Security screen.
     */
    readonly attrSasSc: ros.IResolvable;
    /**
     * @Attribute SasSdk: Number of malicious file detections. Unit: 10,000 times. Interval type, value interval:[10,9999999999].
     */
    readonly attrSasSdk: ros.IResolvable;
    /**
     * @Attribute SasSdkSwitch: Malicious file detection SDK.
     */
    readonly attrSasSdkSwitch: ros.IResolvable;
    /**
     * @Attribute SasSlsStorage: Log analysis storage capacity. Unit: GB. Interval type, value interval:[0,600000].
     */
    readonly attrSasSlsStorage: ros.IResolvable;
    /**
     * @Attribute SasWebguardBoolean: Web tamper-proof switch.
     */
    readonly attrSasWebguardBoolean: ros.IResolvable;
    /**
     * @Attribute SasWebguardOrderNum: Tamper-proof authorization number.
     */
    readonly attrSasWebguardOrderNum: ros.IResolvable;
    /**
     * @Attribute ThreatAnalysis: Threat Analysis log storage capacity. Interval type, value interval:[0,9999999999].
     */
    readonly attrThreatAnalysis: ros.IResolvable;
    /**
     * @Attribute ThreatAnalysisSwitch: Threat analysis.
     */
    readonly attrThreatAnalysisSwitch: ros.IResolvable;
    /**
     * @Attribute VCore: Number of cores.
     */
    readonly attrVCore: ros.IResolvable;
    /**
     * @Attribute VersionCode: Select the security center version.
     */
    readonly attrVersionCode: ros.IResolvable;
    /**
     * @Attribute VulCount: Vulnerability repair times, interval type, value range:[20,100000000].
     */
    readonly attrVulCount: ros.IResolvable;
    /**
     * @Attribute VulSwitch: Vulnerability fix switch.
     */
    readonly attrVulSwitch: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property paymentType: The payment type of the resource.
     */
    paymentType: string | ros.IResolvable;
    /**
     * @Property versionCode: Select the security center version. Value:
     * - level7: Antivirus Edition.
     * - level3: Premium version.
     * - level2: Enterprise Edition.
     * - level8: Ultimate.
     * - level10: Purchase value-added services only.
     */
    versionCode: string | ros.IResolvable;
    /**
     * @Property buyNumber: Number of servers.
     */
    buyNumber: string | ros.IResolvable | undefined;
    /**
     * @Property containerImageScan: Container Image security scan. Interval type, value interval:[0,200000].
     * > The step size is 20, that is, only multiples of 20 can be filled in.
     */
    containerImageScan: string | ros.IResolvable | undefined;
    /**
     * @Property containerImageScanNew: Container Image security scan. Interval type, value interval:[0,200000].
     * > The step size is 20, that is, only multiples of 20 can be filled in.
     */
    containerImageScanNew: string | ros.IResolvable | undefined;
    /**
     * @Property honeypot: Number of cloud honeypot licenses. Interval type, value interval:[20,500].
     * > This module can only be purchased when honeypot_switch = 1, starting with 20.
     */
    honeypot: string | ros.IResolvable | undefined;
    /**
     * @Property honeypotSwitch: Cloud honeypot. Value:
     * - 1: Yes.
     * - 2: No.
     */
    honeypotSwitch: string | ros.IResolvable | undefined;
    /**
     * @Property modifyType: Change configuration type, value
     * - Upgrade: Upgrade.
     * - Downgrade: Downgrade.
     */
    modifyType: string | ros.IResolvable | undefined;
    /**
     * @Property period: Prepaid cycle. The unit is Monthly, please enter an integer multiple of 12 for annual paid products.
     * > must be set when creating a prepaid instance.
     */
    period: number | ros.IResolvable | undefined;
    /**
     * @Property productType: Product type, only China station needs to be set to sas, international station does not need to set.
     */
    productType: string | ros.IResolvable | undefined;
    /**
     * @Property raspCount: Number of application protection licenses. Interval type, value interval:[1,100000000].
     */
    raspCount: string | ros.IResolvable | undefined;
    /**
     * @Property renewalPeriodUnit: Automatic renewal period unit, value:
     * - M: month.
     * - Y: years.
     * > Must be set when RenewalStatus = AutoRenewal.
     */
    renewalPeriodUnit: string | ros.IResolvable | undefined;
    /**
     * @Property renewalStatus: Automatic renewal status, value:
     * - AutoRenewal: automatic renewal.
     * - ManualRenewal: manual renewal.
     * Default ManualRenewal.
     */
    renewalStatus: string | ros.IResolvable | undefined;
    /**
     * @Property renewPeriod: Automatic renewal cycle, in months.
     * > When **RenewalStatus** is set to **AutoRenewal**, it must be set.
     */
    renewPeriod: number | ros.IResolvable | undefined;
    /**
     * @Property sasAntiRansomware: Anti-ransomware capacity. Unit: GB. Interval type, value interval:[0,9999999999].
     * > The step size is 10, that is, only multiples of 10 can be filled in.
     */
    sasAntiRansomware: string | ros.IResolvable | undefined;
    /**
     * @Property sasCspm: Cloud platform configuration check scan times, interval type, value range:[1000,9999999999].
     * > You must have sas_cspm_switch = 1 to purchase this module. The step size is 100, that is, only multiples of 10 can be filled in.
     */
    sasCspm: string | ros.IResolvable | undefined;
    /**
     * @Property sasCspmSwitch: Cloud platform configuration check switch. Value:
     * - 0: No.
     * - 1: Yes.
     */
    sasCspmSwitch: string | ros.IResolvable | undefined;
    /**
     * @Property sasSc: Security screen. Value:
     * - true: Yes.
     * - false: No.
     */
    sasSc: string | ros.IResolvable | undefined;
    /**
     * @Property sasSdk: Number of malicious file detections. Unit: 10,000 times. Interval type, value interval:[10,9999999999].
     * > This module can only be purchased when sas_sdk_switch = 1. The step size is 10, that is, only multiples of 10 can be filled in.
     */
    sasSdk: string | ros.IResolvable | undefined;
    /**
     * @Property sasSdkSwitch: Malicious file detection SDK.
     */
    sasSdkSwitch: string | ros.IResolvable | undefined;
    /**
     * @Property sasSlsStorage: Log analysis storage capacity. Unit: GB. Interval type, value interval:[0,600000].
     * > The step size is 10, that is, only multiples of 10 can be filled in.
     */
    sasSlsStorage: string | ros.IResolvable | undefined;
    /**
     * @Property sasWebguardBoolean: Web tamper-proof switch. Value:
     * - 0: No.
     * - 1: Yes.
     */
    sasWebguardBoolean: string | ros.IResolvable | undefined;
    /**
     * @Property sasWebguardOrderNum: Tamper-proof authorization number. Value:
     * - 0: No
     * - 1: Yes.
     */
    sasWebguardOrderNum: string | ros.IResolvable | undefined;
    /**
     * @Property threatAnalysis: Threat Analysis log storage capacity. Interval type, value interval:[0,9999999999].
     * > This module can only be purchased when Threat_analysis_switch = 1. The step size is 10, that is, only multiples of 10 can be filled in.
     */
    threatAnalysis: string | ros.IResolvable | undefined;
    /**
     * @Property threatAnalysisSwitch: Threat analysis. Value:
     * - 0: No.
     * - 1: Yes.
     */
    threatAnalysisSwitch: string | ros.IResolvable | undefined;
    /**
     * @Property vCore: Number of cores.
     */
    vCore: string | ros.IResolvable | undefined;
    /**
     * @Property vulCount: Vulnerability repair times, interval type, value range:[20,100000000].
     * > This module can only be purchased when vul_switch = 1. Only when the version_code value is level7 or level10. other versions do not need to be purchased separately.
     */
    vulCount: string | ros.IResolvable | undefined;
    /**
     * @Property vulSwitch: Vulnerability fix switch. Value:
     * - 0: No.
     * - 1: Yes.
     * > When the value of version_code is level7 or level10, the purchase is allowed. Other versions do not need to be purchased separately.
     */
    vulSwitch: string | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::ThreatDetection::Instance`.
     *
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
