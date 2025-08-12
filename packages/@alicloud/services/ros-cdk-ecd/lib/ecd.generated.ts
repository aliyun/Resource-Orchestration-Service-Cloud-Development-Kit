// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosBundle`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecd-bundle
 */
export interface RosBundleProps {

    /**
     * @Property desktopType: Desktop specifications.You can call Describundles to query the desktop bundle and get the currently supported desktop specification from the returned desktopType.
     * Explain that ordinary mirrors cannot choose the GPU specifications, and the GPU type mirror can only choose the GPU specification.
     */
    readonly desktopType: string | ros.IResolvable;

    /**
     * @Property imageId: The ID of the image.
     */
    readonly imageId: string | ros.IResolvable;

    /**
     * @Property rootDiskSizeGib: The root disk size gib.
     */
    readonly rootDiskSizeGib: number | ros.IResolvable;

    /**
     * @Property userDiskSizeGib: The size of the data disk. Currently, only one data disk can be set. Unit: GiB.
     * - The size of the data disk that supports the setting corresponds to the specification.
     * - The data disk size (user_disk_size_gib) set in the template must be greater than the data disk size (data_disk_size) in the mirror.
     */
    readonly userDiskSizeGib: Array<number | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property bundleName: The name of the bundle.
     */
    readonly bundleName?: string | ros.IResolvable;

    /**
     * @Property description: The description of the bundle.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property language: The language. Valid values:
     * zh-CN: Simplified Chinese
     * zh-HK: Traditional Chinese (Hong Kong)
     * en-US: English
     * ja-JP: Japanese
     */
    readonly language?: string | ros.IResolvable;

    /**
     * @Property rootDiskPerformanceLevel: The root disk performance level. Valid values:
     * PL0
     * PL1
     * PL2
     * PL3
     *
     */
    readonly rootDiskPerformanceLevel?: string | ros.IResolvable;

    /**
     * @Property userDiskPerformanceLevel: The user disk performance level.Valid values:
     * PL0
     * PL1
     * PL2
     * PL3
     *
     */
    readonly userDiskPerformanceLevel?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosBundleProps`
 *
 * @param properties - the TypeScript properties of a `RosBundleProps`
 *
 * @returns the result of the validation.
 */
function RosBundlePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('rootDiskSizeGib', ros.requiredValidator)(properties.rootDiskSizeGib));
    errors.collect(ros.propertyValidator('rootDiskSizeGib', ros.validateNumber)(properties.rootDiskSizeGib));
    if(properties.language && (typeof properties.language) !== 'object') {
        errors.collect(ros.propertyValidator('language', ros.validateAllowedValues)({
          data: properties.language,
          allowedValues: ["zh-CN","zh-HK","en-US","ja-JP"],
        }));
    }
    errors.collect(ros.propertyValidator('language', ros.validateString)(properties.language));
    if(properties.rootDiskPerformanceLevel && (typeof properties.rootDiskPerformanceLevel) !== 'object') {
        errors.collect(ros.propertyValidator('rootDiskPerformanceLevel', ros.validateAllowedValues)({
          data: properties.rootDiskPerformanceLevel,
          allowedValues: ["PL0","PL1","PL2","PL3"],
        }));
    }
    errors.collect(ros.propertyValidator('rootDiskPerformanceLevel', ros.validateString)(properties.rootDiskPerformanceLevel));
    errors.collect(ros.propertyValidator('desktopType', ros.requiredValidator)(properties.desktopType));
    errors.collect(ros.propertyValidator('desktopType', ros.validateString)(properties.desktopType));
    errors.collect(ros.propertyValidator('bundleName', ros.validateString)(properties.bundleName));
    errors.collect(ros.propertyValidator('imageId', ros.requiredValidator)(properties.imageId));
    errors.collect(ros.propertyValidator('imageId', ros.validateString)(properties.imageId));
    if(properties.userDiskPerformanceLevel && (typeof properties.userDiskPerformanceLevel) !== 'object') {
        errors.collect(ros.propertyValidator('userDiskPerformanceLevel', ros.validateAllowedValues)({
          data: properties.userDiskPerformanceLevel,
          allowedValues: ["PL0","PL1","PL2","PL3"],
        }));
    }
    errors.collect(ros.propertyValidator('userDiskPerformanceLevel', ros.validateString)(properties.userDiskPerformanceLevel));
    errors.collect(ros.propertyValidator('userDiskSizeGib', ros.requiredValidator)(properties.userDiskSizeGib));
    if(properties.userDiskSizeGib && (Array.isArray(properties.userDiskSizeGib) || (typeof properties.userDiskSizeGib) === 'string')) {
        errors.collect(ros.propertyValidator('userDiskSizeGib', ros.validateLength)({
            data: properties.userDiskSizeGib.length,
            min: undefined,
            max: 1,
          }));
    }
    errors.collect(ros.propertyValidator('userDiskSizeGib', ros.listValidator(ros.validateNumber))(properties.userDiskSizeGib));
    return errors.wrap('supplied properties not correct for "RosBundleProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECD::Bundle` resource
 *
 * @param properties - the TypeScript properties of a `RosBundleProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECD::Bundle` resource.
 */
// @ts-ignore TS6133
function rosBundlePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosBundlePropsValidator(properties).assertSuccess();
    }
    return {
      'DesktopType': ros.stringToRosTemplate(properties.desktopType),
      'ImageId': ros.stringToRosTemplate(properties.imageId),
      'RootDiskSizeGib': ros.numberToRosTemplate(properties.rootDiskSizeGib),
      'UserDiskSizeGib': ros.listMapper(ros.numberToRosTemplate)(properties.userDiskSizeGib),
      'BundleName': ros.stringToRosTemplate(properties.bundleName),
      'Description': ros.stringToRosTemplate(properties.description),
      'Language': ros.stringToRosTemplate(properties.language),
      'RootDiskPerformanceLevel': ros.stringToRosTemplate(properties.rootDiskPerformanceLevel),
      'UserDiskPerformanceLevel': ros.stringToRosTemplate(properties.userDiskPerformanceLevel),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECD::Bundle`, which is used to create a custom cloud computer template.
 * @Note This class does not contain additional functions, so it is recommended to use the `Bundle` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecd-bundle
 */
export class RosBundle extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECD::Bundle";

    /**
     * @Attribute BundleId: Desktop bundle ID.
     */
    public readonly attrBundleId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property desktopType: Desktop specifications.You can call Describundles to query the desktop bundle and get the currently supported desktop specification from the returned desktopType.
     * Explain that ordinary mirrors cannot choose the GPU specifications, and the GPU type mirror can only choose the GPU specification.
     */
    public desktopType: string | ros.IResolvable;

    /**
     * @Property imageId: The ID of the image.
     */
    public imageId: string | ros.IResolvable;

    /**
     * @Property rootDiskSizeGib: The root disk size gib.
     */
    public rootDiskSizeGib: number | ros.IResolvable;

    /**
     * @Property userDiskSizeGib: The size of the data disk. Currently, only one data disk can be set. Unit: GiB.
     * - The size of the data disk that supports the setting corresponds to the specification.
     * - The data disk size (user_disk_size_gib) set in the template must be greater than the data disk size (data_disk_size) in the mirror.
     */
    public userDiskSizeGib: Array<number | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property bundleName: The name of the bundle.
     */
    public bundleName: string | ros.IResolvable | undefined;

    /**
     * @Property description: The description of the bundle.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property language: The language. Valid values:
     * zh-CN: Simplified Chinese
     * zh-HK: Traditional Chinese (Hong Kong)
     * en-US: English
     * ja-JP: Japanese
     */
    public language: string | ros.IResolvable | undefined;

    /**
     * @Property rootDiskPerformanceLevel: The root disk performance level. Valid values:
     * PL0
     * PL1
     * PL2
     * PL3
     *
     */
    public rootDiskPerformanceLevel: string | ros.IResolvable | undefined;

    /**
     * @Property userDiskPerformanceLevel: The user disk performance level.Valid values:
     * PL0
     * PL1
     * PL2
     * PL3
     *
     */
    public userDiskPerformanceLevel: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosBundleProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosBundle.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrBundleId = this.getAtt('BundleId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.desktopType = props.desktopType;
        this.imageId = props.imageId;
        this.rootDiskSizeGib = props.rootDiskSizeGib;
        this.userDiskSizeGib = props.userDiskSizeGib;
        this.bundleName = props.bundleName;
        this.description = props.description;
        this.language = props.language;
        this.rootDiskPerformanceLevel = props.rootDiskPerformanceLevel;
        this.userDiskPerformanceLevel = props.userDiskPerformanceLevel;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            desktopType: this.desktopType,
            imageId: this.imageId,
            rootDiskSizeGib: this.rootDiskSizeGib,
            userDiskSizeGib: this.userDiskSizeGib,
            bundleName: this.bundleName,
            description: this.description,
            language: this.language,
            rootDiskPerformanceLevel: this.rootDiskPerformanceLevel,
            userDiskPerformanceLevel: this.userDiskPerformanceLevel,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosBundlePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosDesktopGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecd-desktopgroup
 */
export interface RosDesktopGroupProps {

    /**
     * @Property bundleId: The ID of the desktop template.
     */
    readonly bundleId: string | ros.IResolvable;

    /**
     * @Property chargeType: The billing method of the cloud desktops in the desktop group.  Enumeration Value:
     * PostPaid
     * PrePaid
     */
    readonly chargeType: string | ros.IResolvable;

    /**
     * @Property officeSiteId: The ID of the workspace.
     */
    readonly officeSiteId: string | ros.IResolvable;

    /**
     * @Property policyGroupId: The ID of the policy.
     */
    readonly policyGroupId: string | ros.IResolvable;

    /**
     * @Property allowAutoSetup: Specifies whether to automatically create cloud desktops in the desktop group if you set the billing method to subscription. If you set the ChargeType parameter to PrePaid, this parameter is required.
     */
    readonly allowAutoSetup?: number | ros.IResolvable;

    /**
     * @Property allowBufferCount: Specifies whether to reserve cloud desktops if you set the billing method to pay-as-you-go. If you set the ChargeType parameter to PostPaid, this parameter is required. Valid values: 0: does not allow the system to reserve cloud desktops. N: allows the system to reserve N cloud desktops. The variable N must be an integer that ranges from 1 to 100.
     */
    readonly allowBufferCount?: number | ros.IResolvable;

    /**
     * @Property autoPay: Specifies whether to enable automatic payment.
     */
    readonly autoPay?: boolean | ros.IResolvable;

    /**
     * @Property autoRenew: Specifies whether to enable auto-renewal.
     */
    readonly autoRenew?: boolean | ros.IResolvable;

    /**
     * @Property buyDesktopsCount: The number of cloud desktops that you want to purchase. Valid values: 0 to 200.
     */
    readonly buyDesktopsCount?: number | ros.IResolvable;

    /**
     * @Property comments: The remarks on the desktop group.
     */
    readonly comments?: string | ros.IResolvable;

    /**
     * @Property connectDuration: The maximum period of time during which the session is connected. When the specified maximum period of time is reached, the session automatically disconnects. Unit: milliseconds. This parameter is required only for cloud desktops in the same desktop group.
     */
    readonly connectDuration?: number | ros.IResolvable;

    /**
     * @Property defaultInitDesktopCount: The default number of cloud desktops to create when you create the desktop group. Default value: 1.
     */
    readonly defaultInitDesktopCount?: number | ros.IResolvable;

    /**
     * @Property desktopGroupName: The name of the desktop group.
     */
    readonly desktopGroupName?: string | ros.IResolvable;

    /**
     * @Property endUserIds: The end users that can use the desktop group.
     */
    readonly endUserIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property groupVersion: The desktop group version.
     */
    readonly groupVersion?: number | ros.IResolvable;

    /**
     * @Property idleDisconnectDuration: The maximum period of time for which a session remains idle. If an end user performs no operations on a cloud desktop by using keyboards or mouses during a session, the session becomes idle. When the specified maximum period of time is reached, the session automatically disconnects. Unit: milliseconds. This parameter is required only for cloud desktops in the same desktop group.
     */
    readonly idleDisconnectDuration?: number | ros.IResolvable;

    /**
     * @Property keepDuration: The retention period of the cloud desktop after the end user disconnects from the cloud desktop. Unit: milliseconds.
     */
    readonly keepDuration?: number | ros.IResolvable;

    /**
     * @Property maxDesktopsCount: The maximum number of cloud desktops that the desktop group can contain. Valid values: 0 to 200.
     */
    readonly maxDesktopsCount?: number | ros.IResolvable;

    /**
     * @Property minDesktopsCount: The minimum number of cloud desktops that must be contained in the desktop group if you set the billing method to subscription. If you set the ChargeType parameter to PrePaid, this parameter is required. Valid values: 0 to the value of MaxDesktopsCount. Default value: 1.
     */
    readonly minDesktopsCount?: number | ros.IResolvable;

    /**
     * @Property period: The subscription period of the cloud desktops in the desktop group. The unit is specified by the PeriodUnit parameter. The Period parameter takes effect only if you set the ChargeType parameter to PrePaid.
     * Valid values if you set the PeriodUnit parameter to Month: 1, 2, 3, 6
     * Valid values if you set the PeriodUnit parameter to Year:  1, 2, 3, 4, 5
     */
    readonly period?: number | ros.IResolvable;

    /**
     * @Property periodUnit: Whether to open CA
     */
    readonly periodUnit?: string | ros.IResolvable;

    /**
     * @Property resetType: Specifies which type of the disk to reset for cloud desktops in the desktop group.
     */
    readonly resetType?: number | ros.IResolvable;

    /**
     * @Property stopDuration: The period of time before the idle cloud desktop is stopped. When the specified period of time is reached, the idle cloud desktop automatically stops. If an end user connects to a stopped cloud desktop, the cloud desktop automatically starts. Unit: milliseconds.
     */
    readonly stopDuration?: number | ros.IResolvable;

    /**
     * @Property volumeEncryptionEnabled: Specifies whether to enable disk encryption.
     */
    readonly volumeEncryptionEnabled?: boolean | ros.IResolvable;

    /**
     * @Property volumeEncryptionKey: The ID of the Key Management Service (KMS) key that you want to use when disk encryption is enabled.
     */
    readonly volumeEncryptionKey?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDesktopGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosDesktopGroupProps`
 *
 * @returns the result of the validation.
 */
function RosDesktopGroupPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.connectDuration && (typeof properties.connectDuration) !== 'object') {
        errors.collect(ros.propertyValidator('connectDuration', ros.validateRange)({
            data: properties.connectDuration,
            min: 900000,
            max: 345600000,
          }));
    }
    errors.collect(ros.propertyValidator('connectDuration', ros.validateNumber)(properties.connectDuration));
    errors.collect(ros.propertyValidator('desktopGroupName', ros.validateString)(properties.desktopGroupName));
    errors.collect(ros.propertyValidator('autoRenew', ros.validateBoolean)(properties.autoRenew));
    errors.collect(ros.propertyValidator('volumeEncryptionEnabled', ros.validateBoolean)(properties.volumeEncryptionEnabled));
    if(properties.allowBufferCount && (typeof properties.allowBufferCount) !== 'object') {
        errors.collect(ros.propertyValidator('allowBufferCount', ros.validateRange)({
            data: properties.allowBufferCount,
            min: 0,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('allowBufferCount', ros.validateNumber)(properties.allowBufferCount));
    errors.collect(ros.propertyValidator('groupVersion', ros.validateNumber)(properties.groupVersion));
    if(properties.keepDuration && (typeof properties.keepDuration) !== 'object') {
        errors.collect(ros.propertyValidator('keepDuration', ros.validateRange)({
            data: properties.keepDuration,
            min: 180000,
            max: 345600000,
          }));
    }
    errors.collect(ros.propertyValidator('keepDuration', ros.validateNumber)(properties.keepDuration));
    if(properties.idleDisconnectDuration && (typeof properties.idleDisconnectDuration) !== 'object') {
        errors.collect(ros.propertyValidator('idleDisconnectDuration', ros.validateRange)({
            data: properties.idleDisconnectDuration,
            min: 360000,
            max: 3600000,
          }));
    }
    errors.collect(ros.propertyValidator('idleDisconnectDuration', ros.validateNumber)(properties.idleDisconnectDuration));
    if(properties.maxDesktopsCount && (typeof properties.maxDesktopsCount) !== 'object') {
        errors.collect(ros.propertyValidator('maxDesktopsCount', ros.validateRange)({
            data: properties.maxDesktopsCount,
            min: 0,
            max: 200,
          }));
    }
    errors.collect(ros.propertyValidator('maxDesktopsCount', ros.validateNumber)(properties.maxDesktopsCount));
    if(properties.resetType && (typeof properties.resetType) !== 'object') {
        errors.collect(ros.propertyValidator('resetType', ros.validateRange)({
            data: properties.resetType,
            min: 0,
            max: 3,
          }));
    }
    errors.collect(ros.propertyValidator('resetType', ros.validateNumber)(properties.resetType));
    if(properties.minDesktopsCount && (typeof properties.minDesktopsCount) !== 'object') {
        errors.collect(ros.propertyValidator('minDesktopsCount', ros.validateRange)({
            data: properties.minDesktopsCount,
            min: 1,
            max: 500,
          }));
    }
    errors.collect(ros.propertyValidator('minDesktopsCount', ros.validateNumber)(properties.minDesktopsCount));
    errors.collect(ros.propertyValidator('comments', ros.validateString)(properties.comments));
    errors.collect(ros.propertyValidator('policyGroupId', ros.requiredValidator)(properties.policyGroupId));
    errors.collect(ros.propertyValidator('policyGroupId', ros.validateString)(properties.policyGroupId));
    if(properties.endUserIds && (Array.isArray(properties.endUserIds) || (typeof properties.endUserIds) === 'string')) {
        errors.collect(ros.propertyValidator('endUserIds', ros.validateLength)({
            data: properties.endUserIds.length,
            min: 0,
            max: 1000,
          }));
    }
    errors.collect(ros.propertyValidator('endUserIds', ros.listValidator(ros.validateString))(properties.endUserIds));
    if(properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateRange)({
            data: properties.period,
            min: 1,
            max: 6,
          }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    if(properties.defaultInitDesktopCount && (typeof properties.defaultInitDesktopCount) !== 'object') {
        errors.collect(ros.propertyValidator('defaultInitDesktopCount', ros.validateRange)({
            data: properties.defaultInitDesktopCount,
            min: 1,
            max: 1000,
          }));
    }
    errors.collect(ros.propertyValidator('defaultInitDesktopCount', ros.validateNumber)(properties.defaultInitDesktopCount));
    errors.collect(ros.propertyValidator('autoPay', ros.validateBoolean)(properties.autoPay));
    errors.collect(ros.propertyValidator('officeSiteId', ros.requiredValidator)(properties.officeSiteId));
    errors.collect(ros.propertyValidator('officeSiteId', ros.validateString)(properties.officeSiteId));
    errors.collect(ros.propertyValidator('bundleId', ros.requiredValidator)(properties.bundleId));
    errors.collect(ros.propertyValidator('bundleId', ros.validateString)(properties.bundleId));
    errors.collect(ros.propertyValidator('stopDuration', ros.validateNumber)(properties.stopDuration));
    errors.collect(ros.propertyValidator('chargeType', ros.requiredValidator)(properties.chargeType));
    if(properties.chargeType && (typeof properties.chargeType) !== 'object') {
        errors.collect(ros.propertyValidator('chargeType', ros.validateAllowedValues)({
          data: properties.chargeType,
          allowedValues: ["PostPaid","PrePaid"],
        }));
    }
    errors.collect(ros.propertyValidator('chargeType', ros.validateString)(properties.chargeType));
    errors.collect(ros.propertyValidator('volumeEncryptionKey', ros.validateString)(properties.volumeEncryptionKey));
    if(properties.allowAutoSetup && (typeof properties.allowAutoSetup) !== 'object') {
        errors.collect(ros.propertyValidator('allowAutoSetup', ros.validateRange)({
            data: properties.allowAutoSetup,
            min: 0,
            max: 1,
          }));
    }
    errors.collect(ros.propertyValidator('allowAutoSetup', ros.validateNumber)(properties.allowAutoSetup));
    if(properties.buyDesktopsCount && (typeof properties.buyDesktopsCount) !== 'object') {
        errors.collect(ros.propertyValidator('buyDesktopsCount', ros.validateRange)({
            data: properties.buyDesktopsCount,
            min: 0,
            max: 200,
          }));
    }
    errors.collect(ros.propertyValidator('buyDesktopsCount', ros.validateNumber)(properties.buyDesktopsCount));
    if(properties.periodUnit && (typeof properties.periodUnit) !== 'object') {
        errors.collect(ros.propertyValidator('periodUnit', ros.validateAllowedValues)({
          data: properties.periodUnit,
          allowedValues: ["Month","Year"],
        }));
    }
    errors.collect(ros.propertyValidator('periodUnit', ros.validateString)(properties.periodUnit));
    return errors.wrap('supplied properties not correct for "RosDesktopGroupProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECD::DesktopGroup` resource
 *
 * @param properties - the TypeScript properties of a `RosDesktopGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECD::DesktopGroup` resource.
 */
// @ts-ignore TS6133
function rosDesktopGroupPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDesktopGroupPropsValidator(properties).assertSuccess();
    }
    return {
      'BundleId': ros.stringToRosTemplate(properties.bundleId),
      'ChargeType': ros.stringToRosTemplate(properties.chargeType),
      'OfficeSiteId': ros.stringToRosTemplate(properties.officeSiteId),
      'PolicyGroupId': ros.stringToRosTemplate(properties.policyGroupId),
      'AllowAutoSetup': ros.numberToRosTemplate(properties.allowAutoSetup),
      'AllowBufferCount': ros.numberToRosTemplate(properties.allowBufferCount),
      'AutoPay': ros.booleanToRosTemplate(properties.autoPay),
      'AutoRenew': ros.booleanToRosTemplate(properties.autoRenew),
      'BuyDesktopsCount': ros.numberToRosTemplate(properties.buyDesktopsCount),
      'Comments': ros.stringToRosTemplate(properties.comments),
      'ConnectDuration': ros.numberToRosTemplate(properties.connectDuration),
      'DefaultInitDesktopCount': ros.numberToRosTemplate(properties.defaultInitDesktopCount),
      'DesktopGroupName': ros.stringToRosTemplate(properties.desktopGroupName),
      'EndUserIds': ros.listMapper(ros.stringToRosTemplate)(properties.endUserIds),
      'GroupVersion': ros.numberToRosTemplate(properties.groupVersion),
      'IdleDisconnectDuration': ros.numberToRosTemplate(properties.idleDisconnectDuration),
      'KeepDuration': ros.numberToRosTemplate(properties.keepDuration),
      'MaxDesktopsCount': ros.numberToRosTemplate(properties.maxDesktopsCount),
      'MinDesktopsCount': ros.numberToRosTemplate(properties.minDesktopsCount),
      'Period': ros.numberToRosTemplate(properties.period),
      'PeriodUnit': ros.stringToRosTemplate(properties.periodUnit),
      'ResetType': ros.numberToRosTemplate(properties.resetType),
      'StopDuration': ros.numberToRosTemplate(properties.stopDuration),
      'VolumeEncryptionEnabled': ros.booleanToRosTemplate(properties.volumeEncryptionEnabled),
      'VolumeEncryptionKey': ros.stringToRosTemplate(properties.volumeEncryptionKey),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECD::DesktopGroup`, which is used to create a cloud computer pool.
 * @Note This class does not contain additional functions, so it is recommended to use the `DesktopGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecd-desktopgroup
 */
export class RosDesktopGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECD::DesktopGroup";

    /**
     * @Attribute DesktopGroupId: Id of created DesktopGroup
     */
    public readonly attrDesktopGroupId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property bundleId: The ID of the desktop template.
     */
    public bundleId: string | ros.IResolvable;

    /**
     * @Property chargeType: The billing method of the cloud desktops in the desktop group.  Enumeration Value:
     * PostPaid
     * PrePaid
     */
    public chargeType: string | ros.IResolvable;

    /**
     * @Property officeSiteId: The ID of the workspace.
     */
    public officeSiteId: string | ros.IResolvable;

    /**
     * @Property policyGroupId: The ID of the policy.
     */
    public policyGroupId: string | ros.IResolvable;

    /**
     * @Property allowAutoSetup: Specifies whether to automatically create cloud desktops in the desktop group if you set the billing method to subscription. If you set the ChargeType parameter to PrePaid, this parameter is required.
     */
    public allowAutoSetup: number | ros.IResolvable | undefined;

    /**
     * @Property allowBufferCount: Specifies whether to reserve cloud desktops if you set the billing method to pay-as-you-go. If you set the ChargeType parameter to PostPaid, this parameter is required. Valid values: 0: does not allow the system to reserve cloud desktops. N: allows the system to reserve N cloud desktops. The variable N must be an integer that ranges from 1 to 100.
     */
    public allowBufferCount: number | ros.IResolvable | undefined;

    /**
     * @Property autoPay: Specifies whether to enable automatic payment.
     */
    public autoPay: boolean | ros.IResolvable | undefined;

    /**
     * @Property autoRenew: Specifies whether to enable auto-renewal.
     */
    public autoRenew: boolean | ros.IResolvable | undefined;

    /**
     * @Property buyDesktopsCount: The number of cloud desktops that you want to purchase. Valid values: 0 to 200.
     */
    public buyDesktopsCount: number | ros.IResolvable | undefined;

    /**
     * @Property comments: The remarks on the desktop group.
     */
    public comments: string | ros.IResolvable | undefined;

    /**
     * @Property connectDuration: The maximum period of time during which the session is connected. When the specified maximum period of time is reached, the session automatically disconnects. Unit: milliseconds. This parameter is required only for cloud desktops in the same desktop group.
     */
    public connectDuration: number | ros.IResolvable | undefined;

    /**
     * @Property defaultInitDesktopCount: The default number of cloud desktops to create when you create the desktop group. Default value: 1.
     */
    public defaultInitDesktopCount: number | ros.IResolvable | undefined;

    /**
     * @Property desktopGroupName: The name of the desktop group.
     */
    public desktopGroupName: string | ros.IResolvable | undefined;

    /**
     * @Property endUserIds: The end users that can use the desktop group.
     */
    public endUserIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property groupVersion: The desktop group version.
     */
    public groupVersion: number | ros.IResolvable | undefined;

    /**
     * @Property idleDisconnectDuration: The maximum period of time for which a session remains idle. If an end user performs no operations on a cloud desktop by using keyboards or mouses during a session, the session becomes idle. When the specified maximum period of time is reached, the session automatically disconnects. Unit: milliseconds. This parameter is required only for cloud desktops in the same desktop group.
     */
    public idleDisconnectDuration: number | ros.IResolvable | undefined;

    /**
     * @Property keepDuration: The retention period of the cloud desktop after the end user disconnects from the cloud desktop. Unit: milliseconds.
     */
    public keepDuration: number | ros.IResolvable | undefined;

    /**
     * @Property maxDesktopsCount: The maximum number of cloud desktops that the desktop group can contain. Valid values: 0 to 200.
     */
    public maxDesktopsCount: number | ros.IResolvable | undefined;

    /**
     * @Property minDesktopsCount: The minimum number of cloud desktops that must be contained in the desktop group if you set the billing method to subscription. If you set the ChargeType parameter to PrePaid, this parameter is required. Valid values: 0 to the value of MaxDesktopsCount. Default value: 1.
     */
    public minDesktopsCount: number | ros.IResolvable | undefined;

    /**
     * @Property period: The subscription period of the cloud desktops in the desktop group. The unit is specified by the PeriodUnit parameter. The Period parameter takes effect only if you set the ChargeType parameter to PrePaid.
     * Valid values if you set the PeriodUnit parameter to Month: 1, 2, 3, 6
     * Valid values if you set the PeriodUnit parameter to Year:  1, 2, 3, 4, 5
     */
    public period: number | ros.IResolvable | undefined;

    /**
     * @Property periodUnit: Whether to open CA
     */
    public periodUnit: string | ros.IResolvable | undefined;

    /**
     * @Property resetType: Specifies which type of the disk to reset for cloud desktops in the desktop group.
     */
    public resetType: number | ros.IResolvable | undefined;

    /**
     * @Property stopDuration: The period of time before the idle cloud desktop is stopped. When the specified period of time is reached, the idle cloud desktop automatically stops. If an end user connects to a stopped cloud desktop, the cloud desktop automatically starts. Unit: milliseconds.
     */
    public stopDuration: number | ros.IResolvable | undefined;

    /**
     * @Property volumeEncryptionEnabled: Specifies whether to enable disk encryption.
     */
    public volumeEncryptionEnabled: boolean | ros.IResolvable | undefined;

    /**
     * @Property volumeEncryptionKey: The ID of the Key Management Service (KMS) key that you want to use when disk encryption is enabled.
     */
    public volumeEncryptionKey: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDesktopGroupProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDesktopGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDesktopGroupId = this.getAtt('DesktopGroupId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.bundleId = props.bundleId;
        this.chargeType = props.chargeType;
        this.officeSiteId = props.officeSiteId;
        this.policyGroupId = props.policyGroupId;
        this.allowAutoSetup = props.allowAutoSetup;
        this.allowBufferCount = props.allowBufferCount;
        this.autoPay = props.autoPay;
        this.autoRenew = props.autoRenew;
        this.buyDesktopsCount = props.buyDesktopsCount;
        this.comments = props.comments;
        this.connectDuration = props.connectDuration;
        this.defaultInitDesktopCount = props.defaultInitDesktopCount;
        this.desktopGroupName = props.desktopGroupName;
        this.endUserIds = props.endUserIds;
        this.groupVersion = props.groupVersion;
        this.idleDisconnectDuration = props.idleDisconnectDuration;
        this.keepDuration = props.keepDuration;
        this.maxDesktopsCount = props.maxDesktopsCount;
        this.minDesktopsCount = props.minDesktopsCount;
        this.period = props.period;
        this.periodUnit = props.periodUnit;
        this.resetType = props.resetType;
        this.stopDuration = props.stopDuration;
        this.volumeEncryptionEnabled = props.volumeEncryptionEnabled;
        this.volumeEncryptionKey = props.volumeEncryptionKey;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            bundleId: this.bundleId,
            chargeType: this.chargeType,
            officeSiteId: this.officeSiteId,
            policyGroupId: this.policyGroupId,
            allowAutoSetup: this.allowAutoSetup,
            allowBufferCount: this.allowBufferCount,
            autoPay: this.autoPay,
            autoRenew: this.autoRenew,
            buyDesktopsCount: this.buyDesktopsCount,
            comments: this.comments,
            connectDuration: this.connectDuration,
            defaultInitDesktopCount: this.defaultInitDesktopCount,
            desktopGroupName: this.desktopGroupName,
            endUserIds: this.endUserIds,
            groupVersion: this.groupVersion,
            idleDisconnectDuration: this.idleDisconnectDuration,
            keepDuration: this.keepDuration,
            maxDesktopsCount: this.maxDesktopsCount,
            minDesktopsCount: this.minDesktopsCount,
            period: this.period,
            periodUnit: this.periodUnit,
            resetType: this.resetType,
            stopDuration: this.stopDuration,
            volumeEncryptionEnabled: this.volumeEncryptionEnabled,
            volumeEncryptionKey: this.volumeEncryptionKey,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDesktopGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosDesktops`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecd-desktops
 */
export interface RosDesktopsProps {

    /**
     * @Property bundleId: The ID of the cloud desktop template.
     */
    readonly bundleId: string | ros.IResolvable;

    /**
     * @Property officeSiteId: The ID of the workspace.
     */
    readonly officeSiteId: string | ros.IResolvable;

    /**
     * @Property policyGroupId: The ID of the policy.
     */
    readonly policyGroupId: string | ros.IResolvable;

    /**
     * @Property amount: The number of cloud desktops that you want to create. Valid values: 1 to 300. Default
     * value: 1.
     */
    readonly amount?: number | ros.IResolvable;

    /**
     * @Property autoPay: Specifies whether to enable automatic payment. Valid values:
     * true: enables automatic payment. You must make sure that your Alibaba Cloud account
     * has sufficient balance. If your Alibaba Cloud account does not have sufficient balance,
     * abnormal orders are generated.
     * false: disables automatic payment. In this case, an order is generated, and no payment
     * is automatically made. You can log on to the EDS console and complete the payment
     * based on the order ID on the Orders page.
     * Default value: true.
     */
    readonly autoPay?: boolean | ros.IResolvable;

    /**
     * @Property autoRenew: Specifies whether to enable auto-renewal for the cloud desktop. This parameter takes
     * effect only when the ChargeType parameter is set to PrePaid.
     * Valid values:
     * true: enables auto-renewal. The renewal duration is the same as the subscription duration
     * that you specified for the Period parameter when you purchased the cloud desktop.
     * false: does not enable auto-renewal.
     * Default value: false.
     */
    readonly autoRenew?: boolean | ros.IResolvable;

    /**
     * @Property chargeType: The billing method of the cloud desktop. Valid values:
     * PostPaid: pay-as-you-go
     * PrePaid: subscription
     * Default value: PostPaid.
     */
    readonly chargeType?: string | ros.IResolvable;

    /**
     * @Property desktopName: The name of the cloud desktop.
     */
    readonly desktopName?: string | ros.IResolvable;

    /**
     * @Property desktopNameSuffix: Specifies whether to automatically add a suffix to the cloud desktop name when you
     * create multiple cloud desktops at a time.
     * True: automatically adds a suffix.
     * False: does not add a suffix.
     */
    readonly desktopNameSuffix?: boolean | ros.IResolvable;

    /**
     * @Property directoryId: This parameter is not open for use.
     */
    readonly directoryId?: string | ros.IResolvable;

    /**
     * @Property endUserId: The user ID that authorizes the use of the cloud desktop, 1~100 can be set.
     * During the same period, only one user can use the desktop.
     * If EndUserId is not set, the created cloud desktop will not be assigned to any user.
     */
    readonly endUserId?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property groupId: desktop group ID。
     * Note that the desktop group function is currently in the invitation test.
     * If you want to experience it, please submit a work order application.
     */
    readonly groupId?: string | ros.IResolvable;

    /**
     * @Property hostname: The custom hostname that you specify for the cloud desktop. You can only specify the
     * hostname of a Windows cloud desktop in the workspace of the enterprise AD account
     * type.
     * The hostname must meet the following requirements:
     * The hostname must be 2 to 15 characters in length.
     * The hostname can contain letters, digits, and hyphens (-). It cannot start or end
     * with a hyphen (-), contain consecutive hyphens (-), or contain only digits.
     * If you create multiple cloud desktops, you can specify the names of the cloud desktops
     * in the name_prefix[begin_number,bits]name_suffix format. For example, if you set Hostname to ecd--1,4-test, the hostname of the first cloud desktop is ecd-0001-test and the hostname of
     * the second cloud desktop is ecd-0002-test. The rest may be deduced by analogy.
     * name_prefix: the prefix of the hostname.
     * [begin_number,bits]: the ordered numbers in the hostname. begin_number: the start number. Valid values:
     * 0 to 999999. Default value: 0. bits: the digit. Valid values: 1 to 6. Default value:
     * 6.
     * name_suffix: the suffix of the hostname.
     */
    readonly hostname?: string | ros.IResolvable;

    /**
     * @Property period: The subscription duration. The unit of the value is specified by the PeriodUnit parameter. This parameter takes effect and is required only when the ChargeType parameter is set to PrePaid.
     * If PeriodUnit is month, the valid range is 1, 2, 3, 6, 12, 24, 36, 48,60
     * If periodUnit is year, the valid range is 1 to 5
     */
    readonly period?: number | ros.IResolvable;

    /**
     * @Property periodUnit: The unit of the subscription duration. Valid values:
     * Month
     * Year
     * Default value: Month.
     */
    readonly periodUnit?: string | ros.IResolvable;

    /**
     * @Property promotionId: promotion id.
     */
    readonly promotionId?: string | ros.IResolvable;

    /**
     * @Property tags: The list of desktops tags in the form of key\/value pairs.
     * You can define a maximum of 20 tags for each desktops.
     */
    readonly tags?: RosDesktops.TagsProperty[];

    /**
     * @Property userAssignMode: The assignment mode of the cloud desktop. Default value: ALL.
     * ALL: If you specify the EndUserId parameter, the cloud desktops that you create are
     * assigned to each regular user that you specify.
     * PER_USER: If you specify the EndUserId parameter, the cloud desktops that you create
     * are evenly assigned to all regular users that you specify. In this case, you must
     * make sure that the value of the Amount parameter can be divided by the N value of
     * the EndUserId.N parameter that you specify.
     * Note If you do not specify the EndUserId parameter, the cloud desktop that you create is
     * not assigned to regular users.
     */
    readonly userAssignMode?: string | ros.IResolvable;

    /**
     * @Property userName: This parameter is not open for use.
     */
    readonly userName?: string | ros.IResolvable;

    /**
     * @Property volumeEncryptionEnabled: Whether to enable disk encryption.
     */
    readonly volumeEncryptionEnabled?: boolean | ros.IResolvable;

    /**
     * @Property volumeEncryptionKey: The key ID of the KMS used when disk encryption is enabled. It can be obtained through the ListKeys interface.
     */
    readonly volumeEncryptionKey?: string | ros.IResolvable;

    /**
     * @Property vpcId: This parameter is not open for use.
     */
    readonly vpcId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDesktopsProps`
 *
 * @param properties - the TypeScript properties of a `RosDesktopsProps`
 *
 * @returns the result of the validation.
 */
function RosDesktopsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.userAssignMode && (typeof properties.userAssignMode) !== 'object') {
        errors.collect(ros.propertyValidator('userAssignMode', ros.validateAllowedValues)({
          data: properties.userAssignMode,
          allowedValues: ["ALL","PER_USER"],
        }));
    }
    errors.collect(ros.propertyValidator('userAssignMode', ros.validateString)(properties.userAssignMode));
    errors.collect(ros.propertyValidator('userName', ros.validateString)(properties.userName));
    errors.collect(ros.propertyValidator('promotionId', ros.validateString)(properties.promotionId));
    errors.collect(ros.propertyValidator('policyGroupId', ros.requiredValidator)(properties.policyGroupId));
    errors.collect(ros.propertyValidator('policyGroupId', ros.validateString)(properties.policyGroupId));
    errors.collect(ros.propertyValidator('autoRenew', ros.validateBoolean)(properties.autoRenew));
    if(properties.amount && (typeof properties.amount) !== 'object') {
        errors.collect(ros.propertyValidator('amount', ros.validateRange)({
            data: properties.amount,
            min: 1,
            max: 300,
          }));
    }
    errors.collect(ros.propertyValidator('amount', ros.validateNumber)(properties.amount));
    errors.collect(ros.propertyValidator('desktopName', ros.validateString)(properties.desktopName));
    errors.collect(ros.propertyValidator('hostname', ros.validateString)(properties.hostname));
    if(properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateAllowedValues)({
          data: properties.period,
          allowedValues: [1,2,3,4,5,6,12,24,36,48,60],
        }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    errors.collect(ros.propertyValidator('volumeEncryptionEnabled', ros.validateBoolean)(properties.volumeEncryptionEnabled));
    errors.collect(ros.propertyValidator('autoPay', ros.validateBoolean)(properties.autoPay));
    errors.collect(ros.propertyValidator('groupId', ros.validateString)(properties.groupId));
    errors.collect(ros.propertyValidator('officeSiteId', ros.requiredValidator)(properties.officeSiteId));
    errors.collect(ros.propertyValidator('officeSiteId', ros.validateString)(properties.officeSiteId));
    errors.collect(ros.propertyValidator('desktopNameSuffix', ros.validateBoolean)(properties.desktopNameSuffix));
    errors.collect(ros.propertyValidator('bundleId', ros.requiredValidator)(properties.bundleId));
    errors.collect(ros.propertyValidator('bundleId', ros.validateString)(properties.bundleId));
    errors.collect(ros.propertyValidator('directoryId', ros.validateString)(properties.directoryId));
    if(properties.endUserId && (Array.isArray(properties.endUserId) || (typeof properties.endUserId) === 'string')) {
        errors.collect(ros.propertyValidator('endUserId', ros.validateLength)({
            data: properties.endUserId.length,
            min: undefined,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('endUserId', ros.listValidator(ros.validateAny))(properties.endUserId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    if(properties.chargeType && (typeof properties.chargeType) !== 'object') {
        errors.collect(ros.propertyValidator('chargeType', ros.validateAllowedValues)({
          data: properties.chargeType,
          allowedValues: ["PayAsYouGo","PostPaid","PayOnDemand","Postpaid","PostPay","Postpay","POSTPAY","POST","Subscription","PrePaid","Prepaid","PrePay","Prepay","PREPAY","PRE"],
        }));
    }
    errors.collect(ros.propertyValidator('chargeType', ros.validateString)(properties.chargeType));
    errors.collect(ros.propertyValidator('volumeEncryptionKey', ros.validateString)(properties.volumeEncryptionKey));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosDesktops_TagsPropertyValidator))(properties.tags));
    if(properties.periodUnit && (typeof properties.periodUnit) !== 'object') {
        errors.collect(ros.propertyValidator('periodUnit', ros.validateAllowedValues)({
          data: properties.periodUnit,
          allowedValues: ["month","year","Month","Year"],
        }));
    }
    errors.collect(ros.propertyValidator('periodUnit', ros.validateString)(properties.periodUnit));
    return errors.wrap('supplied properties not correct for "RosDesktopsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECD::Desktops` resource
 *
 * @param properties - the TypeScript properties of a `RosDesktopsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECD::Desktops` resource.
 */
// @ts-ignore TS6133
function rosDesktopsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDesktopsPropsValidator(properties).assertSuccess();
    }
    return {
      'BundleId': ros.stringToRosTemplate(properties.bundleId),
      'OfficeSiteId': ros.stringToRosTemplate(properties.officeSiteId),
      'PolicyGroupId': ros.stringToRosTemplate(properties.policyGroupId),
      'Amount': ros.numberToRosTemplate(properties.amount),
      'AutoPay': ros.booleanToRosTemplate(properties.autoPay),
      'AutoRenew': ros.booleanToRosTemplate(properties.autoRenew),
      'ChargeType': ros.stringToRosTemplate(properties.chargeType),
      'DesktopName': ros.stringToRosTemplate(properties.desktopName),
      'DesktopNameSuffix': ros.booleanToRosTemplate(properties.desktopNameSuffix),
      'DirectoryId': ros.stringToRosTemplate(properties.directoryId),
      'EndUserId': ros.listMapper(ros.objectToRosTemplate)(properties.endUserId),
      'GroupId': ros.stringToRosTemplate(properties.groupId),
      'Hostname': ros.stringToRosTemplate(properties.hostname),
      'Period': ros.numberToRosTemplate(properties.period),
      'PeriodUnit': ros.stringToRosTemplate(properties.periodUnit),
      'PromotionId': ros.stringToRosTemplate(properties.promotionId),
      'Tags': ros.listMapper(rosDesktopsTagsPropertyToRosTemplate)(properties.tags),
      'UserAssignMode': ros.stringToRosTemplate(properties.userAssignMode),
      'UserName': ros.stringToRosTemplate(properties.userName),
      'VolumeEncryptionEnabled': ros.booleanToRosTemplate(properties.volumeEncryptionEnabled),
      'VolumeEncryptionKey': ros.stringToRosTemplate(properties.volumeEncryptionKey),
      'VpcId': ros.stringToRosTemplate(properties.vpcId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECD::Desktops`, which is used to create one or more cloud desktops.
 * @Note This class does not contain additional functions, so it is recommended to use the `Desktops` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecd-desktops
 */
export class RosDesktops extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECD::Desktops";

    /**
     * @Attribute DesktopId: The ID of the cloud desktop. If multiple cloud desktops are created in a call, the
IDs of the cloud desktops are returned.
     */
    public readonly attrDesktopId: ros.IResolvable;

    /**
     * @Attribute OrderId: The ID of the order.
Note This parameter is returned only when the ChargeType parameter is set to PrePaid.
     */
    public readonly attrOrderId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property bundleId: The ID of the cloud desktop template.
     */
    public bundleId: string | ros.IResolvable;

    /**
     * @Property officeSiteId: The ID of the workspace.
     */
    public officeSiteId: string | ros.IResolvable;

    /**
     * @Property policyGroupId: The ID of the policy.
     */
    public policyGroupId: string | ros.IResolvable;

    /**
     * @Property amount: The number of cloud desktops that you want to create. Valid values: 1 to 300. Default
     * value: 1.
     */
    public amount: number | ros.IResolvable | undefined;

    /**
     * @Property autoPay: Specifies whether to enable automatic payment. Valid values:
     * true: enables automatic payment. You must make sure that your Alibaba Cloud account
     * has sufficient balance. If your Alibaba Cloud account does not have sufficient balance,
     * abnormal orders are generated.
     * false: disables automatic payment. In this case, an order is generated, and no payment
     * is automatically made. You can log on to the EDS console and complete the payment
     * based on the order ID on the Orders page.
     * Default value: true.
     */
    public autoPay: boolean | ros.IResolvable | undefined;

    /**
     * @Property autoRenew: Specifies whether to enable auto-renewal for the cloud desktop. This parameter takes
     * effect only when the ChargeType parameter is set to PrePaid.
     * Valid values:
     * true: enables auto-renewal. The renewal duration is the same as the subscription duration
     * that you specified for the Period parameter when you purchased the cloud desktop.
     * false: does not enable auto-renewal.
     * Default value: false.
     */
    public autoRenew: boolean | ros.IResolvable | undefined;

    /**
     * @Property chargeType: The billing method of the cloud desktop. Valid values:
     * PostPaid: pay-as-you-go
     * PrePaid: subscription
     * Default value: PostPaid.
     */
    public chargeType: string | ros.IResolvable | undefined;

    /**
     * @Property desktopName: The name of the cloud desktop.
     */
    public desktopName: string | ros.IResolvable | undefined;

    /**
     * @Property desktopNameSuffix: Specifies whether to automatically add a suffix to the cloud desktop name when you
     * create multiple cloud desktops at a time.
     * True: automatically adds a suffix.
     * False: does not add a suffix.
     */
    public desktopNameSuffix: boolean | ros.IResolvable | undefined;

    /**
     * @Property directoryId: This parameter is not open for use.
     */
    public directoryId: string | ros.IResolvable | undefined;

    /**
     * @Property endUserId: The user ID that authorizes the use of the cloud desktop, 1~100 can be set.
     * During the same period, only one user can use the desktop.
     * If EndUserId is not set, the created cloud desktop will not be assigned to any user.
     */
    public endUserId: Array<any | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property groupId: desktop group ID。
     * Note that the desktop group function is currently in the invitation test.
     * If you want to experience it, please submit a work order application.
     */
    public groupId: string | ros.IResolvable | undefined;

    /**
     * @Property hostname: The custom hostname that you specify for the cloud desktop. You can only specify the
     * hostname of a Windows cloud desktop in the workspace of the enterprise AD account
     * type.
     * The hostname must meet the following requirements:
     * The hostname must be 2 to 15 characters in length.
     * The hostname can contain letters, digits, and hyphens (-). It cannot start or end
     * with a hyphen (-), contain consecutive hyphens (-), or contain only digits.
     * If you create multiple cloud desktops, you can specify the names of the cloud desktops
     * in the name_prefix[begin_number,bits]name_suffix format. For example, if you set Hostname to ecd--1,4-test, the hostname of the first cloud desktop is ecd-0001-test and the hostname of
     * the second cloud desktop is ecd-0002-test. The rest may be deduced by analogy.
     * name_prefix: the prefix of the hostname.
     * [begin_number,bits]: the ordered numbers in the hostname. begin_number: the start number. Valid values:
     * 0 to 999999. Default value: 0. bits: the digit. Valid values: 1 to 6. Default value:
     * 6.
     * name_suffix: the suffix of the hostname.
     */
    public hostname: string | ros.IResolvable | undefined;

    /**
     * @Property period: The subscription duration. The unit of the value is specified by the PeriodUnit parameter. This parameter takes effect and is required only when the ChargeType parameter is set to PrePaid.
     * If PeriodUnit is month, the valid range is 1, 2, 3, 6, 12, 24, 36, 48,60
     * If periodUnit is year, the valid range is 1 to 5
     */
    public period: number | ros.IResolvable | undefined;

    /**
     * @Property periodUnit: The unit of the subscription duration. Valid values:
     * Month
     * Year
     * Default value: Month.
     */
    public periodUnit: string | ros.IResolvable | undefined;

    /**
     * @Property promotionId: promotion id.
     */
    public promotionId: string | ros.IResolvable | undefined;

    /**
     * @Property tags: The list of desktops tags in the form of key\/value pairs.
     * You can define a maximum of 20 tags for each desktops.
     */
    public tags: RosDesktops.TagsProperty[] | undefined;

    /**
     * @Property userAssignMode: The assignment mode of the cloud desktop. Default value: ALL.
     * ALL: If you specify the EndUserId parameter, the cloud desktops that you create are
     * assigned to each regular user that you specify.
     * PER_USER: If you specify the EndUserId parameter, the cloud desktops that you create
     * are evenly assigned to all regular users that you specify. In this case, you must
     * make sure that the value of the Amount parameter can be divided by the N value of
     * the EndUserId.N parameter that you specify.
     * Note If you do not specify the EndUserId parameter, the cloud desktop that you create is
     * not assigned to regular users.
     */
    public userAssignMode: string | ros.IResolvable | undefined;

    /**
     * @Property userName: This parameter is not open for use.
     */
    public userName: string | ros.IResolvable | undefined;

    /**
     * @Property volumeEncryptionEnabled: Whether to enable disk encryption.
     */
    public volumeEncryptionEnabled: boolean | ros.IResolvable | undefined;

    /**
     * @Property volumeEncryptionKey: The key ID of the KMS used when disk encryption is enabled. It can be obtained through the ListKeys interface.
     */
    public volumeEncryptionKey: string | ros.IResolvable | undefined;

    /**
     * @Property vpcId: This parameter is not open for use.
     */
    public vpcId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDesktopsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDesktops.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDesktopId = this.getAtt('DesktopId');
        this.attrOrderId = this.getAtt('OrderId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.bundleId = props.bundleId;
        this.officeSiteId = props.officeSiteId;
        this.policyGroupId = props.policyGroupId;
        this.amount = props.amount;
        this.autoPay = props.autoPay;
        this.autoRenew = props.autoRenew;
        this.chargeType = props.chargeType;
        this.desktopName = props.desktopName;
        this.desktopNameSuffix = props.desktopNameSuffix;
        this.directoryId = props.directoryId;
        this.endUserId = props.endUserId;
        this.groupId = props.groupId;
        this.hostname = props.hostname;
        this.period = props.period;
        this.periodUnit = props.periodUnit;
        this.promotionId = props.promotionId;
        this.tags = props.tags;
        this.userAssignMode = props.userAssignMode;
        this.userName = props.userName;
        this.volumeEncryptionEnabled = props.volumeEncryptionEnabled;
        this.volumeEncryptionKey = props.volumeEncryptionKey;
        this.vpcId = props.vpcId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            bundleId: this.bundleId,
            officeSiteId: this.officeSiteId,
            policyGroupId: this.policyGroupId,
            amount: this.amount,
            autoPay: this.autoPay,
            autoRenew: this.autoRenew,
            chargeType: this.chargeType,
            desktopName: this.desktopName,
            desktopNameSuffix: this.desktopNameSuffix,
            directoryId: this.directoryId,
            endUserId: this.endUserId,
            groupId: this.groupId,
            hostname: this.hostname,
            period: this.period,
            periodUnit: this.periodUnit,
            promotionId: this.promotionId,
            tags: this.tags,
            userAssignMode: this.userAssignMode,
            userName: this.userName,
            volumeEncryptionEnabled: this.volumeEncryptionEnabled,
            volumeEncryptionKey: this.volumeEncryptionKey,
            vpcId: this.vpcId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDesktopsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosDesktops {
    /**
     * @stability external
     */
    export interface TagsProperty {
        /**
         * @Property value: The value of the tag.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: The keyword of the tag.
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosDesktops_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECD::Desktops.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECD::Desktops.Tags` resource.
 */
// @ts-ignore TS6133
function rosDesktopsTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosDesktops_TagsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `RosNetworkPackage`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecd-networkpackage
 */
export interface RosNetworkPackageProps {

    /**
     * @Property bandwidth: The maximum public bandwidth. Unit: Mbit\/s.
     * Valid values for the pay-by-data-transfer type (PayByTraffic): 10 to 200. 
     *  Valid values for the pay-by-bandwith type (PayByBandwidth): 10 to 1000.
     */
    readonly bandwidth: number | ros.IResolvable;

    /**
     * @Property officeSiteId: The ID of the workspace.
     */
    readonly officeSiteId: string | ros.IResolvable;

    /**
     * @Property autoPay: Specifies whether to enable automatic payment.
     */
    readonly autoPay?: boolean | ros.IResolvable;

    /**
     * @Property autoRenew: Specifies whether to enable auto-renewal.
     */
    readonly autoRenew?: boolean | ros.IResolvable;

    /**
     * @Property internetChargeType: The metering method of the pay-as-you-go Internet access package. Valid values: 
     * PayByTraffic: pay-by-data-transfer.
     * PayByBandwidth: pay-by-bandwidth. 
     * Default value: PayByTraffic.
     */
    readonly internetChargeType?: string | ros.IResolvable;

    /**
     * @Property payType: The billing method of the Internet access package. Enumeration Value:
     * PostPaid
     * PrePaid
     */
    readonly payType?: string | ros.IResolvable;

    /**
     * @Property period: The duration of the Internet access package.
     */
    readonly period?: number | ros.IResolvable;

    /**
     * @Property periodUnit: The unit of duration that you want to use for the Internet access package. Enumeration Value:
     * MonthYearWeek
     */
    readonly periodUnit?: string | ros.IResolvable;

    /**
     * @Property promotionId: The ID of the sales promotion.
     */
    readonly promotionId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosNetworkPackageProps`
 *
 * @param properties - the TypeScript properties of a `RosNetworkPackageProps`
 *
 * @returns the result of the validation.
 */
function RosNetworkPackagePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('officeSiteId', ros.requiredValidator)(properties.officeSiteId));
    errors.collect(ros.propertyValidator('officeSiteId', ros.validateString)(properties.officeSiteId));
    errors.collect(ros.propertyValidator('promotionId', ros.validateString)(properties.promotionId));
    errors.collect(ros.propertyValidator('bandwidth', ros.requiredValidator)(properties.bandwidth));
    if(properties.bandwidth && (typeof properties.bandwidth) !== 'object') {
        errors.collect(ros.propertyValidator('bandwidth', ros.validateRange)({
            data: properties.bandwidth,
            min: 2,
            max: 1000,
          }));
    }
    errors.collect(ros.propertyValidator('bandwidth', ros.validateNumber)(properties.bandwidth));
    errors.collect(ros.propertyValidator('autoRenew', ros.validateBoolean)(properties.autoRenew));
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    errors.collect(ros.propertyValidator('autoPay', ros.validateBoolean)(properties.autoPay));
    if(properties.payType && (typeof properties.payType) !== 'object') {
        errors.collect(ros.propertyValidator('payType', ros.validateAllowedValues)({
          data: properties.payType,
          allowedValues: ["PostPaid","PrePaid"],
        }));
    }
    errors.collect(ros.propertyValidator('payType', ros.validateString)(properties.payType));
    if(properties.periodUnit && (typeof properties.periodUnit) !== 'object') {
        errors.collect(ros.propertyValidator('periodUnit', ros.validateAllowedValues)({
          data: properties.periodUnit,
          allowedValues: ["Month","Year","Week"],
        }));
    }
    errors.collect(ros.propertyValidator('periodUnit', ros.validateString)(properties.periodUnit));
    if(properties.internetChargeType && (typeof properties.internetChargeType) !== 'object') {
        errors.collect(ros.propertyValidator('internetChargeType', ros.validateAllowedValues)({
          data: properties.internetChargeType,
          allowedValues: ["PayByTraffic","PayByBandwidth"],
        }));
    }
    errors.collect(ros.propertyValidator('internetChargeType', ros.validateString)(properties.internetChargeType));
    return errors.wrap('supplied properties not correct for "RosNetworkPackageProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECD::NetworkPackage` resource
 *
 * @param properties - the TypeScript properties of a `RosNetworkPackageProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECD::NetworkPackage` resource.
 */
// @ts-ignore TS6133
function rosNetworkPackagePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosNetworkPackagePropsValidator(properties).assertSuccess();
    }
    return {
      'Bandwidth': ros.numberToRosTemplate(properties.bandwidth),
      'OfficeSiteId': ros.stringToRosTemplate(properties.officeSiteId),
      'AutoPay': ros.booleanToRosTemplate(properties.autoPay),
      'AutoRenew': ros.booleanToRosTemplate(properties.autoRenew),
      'InternetChargeType': ros.stringToRosTemplate(properties.internetChargeType),
      'PayType': ros.stringToRosTemplate(properties.payType),
      'Period': ros.numberToRosTemplate(properties.period),
      'PeriodUnit': ros.stringToRosTemplate(properties.periodUnit),
      'PromotionId': ros.stringToRosTemplate(properties.promotionId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECD::NetworkPackage`, which is used to create a premium bandwidth plan for an office network.
 * @Note This class does not contain additional functions, so it is recommended to use the `NetworkPackage` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecd-networkpackage
 */
export class RosNetworkPackage extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECD::NetworkPackage";

    /**
     * @Attribute NetworkPackageId: The ID of the Internet access package.
     */
    public readonly attrNetworkPackageId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property bandwidth: The maximum public bandwidth. Unit: Mbit\/s.
     * Valid values for the pay-by-data-transfer type (PayByTraffic): 10 to 200. 
     *  Valid values for the pay-by-bandwith type (PayByBandwidth): 10 to 1000.
     */
    public bandwidth: number | ros.IResolvable;

    /**
     * @Property officeSiteId: The ID of the workspace.
     */
    public officeSiteId: string | ros.IResolvable;

    /**
     * @Property autoPay: Specifies whether to enable automatic payment.
     */
    public autoPay: boolean | ros.IResolvable | undefined;

    /**
     * @Property autoRenew: Specifies whether to enable auto-renewal.
     */
    public autoRenew: boolean | ros.IResolvable | undefined;

    /**
     * @Property internetChargeType: The metering method of the pay-as-you-go Internet access package. Valid values: 
     * PayByTraffic: pay-by-data-transfer.
     * PayByBandwidth: pay-by-bandwidth. 
     * Default value: PayByTraffic.
     */
    public internetChargeType: string | ros.IResolvable | undefined;

    /**
     * @Property payType: The billing method of the Internet access package. Enumeration Value:
     * PostPaid
     * PrePaid
     */
    public payType: string | ros.IResolvable | undefined;

    /**
     * @Property period: The duration of the Internet access package.
     */
    public period: number | ros.IResolvable | undefined;

    /**
     * @Property periodUnit: The unit of duration that you want to use for the Internet access package. Enumeration Value:
     * MonthYearWeek
     */
    public periodUnit: string | ros.IResolvable | undefined;

    /**
     * @Property promotionId: The ID of the sales promotion.
     */
    public promotionId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosNetworkPackageProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosNetworkPackage.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrNetworkPackageId = this.getAtt('NetworkPackageId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.bandwidth = props.bandwidth;
        this.officeSiteId = props.officeSiteId;
        this.autoPay = props.autoPay;
        this.autoRenew = props.autoRenew;
        this.internetChargeType = props.internetChargeType;
        this.payType = props.payType;
        this.period = props.period;
        this.periodUnit = props.periodUnit;
        this.promotionId = props.promotionId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            bandwidth: this.bandwidth,
            officeSiteId: this.officeSiteId,
            autoPay: this.autoPay,
            autoRenew: this.autoRenew,
            internetChargeType: this.internetChargeType,
            payType: this.payType,
            period: this.period,
            periodUnit: this.periodUnit,
            promotionId: this.promotionId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosNetworkPackagePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosNetworkPackageAssociation`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecd-networkpackageassociation
 */
export interface RosNetworkPackageAssociationProps {

    /**
     * @Property networkPackageId: The ID of the Internet access package.
     */
    readonly networkPackageId: string | ros.IResolvable;

    /**
     * @Property officeSiteId: The ID of the workspace.
     */
    readonly officeSiteId: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosNetworkPackageAssociationProps`
 *
 * @param properties - the TypeScript properties of a `RosNetworkPackageAssociationProps`
 *
 * @returns the result of the validation.
 */
function RosNetworkPackageAssociationPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('officeSiteId', ros.requiredValidator)(properties.officeSiteId));
    errors.collect(ros.propertyValidator('officeSiteId', ros.validateString)(properties.officeSiteId));
    errors.collect(ros.propertyValidator('networkPackageId', ros.requiredValidator)(properties.networkPackageId));
    errors.collect(ros.propertyValidator('networkPackageId', ros.validateString)(properties.networkPackageId));
    return errors.wrap('supplied properties not correct for "RosNetworkPackageAssociationProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECD::NetworkPackageAssociation` resource
 *
 * @param properties - the TypeScript properties of a `RosNetworkPackageAssociationProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECD::NetworkPackageAssociation` resource.
 */
// @ts-ignore TS6133
function rosNetworkPackageAssociationPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosNetworkPackageAssociationPropsValidator(properties).assertSuccess();
    }
    return {
      'NetworkPackageId': ros.stringToRosTemplate(properties.networkPackageId),
      'OfficeSiteId': ros.stringToRosTemplate(properties.officeSiteId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECD::NetworkPackageAssociation`, which is used to associate a premium bandwidth plan with an office network.
 * @Note This class does not contain additional functions, so it is recommended to use the `NetworkPackageAssociation` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecd-networkpackageassociation
 */
export class RosNetworkPackageAssociation extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECD::NetworkPackageAssociation";

    /**
     * @Attribute NetworkPackageId: The ID of the Internet access package.
     */
    public readonly attrNetworkPackageId: ros.IResolvable;

    /**
     * @Attribute OfficeSiteId: The ID of the workspace.
     */
    public readonly attrOfficeSiteId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property networkPackageId: The ID of the Internet access package.
     */
    public networkPackageId: string | ros.IResolvable;

    /**
     * @Property officeSiteId: The ID of the workspace.
     */
    public officeSiteId: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosNetworkPackageAssociationProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosNetworkPackageAssociation.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrNetworkPackageId = this.getAtt('NetworkPackageId');
        this.attrOfficeSiteId = this.getAtt('OfficeSiteId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.networkPackageId = props.networkPackageId;
        this.officeSiteId = props.officeSiteId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            networkPackageId: this.networkPackageId,
            officeSiteId: this.officeSiteId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosNetworkPackageAssociationPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosSimpleOfficeSite`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecd-simpleofficesite
 */
export interface RosSimpleOfficeSiteProps {

    /**
     * @Property bandwidth: The maximum public bandwidth. Value range: 10 to 200. Unit: Mbit\/s. This parameter is available if you set EnableInternetAccess to true.
     */
    readonly bandwidth?: number | ros.IResolvable;

    /**
     * @Property cenId: The ID of the Cloud Enterprise Network (CEN) instance.
     * NoteIf you want to connect to your cloud desktops over a VPC, you can attach the network of the workspace to the CEN instance. The CEN instance is connected to the on-premises network over VPN Gateway or Express Connect.
     */
    readonly cenId?: string | ros.IResolvable;

    /**
     * @Property cenOwnerId: The ID of the Alibaba Cloud account to which the Cloud Enterprise Network (CEN) instance belongs.
     * If you do not specify the CenId parameter, or the CEN instance that is specified by the CenId parameter belongs to the current Alibaba Cloud account, skip this parameter.
     * If you specify the CenId parameter and the CEN instance that you specify for the CenId parameter belongs to another Alibaba Cloud account, enter the ID of the Alibaba Cloud account.
     */
    readonly cenOwnerId?: number | ros.IResolvable;

    /**
     * @Property cidrBlock: The IPv4 CIDR block in the secure office network of the workspace. The IPv4 CIDR block that the system uses to create a virtual private cloud (VPC) for the workspace. We recommend that you set the IPv4 CIDR block to 10.0.0.0\/12, 172.16.0.0\/12, 192.168.0.0\/16, or a subnet of these CIDR blocks. If you set the IPv4 CIDR block to 10.0.0.0\/12 or 172.16.0.0\/12, the mask is 1224 bits in length. If you set the IPv4 CIDR block to 192.168.0.0\/16, the mask is 1624 bits in length.
     */
    readonly cidrBlock?: string | ros.IResolvable;

    /**
     * @Property cloudBoxOfficeSite: Specifies whether the workspace is a CloudBox-based workspace.
     * Enumeration Value:
     * true
     * false
     */
    readonly cloudBoxOfficeSite?: boolean | ros.IResolvable;

    /**
     * @Property desktopAccessType: The method that is used to connect the client to cloud desktops.
     * NoteVPC connections are established by using Alibaba Cloud PrivateLink. You can use PrivateLink for free. When you set this parameter to VPC or Any, PrivateLink is automatically activated.
     */
    readonly desktopAccessType?: string | ros.IResolvable;

    /**
     * @Property enableAdminAccess: Specifies whether to grant the permissions of the local administrator to the regular user of the cloud desktop.
     * Enumeration Value:
     * true
     * false
     */
    readonly enableAdminAccess?: boolean | ros.IResolvable;

    /**
     * @Property enableInternetAccess: Specifies whether to enable Internet access. By default, Internet access is not enabled.
     * Enumeration Value:
     * true
     * false
     */
    readonly enableInternetAccess?: boolean | ros.IResolvable;

    /**
     * @Property needVerifyZeroDevice: Specifies whether to enable trusted device verification.
     * Enumeration Value:
     * true
     * false
     */
    readonly needVerifyZeroDevice?: boolean | ros.IResolvable;

    /**
     * @Property officeSiteName: The name of the workspace. The name must be 2 to 255 characters in length. It must start with a letter and cannot start with http:\/\/ or https:\/\/. The name can contain letters, digits, colons (:), underscores (_), and hyphens (-).
     */
    readonly officeSiteName?: string | ros.IResolvable;

    /**
     * @Property verifyCode: The verification code. If the CEN instance that you specify for the CenId parameter belongs to another Alibaba Cloud account, you must call the SendVerifyCode operation to obtain the verification code.
     */
    readonly verifyCode?: string | ros.IResolvable;

    /**
     * @Property vpcType: The type of office network.
     * Enumeration value:
     * standard: Advanced office network.
     * basic: Basic office network.
     */
    readonly vpcType?: string | ros.IResolvable;

    /**
     * @Property vSwitchId: The IDs of the vSwitches in the VPC. This parameter is required when you create a CloudBox-based workspace.
     */
    readonly vSwitchId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosSimpleOfficeSiteProps`
 *
 * @param properties - the TypeScript properties of a `RosSimpleOfficeSiteProps`
 *
 * @returns the result of the validation.
 */
function RosSimpleOfficeSitePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('enableAdminAccess', ros.validateBoolean)(properties.enableAdminAccess));
    errors.collect(ros.propertyValidator('cloudBoxOfficeSite', ros.validateBoolean)(properties.cloudBoxOfficeSite));
    errors.collect(ros.propertyValidator('cidrBlock', ros.validateString)(properties.cidrBlock));
    errors.collect(ros.propertyValidator('verifyCode', ros.validateString)(properties.verifyCode));
    if(properties.vpcType && (typeof properties.vpcType) !== 'object') {
        errors.collect(ros.propertyValidator('vpcType', ros.validateAllowedValues)({
          data: properties.vpcType,
          allowedValues: ["standard","basic"],
        }));
    }
    errors.collect(ros.propertyValidator('vpcType', ros.validateString)(properties.vpcType));
    errors.collect(ros.propertyValidator('needVerifyZeroDevice', ros.validateBoolean)(properties.needVerifyZeroDevice));
    errors.collect(ros.propertyValidator('cenOwnerId', ros.validateNumber)(properties.cenOwnerId));
    errors.collect(ros.propertyValidator('bandwidth', ros.validateNumber)(properties.bandwidth));
    errors.collect(ros.propertyValidator('cenId', ros.validateString)(properties.cenId));
    if(properties.desktopAccessType && (typeof properties.desktopAccessType) !== 'object') {
        errors.collect(ros.propertyValidator('desktopAccessType', ros.validateAllowedValues)({
          data: properties.desktopAccessType,
          allowedValues: ["VPC","Internet","Any"],
        }));
    }
    errors.collect(ros.propertyValidator('desktopAccessType', ros.validateString)(properties.desktopAccessType));
    errors.collect(ros.propertyValidator('officeSiteName', ros.validateString)(properties.officeSiteName));
    errors.collect(ros.propertyValidator('enableInternetAccess', ros.validateBoolean)(properties.enableInternetAccess));
    return errors.wrap('supplied properties not correct for "RosSimpleOfficeSiteProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECD::SimpleOfficeSite` resource
 *
 * @param properties - the TypeScript properties of a `RosSimpleOfficeSiteProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECD::SimpleOfficeSite` resource.
 */
// @ts-ignore TS6133
function rosSimpleOfficeSitePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosSimpleOfficeSitePropsValidator(properties).assertSuccess();
    }
    return {
      'Bandwidth': ros.numberToRosTemplate(properties.bandwidth),
      'CenId': ros.stringToRosTemplate(properties.cenId),
      'CenOwnerId': ros.numberToRosTemplate(properties.cenOwnerId),
      'CidrBlock': ros.stringToRosTemplate(properties.cidrBlock),
      'CloudBoxOfficeSite': ros.booleanToRosTemplate(properties.cloudBoxOfficeSite),
      'DesktopAccessType': ros.stringToRosTemplate(properties.desktopAccessType),
      'EnableAdminAccess': ros.booleanToRosTemplate(properties.enableAdminAccess),
      'EnableInternetAccess': ros.booleanToRosTemplate(properties.enableInternetAccess),
      'NeedVerifyZeroDevice': ros.booleanToRosTemplate(properties.needVerifyZeroDevice),
      'OfficeSiteName': ros.stringToRosTemplate(properties.officeSiteName),
      'VerifyCode': ros.stringToRosTemplate(properties.verifyCode),
      'VpcType': ros.stringToRosTemplate(properties.vpcType),
      'VSwitchId': ros.stringToRosTemplate(properties.vSwitchId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECD::SimpleOfficeSite`, which is used to create a workspace of the convenience account type.
 * @Note This class does not contain additional functions, so it is recommended to use the `SimpleOfficeSite` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecd-simpleofficesite
 */
export class RosSimpleOfficeSite extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECD::SimpleOfficeSite";

    /**
     * @Attribute OfficeSiteId: The ID of the workspace.
     */
    public readonly attrOfficeSiteId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property bandwidth: The maximum public bandwidth. Value range: 10 to 200. Unit: Mbit\/s. This parameter is available if you set EnableInternetAccess to true.
     */
    public bandwidth: number | ros.IResolvable | undefined;

    /**
     * @Property cenId: The ID of the Cloud Enterprise Network (CEN) instance.
     * NoteIf you want to connect to your cloud desktops over a VPC, you can attach the network of the workspace to the CEN instance. The CEN instance is connected to the on-premises network over VPN Gateway or Express Connect.
     */
    public cenId: string | ros.IResolvable | undefined;

    /**
     * @Property cenOwnerId: The ID of the Alibaba Cloud account to which the Cloud Enterprise Network (CEN) instance belongs.
     * If you do not specify the CenId parameter, or the CEN instance that is specified by the CenId parameter belongs to the current Alibaba Cloud account, skip this parameter.
     * If you specify the CenId parameter and the CEN instance that you specify for the CenId parameter belongs to another Alibaba Cloud account, enter the ID of the Alibaba Cloud account.
     */
    public cenOwnerId: number | ros.IResolvable | undefined;

    /**
     * @Property cidrBlock: The IPv4 CIDR block in the secure office network of the workspace. The IPv4 CIDR block that the system uses to create a virtual private cloud (VPC) for the workspace. We recommend that you set the IPv4 CIDR block to 10.0.0.0\/12, 172.16.0.0\/12, 192.168.0.0\/16, or a subnet of these CIDR blocks. If you set the IPv4 CIDR block to 10.0.0.0\/12 or 172.16.0.0\/12, the mask is 1224 bits in length. If you set the IPv4 CIDR block to 192.168.0.0\/16, the mask is 1624 bits in length.
     */
    public cidrBlock: string | ros.IResolvable | undefined;

    /**
     * @Property cloudBoxOfficeSite: Specifies whether the workspace is a CloudBox-based workspace.
     * Enumeration Value:
     * true
     * false
     */
    public cloudBoxOfficeSite: boolean | ros.IResolvable | undefined;

    /**
     * @Property desktopAccessType: The method that is used to connect the client to cloud desktops.
     * NoteVPC connections are established by using Alibaba Cloud PrivateLink. You can use PrivateLink for free. When you set this parameter to VPC or Any, PrivateLink is automatically activated.
     */
    public desktopAccessType: string | ros.IResolvable | undefined;

    /**
     * @Property enableAdminAccess: Specifies whether to grant the permissions of the local administrator to the regular user of the cloud desktop.
     * Enumeration Value:
     * true
     * false
     */
    public enableAdminAccess: boolean | ros.IResolvable | undefined;

    /**
     * @Property enableInternetAccess: Specifies whether to enable Internet access. By default, Internet access is not enabled.
     * Enumeration Value:
     * true
     * false
     */
    public enableInternetAccess: boolean | ros.IResolvable | undefined;

    /**
     * @Property needVerifyZeroDevice: Specifies whether to enable trusted device verification.
     * Enumeration Value:
     * true
     * false
     */
    public needVerifyZeroDevice: boolean | ros.IResolvable | undefined;

    /**
     * @Property officeSiteName: The name of the workspace. The name must be 2 to 255 characters in length. It must start with a letter and cannot start with http:\/\/ or https:\/\/. The name can contain letters, digits, colons (:), underscores (_), and hyphens (-).
     */
    public officeSiteName: string | ros.IResolvable | undefined;

    /**
     * @Property verifyCode: The verification code. If the CEN instance that you specify for the CenId parameter belongs to another Alibaba Cloud account, you must call the SendVerifyCode operation to obtain the verification code.
     */
    public verifyCode: string | ros.IResolvable | undefined;

    /**
     * @Property vpcType: The type of office network.
     * Enumeration value:
     * standard: Advanced office network.
     * basic: Basic office network.
     */
    public vpcType: string | ros.IResolvable | undefined;

    /**
     * @Property vSwitchId: The IDs of the vSwitches in the VPC. This parameter is required when you create a CloudBox-based workspace.
     */
    public vSwitchId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSimpleOfficeSiteProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosSimpleOfficeSite.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrOfficeSiteId = this.getAtt('OfficeSiteId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.bandwidth = props.bandwidth;
        this.cenId = props.cenId;
        this.cenOwnerId = props.cenOwnerId;
        this.cidrBlock = props.cidrBlock;
        this.cloudBoxOfficeSite = props.cloudBoxOfficeSite;
        this.desktopAccessType = props.desktopAccessType;
        this.enableAdminAccess = props.enableAdminAccess;
        this.enableInternetAccess = props.enableInternetAccess;
        this.needVerifyZeroDevice = props.needVerifyZeroDevice;
        this.officeSiteName = props.officeSiteName;
        this.verifyCode = props.verifyCode;
        this.vpcType = props.vpcType;
        this.vSwitchId = props.vSwitchId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            bandwidth: this.bandwidth,
            cenId: this.cenId,
            cenOwnerId: this.cenOwnerId,
            cidrBlock: this.cidrBlock,
            cloudBoxOfficeSite: this.cloudBoxOfficeSite,
            desktopAccessType: this.desktopAccessType,
            enableAdminAccess: this.enableAdminAccess,
            enableInternetAccess: this.enableInternetAccess,
            needVerifyZeroDevice: this.needVerifyZeroDevice,
            officeSiteName: this.officeSiteName,
            verifyCode: this.verifyCode,
            vpcType: this.vpcType,
            vSwitchId: this.vSwitchId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosSimpleOfficeSitePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosUserDesktopGroupAddition`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecd-userdesktopgroupaddition
 */
export interface RosUserDesktopGroupAdditionProps {

    /**
     * @Property desktopGroupId: The ID of the desktop group that you want to assign to more regular users.
     */
    readonly desktopGroupId: string | ros.IResolvable;

    /**
     * @Property endUserIds: The regular users to whom you want to assign the desktop group.
     */
    readonly endUserIds: Array<string | ros.IResolvable> | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosUserDesktopGroupAdditionProps`
 *
 * @param properties - the TypeScript properties of a `RosUserDesktopGroupAdditionProps`
 *
 * @returns the result of the validation.
 */
function RosUserDesktopGroupAdditionPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('desktopGroupId', ros.requiredValidator)(properties.desktopGroupId));
    errors.collect(ros.propertyValidator('desktopGroupId', ros.validateString)(properties.desktopGroupId));
    errors.collect(ros.propertyValidator('endUserIds', ros.requiredValidator)(properties.endUserIds));
    if(properties.endUserIds && (Array.isArray(properties.endUserIds) || (typeof properties.endUserIds) === 'string')) {
        errors.collect(ros.propertyValidator('endUserIds', ros.validateLength)({
            data: properties.endUserIds.length,
            min: 1,
            max: 10000,
          }));
    }
    errors.collect(ros.propertyValidator('endUserIds', ros.listValidator(ros.validateString))(properties.endUserIds));
    return errors.wrap('supplied properties not correct for "RosUserDesktopGroupAdditionProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECD::UserDesktopGroupAddition` resource
 *
 * @param properties - the TypeScript properties of a `RosUserDesktopGroupAdditionProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECD::UserDesktopGroupAddition` resource.
 */
// @ts-ignore TS6133
function rosUserDesktopGroupAdditionPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosUserDesktopGroupAdditionPropsValidator(properties).assertSuccess();
    }
    return {
      'DesktopGroupId': ros.stringToRosTemplate(properties.desktopGroupId),
      'EndUserIds': ros.listMapper(ros.stringToRosTemplate)(properties.endUserIds),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECD::UserDesktopGroupAddition`, which is used grant the permissions on a cloud computer pool to users.
 * @Note This class does not contain additional functions, so it is recommended to use the `UserDesktopGroupAddition` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecd-userdesktopgroupaddition
 */
export class RosUserDesktopGroupAddition extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECD::UserDesktopGroupAddition";

    /**
     * @Attribute DesktopGroupId: The ID of the desktop group that you want to assign to more regular users.
     */
    public readonly attrDesktopGroupId: ros.IResolvable;

    /**
     * @Attribute EndUserIds: The regular users to whom you want to assign the desktop group.
     */
    public readonly attrEndUserIds: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property desktopGroupId: The ID of the desktop group that you want to assign to more regular users.
     */
    public desktopGroupId: string | ros.IResolvable;

    /**
     * @Property endUserIds: The regular users to whom you want to assign the desktop group.
     */
    public endUserIds: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosUserDesktopGroupAdditionProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosUserDesktopGroupAddition.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDesktopGroupId = this.getAtt('DesktopGroupId');
        this.attrEndUserIds = this.getAtt('EndUserIds');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.desktopGroupId = props.desktopGroupId;
        this.endUserIds = props.endUserIds;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            desktopGroupId: this.desktopGroupId,
            endUserIds: this.endUserIds,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosUserDesktopGroupAdditionPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
