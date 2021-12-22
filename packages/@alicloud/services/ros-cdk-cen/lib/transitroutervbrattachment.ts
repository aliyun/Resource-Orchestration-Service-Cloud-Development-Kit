import * as ros from '@alicloud/ros-cdk-core';
import { RosTransitRouterVbrAttachment } from './cen.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosTransitRouterVbrAttachment as TransitRouterVbrAttachmentProperty };

/**
 * Properties for defining a `ALIYUN::CEN::TransitRouterVbrAttachment`
 */
export interface TransitRouterVbrAttachmentProps {

    /**
     * Property vbrId: VbrId
     */
    readonly vbrId: string | ros.IResolvable;

    /**
     * Property autoPublishRouteEnabled: AutoPublishRouteEnabled
     */
    readonly autoPublishRouteEnabled?: boolean | ros.IResolvable;

    /**
     * Property cenId: CenId
     */
    readonly cenId?: string | ros.IResolvable;

    /**
     * Property transitRouterAttachmentDescription: TransitRouterAttachmentDescription
     */
    readonly transitRouterAttachmentDescription?: string | ros.IResolvable;

    /**
     * Property transitRouterAttachmentName: TransitRouterAttachmentName
     */
    readonly transitRouterAttachmentName?: string | ros.IResolvable;

    /**
     * Property transitRouterId: TransitRouterId
     */
    readonly transitRouterId?: string | ros.IResolvable;

    /**
     * Property vbrOwnerId: VbrOwnerId
     */
    readonly vbrOwnerId?: number | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::CEN::TransitRouterVbrAttachment`
 */
export class TransitRouterVbrAttachment extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute AutoPublishRouteEnabled: AutoPublishRouteEnabled
     */
    public readonly attrAutoPublishRouteEnabled: ros.IResolvable;

    /**
     * Attribute CenId: CenId
     */
    public readonly attrCenId: ros.IResolvable;

    /**
     * Attribute ClientToken: ClientToken
     */
    public readonly attrClientToken: ros.IResolvable;

    /**
     * Attribute ResourceType: ResourceType
     */
    public readonly attrResourceType: ros.IResolvable;

    /**
     * Attribute TransitRouterAttachmentDescription: TransitRouterAttachmentDescription
     */
    public readonly attrTransitRouterAttachmentDescription: ros.IResolvable;

    /**
     * Attribute TransitRouterAttachmentId: The first ID of the resource
     */
    public readonly attrTransitRouterAttachmentId: ros.IResolvable;

    /**
     * Attribute TransitRouterAttachmentName: TransitRouterAttachmentName
     */
    public readonly attrTransitRouterAttachmentName: ros.IResolvable;

    /**
     * Attribute TransitRouterId: TransitRouterId
     */
    public readonly attrTransitRouterId: ros.IResolvable;

    /**
     * Attribute VbrId: VbrId
     */
    public readonly attrVbrId: ros.IResolvable;

    /**
     * Attribute VbrOwnerId: VbrOwnerId
     */
    public readonly attrVbrOwnerId: ros.IResolvable;

    /**
     * Create a new `ALIYUN::CEN::TransitRouterVbrAttachment`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TransitRouterVbrAttachmentProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosTransitRouterVbrAttachment = new RosTransitRouterVbrAttachment(this, id,  {
            autoPublishRouteEnabled: props.autoPublishRouteEnabled,
            vbrOwnerId: props.vbrOwnerId,
            cenId: props.cenId,
            transitRouterAttachmentName: props.transitRouterAttachmentName,
            vbrId: props.vbrId,
            transitRouterAttachmentDescription: props.transitRouterAttachmentDescription,
            transitRouterId: props.transitRouterId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosTransitRouterVbrAttachment;
        this.attrAutoPublishRouteEnabled = rosTransitRouterVbrAttachment.attrAutoPublishRouteEnabled;
        this.attrCenId = rosTransitRouterVbrAttachment.attrCenId;
        this.attrClientToken = rosTransitRouterVbrAttachment.attrClientToken;
        this.attrResourceType = rosTransitRouterVbrAttachment.attrResourceType;
        this.attrTransitRouterAttachmentDescription = rosTransitRouterVbrAttachment.attrTransitRouterAttachmentDescription;
        this.attrTransitRouterAttachmentId = rosTransitRouterVbrAttachment.attrTransitRouterAttachmentId;
        this.attrTransitRouterAttachmentName = rosTransitRouterVbrAttachment.attrTransitRouterAttachmentName;
        this.attrTransitRouterId = rosTransitRouterVbrAttachment.attrTransitRouterId;
        this.attrVbrId = rosTransitRouterVbrAttachment.attrVbrId;
        this.attrVbrOwnerId = rosTransitRouterVbrAttachment.attrVbrOwnerId;
    }
}
