import * as ros from '@alicloud/ros-cdk-core';
import { RosInstance } from './threatdetection.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosInstance as InstanceProperty };

/**
 * Properties for defining a `Instance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-instance
 */
export interface InstanceProps {

    /**
     * Property paymentType: The payment type of the resource.
     */
    readonly paymentType: string | ros.IResolvable;

    /**
     * Property versionCode: Select the security center version. Value:
     * - level7: Antivirus Edition.
     * - level3: Premium version.
     * - level2: Enterprise Edition.
     * - level8: Ultimate.
     * - level10: Purchase value-added services only.
     */
    readonly versionCode: string | ros.IResolvable;

    /**
     * Property buyNumber: Number of servers.
     */
    readonly buyNumber?: string | ros.IResolvable;

    /**
     * Property containerImageScan: Container Image security scan. Interval type, value interval:[0,200000].
     * > The step size is 20, that is, only multiples of 20 can be filled in.
     */
    readonly containerImageScan?: string | ros.IResolvable;

    /**
     * Property containerImageScanNew: Container Image security scan. Interval type, value interval:[0,200000].
     * > The step size is 20, that is, only multiples of 20 can be filled in.
     */
    readonly containerImageScanNew?: string | ros.IResolvable;

    /**
     * Property honeypot: Number of cloud honeypot licenses. Interval type, value interval:[20,500].
     * > This module can only be purchased when honeypot_switch = 1, starting with 20.
     */
    readonly honeypot?: string | ros.IResolvable;

    /**
     * Property honeypotSwitch: Cloud honeypot. Value:
     * - 1: Yes.
     * - 2: No.
     */
    readonly honeypotSwitch?: string | ros.IResolvable;

    /**
     * Property modifyType: Change configuration type, value
     * - Upgrade: Upgrade.
     * - Downgrade: Downgrade.
     */
    readonly modifyType?: string | ros.IResolvable;

    /**
     * Property period: Prepaid cycle. The unit is Monthly, please enter an integer multiple of 12 for annual paid products.
     * > must be set when creating a prepaid instance.
     */
    readonly period?: number | ros.IResolvable;

    /**
     * Property productType: Product type, only China station needs to be set to sas, international station does not need to set.
     */
    readonly productType?: string | ros.IResolvable;

    /**
     * Property raspCount: Number of application protection licenses. Interval type, value interval:[1,100000000].
     */
    readonly raspCount?: string | ros.IResolvable;

    /**
     * Property renewalPeriodUnit: Automatic renewal period unit, value:
     * - M: month.
     * - Y: years.
     * > Must be set when RenewalStatus = AutoRenewal.
     */
    readonly renewalPeriodUnit?: string | ros.IResolvable;

    /**
     * Property renewalStatus: Automatic renewal status, value:
     * - AutoRenewal: automatic renewal.
     * - ManualRenewal: manual renewal.
     * Default ManualRenewal.
     */
    readonly renewalStatus?: string | ros.IResolvable;

    /**
     * Property renewPeriod: Automatic renewal cycle, in months.
     * > When **RenewalStatus** is set to **AutoRenewal**, it must be set.
     */
    readonly renewPeriod?: number | ros.IResolvable;

    /**
     * Property sasAntiRansomware: Anti-ransomware capacity. Unit: GB. Interval type, value interval:[0,9999999999].
     * > The step size is 10, that is, only multiples of 10 can be filled in.
     */
    readonly sasAntiRansomware?: string | ros.IResolvable;

    /**
     * Property sasCspm: Cloud platform configuration check scan times, interval type, value range:[1000,9999999999].
     * > You must have sas_cspm_switch = 1 to purchase this module. The step size is 100, that is, only multiples of 10 can be filled in.
     */
    readonly sasCspm?: string | ros.IResolvable;

    /**
     * Property sasCspmSwitch: Cloud platform configuration check switch. Value:
     * - 0: No.
     * - 1: Yes.
     */
    readonly sasCspmSwitch?: string | ros.IResolvable;

    /**
     * Property sasSc: Security screen. Value:
     * - true: Yes.
     * - false: No.
     */
    readonly sasSc?: string | ros.IResolvable;

    /**
     * Property sasSdk: Number of malicious file detections. Unit: 10,000 times. Interval type, value interval:[10,9999999999].
     * > This module can only be purchased when sas_sdk_switch = 1. The step size is 10, that is, only multiples of 10 can be filled in.
     */
    readonly sasSdk?: string | ros.IResolvable;

    /**
     * Property sasSdkSwitch: Malicious file detection SDK.
     */
    readonly sasSdkSwitch?: string | ros.IResolvable;

    /**
     * Property sasSlsStorage: Log analysis storage capacity. Unit: GB. Interval type, value interval:[0,600000].
     * > The step size is 10, that is, only multiples of 10 can be filled in.
     */
    readonly sasSlsStorage?: string | ros.IResolvable;

    /**
     * Property sasWebguardBoolean: Web tamper-proof switch. Value:
     * - 0: No.
     * - 1: Yes.
     */
    readonly sasWebguardBoolean?: string | ros.IResolvable;

    /**
     * Property sasWebguardOrderNum: Tamper-proof authorization number. Value:
     * - 0: No
     * - 1: Yes.
     */
    readonly sasWebguardOrderNum?: string | ros.IResolvable;

    /**
     * Property threatAnalysis: Threat Analysis log storage capacity. Interval type, value interval:[0,9999999999].
     * > This module can only be purchased when Threat_analysis_switch = 1. The step size is 10, that is, only multiples of 10 can be filled in.
     */
    readonly threatAnalysis?: string | ros.IResolvable;

    /**
     * Property threatAnalysisSwitch: Threat analysis. Value:
     * - 0: No.
     * - 1: Yes.
     */
    readonly threatAnalysisSwitch?: string | ros.IResolvable;

    /**
     * Property vCore: Number of cores.
     */
    readonly vCore?: string | ros.IResolvable;

    /**
     * Property vulCount: Vulnerability repair times, interval type, value range:[20,100000000].
     * > This module can only be purchased when vul_switch = 1. Only when the version_code value is level7 or level10. other versions do not need to be purchased separately.
     */
    readonly vulCount?: string | ros.IResolvable;

    /**
     * Property vulSwitch: Vulnerability fix switch. Value:
     * - 0: No.
     * - 1: Yes.
     * > When the value of version_code is level7 or level10, the purchase is allowed. Other versions do not need to be purchased separately.
     */
    readonly vulSwitch?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ThreatDetection::Instance`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-instance
 */
export class Instance extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: InstanceProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute BuyNumber: Number of servers.
     */
    public readonly attrBuyNumber: ros.IResolvable;

    /**
     * Attribute ContainerImageScan: Container Image security scan. Interval type, value interval:[0,200000].
     */
    public readonly attrContainerImageScan: ros.IResolvable;

    /**
     * Attribute ContainerImageScanNew: Container Image security scan. Interval type, value interval:[0,200000].
     */
    public readonly attrContainerImageScanNew: ros.IResolvable;

    /**
     * Attribute CreateTime: The creation time of the resource.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * Attribute Honeypot: Number of cloud honeypot licenses. Interval type, value interval:[20,500].
     */
    public readonly attrHoneypot: ros.IResolvable;

    /**
     * Attribute HoneypotSwitch: Cloud honeypot.
     */
    public readonly attrHoneypotSwitch: ros.IResolvable;

    /**
     * Attribute InstanceId: The first ID of the resource.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * Attribute PaymentType: The payment type of the resource.
     */
    public readonly attrPaymentType: ros.IResolvable;

    /**
     * Attribute RaspCount: Number of application protection licenses. Interval type, value interval:[1,100000000].
     */
    public readonly attrRaspCount: ros.IResolvable;

    /**
     * Attribute RenewPeriod: Automatic renewal cycle, in months.
     */
    public readonly attrRenewPeriod: ros.IResolvable;

    /**
     * Attribute RenewalPeriodUnit: Automatic renewal period unit, value:.
     */
    public readonly attrRenewalPeriodUnit: ros.IResolvable;

    /**
     * Attribute RenewalStatus: Automatic renewal status, value:.
     */
    public readonly attrRenewalStatus: ros.IResolvable;

    /**
     * Attribute SasAntiRansomware: Anti-ransomware capacity. Unit: GB. Interval type, value interval:[0,9999999999].
     */
    public readonly attrSasAntiRansomware: ros.IResolvable;

    /**
     * Attribute SasCspm: Cloud platform configuration check scan times, interval type, value range:[1000,9999999999].
     */
    public readonly attrSasCspm: ros.IResolvable;

    /**
     * Attribute SasCspmSwitch: Cloud platform configuration check switch.
     */
    public readonly attrSasCspmSwitch: ros.IResolvable;

    /**
     * Attribute SasSc: Security screen.
     */
    public readonly attrSasSc: ros.IResolvable;

    /**
     * Attribute SasSdk: Number of malicious file detections. Unit: 10,000 times. Interval type, value interval:[10,9999999999].
     */
    public readonly attrSasSdk: ros.IResolvable;

    /**
     * Attribute SasSdkSwitch: Malicious file detection SDK.
     */
    public readonly attrSasSdkSwitch: ros.IResolvable;

    /**
     * Attribute SasSlsStorage: Log analysis storage capacity. Unit: GB. Interval type, value interval:[0,600000].
     */
    public readonly attrSasSlsStorage: ros.IResolvable;

    /**
     * Attribute SasWebguardBoolean: Web tamper-proof switch.
     */
    public readonly attrSasWebguardBoolean: ros.IResolvable;

    /**
     * Attribute SasWebguardOrderNum: Tamper-proof authorization number.
     */
    public readonly attrSasWebguardOrderNum: ros.IResolvable;

    /**
     * Attribute ThreatAnalysis: Threat Analysis log storage capacity. Interval type, value interval:[0,9999999999].
     */
    public readonly attrThreatAnalysis: ros.IResolvable;

    /**
     * Attribute ThreatAnalysisSwitch: Threat analysis.
     */
    public readonly attrThreatAnalysisSwitch: ros.IResolvable;

    /**
     * Attribute VCore: Number of cores.
     */
    public readonly attrVCore: ros.IResolvable;

    /**
     * Attribute VersionCode: Select the security center version.
     */
    public readonly attrVersionCode: ros.IResolvable;

    /**
     * Attribute VulCount: Vulnerability repair times, interval type, value range:[20,100000000].
     */
    public readonly attrVulCount: ros.IResolvable;

    /**
     * Attribute VulSwitch: Vulnerability fix switch.
     */
    public readonly attrVulSwitch: ros.IResolvable;

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
            threatAnalysis: props.threatAnalysis,
            sasSlsStorage: props.sasSlsStorage,
            containerImageScan: props.containerImageScan,
            threatAnalysisSwitch: props.threatAnalysisSwitch,
            vCore: props.vCore,
            renewPeriod: props.renewPeriod,
            sasSc: props.sasSc,
            sasCspmSwitch: props.sasCspmSwitch,
            buyNumber: props.buyNumber,
            sasWebguardBoolean: props.sasWebguardBoolean,
            honeypotSwitch: props.honeypotSwitch,
            paymentType: props.paymentType,
            sasSdk: props.sasSdk,
            sasAntiRansomware: props.sasAntiRansomware,
            sasWebguardOrderNum: props.sasWebguardOrderNum,
            renewalStatus: props.renewalStatus,
            productType: props.productType,
            vulSwitch: props.vulSwitch,
            period: props.period,
            raspCount: props.raspCount,
            vulCount: props.vulCount,
            versionCode: props.versionCode,
            modifyType: props.modifyType,
            sasCspm: props.sasCspm,
            sasSdkSwitch: props.sasSdkSwitch,
            renewalPeriodUnit: props.renewalPeriodUnit,
            containerImageScanNew: props.containerImageScanNew,
            honeypot: props.honeypot,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstance;
        this.attrBuyNumber = rosInstance.attrBuyNumber;
        this.attrContainerImageScan = rosInstance.attrContainerImageScan;
        this.attrContainerImageScanNew = rosInstance.attrContainerImageScanNew;
        this.attrCreateTime = rosInstance.attrCreateTime;
        this.attrHoneypot = rosInstance.attrHoneypot;
        this.attrHoneypotSwitch = rosInstance.attrHoneypotSwitch;
        this.attrInstanceId = rosInstance.attrInstanceId;
        this.attrPaymentType = rosInstance.attrPaymentType;
        this.attrRaspCount = rosInstance.attrRaspCount;
        this.attrRenewPeriod = rosInstance.attrRenewPeriod;
        this.attrRenewalPeriodUnit = rosInstance.attrRenewalPeriodUnit;
        this.attrRenewalStatus = rosInstance.attrRenewalStatus;
        this.attrSasAntiRansomware = rosInstance.attrSasAntiRansomware;
        this.attrSasCspm = rosInstance.attrSasCspm;
        this.attrSasCspmSwitch = rosInstance.attrSasCspmSwitch;
        this.attrSasSc = rosInstance.attrSasSc;
        this.attrSasSdk = rosInstance.attrSasSdk;
        this.attrSasSdkSwitch = rosInstance.attrSasSdkSwitch;
        this.attrSasSlsStorage = rosInstance.attrSasSlsStorage;
        this.attrSasWebguardBoolean = rosInstance.attrSasWebguardBoolean;
        this.attrSasWebguardOrderNum = rosInstance.attrSasWebguardOrderNum;
        this.attrThreatAnalysis = rosInstance.attrThreatAnalysis;
        this.attrThreatAnalysisSwitch = rosInstance.attrThreatAnalysisSwitch;
        this.attrVCore = rosInstance.attrVCore;
        this.attrVersionCode = rosInstance.attrVersionCode;
        this.attrVulCount = rosInstance.attrVulCount;
        this.attrVulSwitch = rosInstance.attrVulSwitch;
    }
}
