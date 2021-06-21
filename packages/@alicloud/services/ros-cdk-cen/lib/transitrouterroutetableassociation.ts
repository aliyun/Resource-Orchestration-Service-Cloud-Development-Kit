import * as ros from '@alicloud/ros-cdk-core';
import { RosTransitRouterRouteTableAssociation } from './cen.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosTransitRouterRouteTableAssociation as TransitRouterRouteTableAssociationProperty };

/**
 * Properties for defining a `ALIYUN::CEN::TransitRouterRouteTableAssociation`
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
 * A ROS resource type:  `ALIYUN::CEN::TransitRouterRouteTableAssociation`
 */
export class TransitRouterRouteTableAssociation extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute ResourceId: ResourceId
     */
    public readonly attrResourceId: ros.IResolvable;

    /**
     * Attribute ResourceType: ResourceType
     */
    public readonly attrResourceType: ros.IResolvable;

    /**
     * Attribute TransitRouterAttachmentId: TransitRouterAttachmentId
     */
    public readonly attrTransitRouterAttachmentId: ros.IResolvable;

    /**
     * Attribute TransitRouterRouteTableId: TransitRouterRouteTableId
     */
    public readonly attrTransitRouterRouteTableId: ros.IResolvable;

    /**
     * Create a new `ALIYUN::CEN::TransitRouterRouteTableAssociation`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TransitRouterRouteTableAssociationProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

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
