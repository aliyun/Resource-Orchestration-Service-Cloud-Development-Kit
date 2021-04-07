import * as ros from '@alicloud/ros-cdk-core';
import { RosOrder } from './marketplace.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosOrder as OrderProperty };

/**
 * Properties for defining a `ALIYUN::MarketPlace::Order`
 */
export interface OrderProps {

    /**
     * Property productCode: Product code for the resource.
     */
    readonly productCode: string | ros.IResolvable;

    /**
     * Property skuCode: Sku code for the resource.
     */
    readonly skuCode: string | ros.IResolvable;

    /**
     * Property chargeType: The resource charge type. Default value is Prepaid
     */
    readonly chargeType?: string | ros.IResolvable;

    /**
     * Property duration: Duration of the resource. If ChargeType is specified as Postpaid, this value will be ignore.
     */
    readonly duration?: number | ros.IResolvable;

    /**
     * Property preference: Customized parameters.
     */
    readonly preference?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * Property pricingCycle: Price cycle of the resource. This property has no default value. If ChargeType is specified as Postpaid, this value will be ignore.
     */
    readonly pricingCycle?: string | ros.IResolvable;

    /**
     * Property quantity: Resource number. Default value is 1
     */
    readonly quantity?: number | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::MarketPlace::Order`
 */
export class Order extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute OrderId: Order ID of created instance.
     */
    public readonly attrOrderId: ros.IResolvable;

    /**
     * Create a new `ALIYUN::MarketPlace::Order`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: OrderProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosOrder = new RosOrder(this, id,  {
            productCode: props.productCode,
            preference: props.preference,
            skuCode: props.skuCode,
            pricingCycle: props.pricingCycle,
            chargeType: props.chargeType ? props.chargeType : 'Prepaid',
            quantity: props.quantity ? props.quantity : 1,
            duration: props.duration,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosOrder;
        this.attrOrderId = rosOrder.attrOrderId;
    }
}
