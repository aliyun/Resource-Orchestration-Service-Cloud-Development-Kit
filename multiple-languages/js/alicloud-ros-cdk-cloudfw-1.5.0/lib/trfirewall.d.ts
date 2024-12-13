import * as ros from '@alicloud/ros-cdk-core';
import { RosTrFirewall } from './cloudfw.generated';
export { RosTrFirewall as TrFirewallProperty };
/**
 * Properties for defining a `TrFirewall`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-trfirewall
 */
export interface TrFirewallProps {
    /**
     * Property cenId: The ID of the Cloud Enterprise Network (CEN) instance.
     */
    readonly cenId: string | ros.IResolvable;
    /**
     * Property firewallName: The name of the firewall.
     */
    readonly firewallName: string | ros.IResolvable;
    /**
     * Property regionNo: The region ID of the route router.
     */
    readonly regionNo: string | ros.IResolvable;
    /**
     * Property routeMode: The routing mode of the VPC firewall. Valid values:
     * managed: automatic mode
     * manual: manual mode
     */
    readonly routeMode: string | ros.IResolvable;
    /**
     * Property transitRouterId: The ID of the transit router.
     */
    readonly transitRouterId: string | ros.IResolvable;
    /**
     * Property firewallDescription: The description of the firewall.
     */
    readonly firewallDescription?: string | ros.IResolvable;
    /**
     * Property firewallSubnetCidr: The subnet CIDR block of the VPC in which the ENI of the firewall is stored in automatic mode.
     */
    readonly firewallSubnetCidr?: string | ros.IResolvable;
    /**
     * Property firewallVpcCidr: The CIDR block that is allocated to the VPC created for the VPC firewall in automatic mode.
     */
    readonly firewallVpcCidr?: string | ros.IResolvable;
    /**
     * Property firewallVpcId: The ID of the VPC in which the ENI associated with the VPC firewall is created in manual mode.
     */
    readonly firewallVpcId?: string | ros.IResolvable;
    /**
     * Property firewallVswitchId: The ID of the vSwitch that is used to create the ENI in manual mode.
     */
    readonly firewallVswitchId?: string | ros.IResolvable;
    /**
     * Property trAttachmentMasterCidr: The primary subnet CIDR block that the VPC uses to connect to the transit router in automatic mode.
     */
    readonly trAttachmentMasterCidr?: string | ros.IResolvable;
    /**
     * Property trAttachmentMasterZone: The primary zone for the vSwitch.
     */
    readonly trAttachmentMasterZone?: string | ros.IResolvable;
    /**
     * Property trAttachmentSlaveCidr: The secondary subnet CIDR block that the VPC uses to connect to the transit router in automatic mode.
     */
    readonly trAttachmentSlaveCidr?: string | ros.IResolvable;
    /**
     * Property trAttachmentSlaveZone: The secondary zone for the vSwitch.
     */
    readonly trAttachmentSlaveZone?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CLOUDFW::TrFirewall`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTrFirewall`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-trfirewall
 */
export declare class TrFirewall extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: TrFirewallProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute FirewallId: The instance ID of the VPC firewall.
     */
    readonly attrFirewallId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TrFirewallProps, enableResourcePropertyConstraint?: boolean);
}
