import * as ros from '@alicloud/ros-cdk-core';
import { RosTransitRouterRouteEntry } from './cen.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosTransitRouterRouteEntry as TransitRouterRouteEntryProperty };

/**
 * Properties for defining a `TransitRouterRouteEntry`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitrouterrouteentry
 */
export interface TransitRouterRouteEntryProps {

    /**
     * Property transitRouterRouteEntryDestinationCidrBlock: TransitRouterRouteEntryDestinationCidrBlock
     */
    readonly transitRouterRouteEntryDestinationCidrBlock: string | ros.IResolvable;

    /**
     * Property transitRouterRouteEntryNextHopType: TransitRouterRouteEntryNextHopType
     */
    readonly transitRouterRouteEntryNextHopType: string | ros.IResolvable;

    /**
     * Property transitRouterRouteTableId: TransitRouterRouteTableId
     */
    readonly transitRouterRouteTableId: string | ros.IResolvable;

    /**
     * Property transitRouterRouteEntryDescription: TransitRouterRouteEntryDescription
     */
    readonly transitRouterRouteEntryDescription?: string | ros.IResolvable;

    /**
     * Property transitRouterRouteEntryName: TransitRouterRouteEntryName
     */
    readonly transitRouterRouteEntryName?: string | ros.IResolvable;

    /**
     * Property transitRouterRouteEntryNextHopId: TransitRouterRouteEntryNextHopId
     */
    readonly transitRouterRouteEntryNextHopId?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CEN::TransitRouterRouteEntry`, which is used to add a route to a route table of an Enterprise Edition transit router.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTransitRouterRouteEntry`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitrouterrouteentry
 */
export class TransitRouterRouteEntry extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: TransitRouterRouteEntryProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute TransitRouterRouteEntryDescription: TransitRouterRouteEntryDescription
     */
    public readonly attrTransitRouterRouteEntryDescription: ros.IResolvable;

    /**
     * Attribute TransitRouterRouteEntryDestinationCidrBlock: TransitRouterRouteEntryDestinationCidrBlock
     */
    public readonly attrTransitRouterRouteEntryDestinationCidrBlock: ros.IResolvable;

    /**
     * Attribute TransitRouterRouteEntryId: The first ID of the resource
     */
    public readonly attrTransitRouterRouteEntryId: ros.IResolvable;

    /**
     * Attribute TransitRouterRouteEntryName: TransitRouterRouteEntryName
     */
    public readonly attrTransitRouterRouteEntryName: ros.IResolvable;

    /**
     * Attribute TransitRouterRouteEntryNextHopId: TransitRouterRouteEntryNextHopId
     */
    public readonly attrTransitRouterRouteEntryNextHopId: ros.IResolvable;

    /**
     * Attribute TransitRouterRouteEntryNextHopType: TransitRouterRouteEntryNextHopType
     */
    public readonly attrTransitRouterRouteEntryNextHopType: ros.IResolvable;

    /**
     * Attribute TransitRouterRouteEntryType: TransitRouterRouteEntryType
     */
    public readonly attrTransitRouterRouteEntryType: ros.IResolvable;

    /**
     * Attribute TransitRouterRouteTableId: TransitRouterRouteTableId
     */
    public readonly attrTransitRouterRouteTableId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TransitRouterRouteEntryProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosTransitRouterRouteEntry = new RosTransitRouterRouteEntry(this, id,  {
            transitRouterRouteTableId: props.transitRouterRouteTableId,
            transitRouterRouteEntryDestinationCidrBlock: props.transitRouterRouteEntryDestinationCidrBlock,
            transitRouterRouteEntryNextHopId: props.transitRouterRouteEntryNextHopId,
            transitRouterRouteEntryDescription: props.transitRouterRouteEntryDescription,
            transitRouterRouteEntryNextHopType: props.transitRouterRouteEntryNextHopType,
            transitRouterRouteEntryName: props.transitRouterRouteEntryName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosTransitRouterRouteEntry;
        this.attrTransitRouterRouteEntryDescription = rosTransitRouterRouteEntry.attrTransitRouterRouteEntryDescription;
        this.attrTransitRouterRouteEntryDestinationCidrBlock = rosTransitRouterRouteEntry.attrTransitRouterRouteEntryDestinationCidrBlock;
        this.attrTransitRouterRouteEntryId = rosTransitRouterRouteEntry.attrTransitRouterRouteEntryId;
        this.attrTransitRouterRouteEntryName = rosTransitRouterRouteEntry.attrTransitRouterRouteEntryName;
        this.attrTransitRouterRouteEntryNextHopId = rosTransitRouterRouteEntry.attrTransitRouterRouteEntryNextHopId;
        this.attrTransitRouterRouteEntryNextHopType = rosTransitRouterRouteEntry.attrTransitRouterRouteEntryNextHopType;
        this.attrTransitRouterRouteEntryType = rosTransitRouterRouteEntry.attrTransitRouterRouteEntryType;
        this.attrTransitRouterRouteTableId = rosTransitRouterRouteEntry.attrTransitRouterRouteTableId;
    }
}
