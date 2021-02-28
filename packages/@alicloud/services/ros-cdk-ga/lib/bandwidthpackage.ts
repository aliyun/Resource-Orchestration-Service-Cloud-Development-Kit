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
    readonly bandwidth: number;

    /**
     * Property type: The type of the bandwidth plan
     */
    readonly type: string;

    /**
     * Property autoPay: The AutoPay of the bandwidth
     */
    readonly autoPay?: string;

    /**
     * Property autoUseCoupon: The AutoUseCoupon  of the bandwidth
     */
    readonly autoUseCoupon?: string;

    /**
     * Property bandwidthType: the bandwidth BandwidthType of the bandwidth
     */
    readonly bandwidthType?: string;

    /**
     * Property billingType: The BillingType of the bandwidth
     */
    readonly billingType?: string;

    /**
     * Property cbnGeographicRegionIdA: The CbnGeographicRegionIdA  of the bandwidth
     */
    readonly cbnGeographicRegionIdA?: string;

    /**
     * Property cbnGeographicRegionIdB: The CbnGeographicRegionIdB of the bandwidth
     */
    readonly cbnGeographicRegionIdB?: string;

    /**
     * Property chargeType: The ChargeType of the bandwidth
     */
    readonly chargeType?: string;

    /**
     * Property duration:
     */
    readonly duration?: string;

    /**
     * Property pricingCycle:
     */
    readonly pricingCycle?: string;

    /**
     * Property ratio: The Ratio of the bandwidth
     */
    readonly ratio?: string;
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
    public readonly attrAutoPay: any;

    /**
     * Attribute AutoUseCoupon: The AutoUseCoupon  of the bandwidth
     */
    public readonly attrAutoUseCoupon: any;

    /**
     * Attribute Bandwidth: The bandwidth provided by the bandwidth plan.
     */
    public readonly attrBandwidth: any;

    /**
     * Attribute BandwidthPackageId: The Resource ID of the bandwidth
     */
    public readonly attrBandwidthPackageId: any;

    /**
     * Attribute BandwidthPackageName: The Resource name of the bandwidth
     */
    public readonly attrBandwidthPackageName: any;

    /**
     * Attribute BandwidthType: the bandwidth BandwidthType of the bandwidth
     */
    public readonly attrBandwidthType: any;

    /**
     * Attribute BillingType: The BillingType of the bandwidth
     */
    public readonly attrBillingType: any;

    /**
     * Attribute CbnGeographicRegionIdA: The CbnGeographicRegionIdA  of the bandwidth
     */
    public readonly attrCbnGeographicRegionIdA: any;

    /**
     * Attribute CbnGeographicRegionIdB: The CbnGeographicRegionIdB of the bandwidth
     */
    public readonly attrCbnGeographicRegionIdB: any;

    /**
     * Attribute ChargeType: The ChargeType of the bandwidth
     */
    public readonly attrChargeType: any;

    /**
     * Attribute PaymentType: The Payment Type of the bandwidth
     */
    public readonly attrPaymentType: any;

    /**
     * Attribute Ratio: The Ratio of the bandwidth
     */
    public readonly attrRatio: any;

    /**
     * Attribute Type: The type of the bandwidth plan
     */
    public readonly attrType: any;

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
            autoPay: props.autoPay,
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
