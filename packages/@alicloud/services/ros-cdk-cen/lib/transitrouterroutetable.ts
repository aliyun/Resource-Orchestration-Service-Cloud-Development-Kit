import * as ros from '@alicloud/ros-cdk-core';
import { RosTransitRouterRouteTable } from './cen.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosTransitRouterRouteTable as TransitRouterRouteTableProperty };

/**
 * Properties for defining a `ALIYUN::CEN::TransitRouterRouteTable`
 */
export interface TransitRouterRouteTableProps {

    /**
     * Property transitRouterId: TransitRouterId
     */
    readonly transitRouterId: string | ros.IResolvable;

    /**
     * Property transitRouterRouteTableDescription: TransitRouterRouteTableDescription
     */
    readonly transitRouterRouteTableDescription?: string | ros.IResolvable;

    /**
     * Property transitRouterRouteTableName: TransitRouterRouteTableName
     */
    readonly transitRouterRouteTableName?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::CEN::TransitRouterRouteTable`
 */
export class TransitRouterRouteTable extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute ClientToken: ClientToken
     */
    public readonly attrClientToken: ros.IResolvable;

    /**
     * Attribute TransitRouterId: TransitRouterId
     */
    public readonly attrTransitRouterId: ros.IResolvable;

    /**
     * Attribute TransitRouterRouteTableDescription: TransitRouterRouteTableDescription
     */
    public readonly attrTransitRouterRouteTableDescription: ros.IResolvable;

    /**
     * Attribute TransitRouterRouteTableId: TransitRouterRouteTableId
     */
    public readonly attrTransitRouterRouteTableId: ros.IResolvable;

    /**
     * Attribute TransitRouterRouteTableName: TransitRouterRouteTableName
     */
    public readonly attrTransitRouterRouteTableName: ros.IResolvable;

    /**
     * Attribute TransitRouterRouteTableType: TransitRouterRouteTableType
     */
    public readonly attrTransitRouterRouteTableType: ros.IResolvable;

    /**
     * Create a new `ALIYUN::CEN::TransitRouterRouteTable`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TransitRouterRouteTableProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosTransitRouterRouteTable = new RosTransitRouterRouteTable(this, id,  {
            transitRouterRouteTableDescription: props.transitRouterRouteTableDescription,
            transitRouterRouteTableName: props.transitRouterRouteTableName,
            transitRouterId: props.transitRouterId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosTransitRouterRouteTable;
        this.attrClientToken = rosTransitRouterRouteTable.attrClientToken;
        this.attrTransitRouterId = rosTransitRouterRouteTable.attrTransitRouterId;
        this.attrTransitRouterRouteTableDescription = rosTransitRouterRouteTable.attrTransitRouterRouteTableDescription;
        this.attrTransitRouterRouteTableId = rosTransitRouterRouteTable.attrTransitRouterRouteTableId;
        this.attrTransitRouterRouteTableName = rosTransitRouterRouteTable.attrTransitRouterRouteTableName;
        this.attrTransitRouterRouteTableType = rosTransitRouterRouteTable.attrTransitRouterRouteTableType;
    }
}
