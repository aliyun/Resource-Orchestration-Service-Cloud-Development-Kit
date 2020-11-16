// Generated from the AliCloud ROS Resource Specification

import * as ros from '@ros-cdk/core';

/**
 * Properties for defining a `ALIYUN::CEN::CenBandwidthLimit`
 */
export interface RosCenBandwidthLimitProps {

    /**
     * @Property bandwidthLimit: The bandwidth configured for the interconnected regions communication. Minimal value: 1
     */
    readonly bandwidthLimit: number;

    /**
     * @Property cenId: The ID of the CEN instance.
     */
    readonly cenId: string;

    /**
     * @Property localRegionId: The ID of the local region.
     */
    readonly localRegionId: string;

    /**
     * @Property oppositeRegionId: The ID of the other interconnected region.
     */
    readonly oppositeRegionId: string;
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
    public bandwidthLimit: number;

    /**
     * @Property cenId: The ID of the CEN instance.
     */
    public cenId: string;

    /**
     * @Property localRegionId: The ID of the local region.
     */
    public localRegionId: string;

    /**
     * @Property oppositeRegionId: The ID of the other interconnected region.
     */
    public oppositeRegionId: string;

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
    readonly bandwidth: number;

    /**
     * @Property geographicRegionAId: The other area A to connect.
     * Valid value: China | North-America | Asia-Pacific | Europe | Australia
     */
    readonly geographicRegionAId: string;

    /**
     * @Property geographicRegionBId: The other area B to connect.
     * Valid value: China | North-America | Asia-Pacific | Europe | Australia
     */
    readonly geographicRegionBId: string;

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
    readonly autoRenewDuration?: number;

    /**
     * @Property bandwidthPackageChargeType: The billing method. Valid value: PREPAY, POSTPAY (Default)
     */
    readonly bandwidthPackageChargeType?: string;

    /**
     * @Property description: The description of the bandwidth package.
     * The description can contain [2,256] characters, numbers, underscores, and hyphens, and the name must start with English letters, but cannot start with http:// or https://.
     */
    readonly description?: string;

    /**
     * @Property name: The name of the bandwidth package.
     * The name can contain 2-128 characters including a-z, A-Z, 0-9, periods, underlines, and hyphens. It must start with English letters, but cannot start with http:// or https://.
     */
    readonly name?: string;

    /**
     * @Property period: The purchase period. The default value is 1.
     */
    readonly period?: number;

    /**
     * @Property pricingCycle: The pricing cycle.
     */
    readonly pricingCycle?: string;
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
    public readonly attrCenBandwidthPackageId: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property bandwidth: The bandwidth in Mbps of the bandwidth package. The bandwidth cannot be less than 2 Mbps.
     */
    public bandwidth: number;

    /**
     * @Property geographicRegionAId: The other area A to connect.
     * Valid value: China | North-America | Asia-Pacific | Europe | Australia
     */
    public geographicRegionAId: string;

    /**
     * @Property geographicRegionBId: The other area B to connect.
     * Valid value: China | North-America | Asia-Pacific | Europe | Australia
     */
    public geographicRegionBId: string;

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
    public autoRenewDuration: number | undefined;

    /**
     * @Property bandwidthPackageChargeType: The billing method. Valid value: PREPAY, POSTPAY (Default)
     */
    public bandwidthPackageChargeType: string | undefined;

    /**
     * @Property description: The description of the bandwidth package.
     * The description can contain [2,256] characters, numbers, underscores, and hyphens, and the name must start with English letters, but cannot start with http:// or https://.
     */
    public description: string | undefined;

    /**
     * @Property name: The name of the bandwidth package.
     * The name can contain 2-128 characters including a-z, A-Z, 0-9, periods, underlines, and hyphens. It must start with English letters, but cannot start with http:// or https://.
     */
    public name: string | undefined;

    /**
     * @Property period: The purchase period. The default value is 1.
     */
    public period: number | undefined;

    /**
     * @Property pricingCycle: The pricing cycle.
     */
    public pricingCycle: string | undefined;

    /**
     * Create a new `ALIYUN::CEN::CenBandwidthPackage`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCenBandwidthPackageProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosCenBandwidthPackage.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCenBandwidthPackageId = ros.Token.asString(this.getAtt('CenBandwidthPackageId'));

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
    readonly cenBandwidthPackageId: string;

    /**
     * @Property cenId: The ID of the CEN instance.
     */
    readonly cenId: string;
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
    public cenBandwidthPackageId: string;

    /**
     * @Property cenId: The ID of the CEN instance.
     */
    public cenId: string;

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
    readonly description?: string;

    /**
     * @Property name: The name of the instance.
     * The name can be 2-128 characters in length. It can start with an uppercase letter, lowercase letter, or Chinese character. It can contain numbers, underscores (_), and hyphens (-), but cannot start with http:// or https://.
     */
    readonly name?: string;
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
    public readonly attrCenId: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property description: The description of the instance.
     * The name can be 2-256 characters in length. It can start with an uppercase letter, lowercase letter, or Chinese character. It can contain numbers, underscores (_), and hyphens (-), but cannot start with http:// or https://.
     */
    public description: string | undefined;

    /**
     * @Property name: The name of the instance.
     * The name can be 2-128 characters in length. It can start with an uppercase letter, lowercase letter, or Chinese character. It can contain numbers, underscores (_), and hyphens (-), but cannot start with http:// or https://.
     */
    public name: string | undefined;

    /**
     * Create a new `ALIYUN::CEN::CenInstance`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCenInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosCenInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCenId = ros.Token.asString(this.getAtt('CenId'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.description = props.description;
        this.name = props.name;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            description: this.description,
            name: this.name,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosCenInstancePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::CEN::CenInstanceAttachment`
 */
export interface RosCenInstanceAttachmentProps {

    /**
     * @Property cenId: The ID of the CEN instance.
     */
    readonly cenId: string;

    /**
     * @Property childInstanceId: The ID of the network to attach.
     */
    readonly childInstanceId: string;

    /**
     * @Property childInstanceRegionId: The ID of the region where the network is located. The ID of the region where the network is located.
     */
    readonly childInstanceRegionId: string;

    /**
     * @Property childInstanceType: The type of the network to attach. Support VPC, VBR or CCN.
     */
    readonly childInstanceType: string;

    /**
     * @Property childInstanceOwnerId: The account ID to which the network belongs.
     */
    readonly childInstanceOwnerId?: number;
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
    public cenId: string;

    /**
     * @Property childInstanceId: The ID of the network to attach.
     */
    public childInstanceId: string;

    /**
     * @Property childInstanceRegionId: The ID of the region where the network is located. The ID of the region where the network is located.
     */
    public childInstanceRegionId: string;

    /**
     * @Property childInstanceType: The type of the network to attach. Support VPC, VBR or CCN.
     */
    public childInstanceType: string;

    /**
     * @Property childInstanceOwnerId: The account ID to which the network belongs.
     */
    public childInstanceOwnerId: number | undefined;

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
 * Properties for defining a `ALIYUN::CEN::RouteEntry`
 */
export interface RosRouteEntryProps {

    /**
     * @Property cenId: The ID of the CEN instance where the route entry is published.
     */
    readonly cenId: string;

    /**
     * @Property childInstanceId: The ID of the attached network (VPC or VBR).
     */
    readonly childInstanceId: string;

    /**
     * @Property childInstanceRegionId: The ID of the region where the attached VBR or VPC is located.
     */
    readonly childInstanceRegionId: string;

    /**
     * @Property childInstanceRouteTableId: The route table of the attached VBR or VPC.
     */
    readonly childInstanceRouteTableId: string;

    /**
     * @Property childInstanceType: The type of the network, value: VPC VBR
     */
    readonly childInstanceType: string;

    /**
     * @Property destinationCidrBlock: The destination CIDR block of the route entry to publish.
     */
    readonly destinationCidrBlock: string;
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
    public cenId: string;

    /**
     * @Property childInstanceId: The ID of the attached network (VPC or VBR).
     */
    public childInstanceId: string;

    /**
     * @Property childInstanceRegionId: The ID of the region where the attached VBR or VPC is located.
     */
    public childInstanceRegionId: string;

    /**
     * @Property childInstanceRouteTableId: The route table of the attached VBR or VPC.
     */
    public childInstanceRouteTableId: string;

    /**
     * @Property childInstanceType: The type of the network, value: VPC VBR
     */
    public childInstanceType: string;

    /**
     * @Property destinationCidrBlock: The destination CIDR block of the route entry to publish.
     */
    public destinationCidrBlock: string;

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
