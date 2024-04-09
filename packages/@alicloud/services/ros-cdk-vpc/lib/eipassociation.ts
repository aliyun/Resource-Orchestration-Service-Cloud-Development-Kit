import * as ros from '@alicloud/ros-cdk-core';
import { RosEIPAssociation } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::EIPAssociation`, which is used to associate an elastic IP address (EIP) with a cloud service instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosEIPAssociation`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-eipassociation
 */
export class EIPAssociation extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: EIPAssociationProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AllocationId: ID that Aliyun assigns to represent the allocation of the address for use with VPC. Returned only for VPC elastic IP addresses.
     */
    public readonly attrAllocationId: ros.IResolvable;

    /**
     * Attribute EipAddress: IP address of created EIP.
     */
    public readonly attrEipAddress: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: EIPAssociationProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosEIPAssociation = new RosEIPAssociation(this, id,  {
            privateIpAddress: props.privateIpAddress,
            instanceId: props.instanceId,
            mode: props.mode,
            allocationId: props.allocationId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosEIPAssociation;
        this.attrAllocationId = rosEIPAssociation.attrAllocationId;
        this.attrEipAddress = rosEIPAssociation.attrEipAddress;
    }
}
