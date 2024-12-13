import * as ros from '@alicloud/ros-cdk-core';
import { RosBasicAccelerator } from './ga.generated';
export { RosBasicAccelerator as BasicAcceleratorProperty };
/**
 * Properties for defining a `BasicAccelerator`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicaccelerator
 */
export interface BasicAcceleratorProps {
    /**
     * Property autoPay: Specifies whether to enable automatic payment. Valid values:
     * false: disables automatic payment. If you select this option, you must go to the Order Center to complete the payment after an order is generated. This is the default value.
     * true: enables automatic payment. Payments are automatically completed.
     */
    readonly autoPay?: boolean | ros.IResolvable;
    /**
     * Property autoRenew: Specifies whether to enable auto-renewal for the basic GA instance. Valid values:
     * true: enables auto-renewal for the basic GA instance.
     * false: disables auto-renewal for the basic GA instance. This is the default value.
     */
    readonly autoRenew?: boolean | ros.IResolvable;
    /**
     * Property autoRenewDuration: The auto-renewal duration. Unit: months.Valid values: 1 to 12. Default value: 1.
     */
    readonly autoRenewDuration?: number | ros.IResolvable;
    /**
     * Property autoUseCoupon: Specifies whether to automatically apply coupons to your bills. Valid values:
     * true: automatically applies coupons to your bills.
     * false: does not automatically apply coupons to your bills. This is the default value.
     */
    readonly autoUseCoupon?: string | ros.IResolvable;
    /**
     * Property bandwidthBillingType: The bandwidth billing method. Valid values:
     * BandwidthPackage: billed based on bandwidth plans.
     * CDT: billed based on data transfer. The bills are managed by using Cloud Data Transfer (CDT).
     * CDT95: billed based on the 95th percentile bandwidth. The bills are managed by using Cloud Data Transfer (CDT). This bandwidth billing method is not available by default. Contact your Alibaba Cloud account manager for more information.
     */
    readonly bandwidthBillingType?: string | ros.IResolvable;
    /**
     * Property chargeType: The billing method. Valid values:
     * PREPAY (default)POSTPAY
     */
    readonly chargeType?: string | ros.IResolvable;
    /**
     * Property duration: The subscription duration of the GA instance.
     * If you set PricingCycle to Month, the valid values for Duration are 1 to 9.
     * If you set PricingCycle to Year, the valid values for Duration are 1 to 3.
     */
    readonly duration?: number | ros.IResolvable;
    /**
     * Property pricingCycle: The billing cycle. Valid values:
     * Month
     * Year
     */
    readonly pricingCycle?: string | ros.IResolvable;
    /**
     * Property promotionOptionNo: The code of the coupon.
     */
    readonly promotionOptionNo?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the resource group to which the basic GA instance belongs.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property tags: The tags of the basic GA instance.
     */
    readonly tags?: RosBasicAccelerator.TagsProperty[];
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::GA::BasicAccelerator`, which is used to create a basic Global Accelerator (GA) instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosBasicAccelerator`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicaccelerator
 */
export declare class BasicAccelerator extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: BasicAcceleratorProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AcceleratorId: The ID of the accelerated IP address.
     */
    readonly attrAcceleratorId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: BasicAcceleratorProps, enableResourcePropertyConstraint?: boolean);
}
