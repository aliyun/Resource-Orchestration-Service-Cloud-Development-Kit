import * as ros from '@alicloud/ros-cdk-core';
import { RosTransitRouterGrantAttachment } from './cen.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosTransitRouterGrantAttachment as TransitRouterGrantAttachmentProperty };

/**
 * Properties for defining a `TransitRouterGrantAttachment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitroutergrantattachment
 */
export interface TransitRouterGrantAttachmentProps {

    /**
     * Property cenId: The ID of the Cloud Enterprise Network (CEN) instance.
     */
    readonly cenId: string | ros.IResolvable;

    /**
     * Property cenOwnerId: The Alibaba Cloud account ID (main account ID) of the CEN instance owner.
     */
    readonly cenOwnerId: number | ros.IResolvable;

    /**
     * Property instanceId: The ID of the network instance.
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * Property instanceType: The type of the network instance. Valid values:
     * - VPC: Virtual Private Cloud instance.
     * - ExpressConnect: Virtual Border Router (VBR) instance.
     * - VPN: IPsec connection.
     * - ECR: ECR instance.
     */
    readonly instanceType: string | ros.IResolvable;

    /**
     * Property orderType: The billing method for the network instance. Valid values:
     * - PayByCenOwner: The fees incurred by the network instance are paid by the owner of the CEN instance.
     * - PayByResourceOwner: The fees incurred by the network instance are paid by the owner of the network instance.
     */
    readonly orderType?: string | ros.IResolvable;
}

/**
 * Represents a `TransitRouterGrantAttachment`.
 */
export interface ITransitRouterGrantAttachment extends ros.IResource {
    readonly props: TransitRouterGrantAttachmentProps;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CEN::TransitRouterGrantAttachment`The , which resource grants a transit router permissions on a network instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTransitRouterGrantAttachment`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitroutergrantattachment
 */
export class TransitRouterGrantAttachment extends ros.Resource implements ITransitRouterGrantAttachment {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: TransitRouterGrantAttachmentProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TransitRouterGrantAttachmentProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosTransitRouterGrantAttachment = new RosTransitRouterGrantAttachment(this, id,  {
            orderType: props.orderType,
            instanceId: props.instanceId,
            cenOwnerId: props.cenOwnerId,
            cenId: props.cenId,
            instanceType: props.instanceType,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosTransitRouterGrantAttachment;
    }
}
