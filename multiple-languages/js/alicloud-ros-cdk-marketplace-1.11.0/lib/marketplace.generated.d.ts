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
    readonly preference?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::MarketPlace::Order`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Order` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-marketplace-order
 */
export declare class RosOrder extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MarketPlace::Order";
    /**
     * @Attribute OrderId: Order ID of created instance.
     */
    readonly attrOrderId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property productCode: Product code for the resource.
     */
    productCode: string | ros.IResolvable;
    /**
     * @Property skuCode: Sku code for the resource.
     */
    skuCode: string | ros.IResolvable;
    /**
     * @Property chargeType: The resource charge type. Default value is Prepaid
     */
    chargeType: string | ros.IResolvable | undefined;
    /**
     * @Property duration: Duration of the resource. If ChargeType is specified as Postpaid, this value will be ignore.
     */
    duration: number | ros.IResolvable | undefined;
    /**
     * @Property preference: Customized parameters.
     */
    preference: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @Property pricingCycle: Price cycle of the resource. This property has no default value. If ChargeType is specified as Postpaid, this value will be ignore.
     */
    pricingCycle: string | ros.IResolvable | undefined;
    /**
     * @Property quantity: Resource number. Default value is 1
     */
    quantity: number | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosOrderProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
