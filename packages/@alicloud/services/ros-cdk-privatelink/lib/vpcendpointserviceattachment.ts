import * as ros from '@alicloud/ros-cdk-core';
import { RosVpcEndpointServiceAttachment } from './privatelink.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosVpcEndpointServiceAttachment as VpcEndpointServiceAttachmentProperty };

/**
 * Properties for defining a `ALIYUN::PrivateLink::VpcEndpointServiceAttachment`
 */
export interface VpcEndpointServiceAttachmentProps {

    /**
     * Property resourceId: The resource id.
     */
    readonly resourceId: string | ros.IResolvable;

    /**
     * Property resourceType: The resource type.
     */
    readonly resourceType: string | ros.IResolvable;

    /**
     * Property serviceId: The endpoint service that is associated with the endpoint.
     */
    readonly serviceId: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::PrivateLink::VpcEndpointServiceAttachment`
 */
export class VpcEndpointServiceAttachment extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute ResourceId: The resource id.
     */
    public readonly attrResourceId: ros.IResolvable;

    /**
     * Attribute ResourceType: The resource type.
     */
    public readonly attrResourceType: ros.IResolvable;

    /**
     * Attribute ServiceId: The endpoint service that is associated with the endpoint.
     */
    public readonly attrServiceId: ros.IResolvable;

    /**
     * Create a new `ALIYUN::PrivateLink::VpcEndpointServiceAttachment`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: VpcEndpointServiceAttachmentProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosVpcEndpointServiceAttachment = new RosVpcEndpointServiceAttachment(this, id,  {
            resourceId: props.resourceId,
            resourceType: props.resourceType,
            serviceId: props.serviceId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosVpcEndpointServiceAttachment;
        this.attrResourceId = rosVpcEndpointServiceAttachment.attrResourceId;
        this.attrResourceType = rosVpcEndpointServiceAttachment.attrResourceType;
        this.attrServiceId = rosVpcEndpointServiceAttachment.attrServiceId;
    }
}
