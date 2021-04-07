import * as ros from '@alicloud/ros-cdk-core';
import { RosCenRouteMap } from './cen.generated';
export { RosCenRouteMap as CenRouteMapProperty };
/**
 * Properties for defining a `ALIYUN::CEN::CenRouteMap`
 */
export interface CenRouteMapProps {
    /**
     * Property cenId: The ID of the CEN instance.
     */
    readonly cenId: string | ros.IResolvable;
    /**
     * Property cenRegionId: The ID of the region to which the CEN instance belongs.
     */
    readonly cenRegionId: string | ros.IResolvable;
    /**
     * Property mapResult: The action that is performed to a route if the route meets all the match conditions.  Permit: The route is permitted. Deny: The route is denied.
     */
    readonly mapResult: string | ros.IResolvable;
    /**
     * Property priority: The priority of the route map.
     */
    readonly priority: number | ros.IResolvable;
    /**
     * Property transmitDirection: The direction in which the route map is applied. Valid values:  RegionIn: The direction in which routes are imported to the regional gateway of the CEN.  For example, routes are imported to the regional gateway from an instance in the current region or another region.  RegionOut: The direction in which routes are exported from the regional gateway of the CEN.  For example, routes are exported from the regional gateway of the current region to an instance in the same region, or to the regional gateway in another region.
     */
    readonly transmitDirection: string | ros.IResolvable;
    /**
     * Property asPathMatchMode: A match statement. It indicates the mode in which the as-path attribute is matched. Valid values:  Include: Fuzzy match. A route matches the condition if the AS path in the route overlaps the AS path in the match condition. Complete: Exact match. A route matches the condition only when the AS path of the route is the same as the AS path in the match condition.
     */
    readonly asPathMatchMode?: string | ros.IResolvable;
    /**
     * Property cidrMatchMode: A match statement. It indicates the mode in which the prefix attribute is matched. Valid values:  Include: Fuzzy match. If the prefix of a route is contained in the prefix in the match condition, the route matches the condition.  For example, if the prefix in the match condition is set to 1.1.0.0/16 and the match method is set to Fuzzy Match, the route with the prefix of 1.1.1.0/24 matches the condition.  Complete: Exact match. A route matches the condition only when the prefix of the route is the same as the prefix in the match condition.  For example, if the prefix in the match condition is set to 1.1.0.0/16 and the match method is set to Exact Match, only the route with the prefix of 1.1.1.0/16 matches the condition.
     */
    readonly cidrMatchMode?: string | ros.IResolvable;
    /**
     * Property communityMatchMode: A match statement. It indicates the mode in which the community attribute is matched. Valid values:  Include: Fuzzy match. A route matches the condition if the community of the route overlaps the community in the match condition. Complete: Exact match. A route matches the condition only when the community of the route is the same as the community in the match condition.
     */
    readonly communityMatchMode?: string | ros.IResolvable;
    /**
     * Property communityOperateMode: An action statement. It indicates the mode in which the community attribute is operated. Valid values:  Additive: Sets a value for the community attribute. Replace: Replaces the value of the community attribute.
     */
    readonly communityOperateMode?: string | ros.IResolvable;
    /**
     * Property description: The description of the route map.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property destinationChildInstanceTypes: A match statement that indicates the list of IDs of the destination instances.  VPC: VPC VBR: VBR CCN: Mainland China CCN This parameter is valid only when the TransmitDirection parameter is set to RegionOut, and the destination instance and the route map belong to the same region.
     */
    readonly destinationChildInstanceTypes?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property destinationCidrBlocks: A match statement that indicates the prefix list.
     */
    readonly destinationCidrBlocks?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property destinationInstanceIds: A match statement that indicates the list of IDs of the destination instances.  This parameter is valid only when the TransmitDirection parameter is set to RegionOut, and the destination instance and the route map belongs to the same region.
     */
    readonly destinationInstanceIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property destinationInstanceIdsReverseMatch: Indicates whether to enable the reverse match method of the DestinationInstanceIds match condition. Valid values:  false (default): If the ID of a route's destination instance is included in DestinationInstanceIds, the route is permitted. true: If the ID of a route's destination instance is not included in DestinationInstanceIds, the route is permitted.
     */
    readonly destinationInstanceIdsReverseMatch?: boolean | ros.IResolvable;
    /**
     * Property destinationRouteTableIds: A match statement that indicates the list of IDs of the destination route tables.  This parameter is valid only when the TransmitDirection parameter is set to RegionOut, and the destination route table and the route map belongs to the same region.
     */
    readonly destinationRouteTableIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property matchAsns: A match statement that indicates the As path list.
     */
    readonly matchAsns?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property matchCommunitySet: A match statement that indicates the community set.
     */
    readonly matchCommunitySet?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property nextPriority: The priority of the next route map that is associated with the current route map. Value range: 1 to 100.  If this parameter is not set, the current route map is not associated with any route map that is ordered next to the current route map. If this parameter is set to 1, the current route map is associated with the next route map. If this parameter is set to a value other than 1, the priority of the associated route map must be lower than the priority of the current route map, that is, the value of NextPriority must be greater than the value set for Priority. Only when MapResult is set to Permit, the routes which match all the matching conditions will be evaluated by the associated route map that is configured with a specific preference value.
     */
    readonly nextPriority?: number | ros.IResolvable;
    /**
     * Property operateCommunitySet: An action statement that operates the community attribute.
     */
    readonly operateCommunitySet?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property preference: An action statement that modifies the preference of the route.
     */
    readonly preference?: number | ros.IResolvable;
    /**
     * Property prependAsPath: Indicates AS Path prepending when a regional gateway receives or publishes a route.
     */
    readonly prependAsPath?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property routeTypes: A match statement that indicates the list of route types.  System: System routes generated by the system. Custom: Custom routes added by users. BGP: Routes advertised to BGP.
     */
    readonly routeTypes?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property sourceChildInstanceTypes: A match statement that indicates the list of IDs of the source instances.  VPC: Virtual Private Cloud (VPC) VBR: Virtual Border Router (VBR) CCN: Mainland China Cloud Connect Network (CCN)
     */
    readonly sourceChildInstanceTypes?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property sourceInstanceIds: A match statement that indicates the list of IDs of the source instances.
     */
    readonly sourceInstanceIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property sourceInstanceIdsReverseMatch: Indicates whether to enable the reverse match method of the SourceInstanceIds match condition. Valid values:  false (default): If the ID of a route's source instance is included in SourceInstanceIds, the route is permitted. true: If the ID of a route's source instance is not included in SourceInstanceIds, the route is permitted.
     */
    readonly sourceInstanceIdsReverseMatch?: boolean | ros.IResolvable;
    /**
     * Property sourceRegionIds: A match statement that indicates the list of IDs of the source regions.
     */
    readonly sourceRegionIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property sourceRouteTableIds: A match statement that indicates the list of IDs of the source route tables.
     */
    readonly sourceRouteTableIds?: Array<string | ros.IResolvable> | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::CEN::CenRouteMap`
 */
export declare class CenRouteMap extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute AsPathMatchMode: A match statement. It indicates the mode in which the as-path attribute is matched. Valid values:  Include: Fuzzy match. A route matches the condition if the AS path in the route overlaps the AS path in the match condition. Complete: Exact match. A route matches the condition only when the AS path of the route is the same as the AS path in the match condition.
     */
    readonly attrAsPathMatchMode: ros.IResolvable;
    /**
     * Attribute CenId: The ID of the CEN instance.
     */
    readonly attrCenId: ros.IResolvable;
    /**
     * Attribute CenRegionId: The ID of the region to which the CEN instance belongs.
     */
    readonly attrCenRegionId: ros.IResolvable;
    /**
     * Attribute CidrMatchMode: A match statement. It indicates the mode in which the prefix attribute is matched. Valid values:  Include: Fuzzy match. If the prefix of a route is contained in the prefix in the match condition, the route matches the condition.  For example, if the prefix in the match condition is set to 1.1.0.0/16 and the match method is set to Fuzzy Match, the route with the prefix of 1.1.1.0/24 matches the condition.  Complete: Exact match. A route matches the condition only when the prefix of the route is the same as the prefix in the match condition.  For example, if the prefix in the match condition is set to 1.1.0.0/16 and the match method is set to Exact Match, only the route with the prefix of 1.1.1.0/16 matches the condition.
     */
    readonly attrCidrMatchMode: ros.IResolvable;
    /**
     * Attribute CommunityMatchMode: A match statement. It indicates the mode in which the community attribute is matched. Valid values:  Include: Fuzzy match. A route matches the condition if the community of the route overlaps the community in the match condition. Complete: Exact match. A route matches the condition only when the community of the route is the same as the community in the match condition.
     */
    readonly attrCommunityMatchMode: ros.IResolvable;
    /**
     * Attribute CommunityOperateMode: An action statement. It indicates the mode in which the community attribute is operated. Valid values:  Additive: Sets a value for the community attribute. Replace: Replaces the value of the community attribute.
     */
    readonly attrCommunityOperateMode: ros.IResolvable;
    /**
     * Attribute Description: The description of the route map.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * Attribute DestinationChildInstanceTypes: A match statement that indicates the list of IDs of the destination instances.  VPC: VPC VBR: VBR CCN: Mainland China CCN This parameter is valid only when the TransmitDirection parameter is set to RegionOut, and the destination instance and the route map belong to the same region.
     */
    readonly attrDestinationChildInstanceTypes: ros.IResolvable;
    /**
     * Attribute DestinationCidrBlocks: A match statement that indicates the prefix list.
     */
    readonly attrDestinationCidrBlocks: ros.IResolvable;
    /**
     * Attribute DestinationInstanceIds: A match statement that indicates the list of IDs of the destination instances.  This parameter is valid only when the TransmitDirection parameter is set to RegionOut, and the destination instance and the route map belongs to the same region.
     */
    readonly attrDestinationInstanceIds: ros.IResolvable;
    /**
     * Attribute DestinationInstanceIdsReverseMatch: Indicates whether to enable the reverse match method of the DestinationInstanceIds match condition. Valid values:  false (default): If the ID of a route's destination instance is included in DestinationInstanceIds, the route is permitted. true: If the ID of a route's destination instance is not included in DestinationInstanceIds, the route is permitted.
     */
    readonly attrDestinationInstanceIdsReverseMatch: ros.IResolvable;
    /**
     * Attribute DestinationRouteTableIds: A match statement that indicates the list of IDs of the destination route tables.  This parameter is valid only when the TransmitDirection parameter is set to RegionOut, and the destination route table and the route map belongs to the same region.
     */
    readonly attrDestinationRouteTableIds: ros.IResolvable;
    /**
     * Attribute MapResult: The action that is performed to a route if the route meets all the match conditions.  Permit: The route is permitted. Deny: The route is denied.
     */
    readonly attrMapResult: ros.IResolvable;
    /**
     * Attribute MatchAsns: A match statement that indicates the As path list.
     */
    readonly attrMatchAsns: ros.IResolvable;
    /**
     * Attribute MatchCommunitySet: A match statement that indicates the community set.
     */
    readonly attrMatchCommunitySet: ros.IResolvable;
    /**
     * Attribute NextPriority: The priority of the next route map that is associated with the current route map. Value range: 1 to 100.  If this parameter is not set, the current route map is not associated with any route map that is ordered next to the current route map. If this parameter is set to 1, the current route map is associated with the next route map. If this parameter is set to a value other than 1, the priority of the associated route map must be lower than the priority of the current route map, that is, the value of NextPriority must be greater than the value set for Priority. Only when MapResult is set to Permit, the routes which match all the matching conditions will be evaluated by the associated route map that is configured with a specific preference value.
     */
    readonly attrNextPriority: ros.IResolvable;
    /**
     * Attribute OperateCommunitySet: An action statement that operates the community attribute.
     */
    readonly attrOperateCommunitySet: ros.IResolvable;
    /**
     * Attribute Preference: An action statement that modifies the preference of the route.
     */
    readonly attrPreference: ros.IResolvable;
    /**
     * Attribute PrependAsPath: Indicates AS Path prepending when a regional gateway receives or publishes a route.
     */
    readonly attrPrependAsPath: ros.IResolvable;
    /**
     * Attribute Priority: The priority of the route map.
     */
    readonly attrPriority: ros.IResolvable;
    /**
     * Attribute RouteMapId: The ID of the route map.
     */
    readonly attrRouteMapId: ros.IResolvable;
    /**
     * Attribute RouteTypes: A match statement that indicates the list of route types.  System: System routes generated by the system. Custom: Custom routes added by users. BGP: Routes advertised to BGP.
     */
    readonly attrRouteTypes: ros.IResolvable;
    /**
     * Attribute SourceChildInstanceTypes: A match statement that indicates the list of IDs of the source instances.  VPC: Virtual Private Cloud (VPC) VBR: Virtual Border Router (VBR) CCN: Mainland China Cloud Connect Network (CCN)
     */
    readonly attrSourceChildInstanceTypes: ros.IResolvable;
    /**
     * Attribute SourceInstanceIds: A match statement that indicates the list of IDs of the source instances.
     */
    readonly attrSourceInstanceIds: ros.IResolvable;
    /**
     * Attribute SourceInstanceIdsReverseMatch: Indicates whether to enable the reverse match method of the SourceInstanceIds match condition. Valid values:  false (default): If the ID of a route's source instance is included in SourceInstanceIds, the route is permitted. true: If the ID of a route's source instance is not included in SourceInstanceIds, the route is permitted.
     */
    readonly attrSourceInstanceIdsReverseMatch: ros.IResolvable;
    /**
     * Attribute SourceRegionIds: A match statement that indicates the list of IDs of the source regions.
     */
    readonly attrSourceRegionIds: ros.IResolvable;
    /**
     * Attribute SourceRouteTableIds: A match statement that indicates the list of IDs of the source route tables.
     */
    readonly attrSourceRouteTableIds: ros.IResolvable;
    /**
     * Attribute TransmitDirection: The direction in which the route map is applied. Valid values:  RegionIn: The direction in which routes are imported to the regional gateway of the CEN.  For example, routes are imported to the regional gateway from an instance in the current region or another region.  RegionOut: The direction in which routes are exported from the regional gateway of the CEN.  For example, routes are exported from the regional gateway of the current region to an instance in the same region, or to the regional gateway in another region.
     */
    readonly attrTransmitDirection: ros.IResolvable;
    /**
     * Create a new `ALIYUN::CEN::CenRouteMap`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CenRouteMapProps, enableResourcePropertyConstraint?: boolean);
}
