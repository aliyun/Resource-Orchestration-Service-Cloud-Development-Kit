using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    /// <summary>Properties for defining a `CenRouteMap`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-cenroutemap
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ICenRouteMapProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.CenRouteMapProps")]
    public interface ICenRouteMapProps
    {
        /// <summary>Property cenId: The ID of the Cloud Enterprise Network (CEN) instance.</summary>
        [JsiiProperty(name: "cenId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CenId
        {
            get;
        }

        /// <summary>Property cenRegionId: The region where the CEN instance is deployed.</summary>
        /// <remarks>
        /// You can call the DescribeRegions operation to query region IDs.
        /// </remarks>
        [JsiiProperty(name: "cenRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CenRegionId
        {
            get;
        }

        /// <summary>Property mapResult: The route map behavior after all conditions are matched.</summary>
        /// <remarks>
        /// Valid values:
        /// Permit: allows the routes that are matched.
        /// Deny: rejects the routes that are matched.
        /// </remarks>
        [JsiiProperty(name: "mapResult", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object MapResult
        {
            get;
        }

        /// <summary>Property priority: The priority of the route map.</summary>
        /// <remarks>
        /// Valid values: 1 to 100 . A lower value indicates a higher priority.
        /// Note In the same region, for route maps that are applied in the same direction, the priority is unique. When a route map is implemented, the system matches conditions with a route map whose priority number is the smallest. Therefore, make sure that you set priorities for route maps to meet your requirements.
        /// </remarks>
        [JsiiProperty(name: "priority", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Priority
        {
            get;
        }

        /// <summary>Property transmitDirection: The direction in which the route map is applied.</summary>
        /// <remarks>
        /// Valid values:
        /// RegionIn: Routes are advertised to CEN gateways.
        /// For example, routes are advertised from network instances deployed in the current region or other regions to the gateways deployed in the current region.
        /// RegionOut: Routes are advertised from CEN gateways.
        /// For example, routes are advertised from gateways deployed in the current region to network instances or gateways deployed in other regions.
        /// </remarks>
        [JsiiProperty(name: "transmitDirection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TransmitDirection
        {
            get;
        }

        /// <summary>Property asPathMatchMode: Match statements are used to match the AS paths.</summary>
        /// <remarks>
        /// Valid values:
        /// Include: uses fuzzy match. If the AS path in the condition overlaps with the AS path in the route, the match is successful.
        /// Complete: uses exact match. Only when the AS path in the condition is the same as the AS path in the route, the match is successful.
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

        /// <summary>Property cidrMatchMode: Match statements are used to match the prefixes.</summary>
        /// <remarks>
        /// Valid values:
        /// Include: uses fuzzy match. If the routing prefix in the condition contains the routing prefix of the route, the match is successful.
        /// For example, the 1.1.0.0/16 policy can match the 1.1.1.0/24 route.
        /// Complete: uses exact match. Only when the routing prefix in the condition is the same as the routing prefix of the route, the match is successful.
        /// For example, the 1.1.0.0/16 policy can match the 1.1.0.0/16 route.
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

        /// <summary>Property communityMatchMode: Match statements are used to match the Communities.</summary>
        /// <remarks>
        /// Valid values:
        /// Include: uses fuzzy match. If the Community in the condition overlaps with the Community of the route, the match is successful.
        /// Complete: uses exact match. Only when the Community in the condition is the same as the Community of the route, the match is successful.
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

        /// <summary>Property communityOperateMode: Action statements are used to operate the Communities.</summary>
        /// <remarks>
        /// Valid values:
        /// Additive: adds.
        /// Replace: replaces.
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

        /// <summary>Property destinationChildInstanceTypes: Match statements are used to match the destination instance types.</summary>
        /// <remarks>
        /// Valid values:
        /// VPC: VPCs.
        /// VBR: VBRs.
        /// CCN: CCN instances in mainland China.
        /// Note The destination instance types are valid only when the route map is applied to scenarios where routes are advertised from gateways in the current region to instances in the current region.
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

        /// <summary>Property destinationCidrBlocks: Match statements are used to match the routing prefixes.</summary>
        /// <remarks>
        /// The CIDR format is used. You can enter at most 32 CIDR blocks.
        /// </remarks>
        [JsiiProperty(name: "destinationCidrBlocks", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DestinationCidrBlocks
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property destinationInstanceIds: Match statements are used to match the destination instance IDs.</summary>
        /// <remarks>
        /// You can enter instance IDs of the following types: VPC, VBR, CCN in mainland China, and SAG. You can enter at most 32 instance IDs.
        /// Note The destination instance IDs are valid only when the route map is applied to scenarios where routes are advertised from gateways in the current region to instances in the current region.
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

        /// <summary>Property destinationInstanceIdsReverseMatch: The IDs of destination instances to be advertised do not support match statements.</summary>
        /// <remarks>
        /// Valid values:
        /// false(default value): If the ID of the destination instance to be advertised is in the DestinationInstanceIds field, the match is successful.
        /// true: If the ID of the destination instance to be advertised is not in the DestinationInstanceIds filed, the match is successful.
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

        /// <summary>Property destinationRouteTableIds: Match statements are used to match the IDs of the destination route tables.</summary>
        /// <remarks>
        /// You can enter at most 32 route table IDs.
        /// Note The destination route table IDs are valid only when the route map is applied to scenarios where routes are advertised from gateways in the current region to route tables in the current region.
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

        /// <summary>Property matchAsns: Match statements are used to match AS paths of the routes.</summary>
        /// <remarks>
        /// An AS path is a mandatory attribute, which describes the AS number through which a BGP route passes when the BGP route is advertised.
        /// Only the AS-SEQUENCE parameter is supported. The AS-SET, AS-CONFED-SEQUENCE, and AS-CONFED-SET parameters are not supported. Specifically, only the AS number list is supported. Sets and sub-lists are not supported.
        /// </remarks>
        [JsiiProperty(name: "matchAsns", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MatchAsns
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property matchCommunitySet: Match statements are used to match the Communities.</summary>
        /// <remarks>
        /// Enter each Community in the format of nn:nn. Valid values of nn: 1 to 65535. You can enter at most 32 Communities. Each Community must comply with RFC 1997. RFC 8092 is not supported.
        /// Note If the configurations of the Communities are incorrect, routes may not be advertised to the on-premises data center.
        /// </remarks>
        [JsiiProperty(name: "matchCommunitySet", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MatchCommunitySet
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property nextPriority: The priority of the next associated route map.</summary>
        /// <remarks>
        /// Valid values: 1 to 100.
        /// If the priority is not set, no next route map is associated with the current route map.
        /// If the priority is set to 1, the next route map is associated with the current route map.
        /// If the priority is set and the value is not 1, the priority of the associated route map must be higher than that of the current route map.
        /// Only when the MapResult parameter is set to Permit, the matched routes continue to match the next associated route maps.
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

        /// <summary>Property operateCommunitySet: Action statements are used to operate the Communities.</summary>
        /// <remarks>
        /// Valid values: Enter each Community in the format of nn:nn. Valid values of nn: 1 to 65535. You can enter at most 32 Communities. Each Community must comply with RFC 1997. RFC 8092 is not supported.
        /// Note If the configurations of the Communities are incorrect, routes may not be advertised to the on-premises data center.
        /// </remarks>
        [JsiiProperty(name: "operateCommunitySet", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OperateCommunitySet
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property preference: Action statements are used to modify route priorities.</summary>
        /// <remarks>
        /// Valid values: 1 to 100. Default value: 50. A smaller number indicates a higher priority.
        /// </remarks>
        [JsiiProperty(name: "preference", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Preference
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property prependAsPath: AS paths are attached when regional gateways receive or advertise routes.</summary>
        /// <remarks>
        /// For route maps that are applied in different directions, the requirements for AS paths to be attached are different:
        /// For the inbound direction: You must specify the list of source instance IDs and the source region in the condition to be matched. The source region must be the same as the region where the route map is applied.
        /// For the outbound direction: You must specify the list of destination instance IDs in the condition to be matched.
        /// </remarks>
        [JsiiProperty(name: "prependAsPath", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PrependAsPath
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property routeTypes: Match statements are used to match the route types.</summary>
        /// <remarks>
        /// Valid values:
        /// System: system routes that are generated by the system.
        /// Custom: custom routes that are created by users.
        /// BGP: Border Gateway Protocol (BGP) routes that are advertised to BGP.
        /// You can enter multiple types.
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

        /// <summary>Property sourceChildInstanceTypes: Match statements are used to match source instance types of the routes.</summary>
        /// <remarks>
        /// Valid values:
        /// VPC: VPCs.
        /// VBR: VBRs.
        /// CCN: CCN instances in mainland China.
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

        /// <summary>Property sourceInstanceIds: Match statements are used to match source instance IDs of the routes.</summary>
        /// <remarks>
        /// You can enter instance IDs of the following types: virtual private cloud (VPC), virtual border router (VBR), Cloud Connect Network (CCN) in mainland China, Smart Access Gateway (SAG). You can enter at most 32 instance IDs.
        /// </remarks>
        [JsiiProperty(name: "sourceInstanceIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SourceInstanceIds
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property sourceInstanceIdsReverseMatch: The IDs of source instances to be advertised do not support match statements.</summary>
        /// <remarks>
        /// Valid values:
        /// false (default value): If the source instance ID is in the SourceInstanceIds field, the match is successful.
        /// true: If the source instance ID is not in the SourceInstanceIds field, the match is successful.
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

        /// <summary>Property sourceRegionIds: Match statements are used to match source region IDs of the routes.</summary>
        /// <remarks>
        /// You can enter at most 32 region IDs.
        /// </remarks>
        [JsiiProperty(name: "sourceRegionIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SourceRegionIds
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property sourceRouteTableIds: Match statements are used to match source route table IDs of the routes.</summary>
        /// <remarks>
        /// You can enter at most 32 route table IDs.
        /// </remarks>
        [JsiiProperty(name: "sourceRouteTableIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SourceRouteTableIds
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `CenRouteMap`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-cenroutemap
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ICenRouteMapProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.CenRouteMapProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cen.ICenRouteMapProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property cenId: The ID of the Cloud Enterprise Network (CEN) instance.</summary>
            [JsiiProperty(name: "cenId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CenId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property cenRegionId: The region where the CEN instance is deployed.</summary>
            /// <remarks>
            /// You can call the DescribeRegions operation to query region IDs.
            /// </remarks>
            [JsiiProperty(name: "cenRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CenRegionId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property mapResult: The route map behavior after all conditions are matched.</summary>
            /// <remarks>
            /// Valid values:
            /// Permit: allows the routes that are matched.
            /// Deny: rejects the routes that are matched.
            /// </remarks>
            [JsiiProperty(name: "mapResult", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object MapResult
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property priority: The priority of the route map.</summary>
            /// <remarks>
            /// Valid values: 1 to 100 . A lower value indicates a higher priority.
            /// Note In the same region, for route maps that are applied in the same direction, the priority is unique. When a route map is implemented, the system matches conditions with a route map whose priority number is the smallest. Therefore, make sure that you set priorities for route maps to meet your requirements.
            /// </remarks>
            [JsiiProperty(name: "priority", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Priority
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property transmitDirection: The direction in which the route map is applied.</summary>
            /// <remarks>
            /// Valid values:
            /// RegionIn: Routes are advertised to CEN gateways.
            /// For example, routes are advertised from network instances deployed in the current region or other regions to the gateways deployed in the current region.
            /// RegionOut: Routes are advertised from CEN gateways.
            /// For example, routes are advertised from gateways deployed in the current region to network instances or gateways deployed in other regions.
            /// </remarks>
            [JsiiProperty(name: "transmitDirection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TransmitDirection
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property asPathMatchMode: Match statements are used to match the AS paths.</summary>
            /// <remarks>
            /// Valid values:
            /// Include: uses fuzzy match. If the AS path in the condition overlaps with the AS path in the route, the match is successful.
            /// Complete: uses exact match. Only when the AS path in the condition is the same as the AS path in the route, the match is successful.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "asPathMatchMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AsPathMatchMode
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property cidrMatchMode: Match statements are used to match the prefixes.</summary>
            /// <remarks>
            /// Valid values:
            /// Include: uses fuzzy match. If the routing prefix in the condition contains the routing prefix of the route, the match is successful.
            /// For example, the 1.1.0.0/16 policy can match the 1.1.1.0/24 route.
            /// Complete: uses exact match. Only when the routing prefix in the condition is the same as the routing prefix of the route, the match is successful.
            /// For example, the 1.1.0.0/16 policy can match the 1.1.0.0/16 route.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "cidrMatchMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CidrMatchMode
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property communityMatchMode: Match statements are used to match the Communities.</summary>
            /// <remarks>
            /// Valid values:
            /// Include: uses fuzzy match. If the Community in the condition overlaps with the Community of the route, the match is successful.
            /// Complete: uses exact match. Only when the Community in the condition is the same as the Community of the route, the match is successful.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "communityMatchMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CommunityMatchMode
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property communityOperateMode: Action statements are used to operate the Communities.</summary>
            /// <remarks>
            /// Valid values:
            /// Additive: adds.
            /// Replace: replaces.
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

            /// <summary>Property destinationChildInstanceTypes: Match statements are used to match the destination instance types.</summary>
            /// <remarks>
            /// Valid values:
            /// VPC: VPCs.
            /// VBR: VBRs.
            /// CCN: CCN instances in mainland China.
            /// Note The destination instance types are valid only when the route map is applied to scenarios where routes are advertised from gateways in the current region to instances in the current region.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "destinationChildInstanceTypes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? DestinationChildInstanceTypes
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property destinationCidrBlocks: Match statements are used to match the routing prefixes.</summary>
            /// <remarks>
            /// The CIDR format is used. You can enter at most 32 CIDR blocks.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "destinationCidrBlocks", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? DestinationCidrBlocks
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property destinationInstanceIds: Match statements are used to match the destination instance IDs.</summary>
            /// <remarks>
            /// You can enter instance IDs of the following types: VPC, VBR, CCN in mainland China, and SAG. You can enter at most 32 instance IDs.
            /// Note The destination instance IDs are valid only when the route map is applied to scenarios where routes are advertised from gateways in the current region to instances in the current region.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "destinationInstanceIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? DestinationInstanceIds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property destinationInstanceIdsReverseMatch: The IDs of destination instances to be advertised do not support match statements.</summary>
            /// <remarks>
            /// Valid values:
            /// false(default value): If the ID of the destination instance to be advertised is in the DestinationInstanceIds field, the match is successful.
            /// true: If the ID of the destination instance to be advertised is not in the DestinationInstanceIds filed, the match is successful.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "destinationInstanceIdsReverseMatch", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DestinationInstanceIdsReverseMatch
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property destinationRouteTableIds: Match statements are used to match the IDs of the destination route tables.</summary>
            /// <remarks>
            /// You can enter at most 32 route table IDs.
            /// Note The destination route table IDs are valid only when the route map is applied to scenarios where routes are advertised from gateways in the current region to route tables in the current region.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "destinationRouteTableIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? DestinationRouteTableIds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property matchAsns: Match statements are used to match AS paths of the routes.</summary>
            /// <remarks>
            /// An AS path is a mandatory attribute, which describes the AS number through which a BGP route passes when the BGP route is advertised.
            /// Only the AS-SEQUENCE parameter is supported. The AS-SET, AS-CONFED-SEQUENCE, and AS-CONFED-SET parameters are not supported. Specifically, only the AS number list is supported. Sets and sub-lists are not supported.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "matchAsns", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? MatchAsns
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property matchCommunitySet: Match statements are used to match the Communities.</summary>
            /// <remarks>
            /// Enter each Community in the format of nn:nn. Valid values of nn: 1 to 65535. You can enter at most 32 Communities. Each Community must comply with RFC 1997. RFC 8092 is not supported.
            /// Note If the configurations of the Communities are incorrect, routes may not be advertised to the on-premises data center.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "matchCommunitySet", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? MatchCommunitySet
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property nextPriority: The priority of the next associated route map.</summary>
            /// <remarks>
            /// Valid values: 1 to 100.
            /// If the priority is not set, no next route map is associated with the current route map.
            /// If the priority is set to 1, the next route map is associated with the current route map.
            /// If the priority is set and the value is not 1, the priority of the associated route map must be higher than that of the current route map.
            /// Only when the MapResult parameter is set to Permit, the matched routes continue to match the next associated route maps.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "nextPriority", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NextPriority
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property operateCommunitySet: Action statements are used to operate the Communities.</summary>
            /// <remarks>
            /// Valid values: Enter each Community in the format of nn:nn. Valid values of nn: 1 to 65535. You can enter at most 32 Communities. Each Community must comply with RFC 1997. RFC 8092 is not supported.
            /// Note If the configurations of the Communities are incorrect, routes may not be advertised to the on-premises data center.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "operateCommunitySet", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? OperateCommunitySet
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property preference: Action statements are used to modify route priorities.</summary>
            /// <remarks>
            /// Valid values: 1 to 100. Default value: 50. A smaller number indicates a higher priority.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "preference", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Preference
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property prependAsPath: AS paths are attached when regional gateways receive or advertise routes.</summary>
            /// <remarks>
            /// For route maps that are applied in different directions, the requirements for AS paths to be attached are different:
            /// For the inbound direction: You must specify the list of source instance IDs and the source region in the condition to be matched. The source region must be the same as the region where the route map is applied.
            /// For the outbound direction: You must specify the list of destination instance IDs in the condition to be matched.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "prependAsPath", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? PrependAsPath
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property routeTypes: Match statements are used to match the route types.</summary>
            /// <remarks>
            /// Valid values:
            /// System: system routes that are generated by the system.
            /// Custom: custom routes that are created by users.
            /// BGP: Border Gateway Protocol (BGP) routes that are advertised to BGP.
            /// You can enter multiple types.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "routeTypes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? RouteTypes
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property sourceChildInstanceTypes: Match statements are used to match source instance types of the routes.</summary>
            /// <remarks>
            /// Valid values:
            /// VPC: VPCs.
            /// VBR: VBRs.
            /// CCN: CCN instances in mainland China.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sourceChildInstanceTypes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? SourceChildInstanceTypes
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property sourceInstanceIds: Match statements are used to match source instance IDs of the routes.</summary>
            /// <remarks>
            /// You can enter instance IDs of the following types: virtual private cloud (VPC), virtual border router (VBR), Cloud Connect Network (CCN) in mainland China, Smart Access Gateway (SAG). You can enter at most 32 instance IDs.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sourceInstanceIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? SourceInstanceIds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property sourceInstanceIdsReverseMatch: The IDs of source instances to be advertised do not support match statements.</summary>
            /// <remarks>
            /// Valid values:
            /// false (default value): If the source instance ID is in the SourceInstanceIds field, the match is successful.
            /// true: If the source instance ID is not in the SourceInstanceIds field, the match is successful.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sourceInstanceIdsReverseMatch", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SourceInstanceIdsReverseMatch
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property sourceRegionIds: Match statements are used to match source region IDs of the routes.</summary>
            /// <remarks>
            /// You can enter at most 32 region IDs.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sourceRegionIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? SourceRegionIds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property sourceRouteTableIds: Match statements are used to match source route table IDs of the routes.</summary>
            /// <remarks>
            /// You can enter at most 32 route table IDs.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sourceRouteTableIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? SourceRouteTableIds
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
