// Generated from the AliCloud ROS Resource Specification

import * as ros from '@ros-cdk/core';

/**
 * Properties for defining a `ALIYUN::MarketPlace::Order`
 */
export interface RosOrderProps {

    /**
     * @Property productCode: Product code for the resource.
     */
    readonly productCode: string;

    /**
     * @Property skuCode: Sku code for the resource.
     */
    readonly skuCode: string;

    /**
     * @Property chargeType: The resource charge type. Default value is Prepaid
     */
    readonly chargeType?: string;

    /**
     * @Property duration: Duration of the resource. If ChargeType is specified as Postpaid, this value will be ignore.
     */
    readonly duration?: number;

    /**
     * @Property preference: Customized parameters.
     */
    readonly preference?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property pricingCycle: Price cycle of the resource. This property has no default value. If ChargeType is specified as Postpaid, this value will be ignore.
     */
    readonly pricingCycle?: string;

    /**
     * @Property quantity: Resource number. Default value is 1
     */
    readonly quantity?: number;
}

/**
 * Determine whether the given properties match those of a `RosOrderProps`
 *
 * @param properties - the TypeScript properties of a `RosOrderProps`
 *
 * @returns the result of the validation.
 */
function RosOrderPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('productCode', ros.requiredValidator)(properties.productCode));
    errors.collect(ros.propertyValidator('productCode', ros.validateString)(properties.productCode));
    errors.collect(ros.propertyValidator('preference', ros.hashValidator(ros.validateAny))(properties.preference));
    errors.collect(ros.propertyValidator('skuCode', ros.requiredValidator)(properties.skuCode));
    errors.collect(ros.propertyValidator('skuCode', ros.validateString)(properties.skuCode));
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
          allowedValues: ["Prepaid","Postpaid"],
        }));
    }
    errors.collect(ros.propertyValidator('chargeType', ros.validateString)(properties.chargeType));
    errors.collect(ros.propertyValidator('quantity', ros.validateNumber)(properties.quantity));
    if(properties.duration && (typeof properties.duration) !== 'object') {
        errors.collect(ros.propertyValidator('duration', ros.validateRange)({
            data: properties.duration,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('duration', ros.validateNumber)(properties.duration));
    return errors.wrap('supplied properties not correct for "RosOrderProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MarketPlace::Order` resource
 *
 * @param properties - the TypeScript properties of a `RosOrderProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MarketPlace::Order` resource.
 */
// @ts-ignore TS6133
function rosOrderPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosOrderPropsValidator(properties).assertSuccess();
    }
    return {
      ProductCode: ros.stringToRosTemplate(properties.productCode),
      SkuCode: ros.stringToRosTemplate(properties.skuCode),
      ChargeType: ros.stringToRosTemplate(properties.chargeType),
      Duration: ros.numberToRosTemplate(properties.duration),
      Preference: ros.hashMapper(ros.objectToRosTemplate)(properties.preference),
      PricingCycle: ros.stringToRosTemplate(properties.pricingCycle),
      Quantity: ros.numberToRosTemplate(properties.quantity),
    };
}

/**
 * A ROS template type:  `ALIYUN::MarketPlace::Order`
 */
export class RosOrder extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MarketPlace::Order";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute OrderId: Order ID of created instance.
     */
    public readonly attrOrderId: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property productCode: Product code for the resource.
     */
    public productCode: string;

    /**
     * @Property skuCode: Sku code for the resource.
     */
    public skuCode: string;

    /**
     * @Property chargeType: The resource charge type. Default value is Prepaid
     */
    public chargeType: string | undefined;

    /**
     * @Property duration: Duration of the resource. If ChargeType is specified as Postpaid, this value will be ignore.
     */
    public duration: number | undefined;

    /**
     * @Property preference: Customized parameters.
     */
    public preference: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

    /**
     * @Property pricingCycle: Price cycle of the resource. This property has no default value. If ChargeType is specified as Postpaid, this value will be ignore.
     */
    public pricingCycle: string | undefined;

    /**
     * @Property quantity: Resource number. Default value is 1
     */
    public quantity: number | undefined;

    /**
     * Create a new `ALIYUN::MarketPlace::Order`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosOrderProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosOrder.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrOrderId = ros.Token.asString(this.getAtt('OrderId'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.productCode = props.productCode;
        this.skuCode = props.skuCode;
        this.chargeType = props.chargeType;
        this.duration = props.duration;
        this.preference = props.preference;
        this.pricingCycle = props.pricingCycle;
        this.quantity = props.quantity;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            productCode: this.productCode,
            skuCode: this.skuCode,
            chargeType: this.chargeType,
            duration: this.duration,
            preference: this.preference,
            pricingCycle: this.pricingCycle,
            quantity: this.quantity,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosOrderPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
