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
 * Represents a `TransitRouterVbrAttachment`.
 */
export interface ITransitRouterVbrAttachment extends ros.IResource {
    readonly props: TransitRouterVbrAttachmentProps;

    /**
     * Attribute AutoPublishRouteEnabled: AutoPublishRouteEnabled
     */
    readonly attrAutoPublishRouteEnabled: ros.IResolvable | string;

    /**
     * Attribute CenId: CenId
     */
    readonly attrCenId: ros.IResolvable | string;

    /**
     * Attribute ClientToken: ClientToken
     */
    readonly attrClientToken: ros.IResolvable | string;

    /**
     * Attribute ResourceType: ResourceType
     */
    readonly attrResourceType: ros.IResolvable | string;

    /**
     * Attribute TransitRouterAttachmentDescription: TransitRouterAttachmentDescription
     */
    readonly attrTransitRouterAttachmentDescription: ros.IResolvable | string;

    /**
     * Attribute TransitRouterAttachmentId: The first ID of the resource
     */
    readonly attrTransitRouterAttachmentId: ros.IResolvable | string;

    /**
     * Attribute TransitRouterAttachmentName: TransitRouterAttachmentName
     */
    readonly attrTransitRouterAttachmentName: ros.IResolvable | string;

    /**
     * Attribute TransitRouterId: TransitRouterId
     */
    readonly attrTransitRouterId: ros.IResolvable | string;

    /**
     * Attribute VbrId: VbrId
     */
    readonly attrVbrId: ros.IResolvable | string;

    /**
     * Attribute VbrOwnerId: VbrOwnerId
     */
    readonly attrVbrOwnerId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CEN::TransitRouterVbrAttachment`, which is used to create a virtual border router (VBR) connection on an Enterprise Edition transit router.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTransitRouterVbrAttachment`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitroutervbrattachment
 */
export class TransitRouterVbrAttachment extends ros.Resource implements ITransitRouterVbrAttachment {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: TransitRouterVbrAttachmentProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AutoPublishRouteEnabled: AutoPublishRouteEnabled
     */
    public readonly attrAutoPublishRouteEnabled: ros.IResolvable | string;

    /**
     * Attribute CenId: CenId
     */
    public readonly attrCenId: ros.IResolvable | string;

    /**
     * Attribute ClientToken: ClientToken
     */
    public readonly attrClientToken: ros.IResolvable | string;

    /**
     * Attribute ResourceType: ResourceType
     */
    public readonly attrResourceType: ros.IResolvable | string;

    /**
     * Attribute TransitRouterAttachmentDescription: TransitRouterAttachmentDescription
     */
    public readonly attrTransitRouterAttachmentDescription: ros.IResolvable | string;

    /**
     * Attribute TransitRouterAttachmentId: The first ID of the resource
     */
    public readonly attrTransitRouterAttachmentId: ros.IResolvable | string;

    /**
     * Attribute TransitRouterAttachmentName: TransitRouterAttachmentName
     */
    public readonly attrTransitRouterAttachmentName: ros.IResolvable | string;

    /**
     * Attribute TransitRouterId: TransitRouterId
     */
    public readonly attrTransitRouterId: ros.IResolvable | string;

    /**
     * Attribute VbrId: VbrId
     */
    public readonly attrVbrId: ros.IResolvable | string;

    /**
     * Attribute VbrOwnerId: VbrOwnerId
     */
    public readonly attrVbrOwnerId: ros.IResolvable | string;

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
