// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `ALIYUN::ECD::Desktops`
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
     * @Property tags: The list of desktops tags in the form of key/value pairs.
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
          allowedValues: ["PayAsYouGo","PostPaid","PayOnDemand","Postpaid","PostPay","POST","Subscription","PrePaid","PrePay","Prepaid","PRE"],
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
      BundleId: ros.stringToRosTemplate(properties.bundleId),
      OfficeSiteId: ros.stringToRosTemplate(properties.officeSiteId),
      PolicyGroupId: ros.stringToRosTemplate(properties.policyGroupId),
      Amount: ros.numberToRosTemplate(properties.amount),
      AutoPay: ros.booleanToRosTemplate(properties.autoPay),
      AutoRenew: ros.booleanToRosTemplate(properties.autoRenew),
      ChargeType: ros.stringToRosTemplate(properties.chargeType),
      DesktopName: ros.stringToRosTemplate(properties.desktopName),
      DesktopNameSuffix: ros.booleanToRosTemplate(properties.desktopNameSuffix),
      DirectoryId: ros.stringToRosTemplate(properties.directoryId),
      EndUserId: ros.listMapper(ros.objectToRosTemplate)(properties.endUserId),
      GroupId: ros.stringToRosTemplate(properties.groupId),
      Hostname: ros.stringToRosTemplate(properties.hostname),
      Period: ros.numberToRosTemplate(properties.period),
      PeriodUnit: ros.stringToRosTemplate(properties.periodUnit),
      PromotionId: ros.stringToRosTemplate(properties.promotionId),
      Tags: ros.listMapper(rosDesktopsTagsPropertyToRosTemplate)(properties.tags),
      UserAssignMode: ros.stringToRosTemplate(properties.userAssignMode),
      UserName: ros.stringToRosTemplate(properties.userName),
      VolumeEncryptionEnabled: ros.booleanToRosTemplate(properties.volumeEncryptionEnabled),
      VolumeEncryptionKey: ros.stringToRosTemplate(properties.volumeEncryptionKey),
      VpcId: ros.stringToRosTemplate(properties.vpcId),
    };
}

/**
 * A ROS template type:  `ALIYUN::ECD::Desktops`
 */
export class RosDesktops extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECD::Desktops";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

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
     * @Property tags: The list of desktops tags in the form of key/value pairs.
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
     * Create a new `ALIYUN::ECD::Desktops`.
     *
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
      Value: ros.stringToRosTemplate(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
    };
}
