import * as ros from '@alicloud/ros-cdk-core';
import { RosCommonBandwidthPackage } from './vpc.generated';
export { RosCommonBandwidthPackage as CommonBandwidthPackageProperty };
/**
 * Properties for defining a `CommonBandwidthPackage`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-commonbandwidthpackage
 */
export interface CommonBandwidthPackageProps {
    /**
     * Property commonBandwidthPackageId: The ID of the Internet shared bandwidth.
     */
    readonly commonBandwidthPackageId?: string | ros.IResolvable;
    /**
     * Property commonBandwidthPackageName: The name of the Internet Shared Bandwidth instance.
     */
    readonly commonBandwidthPackageName?: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * Represents a `CommonBandwidthPackage`.
 */
export interface ICommonBandwidthPackage extends ros.IResource {
    readonly props: CommonBandwidthPackageProps;
    /**
     * Attribute Bandwidth: The maximum bandwidth of the Internet Shared Bandwidth instance. Unit: Mbit/s.
     */
    readonly attrBandwidth: ros.IResolvable | string;
    /**
     * Attribute BusinessStatus: The service status of the Internet Shared Bandwidth instance. Valid values:
* Normal: The Internet Shared Bandwidth instance runs as expected.
* FinancialLocked: An overdue payment occurs in the Internet Shared Bandwidth instance
* Unactivated: The Internet Shared Bandwidth instance is not activated.
     */
    readonly attrBusinessStatus: ros.IResolvable | string;
    /**
     * Attribute CommonBandwidthPackageId: The ID of the Internet shared bandwidth.
     */
    readonly attrCommonBandwidthPackageId: ros.IResolvable | string;
    /**
     * Attribute CommonBandwidthPackageName: The name of the Internet Shared Bandwidth instance.
     */
    readonly attrCommonBandwidthPackageName: ros.IResolvable | string;
    /**
     * Attribute CreationTime: The time when the Internet Shared Bandwidth instance was created. The time is displayed in the YYYY-MM-DDThh:mm:ssZ format.
     */
    readonly attrCreationTime: ros.IResolvable | string;
    /**
     * Attribute DeletionProtection: Indicates whether deletion protection is enabled. Valid values:
* false
* true
     */
    readonly attrDeletionProtection: ros.IResolvable | string;
    /**
     * Attribute Description: The description of the Internet Shared Bandwidth instance.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute ExpiredTime: The time when the Internet Shared Bandwidth instance expired. The time is displayed in the YYYY-MM-DDThh:mm:ssZ format.
     */
    readonly attrExpiredTime: ros.IResolvable | string;
    /**
     * Attribute HasReservationData: Indicates whether the information about pending orders is returned. Valid values:
* false
* true
     */
    readonly attrHasReservationData: ros.IResolvable | string;
    /**
     * Attribute InstanceChargeType: The billing method of the Internet Shared Bandwidth instance. Valid value:
* PostPaid: pay-as-you-go
* PrePaid: subscription
     */
    readonly attrInstanceChargeType: ros.IResolvable | string;
    /**
     * Attribute InternetChargeType: The metering method of the Internet Shared Bandwidth instance. Valid value:
* PayBy95: Charged by Enhanced 95th Percentile.
* PayByBandwidth: Charged by Bandwidth.
* PayByDominantTraffic: Charged by Dominant Traffic.
     */
    readonly attrInternetChargeType: ros.IResolvable | string;
    /**
     * Attribute Isp: The line type. Valid values:
BGP (default): BGP (Multi-ISP) lines.
BGP_PRO: BGP (Multi-ISP) Pro lines.
Valid values if you are allowed to use single-ISP bandwidth:
ChinaTelecom
ChinaUnicom
ChinaMobile
ChinaTelecom_L2
ChinaUnicom_L2
ChinaMobile_L2
     */
    readonly attrIsp: ros.IResolvable | string;
    /**
     * Attribute PublicIpAddresses: The elastic IP addresses (EIPs) that are associated with the Internet Shared Bandwidth instance.
     */
    readonly attrPublicIpAddresses: ros.IResolvable | string;
    /**
     * Attribute Ratio: The percentage of the minimum bandwidth commitment. Only 20 is returned.
     */
    readonly attrRatio: ros.IResolvable | string;
    /**
     * Attribute ReservationActiveTime: The time when the renewal took effect. The time is displayed in the YYYY-MM-DDThh:mm:ssZ format.
     */
    readonly attrReservationActiveTime: ros.IResolvable | string;
    /**
     * Attribute ReservationBandwidth: The new maximum bandwidth after the configurations are changed. Unit: Mbit/s.
     */
    readonly attrReservationBandwidth: ros.IResolvable | string;
    /**
     * Attribute ReservationInternetChargeType: The metering method after the configurations are changed. Valid value:
* PayBy95: Charged by Enhanced 95th Percentile.
* PayByBandwidth: Charged by Bandwidth.
* PayByDominantTraffic: Charged by Dominant Traffic.
     */
    readonly attrReservationInternetChargeType: ros.IResolvable | string;
    /**
     * Attribute ReservationOrderType: The renewal method. Valid values:
* RENEWCHANGE: renewal with a specification change
* TEMP_UPGRADE: renewal with a temporary upgrade
* UPGRADE: renewal with an upgrade
     */
    readonly attrReservationOrderType: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
    /**
     * Attribute ServiceManaged: Indicates whether the resource is created by the service account. Valid values:
* 0: The resource is not created by the service account.
* 1: The resource is created by the service account.
     */
    readonly attrServiceManaged: ros.IResolvable | string;
    /**
     * Attribute Status: The status of the Internet Shared Bandwidth instance. Valid values:
* Available: The Internet Shared Bandwidth instance is available.
* Modifying: The Internet Shared Bandwidth instance is being modified.
     */
    readonly attrStatus: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::VPC::CommonBandwidthPackage`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCommonBandwidthPackage`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-commonbandwidthpackage
 */
export declare class CommonBandwidthPackage extends ros.Resource implements ICommonBandwidthPackage {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: CommonBandwidthPackageProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Bandwidth: The maximum bandwidth of the Internet Shared Bandwidth instance. Unit: Mbit/s.
     */
    readonly attrBandwidth: ros.IResolvable | string;
    /**
     * Attribute BusinessStatus: The service status of the Internet Shared Bandwidth instance. Valid values:
* Normal: The Internet Shared Bandwidth instance runs as expected.
* FinancialLocked: An overdue payment occurs in the Internet Shared Bandwidth instance
* Unactivated: The Internet Shared Bandwidth instance is not activated.
     */
    readonly attrBusinessStatus: ros.IResolvable | string;
    /**
     * Attribute CommonBandwidthPackageId: The ID of the Internet shared bandwidth.
     */
    readonly attrCommonBandwidthPackageId: ros.IResolvable | string;
    /**
     * Attribute CommonBandwidthPackageName: The name of the Internet Shared Bandwidth instance.
     */
    readonly attrCommonBandwidthPackageName: ros.IResolvable | string;
    /**
     * Attribute CreationTime: The time when the Internet Shared Bandwidth instance was created. The time is displayed in the YYYY-MM-DDThh:mm:ssZ format.
     */
    readonly attrCreationTime: ros.IResolvable | string;
    /**
     * Attribute DeletionProtection: Indicates whether deletion protection is enabled. Valid values:
* false
* true
     */
    readonly attrDeletionProtection: ros.IResolvable | string;
    /**
     * Attribute Description: The description of the Internet Shared Bandwidth instance.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute ExpiredTime: The time when the Internet Shared Bandwidth instance expired. The time is displayed in the YYYY-MM-DDThh:mm:ssZ format.
     */
    readonly attrExpiredTime: ros.IResolvable | string;
    /**
     * Attribute HasReservationData: Indicates whether the information about pending orders is returned. Valid values:
* false
* true
     */
    readonly attrHasReservationData: ros.IResolvable | string;
    /**
     * Attribute InstanceChargeType: The billing method of the Internet Shared Bandwidth instance. Valid value:
* PostPaid: pay-as-you-go
* PrePaid: subscription
     */
    readonly attrInstanceChargeType: ros.IResolvable | string;
    /**
     * Attribute InternetChargeType: The metering method of the Internet Shared Bandwidth instance. Valid value:
* PayBy95: Charged by Enhanced 95th Percentile.
* PayByBandwidth: Charged by Bandwidth.
* PayByDominantTraffic: Charged by Dominant Traffic.
     */
    readonly attrInternetChargeType: ros.IResolvable | string;
    /**
     * Attribute Isp: The line type. Valid values:
BGP (default): BGP (Multi-ISP) lines.
BGP_PRO: BGP (Multi-ISP) Pro lines.
Valid values if you are allowed to use single-ISP bandwidth:
ChinaTelecom
ChinaUnicom
ChinaMobile
ChinaTelecom_L2
ChinaUnicom_L2
ChinaMobile_L2
     */
    readonly attrIsp: ros.IResolvable | string;
    /**
     * Attribute PublicIpAddresses: The elastic IP addresses (EIPs) that are associated with the Internet Shared Bandwidth instance.
     */
    readonly attrPublicIpAddresses: ros.IResolvable | string;
    /**
     * Attribute Ratio: The percentage of the minimum bandwidth commitment. Only 20 is returned.
     */
    readonly attrRatio: ros.IResolvable | string;
    /**
     * Attribute ReservationActiveTime: The time when the renewal took effect. The time is displayed in the YYYY-MM-DDThh:mm:ssZ format.
     */
    readonly attrReservationActiveTime: ros.IResolvable | string;
    /**
     * Attribute ReservationBandwidth: The new maximum bandwidth after the configurations are changed. Unit: Mbit/s.
     */
    readonly attrReservationBandwidth: ros.IResolvable | string;
    /**
     * Attribute ReservationInternetChargeType: The metering method after the configurations are changed. Valid value:
* PayBy95: Charged by Enhanced 95th Percentile.
* PayByBandwidth: Charged by Bandwidth.
* PayByDominantTraffic: Charged by Dominant Traffic.
     */
    readonly attrReservationInternetChargeType: ros.IResolvable | string;
    /**
     * Attribute ReservationOrderType: The renewal method. Valid values:
* RENEWCHANGE: renewal with a specification change
* TEMP_UPGRADE: renewal with a temporary upgrade
* UPGRADE: renewal with an upgrade
     */
    readonly attrReservationOrderType: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
    /**
     * Attribute ServiceManaged: Indicates whether the resource is created by the service account. Valid values:
* 0: The resource is not created by the service account.
* 1: The resource is created by the service account.
     */
    readonly attrServiceManaged: ros.IResolvable | string;
    /**
     * Attribute Status: The status of the Internet Shared Bandwidth instance. Valid values:
* Available: The Internet Shared Bandwidth instance is available.
* Modifying: The Internet Shared Bandwidth instance is being modified.
     */
    readonly attrStatus: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: CommonBandwidthPackageProps, enableResourcePropertyConstraint?: boolean);
}
