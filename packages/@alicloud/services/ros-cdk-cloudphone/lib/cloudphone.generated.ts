// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosImage`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudphone-image
 */
export interface RosImageProps {

    /**
     * @Property instanceId: The ID of the mobile phone instance.
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * @Property description: The image description. The description must be 2 to 256 characters in length. It cannot start with http:\/\/ or https:\/\/.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property imageName: The image name. The name must be 2 to 128 characters in length. It can contain letters, digits, colons (:), underscores (_), and hyphens (-). The name must start with a letter but cannot start with http:\/\/ or https:\/\/.
     */
    readonly imageName?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosImageProps`
 *
 * @param properties - the TypeScript properties of a `RosImageProps`
 *
 * @returns the result of the validation.
 */
function RosImagePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('imageName', ros.validateString)(properties.imageName));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    return errors.wrap('supplied properties not correct for "RosImageProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CloudPhone::Image` resource
 *
 * @param properties - the TypeScript properties of a `RosImageProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CloudPhone::Image` resource.
 */
// @ts-ignore TS6133
function rosImagePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosImagePropsValidator(properties).assertSuccess();
    }
    return {
      'InstanceId': ros.stringToRosTemplate(properties.instanceId),
      'Description': ros.stringToRosTemplate(properties.description),
      'ImageName': ros.stringToRosTemplate(properties.imageName),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CloudPhone::Image`, which is used to create a custom image for an Elastic Cloud Phone (ECP) instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `Image` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudphone-image
 */
export class RosImage extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CloudPhone::Image";

    /**
     * @Attribute CreateTime: The time when the image was created. The time follows the ISO 8601 standard.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute Description: The image description.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute ImageCategory: The image type.
     */
    public readonly attrImageCategory: ros.IResolvable;

    /**
     * @Attribute ImageId: The image ID.
     */
    public readonly attrImageId: ros.IResolvable;

    /**
     * @Attribute ImageName: The image name.
     */
    public readonly attrImageName: ros.IResolvable;

    /**
     * @Attribute IsSelfShared: Indicates whether the image is shared with other Alibaba Cloud accounts.
     */
    public readonly attrIsSelfShared: ros.IResolvable;

    /**
     * @Attribute OsName: The display name of the OS in Chinese.
     */
    public readonly attrOsName: ros.IResolvable;

    /**
     * @Attribute OsNameEn: The display name of the OS in English.
     */
    public readonly attrOsNameEn: ros.IResolvable;

    /**
     * @Attribute OsType: The image OS.
     */
    public readonly attrOsType: ros.IResolvable;

    /**
     * @Attribute Platform: The OS distribution.
     */
    public readonly attrPlatform: ros.IResolvable;

    /**
     * @Attribute Progress: The progress of image creation.
     */
    public readonly attrProgress: ros.IResolvable;

    /**
     * @Attribute Usage: Whether the image is already running in the cloud phone instance.
     */
    public readonly attrUsage: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property instanceId: The ID of the mobile phone instance.
     */
    public instanceId: string | ros.IResolvable;

    /**
     * @Property description: The image description. The description must be 2 to 256 characters in length. It cannot start with http:\/\/ or https:\/\/.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property imageName: The image name. The name must be 2 to 128 characters in length. It can contain letters, digits, colons (:), underscores (_), and hyphens (-). The name must start with a letter but cannot start with http:\/\/ or https:\/\/.
     */
    public imageName: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosImageProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosImage.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrDescription = this.getAtt('Description');
        this.attrImageCategory = this.getAtt('ImageCategory');
        this.attrImageId = this.getAtt('ImageId');
        this.attrImageName = this.getAtt('ImageName');
        this.attrIsSelfShared = this.getAtt('IsSelfShared');
        this.attrOsName = this.getAtt('OsName');
        this.attrOsNameEn = this.getAtt('OsNameEn');
        this.attrOsType = this.getAtt('OsType');
        this.attrPlatform = this.getAtt('Platform');
        this.attrProgress = this.getAtt('Progress');
        this.attrUsage = this.getAtt('Usage');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.instanceId = props.instanceId;
        this.description = props.description;
        this.imageName = props.imageName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            instanceId: this.instanceId,
            description: this.description,
            imageName: this.imageName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosImagePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosInstanceGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudphone-instancegroup
 */
export interface RosInstanceGroupProps {

    /**
     * @Property imageId: The image id
     */
    readonly imageId: string | ros.IResolvable;

    /**
     * @Property instanceType: instance type
     */
    readonly instanceType: string | ros.IResolvable;

    /**
     * @Property securityGroupId: Security group to create ecs instance. For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
     */
    readonly securityGroupId: string | ros.IResolvable;

    /**
     * @Property vSwitchId: vswitch id
     */
    readonly vSwitchId: string | ros.IResolvable;

    /**
     * @Property amount: Specifies the number of ECS instances to create.Value range: 1~100
     * Default：1
     */
    readonly amount?: number | ros.IResolvable;

    /**
     * @Property autoPay: Whether to pay automatically, the default is true
     */
    readonly autoPay?: boolean | ros.IResolvable;

    /**
     * @Property autoRenew: Whether renew the fee automatically. 
     * When the parameter InstanceChargeType is PrePaid, it will take effect. 
     * Range of value:True: automatic renewal. 
     * False: no automatic renewal. Default value is False.
     */
    readonly autoRenew?: boolean | ros.IResolvable;

    /**
     * @Property chargeType: Instance internet access charge type.
     */
    readonly chargeType?: string | ros.IResolvable;

    /**
     * @Property description: Description of instance. 
     * The length is 2~256 English or Chinese characters and cannot start with http:\/\/ and https:\/\/.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property eipBandwidth: EIP bandwidth value, the value range is 1-200. 
     * Setting this parameter will automatically create an EIP instance 
     * corresponding to the bandwidth and bind the EIP instance to the 
     * cloud phone instance. When the instance is released, this EIP 
     * instance will be released and recycled together.
     */
    readonly eipBandwidth?: number | ros.IResolvable;

    /**
     * @Property instanceName: "Display name of the instance, [2, 128] English or Chinese characters, must 
     * start with a letter or Chinese in size, can contain numbers, "_" or ".", "-"
     */
    readonly instanceName?: string | ros.IResolvable;

    /**
     * @Property keyPairName: Cloud phone instance key pair name. 
     * The cloud phone key can be imported through the ImportKeyPair interface.
     */
    readonly keyPairName?: string | ros.IResolvable;

    /**
     * @Property period: Prepaid time period. While PeriodUnit is month, it could be 1, 2, 3, 6.
     * While PeriodUnit is year, it could be from 1 to 5Default value is 1.
     *
     */
    readonly period?: number | ros.IResolvable;

    /**
     * @Property periodUnit: Unit of prepaid time period, it could be Month\/Year. Default value is Month.
     */
    readonly periodUnit?: string | ros.IResolvable;

    /**
     * @Property resolution: You can use the DescribeInstanceTypes interface to query the list of 
     * resolutions supported by the current specification and select an appropriate resolution.
     */
    readonly resolution?: string | ros.IResolvable;

    /**
     * @Property tag: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tag?: Array<ros.RosTag | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property vncPassword: Cloud phone VNC password.
     * The password must be six characters long, and must contain only uppercase, 
     * lowercase English letters and Arabic numerals.
     */
    readonly vncPassword?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosInstanceGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosInstanceGroupProps`
 *
 * @returns the result of the validation.
 */
function RosInstanceGroupPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('keyPairName', ros.validateString)(properties.keyPairName));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    if(properties.amount && (typeof properties.amount) !== 'object') {
        errors.collect(ros.propertyValidator('amount', ros.validateRange)({
            data: properties.amount,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('amount', ros.validateNumber)(properties.amount));
    errors.collect(ros.propertyValidator('securityGroupId', ros.requiredValidator)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('autoRenew', ros.validateBoolean)(properties.autoRenew));
    errors.collect(ros.propertyValidator('vSwitchId', ros.requiredValidator)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    errors.collect(ros.propertyValidator('autoPay', ros.validateBoolean)(properties.autoPay));
    errors.collect(ros.propertyValidator('instanceName', ros.validateString)(properties.instanceName));
    errors.collect(ros.propertyValidator('eipBandwidth', ros.validateNumber)(properties.eipBandwidth));
    if(properties.chargeType && (typeof properties.chargeType) !== 'object') {
        errors.collect(ros.propertyValidator('chargeType', ros.validateAllowedValues)({
          data: properties.chargeType,
          allowedValues: ["PayAsYouGo","PostPaid","PayOnDemand","Postpaid","PostPay","Postpay","POSTPAY","POST","Subscription","PrePaid","Prepaid","PrePay","Prepay","PREPAY","PRE"],
        }));
    }
    errors.collect(ros.propertyValidator('chargeType', ros.validateString)(properties.chargeType));
    errors.collect(ros.propertyValidator('imageId', ros.requiredValidator)(properties.imageId));
    errors.collect(ros.propertyValidator('imageId', ros.validateString)(properties.imageId));
    if(properties.vncPassword && (typeof properties.vncPassword) !== 'object') {
        errors.collect(ros.propertyValidator('vncPassword', ros.validateAllowedPattern)({
          data: properties.vncPassword,
          reg: /[a-zA-Z0-9]{6}/
        }));
    }
    errors.collect(ros.propertyValidator('vncPassword', ros.validateString)(properties.vncPassword));
    if(properties.tag && (Array.isArray(properties.tag) || (typeof properties.tag) === 'string')) {
        errors.collect(ros.propertyValidator('tag', ros.validateLength)({
            data: properties.tag.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tag', ros.listValidator(ros.validateRosTag))(properties.tag));
    errors.collect(ros.propertyValidator('instanceType', ros.requiredValidator)(properties.instanceType));
    errors.collect(ros.propertyValidator('instanceType', ros.validateString)(properties.instanceType));
    errors.collect(ros.propertyValidator('periodUnit', ros.validateString)(properties.periodUnit));
    errors.collect(ros.propertyValidator('resolution', ros.validateString)(properties.resolution));
    return errors.wrap('supplied properties not correct for "RosInstanceGroupProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CloudPhone::InstanceGroup` resource
 *
 * @param properties - the TypeScript properties of a `RosInstanceGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CloudPhone::InstanceGroup` resource.
 */
// @ts-ignore TS6133
function rosInstanceGroupPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosInstanceGroupPropsValidator(properties).assertSuccess();
    }
    return {
      'ImageId': ros.stringToRosTemplate(properties.imageId),
      'InstanceType': ros.stringToRosTemplate(properties.instanceType),
      'SecurityGroupId': ros.stringToRosTemplate(properties.securityGroupId),
      'VSwitchId': ros.stringToRosTemplate(properties.vSwitchId),
      'Amount': ros.numberToRosTemplate(properties.amount),
      'AutoPay': ros.booleanToRosTemplate(properties.autoPay),
      'AutoRenew': ros.booleanToRosTemplate(properties.autoRenew),
      'ChargeType': ros.stringToRosTemplate(properties.chargeType),
      'Description': ros.stringToRosTemplate(properties.description),
      'EipBandwidth': ros.numberToRosTemplate(properties.eipBandwidth),
      'InstanceName': ros.stringToRosTemplate(properties.instanceName),
      'KeyPairName': ros.stringToRosTemplate(properties.keyPairName),
      'Period': ros.numberToRosTemplate(properties.period),
      'PeriodUnit': ros.stringToRosTemplate(properties.periodUnit),
      'Resolution': ros.stringToRosTemplate(properties.resolution),
      'Tag': ros.listMapper(ros.rosTagToRosTemplate)(properties.tag),
      'VncPassword': ros.stringToRosTemplate(properties.vncPassword),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CloudPhone::InstanceGroup`, which is used to create and start Elastic Cloud Phone (ECP) instances.
 * @Note This class does not contain additional functions, so it is recommended to use the `InstanceGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudphone-instancegroup
 */
export class RosInstanceGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CloudPhone::InstanceGroup";

    /**
     * @Attribute InstanceIds: instance ids
     */
    public readonly attrInstanceIds: ros.IResolvable;

    /**
     * @Attribute OrderId: oder id
     */
    public readonly attrOrderId: ros.IResolvable;

    /**
     * @Attribute PrivateIps: Private IP address list of created cloud phone instances. Only for VPC instance.
     */
    public readonly attrPrivateIps: ros.IResolvable;

    /**
     * @Attribute TradePrice: price
     */
    public readonly attrTradePrice: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property imageId: The image id
     */
    public imageId: string | ros.IResolvable;

    /**
     * @Property instanceType: instance type
     */
    public instanceType: string | ros.IResolvable;

    /**
     * @Property securityGroupId: Security group to create ecs instance. For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
     */
    public securityGroupId: string | ros.IResolvable;

    /**
     * @Property vSwitchId: vswitch id
     */
    public vSwitchId: string | ros.IResolvable;

    /**
     * @Property amount: Specifies the number of ECS instances to create.Value range: 1~100
     * Default：1
     */
    public amount: number | ros.IResolvable | undefined;

    /**
     * @Property autoPay: Whether to pay automatically, the default is true
     */
    public autoPay: boolean | ros.IResolvable | undefined;

    /**
     * @Property autoRenew: Whether renew the fee automatically. 
     * When the parameter InstanceChargeType is PrePaid, it will take effect. 
     * Range of value:True: automatic renewal. 
     * False: no automatic renewal. Default value is False.
     */
    public autoRenew: boolean | ros.IResolvable | undefined;

    /**
     * @Property chargeType: Instance internet access charge type.
     */
    public chargeType: string | ros.IResolvable | undefined;

    /**
     * @Property description: Description of instance. 
     * The length is 2~256 English or Chinese characters and cannot start with http:\/\/ and https:\/\/.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property eipBandwidth: EIP bandwidth value, the value range is 1-200. 
     * Setting this parameter will automatically create an EIP instance 
     * corresponding to the bandwidth and bind the EIP instance to the 
     * cloud phone instance. When the instance is released, this EIP 
     * instance will be released and recycled together.
     */
    public eipBandwidth: number | ros.IResolvable | undefined;

    /**
     * @Property instanceName: "Display name of the instance, [2, 128] English or Chinese characters, must 
     * start with a letter or Chinese in size, can contain numbers, "_" or ".", "-"
     */
    public instanceName: string | ros.IResolvable | undefined;

    /**
     * @Property keyPairName: Cloud phone instance key pair name. 
     * The cloud phone key can be imported through the ImportKeyPair interface.
     */
    public keyPairName: string | ros.IResolvable | undefined;

    /**
     * @Property period: Prepaid time period. While PeriodUnit is month, it could be 1, 2, 3, 6.
     * While PeriodUnit is year, it could be from 1 to 5Default value is 1.
     *
     */
    public period: number | ros.IResolvable | undefined;

    /**
     * @Property periodUnit: Unit of prepaid time period, it could be Month\/Year. Default value is Month.
     */
    public periodUnit: string | ros.IResolvable | undefined;

    /**
     * @Property resolution: You can use the DescribeInstanceTypes interface to query the list of 
     * resolutions supported by the current specification and select an appropriate resolution.
     */
    public resolution: string | ros.IResolvable | undefined;

    /**
     * @Property tag: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    public tag: Array<ros.RosTag | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property vncPassword: Cloud phone VNC password.
     * The password must be six characters long, and must contain only uppercase, 
     * lowercase English letters and Arabic numerals.
     */
    public vncPassword: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceGroupProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInstanceGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrInstanceIds = this.getAtt('InstanceIds');
        this.attrOrderId = this.getAtt('OrderId');
        this.attrPrivateIps = this.getAtt('PrivateIps');
        this.attrTradePrice = this.getAtt('TradePrice');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.imageId = props.imageId;
        this.instanceType = props.instanceType;
        this.securityGroupId = props.securityGroupId;
        this.vSwitchId = props.vSwitchId;
        this.amount = props.amount;
        this.autoPay = props.autoPay;
        this.autoRenew = props.autoRenew;
        this.chargeType = props.chargeType;
        this.description = props.description;
        this.eipBandwidth = props.eipBandwidth;
        this.instanceName = props.instanceName;
        this.keyPairName = props.keyPairName;
        this.period = props.period;
        this.periodUnit = props.periodUnit;
        this.resolution = props.resolution;
        this.tag = props.tag;
        this.vncPassword = props.vncPassword;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            imageId: this.imageId,
            instanceType: this.instanceType,
            securityGroupId: this.securityGroupId,
            vSwitchId: this.vSwitchId,
            amount: this.amount,
            autoPay: this.autoPay,
            autoRenew: this.autoRenew,
            chargeType: this.chargeType,
            description: this.description,
            eipBandwidth: this.eipBandwidth,
            instanceName: this.instanceName,
            keyPairName: this.keyPairName,
            period: this.period,
            periodUnit: this.periodUnit,
            resolution: this.resolution,
            tag: this.tag,
            vncPassword: this.vncPassword,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosInstanceGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosInstanceGroup {
    /**
     * @stability external
     */
    export interface TagProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `TagProperty`
 *
 * @param properties - the TypeScript properties of a `TagProperty`
 *
 * @returns the result of the validation.
 */
function RosInstanceGroup_TagPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CloudPhone::InstanceGroup.Tag` resource
 *
 * @param properties - the TypeScript properties of a `TagProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CloudPhone::InstanceGroup.Tag` resource.
 */
// @ts-ignore TS6133
function rosInstanceGroupTagPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosInstanceGroup_TagPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `RosKeyPair`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudphone-keypair
 */
export interface RosKeyPairProps {

    /**
     * @Property keyPairName: The name of the key pair. The name must be globally unique. The name must be 2 to 128 characters in length. The name must start with a letter but cannot start with http:\/\/ or https:\/\/. The name can contain letters, digits, colons (:), underscores (_), and hyphens (-).
     */
    readonly keyPairName: string | ros.IResolvable;

    /**
     * @Property publicKeyBody: The public key content of the key pair.
     */
    readonly publicKeyBody: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosKeyPairProps`
 *
 * @param properties - the TypeScript properties of a `RosKeyPairProps`
 *
 * @returns the result of the validation.
 */
function RosKeyPairPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('keyPairName', ros.requiredValidator)(properties.keyPairName));
    errors.collect(ros.propertyValidator('keyPairName', ros.validateString)(properties.keyPairName));
    errors.collect(ros.propertyValidator('publicKeyBody', ros.requiredValidator)(properties.publicKeyBody));
    errors.collect(ros.propertyValidator('publicKeyBody', ros.validateString)(properties.publicKeyBody));
    return errors.wrap('supplied properties not correct for "RosKeyPairProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CloudPhone::KeyPair` resource
 *
 * @param properties - the TypeScript properties of a `RosKeyPairProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CloudPhone::KeyPair` resource.
 */
// @ts-ignore TS6133
function rosKeyPairPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosKeyPairPropsValidator(properties).assertSuccess();
    }
    return {
      'KeyPairName': ros.stringToRosTemplate(properties.keyPairName),
      'PublicKeyBody': ros.stringToRosTemplate(properties.publicKeyBody),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CloudPhone::KeyPair`, which is used to import the public key of a Rivest-Shamir-Adleman (RSA)-encrypted key pair that is generated by a third-party tool.
 * @Note This class does not contain additional functions, so it is recommended to use the `KeyPair` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudphone-keypair
 */
export class RosKeyPair extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CloudPhone::KeyPair";

    /**
     * @Attribute CreateTime: The creation time of the resource.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute KeyPairFingerPrint: The fingerprint of the key pair. The message-digest algorithm 5 (MD5) is used based on the public key fingerprint format defined in RFC 4716.
     */
    public readonly attrKeyPairFingerPrint: ros.IResolvable;

    /**
     * @Attribute KeyPairName: The name of the key pair.
     */
    public readonly attrKeyPairName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property keyPairName: The name of the key pair. The name must be globally unique. The name must be 2 to 128 characters in length. The name must start with a letter but cannot start with http:\/\/ or https:\/\/. The name can contain letters, digits, colons (:), underscores (_), and hyphens (-).
     */
    public keyPairName: string | ros.IResolvable;

    /**
     * @Property publicKeyBody: The public key content of the key pair.
     */
    public publicKeyBody: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosKeyPairProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosKeyPair.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrKeyPairFingerPrint = this.getAtt('KeyPairFingerPrint');
        this.attrKeyPairName = this.getAtt('KeyPairName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.keyPairName = props.keyPairName;
        this.publicKeyBody = props.publicKeyBody;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            keyPairName: this.keyPairName,
            publicKeyBody: this.publicKeyBody,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosKeyPairPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosRunCommand`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudphone-runcommand
 */
export interface RosRunCommandProps {

    /**
     * @Property command: The command to be executed.
     * The maximum length of a command is 1024 bytes, and only supports lowercase letters, numbers, downline (_), points (.), Slanting (\/), colon (:), medium line (-).
     */
    readonly command: string | ros.IResolvable;

    /**
     * @Property instanceIds: ID of the instance executing the command.
     * Range of n: 1 ~ 10
     */
    readonly instanceIds: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property runAgainOn: The stage of executing the command again.
     */
    readonly runAgainOn?: Array<string | ros.IResolvable> | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosRunCommandProps`
 *
 * @param properties - the TypeScript properties of a `RosRunCommandProps`
 *
 * @returns the result of the validation.
 */
function RosRunCommandPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('command', ros.requiredValidator)(properties.command));
    errors.collect(ros.propertyValidator('command', ros.validateString)(properties.command));
    if(properties.runAgainOn && (Array.isArray(properties.runAgainOn) || (typeof properties.runAgainOn) === 'string')) {
        errors.collect(ros.propertyValidator('runAgainOn', ros.validateLength)({
            data: properties.runAgainOn.length,
            min: 1,
            max: 1,
          }));
    }
    errors.collect(ros.propertyValidator('runAgainOn', ros.listValidator(ros.validateString))(properties.runAgainOn));
    errors.collect(ros.propertyValidator('instanceIds', ros.requiredValidator)(properties.instanceIds));
    if(properties.instanceIds && (Array.isArray(properties.instanceIds) || (typeof properties.instanceIds) === 'string')) {
        errors.collect(ros.propertyValidator('instanceIds', ros.validateLength)({
            data: properties.instanceIds.length,
            min: 1,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('instanceIds', ros.listValidator(ros.validateString))(properties.instanceIds));
    return errors.wrap('supplied properties not correct for "RosRunCommandProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CloudPhone::RunCommand` resource
 *
 * @param properties - the TypeScript properties of a `RosRunCommandProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CloudPhone::RunCommand` resource.
 */
// @ts-ignore TS6133
function rosRunCommandPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosRunCommandPropsValidator(properties).assertSuccess();
    }
    return {
      'Command': ros.stringToRosTemplate(properties.command),
      'InstanceIds': ros.listMapper(ros.stringToRosTemplate)(properties.instanceIds),
      'RunAgainOn': ros.listMapper(ros.stringToRosTemplate)(properties.runAgainOn),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CloudPhone::RunCommand`, which is used to run a command on Elastic Cloud Phone (ECP) instances.
 * @Note This class does not contain additional functions, so it is recommended to use the `RunCommand` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudphone-runcommand
 */
export class RosRunCommand extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CloudPhone::RunCommand";

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property command: The command to be executed.
     * The maximum length of a command is 1024 bytes, and only supports lowercase letters, numbers, downline (_), points (.), Slanting (\/), colon (:), medium line (-).
     */
    public command: string | ros.IResolvable;

    /**
     * @Property instanceIds: ID of the instance executing the command.
     * Range of n: 1 ~ 10
     */
    public instanceIds: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property runAgainOn: The stage of executing the command again.
     */
    public runAgainOn: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRunCommandProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosRunCommand.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.command = props.command;
        this.instanceIds = props.instanceIds;
        this.runAgainOn = props.runAgainOn;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            command: this.command,
            instanceIds: this.instanceIds,
            runAgainOn: this.runAgainOn,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosRunCommandPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
