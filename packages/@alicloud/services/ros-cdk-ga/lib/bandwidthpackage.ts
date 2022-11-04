import * as ros from '@alicloud/ros-cdk-core';
import { RosBandwidthPackage } from './ga.generated';
// Generated from the AliCloud ROS Resource Specification
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
     * Property autoPay: Specifies whether to enable automatic payment.
     */
    readonly autoPay?: boolean | ros.IResolvable;

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
export class BandwidthPackage extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute AutoPay: The AutoPay of the bandwidth
     */
    public readonly attrAutoPay: ros.IResolvable;

    /**
     * Attribute AutoUseCoupon: The AutoUseCoupon  of the bandwidth
     */
    public readonly attrAutoUseCoupon: ros.IResolvable;

    /**
     * Attribute Bandwidth: The bandwidth provided by the bandwidth plan.
     */
    public readonly attrBandwidth: ros.IResolvable;

    /**
     * Attribute BandwidthPackageId: The Resource ID of the bandwidth
     */
    public readonly attrBandwidthPackageId: ros.IResolvable;

    /**
     * Attribute BandwidthPackageName: The Resource name of the bandwidth
     */
    public readonly attrBandwidthPackageName: ros.IResolvable;

    /**
     * Attribute BandwidthType: the bandwidth BandwidthType of the bandwidth
     */
    public readonly attrBandwidthType: ros.IResolvable;

    /**
     * Attribute BillingType: The BillingType of the bandwidth
     */
    public readonly attrBillingType: ros.IResolvable;

    /**
     * Attribute CbnGeographicRegionIdA: The CbnGeographicRegionIdA  of the bandwidth
     */
    public readonly attrCbnGeographicRegionIdA: ros.IResolvable;

    /**
     * Attribute CbnGeographicRegionIdB: The CbnGeographicRegionIdB of the bandwidth
     */
    public readonly attrCbnGeographicRegionIdB: ros.IResolvable;

    /**
     * Attribute ChargeType: The ChargeType of the bandwidth
     */
    public readonly attrChargeType: ros.IResolvable;

    /**
     * Attribute PaymentType: The Payment Type of the bandwidth
     */
    public readonly attrPaymentType: ros.IResolvable;

    /**
     * Attribute Ratio: The Ratio of the bandwidth
     */
    public readonly attrRatio: ros.IResolvable;

    /**
     * Attribute Type: The type of the bandwidth plan
     */
    public readonly attrType: ros.IResolvable;

    /**
     * Create a new `ALIYUN::GA::BandwidthPackage`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: BandwidthPackageProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosBandwidthPackage = new RosBandwidthPackage(this, id,  {
            bandwidthType: props.bandwidthType,
            cbnGeographicRegionIdB: props.cbnGeographicRegionIdB,
            type: props.type,
            cbnGeographicRegionIdA: props.cbnGeographicRegionIdA,
            autoUseCoupon: props.autoUseCoupon,
            pricingCycle: props.pricingCycle,
            chargeType: props.chargeType,
            bandwidth: props.bandwidth,
            ratio: props.ratio,
            duration: props.duration,
            autoPay: props.autoPay === undefined || props.autoPay === null ? true : props.autoPay,
            billingType: props.billingType,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosBandwidthPackage;
        this.attrAutoPay = rosBandwidthPackage.attrAutoPay;
        this.attrAutoUseCoupon = rosBandwidthPackage.attrAutoUseCoupon;
        this.attrBandwidth = rosBandwidthPackage.attrBandwidth;
        this.attrBandwidthPackageId = rosBandwidthPackage.attrBandwidthPackageId;
        this.attrBandwidthPackageName = rosBandwidthPackage.attrBandwidthPackageName;
        this.attrBandwidthType = rosBandwidthPackage.attrBandwidthType;
        this.attrBillingType = rosBandwidthPackage.attrBillingType;
        this.attrCbnGeographicRegionIdA = rosBandwidthPackage.attrCbnGeographicRegionIdA;
        this.attrCbnGeographicRegionIdB = rosBandwidthPackage.attrCbnGeographicRegionIdB;
        this.attrChargeType = rosBandwidthPackage.attrChargeType;
        this.attrPaymentType = rosBandwidthPackage.attrPaymentType;
        this.attrRatio = rosBandwidthPackage.attrRatio;
        this.attrType = rosBandwidthPackage.attrType;
    }
}
