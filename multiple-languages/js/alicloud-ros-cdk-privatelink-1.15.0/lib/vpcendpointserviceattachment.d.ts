import * as ros from '@alicloud/ros-cdk-core';
import { RosVpcEndpointServiceAttachment } from './privatelink.generated';
export { RosVpcEndpointServiceAttachment as VpcEndpointServiceAttachmentProperty };
/**
 * Properties for defining a `VpcEndpointServiceAttachment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-privatelink-vpcendpointserviceattachment
 */
export interface VpcEndpointServiceAttachmentProps {
    /**
     * Property resourceId: The resource id.
     */
    readonly resourceId: string | ros.IResolvable;
    /**
     * Property resourceType: The type of the service resource. Valid values:
     * - slb: Classic Load Balancer (CLB).
     * - alb: Application Load Balancer (ALB).
     * - nlb: Network Load Balancer (NLB).
     * - gwlb: Gateway Load Balancer (GWLB).
     */
    readonly resourceType: string | ros.IResolvable;
    /**
     * Property serviceId: The endpoint service that is associated with the endpoint.
     */
    readonly serviceId: string | ros.IResolvable;
    /**
     * Property zoneId: The zone where the service resource is located. This parameter is required if the
     * service resource is an ALB, NLB, or GWLB instance.
     */
    readonly zoneId?: string | ros.IResolvable;
}
/**
 * Represents a `VpcEndpointServiceAttachment`.
 */
export interface IVpcEndpointServiceAttachment extends ros.IResource {
    readonly props: VpcEndpointServiceAttachmentProps;
    /**
     * Attribute ResourceId: The resource id.
     */
    readonly attrResourceId: ros.IResolvable | string;
    /**
     * Attribute ResourceType: The resource type.
     */
    readonly attrResourceType: ros.IResolvable | string;
    /**
     * Attribute ServiceId: The endpoint service that is associated with the endpoint.
     */
    readonly attrServiceId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::PrivateLink::VpcEndpointServiceAttachment`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosVpcEndpointServiceAttachment`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-privatelink-vpcendpointserviceattachment
 */
export declare class VpcEndpointServiceAttachment extends ros.Resource implements IVpcEndpointServiceAttachment {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: VpcEndpointServiceAttachmentProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ResourceId: The resource id.
     */
    readonly attrResourceId: ros.IResolvable | string;
    /**
     * Attribute ResourceType: The resource type.
     */
    readonly attrResourceType: ros.IResolvable | string;
    /**
     * Attribute ServiceId: The endpoint service that is associated with the endpoint.
     */
    readonly attrServiceId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: VpcEndpointServiceAttachmentProps, enableResourcePropertyConstraint?: boolean);
}
