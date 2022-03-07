import * as ros from '@alicloud/ros-cdk-core';
import { RosEIPAssociation } from './vpc.generated';
export { RosEIPAssociation as EIPAssociationProperty };
/**
 * Properties for defining a `ALIYUN::VPC::EIPAssociation`
 */
export interface EIPAssociationProps {
    /**
     * Property allocationId: EIP instance id to bind.
     */
    readonly allocationId: string | ros.IResolvable;
    /**
     * Property instanceId: ECS/SLB/NAT/HaVip/ENI instance id to bid the EIP.
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
 * A ROS resource type:  `ALIYUN::VPC::EIPAssociation`
 */
export declare class EIPAssociation extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute AllocationId: ID that Aliyun assigns to represent the allocation of the address for use with VPC. Returned only for VPC elastic IP addresses.
     */
    readonly attrAllocationId: ros.IResolvable;
    /**
     * Attribute EipAddress: IP address of created EIP.
     */
    readonly attrEipAddress: ros.IResolvable;
    /**
     * Create a new `ALIYUN::VPC::EIPAssociation`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: EIPAssociationProps, enableResourcePropertyConstraint?: boolean);
}
