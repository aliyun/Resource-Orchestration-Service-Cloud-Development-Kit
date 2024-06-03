import * as ros from '@alicloud/ros-cdk-core';
import { RosBandwidthPackage } from './ga.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosBandwidthPackage as BandwidthPackageProperty };

/**
 * Properties for defining a `BandwidthPackage`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ga-bandwidthpackage
 */
export interface BandwidthPackageProps {

    /**
     * Property bandwidthPackageId: The Resource ID of the bandwidth.
     */
    readonly bandwidthPackageId: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::GA::BandwidthPackage`, which is used to query the information about a bandwidth plan.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosBandwidthPackage`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ga-bandwidthpackage
 */
export class BandwidthPackage extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: BandwidthPackageProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AutoRenew: Whether to enable automatic renewal.
     */
    public readonly attrAutoRenew: ros.IResolvable;

    /**
     * Attribute AutoRenewDuration: The duration of automatic renewal. Unit: Month.
     */
    public readonly attrAutoRenewDuration: ros.IResolvable;

    /**
     * Attribute Bandwidth: The bandwidth value of the bandwidth package. Unit: Mbps. Value range: 2~2000.
     */
    public readonly attrBandwidth: ros.IResolvable;

    /**
     * Attribute BandwidthPackageId: The Resource ID of the bandwidth.
     */
    public readonly attrBandwidthPackageId: ros.IResolvable;

    /**
     * Attribute BandwidthPackageName: The Resource name of the bandwidth.
     */
    public readonly attrBandwidthPackageName: ros.IResolvable;

    /**
     * Attribute BandwidthType: Bandwidth type.
     */
    public readonly attrBandwidthType: ros.IResolvable;

    /**
     * Attribute BillingType: Post-payment billing method.
     */
    public readonly attrBillingType: ros.IResolvable;

    /**
     * Attribute CbnGeographicRegionIdA: The interworking region A of cross-region acceleration packages. The value is China-mainland only.
     */
    public readonly attrCbnGeographicRegionIdA: ros.IResolvable;

    /**
     * Attribute CbnGeographicRegionIdB: The interworking Region B of cross-region acceleration packages. The value is Global only.
     */
    public readonly attrCbnGeographicRegionIdB: ros.IResolvable;

    /**
     * Attribute CreateTime: Bandwidth package creation time.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * Attribute Description: the description of bandwidth package.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * Attribute ExpiredTime: Bandwidth package expiration time.
     */
    public readonly attrExpiredTime: ros.IResolvable;

    /**
     * Attribute PaymentType: Type of payment.
     */
    public readonly attrPaymentType: ros.IResolvable;

    /**
     * Attribute Ratio: 95 Billing guaranteed percentage. Value range: 30~100.
     */
    public readonly attrRatio: ros.IResolvable;

    /**
     * Attribute RenewalStatus: Renewal status.
     */
    public readonly attrRenewalStatus: ros.IResolvable;

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * Attribute Type: The type of the bandwidth package.
     */
    public readonly attrType: ros.IResolvable;

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
            bandwidthPackageId: props.bandwidthPackageId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosBandwidthPackage;
        this.attrAutoRenew = rosBandwidthPackage.attrAutoRenew;
        this.attrAutoRenewDuration = rosBandwidthPackage.attrAutoRenewDuration;
        this.attrBandwidth = rosBandwidthPackage.attrBandwidth;
        this.attrBandwidthPackageId = rosBandwidthPackage.attrBandwidthPackageId;
        this.attrBandwidthPackageName = rosBandwidthPackage.attrBandwidthPackageName;
        this.attrBandwidthType = rosBandwidthPackage.attrBandwidthType;
        this.attrBillingType = rosBandwidthPackage.attrBillingType;
        this.attrCbnGeographicRegionIdA = rosBandwidthPackage.attrCbnGeographicRegionIdA;
        this.attrCbnGeographicRegionIdB = rosBandwidthPackage.attrCbnGeographicRegionIdB;
        this.attrCreateTime = rosBandwidthPackage.attrCreateTime;
        this.attrDescription = rosBandwidthPackage.attrDescription;
        this.attrExpiredTime = rosBandwidthPackage.attrExpiredTime;
        this.attrPaymentType = rosBandwidthPackage.attrPaymentType;
        this.attrRatio = rosBandwidthPackage.attrRatio;
        this.attrRenewalStatus = rosBandwidthPackage.attrRenewalStatus;
        this.attrResourceGroupId = rosBandwidthPackage.attrResourceGroupId;
        this.attrType = rosBandwidthPackage.attrType;
    }
}
