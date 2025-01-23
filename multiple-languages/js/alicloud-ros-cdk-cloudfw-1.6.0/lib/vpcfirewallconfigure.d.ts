import * as ros from '@alicloud/ros-cdk-core';
import { RosVpcFirewallConfigure } from './cloudfw.generated';
export { RosVpcFirewallConfigure as VpcFirewallConfigureProperty };
/**
 * Properties for defining a `VpcFirewallConfigure`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-vpcfirewallconfigure
 */
export interface VpcFirewallConfigureProps {
    /**
     * Property firewallSwitch: The status of the VPC firewall after you create the firewall. Valid values:
     * open: After you create the VPC firewall, the VPC firewall is automatically enabled. This is the default value.
     * close: After you create the VPC firewall, the VPC firewall is disabled. To enable the firewall, you can call the ModifyVpcFirewallSwitchStatus operation.
     */
    readonly firewallSwitch: string | ros.IResolvable;
    /**
     * Property localVpcCidrTableList: The CIDR blocks of the local VPC.
     */
    readonly localVpcCidrTableList: Array<RosVpcFirewallConfigure.LocalVpcCidrTableListProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property localVpcId: The ID of the local VPC.
     */
    readonly localVpcId: string | ros.IResolvable;
    /**
     * Property localVpcRegion: The region ID of the local VPC.
     */
    readonly localVpcRegion: string | ros.IResolvable;
    /**
     * Property peerVpcCidrTableList: The CIDR blocks of the peer VPC.
     */
    readonly peerVpcCidrTableList: Array<RosVpcFirewallConfigure.PeerVpcCidrTableListProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property peerVpcId: The ID of the peer VPC.
     */
    readonly peerVpcId: string | ros.IResolvable;
    /**
     * Property peerVpcRegion: The region ID of the peer VPC.
     */
    readonly peerVpcRegion: string | ros.IResolvable;
    /**
     * Property vpcFirewallName: The instance name of the VPC firewall.
     */
    readonly vpcFirewallName: string | ros.IResolvable;
    /**
     * Property memberUid: The UID of the member that is managed by your Alibaba Cloud account.
     */
    readonly memberUid?: string | ros.IResolvable;
}
/**
 * Represents a `VpcFirewallConfigure`.
 */
export interface IVpcFirewallConfigure extends ros.IResource {
    readonly props: VpcFirewallConfigureProps;
    /**
     * Attribute VpcFirewallId: The instance ID of the VPC firewall.
     */
    readonly attrVpcFirewallId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CLOUDFW::VpcFirewallConfigure`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosVpcFirewallConfigure`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-vpcfirewallconfigure
 */
export declare class VpcFirewallConfigure extends ros.Resource implements IVpcFirewallConfigure {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: VpcFirewallConfigureProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute VpcFirewallId: The instance ID of the VPC firewall.
     */
    readonly attrVpcFirewallId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: VpcFirewallConfigureProps, enableResourcePropertyConstraint?: boolean);
}
