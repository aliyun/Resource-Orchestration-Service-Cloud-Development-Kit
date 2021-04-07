// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `ALIYUN::CEN::CenBandwidthLimit`
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
      BandwidthLimit: ros.numberToRosTemplate(properties.bandwidthLimit),
      CenId: ros.stringToRosTemplate(properties.cenId),
      LocalRegionId: ros.stringToRosTemplate(properties.localRegionId),
      OppositeRegionId: ros.stringToRosTemplate(properties.oppositeRegionId),
    };
}

/**
 * A ROS template type:  `ALIYUN::CEN::CenBandwidthLimit`
 */
export class RosCenBandwidthLimit extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CEN::CenBandwidthLimit";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

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
     * Create a new `ALIYUN::CEN::CenBandwidthLimit`.
     *
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
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            bandwidthLimit: this.bandwidthLimit,
            cenId: this.cenId,
            localRegionId: this.localRegionId,
            oppositeRegionId: this.oppositeRegionId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosCenBandwidthLimitPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::CEN::CenBandwidthPackage`
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
     * true
     * false (Default)
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
     * The description can contain [2,256] characters, numbers, underscores, and hyphens, and the name must start with English letters, but cannot start with http:// or https://.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property name: The name of the bandwidth package.
     * The name can contain 2-128 characters including a-z, A-Z, 0-9, periods, underlines, and hyphens. It must start with English letters, but cannot start with http:// or https://.
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
    if(properties.bandwidthPackageChargeType && (typeof properties.bandwidthPackageChargeType) !== 'object') {
        errors.collect(ros.propertyValidator('bandwidthPackageChargeType', ros.validateAllowedValues)({
          data: properties.bandwidthPackageChargeType,
          allowedValues: ["PREPAY","POSTPAY"],
        }));
    }
    errors.collect(ros.propertyValidator('bandwidthPackageChargeType', ros.validateString)(properties.bandwidthPackageChargeType));
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
    errors.collect(ros.propertyValidator('bandwidth', ros.requiredValidator)(properties.bandwidth));
    if(properties.bandwidth && (typeof properties.bandwidth) !== 'object') {
        errors.collect(ros.propertyValidator('bandwidth', ros.validateRange)({
            data: properties.bandwidth,
            min: 2,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('bandwidth', ros.validateNumber)(properties.bandwidth));
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    errors.collect(ros.propertyValidator('autoPay', ros.validateBoolean)(properties.autoPay));
    if(properties.autoRenewDuration && (typeof properties.autoRenewDuration) !== 'object') {
        errors.collect(ros.propertyValidator('autoRenewDuration', ros.validateAllowedValues)({
          data: properties.autoRenewDuration,
          allowedValues: [1,2,3,6],
        }));
    }
    errors.collect(ros.propertyValidator('autoRenewDuration', ros.validateNumber)(properties.autoRenewDuration));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
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
      Bandwidth: ros.numberToRosTemplate(properties.bandwidth),
      GeographicRegionAId: ros.stringToRosTemplate(properties.geographicRegionAId),
      GeographicRegionBId: ros.stringToRosTemplate(properties.geographicRegionBId),
      AutoPay: ros.booleanToRosTemplate(properties.autoPay),
      AutoRenew: ros.booleanToRosTemplate(properties.autoRenew),
      AutoRenewDuration: ros.numberToRosTemplate(properties.autoRenewDuration),
      BandwidthPackageChargeType: ros.stringToRosTemplate(properties.bandwidthPackageChargeType),
      Description: ros.stringToRosTemplate(properties.description),
      Name: ros.stringToRosTemplate(properties.name),
      Period: ros.numberToRosTemplate(properties.period),
      PricingCycle: ros.stringToRosTemplate(properties.pricingCycle),
    };
}

/**
 * A ROS template type:  `ALIYUN::CEN::CenBandwidthPackage`
 */
export class RosCenBandwidthPackage extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CEN::CenBandwidthPackage";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

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
     * true
     * false (Default)
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
     * The description can contain [2,256] characters, numbers, underscores, and hyphens, and the name must start with English letters, but cannot start with http:// or https://.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property name: The name of the bandwidth package.
     * The name can contain 2-128 characters including a-z, A-Z, 0-9, periods, underlines, and hyphens. It must start with English letters, but cannot start with http:// or https://.
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
     * Create a new `ALIYUN::CEN::CenBandwidthPackage`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCenBandwidthPackageProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosCenBandwidthPackage.ROS_RESOURCE_TYPE_NAME, properties: props });
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
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosCenBandwidthPackagePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::CEN::CenBandwidthPackageAssociation`
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
      CenBandwidthPackageId: ros.stringToRosTemplate(properties.cenBandwidthPackageId),
      CenId: ros.stringToRosTemplate(properties.cenId),
    };
}

/**
 * A ROS template type:  `ALIYUN::CEN::CenBandwidthPackageAssociation`
 */
export class RosCenBandwidthPackageAssociation extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CEN::CenBandwidthPackageAssociation";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

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
     * Create a new `ALIYUN::CEN::CenBandwidthPackageAssociation`.
     *
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
 * Properties for defining a `ALIYUN::CEN::CenInstance`
 */
export interface RosCenInstanceProps {

    /**
     * @Property description: The description of the instance.
     * The name can be 2-256 characters in length. It can start with an uppercase letter, lowercase letter, or Chinese character. It can contain numbers, underscores (_), and hyphens (-), but cannot start with http:// or https://.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property name: The name of the instance.
     * The name can be 2-128 characters in length. It can start with an uppercase letter, lowercase letter, or Chinese character. It can contain numbers, underscores (_), and hyphens (-), but cannot start with http:// or https://.
     */
    readonly name?: string | ros.IResolvable;

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
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
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
      Description: ros.stringToRosTemplate(properties.description),
      Name: ros.stringToRosTemplate(properties.name),
      Tags: ros.listMapper(rosCenInstanceTagsPropertyToRosTemplate)(properties.tags),
    };
}

/**
 * A ROS template type:  `ALIYUN::CEN::CenInstance`
 */
export class RosCenInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CEN::CenInstance";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute CenId: The ID of the request.
     */
    public readonly attrCenId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property description: The description of the instance.
     * The name can be 2-256 characters in length. It can start with an uppercase letter, lowercase letter, or Chinese character. It can contain numbers, underscores (_), and hyphens (-), but cannot start with http:// or https://.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property name: The name of the instance.
     * The name can be 2-128 characters in length. It can start with an uppercase letter, lowercase letter, or Chinese character. It can contain numbers, underscores (_), and hyphens (-), but cannot start with http:// or https://.
     */
    public name: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosCenInstance.TagsProperty[] | undefined;

    /**
     * Create a new `ALIYUN::CEN::CenInstance`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCenInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosCenInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCenId = this.getAtt('CenId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.description = props.description;
        this.name = props.name;
        this.tags = props.tags;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            description: this.description,
            name: this.name,
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
      Value: ros.stringToRosTemplate(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `ALIYUN::CEN::CenInstanceAttachment`
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
      CenId: ros.stringToRosTemplate(properties.cenId),
      ChildInstanceId: ros.stringToRosTemplate(properties.childInstanceId),
      ChildInstanceRegionId: ros.stringToRosTemplate(properties.childInstanceRegionId),
      ChildInstanceType: ros.stringToRosTemplate(properties.childInstanceType),
      ChildInstanceOwnerId: ros.numberToRosTemplate(properties.childInstanceOwnerId),
    };
}

/**
 * A ROS template type:  `ALIYUN::CEN::CenInstanceAttachment`
 */
export class RosCenInstanceAttachment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CEN::CenInstanceAttachment";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

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
     * Create a new `ALIYUN::CEN::CenInstanceAttachment`.
     *
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
 * Properties for defining a `ALIYUN::CEN::CenRouteMap`
 */
export interface RosCenRouteMapProps {

    /**
     * @Property cenId: The ID of the CEN instance.
     */
    readonly cenId: string | ros.IResolvable;

    /**
     * @Property cenRegionId: The ID of the region to which the CEN instance belongs.
     */
    readonly cenRegionId: string | ros.IResolvable;

    /**
     * @Property mapResult: The action that is performed to a route if the route meets all the match conditions.  Permit: The route is permitted. Deny: The route is denied.
     */
    readonly mapResult: string | ros.IResolvable;

    /**
     * @Property priority: The priority of the route map.
     */
    readonly priority: number | ros.IResolvable;

    /**
     * @Property transmitDirection: The direction in which the route map is applied. Valid values:  RegionIn: The direction in which routes are imported to the regional gateway of the CEN.  For example, routes are imported to the regional gateway from an instance in the current region or another region.  RegionOut: The direction in which routes are exported from the regional gateway of the CEN.  For example, routes are exported from the regional gateway of the current region to an instance in the same region, or to the regional gateway in another region.
     */
    readonly transmitDirection: string | ros.IResolvable;

    /**
     * @Property asPathMatchMode: A match statement. It indicates the mode in which the as-path attribute is matched. Valid values:  Include: Fuzzy match. A route matches the condition if the AS path in the route overlaps the AS path in the match condition. Complete: Exact match. A route matches the condition only when the AS path of the route is the same as the AS path in the match condition.
     */
    readonly asPathMatchMode?: string | ros.IResolvable;

    /**
     * @Property cidrMatchMode: A match statement. It indicates the mode in which the prefix attribute is matched. Valid values:  Include: Fuzzy match. If the prefix of a route is contained in the prefix in the match condition, the route matches the condition.  For example, if the prefix in the match condition is set to 1.1.0.0/16 and the match method is set to Fuzzy Match, the route with the prefix of 1.1.1.0/24 matches the condition.  Complete: Exact match. A route matches the condition only when the prefix of the route is the same as the prefix in the match condition.  For example, if the prefix in the match condition is set to 1.1.0.0/16 and the match method is set to Exact Match, only the route with the prefix of 1.1.1.0/16 matches the condition.
     */
    readonly cidrMatchMode?: string | ros.IResolvable;

    /**
     * @Property communityMatchMode: A match statement. It indicates the mode in which the community attribute is matched. Valid values:  Include: Fuzzy match. A route matches the condition if the community of the route overlaps the community in the match condition. Complete: Exact match. A route matches the condition only when the community of the route is the same as the community in the match condition.
     */
    readonly communityMatchMode?: string | ros.IResolvable;

    /**
     * @Property communityOperateMode: An action statement. It indicates the mode in which the community attribute is operated. Valid values:  Additive: Sets a value for the community attribute. Replace: Replaces the value of the community attribute.
     */
    readonly communityOperateMode?: string | ros.IResolvable;

    /**
     * @Property description: The description of the route map.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property destinationChildInstanceTypes: A match statement that indicates the list of IDs of the destination instances.  VPC: VPC VBR: VBR CCN: Mainland China CCN This parameter is valid only when the TransmitDirection parameter is set to RegionOut, and the destination instance and the route map belong to the same region.
     */
    readonly destinationChildInstanceTypes?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property destinationCidrBlocks: A match statement that indicates the prefix list.
     */
    readonly destinationCidrBlocks?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property destinationInstanceIds: A match statement that indicates the list of IDs of the destination instances.  This parameter is valid only when the TransmitDirection parameter is set to RegionOut, and the destination instance and the route map belongs to the same region.
     */
    readonly destinationInstanceIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property destinationInstanceIdsReverseMatch: Indicates whether to enable the reverse match method of the DestinationInstanceIds match condition. Valid values:  false (default): If the ID of a route's destination instance is included in DestinationInstanceIds, the route is permitted. true: If the ID of a route's destination instance is not included in DestinationInstanceIds, the route is permitted.
     */
    readonly destinationInstanceIdsReverseMatch?: boolean | ros.IResolvable;

    /**
     * @Property destinationRouteTableIds: A match statement that indicates the list of IDs of the destination route tables.  This parameter is valid only when the TransmitDirection parameter is set to RegionOut, and the destination route table and the route map belongs to the same region.
     */
    readonly destinationRouteTableIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property matchAsns: A match statement that indicates the As path list.
     */
    readonly matchAsns?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property matchCommunitySet: A match statement that indicates the community set.
     */
    readonly matchCommunitySet?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property nextPriority: The priority of the next route map that is associated with the current route map. Value range: 1 to 100.  If this parameter is not set, the current route map is not associated with any route map that is ordered next to the current route map. If this parameter is set to 1, the current route map is associated with the next route map. If this parameter is set to a value other than 1, the priority of the associated route map must be lower than the priority of the current route map, that is, the value of NextPriority must be greater than the value set for Priority. Only when MapResult is set to Permit, the routes which match all the matching conditions will be evaluated by the associated route map that is configured with a specific preference value.
     */
    readonly nextPriority?: number | ros.IResolvable;

    /**
     * @Property operateCommunitySet: An action statement that operates the community attribute.
     */
    readonly operateCommunitySet?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property preference: An action statement that modifies the preference of the route.
     */
    readonly preference?: number | ros.IResolvable;

    /**
     * @Property prependAsPath: Indicates AS Path prepending when a regional gateway receives or publishes a route.
     */
    readonly prependAsPath?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property routeTypes: A match statement that indicates the list of route types.  System: System routes generated by the system. Custom: Custom routes added by users. BGP: Routes advertised to BGP.
     */
    readonly routeTypes?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property sourceChildInstanceTypes: A match statement that indicates the list of IDs of the source instances.  VPC: Virtual Private Cloud (VPC) VBR: Virtual Border Router (VBR) CCN: Mainland China Cloud Connect Network (CCN)
     */
    readonly sourceChildInstanceTypes?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property sourceInstanceIds: A match statement that indicates the list of IDs of the source instances.
     */
    readonly sourceInstanceIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property sourceInstanceIdsReverseMatch: Indicates whether to enable the reverse match method of the SourceInstanceIds match condition. Valid values:  false (default): If the ID of a route's source instance is included in SourceInstanceIds, the route is permitted. true: If the ID of a route's source instance is not included in SourceInstanceIds, the route is permitted.
     */
    readonly sourceInstanceIdsReverseMatch?: boolean | ros.IResolvable;

    /**
     * @Property sourceRegionIds: A match statement that indicates the list of IDs of the source regions.
     */
    readonly sourceRegionIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property sourceRouteTableIds: A match statement that indicates the list of IDs of the source route tables.
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
      CenId: ros.stringToRosTemplate(properties.cenId),
      CenRegionId: ros.stringToRosTemplate(properties.cenRegionId),
      MapResult: ros.stringToRosTemplate(properties.mapResult),
      Priority: ros.numberToRosTemplate(properties.priority),
      TransmitDirection: ros.stringToRosTemplate(properties.transmitDirection),
      AsPathMatchMode: ros.stringToRosTemplate(properties.asPathMatchMode),
      CidrMatchMode: ros.stringToRosTemplate(properties.cidrMatchMode),
      CommunityMatchMode: ros.stringToRosTemplate(properties.communityMatchMode),
      CommunityOperateMode: ros.stringToRosTemplate(properties.communityOperateMode),
      Description: ros.stringToRosTemplate(properties.description),
      DestinationChildInstanceTypes: ros.listMapper(ros.stringToRosTemplate)(properties.destinationChildInstanceTypes),
      DestinationCidrBlocks: ros.listMapper(ros.stringToRosTemplate)(properties.destinationCidrBlocks),
      DestinationInstanceIds: ros.listMapper(ros.stringToRosTemplate)(properties.destinationInstanceIds),
      DestinationInstanceIdsReverseMatch: ros.booleanToRosTemplate(properties.destinationInstanceIdsReverseMatch),
      DestinationRouteTableIds: ros.listMapper(ros.stringToRosTemplate)(properties.destinationRouteTableIds),
      MatchAsns: ros.listMapper(ros.stringToRosTemplate)(properties.matchAsns),
      MatchCommunitySet: ros.listMapper(ros.stringToRosTemplate)(properties.matchCommunitySet),
      NextPriority: ros.numberToRosTemplate(properties.nextPriority),
      OperateCommunitySet: ros.listMapper(ros.stringToRosTemplate)(properties.operateCommunitySet),
      Preference: ros.numberToRosTemplate(properties.preference),
      PrependAsPath: ros.listMapper(ros.stringToRosTemplate)(properties.prependAsPath),
      RouteTypes: ros.listMapper(ros.stringToRosTemplate)(properties.routeTypes),
      SourceChildInstanceTypes: ros.listMapper(ros.stringToRosTemplate)(properties.sourceChildInstanceTypes),
      SourceInstanceIds: ros.listMapper(ros.stringToRosTemplate)(properties.sourceInstanceIds),
      SourceInstanceIdsReverseMatch: ros.booleanToRosTemplate(properties.sourceInstanceIdsReverseMatch),
      SourceRegionIds: ros.listMapper(ros.stringToRosTemplate)(properties.sourceRegionIds),
      SourceRouteTableIds: ros.listMapper(ros.stringToRosTemplate)(properties.sourceRouteTableIds),
    };
}

/**
 * A ROS template type:  `ALIYUN::CEN::CenRouteMap`
 */
export class RosCenRouteMap extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CEN::CenRouteMap";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute AsPathMatchMode: A match statement. It indicates the mode in which the as-path attribute is matched. Valid values:  Include: Fuzzy match. A route matches the condition if the AS path in the route overlaps the AS path in the match condition. Complete: Exact match. A route matches the condition only when the AS path of the route is the same as the AS path in the match condition.
     */
    public readonly attrAsPathMatchMode: ros.IResolvable;

    /**
     * @Attribute CenId: The ID of the CEN instance.
     */
    public readonly attrCenId: ros.IResolvable;

    /**
     * @Attribute CenRegionId: The ID of the region to which the CEN instance belongs.
     */
    public readonly attrCenRegionId: ros.IResolvable;

    /**
     * @Attribute CidrMatchMode: A match statement. It indicates the mode in which the prefix attribute is matched. Valid values:  Include: Fuzzy match. If the prefix of a route is contained in the prefix in the match condition, the route matches the condition.  For example, if the prefix in the match condition is set to 1.1.0.0/16 and the match method is set to Fuzzy Match, the route with the prefix of 1.1.1.0/24 matches the condition.  Complete: Exact match. A route matches the condition only when the prefix of the route is the same as the prefix in the match condition.  For example, if the prefix in the match condition is set to 1.1.0.0/16 and the match method is set to Exact Match, only the route with the prefix of 1.1.1.0/16 matches the condition.
     */
    public readonly attrCidrMatchMode: ros.IResolvable;

    /**
     * @Attribute CommunityMatchMode: A match statement. It indicates the mode in which the community attribute is matched. Valid values:  Include: Fuzzy match. A route matches the condition if the community of the route overlaps the community in the match condition. Complete: Exact match. A route matches the condition only when the community of the route is the same as the community in the match condition.
     */
    public readonly attrCommunityMatchMode: ros.IResolvable;

    /**
     * @Attribute CommunityOperateMode: An action statement. It indicates the mode in which the community attribute is operated. Valid values:  Additive: Sets a value for the community attribute. Replace: Replaces the value of the community attribute.
     */
    public readonly attrCommunityOperateMode: ros.IResolvable;

    /**
     * @Attribute Description: The description of the route map.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute DestinationChildInstanceTypes: A match statement that indicates the list of IDs of the destination instances.  VPC: VPC VBR: VBR CCN: Mainland China CCN This parameter is valid only when the TransmitDirection parameter is set to RegionOut, and the destination instance and the route map belong to the same region.
     */
    public readonly attrDestinationChildInstanceTypes: ros.IResolvable;

    /**
     * @Attribute DestinationCidrBlocks: A match statement that indicates the prefix list.
     */
    public readonly attrDestinationCidrBlocks: ros.IResolvable;

    /**
     * @Attribute DestinationInstanceIds: A match statement that indicates the list of IDs of the destination instances.  This parameter is valid only when the TransmitDirection parameter is set to RegionOut, and the destination instance and the route map belongs to the same region.
     */
    public readonly attrDestinationInstanceIds: ros.IResolvable;

    /**
     * @Attribute DestinationInstanceIdsReverseMatch: Indicates whether to enable the reverse match method of the DestinationInstanceIds match condition. Valid values:  false (default): If the ID of a route's destination instance is included in DestinationInstanceIds, the route is permitted. true: If the ID of a route's destination instance is not included in DestinationInstanceIds, the route is permitted.
     */
    public readonly attrDestinationInstanceIdsReverseMatch: ros.IResolvable;

    /**
     * @Attribute DestinationRouteTableIds: A match statement that indicates the list of IDs of the destination route tables.  This parameter is valid only when the TransmitDirection parameter is set to RegionOut, and the destination route table and the route map belongs to the same region.
     */
    public readonly attrDestinationRouteTableIds: ros.IResolvable;

    /**
     * @Attribute MapResult: The action that is performed to a route if the route meets all the match conditions.  Permit: The route is permitted. Deny: The route is denied.
     */
    public readonly attrMapResult: ros.IResolvable;

    /**
     * @Attribute MatchAsns: A match statement that indicates the As path list.
     */
    public readonly attrMatchAsns: ros.IResolvable;

    /**
     * @Attribute MatchCommunitySet: A match statement that indicates the community set.
     */
    public readonly attrMatchCommunitySet: ros.IResolvable;

    /**
     * @Attribute NextPriority: The priority of the next route map that is associated with the current route map. Value range: 1 to 100.  If this parameter is not set, the current route map is not associated with any route map that is ordered next to the current route map. If this parameter is set to 1, the current route map is associated with the next route map. If this parameter is set to a value other than 1, the priority of the associated route map must be lower than the priority of the current route map, that is, the value of NextPriority must be greater than the value set for Priority. Only when MapResult is set to Permit, the routes which match all the matching conditions will be evaluated by the associated route map that is configured with a specific preference value.
     */
    public readonly attrNextPriority: ros.IResolvable;

    /**
     * @Attribute OperateCommunitySet: An action statement that operates the community attribute.
     */
    public readonly attrOperateCommunitySet: ros.IResolvable;

    /**
     * @Attribute Preference: An action statement that modifies the preference of the route.
     */
    public readonly attrPreference: ros.IResolvable;

    /**
     * @Attribute PrependAsPath: Indicates AS Path prepending when a regional gateway receives or publishes a route.
     */
    public readonly attrPrependAsPath: ros.IResolvable;

    /**
     * @Attribute Priority: The priority of the route map.
     */
    public readonly attrPriority: ros.IResolvable;

    /**
     * @Attribute RouteMapId: The ID of the route map.
     */
    public readonly attrRouteMapId: ros.IResolvable;

    /**
     * @Attribute RouteTypes: A match statement that indicates the list of route types.  System: System routes generated by the system. Custom: Custom routes added by users. BGP: Routes advertised to BGP.
     */
    public readonly attrRouteTypes: ros.IResolvable;

    /**
     * @Attribute SourceChildInstanceTypes: A match statement that indicates the list of IDs of the source instances.  VPC: Virtual Private Cloud (VPC) VBR: Virtual Border Router (VBR) CCN: Mainland China Cloud Connect Network (CCN)
     */
    public readonly attrSourceChildInstanceTypes: ros.IResolvable;

    /**
     * @Attribute SourceInstanceIds: A match statement that indicates the list of IDs of the source instances.
     */
    public readonly attrSourceInstanceIds: ros.IResolvable;

    /**
     * @Attribute SourceInstanceIdsReverseMatch: Indicates whether to enable the reverse match method of the SourceInstanceIds match condition. Valid values:  false (default): If the ID of a route's source instance is included in SourceInstanceIds, the route is permitted. true: If the ID of a route's source instance is not included in SourceInstanceIds, the route is permitted.
     */
    public readonly attrSourceInstanceIdsReverseMatch: ros.IResolvable;

    /**
     * @Attribute SourceRegionIds: A match statement that indicates the list of IDs of the source regions.
     */
    public readonly attrSourceRegionIds: ros.IResolvable;

    /**
     * @Attribute SourceRouteTableIds: A match statement that indicates the list of IDs of the source route tables.
     */
    public readonly attrSourceRouteTableIds: ros.IResolvable;

    /**
     * @Attribute TransmitDirection: The direction in which the route map is applied. Valid values:  RegionIn: The direction in which routes are imported to the regional gateway of the CEN.  For example, routes are imported to the regional gateway from an instance in the current region or another region.  RegionOut: The direction in which routes are exported from the regional gateway of the CEN.  For example, routes are exported from the regional gateway of the current region to an instance in the same region, or to the regional gateway in another region.
     */
    public readonly attrTransmitDirection: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property cenId: The ID of the CEN instance.
     */
    public cenId: string | ros.IResolvable;

    /**
     * @Property cenRegionId: The ID of the region to which the CEN instance belongs.
     */
    public cenRegionId: string | ros.IResolvable;

    /**
     * @Property mapResult: The action that is performed to a route if the route meets all the match conditions.  Permit: The route is permitted. Deny: The route is denied.
     */
    public mapResult: string | ros.IResolvable;

    /**
     * @Property priority: The priority of the route map.
     */
    public priority: number | ros.IResolvable;

    /**
     * @Property transmitDirection: The direction in which the route map is applied. Valid values:  RegionIn: The direction in which routes are imported to the regional gateway of the CEN.  For example, routes are imported to the regional gateway from an instance in the current region or another region.  RegionOut: The direction in which routes are exported from the regional gateway of the CEN.  For example, routes are exported from the regional gateway of the current region to an instance in the same region, or to the regional gateway in another region.
     */
    public transmitDirection: string | ros.IResolvable;

    /**
     * @Property asPathMatchMode: A match statement. It indicates the mode in which the as-path attribute is matched. Valid values:  Include: Fuzzy match. A route matches the condition if the AS path in the route overlaps the AS path in the match condition. Complete: Exact match. A route matches the condition only when the AS path of the route is the same as the AS path in the match condition.
     */
    public asPathMatchMode: string | ros.IResolvable | undefined;

    /**
     * @Property cidrMatchMode: A match statement. It indicates the mode in which the prefix attribute is matched. Valid values:  Include: Fuzzy match. If the prefix of a route is contained in the prefix in the match condition, the route matches the condition.  For example, if the prefix in the match condition is set to 1.1.0.0/16 and the match method is set to Fuzzy Match, the route with the prefix of 1.1.1.0/24 matches the condition.  Complete: Exact match. A route matches the condition only when the prefix of the route is the same as the prefix in the match condition.  For example, if the prefix in the match condition is set to 1.1.0.0/16 and the match method is set to Exact Match, only the route with the prefix of 1.1.1.0/16 matches the condition.
     */
    public cidrMatchMode: string | ros.IResolvable | undefined;

    /**
     * @Property communityMatchMode: A match statement. It indicates the mode in which the community attribute is matched. Valid values:  Include: Fuzzy match. A route matches the condition if the community of the route overlaps the community in the match condition. Complete: Exact match. A route matches the condition only when the community of the route is the same as the community in the match condition.
     */
    public communityMatchMode: string | ros.IResolvable | undefined;

    /**
     * @Property communityOperateMode: An action statement. It indicates the mode in which the community attribute is operated. Valid values:  Additive: Sets a value for the community attribute. Replace: Replaces the value of the community attribute.
     */
    public communityOperateMode: string | ros.IResolvable | undefined;

    /**
     * @Property description: The description of the route map.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property destinationChildInstanceTypes: A match statement that indicates the list of IDs of the destination instances.  VPC: VPC VBR: VBR CCN: Mainland China CCN This parameter is valid only when the TransmitDirection parameter is set to RegionOut, and the destination instance and the route map belong to the same region.
     */
    public destinationChildInstanceTypes: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property destinationCidrBlocks: A match statement that indicates the prefix list.
     */
    public destinationCidrBlocks: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property destinationInstanceIds: A match statement that indicates the list of IDs of the destination instances.  This parameter is valid only when the TransmitDirection parameter is set to RegionOut, and the destination instance and the route map belongs to the same region.
     */
    public destinationInstanceIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property destinationInstanceIdsReverseMatch: Indicates whether to enable the reverse match method of the DestinationInstanceIds match condition. Valid values:  false (default): If the ID of a route's destination instance is included in DestinationInstanceIds, the route is permitted. true: If the ID of a route's destination instance is not included in DestinationInstanceIds, the route is permitted.
     */
    public destinationInstanceIdsReverseMatch: boolean | ros.IResolvable | undefined;

    /**
     * @Property destinationRouteTableIds: A match statement that indicates the list of IDs of the destination route tables.  This parameter is valid only when the TransmitDirection parameter is set to RegionOut, and the destination route table and the route map belongs to the same region.
     */
    public destinationRouteTableIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property matchAsns: A match statement that indicates the As path list.
     */
    public matchAsns: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property matchCommunitySet: A match statement that indicates the community set.
     */
    public matchCommunitySet: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property nextPriority: The priority of the next route map that is associated with the current route map. Value range: 1 to 100.  If this parameter is not set, the current route map is not associated with any route map that is ordered next to the current route map. If this parameter is set to 1, the current route map is associated with the next route map. If this parameter is set to a value other than 1, the priority of the associated route map must be lower than the priority of the current route map, that is, the value of NextPriority must be greater than the value set for Priority. Only when MapResult is set to Permit, the routes which match all the matching conditions will be evaluated by the associated route map that is configured with a specific preference value.
     */
    public nextPriority: number | ros.IResolvable | undefined;

    /**
     * @Property operateCommunitySet: An action statement that operates the community attribute.
     */
    public operateCommunitySet: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property preference: An action statement that modifies the preference of the route.
     */
    public preference: number | ros.IResolvable | undefined;

    /**
     * @Property prependAsPath: Indicates AS Path prepending when a regional gateway receives or publishes a route.
     */
    public prependAsPath: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property routeTypes: A match statement that indicates the list of route types.  System: System routes generated by the system. Custom: Custom routes added by users. BGP: Routes advertised to BGP.
     */
    public routeTypes: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property sourceChildInstanceTypes: A match statement that indicates the list of IDs of the source instances.  VPC: Virtual Private Cloud (VPC) VBR: Virtual Border Router (VBR) CCN: Mainland China Cloud Connect Network (CCN)
     */
    public sourceChildInstanceTypes: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property sourceInstanceIds: A match statement that indicates the list of IDs of the source instances.
     */
    public sourceInstanceIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property sourceInstanceIdsReverseMatch: Indicates whether to enable the reverse match method of the SourceInstanceIds match condition. Valid values:  false (default): If the ID of a route's source instance is included in SourceInstanceIds, the route is permitted. true: If the ID of a route's source instance is not included in SourceInstanceIds, the route is permitted.
     */
    public sourceInstanceIdsReverseMatch: boolean | ros.IResolvable | undefined;

    /**
     * @Property sourceRegionIds: A match statement that indicates the list of IDs of the source regions.
     */
    public sourceRegionIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property sourceRouteTableIds: A match statement that indicates the list of IDs of the source route tables.
     */
    public sourceRouteTableIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::CEN::CenRouteMap`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCenRouteMapProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosCenRouteMap.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAsPathMatchMode = this.getAtt('AsPathMatchMode');
        this.attrCenId = this.getAtt('CenId');
        this.attrCenRegionId = this.getAtt('CenRegionId');
        this.attrCidrMatchMode = this.getAtt('CidrMatchMode');
        this.attrCommunityMatchMode = this.getAtt('CommunityMatchMode');
        this.attrCommunityOperateMode = this.getAtt('CommunityOperateMode');
        this.attrDescription = this.getAtt('Description');
        this.attrDestinationChildInstanceTypes = this.getAtt('DestinationChildInstanceTypes');
        this.attrDestinationCidrBlocks = this.getAtt('DestinationCidrBlocks');
        this.attrDestinationInstanceIds = this.getAtt('DestinationInstanceIds');
        this.attrDestinationInstanceIdsReverseMatch = this.getAtt('DestinationInstanceIdsReverseMatch');
        this.attrDestinationRouteTableIds = this.getAtt('DestinationRouteTableIds');
        this.attrMapResult = this.getAtt('MapResult');
        this.attrMatchAsns = this.getAtt('MatchAsns');
        this.attrMatchCommunitySet = this.getAtt('MatchCommunitySet');
        this.attrNextPriority = this.getAtt('NextPriority');
        this.attrOperateCommunitySet = this.getAtt('OperateCommunitySet');
        this.attrPreference = this.getAtt('Preference');
        this.attrPrependAsPath = this.getAtt('PrependAsPath');
        this.attrPriority = this.getAtt('Priority');
        this.attrRouteMapId = this.getAtt('RouteMapId');
        this.attrRouteTypes = this.getAtt('RouteTypes');
        this.attrSourceChildInstanceTypes = this.getAtt('SourceChildInstanceTypes');
        this.attrSourceInstanceIds = this.getAtt('SourceInstanceIds');
        this.attrSourceInstanceIdsReverseMatch = this.getAtt('SourceInstanceIdsReverseMatch');
        this.attrSourceRegionIds = this.getAtt('SourceRegionIds');
        this.attrSourceRouteTableIds = this.getAtt('SourceRouteTableIds');
        this.attrTransmitDirection = this.getAtt('TransmitDirection');

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
 * Properties for defining a `ALIYUN::CEN::CenVbrHealthCheck`
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
     * @Property healthCheckSourceIp: You can use either of the following methods to specify the source IP address of the health check.  Automatic IP Address: The system automatically assigns an IP address within the CIDR block 100.96.0.0/16 (recommended).  Custom IP Address: You can specify a source IP address that is available within the CIDR block 10.0.0.0/8, 192.168.0.0/16, or 172.16.0.0/12. The specified source IP address must not overlap with the IP addresses of the Alibaba Cloud-facing and client-facing interfaces on the VBR instance, or the IP addresses of the instances with which the VBR instance needs to communicate in the CEN.
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
      CenId: ros.stringToRosTemplate(properties.cenId),
      HealthCheckTargetIp: ros.stringToRosTemplate(properties.healthCheckTargetIp),
      VbrInstanceId: ros.stringToRosTemplate(properties.vbrInstanceId),
      VbrInstanceRegionId: ros.stringToRosTemplate(properties.vbrInstanceRegionId),
      HealthCheckInterval: ros.numberToRosTemplate(properties.healthCheckInterval),
      HealthCheckSourceIp: ros.stringToRosTemplate(properties.healthCheckSourceIp),
      HealthyThreshold: ros.numberToRosTemplate(properties.healthyThreshold),
      VbrInstanceOwnerId: ros.numberToRosTemplate(properties.vbrInstanceOwnerId),
    };
}

/**
 * A ROS template type:  `ALIYUN::CEN::CenVbrHealthCheck`
 */
export class RosCenVbrHealthCheck extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CEN::CenVbrHealthCheck";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

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
     * @Property healthCheckSourceIp: You can use either of the following methods to specify the source IP address of the health check.  Automatic IP Address: The system automatically assigns an IP address within the CIDR block 100.96.0.0/16 (recommended).  Custom IP Address: You can specify a source IP address that is available within the CIDR block 10.0.0.0/8, 192.168.0.0/16, or 172.16.0.0/12. The specified source IP address must not overlap with the IP addresses of the Alibaba Cloud-facing and client-facing interfaces on the VBR instance, or the IP addresses of the instances with which the VBR instance needs to communicate in the CEN.
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
     * Create a new `ALIYUN::CEN::CenVbrHealthCheck`.
     *
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
 * Properties for defining a `ALIYUN::CEN::RouteEntry`
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
      CenId: ros.stringToRosTemplate(properties.cenId),
      ChildInstanceId: ros.stringToRosTemplate(properties.childInstanceId),
      ChildInstanceRegionId: ros.stringToRosTemplate(properties.childInstanceRegionId),
      ChildInstanceRouteTableId: ros.stringToRosTemplate(properties.childInstanceRouteTableId),
      ChildInstanceType: ros.stringToRosTemplate(properties.childInstanceType),
      DestinationCidrBlock: ros.stringToRosTemplate(properties.destinationCidrBlock),
    };
}

/**
 * A ROS template type:  `ALIYUN::CEN::RouteEntry`
 */
export class RosRouteEntry extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CEN::RouteEntry";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

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
     * Create a new `ALIYUN::CEN::RouteEntry`.
     *
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
