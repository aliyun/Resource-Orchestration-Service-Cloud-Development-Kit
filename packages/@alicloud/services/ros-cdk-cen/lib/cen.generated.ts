// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosCenBandwidthLimit`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-cenbandwidthlimit
 */
export interface RosCenBandwidthLimitProps {

    /**
     * @Property bandwidthLimit: The bandwidth configured for the interconnected regions communication. Minimal value: 1
     */
    readonly bandwidthLimit: number | ros.IResolvable;

    /**
     * @Property cenId: The ID of the CEN instance.
     */
    readonly cenId: string | ros.IResolvable;

    /**
     * @Property localRegionId: The ID of the local region.
     */
    readonly localRegionId: string | ros.IResolvable;

    /**
     * @Property oppositeRegionId: The ID of the other interconnected region.
     */
    readonly oppositeRegionId: string | ros.IResolvable;

    /**
     * @Property bandwidthType: Bandwidth allocation mode. Value: BandwidthPackage: Allocates bandwidth from the bandwidth package.
     */
    readonly bandwidthType?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosCenBandwidthLimitProps`
 *
 * @param properties - the TypeScript properties of a `RosCenBandwidthLimitProps`
 *
 * @returns the result of the validation.
 */
function RosCenBandwidthLimitPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('bandwidthType', ros.validateString)(properties.bandwidthType));
    errors.collect(ros.propertyValidator('oppositeRegionId', ros.requiredValidator)(properties.oppositeRegionId));
    errors.collect(ros.propertyValidator('oppositeRegionId', ros.validateString)(properties.oppositeRegionId));
    errors.collect(ros.propertyValidator('cenId', ros.requiredValidator)(properties.cenId));
    errors.collect(ros.propertyValidator('cenId', ros.validateString)(properties.cenId));
    errors.collect(ros.propertyValidator('bandwidthLimit', ros.requiredValidator)(properties.bandwidthLimit));
    if(properties.bandwidthLimit && (typeof properties.bandwidthLimit) !== 'object') {
        errors.collect(ros.propertyValidator('bandwidthLimit', ros.validateRange)({
            data: properties.bandwidthLimit,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('bandwidthLimit', ros.validateNumber)(properties.bandwidthLimit));
    errors.collect(ros.propertyValidator('localRegionId', ros.requiredValidator)(properties.localRegionId));
    errors.collect(ros.propertyValidator('localRegionId', ros.validateString)(properties.localRegionId));
    return errors.wrap('supplied properties not correct for "RosCenBandwidthLimitProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CEN::CenBandwidthLimit` resource
 *
 * @param properties - the TypeScript properties of a `RosCenBandwidthLimitProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CEN::CenBandwidthLimit` resource.
 */
// @ts-ignore TS6133
function rosCenBandwidthLimitPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosCenBandwidthLimitPropsValidator(properties).assertSuccess();
    }
    return {
      'BandwidthLimit': ros.numberToRosTemplate(properties.bandwidthLimit),
      'CenId': ros.stringToRosTemplate(properties.cenId),
      'LocalRegionId': ros.stringToRosTemplate(properties.localRegionId),
      'OppositeRegionId': ros.stringToRosTemplate(properties.oppositeRegionId),
      'BandwidthType': ros.stringToRosTemplate(properties.bandwidthType),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CEN::CenBandwidthLimit`, which is used to configure the bandwidth for cross-region interconnection in a bandwidth plan.
 * @Note This class does not contain additional functions, so it is recommended to use the `CenBandwidthLimit` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-cenbandwidthlimit
 */
export class RosCenBandwidthLimit extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CEN::CenBandwidthLimit";

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property bandwidthLimit: The bandwidth configured for the interconnected regions communication. Minimal value: 1
     */
    public bandwidthLimit: number | ros.IResolvable;

    /**
     * @Property cenId: The ID of the CEN instance.
     */
    public cenId: string | ros.IResolvable;

    /**
     * @Property localRegionId: The ID of the local region.
     */
    public localRegionId: string | ros.IResolvable;

    /**
     * @Property oppositeRegionId: The ID of the other interconnected region.
     */
    public oppositeRegionId: string | ros.IResolvable;

    /**
     * @Property bandwidthType: Bandwidth allocation mode. Value: BandwidthPackage: Allocates bandwidth from the bandwidth package.
     */
    public bandwidthType: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCenBandwidthLimitProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosCenBandwidthLimit.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.bandwidthLimit = props.bandwidthLimit;
        this.cenId = props.cenId;
        this.localRegionId = props.localRegionId;
        this.oppositeRegionId = props.oppositeRegionId;
        this.bandwidthType = props.bandwidthType;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            bandwidthLimit: this.bandwidthLimit,
            cenId: this.cenId,
            localRegionId: this.localRegionId,
            oppositeRegionId: this.oppositeRegionId,
            bandwidthType: this.bandwidthType,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosCenBandwidthLimitPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosCenBandwidthPackage`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-cenbandwidthpackage
 */
export interface RosCenBandwidthPackageProps {

    /**
     * @Property bandwidth: The bandwidth in Mbps of the bandwidth package. The bandwidth cannot be less than 2 Mbps.
     */
    readonly bandwidth: number | ros.IResolvable;

    /**
     * @Property geographicRegionAId: The other area A to connect.
     * Valid value: China | North-America | Asia-Pacific | Europe | Australia
     */
    readonly geographicRegionAId: string | ros.IResolvable;

    /**
     * @Property geographicRegionBId: The other area B to connect.
     * Valid value: China | North-America | Asia-Pacific | Europe | Australia
     */
    readonly geographicRegionBId: string | ros.IResolvable;

    /**
     * @Property autoPay: Whether to automatically pay the bill. Valid value:
     * true (default)
     * false
     */
    readonly autoPay?: boolean | ros.IResolvable;

    /**
     * @Property autoRenew: Indicates whether automatic renewal is enabled. Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
     */
    readonly autoRenew?: boolean | ros.IResolvable;

    /**
     * @Property autoRenewDuration: Duration of each automatic renewals. It takes effect when AutoRenew is true.
     */
    readonly autoRenewDuration?: number | ros.IResolvable;

    /**
     * @Property bandwidthPackageChargeType: The billing method. Valid value: PREPAY, POSTPAY (Default)
     */
    readonly bandwidthPackageChargeType?: string | ros.IResolvable;

    /**
     * @Property description: The description of the bandwidth package.
     * The description can contain [2,256] characters, numbers, underscores, and hyphens, and the name must start with English letters, but cannot start with http:\/\/ or https:\/\/.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property name: The name of the bandwidth package.
     * The name can contain 2-128 characters including a-z, A-Z, 0-9, periods, underlines, and hyphens. It must start with English letters, but cannot start with http:\/\/ or https:\/\/.
     */
    readonly name?: string | ros.IResolvable;

    /**
     * @Property period: The purchase period. The default value is 1.
     */
    readonly period?: number | ros.IResolvable;

    /**
     * @Property pricingCycle: The pricing cycle.
     */
    readonly pricingCycle?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosCenBandwidthPackage.TagsProperty[];
}

/**
 * Determine whether the given properties match those of a `RosCenBandwidthPackageProps`
 *
 * @param properties - the TypeScript properties of a `RosCenBandwidthPackageProps`
 *
 * @returns the result of the validation.
 */
function RosCenBandwidthPackagePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('geographicRegionBId', ros.requiredValidator)(properties.geographicRegionBId));
    if(properties.geographicRegionBId && (typeof properties.geographicRegionBId) !== 'object') {
        errors.collect(ros.propertyValidator('geographicRegionBId', ros.validateAllowedValues)({
          data: properties.geographicRegionBId,
          allowedValues: ["China","North-America","Asia-Pacific","Europe","Australia"],
        }));
    }
    errors.collect(ros.propertyValidator('geographicRegionBId', ros.validateString)(properties.geographicRegionBId));
    errors.collect(ros.propertyValidator('geographicRegionAId', ros.requiredValidator)(properties.geographicRegionAId));
    if(properties.geographicRegionAId && (typeof properties.geographicRegionAId) !== 'object') {
        errors.collect(ros.propertyValidator('geographicRegionAId', ros.validateAllowedValues)({
          data: properties.geographicRegionAId,
          allowedValues: ["China","North-America","Asia-Pacific","Europe","Australia"],
        }));
    }
    errors.collect(ros.propertyValidator('geographicRegionAId', ros.validateString)(properties.geographicRegionAId));
    if(properties.pricingCycle && (typeof properties.pricingCycle) !== 'object') {
        errors.collect(ros.propertyValidator('pricingCycle', ros.validateAllowedValues)({
          data: properties.pricingCycle,
          allowedValues: ["Month","Year"],
        }));
    }
    errors.collect(ros.propertyValidator('pricingCycle', ros.validateString)(properties.pricingCycle));
    errors.collect(ros.propertyValidator('autoRenew', ros.validateBoolean)(properties.autoRenew));
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    errors.collect(ros.propertyValidator('autoPay', ros.validateBoolean)(properties.autoPay));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    if(properties.autoRenewDuration && (typeof properties.autoRenewDuration) !== 'object') {
        errors.collect(ros.propertyValidator('autoRenewDuration', ros.validateAllowedValues)({
          data: properties.autoRenewDuration,
          allowedValues: [1,2,3,6],
        }));
    }
    errors.collect(ros.propertyValidator('autoRenewDuration', ros.validateNumber)(properties.autoRenewDuration));
    if(properties.bandwidthPackageChargeType && (typeof properties.bandwidthPackageChargeType) !== 'object') {
        errors.collect(ros.propertyValidator('bandwidthPackageChargeType', ros.validateAllowedValues)({
          data: properties.bandwidthPackageChargeType,
          allowedValues: ["PayAsYouGo","PostPaid","PayOnDemand","Postpaid","PostPay","Postpay","POSTPAY","POST","Subscription","PrePaid","Prepaid","PrePay","Prepay","PREPAY","PRE"],
        }));
    }
    errors.collect(ros.propertyValidator('bandwidthPackageChargeType', ros.validateString)(properties.bandwidthPackageChargeType));
    errors.collect(ros.propertyValidator('bandwidth', ros.requiredValidator)(properties.bandwidth));
    if(properties.bandwidth && (typeof properties.bandwidth) !== 'object') {
        errors.collect(ros.propertyValidator('bandwidth', ros.validateRange)({
            data: properties.bandwidth,
            min: 2,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('bandwidth', ros.validateNumber)(properties.bandwidth));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosCenBandwidthPackage_TagsPropertyValidator))(properties.tags));
    return errors.wrap('supplied properties not correct for "RosCenBandwidthPackageProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CEN::CenBandwidthPackage` resource
 *
 * @param properties - the TypeScript properties of a `RosCenBandwidthPackageProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CEN::CenBandwidthPackage` resource.
 */
// @ts-ignore TS6133
function rosCenBandwidthPackagePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosCenBandwidthPackagePropsValidator(properties).assertSuccess();
    }
    return {
      'Bandwidth': ros.numberToRosTemplate(properties.bandwidth),
      'GeographicRegionAId': ros.stringToRosTemplate(properties.geographicRegionAId),
      'GeographicRegionBId': ros.stringToRosTemplate(properties.geographicRegionBId),
      'AutoPay': ros.booleanToRosTemplate(properties.autoPay),
      'AutoRenew': ros.booleanToRosTemplate(properties.autoRenew),
      'AutoRenewDuration': ros.numberToRosTemplate(properties.autoRenewDuration),
      'BandwidthPackageChargeType': ros.stringToRosTemplate(properties.bandwidthPackageChargeType),
      'Description': ros.stringToRosTemplate(properties.description),
      'Name': ros.stringToRosTemplate(properties.name),
      'Period': ros.numberToRosTemplate(properties.period),
      'PricingCycle': ros.stringToRosTemplate(properties.pricingCycle),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'Tags': ros.listMapper(rosCenBandwidthPackageTagsPropertyToRosTemplate)(properties.tags),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CEN::CenBandwidthPackage`, which is used to purchase a bandwidth plan before you use Cloud Enterprise Network (CEN) to connect network instances that reside in different regions.
 * @Note This class does not contain additional functions, so it is recommended to use the `CenBandwidthPackage` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-cenbandwidthpackage
 */
export class RosCenBandwidthPackage extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CEN::CenBandwidthPackage";

    /**
     * @Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    public readonly attrArn: ros.IResolvable;

    /**
     * @Attribute CenBandwidthPackageId: The ID of the bandwidth package.
     */
    public readonly attrCenBandwidthPackageId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property bandwidth: The bandwidth in Mbps of the bandwidth package. The bandwidth cannot be less than 2 Mbps.
     */
    public bandwidth: number | ros.IResolvable;

    /**
     * @Property geographicRegionAId: The other area A to connect.
     * Valid value: China | North-America | Asia-Pacific | Europe | Australia
     */
    public geographicRegionAId: string | ros.IResolvable;

    /**
     * @Property geographicRegionBId: The other area B to connect.
     * Valid value: China | North-America | Asia-Pacific | Europe | Australia
     */
    public geographicRegionBId: string | ros.IResolvable;

    /**
     * @Property autoPay: Whether to automatically pay the bill. Valid value:
     * true (default)
     * false
     */
    public autoPay: boolean | ros.IResolvable | undefined;

    /**
     * @Property autoRenew: Indicates whether automatic renewal is enabled. Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
     */
    public autoRenew: boolean | ros.IResolvable | undefined;

    /**
     * @Property autoRenewDuration: Duration of each automatic renewals. It takes effect when AutoRenew is true.
     */
    public autoRenewDuration: number | ros.IResolvable | undefined;

    /**
     * @Property bandwidthPackageChargeType: The billing method. Valid value: PREPAY, POSTPAY (Default)
     */
    public bandwidthPackageChargeType: string | ros.IResolvable | undefined;

    /**
     * @Property description: The description of the bandwidth package.
     * The description can contain [2,256] characters, numbers, underscores, and hyphens, and the name must start with English letters, but cannot start with http:\/\/ or https:\/\/.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property name: The name of the bandwidth package.
     * The name can contain 2-128 characters including a-z, A-Z, 0-9, periods, underlines, and hyphens. It must start with English letters, but cannot start with http:\/\/ or https:\/\/.
     */
    public name: string | ros.IResolvable | undefined;

    /**
     * @Property period: The purchase period. The default value is 1.
     */
    public period: number | ros.IResolvable | undefined;

    /**
     * @Property pricingCycle: The pricing cycle.
     */
    public pricingCycle: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosCenBandwidthPackage.TagsProperty[] | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCenBandwidthPackageProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosCenBandwidthPackage.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrArn = this.getAtt('Arn');
        this.attrCenBandwidthPackageId = this.getAtt('CenBandwidthPackageId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.bandwidth = props.bandwidth;
        this.geographicRegionAId = props.geographicRegionAId;
        this.geographicRegionBId = props.geographicRegionBId;
        this.autoPay = props.autoPay;
        this.autoRenew = props.autoRenew;
        this.autoRenewDuration = props.autoRenewDuration;
        this.bandwidthPackageChargeType = props.bandwidthPackageChargeType;
        this.description = props.description;
        this.name = props.name;
        this.period = props.period;
        this.pricingCycle = props.pricingCycle;
        this.resourceGroupId = props.resourceGroupId;
        this.tags = props.tags;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            bandwidth: this.bandwidth,
            geographicRegionAId: this.geographicRegionAId,
            geographicRegionBId: this.geographicRegionBId,
            autoPay: this.autoPay,
            autoRenew: this.autoRenew,
            autoRenewDuration: this.autoRenewDuration,
            bandwidthPackageChargeType: this.bandwidthPackageChargeType,
            description: this.description,
            name: this.name,
            period: this.period,
            pricingCycle: this.pricingCycle,
            resourceGroupId: this.resourceGroupId,
            tags: this.tags,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosCenBandwidthPackagePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosCenBandwidthPackage {
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
function RosCenBandwidthPackage_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CEN::CenBandwidthPackage.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CEN::CenBandwidthPackage.Tags` resource.
 */
// @ts-ignore TS6133
function rosCenBandwidthPackageTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosCenBandwidthPackage_TagsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `RosCenBandwidthPackageAssociation`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-cenbandwidthpackageassociation
 */
export interface RosCenBandwidthPackageAssociationProps {

    /**
     * @Property cenBandwidthPackageId: The ID of the bandwidth package.
     */
    readonly cenBandwidthPackageId: string | ros.IResolvable;

    /**
     * @Property cenId: The ID of the CEN instance.
     */
    readonly cenId: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosCenBandwidthPackageAssociationProps`
 *
 * @param properties - the TypeScript properties of a `RosCenBandwidthPackageAssociationProps`
 *
 * @returns the result of the validation.
 */
function RosCenBandwidthPackageAssociationPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('cenId', ros.requiredValidator)(properties.cenId));
    errors.collect(ros.propertyValidator('cenId', ros.validateString)(properties.cenId));
    errors.collect(ros.propertyValidator('cenBandwidthPackageId', ros.requiredValidator)(properties.cenBandwidthPackageId));
    errors.collect(ros.propertyValidator('cenBandwidthPackageId', ros.validateString)(properties.cenBandwidthPackageId));
    return errors.wrap('supplied properties not correct for "RosCenBandwidthPackageAssociationProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CEN::CenBandwidthPackageAssociation` resource
 *
 * @param properties - the TypeScript properties of a `RosCenBandwidthPackageAssociationProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CEN::CenBandwidthPackageAssociation` resource.
 */
// @ts-ignore TS6133
function rosCenBandwidthPackageAssociationPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosCenBandwidthPackageAssociationPropsValidator(properties).assertSuccess();
    }
    return {
      'CenBandwidthPackageId': ros.stringToRosTemplate(properties.cenBandwidthPackageId),
      'CenId': ros.stringToRosTemplate(properties.cenId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CEN::CenBandwidthPackageAssociation`, which is used to associate a bandwidth plan with a Cloud Enterprise Network (CEN) instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `CenBandwidthPackageAssociation` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-cenbandwidthpackageassociation
 */
export class RosCenBandwidthPackageAssociation extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CEN::CenBandwidthPackageAssociation";

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property cenBandwidthPackageId: The ID of the bandwidth package.
     */
    public cenBandwidthPackageId: string | ros.IResolvable;

    /**
     * @Property cenId: The ID of the CEN instance.
     */
    public cenId: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCenBandwidthPackageAssociationProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosCenBandwidthPackageAssociation.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.cenBandwidthPackageId = props.cenBandwidthPackageId;
        this.cenId = props.cenId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            cenBandwidthPackageId: this.cenBandwidthPackageId,
            cenId: this.cenId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosCenBandwidthPackageAssociationPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosCenInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-ceninstance
 */
export interface RosCenInstanceProps {

    /**
     * @Property description: The description of the instance.
     * The name can be 2-256 characters in length. It can start with an uppercase letter, lowercase letter, or Chinese character. It can contain numbers, underscores (_), and hyphens (-), but cannot start with http:\/\/ or https:\/\/.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property name: The name of the instance.
     * The name can be 2-128 characters in length. It can start with an uppercase letter, lowercase letter, or Chinese character. It can contain numbers, underscores (_), and hyphens (-), but cannot start with http:\/\/ or https:\/\/.
     */
    readonly name?: string | ros.IResolvable;

    /**
     * @Property protectionLevel: The level of CIDR block overlapping. 
     * Set the value to REDUCED. REDUCED indicates that the 
     * CIDR blocks can overlap with each other but must not be the same.
     */
    readonly protectionLevel?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosCenInstance.TagsProperty[];
}

/**
 * Determine whether the given properties match those of a `RosCenInstanceProps`
 *
 * @param properties - the TypeScript properties of a `RosCenInstanceProps`
 *
 * @returns the result of the validation.
 */
function RosCenInstancePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('protectionLevel', ros.validateString)(properties.protectionLevel));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosCenInstance_TagsPropertyValidator))(properties.tags));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosCenInstanceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CEN::CenInstance` resource
 *
 * @param properties - the TypeScript properties of a `RosCenInstanceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CEN::CenInstance` resource.
 */
// @ts-ignore TS6133
function rosCenInstancePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosCenInstancePropsValidator(properties).assertSuccess();
    }
    return {
      'Description': ros.stringToRosTemplate(properties.description),
      'Name': ros.stringToRosTemplate(properties.name),
      'ProtectionLevel': ros.stringToRosTemplate(properties.protectionLevel),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'Tags': ros.listMapper(rosCenInstanceTagsPropertyToRosTemplate)(properties.tags),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CEN::CenInstance`, which is used to create a Cloud Enterprise Network (CEN) instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `CenInstance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-ceninstance
 */
export class RosCenInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CEN::CenInstance";

    /**
     * @Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    public readonly attrArn: ros.IResolvable;

    /**
     * @Attribute CenId: The ID of the request.
     */
    public readonly attrCenId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property description: The description of the instance.
     * The name can be 2-256 characters in length. It can start with an uppercase letter, lowercase letter, or Chinese character. It can contain numbers, underscores (_), and hyphens (-), but cannot start with http:\/\/ or https:\/\/.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property name: The name of the instance.
     * The name can be 2-128 characters in length. It can start with an uppercase letter, lowercase letter, or Chinese character. It can contain numbers, underscores (_), and hyphens (-), but cannot start with http:\/\/ or https:\/\/.
     */
    public name: string | ros.IResolvable | undefined;

    /**
     * @Property protectionLevel: The level of CIDR block overlapping. 
     * Set the value to REDUCED. REDUCED indicates that the 
     * CIDR blocks can overlap with each other but must not be the same.
     */
    public protectionLevel: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosCenInstance.TagsProperty[] | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCenInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosCenInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrArn = this.getAtt('Arn');
        this.attrCenId = this.getAtt('CenId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.description = props.description;
        this.name = props.name;
        this.protectionLevel = props.protectionLevel;
        this.resourceGroupId = props.resourceGroupId;
        this.tags = props.tags;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            description: this.description,
            name: this.name,
            protectionLevel: this.protectionLevel,
            resourceGroupId: this.resourceGroupId,
            tags: this.tags,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosCenInstancePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosCenInstance {
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
function RosCenInstance_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CEN::CenInstance.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CEN::CenInstance.Tags` resource.
 */
// @ts-ignore TS6133
function rosCenInstanceTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosCenInstance_TagsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `RosCenInstanceAttachment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-ceninstanceattachment
 */
export interface RosCenInstanceAttachmentProps {

    /**
     * @Property cenId: The ID of the CEN instance.
     */
    readonly cenId: string | ros.IResolvable;

    /**
     * @Property childInstanceId: The ID of the network to attach.
     */
    readonly childInstanceId: string | ros.IResolvable;

    /**
     * @Property childInstanceRegionId: The ID of the region where the network is located. The ID of the region where the network is located.
     */
    readonly childInstanceRegionId: string | ros.IResolvable;

    /**
     * @Property childInstanceType: The type of the network to attach. Support VPC, VBR or CCN.
     */
    readonly childInstanceType: string | ros.IResolvable;

    /**
     * @Property childInstanceOwnerId: The account ID to which the network belongs.
     */
    readonly childInstanceOwnerId?: number | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosCenInstanceAttachmentProps`
 *
 * @param properties - the TypeScript properties of a `RosCenInstanceAttachmentProps`
 *
 * @returns the result of the validation.
 */
function RosCenInstanceAttachmentPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('childInstanceType', ros.requiredValidator)(properties.childInstanceType));
    if(properties.childInstanceType && (typeof properties.childInstanceType) !== 'object') {
        errors.collect(ros.propertyValidator('childInstanceType', ros.validateAllowedValues)({
          data: properties.childInstanceType,
          allowedValues: ["VPC","VBR","CCN"],
        }));
    }
    errors.collect(ros.propertyValidator('childInstanceType', ros.validateString)(properties.childInstanceType));
    errors.collect(ros.propertyValidator('cenId', ros.requiredValidator)(properties.cenId));
    errors.collect(ros.propertyValidator('cenId', ros.validateString)(properties.cenId));
    errors.collect(ros.propertyValidator('childInstanceOwnerId', ros.validateNumber)(properties.childInstanceOwnerId));
    errors.collect(ros.propertyValidator('childInstanceId', ros.requiredValidator)(properties.childInstanceId));
    errors.collect(ros.propertyValidator('childInstanceId', ros.validateString)(properties.childInstanceId));
    errors.collect(ros.propertyValidator('childInstanceRegionId', ros.requiredValidator)(properties.childInstanceRegionId));
    errors.collect(ros.propertyValidator('childInstanceRegionId', ros.validateString)(properties.childInstanceRegionId));
    return errors.wrap('supplied properties not correct for "RosCenInstanceAttachmentProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CEN::CenInstanceAttachment` resource
 *
 * @param properties - the TypeScript properties of a `RosCenInstanceAttachmentProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CEN::CenInstanceAttachment` resource.
 */
// @ts-ignore TS6133
function rosCenInstanceAttachmentPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosCenInstanceAttachmentPropsValidator(properties).assertSuccess();
    }
    return {
      'CenId': ros.stringToRosTemplate(properties.cenId),
      'ChildInstanceId': ros.stringToRosTemplate(properties.childInstanceId),
      'ChildInstanceRegionId': ros.stringToRosTemplate(properties.childInstanceRegionId),
      'ChildInstanceType': ros.stringToRosTemplate(properties.childInstanceType),
      'ChildInstanceOwnerId': ros.numberToRosTemplate(properties.childInstanceOwnerId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CEN::CenInstanceAttachment`, which is used to attach a network instance to a Cloud Enterprise Network (CEN) instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `CenInstanceAttachment` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-ceninstanceattachment
 */
export class RosCenInstanceAttachment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CEN::CenInstanceAttachment";

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property cenId: The ID of the CEN instance.
     */
    public cenId: string | ros.IResolvable;

    /**
     * @Property childInstanceId: The ID of the network to attach.
     */
    public childInstanceId: string | ros.IResolvable;

    /**
     * @Property childInstanceRegionId: The ID of the region where the network is located. The ID of the region where the network is located.
     */
    public childInstanceRegionId: string | ros.IResolvable;

    /**
     * @Property childInstanceType: The type of the network to attach. Support VPC, VBR or CCN.
     */
    public childInstanceType: string | ros.IResolvable;

    /**
     * @Property childInstanceOwnerId: The account ID to which the network belongs.
     */
    public childInstanceOwnerId: number | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCenInstanceAttachmentProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosCenInstanceAttachment.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.cenId = props.cenId;
        this.childInstanceId = props.childInstanceId;
        this.childInstanceRegionId = props.childInstanceRegionId;
        this.childInstanceType = props.childInstanceType;
        this.childInstanceOwnerId = props.childInstanceOwnerId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            cenId: this.cenId,
            childInstanceId: this.childInstanceId,
            childInstanceRegionId: this.childInstanceRegionId,
            childInstanceType: this.childInstanceType,
            childInstanceOwnerId: this.childInstanceOwnerId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosCenInstanceAttachmentPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosCenRouteMap`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-cenroutemap
 */
export interface RosCenRouteMapProps {

    /**
     * @Property cenId: The ID of the Cloud Enterprise Network (CEN) instance.
     */
    readonly cenId: string | ros.IResolvable;

    /**
     * @Property cenRegionId: The region where the CEN instance is deployed. You can call the DescribeRegions operation to query region IDs.
     */
    readonly cenRegionId: string | ros.IResolvable;

    /**
     * @Property mapResult: The route map behavior after all conditions are matched. Valid values: 
     *  Permit: allows the routes that are matched. 
     *  Deny: rejects the routes that are matched.
     */
    readonly mapResult: string | ros.IResolvable;

    /**
     * @Property priority: The priority of the route map. Valid values: 1 to 100 . A lower value indicates a higher priority. 
     *  Note In the same region, for route maps that are applied in the same direction, the priority is unique. When a route map is implemented, the system matches conditions with a route map whose priority number is the smallest. Therefore, make sure that you set priorities for route maps to meet your requirements.
     */
    readonly priority: number | ros.IResolvable;

    /**
     * @Property transmitDirection: The direction in which the route map is applied. Valid values: 
     *  RegionIn: Routes are advertised to CEN gateways. 
     *  For example, routes are advertised from network instances deployed in the current region or other regions to the gateways deployed in the current region. 
     *  RegionOut: Routes are advertised from CEN gateways. 
     *  For example, routes are advertised from gateways deployed in the current region to network instances or gateways deployed in other regions.
     */
    readonly transmitDirection: string | ros.IResolvable;

    /**
     * @Property asPathMatchMode: Match statements are used to match the AS paths. Valid values:
     *  Include: uses fuzzy match. If the AS path in the condition overlaps with the AS path in the route, the match is successful.
     *  Complete: uses exact match. Only when the AS path in the condition is the same as the AS path in the route, the match is successful.
     */
    readonly asPathMatchMode?: string | ros.IResolvable;

    /**
     * @Property cidrMatchMode: Match statements are used to match the prefixes. Valid values: 
     *  Include: uses fuzzy match. If the routing prefix in the condition contains the routing prefix of the route, the match is successful. 
     *  For example, the 1.1.0.0\/16 policy can match the 1.1.1.0\/24 route. 
     *  Complete: uses exact match. Only when the routing prefix in the condition is the same as the routing prefix of the route, the match is successful. 
     *  For example, the 1.1.0.0\/16 policy can match the 1.1.0.0\/16 route.
     */
    readonly cidrMatchMode?: string | ros.IResolvable;

    /**
     * @Property communityMatchMode: Match statements are used to match the Communities. Valid values: 
     *  Include: uses fuzzy match. If the Community in the condition overlaps with the Community of the route, the match is successful. 
     *  Complete: uses exact match. Only when the Community in the condition is the same as the Community of the route, the match is successful.
     */
    readonly communityMatchMode?: string | ros.IResolvable;

    /**
     * @Property communityOperateMode: Action statements are used to operate the Communities. Valid values: 
     *  Additive: adds. 
     *  Replace: replaces.
     */
    readonly communityOperateMode?: string | ros.IResolvable;

    /**
     * @Property description: The description of the route map.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property destinationChildInstanceTypes: Match statements are used to match the destination instance types. Valid values: 
     *  VPC: VPCs. 
     *  VBR: VBRs. 
     *  CCN: CCN instances in mainland China. 
     *  Note The destination instance types are valid only when the route map is applied to scenarios where routes are advertised from gateways in the current region to instances in the current region.
     */
    readonly destinationChildInstanceTypes?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property destinationCidrBlocks: Match statements are used to match the routing prefixes. The CIDR format is used. You can enter at most 32 CIDR blocks.
     */
    readonly destinationCidrBlocks?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property destinationInstanceIds: Match statements are used to match the destination instance IDs. 
     *  You can enter instance IDs of the following types: VPC, VBR, CCN in mainland China, and SAG. You can enter at most 32 instance IDs. 
     *  Note The destination instance IDs are valid only when the route map is applied to scenarios where routes are advertised from gateways in the current region to instances in the current region.
     */
    readonly destinationInstanceIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property destinationInstanceIdsReverseMatch: The IDs of destination instances to be advertised do not support match statements. Valid values: 
     *  false(default value): If the ID of the destination instance to be advertised is in the DestinationInstanceIds field, the match is successful. 
     *  true: If the ID of the destination instance to be advertised is not in the DestinationInstanceIds filed, the match is successful.
     */
    readonly destinationInstanceIdsReverseMatch?: boolean | ros.IResolvable;

    /**
     * @Property destinationRouteTableIds: Match statements are used to match the IDs of the destination route tables. You can enter at most 32 route table IDs. 
     *  Note The destination route table IDs are valid only when the route map is applied to scenarios where routes are advertised from gateways in the current region to route tables in the current region.
     */
    readonly destinationRouteTableIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property matchAsns: Match statements are used to match AS paths of the routes. An AS path is a mandatory attribute, which describes the AS number through which a BGP route passes when the BGP route is advertised. 
     *  Only the AS-SEQUENCE parameter is supported. The AS-SET, AS-CONFED-SEQUENCE, and AS-CONFED-SET parameters are not supported. Specifically, only the AS number list is supported. Sets and sub-lists are not supported.
     */
    readonly matchAsns?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property matchCommunitySet: Match statements are used to match the Communities. Enter each Community in the format of nn:nn. Valid values of nn: 1 to 65535. You can enter at most 32 Communities. Each Community must comply with RFC 1997. RFC 8092 is not supported. 
     *  Note If the configurations of the Communities are incorrect, routes may not be advertised to the on-premises data center.
     */
    readonly matchCommunitySet?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property nextPriority: The priority of the next associated route map. Valid values: 1 to 100. 
     *  If the priority is not set, no next route map is associated with the current route map. 
     *  If the priority is set to 1, the next route map is associated with the current route map. 
     *  If the priority is set and the value is not 1, the priority of the associated route map must be higher than that of the current route map. 
     *  Only when the MapResult parameter is set to Permit, the matched routes continue to match the next associated route maps.
     */
    readonly nextPriority?: number | ros.IResolvable;

    /**
     * @Property operateCommunitySet: Action statements are used to operate the Communities. Valid values: Enter each Community in the format of nn:nn. Valid values of nn: 1 to 65535. You can enter at most 32 Communities. Each Community must comply with RFC 1997. RFC 8092 is not supported. 
     *  Note If the configurations of the Communities are incorrect, routes may not be advertised to the on-premises data center.
     */
    readonly operateCommunitySet?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property preference: Action statements are used to modify route priorities. Valid values: 1 to 100. Default value: 50. A smaller number indicates a higher priority.
     */
    readonly preference?: number | ros.IResolvable;

    /**
     * @Property prependAsPath: AS paths are attached when regional gateways receive or advertise routes. 
     *  For route maps that are applied in different directions, the requirements for AS paths to be attached are different: 
     *  For the inbound direction: You must specify the list of source instance IDs and the source region in the condition to be matched. The source region must be the same as the region where the route map is applied. 
     *  For the outbound direction: You must specify the list of destination instance IDs in the condition to be matched.
     */
    readonly prependAsPath?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property routeTypes: Match statements are used to match the route types. Valid values: 
     *  System: system routes that are generated by the system. 
     *  Custom: custom routes that are created by users. 
     *  BGP: Border Gateway Protocol (BGP) routes that are advertised to BGP. 
     *  You can enter multiple types.
     */
    readonly routeTypes?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property sourceChildInstanceTypes: Match statements are used to match source instance types of the routes. Valid values: 
     *  VPC: VPCs. 
     *  VBR: VBRs. 
     *  CCN: CCN instances in mainland China.
     */
    readonly sourceChildInstanceTypes?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property sourceInstanceIds: Match statements are used to match source instance IDs of the routes. 
     *  You can enter instance IDs of the following types: virtual private cloud (VPC), virtual border router (VBR), Cloud Connect Network (CCN) in mainland China, Smart Access Gateway (SAG). You can enter at most 32 instance IDs.
     */
    readonly sourceInstanceIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property sourceInstanceIdsReverseMatch: The IDs of source instances to be advertised do not support match statements. Valid values: 
     *  false (default value): If the source instance ID is in the SourceInstanceIds field, the match is successful. 
     *  true: If the source instance ID is not in the SourceInstanceIds field, the match is successful.
     */
    readonly sourceInstanceIdsReverseMatch?: boolean | ros.IResolvable;

    /**
     * @Property sourceRegionIds: Match statements are used to match source region IDs of the routes. You can enter at most 32 region IDs.
     */
    readonly sourceRegionIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property sourceRouteTableIds: Match statements are used to match source route table IDs of the routes. You can enter at most 32 route table IDs.
     */
    readonly sourceRouteTableIds?: Array<string | ros.IResolvable> | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosCenRouteMapProps`
 *
 * @param properties - the TypeScript properties of a `RosCenRouteMapProps`
 *
 * @returns the result of the validation.
 */
function RosCenRouteMapPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('sourceInstanceIdsReverseMatch', ros.validateBoolean)(properties.sourceInstanceIdsReverseMatch));
    errors.collect(ros.propertyValidator('transmitDirection', ros.requiredValidator)(properties.transmitDirection));
    errors.collect(ros.propertyValidator('transmitDirection', ros.validateString)(properties.transmitDirection));
    errors.collect(ros.propertyValidator('matchCommunitySet', ros.listValidator(ros.validateString))(properties.matchCommunitySet));
    errors.collect(ros.propertyValidator('cenRegionId', ros.requiredValidator)(properties.cenRegionId));
    errors.collect(ros.propertyValidator('cenRegionId', ros.validateString)(properties.cenRegionId));
    errors.collect(ros.propertyValidator('sourceRouteTableIds', ros.listValidator(ros.validateString))(properties.sourceRouteTableIds));
    errors.collect(ros.propertyValidator('destinationInstanceIds', ros.listValidator(ros.validateString))(properties.destinationInstanceIds));
    errors.collect(ros.propertyValidator('destinationInstanceIdsReverseMatch', ros.validateBoolean)(properties.destinationInstanceIdsReverseMatch));
    errors.collect(ros.propertyValidator('sourceInstanceIds', ros.listValidator(ros.validateString))(properties.sourceInstanceIds));
    errors.collect(ros.propertyValidator('destinationRouteTableIds', ros.listValidator(ros.validateString))(properties.destinationRouteTableIds));
    errors.collect(ros.propertyValidator('destinationCidrBlocks', ros.listValidator(ros.validateString))(properties.destinationCidrBlocks));
    errors.collect(ros.propertyValidator('operateCommunitySet', ros.listValidator(ros.validateString))(properties.operateCommunitySet));
    errors.collect(ros.propertyValidator('destinationChildInstanceTypes', ros.listValidator(ros.validateString))(properties.destinationChildInstanceTypes));
    errors.collect(ros.propertyValidator('priority', ros.requiredValidator)(properties.priority));
    errors.collect(ros.propertyValidator('priority', ros.validateNumber)(properties.priority));
    errors.collect(ros.propertyValidator('sourceChildInstanceTypes', ros.listValidator(ros.validateString))(properties.sourceChildInstanceTypes));
    errors.collect(ros.propertyValidator('asPathMatchMode', ros.validateString)(properties.asPathMatchMode));
    errors.collect(ros.propertyValidator('cidrMatchMode', ros.validateString)(properties.cidrMatchMode));
    errors.collect(ros.propertyValidator('mapResult', ros.requiredValidator)(properties.mapResult));
    errors.collect(ros.propertyValidator('mapResult', ros.validateString)(properties.mapResult));
    errors.collect(ros.propertyValidator('routeTypes', ros.listValidator(ros.validateString))(properties.routeTypes));
    errors.collect(ros.propertyValidator('preference', ros.validateNumber)(properties.preference));
    errors.collect(ros.propertyValidator('communityOperateMode', ros.validateString)(properties.communityOperateMode));
    errors.collect(ros.propertyValidator('cenId', ros.requiredValidator)(properties.cenId));
    errors.collect(ros.propertyValidator('cenId', ros.validateString)(properties.cenId));
    errors.collect(ros.propertyValidator('nextPriority', ros.validateNumber)(properties.nextPriority));
    errors.collect(ros.propertyValidator('prependAsPath', ros.listValidator(ros.validateString))(properties.prependAsPath));
    errors.collect(ros.propertyValidator('communityMatchMode', ros.validateString)(properties.communityMatchMode));
    errors.collect(ros.propertyValidator('matchAsns', ros.listValidator(ros.validateString))(properties.matchAsns));
    errors.collect(ros.propertyValidator('sourceRegionIds', ros.listValidator(ros.validateString))(properties.sourceRegionIds));
    return errors.wrap('supplied properties not correct for "RosCenRouteMapProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CEN::CenRouteMap` resource
 *
 * @param properties - the TypeScript properties of a `RosCenRouteMapProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CEN::CenRouteMap` resource.
 */
// @ts-ignore TS6133
function rosCenRouteMapPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosCenRouteMapPropsValidator(properties).assertSuccess();
    }
    return {
      'CenId': ros.stringToRosTemplate(properties.cenId),
      'CenRegionId': ros.stringToRosTemplate(properties.cenRegionId),
      'MapResult': ros.stringToRosTemplate(properties.mapResult),
      'Priority': ros.numberToRosTemplate(properties.priority),
      'TransmitDirection': ros.stringToRosTemplate(properties.transmitDirection),
      'AsPathMatchMode': ros.stringToRosTemplate(properties.asPathMatchMode),
      'CidrMatchMode': ros.stringToRosTemplate(properties.cidrMatchMode),
      'CommunityMatchMode': ros.stringToRosTemplate(properties.communityMatchMode),
      'CommunityOperateMode': ros.stringToRosTemplate(properties.communityOperateMode),
      'Description': ros.stringToRosTemplate(properties.description),
      'DestinationChildInstanceTypes': ros.listMapper(ros.stringToRosTemplate)(properties.destinationChildInstanceTypes),
      'DestinationCidrBlocks': ros.listMapper(ros.stringToRosTemplate)(properties.destinationCidrBlocks),
      'DestinationInstanceIds': ros.listMapper(ros.stringToRosTemplate)(properties.destinationInstanceIds),
      'DestinationInstanceIdsReverseMatch': ros.booleanToRosTemplate(properties.destinationInstanceIdsReverseMatch),
      'DestinationRouteTableIds': ros.listMapper(ros.stringToRosTemplate)(properties.destinationRouteTableIds),
      'MatchAsns': ros.listMapper(ros.stringToRosTemplate)(properties.matchAsns),
      'MatchCommunitySet': ros.listMapper(ros.stringToRosTemplate)(properties.matchCommunitySet),
      'NextPriority': ros.numberToRosTemplate(properties.nextPriority),
      'OperateCommunitySet': ros.listMapper(ros.stringToRosTemplate)(properties.operateCommunitySet),
      'Preference': ros.numberToRosTemplate(properties.preference),
      'PrependAsPath': ros.listMapper(ros.stringToRosTemplate)(properties.prependAsPath),
      'RouteTypes': ros.listMapper(ros.stringToRosTemplate)(properties.routeTypes),
      'SourceChildInstanceTypes': ros.listMapper(ros.stringToRosTemplate)(properties.sourceChildInstanceTypes),
      'SourceInstanceIds': ros.listMapper(ros.stringToRosTemplate)(properties.sourceInstanceIds),
      'SourceInstanceIdsReverseMatch': ros.booleanToRosTemplate(properties.sourceInstanceIdsReverseMatch),
      'SourceRegionIds': ros.listMapper(ros.stringToRosTemplate)(properties.sourceRegionIds),
      'SourceRouteTableIds': ros.listMapper(ros.stringToRosTemplate)(properties.sourceRouteTableIds),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CEN::CenRouteMap`, which is used to create a routing policy.
 * @Note This class does not contain additional functions, so it is recommended to use the `CenRouteMap` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-cenroutemap
 */
export class RosCenRouteMap extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CEN::CenRouteMap";

    /**
     * @Attribute RouteMapId: The ID of the route map.
     */
    public readonly attrRouteMapId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property cenId: The ID of the Cloud Enterprise Network (CEN) instance.
     */
    public cenId: string | ros.IResolvable;

    /**
     * @Property cenRegionId: The region where the CEN instance is deployed. You can call the DescribeRegions operation to query region IDs.
     */
    public cenRegionId: string | ros.IResolvable;

    /**
     * @Property mapResult: The route map behavior after all conditions are matched. Valid values: 
     *  Permit: allows the routes that are matched. 
     *  Deny: rejects the routes that are matched.
     */
    public mapResult: string | ros.IResolvable;

    /**
     * @Property priority: The priority of the route map. Valid values: 1 to 100 . A lower value indicates a higher priority. 
     *  Note In the same region, for route maps that are applied in the same direction, the priority is unique. When a route map is implemented, the system matches conditions with a route map whose priority number is the smallest. Therefore, make sure that you set priorities for route maps to meet your requirements.
     */
    public priority: number | ros.IResolvable;

    /**
     * @Property transmitDirection: The direction in which the route map is applied. Valid values: 
     *  RegionIn: Routes are advertised to CEN gateways. 
     *  For example, routes are advertised from network instances deployed in the current region or other regions to the gateways deployed in the current region. 
     *  RegionOut: Routes are advertised from CEN gateways. 
     *  For example, routes are advertised from gateways deployed in the current region to network instances or gateways deployed in other regions.
     */
    public transmitDirection: string | ros.IResolvable;

    /**
     * @Property asPathMatchMode: Match statements are used to match the AS paths. Valid values:
     *  Include: uses fuzzy match. If the AS path in the condition overlaps with the AS path in the route, the match is successful.
     *  Complete: uses exact match. Only when the AS path in the condition is the same as the AS path in the route, the match is successful.
     */
    public asPathMatchMode: string | ros.IResolvable | undefined;

    /**
     * @Property cidrMatchMode: Match statements are used to match the prefixes. Valid values: 
     *  Include: uses fuzzy match. If the routing prefix in the condition contains the routing prefix of the route, the match is successful. 
     *  For example, the 1.1.0.0\/16 policy can match the 1.1.1.0\/24 route. 
     *  Complete: uses exact match. Only when the routing prefix in the condition is the same as the routing prefix of the route, the match is successful. 
     *  For example, the 1.1.0.0\/16 policy can match the 1.1.0.0\/16 route.
     */
    public cidrMatchMode: string | ros.IResolvable | undefined;

    /**
     * @Property communityMatchMode: Match statements are used to match the Communities. Valid values: 
     *  Include: uses fuzzy match. If the Community in the condition overlaps with the Community of the route, the match is successful. 
     *  Complete: uses exact match. Only when the Community in the condition is the same as the Community of the route, the match is successful.
     */
    public communityMatchMode: string | ros.IResolvable | undefined;

    /**
     * @Property communityOperateMode: Action statements are used to operate the Communities. Valid values: 
     *  Additive: adds. 
     *  Replace: replaces.
     */
    public communityOperateMode: string | ros.IResolvable | undefined;

    /**
     * @Property description: The description of the route map.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property destinationChildInstanceTypes: Match statements are used to match the destination instance types. Valid values: 
     *  VPC: VPCs. 
     *  VBR: VBRs. 
     *  CCN: CCN instances in mainland China. 
     *  Note The destination instance types are valid only when the route map is applied to scenarios where routes are advertised from gateways in the current region to instances in the current region.
     */
    public destinationChildInstanceTypes: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property destinationCidrBlocks: Match statements are used to match the routing prefixes. The CIDR format is used. You can enter at most 32 CIDR blocks.
     */
    public destinationCidrBlocks: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property destinationInstanceIds: Match statements are used to match the destination instance IDs. 
     *  You can enter instance IDs of the following types: VPC, VBR, CCN in mainland China, and SAG. You can enter at most 32 instance IDs. 
     *  Note The destination instance IDs are valid only when the route map is applied to scenarios where routes are advertised from gateways in the current region to instances in the current region.
     */
    public destinationInstanceIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property destinationInstanceIdsReverseMatch: The IDs of destination instances to be advertised do not support match statements. Valid values: 
     *  false(default value): If the ID of the destination instance to be advertised is in the DestinationInstanceIds field, the match is successful. 
     *  true: If the ID of the destination instance to be advertised is not in the DestinationInstanceIds filed, the match is successful.
     */
    public destinationInstanceIdsReverseMatch: boolean | ros.IResolvable | undefined;

    /**
     * @Property destinationRouteTableIds: Match statements are used to match the IDs of the destination route tables. You can enter at most 32 route table IDs. 
     *  Note The destination route table IDs are valid only when the route map is applied to scenarios where routes are advertised from gateways in the current region to route tables in the current region.
     */
    public destinationRouteTableIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property matchAsns: Match statements are used to match AS paths of the routes. An AS path is a mandatory attribute, which describes the AS number through which a BGP route passes when the BGP route is advertised. 
     *  Only the AS-SEQUENCE parameter is supported. The AS-SET, AS-CONFED-SEQUENCE, and AS-CONFED-SET parameters are not supported. Specifically, only the AS number list is supported. Sets and sub-lists are not supported.
     */
    public matchAsns: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property matchCommunitySet: Match statements are used to match the Communities. Enter each Community in the format of nn:nn. Valid values of nn: 1 to 65535. You can enter at most 32 Communities. Each Community must comply with RFC 1997. RFC 8092 is not supported. 
     *  Note If the configurations of the Communities are incorrect, routes may not be advertised to the on-premises data center.
     */
    public matchCommunitySet: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property nextPriority: The priority of the next associated route map. Valid values: 1 to 100. 
     *  If the priority is not set, no next route map is associated with the current route map. 
     *  If the priority is set to 1, the next route map is associated with the current route map. 
     *  If the priority is set and the value is not 1, the priority of the associated route map must be higher than that of the current route map. 
     *  Only when the MapResult parameter is set to Permit, the matched routes continue to match the next associated route maps.
     */
    public nextPriority: number | ros.IResolvable | undefined;

    /**
     * @Property operateCommunitySet: Action statements are used to operate the Communities. Valid values: Enter each Community in the format of nn:nn. Valid values of nn: 1 to 65535. You can enter at most 32 Communities. Each Community must comply with RFC 1997. RFC 8092 is not supported. 
     *  Note If the configurations of the Communities are incorrect, routes may not be advertised to the on-premises data center.
     */
    public operateCommunitySet: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property preference: Action statements are used to modify route priorities. Valid values: 1 to 100. Default value: 50. A smaller number indicates a higher priority.
     */
    public preference: number | ros.IResolvable | undefined;

    /**
     * @Property prependAsPath: AS paths are attached when regional gateways receive or advertise routes. 
     *  For route maps that are applied in different directions, the requirements for AS paths to be attached are different: 
     *  For the inbound direction: You must specify the list of source instance IDs and the source region in the condition to be matched. The source region must be the same as the region where the route map is applied. 
     *  For the outbound direction: You must specify the list of destination instance IDs in the condition to be matched.
     */
    public prependAsPath: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property routeTypes: Match statements are used to match the route types. Valid values: 
     *  System: system routes that are generated by the system. 
     *  Custom: custom routes that are created by users. 
     *  BGP: Border Gateway Protocol (BGP) routes that are advertised to BGP. 
     *  You can enter multiple types.
     */
    public routeTypes: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property sourceChildInstanceTypes: Match statements are used to match source instance types of the routes. Valid values: 
     *  VPC: VPCs. 
     *  VBR: VBRs. 
     *  CCN: CCN instances in mainland China.
     */
    public sourceChildInstanceTypes: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property sourceInstanceIds: Match statements are used to match source instance IDs of the routes. 
     *  You can enter instance IDs of the following types: virtual private cloud (VPC), virtual border router (VBR), Cloud Connect Network (CCN) in mainland China, Smart Access Gateway (SAG). You can enter at most 32 instance IDs.
     */
    public sourceInstanceIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property sourceInstanceIdsReverseMatch: The IDs of source instances to be advertised do not support match statements. Valid values: 
     *  false (default value): If the source instance ID is in the SourceInstanceIds field, the match is successful. 
     *  true: If the source instance ID is not in the SourceInstanceIds field, the match is successful.
     */
    public sourceInstanceIdsReverseMatch: boolean | ros.IResolvable | undefined;

    /**
     * @Property sourceRegionIds: Match statements are used to match source region IDs of the routes. You can enter at most 32 region IDs.
     */
    public sourceRegionIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property sourceRouteTableIds: Match statements are used to match source route table IDs of the routes. You can enter at most 32 route table IDs.
     */
    public sourceRouteTableIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCenRouteMapProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosCenRouteMap.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrRouteMapId = this.getAtt('RouteMapId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.cenId = props.cenId;
        this.cenRegionId = props.cenRegionId;
        this.mapResult = props.mapResult;
        this.priority = props.priority;
        this.transmitDirection = props.transmitDirection;
        this.asPathMatchMode = props.asPathMatchMode;
        this.cidrMatchMode = props.cidrMatchMode;
        this.communityMatchMode = props.communityMatchMode;
        this.communityOperateMode = props.communityOperateMode;
        this.description = props.description;
        this.destinationChildInstanceTypes = props.destinationChildInstanceTypes;
        this.destinationCidrBlocks = props.destinationCidrBlocks;
        this.destinationInstanceIds = props.destinationInstanceIds;
        this.destinationInstanceIdsReverseMatch = props.destinationInstanceIdsReverseMatch;
        this.destinationRouteTableIds = props.destinationRouteTableIds;
        this.matchAsns = props.matchAsns;
        this.matchCommunitySet = props.matchCommunitySet;
        this.nextPriority = props.nextPriority;
        this.operateCommunitySet = props.operateCommunitySet;
        this.preference = props.preference;
        this.prependAsPath = props.prependAsPath;
        this.routeTypes = props.routeTypes;
        this.sourceChildInstanceTypes = props.sourceChildInstanceTypes;
        this.sourceInstanceIds = props.sourceInstanceIds;
        this.sourceInstanceIdsReverseMatch = props.sourceInstanceIdsReverseMatch;
        this.sourceRegionIds = props.sourceRegionIds;
        this.sourceRouteTableIds = props.sourceRouteTableIds;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            cenId: this.cenId,
            cenRegionId: this.cenRegionId,
            mapResult: this.mapResult,
            priority: this.priority,
            transmitDirection: this.transmitDirection,
            asPathMatchMode: this.asPathMatchMode,
            cidrMatchMode: this.cidrMatchMode,
            communityMatchMode: this.communityMatchMode,
            communityOperateMode: this.communityOperateMode,
            description: this.description,
            destinationChildInstanceTypes: this.destinationChildInstanceTypes,
            destinationCidrBlocks: this.destinationCidrBlocks,
            destinationInstanceIds: this.destinationInstanceIds,
            destinationInstanceIdsReverseMatch: this.destinationInstanceIdsReverseMatch,
            destinationRouteTableIds: this.destinationRouteTableIds,
            matchAsns: this.matchAsns,
            matchCommunitySet: this.matchCommunitySet,
            nextPriority: this.nextPriority,
            operateCommunitySet: this.operateCommunitySet,
            preference: this.preference,
            prependAsPath: this.prependAsPath,
            routeTypes: this.routeTypes,
            sourceChildInstanceTypes: this.sourceChildInstanceTypes,
            sourceInstanceIds: this.sourceInstanceIds,
            sourceInstanceIdsReverseMatch: this.sourceInstanceIdsReverseMatch,
            sourceRegionIds: this.sourceRegionIds,
            sourceRouteTableIds: this.sourceRouteTableIds,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosCenRouteMapPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosCenRouteService`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-cenrouteservice
 */
export interface RosCenRouteServiceProps {

    /**
     * @Property accessRegionId: The region where the cloud service is deployed.
     */
    readonly accessRegionId: string | ros.IResolvable;

    /**
     * @Property cenId: The ID of the Cloud Enterprise Network (CEN) instance.
     */
    readonly cenId: string | ros.IResolvable;

    /**
     * @Property host: The domain or IP address of the cloud service.
     */
    readonly host: string | ros.IResolvable;

    /**
     * @Property hostRegionId: The region where the cloud service is deployed.
     * You can call the DescribeRegions operation to query region IDs.
     * Note The HostRegionId and AccessRegionIds.N must be set to the same value.
     */
    readonly hostRegionId: string | ros.IResolvable;

    /**
     * @Property hostVpcId: The virtual private cloud (VPC) that is associated with the cloud service.
     */
    readonly hostVpcId: string | ros.IResolvable;

    /**
     * @Property conflictIgnore: Whether to ignore conflict when creating. If true, when the CloudRoute.Conflict error code is encountered during creation, it will be ignored as the creation is successful, and the deletion phase will be skipped.
     * Default false.
     */
    readonly conflictIgnore?: boolean | ros.IResolvable;

    /**
     * @Property description: The description of the cloud service.
     */
    readonly description?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosCenRouteServiceProps`
 *
 * @param properties - the TypeScript properties of a `RosCenRouteServiceProps`
 *
 * @returns the result of the validation.
 */
function RosCenRouteServicePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('conflictIgnore', ros.validateBoolean)(properties.conflictIgnore));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('hostRegionId', ros.requiredValidator)(properties.hostRegionId));
    errors.collect(ros.propertyValidator('hostRegionId', ros.validateString)(properties.hostRegionId));
    errors.collect(ros.propertyValidator('cenId', ros.requiredValidator)(properties.cenId));
    errors.collect(ros.propertyValidator('cenId', ros.validateString)(properties.cenId));
    errors.collect(ros.propertyValidator('accessRegionId', ros.requiredValidator)(properties.accessRegionId));
    errors.collect(ros.propertyValidator('accessRegionId', ros.validateString)(properties.accessRegionId));
    errors.collect(ros.propertyValidator('host', ros.requiredValidator)(properties.host));
    errors.collect(ros.propertyValidator('host', ros.validateString)(properties.host));
    errors.collect(ros.propertyValidator('hostVpcId', ros.requiredValidator)(properties.hostVpcId));
    errors.collect(ros.propertyValidator('hostVpcId', ros.validateString)(properties.hostVpcId));
    return errors.wrap('supplied properties not correct for "RosCenRouteServiceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CEN::CenRouteService` resource
 *
 * @param properties - the TypeScript properties of a `RosCenRouteServiceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CEN::CenRouteService` resource.
 */
// @ts-ignore TS6133
function rosCenRouteServicePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosCenRouteServicePropsValidator(properties).assertSuccess();
    }
    return {
      'AccessRegionId': ros.stringToRosTemplate(properties.accessRegionId),
      'CenId': ros.stringToRosTemplate(properties.cenId),
      'Host': ros.stringToRosTemplate(properties.host),
      'HostRegionId': ros.stringToRosTemplate(properties.hostRegionId),
      'HostVpcId': ros.stringToRosTemplate(properties.hostVpcId),
      'ConflictIgnore': ros.booleanToRosTemplate(properties.conflictIgnore),
      'Description': ros.stringToRosTemplate(properties.description),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CEN::CenRouteService`, which is used to access an Alibaba Cloud service.
 * @Note This class does not contain additional functions, so it is recommended to use the `CenRouteService` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-cenrouteservice
 */
export class RosCenRouteService extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CEN::CenRouteService";

    /**
     * @Attribute Id: The ID of the cloud service. It is formatted to {CenId}/{HostRegionId}/{Host}/{AccessRegionId}
     */
    public readonly attrId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property accessRegionId: The region where the cloud service is deployed.
     */
    public accessRegionId: string | ros.IResolvable;

    /**
     * @Property cenId: The ID of the Cloud Enterprise Network (CEN) instance.
     */
    public cenId: string | ros.IResolvable;

    /**
     * @Property host: The domain or IP address of the cloud service.
     */
    public host: string | ros.IResolvable;

    /**
     * @Property hostRegionId: The region where the cloud service is deployed.
     * You can call the DescribeRegions operation to query region IDs.
     * Note The HostRegionId and AccessRegionIds.N must be set to the same value.
     */
    public hostRegionId: string | ros.IResolvable;

    /**
     * @Property hostVpcId: The virtual private cloud (VPC) that is associated with the cloud service.
     */
    public hostVpcId: string | ros.IResolvable;

    /**
     * @Property conflictIgnore: Whether to ignore conflict when creating. If true, when the CloudRoute.Conflict error code is encountered during creation, it will be ignored as the creation is successful, and the deletion phase will be skipped.
     * Default false.
     */
    public conflictIgnore: boolean | ros.IResolvable | undefined;

    /**
     * @Property description: The description of the cloud service.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCenRouteServiceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosCenRouteService.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrId = this.getAtt('Id');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.accessRegionId = props.accessRegionId;
        this.cenId = props.cenId;
        this.host = props.host;
        this.hostRegionId = props.hostRegionId;
        this.hostVpcId = props.hostVpcId;
        this.conflictIgnore = props.conflictIgnore;
        this.description = props.description;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            accessRegionId: this.accessRegionId,
            cenId: this.cenId,
            host: this.host,
            hostRegionId: this.hostRegionId,
            hostVpcId: this.hostVpcId,
            conflictIgnore: this.conflictIgnore,
            description: this.description,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosCenRouteServicePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosCenVbrHealthCheck`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-cenvbrhealthcheck
 */
export interface RosCenVbrHealthCheckProps {

    /**
     * @Property cenId: The ID of the CEN instance.
     */
    readonly cenId: string | ros.IResolvable;

    /**
     * @Property healthCheckTargetIp: Specifies the destination IP address of the health check. The destination IP address is the IP address of the client-facing interface on the VBR instance.
     */
    readonly healthCheckTargetIp: string | ros.IResolvable;

    /**
     * @Property vbrInstanceId: The ID of the VBR instance.
     */
    readonly vbrInstanceId: string | ros.IResolvable;

    /**
     * @Property vbrInstanceRegionId: The ID of the region where the VBR instance is deployed. You can call the DescribeRegionsoperation to query region IDs.
     */
    readonly vbrInstanceRegionId: string | ros.IResolvable;

    /**
     * @Property healthCheckInterval: Specifies the time interval at which probe packets are sent during the health check.  Default value: 2. Valid values: 2 to 3.  Unit: second.
     */
    readonly healthCheckInterval?: number | ros.IResolvable;

    /**
     * @Property healthCheckSourceIp: You can use either of the following methods to specify the source IP address of the health check.  Automatic IP Address: The system automatically assigns an IP address within the CIDR block 100.96.0.0\/16 (recommended).  Custom IP Address: You can specify a source IP address that is available within the CIDR block 10.0.0.0\/8, 192.168.0.0\/16, or 172.16.0.0\/12. The specified source IP address must not overlap with the IP addresses of the Alibaba Cloud-facing and client-facing interfaces on the VBR instance, or the IP addresses of the instances with which the VBR instance needs to communicate in the CEN.
     */
    readonly healthCheckSourceIp?: string | ros.IResolvable;

    /**
     * @Property healthyThreshold: Specifies the number of probe packets to be sent during the health check.  Default value: 8. Valid values: 3 to 8.  Unit: packet.
     */
    readonly healthyThreshold?: number | ros.IResolvable;

    /**
     * @Property vbrInstanceOwnerId: The User ID (UID) of the account to which the VBR instance belongs.
     */
    readonly vbrInstanceOwnerId?: number | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosCenVbrHealthCheckProps`
 *
 * @param properties - the TypeScript properties of a `RosCenVbrHealthCheckProps`
 *
 * @returns the result of the validation.
 */
function RosCenVbrHealthCheckPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('vbrInstanceRegionId', ros.requiredValidator)(properties.vbrInstanceRegionId));
    errors.collect(ros.propertyValidator('vbrInstanceRegionId', ros.validateString)(properties.vbrInstanceRegionId));
    errors.collect(ros.propertyValidator('healthCheckInterval', ros.validateNumber)(properties.healthCheckInterval));
    errors.collect(ros.propertyValidator('vbrInstanceId', ros.requiredValidator)(properties.vbrInstanceId));
    errors.collect(ros.propertyValidator('vbrInstanceId', ros.validateString)(properties.vbrInstanceId));
    errors.collect(ros.propertyValidator('vbrInstanceOwnerId', ros.validateNumber)(properties.vbrInstanceOwnerId));
    errors.collect(ros.propertyValidator('healthCheckSourceIp', ros.validateString)(properties.healthCheckSourceIp));
    errors.collect(ros.propertyValidator('healthyThreshold', ros.validateNumber)(properties.healthyThreshold));
    errors.collect(ros.propertyValidator('cenId', ros.requiredValidator)(properties.cenId));
    errors.collect(ros.propertyValidator('cenId', ros.validateString)(properties.cenId));
    errors.collect(ros.propertyValidator('healthCheckTargetIp', ros.requiredValidator)(properties.healthCheckTargetIp));
    errors.collect(ros.propertyValidator('healthCheckTargetIp', ros.validateString)(properties.healthCheckTargetIp));
    return errors.wrap('supplied properties not correct for "RosCenVbrHealthCheckProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CEN::CenVbrHealthCheck` resource
 *
 * @param properties - the TypeScript properties of a `RosCenVbrHealthCheckProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CEN::CenVbrHealthCheck` resource.
 */
// @ts-ignore TS6133
function rosCenVbrHealthCheckPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosCenVbrHealthCheckPropsValidator(properties).assertSuccess();
    }
    return {
      'CenId': ros.stringToRosTemplate(properties.cenId),
      'HealthCheckTargetIp': ros.stringToRosTemplate(properties.healthCheckTargetIp),
      'VbrInstanceId': ros.stringToRosTemplate(properties.vbrInstanceId),
      'VbrInstanceRegionId': ros.stringToRosTemplate(properties.vbrInstanceRegionId),
      'HealthCheckInterval': ros.numberToRosTemplate(properties.healthCheckInterval),
      'HealthCheckSourceIp': ros.stringToRosTemplate(properties.healthCheckSourceIp),
      'HealthyThreshold': ros.numberToRosTemplate(properties.healthyThreshold),
      'VbrInstanceOwnerId': ros.numberToRosTemplate(properties.vbrInstanceOwnerId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CEN::CenVbrHealthCheck`, which is used to enable the health check feature or modify the health check configurations for a virtual border router (VBR).
 * @Note This class does not contain additional functions, so it is recommended to use the `CenVbrHealthCheck` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-cenvbrhealthcheck
 */
export class RosCenVbrHealthCheck extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CEN::CenVbrHealthCheck";

    /**
     * @Attribute CenId: The ID of the CEN instance.
     */
    public readonly attrCenId: ros.IResolvable;

    /**
     * @Attribute HealthCheckInterval: Specifies the time interval at which probe packets are sent during the health check.  Default value: 2. Valid values: 2 to 3.  Unit: second.
     */
    public readonly attrHealthCheckInterval: ros.IResolvable;

    /**
     * @Attribute HealthCheckSourceIp: You can use either of the following methods to specify the source IP address of the health check.  Automatic IP Address: The system automatically assigns an IP address within the CIDR block 100.96.0.0/16 (recommended).  Custom IP Address: You can specify a source IP address that is available within the CIDR block 10.0.0.0/8, 192.168.0.0/16, or 172.16.0.0/12. The specified source IP address must not overlap with the IP addresses of the Alibaba Cloud-facing and client-facing interfaces on the VBR instance, or the IP addresses of the instances with which the VBR instance needs to communicate in the CEN.
     */
    public readonly attrHealthCheckSourceIp: ros.IResolvable;

    /**
     * @Attribute HealthCheckTargetIp: Specifies the destination IP address of the health check. The destination IP address is the IP address of the client-facing interface on the VBR instance.
     */
    public readonly attrHealthCheckTargetIp: ros.IResolvable;

    /**
     * @Attribute HealthyThreshold: Specifies the number of probe packets to be sent during the health check.  Default value: 8. Valid values: 3 to 8.  Unit: packet.
     */
    public readonly attrHealthyThreshold: ros.IResolvable;

    /**
     * @Attribute VbrInstanceId: The ID of the VBR instance.
     */
    public readonly attrVbrInstanceId: ros.IResolvable;

    /**
     * @Attribute VbrInstanceOwnerId: The User ID (UID) of the account to which the VBR instance belongs.
     */
    public readonly attrVbrInstanceOwnerId: ros.IResolvable;

    /**
     * @Attribute VbrInstanceRegionId: The ID of the region where the VBR instance is deployed. You can call the DescribeRegionsoperation to query region IDs.
     */
    public readonly attrVbrInstanceRegionId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property cenId: The ID of the CEN instance.
     */
    public cenId: string | ros.IResolvable;

    /**
     * @Property healthCheckTargetIp: Specifies the destination IP address of the health check. The destination IP address is the IP address of the client-facing interface on the VBR instance.
     */
    public healthCheckTargetIp: string | ros.IResolvable;

    /**
     * @Property vbrInstanceId: The ID of the VBR instance.
     */
    public vbrInstanceId: string | ros.IResolvable;

    /**
     * @Property vbrInstanceRegionId: The ID of the region where the VBR instance is deployed. You can call the DescribeRegionsoperation to query region IDs.
     */
    public vbrInstanceRegionId: string | ros.IResolvable;

    /**
     * @Property healthCheckInterval: Specifies the time interval at which probe packets are sent during the health check.  Default value: 2. Valid values: 2 to 3.  Unit: second.
     */
    public healthCheckInterval: number | ros.IResolvable | undefined;

    /**
     * @Property healthCheckSourceIp: You can use either of the following methods to specify the source IP address of the health check.  Automatic IP Address: The system automatically assigns an IP address within the CIDR block 100.96.0.0\/16 (recommended).  Custom IP Address: You can specify a source IP address that is available within the CIDR block 10.0.0.0\/8, 192.168.0.0\/16, or 172.16.0.0\/12. The specified source IP address must not overlap with the IP addresses of the Alibaba Cloud-facing and client-facing interfaces on the VBR instance, or the IP addresses of the instances with which the VBR instance needs to communicate in the CEN.
     */
    public healthCheckSourceIp: string | ros.IResolvable | undefined;

    /**
     * @Property healthyThreshold: Specifies the number of probe packets to be sent during the health check.  Default value: 8. Valid values: 3 to 8.  Unit: packet.
     */
    public healthyThreshold: number | ros.IResolvable | undefined;

    /**
     * @Property vbrInstanceOwnerId: The User ID (UID) of the account to which the VBR instance belongs.
     */
    public vbrInstanceOwnerId: number | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCenVbrHealthCheckProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosCenVbrHealthCheck.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCenId = this.getAtt('CenId');
        this.attrHealthCheckInterval = this.getAtt('HealthCheckInterval');
        this.attrHealthCheckSourceIp = this.getAtt('HealthCheckSourceIp');
        this.attrHealthCheckTargetIp = this.getAtt('HealthCheckTargetIp');
        this.attrHealthyThreshold = this.getAtt('HealthyThreshold');
        this.attrVbrInstanceId = this.getAtt('VbrInstanceId');
        this.attrVbrInstanceOwnerId = this.getAtt('VbrInstanceOwnerId');
        this.attrVbrInstanceRegionId = this.getAtt('VbrInstanceRegionId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.cenId = props.cenId;
        this.healthCheckTargetIp = props.healthCheckTargetIp;
        this.vbrInstanceId = props.vbrInstanceId;
        this.vbrInstanceRegionId = props.vbrInstanceRegionId;
        this.healthCheckInterval = props.healthCheckInterval;
        this.healthCheckSourceIp = props.healthCheckSourceIp;
        this.healthyThreshold = props.healthyThreshold;
        this.vbrInstanceOwnerId = props.vbrInstanceOwnerId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            cenId: this.cenId,
            healthCheckTargetIp: this.healthCheckTargetIp,
            vbrInstanceId: this.vbrInstanceId,
            vbrInstanceRegionId: this.vbrInstanceRegionId,
            healthCheckInterval: this.healthCheckInterval,
            healthCheckSourceIp: this.healthCheckSourceIp,
            healthyThreshold: this.healthyThreshold,
            vbrInstanceOwnerId: this.vbrInstanceOwnerId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosCenVbrHealthCheckPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosChildInstanceRouteEntryToAttachment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-childinstancerouteentrytoattachment
 */
export interface RosChildInstanceRouteEntryToAttachmentProps {

    /**
     * @Property cenId: The ID of the CEN instance.
     */
    readonly cenId: string | ros.IResolvable;

    /**
     * @Property destinationCidrBlock: The destination CIDR block of the route.
     */
    readonly destinationCidrBlock: string | ros.IResolvable;

    /**
     * @Property routeTableId: The ID of the route table configured on the network instance.
     */
    readonly routeTableId: string | ros.IResolvable;

    /**
     * @Property transitRouterAttachmentId: The ID of the network instance connection.
     */
    readonly transitRouterAttachmentId: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosChildInstanceRouteEntryToAttachmentProps`
 *
 * @param properties - the TypeScript properties of a `RosChildInstanceRouteEntryToAttachmentProps`
 *
 * @returns the result of the validation.
 */
function RosChildInstanceRouteEntryToAttachmentPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('transitRouterAttachmentId', ros.requiredValidator)(properties.transitRouterAttachmentId));
    errors.collect(ros.propertyValidator('transitRouterAttachmentId', ros.validateString)(properties.transitRouterAttachmentId));
    errors.collect(ros.propertyValidator('routeTableId', ros.requiredValidator)(properties.routeTableId));
    errors.collect(ros.propertyValidator('routeTableId', ros.validateString)(properties.routeTableId));
    errors.collect(ros.propertyValidator('cenId', ros.requiredValidator)(properties.cenId));
    errors.collect(ros.propertyValidator('cenId', ros.validateString)(properties.cenId));
    errors.collect(ros.propertyValidator('destinationCidrBlock', ros.requiredValidator)(properties.destinationCidrBlock));
    errors.collect(ros.propertyValidator('destinationCidrBlock', ros.validateString)(properties.destinationCidrBlock));
    return errors.wrap('supplied properties not correct for "RosChildInstanceRouteEntryToAttachmentProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CEN::ChildInstanceRouteEntryToAttachment` resource
 *
 * @param properties - the TypeScript properties of a `RosChildInstanceRouteEntryToAttachmentProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CEN::ChildInstanceRouteEntryToAttachment` resource.
 */
// @ts-ignore TS6133
function rosChildInstanceRouteEntryToAttachmentPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosChildInstanceRouteEntryToAttachmentPropsValidator(properties).assertSuccess();
    }
    return {
      'CenId': ros.stringToRosTemplate(properties.cenId),
      'DestinationCidrBlock': ros.stringToRosTemplate(properties.destinationCidrBlock),
      'RouteTableId': ros.stringToRosTemplate(properties.routeTableId),
      'TransitRouterAttachmentId': ros.stringToRosTemplate(properties.transitRouterAttachmentId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CEN::ChildInstanceRouteEntryToAttachment`, which is used to add a route to a network instance that is connected to an Enterprise Edition transit router.
 * @Note This class does not contain additional functions, so it is recommended to use the `ChildInstanceRouteEntryToAttachment` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-childinstancerouteentrytoattachment
 */
export class RosChildInstanceRouteEntryToAttachment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CEN::ChildInstanceRouteEntryToAttachment";

    /**
     * @Attribute CenId: The ID of the CEN instance.
     */
    public readonly attrCenId: ros.IResolvable;

    /**
     * @Attribute DestinationCidrBlock: The destination CIDR block of the route.
     */
    public readonly attrDestinationCidrBlock: ros.IResolvable;

    /**
     * @Attribute RouteTableId: The ID of the route table configured on the network instance.
     */
    public readonly attrRouteTableId: ros.IResolvable;

    /**
     * @Attribute TransitRouterAttachmentId: The ID of the network instance connection.
     */
    public readonly attrTransitRouterAttachmentId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property cenId: The ID of the CEN instance.
     */
    public cenId: string | ros.IResolvable;

    /**
     * @Property destinationCidrBlock: The destination CIDR block of the route.
     */
    public destinationCidrBlock: string | ros.IResolvable;

    /**
     * @Property routeTableId: The ID of the route table configured on the network instance.
     */
    public routeTableId: string | ros.IResolvable;

    /**
     * @Property transitRouterAttachmentId: The ID of the network instance connection.
     */
    public transitRouterAttachmentId: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosChildInstanceRouteEntryToAttachmentProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosChildInstanceRouteEntryToAttachment.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCenId = this.getAtt('CenId');
        this.attrDestinationCidrBlock = this.getAtt('DestinationCidrBlock');
        this.attrRouteTableId = this.getAtt('RouteTableId');
        this.attrTransitRouterAttachmentId = this.getAtt('TransitRouterAttachmentId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.cenId = props.cenId;
        this.destinationCidrBlock = props.destinationCidrBlock;
        this.routeTableId = props.routeTableId;
        this.transitRouterAttachmentId = props.transitRouterAttachmentId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            cenId: this.cenId,
            destinationCidrBlock: this.destinationCidrBlock,
            routeTableId: this.routeTableId,
            transitRouterAttachmentId: this.transitRouterAttachmentId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosChildInstanceRouteEntryToAttachmentPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosRouteEntry`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-routeentry
 */
export interface RosRouteEntryProps {

    /**
     * @Property cenId: The ID of the CEN instance where the route entry is published.
     */
    readonly cenId: string | ros.IResolvable;

    /**
     * @Property childInstanceId: The ID of the attached network (VPC or VBR).
     */
    readonly childInstanceId: string | ros.IResolvable;

    /**
     * @Property childInstanceRegionId: The ID of the region where the attached VBR or VPC is located.
     */
    readonly childInstanceRegionId: string | ros.IResolvable;

    /**
     * @Property childInstanceRouteTableId: The route table of the attached VBR or VPC.
     */
    readonly childInstanceRouteTableId: string | ros.IResolvable;

    /**
     * @Property childInstanceType: The type of the network, value: VPC VBR
     */
    readonly childInstanceType: string | ros.IResolvable;

    /**
     * @Property destinationCidrBlock: The destination CIDR block of the route entry to publish.
     */
    readonly destinationCidrBlock: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosRouteEntryProps`
 *
 * @param properties - the TypeScript properties of a `RosRouteEntryProps`
 *
 * @returns the result of the validation.
 */
function RosRouteEntryPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('childInstanceType', ros.requiredValidator)(properties.childInstanceType));
    if(properties.childInstanceType && (typeof properties.childInstanceType) !== 'object') {
        errors.collect(ros.propertyValidator('childInstanceType', ros.validateAllowedValues)({
          data: properties.childInstanceType,
          allowedValues: ["VPC","VBR"],
        }));
    }
    errors.collect(ros.propertyValidator('childInstanceType', ros.validateString)(properties.childInstanceType));
    errors.collect(ros.propertyValidator('cenId', ros.requiredValidator)(properties.cenId));
    errors.collect(ros.propertyValidator('cenId', ros.validateString)(properties.cenId));
    errors.collect(ros.propertyValidator('destinationCidrBlock', ros.requiredValidator)(properties.destinationCidrBlock));
    errors.collect(ros.propertyValidator('destinationCidrBlock', ros.validateString)(properties.destinationCidrBlock));
    errors.collect(ros.propertyValidator('childInstanceRouteTableId', ros.requiredValidator)(properties.childInstanceRouteTableId));
    errors.collect(ros.propertyValidator('childInstanceRouteTableId', ros.validateString)(properties.childInstanceRouteTableId));
    errors.collect(ros.propertyValidator('childInstanceId', ros.requiredValidator)(properties.childInstanceId));
    errors.collect(ros.propertyValidator('childInstanceId', ros.validateString)(properties.childInstanceId));
    errors.collect(ros.propertyValidator('childInstanceRegionId', ros.requiredValidator)(properties.childInstanceRegionId));
    errors.collect(ros.propertyValidator('childInstanceRegionId', ros.validateString)(properties.childInstanceRegionId));
    return errors.wrap('supplied properties not correct for "RosRouteEntryProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CEN::RouteEntry` resource
 *
 * @param properties - the TypeScript properties of a `RosRouteEntryProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CEN::RouteEntry` resource.
 */
// @ts-ignore TS6133
function rosRouteEntryPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosRouteEntryPropsValidator(properties).assertSuccess();
    }
    return {
      'CenId': ros.stringToRosTemplate(properties.cenId),
      'ChildInstanceId': ros.stringToRosTemplate(properties.childInstanceId),
      'ChildInstanceRegionId': ros.stringToRosTemplate(properties.childInstanceRegionId),
      'ChildInstanceRouteTableId': ros.stringToRosTemplate(properties.childInstanceRouteTableId),
      'ChildInstanceType': ros.stringToRosTemplate(properties.childInstanceType),
      'DestinationCidrBlock': ros.stringToRosTemplate(properties.destinationCidrBlock),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CEN::RouteEntry`, which is used to advertise a route of an attached virtual private cloud (VPC) or virtual border router (VBR) to a Cloud Enterprise Network (CEN) instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `RouteEntry` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-routeentry
 */
export class RosRouteEntry extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CEN::RouteEntry";

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property cenId: The ID of the CEN instance where the route entry is published.
     */
    public cenId: string | ros.IResolvable;

    /**
     * @Property childInstanceId: The ID of the attached network (VPC or VBR).
     */
    public childInstanceId: string | ros.IResolvable;

    /**
     * @Property childInstanceRegionId: The ID of the region where the attached VBR or VPC is located.
     */
    public childInstanceRegionId: string | ros.IResolvable;

    /**
     * @Property childInstanceRouteTableId: The route table of the attached VBR or VPC.
     */
    public childInstanceRouteTableId: string | ros.IResolvable;

    /**
     * @Property childInstanceType: The type of the network, value: VPC VBR
     */
    public childInstanceType: string | ros.IResolvable;

    /**
     * @Property destinationCidrBlock: The destination CIDR block of the route entry to publish.
     */
    public destinationCidrBlock: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRouteEntryProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosRouteEntry.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.cenId = props.cenId;
        this.childInstanceId = props.childInstanceId;
        this.childInstanceRegionId = props.childInstanceRegionId;
        this.childInstanceRouteTableId = props.childInstanceRouteTableId;
        this.childInstanceType = props.childInstanceType;
        this.destinationCidrBlock = props.destinationCidrBlock;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            cenId: this.cenId,
            childInstanceId: this.childInstanceId,
            childInstanceRegionId: this.childInstanceRegionId,
            childInstanceRouteTableId: this.childInstanceRouteTableId,
            childInstanceType: this.childInstanceType,
            destinationCidrBlock: this.destinationCidrBlock,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosRouteEntryPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosTransitRouter`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitrouter
 */
export interface RosTransitRouterProps {

    /**
     * @Property cenId: CenId
     */
    readonly cenId: string | ros.IResolvable;

    /**
     * @Property transitRouterDescription: TransitRouterDescription
     */
    readonly transitRouterDescription?: string | ros.IResolvable;

    /**
     * @Property transitRouterName: TransitRouterName
     */
    readonly transitRouterName?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosTransitRouterProps`
 *
 * @param properties - the TypeScript properties of a `RosTransitRouterProps`
 *
 * @returns the result of the validation.
 */
function RosTransitRouterPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('cenId', ros.requiredValidator)(properties.cenId));
    errors.collect(ros.propertyValidator('cenId', ros.validateString)(properties.cenId));
    errors.collect(ros.propertyValidator('transitRouterName', ros.validateString)(properties.transitRouterName));
    errors.collect(ros.propertyValidator('transitRouterDescription', ros.validateString)(properties.transitRouterDescription));
    return errors.wrap('supplied properties not correct for "RosTransitRouterProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CEN::TransitRouter` resource
 *
 * @param properties - the TypeScript properties of a `RosTransitRouterProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CEN::TransitRouter` resource.
 */
// @ts-ignore TS6133
function rosTransitRouterPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosTransitRouterPropsValidator(properties).assertSuccess();
    }
    return {
      'CenId': ros.stringToRosTemplate(properties.cenId),
      'TransitRouterDescription': ros.stringToRosTemplate(properties.transitRouterDescription),
      'TransitRouterName': ros.stringToRosTemplate(properties.transitRouterName),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CEN::TransitRouter`, which is used to create an Enterprise Edition transit router.
 * @Note This class does not contain additional functions, so it is recommended to use the `TransitRouter` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitrouter
 */
export class RosTransitRouter extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CEN::TransitRouter";

    /**
     * @Attribute AliUid: AliUid
     */
    public readonly attrAliUid: ros.IResolvable;

    /**
     * @Attribute CenId: CenId
     */
    public readonly attrCenId: ros.IResolvable;

    /**
     * @Attribute SystemTransitRouterRouteTableId: The system route table ID of transit router.
     */
    public readonly attrSystemTransitRouterRouteTableId: ros.IResolvable;

    /**
     * @Attribute TransitRouterDescription: TransitRouterDescription
     */
    public readonly attrTransitRouterDescription: ros.IResolvable;

    /**
     * @Attribute TransitRouterId: TransitRouterId
     */
    public readonly attrTransitRouterId: ros.IResolvable;

    /**
     * @Attribute TransitRouterName: TransitRouterName
     */
    public readonly attrTransitRouterName: ros.IResolvable;

    /**
     * @Attribute Type: Type
     */
    public readonly attrType: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property cenId: CenId
     */
    public cenId: string | ros.IResolvable;

    /**
     * @Property transitRouterDescription: TransitRouterDescription
     */
    public transitRouterDescription: string | ros.IResolvable | undefined;

    /**
     * @Property transitRouterName: TransitRouterName
     */
    public transitRouterName: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTransitRouterProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosTransitRouter.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAliUid = this.getAtt('AliUid');
        this.attrCenId = this.getAtt('CenId');
        this.attrSystemTransitRouterRouteTableId = this.getAtt('SystemTransitRouterRouteTableId');
        this.attrTransitRouterDescription = this.getAtt('TransitRouterDescription');
        this.attrTransitRouterId = this.getAtt('TransitRouterId');
        this.attrTransitRouterName = this.getAtt('TransitRouterName');
        this.attrType = this.getAtt('Type');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.cenId = props.cenId;
        this.transitRouterDescription = props.transitRouterDescription;
        this.transitRouterName = props.transitRouterName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            cenId: this.cenId,
            transitRouterDescription: this.transitRouterDescription,
            transitRouterName: this.transitRouterName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosTransitRouterPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosTransitRouterPeerAttachment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitrouterpeerattachment
 */
export interface RosTransitRouterPeerAttachmentProps {

    /**
     * @Property peerTransitRouterId: Peer forwarding router instance ID.
     */
    readonly peerTransitRouterId: string | ros.IResolvable;

    /**
     * @Property autoPublishRouteEnabled: Whether to make the enterprise version forwarding router automatically publish routes across regions to the peer region.
     * false (default): No.
     * true: Yes.
     */
    readonly autoPublishRouteEnabled?: boolean | ros.IResolvable;

    /**
     * @Property bandwidth: The bandwidth value for cross-region connections.Unit: Mbps.
     * When the BandwidthType value is BandwidthPackage, this parameter represents the bandwidth value that can be used by cross-region connections.
     * When the BandwidthType value is DataTransfer, this parameter represents the speed limit bandwidth value for cross-region connections.
     */
    readonly bandwidth?: number | ros.IResolvable;

    /**
     * @Property bandwidthType: The bandwidth allocation method for cross-regional connections.Value:
     * BandwidthPackage: Allocate bandwidth from bandwidth packets.
     * DataTransfer: Do not allocate bandwidth for cross-region connections, and is billed based on usage traffic.
     */
    readonly bandwidthType?: string | ros.IResolvable;

    /**
     * @Property cenBandwidthPackageId: The bandwidth packet ID to bind to across regions.
     * Note When the value of BandwidthType is DataTransfer, this item is not required.
     */
    readonly cenBandwidthPackageId?: string | ros.IResolvable;

    /**
     * @Property cenId: Cloud Enterprise Network Instance ID.
     */
    readonly cenId?: string | ros.IResolvable;

    /**
     * @Property defaultLinkType: Default link type.
     * Optional values are Platinum, Gold, and default to Gold.
     * And it can only be configured as Platinum (Platinum) when the bandwidth allocation method is billed by traffic.
     */
    readonly defaultLinkType?: string | ros.IResolvable;

    /**
     * @Property peerTransitRouterRegionId: The region ID to which the peer forwarding router instance belongs.
     */
    readonly peerTransitRouterRegionId?: string | ros.IResolvable;

    /**
     * @Property tags: The list of tags in the form of key\/value pairs. You can define a maximum of 20 tags.
     */
    readonly tags?: RosTransitRouterPeerAttachment.TagsProperty[];

    /**
     * @Property transitRouterAttachmentDescription: Description information for cross-region connections.
     * The description can be empty or has a length of 1 to 256 characters and cannot start with http:\/\/ or https:\/\/.
     */
    readonly transitRouterAttachmentDescription?: string | ros.IResolvable;

    /**
     * @Property transitRouterAttachmentName: The name of the cross-region connection.
     * The name can be empty or has a length of 1 to 128 characters, and cannot start with http:\/\/ or https:\/\/.
     */
    readonly transitRouterAttachmentName?: string | ros.IResolvable;

    /**
     * @Property transitRouterId: Local Enterprise Edition forwarding router instance ID.
     */
    readonly transitRouterId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosTransitRouterPeerAttachmentProps`
 *
 * @param properties - the TypeScript properties of a `RosTransitRouterPeerAttachmentProps`
 *
 * @returns the result of the validation.
 */
function RosTransitRouterPeerAttachmentPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('autoPublishRouteEnabled', ros.validateBoolean)(properties.autoPublishRouteEnabled));
    if(properties.bandwidthType && (typeof properties.bandwidthType) !== 'object') {
        errors.collect(ros.propertyValidator('bandwidthType', ros.validateAllowedValues)({
          data: properties.bandwidthType,
          allowedValues: ["BandwidthPackage","DataTransfer"],
        }));
    }
    errors.collect(ros.propertyValidator('bandwidthType', ros.validateString)(properties.bandwidthType));
    if(properties.bandwidth && (typeof properties.bandwidth) !== 'object') {
        errors.collect(ros.propertyValidator('bandwidth', ros.validateRange)({
            data: properties.bandwidth,
            min: undefined,
            max: 100000000,
          }));
    }
    errors.collect(ros.propertyValidator('bandwidth', ros.validateNumber)(properties.bandwidth));
    errors.collect(ros.propertyValidator('cenId', ros.validateString)(properties.cenId));
    if(properties.transitRouterAttachmentName && (Array.isArray(properties.transitRouterAttachmentName) || (typeof properties.transitRouterAttachmentName) === 'string')) {
        errors.collect(ros.propertyValidator('transitRouterAttachmentName', ros.validateLength)({
            data: properties.transitRouterAttachmentName.length,
            min: undefined,
            max: 128,
          }));
    }
    errors.collect(ros.propertyValidator('transitRouterAttachmentName', ros.validateString)(properties.transitRouterAttachmentName));
    errors.collect(ros.propertyValidator('peerTransitRouterId', ros.requiredValidator)(properties.peerTransitRouterId));
    errors.collect(ros.propertyValidator('peerTransitRouterId', ros.validateString)(properties.peerTransitRouterId));
    if(properties.defaultLinkType && (typeof properties.defaultLinkType) !== 'object') {
        errors.collect(ros.propertyValidator('defaultLinkType', ros.validateAllowedValues)({
          data: properties.defaultLinkType,
          allowedValues: ["Platinum","Gold"],
        }));
    }
    errors.collect(ros.propertyValidator('defaultLinkType', ros.validateString)(properties.defaultLinkType));
    errors.collect(ros.propertyValidator('cenBandwidthPackageId', ros.validateString)(properties.cenBandwidthPackageId));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: 1,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosTransitRouterPeerAttachment_TagsPropertyValidator))(properties.tags));
    if(properties.transitRouterAttachmentDescription && (Array.isArray(properties.transitRouterAttachmentDescription) || (typeof properties.transitRouterAttachmentDescription) === 'string')) {
        errors.collect(ros.propertyValidator('transitRouterAttachmentDescription', ros.validateLength)({
            data: properties.transitRouterAttachmentDescription.length,
            min: undefined,
            max: 256,
          }));
    }
    errors.collect(ros.propertyValidator('transitRouterAttachmentDescription', ros.validateString)(properties.transitRouterAttachmentDescription));
    errors.collect(ros.propertyValidator('transitRouterId', ros.validateString)(properties.transitRouterId));
    errors.collect(ros.propertyValidator('peerTransitRouterRegionId', ros.validateString)(properties.peerTransitRouterRegionId));
    return errors.wrap('supplied properties not correct for "RosTransitRouterPeerAttachmentProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CEN::TransitRouterPeerAttachment` resource
 *
 * @param properties - the TypeScript properties of a `RosTransitRouterPeerAttachmentProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CEN::TransitRouterPeerAttachment` resource.
 */
// @ts-ignore TS6133
function rosTransitRouterPeerAttachmentPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosTransitRouterPeerAttachmentPropsValidator(properties).assertSuccess();
    }
    return {
      'PeerTransitRouterId': ros.stringToRosTemplate(properties.peerTransitRouterId),
      'AutoPublishRouteEnabled': ros.booleanToRosTemplate(properties.autoPublishRouteEnabled),
      'Bandwidth': ros.numberToRosTemplate(properties.bandwidth),
      'BandwidthType': ros.stringToRosTemplate(properties.bandwidthType),
      'CenBandwidthPackageId': ros.stringToRosTemplate(properties.cenBandwidthPackageId),
      'CenId': ros.stringToRosTemplate(properties.cenId),
      'DefaultLinkType': ros.stringToRosTemplate(properties.defaultLinkType),
      'PeerTransitRouterRegionId': ros.stringToRosTemplate(properties.peerTransitRouterRegionId),
      'Tags': ros.listMapper(rosTransitRouterPeerAttachmentTagsPropertyToRosTemplate)(properties.tags),
      'TransitRouterAttachmentDescription': ros.stringToRosTemplate(properties.transitRouterAttachmentDescription),
      'TransitRouterAttachmentName': ros.stringToRosTemplate(properties.transitRouterAttachmentName),
      'TransitRouterId': ros.stringToRosTemplate(properties.transitRouterId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CEN::TransitRouterPeerAttachment`, which is used to create a cross-region connection for an Enterprise Edition transit router.
 * @Note This class does not contain additional functions, so it is recommended to use the `TransitRouterPeerAttachment` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitrouterpeerattachment
 */
export class RosTransitRouterPeerAttachment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CEN::TransitRouterPeerAttachment";

    /**
     * @Attribute TransitRouterAttachmentId: Cross-region connection ID.
     */
    public readonly attrTransitRouterAttachmentId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property peerTransitRouterId: Peer forwarding router instance ID.
     */
    public peerTransitRouterId: string | ros.IResolvable;

    /**
     * @Property autoPublishRouteEnabled: Whether to make the enterprise version forwarding router automatically publish routes across regions to the peer region.
     * false (default): No.
     * true: Yes.
     */
    public autoPublishRouteEnabled: boolean | ros.IResolvable | undefined;

    /**
     * @Property bandwidth: The bandwidth value for cross-region connections.Unit: Mbps.
     * When the BandwidthType value is BandwidthPackage, this parameter represents the bandwidth value that can be used by cross-region connections.
     * When the BandwidthType value is DataTransfer, this parameter represents the speed limit bandwidth value for cross-region connections.
     */
    public bandwidth: number | ros.IResolvable | undefined;

    /**
     * @Property bandwidthType: The bandwidth allocation method for cross-regional connections.Value:
     * BandwidthPackage: Allocate bandwidth from bandwidth packets.
     * DataTransfer: Do not allocate bandwidth for cross-region connections, and is billed based on usage traffic.
     */
    public bandwidthType: string | ros.IResolvable | undefined;

    /**
     * @Property cenBandwidthPackageId: The bandwidth packet ID to bind to across regions.
     * Note When the value of BandwidthType is DataTransfer, this item is not required.
     */
    public cenBandwidthPackageId: string | ros.IResolvable | undefined;

    /**
     * @Property cenId: Cloud Enterprise Network Instance ID.
     */
    public cenId: string | ros.IResolvable | undefined;

    /**
     * @Property defaultLinkType: Default link type.
     * Optional values are Platinum, Gold, and default to Gold.
     * And it can only be configured as Platinum (Platinum) when the bandwidth allocation method is billed by traffic.
     */
    public defaultLinkType: string | ros.IResolvable | undefined;

    /**
     * @Property peerTransitRouterRegionId: The region ID to which the peer forwarding router instance belongs.
     */
    public peerTransitRouterRegionId: string | ros.IResolvable | undefined;

    /**
     * @Property tags: The list of tags in the form of key\/value pairs. You can define a maximum of 20 tags.
     */
    public tags: RosTransitRouterPeerAttachment.TagsProperty[] | undefined;

    /**
     * @Property transitRouterAttachmentDescription: Description information for cross-region connections.
     * The description can be empty or has a length of 1 to 256 characters and cannot start with http:\/\/ or https:\/\/.
     */
    public transitRouterAttachmentDescription: string | ros.IResolvable | undefined;

    /**
     * @Property transitRouterAttachmentName: The name of the cross-region connection.
     * The name can be empty or has a length of 1 to 128 characters, and cannot start with http:\/\/ or https:\/\/.
     */
    public transitRouterAttachmentName: string | ros.IResolvable | undefined;

    /**
     * @Property transitRouterId: Local Enterprise Edition forwarding router instance ID.
     */
    public transitRouterId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTransitRouterPeerAttachmentProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosTransitRouterPeerAttachment.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrTransitRouterAttachmentId = this.getAtt('TransitRouterAttachmentId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.peerTransitRouterId = props.peerTransitRouterId;
        this.autoPublishRouteEnabled = props.autoPublishRouteEnabled;
        this.bandwidth = props.bandwidth;
        this.bandwidthType = props.bandwidthType;
        this.cenBandwidthPackageId = props.cenBandwidthPackageId;
        this.cenId = props.cenId;
        this.defaultLinkType = props.defaultLinkType;
        this.peerTransitRouterRegionId = props.peerTransitRouterRegionId;
        this.tags = props.tags;
        this.transitRouterAttachmentDescription = props.transitRouterAttachmentDescription;
        this.transitRouterAttachmentName = props.transitRouterAttachmentName;
        this.transitRouterId = props.transitRouterId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            peerTransitRouterId: this.peerTransitRouterId,
            autoPublishRouteEnabled: this.autoPublishRouteEnabled,
            bandwidth: this.bandwidth,
            bandwidthType: this.bandwidthType,
            cenBandwidthPackageId: this.cenBandwidthPackageId,
            cenId: this.cenId,
            defaultLinkType: this.defaultLinkType,
            peerTransitRouterRegionId: this.peerTransitRouterRegionId,
            tags: this.tags,
            transitRouterAttachmentDescription: this.transitRouterAttachmentDescription,
            transitRouterAttachmentName: this.transitRouterAttachmentName,
            transitRouterId: this.transitRouterId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosTransitRouterPeerAttachmentPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosTransitRouterPeerAttachment {
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
function RosTransitRouterPeerAttachment_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CEN::TransitRouterPeerAttachment.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CEN::TransitRouterPeerAttachment.Tags` resource.
 */
// @ts-ignore TS6133
function rosTransitRouterPeerAttachmentTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosTransitRouterPeerAttachment_TagsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `RosTransitRouterRouteEntry`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitrouterrouteentry
 */
export interface RosTransitRouterRouteEntryProps {

    /**
     * @Property transitRouterRouteEntryDestinationCidrBlock: TransitRouterRouteEntryDestinationCidrBlock
     */
    readonly transitRouterRouteEntryDestinationCidrBlock: string | ros.IResolvable;

    /**
     * @Property transitRouterRouteEntryNextHopType: TransitRouterRouteEntryNextHopType
     */
    readonly transitRouterRouteEntryNextHopType: string | ros.IResolvable;

    /**
     * @Property transitRouterRouteTableId: TransitRouterRouteTableId
     */
    readonly transitRouterRouteTableId: string | ros.IResolvable;

    /**
     * @Property transitRouterRouteEntryDescription: TransitRouterRouteEntryDescription
     */
    readonly transitRouterRouteEntryDescription?: string | ros.IResolvable;

    /**
     * @Property transitRouterRouteEntryName: TransitRouterRouteEntryName
     */
    readonly transitRouterRouteEntryName?: string | ros.IResolvable;

    /**
     * @Property transitRouterRouteEntryNextHopId: TransitRouterRouteEntryNextHopId
     */
    readonly transitRouterRouteEntryNextHopId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosTransitRouterRouteEntryProps`
 *
 * @param properties - the TypeScript properties of a `RosTransitRouterRouteEntryProps`
 *
 * @returns the result of the validation.
 */
function RosTransitRouterRouteEntryPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('transitRouterRouteTableId', ros.requiredValidator)(properties.transitRouterRouteTableId));
    errors.collect(ros.propertyValidator('transitRouterRouteTableId', ros.validateString)(properties.transitRouterRouteTableId));
    errors.collect(ros.propertyValidator('transitRouterRouteEntryDestinationCidrBlock', ros.requiredValidator)(properties.transitRouterRouteEntryDestinationCidrBlock));
    errors.collect(ros.propertyValidator('transitRouterRouteEntryDestinationCidrBlock', ros.validateString)(properties.transitRouterRouteEntryDestinationCidrBlock));
    errors.collect(ros.propertyValidator('transitRouterRouteEntryNextHopId', ros.validateString)(properties.transitRouterRouteEntryNextHopId));
    errors.collect(ros.propertyValidator('transitRouterRouteEntryDescription', ros.validateString)(properties.transitRouterRouteEntryDescription));
    errors.collect(ros.propertyValidator('transitRouterRouteEntryNextHopType', ros.requiredValidator)(properties.transitRouterRouteEntryNextHopType));
    errors.collect(ros.propertyValidator('transitRouterRouteEntryNextHopType', ros.validateString)(properties.transitRouterRouteEntryNextHopType));
    errors.collect(ros.propertyValidator('transitRouterRouteEntryName', ros.validateString)(properties.transitRouterRouteEntryName));
    return errors.wrap('supplied properties not correct for "RosTransitRouterRouteEntryProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CEN::TransitRouterRouteEntry` resource
 *
 * @param properties - the TypeScript properties of a `RosTransitRouterRouteEntryProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CEN::TransitRouterRouteEntry` resource.
 */
// @ts-ignore TS6133
function rosTransitRouterRouteEntryPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosTransitRouterRouteEntryPropsValidator(properties).assertSuccess();
    }
    return {
      'TransitRouterRouteEntryDestinationCidrBlock': ros.stringToRosTemplate(properties.transitRouterRouteEntryDestinationCidrBlock),
      'TransitRouterRouteEntryNextHopType': ros.stringToRosTemplate(properties.transitRouterRouteEntryNextHopType),
      'TransitRouterRouteTableId': ros.stringToRosTemplate(properties.transitRouterRouteTableId),
      'TransitRouterRouteEntryDescription': ros.stringToRosTemplate(properties.transitRouterRouteEntryDescription),
      'TransitRouterRouteEntryName': ros.stringToRosTemplate(properties.transitRouterRouteEntryName),
      'TransitRouterRouteEntryNextHopId': ros.stringToRosTemplate(properties.transitRouterRouteEntryNextHopId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CEN::TransitRouterRouteEntry`, which is used to add routes to a route table of an Enterprise Edition transit router.
 * @Note This class does not contain additional functions, so it is recommended to use the `TransitRouterRouteEntry` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitrouterrouteentry
 */
export class RosTransitRouterRouteEntry extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CEN::TransitRouterRouteEntry";

    /**
     * @Attribute TransitRouterRouteEntryDescription: TransitRouterRouteEntryDescription
     */
    public readonly attrTransitRouterRouteEntryDescription: ros.IResolvable;

    /**
     * @Attribute TransitRouterRouteEntryDestinationCidrBlock: TransitRouterRouteEntryDestinationCidrBlock
     */
    public readonly attrTransitRouterRouteEntryDestinationCidrBlock: ros.IResolvable;

    /**
     * @Attribute TransitRouterRouteEntryId: The first ID of the resource
     */
    public readonly attrTransitRouterRouteEntryId: ros.IResolvable;

    /**
     * @Attribute TransitRouterRouteEntryName: TransitRouterRouteEntryName
     */
    public readonly attrTransitRouterRouteEntryName: ros.IResolvable;

    /**
     * @Attribute TransitRouterRouteEntryNextHopId: TransitRouterRouteEntryNextHopId
     */
    public readonly attrTransitRouterRouteEntryNextHopId: ros.IResolvable;

    /**
     * @Attribute TransitRouterRouteEntryNextHopType: TransitRouterRouteEntryNextHopType
     */
    public readonly attrTransitRouterRouteEntryNextHopType: ros.IResolvable;

    /**
     * @Attribute TransitRouterRouteEntryType: TransitRouterRouteEntryType
     */
    public readonly attrTransitRouterRouteEntryType: ros.IResolvable;

    /**
     * @Attribute TransitRouterRouteTableId: TransitRouterRouteTableId
     */
    public readonly attrTransitRouterRouteTableId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property transitRouterRouteEntryDestinationCidrBlock: TransitRouterRouteEntryDestinationCidrBlock
     */
    public transitRouterRouteEntryDestinationCidrBlock: string | ros.IResolvable;

    /**
     * @Property transitRouterRouteEntryNextHopType: TransitRouterRouteEntryNextHopType
     */
    public transitRouterRouteEntryNextHopType: string | ros.IResolvable;

    /**
     * @Property transitRouterRouteTableId: TransitRouterRouteTableId
     */
    public transitRouterRouteTableId: string | ros.IResolvable;

    /**
     * @Property transitRouterRouteEntryDescription: TransitRouterRouteEntryDescription
     */
    public transitRouterRouteEntryDescription: string | ros.IResolvable | undefined;

    /**
     * @Property transitRouterRouteEntryName: TransitRouterRouteEntryName
     */
    public transitRouterRouteEntryName: string | ros.IResolvable | undefined;

    /**
     * @Property transitRouterRouteEntryNextHopId: TransitRouterRouteEntryNextHopId
     */
    public transitRouterRouteEntryNextHopId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTransitRouterRouteEntryProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosTransitRouterRouteEntry.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrTransitRouterRouteEntryDescription = this.getAtt('TransitRouterRouteEntryDescription');
        this.attrTransitRouterRouteEntryDestinationCidrBlock = this.getAtt('TransitRouterRouteEntryDestinationCidrBlock');
        this.attrTransitRouterRouteEntryId = this.getAtt('TransitRouterRouteEntryId');
        this.attrTransitRouterRouteEntryName = this.getAtt('TransitRouterRouteEntryName');
        this.attrTransitRouterRouteEntryNextHopId = this.getAtt('TransitRouterRouteEntryNextHopId');
        this.attrTransitRouterRouteEntryNextHopType = this.getAtt('TransitRouterRouteEntryNextHopType');
        this.attrTransitRouterRouteEntryType = this.getAtt('TransitRouterRouteEntryType');
        this.attrTransitRouterRouteTableId = this.getAtt('TransitRouterRouteTableId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.transitRouterRouteEntryDestinationCidrBlock = props.transitRouterRouteEntryDestinationCidrBlock;
        this.transitRouterRouteEntryNextHopType = props.transitRouterRouteEntryNextHopType;
        this.transitRouterRouteTableId = props.transitRouterRouteTableId;
        this.transitRouterRouteEntryDescription = props.transitRouterRouteEntryDescription;
        this.transitRouterRouteEntryName = props.transitRouterRouteEntryName;
        this.transitRouterRouteEntryNextHopId = props.transitRouterRouteEntryNextHopId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            transitRouterRouteEntryDestinationCidrBlock: this.transitRouterRouteEntryDestinationCidrBlock,
            transitRouterRouteEntryNextHopType: this.transitRouterRouteEntryNextHopType,
            transitRouterRouteTableId: this.transitRouterRouteTableId,
            transitRouterRouteEntryDescription: this.transitRouterRouteEntryDescription,
            transitRouterRouteEntryName: this.transitRouterRouteEntryName,
            transitRouterRouteEntryNextHopId: this.transitRouterRouteEntryNextHopId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosTransitRouterRouteEntryPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosTransitRouterRouteTable`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitrouterroutetable
 */
export interface RosTransitRouterRouteTableProps {

    /**
     * @Property transitRouterId: TransitRouterId
     */
    readonly transitRouterId: string | ros.IResolvable;

    /**
     * @Property transitRouterRouteTableDescription: TransitRouterRouteTableDescription
     */
    readonly transitRouterRouteTableDescription?: string | ros.IResolvable;

    /**
     * @Property transitRouterRouteTableName: TransitRouterRouteTableName
     */
    readonly transitRouterRouteTableName?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosTransitRouterRouteTableProps`
 *
 * @param properties - the TypeScript properties of a `RosTransitRouterRouteTableProps`
 *
 * @returns the result of the validation.
 */
function RosTransitRouterRouteTablePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('transitRouterRouteTableDescription', ros.validateString)(properties.transitRouterRouteTableDescription));
    errors.collect(ros.propertyValidator('transitRouterRouteTableName', ros.validateString)(properties.transitRouterRouteTableName));
    errors.collect(ros.propertyValidator('transitRouterId', ros.requiredValidator)(properties.transitRouterId));
    errors.collect(ros.propertyValidator('transitRouterId', ros.validateString)(properties.transitRouterId));
    return errors.wrap('supplied properties not correct for "RosTransitRouterRouteTableProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CEN::TransitRouterRouteTable` resource
 *
 * @param properties - the TypeScript properties of a `RosTransitRouterRouteTableProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CEN::TransitRouterRouteTable` resource.
 */
// @ts-ignore TS6133
function rosTransitRouterRouteTablePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosTransitRouterRouteTablePropsValidator(properties).assertSuccess();
    }
    return {
      'TransitRouterId': ros.stringToRosTemplate(properties.transitRouterId),
      'TransitRouterRouteTableDescription': ros.stringToRosTemplate(properties.transitRouterRouteTableDescription),
      'TransitRouterRouteTableName': ros.stringToRosTemplate(properties.transitRouterRouteTableName),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CEN::TransitRouterRouteTable`, which is used to create a custom route table for an Enterprise Edition transit router.
 * @Note This class does not contain additional functions, so it is recommended to use the `TransitRouterRouteTable` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitrouterroutetable
 */
export class RosTransitRouterRouteTable extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CEN::TransitRouterRouteTable";

    /**
     * @Attribute ClientToken: ClientToken
     */
    public readonly attrClientToken: ros.IResolvable;

    /**
     * @Attribute TransitRouterId: TransitRouterId
     */
    public readonly attrTransitRouterId: ros.IResolvable;

    /**
     * @Attribute TransitRouterRouteTableDescription: TransitRouterRouteTableDescription
     */
    public readonly attrTransitRouterRouteTableDescription: ros.IResolvable;

    /**
     * @Attribute TransitRouterRouteTableId: TransitRouterRouteTableId
     */
    public readonly attrTransitRouterRouteTableId: ros.IResolvable;

    /**
     * @Attribute TransitRouterRouteTableName: TransitRouterRouteTableName
     */
    public readonly attrTransitRouterRouteTableName: ros.IResolvable;

    /**
     * @Attribute TransitRouterRouteTableType: TransitRouterRouteTableType
     */
    public readonly attrTransitRouterRouteTableType: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property transitRouterId: TransitRouterId
     */
    public transitRouterId: string | ros.IResolvable;

    /**
     * @Property transitRouterRouteTableDescription: TransitRouterRouteTableDescription
     */
    public transitRouterRouteTableDescription: string | ros.IResolvable | undefined;

    /**
     * @Property transitRouterRouteTableName: TransitRouterRouteTableName
     */
    public transitRouterRouteTableName: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTransitRouterRouteTableProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosTransitRouterRouteTable.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrClientToken = this.getAtt('ClientToken');
        this.attrTransitRouterId = this.getAtt('TransitRouterId');
        this.attrTransitRouterRouteTableDescription = this.getAtt('TransitRouterRouteTableDescription');
        this.attrTransitRouterRouteTableId = this.getAtt('TransitRouterRouteTableId');
        this.attrTransitRouterRouteTableName = this.getAtt('TransitRouterRouteTableName');
        this.attrTransitRouterRouteTableType = this.getAtt('TransitRouterRouteTableType');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.transitRouterId = props.transitRouterId;
        this.transitRouterRouteTableDescription = props.transitRouterRouteTableDescription;
        this.transitRouterRouteTableName = props.transitRouterRouteTableName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            transitRouterId: this.transitRouterId,
            transitRouterRouteTableDescription: this.transitRouterRouteTableDescription,
            transitRouterRouteTableName: this.transitRouterRouteTableName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosTransitRouterRouteTablePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosTransitRouterRouteTableAssociation`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitrouterroutetableassociation
 */
export interface RosTransitRouterRouteTableAssociationProps {

    /**
     * @Property transitRouterAttachmentId: TransitRouterAttachmentId
     */
    readonly transitRouterAttachmentId: string | ros.IResolvable;

    /**
     * @Property transitRouterRouteTableId: TransitRouterRouteTableId
     */
    readonly transitRouterRouteTableId: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosTransitRouterRouteTableAssociationProps`
 *
 * @param properties - the TypeScript properties of a `RosTransitRouterRouteTableAssociationProps`
 *
 * @returns the result of the validation.
 */
function RosTransitRouterRouteTableAssociationPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('transitRouterRouteTableId', ros.requiredValidator)(properties.transitRouterRouteTableId));
    errors.collect(ros.propertyValidator('transitRouterRouteTableId', ros.validateString)(properties.transitRouterRouteTableId));
    errors.collect(ros.propertyValidator('transitRouterAttachmentId', ros.requiredValidator)(properties.transitRouterAttachmentId));
    errors.collect(ros.propertyValidator('transitRouterAttachmentId', ros.validateString)(properties.transitRouterAttachmentId));
    return errors.wrap('supplied properties not correct for "RosTransitRouterRouteTableAssociationProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CEN::TransitRouterRouteTableAssociation` resource
 *
 * @param properties - the TypeScript properties of a `RosTransitRouterRouteTableAssociationProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CEN::TransitRouterRouteTableAssociation` resource.
 */
// @ts-ignore TS6133
function rosTransitRouterRouteTableAssociationPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosTransitRouterRouteTableAssociationPropsValidator(properties).assertSuccess();
    }
    return {
      'TransitRouterAttachmentId': ros.stringToRosTemplate(properties.transitRouterAttachmentId),
      'TransitRouterRouteTableId': ros.stringToRosTemplate(properties.transitRouterRouteTableId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CEN::TransitRouterRouteTableAssociation`, which is used to create an associated forwarding correlation.
 * @Note This class does not contain additional functions, so it is recommended to use the `TransitRouterRouteTableAssociation` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitrouterroutetableassociation
 */
export class RosTransitRouterRouteTableAssociation extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CEN::TransitRouterRouteTableAssociation";

    /**
     * @Attribute ResourceId: ResourceId
     */
    public readonly attrResourceId: ros.IResolvable;

    /**
     * @Attribute ResourceType: ResourceType
     */
    public readonly attrResourceType: ros.IResolvable;

    /**
     * @Attribute TransitRouterAttachmentId: TransitRouterAttachmentId
     */
    public readonly attrTransitRouterAttachmentId: ros.IResolvable;

    /**
     * @Attribute TransitRouterRouteTableId: TransitRouterRouteTableId
     */
    public readonly attrTransitRouterRouteTableId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property transitRouterAttachmentId: TransitRouterAttachmentId
     */
    public transitRouterAttachmentId: string | ros.IResolvable;

    /**
     * @Property transitRouterRouteTableId: TransitRouterRouteTableId
     */
    public transitRouterRouteTableId: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTransitRouterRouteTableAssociationProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosTransitRouterRouteTableAssociation.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrResourceId = this.getAtt('ResourceId');
        this.attrResourceType = this.getAtt('ResourceType');
        this.attrTransitRouterAttachmentId = this.getAtt('TransitRouterAttachmentId');
        this.attrTransitRouterRouteTableId = this.getAtt('TransitRouterRouteTableId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.transitRouterAttachmentId = props.transitRouterAttachmentId;
        this.transitRouterRouteTableId = props.transitRouterRouteTableId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            transitRouterAttachmentId: this.transitRouterAttachmentId,
            transitRouterRouteTableId: this.transitRouterRouteTableId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosTransitRouterRouteTableAssociationPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosTransitRouterRouteTablePropagation`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitrouterroutetablepropagation
 */
export interface RosTransitRouterRouteTablePropagationProps {

    /**
     * @Property transitRouterAttachmentId: TransitRouterAttachmentId
     */
    readonly transitRouterAttachmentId: string | ros.IResolvable;

    /**
     * @Property transitRouterRouteTableId: TransitRouterRouteTableId
     */
    readonly transitRouterRouteTableId: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosTransitRouterRouteTablePropagationProps`
 *
 * @param properties - the TypeScript properties of a `RosTransitRouterRouteTablePropagationProps`
 *
 * @returns the result of the validation.
 */
function RosTransitRouterRouteTablePropagationPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('transitRouterRouteTableId', ros.requiredValidator)(properties.transitRouterRouteTableId));
    errors.collect(ros.propertyValidator('transitRouterRouteTableId', ros.validateString)(properties.transitRouterRouteTableId));
    errors.collect(ros.propertyValidator('transitRouterAttachmentId', ros.requiredValidator)(properties.transitRouterAttachmentId));
    errors.collect(ros.propertyValidator('transitRouterAttachmentId', ros.validateString)(properties.transitRouterAttachmentId));
    return errors.wrap('supplied properties not correct for "RosTransitRouterRouteTablePropagationProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CEN::TransitRouterRouteTablePropagation` resource
 *
 * @param properties - the TypeScript properties of a `RosTransitRouterRouteTablePropagationProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CEN::TransitRouterRouteTablePropagation` resource.
 */
// @ts-ignore TS6133
function rosTransitRouterRouteTablePropagationPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosTransitRouterRouteTablePropagationPropsValidator(properties).assertSuccess();
    }
    return {
      'TransitRouterAttachmentId': ros.stringToRosTemplate(properties.transitRouterAttachmentId),
      'TransitRouterRouteTableId': ros.stringToRosTemplate(properties.transitRouterRouteTableId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CEN::TransitRouterRouteTablePropagation`, which is used to create a route learning correlation.
 * @Note This class does not contain additional functions, so it is recommended to use the `TransitRouterRouteTablePropagation` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitrouterroutetablepropagation
 */
export class RosTransitRouterRouteTablePropagation extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CEN::TransitRouterRouteTablePropagation";

    /**
     * @Attribute ResourceId: ResourceId
     */
    public readonly attrResourceId: ros.IResolvable;

    /**
     * @Attribute ResourceType: ResourceType
     */
    public readonly attrResourceType: ros.IResolvable;

    /**
     * @Attribute TransitRouterAttachmentId: TransitRouterAttachmentId
     */
    public readonly attrTransitRouterAttachmentId: ros.IResolvable;

    /**
     * @Attribute TransitRouterRouteTableId: TransitRouterRouteTableId
     */
    public readonly attrTransitRouterRouteTableId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property transitRouterAttachmentId: TransitRouterAttachmentId
     */
    public transitRouterAttachmentId: string | ros.IResolvable;

    /**
     * @Property transitRouterRouteTableId: TransitRouterRouteTableId
     */
    public transitRouterRouteTableId: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTransitRouterRouteTablePropagationProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosTransitRouterRouteTablePropagation.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrResourceId = this.getAtt('ResourceId');
        this.attrResourceType = this.getAtt('ResourceType');
        this.attrTransitRouterAttachmentId = this.getAtt('TransitRouterAttachmentId');
        this.attrTransitRouterRouteTableId = this.getAtt('TransitRouterRouteTableId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.transitRouterAttachmentId = props.transitRouterAttachmentId;
        this.transitRouterRouteTableId = props.transitRouterRouteTableId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            transitRouterAttachmentId: this.transitRouterAttachmentId,
            transitRouterRouteTableId: this.transitRouterRouteTableId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosTransitRouterRouteTablePropagationPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosTransitRouterVbrAttachment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitroutervbrattachment
 */
export interface RosTransitRouterVbrAttachmentProps {

    /**
     * @Property vbrId: VbrId
     */
    readonly vbrId: string | ros.IResolvable;

    /**
     * @Property autoPublishRouteEnabled: AutoPublishRouteEnabled
     */
    readonly autoPublishRouteEnabled?: boolean | ros.IResolvable;

    /**
     * @Property cenId: CenId
     */
    readonly cenId?: string | ros.IResolvable;

    /**
     * @Property transitRouterAttachmentDescription: TransitRouterAttachmentDescription
     */
    readonly transitRouterAttachmentDescription?: string | ros.IResolvable;

    /**
     * @Property transitRouterAttachmentName: TransitRouterAttachmentName
     */
    readonly transitRouterAttachmentName?: string | ros.IResolvable;

    /**
     * @Property transitRouterId: TransitRouterId
     */
    readonly transitRouterId?: string | ros.IResolvable;

    /**
     * @Property vbrOwnerId: VbrOwnerId
     */
    readonly vbrOwnerId?: number | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosTransitRouterVbrAttachmentProps`
 *
 * @param properties - the TypeScript properties of a `RosTransitRouterVbrAttachmentProps`
 *
 * @returns the result of the validation.
 */
function RosTransitRouterVbrAttachmentPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('autoPublishRouteEnabled', ros.validateBoolean)(properties.autoPublishRouteEnabled));
    errors.collect(ros.propertyValidator('vbrOwnerId', ros.validateNumber)(properties.vbrOwnerId));
    errors.collect(ros.propertyValidator('cenId', ros.validateString)(properties.cenId));
    errors.collect(ros.propertyValidator('transitRouterAttachmentName', ros.validateString)(properties.transitRouterAttachmentName));
    errors.collect(ros.propertyValidator('vbrId', ros.requiredValidator)(properties.vbrId));
    errors.collect(ros.propertyValidator('vbrId', ros.validateString)(properties.vbrId));
    errors.collect(ros.propertyValidator('transitRouterAttachmentDescription', ros.validateString)(properties.transitRouterAttachmentDescription));
    errors.collect(ros.propertyValidator('transitRouterId', ros.validateString)(properties.transitRouterId));
    return errors.wrap('supplied properties not correct for "RosTransitRouterVbrAttachmentProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CEN::TransitRouterVbrAttachment` resource
 *
 * @param properties - the TypeScript properties of a `RosTransitRouterVbrAttachmentProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CEN::TransitRouterVbrAttachment` resource.
 */
// @ts-ignore TS6133
function rosTransitRouterVbrAttachmentPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosTransitRouterVbrAttachmentPropsValidator(properties).assertSuccess();
    }
    return {
      'VbrId': ros.stringToRosTemplate(properties.vbrId),
      'AutoPublishRouteEnabled': ros.booleanToRosTemplate(properties.autoPublishRouteEnabled),
      'CenId': ros.stringToRosTemplate(properties.cenId),
      'TransitRouterAttachmentDescription': ros.stringToRosTemplate(properties.transitRouterAttachmentDescription),
      'TransitRouterAttachmentName': ros.stringToRosTemplate(properties.transitRouterAttachmentName),
      'TransitRouterId': ros.stringToRosTemplate(properties.transitRouterId),
      'VbrOwnerId': ros.numberToRosTemplate(properties.vbrOwnerId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CEN::TransitRouterVbrAttachment`, which is used to create a virtual border router (VBR) connection on an Enterprise Edition transit router.
 * @Note This class does not contain additional functions, so it is recommended to use the `TransitRouterVbrAttachment` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitroutervbrattachment
 */
export class RosTransitRouterVbrAttachment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CEN::TransitRouterVbrAttachment";

    /**
     * @Attribute AutoPublishRouteEnabled: AutoPublishRouteEnabled
     */
    public readonly attrAutoPublishRouteEnabled: ros.IResolvable;

    /**
     * @Attribute CenId: CenId
     */
    public readonly attrCenId: ros.IResolvable;

    /**
     * @Attribute ClientToken: ClientToken
     */
    public readonly attrClientToken: ros.IResolvable;

    /**
     * @Attribute ResourceType: ResourceType
     */
    public readonly attrResourceType: ros.IResolvable;

    /**
     * @Attribute TransitRouterAttachmentDescription: TransitRouterAttachmentDescription
     */
    public readonly attrTransitRouterAttachmentDescription: ros.IResolvable;

    /**
     * @Attribute TransitRouterAttachmentId: The first ID of the resource
     */
    public readonly attrTransitRouterAttachmentId: ros.IResolvable;

    /**
     * @Attribute TransitRouterAttachmentName: TransitRouterAttachmentName
     */
    public readonly attrTransitRouterAttachmentName: ros.IResolvable;

    /**
     * @Attribute TransitRouterId: TransitRouterId
     */
    public readonly attrTransitRouterId: ros.IResolvable;

    /**
     * @Attribute VbrId: VbrId
     */
    public readonly attrVbrId: ros.IResolvable;

    /**
     * @Attribute VbrOwnerId: VbrOwnerId
     */
    public readonly attrVbrOwnerId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property vbrId: VbrId
     */
    public vbrId: string | ros.IResolvable;

    /**
     * @Property autoPublishRouteEnabled: AutoPublishRouteEnabled
     */
    public autoPublishRouteEnabled: boolean | ros.IResolvable | undefined;

    /**
     * @Property cenId: CenId
     */
    public cenId: string | ros.IResolvable | undefined;

    /**
     * @Property transitRouterAttachmentDescription: TransitRouterAttachmentDescription
     */
    public transitRouterAttachmentDescription: string | ros.IResolvable | undefined;

    /**
     * @Property transitRouterAttachmentName: TransitRouterAttachmentName
     */
    public transitRouterAttachmentName: string | ros.IResolvable | undefined;

    /**
     * @Property transitRouterId: TransitRouterId
     */
    public transitRouterId: string | ros.IResolvable | undefined;

    /**
     * @Property vbrOwnerId: VbrOwnerId
     */
    public vbrOwnerId: number | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTransitRouterVbrAttachmentProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosTransitRouterVbrAttachment.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAutoPublishRouteEnabled = this.getAtt('AutoPublishRouteEnabled');
        this.attrCenId = this.getAtt('CenId');
        this.attrClientToken = this.getAtt('ClientToken');
        this.attrResourceType = this.getAtt('ResourceType');
        this.attrTransitRouterAttachmentDescription = this.getAtt('TransitRouterAttachmentDescription');
        this.attrTransitRouterAttachmentId = this.getAtt('TransitRouterAttachmentId');
        this.attrTransitRouterAttachmentName = this.getAtt('TransitRouterAttachmentName');
        this.attrTransitRouterId = this.getAtt('TransitRouterId');
        this.attrVbrId = this.getAtt('VbrId');
        this.attrVbrOwnerId = this.getAtt('VbrOwnerId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.vbrId = props.vbrId;
        this.autoPublishRouteEnabled = props.autoPublishRouteEnabled;
        this.cenId = props.cenId;
        this.transitRouterAttachmentDescription = props.transitRouterAttachmentDescription;
        this.transitRouterAttachmentName = props.transitRouterAttachmentName;
        this.transitRouterId = props.transitRouterId;
        this.vbrOwnerId = props.vbrOwnerId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            vbrId: this.vbrId,
            autoPublishRouteEnabled: this.autoPublishRouteEnabled,
            cenId: this.cenId,
            transitRouterAttachmentDescription: this.transitRouterAttachmentDescription,
            transitRouterAttachmentName: this.transitRouterAttachmentName,
            transitRouterId: this.transitRouterId,
            vbrOwnerId: this.vbrOwnerId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosTransitRouterVbrAttachmentPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosTransitRouterVpcAttachment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitroutervpcattachment
 */
export interface RosTransitRouterVpcAttachmentProps {

    /**
     * @Property vpcId: VpcId
     */
    readonly vpcId: string | ros.IResolvable;

    /**
     * @Property zoneMappings: ZoneMappingss
     */
    readonly zoneMappings: Array<RosTransitRouterVpcAttachment.ZoneMappingsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property autoCreateVpcRoute: undefined
     */
    readonly autoCreateVpcRoute?: boolean | ros.IResolvable;

    /**
     * @Property cenId: CenId
     */
    readonly cenId?: string | ros.IResolvable;

    /**
     * @Property chargeType:
     */
    readonly chargeType?: string | ros.IResolvable;

    /**
     * @Property deletionForce: Whether force delete related resources, like vpc route entry, route table association, route propagation.
     */
    readonly deletionForce?: boolean | ros.IResolvable;

    /**
     * @Property routeTableAssociationEnabled: undefined
     */
    readonly routeTableAssociationEnabled?: boolean | ros.IResolvable;

    /**
     * @Property routeTablePropagationEnabled: undefined
     */
    readonly routeTablePropagationEnabled?: boolean | ros.IResolvable;

    /**
     * @Property transitRouterAttachmentDescription: TransitRouterAttachmentDescription
     */
    readonly transitRouterAttachmentDescription?: string | ros.IResolvable;

    /**
     * @Property transitRouterAttachmentName: TransitRouterAttachmentName
     */
    readonly transitRouterAttachmentName?: string | ros.IResolvable;

    /**
     * @Property transitRouterId: TransitRouterId
     */
    readonly transitRouterId?: string | ros.IResolvable;

    /**
     * @Property vpcOwnerId: VpcOwnerId
     */
    readonly vpcOwnerId?: number | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosTransitRouterVpcAttachmentProps`
 *
 * @param properties - the TypeScript properties of a `RosTransitRouterVpcAttachmentProps`
 *
 * @returns the result of the validation.
 */
function RosTransitRouterVpcAttachmentPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('routeTableAssociationEnabled', ros.validateBoolean)(properties.routeTableAssociationEnabled));
    errors.collect(ros.propertyValidator('deletionForce', ros.validateBoolean)(properties.deletionForce));
    errors.collect(ros.propertyValidator('autoCreateVpcRoute', ros.validateBoolean)(properties.autoCreateVpcRoute));
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('chargeType', ros.validateString)(properties.chargeType));
    errors.collect(ros.propertyValidator('routeTablePropagationEnabled', ros.validateBoolean)(properties.routeTablePropagationEnabled));
    errors.collect(ros.propertyValidator('cenId', ros.validateString)(properties.cenId));
    errors.collect(ros.propertyValidator('transitRouterAttachmentName', ros.validateString)(properties.transitRouterAttachmentName));
    errors.collect(ros.propertyValidator('zoneMappings', ros.requiredValidator)(properties.zoneMappings));
    if(properties.zoneMappings && (Array.isArray(properties.zoneMappings) || (typeof properties.zoneMappings) === 'string')) {
        errors.collect(ros.propertyValidator('zoneMappings', ros.validateLength)({
            data: properties.zoneMappings.length,
            min: undefined,
            max: 3,
          }));
    }
    errors.collect(ros.propertyValidator('zoneMappings', ros.listValidator(RosTransitRouterVpcAttachment_ZoneMappingsPropertyValidator))(properties.zoneMappings));
    errors.collect(ros.propertyValidator('vpcOwnerId', ros.validateNumber)(properties.vpcOwnerId));
    errors.collect(ros.propertyValidator('transitRouterAttachmentDescription', ros.validateString)(properties.transitRouterAttachmentDescription));
    errors.collect(ros.propertyValidator('transitRouterId', ros.validateString)(properties.transitRouterId));
    return errors.wrap('supplied properties not correct for "RosTransitRouterVpcAttachmentProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CEN::TransitRouterVpcAttachment` resource
 *
 * @param properties - the TypeScript properties of a `RosTransitRouterVpcAttachmentProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CEN::TransitRouterVpcAttachment` resource.
 */
// @ts-ignore TS6133
function rosTransitRouterVpcAttachmentPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosTransitRouterVpcAttachmentPropsValidator(properties).assertSuccess();
    }
    return {
      'VpcId': ros.stringToRosTemplate(properties.vpcId),
      'ZoneMappings': ros.listMapper(rosTransitRouterVpcAttachmentZoneMappingsPropertyToRosTemplate)(properties.zoneMappings),
      'AutoCreateVpcRoute': ros.booleanToRosTemplate(properties.autoCreateVpcRoute),
      'CenId': ros.stringToRosTemplate(properties.cenId),
      'ChargeType': ros.stringToRosTemplate(properties.chargeType),
      'DeletionForce': ros.booleanToRosTemplate(properties.deletionForce),
      'RouteTableAssociationEnabled': ros.booleanToRosTemplate(properties.routeTableAssociationEnabled),
      'RouteTablePropagationEnabled': ros.booleanToRosTemplate(properties.routeTablePropagationEnabled),
      'TransitRouterAttachmentDescription': ros.stringToRosTemplate(properties.transitRouterAttachmentDescription),
      'TransitRouterAttachmentName': ros.stringToRosTemplate(properties.transitRouterAttachmentName),
      'TransitRouterId': ros.stringToRosTemplate(properties.transitRouterId),
      'VpcOwnerId': ros.numberToRosTemplate(properties.vpcOwnerId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CEN::TransitRouterVpcAttachment`, which is used to create a virtual private cloud (VPC) connection on an Enterprise Edition transit router.
 * @Note This class does not contain additional functions, so it is recommended to use the `TransitRouterVpcAttachment` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitroutervpcattachment
 */
export class RosTransitRouterVpcAttachment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CEN::TransitRouterVpcAttachment";

    /**
     * @Attribute CenId: CenId
     */
    public readonly attrCenId: ros.IResolvable;

    /**
     * @Attribute ClientToken: ClientToken
     */
    public readonly attrClientToken: ros.IResolvable;

    /**
     * @Attribute ResourceType: ResourceType
     */
    public readonly attrResourceType: ros.IResolvable;

    /**
     * @Attribute TransitRouterAttachmentDescription: TransitRouterAttachmentDescription
     */
    public readonly attrTransitRouterAttachmentDescription: ros.IResolvable;

    /**
     * @Attribute TransitRouterAttachmentId: The first ID of the resource
     */
    public readonly attrTransitRouterAttachmentId: ros.IResolvable;

    /**
     * @Attribute TransitRouterAttachmentName: TransitRouterAttachmentName
     */
    public readonly attrTransitRouterAttachmentName: ros.IResolvable;

    /**
     * @Attribute TransitRouterId: TransitRouterId
     */
    public readonly attrTransitRouterId: ros.IResolvable;

    /**
     * @Attribute VpcId: VpcId
     */
    public readonly attrVpcId: ros.IResolvable;

    /**
     * @Attribute VpcOwnerId: VpcOwnerId
     */
    public readonly attrVpcOwnerId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property vpcId: VpcId
     */
    public vpcId: string | ros.IResolvable;

    /**
     * @Property zoneMappings: ZoneMappingss
     */
    public zoneMappings: Array<RosTransitRouterVpcAttachment.ZoneMappingsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property autoCreateVpcRoute: undefined
     */
    public autoCreateVpcRoute: boolean | ros.IResolvable | undefined;

    /**
     * @Property cenId: CenId
     */
    public cenId: string | ros.IResolvable | undefined;

    /**
     * @Property chargeType:
     */
    public chargeType: string | ros.IResolvable | undefined;

    /**
     * @Property deletionForce: Whether force delete related resources, like vpc route entry, route table association, route propagation.
     */
    public deletionForce: boolean | ros.IResolvable | undefined;

    /**
     * @Property routeTableAssociationEnabled: undefined
     */
    public routeTableAssociationEnabled: boolean | ros.IResolvable | undefined;

    /**
     * @Property routeTablePropagationEnabled: undefined
     */
    public routeTablePropagationEnabled: boolean | ros.IResolvable | undefined;

    /**
     * @Property transitRouterAttachmentDescription: TransitRouterAttachmentDescription
     */
    public transitRouterAttachmentDescription: string | ros.IResolvable | undefined;

    /**
     * @Property transitRouterAttachmentName: TransitRouterAttachmentName
     */
    public transitRouterAttachmentName: string | ros.IResolvable | undefined;

    /**
     * @Property transitRouterId: TransitRouterId
     */
    public transitRouterId: string | ros.IResolvable | undefined;

    /**
     * @Property vpcOwnerId: VpcOwnerId
     */
    public vpcOwnerId: number | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTransitRouterVpcAttachmentProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosTransitRouterVpcAttachment.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCenId = this.getAtt('CenId');
        this.attrClientToken = this.getAtt('ClientToken');
        this.attrResourceType = this.getAtt('ResourceType');
        this.attrTransitRouterAttachmentDescription = this.getAtt('TransitRouterAttachmentDescription');
        this.attrTransitRouterAttachmentId = this.getAtt('TransitRouterAttachmentId');
        this.attrTransitRouterAttachmentName = this.getAtt('TransitRouterAttachmentName');
        this.attrTransitRouterId = this.getAtt('TransitRouterId');
        this.attrVpcId = this.getAtt('VpcId');
        this.attrVpcOwnerId = this.getAtt('VpcOwnerId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.vpcId = props.vpcId;
        this.zoneMappings = props.zoneMappings;
        this.autoCreateVpcRoute = props.autoCreateVpcRoute;
        this.cenId = props.cenId;
        this.chargeType = props.chargeType;
        this.deletionForce = props.deletionForce;
        this.routeTableAssociationEnabled = props.routeTableAssociationEnabled;
        this.routeTablePropagationEnabled = props.routeTablePropagationEnabled;
        this.transitRouterAttachmentDescription = props.transitRouterAttachmentDescription;
        this.transitRouterAttachmentName = props.transitRouterAttachmentName;
        this.transitRouterId = props.transitRouterId;
        this.vpcOwnerId = props.vpcOwnerId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            vpcId: this.vpcId,
            zoneMappings: this.zoneMappings,
            autoCreateVpcRoute: this.autoCreateVpcRoute,
            cenId: this.cenId,
            chargeType: this.chargeType,
            deletionForce: this.deletionForce,
            routeTableAssociationEnabled: this.routeTableAssociationEnabled,
            routeTablePropagationEnabled: this.routeTablePropagationEnabled,
            transitRouterAttachmentDescription: this.transitRouterAttachmentDescription,
            transitRouterAttachmentName: this.transitRouterAttachmentName,
            transitRouterId: this.transitRouterId,
            vpcOwnerId: this.vpcOwnerId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosTransitRouterVpcAttachmentPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosTransitRouterVpcAttachment {
    /**
     * @stability external
     */
    export interface ZoneMappingsProperty {
        /**
         * @Property zoneId: ZoneId
         */
        readonly zoneId: string | ros.IResolvable;
        /**
         * @Property vSwitchId: VSwitchId
         */
        readonly vSwitchId: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ZoneMappingsProperty`
 *
 * @param properties - the TypeScript properties of a `ZoneMappingsProperty`
 *
 * @returns the result of the validation.
 */
function RosTransitRouterVpcAttachment_ZoneMappingsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('zoneId', ros.requiredValidator)(properties.zoneId));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.requiredValidator)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    return errors.wrap('supplied properties not correct for "ZoneMappingsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CEN::TransitRouterVpcAttachment.ZoneMappings` resource
 *
 * @param properties - the TypeScript properties of a `ZoneMappingsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CEN::TransitRouterVpcAttachment.ZoneMappings` resource.
 */
// @ts-ignore TS6133
function rosTransitRouterVpcAttachmentZoneMappingsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosTransitRouterVpcAttachment_ZoneMappingsPropertyValidator(properties).assertSuccess();
    return {
      'ZoneId': ros.stringToRosTemplate(properties.zoneId),
      'VSwitchId': ros.stringToRosTemplate(properties.vSwitchId),
    };
}

/**
 * Properties for defining a `RosTransitRouterVpnAttachment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitroutervpnattachment
 */
export interface RosTransitRouterVpnAttachmentProps {

    /**
     * @Property vpnId: IPsec connection ID
     */
    readonly vpnId: string | ros.IResolvable;

    /**
     * @Property zoneId: Availability zone ID in the current region.
     */
    readonly zoneId: string | ros.IResolvable;

    /**
     * @Property autoPublishRouteEnabled: Whether to allow forwarding router instances to automatically publish route entries to IPsec connections. Default is true.
     */
    readonly autoPublishRouteEnabled?: boolean | ros.IResolvable;

    /**
     * @Property cenId: The ID of the CEN instance.
     */
    readonly cenId?: string | ros.IResolvable;

    /**
     * @Property deletionForce: Whether to forcefully delete the VPN connection.
     */
    readonly deletionForce?: boolean | ros.IResolvable;

    /**
     * @Property routeTableAssociationEnabled: Whether to enable route association and forwarding relationship.
     */
    readonly routeTableAssociationEnabled?: boolean | ros.IResolvable;

    /**
     * @Property routeTablePropagationEnabled: Whether to enable route learning relationships.
     */
    readonly routeTablePropagationEnabled?: boolean | ros.IResolvable;

    /**
     * @Property tags: Tags to attach to TransitRouterVpnAttachment. Max support 20 tags to add during create TransitRouterVpnAttachment. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosTransitRouterVpnAttachment.TagsProperty[];

    /**
     * @Property transitRouterAttachmentDescription: Description of the VPN connection.
     */
    readonly transitRouterAttachmentDescription?: string | ros.IResolvable;

    /**
     * @Property transitRouterAttachmentName: The name of the VPN connection.
     */
    readonly transitRouterAttachmentName?: string | ros.IResolvable;

    /**
     * @Property transitRouterId: Forwarding router instance ID
     */
    readonly transitRouterId?: string | ros.IResolvable;

    /**
     * @Property vpnOwnerId: Alibaba Cloud account (main account) ID to which the IPsec connection belongs.
     */
    readonly vpnOwnerId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosTransitRouterVpnAttachmentProps`
 *
 * @param properties - the TypeScript properties of a `RosTransitRouterVpnAttachmentProps`
 *
 * @returns the result of the validation.
 */
function RosTransitRouterVpnAttachmentPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('autoPublishRouteEnabled', ros.validateBoolean)(properties.autoPublishRouteEnabled));
    errors.collect(ros.propertyValidator('routeTableAssociationEnabled', ros.validateBoolean)(properties.routeTableAssociationEnabled));
    errors.collect(ros.propertyValidator('vpnOwnerId', ros.validateString)(properties.vpnOwnerId));
    errors.collect(ros.propertyValidator('deletionForce', ros.validateBoolean)(properties.deletionForce));
    errors.collect(ros.propertyValidator('zoneId', ros.requiredValidator)(properties.zoneId));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('routeTablePropagationEnabled', ros.validateBoolean)(properties.routeTablePropagationEnabled));
    errors.collect(ros.propertyValidator('cenId', ros.validateString)(properties.cenId));
    errors.collect(ros.propertyValidator('transitRouterAttachmentName', ros.validateString)(properties.transitRouterAttachmentName));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosTransitRouterVpnAttachment_TagsPropertyValidator))(properties.tags));
    errors.collect(ros.propertyValidator('transitRouterAttachmentDescription', ros.validateString)(properties.transitRouterAttachmentDescription));
    errors.collect(ros.propertyValidator('transitRouterId', ros.validateString)(properties.transitRouterId));
    errors.collect(ros.propertyValidator('vpnId', ros.requiredValidator)(properties.vpnId));
    errors.collect(ros.propertyValidator('vpnId', ros.validateString)(properties.vpnId));
    return errors.wrap('supplied properties not correct for "RosTransitRouterVpnAttachmentProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CEN::TransitRouterVpnAttachment` resource
 *
 * @param properties - the TypeScript properties of a `RosTransitRouterVpnAttachmentProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CEN::TransitRouterVpnAttachment` resource.
 */
// @ts-ignore TS6133
function rosTransitRouterVpnAttachmentPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosTransitRouterVpnAttachmentPropsValidator(properties).assertSuccess();
    }
    return {
      'VpnId': ros.stringToRosTemplate(properties.vpnId),
      'ZoneId': ros.stringToRosTemplate(properties.zoneId),
      'AutoPublishRouteEnabled': ros.booleanToRosTemplate(properties.autoPublishRouteEnabled),
      'CenId': ros.stringToRosTemplate(properties.cenId),
      'DeletionForce': ros.booleanToRosTemplate(properties.deletionForce),
      'RouteTableAssociationEnabled': ros.booleanToRosTemplate(properties.routeTableAssociationEnabled),
      'RouteTablePropagationEnabled': ros.booleanToRosTemplate(properties.routeTablePropagationEnabled),
      'Tags': ros.listMapper(rosTransitRouterVpnAttachmentTagsPropertyToRosTemplate)(properties.tags),
      'TransitRouterAttachmentDescription': ros.stringToRosTemplate(properties.transitRouterAttachmentDescription),
      'TransitRouterAttachmentName': ros.stringToRosTemplate(properties.transitRouterAttachmentName),
      'TransitRouterId': ros.stringToRosTemplate(properties.transitRouterId),
      'VpnOwnerId': ros.stringToRosTemplate(properties.vpnOwnerId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CEN::TransitRouterVpnAttachment`, which is used to create a VPN connection.
 * @Note This class does not contain additional functions, so it is recommended to use the `TransitRouterVpnAttachment` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitroutervpnattachment
 */
export class RosTransitRouterVpnAttachment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CEN::TransitRouterVpnAttachment";

    /**
     * @Attribute TransitRouterAttachmentId: The ID of the VPN connection.
     */
    public readonly attrTransitRouterAttachmentId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property vpnId: IPsec connection ID
     */
    public vpnId: string | ros.IResolvable;

    /**
     * @Property zoneId: Availability zone ID in the current region.
     */
    public zoneId: string | ros.IResolvable;

    /**
     * @Property autoPublishRouteEnabled: Whether to allow forwarding router instances to automatically publish route entries to IPsec connections. Default is true.
     */
    public autoPublishRouteEnabled: boolean | ros.IResolvable | undefined;

    /**
     * @Property cenId: The ID of the CEN instance.
     */
    public cenId: string | ros.IResolvable | undefined;

    /**
     * @Property deletionForce: Whether to forcefully delete the VPN connection.
     */
    public deletionForce: boolean | ros.IResolvable | undefined;

    /**
     * @Property routeTableAssociationEnabled: Whether to enable route association and forwarding relationship.
     */
    public routeTableAssociationEnabled: boolean | ros.IResolvable | undefined;

    /**
     * @Property routeTablePropagationEnabled: Whether to enable route learning relationships.
     */
    public routeTablePropagationEnabled: boolean | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags to attach to TransitRouterVpnAttachment. Max support 20 tags to add during create TransitRouterVpnAttachment. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosTransitRouterVpnAttachment.TagsProperty[] | undefined;

    /**
     * @Property transitRouterAttachmentDescription: Description of the VPN connection.
     */
    public transitRouterAttachmentDescription: string | ros.IResolvable | undefined;

    /**
     * @Property transitRouterAttachmentName: The name of the VPN connection.
     */
    public transitRouterAttachmentName: string | ros.IResolvable | undefined;

    /**
     * @Property transitRouterId: Forwarding router instance ID
     */
    public transitRouterId: string | ros.IResolvable | undefined;

    /**
     * @Property vpnOwnerId: Alibaba Cloud account (main account) ID to which the IPsec connection belongs.
     */
    public vpnOwnerId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTransitRouterVpnAttachmentProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosTransitRouterVpnAttachment.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrTransitRouterAttachmentId = this.getAtt('TransitRouterAttachmentId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.vpnId = props.vpnId;
        this.zoneId = props.zoneId;
        this.autoPublishRouteEnabled = props.autoPublishRouteEnabled;
        this.cenId = props.cenId;
        this.deletionForce = props.deletionForce;
        this.routeTableAssociationEnabled = props.routeTableAssociationEnabled;
        this.routeTablePropagationEnabled = props.routeTablePropagationEnabled;
        this.tags = props.tags;
        this.transitRouterAttachmentDescription = props.transitRouterAttachmentDescription;
        this.transitRouterAttachmentName = props.transitRouterAttachmentName;
        this.transitRouterId = props.transitRouterId;
        this.vpnOwnerId = props.vpnOwnerId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            vpnId: this.vpnId,
            zoneId: this.zoneId,
            autoPublishRouteEnabled: this.autoPublishRouteEnabled,
            cenId: this.cenId,
            deletionForce: this.deletionForce,
            routeTableAssociationEnabled: this.routeTableAssociationEnabled,
            routeTablePropagationEnabled: this.routeTablePropagationEnabled,
            tags: this.tags,
            transitRouterAttachmentDescription: this.transitRouterAttachmentDescription,
            transitRouterAttachmentName: this.transitRouterAttachmentName,
            transitRouterId: this.transitRouterId,
            vpnOwnerId: this.vpnOwnerId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosTransitRouterVpnAttachmentPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosTransitRouterVpnAttachment {
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
function RosTransitRouterVpnAttachment_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CEN::TransitRouterVpnAttachment.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CEN::TransitRouterVpnAttachment.Tags` resource.
 */
// @ts-ignore TS6133
function rosTransitRouterVpnAttachmentTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosTransitRouterVpnAttachment_TagsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}
