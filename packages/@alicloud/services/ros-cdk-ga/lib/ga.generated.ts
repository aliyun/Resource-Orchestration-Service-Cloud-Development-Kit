// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosAccelerator`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-accelerator
 */
export interface RosAcceleratorProps {

    /**
     * @Property acceleratorName: The Name of the GA instance
     */
    readonly acceleratorName?: string | ros.IResolvable;

    /**
     * @Property autoPay: Whether to pay automatically.
     */
    readonly autoPay?: boolean | ros.IResolvable;

    /**
     * @Property autoUseCoupon: The AutoUseCoupon of the GA instance.
     */
    readonly autoUseCoupon?: string | ros.IResolvable;

    /**
     * @Property bandwidthBillingType: Bandwidth billing method.
     */
    readonly bandwidthBillingType?: string | ros.IResolvable;

    /**
     * @Property duration: Length of purchase.
     */
    readonly duration?: string | ros.IResolvable;

    /**
     * @Property enableCrossBorder: Whether the global acceleration instance enables the cross-border line function.
     */
    readonly enableCrossBorder?: boolean | ros.IResolvable;

    /**
     * @Property instanceChargeType: Global acceleration instance payment type, the default value is PREPAY (prepaid).
     */
    readonly instanceChargeType?: string | ros.IResolvable;

    /**
     * @Property ipSetConfig: Accelerate zone configuration.
     */
    readonly ipSetConfig?: RosAccelerator.IpSetConfigProperty | ros.IResolvable;

    /**
     * @Property pricingCycle: Billing cycle.
     */
    readonly pricingCycle?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ResourceGroup Id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property spec: Specifications of Global Acceleration Instances.
     */
    readonly spec?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosAcceleratorProps`
 *
 * @param properties - the TypeScript properties of a `RosAcceleratorProps`
 *
 * @returns the result of the validation.
 */
function RosAcceleratorPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('bandwidthBillingType', ros.validateString)(properties.bandwidthBillingType));
    errors.collect(ros.propertyValidator('acceleratorName', ros.validateString)(properties.acceleratorName));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('autoUseCoupon', ros.validateString)(properties.autoUseCoupon));
    if(properties.instanceChargeType && (typeof properties.instanceChargeType) !== 'object') {
        errors.collect(ros.propertyValidator('instanceChargeType', ros.validateAllowedValues)({
          data: properties.instanceChargeType,
          allowedValues: ["PayAsYouGo","PostPaid","PayOnDemand","Postpaid","PostPay","Postpay","POSTPAY","POST","Subscription","PrePaid","Prepaid","PrePay","Prepay","PREPAY","PRE"],
        }));
    }
    errors.collect(ros.propertyValidator('instanceChargeType', ros.validateString)(properties.instanceChargeType));
    errors.collect(ros.propertyValidator('pricingCycle', ros.validateString)(properties.pricingCycle));
    errors.collect(ros.propertyValidator('enableCrossBorder', ros.validateBoolean)(properties.enableCrossBorder));
    errors.collect(ros.propertyValidator('duration', ros.validateString)(properties.duration));
    errors.collect(ros.propertyValidator('autoPay', ros.validateBoolean)(properties.autoPay));
    errors.collect(ros.propertyValidator('ipSetConfig', RosAccelerator_IpSetConfigPropertyValidator)(properties.ipSetConfig));
    errors.collect(ros.propertyValidator('spec', ros.validateString)(properties.spec));
    return errors.wrap('supplied properties not correct for "RosAcceleratorProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::GA::Accelerator` resource
 *
 * @param properties - the TypeScript properties of a `RosAcceleratorProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::GA::Accelerator` resource.
 */
// @ts-ignore TS6133
function rosAcceleratorPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAcceleratorPropsValidator(properties).assertSuccess();
    }
    return {
      'AcceleratorName': ros.stringToRosTemplate(properties.acceleratorName),
      'AutoPay': ros.booleanToRosTemplate(properties.autoPay),
      'AutoUseCoupon': ros.stringToRosTemplate(properties.autoUseCoupon),
      'BandwidthBillingType': ros.stringToRosTemplate(properties.bandwidthBillingType),
      'Duration': ros.stringToRosTemplate(properties.duration),
      'EnableCrossBorder': ros.booleanToRosTemplate(properties.enableCrossBorder),
      'InstanceChargeType': ros.stringToRosTemplate(properties.instanceChargeType),
      'IpSetConfig': rosAcceleratorIpSetConfigPropertyToRosTemplate(properties.ipSetConfig),
      'PricingCycle': ros.stringToRosTemplate(properties.pricingCycle),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'Spec': ros.stringToRosTemplate(properties.spec),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::GA::Accelerator`, which is used to create a Global Accelerator (GA) instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `Accelerator` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-accelerator
 */
export class RosAccelerator extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::GA::Accelerator";

    /**
     * @Attribute AcceleratorId: The ID of the GA instance to query.
     */
    public readonly attrAcceleratorId: ros.IResolvable;

    /**
     * @Attribute AcceleratorName: The Name of the GA instance
     */
    public readonly attrAcceleratorName: ros.IResolvable;

    /**
     * @Attribute AutoPay: The AutoPay of the GA instance.
     */
    public readonly attrAutoPay: ros.IResolvable;

    /**
     * @Attribute AutoUseCoupon: The AutoUseCoupon of the GA instance.
     */
    public readonly attrAutoUseCoupon: ros.IResolvable;

    /**
     * @Attribute DnsName: The DNS name of the accelerator.
     */
    public readonly attrDnsName: ros.IResolvable;

    /**
     * @Attribute Duration: The Duration of the GA instance
     */
    public readonly attrDuration: ros.IResolvable;

    /**
     * @Attribute OrderId: The OrderId of the GA instance
     */
    public readonly attrOrderId: ros.IResolvable;

    /**
     * @Attribute PaymentType: The Payment Typethe GA instance
     */
    public readonly attrPaymentType: ros.IResolvable;

    /**
     * @Attribute PricingCycle: The PricingCycle of the GA instance.
     */
    public readonly attrPricingCycle: ros.IResolvable;

    /**
     * @Attribute Spec: The instance type of the GA instance
     */
    public readonly attrSpec: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property acceleratorName: The Name of the GA instance
     */
    public acceleratorName: string | ros.IResolvable | undefined;

    /**
     * @Property autoPay: Whether to pay automatically.
     */
    public autoPay: boolean | ros.IResolvable | undefined;

    /**
     * @Property autoUseCoupon: The AutoUseCoupon of the GA instance.
     */
    public autoUseCoupon: string | ros.IResolvable | undefined;

    /**
     * @Property bandwidthBillingType: Bandwidth billing method.
     */
    public bandwidthBillingType: string | ros.IResolvable | undefined;

    /**
     * @Property duration: Length of purchase.
     */
    public duration: string | ros.IResolvable | undefined;

    /**
     * @Property enableCrossBorder: Whether the global acceleration instance enables the cross-border line function.
     */
    public enableCrossBorder: boolean | ros.IResolvable | undefined;

    /**
     * @Property instanceChargeType: Global acceleration instance payment type, the default value is PREPAY (prepaid).
     */
    public instanceChargeType: string | ros.IResolvable | undefined;

    /**
     * @Property ipSetConfig: Accelerate zone configuration.
     */
    public ipSetConfig: RosAccelerator.IpSetConfigProperty | ros.IResolvable | undefined;

    /**
     * @Property pricingCycle: Billing cycle.
     */
    public pricingCycle: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ResourceGroup Id.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property spec: Specifications of Global Acceleration Instances.
     */
    public spec: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAcceleratorProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAccelerator.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAcceleratorId = this.getAtt('AcceleratorId');
        this.attrAcceleratorName = this.getAtt('AcceleratorName');
        this.attrAutoPay = this.getAtt('AutoPay');
        this.attrAutoUseCoupon = this.getAtt('AutoUseCoupon');
        this.attrDnsName = this.getAtt('DnsName');
        this.attrDuration = this.getAtt('Duration');
        this.attrOrderId = this.getAtt('OrderId');
        this.attrPaymentType = this.getAtt('PaymentType');
        this.attrPricingCycle = this.getAtt('PricingCycle');
        this.attrSpec = this.getAtt('Spec');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.acceleratorName = props.acceleratorName;
        this.autoPay = props.autoPay;
        this.autoUseCoupon = props.autoUseCoupon;
        this.bandwidthBillingType = props.bandwidthBillingType;
        this.duration = props.duration;
        this.enableCrossBorder = props.enableCrossBorder;
        this.instanceChargeType = props.instanceChargeType;
        this.ipSetConfig = props.ipSetConfig;
        this.pricingCycle = props.pricingCycle;
        this.resourceGroupId = props.resourceGroupId;
        this.spec = props.spec;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            acceleratorName: this.acceleratorName,
            autoPay: this.autoPay,
            autoUseCoupon: this.autoUseCoupon,
            bandwidthBillingType: this.bandwidthBillingType,
            duration: this.duration,
            enableCrossBorder: this.enableCrossBorder,
            instanceChargeType: this.instanceChargeType,
            ipSetConfig: this.ipSetConfig,
            pricingCycle: this.pricingCycle,
            resourceGroupId: this.resourceGroupId,
            spec: this.spec,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAcceleratorPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosAccelerator {
    /**
     * @stability external
     */
    export interface IpSetConfigProperty {
        /**
         * @Property accessMode: Accelerated regional access mode.
         */
        readonly accessMode?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `IpSetConfigProperty`
 *
 * @param properties - the TypeScript properties of a `IpSetConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosAccelerator_IpSetConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('accessMode', ros.validateString)(properties.accessMode));
    return errors.wrap('supplied properties not correct for "IpSetConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::GA::Accelerator.IpSetConfig` resource
 *
 * @param properties - the TypeScript properties of a `IpSetConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::GA::Accelerator.IpSetConfig` resource.
 */
// @ts-ignore TS6133
function rosAcceleratorIpSetConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosAccelerator_IpSetConfigPropertyValidator(properties).assertSuccess();
    return {
      'AccessMode': ros.stringToRosTemplate(properties.accessMode),
    };
}

/**
 * Properties for defining a `RosAcl`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-acl
 */
export interface RosAclProps {

    /**
     * @Property addressIpVersion: The IP version of the ACL.
     */
    readonly addressIpVersion: string | ros.IResolvable;

    /**
     * @Property aclEntries: The entries of IP addresses or CIDR blocks to add to the ACL. You can add up to 20 entries.
     */
    readonly aclEntries?: Array<RosAcl.AclEntriesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property aclName: The name of the ACL.
     */
    readonly aclName?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property tags: Tags of the ACL.
     */
    readonly tags?: RosAcl.TagsProperty[];
}

/**
 * Determine whether the given properties match those of a `RosAclProps`
 *
 * @param properties - the TypeScript properties of a `RosAclProps`
 *
 * @returns the result of the validation.
 */
function RosAclPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.aclEntries && (Array.isArray(properties.aclEntries) || (typeof properties.aclEntries) === 'string')) {
        errors.collect(ros.propertyValidator('aclEntries', ros.validateLength)({
            data: properties.aclEntries.length,
            min: 0,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('aclEntries', ros.listValidator(RosAcl_AclEntriesPropertyValidator))(properties.aclEntries));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('addressIpVersion', ros.requiredValidator)(properties.addressIpVersion));
    errors.collect(ros.propertyValidator('addressIpVersion', ros.validateString)(properties.addressIpVersion));
    errors.collect(ros.propertyValidator('aclName', ros.validateString)(properties.aclName));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosAcl_TagsPropertyValidator))(properties.tags));
    return errors.wrap('supplied properties not correct for "RosAclProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::GA::Acl` resource
 *
 * @param properties - the TypeScript properties of a `RosAclProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::GA::Acl` resource.
 */
// @ts-ignore TS6133
function rosAclPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAclPropsValidator(properties).assertSuccess();
    }
    return {
      'AddressIPVersion': ros.stringToRosTemplate(properties.addressIpVersion),
      'AclEntries': ros.listMapper(rosAclAclEntriesPropertyToRosTemplate)(properties.aclEntries),
      'AclName': ros.stringToRosTemplate(properties.aclName),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'Tags': ros.listMapper(rosAclTagsPropertyToRosTemplate)(properties.tags),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::GA::Acl`, which is used to create an access control list (ACL).
 * @Note This class does not contain additional functions, so it is recommended to use the `Acl` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-acl
 */
export class RosAcl extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::GA::Acl";

    /**
     * @Attribute AclEntries: The entries of the ACL.
     */
    public readonly attrAclEntries: ros.IResolvable;

    /**
     * @Attribute AclId: The  ID of the ACL.
     */
    public readonly attrAclId: ros.IResolvable;

    /**
     * @Attribute AclName: The name of the ACL.
     */
    public readonly attrAclName: ros.IResolvable;

    /**
     * @Attribute AddressIPVersion: The IP version of the ACL.
     */
    public readonly attrAddressIpVersion: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * @Attribute Tags: The tags of the resource.
     */
    public readonly attrTags: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property addressIpVersion: The IP version of the ACL.
     */
    public addressIpVersion: string | ros.IResolvable;

    /**
     * @Property aclEntries: The entries of IP addresses or CIDR blocks to add to the ACL. You can add up to 20 entries.
     */
    public aclEntries: Array<RosAcl.AclEntriesProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property aclName: The name of the ACL.
     */
    public aclName: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags of the ACL.
     */
    public tags: RosAcl.TagsProperty[] | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAclProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAcl.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAclEntries = this.getAtt('AclEntries');
        this.attrAclId = this.getAtt('AclId');
        this.attrAclName = this.getAtt('AclName');
        this.attrAddressIpVersion = this.getAtt('AddressIPVersion');
        this.attrResourceGroupId = this.getAtt('ResourceGroupId');
        this.attrTags = this.getAtt('Tags');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.addressIpVersion = props.addressIpVersion;
        this.aclEntries = props.aclEntries;
        this.aclName = props.aclName;
        this.resourceGroupId = props.resourceGroupId;
        this.tags = props.tags;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            addressIpVersion: this.addressIpVersion,
            aclEntries: this.aclEntries,
            aclName: this.aclName,
            resourceGroupId: this.resourceGroupId,
            tags: this.tags,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAclPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosAcl {
    /**
     * @stability external
     */
    export interface AclEntriesProperty {
        /**
         * @Property entry: The IP addresses (192.168.XX.XX) or CIDR blocks (10.0.XX.XX\/24) that you want to add to the ACL.
         */
        readonly entry?: string | ros.IResolvable;
        /**
         * @Property entryDescription: The description of the entry that you want to add to the AC,The description must be 1 to 256 characters in length, and can contain letters, digits, hyphens (-), forward slashes (\/), periods (.), and underscores (_).
         */
        readonly entryDescription?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `AclEntriesProperty`
 *
 * @param properties - the TypeScript properties of a `AclEntriesProperty`
 *
 * @returns the result of the validation.
 */
function RosAcl_AclEntriesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('entry', ros.validateString)(properties.entry));
    errors.collect(ros.propertyValidator('entryDescription', ros.validateString)(properties.entryDescription));
    return errors.wrap('supplied properties not correct for "AclEntriesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::GA::Acl.AclEntries` resource
 *
 * @param properties - the TypeScript properties of a `AclEntriesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::GA::Acl.AclEntries` resource.
 */
// @ts-ignore TS6133
function rosAclAclEntriesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosAcl_AclEntriesPropertyValidator(properties).assertSuccess();
    return {
      'Entry': ros.stringToRosTemplate(properties.entry),
      'EntryDescription': ros.stringToRosTemplate(properties.entryDescription),
    };
}

export namespace RosAcl {
    /**
     * @stability external
     */
    export interface TagsProperty {
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
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosAcl_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::GA::Acl.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::GA::Acl.Tags` resource.
 */
// @ts-ignore TS6133
function rosAclTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosAcl_TagsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `RosAclsListenerAssociation`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-aclslistenerassociation
 */
export interface RosAclsListenerAssociationProps {

    /**
     * @Property aclIds: The ID of the ACL. You can associate up to two ACL IDs.
     */
    readonly aclIds: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property aclType: The type of ACL. Valid values:white: a whitelist. Only requests from the IP addresses or CIDR blocks in the ACL are forwarded. Whitelists apply to scenarios in which you want to allow only specific IP addresses to access an application. Your service may be adversely affected if the whitelist is not properly configured. After you configure a whitelist for a listener, only requests from the IP addresses that are added to the whitelist are forwarded by the listener. If the whitelist is enabled but no IP addresses are added to it, the listener does not forward requests.
     * black: a blacklist. All requests from the IP addresses or CIDR blocks in the ACL are denied. Blacklists apply to scenarios in which you want to deny access from specific IP addresses to an application. If the blacklist is enabled but no IP addresses are added to it, the listener forwards all requests.
     */
    readonly aclType: string | ros.IResolvable;

    /**
     * @Property listenerId: The ID of the listener.
     */
    readonly listenerId: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosAclsListenerAssociationProps`
 *
 * @param properties - the TypeScript properties of a `RosAclsListenerAssociationProps`
 *
 * @returns the result of the validation.
 */
function RosAclsListenerAssociationPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('aclType', ros.requiredValidator)(properties.aclType));
    if(properties.aclType && (typeof properties.aclType) !== 'object') {
        errors.collect(ros.propertyValidator('aclType', ros.validateAllowedValues)({
          data: properties.aclType,
          allowedValues: ["white","black"],
        }));
    }
    errors.collect(ros.propertyValidator('aclType', ros.validateString)(properties.aclType));
    errors.collect(ros.propertyValidator('aclIds', ros.requiredValidator)(properties.aclIds));
    if(properties.aclIds && (Array.isArray(properties.aclIds) || (typeof properties.aclIds) === 'string')) {
        errors.collect(ros.propertyValidator('aclIds', ros.validateLength)({
            data: properties.aclIds.length,
            min: 1,
            max: 2,
          }));
    }
    errors.collect(ros.propertyValidator('aclIds', ros.listValidator(ros.validateString))(properties.aclIds));
    errors.collect(ros.propertyValidator('listenerId', ros.requiredValidator)(properties.listenerId));
    errors.collect(ros.propertyValidator('listenerId', ros.validateString)(properties.listenerId));
    return errors.wrap('supplied properties not correct for "RosAclsListenerAssociationProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::GA::AclsListenerAssociation` resource
 *
 * @param properties - the TypeScript properties of a `RosAclsListenerAssociationProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::GA::AclsListenerAssociation` resource.
 */
// @ts-ignore TS6133
function rosAclsListenerAssociationPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAclsListenerAssociationPropsValidator(properties).assertSuccess();
    }
    return {
      'AclIds': ros.listMapper(ros.stringToRosTemplate)(properties.aclIds),
      'AclType': ros.stringToRosTemplate(properties.aclType),
      'ListenerId': ros.stringToRosTemplate(properties.listenerId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::GA::AclsListenerAssociation`, which is used to associate an access control list (ACL) with a listener.
 * @Note This class does not contain additional functions, so it is recommended to use the `AclsListenerAssociation` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-aclslistenerassociation
 */
export class RosAclsListenerAssociation extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::GA::AclsListenerAssociation";

    /**
     * @Attribute AclIds: The IDs of the ACL.
     */
    public readonly attrAclIds: ros.IResolvable;

    /**
     * @Attribute ListenerId: The ID of the listener.
     */
    public readonly attrListenerId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property aclIds: The ID of the ACL. You can associate up to two ACL IDs.
     */
    public aclIds: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property aclType: The type of ACL. Valid values:white: a whitelist. Only requests from the IP addresses or CIDR blocks in the ACL are forwarded. Whitelists apply to scenarios in which you want to allow only specific IP addresses to access an application. Your service may be adversely affected if the whitelist is not properly configured. After you configure a whitelist for a listener, only requests from the IP addresses that are added to the whitelist are forwarded by the listener. If the whitelist is enabled but no IP addresses are added to it, the listener does not forward requests.
     * black: a blacklist. All requests from the IP addresses or CIDR blocks in the ACL are denied. Blacklists apply to scenarios in which you want to deny access from specific IP addresses to an application. If the blacklist is enabled but no IP addresses are added to it, the listener forwards all requests.
     */
    public aclType: string | ros.IResolvable;

    /**
     * @Property listenerId: The ID of the listener.
     */
    public listenerId: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAclsListenerAssociationProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAclsListenerAssociation.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAclIds = this.getAtt('AclIds');
        this.attrListenerId = this.getAtt('ListenerId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.aclIds = props.aclIds;
        this.aclType = props.aclType;
        this.listenerId = props.listenerId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            aclIds: this.aclIds,
            aclType: this.aclType,
            listenerId: this.listenerId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAclsListenerAssociationPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosApplicationMonitor`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-applicationmonitor
 */
export interface RosApplicationMonitorProps {

    /**
     * @Property acceleratorId: The ID of the GA instance on which you want to perform the origin probing task.
     */
    readonly acceleratorId: string | ros.IResolvable;

    /**
     * @Property address: The URL or IP address that you want to probe.
     */
    readonly address: string | ros.IResolvable;

    /**
     * @Property listenerId: The ID of the listener on which you want to perform the origin probing task.
     */
    readonly listenerId: string | ros.IResolvable;

    /**
     * @Property taskName: The name of the origin probing task. The name must be 1 to 128 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
     */
    readonly taskName: string | ros.IResolvable;

    /**
     * @Property detectEnable: Specifies whether to enable the automatic diagnostics feature.
     */
    readonly detectEnable?: boolean | ros.IResolvable;

    /**
     * @Property detectThreshold: The threshold that is used to trigger the automatic diagnostics feature. Unit: percentage.Valid values: 0 to 100.The default value is 0, which indicates that the automatic diagnostics feature is not triggered.
     */
    readonly detectThreshold?: number | ros.IResolvable;

    /**
     * @Property detectTimes: The number of times that the threshold must be reached before the automatic diagnostics feature is triggered. Valid values: 1 to 20. Default value: 1.
     */
    readonly detectTimes?: number | ros.IResolvable;

    /**
     * @Property optionsJson: The extended options of the listener protocol that is used by the origin probing task. The options vary based on the listener protocol.
     */
    readonly optionsJson?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property silenceTime: The silence period of the automatic diagnostics feature. This parameter specifies the interval at which the automatic diagnostics feature is triggered. If the availability rate does not return to normal after GA triggers an automatic diagnostic task, GA must wait until the silence period ends before GA can trigger another automatic diagnostic task.If the number of consecutive times that the availability rate drops below the threshold of automatic diagnostics reaches the value of DetectTimes, the automatic diagnostics feature is triggered. The automatic diagnostics feature is not triggered again within the silence period even if the availability rate remains below the threshold. If the availability rate does not return to normal after the silence period ends, the automatic diagnostics feature is triggered again.Unit: seconds. Valid values: 300 to 86400. Default value: 300.
     */
    readonly silenceTime?: number | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosApplicationMonitorProps`
 *
 * @param properties - the TypeScript properties of a `RosApplicationMonitorProps`
 *
 * @returns the result of the validation.
 */
function RosApplicationMonitorPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.silenceTime && (typeof properties.silenceTime) !== 'object') {
        errors.collect(ros.propertyValidator('silenceTime', ros.validateRange)({
            data: properties.silenceTime,
            min: 300,
            max: 86400,
          }));
    }
    errors.collect(ros.propertyValidator('silenceTime', ros.validateNumber)(properties.silenceTime));
    if(properties.detectThreshold && (typeof properties.detectThreshold) !== 'object') {
        errors.collect(ros.propertyValidator('detectThreshold', ros.validateRange)({
            data: properties.detectThreshold,
            min: 0,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('detectThreshold', ros.validateNumber)(properties.detectThreshold));
    errors.collect(ros.propertyValidator('detectEnable', ros.validateBoolean)(properties.detectEnable));
    errors.collect(ros.propertyValidator('address', ros.requiredValidator)(properties.address));
    errors.collect(ros.propertyValidator('address', ros.validateString)(properties.address));
    errors.collect(ros.propertyValidator('optionsJson', ros.hashValidator(ros.validateAny))(properties.optionsJson));
    errors.collect(ros.propertyValidator('taskName', ros.requiredValidator)(properties.taskName));
    if(properties.taskName && (Array.isArray(properties.taskName) || (typeof properties.taskName) === 'string')) {
        errors.collect(ros.propertyValidator('taskName', ros.validateLength)({
            data: properties.taskName.length,
            min: 1,
            max: 128,
          }));
    }
    errors.collect(ros.propertyValidator('taskName', ros.validateString)(properties.taskName));
    errors.collect(ros.propertyValidator('acceleratorId', ros.requiredValidator)(properties.acceleratorId));
    errors.collect(ros.propertyValidator('acceleratorId', ros.validateString)(properties.acceleratorId));
    if(properties.detectTimes && (typeof properties.detectTimes) !== 'object') {
        errors.collect(ros.propertyValidator('detectTimes', ros.validateRange)({
            data: properties.detectTimes,
            min: 1,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('detectTimes', ros.validateNumber)(properties.detectTimes));
    errors.collect(ros.propertyValidator('listenerId', ros.requiredValidator)(properties.listenerId));
    errors.collect(ros.propertyValidator('listenerId', ros.validateString)(properties.listenerId));
    return errors.wrap('supplied properties not correct for "RosApplicationMonitorProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::GA::ApplicationMonitor` resource
 *
 * @param properties - the TypeScript properties of a `RosApplicationMonitorProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::GA::ApplicationMonitor` resource.
 */
// @ts-ignore TS6133
function rosApplicationMonitorPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosApplicationMonitorPropsValidator(properties).assertSuccess();
    }
    return {
      'AcceleratorId': ros.stringToRosTemplate(properties.acceleratorId),
      'Address': ros.stringToRosTemplate(properties.address),
      'ListenerId': ros.stringToRosTemplate(properties.listenerId),
      'TaskName': ros.stringToRosTemplate(properties.taskName),
      'DetectEnable': ros.booleanToRosTemplate(properties.detectEnable),
      'DetectThreshold': ros.numberToRosTemplate(properties.detectThreshold),
      'DetectTimes': ros.numberToRosTemplate(properties.detectTimes),
      'OptionsJson': ros.hashMapper(ros.objectToRosTemplate)(properties.optionsJson),
      'SilenceTime': ros.numberToRosTemplate(properties.silenceTime),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::GA::ApplicationMonitor`, which is used to create an origin probing task.
 * @Note This class does not contain additional functions, so it is recommended to use the `ApplicationMonitor` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-applicationmonitor
 */
export class RosApplicationMonitor extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::GA::ApplicationMonitor";

    /**
     * @Attribute TaskId: The ID of the origin probing task.
     */
    public readonly attrTaskId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property acceleratorId: The ID of the GA instance on which you want to perform the origin probing task.
     */
    public acceleratorId: string | ros.IResolvable;

    /**
     * @Property address: The URL or IP address that you want to probe.
     */
    public address: string | ros.IResolvable;

    /**
     * @Property listenerId: The ID of the listener on which you want to perform the origin probing task.
     */
    public listenerId: string | ros.IResolvable;

    /**
     * @Property taskName: The name of the origin probing task. The name must be 1 to 128 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
     */
    public taskName: string | ros.IResolvable;

    /**
     * @Property detectEnable: Specifies whether to enable the automatic diagnostics feature.
     */
    public detectEnable: boolean | ros.IResolvable | undefined;

    /**
     * @Property detectThreshold: The threshold that is used to trigger the automatic diagnostics feature. Unit: percentage.Valid values: 0 to 100.The default value is 0, which indicates that the automatic diagnostics feature is not triggered.
     */
    public detectThreshold: number | ros.IResolvable | undefined;

    /**
     * @Property detectTimes: The number of times that the threshold must be reached before the automatic diagnostics feature is triggered. Valid values: 1 to 20. Default value: 1.
     */
    public detectTimes: number | ros.IResolvable | undefined;

    /**
     * @Property optionsJson: The extended options of the listener protocol that is used by the origin probing task. The options vary based on the listener protocol.
     */
    public optionsJson: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

    /**
     * @Property silenceTime: The silence period of the automatic diagnostics feature. This parameter specifies the interval at which the automatic diagnostics feature is triggered. If the availability rate does not return to normal after GA triggers an automatic diagnostic task, GA must wait until the silence period ends before GA can trigger another automatic diagnostic task.If the number of consecutive times that the availability rate drops below the threshold of automatic diagnostics reaches the value of DetectTimes, the automatic diagnostics feature is triggered. The automatic diagnostics feature is not triggered again within the silence period even if the availability rate remains below the threshold. If the availability rate does not return to normal after the silence period ends, the automatic diagnostics feature is triggered again.Unit: seconds. Valid values: 300 to 86400. Default value: 300.
     */
    public silenceTime: number | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosApplicationMonitorProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosApplicationMonitor.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrTaskId = this.getAtt('TaskId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.acceleratorId = props.acceleratorId;
        this.address = props.address;
        this.listenerId = props.listenerId;
        this.taskName = props.taskName;
        this.detectEnable = props.detectEnable;
        this.detectThreshold = props.detectThreshold;
        this.detectTimes = props.detectTimes;
        this.optionsJson = props.optionsJson;
        this.silenceTime = props.silenceTime;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            acceleratorId: this.acceleratorId,
            address: this.address,
            listenerId: this.listenerId,
            taskName: this.taskName,
            detectEnable: this.detectEnable,
            detectThreshold: this.detectThreshold,
            detectTimes: this.detectTimes,
            optionsJson: this.optionsJson,
            silenceTime: this.silenceTime,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosApplicationMonitorPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosBandwidthPackage`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-bandwidthpackage
 */
export interface RosBandwidthPackageProps {

    /**
     * @Property bandwidth: The bandwidth provided by the bandwidth plan.
     */
    readonly bandwidth: number | ros.IResolvable;

    /**
     * @Property type: The type of the bandwidth plan
     */
    readonly type: string | ros.IResolvable;

    /**
     * @Property autoPay: Specifies whether to enable automatic payment.
     */
    readonly autoPay?: boolean | ros.IResolvable;

    /**
     * @Property autoUseCoupon: The AutoUseCoupon  of the bandwidth
     */
    readonly autoUseCoupon?: string | ros.IResolvable;

    /**
     * @Property bandwidthType: the bandwidth BandwidthType of the bandwidth
     */
    readonly bandwidthType?: string | ros.IResolvable;

    /**
     * @Property billingType: The BillingType of the bandwidth
     */
    readonly billingType?: string | ros.IResolvable;

    /**
     * @Property cbnGeographicRegionIdA: The CbnGeographicRegionIdA  of the bandwidth
     */
    readonly cbnGeographicRegionIdA?: string | ros.IResolvable;

    /**
     * @Property cbnGeographicRegionIdB: The CbnGeographicRegionIdB of the bandwidth
     */
    readonly cbnGeographicRegionIdB?: string | ros.IResolvable;

    /**
     * @Property chargeType: The ChargeType of the bandwidth
     */
    readonly chargeType?: string | ros.IResolvable;

    /**
     * @Property duration:
     */
    readonly duration?: string | ros.IResolvable;

    /**
     * @Property pricingCycle:
     */
    readonly pricingCycle?: string | ros.IResolvable;

    /**
     * @Property ratio: The Ratio of the bandwidth
     */
    readonly ratio?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosBandwidthPackageProps`
 *
 * @param properties - the TypeScript properties of a `RosBandwidthPackageProps`
 *
 * @returns the result of the validation.
 */
function RosBandwidthPackagePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('bandwidthType', ros.validateString)(properties.bandwidthType));
    errors.collect(ros.propertyValidator('cbnGeographicRegionIdB', ros.validateString)(properties.cbnGeographicRegionIdB));
    errors.collect(ros.propertyValidator('type', ros.requiredValidator)(properties.type));
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('cbnGeographicRegionIdA', ros.validateString)(properties.cbnGeographicRegionIdA));
    errors.collect(ros.propertyValidator('autoUseCoupon', ros.validateString)(properties.autoUseCoupon));
    errors.collect(ros.propertyValidator('pricingCycle', ros.validateString)(properties.pricingCycle));
    errors.collect(ros.propertyValidator('chargeType', ros.validateString)(properties.chargeType));
    errors.collect(ros.propertyValidator('bandwidth', ros.requiredValidator)(properties.bandwidth));
    errors.collect(ros.propertyValidator('bandwidth', ros.validateNumber)(properties.bandwidth));
    errors.collect(ros.propertyValidator('ratio', ros.validateString)(properties.ratio));
    errors.collect(ros.propertyValidator('duration', ros.validateString)(properties.duration));
    errors.collect(ros.propertyValidator('autoPay', ros.validateBoolean)(properties.autoPay));
    errors.collect(ros.propertyValidator('billingType', ros.validateString)(properties.billingType));
    return errors.wrap('supplied properties not correct for "RosBandwidthPackageProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::GA::BandwidthPackage` resource
 *
 * @param properties - the TypeScript properties of a `RosBandwidthPackageProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::GA::BandwidthPackage` resource.
 */
// @ts-ignore TS6133
function rosBandwidthPackagePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosBandwidthPackagePropsValidator(properties).assertSuccess();
    }
    return {
      'Bandwidth': ros.numberToRosTemplate(properties.bandwidth),
      'Type': ros.stringToRosTemplate(properties.type),
      'AutoPay': ros.booleanToRosTemplate(properties.autoPay),
      'AutoUseCoupon': ros.stringToRosTemplate(properties.autoUseCoupon),
      'BandwidthType': ros.stringToRosTemplate(properties.bandwidthType),
      'BillingType': ros.stringToRosTemplate(properties.billingType),
      'CbnGeographicRegionIdA': ros.stringToRosTemplate(properties.cbnGeographicRegionIdA),
      'CbnGeographicRegionIdB': ros.stringToRosTemplate(properties.cbnGeographicRegionIdB),
      'ChargeType': ros.stringToRosTemplate(properties.chargeType),
      'Duration': ros.stringToRosTemplate(properties.duration),
      'PricingCycle': ros.stringToRosTemplate(properties.pricingCycle),
      'Ratio': ros.stringToRosTemplate(properties.ratio),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::GA::BandwidthPackage`, which is used to create a bandwidth plan.
 * @Note This class does not contain additional functions, so it is recommended to use the `BandwidthPackage` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-bandwidthpackage
 */
export class RosBandwidthPackage extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::GA::BandwidthPackage";

    /**
     * @Attribute AutoPay: The AutoPay of the bandwidth
     */
    public readonly attrAutoPay: ros.IResolvable;

    /**
     * @Attribute AutoUseCoupon: The AutoUseCoupon  of the bandwidth
     */
    public readonly attrAutoUseCoupon: ros.IResolvable;

    /**
     * @Attribute Bandwidth: The bandwidth provided by the bandwidth plan.
     */
    public readonly attrBandwidth: ros.IResolvable;

    /**
     * @Attribute BandwidthPackageId: The Resource ID of the bandwidth
     */
    public readonly attrBandwidthPackageId: ros.IResolvable;

    /**
     * @Attribute BandwidthPackageName: The Resource name of the bandwidth
     */
    public readonly attrBandwidthPackageName: ros.IResolvable;

    /**
     * @Attribute BandwidthType: the bandwidth BandwidthType of the bandwidth
     */
    public readonly attrBandwidthType: ros.IResolvable;

    /**
     * @Attribute BillingType: The BillingType of the bandwidth
     */
    public readonly attrBillingType: ros.IResolvable;

    /**
     * @Attribute CbnGeographicRegionIdA: The CbnGeographicRegionIdA  of the bandwidth
     */
    public readonly attrCbnGeographicRegionIdA: ros.IResolvable;

    /**
     * @Attribute CbnGeographicRegionIdB: The CbnGeographicRegionIdB of the bandwidth
     */
    public readonly attrCbnGeographicRegionIdB: ros.IResolvable;

    /**
     * @Attribute ChargeType: The ChargeType of the bandwidth
     */
    public readonly attrChargeType: ros.IResolvable;

    /**
     * @Attribute PaymentType: The Payment Type of the bandwidth
     */
    public readonly attrPaymentType: ros.IResolvable;

    /**
     * @Attribute Ratio: The Ratio of the bandwidth
     */
    public readonly attrRatio: ros.IResolvable;

    /**
     * @Attribute Type: The type of the bandwidth plan
     */
    public readonly attrType: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property bandwidth: The bandwidth provided by the bandwidth plan.
     */
    public bandwidth: number | ros.IResolvable;

    /**
     * @Property type: The type of the bandwidth plan
     */
    public type: string | ros.IResolvable;

    /**
     * @Property autoPay: Specifies whether to enable automatic payment.
     */
    public autoPay: boolean | ros.IResolvable | undefined;

    /**
     * @Property autoUseCoupon: The AutoUseCoupon  of the bandwidth
     */
    public autoUseCoupon: string | ros.IResolvable | undefined;

    /**
     * @Property bandwidthType: the bandwidth BandwidthType of the bandwidth
     */
    public bandwidthType: string | ros.IResolvable | undefined;

    /**
     * @Property billingType: The BillingType of the bandwidth
     */
    public billingType: string | ros.IResolvable | undefined;

    /**
     * @Property cbnGeographicRegionIdA: The CbnGeographicRegionIdA  of the bandwidth
     */
    public cbnGeographicRegionIdA: string | ros.IResolvable | undefined;

    /**
     * @Property cbnGeographicRegionIdB: The CbnGeographicRegionIdB of the bandwidth
     */
    public cbnGeographicRegionIdB: string | ros.IResolvable | undefined;

    /**
     * @Property chargeType: The ChargeType of the bandwidth
     */
    public chargeType: string | ros.IResolvable | undefined;

    /**
     * @Property duration:
     */
    public duration: string | ros.IResolvable | undefined;

    /**
     * @Property pricingCycle:
     */
    public pricingCycle: string | ros.IResolvable | undefined;

    /**
     * @Property ratio: The Ratio of the bandwidth
     */
    public ratio: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosBandwidthPackageProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosBandwidthPackage.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAutoPay = this.getAtt('AutoPay');
        this.attrAutoUseCoupon = this.getAtt('AutoUseCoupon');
        this.attrBandwidth = this.getAtt('Bandwidth');
        this.attrBandwidthPackageId = this.getAtt('BandwidthPackageId');
        this.attrBandwidthPackageName = this.getAtt('BandwidthPackageName');
        this.attrBandwidthType = this.getAtt('BandwidthType');
        this.attrBillingType = this.getAtt('BillingType');
        this.attrCbnGeographicRegionIdA = this.getAtt('CbnGeographicRegionIdA');
        this.attrCbnGeographicRegionIdB = this.getAtt('CbnGeographicRegionIdB');
        this.attrChargeType = this.getAtt('ChargeType');
        this.attrPaymentType = this.getAtt('PaymentType');
        this.attrRatio = this.getAtt('Ratio');
        this.attrType = this.getAtt('Type');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.bandwidth = props.bandwidth;
        this.type = props.type;
        this.autoPay = props.autoPay;
        this.autoUseCoupon = props.autoUseCoupon;
        this.bandwidthType = props.bandwidthType;
        this.billingType = props.billingType;
        this.cbnGeographicRegionIdA = props.cbnGeographicRegionIdA;
        this.cbnGeographicRegionIdB = props.cbnGeographicRegionIdB;
        this.chargeType = props.chargeType;
        this.duration = props.duration;
        this.pricingCycle = props.pricingCycle;
        this.ratio = props.ratio;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            bandwidth: this.bandwidth,
            type: this.type,
            autoPay: this.autoPay,
            autoUseCoupon: this.autoUseCoupon,
            bandwidthType: this.bandwidthType,
            billingType: this.billingType,
            cbnGeographicRegionIdA: this.cbnGeographicRegionIdA,
            cbnGeographicRegionIdB: this.cbnGeographicRegionIdB,
            chargeType: this.chargeType,
            duration: this.duration,
            pricingCycle: this.pricingCycle,
            ratio: this.ratio,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosBandwidthPackagePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosBandwidthPackageAcceleratorAddition`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-bandwidthpackageacceleratoraddition
 */
export interface RosBandwidthPackageAcceleratorAdditionProps {

    /**
     * @Property acceleratorId: The ID of the Global Accelerator instance with which you want to associate the bandwidth
     * plan.
     */
    readonly acceleratorId: string | ros.IResolvable;

    /**
     * @Property bandwidthPackageId: The ID of the bandwidth package to associate.
     */
    readonly bandwidthPackageId: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosBandwidthPackageAcceleratorAdditionProps`
 *
 * @param properties - the TypeScript properties of a `RosBandwidthPackageAcceleratorAdditionProps`
 *
 * @returns the result of the validation.
 */
function RosBandwidthPackageAcceleratorAdditionPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('bandwidthPackageId', ros.requiredValidator)(properties.bandwidthPackageId));
    errors.collect(ros.propertyValidator('bandwidthPackageId', ros.validateString)(properties.bandwidthPackageId));
    errors.collect(ros.propertyValidator('acceleratorId', ros.requiredValidator)(properties.acceleratorId));
    errors.collect(ros.propertyValidator('acceleratorId', ros.validateString)(properties.acceleratorId));
    return errors.wrap('supplied properties not correct for "RosBandwidthPackageAcceleratorAdditionProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::GA::BandwidthPackageAcceleratorAddition` resource
 *
 * @param properties - the TypeScript properties of a `RosBandwidthPackageAcceleratorAdditionProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::GA::BandwidthPackageAcceleratorAddition` resource.
 */
// @ts-ignore TS6133
function rosBandwidthPackageAcceleratorAdditionPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosBandwidthPackageAcceleratorAdditionPropsValidator(properties).assertSuccess();
    }
    return {
      'AcceleratorId': ros.stringToRosTemplate(properties.acceleratorId),
      'BandwidthPackageId': ros.stringToRosTemplate(properties.bandwidthPackageId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::GA::BandwidthPackageAcceleratorAddition`.
 * @Note This class does not contain additional functions, so it is recommended to use the `BandwidthPackageAcceleratorAddition` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-bandwidthpackageacceleratoraddition
 */
export class RosBandwidthPackageAcceleratorAddition extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::GA::BandwidthPackageAcceleratorAddition";

    /**
     * @Attribute AcceleratorId: The ID of the Global Accelerator instance
     */
    public readonly attrAcceleratorId: ros.IResolvable;

    /**
     * @Attribute BandwidthPackageId: The ID of the bandwidth package which is associated
     */
    public readonly attrBandwidthPackageId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property acceleratorId: The ID of the Global Accelerator instance with which you want to associate the bandwidth
     * plan.
     */
    public acceleratorId: string | ros.IResolvable;

    /**
     * @Property bandwidthPackageId: The ID of the bandwidth package to associate.
     */
    public bandwidthPackageId: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosBandwidthPackageAcceleratorAdditionProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosBandwidthPackageAcceleratorAddition.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAcceleratorId = this.getAtt('AcceleratorId');
        this.attrBandwidthPackageId = this.getAtt('BandwidthPackageId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.acceleratorId = props.acceleratorId;
        this.bandwidthPackageId = props.bandwidthPackageId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            acceleratorId: this.acceleratorId,
            bandwidthPackageId: this.bandwidthPackageId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosBandwidthPackageAcceleratorAdditionPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosBasicAccelerateIp`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicaccelerateip
 */
export interface RosBasicAccelerateIpProps {

    /**
     * @Property acceleratorId: The ID of the basic GA instance.
     */
    readonly acceleratorId: string | ros.IResolvable;

    /**
     * @Property ipSetId: The ID of the acceleration region.
     */
    readonly ipSetId: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosBasicAccelerateIpProps`
 *
 * @param properties - the TypeScript properties of a `RosBasicAccelerateIpProps`
 *
 * @returns the result of the validation.
 */
function RosBasicAccelerateIpPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('ipSetId', ros.requiredValidator)(properties.ipSetId));
    errors.collect(ros.propertyValidator('ipSetId', ros.validateString)(properties.ipSetId));
    errors.collect(ros.propertyValidator('acceleratorId', ros.requiredValidator)(properties.acceleratorId));
    errors.collect(ros.propertyValidator('acceleratorId', ros.validateString)(properties.acceleratorId));
    return errors.wrap('supplied properties not correct for "RosBasicAccelerateIpProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::GA::BasicAccelerateIp` resource
 *
 * @param properties - the TypeScript properties of a `RosBasicAccelerateIpProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::GA::BasicAccelerateIp` resource.
 */
// @ts-ignore TS6133
function rosBasicAccelerateIpPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosBasicAccelerateIpPropsValidator(properties).assertSuccess();
    }
    return {
      'AcceleratorId': ros.stringToRosTemplate(properties.acceleratorId),
      'IpSetId': ros.stringToRosTemplate(properties.ipSetId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::GA::BasicAccelerateIp`.
 * @Note This class does not contain additional functions, so it is recommended to use the `BasicAccelerateIp` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicaccelerateip
 */
export class RosBasicAccelerateIp extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::GA::BasicAccelerateIp";

    /**
     * @Attribute AccelerateIpId: The ID of the accelerated IP address.
     */
    public readonly attrAccelerateIpId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property acceleratorId: The ID of the basic GA instance.
     */
    public acceleratorId: string | ros.IResolvable;

    /**
     * @Property ipSetId: The ID of the acceleration region.
     */
    public ipSetId: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosBasicAccelerateIpProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosBasicAccelerateIp.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAccelerateIpId = this.getAtt('AccelerateIpId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.acceleratorId = props.acceleratorId;
        this.ipSetId = props.ipSetId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            acceleratorId: this.acceleratorId,
            ipSetId: this.ipSetId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosBasicAccelerateIpPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosBasicAccelerator`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicaccelerator
 */
export interface RosBasicAcceleratorProps {

    /**
     * @Property autoPay: Specifies whether to enable automatic payment. Valid values:
     * false: disables automatic payment. If you select this option, you must go to the Order Center to complete the payment after an order is generated. This is the default value.
     * true: enables automatic payment. Payments are automatically completed.
     */
    readonly autoPay?: boolean | ros.IResolvable;

    /**
     * @Property autoRenew: Specifies whether to enable auto-renewal for the basic GA instance. Valid values:
     * true: enables auto-renewal for the basic GA instance.
     * false: disables auto-renewal for the basic GA instance. This is the default value.
     */
    readonly autoRenew?: boolean | ros.IResolvable;

    /**
     * @Property autoRenewDuration: The auto-renewal duration. Unit: months.Valid values: 1 to 12. Default value: 1.
     */
    readonly autoRenewDuration?: number | ros.IResolvable;

    /**
     * @Property autoUseCoupon: Specifies whether to automatically apply coupons to your bills. Valid values:
     * true: automatically applies coupons to your bills.
     * false: does not automatically apply coupons to your bills. This is the default value.
     */
    readonly autoUseCoupon?: string | ros.IResolvable;

    /**
     * @Property bandwidthBillingType: The bandwidth billing method. Valid values:
     * BandwidthPackage: billed based on bandwidth plans.
     * CDT: billed based on data transfer. The bills are managed by using Cloud Data Transfer (CDT).
     * CDT95: billed based on the 95th percentile bandwidth. The bills are managed by using Cloud Data Transfer (CDT). This bandwidth billing method is not available by default. Contact your Alibaba Cloud account manager for more information.
     */
    readonly bandwidthBillingType?: string | ros.IResolvable;

    /**
     * @Property chargeType: The billing method. Valid values:
     * PREPAY (default)POSTPAY
     */
    readonly chargeType?: string | ros.IResolvable;

    /**
     * @Property duration: The subscription duration of the GA instance.
     * If you set PricingCycle to Month, the valid values for Duration are 1 to 9.
     * If you set PricingCycle to Year, the valid values for Duration are 1 to 3.
     */
    readonly duration?: number | ros.IResolvable;

    /**
     * @Property pricingCycle: The billing cycle. Valid values:
     * Month
     * Year
     */
    readonly pricingCycle?: string | ros.IResolvable;

    /**
     * @Property promotionOptionNo: The code of the coupon.
     */
    readonly promotionOptionNo?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group to which the basic GA instance belongs.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property tags: The tags of the basic GA instance.
     */
    readonly tags?: RosBasicAccelerator.TagsProperty[];
}

/**
 * Determine whether the given properties match those of a `RosBasicAcceleratorProps`
 *
 * @param properties - the TypeScript properties of a `RosBasicAcceleratorProps`
 *
 * @returns the result of the validation.
 */
function RosBasicAcceleratorPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.bandwidthBillingType && (typeof properties.bandwidthBillingType) !== 'object') {
        errors.collect(ros.propertyValidator('bandwidthBillingType', ros.validateAllowedValues)({
          data: properties.bandwidthBillingType,
          allowedValues: ["BandwidthPackage","CDT","CDT95"],
        }));
    }
    errors.collect(ros.propertyValidator('bandwidthBillingType', ros.validateString)(properties.bandwidthBillingType));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('autoUseCoupon', ros.validateString)(properties.autoUseCoupon));
    errors.collect(ros.propertyValidator('promotionOptionNo', ros.validateString)(properties.promotionOptionNo));
    if(properties.pricingCycle && (typeof properties.pricingCycle) !== 'object') {
        errors.collect(ros.propertyValidator('pricingCycle', ros.validateAllowedValues)({
          data: properties.pricingCycle,
          allowedValues: ["Month","Year"],
        }));
    }
    errors.collect(ros.propertyValidator('pricingCycle', ros.validateString)(properties.pricingCycle));
    if(properties.chargeType && (typeof properties.chargeType) !== 'object') {
        errors.collect(ros.propertyValidator('chargeType', ros.validateAllowedValues)({
          data: properties.chargeType,
          allowedValues: ["PREPAY","POSTPAY"],
        }));
    }
    errors.collect(ros.propertyValidator('chargeType', ros.validateString)(properties.chargeType));
    errors.collect(ros.propertyValidator('autoRenew', ros.validateBoolean)(properties.autoRenew));
    if(properties.duration && (typeof properties.duration) !== 'object') {
        errors.collect(ros.propertyValidator('duration', ros.validateRange)({
            data: properties.duration,
            min: 1,
            max: 9,
          }));
    }
    errors.collect(ros.propertyValidator('duration', ros.validateNumber)(properties.duration));
    errors.collect(ros.propertyValidator('autoPay', ros.validateBoolean)(properties.autoPay));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: 0,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosBasicAccelerator_TagsPropertyValidator))(properties.tags));
    if(properties.autoRenewDuration && (typeof properties.autoRenewDuration) !== 'object') {
        errors.collect(ros.propertyValidator('autoRenewDuration', ros.validateRange)({
            data: properties.autoRenewDuration,
            min: 1,
            max: 12,
          }));
    }
    errors.collect(ros.propertyValidator('autoRenewDuration', ros.validateNumber)(properties.autoRenewDuration));
    return errors.wrap('supplied properties not correct for "RosBasicAcceleratorProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::GA::BasicAccelerator` resource
 *
 * @param properties - the TypeScript properties of a `RosBasicAcceleratorProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::GA::BasicAccelerator` resource.
 */
// @ts-ignore TS6133
function rosBasicAcceleratorPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosBasicAcceleratorPropsValidator(properties).assertSuccess();
    }
    return {
      'AutoPay': ros.booleanToRosTemplate(properties.autoPay),
      'AutoRenew': ros.booleanToRosTemplate(properties.autoRenew),
      'AutoRenewDuration': ros.numberToRosTemplate(properties.autoRenewDuration),
      'AutoUseCoupon': ros.stringToRosTemplate(properties.autoUseCoupon),
      'BandwidthBillingType': ros.stringToRosTemplate(properties.bandwidthBillingType),
      'ChargeType': ros.stringToRosTemplate(properties.chargeType),
      'Duration': ros.numberToRosTemplate(properties.duration),
      'PricingCycle': ros.stringToRosTemplate(properties.pricingCycle),
      'PromotionOptionNo': ros.stringToRosTemplate(properties.promotionOptionNo),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'Tags': ros.listMapper(rosBasicAcceleratorTagsPropertyToRosTemplate)(properties.tags),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::GA::BasicAccelerator`, which is used to create a basic Global Accelerator (GA) instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `BasicAccelerator` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicaccelerator
 */
export class RosBasicAccelerator extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::GA::BasicAccelerator";

    /**
     * @Attribute AcceleratorId: The ID of the accelerated IP address.
     */
    public readonly attrAcceleratorId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property autoPay: Specifies whether to enable automatic payment. Valid values:
     * false: disables automatic payment. If you select this option, you must go to the Order Center to complete the payment after an order is generated. This is the default value.
     * true: enables automatic payment. Payments are automatically completed.
     */
    public autoPay: boolean | ros.IResolvable | undefined;

    /**
     * @Property autoRenew: Specifies whether to enable auto-renewal for the basic GA instance. Valid values:
     * true: enables auto-renewal for the basic GA instance.
     * false: disables auto-renewal for the basic GA instance. This is the default value.
     */
    public autoRenew: boolean | ros.IResolvable | undefined;

    /**
     * @Property autoRenewDuration: The auto-renewal duration. Unit: months.Valid values: 1 to 12. Default value: 1.
     */
    public autoRenewDuration: number | ros.IResolvable | undefined;

    /**
     * @Property autoUseCoupon: Specifies whether to automatically apply coupons to your bills. Valid values:
     * true: automatically applies coupons to your bills.
     * false: does not automatically apply coupons to your bills. This is the default value.
     */
    public autoUseCoupon: string | ros.IResolvable | undefined;

    /**
     * @Property bandwidthBillingType: The bandwidth billing method. Valid values:
     * BandwidthPackage: billed based on bandwidth plans.
     * CDT: billed based on data transfer. The bills are managed by using Cloud Data Transfer (CDT).
     * CDT95: billed based on the 95th percentile bandwidth. The bills are managed by using Cloud Data Transfer (CDT). This bandwidth billing method is not available by default. Contact your Alibaba Cloud account manager for more information.
     */
    public bandwidthBillingType: string | ros.IResolvable | undefined;

    /**
     * @Property chargeType: The billing method. Valid values:
     * PREPAY (default)POSTPAY
     */
    public chargeType: string | ros.IResolvable | undefined;

    /**
     * @Property duration: The subscription duration of the GA instance.
     * If you set PricingCycle to Month, the valid values for Duration are 1 to 9.
     * If you set PricingCycle to Year, the valid values for Duration are 1 to 3.
     */
    public duration: number | ros.IResolvable | undefined;

    /**
     * @Property pricingCycle: The billing cycle. Valid values:
     * Month
     * Year
     */
    public pricingCycle: string | ros.IResolvable | undefined;

    /**
     * @Property promotionOptionNo: The code of the coupon.
     */
    public promotionOptionNo: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group to which the basic GA instance belongs.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property tags: The tags of the basic GA instance.
     */
    public tags: RosBasicAccelerator.TagsProperty[] | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosBasicAcceleratorProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosBasicAccelerator.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAcceleratorId = this.getAtt('AcceleratorId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.autoPay = props.autoPay;
        this.autoRenew = props.autoRenew;
        this.autoRenewDuration = props.autoRenewDuration;
        this.autoUseCoupon = props.autoUseCoupon;
        this.bandwidthBillingType = props.bandwidthBillingType;
        this.chargeType = props.chargeType;
        this.duration = props.duration;
        this.pricingCycle = props.pricingCycle;
        this.promotionOptionNo = props.promotionOptionNo;
        this.resourceGroupId = props.resourceGroupId;
        this.tags = props.tags;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            autoPay: this.autoPay,
            autoRenew: this.autoRenew,
            autoRenewDuration: this.autoRenewDuration,
            autoUseCoupon: this.autoUseCoupon,
            bandwidthBillingType: this.bandwidthBillingType,
            chargeType: this.chargeType,
            duration: this.duration,
            pricingCycle: this.pricingCycle,
            promotionOptionNo: this.promotionOptionNo,
            resourceGroupId: this.resourceGroupId,
            tags: this.tags,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosBasicAcceleratorPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosBasicAccelerator {
    /**
     * @stability external
     */
    export interface TagsProperty {
        /**
         * @Property value: The tag value. The tag value cannot be an empty string.The tag value can be up to 128 characters in length and cannot contain http:\/\/ or https:\/\/. It cannot start with acs: or aliyun.You can specify up to 20 tag values.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: The tag key. The tag key cannot be an empty string.The tag key can be up to 64 characters in length and cannot contain http:\/\/ or https:\/\/. The tag key cannot start with aliyun or acs:.You can specify up to 20 tag keys.
         */
        readonly key?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosBasicAccelerator_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::GA::BasicAccelerator.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::GA::BasicAccelerator.Tags` resource.
 */
// @ts-ignore TS6133
function rosBasicAcceleratorTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosBasicAccelerator_TagsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `RosBasicAcceleratorIpEndpointRelation`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicacceleratoripendpointrelation
 */
export interface RosBasicAcceleratorIpEndpointRelationProps {

    /**
     * @Property accelerateIpId: The ID of the accelerated IP address.
     */
    readonly accelerateIpId: string | ros.IResolvable;

    /**
     * @Property acceleratorId: The ID of the basic GA instance.
     */
    readonly acceleratorId: string | ros.IResolvable;

    /**
     * @Property endpointId: The ID of the endpoint.
     */
    readonly endpointId: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosBasicAcceleratorIpEndpointRelationProps`
 *
 * @param properties - the TypeScript properties of a `RosBasicAcceleratorIpEndpointRelationProps`
 *
 * @returns the result of the validation.
 */
function RosBasicAcceleratorIpEndpointRelationPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('accelerateIpId', ros.requiredValidator)(properties.accelerateIpId));
    errors.collect(ros.propertyValidator('accelerateIpId', ros.validateString)(properties.accelerateIpId));
    errors.collect(ros.propertyValidator('endpointId', ros.requiredValidator)(properties.endpointId));
    errors.collect(ros.propertyValidator('endpointId', ros.validateString)(properties.endpointId));
    errors.collect(ros.propertyValidator('acceleratorId', ros.requiredValidator)(properties.acceleratorId));
    errors.collect(ros.propertyValidator('acceleratorId', ros.validateString)(properties.acceleratorId));
    return errors.wrap('supplied properties not correct for "RosBasicAcceleratorIpEndpointRelationProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::GA::BasicAcceleratorIpEndpointRelation` resource
 *
 * @param properties - the TypeScript properties of a `RosBasicAcceleratorIpEndpointRelationProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::GA::BasicAcceleratorIpEndpointRelation` resource.
 */
// @ts-ignore TS6133
function rosBasicAcceleratorIpEndpointRelationPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosBasicAcceleratorIpEndpointRelationPropsValidator(properties).assertSuccess();
    }
    return {
      'AccelerateIpId': ros.stringToRosTemplate(properties.accelerateIpId),
      'AcceleratorId': ros.stringToRosTemplate(properties.acceleratorId),
      'EndpointId': ros.stringToRosTemplate(properties.endpointId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::GA::BasicAcceleratorIpEndpointRelation`, which is used to create a mapping between an accelerated IP address and an endpoint for a basic Global Accelerator (GA) instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `BasicAcceleratorIpEndpointRelation` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicacceleratoripendpointrelation
 */
export class RosBasicAcceleratorIpEndpointRelation extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::GA::BasicAcceleratorIpEndpointRelation";

    /**
     * @Attribute AccelerateIpId: The ID of the accelerated IP address.
     */
    public readonly attrAccelerateIpId: ros.IResolvable;

    /**
     * @Attribute AcceleratorId: The ID of the basic GA instance.
     */
    public readonly attrAcceleratorId: ros.IResolvable;

    /**
     * @Attribute EndpointId: The ID of the endpoint.
     */
    public readonly attrEndpointId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property accelerateIpId: The ID of the accelerated IP address.
     */
    public accelerateIpId: string | ros.IResolvable;

    /**
     * @Property acceleratorId: The ID of the basic GA instance.
     */
    public acceleratorId: string | ros.IResolvable;

    /**
     * @Property endpointId: The ID of the endpoint.
     */
    public endpointId: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosBasicAcceleratorIpEndpointRelationProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosBasicAcceleratorIpEndpointRelation.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAccelerateIpId = this.getAtt('AccelerateIpId');
        this.attrAcceleratorId = this.getAtt('AcceleratorId');
        this.attrEndpointId = this.getAtt('EndpointId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.accelerateIpId = props.accelerateIpId;
        this.acceleratorId = props.acceleratorId;
        this.endpointId = props.endpointId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            accelerateIpId: this.accelerateIpId,
            acceleratorId: this.acceleratorId,
            endpointId: this.endpointId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosBasicAcceleratorIpEndpointRelationPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosBasicEndpoint`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicendpoint
 */
export interface RosBasicEndpointProps {

    /**
     * @Property acceleratorId: The ID of the basic GA instance.
     */
    readonly acceleratorId: string | ros.IResolvable;

    /**
     * @Property endpointAddress: The address of the endpoint.
     */
    readonly endpointAddress: string | ros.IResolvable;

    /**
     * @Property endpointGroupId: The ID of the endpoint group.
     */
    readonly endpointGroupId: string | ros.IResolvable;

    /**
     * @Property endpointSubAddress: The secondary address of the endpoint. This parameter is required if the endpoint type is ECS, ENI, or NLB.
     * If the endpoint type is ECS, you can set EndpointSubAddress to the secondary private IP address of the primary ENI. If the parameter is left empty, the primary private IP address of the primary ENI is used.
     * If the endpoint type is ENI, you can set EndpointSubAddress to the secondary private IP address of the secondary ENI. If the parameter is left empty, the primary private IP address of the secondary ENI is used.
     * This parameter is required if the endpoint type is NLB. EndpointSubAddress is the primary private IP address of the NLB backend server.This parameter is required if the endpoint type is NLB. EndpointSubAddress is the primary private IP address of the NLB backend server.
     */
    readonly endpointSubAddress?: string | ros.IResolvable;

    /**
     * @Property endpointSubAddressType: The type of the secondary address of the endpoint. Valid values:
     * primary: a primary private IP address.
     * secondary: a secondary private IP address.
     * This parameter is required if the endpoint type is ECS, ENI, or NLB. If the endpoint type is NLB, only primary is supported.
     */
    readonly endpointSubAddressType?: string | ros.IResolvable;

    /**
     * @Property endpointType: The type of the endpoint. Valid values:
     * ENI: elastic network interface (ENI)
     * SLB: Classic Load Balancer (CLB)
     * NLB: Network Load Balancer (NLB)
     * ECS: Elastic Compute Service (ECS)
     */
    readonly endpointType?: string | ros.IResolvable;

    /**
     * @Property endpointZoneId: The zone ID of the endpoint. This parameter is required only if the endpoint type is NLB.
     */
    readonly endpointZoneId?: string | ros.IResolvable;

    /**
     * @Property name: The name of the endpoint that is associated with the basic GA instance. The name must be 1 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter.
     */
    readonly name?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosBasicEndpointProps`
 *
 * @param properties - the TypeScript properties of a `RosBasicEndpointProps`
 *
 * @returns the result of the validation.
 */
function RosBasicEndpointPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('endpointGroupId', ros.requiredValidator)(properties.endpointGroupId));
    errors.collect(ros.propertyValidator('endpointGroupId', ros.validateString)(properties.endpointGroupId));
    errors.collect(ros.propertyValidator('endpointZoneId', ros.validateString)(properties.endpointZoneId));
    if(properties.endpointType && (typeof properties.endpointType) !== 'object') {
        errors.collect(ros.propertyValidator('endpointType', ros.validateAllowedValues)({
          data: properties.endpointType,
          allowedValues: ["ENI","SLB","NLB","ECS"],
        }));
    }
    errors.collect(ros.propertyValidator('endpointType', ros.validateString)(properties.endpointType));
    if(properties.endpointSubAddressType && (typeof properties.endpointSubAddressType) !== 'object') {
        errors.collect(ros.propertyValidator('endpointSubAddressType', ros.validateAllowedValues)({
          data: properties.endpointSubAddressType,
          allowedValues: ["primary","secondary"],
        }));
    }
    errors.collect(ros.propertyValidator('endpointSubAddressType', ros.validateString)(properties.endpointSubAddressType));
    errors.collect(ros.propertyValidator('endpointSubAddress', ros.validateString)(properties.endpointSubAddress));
    errors.collect(ros.propertyValidator('acceleratorId', ros.requiredValidator)(properties.acceleratorId));
    errors.collect(ros.propertyValidator('acceleratorId', ros.validateString)(properties.acceleratorId));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    errors.collect(ros.propertyValidator('endpointAddress', ros.requiredValidator)(properties.endpointAddress));
    errors.collect(ros.propertyValidator('endpointAddress', ros.validateString)(properties.endpointAddress));
    return errors.wrap('supplied properties not correct for "RosBasicEndpointProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::GA::BasicEndpoint` resource
 *
 * @param properties - the TypeScript properties of a `RosBasicEndpointProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::GA::BasicEndpoint` resource.
 */
// @ts-ignore TS6133
function rosBasicEndpointPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosBasicEndpointPropsValidator(properties).assertSuccess();
    }
    return {
      'AcceleratorId': ros.stringToRosTemplate(properties.acceleratorId),
      'EndpointAddress': ros.stringToRosTemplate(properties.endpointAddress),
      'EndpointGroupId': ros.stringToRosTemplate(properties.endpointGroupId),
      'EndpointSubAddress': ros.stringToRosTemplate(properties.endpointSubAddress),
      'EndpointSubAddressType': ros.stringToRosTemplate(properties.endpointSubAddressType),
      'EndpointType': ros.stringToRosTemplate(properties.endpointType),
      'EndpointZoneId': ros.stringToRosTemplate(properties.endpointZoneId),
      'Name': ros.stringToRosTemplate(properties.name),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::GA::BasicEndpoint`.
 * @Note This class does not contain additional functions, so it is recommended to use the `BasicEndpoint` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicendpoint
 */
export class RosBasicEndpoint extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::GA::BasicEndpoint";

    /**
     * @Attribute EndpointId: The ID of the endpoint.
     */
    public readonly attrEndpointId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property acceleratorId: The ID of the basic GA instance.
     */
    public acceleratorId: string | ros.IResolvable;

    /**
     * @Property endpointAddress: The address of the endpoint.
     */
    public endpointAddress: string | ros.IResolvable;

    /**
     * @Property endpointGroupId: The ID of the endpoint group.
     */
    public endpointGroupId: string | ros.IResolvable;

    /**
     * @Property endpointSubAddress: The secondary address of the endpoint. This parameter is required if the endpoint type is ECS, ENI, or NLB.
     * If the endpoint type is ECS, you can set EndpointSubAddress to the secondary private IP address of the primary ENI. If the parameter is left empty, the primary private IP address of the primary ENI is used.
     * If the endpoint type is ENI, you can set EndpointSubAddress to the secondary private IP address of the secondary ENI. If the parameter is left empty, the primary private IP address of the secondary ENI is used.
     * This parameter is required if the endpoint type is NLB. EndpointSubAddress is the primary private IP address of the NLB backend server.This parameter is required if the endpoint type is NLB. EndpointSubAddress is the primary private IP address of the NLB backend server.
     */
    public endpointSubAddress: string | ros.IResolvable | undefined;

    /**
     * @Property endpointSubAddressType: The type of the secondary address of the endpoint. Valid values:
     * primary: a primary private IP address.
     * secondary: a secondary private IP address.
     * This parameter is required if the endpoint type is ECS, ENI, or NLB. If the endpoint type is NLB, only primary is supported.
     */
    public endpointSubAddressType: string | ros.IResolvable | undefined;

    /**
     * @Property endpointType: The type of the endpoint. Valid values:
     * ENI: elastic network interface (ENI)
     * SLB: Classic Load Balancer (CLB)
     * NLB: Network Load Balancer (NLB)
     * ECS: Elastic Compute Service (ECS)
     */
    public endpointType: string | ros.IResolvable | undefined;

    /**
     * @Property endpointZoneId: The zone ID of the endpoint. This parameter is required only if the endpoint type is NLB.
     */
    public endpointZoneId: string | ros.IResolvable | undefined;

    /**
     * @Property name: The name of the endpoint that is associated with the basic GA instance. The name must be 1 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter.
     */
    public name: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosBasicEndpointProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosBasicEndpoint.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrEndpointId = this.getAtt('EndpointId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.acceleratorId = props.acceleratorId;
        this.endpointAddress = props.endpointAddress;
        this.endpointGroupId = props.endpointGroupId;
        this.endpointSubAddress = props.endpointSubAddress;
        this.endpointSubAddressType = props.endpointSubAddressType;
        this.endpointType = props.endpointType;
        this.endpointZoneId = props.endpointZoneId;
        this.name = props.name;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            acceleratorId: this.acceleratorId,
            endpointAddress: this.endpointAddress,
            endpointGroupId: this.endpointGroupId,
            endpointSubAddress: this.endpointSubAddress,
            endpointSubAddressType: this.endpointSubAddressType,
            endpointType: this.endpointType,
            endpointZoneId: this.endpointZoneId,
            name: this.name,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosBasicEndpointPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosBasicEndpointGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicendpointgroup
 */
export interface RosBasicEndpointGroupProps {

    /**
     * @Property acceleratorId: The ID of the basic GA instance.
     */
    readonly acceleratorId: string | ros.IResolvable;

    /**
     * @Property endpointGroupRegion: The ID of the region to which the endpoint group belongs.
     */
    readonly endpointGroupRegion: string | ros.IResolvable;

    /**
     * @Property description: The description of the endpoint group. The description can be up to 200 characters in length and cannot start with http:\/\/ or https:\/\/.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property endpointAddress: The endpoint address.
     */
    readonly endpointAddress?: string | ros.IResolvable;

    /**
     * @Property endpointSubAddress: The secondary address of the endpoint. You must specify this parameter when the accelerated IP address is associated with the secondary private IP address of an Elastic Compute Service (ECS) instance or an elastic network interface (ENI).
     * When the endpoint type is ECS, you can set EndpointSubAddress to the secondary private IP address of the primary ENI. If the parameter is left empty, the primary private IP address of the primary ENI is used.
     * If the endpoint type is ENI, you can set EndpointSubAddress to the secondary private IP address of the secondary ENI. If the parameter is left empty, the primary private IP address of the secondary ENI is used.
     */
    readonly endpointSubAddress?: string | ros.IResolvable;

    /**
     * @Property endpointType: The type of the endpoint. Valid values:
     * ENI
     * SLB
     * ECS
     */
    readonly endpointType?: string | ros.IResolvable;

    /**
     * @Property name: The name of the endpoint group. The name must be 2 to 128 characters in length, and can contain letters, digits, underscores (_), and hyphens (-). The name must start with a letter.
     */
    readonly name?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosBasicEndpointGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosBasicEndpointGroupProps`
 *
 * @returns the result of the validation.
 */
function RosBasicEndpointGroupPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('endpointGroupRegion', ros.requiredValidator)(properties.endpointGroupRegion));
    errors.collect(ros.propertyValidator('endpointGroupRegion', ros.validateString)(properties.endpointGroupRegion));
    if(properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
        errors.collect(ros.propertyValidator('description', ros.validateLength)({
            data: properties.description.length,
            min: 0,
            max: 200,
          }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    if(properties.endpointType && (typeof properties.endpointType) !== 'object') {
        errors.collect(ros.propertyValidator('endpointType', ros.validateAllowedValues)({
          data: properties.endpointType,
          allowedValues: ["ENI","SLB","ECS"],
        }));
    }
    errors.collect(ros.propertyValidator('endpointType', ros.validateString)(properties.endpointType));
    errors.collect(ros.propertyValidator('endpointSubAddress', ros.validateString)(properties.endpointSubAddress));
    errors.collect(ros.propertyValidator('acceleratorId', ros.requiredValidator)(properties.acceleratorId));
    errors.collect(ros.propertyValidator('acceleratorId', ros.validateString)(properties.acceleratorId));
    errors.collect(ros.propertyValidator('endpointAddress', ros.validateString)(properties.endpointAddress));
    if(properties.name && (Array.isArray(properties.name) || (typeof properties.name) === 'string')) {
        errors.collect(ros.propertyValidator('name', ros.validateLength)({
            data: properties.name.length,
            min: 2,
            max: 128,
          }));
    }
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosBasicEndpointGroupProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::GA::BasicEndpointGroup` resource
 *
 * @param properties - the TypeScript properties of a `RosBasicEndpointGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::GA::BasicEndpointGroup` resource.
 */
// @ts-ignore TS6133
function rosBasicEndpointGroupPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosBasicEndpointGroupPropsValidator(properties).assertSuccess();
    }
    return {
      'AcceleratorId': ros.stringToRosTemplate(properties.acceleratorId),
      'EndpointGroupRegion': ros.stringToRosTemplate(properties.endpointGroupRegion),
      'Description': ros.stringToRosTemplate(properties.description),
      'EndpointAddress': ros.stringToRosTemplate(properties.endpointAddress),
      'EndpointSubAddress': ros.stringToRosTemplate(properties.endpointSubAddress),
      'EndpointType': ros.stringToRosTemplate(properties.endpointType),
      'Name': ros.stringToRosTemplate(properties.name),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::GA::BasicEndpointGroup`, which is used to create an endpoint group for a basic Global Accelerator (GA) instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `BasicEndpointGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicendpointgroup
 */
export class RosBasicEndpointGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::GA::BasicEndpointGroup";

    /**
     * @Attribute EndpointGroupId: The endpoint group ID.
     */
    public readonly attrEndpointGroupId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property acceleratorId: The ID of the basic GA instance.
     */
    public acceleratorId: string | ros.IResolvable;

    /**
     * @Property endpointGroupRegion: The ID of the region to which the endpoint group belongs.
     */
    public endpointGroupRegion: string | ros.IResolvable;

    /**
     * @Property description: The description of the endpoint group. The description can be up to 200 characters in length and cannot start with http:\/\/ or https:\/\/.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property endpointAddress: The endpoint address.
     */
    public endpointAddress: string | ros.IResolvable | undefined;

    /**
     * @Property endpointSubAddress: The secondary address of the endpoint. You must specify this parameter when the accelerated IP address is associated with the secondary private IP address of an Elastic Compute Service (ECS) instance or an elastic network interface (ENI).
     * When the endpoint type is ECS, you can set EndpointSubAddress to the secondary private IP address of the primary ENI. If the parameter is left empty, the primary private IP address of the primary ENI is used.
     * If the endpoint type is ENI, you can set EndpointSubAddress to the secondary private IP address of the secondary ENI. If the parameter is left empty, the primary private IP address of the secondary ENI is used.
     */
    public endpointSubAddress: string | ros.IResolvable | undefined;

    /**
     * @Property endpointType: The type of the endpoint. Valid values:
     * ENI
     * SLB
     * ECS
     */
    public endpointType: string | ros.IResolvable | undefined;

    /**
     * @Property name: The name of the endpoint group. The name must be 2 to 128 characters in length, and can contain letters, digits, underscores (_), and hyphens (-). The name must start with a letter.
     */
    public name: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosBasicEndpointGroupProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosBasicEndpointGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrEndpointGroupId = this.getAtt('EndpointGroupId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.acceleratorId = props.acceleratorId;
        this.endpointGroupRegion = props.endpointGroupRegion;
        this.description = props.description;
        this.endpointAddress = props.endpointAddress;
        this.endpointSubAddress = props.endpointSubAddress;
        this.endpointType = props.endpointType;
        this.name = props.name;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            acceleratorId: this.acceleratorId,
            endpointGroupRegion: this.endpointGroupRegion,
            description: this.description,
            endpointAddress: this.endpointAddress,
            endpointSubAddress: this.endpointSubAddress,
            endpointType: this.endpointType,
            name: this.name,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosBasicEndpointGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosBasicIpSet`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicipset
 */
export interface RosBasicIpSetProps {

    /**
     * @Property acceleratorId: The ID of the basic GA instance.
     */
    readonly acceleratorId: string | ros.IResolvable;

    /**
     * @Property accelerateRegionId: The ID of the acceleration region.
     */
    readonly accelerateRegionId?: string | ros.IResolvable;

    /**
     * @Property bandwidth: The bandwidth that you want to allocate to the acceleration region. Unit: Mbit\/s.You must allocate at least 2 Mbit\/s of bandwidth to the acceleration region.
     */
    readonly bandwidth?: number | ros.IResolvable;

    /**
     * @Property ispType: The line type of the elastic IP address (EIP) in the acceleration region. Valid values:
     * BGP (default): BGP (Multi-ISP) lines.
     * BGP_PRO: BGP (Multi-ISP) Pro lines.
     * Valid values if you are allowed to use single-ISP bandwidth:
     * ChinaTelecom
     * ChinaUnicom
     * ChinaMobile
     * ChinaTelecom_L2
     * ChinaUnicom_L2
     * ChinaMobile_L2
     */
    readonly ispType?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosBasicIpSetProps`
 *
 * @param properties - the TypeScript properties of a `RosBasicIpSetProps`
 *
 * @returns the result of the validation.
 */
function RosBasicIpSetPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.ispType && (typeof properties.ispType) !== 'object') {
        errors.collect(ros.propertyValidator('ispType', ros.validateAllowedValues)({
          data: properties.ispType,
          allowedValues: ["BGP","BGP_PRO","ChinaTelecom","ChinaUnicom","ChinaMobile","ChinaTelecom_L2","ChinaUnicom_L2","ChinaMobile_L2"],
        }));
    }
    errors.collect(ros.propertyValidator('ispType', ros.validateString)(properties.ispType));
    if(properties.bandwidth && (typeof properties.bandwidth) !== 'object') {
        errors.collect(ros.propertyValidator('bandwidth', ros.validateRange)({
            data: properties.bandwidth,
            min: 2,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('bandwidth', ros.validateNumber)(properties.bandwidth));
    errors.collect(ros.propertyValidator('accelerateRegionId', ros.validateString)(properties.accelerateRegionId));
    errors.collect(ros.propertyValidator('acceleratorId', ros.requiredValidator)(properties.acceleratorId));
    errors.collect(ros.propertyValidator('acceleratorId', ros.validateString)(properties.acceleratorId));
    return errors.wrap('supplied properties not correct for "RosBasicIpSetProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::GA::BasicIpSet` resource
 *
 * @param properties - the TypeScript properties of a `RosBasicIpSetProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::GA::BasicIpSet` resource.
 */
// @ts-ignore TS6133
function rosBasicIpSetPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosBasicIpSetPropsValidator(properties).assertSuccess();
    }
    return {
      'AcceleratorId': ros.stringToRosTemplate(properties.acceleratorId),
      'AccelerateRegionId': ros.stringToRosTemplate(properties.accelerateRegionId),
      'Bandwidth': ros.numberToRosTemplate(properties.bandwidth),
      'IspType': ros.stringToRosTemplate(properties.ispType),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::GA::BasicIpSet`.
 * @Note This class does not contain additional functions, so it is recommended to use the `BasicIpSet` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicipset
 */
export class RosBasicIpSet extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::GA::BasicIpSet";

    /**
     * @Attribute IpSetId: The ID of the acceleration region.
     */
    public readonly attrIpSetId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property acceleratorId: The ID of the basic GA instance.
     */
    public acceleratorId: string | ros.IResolvable;

    /**
     * @Property accelerateRegionId: The ID of the acceleration region.
     */
    public accelerateRegionId: string | ros.IResolvable | undefined;

    /**
     * @Property bandwidth: The bandwidth that you want to allocate to the acceleration region. Unit: Mbit\/s.You must allocate at least 2 Mbit\/s of bandwidth to the acceleration region.
     */
    public bandwidth: number | ros.IResolvable | undefined;

    /**
     * @Property ispType: The line type of the elastic IP address (EIP) in the acceleration region. Valid values:
     * BGP (default): BGP (Multi-ISP) lines.
     * BGP_PRO: BGP (Multi-ISP) Pro lines.
     * Valid values if you are allowed to use single-ISP bandwidth:
     * ChinaTelecom
     * ChinaUnicom
     * ChinaMobile
     * ChinaTelecom_L2
     * ChinaUnicom_L2
     * ChinaMobile_L2
     */
    public ispType: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosBasicIpSetProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosBasicIpSet.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrIpSetId = this.getAtt('IpSetId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.acceleratorId = props.acceleratorId;
        this.accelerateRegionId = props.accelerateRegionId;
        this.bandwidth = props.bandwidth;
        this.ispType = props.ispType;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            acceleratorId: this.acceleratorId,
            accelerateRegionId: this.accelerateRegionId,
            bandwidth: this.bandwidth,
            ispType: this.ispType,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosBasicIpSetPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosDomain`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-domain
 */
export interface RosDomainProps {

    /**
     * @Property acceleratorIds: The IDs of the GA instance to be disassociated. You can specify up to 50 IDs.
     */
    readonly acceleratorIds: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property domain: The accelerated domain name to be disassociated.
     */
    readonly domain: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDomainProps`
 *
 * @param properties - the TypeScript properties of a `RosDomainProps`
 *
 * @returns the result of the validation.
 */
function RosDomainPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('acceleratorIds', ros.requiredValidator)(properties.acceleratorIds));
    if(properties.acceleratorIds && (Array.isArray(properties.acceleratorIds) || (typeof properties.acceleratorIds) === 'string')) {
        errors.collect(ros.propertyValidator('acceleratorIds', ros.validateLength)({
            data: properties.acceleratorIds.length,
            min: 1,
            max: 50,
          }));
    }
    errors.collect(ros.propertyValidator('acceleratorIds', ros.listValidator(ros.validateString))(properties.acceleratorIds));
    errors.collect(ros.propertyValidator('domain', ros.requiredValidator)(properties.domain));
    errors.collect(ros.propertyValidator('domain', ros.validateString)(properties.domain));
    return errors.wrap('supplied properties not correct for "RosDomainProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::GA::Domain` resource
 *
 * @param properties - the TypeScript properties of a `RosDomainProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::GA::Domain` resource.
 */
// @ts-ignore TS6133
function rosDomainPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDomainPropsValidator(properties).assertSuccess();
    }
    return {
      'AcceleratorIds': ros.listMapper(ros.stringToRosTemplate)(properties.acceleratorIds),
      'Domain': ros.stringToRosTemplate(properties.domain),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::GA::Domain`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Domain` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-domain
 */
export class RosDomain extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::GA::Domain";

    /**
     * @Attribute AcceleratorIds: The IDs of GA instances.
     */
    public readonly attrAcceleratorIds: ros.IResolvable;

    /**
     * @Attribute Domain: The accelerated domain name.
     */
    public readonly attrDomain: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property acceleratorIds: The IDs of the GA instance to be disassociated. You can specify up to 50 IDs.
     */
    public acceleratorIds: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property domain: The accelerated domain name to be disassociated.
     */
    public domain: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDomainProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDomain.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAcceleratorIds = this.getAtt('AcceleratorIds');
        this.attrDomain = this.getAtt('Domain');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.acceleratorIds = props.acceleratorIds;
        this.domain = props.domain;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            acceleratorIds: this.acceleratorIds,
            domain: this.domain,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDomainPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosEndpointGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-endpointgroup
 */
export interface RosEndpointGroupProps {

    /**
     * @Property acceleratorId: The ID of the Global Accelerator instance with which the endpoint group will be associated.
     */
    readonly acceleratorId: string | ros.IResolvable;

    /**
     * @Property endpointConfigurations:
     */
    readonly endpointConfigurations: Array<RosEndpointGroup.EndpointConfigurationsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property endpointGroupRegion: The region ID of the endpoint group.
     */
    readonly endpointGroupRegion: string | ros.IResolvable;

    /**
     * @Property listenerId: The ID of the listener to be associated with the endpoint group.
     */
    readonly listenerId: string | ros.IResolvable;

    /**
     * @Property description: The description of the endpoint group.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property endpointGroupType: The type of the endpoint group. Valid values:
     * default: The endpoint group is a default endpoint group. This is the default value.
     * virtual: The endpoint group is a virtual endpoint group.
     * Note Only HTTP and HTTPS listeners support virtual endpoint groups.
     */
    readonly endpointGroupType?: string | ros.IResolvable;

    /**
     * @Property endpointRequestProtocol: The protocol used by the backend service. Valid values:
     * http: This is the default value.
     * https
     * Note: You can set this parameter only when the listener that is associated with the endpoint group uses HTTP or HTTPS.
     * For an HTTP listener, the backend service protocol must be HTTP.
     */
    readonly endpointRequestProtocol?: string | ros.IResolvable;

    /**
     * @Property healthCheckEnabled: Specifies whether to enable the health check feature.
     */
    readonly healthCheckEnabled?: boolean | ros.IResolvable;

    /**
     * @Property healthCheckIntervalSeconds: The interval between two consecutive health checks. Unit: seconds.
     */
    readonly healthCheckIntervalSeconds?: number | ros.IResolvable;

    /**
     * @Property healthCheckPath: The path set as the destination on the targets for health checks.
     */
    readonly healthCheckPath?: string | ros.IResolvable;

    /**
     * @Property healthCheckPort: The port that is used to connect with the targets for health checks.
     */
    readonly healthCheckPort?: number | ros.IResolvable;

    /**
     * @Property healthCheckProtocol: The protocol that is used to connect with the targets for health checks.
     * tcp: TCP protocol
     * http: HTTP protocol
     * https: HTTPS protocol
     */
    readonly healthCheckProtocol?: string | ros.IResolvable;

    /**
     * @Property name: The name of the endpoint group.
     */
    readonly name?: string | ros.IResolvable;

    /**
     * @Property thresholdCount: The number of consecutive health check failures that must occur before a healthy endpoint is considered unhealthy, or the number of consecutive health check successes that must occur before an unhealthy endpoint is considered healthy.
     * Valid values: 2 to 10. Default value: 3.
     */
    readonly thresholdCount?: number | ros.IResolvable;

    /**
     * @Property trafficPercentage: The weight of the endpoint group when the corresponding listener is associated with
     * multiple endpoint groups.
     */
    readonly trafficPercentage?: number | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosEndpointGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosEndpointGroupProps`
 *
 * @returns the result of the validation.
 */
function RosEndpointGroupPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('healthCheckIntervalSeconds', ros.validateNumber)(properties.healthCheckIntervalSeconds));
    errors.collect(ros.propertyValidator('trafficPercentage', ros.validateNumber)(properties.trafficPercentage));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('healthCheckPath', ros.validateString)(properties.healthCheckPath));
    errors.collect(ros.propertyValidator('thresholdCount', ros.validateNumber)(properties.thresholdCount));
    errors.collect(ros.propertyValidator('healthCheckEnabled', ros.validateBoolean)(properties.healthCheckEnabled));
    errors.collect(ros.propertyValidator('endpointRequestProtocol', ros.validateString)(properties.endpointRequestProtocol));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    errors.collect(ros.propertyValidator('endpointGroupRegion', ros.requiredValidator)(properties.endpointGroupRegion));
    errors.collect(ros.propertyValidator('endpointGroupRegion', ros.validateString)(properties.endpointGroupRegion));
    if(properties.healthCheckProtocol && (typeof properties.healthCheckProtocol) !== 'object') {
        errors.collect(ros.propertyValidator('healthCheckProtocol', ros.validateAllowedValues)({
          data: properties.healthCheckProtocol,
          allowedValues: ["tcp","http","https"],
        }));
    }
    errors.collect(ros.propertyValidator('healthCheckProtocol', ros.validateString)(properties.healthCheckProtocol));
    errors.collect(ros.propertyValidator('healthCheckPort', ros.validateNumber)(properties.healthCheckPort));
    errors.collect(ros.propertyValidator('acceleratorId', ros.requiredValidator)(properties.acceleratorId));
    errors.collect(ros.propertyValidator('acceleratorId', ros.validateString)(properties.acceleratorId));
    errors.collect(ros.propertyValidator('endpointConfigurations', ros.requiredValidator)(properties.endpointConfigurations));
    if(properties.endpointConfigurations && (Array.isArray(properties.endpointConfigurations) || (typeof properties.endpointConfigurations) === 'string')) {
        errors.collect(ros.propertyValidator('endpointConfigurations', ros.validateLength)({
            data: properties.endpointConfigurations.length,
            min: 1,
            max: 4,
          }));
    }
    errors.collect(ros.propertyValidator('endpointConfigurations', ros.listValidator(RosEndpointGroup_EndpointConfigurationsPropertyValidator))(properties.endpointConfigurations));
    errors.collect(ros.propertyValidator('endpointGroupType', ros.validateString)(properties.endpointGroupType));
    errors.collect(ros.propertyValidator('listenerId', ros.requiredValidator)(properties.listenerId));
    errors.collect(ros.propertyValidator('listenerId', ros.validateString)(properties.listenerId));
    return errors.wrap('supplied properties not correct for "RosEndpointGroupProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::GA::EndpointGroup` resource
 *
 * @param properties - the TypeScript properties of a `RosEndpointGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::GA::EndpointGroup` resource.
 */
// @ts-ignore TS6133
function rosEndpointGroupPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosEndpointGroupPropsValidator(properties).assertSuccess();
    }
    return {
      'AcceleratorId': ros.stringToRosTemplate(properties.acceleratorId),
      'EndpointConfigurations': ros.listMapper(rosEndpointGroupEndpointConfigurationsPropertyToRosTemplate)(properties.endpointConfigurations),
      'EndpointGroupRegion': ros.stringToRosTemplate(properties.endpointGroupRegion),
      'ListenerId': ros.stringToRosTemplate(properties.listenerId),
      'Description': ros.stringToRosTemplate(properties.description),
      'EndpointGroupType': ros.stringToRosTemplate(properties.endpointGroupType),
      'EndpointRequestProtocol': ros.stringToRosTemplate(properties.endpointRequestProtocol),
      'HealthCheckEnabled': ros.booleanToRosTemplate(properties.healthCheckEnabled),
      'HealthCheckIntervalSeconds': ros.numberToRosTemplate(properties.healthCheckIntervalSeconds),
      'HealthCheckPath': ros.stringToRosTemplate(properties.healthCheckPath),
      'HealthCheckPort': ros.numberToRosTemplate(properties.healthCheckPort),
      'HealthCheckProtocol': ros.stringToRosTemplate(properties.healthCheckProtocol),
      'Name': ros.stringToRosTemplate(properties.name),
      'ThresholdCount': ros.numberToRosTemplate(properties.thresholdCount),
      'TrafficPercentage': ros.numberToRosTemplate(properties.trafficPercentage),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::GA::EndpointGroup`, which is used to create an endpoint group.
 * @Note This class does not contain additional functions, so it is recommended to use the `EndpointGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-endpointgroup
 */
export class RosEndpointGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::GA::EndpointGroup";

    /**
     * @Attribute EndpointGroupId: The ID of the endpoint group.
     */
    public readonly attrEndpointGroupId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property acceleratorId: The ID of the Global Accelerator instance with which the endpoint group will be associated.
     */
    public acceleratorId: string | ros.IResolvable;

    /**
     * @Property endpointConfigurations:
     */
    public endpointConfigurations: Array<RosEndpointGroup.EndpointConfigurationsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property endpointGroupRegion: The region ID of the endpoint group.
     */
    public endpointGroupRegion: string | ros.IResolvable;

    /**
     * @Property listenerId: The ID of the listener to be associated with the endpoint group.
     */
    public listenerId: string | ros.IResolvable;

    /**
     * @Property description: The description of the endpoint group.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property endpointGroupType: The type of the endpoint group. Valid values:
     * default: The endpoint group is a default endpoint group. This is the default value.
     * virtual: The endpoint group is a virtual endpoint group.
     * Note Only HTTP and HTTPS listeners support virtual endpoint groups.
     */
    public endpointGroupType: string | ros.IResolvable | undefined;

    /**
     * @Property endpointRequestProtocol: The protocol used by the backend service. Valid values:
     * http: This is the default value.
     * https
     * Note: You can set this parameter only when the listener that is associated with the endpoint group uses HTTP or HTTPS.
     * For an HTTP listener, the backend service protocol must be HTTP.
     */
    public endpointRequestProtocol: string | ros.IResolvable | undefined;

    /**
     * @Property healthCheckEnabled: Specifies whether to enable the health check feature.
     */
    public healthCheckEnabled: boolean | ros.IResolvable | undefined;

    /**
     * @Property healthCheckIntervalSeconds: The interval between two consecutive health checks. Unit: seconds.
     */
    public healthCheckIntervalSeconds: number | ros.IResolvable | undefined;

    /**
     * @Property healthCheckPath: The path set as the destination on the targets for health checks.
     */
    public healthCheckPath: string | ros.IResolvable | undefined;

    /**
     * @Property healthCheckPort: The port that is used to connect with the targets for health checks.
     */
    public healthCheckPort: number | ros.IResolvable | undefined;

    /**
     * @Property healthCheckProtocol: The protocol that is used to connect with the targets for health checks.
     * tcp: TCP protocol
     * http: HTTP protocol
     * https: HTTPS protocol
     */
    public healthCheckProtocol: string | ros.IResolvable | undefined;

    /**
     * @Property name: The name of the endpoint group.
     */
    public name: string | ros.IResolvable | undefined;

    /**
     * @Property thresholdCount: The number of consecutive health check failures that must occur before a healthy endpoint is considered unhealthy, or the number of consecutive health check successes that must occur before an unhealthy endpoint is considered healthy.
     * Valid values: 2 to 10. Default value: 3.
     */
    public thresholdCount: number | ros.IResolvable | undefined;

    /**
     * @Property trafficPercentage: The weight of the endpoint group when the corresponding listener is associated with
     * multiple endpoint groups.
     */
    public trafficPercentage: number | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosEndpointGroupProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosEndpointGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrEndpointGroupId = this.getAtt('EndpointGroupId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.acceleratorId = props.acceleratorId;
        this.endpointConfigurations = props.endpointConfigurations;
        this.endpointGroupRegion = props.endpointGroupRegion;
        this.listenerId = props.listenerId;
        this.description = props.description;
        this.endpointGroupType = props.endpointGroupType;
        this.endpointRequestProtocol = props.endpointRequestProtocol;
        this.healthCheckEnabled = props.healthCheckEnabled;
        this.healthCheckIntervalSeconds = props.healthCheckIntervalSeconds;
        this.healthCheckPath = props.healthCheckPath;
        this.healthCheckPort = props.healthCheckPort;
        this.healthCheckProtocol = props.healthCheckProtocol;
        this.name = props.name;
        this.thresholdCount = props.thresholdCount;
        this.trafficPercentage = props.trafficPercentage;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            acceleratorId: this.acceleratorId,
            endpointConfigurations: this.endpointConfigurations,
            endpointGroupRegion: this.endpointGroupRegion,
            listenerId: this.listenerId,
            description: this.description,
            endpointGroupType: this.endpointGroupType,
            endpointRequestProtocol: this.endpointRequestProtocol,
            healthCheckEnabled: this.healthCheckEnabled,
            healthCheckIntervalSeconds: this.healthCheckIntervalSeconds,
            healthCheckPath: this.healthCheckPath,
            healthCheckPort: this.healthCheckPort,
            healthCheckProtocol: this.healthCheckProtocol,
            name: this.name,
            thresholdCount: this.thresholdCount,
            trafficPercentage: this.trafficPercentage,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosEndpointGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosEndpointGroup {
    /**
     * @stability external
     */
    export interface EndpointConfigurationsProperty {
        /**
         * @Property enableProxyProtocol: Specifies whether to obtain and preserve the IP addresses of clients that access the endpoint by using the TCP Option Address (TOA) module. Valid values:
     * true: yes
     * false (default): no
         */
        readonly enableProxyProtocol?: boolean | ros.IResolvable;
        /**
         * @Property type: The type of endpoint in the endpoint group. Valid values:
     * Domain: a custom domain name
     * EIP: eip address
     * Ip: a custom IP address
     * PublicIp: a public IP address provided by Alibaba Cloud
     * ECS: an Elastic Compute Service (ECS) instance
     * SLB: a Server Load Balancer (SLB) instance
     * ALB: an Application Load Balancer (ALB) instance
     * OSS: an Object Storage Service (OSS) bucket
         */
        readonly type: string | ros.IResolvable;
        /**
         * @Property endpoint: The IP address or domain name of endpoint in the endpoint group.
         */
        readonly endpoint: string | ros.IResolvable;
        /**
         * @Property enableClientIpPreservation: Specifies whether to obtain and preserve the IP addresses of clients that access the endpoint by using the TCP Option Address (TOA) module. Valid values:
     * true: yes
     * false (default): no
         */
        readonly enableClientIpPreservation?: boolean | ros.IResolvable;
        /**
         * @Property weight: The weight of endpoint N in the endpoint group.
         */
        readonly weight: number | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `EndpointConfigurationsProperty`
 *
 * @param properties - the TypeScript properties of a `EndpointConfigurationsProperty`
 *
 * @returns the result of the validation.
 */
function RosEndpointGroup_EndpointConfigurationsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('enableProxyProtocol', ros.validateBoolean)(properties.enableProxyProtocol));
    errors.collect(ros.propertyValidator('type', ros.requiredValidator)(properties.type));
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('endpoint', ros.requiredValidator)(properties.endpoint));
    errors.collect(ros.propertyValidator('endpoint', ros.validateString)(properties.endpoint));
    errors.collect(ros.propertyValidator('enableClientIpPreservation', ros.validateBoolean)(properties.enableClientIpPreservation));
    errors.collect(ros.propertyValidator('weight', ros.requiredValidator)(properties.weight));
    errors.collect(ros.propertyValidator('weight', ros.validateNumber)(properties.weight));
    return errors.wrap('supplied properties not correct for "EndpointConfigurationsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::GA::EndpointGroup.EndpointConfigurations` resource
 *
 * @param properties - the TypeScript properties of a `EndpointConfigurationsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::GA::EndpointGroup.EndpointConfigurations` resource.
 */
// @ts-ignore TS6133
function rosEndpointGroupEndpointConfigurationsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosEndpointGroup_EndpointConfigurationsPropertyValidator(properties).assertSuccess();
    return {
      'EnableProxyProtocol': ros.booleanToRosTemplate(properties.enableProxyProtocol),
      'Type': ros.stringToRosTemplate(properties.type),
      'Endpoint': ros.stringToRosTemplate(properties.endpoint),
      'EnableClientIPPreservation': ros.booleanToRosTemplate(properties.enableClientIpPreservation),
      'Weight': ros.numberToRosTemplate(properties.weight),
    };
}

/**
 * Properties for defining a `RosEndpointGroups`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-endpointgroups
 */
export interface RosEndpointGroupsProps {

    /**
     * @Property acceleratorId: The ID of the basic GA instance.
     */
    readonly acceleratorId: string | ros.IResolvable;

    /**
     * @Property endpointGroupConfigurations: The configurations of the endpoint groups.
     */
    readonly endpointGroupConfigurations: Array<RosEndpointGroups.EndpointGroupConfigurationsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property listenerId: The ID of the region to which the endpoint group belongs.
     */
    readonly listenerId: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosEndpointGroupsProps`
 *
 * @param properties - the TypeScript properties of a `RosEndpointGroupsProps`
 *
 * @returns the result of the validation.
 */
function RosEndpointGroupsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('endpointGroupConfigurations', ros.requiredValidator)(properties.endpointGroupConfigurations));
    if(properties.endpointGroupConfigurations && (Array.isArray(properties.endpointGroupConfigurations) || (typeof properties.endpointGroupConfigurations) === 'string')) {
        errors.collect(ros.propertyValidator('endpointGroupConfigurations', ros.validateLength)({
            data: properties.endpointGroupConfigurations.length,
            min: 1,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('endpointGroupConfigurations', ros.listValidator(RosEndpointGroups_EndpointGroupConfigurationsPropertyValidator))(properties.endpointGroupConfigurations));
    errors.collect(ros.propertyValidator('acceleratorId', ros.requiredValidator)(properties.acceleratorId));
    errors.collect(ros.propertyValidator('acceleratorId', ros.validateString)(properties.acceleratorId));
    errors.collect(ros.propertyValidator('listenerId', ros.requiredValidator)(properties.listenerId));
    errors.collect(ros.propertyValidator('listenerId', ros.validateString)(properties.listenerId));
    return errors.wrap('supplied properties not correct for "RosEndpointGroupsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::GA::EndpointGroups` resource
 *
 * @param properties - the TypeScript properties of a `RosEndpointGroupsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::GA::EndpointGroups` resource.
 */
// @ts-ignore TS6133
function rosEndpointGroupsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosEndpointGroupsPropsValidator(properties).assertSuccess();
    }
    return {
      'AcceleratorId': ros.stringToRosTemplate(properties.acceleratorId),
      'EndpointGroupConfigurations': ros.listMapper(rosEndpointGroupsEndpointGroupConfigurationsPropertyToRosTemplate)(properties.endpointGroupConfigurations),
      'ListenerId': ros.stringToRosTemplate(properties.listenerId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::GA::EndpointGroups`, which is used to create multiple endpoint groups at a time.
 * @Note This class does not contain additional functions, so it is recommended to use the `EndpointGroups` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-endpointgroups
 */
export class RosEndpointGroups extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::GA::EndpointGroups";

    /**
     * @Attribute EndpointGroupIds: The IDs of the endpoint groups.
     */
    public readonly attrEndpointGroupIds: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property acceleratorId: The ID of the basic GA instance.
     */
    public acceleratorId: string | ros.IResolvable;

    /**
     * @Property endpointGroupConfigurations: The configurations of the endpoint groups.
     */
    public endpointGroupConfigurations: Array<RosEndpointGroups.EndpointGroupConfigurationsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property listenerId: The ID of the region to which the endpoint group belongs.
     */
    public listenerId: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosEndpointGroupsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosEndpointGroups.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrEndpointGroupIds = this.getAtt('EndpointGroupIds');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.acceleratorId = props.acceleratorId;
        this.endpointGroupConfigurations = props.endpointGroupConfigurations;
        this.listenerId = props.listenerId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            acceleratorId: this.acceleratorId,
            endpointGroupConfigurations: this.endpointGroupConfigurations,
            listenerId: this.listenerId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosEndpointGroupsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosEndpointGroups {
    /**
     * @stability external
     */
    export interface EndpointConfigurationsProperty {
        /**
         * @Property type: The type of the endpoint. Valid values:
     * Domain: a custom domain name 
     * Ip: a custom IP address 
     * PublicIp: a public IP address provided by Alibaba Cloud 
     * ECS: an Elastic Compute Service (ECS) instance 
     * SLB: a Server Load Balancer (SLB) instance 
     * ALB: an Application Load Balancer (ALB) instance 
     * OSS: an Object Storage Service (OSS) bucket 
     * ENI: an elastic network interface (ENI) 
     * NLB: a Network Load Balancer (NLB) instance
         */
        readonly type: string | ros.IResolvable;
        /**
         * @Property endpoint: The IP address, domain name, or instance ID based on the value of Type.
         */
        readonly endpoint: string | ros.IResolvable;
        /**
         * @Property subAddress: The private IP address of the ENI.
         */
        readonly subAddress?: string | ros.IResolvable;
        /**
         * @Property weight: The weight of the endpoint. Valid values: 0 to 255.
         */
        readonly weight: number | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `EndpointConfigurationsProperty`
 *
 * @param properties - the TypeScript properties of a `EndpointConfigurationsProperty`
 *
 * @returns the result of the validation.
 */
function RosEndpointGroups_EndpointConfigurationsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('type', ros.requiredValidator)(properties.type));
    if(properties.type && (typeof properties.type) !== 'object') {
        errors.collect(ros.propertyValidator('type', ros.validateAllowedValues)({
          data: properties.type,
          allowedValues: ["Domain","Ip","PublicIpECS","SLBALB","OSS","ENI","NLB"],
        }));
    }
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('endpoint', ros.requiredValidator)(properties.endpoint));
    errors.collect(ros.propertyValidator('endpoint', ros.validateString)(properties.endpoint));
    errors.collect(ros.propertyValidator('subAddress', ros.validateString)(properties.subAddress));
    errors.collect(ros.propertyValidator('weight', ros.requiredValidator)(properties.weight));
    if(properties.weight && (typeof properties.weight) !== 'object') {
        errors.collect(ros.propertyValidator('weight', ros.validateRange)({
            data: properties.weight,
            min: 0,
            max: 255,
          }));
    }
    errors.collect(ros.propertyValidator('weight', ros.validateNumber)(properties.weight));
    return errors.wrap('supplied properties not correct for "EndpointConfigurationsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::GA::EndpointGroups.EndpointConfigurations` resource
 *
 * @param properties - the TypeScript properties of a `EndpointConfigurationsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::GA::EndpointGroups.EndpointConfigurations` resource.
 */
// @ts-ignore TS6133
function rosEndpointGroupsEndpointConfigurationsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosEndpointGroups_EndpointConfigurationsPropertyValidator(properties).assertSuccess();
    return {
      'Type': ros.stringToRosTemplate(properties.type),
      'Endpoint': ros.stringToRosTemplate(properties.endpoint),
      'SubAddress': ros.stringToRosTemplate(properties.subAddress),
      'Weight': ros.numberToRosTemplate(properties.weight),
    };
}

export namespace RosEndpointGroups {
    /**
     * @stability external
     */
    export interface EndpointGroupConfigurationsProperty {
        /**
         * @Property healthCheckIntervalSeconds: The interval at which health checks are performed.
         */
        readonly healthCheckIntervalSeconds?: number | ros.IResolvable;
        /**
         * @Property trafficPercentage: The traffic distribution ratio. If a listener is associated with multiple endpoint groups, you can specify this parameter to distribute traffic to the endpoint groups based on ratios. Valid values: 1 to 100. Default value: 100. You can specify traffic distribution ratios for up to 10 endpoint groups.
         */
        readonly trafficPercentage?: number | ros.IResolvable;
        /**
         * @Property endpointGroupName: The name of the endpoint group. The name must be 2 to 128 characters in length, and can contain letters, digits, underscores (_), and hyphens (-). The name must start with a letter. You can specify the names of up to 10 endpoint groups.
         */
        readonly endpointGroupName?: string | ros.IResolvable;
        /**
         * @Property healthCheckPath: The path to which health check requests are sent.
         */
        readonly healthCheckPath?: string | ros.IResolvable;
        /**
         * @Property thresholdCount: The number of consecutive health check failures that must occur before a healthy endpoint group is considered unhealthy, or the number of consecutive health check successes that must occur before an unhealthy endpoint group is considered healthy.
         */
        readonly thresholdCount?: number | ros.IResolvable;
        /**
         * @Property healthCheckEnabled: Specifies whether to enable the health check feature.
         */
        readonly healthCheckEnabled?: boolean | ros.IResolvable;
        /**
         * @Property endpointRequestProtocol: The protocol that is used by the backend service. Valid values:
     * HTTP (default)
     * HTTPS
     * You can specify up to 10 backend service protocols.
         */
        readonly endpointRequestProtocol?: string | ros.IResolvable;
        /**
         * @Property portOverrides: The port mapping.
         */
        readonly portOverrides?: Array<RosEndpointGroups.PortOverridesProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property endpointGroupRegion: The ID of the region where you want to create the endpoint group. You can enter the region IDs of up to 10 endpoint groups.
         */
        readonly endpointGroupRegion: string | ros.IResolvable;
        /**
         * @Property endpointGroupDescription: The description of the endpoint group. The description can be up to 256 characters in length and cannot contain http:\/\/ or https:\/\/. You can enter the descriptions of up to 10 endpoint groups.
         */
        readonly endpointGroupDescription?: string | ros.IResolvable;
        /**
         * @Property enableClientIpPreservationToa: Specifies whether to preserve the IP addresses of clients that access the endpoint by using the TCP Option Address (TOA) module.
         */
        readonly enableClientIpPreservationToa?: boolean | ros.IResolvable;
        /**
         * @Property healthCheckProtocol: The protocol over which health check requests are sent. Valid values:
     * tcp
     * http
     * https
     * You can specify up to 10 health check protocols.
         */
        readonly healthCheckProtocol?: string | ros.IResolvable;
        /**
         * @Property healthCheckPort: The port that is used for health checks. Valid values: 1 to 65535.
         */
        readonly healthCheckPort?: number | ros.IResolvable;
        /**
         * @Property endpointConfigurations: The configurations of the endpoints.
         */
        readonly endpointConfigurations?: Array<RosEndpointGroups.EndpointConfigurationsProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property tags: The tags.
         */
        readonly tags?: RosEndpointGroups.TagsProperty[];
        /**
         * @Property endpointGroupType: The type of the endpoint group. Valid values:
     * default (default)
     * virtual
     * You can specify the types of up to 10 endpoint groups.
         */
        readonly endpointGroupType?: string | ros.IResolvable;
        /**
         * @Property enableClientIpPreservationProxyProtocol: Specifies whether to use the proxy protocol to preserve client IP addresses.
         */
        readonly enableClientIpPreservationProxyProtocol?: boolean | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `EndpointGroupConfigurationsProperty`
 *
 * @param properties - the TypeScript properties of a `EndpointGroupConfigurationsProperty`
 *
 * @returns the result of the validation.
 */
function RosEndpointGroups_EndpointGroupConfigurationsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('healthCheckIntervalSeconds', ros.validateNumber)(properties.healthCheckIntervalSeconds));
    if(properties.trafficPercentage && (typeof properties.trafficPercentage) !== 'object') {
        errors.collect(ros.propertyValidator('trafficPercentage', ros.validateRange)({
            data: properties.trafficPercentage,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('trafficPercentage', ros.validateNumber)(properties.trafficPercentage));
    if(properties.endpointGroupName && (Array.isArray(properties.endpointGroupName) || (typeof properties.endpointGroupName) === 'string')) {
        errors.collect(ros.propertyValidator('endpointGroupName', ros.validateLength)({
            data: properties.endpointGroupName.length,
            min: 2,
            max: 128,
          }));
    }
    errors.collect(ros.propertyValidator('endpointGroupName', ros.validateString)(properties.endpointGroupName));
    errors.collect(ros.propertyValidator('healthCheckPath', ros.validateString)(properties.healthCheckPath));
    if(properties.thresholdCount && (typeof properties.thresholdCount) !== 'object') {
        errors.collect(ros.propertyValidator('thresholdCount', ros.validateRange)({
            data: properties.thresholdCount,
            min: 2,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('thresholdCount', ros.validateNumber)(properties.thresholdCount));
    errors.collect(ros.propertyValidator('healthCheckEnabled', ros.validateBoolean)(properties.healthCheckEnabled));
    if(properties.endpointRequestProtocol && (typeof properties.endpointRequestProtocol) !== 'object') {
        errors.collect(ros.propertyValidator('endpointRequestProtocol', ros.validateAllowedValues)({
          data: properties.endpointRequestProtocol,
          allowedValues: ["HTTP","HTTPS"],
        }));
    }
    errors.collect(ros.propertyValidator('endpointRequestProtocol', ros.validateString)(properties.endpointRequestProtocol));
    if(properties.portOverrides && (Array.isArray(properties.portOverrides) || (typeof properties.portOverrides) === 'string')) {
        errors.collect(ros.propertyValidator('portOverrides', ros.validateLength)({
            data: properties.portOverrides.length,
            min: 0,
            max: 5,
          }));
    }
    errors.collect(ros.propertyValidator('portOverrides', ros.listValidator(RosEndpointGroups_PortOverridesPropertyValidator))(properties.portOverrides));
    errors.collect(ros.propertyValidator('endpointGroupRegion', ros.requiredValidator)(properties.endpointGroupRegion));
    errors.collect(ros.propertyValidator('endpointGroupRegion', ros.validateString)(properties.endpointGroupRegion));
    if(properties.endpointGroupDescription && (Array.isArray(properties.endpointGroupDescription) || (typeof properties.endpointGroupDescription) === 'string')) {
        errors.collect(ros.propertyValidator('endpointGroupDescription', ros.validateLength)({
            data: properties.endpointGroupDescription.length,
            min: 0,
            max: 256,
          }));
    }
    errors.collect(ros.propertyValidator('endpointGroupDescription', ros.validateString)(properties.endpointGroupDescription));
    errors.collect(ros.propertyValidator('enableClientIpPreservationToa', ros.validateBoolean)(properties.enableClientIpPreservationToa));
    if(properties.healthCheckProtocol && (typeof properties.healthCheckProtocol) !== 'object') {
        errors.collect(ros.propertyValidator('healthCheckProtocol', ros.validateAllowedValues)({
          data: properties.healthCheckProtocol,
          allowedValues: ["tcp","TCP","httpHTTP","httpsHTTPS"],
        }));
    }
    errors.collect(ros.propertyValidator('healthCheckProtocol', ros.validateString)(properties.healthCheckProtocol));
    if(properties.healthCheckPort && (typeof properties.healthCheckPort) !== 'object') {
        errors.collect(ros.propertyValidator('healthCheckPort', ros.validateRange)({
            data: properties.healthCheckPort,
            min: 1,
            max: 65535,
          }));
    }
    errors.collect(ros.propertyValidator('healthCheckPort', ros.validateNumber)(properties.healthCheckPort));
    if(properties.endpointConfigurations && (Array.isArray(properties.endpointConfigurations) || (typeof properties.endpointConfigurations) === 'string')) {
        errors.collect(ros.propertyValidator('endpointConfigurations', ros.validateLength)({
            data: properties.endpointConfigurations.length,
            min: 0,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('endpointConfigurations', ros.listValidator(RosEndpointGroups_EndpointConfigurationsPropertyValidator))(properties.endpointConfigurations));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: 0,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosEndpointGroups_TagsPropertyValidator))(properties.tags));
    if(properties.endpointGroupType && (typeof properties.endpointGroupType) !== 'object') {
        errors.collect(ros.propertyValidator('endpointGroupType', ros.validateAllowedValues)({
          data: properties.endpointGroupType,
          allowedValues: ["default","virtual"],
        }));
    }
    errors.collect(ros.propertyValidator('endpointGroupType', ros.validateString)(properties.endpointGroupType));
    errors.collect(ros.propertyValidator('enableClientIpPreservationProxyProtocol', ros.validateBoolean)(properties.enableClientIpPreservationProxyProtocol));
    return errors.wrap('supplied properties not correct for "EndpointGroupConfigurationsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::GA::EndpointGroups.EndpointGroupConfigurations` resource
 *
 * @param properties - the TypeScript properties of a `EndpointGroupConfigurationsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::GA::EndpointGroups.EndpointGroupConfigurations` resource.
 */
// @ts-ignore TS6133
function rosEndpointGroupsEndpointGroupConfigurationsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosEndpointGroups_EndpointGroupConfigurationsPropertyValidator(properties).assertSuccess();
    return {
      'HealthCheckIntervalSeconds': ros.numberToRosTemplate(properties.healthCheckIntervalSeconds),
      'TrafficPercentage': ros.numberToRosTemplate(properties.trafficPercentage),
      'EndpointGroupName': ros.stringToRosTemplate(properties.endpointGroupName),
      'HealthCheckPath': ros.stringToRosTemplate(properties.healthCheckPath),
      'ThresholdCount': ros.numberToRosTemplate(properties.thresholdCount),
      'HealthCheckEnabled': ros.booleanToRosTemplate(properties.healthCheckEnabled),
      'EndpointRequestProtocol': ros.stringToRosTemplate(properties.endpointRequestProtocol),
      'PortOverrides': ros.listMapper(rosEndpointGroupsPortOverridesPropertyToRosTemplate)(properties.portOverrides),
      'EndpointGroupRegion': ros.stringToRosTemplate(properties.endpointGroupRegion),
      'EndpointGroupDescription': ros.stringToRosTemplate(properties.endpointGroupDescription),
      'EnableClientIPPreservationToa': ros.booleanToRosTemplate(properties.enableClientIpPreservationToa),
      'HealthCheckProtocol': ros.stringToRosTemplate(properties.healthCheckProtocol),
      'HealthCheckPort': ros.numberToRosTemplate(properties.healthCheckPort),
      'EndpointConfigurations': ros.listMapper(rosEndpointGroupsEndpointConfigurationsPropertyToRosTemplate)(properties.endpointConfigurations),
      'Tags': ros.listMapper(rosEndpointGroupsTagsPropertyToRosTemplate)(properties.tags),
      'EndpointGroupType': ros.stringToRosTemplate(properties.endpointGroupType),
      'EnableClientIPPreservationProxyProtocol': ros.booleanToRosTemplate(properties.enableClientIpPreservationProxyProtocol),
    };
}

export namespace RosEndpointGroups {
    /**
     * @stability external
     */
    export interface PortOverridesProperty {
        /**
         * @Property listenerPort: The listener port that is mapped to the endpoint port.
         */
        readonly listenerPort: number | ros.IResolvable;
        /**
         * @Property endpointPort: The endpoint port that is mapped to the listener port.
         */
        readonly endpointPort: number | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `PortOverridesProperty`
 *
 * @param properties - the TypeScript properties of a `PortOverridesProperty`
 *
 * @returns the result of the validation.
 */
function RosEndpointGroups_PortOverridesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('listenerPort', ros.requiredValidator)(properties.listenerPort));
    errors.collect(ros.propertyValidator('listenerPort', ros.validateNumber)(properties.listenerPort));
    errors.collect(ros.propertyValidator('endpointPort', ros.requiredValidator)(properties.endpointPort));
    errors.collect(ros.propertyValidator('endpointPort', ros.validateNumber)(properties.endpointPort));
    return errors.wrap('supplied properties not correct for "PortOverridesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::GA::EndpointGroups.PortOverrides` resource
 *
 * @param properties - the TypeScript properties of a `PortOverridesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::GA::EndpointGroups.PortOverrides` resource.
 */
// @ts-ignore TS6133
function rosEndpointGroupsPortOverridesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosEndpointGroups_PortOverridesPropertyValidator(properties).assertSuccess();
    return {
      'ListenerPort': ros.numberToRosTemplate(properties.listenerPort),
      'EndpointPort': ros.numberToRosTemplate(properties.endpointPort),
    };
}

export namespace RosEndpointGroups {
    /**
     * @stability external
     */
    export interface TagsProperty {
        /**
         * @Property value: The value of the tag.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: The key of the tag.
         */
        readonly key?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosEndpointGroups_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::GA::EndpointGroups.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::GA::EndpointGroups.Tags` resource.
 */
// @ts-ignore TS6133
function rosEndpointGroupsTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosEndpointGroups_TagsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `RosForwardingRules`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-forwardingrules
 */
export interface RosForwardingRulesProps {

    /**
     * @Property acceleratorId: The ID of the GA instance.
     */
    readonly acceleratorId: string | ros.IResolvable;

    /**
     * @Property forwardingRules: Details about the forwarding rules.
     */
    readonly forwardingRules: Array<RosForwardingRules.ForwardingRulesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property listenerId: The ID of the listener.
     */
    readonly listenerId: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosForwardingRulesProps`
 *
 * @param properties - the TypeScript properties of a `RosForwardingRulesProps`
 *
 * @returns the result of the validation.
 */
function RosForwardingRulesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('acceleratorId', ros.requiredValidator)(properties.acceleratorId));
    errors.collect(ros.propertyValidator('acceleratorId', ros.validateString)(properties.acceleratorId));
    errors.collect(ros.propertyValidator('forwardingRules', ros.requiredValidator)(properties.forwardingRules));
    if(properties.forwardingRules && (Array.isArray(properties.forwardingRules) || (typeof properties.forwardingRules) === 'string')) {
        errors.collect(ros.propertyValidator('forwardingRules', ros.validateLength)({
            data: properties.forwardingRules.length,
            min: 1,
            max: 200,
          }));
    }
    errors.collect(ros.propertyValidator('forwardingRules', ros.listValidator(RosForwardingRules_ForwardingRulesPropertyValidator))(properties.forwardingRules));
    errors.collect(ros.propertyValidator('listenerId', ros.requiredValidator)(properties.listenerId));
    errors.collect(ros.propertyValidator('listenerId', ros.validateString)(properties.listenerId));
    return errors.wrap('supplied properties not correct for "RosForwardingRulesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::GA::ForwardingRules` resource
 *
 * @param properties - the TypeScript properties of a `RosForwardingRulesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::GA::ForwardingRules` resource.
 */
// @ts-ignore TS6133
function rosForwardingRulesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosForwardingRulesPropsValidator(properties).assertSuccess();
    }
    return {
      'AcceleratorId': ros.stringToRosTemplate(properties.acceleratorId),
      'ForwardingRules': ros.listMapper(rosForwardingRulesForwardingRulesPropertyToRosTemplate)(properties.forwardingRules),
      'ListenerId': ros.stringToRosTemplate(properties.listenerId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::GA::ForwardingRules`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ForwardingRules` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-forwardingrules
 */
export class RosForwardingRules extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::GA::ForwardingRules";

    /**
     * @Attribute ForwardingRuleIds: The IDs of the endpoint groups.
     */
    public readonly attrForwardingRuleIds: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property acceleratorId: The ID of the GA instance.
     */
    public acceleratorId: string | ros.IResolvable;

    /**
     * @Property forwardingRules: Details about the forwarding rules.
     */
    public forwardingRules: Array<RosForwardingRules.ForwardingRulesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property listenerId: The ID of the listener.
     */
    public listenerId: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosForwardingRulesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosForwardingRules.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrForwardingRuleIds = this.getAtt('ForwardingRuleIds');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.acceleratorId = props.acceleratorId;
        this.forwardingRules = props.forwardingRules;
        this.listenerId = props.listenerId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            acceleratorId: this.acceleratorId,
            forwardingRules: this.forwardingRules,
            listenerId: this.listenerId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosForwardingRulesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosForwardingRules {
    /**
     * @stability external
     */
    export interface ForwardingRulesProperty {
        /**
         * @Property ruleActions: The forwarding action.
         */
        readonly ruleActions: Array<RosForwardingRules.RuleActionsProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property priority: The priority of the forwarding rule. Valid values: 1 to 10000. A lower value indicates a higher priority.
         */
        readonly priority?: number | ros.IResolvable;
        /**
         * @Property forwardingRuleName: The name of the forwarding rule. The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
         */
        readonly forwardingRuleName?: string | ros.IResolvable;
        /**
         * @Property ruleConditions: The forwarding conditions.
         */
        readonly ruleConditions: Array<RosForwardingRules.RuleConditionsProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property ruleDirection: The direction in which the rule takes effect. You do not need to set this parameter. By default, this parameter is set to request, which indicates that the rule takes effect on requests.
         */
        readonly ruleDirection?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ForwardingRulesProperty`
 *
 * @param properties - the TypeScript properties of a `ForwardingRulesProperty`
 *
 * @returns the result of the validation.
 */
function RosForwardingRules_ForwardingRulesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('ruleActions', ros.requiredValidator)(properties.ruleActions));
    if(properties.ruleActions && (Array.isArray(properties.ruleActions) || (typeof properties.ruleActions) === 'string')) {
        errors.collect(ros.propertyValidator('ruleActions', ros.validateLength)({
            data: properties.ruleActions.length,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('ruleActions', ros.listValidator(RosForwardingRules_RuleActionsPropertyValidator))(properties.ruleActions));
    if(properties.priority && (typeof properties.priority) !== 'object') {
        errors.collect(ros.propertyValidator('priority', ros.validateRange)({
            data: properties.priority,
            min: 1,
            max: 10000,
          }));
    }
    errors.collect(ros.propertyValidator('priority', ros.validateNumber)(properties.priority));
    if(properties.forwardingRuleName && (Array.isArray(properties.forwardingRuleName) || (typeof properties.forwardingRuleName) === 'string')) {
        errors.collect(ros.propertyValidator('forwardingRuleName', ros.validateLength)({
            data: properties.forwardingRuleName.length,
            min: 2,
            max: 128,
          }));
    }
    errors.collect(ros.propertyValidator('forwardingRuleName', ros.validateString)(properties.forwardingRuleName));
    errors.collect(ros.propertyValidator('ruleConditions', ros.requiredValidator)(properties.ruleConditions));
    if(properties.ruleConditions && (Array.isArray(properties.ruleConditions) || (typeof properties.ruleConditions) === 'string')) {
        errors.collect(ros.propertyValidator('ruleConditions', ros.validateLength)({
            data: properties.ruleConditions.length,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('ruleConditions', ros.listValidator(RosForwardingRules_RuleConditionsPropertyValidator))(properties.ruleConditions));
    if(properties.ruleDirection && (typeof properties.ruleDirection) !== 'object') {
        errors.collect(ros.propertyValidator('ruleDirection', ros.validateAllowedValues)({
          data: properties.ruleDirection,
          allowedValues: ["request"],
        }));
    }
    errors.collect(ros.propertyValidator('ruleDirection', ros.validateString)(properties.ruleDirection));
    return errors.wrap('supplied properties not correct for "ForwardingRulesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::GA::ForwardingRules.ForwardingRules` resource
 *
 * @param properties - the TypeScript properties of a `ForwardingRulesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::GA::ForwardingRules.ForwardingRules` resource.
 */
// @ts-ignore TS6133
function rosForwardingRulesForwardingRulesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosForwardingRules_ForwardingRulesPropertyValidator(properties).assertSuccess();
    return {
      'RuleActions': ros.listMapper(rosForwardingRulesRuleActionsPropertyToRosTemplate)(properties.ruleActions),
      'Priority': ros.numberToRosTemplate(properties.priority),
      'ForwardingRuleName': ros.stringToRosTemplate(properties.forwardingRuleName),
      'RuleConditions': ros.listMapper(rosForwardingRulesRuleConditionsPropertyToRosTemplate)(properties.ruleConditions),
      'RuleDirection': ros.stringToRosTemplate(properties.ruleDirection),
    };
}

export namespace RosForwardingRules {
    /**
     * @stability external
     */
    export interface RuleActionsProperty {
        /**
         * @Property ruleActionType: The type of the forwarding action. Valid values:
     * * ForwardGroup: forwards a request.
     * * Redirect: redirects a request.
     * * FixResponse: returns a fixed response. 
     * * Rewrite: rewrites a request. 
     * * AddHeader: adds a header to a request. 
     * * RemoveHeaderConfig: deletes the header from a request. 
     *
         */
        readonly ruleActionType: string | ros.IResolvable;
        /**
         * @Property order: The forwarding priority.
         */
        readonly order: number | ros.IResolvable;
        /**
         * @Property ruleActionValue: The value of the forwarding action type. You must specify different JSON strings based on the RuleActionType parameter. A forwarding rule can contain only one forwarding action whose type is ForwardGroup, Redirect, or FixResponse. You must specify a forwarding action whose type is Rewrite, AddHeader, or RemoveHeader before a forwarding action whose type is ForwardGroup. 
     * * If RuleActionType is set to ForwardGroup, this parameter specifies the information of a virtual endpoint group. You can forward requests to only one virtual endpoint group. Example: {"type":"endpointgroup", "value":"epg-bp1enpdcrqhl78g6r****"}. 
     *   * type: set this parameter to endpointgroup.
     *   * value: set this parameter to the ID of a virtual endpoint group.
     * * If RuleActionType is set to Redirect, this parameter specifies redirecting configurations. You cannot leave all of the following parameters empty or configure all of these parameters to use the default values for a forwarding action whose type is Redirect: protocol, domain, port, path, and query. Example: {"protocol":"HTTP", "domain":"www.example.com", "port":"80", "path":"\/a","query":"value1", "code":"301" }.
     *   * protocol: the protocol of requests after the requests are redirected. Valid values: ${protocol} (default), HTTP, and HTTPS.
     *   * domain: the domain name to which requests are redirected. Default value: ${host}. You can also enter a domain name. The domain name must be 3 to 128 characters in length, and can contain only letters, digits, and the following special characters: . - ? = ~ _ - + \/ ^ * ! $ & | ( ) [ ].
     *   * port: the port to which requests are redirected. Default value: ${port}. You can enter a port number that ranges from 1 to 63335.
     *   * path: the path to which requests are redirected. Default value: ${path}. The path must be 1 to 128 characters in length. To use a regular expression, the path can contain letters, digits, and the following special characters: . - _ \/ = ? ~ ^ * $ : ( ) [ ] + |. The path must start with a tilde (~). If you do not want to use a regular expression, the path can contain letters, digits, and the following special characters: . - _ \/ = ? :. The path must start with a forward slash (\/).
     *   * query: the query string of the requests to be redirected. Default value: ${query}. You can also specify a query string. The query string must be 1 to 128 characters in length, and can contain printable characters whose ASCII values are greater than or equal to 32 and smaller than 127. The query string cannot contain uppercase letters, space characters, or the following special characters: [ ] { } < > # | &.
     *   * code: the redirecting code. Valid values: 301, 302, 303, 307, and 308.
     * * If RuleActionType is set to FixResponse, this parameter specifies a fixed response. Example: {"code":"200", "type":"text\/plain", "content":"dssacav" }.
     *   * code: the HTTP status code to return. The response status code must be one of the following numeric strings: 2xx, 4xx, and 5xx. The letter x indicates a number from 0 to 9.
     *   * type: the type of the response content. Valid values: text\/plain, text\/css, text\/html, application\/javascript, and application\/json.
     *   * content: the response content. The response content cannot exceed 1,000 characters in length and does not support Chinese characters.
     * * If RuleActionType is set to AddHeader, this parameter specifies an HTTP header to be added. If a forwarding rule contains a forwarding action whose type is AddHeader, you must specify another forwarding action whose type is ForwardGroup. Example: [{"name":"header1","type":"userdefined", "value":"value"}].
     *   * name: the name of the HTTP header. The name must be 1 to 40 characters in length, and can contain letters, digits, hyphens (-), and underscores (_). The name of the HTTP header specified by AddHeader must be unique and cannot be the same as the name of the HTTP header specified by RemoveHeader.
     *   * type: the content type of the HTTP header. Valid values: user-defined, ref, and system-defined.
     *   * value: the content of the HTTP header. You cannot leave this parameter empty. If you set type to user-defined, the content must be 1 to 128 characters in length, and can contain printable characters whose ASCII values are greater than or equal to 32 and smaller than 127. The content can contain letters, digits, hyphens (-), and underscores (_). The content cannot start or end with a space character. If you set type to ref, the content must be 1 to 128 characters in length, and can contain letters, digits, hyphens (-), and underscores (_). The content cannot start or end with a space character. If you set type to system-defined, only ClientSrcIp is supported.
     * * If RuleActionType is set to RemoveHeader, this parameter specifies an HTTP header to be removed. If a forwarding rule contains a forwarding action whose type is RemoveHeader, you must specify another forwarding action whose type is ForwardGroup. The header must be 1 to 40 characters in length, and can contain letters, digits, hyphens (-), and underscores (_). Example: ["header1"].
     * * If RuleActionType is set to Rewrite, this parameter specifies the rewriting configuration. If a forwarding rule contains a forwarding action whose type is Rewrite, you must specify another forwarding action whose type is ForwardGroup. Example: {"domain":"value1", "path":"value2", "query":"value3"}.
     *   * domain: the domain name to which requests are redirected. Default value: ${host}. You can also enter a domain name. The domain name must be 3 to 128 characters in length, and can contain only lowercase letters, digits, and the following special characters: . - ? = ~ _ - + \/ ^ * ! $ & | ( ) [ ].
     *   * path: the path to which requests are redirected. Default value: ${path}. The path must be 1 to 128 characters in length. To use a regular expression, the path can contain letters, digits, and the following special characters: . - _ \/ = ? ~ ^ * $ : ( ) [ ] + |. The path must start with a tilde (~). If you do not want to use a regular expression, the path can contain letters, digits, and the following special characters: . - _ \/ = ? :. The path must start with a forward slash (\/).
     *   * query: the query string of the requests to be redirected. Default value: ${query}. You can also specify a query string. The query string must be 1 to 128 characters in length, and can contain printable characters whose ASCII values are greater than or equal to 32 and smaller than 127. The query string cannot contain uppercase letters, space characters, or the following special characters: [ ] { } < > # | &.
         */
        readonly ruleActionValue?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `RuleActionsProperty`
 *
 * @param properties - the TypeScript properties of a `RuleActionsProperty`
 *
 * @returns the result of the validation.
 */
function RosForwardingRules_RuleActionsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('ruleActionType', ros.requiredValidator)(properties.ruleActionType));
    if(properties.ruleActionType && (typeof properties.ruleActionType) !== 'object') {
        errors.collect(ros.propertyValidator('ruleActionType', ros.validateAllowedValues)({
          data: properties.ruleActionType,
          allowedValues: ["ForwardGroup","Redirect","FixResponseRewrite","AddHeaderRemoveHeaderConfig"],
        }));
    }
    errors.collect(ros.propertyValidator('ruleActionType', ros.validateString)(properties.ruleActionType));
    errors.collect(ros.propertyValidator('order', ros.requiredValidator)(properties.order));
    errors.collect(ros.propertyValidator('order', ros.validateNumber)(properties.order));
    errors.collect(ros.propertyValidator('ruleActionValue', ros.validateString)(properties.ruleActionValue));
    return errors.wrap('supplied properties not correct for "RuleActionsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::GA::ForwardingRules.RuleActions` resource
 *
 * @param properties - the TypeScript properties of a `RuleActionsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::GA::ForwardingRules.RuleActions` resource.
 */
// @ts-ignore TS6133
function rosForwardingRulesRuleActionsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosForwardingRules_RuleActionsPropertyValidator(properties).assertSuccess();
    return {
      'RuleActionType': ros.stringToRosTemplate(properties.ruleActionType),
      'Order': ros.numberToRosTemplate(properties.order),
      'RuleActionValue': ros.stringToRosTemplate(properties.ruleActionValue),
    };
}

export namespace RosForwardingRules {
    /**
     * @stability external
     */
    export interface RuleConditionsProperty {
        /**
         * @Property ruleConditionType: The type of the forwarding conditions. Valid values:
     * * Host: domain name
     * * Path: path
     * * RequestHeader: HTTP header
     * * Query: query string
     * * Method: HTTP method
     * * Cookie: cookie
     * * SourceIP: source IP address
         */
        readonly ruleConditionType?: string | ros.IResolvable;
        /**
         * @Property ruleConditionValue: The endpoint port that is mapped to the listener port.
         */
        readonly ruleConditionValue?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `RuleConditionsProperty`
 *
 * @param properties - the TypeScript properties of a `RuleConditionsProperty`
 *
 * @returns the result of the validation.
 */
function RosForwardingRules_RuleConditionsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.ruleConditionType && (typeof properties.ruleConditionType) !== 'object') {
        errors.collect(ros.propertyValidator('ruleConditionType', ros.validateAllowedValues)({
          data: properties.ruleConditionType,
          allowedValues: ["Host","Path","RequestHeader","Query","Method","Cookie","SourceIP"],
        }));
    }
    errors.collect(ros.propertyValidator('ruleConditionType', ros.validateString)(properties.ruleConditionType));
    errors.collect(ros.propertyValidator('ruleConditionValue', ros.validateString)(properties.ruleConditionValue));
    return errors.wrap('supplied properties not correct for "RuleConditionsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::GA::ForwardingRules.RuleConditions` resource
 *
 * @param properties - the TypeScript properties of a `RuleConditionsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::GA::ForwardingRules.RuleConditions` resource.
 */
// @ts-ignore TS6133
function rosForwardingRulesRuleConditionsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosForwardingRules_RuleConditionsPropertyValidator(properties).assertSuccess();
    return {
      'RuleConditionType': ros.stringToRosTemplate(properties.ruleConditionType),
      'RuleConditionValue': ros.stringToRosTemplate(properties.ruleConditionValue),
    };
}

/**
 * Properties for defining a `RosIpSets`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-ipsets
 */
export interface RosIpSetsProps {

    /**
     * @Property accelerateRegion:
     */
    readonly accelerateRegion: Array<RosIpSets.AccelerateRegionProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property acceleratorId: The ID of the GA instance.
     */
    readonly acceleratorId: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosIpSetsProps`
 *
 * @param properties - the TypeScript properties of a `RosIpSetsProps`
 *
 * @returns the result of the validation.
 */
function RosIpSetsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('accelerateRegion', ros.requiredValidator)(properties.accelerateRegion));
    if(properties.accelerateRegion && (Array.isArray(properties.accelerateRegion) || (typeof properties.accelerateRegion) === 'string')) {
        errors.collect(ros.propertyValidator('accelerateRegion', ros.validateLength)({
            data: properties.accelerateRegion.length,
            min: undefined,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('accelerateRegion', ros.listValidator(RosIpSets_AccelerateRegionPropertyValidator))(properties.accelerateRegion));
    errors.collect(ros.propertyValidator('acceleratorId', ros.requiredValidator)(properties.acceleratorId));
    errors.collect(ros.propertyValidator('acceleratorId', ros.validateString)(properties.acceleratorId));
    return errors.wrap('supplied properties not correct for "RosIpSetsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::GA::IpSets` resource
 *
 * @param properties - the TypeScript properties of a `RosIpSetsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::GA::IpSets` resource.
 */
// @ts-ignore TS6133
function rosIpSetsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosIpSetsPropsValidator(properties).assertSuccess();
    }
    return {
      'AccelerateRegion': ros.listMapper(rosIpSetsAccelerateRegionPropertyToRosTemplate)(properties.accelerateRegion),
      'AcceleratorId': ros.stringToRosTemplate(properties.acceleratorId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::GA::IpSets`, which is used to create acceleration regions.
 * @Note This class does not contain additional functions, so it is recommended to use the `IpSets` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-ipsets
 */
export class RosIpSets extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::GA::IpSets";

    /**
     * @Attribute AccelerateRegionIds: The ID list of the accelerate region.
     */
    public readonly attrAccelerateRegionIds: ros.IResolvable;

    /**
     * @Attribute IpSetIds: The ID list of the ip set.
     */
    public readonly attrIpSetIds: ros.IResolvable;

    /**
     * @Attribute IpVersions: The IP version list of the accelerate region.
     */
    public readonly attrIpVersions: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property accelerateRegion:
     */
    public accelerateRegion: Array<RosIpSets.AccelerateRegionProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property acceleratorId: The ID of the GA instance.
     */
    public acceleratorId: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosIpSetsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosIpSets.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAccelerateRegionIds = this.getAtt('AccelerateRegionIds');
        this.attrIpSetIds = this.getAtt('IpSetIds');
        this.attrIpVersions = this.getAtt('IpVersions');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.accelerateRegion = props.accelerateRegion;
        this.acceleratorId = props.acceleratorId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            accelerateRegion: this.accelerateRegion,
            acceleratorId: this.acceleratorId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosIpSetsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosIpSets {
    /**
     * @stability external
     */
    export interface AccelerateRegionProperty {
        /**
         * @Property ipVersion: IP version. Valid values: IPv4, IPv6
         */
        readonly ipVersion?: string | ros.IResolvable;
        /**
         * @Property ispType: Accelerated area public network line type.
         */
        readonly ispType?: string | ros.IResolvable;
        /**
         * @Property bandwidth: The bandwidth allocated to the acceleration region. Unit: Mbit\/s.
     * Note
     * The minimum bandwidth allocated to each accelerated region is 2 Mbit\/s.
     * The total bandwidth for all regions must not exceed the amount included in your basic
     * bandwidth plan.
         */
        readonly bandwidth: number | ros.IResolvable;
        /**
         * @Property accelerateRegionId: The ID of the region where traffic is to be accelerated.
         */
        readonly accelerateRegionId: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `AccelerateRegionProperty`
 *
 * @param properties - the TypeScript properties of a `AccelerateRegionProperty`
 *
 * @returns the result of the validation.
 */
function RosIpSets_AccelerateRegionPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.ipVersion && (typeof properties.ipVersion) !== 'object') {
        errors.collect(ros.propertyValidator('ipVersion', ros.validateAllowedValues)({
          data: properties.ipVersion,
          allowedValues: ["IPv4","IPv6"],
        }));
    }
    errors.collect(ros.propertyValidator('ipVersion', ros.validateString)(properties.ipVersion));
    errors.collect(ros.propertyValidator('ispType', ros.validateString)(properties.ispType));
    errors.collect(ros.propertyValidator('bandwidth', ros.requiredValidator)(properties.bandwidth));
    if(properties.bandwidth && (typeof properties.bandwidth) !== 'object') {
        errors.collect(ros.propertyValidator('bandwidth', ros.validateRange)({
            data: properties.bandwidth,
            min: 2,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('bandwidth', ros.validateNumber)(properties.bandwidth));
    errors.collect(ros.propertyValidator('accelerateRegionId', ros.requiredValidator)(properties.accelerateRegionId));
    errors.collect(ros.propertyValidator('accelerateRegionId', ros.validateString)(properties.accelerateRegionId));
    return errors.wrap('supplied properties not correct for "AccelerateRegionProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::GA::IpSets.AccelerateRegion` resource
 *
 * @param properties - the TypeScript properties of a `AccelerateRegionProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::GA::IpSets.AccelerateRegion` resource.
 */
// @ts-ignore TS6133
function rosIpSetsAccelerateRegionPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosIpSets_AccelerateRegionPropertyValidator(properties).assertSuccess();
    return {
      'IpVersion': ros.stringToRosTemplate(properties.ipVersion),
      'IspType': ros.stringToRosTemplate(properties.ispType),
      'Bandwidth': ros.numberToRosTemplate(properties.bandwidth),
      'AccelerateRegionId': ros.stringToRosTemplate(properties.accelerateRegionId),
    };
}

/**
 * Properties for defining a `RosListener`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-listener
 */
export interface RosListenerProps {

    /**
     * @Property acceleratorId: The ID of the Global Accelerator instance to which the listener will be added.
     */
    readonly acceleratorId: string | ros.IResolvable;

    /**
     * @Property portRanges:
     */
    readonly portRanges: Array<RosListener.PortRangesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property protocol: The network transmission protocol of the listener. Valid values:
     * tcp: TCP protocol
     * udp: UDP protocol
     * http: HTTP protocolhttps: HTTPS protocol.
     */
    readonly protocol: string | ros.IResolvable;

    /**
     * @Property certificates:
     */
    readonly certificates?: Array<RosListener.CertificatesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property clientAffinity: Specifies whether to enable client affinity for the listener.
     * If you do not specify the default value in the parameter, client affinity is disabled.
     * When client affinity is disabled, the connections from a specific source (client)
     * IP address are not always routed to the same endpoint.
     * If you set the value to SOURCE_IP, client affinity is enabled. When client affinity is enabled, the connections from
     * a specific source (client) IP address are always routed to the same endpoint.
     */
    readonly clientAffinity?: string | ros.IResolvable;

    /**
     * @Property description: The description of the listener.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property name: The name of the listener.
     * The name must be 2 to 128 characters in length and can contain letters, digits, underscores
     * (_), and hyphens (-). It must start with a letter or Chinese character.
     */
    readonly name?: string | ros.IResolvable;

    /**
     * @Property proxyProtocol: Specifies whether to preserve client IP addresses. Valid values:
     * true: preserves client IP addresses. After this feature is enabled, backend servers can retrieve client IP addresses.
     * false (default): does not preserve client IP addresses.
     */
    readonly proxyProtocol?: boolean | ros.IResolvable;

    /**
     * @Property securityPolicyId: The ID of the security policy. Valid values:
     * tls_cipher_policy_1_0
     * tls_cipher_policy_1_1
     * tls_cipher_policy_1_2
     * tls_cipher_policy_1_2_strict
     * tls_cipher_policy_1_2_strict_with_1_3
     * Note Only HTTPS listeners support this parameter.
     */
    readonly securityPolicyId?: string | ros.IResolvable;

    /**
     * @Property xForwardedForConfig: The configuration of the XForward field.
     */
    readonly xForwardedForConfig?: RosListener.XForwardedForConfigProperty | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosListenerProps`
 *
 * @param properties - the TypeScript properties of a `RosListenerProps`
 *
 * @returns the result of the validation.
 */
function RosListenerPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('securityPolicyId', ros.validateString)(properties.securityPolicyId));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('proxyProtocol', ros.validateBoolean)(properties.proxyProtocol));
    errors.collect(ros.propertyValidator('portRanges', ros.requiredValidator)(properties.portRanges));
    if(properties.portRanges && (Array.isArray(properties.portRanges) || (typeof properties.portRanges) === 'string')) {
        errors.collect(ros.propertyValidator('portRanges', ros.validateLength)({
            data: properties.portRanges.length,
            min: 1,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('portRanges', ros.listValidator(RosListener_PortRangesPropertyValidator))(properties.portRanges));
    if(properties.certificates && (Array.isArray(properties.certificates) || (typeof properties.certificates) === 'string')) {
        errors.collect(ros.propertyValidator('certificates', ros.validateLength)({
            data: properties.certificates.length,
            min: undefined,
            max: 1,
          }));
    }
    errors.collect(ros.propertyValidator('certificates', ros.listValidator(RosListener_CertificatesPropertyValidator))(properties.certificates));
    errors.collect(ros.propertyValidator('xForwardedForConfig', RosListener_XForwardedForConfigPropertyValidator)(properties.xForwardedForConfig));
    errors.collect(ros.propertyValidator('protocol', ros.requiredValidator)(properties.protocol));
    if(properties.protocol && (typeof properties.protocol) !== 'object') {
        errors.collect(ros.propertyValidator('protocol', ros.validateAllowedValues)({
          data: properties.protocol,
          allowedValues: ["tcp","udp","http","https"],
        }));
    }
    errors.collect(ros.propertyValidator('protocol', ros.validateString)(properties.protocol));
    errors.collect(ros.propertyValidator('acceleratorId', ros.requiredValidator)(properties.acceleratorId));
    errors.collect(ros.propertyValidator('acceleratorId', ros.validateString)(properties.acceleratorId));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    if(properties.clientAffinity && (typeof properties.clientAffinity) !== 'object') {
        errors.collect(ros.propertyValidator('clientAffinity', ros.validateAllowedValues)({
          data: properties.clientAffinity,
          allowedValues: ["NONE","SOURCE_IP"],
        }));
    }
    errors.collect(ros.propertyValidator('clientAffinity', ros.validateString)(properties.clientAffinity));
    return errors.wrap('supplied properties not correct for "RosListenerProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::GA::Listener` resource
 *
 * @param properties - the TypeScript properties of a `RosListenerProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::GA::Listener` resource.
 */
// @ts-ignore TS6133
function rosListenerPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosListenerPropsValidator(properties).assertSuccess();
    }
    return {
      'AcceleratorId': ros.stringToRosTemplate(properties.acceleratorId),
      'PortRanges': ros.listMapper(rosListenerPortRangesPropertyToRosTemplate)(properties.portRanges),
      'Protocol': ros.stringToRosTemplate(properties.protocol),
      'Certificates': ros.listMapper(rosListenerCertificatesPropertyToRosTemplate)(properties.certificates),
      'ClientAffinity': ros.stringToRosTemplate(properties.clientAffinity),
      'Description': ros.stringToRosTemplate(properties.description),
      'Name': ros.stringToRosTemplate(properties.name),
      'ProxyProtocol': ros.booleanToRosTemplate(properties.proxyProtocol),
      'SecurityPolicyId': ros.stringToRosTemplate(properties.securityPolicyId),
      'XForwardedForConfig': rosListenerXForwardedForConfigPropertyToRosTemplate(properties.xForwardedForConfig),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::GA::Listener`, which is used to create a listener for a Global Accelerator (GA) instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `Listener` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-listener
 */
export class RosListener extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::GA::Listener";

    /**
     * @Attribute ListenerId: The ID of the listener.
     */
    public readonly attrListenerId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property acceleratorId: The ID of the Global Accelerator instance to which the listener will be added.
     */
    public acceleratorId: string | ros.IResolvable;

    /**
     * @Property portRanges:
     */
    public portRanges: Array<RosListener.PortRangesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property protocol: The network transmission protocol of the listener. Valid values:
     * tcp: TCP protocol
     * udp: UDP protocol
     * http: HTTP protocolhttps: HTTPS protocol.
     */
    public protocol: string | ros.IResolvable;

    /**
     * @Property certificates:
     */
    public certificates: Array<RosListener.CertificatesProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property clientAffinity: Specifies whether to enable client affinity for the listener.
     * If you do not specify the default value in the parameter, client affinity is disabled.
     * When client affinity is disabled, the connections from a specific source (client)
     * IP address are not always routed to the same endpoint.
     * If you set the value to SOURCE_IP, client affinity is enabled. When client affinity is enabled, the connections from
     * a specific source (client) IP address are always routed to the same endpoint.
     */
    public clientAffinity: string | ros.IResolvable | undefined;

    /**
     * @Property description: The description of the listener.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property name: The name of the listener.
     * The name must be 2 to 128 characters in length and can contain letters, digits, underscores
     * (_), and hyphens (-). It must start with a letter or Chinese character.
     */
    public name: string | ros.IResolvable | undefined;

    /**
     * @Property proxyProtocol: Specifies whether to preserve client IP addresses. Valid values:
     * true: preserves client IP addresses. After this feature is enabled, backend servers can retrieve client IP addresses.
     * false (default): does not preserve client IP addresses.
     */
    public proxyProtocol: boolean | ros.IResolvable | undefined;

    /**
     * @Property securityPolicyId: The ID of the security policy. Valid values:
     * tls_cipher_policy_1_0
     * tls_cipher_policy_1_1
     * tls_cipher_policy_1_2
     * tls_cipher_policy_1_2_strict
     * tls_cipher_policy_1_2_strict_with_1_3
     * Note Only HTTPS listeners support this parameter.
     */
    public securityPolicyId: string | ros.IResolvable | undefined;

    /**
     * @Property xForwardedForConfig: The configuration of the XForward field.
     */
    public xForwardedForConfig: RosListener.XForwardedForConfigProperty | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosListenerProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosListener.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrListenerId = this.getAtt('ListenerId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.acceleratorId = props.acceleratorId;
        this.portRanges = props.portRanges;
        this.protocol = props.protocol;
        this.certificates = props.certificates;
        this.clientAffinity = props.clientAffinity;
        this.description = props.description;
        this.name = props.name;
        this.proxyProtocol = props.proxyProtocol;
        this.securityPolicyId = props.securityPolicyId;
        this.xForwardedForConfig = props.xForwardedForConfig;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            acceleratorId: this.acceleratorId,
            portRanges: this.portRanges,
            protocol: this.protocol,
            certificates: this.certificates,
            clientAffinity: this.clientAffinity,
            description: this.description,
            name: this.name,
            proxyProtocol: this.proxyProtocol,
            securityPolicyId: this.securityPolicyId,
            xForwardedForConfig: this.xForwardedForConfig,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosListenerPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosListener {
    /**
     * @stability external
     */
    export interface CertificatesProperty {
        /**
         * @Property identity: The ID of the SSL certificate.
         */
        readonly identity: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `CertificatesProperty`
 *
 * @param properties - the TypeScript properties of a `CertificatesProperty`
 *
 * @returns the result of the validation.
 */
function RosListener_CertificatesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('identity', ros.requiredValidator)(properties.identity));
    errors.collect(ros.propertyValidator('identity', ros.validateString)(properties.identity));
    return errors.wrap('supplied properties not correct for "CertificatesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::GA::Listener.Certificates` resource
 *
 * @param properties - the TypeScript properties of a `CertificatesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::GA::Listener.Certificates` resource.
 */
// @ts-ignore TS6133
function rosListenerCertificatesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosListener_CertificatesPropertyValidator(properties).assertSuccess();
    return {
      'Id': ros.stringToRosTemplate(properties.identity),
    };
}

export namespace RosListener {
    /**
     * @stability external
     */
    export interface PortRangesProperty {
        /**
         * @Property fromPort: The first listening port of the port range specified for receiving and forwarding
     * requests to endpoints.
         */
        readonly fromPort: number | ros.IResolvable;
        /**
         * @Property toPort: The last listening port of the port range specified for receiving and forwarding requests
     * to endpoints.
         */
        readonly toPort: number | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `PortRangesProperty`
 *
 * @param properties - the TypeScript properties of a `PortRangesProperty`
 *
 * @returns the result of the validation.
 */
function RosListener_PortRangesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('fromPort', ros.requiredValidator)(properties.fromPort));
    errors.collect(ros.propertyValidator('fromPort', ros.validateNumber)(properties.fromPort));
    errors.collect(ros.propertyValidator('toPort', ros.requiredValidator)(properties.toPort));
    errors.collect(ros.propertyValidator('toPort', ros.validateNumber)(properties.toPort));
    return errors.wrap('supplied properties not correct for "PortRangesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::GA::Listener.PortRanges` resource
 *
 * @param properties - the TypeScript properties of a `PortRangesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::GA::Listener.PortRanges` resource.
 */
// @ts-ignore TS6133
function rosListenerPortRangesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosListener_PortRangesPropertyValidator(properties).assertSuccess();
    return {
      'FromPort': ros.numberToRosTemplate(properties.fromPort),
      'ToPort': ros.numberToRosTemplate(properties.toPort),
    };
}

export namespace RosListener {
    /**
     * @stability external
     */
    export interface XForwardedForConfigProperty {
        /**
         * @Property xForwardedForGaApEnabled: Specifies whether to use the GA-AP header to retrieve the information about the acceleration area. Valid values:
     * true: yes
     * false (default): no
     * Note Only HTTP and HTTPS listeners support this parameter.
         */
        readonly xForwardedForGaApEnabled?: boolean | ros.IResolvable;
        /**
         * @Property xForwardedForProtoEnabled: Specifies whether to use the GA-X-Forward-Proto header to retrieve the listener protocol of the GA instance. Valid values:
     * true: yes
     * false (default): no
     * Note Only HTTP and HTTPS listeners support this parameter.
         */
        readonly xForwardedForProtoEnabled?: boolean | ros.IResolvable;
        /**
         * @Property xRealIpEnabled: Specifies whether to use the X-Real-IP header to retrieve client IP addresses. Valid values:
     * true: yes
     * false (default): no
     * Note Only HTTP and HTTPS listeners support this parameter.
         */
        readonly xRealIpEnabled?: boolean | ros.IResolvable;
        /**
         * @Property xForwardedForPortEnabled: Specifies whether to use the GA-X-Forward-Port header to retrieve the listener ports of the GA instance. Valid values:
     * true: yes
     * false (default): no
     * Note Only HTTP and HTTPS listeners support this parameter.
         */
        readonly xForwardedForPortEnabled?: boolean | ros.IResolvable;
        /**
         * @Property xForwardedForGaIdEnabled: Specifies whether to use the GA-ID header to retrieve the ID of the GA instance. Valid values:
     * true: yes
     * false (default): no
     * Note Only HTTP and HTTPS listeners support this parameter.
         */
        readonly xForwardedForGaIdEnabled?: boolean | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `XForwardedForConfigProperty`
 *
 * @param properties - the TypeScript properties of a `XForwardedForConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosListener_XForwardedForConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('xForwardedForGaApEnabled', ros.validateBoolean)(properties.xForwardedForGaApEnabled));
    errors.collect(ros.propertyValidator('xForwardedForProtoEnabled', ros.validateBoolean)(properties.xForwardedForProtoEnabled));
    errors.collect(ros.propertyValidator('xRealIpEnabled', ros.validateBoolean)(properties.xRealIpEnabled));
    errors.collect(ros.propertyValidator('xForwardedForPortEnabled', ros.validateBoolean)(properties.xForwardedForPortEnabled));
    errors.collect(ros.propertyValidator('xForwardedForGaIdEnabled', ros.validateBoolean)(properties.xForwardedForGaIdEnabled));
    return errors.wrap('supplied properties not correct for "XForwardedForConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::GA::Listener.XForwardedForConfig` resource
 *
 * @param properties - the TypeScript properties of a `XForwardedForConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::GA::Listener.XForwardedForConfig` resource.
 */
// @ts-ignore TS6133
function rosListenerXForwardedForConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosListener_XForwardedForConfigPropertyValidator(properties).assertSuccess();
    return {
      'XForwardedForGaApEnabled': ros.booleanToRosTemplate(properties.xForwardedForGaApEnabled),
      'XForwardedForProtoEnabled': ros.booleanToRosTemplate(properties.xForwardedForProtoEnabled),
      'XRealIpEnabled': ros.booleanToRosTemplate(properties.xRealIpEnabled),
      'XForwardedForPortEnabled': ros.booleanToRosTemplate(properties.xForwardedForPortEnabled),
      'XForwardedForGaIdEnabled': ros.booleanToRosTemplate(properties.xForwardedForGaIdEnabled),
    };
}

/**
 * Properties for defining a `RosLogStoreToEndpointGroupAttachment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-logstoretoendpointgroupattachment
 */
export interface RosLogStoreToEndpointGroupAttachmentProps {

    /**
     * @Property acceleratorId: Global Acceleration Instance ID.
     */
    readonly acceleratorId: string | ros.IResolvable;

    /**
     * @Property endpointGroupIds: Endpoint Group ID List.
     */
    readonly endpointGroupIds: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property listenerId: Listener ID.
     */
    readonly listenerId: string | ros.IResolvable;

    /**
     * @Property slsLogStoreName: SLS log library name.
     */
    readonly slsLogStoreName: string | ros.IResolvable;

    /**
     * @Property slsProjectName: SLS project name.
     */
    readonly slsProjectName: string | ros.IResolvable;

    /**
     * @Property slsRegionId: SLS Region ID.
     */
    readonly slsRegionId: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosLogStoreToEndpointGroupAttachmentProps`
 *
 * @param properties - the TypeScript properties of a `RosLogStoreToEndpointGroupAttachmentProps`
 *
 * @returns the result of the validation.
 */
function RosLogStoreToEndpointGroupAttachmentPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('slsProjectName', ros.requiredValidator)(properties.slsProjectName));
    errors.collect(ros.propertyValidator('slsProjectName', ros.validateString)(properties.slsProjectName));
    errors.collect(ros.propertyValidator('endpointGroupIds', ros.requiredValidator)(properties.endpointGroupIds));
    if(properties.endpointGroupIds && (Array.isArray(properties.endpointGroupIds) || (typeof properties.endpointGroupIds) === 'string')) {
        errors.collect(ros.propertyValidator('endpointGroupIds', ros.validateLength)({
            data: properties.endpointGroupIds.length,
            min: 1,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('endpointGroupIds', ros.listValidator(ros.validateString))(properties.endpointGroupIds));
    errors.collect(ros.propertyValidator('slsRegionId', ros.requiredValidator)(properties.slsRegionId));
    errors.collect(ros.propertyValidator('slsRegionId', ros.validateString)(properties.slsRegionId));
    errors.collect(ros.propertyValidator('acceleratorId', ros.requiredValidator)(properties.acceleratorId));
    errors.collect(ros.propertyValidator('acceleratorId', ros.validateString)(properties.acceleratorId));
    errors.collect(ros.propertyValidator('slsLogStoreName', ros.requiredValidator)(properties.slsLogStoreName));
    errors.collect(ros.propertyValidator('slsLogStoreName', ros.validateString)(properties.slsLogStoreName));
    errors.collect(ros.propertyValidator('listenerId', ros.requiredValidator)(properties.listenerId));
    errors.collect(ros.propertyValidator('listenerId', ros.validateString)(properties.listenerId));
    return errors.wrap('supplied properties not correct for "RosLogStoreToEndpointGroupAttachmentProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::GA::LogStoreToEndpointGroupAttachment` resource
 *
 * @param properties - the TypeScript properties of a `RosLogStoreToEndpointGroupAttachmentProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::GA::LogStoreToEndpointGroupAttachment` resource.
 */
// @ts-ignore TS6133
function rosLogStoreToEndpointGroupAttachmentPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosLogStoreToEndpointGroupAttachmentPropsValidator(properties).assertSuccess();
    }
    return {
      'AcceleratorId': ros.stringToRosTemplate(properties.acceleratorId),
      'EndpointGroupIds': ros.listMapper(ros.stringToRosTemplate)(properties.endpointGroupIds),
      'ListenerId': ros.stringToRosTemplate(properties.listenerId),
      'SlsLogStoreName': ros.stringToRosTemplate(properties.slsLogStoreName),
      'SlsProjectName': ros.stringToRosTemplate(properties.slsProjectName),
      'SlsRegionId': ros.stringToRosTemplate(properties.slsRegionId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::GA::LogStoreToEndpointGroupAttachment`.
 * @Note This class does not contain additional functions, so it is recommended to use the `LogStoreToEndpointGroupAttachment` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-logstoretoendpointgroupattachment
 */
export class RosLogStoreToEndpointGroupAttachment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::GA::LogStoreToEndpointGroupAttachment";

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property acceleratorId: Global Acceleration Instance ID.
     */
    public acceleratorId: string | ros.IResolvable;

    /**
     * @Property endpointGroupIds: Endpoint Group ID List.
     */
    public endpointGroupIds: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property listenerId: Listener ID.
     */
    public listenerId: string | ros.IResolvable;

    /**
     * @Property slsLogStoreName: SLS log library name.
     */
    public slsLogStoreName: string | ros.IResolvable;

    /**
     * @Property slsProjectName: SLS project name.
     */
    public slsProjectName: string | ros.IResolvable;

    /**
     * @Property slsRegionId: SLS Region ID.
     */
    public slsRegionId: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosLogStoreToEndpointGroupAttachmentProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosLogStoreToEndpointGroupAttachment.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.acceleratorId = props.acceleratorId;
        this.endpointGroupIds = props.endpointGroupIds;
        this.listenerId = props.listenerId;
        this.slsLogStoreName = props.slsLogStoreName;
        this.slsProjectName = props.slsProjectName;
        this.slsRegionId = props.slsRegionId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            acceleratorId: this.acceleratorId,
            endpointGroupIds: this.endpointGroupIds,
            listenerId: this.listenerId,
            slsLogStoreName: this.slsLogStoreName,
            slsProjectName: this.slsProjectName,
            slsRegionId: this.slsRegionId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosLogStoreToEndpointGroupAttachmentPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
