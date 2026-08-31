import * as ros from '@alicloud/ros-cdk-core';
import { RosIpamPoolAllocation } from './vpc.generated';
export { RosIpamPoolAllocation as IpamPoolAllocationProperty };
/**
 * Properties for defining a `IpamPoolAllocation`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-ipampoolallocation
 */
export interface IpamPoolAllocationProps {
    /**
     * Property ipamPoolId: The ID of the IPAM Pool.
     */
    readonly ipamPoolId: string | ros.IResolvable;
    /**
     * Property cidr: The allocated address segment.
     */
    readonly cidr?: string | ros.IResolvable;
    /**
     * Property cidrMask: Create a custom reserved network segment from The IPAM address pool by entering a mask.
     * > Enter at least one of **Cidr** or **CidrMask.
     */
    readonly cidrMask?: number | ros.IResolvable;
    /**
     * Property ipamPoolAllocationDescription: The description of the ipam pool alloctaion.
     * It must be 1 to 256 characters in length and must start with an English letter or Chinese character, but cannot start with 'http:\/\/ 'or 'https. If it is not filled in, it is empty. The default value is empty.
     */
    readonly ipamPoolAllocationDescription?: string | ros.IResolvable;
    /**
     * Property ipamPoolAllocationName: The name of the ipam pool allocation.
     * It must be 1 to 128 characters in length and cannot start with 'http:\/\/ 'or 'https.
     */
    readonly ipamPoolAllocationName?: string | ros.IResolvable;
}
/**
 * Represents a `IpamPoolAllocation`.
 */
export interface IIpamPoolAllocation extends ros.IResource {
    readonly props: IpamPoolAllocationProps;
    /**
     * Attribute Cidr: The allocated address segment.
     */
    readonly attrCidr: ros.IResolvable | string;
    /**
     * Attribute CreateTime: Instance creation time.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute IpamPoolAllocationDescription: The description of the ipam pool alloctaion.
     */
    readonly attrIpamPoolAllocationDescription: ros.IResolvable | string;
    /**
     * Attribute IpamPoolAllocationId: The instance ID of the ipam pool allocation.
     */
    readonly attrIpamPoolAllocationId: ros.IResolvable | string;
    /**
     * Attribute IpamPoolAllocationName: The name of the ipam pool allocation.
     */
    readonly attrIpamPoolAllocationName: ros.IResolvable | string;
    /**
     * Attribute IpamPoolId: The ID of the IPAM Pool.
     */
    readonly attrIpamPoolId: ros.IResolvable | string;
    /**
     * Attribute ResourceOwnerId: The ID of the Alibaba Cloud account (primary account) to which the resource belongs.
     */
    readonly attrResourceOwnerId: ros.IResolvable | string;
    /**
     * Attribute ResourceType: The type of resource.
     */
    readonly attrResourceType: ros.IResolvable | string;
    /**
     * Attribute SourceCidr: The source address segment.
     */
    readonly attrSourceCidr: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::IpamPoolAllocation`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosIpamPoolAllocation`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-ipampoolallocation
 */
export declare class IpamPoolAllocation extends ros.Resource implements IIpamPoolAllocation {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: IpamPoolAllocationProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Cidr: The allocated address segment.
     */
    readonly attrCidr: ros.IResolvable | string;
    /**
     * Attribute CreateTime: Instance creation time.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute IpamPoolAllocationDescription: The description of the ipam pool alloctaion.
     */
    readonly attrIpamPoolAllocationDescription: ros.IResolvable | string;
    /**
     * Attribute IpamPoolAllocationId: The instance ID of the ipam pool allocation.
     */
    readonly attrIpamPoolAllocationId: ros.IResolvable | string;
    /**
     * Attribute IpamPoolAllocationName: The name of the ipam pool allocation.
     */
    readonly attrIpamPoolAllocationName: ros.IResolvable | string;
    /**
     * Attribute IpamPoolId: The ID of the IPAM Pool.
     */
    readonly attrIpamPoolId: ros.IResolvable | string;
    /**
     * Attribute ResourceOwnerId: The ID of the Alibaba Cloud account (primary account) to which the resource belongs.
     */
    readonly attrResourceOwnerId: ros.IResolvable | string;
    /**
     * Attribute ResourceType: The type of resource.
     */
    readonly attrResourceType: ros.IResolvable | string;
    /**
     * Attribute SourceCidr: The source address segment.
     */
    readonly attrSourceCidr: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: IpamPoolAllocationProps, enableResourcePropertyConstraint?: boolean);
}
