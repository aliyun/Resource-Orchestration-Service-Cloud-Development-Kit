import * as ros from '@alicloud/ros-cdk-core';
import { RosVpcIpv6CidrAllocation } from './vpc.generated';
export { RosVpcIpv6CidrAllocation as VpcIpv6CidrAllocationProperty };
/**
 * Properties for defining a `VpcIpv6CidrAllocation`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpcipv6cidrallocation
 */
export interface VpcIpv6CidrAllocationProps {
    /**
     * Property addressPoolType: The type of the IPv6 address pool. Set the value to custom.
     * Note This parameter is required.
     */
    readonly addressPoolType?: string | ros.IResolvable;
    /**
     * Property ipv6CidrBlock: The IPv6 CIDR block that you want to reserve.
     */
    readonly ipv6CidrBlock?: string | ros.IResolvable;
    /**
     * Property ipv6Isp: The type of IPv6 CIDR block. Valid values:
     * BGP (default)
     * BGP_International
     * ChinaMobile
     * ChinaUnicom
     * ChinaTelecom
     * ChinaMobile_L2
     * ChinaUnicom_L2
     * ChinaTelecom_L2
     * Note
     * If your Alibaba Cloud account is allowed to use single-ISP bandwidth, valid values are: ChinaTelecom, ChinaUnicom, and ChinaMobile.
     * You can reserve only one IPv6 CIDR block of each type. After a reserved IPv6 CIDR block of a type is allocated to a VPC, you can reserve another IPv6 CIDR of the type.
     */
    readonly ipv6Isp?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::VpcIpv6CidrAllocation`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosVpcIpv6CidrAllocation`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpcipv6cidrallocation
 */
export declare class VpcIpv6CidrAllocation extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: VpcIpv6CidrAllocationProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Ipv6CidrBlock: The IPv6 CIDR block that is reserved.
     */
    readonly attrIpv6CidrBlock: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: VpcIpv6CidrAllocationProps, enableResourcePropertyConstraint?: boolean);
}
