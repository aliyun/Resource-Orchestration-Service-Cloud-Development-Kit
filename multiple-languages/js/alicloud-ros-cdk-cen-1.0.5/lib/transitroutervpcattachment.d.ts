import * as ros from '@alicloud/ros-cdk-core';
import { RosTransitRouterVpcAttachment } from './cen.generated';
export { RosTransitRouterVpcAttachment as TransitRouterVpcAttachmentProperty };
/**
 * Properties for defining a `ALIYUN::CEN::TransitRouterVpcAttachment`
 */
export interface TransitRouterVpcAttachmentProps {
    /**
     * Property vpcId: VpcId
     */
    readonly vpcId: string | ros.IResolvable;
    /**
     * Property zoneMappings: ZoneMappingss
     */
    readonly zoneMappings: Array<RosTransitRouterVpcAttachment.ZoneMappingsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property cenId: CenId
     */
    readonly cenId?: string | ros.IResolvable;
    /**
     * Property chargeType:
     */
    readonly chargeType?: string | ros.IResolvable;
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
     * Property vpcOwnerId: VpcOwnerId
     */
    readonly vpcOwnerId?: number | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::CEN::TransitRouterVpcAttachment`
 */
export declare class TransitRouterVpcAttachment extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
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
     * Attribute VpcId: VpcId
     */
    readonly attrVpcId: ros.IResolvable;
    /**
     * Attribute VpcOwnerId: VpcOwnerId
     */
    readonly attrVpcOwnerId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::CEN::TransitRouterVpcAttachment`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TransitRouterVpcAttachmentProps, enableResourcePropertyConstraint?: boolean);
}
