import * as ros from '@alicloud/ros-cdk-core';
import { RosTransitRouterVbrAttachment } from './cen.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosTransitRouterVbrAttachment as TransitRouterVbrAttachmentProperty };

/**
 * Properties for defining a `TransitRouterVbrAttachment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitroutervbrattachment
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::CEN::TransitRouterVbrAttachment`, which is used to create a virtual border router (VBR) connection from an Enterprise Edition transit router.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTransitRouterVbrAttachment`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitroutervbrattachment
 */
export class TransitRouterVbrAttachment extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: TransitRouterVbrAttachmentProps;
    protected enableResourcePropertyConstraint: boolean;

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
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TransitRouterVbrAttachmentProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

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
