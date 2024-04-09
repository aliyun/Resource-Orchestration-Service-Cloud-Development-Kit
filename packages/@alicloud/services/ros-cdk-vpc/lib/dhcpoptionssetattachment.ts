import * as ros from '@alicloud/ros-cdk-core';
import { RosDhcpOptionsSetAttachment } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDhcpOptionsSetAttachment as DhcpOptionsSetAttachmentProperty };

/**
 * Properties for defining a `DhcpOptionsSetAttachment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-dhcpoptionssetattachment
 */
export interface DhcpOptionsSetAttachmentProps {

    /**
     * Property dhcpOptionsSetId: The ID of the DHCP options set.
     */
    readonly dhcpOptionsSetId: string | ros.IResolvable;

    /**
     * Property vpcId: The ID of the VPC network that is to be associated with the DHCP options set.
     */
    readonly vpcId: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::DhcpOptionsSetAttachment`, which is used to associate a Dynamic Host Configuration Protocol (DHCP) options set with a virtual private cloud (VPC).
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDhcpOptionsSetAttachment`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-dhcpoptionssetattachment
 */
export class DhcpOptionsSetAttachment extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: DhcpOptionsSetAttachmentProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute DhcpOptionsSetId: The ID of the DHCP options set.
     */
    public readonly attrDhcpOptionsSetId: ros.IResolvable;

    /**
     * Attribute VpcId: The ID of the VPC network.
     */
    public readonly attrVpcId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DhcpOptionsSetAttachmentProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosDhcpOptionsSetAttachment = new RosDhcpOptionsSetAttachment(this, id,  {
            dhcpOptionsSetId: props.dhcpOptionsSetId,
            vpcId: props.vpcId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDhcpOptionsSetAttachment;
        this.attrDhcpOptionsSetId = rosDhcpOptionsSetAttachment.attrDhcpOptionsSetId;
        this.attrVpcId = rosDhcpOptionsSetAttachment.attrVpcId;
    }
}
