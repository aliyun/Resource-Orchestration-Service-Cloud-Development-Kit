using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::CEN::CenRouteMap`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cen.CenRouteMapProps")]
    public class CenRouteMapProps : AlibabaCloud.SDK.ROS.CDK.Cen.ICenRouteMapProps
    {
        /// <summary>Property cenId: The ID of the CEN instance.</summary>
        [JsiiProperty(name: "cenId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object CenId
        {
            get;
            set;
        }

        /// <summary>Property cenRegionId: The ID of the region to which the CEN instance belongs.</summary>
        [JsiiProperty(name: "cenRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object CenRegionId
        {
            get;
            set;
        }

        /// <summary>Property mapResult: The action that is performed to a route if the route meets all the match conditions.</summary>
        /// <remarks>
        /// Permit: The route is permitted. Deny: The route is denied.
        /// </remarks>
        [JsiiProperty(name: "mapResult", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object MapResult
        {
            get;
            set;
        }

        /// <summary>Property priority: The priority of the route map.</summary>
        [JsiiProperty(name: "priority", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object Priority
        {
            get;
            set;
        }

        /// <summary>Property transmitDirection: The direction in which the route map is applied.</summary>
        /// <remarks>
        /// Valid values:  RegionIn: The direction in which routes are imported to the regional gateway of the CEN.  For example, routes are imported to the regional gateway from an instance in the current region or another region.  RegionOut: The direction in which routes are exported from the regional gateway of the CEN.  For example, routes are exported from the regional gateway of the current region to an instance in the same region, or to the regional gateway in another region.
        /// </remarks>
        [JsiiProperty(name: "transmitDirection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object TransmitDirection
        {
            get;
            set;
        }

        /// <summary>Property asPathMatchMode: A match statement.</summary>
        /// <remarks>
        /// It indicates the mode in which the as-path attribute is matched. Valid values:  Include: Fuzzy match. A route matches the condition if the AS path in the route overlaps the AS path in the match condition. Complete: Exact match. A route matches the condition only when the AS path of the route is the same as the AS path in the match condition.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "asPathMatchMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? AsPathMatchMode
        {
            get;
            set;
        }

        /// <summary>Property cidrMatchMode: A match statement.</summary>
        /// <remarks>
        /// It indicates the mode in which the prefix attribute is matched. Valid values:  Include: Fuzzy match. If the prefix of a route is contained in the prefix in the match condition, the route matches the condition.  For example, if the prefix in the match condition is set to 1.1.0.0/16 and the match method is set to Fuzzy Match, the route with the prefix of 1.1.1.0/24 matches the condition.  Complete: Exact match. A route matches the condition only when the prefix of the route is the same as the prefix in the match condition.  For example, if the prefix in the match condition is set to 1.1.0.0/16 and the match method is set to Exact Match, only the route with the prefix of 1.1.1.0/16 matches the condition.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "cidrMatchMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? CidrMatchMode
        {
            get;
            set;
        }

        /// <summary>Property communityMatchMode: A match statement.</summary>
        /// <remarks>
        /// It indicates the mode in which the community attribute is matched. Valid values:  Include: Fuzzy match. A route matches the condition if the community of the route overlaps the community in the match condition. Complete: Exact match. A route matches the condition only when the community of the route is the same as the community in the match condition.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "communityMatchMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? CommunityMatchMode
        {
            get;
            set;
        }

        /// <summary>Property communityOperateMode: An action statement.</summary>
        /// <remarks>
        /// It indicates the mode in which the community attribute is operated. Valid values:  Additive: Sets a value for the community attribute. Replace: Replaces the value of the community attribute.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "communityOperateMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? CommunityOperateMode
        {
            get;
            set;
        }

        /// <summary>Property description: The description of the route map.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Description
        {
            get;
            set;
        }

        /// <summary>Property destinationChildInstanceTypes: A match statement that indicates the list of IDs of the destination instances.</summary>
        /// <remarks>
        /// VPC: VPC VBR: VBR CCN: Mainland China CCN This parameter is valid only when the TransmitDirection parameter is set to RegionOut, and the destination instance and the route map belong to the same region.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "destinationChildInstanceTypes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? DestinationChildInstanceTypes
        {
            get;
            set;
        }

        /// <summary>Property destinationCidrBlocks: A match statement that indicates the prefix list.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "destinationCidrBlocks", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? DestinationCidrBlocks
        {
            get;
            set;
        }

        /// <summary>Property destinationInstanceIds: A match statement that indicates the list of IDs of the destination instances.</summary>
        /// <remarks>
        /// This parameter is valid only when the TransmitDirection parameter is set to RegionOut, and the destination instance and the route map belongs to the same region.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "destinationInstanceIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? DestinationInstanceIds
        {
            get;
            set;
        }

        /// <summary>Property destinationInstanceIdsReverseMatch: Indicates whether to enable the reverse match method of the DestinationInstanceIds match condition.</summary>
        /// <remarks>
        /// Valid values:  false (default): If the ID of a route's destination instance is included in DestinationInstanceIds, the route is permitted. true: If the ID of a route's destination instance is not included in DestinationInstanceIds, the route is permitted.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "destinationInstanceIdsReverseMatch", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? DestinationInstanceIdsReverseMatch
        {
            get;
            set;
        }

        /// <summary>Property destinationRouteTableIds: A match statement that indicates the list of IDs of the destination route tables.</summary>
        /// <remarks>
        /// This parameter is valid only when the TransmitDirection parameter is set to RegionOut, and the destination route table and the route map belongs to the same region.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "destinationRouteTableIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? DestinationRouteTableIds
        {
            get;
            set;
        }

        /// <summary>Property matchAsns: A match statement that indicates the As path list.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "matchAsns", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? MatchAsns
        {
            get;
            set;
        }

        /// <summary>Property matchCommunitySet: A match statement that indicates the community set.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "matchCommunitySet", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? MatchCommunitySet
        {
            get;
            set;
        }

        /// <summary>Property nextPriority: The priority of the next route map that is associated with the current route map.</summary>
        /// <remarks>
        /// Value range: 1 to 100.  If this parameter is not set, the current route map is not associated with any route map that is ordered next to the current route map. If this parameter is set to 1, the current route map is associated with the next route map. If this parameter is set to a value other than 1, the priority of the associated route map must be lower than the priority of the current route map, that is, the value of NextPriority must be greater than the value set for Priority. Only when MapResult is set to Permit, the routes which match all the matching conditions will be evaluated by the associated route map that is configured with a specific preference value.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "nextPriority", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? NextPriority
        {
            get;
            set;
        }

        /// <summary>Property operateCommunitySet: An action statement that operates the community attribute.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "operateCommunitySet", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? OperateCommunitySet
        {
            get;
            set;
        }

        /// <summary>Property preference: An action statement that modifies the preference of the route.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "preference", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Preference
        {
            get;
            set;
        }

        /// <summary>Property prependAsPath: Indicates AS Path prepending when a regional gateway receives or publishes a route.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "prependAsPath", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? PrependAsPath
        {
            get;
            set;
        }

        /// <summary>Property routeTypes: A match statement that indicates the list of route types.</summary>
        /// <remarks>
        /// System: System routes generated by the system. Custom: Custom routes added by users. BGP: Routes advertised to BGP.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "routeTypes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? RouteTypes
        {
            get;
            set;
        }

        /// <summary>Property sourceChildInstanceTypes: A match statement that indicates the list of IDs of the source instances.</summary>
        /// <remarks>
        /// VPC: Virtual Private Cloud (VPC) VBR: Virtual Border Router (VBR) CCN: Mainland China Cloud Connect Network (CCN)
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "sourceChildInstanceTypes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? SourceChildInstanceTypes
        {
            get;
            set;
        }

        /// <summary>Property sourceInstanceIds: A match statement that indicates the list of IDs of the source instances.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "sourceInstanceIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? SourceInstanceIds
        {
            get;
            set;
        }

        /// <summary>Property sourceInstanceIdsReverseMatch: Indicates whether to enable the reverse match method of the SourceInstanceIds match condition.</summary>
        /// <remarks>
        /// Valid values:  false (default): If the ID of a route's source instance is included in SourceInstanceIds, the route is permitted. true: If the ID of a route's source instance is not included in SourceInstanceIds, the route is permitted.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "sourceInstanceIdsReverseMatch", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? SourceInstanceIdsReverseMatch
        {
            get;
            set;
        }

        /// <summary>Property sourceRegionIds: A match statement that indicates the list of IDs of the source regions.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "sourceRegionIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? SourceRegionIds
        {
            get;
            set;
        }

        /// <summary>Property sourceRouteTableIds: A match statement that indicates the list of IDs of the source route tables.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "sourceRouteTableIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? SourceRouteTableIds
        {
            get;
            set;
        }
    }
}
