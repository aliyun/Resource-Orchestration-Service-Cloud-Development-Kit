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
      'AntiBruteForceRuleName': ros.stringToRosTemplate(properties.antiBruteForceRuleName),
      'FailCount': ros.numberToRosTemplate(properties.failCount),
      'ForbiddenTime': ros.numberToRosTemplate(properties.forbiddenTime),
      'Span': ros.numberToRosTemplate(properties.span),
      'UuidList': ros.listMapper(ros.stringToRosTemplate)(properties.uuidList),
      'DefaultRule': ros.booleanToRosTemplate(properties.defaultRule),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ThreatDetection::AntiBruteForceRule`, which is used to create a defense rule against brute-force attacks.
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
 * Properties for defining a `RosAttackPathSensitiveAssetConfig`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-attackpathsensitiveassetconfig
 */
export interface RosAttackPathSensitiveAssetConfigProps {

    /**
     * @Property attackPathAssetList: The attack path sensitive asset configuration list.
     */
    readonly attackPathAssetList: Array<RosAttackPathSensitiveAssetConfig.AttackPathAssetListProperty | ros.IResolvable> | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosAttackPathSensitiveAssetConfigProps`
 *
 * @param properties - the TypeScript properties of a `RosAttackPathSensitiveAssetConfigProps`
 *
 * @returns the result of the validation.
 */
function RosAttackPathSensitiveAssetConfigPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('attackPathAssetList', ros.requiredValidator)(properties.attackPathAssetList));
    if(properties.attackPathAssetList && (Array.isArray(properties.attackPathAssetList) || (typeof properties.attackPathAssetList) === 'string')) {
        errors.collect(ros.propertyValidator('attackPathAssetList', ros.validateLength)({
            data: properties.attackPathAssetList.length,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('attackPathAssetList', ros.listValidator(RosAttackPathSensitiveAssetConfig_AttackPathAssetListPropertyValidator))(properties.attackPathAssetList));
    return errors.wrap('supplied properties not correct for "RosAttackPathSensitiveAssetConfigProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ThreatDetection::AttackPathSensitiveAssetConfig` resource
 *
 * @param properties - the TypeScript properties of a `RosAttackPathSensitiveAssetConfigProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ThreatDetection::AttackPathSensitiveAssetConfig` resource.
 */
// @ts-ignore TS6133
function rosAttackPathSensitiveAssetConfigPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAttackPathSensitiveAssetConfigPropsValidator(properties).assertSuccess();
    }
    return {
      'AttackPathAssetList': ros.listMapper(rosAttackPathSensitiveAssetConfigAttackPathAssetListPropertyToRosTemplate)(properties.attackPathAssetList),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ThreatDetection::AttackPathSensitiveAssetConfig`.
 * @Note This class does not contain additional functions, so it is recommended to use the `AttackPathSensitiveAssetConfig` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-attackpathsensitiveassetconfig
 */
export class RosAttackPathSensitiveAssetConfig extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ThreatDetection::AttackPathSensitiveAssetConfig";

    /**
     * @Attribute AttackPathAssetList: The attack path sensitive asset configuration list.
     */
    public readonly attrAttackPathAssetList: ros.IResolvable;

    /**
     * @Attribute AttackPathSensitiveAssetConfigId: Attack path sensitive asset configuration ID.
     */
    public readonly attrAttackPathSensitiveAssetConfigId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property attackPathAssetList: The attack path sensitive asset configuration list.
     */
    public attackPathAssetList: Array<RosAttackPathSensitiveAssetConfig.AttackPathAssetListProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAttackPathSensitiveAssetConfigProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAttackPathSensitiveAssetConfig.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAttackPathAssetList = this.getAtt('AttackPathAssetList');
        this.attrAttackPathSensitiveAssetConfigId = this.getAtt('AttackPathSensitiveAssetConfigId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.attackPathAssetList = props.attackPathAssetList;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            attackPathAssetList: this.attackPathAssetList,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAttackPathSensitiveAssetConfigPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosAttackPathSensitiveAssetConfig {
    /**
     * @stability external
     */
    export interface AttackPathAssetListProperty {
        /**
         * @Property instanceName: Instance name of the cloud product asset.
         */
        readonly instanceName?: string | ros.IResolvable;
        /**
         * @Property assetType: Type of the cloud product asset.
         */
        readonly assetType: number | ros.IResolvable;
        /**
         * @Property instanceId: Cloud product asset instance ID.
         */
        readonly instanceId: string | ros.IResolvable;
        /**
         * @Property vendor: Cloud product asset vendor.
         */
        readonly vendor: number | ros.IResolvable;
        /**
         * @Property regionId: Region ID of the cloud product asset instance.
         */
        readonly regionId: string | ros.IResolvable;
        /**
         * @Property assetSubType: Subtype of the cloud product asset.
         */
        readonly assetSubType: number | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `AttackPathAssetListProperty`
 *
 * @param properties - the TypeScript properties of a `AttackPathAssetListProperty`
 *
 * @returns the result of the validation.
 */
function RosAttackPathSensitiveAssetConfig_AttackPathAssetListPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('instanceName', ros.validateString)(properties.instanceName));
    errors.collect(ros.propertyValidator('assetType', ros.requiredValidator)(properties.assetType));
    errors.collect(ros.propertyValidator('assetType', ros.validateNumber)(properties.assetType));
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('vendor', ros.requiredValidator)(properties.vendor));
    if(properties.vendor && (typeof properties.vendor) !== 'object') {
        errors.collect(ros.propertyValidator('vendor', ros.validateAllowedValues)({
          data: properties.vendor,
          allowedValues: [0],
        }));
    }
    errors.collect(ros.propertyValidator('vendor', ros.validateNumber)(properties.vendor));
    errors.collect(ros.propertyValidator('regionId', ros.requiredValidator)(properties.regionId));
    errors.collect(ros.propertyValidator('regionId', ros.validateString)(properties.regionId));
    errors.collect(ros.propertyValidator('assetSubType', ros.requiredValidator)(properties.assetSubType));
    errors.collect(ros.propertyValidator('assetSubType', ros.validateNumber)(properties.assetSubType));
    return errors.wrap('supplied properties not correct for "AttackPathAssetListProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ThreatDetection::AttackPathSensitiveAssetConfig.AttackPathAssetList` resource
 *
 * @param properties - the TypeScript properties of a `AttackPathAssetListProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ThreatDetection::AttackPathSensitiveAssetConfig.AttackPathAssetList` resource.
 */
// @ts-ignore TS6133
function rosAttackPathSensitiveAssetConfigAttackPathAssetListPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosAttackPathSensitiveAssetConfig_AttackPathAssetListPropertyValidator(properties).assertSuccess();
    return {
      'InstanceName': ros.stringToRosTemplate(properties.instanceName),
      'AssetType': ros.numberToRosTemplate(properties.assetType),
      'InstanceId': ros.stringToRosTemplate(properties.instanceId),
      'Vendor': ros.numberToRosTemplate(properties.vendor),
      'RegionId': ros.stringToRosTemplate(properties.regionId),
      'AssetSubType': ros.numberToRosTemplate(properties.assetSubType),
    };
}

/**
 * Properties for defining a `RosAttackPathWhitelist`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-attackpathwhitelist
 */
export interface RosAttackPathWhitelistProps {

    /**
     * @Property pathName: The whitelist path name.
     */
    readonly pathName: string | ros.IResolvable;

    /**
     * @Property pathType: The whitelist path type.
     */
    readonly pathType: string | ros.IResolvable;

    /**
     * @Property whitelistName: The whitelist name.
     */
    readonly whitelistName: string | ros.IResolvable;

    /**
     * @Property whitelistType: The whitelist type.  Values:
     * * ALL_ASSET: All assets.
     * * PART_ASSET: Partial assets.
     */
    readonly whitelistType: string | ros.IResolvable;

    /**
     * @Property attackPathAssetList: List of attack path assets.
     */
    readonly attackPathAssetList?: Array<RosAttackPathWhitelist.AttackPathAssetListProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property remark: Remark information.
     */
    readonly remark?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosAttackPathWhitelistProps`
 *
 * @param properties - the TypeScript properties of a `RosAttackPathWhitelistProps`
 *
 * @returns the result of the validation.
 */
function RosAttackPathWhitelistPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('pathType', ros.requiredValidator)(properties.pathType));
    errors.collect(ros.propertyValidator('pathType', ros.validateString)(properties.pathType));
    if(properties.attackPathAssetList && (Array.isArray(properties.attackPathAssetList) || (typeof properties.attackPathAssetList) === 'string')) {
        errors.collect(ros.propertyValidator('attackPathAssetList', ros.validateLength)({
            data: properties.attackPathAssetList.length,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('attackPathAssetList', ros.listValidator(RosAttackPathWhitelist_AttackPathAssetListPropertyValidator))(properties.attackPathAssetList));
    errors.collect(ros.propertyValidator('whitelistType', ros.requiredValidator)(properties.whitelistType));
    if(properties.whitelistType && (typeof properties.whitelistType) !== 'object') {
        errors.collect(ros.propertyValidator('whitelistType', ros.validateAllowedValues)({
          data: properties.whitelistType,
          allowedValues: ["ALL_ASSET","PART_ASSET"],
        }));
    }
    errors.collect(ros.propertyValidator('whitelistType', ros.validateString)(properties.whitelistType));
    errors.collect(ros.propertyValidator('whitelistName', ros.requiredValidator)(properties.whitelistName));
    errors.collect(ros.propertyValidator('whitelistName', ros.validateString)(properties.whitelistName));
    errors.collect(ros.propertyValidator('pathName', ros.requiredValidator)(properties.pathName));
    errors.collect(ros.propertyValidator('pathName', ros.validateString)(properties.pathName));
    errors.collect(ros.propertyValidator('remark', ros.validateString)(properties.remark));
    return errors.wrap('supplied properties not correct for "RosAttackPathWhitelistProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ThreatDetection::AttackPathWhitelist` resource
 *
 * @param properties - the TypeScript properties of a `RosAttackPathWhitelistProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ThreatDetection::AttackPathWhitelist` resource.
 */
// @ts-ignore TS6133
function rosAttackPathWhitelistPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAttackPathWhitelistPropsValidator(properties).assertSuccess();
    }
    return {
      'PathName': ros.stringToRosTemplate(properties.pathName),
      'PathType': ros.stringToRosTemplate(properties.pathType),
      'WhitelistName': ros.stringToRosTemplate(properties.whitelistName),
      'WhitelistType': ros.stringToRosTemplate(properties.whitelistType),
      'AttackPathAssetList': ros.listMapper(rosAttackPathWhitelistAttackPathAssetListPropertyToRosTemplate)(properties.attackPathAssetList),
      'Remark': ros.stringToRosTemplate(properties.remark),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ThreatDetection::AttackPathWhitelist`.
 * @Note This class does not contain additional functions, so it is recommended to use the `AttackPathWhitelist` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-attackpathwhitelist
 */
export class RosAttackPathWhitelist extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ThreatDetection::AttackPathWhitelist";

    /**
     * @Attribute AttackPathAssetList: List of attack path assets.
     */
    public readonly attrAttackPathAssetList: ros.IResolvable;

    /**
     * @Attribute AttackPathWhitelistId: The attack path whitelist ID.
     */
    public readonly attrAttackPathWhitelistId: ros.IResolvable;

    /**
     * @Attribute PathName: The whitelist path name.
     */
    public readonly attrPathName: ros.IResolvable;

    /**
     * @Attribute PathType: The whitelist path type.
     */
    public readonly attrPathType: ros.IResolvable;

    /**
     * @Attribute Remark: Remark information.
     */
    public readonly attrRemark: ros.IResolvable;

    /**
     * @Attribute WhitelistName: The whitelist name.
     */
    public readonly attrWhitelistName: ros.IResolvable;

    /**
     * @Attribute WhitelistType: The whitelist type.
     */
    public readonly attrWhitelistType: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property pathName: The whitelist path name.
     */
    public pathName: string | ros.IResolvable;

    /**
     * @Property pathType: The whitelist path type.
     */
    public pathType: string | ros.IResolvable;

    /**
     * @Property whitelistName: The whitelist name.
     */
    public whitelistName: string | ros.IResolvable;

    /**
     * @Property whitelistType: The whitelist type.  Values:
     * * ALL_ASSET: All assets.
     * * PART_ASSET: Partial assets.
     */
    public whitelistType: string | ros.IResolvable;

    /**
     * @Property attackPathAssetList: List of attack path assets.
     */
    public attackPathAssetList: Array<RosAttackPathWhitelist.AttackPathAssetListProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property remark: Remark information.
     */
    public remark: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAttackPathWhitelistProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAttackPathWhitelist.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAttackPathAssetList = this.getAtt('AttackPathAssetList');
        this.attrAttackPathWhitelistId = this.getAtt('AttackPathWhitelistId');
        this.attrPathName = this.getAtt('PathName');
        this.attrPathType = this.getAtt('PathType');
        this.attrRemark = this.getAtt('Remark');
        this.attrWhitelistName = this.getAtt('WhitelistName');
        this.attrWhitelistType = this.getAtt('WhitelistType');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.pathName = props.pathName;
        this.pathType = props.pathType;
        this.whitelistName = props.whitelistName;
        this.whitelistType = props.whitelistType;
        this.attackPathAssetList = props.attackPathAssetList;
        this.remark = props.remark;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            pathName: this.pathName,
            pathType: this.pathType,
            whitelistName: this.whitelistName,
            whitelistType: this.whitelistType,
            attackPathAssetList: this.attackPathAssetList,
            remark: this.remark,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAttackPathWhitelistPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosAttackPathWhitelist {
    /**
     * @stability external
     */
    export interface AttackPathAssetListProperty {
        /**
         * @Property assetType: The asset type of the cloud product.
         */
        readonly assetType?: number | ros.IResolvable;
        /**
         * @Property instanceId: The ID of the cloud product instance.
         */
        readonly instanceId?: string | ros.IResolvable;
        /**
         * @Property nodeType: The whitelist node type, with values:
     * * start: Start point.
     * * end: End point.
         */
        readonly nodeType?: string | ros.IResolvable;
        /**
         * @Property regionId: The region ID of the cloud product.
         */
        readonly regionId?: string | ros.IResolvable;
        /**
         * @Property vendor: The cloud product cloud vendor ID.
         */
        readonly vendor: number | ros.IResolvable;
        /**
         * @Property assetSubType: Cloud product asset subtype.
         */
        readonly assetSubType?: number | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `AttackPathAssetListProperty`
 *
 * @param properties - the TypeScript properties of a `AttackPathAssetListProperty`
 *
 * @returns the result of the validation.
 */
function RosAttackPathWhitelist_AttackPathAssetListPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('assetType', ros.validateNumber)(properties.assetType));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    if(properties.nodeType && (typeof properties.nodeType) !== 'object') {
        errors.collect(ros.propertyValidator('nodeType', ros.validateAllowedValues)({
          data: properties.nodeType,
          allowedValues: ["start","end"],
        }));
    }
    errors.collect(ros.propertyValidator('nodeType', ros.validateString)(properties.nodeType));
    errors.collect(ros.propertyValidator('regionId', ros.validateString)(properties.regionId));
    errors.collect(ros.propertyValidator('vendor', ros.requiredValidator)(properties.vendor));
    if(properties.vendor && (typeof properties.vendor) !== 'object') {
        errors.collect(ros.propertyValidator('vendor', ros.validateAllowedValues)({
          data: properties.vendor,
          allowedValues: [1],
        }));
    }
    errors.collect(ros.propertyValidator('vendor', ros.validateNumber)(properties.vendor));
    errors.collect(ros.propertyValidator('assetSubType', ros.validateNumber)(properties.assetSubType));
    return errors.wrap('supplied properties not correct for "AttackPathAssetListProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ThreatDetection::AttackPathWhitelist.AttackPathAssetList` resource
 *
 * @param properties - the TypeScript properties of a `AttackPathAssetListProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ThreatDetection::AttackPathWhitelist.AttackPathAssetList` resource.
 */
// @ts-ignore TS6133
function rosAttackPathWhitelistAttackPathAssetListPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosAttackPathWhitelist_AttackPathAssetListPropertyValidator(properties).assertSuccess();
    return {
      'AssetType': ros.numberToRosTemplate(properties.assetType),
      'InstanceId': ros.stringToRosTemplate(properties.instanceId),
      'NodeType': ros.stringToRosTemplate(properties.nodeType),
      'RegionId': ros.stringToRosTemplate(properties.regionId),
      'Vendor': ros.numberToRosTemplate(properties.vendor),
      'AssetSubType': ros.numberToRosTemplate(properties.assetSubType),
    };
}

/**
 * Properties for defining a `RosBaselineStrategy`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-baselinestrategy
 */
export interface RosBaselineStrategyProps {

    /**
     * @Property baselineStrategyName: The new name of the baseline check policy.
     */
    readonly baselineStrategyName: string | ros.IResolvable;

    /**
     * @Property customType: The type of the baseline check policy. Valid values:
     * *   **custom**: a custom baseline check policy
     * *   **common**: a standard baseline check policy.
     */
    readonly customType: string | ros.IResolvable;

    /**
     * @Property cycleDays: The new interval of the baseline check. Valid values:
     * *   **1**: every 2 days
     * *   **3**: every 4 days
     * *   **7**: every 8 days
     * *   **30**: every 31 days.
     */
    readonly cycleDays: number | ros.IResolvable;

    /**
     * @Property endTime: The time when the baseline check based on the baseline check policy ends. Specify the time in the hh:mm:ss format.
     */
    readonly endTime: string | ros.IResolvable;

    /**
     * @Property riskSubTypeName: The subtype of the baselines.
     */
    readonly riskSubTypeName: string | ros.IResolvable;

    /**
     * @Property startTime: The time when the baseline check based on the baseline check policy starts. Specify the time in the hh:mm:ss format.
     */
    readonly startTime: string | ros.IResolvable;

    /**
     * @Property targetType: The method that is used to apply the baseline check policy. Valid values:
     * *   **groupId**: asset groups
     * *   **uuid**: assets.
     */
    readonly targetType: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosBaselineStrategyProps`
 *
 * @param properties - the TypeScript properties of a `RosBaselineStrategyProps`
 *
 * @returns the result of the validation.
 */
function RosBaselineStrategyPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('customType', ros.requiredValidator)(properties.customType));
    if(properties.customType && (typeof properties.customType) !== 'object') {
        errors.collect(ros.propertyValidator('customType', ros.validateAllowedValues)({
          data: properties.customType,
          allowedValues: ["custom","common"],
        }));
    }
    errors.collect(ros.propertyValidator('customType', ros.validateString)(properties.customType));
    errors.collect(ros.propertyValidator('endTime', ros.requiredValidator)(properties.endTime));
    errors.collect(ros.propertyValidator('endTime', ros.validateString)(properties.endTime));
    errors.collect(ros.propertyValidator('baselineStrategyName', ros.requiredValidator)(properties.baselineStrategyName));
    errors.collect(ros.propertyValidator('baselineStrategyName', ros.validateString)(properties.baselineStrategyName));
    errors.collect(ros.propertyValidator('cycleDays', ros.requiredValidator)(properties.cycleDays));
    errors.collect(ros.propertyValidator('cycleDays', ros.validateNumber)(properties.cycleDays));
    errors.collect(ros.propertyValidator('targetType', ros.requiredValidator)(properties.targetType));
    if(properties.targetType && (typeof properties.targetType) !== 'object') {
        errors.collect(ros.propertyValidator('targetType', ros.validateAllowedValues)({
          data: properties.targetType,
          allowedValues: ["groupId","uuid"],
        }));
    }
    errors.collect(ros.propertyValidator('targetType', ros.validateString)(properties.targetType));
    errors.collect(ros.propertyValidator('startTime', ros.requiredValidator)(properties.startTime));
    errors.collect(ros.propertyValidator('startTime', ros.validateString)(properties.startTime));
    errors.collect(ros.propertyValidator('riskSubTypeName', ros.requiredValidator)(properties.riskSubTypeName));
    errors.collect(ros.propertyValidator('riskSubTypeName', ros.validateString)(properties.riskSubTypeName));
    return errors.wrap('supplied properties not correct for "RosBaselineStrategyProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ThreatDetection::BaselineStrategy` resource
 *
 * @param properties - the TypeScript properties of a `RosBaselineStrategyProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ThreatDetection::BaselineStrategy` resource.
 */
// @ts-ignore TS6133
function rosBaselineStrategyPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosBaselineStrategyPropsValidator(properties).assertSuccess();
    }
    return {
      'BaselineStrategyName': ros.stringToRosTemplate(properties.baselineStrategyName),
      'CustomType': ros.stringToRosTemplate(properties.customType),
      'CycleDays': ros.numberToRosTemplate(properties.cycleDays),
      'EndTime': ros.stringToRosTemplate(properties.endTime),
      'RiskSubTypeName': ros.stringToRosTemplate(properties.riskSubTypeName),
      'StartTime': ros.stringToRosTemplate(properties.startTime),
      'TargetType': ros.stringToRosTemplate(properties.targetType),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ThreatDetection::BaselineStrategy`.
 * @Note This class does not contain additional functions, so it is recommended to use the `BaselineStrategy` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-baselinestrategy
 */
export class RosBaselineStrategy extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ThreatDetection::BaselineStrategy";

    /**
     * @Attribute BaselineStrategyId: The ID of the baseline check policy.
     */
    public readonly attrBaselineStrategyId: ros.IResolvable;

    /**
     * @Attribute BaselineStrategyName: The new name of the baseline check policy.
     */
    public readonly attrBaselineStrategyName: ros.IResolvable;

    /**
     * @Attribute CustomType: The type of the baseline check policy.
     */
    public readonly attrCustomType: ros.IResolvable;

    /**
     * @Attribute CycleDays: The new interval of the baseline check.
     */
    public readonly attrCycleDays: ros.IResolvable;

    /**
     * @Attribute EndTime: The time when the baseline check based on the baseline check policy ends. Specify the time in the hh:mm:ss format.
     */
    public readonly attrEndTime: ros.IResolvable;

    /**
     * @Attribute RiskSubTypeName: The subtype of the baselines.
     */
    public readonly attrRiskSubTypeName: ros.IResolvable;

    /**
     * @Attribute StartTime: The time when the baseline check based on the baseline check policy starts. Specify the time in the hh:mm:ss format.
     */
    public readonly attrStartTime: ros.IResolvable;

    /**
     * @Attribute TargetType: The method that is used to apply the baseline check policy.
     */
    public readonly attrTargetType: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property baselineStrategyName: The new name of the baseline check policy.
     */
    public baselineStrategyName: string | ros.IResolvable;

    /**
     * @Property customType: The type of the baseline check policy. Valid values:
     * *   **custom**: a custom baseline check policy
     * *   **common**: a standard baseline check policy.
     */
    public customType: string | ros.IResolvable;

    /**
     * @Property cycleDays: The new interval of the baseline check. Valid values:
     * *   **1**: every 2 days
     * *   **3**: every 4 days
     * *   **7**: every 8 days
     * *   **30**: every 31 days.
     */
    public cycleDays: number | ros.IResolvable;

    /**
     * @Property endTime: The time when the baseline check based on the baseline check policy ends. Specify the time in the hh:mm:ss format.
     */
    public endTime: string | ros.IResolvable;

    /**
     * @Property riskSubTypeName: The subtype of the baselines.
     */
    public riskSubTypeName: string | ros.IResolvable;

    /**
     * @Property startTime: The time when the baseline check based on the baseline check policy starts. Specify the time in the hh:mm:ss format.
     */
    public startTime: string | ros.IResolvable;

    /**
     * @Property targetType: The method that is used to apply the baseline check policy. Valid values:
     * *   **groupId**: asset groups
     * *   **uuid**: assets.
     */
    public targetType: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosBaselineStrategyProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosBaselineStrategy.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrBaselineStrategyId = this.getAtt('BaselineStrategyId');
        this.attrBaselineStrategyName = this.getAtt('BaselineStrategyName');
        this.attrCustomType = this.getAtt('CustomType');
        this.attrCycleDays = this.getAtt('CycleDays');
        this.attrEndTime = this.getAtt('EndTime');
        this.attrRiskSubTypeName = this.getAtt('RiskSubTypeName');
        this.attrStartTime = this.getAtt('StartTime');
        this.attrTargetType = this.getAtt('TargetType');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.baselineStrategyName = props.baselineStrategyName;
        this.customType = props.customType;
        this.cycleDays = props.cycleDays;
        this.endTime = props.endTime;
        this.riskSubTypeName = props.riskSubTypeName;
        this.startTime = props.startTime;
        this.targetType = props.targetType;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            baselineStrategyName: this.baselineStrategyName,
            customType: this.customType,
            cycleDays: this.cycleDays,
            endTime: this.endTime,
            riskSubTypeName: this.riskSubTypeName,
            startTime: this.startTime,
            targetType: this.targetType,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosBaselineStrategyPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosClientFileProtect`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-clientfileprotect
 */
export interface RosClientFileProtectProps {

    /**
     * @Property fileOps: The operations that you want to perform on the files.
     */
    readonly fileOps: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property filePaths: The paths to the monitored files. Wildcard characters are supported.
     */
    readonly filePaths: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property procPaths: The paths to the monitored processes.
     */
    readonly procPaths: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property ruleAction: The handling method of the rule. Valid values:
     * *   pass: allow
     * *   alert.
     */
    readonly ruleAction: string | ros.IResolvable;

    /**
     * @Property ruleName: The name of the rule.
     */
    readonly ruleName: string | ros.IResolvable;

    /**
     * @Property alertLevel: The severity of alerts. Valid values:
     * *   0: does not generate alerts
     * *   1: sends notifications
     * *   2: suspicious
     * *   3: high-risk.
     */
    readonly alertLevel?: number | ros.IResolvable;

    /**
     * @Property platform: The type of the operating system. Valid values:
     * *   **windows**: Windows
     * *   **linux**: Linux.
     */
    readonly platform?: string | ros.IResolvable;

    /**
     * @Property status: Rule status.
     * 1: Enabled
     * 0: Not enabled
     */
    readonly status?: number | ros.IResolvable;

    /**
     * @Property switchId: The switch ID of the rule.
     */
    readonly switchId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosClientFileProtectProps`
 *
 * @param properties - the TypeScript properties of a `RosClientFileProtectProps`
 *
 * @returns the result of the validation.
 */
function RosClientFileProtectPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.status && (typeof properties.status) !== 'object') {
        errors.collect(ros.propertyValidator('status', ros.validateAllowedValues)({
          data: properties.status,
          allowedValues: [0,1],
        }));
    }
    errors.collect(ros.propertyValidator('status', ros.validateNumber)(properties.status));
    errors.collect(ros.propertyValidator('filePaths', ros.requiredValidator)(properties.filePaths));
    errors.collect(ros.propertyValidator('filePaths', ros.listValidator(ros.validateString))(properties.filePaths));
    errors.collect(ros.propertyValidator('fileOps', ros.requiredValidator)(properties.fileOps));
    errors.collect(ros.propertyValidator('fileOps', ros.listValidator(ros.validateString))(properties.fileOps));
    if(properties.platform && (typeof properties.platform) !== 'object') {
        errors.collect(ros.propertyValidator('platform', ros.validateAllowedValues)({
          data: properties.platform,
          allowedValues: ["windows","linux"],
        }));
    }
    errors.collect(ros.propertyValidator('platform', ros.validateString)(properties.platform));
    errors.collect(ros.propertyValidator('ruleAction', ros.requiredValidator)(properties.ruleAction));
    if(properties.ruleAction && (typeof properties.ruleAction) !== 'object') {
        errors.collect(ros.propertyValidator('ruleAction', ros.validateAllowedValues)({
          data: properties.ruleAction,
          allowedValues: ["pass","alert"],
        }));
    }
    errors.collect(ros.propertyValidator('ruleAction', ros.validateString)(properties.ruleAction));
    errors.collect(ros.propertyValidator('procPaths', ros.requiredValidator)(properties.procPaths));
    errors.collect(ros.propertyValidator('procPaths', ros.listValidator(ros.validateString))(properties.procPaths));
    errors.collect(ros.propertyValidator('switchId', ros.validateString)(properties.switchId));
    if(properties.alertLevel && (typeof properties.alertLevel) !== 'object') {
        errors.collect(ros.propertyValidator('alertLevel', ros.validateAllowedValues)({
          data: properties.alertLevel,
          allowedValues: [0,1,2,3],
        }));
    }
    errors.collect(ros.propertyValidator('alertLevel', ros.validateNumber)(properties.alertLevel));
    errors.collect(ros.propertyValidator('ruleName', ros.requiredValidator)(properties.ruleName));
    errors.collect(ros.propertyValidator('ruleName', ros.validateString)(properties.ruleName));
    return errors.wrap('supplied properties not correct for "RosClientFileProtectProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ThreatDetection::ClientFileProtect` resource
 *
 * @param properties - the TypeScript properties of a `RosClientFileProtectProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ThreatDetection::ClientFileProtect` resource.
 */
// @ts-ignore TS6133
function rosClientFileProtectPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosClientFileProtectPropsValidator(properties).assertSuccess();
    }
    return {
      'FileOps': ros.listMapper(ros.stringToRosTemplate)(properties.fileOps),
      'FilePaths': ros.listMapper(ros.stringToRosTemplate)(properties.filePaths),
      'ProcPaths': ros.listMapper(ros.stringToRosTemplate)(properties.procPaths),
      'RuleAction': ros.stringToRosTemplate(properties.ruleAction),
      'RuleName': ros.stringToRosTemplate(properties.ruleName),
      'AlertLevel': ros.numberToRosTemplate(properties.alertLevel),
      'Platform': ros.stringToRosTemplate(properties.platform),
      'Status': ros.numberToRosTemplate(properties.status),
      'SwitchId': ros.stringToRosTemplate(properties.switchId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ThreatDetection::ClientFileProtect`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ClientFileProtect` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-clientfileprotect
 */
export class RosClientFileProtect extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ThreatDetection::ClientFileProtect";

    /**
     * @Attribute AlertLevel: The severity of alerts.
     */
    public readonly attrAlertLevel: ros.IResolvable;

    /**
     * @Attribute FileOps: The operations that you want to perform on the files.
     */
    public readonly attrFileOps: ros.IResolvable;

    /**
     * @Attribute FilePaths: The paths to the monitored files. Wildcard characters are supported.
     */
    public readonly attrFilePaths: ros.IResolvable;

    /**
     * @Attribute Platform: The type of the operating system.
     */
    public readonly attrPlatform: ros.IResolvable;

    /**
     * @Attribute ProcPaths: The paths to the monitored processes.
     */
    public readonly attrProcPaths: ros.IResolvable;

    /**
     * @Attribute RuleAction: The handling method of the rule.
     */
    public readonly attrRuleAction: ros.IResolvable;

    /**
     * @Attribute RuleId: The ID of the rule.
     */
    public readonly attrRuleId: ros.IResolvable;

    /**
     * @Attribute RuleName: The name of the rule.
     */
    public readonly attrRuleName: ros.IResolvable;

    /**
     * @Attribute SwitchId: The switch ID of the rule.
     */
    public readonly attrSwitchId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property fileOps: The operations that you want to perform on the files.
     */
    public fileOps: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property filePaths: The paths to the monitored files. Wildcard characters are supported.
     */
    public filePaths: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property procPaths: The paths to the monitored processes.
     */
    public procPaths: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property ruleAction: The handling method of the rule. Valid values:
     * *   pass: allow
     * *   alert.
     */
    public ruleAction: string | ros.IResolvable;

    /**
     * @Property ruleName: The name of the rule.
     */
    public ruleName: string | ros.IResolvable;

    /**
     * @Property alertLevel: The severity of alerts. Valid values:
     * *   0: does not generate alerts
     * *   1: sends notifications
     * *   2: suspicious
     * *   3: high-risk.
     */
    public alertLevel: number | ros.IResolvable | undefined;

    /**
     * @Property platform: The type of the operating system. Valid values:
     * *   **windows**: Windows
     * *   **linux**: Linux.
     */
    public platform: string | ros.IResolvable | undefined;

    /**
     * @Property status: Rule status.
     * 1: Enabled
     * 0: Not enabled
     */
    public status: number | ros.IResolvable | undefined;

    /**
     * @Property switchId: The switch ID of the rule.
     */
    public switchId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosClientFileProtectProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosClientFileProtect.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAlertLevel = this.getAtt('AlertLevel');
        this.attrFileOps = this.getAtt('FileOps');
        this.attrFilePaths = this.getAtt('FilePaths');
        this.attrPlatform = this.getAtt('Platform');
        this.attrProcPaths = this.getAtt('ProcPaths');
        this.attrRuleAction = this.getAtt('RuleAction');
        this.attrRuleId = this.getAtt('RuleId');
        this.attrRuleName = this.getAtt('RuleName');
        this.attrSwitchId = this.getAtt('SwitchId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.fileOps = props.fileOps;
        this.filePaths = props.filePaths;
        this.procPaths = props.procPaths;
        this.ruleAction = props.ruleAction;
        this.ruleName = props.ruleName;
        this.alertLevel = props.alertLevel;
        this.platform = props.platform;
        this.status = props.status;
        this.switchId = props.switchId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            fileOps: this.fileOps,
            filePaths: this.filePaths,
            procPaths: this.procPaths,
            ruleAction: this.ruleAction,
            ruleName: this.ruleName,
            alertLevel: this.alertLevel,
            platform: this.platform,
            status: this.status,
            switchId: this.switchId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosClientFileProtectPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosContainerDefenseRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-containerdefenserule
 */
export interface RosContainerDefenseRuleProps {

    /**
     * @Property description: Rule description.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property ruleAction: The action that is performed when the rule is hit. Valid values:
     * - **1**: alert
     * - **2**: block.
     */
    readonly ruleAction?: number | ros.IResolvable;

    /**
     * @Property ruleId: Rule Id.
     */
    readonly ruleId?: number | ros.IResolvable;

    /**
     * @Property ruleName: The name of the rule.
     */
    readonly ruleName?: string | ros.IResolvable;

    /**
     * @Property ruleSwitch: The switch of the rule. Valid values:
     * * 0: off.
     * * 1: on.
     */
    readonly ruleSwitch?: number | ros.IResolvable;

    /**
     * @Property ruleType: The rule type. Value:
     * * 2: User Rules
     */
    readonly ruleType?: number | ros.IResolvable;

    /**
     * @Property scope: Rule scope.
     */
    readonly scope?: Array<RosContainerDefenseRule.ScopeProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property whitelist: The whitelist of rule.
     */
    readonly whitelist?: RosContainerDefenseRule.WhitelistProperty | ros.IResolvable;

    /**
     * @Property whitelistHash: The whitelist Hash.
     */
    readonly whitelistHash?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosContainerDefenseRuleProps`
 *
 * @param properties - the TypeScript properties of a `RosContainerDefenseRuleProps`
 *
 * @returns the result of the validation.
 */
function RosContainerDefenseRulePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.ruleSwitch && (typeof properties.ruleSwitch) !== 'object') {
        errors.collect(ros.propertyValidator('ruleSwitch', ros.validateAllowedValues)({
          data: properties.ruleSwitch,
          allowedValues: [0,1],
        }));
    }
    errors.collect(ros.propertyValidator('ruleSwitch', ros.validateNumber)(properties.ruleSwitch));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('whitelistHash', ros.validateString)(properties.whitelistHash));
    if(properties.scope && (Array.isArray(properties.scope) || (typeof properties.scope) === 'string')) {
        errors.collect(ros.propertyValidator('scope', ros.validateLength)({
            data: properties.scope.length,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('scope', ros.listValidator(RosContainerDefenseRule_ScopePropertyValidator))(properties.scope));
    errors.collect(ros.propertyValidator('ruleId', ros.validateNumber)(properties.ruleId));
    if(properties.ruleAction && (typeof properties.ruleAction) !== 'object') {
        errors.collect(ros.propertyValidator('ruleAction', ros.validateAllowedValues)({
          data: properties.ruleAction,
          allowedValues: [1,2],
        }));
    }
    errors.collect(ros.propertyValidator('ruleAction', ros.validateNumber)(properties.ruleAction));
    errors.collect(ros.propertyValidator('whitelist', RosContainerDefenseRule_WhitelistPropertyValidator)(properties.whitelist));
    if(properties.ruleType && (typeof properties.ruleType) !== 'object') {
        errors.collect(ros.propertyValidator('ruleType', ros.validateAllowedValues)({
          data: properties.ruleType,
          allowedValues: [2],
        }));
    }
    errors.collect(ros.propertyValidator('ruleType', ros.validateNumber)(properties.ruleType));
    errors.collect(ros.propertyValidator('ruleName', ros.validateString)(properties.ruleName));
    return errors.wrap('supplied properties not correct for "RosContainerDefenseRuleProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ThreatDetection::ContainerDefenseRule` resource
 *
 * @param properties - the TypeScript properties of a `RosContainerDefenseRuleProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ThreatDetection::ContainerDefenseRule` resource.
 */
// @ts-ignore TS6133
function rosContainerDefenseRulePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosContainerDefenseRulePropsValidator(properties).assertSuccess();
    }
    return {
      'Description': ros.stringToRosTemplate(properties.description),
      'RuleAction': ros.numberToRosTemplate(properties.ruleAction),
      'RuleId': ros.numberToRosTemplate(properties.ruleId),
      'RuleName': ros.stringToRosTemplate(properties.ruleName),
      'RuleSwitch': ros.numberToRosTemplate(properties.ruleSwitch),
      'RuleType': ros.numberToRosTemplate(properties.ruleType),
      'Scope': ros.listMapper(rosContainerDefenseRuleScopePropertyToRosTemplate)(properties.scope),
      'Whitelist': rosContainerDefenseRuleWhitelistPropertyToRosTemplate(properties.whitelist),
      'WhitelistHash': ros.stringToRosTemplate(properties.whitelistHash),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ThreatDetection::ContainerDefenseRule`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ContainerDefenseRule` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-containerdefenserule
 */
export class RosContainerDefenseRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ThreatDetection::ContainerDefenseRule";

    /**
     * @Attribute Description: Rule description.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute RuleAction: The action that is performed when the rule is hit.
     */
    public readonly attrRuleAction: ros.IResolvable;

    /**
     * @Attribute RuleId: Rule Id.
     */
    public readonly attrRuleId: ros.IResolvable;

    /**
     * @Attribute RuleName: The name of the rule.
     */
    public readonly attrRuleName: ros.IResolvable;

    /**
     * @Attribute RuleSwitch: The switch of the rule.
     */
    public readonly attrRuleSwitch: ros.IResolvable;

    /**
     * @Attribute RuleType: The rule type.
     */
    public readonly attrRuleType: ros.IResolvable;

    /**
     * @Attribute Scope: Rule scope.
     */
    public readonly attrScope: ros.IResolvable;

    /**
     * @Attribute Whitelist: The whitelist of rule.
     */
    public readonly attrWhitelist: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property description: Rule description.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property ruleAction: The action that is performed when the rule is hit. Valid values:
     * - **1**: alert
     * - **2**: block.
     */
    public ruleAction: number | ros.IResolvable | undefined;

    /**
     * @Property ruleId: Rule Id.
     */
    public ruleId: number | ros.IResolvable | undefined;

    /**
     * @Property ruleName: The name of the rule.
     */
    public ruleName: string | ros.IResolvable | undefined;

    /**
     * @Property ruleSwitch: The switch of the rule. Valid values:
     * * 0: off.
     * * 1: on.
     */
    public ruleSwitch: number | ros.IResolvable | undefined;

    /**
     * @Property ruleType: The rule type. Value:
     * * 2: User Rules
     */
    public ruleType: number | ros.IResolvable | undefined;

    /**
     * @Property scope: Rule scope.
     */
    public scope: Array<RosContainerDefenseRule.ScopeProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property whitelist: The whitelist of rule.
     */
    public whitelist: RosContainerDefenseRule.WhitelistProperty | ros.IResolvable | undefined;

    /**
     * @Property whitelistHash: The whitelist Hash.
     */
    public whitelistHash: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosContainerDefenseRuleProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosContainerDefenseRule.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDescription = this.getAtt('Description');
        this.attrRuleAction = this.getAtt('RuleAction');
        this.attrRuleId = this.getAtt('RuleId');
        this.attrRuleName = this.getAtt('RuleName');
        this.attrRuleSwitch = this.getAtt('RuleSwitch');
        this.attrRuleType = this.getAtt('RuleType');
        this.attrScope = this.getAtt('Scope');
        this.attrWhitelist = this.getAtt('Whitelist');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.description = props.description;
        this.ruleAction = props.ruleAction;
        this.ruleId = props.ruleId;
        this.ruleName = props.ruleName;
        this.ruleSwitch = props.ruleSwitch;
        this.ruleType = props.ruleType;
        this.scope = props.scope;
        this.whitelist = props.whitelist;
        this.whitelistHash = props.whitelistHash;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            description: this.description,
            ruleAction: this.ruleAction,
            ruleId: this.ruleId,
            ruleName: this.ruleName,
            ruleSwitch: this.ruleSwitch,
            ruleType: this.ruleType,
            scope: this.scope,
            whitelist: this.whitelist,
            whitelistHash: this.whitelistHash,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosContainerDefenseRulePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosContainerDefenseRule {
    /**
     * @stability external
     */
    export interface ScopeProperty {
        /**
         * @Property namespaces: The namespaces to include.
         */
        readonly namespaces?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property clusterId: The ID of the cluster.
         */
        readonly clusterId?: string | ros.IResolvable;
        /**
         * @Property allNamespace: Specifies whether to include all namespaces. Valid values:
     * * 0: You can use the Namespaces parameter to specify the namespaces to include.
     * * 1: All namespaces are included.
         */
        readonly allNamespace?: number | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ScopeProperty`
 *
 * @param properties - the TypeScript properties of a `ScopeProperty`
 *
 * @returns the result of the validation.
 */
function RosContainerDefenseRule_ScopePropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.namespaces && (Array.isArray(properties.namespaces) || (typeof properties.namespaces) === 'string')) {
        errors.collect(ros.propertyValidator('namespaces', ros.validateLength)({
            data: properties.namespaces.length,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('namespaces', ros.listValidator(ros.validateString))(properties.namespaces));
    errors.collect(ros.propertyValidator('clusterId', ros.validateString)(properties.clusterId));
    if(properties.allNamespace && (typeof properties.allNamespace) !== 'object') {
        errors.collect(ros.propertyValidator('allNamespace', ros.validateAllowedValues)({
          data: properties.allNamespace,
          allowedValues: [0,1],
        }));
    }
    errors.collect(ros.propertyValidator('allNamespace', ros.validateNumber)(properties.allNamespace));
    return errors.wrap('supplied properties not correct for "ScopeProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ThreatDetection::ContainerDefenseRule.Scope` resource
 *
 * @param properties - the TypeScript properties of a `ScopeProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ThreatDetection::ContainerDefenseRule.Scope` resource.
 */
// @ts-ignore TS6133
function rosContainerDefenseRuleScopePropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosContainerDefenseRule_ScopePropertyValidator(properties).assertSuccess();
    return {
      'Namespaces': ros.listMapper(ros.stringToRosTemplate)(properties.namespaces),
      'ClusterId': ros.stringToRosTemplate(properties.clusterId),
      'AllNamespace': ros.numberToRosTemplate(properties.allNamespace),
    };
}

export namespace RosContainerDefenseRule {
    /**
     * @stability external
     */
    export interface WhitelistProperty {
        /**
         * @Property path: The paths to the files that need to be added to the whitelist.
         */
        readonly path?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property image: The images that need to be added to the whitelist.
         */
        readonly image?: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `WhitelistProperty`
 *
 * @param properties - the TypeScript properties of a `WhitelistProperty`
 *
 * @returns the result of the validation.
 */
function RosContainerDefenseRule_WhitelistPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('path', ros.listValidator(ros.validateString))(properties.path));
    errors.collect(ros.propertyValidator('image', ros.listValidator(ros.validateString))(properties.image));
    return errors.wrap('supplied properties not correct for "WhitelistProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ThreatDetection::ContainerDefenseRule.Whitelist` resource
 *
 * @param properties - the TypeScript properties of a `WhitelistProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ThreatDetection::ContainerDefenseRule.Whitelist` resource.
 */
// @ts-ignore TS6133
function rosContainerDefenseRuleWhitelistPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosContainerDefenseRule_WhitelistPropertyValidator(properties).assertSuccess();
    return {
      'Path': ros.listMapper(ros.stringToRosTemplate)(properties.path),
      'Image': ros.listMapper(ros.stringToRosTemplate)(properties.image),
    };
}

/**
 * Properties for defining a `RosCustomCheckItem`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-customcheckitem
 */
export interface RosCustomCheckItemProps {

    /**
     * @Property checkRule: Check Item Check Rules.
     */
    readonly checkRule: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property checkShowName: Check item display name.
     */
    readonly checkShowName: string | ros.IResolvable;

    /**
     * @Property instanceSubType: Asset subtype to which the check item belongs.
     */
    readonly instanceSubType: string | ros.IResolvable;

    /**
     * @Property instanceType: Asset type to which the check item belongs.
     */
    readonly instanceType: string | ros.IResolvable;

    /**
     * @Property riskLevel: Risk level of inspection items.
     */
    readonly riskLevel: string | ros.IResolvable;

    /**
     * @Property sectionIds: CHECK SECTION OF INSPECTIONS.
     */
    readonly sectionIds: Array<number | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property status: Check item status. Values:
     * EDIT: Editing in progress
     * RELEASE: Published
     */
    readonly status: string | ros.IResolvable;

    /**
     * @Property vendor: Vendor to which the item belongs.
     */
    readonly vendor: string | ros.IResolvable;

    /**
     * @Property assistInfo: Check Item Description Help Information.
     */
    readonly assistInfo?: RosCustomCheckItem.AssistInfoProperty | ros.IResolvable;

    /**
     * @Property description: Check item description information.
     */
    readonly description?: RosCustomCheckItem.DescriptionProperty | ros.IResolvable;

    /**
     * @Property remark: Remarks.
     */
    readonly remark?: string | ros.IResolvable;

    /**
     * @Property solution: Check Item Solution.
     */
    readonly solution?: RosCustomCheckItem.SolutionProperty | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosCustomCheckItemProps`
 *
 * @param properties - the TypeScript properties of a `RosCustomCheckItemProps`
 *
 * @returns the result of the validation.
 */
function RosCustomCheckItemPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('instanceSubType', ros.requiredValidator)(properties.instanceSubType));
    errors.collect(ros.propertyValidator('instanceSubType', ros.validateString)(properties.instanceSubType));
    errors.collect(ros.propertyValidator('status', ros.requiredValidator)(properties.status));
    if(properties.status && (typeof properties.status) !== 'object') {
        errors.collect(ros.propertyValidator('status', ros.validateAllowedValues)({
          data: properties.status,
          allowedValues: ["EDIT","RELEASE"],
        }));
    }
    errors.collect(ros.propertyValidator('status', ros.validateString)(properties.status));
    errors.collect(ros.propertyValidator('sectionIds', ros.requiredValidator)(properties.sectionIds));
    if(properties.sectionIds && (Array.isArray(properties.sectionIds) || (typeof properties.sectionIds) === 'string')) {
        errors.collect(ros.propertyValidator('sectionIds', ros.validateLength)({
            data: properties.sectionIds.length,
            min: 0,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('sectionIds', ros.listValidator(ros.validateNumber))(properties.sectionIds));
    errors.collect(ros.propertyValidator('description', RosCustomCheckItem_DescriptionPropertyValidator)(properties.description));
    errors.collect(ros.propertyValidator('checkShowName', ros.requiredValidator)(properties.checkShowName));
    errors.collect(ros.propertyValidator('checkShowName', ros.validateString)(properties.checkShowName));
    errors.collect(ros.propertyValidator('checkRule', ros.requiredValidator)(properties.checkRule));
    errors.collect(ros.propertyValidator('checkRule', ros.hashValidator(ros.validateAny))(properties.checkRule));
    errors.collect(ros.propertyValidator('vendor', ros.requiredValidator)(properties.vendor));
    errors.collect(ros.propertyValidator('vendor', ros.validateString)(properties.vendor));
    errors.collect(ros.propertyValidator('assistInfo', RosCustomCheckItem_AssistInfoPropertyValidator)(properties.assistInfo));
    errors.collect(ros.propertyValidator('instanceType', ros.requiredValidator)(properties.instanceType));
    errors.collect(ros.propertyValidator('instanceType', ros.validateString)(properties.instanceType));
    errors.collect(ros.propertyValidator('riskLevel', ros.requiredValidator)(properties.riskLevel));
    if(properties.riskLevel && (typeof properties.riskLevel) !== 'object') {
        errors.collect(ros.propertyValidator('riskLevel', ros.validateAllowedValues)({
          data: properties.riskLevel,
          allowedValues: ["HIGH","MEDIUM","LOW"],
        }));
    }
    errors.collect(ros.propertyValidator('riskLevel', ros.validateString)(properties.riskLevel));
    errors.collect(ros.propertyValidator('solution', RosCustomCheckItem_SolutionPropertyValidator)(properties.solution));
    errors.collect(ros.propertyValidator('remark', ros.validateString)(properties.remark));
    return errors.wrap('supplied properties not correct for "RosCustomCheckItemProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ThreatDetection::CustomCheckItem` resource
 *
 * @param properties - the TypeScript properties of a `RosCustomCheckItemProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ThreatDetection::CustomCheckItem` resource.
 */
// @ts-ignore TS6133
function rosCustomCheckItemPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosCustomCheckItemPropsValidator(properties).assertSuccess();
    }
    return {
      'CheckRule': ros.hashMapper(ros.objectToRosTemplate)(properties.checkRule),
      'CheckShowName': ros.stringToRosTemplate(properties.checkShowName),
      'InstanceSubType': ros.stringToRosTemplate(properties.instanceSubType),
      'InstanceType': ros.stringToRosTemplate(properties.instanceType),
      'RiskLevel': ros.stringToRosTemplate(properties.riskLevel),
      'SectionIds': ros.listMapper(ros.numberToRosTemplate)(properties.sectionIds),
      'Status': ros.stringToRosTemplate(properties.status),
      'Vendor': ros.stringToRosTemplate(properties.vendor),
      'AssistInfo': rosCustomCheckItemAssistInfoPropertyToRosTemplate(properties.assistInfo),
      'Description': rosCustomCheckItemDescriptionPropertyToRosTemplate(properties.description),
      'Remark': ros.stringToRosTemplate(properties.remark),
      'Solution': rosCustomCheckItemSolutionPropertyToRosTemplate(properties.solution),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ThreatDetection::CustomCheckItem`.
 * @Note This class does not contain additional functions, so it is recommended to use the `CustomCheckItem` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-customcheckitem
 */
export class RosCustomCheckItem extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ThreatDetection::CustomCheckItem";

    /**
     * @Attribute AssistInfo: Check Item Description Help Information.
     */
    public readonly attrAssistInfo: ros.IResolvable;

    /**
     * @Attribute CheckId: The first ID of the resource.
     */
    public readonly attrCheckId: ros.IResolvable;

    /**
     * @Attribute CheckRule: Check Item Check Rules.
     */
    public readonly attrCheckRule: ros.IResolvable;

    /**
     * @Attribute CheckShowName: Check item display name.
     */
    public readonly attrCheckShowName: ros.IResolvable;

    /**
     * @Attribute Description: Check item description information.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute InstanceSubType: Asset subtype to which the check item belongs.
     */
    public readonly attrInstanceSubType: ros.IResolvable;

    /**
     * @Attribute InstanceType: Asset type to which the check item belongs.
     */
    public readonly attrInstanceType: ros.IResolvable;

    /**
     * @Attribute Remark: Remarks.
     */
    public readonly attrRemark: ros.IResolvable;

    /**
     * @Attribute RiskLevel: Risk level of inspection items.
     */
    public readonly attrRiskLevel: ros.IResolvable;

    /**
     * @Attribute SectionIds: CHECK SECTION OF INSPECTIONS.
     */
    public readonly attrSectionIds: ros.IResolvable;

    /**
     * @Attribute Solution: Check Item Solution.
     */
    public readonly attrSolution: ros.IResolvable;

    /**
     * @Attribute Vendor: Vendor to which the item belongs.
     */
    public readonly attrVendor: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property checkRule: Check Item Check Rules.
     */
    public checkRule: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property checkShowName: Check item display name.
     */
    public checkShowName: string | ros.IResolvable;

    /**
     * @Property instanceSubType: Asset subtype to which the check item belongs.
     */
    public instanceSubType: string | ros.IResolvable;

    /**
     * @Property instanceType: Asset type to which the check item belongs.
     */
    public instanceType: string | ros.IResolvable;

    /**
     * @Property riskLevel: Risk level of inspection items.
     */
    public riskLevel: string | ros.IResolvable;

    /**
     * @Property sectionIds: CHECK SECTION OF INSPECTIONS.
     */
    public sectionIds: Array<number | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property status: Check item status. Values:
     * EDIT: Editing in progress
     * RELEASE: Published
     */
    public status: string | ros.IResolvable;

    /**
     * @Property vendor: Vendor to which the item belongs.
     */
    public vendor: string | ros.IResolvable;

    /**
     * @Property assistInfo: Check Item Description Help Information.
     */
    public assistInfo: RosCustomCheckItem.AssistInfoProperty | ros.IResolvable | undefined;

    /**
     * @Property description: Check item description information.
     */
    public description: RosCustomCheckItem.DescriptionProperty | ros.IResolvable | undefined;

    /**
     * @Property remark: Remarks.
     */
    public remark: string | ros.IResolvable | undefined;

    /**
     * @Property solution: Check Item Solution.
     */
    public solution: RosCustomCheckItem.SolutionProperty | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCustomCheckItemProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosCustomCheckItem.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAssistInfo = this.getAtt('AssistInfo');
        this.attrCheckId = this.getAtt('CheckId');
        this.attrCheckRule = this.getAtt('CheckRule');
        this.attrCheckShowName = this.getAtt('CheckShowName');
        this.attrDescription = this.getAtt('Description');
        this.attrInstanceSubType = this.getAtt('InstanceSubType');
        this.attrInstanceType = this.getAtt('InstanceType');
        this.attrRemark = this.getAtt('Remark');
        this.attrRiskLevel = this.getAtt('RiskLevel');
        this.attrSectionIds = this.getAtt('SectionIds');
        this.attrSolution = this.getAtt('Solution');
        this.attrVendor = this.getAtt('Vendor');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.checkRule = props.checkRule;
        this.checkShowName = props.checkShowName;
        this.instanceSubType = props.instanceSubType;
        this.instanceType = props.instanceType;
        this.riskLevel = props.riskLevel;
        this.sectionIds = props.sectionIds;
        this.status = props.status;
        this.vendor = props.vendor;
        this.assistInfo = props.assistInfo;
        this.description = props.description;
        this.remark = props.remark;
        this.solution = props.solution;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            checkRule: this.checkRule,
            checkShowName: this.checkShowName,
            instanceSubType: this.instanceSubType,
            instanceType: this.instanceType,
            riskLevel: this.riskLevel,
            sectionIds: this.sectionIds,
            status: this.status,
            vendor: this.vendor,
            assistInfo: this.assistInfo,
            description: this.description,
            remark: this.remark,
            solution: this.solution,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosCustomCheckItemPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosCustomCheckItem {
    /**
     * @stability external
     */
    export interface AssistInfoProperty {
        /**
         * @Property type: Check Item Description Help Information Type.
         */
        readonly type?: string | ros.IResolvable;
        /**
         * @Property value: Check Item Description Help Information Value.
         */
        readonly value?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `AssistInfoProperty`
 *
 * @param properties - the TypeScript properties of a `AssistInfoProperty`
 *
 * @returns the result of the validation.
 */
function RosCustomCheckItem_AssistInfoPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.type && (typeof properties.type) !== 'object') {
        errors.collect(ros.propertyValidator('type', ros.validateAllowedValues)({
          data: properties.type,
          allowedValues: ["text"],
        }));
    }
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    return errors.wrap('supplied properties not correct for "AssistInfoProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ThreatDetection::CustomCheckItem.AssistInfo` resource
 *
 * @param properties - the TypeScript properties of a `AssistInfoProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ThreatDetection::CustomCheckItem.AssistInfo` resource.
 */
// @ts-ignore TS6133
function rosCustomCheckItemAssistInfoPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosCustomCheckItem_AssistInfoPropertyValidator(properties).assertSuccess();
    return {
      'Type': ros.stringToRosTemplate(properties.type),
      'Value': ros.stringToRosTemplate(properties.value),
    };
}

export namespace RosCustomCheckItem {
    /**
     * @stability external
     */
    export interface DescriptionProperty {
        /**
         * @Property type: Check Item Description Information Type.
         */
        readonly type?: string | ros.IResolvable;
        /**
         * @Property value: Check item description information value.
         */
        readonly value?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `DescriptionProperty`
 *
 * @param properties - the TypeScript properties of a `DescriptionProperty`
 *
 * @returns the result of the validation.
 */
function RosCustomCheckItem_DescriptionPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.type && (typeof properties.type) !== 'object') {
        errors.collect(ros.propertyValidator('type', ros.validateAllowedValues)({
          data: properties.type,
          allowedValues: ["text"],
        }));
    }
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    return errors.wrap('supplied properties not correct for "DescriptionProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ThreatDetection::CustomCheckItem.Description` resource
 *
 * @param properties - the TypeScript properties of a `DescriptionProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ThreatDetection::CustomCheckItem.Description` resource.
 */
// @ts-ignore TS6133
function rosCustomCheckItemDescriptionPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosCustomCheckItem_DescriptionPropertyValidator(properties).assertSuccess();
    return {
      'Type': ros.stringToRosTemplate(properties.type),
      'Value': ros.stringToRosTemplate(properties.value),
    };
}

export namespace RosCustomCheckItem {
    /**
     * @stability external
     */
    export interface SolutionProperty {
        /**
         * @Property type: Check Item Solution Type.
         */
        readonly type?: string | ros.IResolvable;
        /**
         * @Property value: Check Item Solution Value.
         */
        readonly value?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `SolutionProperty`
 *
 * @param properties - the TypeScript properties of a `SolutionProperty`
 *
 * @returns the result of the validation.
 */
function RosCustomCheckItem_SolutionPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.type && (typeof properties.type) !== 'object') {
        errors.collect(ros.propertyValidator('type', ros.validateAllowedValues)({
          data: properties.type,
          allowedValues: ["text"],
        }));
    }
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    return errors.wrap('supplied properties not correct for "SolutionProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ThreatDetection::CustomCheckItem.Solution` resource
 *
 * @param properties - the TypeScript properties of a `SolutionProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ThreatDetection::CustomCheckItem.Solution` resource.
 */
// @ts-ignore TS6133
function rosCustomCheckItemSolutionPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosCustomCheckItem_SolutionPropertyValidator(properties).assertSuccess();
    return {
      'Type': ros.stringToRosTemplate(properties.type),
      'Value': ros.stringToRosTemplate(properties.value),
    };
}

/**
 * Properties for defining a `RosCustomCheckStandardPolicy`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-customcheckstandardpolicy
 */
export interface RosCustomCheckStandardPolicyProps {

    /**
     * @Property policyShowName: The name of the custom policy.
     */
    readonly policyShowName: string | ros.IResolvable;

    /**
     * @Property policyType: The category type of the custom check policy:
     * - STANDARD: standard.
     * - REQUIREMENT: requirement.
     * - SECTION: section.
     */
    readonly policyType: string | ros.IResolvable;

    /**
     * @Property dependentPolicyId: The ID of the parent policy.
     * (Dependency order from low to high: Section -> Requirement -> Standard)
     */
    readonly dependentPolicyId?: number | ros.IResolvable;

    /**
     * @Property type: The category name of the associated policy (required when PolicyType is STANDARD):
     * - AISPM: AI Security Posture Management (AISPM).
     * - IDENTITY_PERMISSION: Identity and Entitlement Management (CIEM).
     * - RISK: Security Risk.
     * - COMPLIANCE: Compliance Risk.
     */
    readonly type?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosCustomCheckStandardPolicyProps`
 *
 * @param properties - the TypeScript properties of a `RosCustomCheckStandardPolicyProps`
 *
 * @returns the result of the validation.
 */
function RosCustomCheckStandardPolicyPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('policyType', ros.requiredValidator)(properties.policyType));
    if(properties.policyType && (typeof properties.policyType) !== 'object') {
        errors.collect(ros.propertyValidator('policyType', ros.validateAllowedValues)({
          data: properties.policyType,
          allowedValues: ["STANDARD","REQUIREMENT","SECTION"],
        }));
    }
    errors.collect(ros.propertyValidator('policyType', ros.validateString)(properties.policyType));
    if(properties.type && (typeof properties.type) !== 'object') {
        errors.collect(ros.propertyValidator('type', ros.validateAllowedValues)({
          data: properties.type,
          allowedValues: ["AISPM","IDENTITY_PERMISSION","RISK","COMPLIANCE"],
        }));
    }
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('dependentPolicyId', ros.validateNumber)(properties.dependentPolicyId));
    errors.collect(ros.propertyValidator('policyShowName', ros.requiredValidator)(properties.policyShowName));
    if(properties.policyShowName && (Array.isArray(properties.policyShowName) || (typeof properties.policyShowName) === 'string')) {
        errors.collect(ros.propertyValidator('policyShowName', ros.validateLength)({
            data: properties.policyShowName.length,
            min: 1,
            max: 64,
          }));
    }
    errors.collect(ros.propertyValidator('policyShowName', ros.validateString)(properties.policyShowName));
    return errors.wrap('supplied properties not correct for "RosCustomCheckStandardPolicyProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ThreatDetection::CustomCheckStandardPolicy` resource
 *
 * @param properties - the TypeScript properties of a `RosCustomCheckStandardPolicyProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ThreatDetection::CustomCheckStandardPolicy` resource.
 */
// @ts-ignore TS6133
function rosCustomCheckStandardPolicyPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosCustomCheckStandardPolicyPropsValidator(properties).assertSuccess();
    }
    return {
      'PolicyShowName': ros.stringToRosTemplate(properties.policyShowName),
      'PolicyType': ros.stringToRosTemplate(properties.policyType),
      'DependentPolicyId': ros.numberToRosTemplate(properties.dependentPolicyId),
      'Type': ros.stringToRosTemplate(properties.type),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ThreatDetection::CustomCheckStandardPolicy`.
 * @Note This class does not contain additional functions, so it is recommended to use the `CustomCheckStandardPolicy` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-customcheckstandardpolicy
 */
export class RosCustomCheckStandardPolicy extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ThreatDetection::CustomCheckStandardPolicy";

    /**
     * @Attribute PolicyId: The ID of the custom check policy.
     */
    public readonly attrPolicyId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property policyShowName: The name of the custom policy.
     */
    public policyShowName: string | ros.IResolvable;

    /**
     * @Property policyType: The category type of the custom check policy:
     * - STANDARD: standard.
     * - REQUIREMENT: requirement.
     * - SECTION: section.
     */
    public policyType: string | ros.IResolvable;

    /**
     * @Property dependentPolicyId: The ID of the parent policy.
     * (Dependency order from low to high: Section -> Requirement -> Standard)
     */
    public dependentPolicyId: number | ros.IResolvable | undefined;

    /**
     * @Property type: The category name of the associated policy (required when PolicyType is STANDARD):
     * - AISPM: AI Security Posture Management (AISPM).
     * - IDENTITY_PERMISSION: Identity and Entitlement Management (CIEM).
     * - RISK: Security Risk.
     * - COMPLIANCE: Compliance Risk.
     */
    public type: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCustomCheckStandardPolicyProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosCustomCheckStandardPolicy.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrPolicyId = this.getAtt('PolicyId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.policyShowName = props.policyShowName;
        this.policyType = props.policyType;
        this.dependentPolicyId = props.dependentPolicyId;
        this.type = props.type;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            policyShowName: this.policyShowName,
            policyType: this.policyType,
            dependentPolicyId: this.dependentPolicyId,
            type: this.type,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosCustomCheckStandardPolicyPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosCycleTask`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-cycletask
 */
export interface RosCycleTaskProps {

    /**
     * @Property enable: Specifies whether to enable the task. Valid values:
     * *   **1**: yes
     * *   **0**: no.
     */
    readonly enable: number | ros.IResolvable;

    /**
     * @Property firstDateStr: The first time when the task is performed.
     */
    readonly firstDateStr: number | ros.IResolvable;

    /**
     * @Property intervalPeriod: The interval at which the task is run.
     */
    readonly intervalPeriod: number | ros.IResolvable;

    /**
     * @Property periodUnit: The unit of the scan interval. Valid values:
     * *   **day**
     * *   **hour**.
     */
    readonly periodUnit: string | ros.IResolvable;

    /**
     * @Property targetEndTime: The time when the task ends. Unit: hours.
     */
    readonly targetEndTime: number | ros.IResolvable;

    /**
     * @Property targetStartTime: The time when the task is started. Unit: hours.
     */
    readonly targetStartTime: number | ros.IResolvable;

    /**
     * @Property taskName: The task name.
     */
    readonly taskName: string | ros.IResolvable;

    /**
     * @Property taskType: The type of the task. Valid values:
     * *   **VIRUS_VUL_SCHEDULE_SCAN**: virus scan task
     * *   **IMAGE_SCAN**: image scan task
     * *   **EMG_VUL_SCHEDULE_SCAN**: urgent vulnerability scan task.
     */
    readonly taskType: string | ros.IResolvable;

    /**
     * @Property param: The additional information.
     */
    readonly param?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property source: The additional source for the task.
     */
    readonly source?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosCycleTaskProps`
 *
 * @param properties - the TypeScript properties of a `RosCycleTaskProps`
 *
 * @returns the result of the validation.
 */
function RosCycleTaskPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('targetEndTime', ros.requiredValidator)(properties.targetEndTime));
    errors.collect(ros.propertyValidator('targetEndTime', ros.validateNumber)(properties.targetEndTime));
    errors.collect(ros.propertyValidator('taskName', ros.requiredValidator)(properties.taskName));
    errors.collect(ros.propertyValidator('taskName', ros.validateString)(properties.taskName));
    errors.collect(ros.propertyValidator('taskType', ros.requiredValidator)(properties.taskType));
    if(properties.taskType && (typeof properties.taskType) !== 'object') {
        errors.collect(ros.propertyValidator('taskType', ros.validateAllowedValues)({
          data: properties.taskType,
          allowedValues: ["VIRUS_VUL_SCHEDULE_SCAN","IMAGE_SCAN","EMG_VUL_SCHEDULE_SCAN"],
        }));
    }
    errors.collect(ros.propertyValidator('taskType', ros.validateString)(properties.taskType));
    errors.collect(ros.propertyValidator('param', ros.hashValidator(ros.validateAny))(properties.param));
    errors.collect(ros.propertyValidator('enable', ros.requiredValidator)(properties.enable));
    if(properties.enable && (typeof properties.enable) !== 'object') {
        errors.collect(ros.propertyValidator('enable', ros.validateAllowedValues)({
          data: properties.enable,
          allowedValues: [0,1],
        }));
    }
    errors.collect(ros.propertyValidator('enable', ros.validateNumber)(properties.enable));
    errors.collect(ros.propertyValidator('firstDateStr', ros.requiredValidator)(properties.firstDateStr));
    errors.collect(ros.propertyValidator('firstDateStr', ros.validateNumber)(properties.firstDateStr));
    errors.collect(ros.propertyValidator('intervalPeriod', ros.requiredValidator)(properties.intervalPeriod));
    errors.collect(ros.propertyValidator('intervalPeriod', ros.validateNumber)(properties.intervalPeriod));
    errors.collect(ros.propertyValidator('targetStartTime', ros.requiredValidator)(properties.targetStartTime));
    errors.collect(ros.propertyValidator('targetStartTime', ros.validateNumber)(properties.targetStartTime));
    errors.collect(ros.propertyValidator('source', ros.validateString)(properties.source));
    errors.collect(ros.propertyValidator('periodUnit', ros.requiredValidator)(properties.periodUnit));
    if(properties.periodUnit && (typeof properties.periodUnit) !== 'object') {
        errors.collect(ros.propertyValidator('periodUnit', ros.validateAllowedValues)({
          data: properties.periodUnit,
          allowedValues: ["day","hour"],
        }));
    }
    errors.collect(ros.propertyValidator('periodUnit', ros.validateString)(properties.periodUnit));
    return errors.wrap('supplied properties not correct for "RosCycleTaskProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ThreatDetection::CycleTask` resource
 *
 * @param properties - the TypeScript properties of a `RosCycleTaskProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ThreatDetection::CycleTask` resource.
 */
// @ts-ignore TS6133
function rosCycleTaskPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosCycleTaskPropsValidator(properties).assertSuccess();
    }
    return {
      'Enable': ros.numberToRosTemplate(properties.enable),
      'FirstDateStr': ros.numberToRosTemplate(properties.firstDateStr),
      'IntervalPeriod': ros.numberToRosTemplate(properties.intervalPeriod),
      'PeriodUnit': ros.stringToRosTemplate(properties.periodUnit),
      'TargetEndTime': ros.numberToRosTemplate(properties.targetEndTime),
      'TargetStartTime': ros.numberToRosTemplate(properties.targetStartTime),
      'TaskName': ros.stringToRosTemplate(properties.taskName),
      'TaskType': ros.stringToRosTemplate(properties.taskType),
      'Param': ros.hashMapper(ros.objectToRosTemplate)(properties.param),
      'Source': ros.stringToRosTemplate(properties.source),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ThreatDetection::CycleTask`.
 * @Note This class does not contain additional functions, so it is recommended to use the `CycleTask` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-cycletask
 */
export class RosCycleTask extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ThreatDetection::CycleTask";

    /**
     * @Attribute ConfigId: Configuration ID.
     */
    public readonly attrConfigId: ros.IResolvable;

    /**
     * @Attribute Enable: Specifies whether to enable the task.
     */
    public readonly attrEnable: ros.IResolvable;

    /**
     * @Attribute FirstDateStr: The first time when the task is performed.
     */
    public readonly attrFirstDateStr: ros.IResolvable;

    /**
     * @Attribute IntervalPeriod: The interval at which the task is run.
     */
    public readonly attrIntervalPeriod: ros.IResolvable;

    /**
     * @Attribute Param: The additional information.
     */
    public readonly attrParam: ros.IResolvable;

    /**
     * @Attribute PeriodUnit: The unit of the scan interval.
     */
    public readonly attrPeriodUnit: ros.IResolvable;

    /**
     * @Attribute TargetEndTime: The time when the task ends. Unit: hours.
     */
    public readonly attrTargetEndTime: ros.IResolvable;

    /**
     * @Attribute TargetStartTime: The time when the task is started. Unit: hours.
     */
    public readonly attrTargetStartTime: ros.IResolvable;

    /**
     * @Attribute TaskName: The task name.
     */
    public readonly attrTaskName: ros.IResolvable;

    /**
     * @Attribute TaskType: The type of the task.
     */
    public readonly attrTaskType: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property enable: Specifies whether to enable the task. Valid values:
     * *   **1**: yes
     * *   **0**: no.
     */
    public enable: number | ros.IResolvable;

    /**
     * @Property firstDateStr: The first time when the task is performed.
     */
    public firstDateStr: number | ros.IResolvable;

    /**
     * @Property intervalPeriod: The interval at which the task is run.
     */
    public intervalPeriod: number | ros.IResolvable;

    /**
     * @Property periodUnit: The unit of the scan interval. Valid values:
     * *   **day**
     * *   **hour**.
     */
    public periodUnit: string | ros.IResolvable;

    /**
     * @Property targetEndTime: The time when the task ends. Unit: hours.
     */
    public targetEndTime: number | ros.IResolvable;

    /**
     * @Property targetStartTime: The time when the task is started. Unit: hours.
     */
    public targetStartTime: number | ros.IResolvable;

    /**
     * @Property taskName: The task name.
     */
    public taskName: string | ros.IResolvable;

    /**
     * @Property taskType: The type of the task. Valid values:
     * *   **VIRUS_VUL_SCHEDULE_SCAN**: virus scan task
     * *   **IMAGE_SCAN**: image scan task
     * *   **EMG_VUL_SCHEDULE_SCAN**: urgent vulnerability scan task.
     */
    public taskType: string | ros.IResolvable;

    /**
     * @Property param: The additional information.
     */
    public param: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

    /**
     * @Property source: The additional source for the task.
     */
    public source: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCycleTaskProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosCycleTask.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrConfigId = this.getAtt('ConfigId');
        this.attrEnable = this.getAtt('Enable');
        this.attrFirstDateStr = this.getAtt('FirstDateStr');
        this.attrIntervalPeriod = this.getAtt('IntervalPeriod');
        this.attrParam = this.getAtt('Param');
        this.attrPeriodUnit = this.getAtt('PeriodUnit');
        this.attrTargetEndTime = this.getAtt('TargetEndTime');
        this.attrTargetStartTime = this.getAtt('TargetStartTime');
        this.attrTaskName = this.getAtt('TaskName');
        this.attrTaskType = this.getAtt('TaskType');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.enable = props.enable;
        this.firstDateStr = props.firstDateStr;
        this.intervalPeriod = props.intervalPeriod;
        this.periodUnit = props.periodUnit;
        this.targetEndTime = props.targetEndTime;
        this.targetStartTime = props.targetStartTime;
        this.taskName = props.taskName;
        this.taskType = props.taskType;
        this.param = props.param;
        this.source = props.source;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            enable: this.enable,
            firstDateStr: this.firstDateStr,
            intervalPeriod: this.intervalPeriod,
            periodUnit: this.periodUnit,
            targetEndTime: this.targetEndTime,
            targetStartTime: this.targetStartTime,
            taskName: this.taskName,
            taskType: this.taskType,
            param: this.param,
            source: this.source,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosCycleTaskPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-group
 */
export interface RosGroupProps {

    /**
     * @Property groupId: The ID of the server group for which you want to add to or remove servers.
     * >  To modify the mapping between an asset and an asset group, you must provide the ID of the asset group. You can call the [DescribeAllGroups](~~DescribeAllGroups~~) to query the IDs of asset groups. If you do not configure this parameter when you call this operation, an asset group is created.
     */
    readonly groupId?: number | ros.IResolvable;

    /**
     * @Property groupName: The name of the server group that you want to create or the server group for which you want to add or remove a server.
     * >  To modify the mapping between a server and a server group, you must provide the name of the server group. You can call the [DescribeAllGroups](~~DescribeAllGroups~~) operation to query the names of server groups. If you do not configure GroupID when you call this operation, a server group is created. In this case, you must configure GroupName.
     */
    readonly groupName?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosGroupProps`
 *
 * @returns the result of the validation.
 */
function RosGroupPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('groupName', ros.validateString)(properties.groupName));
    errors.collect(ros.propertyValidator('groupId', ros.validateNumber)(properties.groupId));
    return errors.wrap('supplied properties not correct for "RosGroupProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ThreatDetection::Group` resource
 *
 * @param properties - the TypeScript properties of a `RosGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ThreatDetection::Group` resource.
 */
// @ts-ignore TS6133
function rosGroupPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosGroupPropsValidator(properties).assertSuccess();
    }
    return {
      'GroupId': ros.numberToRosTemplate(properties.groupId),
      'GroupName': ros.stringToRosTemplate(properties.groupName),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ThreatDetection::Group`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Group` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-group
 */
export class RosGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ThreatDetection::Group";

    /**
     * @Attribute GroupFlag: The type of the server group.
     */
    public readonly attrGroupFlag: ros.IResolvable;

    /**
     * @Attribute GroupId: The ID of the server group for which you want to add to or remove servers.
     */
    public readonly attrGroupId: ros.IResolvable;

    /**
     * @Attribute GroupName: The name of the server group that you want to create or the server group for which you want to add or remove a server.
     */
    public readonly attrGroupName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property groupId: The ID of the server group for which you want to add to or remove servers.
     * >  To modify the mapping between an asset and an asset group, you must provide the ID of the asset group. You can call the [DescribeAllGroups](~~DescribeAllGroups~~) to query the IDs of asset groups. If you do not configure this parameter when you call this operation, an asset group is created.
     */
    public groupId: number | ros.IResolvable | undefined;

    /**
     * @Property groupName: The name of the server group that you want to create or the server group for which you want to add or remove a server.
     * >  To modify the mapping between a server and a server group, you must provide the name of the server group. You can call the [DescribeAllGroups](~~DescribeAllGroups~~) operation to query the names of server groups. If you do not configure GroupID when you call this operation, a server group is created. In this case, you must configure GroupName.
     */
    public groupName: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosGroupProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrGroupFlag = this.getAtt('GroupFlag');
        this.attrGroupId = this.getAtt('GroupId');
        this.attrGroupName = this.getAtt('GroupName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.groupId = props.groupId;
        this.groupName = props.groupName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            groupId: this.groupId,
            groupName: this.groupName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosHoneyPot`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-honeypot
 */
export interface RosHoneyPotProps {

    /**
     * @Property honeypotImageId: The ID of the honeypot image.
     * > You can call the [ListAvailableHoneypot](~~ListAvailableHoneypot~~) operation to query the IDs of images from the **HoneypotImageId** response parameter.
     */
    readonly honeypotImageId: string | ros.IResolvable;

    /**
     * @Property honeypotImageName: The name of the honeypot image.
     * > You can call the [ListAvailableHoneypot](~~ListAvailableHoneypot~~) operation to query the names of images from the **HoneypotImageName** response parameter.
     */
    readonly honeypotImageName: string | ros.IResolvable;

    /**
     * @Property honeypotName: The custom name of the honeypot.
     */
    readonly honeypotName: string | ros.IResolvable;

    /**
     * @Property nodeId: The ID of the management node.
     * > You can call the [ListHoneypotNode](~~ListHoneypotNode~~) operation to query the IDs of management nodes.
     */
    readonly nodeId: string | ros.IResolvable;

    /**
     * @Property meta: Honeypot custom configuration. JSON format. Contains the following fields:
     * - **trojan_git**:Git counterplan. Value:
     * - **zip**:Git source package
     * - **web**:.git directory leak
     * - **close**: close
     * - **trojan_git\_addr**:Git anti-control connection address
     * - **Trojan_git.zip**:Git anti-Trojan package
     * - **burp**:Burp counter. Value:
     * - **open**: On
     * - **close**: close
     * - **portrait_option**: traceability configuration. Value:
     * - **false**: Disabled
     * - **true**: Enable.
     */
    readonly meta?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosHoneyPotProps`
 *
 * @param properties - the TypeScript properties of a `RosHoneyPotProps`
 *
 * @returns the result of the validation.
 */
function RosHoneyPotPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('honeypotImageName', ros.requiredValidator)(properties.honeypotImageName));
    errors.collect(ros.propertyValidator('honeypotImageName', ros.validateString)(properties.honeypotImageName));
    errors.collect(ros.propertyValidator('meta', ros.hashValidator(ros.validateAny))(properties.meta));
    errors.collect(ros.propertyValidator('nodeId', ros.requiredValidator)(properties.nodeId));
    errors.collect(ros.propertyValidator('nodeId', ros.validateString)(properties.nodeId));
    errors.collect(ros.propertyValidator('honeypotImageId', ros.requiredValidator)(properties.honeypotImageId));
    errors.collect(ros.propertyValidator('honeypotImageId', ros.validateString)(properties.honeypotImageId));
    errors.collect(ros.propertyValidator('honeypotName', ros.requiredValidator)(properties.honeypotName));
    errors.collect(ros.propertyValidator('honeypotName', ros.validateString)(properties.honeypotName));
    return errors.wrap('supplied properties not correct for "RosHoneyPotProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ThreatDetection::HoneyPot` resource
 *
 * @param properties - the TypeScript properties of a `RosHoneyPotProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ThreatDetection::HoneyPot` resource.
 */
// @ts-ignore TS6133
function rosHoneyPotPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosHoneyPotPropsValidator(properties).assertSuccess();
    }
    return {
      'HoneypotImageId': ros.stringToRosTemplate(properties.honeypotImageId),
      'HoneypotImageName': ros.stringToRosTemplate(properties.honeypotImageName),
      'HoneypotName': ros.stringToRosTemplate(properties.honeypotName),
      'NodeId': ros.stringToRosTemplate(properties.nodeId),
      'Meta': ros.hashMapper(ros.objectToRosTemplate)(properties.meta),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ThreatDetection::HoneyPot`.
 * @Note This class does not contain additional functions, so it is recommended to use the `HoneyPot` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-honeypot
 */
export class RosHoneyPot extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ThreatDetection::HoneyPot";

    /**
     * @Attribute HoneypotId: The ID of the honeypot.
     */
    public readonly attrHoneypotId: ros.IResolvable;

    /**
     * @Attribute HoneypotImageId: The ID of the honeypot image.
     */
    public readonly attrHoneypotImageId: ros.IResolvable;

    /**
     * @Attribute HoneypotImageName: The name of the honeypot image.
     */
    public readonly attrHoneypotImageName: ros.IResolvable;

    /**
     * @Attribute HoneypotName: The custom name of the honeypot.
     */
    public readonly attrHoneypotName: ros.IResolvable;

    /**
     * @Attribute NodeId: The ID of the management node.
     */
    public readonly attrNodeId: ros.IResolvable;

    /**
     * @Attribute State: Honeypot status.
     */
    public readonly attrState: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property honeypotImageId: The ID of the honeypot image.
     * > You can call the [ListAvailableHoneypot](~~ListAvailableHoneypot~~) operation to query the IDs of images from the **HoneypotImageId** response parameter.
     */
    public honeypotImageId: string | ros.IResolvable;

    /**
     * @Property honeypotImageName: The name of the honeypot image.
     * > You can call the [ListAvailableHoneypot](~~ListAvailableHoneypot~~) operation to query the names of images from the **HoneypotImageName** response parameter.
     */
    public honeypotImageName: string | ros.IResolvable;

    /**
     * @Property honeypotName: The custom name of the honeypot.
     */
    public honeypotName: string | ros.IResolvable;

    /**
     * @Property nodeId: The ID of the management node.
     * > You can call the [ListHoneypotNode](~~ListHoneypotNode~~) operation to query the IDs of management nodes.
     */
    public nodeId: string | ros.IResolvable;

    /**
     * @Property meta: Honeypot custom configuration. JSON format. Contains the following fields:
     * - **trojan_git**:Git counterplan. Value:
     * - **zip**:Git source package
     * - **web**:.git directory leak
     * - **close**: close
     * - **trojan_git\_addr**:Git anti-control connection address
     * - **Trojan_git.zip**:Git anti-Trojan package
     * - **burp**:Burp counter. Value:
     * - **open**: On
     * - **close**: close
     * - **portrait_option**: traceability configuration. Value:
     * - **false**: Disabled
     * - **true**: Enable.
     */
    public meta: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosHoneyPotProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosHoneyPot.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrHoneypotId = this.getAtt('HoneypotId');
        this.attrHoneypotImageId = this.getAtt('HoneypotImageId');
        this.attrHoneypotImageName = this.getAtt('HoneypotImageName');
        this.attrHoneypotName = this.getAtt('HoneypotName');
        this.attrNodeId = this.getAtt('NodeId');
        this.attrState = this.getAtt('State');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.honeypotImageId = props.honeypotImageId;
        this.honeypotImageName = props.honeypotImageName;
        this.honeypotName = props.honeypotName;
        this.nodeId = props.nodeId;
        this.meta = props.meta;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            honeypotImageId: this.honeypotImageId,
            honeypotImageName: this.honeypotImageName,
            honeypotName: this.honeypotName,
            nodeId: this.nodeId,
            meta: this.meta,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosHoneyPotPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosHoneypotNode`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-honeypotnode
 */
export interface RosHoneypotNodeProps {

    /**
     * @Property nodeName: The name of the management node.
     */
    readonly nodeName: string | ros.IResolvable;

    /**
     * @Property allowHoneypotAccessInternet: Specifies whether to allow honeypots to access the Internet. Valid values:
     * *   **true**: allows honeypots to access the Internet.
     * *   **false**: does not allow honeypots to access the Internet.
     */
    readonly allowHoneypotAccessInternet?: boolean | ros.IResolvable;

    /**
     * @Property availableProbeNum: The number of available probes.
     */
    readonly availableProbeNum?: number | ros.IResolvable;

    /**
     * @Property securityGroupProbeIpList: The CIDR blocks that are allowed to access the management node.
     */
    readonly securityGroupProbeIpList?: Array<string | ros.IResolvable> | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosHoneypotNodeProps`
 *
 * @param properties - the TypeScript properties of a `RosHoneypotNodeProps`
 *
 * @returns the result of the validation.
 */
function RosHoneypotNodePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('nodeName', ros.requiredValidator)(properties.nodeName));
    errors.collect(ros.propertyValidator('nodeName', ros.validateString)(properties.nodeName));
    errors.collect(ros.propertyValidator('availableProbeNum', ros.validateNumber)(properties.availableProbeNum));
    errors.collect(ros.propertyValidator('allowHoneypotAccessInternet', ros.validateBoolean)(properties.allowHoneypotAccessInternet));
    if(properties.securityGroupProbeIpList && (Array.isArray(properties.securityGroupProbeIpList) || (typeof properties.securityGroupProbeIpList) === 'string')) {
        errors.collect(ros.propertyValidator('securityGroupProbeIpList', ros.validateLength)({
            data: properties.securityGroupProbeIpList.length,
            min: 0,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('securityGroupProbeIpList', ros.listValidator(ros.validateString))(properties.securityGroupProbeIpList));
    return errors.wrap('supplied properties not correct for "RosHoneypotNodeProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ThreatDetection::HoneypotNode` resource
 *
 * @param properties - the TypeScript properties of a `RosHoneypotNodeProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ThreatDetection::HoneypotNode` resource.
 */
// @ts-ignore TS6133
function rosHoneypotNodePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosHoneypotNodePropsValidator(properties).assertSuccess();
    }
    return {
      'NodeName': ros.stringToRosTemplate(properties.nodeName),
      'AllowHoneypotAccessInternet': ros.booleanToRosTemplate(properties.allowHoneypotAccessInternet),
      'AvailableProbeNum': ros.numberToRosTemplate(properties.availableProbeNum),
      'SecurityGroupProbeIpList': ros.listMapper(ros.stringToRosTemplate)(properties.securityGroupProbeIpList),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ThreatDetection::HoneypotNode`.
 * @Note This class does not contain additional functions, so it is recommended to use the `HoneypotNode` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-honeypotnode
 */
export class RosHoneypotNode extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ThreatDetection::HoneypotNode";

    /**
     * @Attribute AllowHoneypotAccessInternet: Specifies whether to allow honeypots to access the Internet.
     */
    public readonly attrAllowHoneypotAccessInternet: ros.IResolvable;

    /**
     * @Attribute AvailableProbeNum: The number of available probes.
     */
    public readonly attrAvailableProbeNum: ros.IResolvable;

    /**
     * @Attribute CreateTime: The time when the management node was created.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute NodeId: Honeypot management node id.
     */
    public readonly attrNodeId: ros.IResolvable;

    /**
     * @Attribute NodeName: The name of the management node.
     */
    public readonly attrNodeName: ros.IResolvable;

    /**
     * @Attribute SecurityGroupProbeIpList: The CIDR blocks that are allowed to access the management node.
     */
    public readonly attrSecurityGroupProbeIpList: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property nodeName: The name of the management node.
     */
    public nodeName: string | ros.IResolvable;

    /**
     * @Property allowHoneypotAccessInternet: Specifies whether to allow honeypots to access the Internet. Valid values:
     * *   **true**: allows honeypots to access the Internet.
     * *   **false**: does not allow honeypots to access the Internet.
     */
    public allowHoneypotAccessInternet: boolean | ros.IResolvable | undefined;

    /**
     * @Property availableProbeNum: The number of available probes.
     */
    public availableProbeNum: number | ros.IResolvable | undefined;

    /**
     * @Property securityGroupProbeIpList: The CIDR blocks that are allowed to access the management node.
     */
    public securityGroupProbeIpList: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosHoneypotNodeProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosHoneypotNode.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAllowHoneypotAccessInternet = this.getAtt('AllowHoneypotAccessInternet');
        this.attrAvailableProbeNum = this.getAtt('AvailableProbeNum');
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrNodeId = this.getAtt('NodeId');
        this.attrNodeName = this.getAtt('NodeName');
        this.attrSecurityGroupProbeIpList = this.getAtt('SecurityGroupProbeIpList');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.nodeName = props.nodeName;
        this.allowHoneypotAccessInternet = props.allowHoneypotAccessInternet;
        this.availableProbeNum = props.availableProbeNum;
        this.securityGroupProbeIpList = props.securityGroupProbeIpList;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            nodeName: this.nodeName,
            allowHoneypotAccessInternet: this.allowHoneypotAccessInternet,
            availableProbeNum: this.availableProbeNum,
            securityGroupProbeIpList: this.securityGroupProbeIpList,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosHoneypotNodePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosHoneypotPreset`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-honeypotpreset
 */
export interface RosHoneypotPresetProps {

    /**
     * @Property honeypotImageName: The name of the honeypot image.
     */
    readonly honeypotImageName: string | ros.IResolvable;

    /**
     * @Property meta: The custom configurations of the honeypot template. The value is a JSON string that contains the following fields:
     * *   **PortraitOption**: Social Source Tracing
     * *   **Burp**: Burp-specific Defense
     * *   **TrojanGit**: Git-specific Defense.
     */
    readonly meta: RosHoneypotPreset.MetaProperty | ros.IResolvable;

    /**
     * @Property nodeId: The ID of the management node.
     */
    readonly nodeId: string | ros.IResolvable;

    /**
     * @Property presetName: The custom name of the honeypot template.
     */
    readonly presetName: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosHoneypotPresetProps`
 *
 * @param properties - the TypeScript properties of a `RosHoneypotPresetProps`
 *
 * @returns the result of the validation.
 */
function RosHoneypotPresetPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('honeypotImageName', ros.requiredValidator)(properties.honeypotImageName));
    errors.collect(ros.propertyValidator('honeypotImageName', ros.validateString)(properties.honeypotImageName));
    errors.collect(ros.propertyValidator('meta', ros.requiredValidator)(properties.meta));
    errors.collect(ros.propertyValidator('meta', RosHoneypotPreset_MetaPropertyValidator)(properties.meta));
    errors.collect(ros.propertyValidator('nodeId', ros.requiredValidator)(properties.nodeId));
    errors.collect(ros.propertyValidator('nodeId', ros.validateString)(properties.nodeId));
    errors.collect(ros.propertyValidator('presetName', ros.requiredValidator)(properties.presetName));
    errors.collect(ros.propertyValidator('presetName', ros.validateString)(properties.presetName));
    return errors.wrap('supplied properties not correct for "RosHoneypotPresetProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ThreatDetection::HoneypotPreset` resource
 *
 * @param properties - the TypeScript properties of a `RosHoneypotPresetProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ThreatDetection::HoneypotPreset` resource.
 */
// @ts-ignore TS6133
function rosHoneypotPresetPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosHoneypotPresetPropsValidator(properties).assertSuccess();
    }
    return {
      'HoneypotImageName': ros.stringToRosTemplate(properties.honeypotImageName),
      'Meta': rosHoneypotPresetMetaPropertyToRosTemplate(properties.meta),
      'NodeId': ros.stringToRosTemplate(properties.nodeId),
      'PresetName': ros.stringToRosTemplate(properties.presetName),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ThreatDetection::HoneypotPreset`.
 * @Note This class does not contain additional functions, so it is recommended to use the `HoneypotPreset` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-honeypotpreset
 */
export class RosHoneypotPreset extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ThreatDetection::HoneypotPreset";

    /**
     * @Attribute HoneypotImageName: The name of the honeypot image.
     */
    public readonly attrHoneypotImageName: ros.IResolvable;

    /**
     * @Attribute HoneypotPresetId: The ID of the honeypot template.
     */
    public readonly attrHoneypotPresetId: ros.IResolvable;

    /**
     * @Attribute Meta: The custom configurations of the honeypot template.
     */
    public readonly attrMeta: ros.IResolvable;

    /**
     * @Attribute NodeId: The ID of the management node.
     */
    public readonly attrNodeId: ros.IResolvable;

    /**
     * @Attribute PresetName: The custom name of the honeypot template.
     */
    public readonly attrPresetName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property honeypotImageName: The name of the honeypot image.
     */
    public honeypotImageName: string | ros.IResolvable;

    /**
     * @Property meta: The custom configurations of the honeypot template. The value is a JSON string that contains the following fields:
     * *   **PortraitOption**: Social Source Tracing
     * *   **Burp**: Burp-specific Defense
     * *   **TrojanGit**: Git-specific Defense.
     */
    public meta: RosHoneypotPreset.MetaProperty | ros.IResolvable;

    /**
     * @Property nodeId: The ID of the management node.
     */
    public nodeId: string | ros.IResolvable;

    /**
     * @Property presetName: The custom name of the honeypot template.
     */
    public presetName: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosHoneypotPresetProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosHoneypotPreset.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrHoneypotImageName = this.getAtt('HoneypotImageName');
        this.attrHoneypotPresetId = this.getAtt('HoneypotPresetId');
        this.attrMeta = this.getAtt('Meta');
        this.attrNodeId = this.getAtt('NodeId');
        this.attrPresetName = this.getAtt('PresetName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.honeypotImageName = props.honeypotImageName;
        this.meta = props.meta;
        this.nodeId = props.nodeId;
        this.presetName = props.presetName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            honeypotImageName: this.honeypotImageName,
            meta: this.meta,
            nodeId: this.nodeId,
            presetName: this.presetName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosHoneypotPresetPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosHoneypotPreset {
    /**
     * @stability external
     */
    export interface MetaProperty {
        /**
         * @Property trojanGit: Git-specific Defense.
         */
        readonly trojanGit?: string | ros.IResolvable;
        /**
         * @Property portraitOption: Social Source Tracing.
         */
        readonly portraitOption?: boolean | ros.IResolvable;
        /**
         * @Property burp: Burp-specific Defense.
         */
        readonly burp?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `MetaProperty`
 *
 * @param properties - the TypeScript properties of a `MetaProperty`
 *
 * @returns the result of the validation.
 */
function RosHoneypotPreset_MetaPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('trojanGit', ros.validateString)(properties.trojanGit));
    errors.collect(ros.propertyValidator('portraitOption', ros.validateBoolean)(properties.portraitOption));
    errors.collect(ros.propertyValidator('burp', ros.validateString)(properties.burp));
    return errors.wrap('supplied properties not correct for "MetaProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ThreatDetection::HoneypotPreset.Meta` resource
 *
 * @param properties - the TypeScript properties of a `MetaProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ThreatDetection::HoneypotPreset.Meta` resource.
 */
// @ts-ignore TS6133
function rosHoneypotPresetMetaPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosHoneypotPreset_MetaPropertyValidator(properties).assertSuccess();
    return {
      'TrojanGit': ros.stringToRosTemplate(properties.trojanGit),
      'PortraitOption': ros.booleanToRosTemplate(properties.portraitOption),
      'Burp': ros.stringToRosTemplate(properties.burp),
    };
}

/**
 * Properties for defining a `RosHoneypotProbe`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-honeypotprobe
 */
export interface RosHoneypotProbeProps {

    /**
     * @Property controlNodeId: The ID of the management node.
     * > You can call the [ListHoneypotNode](~~ListHoneypotNode~~) operation to query the IDs of management nodes.
     */
    readonly controlNodeId: string | ros.IResolvable;

    /**
     * @Property displayName: The name of the probe.
     */
    readonly displayName: string | ros.IResolvable;

    /**
     * @Property probeType: The type of the probe. Valid values:
     * *   **host_probe**: host probe
     * *   **vpc_black_hole_probe**: virtual private cloud (VPC) probe.
     */
    readonly probeType: string | ros.IResolvable;

    /**
     * @Property arp: Specifies whether to enable Address Resolution Protocol (ARP) spoofing. Valid values:
     * *   **true**: yes
     * *   **false**: no.
     */
    readonly arp?: boolean | ros.IResolvable;

    /**
     * @Property businessGroupId: Business grouping.
     */
    readonly businessGroupId?: string | ros.IResolvable;

    /**
     * @Property honeypotBindList: The configuration of the probe.
     */
    readonly honeypotBindList?: Array<RosHoneypotProbe.HoneypotBindListProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property ping: Specifies whether to enable ping scan. Valid values:
     * *   **true**: yes
     * *   **false**: no.
     */
    readonly ping?: boolean | ros.IResolvable;

    /**
     * @Property probeVersion: The version of the probe.
     */
    readonly probeVersion?: string | ros.IResolvable;

    /**
     * @Property proxyIp: The IP address of the proxy.
     */
    readonly proxyIp?: string | ros.IResolvable;

    /**
     * @Property serviceIpList: Listen to the IP address list.
     */
    readonly serviceIpList?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property uuid: The UUID of the instance.
     * > If **ProbeType** is set to **host_probe**, this parameter is required.
     */
    readonly uuid?: string | ros.IResolvable;

    /**
     * @Property vpcId: The ID of the VPC.
     * > **ProbeType** is **vpc\_Black \_hole\_probe**. This value cannot be empty. You can call the [DescribeVpcHoneyPotList](~~ DescribeVpcHoneyPotList ~~) interface to obtain the value.
     */
    readonly vpcId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosHoneypotProbeProps`
 *
 * @param properties - the TypeScript properties of a `RosHoneypotProbeProps`
 *
 * @returns the result of the validation.
 */
function RosHoneypotProbePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('probeVersion', ros.validateString)(properties.probeVersion));
    errors.collect(ros.propertyValidator('uuid', ros.validateString)(properties.uuid));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('probeType', ros.requiredValidator)(properties.probeType));
    if(properties.probeType && (typeof properties.probeType) !== 'object') {
        errors.collect(ros.propertyValidator('probeType', ros.validateAllowedValues)({
          data: properties.probeType,
          allowedValues: ["host_probe","vpc_black_hole_probe"],
        }));
    }
    errors.collect(ros.propertyValidator('probeType', ros.validateString)(properties.probeType));
    if(properties.serviceIpList && (Array.isArray(properties.serviceIpList) || (typeof properties.serviceIpList) === 'string')) {
        errors.collect(ros.propertyValidator('serviceIpList', ros.validateLength)({
            data: properties.serviceIpList.length,
            min: 0,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('serviceIpList', ros.listValidator(ros.validateString))(properties.serviceIpList));
    errors.collect(ros.propertyValidator('controlNodeId', ros.requiredValidator)(properties.controlNodeId));
    errors.collect(ros.propertyValidator('controlNodeId', ros.validateString)(properties.controlNodeId));
    errors.collect(ros.propertyValidator('ping', ros.validateBoolean)(properties.ping));
    errors.collect(ros.propertyValidator('displayName', ros.requiredValidator)(properties.displayName));
    errors.collect(ros.propertyValidator('displayName', ros.validateString)(properties.displayName));
    if(properties.honeypotBindList && (Array.isArray(properties.honeypotBindList) || (typeof properties.honeypotBindList) === 'string')) {
        errors.collect(ros.propertyValidator('honeypotBindList', ros.validateLength)({
            data: properties.honeypotBindList.length,
            min: 0,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('honeypotBindList', ros.listValidator(RosHoneypotProbe_HoneypotBindListPropertyValidator))(properties.honeypotBindList));
    errors.collect(ros.propertyValidator('businessGroupId', ros.validateString)(properties.businessGroupId));
    errors.collect(ros.propertyValidator('proxyIp', ros.validateString)(properties.proxyIp));
    errors.collect(ros.propertyValidator('arp', ros.validateBoolean)(properties.arp));
    return errors.wrap('supplied properties not correct for "RosHoneypotProbeProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ThreatDetection::HoneypotProbe` resource
 *
 * @param properties - the TypeScript properties of a `RosHoneypotProbeProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ThreatDetection::HoneypotProbe` resource.
 */
// @ts-ignore TS6133
function rosHoneypotProbePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosHoneypotProbePropsValidator(properties).assertSuccess();
    }
    return {
      'ControlNodeId': ros.stringToRosTemplate(properties.controlNodeId),
      'DisplayName': ros.stringToRosTemplate(properties.displayName),
      'ProbeType': ros.stringToRosTemplate(properties.probeType),
      'Arp': ros.booleanToRosTemplate(properties.arp),
      'BusinessGroupId': ros.stringToRosTemplate(properties.businessGroupId),
      'HoneypotBindList': ros.listMapper(rosHoneypotProbeHoneypotBindListPropertyToRosTemplate)(properties.honeypotBindList),
      'Ping': ros.booleanToRosTemplate(properties.ping),
      'ProbeVersion': ros.stringToRosTemplate(properties.probeVersion),
      'ProxyIp': ros.stringToRosTemplate(properties.proxyIp),
      'ServiceIpList': ros.listMapper(ros.stringToRosTemplate)(properties.serviceIpList),
      'Uuid': ros.stringToRosTemplate(properties.uuid),
      'VpcId': ros.stringToRosTemplate(properties.vpcId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ThreatDetection::HoneypotProbe`.
 * @Note This class does not contain additional functions, so it is recommended to use the `HoneypotProbe` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-honeypotprobe
 */
export class RosHoneypotProbe extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ThreatDetection::HoneypotProbe";

    /**
     * @Attribute Arp: Specifies whether to enable Address Resolution Protocol (ARP) spoofing.
     */
    public readonly attrArp: ros.IResolvable;

    /**
     * @Attribute ControlNodeId: The ID of the management node.
     */
    public readonly attrControlNodeId: ros.IResolvable;

    /**
     * @Attribute DisplayName: The name of the probe.
     */
    public readonly attrDisplayName: ros.IResolvable;

    /**
     * @Attribute HoneypotBindList: The configuration of the probe.
     */
    public readonly attrHoneypotBindList: ros.IResolvable;

    /**
     * @Attribute HoneypotProbeId: The ID of the probe.
     */
    public readonly attrHoneypotProbeId: ros.IResolvable;

    /**
     * @Attribute Ping: Specifies whether to enable ping scan.
     */
    public readonly attrPing: ros.IResolvable;

    /**
     * @Attribute ProbeType: The type of the probe.
     */
    public readonly attrProbeType: ros.IResolvable;

    /**
     * @Attribute ProbeVersion: The version of the probe.
     */
    public readonly attrProbeVersion: ros.IResolvable;

    /**
     * @Attribute ServiceIpList: Listen to the IP address list.
     */
    public readonly attrServiceIpList: ros.IResolvable;

    /**
     * @Attribute Uuid: The UUID of the instance.
     */
    public readonly attrUuid: ros.IResolvable;

    /**
     * @Attribute VpcId: The ID of the VPC.
     */
    public readonly attrVpcId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property controlNodeId: The ID of the management node.
     * > You can call the [ListHoneypotNode](~~ListHoneypotNode~~) operation to query the IDs of management nodes.
     */
    public controlNodeId: string | ros.IResolvable;

    /**
     * @Property displayName: The name of the probe.
     */
    public displayName: string | ros.IResolvable;

    /**
     * @Property probeType: The type of the probe. Valid values:
     * *   **host_probe**: host probe
     * *   **vpc_black_hole_probe**: virtual private cloud (VPC) probe.
     */
    public probeType: string | ros.IResolvable;

    /**
     * @Property arp: Specifies whether to enable Address Resolution Protocol (ARP) spoofing. Valid values:
     * *   **true**: yes
     * *   **false**: no.
     */
    public arp: boolean | ros.IResolvable | undefined;

    /**
     * @Property businessGroupId: Business grouping.
     */
    public businessGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property honeypotBindList: The configuration of the probe.
     */
    public honeypotBindList: Array<RosHoneypotProbe.HoneypotBindListProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property ping: Specifies whether to enable ping scan. Valid values:
     * *   **true**: yes
     * *   **false**: no.
     */
    public ping: boolean | ros.IResolvable | undefined;

    /**
     * @Property probeVersion: The version of the probe.
     */
    public probeVersion: string | ros.IResolvable | undefined;

    /**
     * @Property proxyIp: The IP address of the proxy.
     */
    public proxyIp: string | ros.IResolvable | undefined;

    /**
     * @Property serviceIpList: Listen to the IP address list.
     */
    public serviceIpList: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property uuid: The UUID of the instance.
     * > If **ProbeType** is set to **host_probe**, this parameter is required.
     */
    public uuid: string | ros.IResolvable | undefined;

    /**
     * @Property vpcId: The ID of the VPC.
     * > **ProbeType** is **vpc\_Black \_hole\_probe**. This value cannot be empty. You can call the [DescribeVpcHoneyPotList](~~ DescribeVpcHoneyPotList ~~) interface to obtain the value.
     */
    public vpcId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosHoneypotProbeProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosHoneypotProbe.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrArp = this.getAtt('Arp');
        this.attrControlNodeId = this.getAtt('ControlNodeId');
        this.attrDisplayName = this.getAtt('DisplayName');
        this.attrHoneypotBindList = this.getAtt('HoneypotBindList');
        this.attrHoneypotProbeId = this.getAtt('HoneypotProbeId');
        this.attrPing = this.getAtt('Ping');
        this.attrProbeType = this.getAtt('ProbeType');
        this.attrProbeVersion = this.getAtt('ProbeVersion');
        this.attrServiceIpList = this.getAtt('ServiceIpList');
        this.attrUuid = this.getAtt('Uuid');
        this.attrVpcId = this.getAtt('VpcId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.controlNodeId = props.controlNodeId;
        this.displayName = props.displayName;
        this.probeType = props.probeType;
        this.arp = props.arp;
        this.businessGroupId = props.businessGroupId;
        this.honeypotBindList = props.honeypotBindList;
        this.ping = props.ping;
        this.probeVersion = props.probeVersion;
        this.proxyIp = props.proxyIp;
        this.serviceIpList = props.serviceIpList;
        this.uuid = props.uuid;
        this.vpcId = props.vpcId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            controlNodeId: this.controlNodeId,
            displayName: this.displayName,
            probeType: this.probeType,
            arp: this.arp,
            businessGroupId: this.businessGroupId,
            honeypotBindList: this.honeypotBindList,
            ping: this.ping,
            probeVersion: this.probeVersion,
            proxyIp: this.proxyIp,
            serviceIpList: this.serviceIpList,
            uuid: this.uuid,
            vpcId: this.vpcId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosHoneypotProbePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosHoneypotProbe {
    /**
     * @stability external
     */
    export interface BindPortListProperty {
        /**
         * @Property targetPort: The destination port.
     * > If **HoneypotId** is specified, this parameter is required.
         */
        readonly targetPort?: number | ros.IResolvable;
        /**
         * @Property bindPort: Specifies whether to bind a port. Valid values:
     * *   **true**: yes
     * *   **false**: no.
         */
        readonly bindPort?: boolean | ros.IResolvable;
        /**
         * @Property startPort: The start of the port range.
         */
        readonly startPort?: number | ros.IResolvable;
        /**
         * @Property endPort: The end of the port range.
         */
        readonly endPort?: number | ros.IResolvable;
        /**
         * @Property fixed: Specifies whether the port is a fixed port. Valid values:
     * *   **false**: no
     * *   **true**: yes.
         */
        readonly fixed?: boolean | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `BindPortListProperty`
 *
 * @param properties - the TypeScript properties of a `BindPortListProperty`
 *
 * @returns the result of the validation.
 */
function RosHoneypotProbe_BindPortListPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('targetPort', ros.validateNumber)(properties.targetPort));
    errors.collect(ros.propertyValidator('bindPort', ros.validateBoolean)(properties.bindPort));
    errors.collect(ros.propertyValidator('startPort', ros.validateNumber)(properties.startPort));
    errors.collect(ros.propertyValidator('endPort', ros.validateNumber)(properties.endPort));
    errors.collect(ros.propertyValidator('fixed', ros.validateBoolean)(properties.fixed));
    return errors.wrap('supplied properties not correct for "BindPortListProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ThreatDetection::HoneypotProbe.BindPortList` resource
 *
 * @param properties - the TypeScript properties of a `BindPortListProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ThreatDetection::HoneypotProbe.BindPortList` resource.
 */
// @ts-ignore TS6133
function rosHoneypotProbeBindPortListPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosHoneypotProbe_BindPortListPropertyValidator(properties).assertSuccess();
    return {
      'TargetPort': ros.numberToRosTemplate(properties.targetPort),
      'BindPort': ros.booleanToRosTemplate(properties.bindPort),
      'StartPort': ros.numberToRosTemplate(properties.startPort),
      'EndPort': ros.numberToRosTemplate(properties.endPort),
      'Fixed': ros.booleanToRosTemplate(properties.fixed),
    };
}

export namespace RosHoneypotProbe {
    /**
     * @stability external
     */
    export interface HoneypotBindListProperty {
        /**
         * @Property honeypotId: The ID of the honeypot.
     * > You can call the [ListHoneypot](~~ListHoneypot~~) operation to query the IDs of honeypots.
         */
        readonly honeypotId?: string | ros.IResolvable;
        /**
         * @Property bindPortList: The listener ports.
         */
        readonly bindPortList?: Array<RosHoneypotProbe.BindPortListProperty | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `HoneypotBindListProperty`
 *
 * @param properties - the TypeScript properties of a `HoneypotBindListProperty`
 *
 * @returns the result of the validation.
 */
function RosHoneypotProbe_HoneypotBindListPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('honeypotId', ros.validateString)(properties.honeypotId));
    if(properties.bindPortList && (Array.isArray(properties.bindPortList) || (typeof properties.bindPortList) === 'string')) {
        errors.collect(ros.propertyValidator('bindPortList', ros.validateLength)({
            data: properties.bindPortList.length,
            min: 0,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('bindPortList', ros.listValidator(RosHoneypotProbe_BindPortListPropertyValidator))(properties.bindPortList));
    return errors.wrap('supplied properties not correct for "HoneypotBindListProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ThreatDetection::HoneypotProbe.HoneypotBindList` resource
 *
 * @param properties - the TypeScript properties of a `HoneypotBindListProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ThreatDetection::HoneypotProbe.HoneypotBindList` resource.
 */
// @ts-ignore TS6133
function rosHoneypotProbeHoneypotBindListPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosHoneypotProbe_HoneypotBindListPropertyValidator(properties).assertSuccess();
    return {
      'HoneypotId': ros.stringToRosTemplate(properties.honeypotId),
      'BindPortList': ros.listMapper(rosHoneypotProbeBindPortListPropertyToRosTemplate)(properties.bindPortList),
    };
}

/**
 * Properties for defining a `RosImageEventOperation`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-imageeventoperation
 */
export interface RosImageEventOperationProps {

    /**
     * @Property conditions: The rule conditions. Specify a value in the JSON format. You can specify the following keys:
     * *   **condition**: the matching condition.
     * *   **type**: the matching type.
     * *   **value**: the matching value.
     */
    readonly conditions: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property eventType: Image Event Type.
     */
    readonly eventType: string | ros.IResolvable;

    /**
     * @Property operationCode: Event Operation Code.
     */
    readonly operationCode: string | ros.IResolvable;

    /**
     * @Property eventKey: The keyword of the alert item.
     */
    readonly eventKey?: string | ros.IResolvable;

    /**
     * @Property eventName: The name of the alert item.
     */
    readonly eventName?: string | ros.IResolvable;

    /**
     * @Property note: The remarks that you want to add.
     */
    readonly note?: string | ros.IResolvable;

    /**
     * @Property scenarios: The application scope of the rule. The value is in the JSON format. Valid values of keys:
     * type
     * value
     * Example: {"type": "repo", "value": "test-aaa\/shenzhen-repo-01"}
     */
    readonly scenarios?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property source: The source of the whitelist. Valid values:
     * *   **default**: image.
     * *   **agentless**: agentless detection.
     */
    readonly source?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosImageEventOperationProps`
 *
 * @param properties - the TypeScript properties of a `RosImageEventOperationProps`
 *
 * @returns the result of the validation.
 */
function RosImageEventOperationPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('eventType', ros.requiredValidator)(properties.eventType));
    if(properties.eventType && (typeof properties.eventType) !== 'object') {
        errors.collect(ros.propertyValidator('eventType', ros.validateAllowedValues)({
          data: properties.eventType,
          allowedValues: ["sensitiveFile","maliciousFile","buildRisk"],
        }));
    }
    errors.collect(ros.propertyValidator('eventType', ros.validateString)(properties.eventType));
    errors.collect(ros.propertyValidator('note', ros.validateString)(properties.note));
    errors.collect(ros.propertyValidator('operationCode', ros.requiredValidator)(properties.operationCode));
    if(properties.operationCode && (typeof properties.operationCode) !== 'object') {
        errors.collect(ros.propertyValidator('operationCode', ros.validateAllowedValues)({
          data: properties.operationCode,
          allowedValues: ["whitelist"],
        }));
    }
    errors.collect(ros.propertyValidator('operationCode', ros.validateString)(properties.operationCode));
    errors.collect(ros.propertyValidator('eventKey', ros.validateString)(properties.eventKey));
    errors.collect(ros.propertyValidator('scenarios', ros.hashValidator(ros.validateAny))(properties.scenarios));
    errors.collect(ros.propertyValidator('eventName', ros.validateString)(properties.eventName));
    if(properties.source && (typeof properties.source) !== 'object') {
        errors.collect(ros.propertyValidator('source', ros.validateAllowedValues)({
          data: properties.source,
          allowedValues: ["agentless","default"],
        }));
    }
    errors.collect(ros.propertyValidator('source', ros.validateString)(properties.source));
    errors.collect(ros.propertyValidator('conditions', ros.requiredValidator)(properties.conditions));
    errors.collect(ros.propertyValidator('conditions', ros.hashValidator(ros.validateAny))(properties.conditions));
    return errors.wrap('supplied properties not correct for "RosImageEventOperationProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ThreatDetection::ImageEventOperation` resource
 *
 * @param properties - the TypeScript properties of a `RosImageEventOperationProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ThreatDetection::ImageEventOperation` resource.
 */
// @ts-ignore TS6133
function rosImageEventOperationPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosImageEventOperationPropsValidator(properties).assertSuccess();
    }
    return {
      'Conditions': ros.hashMapper(ros.objectToRosTemplate)(properties.conditions),
      'EventType': ros.stringToRosTemplate(properties.eventType),
      'OperationCode': ros.stringToRosTemplate(properties.operationCode),
      'EventKey': ros.stringToRosTemplate(properties.eventKey),
      'EventName': ros.stringToRosTemplate(properties.eventName),
      'Note': ros.stringToRosTemplate(properties.note),
      'Scenarios': ros.hashMapper(ros.objectToRosTemplate)(properties.scenarios),
      'Source': ros.stringToRosTemplate(properties.source),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ThreatDetection::ImageEventOperation`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ImageEventOperation` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-imageeventoperation
 */
export class RosImageEventOperation extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ThreatDetection::ImageEventOperation";

    /**
     * @Attribute Conditions: The rule conditions. Specify a value in the JSON format.
     */
    public readonly attrConditions: ros.IResolvable;

    /**
     * @Attribute EventKey: Image Event Key.
     */
    public readonly attrEventKey: ros.IResolvable;

    /**
     * @Attribute EventName: Image Event Name.
     */
    public readonly attrEventName: ros.IResolvable;

    /**
     * @Attribute EventType: Image Event Type.
     */
    public readonly attrEventType: ros.IResolvable;

    /**
     * @Attribute ImageEventOperationId: The first ID of the resource.
     */
    public readonly attrImageEventOperationId: ros.IResolvable;

    /**
     * @Attribute Note: The remarks.
     */
    public readonly attrNote: ros.IResolvable;

    /**
     * @Attribute OperationCode: Event Operation Code.
     */
    public readonly attrOperationCode: ros.IResolvable;

    /**
     * @Attribute Scenarios: Event Scenarios.
     */
    public readonly attrScenarios: ros.IResolvable;

    /**
     * @Attribute Source: The source of the whitelist.
     */
    public readonly attrSource: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property conditions: The rule conditions. Specify a value in the JSON format. You can specify the following keys:
     * *   **condition**: the matching condition.
     * *   **type**: the matching type.
     * *   **value**: the matching value.
     */
    public conditions: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property eventType: Image Event Type.
     */
    public eventType: string | ros.IResolvable;

    /**
     * @Property operationCode: Event Operation Code.
     */
    public operationCode: string | ros.IResolvable;

    /**
     * @Property eventKey: The keyword of the alert item.
     */
    public eventKey: string | ros.IResolvable | undefined;

    /**
     * @Property eventName: The name of the alert item.
     */
    public eventName: string | ros.IResolvable | undefined;

    /**
     * @Property note: The remarks that you want to add.
     */
    public note: string | ros.IResolvable | undefined;

    /**
     * @Property scenarios: The application scope of the rule. The value is in the JSON format. Valid values of keys:
     * type
     * value
     * Example: {"type": "repo", "value": "test-aaa\/shenzhen-repo-01"}
     */
    public scenarios: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

    /**
     * @Property source: The source of the whitelist. Valid values:
     * *   **default**: image.
     * *   **agentless**: agentless detection.
     */
    public source: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosImageEventOperationProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosImageEventOperation.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrConditions = this.getAtt('Conditions');
        this.attrEventKey = this.getAtt('EventKey');
        this.attrEventName = this.getAtt('EventName');
        this.attrEventType = this.getAtt('EventType');
        this.attrImageEventOperationId = this.getAtt('ImageEventOperationId');
        this.attrNote = this.getAtt('Note');
        this.attrOperationCode = this.getAtt('OperationCode');
        this.attrScenarios = this.getAtt('Scenarios');
        this.attrSource = this.getAtt('Source');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.conditions = props.conditions;
        this.eventType = props.eventType;
        this.operationCode = props.operationCode;
        this.eventKey = props.eventKey;
        this.eventName = props.eventName;
        this.note = props.note;
        this.scenarios = props.scenarios;
        this.source = props.source;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            conditions: this.conditions,
            eventType: this.eventType,
            operationCode: this.operationCode,
            eventKey: this.eventKey,
            eventName: this.eventName,
            note: this.note,
            scenarios: this.scenarios,
            source: this.source,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosImageEventOperationPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
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
          allowedValues: ["PayAsYouGo","PostPaid","PayOnDemand","Postpaid","PostPay","POSTPAY","postPaid","Subscription","PrePaid","PrePay","Prepaid","PREPAY","prePaid"],
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
    errors.collect(ros.propertyValidator('sasCspm', ros.validateString)(properties.sasCspm));
    if(properties.modifyType && (typeof properties.modifyType) !== 'object') {
        errors.collect(ros.propertyValidator('modifyType', ros.validateAllowedValues)({
          data: properties.modifyType,
          allowedValues: ["Upgrade","Downgrade"],
        }));
    }
    errors.collect(ros.propertyValidator('modifyType', ros.validateString)(properties.modifyType));
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
      'PaymentType': ros.stringToRosTemplate(properties.paymentType),
      'VersionCode': ros.stringToRosTemplate(properties.versionCode),
      'BuyNumber': ros.stringToRosTemplate(properties.buyNumber),
      'ContainerImageScan': ros.stringToRosTemplate(properties.containerImageScan),
      'ContainerImageScanNew': ros.stringToRosTemplate(properties.containerImageScanNew),
      'Honeypot': ros.stringToRosTemplate(properties.honeypot),
      'HoneypotSwitch': ros.stringToRosTemplate(properties.honeypotSwitch),
      'ModifyType': ros.stringToRosTemplate(properties.modifyType),
      'Period': ros.numberToRosTemplate(properties.period),
      'ProductType': ros.stringToRosTemplate(properties.productType),
      'RaspCount': ros.stringToRosTemplate(properties.raspCount),
      'RenewalPeriodUnit': ros.stringToRosTemplate(properties.renewalPeriodUnit),
      'RenewalStatus': ros.stringToRosTemplate(properties.renewalStatus),
      'RenewPeriod': ros.numberToRosTemplate(properties.renewPeriod),
      'SasAntiRansomware': ros.stringToRosTemplate(properties.sasAntiRansomware),
      'SasCspm': ros.stringToRosTemplate(properties.sasCspm),
      'SasCspmSwitch': ros.stringToRosTemplate(properties.sasCspmSwitch),
      'SasSc': ros.stringToRosTemplate(properties.sasSc),
      'SasSdk': ros.stringToRosTemplate(properties.sasSdk),
      'SasSdkSwitch': ros.stringToRosTemplate(properties.sasSdkSwitch),
      'SasSlsStorage': ros.stringToRosTemplate(properties.sasSlsStorage),
      'SasWebguardBoolean': ros.stringToRosTemplate(properties.sasWebguardBoolean),
      'SasWebguardOrderNum': ros.stringToRosTemplate(properties.sasWebguardOrderNum),
      'ThreatAnalysis': ros.stringToRosTemplate(properties.threatAnalysis),
      'ThreatAnalysisSwitch': ros.stringToRosTemplate(properties.threatAnalysisSwitch),
      'VCore': ros.stringToRosTemplate(properties.vCore),
      'VulCount': ros.stringToRosTemplate(properties.vulCount),
      'VulSwitch': ros.stringToRosTemplate(properties.vulSwitch),
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

/**
 * Properties for defining a `RosVulWhitelist`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-vulwhitelist
 */
export interface RosVulWhitelistProps {

    /**
     * @Property targetInfo: The applicable scope of the whitelist. The value of this parameter is in the JSON format and contains the following fields:
     * *   **type**: the type of the applicable scope. Valid values:
     *     *   **GroupId**: the ID of a server group.
     *     *   **Uuid**: the UUID of a server.
     * *   **uuids**: the UUIDs of servers. This field is of the string type.
     * *   **groupIds**: the IDs of server groups. This field is of the long type.
     * >  If you leave this parameter empty, the applicable scope is all servers. If you set the **type** field to **GroupId**, you must also specify the **groupIds** field. If you set the **type** field to **Uuid**, you must also specify the **uuids** field.
     */
    readonly targetInfo: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property whitelist: The information about the vulnerability that you want to add to the whitelist. The value is a JSON string that contains the following fields:
     * *   **Status**: the status of the vulnerability.
     * *   **GmtLast**: the timestamp when the vulnerability was last detected. Unit: milliseconds.
     * *   **LaterCount**: the number of vulnerabilities that have the medium priority.
     * *   **AsapCount**: the number of vulnerabilities that have the high priority.
     * *   **Name**: the name of the vulnerability.
     * *   **Type**: the type of the vulnerability. Valid values:
     *     *   **cve**: Linux software vulnerability
     *     *   **sys**: Windows system vulnerability
     *     *   **cms**: Web-CMS vulnerability
     *     *   **app**: application vulnerability
     *     *   **emg**: urgent vulnerability
     * *   **Related**: the Common Vulnerabilities and Exposures (CVE) ID of the vulnerability.
     * *   **HandledCount**: the number of handled vulnerabilities.
     * *   **AliasName**: the alias of the vulnerability.
     * *   **RuleModifyTime**: the time when the vulnerability was last disclosed.
     * *   **NntfCount**: the number of vulnerabilities that have the low priority.
     * *   **TotalFixCount**: the total number of fixed vulnerabilities.
     * *   **Tags**: the tag that is added to the vulnerability.
     * >  You can call the [DescribeGroupedVul](~~DescribeGroupedVul~~) operation to query the information about the vulnerability that you want to add to the whitelist.
     */
    readonly whitelist: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property reason: The reason why you add the vulnerability to the whitelist.
     */
    readonly reason?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosVulWhitelistProps`
 *
 * @param properties - the TypeScript properties of a `RosVulWhitelistProps`
 *
 * @returns the result of the validation.
 */
function RosVulWhitelistPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('targetInfo', ros.requiredValidator)(properties.targetInfo));
    errors.collect(ros.propertyValidator('targetInfo', ros.hashValidator(ros.validateAny))(properties.targetInfo));
    errors.collect(ros.propertyValidator('whitelist', ros.requiredValidator)(properties.whitelist));
    errors.collect(ros.propertyValidator('whitelist', ros.hashValidator(ros.validateAny))(properties.whitelist));
    errors.collect(ros.propertyValidator('reason', ros.validateString)(properties.reason));
    return errors.wrap('supplied properties not correct for "RosVulWhitelistProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ThreatDetection::VulWhitelist` resource
 *
 * @param properties - the TypeScript properties of a `RosVulWhitelistProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ThreatDetection::VulWhitelist` resource.
 */
// @ts-ignore TS6133
function rosVulWhitelistPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosVulWhitelistPropsValidator(properties).assertSuccess();
    }
    return {
      'TargetInfo': ros.hashMapper(ros.objectToRosTemplate)(properties.targetInfo),
      'Whitelist': ros.hashMapper(ros.objectToRosTemplate)(properties.whitelist),
      'Reason': ros.stringToRosTemplate(properties.reason),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ThreatDetection::VulWhitelist`.
 * @Note This class does not contain additional functions, so it is recommended to use the `VulWhitelist` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-vulwhitelist
 */
export class RosVulWhitelist extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ThreatDetection::VulWhitelist";

    /**
     * @Attribute Reason: The reason why you add the vulnerability to the whitelist.
     */
    public readonly attrReason: ros.IResolvable;

    /**
     * @Attribute TargetInfo: The applicable scope of the whitelist.
     */
    public readonly attrTargetInfo: ros.IResolvable;

    /**
     * @Attribute VulWhitelistId: The ID of the whitelist.
     */
    public readonly attrVulWhitelistId: ros.IResolvable;

    /**
     * @Attribute Whitelist: The information about the vulnerability that you want to add to the whitelist.
     */
    public readonly attrWhitelist: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property targetInfo: The applicable scope of the whitelist. The value of this parameter is in the JSON format and contains the following fields:
     * *   **type**: the type of the applicable scope. Valid values:
     *     *   **GroupId**: the ID of a server group.
     *     *   **Uuid**: the UUID of a server.
     * *   **uuids**: the UUIDs of servers. This field is of the string type.
     * *   **groupIds**: the IDs of server groups. This field is of the long type.
     * >  If you leave this parameter empty, the applicable scope is all servers. If you set the **type** field to **GroupId**, you must also specify the **groupIds** field. If you set the **type** field to **Uuid**, you must also specify the **uuids** field.
     */
    public targetInfo: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property whitelist: The information about the vulnerability that you want to add to the whitelist. The value is a JSON string that contains the following fields:
     * *   **Status**: the status of the vulnerability.
     * *   **GmtLast**: the timestamp when the vulnerability was last detected. Unit: milliseconds.
     * *   **LaterCount**: the number of vulnerabilities that have the medium priority.
     * *   **AsapCount**: the number of vulnerabilities that have the high priority.
     * *   **Name**: the name of the vulnerability.
     * *   **Type**: the type of the vulnerability. Valid values:
     *     *   **cve**: Linux software vulnerability
     *     *   **sys**: Windows system vulnerability
     *     *   **cms**: Web-CMS vulnerability
     *     *   **app**: application vulnerability
     *     *   **emg**: urgent vulnerability
     * *   **Related**: the Common Vulnerabilities and Exposures (CVE) ID of the vulnerability.
     * *   **HandledCount**: the number of handled vulnerabilities.
     * *   **AliasName**: the alias of the vulnerability.
     * *   **RuleModifyTime**: the time when the vulnerability was last disclosed.
     * *   **NntfCount**: the number of vulnerabilities that have the low priority.
     * *   **TotalFixCount**: the total number of fixed vulnerabilities.
     * *   **Tags**: the tag that is added to the vulnerability.
     * >  You can call the [DescribeGroupedVul](~~DescribeGroupedVul~~) operation to query the information about the vulnerability that you want to add to the whitelist.
     */
    public whitelist: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property reason: The reason why you add the vulnerability to the whitelist.
     */
    public reason: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosVulWhitelistProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosVulWhitelist.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrReason = this.getAtt('Reason');
        this.attrTargetInfo = this.getAtt('TargetInfo');
        this.attrVulWhitelistId = this.getAtt('VulWhitelistId');
        this.attrWhitelist = this.getAtt('Whitelist');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.targetInfo = props.targetInfo;
        this.whitelist = props.whitelist;
        this.reason = props.reason;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            targetInfo: this.targetInfo,
            whitelist: this.whitelist,
            reason: this.reason,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosVulWhitelistPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosWebLockConfig`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-weblockconfig
 */
export interface RosWebLockConfigProps {

    /**
     * @Property defenceMode: The prevention mode. Valid values:
     * *   **block**: Interception Mode
     * *   **audit**: Alert Mode.
     */
    readonly defenceMode: string | ros.IResolvable;

    /**
     * @Property dir: The directory for which you want to enable web tamper proofing.
     */
    readonly dir: string | ros.IResolvable;

    /**
     * @Property localBackupDir: The local path to the backup files of the protected directory.\
     * The directory format of a Linux server is different from that of a Windows server. You must enter the directory in the required format based on your operating system. Examples:
     * *   Linux server: \/usr\/local\/aegis\/bak
     * *   Windows server: C:\Program Files (x86)\xxx\Aegis\bak.
     */
    readonly localBackupDir: string | ros.IResolvable;

    /**
     * @Property uuid: The UUID of the server for which you want to add a directory to protect.
     * > You can call the [DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~) operation to query the UUIDs of servers.
     */
    readonly uuid: string | ros.IResolvable;

    /**
     * @Property exclusiveDir: The directory for which you want to disable web tamper proofing.
     * > If you set **Mode** to **blacklist**, you must specify this parameter.
     */
    readonly exclusiveDir?: string | ros.IResolvable;

    /**
     * @Property exclusiveFile: The file for which you want to disable web tamper proofing.
     * > If you set **Mode** to **blacklist**, you must specify this parameter.
     */
    readonly exclusiveFile?: string | ros.IResolvable;

    /**
     * @Property exclusiveFileType: The type of file for which you want to disable web tamper proofing. Separate multiple types with semicolons (;). Valid values:
     * *   php
     * *   jsp
     * *   asp
     * *   aspx
     * *   js
     * *   cgi
     * *   html
     * *   htm
     * *   xml
     * *   shtml
     * *   shtm
     * *   jpg
     * *   gif
     * *   png
     * > If you set **Mode** to **blacklist**, you must specify this parameter.
     */
    readonly exclusiveFileType?: string | ros.IResolvable;

    /**
     * @Property inclusiveFile: The file that has web tamper proofing enabled.
     * > If the value of **Mode** is **whitelist**, this parameter is returned.
     */
    readonly inclusiveFile?: string | ros.IResolvable;

    /**
     * @Property inclusiveFileType: The type of file for which you want to enable web tamper proofing. Separate multiple types with semicolons (;). Valid values:
     * *   php
     * *   jsp
     * *   asp
     * *   aspx
     * *   js
     * *   cgi
     * *   html
     * *   htm
     * *   xml
     * *   shtml
     * *   shtm
     * *   jpg
     * *   gif
     * *   png
     * > If you set **Mode** to **whitelist**, you must specify this parameter.
     */
    readonly inclusiveFileType?: string | ros.IResolvable;

    /**
     * @Property mode: The protection mode of web tamper proofing. Valid values:
     * *   **whitelist**: In this mode, web tamper proofing is enabled for the specified directories and file types.
     * *   **blacklist**: In this mode, web tamper proofing is enabled for the unspecified sub-directories, file types, and files in the protected directories.
     */
    readonly mode?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosWebLockConfigProps`
 *
 * @param properties - the TypeScript properties of a `RosWebLockConfigProps`
 *
 * @returns the result of the validation.
 */
function RosWebLockConfigPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('inclusiveFileType', ros.validateString)(properties.inclusiveFileType));
    errors.collect(ros.propertyValidator('exclusiveFile', ros.validateString)(properties.exclusiveFile));
    errors.collect(ros.propertyValidator('uuid', ros.requiredValidator)(properties.uuid));
    errors.collect(ros.propertyValidator('uuid', ros.validateString)(properties.uuid));
    errors.collect(ros.propertyValidator('exclusiveDir', ros.validateString)(properties.exclusiveDir));
    errors.collect(ros.propertyValidator('defenceMode', ros.requiredValidator)(properties.defenceMode));
    if(properties.defenceMode && (typeof properties.defenceMode) !== 'object') {
        errors.collect(ros.propertyValidator('defenceMode', ros.validateAllowedValues)({
          data: properties.defenceMode,
          allowedValues: ["block","audit"],
        }));
    }
    errors.collect(ros.propertyValidator('defenceMode', ros.validateString)(properties.defenceMode));
    if(properties.mode && (typeof properties.mode) !== 'object') {
        errors.collect(ros.propertyValidator('mode', ros.validateAllowedValues)({
          data: properties.mode,
          allowedValues: ["whitelist","blacklist"],
        }));
    }
    errors.collect(ros.propertyValidator('mode', ros.validateString)(properties.mode));
    errors.collect(ros.propertyValidator('localBackupDir', ros.requiredValidator)(properties.localBackupDir));
    errors.collect(ros.propertyValidator('localBackupDir', ros.validateString)(properties.localBackupDir));
    errors.collect(ros.propertyValidator('exclusiveFileType', ros.validateString)(properties.exclusiveFileType));
    errors.collect(ros.propertyValidator('dir', ros.requiredValidator)(properties.dir));
    errors.collect(ros.propertyValidator('dir', ros.validateString)(properties.dir));
    errors.collect(ros.propertyValidator('inclusiveFile', ros.validateString)(properties.inclusiveFile));
    return errors.wrap('supplied properties not correct for "RosWebLockConfigProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ThreatDetection::WebLockConfig` resource
 *
 * @param properties - the TypeScript properties of a `RosWebLockConfigProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ThreatDetection::WebLockConfig` resource.
 */
// @ts-ignore TS6133
function rosWebLockConfigPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosWebLockConfigPropsValidator(properties).assertSuccess();
    }
    return {
      'DefenceMode': ros.stringToRosTemplate(properties.defenceMode),
      'Dir': ros.stringToRosTemplate(properties.dir),
      'LocalBackupDir': ros.stringToRosTemplate(properties.localBackupDir),
      'Uuid': ros.stringToRosTemplate(properties.uuid),
      'ExclusiveDir': ros.stringToRosTemplate(properties.exclusiveDir),
      'ExclusiveFile': ros.stringToRosTemplate(properties.exclusiveFile),
      'ExclusiveFileType': ros.stringToRosTemplate(properties.exclusiveFileType),
      'InclusiveFile': ros.stringToRosTemplate(properties.inclusiveFile),
      'InclusiveFileType': ros.stringToRosTemplate(properties.inclusiveFileType),
      'Mode': ros.stringToRosTemplate(properties.mode),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ThreatDetection::WebLockConfig`.
 * @Note This class does not contain additional functions, so it is recommended to use the `WebLockConfig` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-weblockconfig
 */
export class RosWebLockConfig extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ThreatDetection::WebLockConfig";

    /**
     * @Attribute ConfigId: The configuration ID of the protected directory.
     */
    public readonly attrConfigId: ros.IResolvable;

    /**
     * @Attribute DefenceMode: The prevention mode.
     */
    public readonly attrDefenceMode: ros.IResolvable;

    /**
     * @Attribute Dir: The directory for which you want to enable web tamper proofing.
     */
    public readonly attrDir: ros.IResolvable;

    /**
     * @Attribute ExclusiveDir: The directory for which you want to disable web tamper proofing.
     */
    public readonly attrExclusiveDir: ros.IResolvable;

    /**
     * @Attribute ExclusiveFile: The file for which you want to disable web tamper proofing.
     */
    public readonly attrExclusiveFile: ros.IResolvable;

    /**
     * @Attribute ExclusiveFileType: The type of file for which you want to disable web tamper proofing. Separate multiple types with semicolons (;).
     */
    public readonly attrExclusiveFileType: ros.IResolvable;

    /**
     * @Attribute InclusiveFile: The file that has web tamper proofing enabled.
     */
    public readonly attrInclusiveFile: ros.IResolvable;

    /**
     * @Attribute InclusiveFileType: The type of file for which you want to enable web tamper proofing. Separate multiple types with semicolons (;).
     */
    public readonly attrInclusiveFileType: ros.IResolvable;

    /**
     * @Attribute LocalBackupDir: The local path to the backup files of the protected directory.
     */
    public readonly attrLocalBackupDir: ros.IResolvable;

    /**
     * @Attribute Mode: The protection mode of web tamper proofing.
     */
    public readonly attrMode: ros.IResolvable;

    /**
     * @Attribute Uuid: The UUID of the server for which you want to add a directory to protect.
     */
    public readonly attrUuid: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property defenceMode: The prevention mode. Valid values:
     * *   **block**: Interception Mode
     * *   **audit**: Alert Mode.
     */
    public defenceMode: string | ros.IResolvable;

    /**
     * @Property dir: The directory for which you want to enable web tamper proofing.
     */
    public dir: string | ros.IResolvable;

    /**
     * @Property localBackupDir: The local path to the backup files of the protected directory.\
     * The directory format of a Linux server is different from that of a Windows server. You must enter the directory in the required format based on your operating system. Examples:
     * *   Linux server: \/usr\/local\/aegis\/bak
     * *   Windows server: C:\Program Files (x86)\xxx\Aegis\bak.
     */
    public localBackupDir: string | ros.IResolvable;

    /**
     * @Property uuid: The UUID of the server for which you want to add a directory to protect.
     * > You can call the [DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~) operation to query the UUIDs of servers.
     */
    public uuid: string | ros.IResolvable;

    /**
     * @Property exclusiveDir: The directory for which you want to disable web tamper proofing.
     * > If you set **Mode** to **blacklist**, you must specify this parameter.
     */
    public exclusiveDir: string | ros.IResolvable | undefined;

    /**
     * @Property exclusiveFile: The file for which you want to disable web tamper proofing.
     * > If you set **Mode** to **blacklist**, you must specify this parameter.
     */
    public exclusiveFile: string | ros.IResolvable | undefined;

    /**
     * @Property exclusiveFileType: The type of file for which you want to disable web tamper proofing. Separate multiple types with semicolons (;). Valid values:
     * *   php
     * *   jsp
     * *   asp
     * *   aspx
     * *   js
     * *   cgi
     * *   html
     * *   htm
     * *   xml
     * *   shtml
     * *   shtm
     * *   jpg
     * *   gif
     * *   png
     * > If you set **Mode** to **blacklist**, you must specify this parameter.
     */
    public exclusiveFileType: string | ros.IResolvable | undefined;

    /**
     * @Property inclusiveFile: The file that has web tamper proofing enabled.
     * > If the value of **Mode** is **whitelist**, this parameter is returned.
     */
    public inclusiveFile: string | ros.IResolvable | undefined;

    /**
     * @Property inclusiveFileType: The type of file for which you want to enable web tamper proofing. Separate multiple types with semicolons (;). Valid values:
     * *   php
     * *   jsp
     * *   asp
     * *   aspx
     * *   js
     * *   cgi
     * *   html
     * *   htm
     * *   xml
     * *   shtml
     * *   shtm
     * *   jpg
     * *   gif
     * *   png
     * > If you set **Mode** to **whitelist**, you must specify this parameter.
     */
    public inclusiveFileType: string | ros.IResolvable | undefined;

    /**
     * @Property mode: The protection mode of web tamper proofing. Valid values:
     * *   **whitelist**: In this mode, web tamper proofing is enabled for the specified directories and file types.
     * *   **blacklist**: In this mode, web tamper proofing is enabled for the unspecified sub-directories, file types, and files in the protected directories.
     */
    public mode: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosWebLockConfigProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosWebLockConfig.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrConfigId = this.getAtt('ConfigId');
        this.attrDefenceMode = this.getAtt('DefenceMode');
        this.attrDir = this.getAtt('Dir');
        this.attrExclusiveDir = this.getAtt('ExclusiveDir');
        this.attrExclusiveFile = this.getAtt('ExclusiveFile');
        this.attrExclusiveFileType = this.getAtt('ExclusiveFileType');
        this.attrInclusiveFile = this.getAtt('InclusiveFile');
        this.attrInclusiveFileType = this.getAtt('InclusiveFileType');
        this.attrLocalBackupDir = this.getAtt('LocalBackupDir');
        this.attrMode = this.getAtt('Mode');
        this.attrUuid = this.getAtt('Uuid');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.defenceMode = props.defenceMode;
        this.dir = props.dir;
        this.localBackupDir = props.localBackupDir;
        this.uuid = props.uuid;
        this.exclusiveDir = props.exclusiveDir;
        this.exclusiveFile = props.exclusiveFile;
        this.exclusiveFileType = props.exclusiveFileType;
        this.inclusiveFile = props.inclusiveFile;
        this.inclusiveFileType = props.inclusiveFileType;
        this.mode = props.mode;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            defenceMode: this.defenceMode,
            dir: this.dir,
            localBackupDir: this.localBackupDir,
            uuid: this.uuid,
            exclusiveDir: this.exclusiveDir,
            exclusiveFile: this.exclusiveFile,
            exclusiveFileType: this.exclusiveFileType,
            inclusiveFile: this.inclusiveFile,
            inclusiveFileType: this.inclusiveFileType,
            mode: this.mode,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosWebLockConfigPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
