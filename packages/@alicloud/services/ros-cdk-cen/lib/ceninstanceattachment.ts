import * as ros from '@alicloud/ros-cdk-core';
import { RosCenInstanceAttachment } from './cen.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosCenInstanceAttachment as CenInstanceAttachmentProperty };

/**
 * Properties for defining a `ALIYUN::CEN::CenInstanceAttachment`
 */
export interface CenInstanceAttachmentProps {

    /**
     * Property cenId: The ID of the CEN instance.
     */
    readonly cenId: string;

    /**
     * Property childInstanceId: The ID of the network to attach.
     */
    readonly childInstanceId: string;

    /**
     * Property childInstanceRegionId: The ID of the region where the network is located. The ID of the region where the network is located.
     */
    readonly childInstanceRegionId: string;

    /**
     * Property childInstanceType: The type of the network to attach. Support VPC, VBR or CCN.
     */
    readonly childInstanceType: string;

    /**
     * Property childInstanceOwnerId: The account ID to which the network belongs.
     */
    readonly childInstanceOwnerId?: number;
}

/**
 * A ROS resource type:  `ALIYUN::CEN::CenInstanceAttachment`
 */
export class CenInstanceAttachment extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Create a new `ALIYUN::CEN::CenInstanceAttachment`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CenInstanceAttachmentProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosCenInstanceAttachment = new RosCenInstanceAttachment(this, id,  {
            childInstanceType: props.childInstanceType,
            cenId: props.cenId,
            childInstanceOwnerId: props.childInstanceOwnerId,
            childInstanceId: props.childInstanceId,
            childInstanceRegionId: props.childInstanceRegionId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosCenInstanceAttachment;
    }
}
