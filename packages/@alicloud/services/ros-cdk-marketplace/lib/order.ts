import * as ros from '@alicloud/ros-cdk-core';
import { RosOrder } from './marketplace.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosOrder as OrderProperty };

/**
 * Properties for defining a `Order`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-marketplace-order
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::MarketPlace::Order`, which is used to purchase resources from Alibaba Cloud Marketplace.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosOrder`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-marketplace-order
 */
export class Order extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: OrderProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute OrderId: Order ID of created instance.
     */
    public readonly attrOrderId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: OrderProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosOrder = new RosOrder(this, id,  {
            productCode: props.productCode,
            preference: props.preference,
            skuCode: props.skuCode,
            pricingCycle: props.pricingCycle,
            chargeType: props.chargeType === undefined || props.chargeType === null ? 'Prepaid' : props.chargeType,
            quantity: props.quantity === undefined || props.quantity === null ? 1 : props.quantity,
            duration: props.duration,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosOrder;
        this.attrOrderId = rosOrder.attrOrderId;
    }
}
