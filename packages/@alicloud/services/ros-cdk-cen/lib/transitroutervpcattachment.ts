import * as ros from '@alicloud/ros-cdk-core';
import { RosTransitRouterVpcAttachment } from './cen.generated';
// Generated from the AliCloud ROS Resource Specification
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
export class TransitRouterVpcAttachment extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

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
     * Attribute VpcId: VpcId
     */
    public readonly attrVpcId: ros.IResolvable;

    /**
     * Attribute VpcOwnerId: VpcOwnerId
     */
    public readonly attrVpcOwnerId: ros.IResolvable;

    /**
     * Create a new `ALIYUN::CEN::TransitRouterVpcAttachment`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TransitRouterVpcAttachmentProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosTransitRouterVpcAttachment = new RosTransitRouterVpcAttachment(this, id,  {
            vpcId: props.vpcId,
            chargeType: props.chargeType,
            cenId: props.cenId,
            transitRouterAttachmentName: props.transitRouterAttachmentName,
            zoneMappings: props.zoneMappings,
            vpcOwnerId: props.vpcOwnerId,
            transitRouterAttachmentDescription: props.transitRouterAttachmentDescription,
            transitRouterId: props.transitRouterId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosTransitRouterVpcAttachment;
        this.attrCenId = rosTransitRouterVpcAttachment.attrCenId;
        this.attrClientToken = rosTransitRouterVpcAttachment.attrClientToken;
        this.attrResourceType = rosTransitRouterVpcAttachment.attrResourceType;
        this.attrTransitRouterAttachmentDescription = rosTransitRouterVpcAttachment.attrTransitRouterAttachmentDescription;
        this.attrTransitRouterAttachmentId = rosTransitRouterVpcAttachment.attrTransitRouterAttachmentId;
        this.attrTransitRouterAttachmentName = rosTransitRouterVpcAttachment.attrTransitRouterAttachmentName;
        this.attrTransitRouterId = rosTransitRouterVpcAttachment.attrTransitRouterId;
        this.attrVpcId = rosTransitRouterVpcAttachment.attrVpcId;
        this.attrVpcOwnerId = rosTransitRouterVpcAttachment.attrVpcOwnerId;
    }
}
