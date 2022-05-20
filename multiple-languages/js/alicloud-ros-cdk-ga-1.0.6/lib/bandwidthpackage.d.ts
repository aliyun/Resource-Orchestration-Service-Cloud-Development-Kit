import * as ros from '@alicloud/ros-cdk-core';
import { RosBandwidthPackage } from './ga.generated';
export { RosBandwidthPackage as BandwidthPackageProperty };
/**
 * Properties for defining a `ALIYUN::GA::BandwidthPackage`
 */
export interface BandwidthPackageProps {
    /**
     * Property bandwidth: The bandwidth provided by the bandwidth plan.
     */
    readonly bandwidth: number | ros.IResolvable;
    /**
     * Property type: The type of the bandwidth plan
     */
    readonly type: string | ros.IResolvable;
    /**
     * Property autoPay: The AutoPay of the bandwidth
     */
    readonly autoPay?: string | ros.IResolvable;
    /**
     * Property autoUseCoupon: The AutoUseCoupon  of the bandwidth
     */
    readonly autoUseCoupon?: string | ros.IResolvable;
    /**
     * Property bandwidthType: the bandwidth BandwidthType of the bandwidth
     */
    readonly bandwidthType?: string | ros.IResolvable;
    /**
     * Property billingType: The BillingType of the bandwidth
     */
    readonly billingType?: string | ros.IResolvable;
    /**
     * Property cbnGeographicRegionIdA: The CbnGeographicRegionIdA  of the bandwidth
     */
    readonly cbnGeographicRegionIdA?: string | ros.IResolvable;
    /**
     * Property cbnGeographicRegionIdB: The CbnGeographicRegionIdB of the bandwidth
     */
    readonly cbnGeographicRegionIdB?: string | ros.IResolvable;
    /**
     * Property chargeType: The ChargeType of the bandwidth
     */
    readonly chargeType?: string | ros.IResolvable;
    /**
     * Property duration:
     */
    readonly duration?: string | ros.IResolvable;
    /**
     * Property pricingCycle:
     */
    readonly pricingCycle?: string | ros.IResolvable;
    /**
     * Property ratio: The Ratio of the bandwidth
     */
    readonly ratio?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::GA::BandwidthPackage`
 */
export declare class BandwidthPackage extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute AutoPay: The AutoPay of the bandwidth
     */
    readonly attrAutoPay: ros.IResolvable;
    /**
     * Attribute AutoUseCoupon: The AutoUseCoupon  of the bandwidth
     */
    readonly attrAutoUseCoupon: ros.IResolvable;
    /**
     * Attribute Bandwidth: The bandwidth provided by the bandwidth plan.
     */
    readonly attrBandwidth: ros.IResolvable;
    /**
     * Attribute BandwidthPackageId: The Resource ID of the bandwidth
     */
    readonly attrBandwidthPackageId: ros.IResolvable;
    /**
     * Attribute BandwidthPackageName: The Resource name of the bandwidth
     */
    readonly attrBandwidthPackageName: ros.IResolvable;
    /**
     * Attribute BandwidthType: the bandwidth BandwidthType of the bandwidth
     */
    readonly attrBandwidthType: ros.IResolvable;
    /**
     * Attribute BillingType: The BillingType of the bandwidth
     */
    readonly attrBillingType: ros.IResolvable;
    /**
     * Attribute CbnGeographicRegionIdA: The CbnGeographicRegionIdA  of the bandwidth
     */
    readonly attrCbnGeographicRegionIdA: ros.IResolvable;
    /**
     * Attribute CbnGeographicRegionIdB: The CbnGeographicRegionIdB of the bandwidth
     */
    readonly attrCbnGeographicRegionIdB: ros.IResolvable;
    /**
     * Attribute ChargeType: The ChargeType of the bandwidth
     */
    readonly attrChargeType: ros.IResolvable;
    /**
     * Attribute PaymentType: The Payment Type of the bandwidth
     */
    readonly attrPaymentType: ros.IResolvable;
    /**
     * Attribute Ratio: The Ratio of the bandwidth
     */
    readonly attrRatio: ros.IResolvable;
    /**
     * Attribute Type: The type of the bandwidth plan
     */
    readonly attrType: ros.IResolvable;
    /**
     * Create a new `ALIYUN::GA::BandwidthPackage`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: BandwidthPackageProps, enableResourcePropertyConstraint?: boolean);
}
//# sourceMappingURL=bandwidthpackage.d.ts.map