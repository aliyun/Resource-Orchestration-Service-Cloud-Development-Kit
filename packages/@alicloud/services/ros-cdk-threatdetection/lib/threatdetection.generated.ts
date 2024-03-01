// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosAntiBruteForceRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-antibruteforcerule
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
 * Determine whether the given properties match those of a `RosAntiBruteForceRuleProps`
 *
 * @param properties - the TypeScript properties of a `RosAntiBruteForceRuleProps`
 *
 * @returns the result of the validation.
 */
function RosAntiBruteForceRulePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('defaultRule', ros.validateBoolean)(properties.defaultRule));
    errors.collect(ros.propertyValidator('antiBruteForceRuleName', ros.requiredValidator)(properties.antiBruteForceRuleName));
    errors.collect(ros.propertyValidator('antiBruteForceRuleName', ros.validateString)(properties.antiBruteForceRuleName));
    errors.collect(ros.propertyValidator('forbiddenTime', ros.requiredValidator)(properties.forbiddenTime));
    if(properties.forbiddenTime && (typeof properties.forbiddenTime) !== 'object') {
        errors.collect(ros.propertyValidator('forbiddenTime', ros.validateAllowedValues)({
          data: properties.forbiddenTime,
          allowedValues: [5,15,30,60,120,360,720,1440,10080,52560000],
        }));
    }
    errors.collect(ros.propertyValidator('forbiddenTime', ros.validateNumber)(properties.forbiddenTime));
    errors.collect(ros.propertyValidator('uuidList', ros.requiredValidator)(properties.uuidList));
    errors.collect(ros.propertyValidator('uuidList', ros.listValidator(ros.validateString))(properties.uuidList));
    errors.collect(ros.propertyValidator('failCount', ros.requiredValidator)(properties.failCount));
    if(properties.failCount && (typeof properties.failCount) !== 'object') {
        errors.collect(ros.propertyValidator('failCount', ros.validateAllowedValues)({
          data: properties.failCount,
          allowedValues: [2,3,4,5,10,50,80,100],
        }));
    }
    errors.collect(ros.propertyValidator('failCount', ros.validateNumber)(properties.failCount));
    errors.collect(ros.propertyValidator('span', ros.requiredValidator)(properties.span));
    if(properties.span && (typeof properties.span) !== 'object') {
        errors.collect(ros.propertyValidator('span', ros.validateAllowedValues)({
          data: properties.span,
          allowedValues: [1,2,5,10,15],
        }));
    }
    errors.collect(ros.propertyValidator('span', ros.validateNumber)(properties.span));
    return errors.wrap('supplied properties not correct for "RosAntiBruteForceRuleProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ThreatDetection::AntiBruteForceRule` resource
 *
 * @param properties - the TypeScript properties of a `RosAntiBruteForceRuleProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ThreatDetection::AntiBruteForceRule` resource.
 */
// @ts-ignore TS6133
function rosAntiBruteForceRulePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAntiBruteForceRulePropsValidator(properties).assertSuccess();
    }
    return {
      AntiBruteForceRuleName: ros.stringToRosTemplate(properties.antiBruteForceRuleName),
      FailCount: ros.numberToRosTemplate(properties.failCount),
      ForbiddenTime: ros.numberToRosTemplate(properties.forbiddenTime),
      Span: ros.numberToRosTemplate(properties.span),
      UuidList: ros.listMapper(ros.stringToRosTemplate)(properties.uuidList),
      DefaultRule: ros.booleanToRosTemplate(properties.defaultRule),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ThreatDetection::AntiBruteForceRule`.
 * @Note This class does not contain additional functions, so it is recommended to use the `AntiBruteForceRule` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-antibruteforcerule
 */
export class RosAntiBruteForceRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ThreatDetection::AntiBruteForceRule";

    /**
     * @Attribute AntiBruteForceRuleId: The ID of the defense rule.
     */
    public readonly attrAntiBruteForceRuleId: ros.IResolvable;

    /**
     * @Attribute AntiBruteForceRuleName: The name of the defense rule.
     */
    public readonly attrAntiBruteForceRuleName: ros.IResolvable;

    /**
     * @Attribute DefaultRule: Specifies whether to set the defense rule as the default rule. 
Valid values:
- true: yes
- false: no
     */
    public readonly attrDefaultRule: ros.IResolvable;

    /**
     * @Attribute FailCount: The threshold for the number of failed user logins when the brute-force defense rule takes effect.
     */
    public readonly attrFailCount: ros.IResolvable;

    /**
     * @Attribute ForbiddenTime: The period of time during which logons from an account are not allowed. Unit: minutes.
     */
    public readonly attrForbiddenTime: ros.IResolvable;

    /**
     * @Attribute Span: The period of time during which logon failures from an account are measured. Unit: minutes. If Span is set to 10, the defense rule takes effect when the logon failures measured within 10 minutes reaches the specified threshold. The IP addresses of attackers cannot be used to log on to the server within the specified period of time.
     */
    public readonly attrSpan: ros.IResolvable;

    /**
     * @Attribute UuidList: The UUIDs of the server to which the defense rule is applied.
     */
    public readonly attrUuidList: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property antiBruteForceRuleName: The name of the defense rule.
     */
    public antiBruteForceRuleName: string | ros.IResolvable;

    /**
     * @Property failCount: The maximum number of failed logon attempts from an account. 
     * Valid values: 2, 3, 4, 5, 10, 50, 80, and 100.
     */
    public failCount: number | ros.IResolvable;

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
    public forbiddenTime: number | ros.IResolvable;

    /**
     * @Property span: The maximum period of time during which failed logon attempts from an account can occur.
     * Unit: minutes. Valid values:
     * - 1
     * - 2
     * - 5
     * - 10
     * - 15
     */
    public span: number | ros.IResolvable;

    /**
     * @Property uuidList: The UUIDs of the servers to which you want to apply the defense rule.
     */
    public uuidList: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property defaultRule: Specifies whether to set the defense rule as the default rule. 
     * Valid values:
     * - true: yes
     * - false: no
     */
    public defaultRule: boolean | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAntiBruteForceRuleProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAntiBruteForceRule.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAntiBruteForceRuleId = this.getAtt('AntiBruteForceRuleId');
        this.attrAntiBruteForceRuleName = this.getAtt('AntiBruteForceRuleName');
        this.attrDefaultRule = this.getAtt('DefaultRule');
        this.attrFailCount = this.getAtt('FailCount');
        this.attrForbiddenTime = this.getAtt('ForbiddenTime');
        this.attrSpan = this.getAtt('Span');
        this.attrUuidList = this.getAtt('UuidList');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.antiBruteForceRuleName = props.antiBruteForceRuleName;
        this.failCount = props.failCount;
        this.forbiddenTime = props.forbiddenTime;
        this.span = props.span;
        this.uuidList = props.uuidList;
        this.defaultRule = props.defaultRule;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            antiBruteForceRuleName: this.antiBruteForceRuleName,
            failCount: this.failCount,
            forbiddenTime: this.forbiddenTime,
            span: this.span,
            uuidList: this.uuidList,
            defaultRule: this.defaultRule,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAntiBruteForceRulePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-instance
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
 * Determine whether the given properties match those of a `RosInstanceProps`
 *
 * @param properties - the TypeScript properties of a `RosInstanceProps`
 *
 * @returns the result of the validation.
 */
function RosInstancePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('threatAnalysis', ros.validateString)(properties.threatAnalysis));
    errors.collect(ros.propertyValidator('sasSlsStorage', ros.validateString)(properties.sasSlsStorage));
    errors.collect(ros.propertyValidator('containerImageScan', ros.validateString)(properties.containerImageScan));
    if(properties.threatAnalysisSwitch && (typeof properties.threatAnalysisSwitch) !== 'object') {
        errors.collect(ros.propertyValidator('threatAnalysisSwitch', ros.validateAllowedValues)({
          data: properties.threatAnalysisSwitch,
          allowedValues: ["0","1"],
        }));
    }
    errors.collect(ros.propertyValidator('threatAnalysisSwitch', ros.validateString)(properties.threatAnalysisSwitch));
    errors.collect(ros.propertyValidator('vCore', ros.validateString)(properties.vCore));
    errors.collect(ros.propertyValidator('renewPeriod', ros.validateNumber)(properties.renewPeriod));
    if(properties.sasSc && (typeof properties.sasSc) !== 'object') {
        errors.collect(ros.propertyValidator('sasSc', ros.validateAllowedValues)({
          data: properties.sasSc,
          allowedValues: ["false","true"],
        }));
    }
    errors.collect(ros.propertyValidator('sasSc', ros.validateString)(properties.sasSc));
    if(properties.sasCspmSwitch && (typeof properties.sasCspmSwitch) !== 'object') {
        errors.collect(ros.propertyValidator('sasCspmSwitch', ros.validateAllowedValues)({
          data: properties.sasCspmSwitch,
          allowedValues: ["0","1"],
        }));
    }
    errors.collect(ros.propertyValidator('sasCspmSwitch', ros.validateString)(properties.sasCspmSwitch));
    errors.collect(ros.propertyValidator('buyNumber', ros.validateString)(properties.buyNumber));
    if(properties.sasWebguardBoolean && (typeof properties.sasWebguardBoolean) !== 'object') {
        errors.collect(ros.propertyValidator('sasWebguardBoolean', ros.validateAllowedValues)({
          data: properties.sasWebguardBoolean,
          allowedValues: ["0","1"],
        }));
    }
    errors.collect(ros.propertyValidator('sasWebguardBoolean', ros.validateString)(properties.sasWebguardBoolean));
    if(properties.honeypotSwitch && (typeof properties.honeypotSwitch) !== 'object') {
        errors.collect(ros.propertyValidator('honeypotSwitch', ros.validateAllowedValues)({
          data: properties.honeypotSwitch,
          allowedValues: ["1","2"],
        }));
    }
    errors.collect(ros.propertyValidator('honeypotSwitch', ros.validateString)(properties.honeypotSwitch));
    errors.collect(ros.propertyValidator('paymentType', ros.requiredValidator)(properties.paymentType));
    if(properties.paymentType && (typeof properties.paymentType) !== 'object') {
        errors.collect(ros.propertyValidator('paymentType', ros.validateAllowedValues)({
          data: properties.paymentType,
          allowedValues: ["PayAsYouGo","PostPaid","PayOnDemand","Postpaid","PostPay","POSTPAY","Subscription","PrePaid","PrePay","Prepaid","PREPAY"],
        }));
    }
    errors.collect(ros.propertyValidator('paymentType', ros.validateString)(properties.paymentType));
    errors.collect(ros.propertyValidator('sasSdk', ros.validateString)(properties.sasSdk));
    errors.collect(ros.propertyValidator('sasAntiRansomware', ros.validateString)(properties.sasAntiRansomware));
    errors.collect(ros.propertyValidator('sasWebguardOrderNum', ros.validateString)(properties.sasWebguardOrderNum));
    if(properties.renewalStatus && (typeof properties.renewalStatus) !== 'object') {
        errors.collect(ros.propertyValidator('renewalStatus', ros.validateAllowedValues)({
          data: properties.renewalStatus,
          allowedValues: ["AutoRenewal","ManualRenewal"],
        }));
    }
    errors.collect(ros.propertyValidator('renewalStatus', ros.validateString)(properties.renewalStatus));
    errors.collect(ros.propertyValidator('productType', ros.validateString)(properties.productType));
    if(properties.vulSwitch && (typeof properties.vulSwitch) !== 'object') {
        errors.collect(ros.propertyValidator('vulSwitch', ros.validateAllowedValues)({
          data: properties.vulSwitch,
          allowedValues: ["0","1"],
        }));
    }
    errors.collect(ros.propertyValidator('vulSwitch', ros.validateString)(properties.vulSwitch));
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    errors.collect(ros.propertyValidator('raspCount', ros.validateString)(properties.raspCount));
    errors.collect(ros.propertyValidator('vulCount', ros.validateString)(properties.vulCount));
    errors.collect(ros.propertyValidator('versionCode', ros.requiredValidator)(properties.versionCode));
    if(properties.versionCode && (typeof properties.versionCode) !== 'object') {
        errors.collect(ros.propertyValidator('versionCode', ros.validateAllowedValues)({
          data: properties.versionCode,
          allowedValues: ["level2","level8","level7","level3","level10"],
        }));
    }
    errors.collect(ros.propertyValidator('versionCode', ros.validateString)(properties.versionCode));
    if(properties.modifyType && (typeof properties.modifyType) !== 'object') {
        errors.collect(ros.propertyValidator('modifyType', ros.validateAllowedValues)({
          data: properties.modifyType,
          allowedValues: ["Upgrade","Downgrade"],
        }));
    }
    errors.collect(ros.propertyValidator('modifyType', ros.validateString)(properties.modifyType));
    errors.collect(ros.propertyValidator('sasCspm', ros.validateString)(properties.sasCspm));
    if(properties.sasSdkSwitch && (typeof properties.sasSdkSwitch) !== 'object') {
        errors.collect(ros.propertyValidator('sasSdkSwitch', ros.validateAllowedValues)({
          data: properties.sasSdkSwitch,
          allowedValues: ["0","1"],
        }));
    }
    errors.collect(ros.propertyValidator('sasSdkSwitch', ros.validateString)(properties.sasSdkSwitch));
    if(properties.renewalPeriodUnit && (typeof properties.renewalPeriodUnit) !== 'object') {
        errors.collect(ros.propertyValidator('renewalPeriodUnit', ros.validateAllowedValues)({
          data: properties.renewalPeriodUnit,
          allowedValues: ["M","Y"],
        }));
    }
    errors.collect(ros.propertyValidator('renewalPeriodUnit', ros.validateString)(properties.renewalPeriodUnit));
    errors.collect(ros.propertyValidator('containerImageScanNew', ros.validateString)(properties.containerImageScanNew));
    errors.collect(ros.propertyValidator('honeypot', ros.validateString)(properties.honeypot));
    return errors.wrap('supplied properties not correct for "RosInstanceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ThreatDetection::Instance` resource
 *
 * @param properties - the TypeScript properties of a `RosInstanceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ThreatDetection::Instance` resource.
 */
// @ts-ignore TS6133
function rosInstancePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosInstancePropsValidator(properties).assertSuccess();
    }
    return {
      PaymentType: ros.stringToRosTemplate(properties.paymentType),
      VersionCode: ros.stringToRosTemplate(properties.versionCode),
      BuyNumber: ros.stringToRosTemplate(properties.buyNumber),
      ContainerImageScan: ros.stringToRosTemplate(properties.containerImageScan),
      ContainerImageScanNew: ros.stringToRosTemplate(properties.containerImageScanNew),
      Honeypot: ros.stringToRosTemplate(properties.honeypot),
      HoneypotSwitch: ros.stringToRosTemplate(properties.honeypotSwitch),
      ModifyType: ros.stringToRosTemplate(properties.modifyType),
      Period: ros.numberToRosTemplate(properties.period),
      ProductType: ros.stringToRosTemplate(properties.productType),
      RaspCount: ros.stringToRosTemplate(properties.raspCount),
      RenewalPeriodUnit: ros.stringToRosTemplate(properties.renewalPeriodUnit),
      RenewalStatus: ros.stringToRosTemplate(properties.renewalStatus),
      RenewPeriod: ros.numberToRosTemplate(properties.renewPeriod),
      SasAntiRansomware: ros.stringToRosTemplate(properties.sasAntiRansomware),
      SasCspm: ros.stringToRosTemplate(properties.sasCspm),
      SasCspmSwitch: ros.stringToRosTemplate(properties.sasCspmSwitch),
      SasSc: ros.stringToRosTemplate(properties.sasSc),
      SasSdk: ros.stringToRosTemplate(properties.sasSdk),
      SasSdkSwitch: ros.stringToRosTemplate(properties.sasSdkSwitch),
      SasSlsStorage: ros.stringToRosTemplate(properties.sasSlsStorage),
      SasWebguardBoolean: ros.stringToRosTemplate(properties.sasWebguardBoolean),
      SasWebguardOrderNum: ros.stringToRosTemplate(properties.sasWebguardOrderNum),
      ThreatAnalysis: ros.stringToRosTemplate(properties.threatAnalysis),
      ThreatAnalysisSwitch: ros.stringToRosTemplate(properties.threatAnalysisSwitch),
      VCore: ros.stringToRosTemplate(properties.vCore),
      VulCount: ros.stringToRosTemplate(properties.vulCount),
      VulSwitch: ros.stringToRosTemplate(properties.vulSwitch),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ThreatDetection::Instance`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-instance
 */
export class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ThreatDetection::Instance";

    /**
     * @Attribute BuyNumber: Number of servers.
     */
    public readonly attrBuyNumber: ros.IResolvable;

    /**
     * @Attribute ContainerImageScan: Container Image security scan. Interval type, value interval:[0,200000].
     */
    public readonly attrContainerImageScan: ros.IResolvable;

    /**
     * @Attribute ContainerImageScanNew: Container Image security scan. Interval type, value interval:[0,200000].
     */
    public readonly attrContainerImageScanNew: ros.IResolvable;

    /**
     * @Attribute CreateTime: The creation time of the resource.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute Honeypot: Number of cloud honeypot licenses. Interval type, value interval:[20,500].
     */
    public readonly attrHoneypot: ros.IResolvable;

    /**
     * @Attribute HoneypotSwitch: Cloud honeypot.
     */
    public readonly attrHoneypotSwitch: ros.IResolvable;

    /**
     * @Attribute InstanceId: The first ID of the resource.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * @Attribute PaymentType: The payment type of the resource.
     */
    public readonly attrPaymentType: ros.IResolvable;

    /**
     * @Attribute RaspCount: Number of application protection licenses. Interval type, value interval:[1,100000000].
     */
    public readonly attrRaspCount: ros.IResolvable;

    /**
     * @Attribute RenewPeriod: Automatic renewal cycle, in months.
     */
    public readonly attrRenewPeriod: ros.IResolvable;

    /**
     * @Attribute RenewalPeriodUnit: Automatic renewal period unit, value:.
     */
    public readonly attrRenewalPeriodUnit: ros.IResolvable;

    /**
     * @Attribute RenewalStatus: Automatic renewal status, value:.
     */
    public readonly attrRenewalStatus: ros.IResolvable;

    /**
     * @Attribute SasAntiRansomware: Anti-ransomware capacity. Unit: GB. Interval type, value interval:[0,9999999999].
     */
    public readonly attrSasAntiRansomware: ros.IResolvable;

    /**
     * @Attribute SasCspm: Cloud platform configuration check scan times, interval type, value range:[1000,9999999999].
     */
    public readonly attrSasCspm: ros.IResolvable;

    /**
     * @Attribute SasCspmSwitch: Cloud platform configuration check switch.
     */
    public readonly attrSasCspmSwitch: ros.IResolvable;

    /**
     * @Attribute SasSc: Security screen.
     */
    public readonly attrSasSc: ros.IResolvable;

    /**
     * @Attribute SasSdk: Number of malicious file detections. Unit: 10,000 times. Interval type, value interval:[10,9999999999].
     */
    public readonly attrSasSdk: ros.IResolvable;

    /**
     * @Attribute SasSdkSwitch: Malicious file detection SDK.
     */
    public readonly attrSasSdkSwitch: ros.IResolvable;

    /**
     * @Attribute SasSlsStorage: Log analysis storage capacity. Unit: GB. Interval type, value interval:[0,600000].
     */
    public readonly attrSasSlsStorage: ros.IResolvable;

    /**
     * @Attribute SasWebguardBoolean: Web tamper-proof switch.
     */
    public readonly attrSasWebguardBoolean: ros.IResolvable;

    /**
     * @Attribute SasWebguardOrderNum: Tamper-proof authorization number.
     */
    public readonly attrSasWebguardOrderNum: ros.IResolvable;

    /**
     * @Attribute ThreatAnalysis: Threat Analysis log storage capacity. Interval type, value interval:[0,9999999999].
     */
    public readonly attrThreatAnalysis: ros.IResolvable;

    /**
     * @Attribute ThreatAnalysisSwitch: Threat analysis.
     */
    public readonly attrThreatAnalysisSwitch: ros.IResolvable;

    /**
     * @Attribute VCore: Number of cores.
     */
    public readonly attrVCore: ros.IResolvable;

    /**
     * @Attribute VersionCode: Select the security center version.
     */
    public readonly attrVersionCode: ros.IResolvable;

    /**
     * @Attribute VulCount: Vulnerability repair times, interval type, value range:[20,100000000].
     */
    public readonly attrVulCount: ros.IResolvable;

    /**
     * @Attribute VulSwitch: Vulnerability fix switch.
     */
    public readonly attrVulSwitch: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property paymentType: The payment type of the resource.
     */
    public paymentType: string | ros.IResolvable;

    /**
     * @Property versionCode: Select the security center version. Value:
     * - level7: Antivirus Edition.
     * - level3: Premium version.
     * - level2: Enterprise Edition.
     * - level8: Ultimate.
     * - level10: Purchase value-added services only.
     */
    public versionCode: string | ros.IResolvable;

    /**
     * @Property buyNumber: Number of servers.
     */
    public buyNumber: string | ros.IResolvable | undefined;

    /**
     * @Property containerImageScan: Container Image security scan. Interval type, value interval:[0,200000].
     * > The step size is 20, that is, only multiples of 20 can be filled in.
     */
    public containerImageScan: string | ros.IResolvable | undefined;

    /**
     * @Property containerImageScanNew: Container Image security scan. Interval type, value interval:[0,200000].
     * > The step size is 20, that is, only multiples of 20 can be filled in.
     */
    public containerImageScanNew: string | ros.IResolvable | undefined;

    /**
     * @Property honeypot: Number of cloud honeypot licenses. Interval type, value interval:[20,500].
     * > This module can only be purchased when honeypot_switch = 1, starting with 20.
     */
    public honeypot: string | ros.IResolvable | undefined;

    /**
     * @Property honeypotSwitch: Cloud honeypot. Value:
     * - 1: Yes.
     * - 2: No.
     */
    public honeypotSwitch: string | ros.IResolvable | undefined;

    /**
     * @Property modifyType: Change configuration type, value
     * - Upgrade: Upgrade.
     * - Downgrade: Downgrade.
     */
    public modifyType: string | ros.IResolvable | undefined;

    /**
     * @Property period: Prepaid cycle. The unit is Monthly, please enter an integer multiple of 12 for annual paid products.
     * > must be set when creating a prepaid instance.
     */
    public period: number | ros.IResolvable | undefined;

    /**
     * @Property productType: Product type, only China station needs to be set to sas, international station does not need to set.
     */
    public productType: string | ros.IResolvable | undefined;

    /**
     * @Property raspCount: Number of application protection licenses. Interval type, value interval:[1,100000000].
     */
    public raspCount: string | ros.IResolvable | undefined;

    /**
     * @Property renewalPeriodUnit: Automatic renewal period unit, value:
     * - M: month.
     * - Y: years.
     * > Must be set when RenewalStatus = AutoRenewal.
     */
    public renewalPeriodUnit: string | ros.IResolvable | undefined;

    /**
     * @Property renewalStatus: Automatic renewal status, value:
     * - AutoRenewal: automatic renewal.
     * - ManualRenewal: manual renewal.
     * Default ManualRenewal.
     */
    public renewalStatus: string | ros.IResolvable | undefined;

    /**
     * @Property renewPeriod: Automatic renewal cycle, in months.
     * > When **RenewalStatus** is set to **AutoRenewal**, it must be set.
     */
    public renewPeriod: number | ros.IResolvable | undefined;

    /**
     * @Property sasAntiRansomware: Anti-ransomware capacity. Unit: GB. Interval type, value interval:[0,9999999999].
     * > The step size is 10, that is, only multiples of 10 can be filled in.
     */
    public sasAntiRansomware: string | ros.IResolvable | undefined;

    /**
     * @Property sasCspm: Cloud platform configuration check scan times, interval type, value range:[1000,9999999999].
     * > You must have sas_cspm_switch = 1 to purchase this module. The step size is 100, that is, only multiples of 10 can be filled in.
     */
    public sasCspm: string | ros.IResolvable | undefined;

    /**
     * @Property sasCspmSwitch: Cloud platform configuration check switch. Value:
     * - 0: No.
     * - 1: Yes.
     */
    public sasCspmSwitch: string | ros.IResolvable | undefined;

    /**
     * @Property sasSc: Security screen. Value:
     * - true: Yes.
     * - false: No.
     */
    public sasSc: string | ros.IResolvable | undefined;

    /**
     * @Property sasSdk: Number of malicious file detections. Unit: 10,000 times. Interval type, value interval:[10,9999999999].
     * > This module can only be purchased when sas_sdk_switch = 1. The step size is 10, that is, only multiples of 10 can be filled in.
     */
    public sasSdk: string | ros.IResolvable | undefined;

    /**
     * @Property sasSdkSwitch: Malicious file detection SDK.
     */
    public sasSdkSwitch: string | ros.IResolvable | undefined;

    /**
     * @Property sasSlsStorage: Log analysis storage capacity. Unit: GB. Interval type, value interval:[0,600000].
     * > The step size is 10, that is, only multiples of 10 can be filled in.
     */
    public sasSlsStorage: string | ros.IResolvable | undefined;

    /**
     * @Property sasWebguardBoolean: Web tamper-proof switch. Value:
     * - 0: No.
     * - 1: Yes.
     */
    public sasWebguardBoolean: string | ros.IResolvable | undefined;

    /**
     * @Property sasWebguardOrderNum: Tamper-proof authorization number. Value:
     * - 0: No
     * - 1: Yes.
     */
    public sasWebguardOrderNum: string | ros.IResolvable | undefined;

    /**
     * @Property threatAnalysis: Threat Analysis log storage capacity. Interval type, value interval:[0,9999999999].
     * > This module can only be purchased when Threat_analysis_switch = 1. The step size is 10, that is, only multiples of 10 can be filled in.
     */
    public threatAnalysis: string | ros.IResolvable | undefined;

    /**
     * @Property threatAnalysisSwitch: Threat analysis. Value:
     * - 0: No.
     * - 1: Yes.
     */
    public threatAnalysisSwitch: string | ros.IResolvable | undefined;

    /**
     * @Property vCore: Number of cores.
     */
    public vCore: string | ros.IResolvable | undefined;

    /**
     * @Property vulCount: Vulnerability repair times, interval type, value range:[20,100000000].
     * > This module can only be purchased when vul_switch = 1. Only when the version_code value is level7 or level10. other versions do not need to be purchased separately.
     */
    public vulCount: string | ros.IResolvable | undefined;

    /**
     * @Property vulSwitch: Vulnerability fix switch. Value:
     * - 0: No.
     * - 1: Yes.
     * > When the value of version_code is level7 or level10, the purchase is allowed. Other versions do not need to be purchased separately.
     */
    public vulSwitch: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrBuyNumber = this.getAtt('BuyNumber');
        this.attrContainerImageScan = this.getAtt('ContainerImageScan');
        this.attrContainerImageScanNew = this.getAtt('ContainerImageScanNew');
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrHoneypot = this.getAtt('Honeypot');
        this.attrHoneypotSwitch = this.getAtt('HoneypotSwitch');
        this.attrInstanceId = this.getAtt('InstanceId');
        this.attrPaymentType = this.getAtt('PaymentType');
        this.attrRaspCount = this.getAtt('RaspCount');
        this.attrRenewPeriod = this.getAtt('RenewPeriod');
        this.attrRenewalPeriodUnit = this.getAtt('RenewalPeriodUnit');
        this.attrRenewalStatus = this.getAtt('RenewalStatus');
        this.attrSasAntiRansomware = this.getAtt('SasAntiRansomware');
        this.attrSasCspm = this.getAtt('SasCspm');
        this.attrSasCspmSwitch = this.getAtt('SasCspmSwitch');
        this.attrSasSc = this.getAtt('SasSc');
        this.attrSasSdk = this.getAtt('SasSdk');
        this.attrSasSdkSwitch = this.getAtt('SasSdkSwitch');
        this.attrSasSlsStorage = this.getAtt('SasSlsStorage');
        this.attrSasWebguardBoolean = this.getAtt('SasWebguardBoolean');
        this.attrSasWebguardOrderNum = this.getAtt('SasWebguardOrderNum');
        this.attrThreatAnalysis = this.getAtt('ThreatAnalysis');
        this.attrThreatAnalysisSwitch = this.getAtt('ThreatAnalysisSwitch');
        this.attrVCore = this.getAtt('VCore');
        this.attrVersionCode = this.getAtt('VersionCode');
        this.attrVulCount = this.getAtt('VulCount');
        this.attrVulSwitch = this.getAtt('VulSwitch');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.paymentType = props.paymentType;
        this.versionCode = props.versionCode;
        this.buyNumber = props.buyNumber;
        this.containerImageScan = props.containerImageScan;
        this.containerImageScanNew = props.containerImageScanNew;
        this.honeypot = props.honeypot;
        this.honeypotSwitch = props.honeypotSwitch;
        this.modifyType = props.modifyType;
        this.period = props.period;
        this.productType = props.productType;
        this.raspCount = props.raspCount;
        this.renewalPeriodUnit = props.renewalPeriodUnit;
        this.renewalStatus = props.renewalStatus;
        this.renewPeriod = props.renewPeriod;
        this.sasAntiRansomware = props.sasAntiRansomware;
        this.sasCspm = props.sasCspm;
        this.sasCspmSwitch = props.sasCspmSwitch;
        this.sasSc = props.sasSc;
        this.sasSdk = props.sasSdk;
        this.sasSdkSwitch = props.sasSdkSwitch;
        this.sasSlsStorage = props.sasSlsStorage;
        this.sasWebguardBoolean = props.sasWebguardBoolean;
        this.sasWebguardOrderNum = props.sasWebguardOrderNum;
        this.threatAnalysis = props.threatAnalysis;
        this.threatAnalysisSwitch = props.threatAnalysisSwitch;
        this.vCore = props.vCore;
        this.vulCount = props.vulCount;
        this.vulSwitch = props.vulSwitch;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            paymentType: this.paymentType,
            versionCode: this.versionCode,
            buyNumber: this.buyNumber,
            containerImageScan: this.containerImageScan,
            containerImageScanNew: this.containerImageScanNew,
            honeypot: this.honeypot,
            honeypotSwitch: this.honeypotSwitch,
            modifyType: this.modifyType,
            period: this.period,
            productType: this.productType,
            raspCount: this.raspCount,
            renewalPeriodUnit: this.renewalPeriodUnit,
            renewalStatus: this.renewalStatus,
            renewPeriod: this.renewPeriod,
            sasAntiRansomware: this.sasAntiRansomware,
            sasCspm: this.sasCspm,
            sasCspmSwitch: this.sasCspmSwitch,
            sasSc: this.sasSc,
            sasSdk: this.sasSdk,
            sasSdkSwitch: this.sasSdkSwitch,
            sasSlsStorage: this.sasSlsStorage,
            sasWebguardBoolean: this.sasWebguardBoolean,
            sasWebguardOrderNum: this.sasWebguardOrderNum,
            threatAnalysis: this.threatAnalysis,
            threatAnalysisSwitch: this.threatAnalysisSwitch,
            vCore: this.vCore,
            vulCount: this.vulCount,
            vulSwitch: this.vulSwitch,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosInstancePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
