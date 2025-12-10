import * as ros from '@alicloud/ros-cdk-core';
import { RosInstanceV2 } from './flink.generated';
export { RosInstanceV2 as InstanceV2Property };
/**
 * Properties for defining a `InstanceV2`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-flink-instancev2
 */
export interface InstanceV2Props {
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
     * Property storage: Resource specifications.
     * When ChargeType is configured as PRE, the resource specification parameters must be filled.
     */
    readonly storage: RosInstanceV2.StorageProperty | ros.IResolvable;
    /**
     * Property vpcId: VPC ID.
     */
    readonly vpcId: string | ros.IResolvable;
    /**
     * Property vSwitchIds: Virtual switch ID.
     */
    readonly vSwitchIds: Array<any | ros.IResolvable> | ros.IResolvable;
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
    readonly resourceSpec?: RosInstanceV2.ResourceSpecProperty | ros.IResolvable;
    /**
     * Property usePromotionCode: Whether to use coupons.The value is as follows:
     * true: Use.
     * false: Not in use.
     */
    readonly usePromotionCode?: boolean | ros.IResolvable;
}
/**
 * Represents a `InstanceV2`.
 */
export interface IInstanceV2 extends ros.IResource {
    readonly props: InstanceV2Props;
    /**
     * Attribute InstanceId: Instance ID.
     */
    readonly attrInstanceId: ros.IResolvable | string;
    /**
     * Attribute OrderId: Order information.
     */
    readonly attrOrderId: ros.IResolvable | string;
    /**
     * Attribute WorkspaceId: Workspace ID.
     */
    readonly attrWorkspaceId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::Flink::InstanceV2`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstanceV2`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-flink-instancev2
 */
export declare class InstanceV2 extends ros.Resource implements IInstanceV2 {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: InstanceV2Props;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute InstanceId: Instance ID.
     */
    readonly attrInstanceId: ros.IResolvable | string;
    /**
     * Attribute OrderId: Order information.
     */
    readonly attrOrderId: ros.IResolvable | string;
    /**
     * Attribute WorkspaceId: Workspace ID.
     */
    readonly attrWorkspaceId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceV2Props, enableResourcePropertyConstraint?: boolean);
}
