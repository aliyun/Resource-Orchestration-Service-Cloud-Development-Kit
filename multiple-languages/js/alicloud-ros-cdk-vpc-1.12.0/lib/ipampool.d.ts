import * as ros from '@alicloud/ros-cdk-core';
import { RosIpamPool } from './vpc.generated';
export { RosIpamPool as IpamPoolProperty };
/**
 * Properties for defining a `IpamPool`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-ipampool
 */
export interface IpamPoolProps {
    /**
     * Property ipamScopeId: The ID of the IPAM scope. This parameter is required.
     */
    readonly ipamScopeId: string | ros.IResolvable;
    /**
     * Property allocationDefaultCidrMask: The default CIDR mask for allocation.
     */
    readonly allocationDefaultCidrMask?: number | ros.IResolvable;
    /**
     * Property allocationMaxCidrMask: The maximum CIDR mask for allocation.
     */
    readonly allocationMaxCidrMask?: number | ros.IResolvable;
    /**
     * Property allocationMinCidrMask: The minimum CIDR mask for allocation.
     */
    readonly allocationMinCidrMask?: number | ros.IResolvable;
    /**
     * Property autoImport: Whether to automatically import the IPAM pool.
     */
    readonly autoImport?: boolean | ros.IResolvable;
    /**
     * Property ipamPoolDescription: The description of the IPAM pool.
     */
    readonly ipamPoolDescription?: string | ros.IResolvable;
    /**
     * Property ipamPoolName: The name of the IPAM pool.
     */
    readonly ipamPoolName?: string | ros.IResolvable;
    /**
     * Property ipv6Isp: The IPv6 ISP for the IPAM pool.
     */
    readonly ipv6Isp?: string | ros.IResolvable;
    /**
     * Property ipVersion: The IP version of the IPAM pool. Valid values: IPv4, IPv6.
     */
    readonly ipVersion?: string | ros.IResolvable;
    /**
     * Property poolRegionId: The ID of the region where the IPAM pool is located.
     */
    readonly poolRegionId?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the resource group to which the IPAM pool belongs.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property sourceIpamPoolId: The ID of the source IPAM pool.
     */
    readonly sourceIpamPoolId?: string | ros.IResolvable;
    /**
     * Property tags: The tags of the IPAM pool. The maximum length is 21.
     */
    readonly tags?: RosIpamPool.TagsProperty[];
}
/**
 * Represents a `IpamPool`.
 */
export interface IIpamPool extends ros.IResource {
    readonly props: IpamPoolProps;
    /**
     * Attribute IpamPoolId: The ID of the IPAM pool.
     */
    readonly attrIpamPoolId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::IpamPool`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosIpamPool`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-ipampool
 */
export declare class IpamPool extends ros.Resource implements IIpamPool {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: IpamPoolProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute IpamPoolId: The ID of the IPAM pool.
     */
    readonly attrIpamPoolId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: IpamPoolProps, enableResourcePropertyConstraint?: boolean);
}
