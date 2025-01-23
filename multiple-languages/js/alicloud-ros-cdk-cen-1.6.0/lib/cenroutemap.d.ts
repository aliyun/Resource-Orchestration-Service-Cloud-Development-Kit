import * as ros from '@alicloud/ros-cdk-core';
import { RosCenRouteMap } from './cen.generated';
export { RosCenRouteMap as CenRouteMapProperty };
/**
 * Properties for defining a `CenRouteMap`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-cenroutemap
 */
export interface CenRouteMapProps {
    /**
     * Property cenId: The ID of the Cloud Enterprise Network (CEN) instance.
     */
    readonly cenId: string | ros.IResolvable;
    /**
     * Property cenRegionId: The region where the CEN instance is deployed. You can call the DescribeRegions operation to query region IDs.
     */
    readonly cenRegionId: string | ros.IResolvable;
    /**
     * Property mapResult: The route map behavior after all conditions are matched. Valid values:
     *  Permit: allows the routes that are matched.
     *  Deny: rejects the routes that are matched.
     */
    readonly mapResult: string | ros.IResolvable;
    /**
     * Property priority: The priority of the route map. Valid values: 1 to 100 . A lower value indicates a higher priority.
     *  Note In the same region, for route maps that are applied in the same direction, the priority is unique. When a route map is implemented, the system matches conditions with a route map whose priority number is the smallest. Therefore, make sure that you set priorities for route maps to meet your requirements.
     */
    readonly priority: number | ros.IResolvable;
    /**
     * Property transmitDirection: The direction in which the route map is applied. Valid values:
     *  RegionIn: Routes are advertised to CEN gateways.
     *  For example, routes are advertised from network instances deployed in the current region or other regions to the gateways deployed in the current region.
     *  RegionOut: Routes are advertised from CEN gateways.
     *  For example, routes are advertised from gateways deployed in the current region to network instances or gateways deployed in other regions.
     */
    readonly transmitDirection: string | ros.IResolvable;
    /**
     * Property asPathMatchMode: Match statements are used to match the AS paths. Valid values:
     *  Include: uses fuzzy match. If the AS path in the condition overlaps with the AS path in the route, the match is successful.
     *  Complete: uses exact match. Only when the AS path in the condition is the same as the AS path in the route, the match is successful.
     */
    readonly asPathMatchMode?: string | ros.IResolvable;
    /**
     * Property cidrMatchMode: Match statements are used to match the prefixes. Valid values:
     *  Include: uses fuzzy match. If the routing prefix in the condition contains the routing prefix of the route, the match is successful.
     *  For example, the 1.1.0.0\/16 policy can match the 1.1.1.0\/24 route.
     *  Complete: uses exact match. Only when the routing prefix in the condition is the same as the routing prefix of the route, the match is successful.
     *  For example, the 1.1.0.0\/16 policy can match the 1.1.0.0\/16 route.
     */
    readonly cidrMatchMode?: string | ros.IResolvable;
    /**
     * Property communityMatchMode: Match statements are used to match the Communities. Valid values:
     *  Include: uses fuzzy match. If the Community in the condition overlaps with the Community of the route, the match is successful.
     *  Complete: uses exact match. Only when the Community in the condition is the same as the Community of the route, the match is successful.
     */
    readonly communityMatchMode?: string | ros.IResolvable;
    /**
     * Property communityOperateMode: Action statements are used to operate the Communities. Valid values:
     *  Additive: adds.
     *  Replace: replaces.
     */
    readonly communityOperateMode?: string | ros.IResolvable;
    /**
     * Property description: The description of the route map.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property destinationChildInstanceTypes: Match statements are used to match the destination instance types. Valid values:
     *  VPC: VPCs.
     *  VBR: VBRs.
     *  CCN: CCN instances in mainland China.
     *  Note The destination instance types are valid only when the route map is applied to scenarios where routes are advertised from gateways in the current region to instances in the current region.
     */
    readonly destinationChildInstanceTypes?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property destinationCidrBlocks: Match statements are used to match the routing prefixes. The CIDR format is used. You can enter at most 32 CIDR blocks.
     */
    readonly destinationCidrBlocks?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property destinationInstanceIds: Match statements are used to match the destination instance IDs.
     *  You can enter instance IDs of the following types: VPC, VBR, CCN in mainland China, and SAG. You can enter at most 32 instance IDs.
     *  Note The destination instance IDs are valid only when the route map is applied to scenarios where routes are advertised from gateways in the current region to instances in the current region.
     */
    readonly destinationInstanceIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property destinationInstanceIdsReverseMatch: The IDs of destination instances to be advertised do not support match statements. Valid values:
     *  false(default value): If the ID of the destination instance to be advertised is in the DestinationInstanceIds field, the match is successful.
     *  true: If the ID of the destination instance to be advertised is not in the DestinationInstanceIds filed, the match is successful.
     */
    readonly destinationInstanceIdsReverseMatch?: boolean | ros.IResolvable;
    /**
     * Property destinationRouteTableIds: Match statements are used to match the IDs of the destination route tables. You can enter at most 32 route table IDs.
     *  Note The destination route table IDs are valid only when the route map is applied to scenarios where routes are advertised from gateways in the current region to route tables in the current region.
     */
    readonly destinationRouteTableIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property matchAsns: Match statements are used to match AS paths of the routes. An AS path is a mandatory attribute, which describes the AS number through which a BGP route passes when the BGP route is advertised.
     *  Only the AS-SEQUENCE parameter is supported. The AS-SET, AS-CONFED-SEQUENCE, and AS-CONFED-SET parameters are not supported. Specifically, only the AS number list is supported. Sets and sub-lists are not supported.
     */
    readonly matchAsns?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property matchCommunitySet: Match statements are used to match the Communities. Enter each Community in the format of nn:nn. Valid values of nn: 1 to 65535. You can enter at most 32 Communities. Each Community must comply with RFC 1997. RFC 8092 is not supported.
     *  Note If the configurations of the Communities are incorrect, routes may not be advertised to the on-premises data center.
     */
    readonly matchCommunitySet?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property nextPriority: The priority of the next associated route map. Valid values: 1 to 100.
     *  If the priority is not set, no next route map is associated with the current route map.
     *  If the priority is set to 1, the next route map is associated with the current route map.
     *  If the priority is set and the value is not 1, the priority of the associated route map must be higher than that of the current route map.
     *  Only when the MapResult parameter is set to Permit, the matched routes continue to match the next associated route maps.
     */
    readonly nextPriority?: number | ros.IResolvable;
    /**
     * Property operateCommunitySet: Action statements are used to operate the Communities. Valid values: Enter each Community in the format of nn:nn. Valid values of nn: 1 to 65535. You can enter at most 32 Communities. Each Community must comply with RFC 1997. RFC 8092 is not supported.
     *  Note If the configurations of the Communities are incorrect, routes may not be advertised to the on-premises data center.
     */
    readonly operateCommunitySet?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property preference: Action statements are used to modify route priorities. Valid values: 1 to 100. Default value: 50. A smaller number indicates a higher priority.
     */
    readonly preference?: number | ros.IResolvable;
    /**
     * Property prependAsPath: AS paths are attached when regional gateways receive or advertise routes.
     *  For route maps that are applied in different directions, the requirements for AS paths to be attached are different:
     *  For the inbound direction: You must specify the list of source instance IDs and the source region in the condition to be matched. The source region must be the same as the region where the route map is applied.
     *  For the outbound direction: You must specify the list of destination instance IDs in the condition to be matched.
     */
    readonly prependAsPath?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property routeTypes: Match statements are used to match the route types. Valid values:
     *  System: system routes that are generated by the system.
     *  Custom: custom routes that are created by users.
     *  BGP: Border Gateway Protocol (BGP) routes that are advertised to BGP.
     *  You can enter multiple types.
     */
    readonly routeTypes?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property sourceChildInstanceTypes: Match statements are used to match source instance types of the routes. Valid values:
     *  VPC: VPCs.
     *  VBR: VBRs.
     *  CCN: CCN instances in mainland China.
     */
    readonly sourceChildInstanceTypes?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property sourceInstanceIds: Match statements are used to match source instance IDs of the routes.
     *  You can enter instance IDs of the following types: virtual private cloud (VPC), virtual border router (VBR), Cloud Connect Network (CCN) in mainland China, Smart Access Gateway (SAG). You can enter at most 32 instance IDs.
     */
    readonly sourceInstanceIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property sourceInstanceIdsReverseMatch: The IDs of source instances to be advertised do not support match statements. Valid values:
     *  false (default value): If the source instance ID is in the SourceInstanceIds field, the match is successful.
     *  true: If the source instance ID is not in the SourceInstanceIds field, the match is successful.
     */
    readonly sourceInstanceIdsReverseMatch?: boolean | ros.IResolvable;
    /**
     * Property sourceRegionIds: Match statements are used to match source region IDs of the routes. You can enter at most 32 region IDs.
     */
    readonly sourceRegionIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property sourceRouteTableIds: Match statements are used to match source route table IDs of the routes. You can enter at most 32 route table IDs.
     */
    readonly sourceRouteTableIds?: Array<string | ros.IResolvable> | ros.IResolvable;
}
/**
 * Represents a `CenRouteMap`.
 */
export interface ICenRouteMap extends ros.IResource {
    readonly props: CenRouteMapProps;
    /**
     * Attribute RouteMapId: The ID of the route map.
     */
    readonly attrRouteMapId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CEN::CenRouteMap`, which is used to create a routing policy.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCenRouteMap`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-cenroutemap
 */
export declare class CenRouteMap extends ros.Resource implements ICenRouteMap {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: CenRouteMapProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute RouteMapId: The ID of the route map.
     */
    readonly attrRouteMapId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CenRouteMapProps, enableResourcePropertyConstraint?: boolean);
}
