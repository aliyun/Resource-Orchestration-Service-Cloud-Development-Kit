// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosOrder`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-marketplace-order
 */
export interface RosOrderProps {

    /**
     * @Property productCode: Product code for the resource.
     */
    readonly productCode: string | ros.IResolvable;

    /**
     * @Property skuCode: Sku code for the resource.
     */
    readonly skuCode: string | ros.IResolvable;

    /**
     * @Property chargeType: The resource charge type. Default value is Prepaid
     */
    readonly chargeType?: string | ros.IResolvable;

    /**
     * @Property duration: Duration of the resource. If ChargeType is specified as Postpaid, this value will be ignore.
     */
    readonly duration?: number | ros.IResolvable;

    /**
     * @Property preference: Customized parameters.
     */
    readonly preference?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property pricingCycle: Price cycle of the resource. This property has no default value. If ChargeType is specified as Postpaid, this value will be ignore.
     */
    readonly pricingCycle?: string | ros.IResolvable;

    /**
     * @Property quantity: Resource number. Default value is 1
     */
    readonly quantity?: number | ros.IResolvable;
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
          allowedValues: ["PayAsYouGo","PostPaid","PayOnDemand","Postpaid","PostPay","Postpay","POSTPAY","POST","Subscription","PrePaid","Prepaid","PrePay","Prepay","PREPAY","PRE"],
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::MarketPlace::Order`, which is used to purchase resources from Alibaba Cloud Marketplace.
 * @Note This class does not contain additional functions, so it is recommended to use the `Order` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-marketplace-order
 */
export class RosOrder extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MarketPlace::Order";

    /**
     * @Attribute OrderId: Order ID of created instance.
     */
    public readonly attrOrderId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property productCode: Product code for the resource.
     */
    public productCode: string | ros.IResolvable;

    /**
     * @Property skuCode: Sku code for the resource.
     */
    public skuCode: string | ros.IResolvable;

    /**
     * @Property chargeType: The resource charge type. Default value is Prepaid
     */
    public chargeType: string | ros.IResolvable | undefined;

    /**
     * @Property duration: Duration of the resource. If ChargeType is specified as Postpaid, this value will be ignore.
     */
    public duration: number | ros.IResolvable | undefined;

    /**
     * @Property preference: Customized parameters.
     */
    public preference: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

    /**
     * @Property pricingCycle: Price cycle of the resource. This property has no default value. If ChargeType is specified as Postpaid, this value will be ignore.
     */
    public pricingCycle: string | ros.IResolvable | undefined;

    /**
     * @Property quantity: Resource number. Default value is 1
     */
    public quantity: number | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosOrderProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosOrder.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrOrderId = this.getAtt('OrderId');

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
