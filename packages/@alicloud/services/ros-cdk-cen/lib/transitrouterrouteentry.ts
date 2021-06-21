import * as ros from '@alicloud/ros-cdk-core';
import { RosTransitRouterRouteEntry } from './cen.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosTransitRouterRouteEntry as TransitRouterRouteEntryProperty };

/**
 * Properties for defining a `ALIYUN::CEN::TransitRouterRouteEntry`
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
 * A ROS resource type:  `ALIYUN::CEN::TransitRouterRouteEntry`
 */
export class TransitRouterRouteEntry extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

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
     * Create a new `ALIYUN::CEN::TransitRouterRouteEntry`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TransitRouterRouteEntryProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

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
