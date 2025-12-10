import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosCenBandwidthPackages`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cen-cenbandwidthpackages
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
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::CEN::CenBandwidthPackages`.
 * @Note This class does not contain additional functions, so it is recommended to use the `CenBandwidthPackages` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cen-cenbandwidthpackages
 */
export declare class RosCenBandwidthPackages extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CEN::CenBandwidthPackages";
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
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
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
 * Properties for defining a `RosCenInstances`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cen-ceninstances
 */
export interface RosCenInstancesProps {
    /**
     * @Property filter: Filter value when querying resources
     */
    readonly filter?: Array<RosCenInstances.FilterProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::CEN::CenInstances`.
 * @Note This class does not contain additional functions, so it is recommended to use the `CenInstances` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cen-ceninstances
 */
export declare class RosCenInstances extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CEN::CenInstances";
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
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
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
 * Properties for defining a `RosCenRouteMaps`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cen-cenroutemaps
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
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
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
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::CEN::CenRouteMaps`.
 * @Note This class does not contain additional functions, so it is recommended to use the `CenRouteMaps` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cen-cenroutemaps
 */
export declare class RosCenRouteMaps extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CEN::CenRouteMaps";
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
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
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
 * Properties for defining a `RosTransitRouterRouteTables`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cen-transitrouterroutetables
 */
export interface RosTransitRouterRouteTablesProps {
    /**
     * @Property transitRouterId: The ID of the Enterprise Edition transit router.
     */
    readonly transitRouterId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
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
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::CEN::TransitRouterRouteTables`.
 * @Note This class does not contain additional functions, so it is recommended to use the `TransitRouterRouteTables` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cen-transitrouterroutetables
 */
export declare class RosTransitRouterRouteTables extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CEN::TransitRouterRouteTables";
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
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
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
 * Properties for defining a `RosTransitRouters`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cen-transitrouters
 */
export interface RosTransitRoutersProps {
    /**
     * @Property cenId: The ID of the CEN instance.
     */
    readonly cenId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
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
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::CEN::TransitRouters`.
 * @Note This class does not contain additional functions, so it is recommended to use the `TransitRouters` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cen-transitrouters
 */
export declare class RosTransitRouters extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CEN::TransitRouters";
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
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
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
