import * as ros from '@alicloud/ros-cdk-core';
import { RosBandwidthPackage } from './ga.generated';
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
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * Represents a `BandwidthPackage`.
 */
export interface IBandwidthPackage extends ros.IResource {
    readonly props: BandwidthPackageProps;
    /**
     * Attribute AutoRenew: Whether to enable automatic renewal.
     */
    readonly attrAutoRenew: ros.IResolvable | string;
    /**
     * Attribute AutoRenewDuration: The duration of automatic renewal. Unit: Month.
     */
    readonly attrAutoRenewDuration: ros.IResolvable | string;
    /**
     * Attribute Bandwidth: The bandwidth value of the bandwidth package. Unit: Mbps. Value range: 2~2000.
     */
    readonly attrBandwidth: ros.IResolvable | string;
    /**
     * Attribute BandwidthPackageId: The Resource ID of the bandwidth.
     */
    readonly attrBandwidthPackageId: ros.IResolvable | string;
    /**
     * Attribute BandwidthPackageName: The Resource name of the bandwidth.
     */
    readonly attrBandwidthPackageName: ros.IResolvable | string;
    /**
     * Attribute BandwidthType: Bandwidth type.
     */
    readonly attrBandwidthType: ros.IResolvable | string;
    /**
     * Attribute BillingType: Post-payment billing method.
     */
    readonly attrBillingType: ros.IResolvable | string;
    /**
     * Attribute CbnGeographicRegionIdA: The interworking region A of cross-region acceleration packages. The value is China-mainland only.
     */
    readonly attrCbnGeographicRegionIdA: ros.IResolvable | string;
    /**
     * Attribute CbnGeographicRegionIdB: The interworking Region B of cross-region acceleration packages. The value is Global only.
     */
    readonly attrCbnGeographicRegionIdB: ros.IResolvable | string;
    /**
     * Attribute CreateTime: Bandwidth package creation time.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute Description: the description of bandwidth package.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute ExpiredTime: Bandwidth package expiration time.
     */
    readonly attrExpiredTime: ros.IResolvable | string;
    /**
     * Attribute PaymentType: Type of payment.
     */
    readonly attrPaymentType: ros.IResolvable | string;
    /**
     * Attribute Ratio: 95 Billing guaranteed percentage. Value range: 30~100.
     */
    readonly attrRatio: ros.IResolvable | string;
    /**
     * Attribute RenewalStatus: Renewal status.
     */
    readonly attrRenewalStatus: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
    /**
     * Attribute Type: The type of the bandwidth package.
     */
    readonly attrType: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::GA::BandwidthPackage`, which is used to query the information about a bandwidth plan.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosBandwidthPackage`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ga-bandwidthpackage
 */
export declare class BandwidthPackage extends ros.Resource implements IBandwidthPackage {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: BandwidthPackageProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AutoRenew: Whether to enable automatic renewal.
     */
    readonly attrAutoRenew: ros.IResolvable | string;
    /**
     * Attribute AutoRenewDuration: The duration of automatic renewal. Unit: Month.
     */
    readonly attrAutoRenewDuration: ros.IResolvable | string;
    /**
     * Attribute Bandwidth: The bandwidth value of the bandwidth package. Unit: Mbps. Value range: 2~2000.
     */
    readonly attrBandwidth: ros.IResolvable | string;
    /**
     * Attribute BandwidthPackageId: The Resource ID of the bandwidth.
     */
    readonly attrBandwidthPackageId: ros.IResolvable | string;
    /**
     * Attribute BandwidthPackageName: The Resource name of the bandwidth.
     */
    readonly attrBandwidthPackageName: ros.IResolvable | string;
    /**
     * Attribute BandwidthType: Bandwidth type.
     */
    readonly attrBandwidthType: ros.IResolvable | string;
    /**
     * Attribute BillingType: Post-payment billing method.
     */
    readonly attrBillingType: ros.IResolvable | string;
    /**
     * Attribute CbnGeographicRegionIdA: The interworking region A of cross-region acceleration packages. The value is China-mainland only.
     */
    readonly attrCbnGeographicRegionIdA: ros.IResolvable | string;
    /**
     * Attribute CbnGeographicRegionIdB: The interworking Region B of cross-region acceleration packages. The value is Global only.
     */
    readonly attrCbnGeographicRegionIdB: ros.IResolvable | string;
    /**
     * Attribute CreateTime: Bandwidth package creation time.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute Description: the description of bandwidth package.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute ExpiredTime: Bandwidth package expiration time.
     */
    readonly attrExpiredTime: ros.IResolvable | string;
    /**
     * Attribute PaymentType: Type of payment.
     */
    readonly attrPaymentType: ros.IResolvable | string;
    /**
     * Attribute Ratio: 95 Billing guaranteed percentage. Value range: 30~100.
     */
    readonly attrRatio: ros.IResolvable | string;
    /**
     * Attribute RenewalStatus: Renewal status.
     */
    readonly attrRenewalStatus: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
    /**
     * Attribute Type: The type of the bandwidth package.
     */
    readonly attrType: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: BandwidthPackageProps, enableResourcePropertyConstraint?: boolean);
}
