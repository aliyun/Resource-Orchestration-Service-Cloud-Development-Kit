import * as ros from '@alicloud/ros-cdk-core';
import { RosEIPAssociation } from './vpc.generated';
export { RosEIPAssociation as EIPAssociationProperty };
/**
 * Properties for defining a `EIPAssociation`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-eipassociation
 */
export interface EIPAssociationProps {
    /**
     * Property allocationId: EIP instance id to bind.
     */
    readonly allocationId: string | ros.IResolvable;
    /**
     * Property instanceId: ECS\/SLB\/NAT\/HaVip\/ENI instance id to bid the EIP.
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * Property mode: The mode of association. Valid values:
     * NAT(Default): NAT mode.
     * BINDED: Cut-through mode.
     * MULTI_BINDED: Multi-EIP to ENI mode.
     * This is required only when the value of InstanceType is NetworkInterface.
     */
    readonly mode?: string | ros.IResolvable;
    /**
     * Property privateIpAddress: An IP address in the CIDR block of the VSwitch.
     * If you leave the option empty, the system allocates a private IP address according to the VPC ID and VSwitch ID.
     */
    readonly privateIpAddress?: string | ros.IResolvable;
}
/**
 * Represents a `EIPAssociation`.
 */
export interface IEIPAssociation extends ros.IResource {
    readonly props: EIPAssociationProps;
    /**
     * Attribute AllocationId: ID that Aliyun assigns to represent the allocation of the address for use with VPC. Returned only for VPC elastic IP addresses.
     */
    readonly attrAllocationId: ros.IResolvable | string;
    /**
     * Attribute EipAddress: IP address of created EIP.
     */
    readonly attrEipAddress: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::EIPAssociation`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosEIPAssociation`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-eipassociation
 */
export declare class EIPAssociation extends ros.Resource implements IEIPAssociation {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: EIPAssociationProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AllocationId: ID that Aliyun assigns to represent the allocation of the address for use with VPC. Returned only for VPC elastic IP addresses.
     */
    readonly attrAllocationId: ros.IResolvable | string;
    /**
     * Attribute EipAddress: IP address of created EIP.
     */
    readonly attrEipAddress: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: EIPAssociationProps, enableResourcePropertyConstraint?: boolean);
}
