import * as ros from '@alicloud/ros-cdk-core';
import { RosTransitRouterGrantAttachment } from './cen.generated';
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
     * Property orderType: The entity that pays the fees of the network instance. Valid values:
     * - PayByCenOwner: the account that owns the CEN instance.
     * - PayByResourceOwner: the account that owns the network instance.
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::CEN::TransitRouterGrantAttachment`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTransitRouterGrantAttachment`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitroutergrantattachment
 */
export declare class TransitRouterGrantAttachment extends ros.Resource implements ITransitRouterGrantAttachment {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: TransitRouterGrantAttachmentProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TransitRouterGrantAttachmentProps, enableResourcePropertyConstraint?: boolean);
}
