import * as ros from '@alicloud/ros-cdk-core';
import { RosTransitRouterRouteTable } from './cen.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosTransitRouterRouteTable as TransitRouterRouteTableProperty };

/**
 * Properties for defining a `TransitRouterRouteTable`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitrouterroutetable
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
 * Represents a `TransitRouterRouteTable`.
 */
export interface ITransitRouterRouteTable extends ros.IResource {
    readonly props: TransitRouterRouteTableProps;

    /**
     * Attribute ClientToken: ClientToken
     */
    readonly attrClientToken: ros.IResolvable | string;

    /**
     * Attribute TransitRouterId: TransitRouterId
     */
    readonly attrTransitRouterId: ros.IResolvable | string;

    /**
     * Attribute TransitRouterRouteTableDescription: TransitRouterRouteTableDescription
     */
    readonly attrTransitRouterRouteTableDescription: ros.IResolvable | string;

    /**
     * Attribute TransitRouterRouteTableId: TransitRouterRouteTableId
     */
    readonly attrTransitRouterRouteTableId: ros.IResolvable | string;

    /**
     * Attribute TransitRouterRouteTableName: TransitRouterRouteTableName
     */
    readonly attrTransitRouterRouteTableName: ros.IResolvable | string;

    /**
     * Attribute TransitRouterRouteTableType: TransitRouterRouteTableType
     */
    readonly attrTransitRouterRouteTableType: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CEN::TransitRouterRouteTable`, which is used to create a custom route table for an Enterprise Edition transit router.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTransitRouterRouteTable`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitrouterroutetable
 */
export class TransitRouterRouteTable extends ros.Resource implements ITransitRouterRouteTable {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: TransitRouterRouteTableProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ClientToken: ClientToken
     */
    public readonly attrClientToken: ros.IResolvable | string;

    /**
     * Attribute TransitRouterId: TransitRouterId
     */
    public readonly attrTransitRouterId: ros.IResolvable | string;

    /**
     * Attribute TransitRouterRouteTableDescription: TransitRouterRouteTableDescription
     */
    public readonly attrTransitRouterRouteTableDescription: ros.IResolvable | string;

    /**
     * Attribute TransitRouterRouteTableId: TransitRouterRouteTableId
     */
    public readonly attrTransitRouterRouteTableId: ros.IResolvable | string;

    /**
     * Attribute TransitRouterRouteTableName: TransitRouterRouteTableName
     */
    public readonly attrTransitRouterRouteTableName: ros.IResolvable | string;

    /**
     * Attribute TransitRouterRouteTableType: TransitRouterRouteTableType
     */
    public readonly attrTransitRouterRouteTableType: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TransitRouterRouteTableProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

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
