import * as ros from '@alicloud/ros-cdk-core';
import { RosTransitRouterRouteTable } from './cen.generated';
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::CEN::TransitRouterRouteTable`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTransitRouterRouteTable`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitrouterroutetable
 */
export declare class TransitRouterRouteTable extends ros.Resource implements ITransitRouterRouteTable {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: TransitRouterRouteTableProps;
    protected enableResourcePropertyConstraint: boolean;
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
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TransitRouterRouteTableProps, enableResourcePropertyConstraint?: boolean);
}
