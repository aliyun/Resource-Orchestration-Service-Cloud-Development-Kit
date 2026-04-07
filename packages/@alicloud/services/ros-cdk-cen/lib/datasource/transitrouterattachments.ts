import * as ros from '@alicloud/ros-cdk-core';
import { RosTransitRouterAttachments } from './cen.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosTransitRouterAttachments as TransitRouterAttachmentsProperty };

/**
 * Properties for defining a `TransitRouterAttachments`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cen-transitrouterattachments
 */
export interface TransitRouterAttachmentsProps {

    /**
     * Property cenId: The ID of the CEN instance.
     */
    readonly cenId?: string | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * Property regionId: The ID of the region where the transit router is deployed.
     */
    readonly regionId?: string | ros.IResolvable;

    /**
     * Property resourceTypes: Specify the type of the network instance associated with the connection to be queried. Valid values:
     * ** VPC: Virtual Private Cloud instance.
     * ** CCN: Cloud Connect Network instance.
     * ** VBR: Virtual Border Router instance.
     * ** TR: Transit Router instance, indicating that cross-region connection information will be queried.
     */
    readonly resourceTypes?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property transitRouterAttachmentId: The ID of the peer connection.
     */
    readonly transitRouterAttachmentId?: string | ros.IResolvable;

    /**
     * Property transitRouterId: The ID of the enterprise edition transit router.
     */
    readonly transitRouterId?: string | ros.IResolvable;
}

/**
 * Represents a `TransitRouterAttachments`.
 */
export interface ITransitRouterAttachments extends ros.IResource {
    readonly props: TransitRouterAttachmentsProps;

    /**
     * Attribute TransitRouterAttachmentIds: The list of The TransitRouterAttachment IDs.
     */
    readonly attrTransitRouterAttachmentIds: ros.IResolvable | string;

    /**
     * Attribute TransitRouterAttachments: The information about TransitRouterAttachments.
     */
    readonly attrTransitRouterAttachments: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::CEN::TransitRouterAttachments`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTransitRouterAttachments`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cen-transitrouterattachments
 */
export class TransitRouterAttachments extends ros.Resource implements ITransitRouterAttachments {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: TransitRouterAttachmentsProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute TransitRouterAttachmentIds: The list of The TransitRouterAttachment IDs.
     */
    public readonly attrTransitRouterAttachmentIds: ros.IResolvable | string;

    /**
     * Attribute TransitRouterAttachments: The information about TransitRouterAttachments.
     */
    public readonly attrTransitRouterAttachments: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TransitRouterAttachmentsProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosTransitRouterAttachments = new RosTransitRouterAttachments(this, id,  {
            transitRouterAttachmentId: props.transitRouterAttachmentId,
            resourceTypes: props.resourceTypes,
            cenId: props.cenId,
            regionId: props.regionId,
            transitRouterId: props.transitRouterId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosTransitRouterAttachments;
        this.attrTransitRouterAttachmentIds = rosTransitRouterAttachments.attrTransitRouterAttachmentIds;
        this.attrTransitRouterAttachments = rosTransitRouterAttachments.attrTransitRouterAttachments;
    }
}
