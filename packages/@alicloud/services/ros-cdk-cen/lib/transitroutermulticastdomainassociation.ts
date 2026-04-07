import * as ros from '@alicloud/ros-cdk-core';
import { RosTransitRouterMulticastDomainAssociation } from './cen.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosTransitRouterMulticastDomainAssociation as TransitRouterMulticastDomainAssociationProperty };

/**
 * Properties for defining a `TransitRouterMulticastDomainAssociation`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitroutermulticastdomainassociation
 */
export interface TransitRouterMulticastDomainAssociationProps {

    /**
     * Property transitRouterAttachmentId: The ID of the VPC connection.
     */
    readonly transitRouterAttachmentId: string | ros.IResolvable;

    /**
     * Property transitRouterMulticastDomainId: The ID of the multicast domain.
     */
    readonly transitRouterMulticastDomainId: string | ros.IResolvable;

    /**
     * Property vSwitchId: The ID of the VSwitch.
     */
    readonly vSwitchId: string | ros.IResolvable;
}

/**
 * Represents a `TransitRouterMulticastDomainAssociation`.
 */
export interface ITransitRouterMulticastDomainAssociation extends ros.IResource {
    readonly props: TransitRouterMulticastDomainAssociationProps;

    /**
     * Attribute TransitRouterAttachmentId: The ID of the VPC connection.
     */
    readonly attrTransitRouterAttachmentId: ros.IResolvable | string;

    /**
     * Attribute TransitRouterMulticastDomainId: The ID of the multicast domain.
     */
    readonly attrTransitRouterMulticastDomainId: ros.IResolvable | string;

    /**
     * Attribute VSwitchId: The ID of the VSwitch.
     */
    readonly attrVSwitchId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CEN::TransitRouterMulticastDomainAssociation`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTransitRouterMulticastDomainAssociation`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitroutermulticastdomainassociation
 */
export class TransitRouterMulticastDomainAssociation extends ros.Resource implements ITransitRouterMulticastDomainAssociation {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: TransitRouterMulticastDomainAssociationProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute TransitRouterAttachmentId: The ID of the VPC connection.
     */
    public readonly attrTransitRouterAttachmentId: ros.IResolvable | string;

    /**
     * Attribute TransitRouterMulticastDomainId: The ID of the multicast domain.
     */
    public readonly attrTransitRouterMulticastDomainId: ros.IResolvable | string;

    /**
     * Attribute VSwitchId: The ID of the VSwitch.
     */
    public readonly attrVSwitchId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TransitRouterMulticastDomainAssociationProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosTransitRouterMulticastDomainAssociation = new RosTransitRouterMulticastDomainAssociation(this, id,  {
            transitRouterAttachmentId: props.transitRouterAttachmentId,
            transitRouterMulticastDomainId: props.transitRouterMulticastDomainId,
            vSwitchId: props.vSwitchId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosTransitRouterMulticastDomainAssociation;
        this.attrTransitRouterAttachmentId = rosTransitRouterMulticastDomainAssociation.attrTransitRouterAttachmentId;
        this.attrTransitRouterMulticastDomainId = rosTransitRouterMulticastDomainAssociation.attrTransitRouterMulticastDomainId;
        this.attrVSwitchId = rosTransitRouterMulticastDomainAssociation.attrVSwitchId;
    }
}
