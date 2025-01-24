import * as ros from '@alicloud/ros-cdk-core';
import { RosInstance } from './flink.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosInstance as InstanceProperty };

/**
 * Properties for defining a `Instance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-flink-instance
 */
export interface InstanceProps {

    /**
     * Property bucket: OSS bucket name.
     */
    readonly bucket: string | ros.IResolvable;

    /**
     * Property chargeType: The payment type, the value of the value is as follows:
     * POST: pay as you go.
     * PRE: subscription.
     */
    readonly chargeType: string | ros.IResolvable;

    /**
     * Property instanceName: The name of instance.
     */
    readonly instanceName: string | ros.IResolvable;

    /**
     * Property vpcId: VPC ID.
     */
    readonly vpcId: string | ros.IResolvable;

    /**
     * Property vSwitchIds: Virtual switch ID.
     */
    readonly vSwitchIds: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * Property zoneId: The available area ID of the instance.
     */
    readonly zoneId: string | ros.IResolvable;

    /**
     * Property autoRenew: When the payment type is the monthly package, the value of the value is as follows:
     * true: Automatic renewal.
     * false: Manual renewal.
     */
    readonly autoRenew?: boolean | ros.IResolvable;

    /**
     * Property duration: Number of order cycle.
     * When ChargeType is configured as PRE, the duration parameter must be filled.
     * If PricingCycle is Month, the valid range is 1, 2, 3, 6, 7, 8, 9, 12, 24, 36
     * If PricingCycle is year, the valid range is 1 to 3
     */
    readonly duration?: number | ros.IResolvable;

    /**
     * Property pricingCycle: The ordering cycle only supports ordering in the year and month.
     */
    readonly pricingCycle?: string | ros.IResolvable;

    /**
     * Property promotionCode: Promo Code.
     */
    readonly promotionCode?: string | ros.IResolvable;

    /**
     * Property resourceSpec: Resource specifications.
     * When ChargeType is configured as PRE, the resource specification parameters must be filled.
     */
    readonly resourceSpec?: RosInstance.ResourceSpecProperty | ros.IResolvable;

    /**
     * Property usePromotionCode: Whether to use coupons.The value is as follows:
     * true: Use.
     * false: Not in use.
     */
    readonly usePromotionCode?: boolean | ros.IResolvable;
}

/**
 * Represents a `Instance`.
 */
export interface IInstance extends ros.IResource {
    readonly props: InstanceProps;

    /**
     * Attribute InstanceId: Instance ID.
     */
    readonly attrInstanceId: ros.IResolvable | string;

    /**
     * Attribute OrderId: Order information.
     */
    readonly attrOrderId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::Flink::Instance`, which is used to create a subscription or pay-as-you-go Realtime Compute for Apache Flink instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-flink-instance
 */
export class Instance extends ros.Resource implements IInstance {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: InstanceProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute InstanceId: Instance ID.
     */
    public readonly attrInstanceId: ros.IResolvable | string;

    /**
     * Attribute OrderId: Order information.
     */
    public readonly attrOrderId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosInstance = new RosInstance(this, id,  {
            instanceName: props.instanceName,
            vpcId: props.vpcId,
            zoneId: props.zoneId,
            bucket: props.bucket,
            vSwitchIds: props.vSwitchIds,
            pricingCycle: props.pricingCycle,
            chargeType: props.chargeType,
            autoRenew: props.autoRenew,
            promotionCode: props.promotionCode,
            resourceSpec: props.resourceSpec,
            duration: props.duration,
            usePromotionCode: props.usePromotionCode,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstance;
        this.attrInstanceId = rosInstance.attrInstanceId;
        this.attrOrderId = rosInstance.attrOrderId;
    }
}
