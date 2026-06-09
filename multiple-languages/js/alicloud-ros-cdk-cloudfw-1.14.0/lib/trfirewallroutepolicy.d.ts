import * as ros from '@alicloud/ros-cdk-core';
import { RosTrFirewallRoutePolicy } from './cloudfw.generated';
export { RosTrFirewallRoutePolicy as TrFirewallRoutePolicyProperty };
/**
 * Properties for defining a `TrFirewallRoutePolicy`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-trfirewallroutepolicy
 */
export interface TrFirewallRoutePolicyProps {
    /**
     * Property firewallId: The instance ID of the VPC firewall.
     */
    readonly firewallId: string | ros.IResolvable;
    /**
     * Property policyDescription: The description of the traffic redirection instance.
     */
    readonly policyDescription: string | ros.IResolvable;
    /**
     * Property policyName: The name of the traffic redirection instance.
     */
    readonly policyName: string | ros.IResolvable;
    /**
     * Property policyType: The type of the traffic redirection scenario of the VPC firewall. Valid values:
     * fullmesh: interconnected instances
     * one_to_one: instance to instance
     * end_to_end: instance to instances
     */
    readonly policyType: string | ros.IResolvable;
    /**
     * Property destCandidateList: The secondary traffic redirection instances.
     */
    readonly destCandidateList?: Array<RosTrFirewallRoutePolicy.DestCandidateListProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property srcCandidateList: The primary traffic redirection instances.
     */
    readonly srcCandidateList?: Array<RosTrFirewallRoutePolicy.SrcCandidateListProperty | ros.IResolvable> | ros.IResolvable;
}
/**
 * Represents a `TrFirewallRoutePolicy`.
 */
export interface ITrFirewallRoutePolicy extends ros.IResource {
    readonly props: TrFirewallRoutePolicyProps;
    /**
     * Attribute FirewallId: The instance ID of the VPC firewall.
     */
    readonly attrFirewallId: ros.IResolvable | string;
    /**
     * Attribute TrFirewallRoutePolicyId: The ID of the routing policy.
     */
    readonly attrTrFirewallRoutePolicyId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CLOUDFW::TrFirewallRoutePolicy`, which is used to create a routing policy for a virtual private cloud (VPC) firewall of a transit router.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTrFirewallRoutePolicy`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-trfirewallroutepolicy
 */
export declare class TrFirewallRoutePolicy extends ros.Resource implements ITrFirewallRoutePolicy {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: TrFirewallRoutePolicyProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute FirewallId: The instance ID of the VPC firewall.
     */
    readonly attrFirewallId: ros.IResolvable | string;
    /**
     * Attribute TrFirewallRoutePolicyId: The ID of the routing policy.
     */
    readonly attrTrFirewallRoutePolicyId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TrFirewallRoutePolicyProps, enableResourcePropertyConstraint?: boolean);
}
