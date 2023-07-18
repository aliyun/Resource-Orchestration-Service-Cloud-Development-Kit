import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `DATASOURCE::CEN::CenBandwidthPackages`
 */
export interface RosCenBandwidthPackagesProps {
    /**
     * @Property filter: Filter value when querying resources
     */
    readonly filter?: Array<RosCenBandwidthPackages.FilterProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property includeReservationData: Specifies whether to include renewal data.
     */
    readonly includeReservationData?: boolean | ros.IResolvable;
    /**
     * @Property isOrKey: The logical operator between the filter conditions.
     */
    readonly isOrKey?: boolean | ros.IResolvable;
}
/**
 * A ROS template type:  `DATASOURCE::CEN::CenBandwidthPackages`
 */
export declare class RosCenBandwidthPackages extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CEN::CenBandwidthPackages";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute CenBandwidthPackageIds: The list of The Cen bandwidth ids.
     */
    readonly attrCenBandwidthPackageIds: ros.IResolvable;
    /**
     * @Attribute CenBandwidthPackages: The information about CenBandwidthPackages.
     */
    readonly attrCenBandwidthPackages: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property filter: Filter value when querying resources
     */
    filter: Array<RosCenBandwidthPackages.FilterProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property includeReservationData: Specifies whether to include renewal data.
     */
    includeReservationData: boolean | ros.IResolvable | undefined;
    /**
     * @Property isOrKey: The logical operator between the filter conditions.
     */
    isOrKey: boolean | ros.IResolvable | undefined;
    /**
     * Create a new `DATASOURCE::CEN::CenBandwidthPackages`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCenBandwidthPackagesProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosCenBandwidthPackages {
    /**
     * @stability external
     */
    interface FilterProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `DATASOURCE::CEN::CenInstances`
 */
export interface RosCenInstancesProps {
    /**
     * @Property filter: Filter value when querying resources
     */
    readonly filter?: Array<RosCenInstances.FilterProperty | ros.IResolvable> | ros.IResolvable;
}
/**
 * A ROS template type:  `DATASOURCE::CEN::CenInstances`
 */
export declare class RosCenInstances extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CEN::CenInstances";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute CenIds: The list of The Cen instance ids.
     */
    readonly attrCenIds: ros.IResolvable;
    /**
     * @Attribute Cens: The information about Cens.
     */
    readonly attrCens: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property filter: Filter value when querying resources
     */
    filter: Array<RosCenInstances.FilterProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * Create a new `DATASOURCE::CEN::CenInstances`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCenInstancesProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosCenInstances {
    /**
     * @stability external
     */
    interface FilterProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `DATASOURCE::CEN::CenRouteMaps`
 */
export interface RosCenRouteMapsProps {
    /**
     * @Property cenId: The ID of the CEN instance.
     */
    readonly cenId: string | ros.IResolvable;
    /**
     * @Property cenRegionId: The ID of the region where the routing policy is applied.
     */
    readonly cenRegionId?: string | ros.IResolvable;
    /**
     * @Property routeMapId: The ID of the routing policy.
     */
    readonly routeMapId?: string | ros.IResolvable;
    /**
     * @Property transitRouterRouteTableId: The route table ID of the transit router with which the routing policy is associated.
     */
    readonly transitRouterRouteTableId?: string | ros.IResolvable;
    /**
     * @Property transmitDirection: The direction in which the routing policy is applied.
     */
    readonly transmitDirection?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `DATASOURCE::CEN::CenRouteMaps`
 */
export declare class RosCenRouteMaps extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CEN::CenRouteMaps";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute RouteMapIds: The list of The RouteMap ids.
     */
    readonly attrRouteMapIds: ros.IResolvable;
    /**
     * @Attribute RouteMaps: The information about RouteMaps.
     */
    readonly attrRouteMaps: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property cenId: The ID of the CEN instance.
     */
    cenId: string | ros.IResolvable;
    /**
     * @Property cenRegionId: The ID of the region where the routing policy is applied.
     */
    cenRegionId: string | ros.IResolvable | undefined;
    /**
     * @Property routeMapId: The ID of the routing policy.
     */
    routeMapId: string | ros.IResolvable | undefined;
    /**
     * @Property transitRouterRouteTableId: The route table ID of the transit router with which the routing policy is associated.
     */
    transitRouterRouteTableId: string | ros.IResolvable | undefined;
    /**
     * @Property transmitDirection: The direction in which the routing policy is applied.
     */
    transmitDirection: string | ros.IResolvable | undefined;
    /**
     * Create a new `DATASOURCE::CEN::CenRouteMaps`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCenRouteMapsProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `DATASOURCE::CEN::TransitRouterRouteTables`
 */
export interface RosTransitRouterRouteTablesProps {
    /**
     * @Property transitRouterId: The ID of the Enterprise Edition transit router.
     */
    readonly transitRouterId: string | ros.IResolvable;
    /**
     * @Property transitRouterRouteTableIds: The ID of the route table.
     * You can query multiple route tables in each call. Maximum value of N: 20.
     */
    readonly transitRouterRouteTableIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property transitRouterRouteTableNames: The name of the route table.
     * You can query multiple route tables in each call. Maximum value of N: 20.
     * Note If you specify both TransitRouterRouteTableNames.N and TransitRouterRouteTableIds.N, make sure that the specified name and ID belong to the same route table.
     */
    readonly transitRouterRouteTableNames?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property transitRouterRouteTableStatus: The state of the route table. Valid values:
     * Creating: The route table is being created.
     * Deleting: The route table is being deleted.
     * Active: The route table is available for use.
     */
    readonly transitRouterRouteTableStatus?: string | ros.IResolvable;
    /**
     * @Property transitRouterRouteTableType: The type of route table. Valid values:
     * Custom: a custom route table
     * System: the default route table
     */
    readonly transitRouterRouteTableType?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `DATASOURCE::CEN::TransitRouterRouteTables`
 */
export declare class RosTransitRouterRouteTables extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CEN::TransitRouterRouteTables";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute TransitRouterRouteTableIds: The list of TransitRouterRouteTable IDs.
     */
    readonly attrTransitRouterRouteTableIds: ros.IResolvable;
    /**
     * @Attribute TransitRouterRouteTables: The list of TransitRouterRouteTables.
     */
    readonly attrTransitRouterRouteTables: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property transitRouterId: The ID of the Enterprise Edition transit router.
     */
    transitRouterId: string | ros.IResolvable;
    /**
     * @Property transitRouterRouteTableIds: The ID of the route table.
     * You can query multiple route tables in each call. Maximum value of N: 20.
     */
    transitRouterRouteTableIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property transitRouterRouteTableNames: The name of the route table.
     * You can query multiple route tables in each call. Maximum value of N: 20.
     * Note If you specify both TransitRouterRouteTableNames.N and TransitRouterRouteTableIds.N, make sure that the specified name and ID belong to the same route table.
     */
    transitRouterRouteTableNames: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property transitRouterRouteTableStatus: The state of the route table. Valid values:
     * Creating: The route table is being created.
     * Deleting: The route table is being deleted.
     * Active: The route table is available for use.
     */
    transitRouterRouteTableStatus: string | ros.IResolvable | undefined;
    /**
     * @Property transitRouterRouteTableType: The type of route table. Valid values:
     * Custom: a custom route table
     * System: the default route table
     */
    transitRouterRouteTableType: string | ros.IResolvable | undefined;
    /**
     * Create a new `DATASOURCE::CEN::TransitRouterRouteTables`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTransitRouterRouteTablesProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `DATASOURCE::CEN::TransitRouters`
 */
export interface RosTransitRoutersProps {
    /**
     * @Property cenId: The ID of the CEN instance.
     */
    readonly cenId: string | ros.IResolvable;
    /**
     * @Property regionId: The ID of the region where the transit router is deployed.
     * You can call the DescribeRegions operation to query region IDs.
     */
    readonly regionId?: string | ros.IResolvable;
    /**
     * @Property transitRouterId: The ID of the transit router.
     */
    readonly transitRouterId?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `DATASOURCE::CEN::TransitRouters`
 */
export declare class RosTransitRouters extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CEN::TransitRouters";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute TransitRouterIds: The list of TransitRouter IDs.
     */
    readonly attrTransitRouterIds: ros.IResolvable;
    /**
     * @Attribute TransitRouters: The list of TransitRouters.
     */
    readonly attrTransitRouters: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property cenId: The ID of the CEN instance.
     */
    cenId: string | ros.IResolvable;
    /**
     * @Property regionId: The ID of the region where the transit router is deployed.
     * You can call the DescribeRegions operation to query region IDs.
     */
    regionId: string | ros.IResolvable | undefined;
    /**
     * @Property transitRouterId: The ID of the transit router.
     */
    transitRouterId: string | ros.IResolvable | undefined;
    /**
     * Create a new `DATASOURCE::CEN::TransitRouters`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTransitRoutersProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
