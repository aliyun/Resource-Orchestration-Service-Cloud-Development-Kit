import * as ros from '@alicloud/ros-cdk-core';
import { RosVpcFirewallCen } from './cloudfw.generated';
export { RosVpcFirewallCen as VpcFirewallCenProperty };
/**
 * Properties for defining a `VpcFirewallCen`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-vpcfirewallcen
 */
export interface VpcFirewallCenProps {
    /**
     * Property cenId: The ID of the CEN instance.
     */
    readonly cenId: string | ros.IResolvable;
    /**
     * Property firewallSwitch: Specifies whether to enable the VPC firewall. Valid values:
     * open: After you create the VPC firewall, the VPC firewall is automatically enabled. This is the default value.
     * close: After you create the VPC firewall, the VPC firewall is disabled. You can call the ModifyVpcFirewallCenSwitchStatus operation to manually enable the VPC firewall.
     */
    readonly firewallSwitch: string | ros.IResolvable;
    /**
     * Property firewallVpcZoneId: The ID of the zone to which the vSwitch belongs. If your service is latency-sensitive, you can specify the same zone for the vSwitch of the firewall and the vSwitch of your business VPC to minimize latency.If you do not specify a value, a zone is automatically assigned for the vSwitch.
     */
    readonly firewallVpcZoneId: string | ros.IResolvable;
    /**
     * Property networkInstanceId: The ID of the VPC for which you want to create the VPC firewall.
     */
    readonly networkInstanceId: string | ros.IResolvable;
    /**
     * Property vpcFirewallName: The instance name of the VPC firewall.
     */
    readonly vpcFirewallName: string | ros.IResolvable;
    /**
     * Property vpcRegion: The ID of the region to which the VPC belongs.
     */
    readonly vpcRegion: string | ros.IResolvable;
    /**
     * Property firewallVpcCidrBlock: The CIDR block of the VPC that is automatically created for the VPC firewall. You must specify a CIDR block for the Cloud_Firewall_VPC VPC that is automatically created for the VPC firewall for traffic redirection. The subnet mask of the CIDR block must be less than or equal to 28 bits in length.If you do not specify a value, the CIDR block 10.0.0.0\/8 is automatically allocated.
     */
    readonly firewallVpcCidrBlock?: string | ros.IResolvable;
    /**
     * Property firewallVSwitchCidrBlock: The CIDR block of the vSwitch that is automatically created for the VPC firewall.You must specify a CIDR block for the Cloud_Firewall_VSWITCH VPC that is automatically created for the VPC firewall for traffic redirection. The CIDR block does not conflict with your network plan. The subnet mask of the CIDR block must be less than or equal to 29 bits in length. The CIDR block of the vSwitch must be within the network segment of the VPC.If you do not specify a value, the CIDR block 10.219.219.216\/29 is automatically allocated.
     */
    readonly firewallVSwitchCidrBlock?: string | ros.IResolvable;
    /**
     * Property memberUid: The UID of the member that is managed by your Alibaba Cloud account.
     */
    readonly memberUid?: string | ros.IResolvable;
    /**
     * Property vSwitchId: The ID of the vSwitch that is used to associate with the elastic network interface (ENI) required by the VPC firewall.
     */
    readonly vSwitchId?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CLOUDFW::VpcFirewallCen`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosVpcFirewallCen`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-vpcfirewallcen
 */
export declare class VpcFirewallCen extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: VpcFirewallCenProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute VpcFirewallId: The instance ID of the VPC firewall.
     */
    readonly attrVpcFirewallId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: VpcFirewallCenProps, enableResourcePropertyConstraint?: boolean);
}
