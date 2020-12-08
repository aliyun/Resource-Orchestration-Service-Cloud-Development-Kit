import * as ros from '@alicloud/ros-cdk-core';
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
    readonly preference?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
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
 * A ROS template type:  `ALIYUN::MarketPlace::Order`
 */
export declare class RosOrder extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MarketPlace::Order";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute OrderId: Order ID of created instance.
     */
    readonly attrOrderId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property productCode: Product code for the resource.
     */
    productCode: string;
    /**
     * @Property skuCode: Sku code for the resource.
     */
    skuCode: string;
    /**
     * @Property chargeType: The resource charge type. Default value is Prepaid
     */
    chargeType: string | undefined;
    /**
     * @Property duration: Duration of the resource. If ChargeType is specified as Postpaid, this value will be ignore.
     */
    duration: number | undefined;
    /**
     * @Property preference: Customized parameters.
     */
    preference: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @Property pricingCycle: Price cycle of the resource. This property has no default value. If ChargeType is specified as Postpaid, this value will be ignore.
     */
    pricingCycle: string | undefined;
    /**
     * @Property quantity: Resource number. Default value is 1
     */
    quantity: number | undefined;
    /**
     * Create a new `ALIYUN::MarketPlace::Order`.
     *
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
