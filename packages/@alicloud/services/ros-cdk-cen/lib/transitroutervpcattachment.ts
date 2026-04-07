import * as ros from '@alicloud/ros-cdk-core';
import { RosTransitRouterVpcAttachment } from './cen.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosTransitRouterVpcAttachment as TransitRouterVpcAttachmentProperty };

/**
 * Properties for defining a `TransitRouterVpcAttachment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitroutervpcattachment
 */
export interface TransitRouterVpcAttachmentProps {

    /**
     * Property vpcId: The ID of the VPC.
     */
    readonly vpcId: string | ros.IResolvable;

    /**
     * Property zoneMappings: The zone mappings for the VPC.
     */
    readonly zoneMappings: Array<RosTransitRouterVpcAttachment.ZoneMappingsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property autoCreateVpcRoute: undefined
     */
    readonly autoCreateVpcRoute?: boolean | ros.IResolvable;

    /**
     * Property autoPublishRouteEnabled: Whether to automatically publish routes.
     */
    readonly autoPublishRouteEnabled?: boolean | ros.IResolvable;

    /**
     * Property cenId: The ID of the Cloud Enterprise Network (CEN) instance.
     */
    readonly cenId?: string | ros.IResolvable;

    /**
     * Property chargeType: The charge type of the transit router vpc attachment.
     */
    readonly chargeType?: string | ros.IResolvable;

    /**
     * Property deletionForce: Whether force delete related resources, like vpc route entry, route table association, route propagation.
     */
    readonly deletionForce?: boolean | ros.IResolvable;

    /**
     * Property routeTableAssociationEnabled: undefined
     */
    readonly routeTableAssociationEnabled?: boolean | ros.IResolvable;

    /**
     * Property routeTablePropagationEnabled: undefined
     */
    readonly routeTablePropagationEnabled?: boolean | ros.IResolvable;

    /**
     * Property transitRouterAttachmentDescription: The description of the transit router VPC attachment.
     */
    readonly transitRouterAttachmentDescription?: string | ros.IResolvable;

    /**
     * Property transitRouterAttachmentName: The name of the transit router VPC attachment.
     */
    readonly transitRouterAttachmentName?: string | ros.IResolvable;

    /**
     * Property transitRouterId: The ID of the transit router.
     */
    readonly transitRouterId?: string | ros.IResolvable;

    /**
     * Property transitRouterVpcAttachmentOptions: The options for the transit router VPC attachment.
     */
    readonly transitRouterVpcAttachmentOptions?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * Property vpcOwnerId: The owner ID of the VPC.
     */
    readonly vpcOwnerId?: number | ros.IResolvable;
}

/**
 * Represents a `TransitRouterVpcAttachment`.
 */
export interface ITransitRouterVpcAttachment extends ros.IResource {
    readonly props: TransitRouterVpcAttachmentProps;

    /**
     * Attribute CenId: CEN ID
     */
    readonly attrCenId: ros.IResolvable | string;

    /**
     * Attribute ResourceType: Resource Type
     */
    readonly attrResourceType: ros.IResolvable | string;

    /**
     * Attribute TransitRouterAttachmentDescription: Attachment Description
     */
    readonly attrTransitRouterAttachmentDescription: ros.IResolvable | string;

    /**
     * Attribute TransitRouterAttachmentId: The ID of the transit router VPC attachment.
     */
    readonly attrTransitRouterAttachmentId: ros.IResolvable | string;

    /**
     * Attribute TransitRouterAttachmentName: Attachment Name
     */
    readonly attrTransitRouterAttachmentName: ros.IResolvable | string;

    /**
     * Attribute TransitRouterId: Transit Router ID
     */
    readonly attrTransitRouterId: ros.IResolvable | string;

    /**
     * Attribute VpcId: VPC ID
     */
    readonly attrVpcId: ros.IResolvable | string;

    /**
     * Attribute VpcOwnerId: VPC Owner ID
     */
    readonly attrVpcOwnerId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CEN::TransitRouterVpcAttachment`, which is used to create a virtual private cloud (VPC) connection on an Enterprise Edition transit router.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTransitRouterVpcAttachment`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitroutervpcattachment
 */
export class TransitRouterVpcAttachment extends ros.Resource implements ITransitRouterVpcAttachment {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: TransitRouterVpcAttachmentProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CenId: CEN ID
     */
    public readonly attrCenId: ros.IResolvable | string;

    /**
     * Attribute ResourceType: Resource Type
     */
    public readonly attrResourceType: ros.IResolvable | string;

    /**
     * Attribute TransitRouterAttachmentDescription: Attachment Description
     */
    public readonly attrTransitRouterAttachmentDescription: ros.IResolvable | string;

    /**
     * Attribute TransitRouterAttachmentId: The ID of the transit router VPC attachment.
     */
    public readonly attrTransitRouterAttachmentId: ros.IResolvable | string;

    /**
     * Attribute TransitRouterAttachmentName: Attachment Name
     */
    public readonly attrTransitRouterAttachmentName: ros.IResolvable | string;

    /**
     * Attribute TransitRouterId: Transit Router ID
     */
    public readonly attrTransitRouterId: ros.IResolvable | string;

    /**
     * Attribute VpcId: VPC ID
     */
    public readonly attrVpcId: ros.IResolvable | string;

    /**
     * Attribute VpcOwnerId: VPC Owner ID
     */
    public readonly attrVpcOwnerId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TransitRouterVpcAttachmentProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosTransitRouterVpcAttachment = new RosTransitRouterVpcAttachment(this, id,  {
            transitRouterAttachmentName: props.transitRouterAttachmentName,
            zoneMappings: props.zoneMappings,
            vpcOwnerId: props.vpcOwnerId,
            transitRouterVpcAttachmentOptions: props.transitRouterVpcAttachmentOptions,
            autoPublishRouteEnabled: props.autoPublishRouteEnabled,
            routeTableAssociationEnabled: props.routeTableAssociationEnabled,
            deletionForce: props.deletionForce,
            autoCreateVpcRoute: props.autoCreateVpcRoute,
            vpcId: props.vpcId,
            chargeType: props.chargeType === undefined || props.chargeType === null ? 'POSTPAY' : props.chargeType,
            routeTablePropagationEnabled: props.routeTablePropagationEnabled,
            cenId: props.cenId,
            transitRouterAttachmentDescription: props.transitRouterAttachmentDescription,
            transitRouterId: props.transitRouterId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosTransitRouterVpcAttachment;
        this.attrCenId = rosTransitRouterVpcAttachment.attrCenId;
        this.attrResourceType = rosTransitRouterVpcAttachment.attrResourceType;
        this.attrTransitRouterAttachmentDescription = rosTransitRouterVpcAttachment.attrTransitRouterAttachmentDescription;
        this.attrTransitRouterAttachmentId = rosTransitRouterVpcAttachment.attrTransitRouterAttachmentId;
        this.attrTransitRouterAttachmentName = rosTransitRouterVpcAttachment.attrTransitRouterAttachmentName;
        this.attrTransitRouterId = rosTransitRouterVpcAttachment.attrTransitRouterId;
        this.attrVpcId = rosTransitRouterVpcAttachment.attrVpcId;
        this.attrVpcOwnerId = rosTransitRouterVpcAttachment.attrVpcOwnerId;
    }
}
