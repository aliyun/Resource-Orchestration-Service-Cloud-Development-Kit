import * as ros from '@alicloud/ros-cdk-core';
import { RosDhcpOptionsSetAttachment } from './vpc.generated';
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::DhcpOptionsSetAttachment`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDhcpOptionsSetAttachment`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-dhcpoptionssetattachment
 */
export declare class DhcpOptionsSetAttachment extends ros.Resource {
    /**
     * Attribute DhcpOptionsSetId: The ID of the DHCP options set.
     */
    readonly attrDhcpOptionsSetId: ros.IResolvable;
    /**
     * Attribute VpcId: The ID of the VPC network.
     */
    readonly attrVpcId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DhcpOptionsSetAttachmentProps, enableResourcePropertyConstraint?: boolean);
}
