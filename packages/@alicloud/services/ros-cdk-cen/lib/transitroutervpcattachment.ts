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
     * Property vpcId: VpcId
     */
    readonly vpcId: string | ros.IResolvable;

    /**
     * Property zoneMappings: ZoneMappingss
     */
    readonly zoneMappings: Array<RosTransitRouterVpcAttachment.ZoneMappingsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property autoCreateVpcRoute: undefined
     */
    readonly autoCreateVpcRoute?: boolean | ros.IResolvable;

    /**
     * Property cenId: CenId
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
 * Represents a `TransitRouterVpcAttachment`.
 */
export interface ITransitRouterVpcAttachment extends ros.IResource {
    readonly props: TransitRouterVpcAttachmentProps;

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
     * Attribute VpcId: VpcId
     */
    readonly attrVpcId: ros.IResolvable | string;

    /**
     * Attribute VpcOwnerId: VpcOwnerId
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
     * Attribute VpcId: VpcId
     */
    public readonly attrVpcId: ros.IResolvable | string;

    /**
     * Attribute VpcOwnerId: VpcOwnerId
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
            routeTableAssociationEnabled: props.routeTableAssociationEnabled,
            deletionForce: props.deletionForce,
            autoCreateVpcRoute: props.autoCreateVpcRoute,
            vpcId: props.vpcId,
            chargeType: props.chargeType === undefined || props.chargeType === null ? 'POSTPAY' : props.chargeType,
            routeTablePropagationEnabled: props.routeTablePropagationEnabled,
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
