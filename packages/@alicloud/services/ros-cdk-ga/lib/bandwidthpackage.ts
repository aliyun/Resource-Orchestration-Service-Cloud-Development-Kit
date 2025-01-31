import * as ros from '@alicloud/ros-cdk-core';
import { RosBandwidthPackage } from './ga.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosBandwidthPackage as BandwidthPackageProperty };

/**
 * Properties for defining a `BandwidthPackage`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-bandwidthpackage
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
 * Represents a `BandwidthPackage`.
 */
export interface IBandwidthPackage extends ros.IResource {
    readonly props: BandwidthPackageProps;

    /**
     * Attribute AutoPay: The AutoPay of the bandwidth
     */
    readonly attrAutoPay: ros.IResolvable | string;

    /**
     * Attribute AutoUseCoupon: The AutoUseCoupon  of the bandwidth
     */
    readonly attrAutoUseCoupon: ros.IResolvable | string;

    /**
     * Attribute Bandwidth: The bandwidth provided by the bandwidth plan.
     */
    readonly attrBandwidth: ros.IResolvable | string;

    /**
     * Attribute BandwidthPackageId: The Resource ID of the bandwidth
     */
    readonly attrBandwidthPackageId: ros.IResolvable | string;

    /**
     * Attribute BandwidthPackageName: The Resource name of the bandwidth
     */
    readonly attrBandwidthPackageName: ros.IResolvable | string;

    /**
     * Attribute BandwidthType: the bandwidth BandwidthType of the bandwidth
     */
    readonly attrBandwidthType: ros.IResolvable | string;

    /**
     * Attribute BillingType: The BillingType of the bandwidth
     */
    readonly attrBillingType: ros.IResolvable | string;

    /**
     * Attribute CbnGeographicRegionIdA: The CbnGeographicRegionIdA  of the bandwidth
     */
    readonly attrCbnGeographicRegionIdA: ros.IResolvable | string;

    /**
     * Attribute CbnGeographicRegionIdB: The CbnGeographicRegionIdB of the bandwidth
     */
    readonly attrCbnGeographicRegionIdB: ros.IResolvable | string;

    /**
     * Attribute ChargeType: The ChargeType of the bandwidth
     */
    readonly attrChargeType: ros.IResolvable | string;

    /**
     * Attribute PaymentType: The Payment Type of the bandwidth
     */
    readonly attrPaymentType: ros.IResolvable | string;

    /**
     * Attribute Ratio: The Ratio of the bandwidth
     */
    readonly attrRatio: ros.IResolvable | string;

    /**
     * Attribute Type: The type of the bandwidth plan
     */
    readonly attrType: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::GA::BandwidthPackage`, which is used to create a bandwidth plan.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosBandwidthPackage`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-bandwidthpackage
 */
export class BandwidthPackage extends ros.Resource implements IBandwidthPackage {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: BandwidthPackageProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AutoPay: The AutoPay of the bandwidth
     */
    public readonly attrAutoPay: ros.IResolvable | string;

    /**
     * Attribute AutoUseCoupon: The AutoUseCoupon  of the bandwidth
     */
    public readonly attrAutoUseCoupon: ros.IResolvable | string;

    /**
     * Attribute Bandwidth: The bandwidth provided by the bandwidth plan.
     */
    public readonly attrBandwidth: ros.IResolvable | string;

    /**
     * Attribute BandwidthPackageId: The Resource ID of the bandwidth
     */
    public readonly attrBandwidthPackageId: ros.IResolvable | string;

    /**
     * Attribute BandwidthPackageName: The Resource name of the bandwidth
     */
    public readonly attrBandwidthPackageName: ros.IResolvable | string;

    /**
     * Attribute BandwidthType: the bandwidth BandwidthType of the bandwidth
     */
    public readonly attrBandwidthType: ros.IResolvable | string;

    /**
     * Attribute BillingType: The BillingType of the bandwidth
     */
    public readonly attrBillingType: ros.IResolvable | string;

    /**
     * Attribute CbnGeographicRegionIdA: The CbnGeographicRegionIdA  of the bandwidth
     */
    public readonly attrCbnGeographicRegionIdA: ros.IResolvable | string;

    /**
     * Attribute CbnGeographicRegionIdB: The CbnGeographicRegionIdB of the bandwidth
     */
    public readonly attrCbnGeographicRegionIdB: ros.IResolvable | string;

    /**
     * Attribute ChargeType: The ChargeType of the bandwidth
     */
    public readonly attrChargeType: ros.IResolvable | string;

    /**
     * Attribute PaymentType: The Payment Type of the bandwidth
     */
    public readonly attrPaymentType: ros.IResolvable | string;

    /**
     * Attribute Ratio: The Ratio of the bandwidth
     */
    public readonly attrRatio: ros.IResolvable | string;

    /**
     * Attribute Type: The type of the bandwidth plan
     */
    public readonly attrType: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: BandwidthPackageProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

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
