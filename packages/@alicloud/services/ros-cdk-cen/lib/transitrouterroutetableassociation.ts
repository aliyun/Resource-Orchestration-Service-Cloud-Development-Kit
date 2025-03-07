import * as ros from '@alicloud/ros-cdk-core';
import { RosTransitRouterRouteTableAssociation } from './cen.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosTransitRouterRouteTableAssociation as TransitRouterRouteTableAssociationProperty };

/**
 * Properties for defining a `TransitRouterRouteTableAssociation`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitrouterroutetableassociation
 */
export interface TransitRouterRouteTableAssociationProps {

    /**
     * Property transitRouterAttachmentId: TransitRouterAttachmentId
     */
    readonly transitRouterAttachmentId: string | ros.IResolvable;

    /**
     * Property transitRouterRouteTableId: TransitRouterRouteTableId
     */
    readonly transitRouterRouteTableId: string | ros.IResolvable;
}

/**
 * Represents a `TransitRouterRouteTableAssociation`.
 */
export interface ITransitRouterRouteTableAssociation extends ros.IResource {
    readonly props: TransitRouterRouteTableAssociationProps;

    /**
     * Attribute ResourceId: ResourceId
     */
    readonly attrResourceId: ros.IResolvable | string;

    /**
     * Attribute ResourceType: ResourceType
     */
    readonly attrResourceType: ros.IResolvable | string;

    /**
     * Attribute TransitRouterAttachmentId: TransitRouterAttachmentId
     */
    readonly attrTransitRouterAttachmentId: ros.IResolvable | string;

    /**
     * Attribute TransitRouterRouteTableId: TransitRouterRouteTableId
     */
    readonly attrTransitRouterRouteTableId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CEN::TransitRouterRouteTableAssociation`, which is used to create an associated forwarding correlation.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTransitRouterRouteTableAssociation`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitrouterroutetableassociation
 */
export class TransitRouterRouteTableAssociation extends ros.Resource implements ITransitRouterRouteTableAssociation {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: TransitRouterRouteTableAssociationProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ResourceId: ResourceId
     */
    public readonly attrResourceId: ros.IResolvable | string;

    /**
     * Attribute ResourceType: ResourceType
     */
    public readonly attrResourceType: ros.IResolvable | string;

    /**
     * Attribute TransitRouterAttachmentId: TransitRouterAttachmentId
     */
    public readonly attrTransitRouterAttachmentId: ros.IResolvable | string;

    /**
     * Attribute TransitRouterRouteTableId: TransitRouterRouteTableId
     */
    public readonly attrTransitRouterRouteTableId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TransitRouterRouteTableAssociationProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosTransitRouterRouteTableAssociation = new RosTransitRouterRouteTableAssociation(this, id,  {
            transitRouterRouteTableId: props.transitRouterRouteTableId,
            transitRouterAttachmentId: props.transitRouterAttachmentId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosTransitRouterRouteTableAssociation;
        this.attrResourceId = rosTransitRouterRouteTableAssociation.attrResourceId;
        this.attrResourceType = rosTransitRouterRouteTableAssociation.attrResourceType;
        this.attrTransitRouterAttachmentId = rosTransitRouterRouteTableAssociation.attrTransitRouterAttachmentId;
        this.attrTransitRouterRouteTableId = rosTransitRouterRouteTableAssociation.attrTransitRouterRouteTableId;
    }
}
