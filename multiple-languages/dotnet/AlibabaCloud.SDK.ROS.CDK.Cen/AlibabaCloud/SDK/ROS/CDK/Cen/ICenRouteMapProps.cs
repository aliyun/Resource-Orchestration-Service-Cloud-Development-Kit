using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    /// <summary>Properties for defining a `ALIYUN::CEN::CenRouteMap`.</summary>
    [JsiiInterface(nativeType: typeof(ICenRouteMapProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.CenRouteMapProps")]
    public interface ICenRouteMapProps
    {
        /// <summary>Property cenId: The ID of the CEN instance.</summary>
        [JsiiProperty(name: "cenId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CenId
        {
            get;
        }

        /// <summary>Property cenRegionId: The ID of the region to which the CEN instance belongs.</summary>
        [JsiiProperty(name: "cenRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CenRegionId
        {
            get;
        }

        /// <summary>Property mapResult: The action that is performed to a route if the route meets all the match conditions.</summary>
        /// <remarks>
        /// Permit: The route is permitted. Deny: The route is denied.
        /// </remarks>
        [JsiiProperty(name: "mapResult", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object MapResult
        {
            get;
        }

        /// <summary>Property priority: The priority of the route map.</summary>
        [JsiiProperty(name: "priority", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Priority
        {
            get;
        }

        /// <summary>Property transmitDirection: The direction in which the route map is applied.</summary>
        /// <remarks>
        /// Valid values:  RegionIn: The direction in which routes are imported to the regional gateway of the CEN.  For example, routes are imported to the regional gateway from an instance in the current region or another region.  RegionOut: The direction in which routes are exported from the regional gateway of the CEN.  For example, routes are exported from the regional gateway of the current region to an instance in the same region, or to the regional gateway in another region.
        /// </remarks>
        [JsiiProperty(name: "transmitDirection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TransmitDirection
        {
            get;
        }

        /// <summary>Property asPathMatchMode: A match statement.</summary>
        /// <remarks>
        /// It indicates the mode in which the as-path attribute is matched. Valid values:  Include: Fuzzy match. A route matches the condition if the AS path in the route overlaps the AS path in the match condition. Complete: Exact match. A route matches the condition only when the AS path of the route is the same as the AS path in the match condition.
        /// </remarks>
        [JsiiProperty(name: "asPathMatchMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AsPathMatchMode
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property cidrMatchMode: A match statement.</summary>
        /// <remarks>
        /// It indicates the mode in which the prefix attribute is matched. Valid values:  Include: Fuzzy match. If the prefix of a route is contained in the prefix in the match condition, the route matches the condition.  For example, if the prefix in the match condition is set to 1.1.0.0/16 and the match method is set to Fuzzy Match, the route with the prefix of 1.1.1.0/24 matches the condition.  Complete: Exact match. A route matches the condition only when the prefix of the route is the same as the prefix in the match condition.  For example, if the prefix in the match condition is set to 1.1.0.0/16 and the match method is set to Exact Match, only the route with the prefix of 1.1.1.0/16 matches the condition.
        /// </remarks>
        [JsiiProperty(name: "cidrMatchMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CidrMatchMode
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property communityMatchMode: A match statement.</summary>
        /// <remarks>
        /// It indicates the mode in which the community attribute is matched. Valid values:  Include: Fuzzy match. A route matches the condition if the community of the route overlaps the community in the match condition. Complete: Exact match. A route matches the condition only when the community of the route is the same as the community in the match condition.
        /// </remarks>
        [JsiiProperty(name: "communityMatchMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CommunityMatchMode
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property communityOperateMode: An action statement.</summary>
        /// <remarks>
        /// It indicates the mode in which the community attribute is operated. Valid values:  Additive: Sets a value for the community attribute. Replace: Replaces the value of the community attribute.
        /// </remarks>
        [JsiiProperty(name: "communityOperateMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CommunityOperateMode
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property description: The description of the route map.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property destinationChildInstanceTypes: A match statement that indicates the list of IDs of the destination instances.</summary>
        /// <remarks>
        /// VPC: VPC VBR: VBR CCN: Mainland China CCN This parameter is valid only when the TransmitDirection parameter is set to RegionOut, and the destination instance and the route map belong to the same region.
        /// </remarks>
        [JsiiProperty(name: "destinationChildInstanceTypes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DestinationChildInstanceTypes
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property destinationCidrBlocks: A match statement that indicates the prefix list.</summary>
        [JsiiProperty(name: "destinationCidrBlocks", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DestinationCidrBlocks
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property destinationInstanceIds: A match statement that indicates the list of IDs of the destination instances.</summary>
        /// <remarks>
        /// This parameter is valid only when the TransmitDirection parameter is set to RegionOut, and the destination instance and the route map belongs to the same region.
        /// </remarks>
        [JsiiProperty(name: "destinationInstanceIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DestinationInstanceIds
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property destinationInstanceIdsReverseMatch: Indicates whether to enable the reverse match method of the DestinationInstanceIds match condition.</summary>
        /// <remarks>
        /// Valid values:  false (default): If the ID of a route's destination instance is included in DestinationInstanceIds, the route is permitted. true: If the ID of a route's destination instance is not included in DestinationInstanceIds, the route is permitted.
        /// </remarks>
        [JsiiProperty(name: "destinationInstanceIdsReverseMatch", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DestinationInstanceIdsReverseMatch
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property destinationRouteTableIds: A match statement that indicates the list of IDs of the destination route tables.</summary>
        /// <remarks>
        /// This parameter is valid only when the TransmitDirection parameter is set to RegionOut, and the destination route table and the route map belongs to the same region.
        /// </remarks>
        [JsiiProperty(name: "destinationRouteTableIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DestinationRouteTableIds
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property matchAsns: A match statement that indicates the As path list.</summary>
        [JsiiProperty(name: "matchAsns", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MatchAsns
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property matchCommunitySet: A match statement that indicates the community set.</summary>
        [JsiiProperty(name: "matchCommunitySet", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MatchCommunitySet
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property nextPriority: The priority of the next route map that is associated with the current route map.</summary>
        /// <remarks>
        /// Value range: 1 to 100.  If this parameter is not set, the current route map is not associated with any route map that is ordered next to the current route map. If this parameter is set to 1, the current route map is associated with the next route map. If this parameter is set to a value other than 1, the priority of the associated route map must be lower than the priority of the current route map, that is, the value of NextPriority must be greater than the value set for Priority. Only when MapResult is set to Permit, the routes which match all the matching conditions will be evaluated by the associated route map that is configured with a specific preference value.
        /// </remarks>
        [JsiiProperty(name: "nextPriority", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? NextPriority
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property operateCommunitySet: An action statement that operates the community attribute.</summary>
        [JsiiProperty(name: "operateCommunitySet", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OperateCommunitySet
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property preference: An action statement that modifies the preference of the route.</summary>
        [JsiiProperty(name: "preference", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Preference
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property prependAsPath: Indicates AS Path prepending when a regional gateway receives or publishes a route.</summary>
        [JsiiProperty(name: "prependAsPath", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PrependAsPath
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property routeTypes: A match statement that indicates the list of route types.</summary>
        /// <remarks>
        /// System: System routes generated by the system. Custom: Custom routes added by users. BGP: Routes advertised to BGP.
        /// </remarks>
        [JsiiProperty(name: "routeTypes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RouteTypes
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property sourceChildInstanceTypes: A match statement that indicates the list of IDs of the source instances.</summary>
        /// <remarks>
        /// VPC: Virtual Private Cloud (VPC) VBR: Virtual Border Router (VBR) CCN: Mainland China Cloud Connect Network (CCN)
        /// </remarks>
        [JsiiProperty(name: "sourceChildInstanceTypes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SourceChildInstanceTypes
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property sourceInstanceIds: A match statement that indicates the list of IDs of the source instances.</summary>
        [JsiiProperty(name: "sourceInstanceIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SourceInstanceIds
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property sourceInstanceIdsReverseMatch: Indicates whether to enable the reverse match method of the SourceInstanceIds match condition.</summary>
        /// <remarks>
        /// Valid values:  false (default): If the ID of a route's source instance is included in SourceInstanceIds, the route is permitted. true: If the ID of a route's source instance is not included in SourceInstanceIds, the route is permitted.
        /// </remarks>
        [JsiiProperty(name: "sourceInstanceIdsReverseMatch", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SourceInstanceIdsReverseMatch
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property sourceRegionIds: A match statement that indicates the list of IDs of the source regions.</summary>
        [JsiiProperty(name: "sourceRegionIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SourceRegionIds
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property sourceRouteTableIds: A match statement that indicates the list of IDs of the source route tables.</summary>
        [JsiiProperty(name: "sourceRouteTableIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SourceRouteTableIds
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::CEN::CenRouteMap`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ICenRouteMapProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.CenRouteMapProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cen.ICenRouteMapProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property cenId: The ID of the CEN instance.</summary>
            [JsiiProperty(name: "cenId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CenId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property cenRegionId: The ID of the region to which the CEN instance belongs.</summary>
            [JsiiProperty(name: "cenRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CenRegionId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property mapResult: The action that is performed to a route if the route meets all the match conditions.</summary>
            /// <remarks>
            /// Permit: The route is permitted. Deny: The route is denied.
            /// </remarks>
            [JsiiProperty(name: "mapResult", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object MapResult
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property priority: The priority of the route map.</summary>
            [JsiiProperty(name: "priority", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Priority
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property transmitDirection: The direction in which the route map is applied.</summary>
            /// <remarks>
            /// Valid values:  RegionIn: The direction in which routes are imported to the regional gateway of the CEN.  For example, routes are imported to the regional gateway from an instance in the current region or another region.  RegionOut: The direction in which routes are exported from the regional gateway of the CEN.  For example, routes are exported from the regional gateway of the current region to an instance in the same region, or to the regional gateway in another region.
            /// </remarks>
            [JsiiProperty(name: "transmitDirection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TransmitDirection
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property asPathMatchMode: A match statement.</summary>
            /// <remarks>
            /// It indicates the mode in which the as-path attribute is matched. Valid values:  Include: Fuzzy match. A route matches the condition if the AS path in the route overlaps the AS path in the match condition. Complete: Exact match. A route matches the condition only when the AS path of the route is the same as the AS path in the match condition.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "asPathMatchMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AsPathMatchMode
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property cidrMatchMode: A match statement.</summary>
            /// <remarks>
            /// It indicates the mode in which the prefix attribute is matched. Valid values:  Include: Fuzzy match. If the prefix of a route is contained in the prefix in the match condition, the route matches the condition.  For example, if the prefix in the match condition is set to 1.1.0.0/16 and the match method is set to Fuzzy Match, the route with the prefix of 1.1.1.0/24 matches the condition.  Complete: Exact match. A route matches the condition only when the prefix of the route is the same as the prefix in the match condition.  For example, if the prefix in the match condition is set to 1.1.0.0/16 and the match method is set to Exact Match, only the route with the prefix of 1.1.1.0/16 matches the condition.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "cidrMatchMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CidrMatchMode
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property communityMatchMode: A match statement.</summary>
            /// <remarks>
            /// It indicates the mode in which the community attribute is matched. Valid values:  Include: Fuzzy match. A route matches the condition if the community of the route overlaps the community in the match condition. Complete: Exact match. A route matches the condition only when the community of the route is the same as the community in the match condition.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "communityMatchMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CommunityMatchMode
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property communityOperateMode: An action statement.</summary>
            /// <remarks>
            /// It indicates the mode in which the community attribute is operated. Valid values:  Additive: Sets a value for the community attribute. Replace: Replaces the value of the community attribute.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "communityOperateMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CommunityOperateMode
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property description: The description of the route map.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property destinationChildInstanceTypes: A match statement that indicates the list of IDs of the destination instances.</summary>
            /// <remarks>
            /// VPC: VPC VBR: VBR CCN: Mainland China CCN This parameter is valid only when the TransmitDirection parameter is set to RegionOut, and the destination instance and the route map belong to the same region.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "destinationChildInstanceTypes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? DestinationChildInstanceTypes
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property destinationCidrBlocks: A match statement that indicates the prefix list.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "destinationCidrBlocks", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? DestinationCidrBlocks
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property destinationInstanceIds: A match statement that indicates the list of IDs of the destination instances.</summary>
            /// <remarks>
            /// This parameter is valid only when the TransmitDirection parameter is set to RegionOut, and the destination instance and the route map belongs to the same region.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "destinationInstanceIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? DestinationInstanceIds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property destinationInstanceIdsReverseMatch: Indicates whether to enable the reverse match method of the DestinationInstanceIds match condition.</summary>
            /// <remarks>
            /// Valid values:  false (default): If the ID of a route's destination instance is included in DestinationInstanceIds, the route is permitted. true: If the ID of a route's destination instance is not included in DestinationInstanceIds, the route is permitted.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "destinationInstanceIdsReverseMatch", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DestinationInstanceIdsReverseMatch
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property destinationRouteTableIds: A match statement that indicates the list of IDs of the destination route tables.</summary>
            /// <remarks>
            /// This parameter is valid only when the TransmitDirection parameter is set to RegionOut, and the destination route table and the route map belongs to the same region.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "destinationRouteTableIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? DestinationRouteTableIds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property matchAsns: A match statement that indicates the As path list.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "matchAsns", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? MatchAsns
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property matchCommunitySet: A match statement that indicates the community set.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "matchCommunitySet", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? MatchCommunitySet
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property nextPriority: The priority of the next route map that is associated with the current route map.</summary>
            /// <remarks>
            /// Value range: 1 to 100.  If this parameter is not set, the current route map is not associated with any route map that is ordered next to the current route map. If this parameter is set to 1, the current route map is associated with the next route map. If this parameter is set to a value other than 1, the priority of the associated route map must be lower than the priority of the current route map, that is, the value of NextPriority must be greater than the value set for Priority. Only when MapResult is set to Permit, the routes which match all the matching conditions will be evaluated by the associated route map that is configured with a specific preference value.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "nextPriority", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NextPriority
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property operateCommunitySet: An action statement that operates the community attribute.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "operateCommunitySet", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? OperateCommunitySet
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property preference: An action statement that modifies the preference of the route.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "preference", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Preference
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property prependAsPath: Indicates AS Path prepending when a regional gateway receives or publishes a route.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "prependAsPath", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? PrependAsPath
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property routeTypes: A match statement that indicates the list of route types.</summary>
            /// <remarks>
            /// System: System routes generated by the system. Custom: Custom routes added by users. BGP: Routes advertised to BGP.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "routeTypes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? RouteTypes
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property sourceChildInstanceTypes: A match statement that indicates the list of IDs of the source instances.</summary>
            /// <remarks>
            /// VPC: Virtual Private Cloud (VPC) VBR: Virtual Border Router (VBR) CCN: Mainland China Cloud Connect Network (CCN)
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sourceChildInstanceTypes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? SourceChildInstanceTypes
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property sourceInstanceIds: A match statement that indicates the list of IDs of the source instances.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "sourceInstanceIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? SourceInstanceIds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property sourceInstanceIdsReverseMatch: Indicates whether to enable the reverse match method of the SourceInstanceIds match condition.</summary>
            /// <remarks>
            /// Valid values:  false (default): If the ID of a route's source instance is included in SourceInstanceIds, the route is permitted. true: If the ID of a route's source instance is not included in SourceInstanceIds, the route is permitted.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sourceInstanceIdsReverseMatch", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SourceInstanceIdsReverseMatch
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property sourceRegionIds: A match statement that indicates the list of IDs of the source regions.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "sourceRegionIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? SourceRegionIds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property sourceRouteTableIds: A match statement that indicates the list of IDs of the source route tables.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "sourceRouteTableIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? SourceRouteTableIds
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
