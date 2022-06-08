import * as ros from '@alicloud/ros-cdk-core';
import { RosDhcpOptionsSetAttachment } from './vpc.generated';
export { RosDhcpOptionsSetAttachment as DhcpOptionsSetAttachmentProperty };
/**
 * Properties for defining a `ALIYUN::VPC::DhcpOptionsSetAttachment`
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
 * A ROS resource type:  `ALIYUN::VPC::DhcpOptionsSetAttachment`
 */
export declare class DhcpOptionsSetAttachment extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute DhcpOptionsSetId: The ID of the DHCP options set.
     */
    readonly attrDhcpOptionsSetId: ros.IResolvable;
    /**
     * Attribute VpcId: The ID of the VPC network.
     */
    readonly attrVpcId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::VPC::DhcpOptionsSetAttachment`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DhcpOptionsSetAttachmentProps, enableResourcePropertyConstraint?: boolean);
}
//# sourceMappingURL=dhcpoptionssetattachment.d.ts.map