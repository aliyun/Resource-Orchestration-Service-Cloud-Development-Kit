import * as ros from '@alicloud/ros-cdk-core';
import { RosBandwidthPackage } from './ga.generated';
export { RosBandwidthPackage as BandwidthPackageProperty };
/**
 * Properties for defining a `ALIYUN::GA::BandwidthPackage`
 */
export interface BandwidthPackageProps {
    /**
     * @Property bandwidth: The bandwidth provided by the bandwidth plan.
     */
    readonly bandwidth: number;
    /**
     * @Property type: The type of the bandwidth plan
     */
    readonly type: string;
    /**
     * @Property autoPay: The AutoPay of the bandwidth
     */
    readonly autoPay?: string;
    /**
     * @Property autoUseCoupon: The AutoUseCoupon  of the bandwidth
     */
    readonly autoUseCoupon?: string;
    /**
     * @Property bandwidthType: the bandwidth BandwidthType of the bandwidth
     */
    readonly bandwidthType?: string;
    /**
     * @Property billingType: The BillingType of the bandwidth
     */
    readonly billingType?: string;
    /**
     * @Property cbnGeographicRegionIdA: The CbnGeographicRegionIdA  of the bandwidth
     */
    readonly cbnGeographicRegionIdA?: string;
    /**
     * @Property cbnGeographicRegionIdB: The CbnGeographicRegionIdB of the bandwidth
     */
    readonly cbnGeographicRegionIdB?: string;
    /**
     * @Property chargeType: The ChargeType of the bandwidth
     */
    readonly chargeType?: string;
    /**
     * @Property duration:
     */
    readonly duration?: string;
    /**
     * @Property pricingCycle:
     */
    readonly pricingCycle?: string;
    /**
     * @Property ratio: The Ratio of the bandwidth
     */
    readonly ratio?: string;
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
     * @Attribute AutoPay: The AutoPay of the bandwidth
     */
    readonly attrAutoPay: any;
    /**
     * @Attribute AutoUseCoupon: The AutoUseCoupon  of the bandwidth
     */
    readonly attrAutoUseCoupon: any;
    /**
     * @Attribute Bandwidth: The bandwidth provided by the bandwidth plan.
     */
    readonly attrBandwidth: any;
    /**
     * @Attribute BandwidthPackageId: The Resource ID of the bandwidth
     */
    readonly attrBandwidthPackageId: any;
    /**
     * @Attribute BandwidthPackageName: The Resource name of the bandwidth
     */
    readonly attrBandwidthPackageName: any;
    /**
     * @Attribute BandwidthType: the bandwidth BandwidthType of the bandwidth
     */
    readonly attrBandwidthType: any;
    /**
     * @Attribute BillingType: The BillingType of the bandwidth
     */
    readonly attrBillingType: any;
    /**
     * @Attribute CbnGeographicRegionIdA: The CbnGeographicRegionIdA  of the bandwidth
     */
    readonly attrCbnGeographicRegionIdA: any;
    /**
     * @Attribute CbnGeographicRegionIdB: The CbnGeographicRegionIdB of the bandwidth
     */
    readonly attrCbnGeographicRegionIdB: any;
    /**
     * @Attribute ChargeType: The ChargeType of the bandwidth
     */
    readonly attrChargeType: any;
    /**
     * @Attribute PaymentType: The Payment Type of the bandwidth
     */
    readonly attrPaymentType: any;
    /**
     * @Attribute Ratio: The Ratio of the bandwidth
     */
    readonly attrRatio: any;
    /**
     * @Attribute Type: The type of the bandwidth plan
     */
    readonly attrType: any;
    /**
     * Create a new `ALIYUN::GA::BandwidthPackage`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: BandwidthPackageProps, enableResourcePropertyConstraint?: boolean);
}
