import * as ros from '@alicloud/ros-cdk-core';
import { RosTransitRouterVbrAttachment } from './cen.generated';
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
export declare class TransitRouterVbrAttachment extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute AutoPublishRouteEnabled: AutoPublishRouteEnabled
     */
    readonly attrAutoPublishRouteEnabled: ros.IResolvable;
    /**
     * Attribute CenId: CenId
     */
    readonly attrCenId: ros.IResolvable;
    /**
     * Attribute ClientToken: ClientToken
     */
    readonly attrClientToken: ros.IResolvable;
    /**
     * Attribute ResourceType: ResourceType
     */
    readonly attrResourceType: ros.IResolvable;
    /**
     * Attribute TransitRouterAttachmentDescription: TransitRouterAttachmentDescription
     */
    readonly attrTransitRouterAttachmentDescription: ros.IResolvable;
    /**
     * Attribute TransitRouterAttachmentId: The first ID of the resource
     */
    readonly attrTransitRouterAttachmentId: ros.IResolvable;
    /**
     * Attribute TransitRouterAttachmentName: TransitRouterAttachmentName
     */
    readonly attrTransitRouterAttachmentName: ros.IResolvable;
    /**
     * Attribute TransitRouterId: TransitRouterId
     */
    readonly attrTransitRouterId: ros.IResolvable;
    /**
     * Attribute VbrId: VbrId
     */
    readonly attrVbrId: ros.IResolvable;
    /**
     * Attribute VbrOwnerId: VbrOwnerId
     */
    readonly attrVbrOwnerId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::CEN::TransitRouterVbrAttachment`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TransitRouterVbrAttachmentProps, enableResourcePropertyConstraint?: boolean);
}
