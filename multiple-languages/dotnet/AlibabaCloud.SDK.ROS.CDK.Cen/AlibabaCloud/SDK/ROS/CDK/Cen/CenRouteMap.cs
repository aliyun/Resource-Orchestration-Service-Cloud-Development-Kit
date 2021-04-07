using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    /// <summary>A ROS resource type:  `ALIYUN::CEN::CenRouteMap`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Cen.CenRouteMap), fullyQualifiedName: "@alicloud/ros-cdk-cen.CenRouteMap", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-cen.CenRouteMapProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class CenRouteMap : AlibabaCloud.SDK.ROS.CDK.Core.Resource_
    {
        /// <summary>Create a new `ALIYUN::CEN::CenRouteMap`.</summary>
        /// <remarks>
        /// Param scope - scope in which this resource is defined
        /// Param id    - scoped id of the resource
        /// Param props - resource properties
        /// </remarks>
        public CenRouteMap(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Cen.ICenRouteMapProps props, bool? enableResourcePropertyConstraint = null): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected CenRouteMap(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected CenRouteMap(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute AsPathMatchMode: A match statement.</summary>
        /// <remarks>
        /// It indicates the mode in which the as-path attribute is matched. Valid values:  Include: Fuzzy match. A route matches the condition if the AS path in the route overlaps the AS path in the match condition. Complete: Exact match. A route matches the condition only when the AS path of the route is the same as the AS path in the match condition.
        /// </remarks>
        [JsiiProperty(name: "attrAsPathMatchMode", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrAsPathMatchMode
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute CenId: The ID of the CEN instance.</summary>
        [JsiiProperty(name: "attrCenId", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrCenId
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute CenRegionId: The ID of the region to which the CEN instance belongs.</summary>
        [JsiiProperty(name: "attrCenRegionId", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrCenRegionId
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute CidrMatchMode: A match statement.</summary>
        /// <remarks>
        /// It indicates the mode in which the prefix attribute is matched. Valid values:  Include: Fuzzy match. If the prefix of a route is contained in the prefix in the match condition, the route matches the condition.  For example, if the prefix in the match condition is set to 1.1.0.0/16 and the match method is set to Fuzzy Match, the route with the prefix of 1.1.1.0/24 matches the condition.  Complete: Exact match. A route matches the condition only when the prefix of the route is the same as the prefix in the match condition.  For example, if the prefix in the match condition is set to 1.1.0.0/16 and the match method is set to Exact Match, only the route with the prefix of 1.1.1.0/16 matches the condition.
        /// </remarks>
        [JsiiProperty(name: "attrCidrMatchMode", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrCidrMatchMode
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute CommunityMatchMode: A match statement.</summary>
        /// <remarks>
        /// It indicates the mode in which the community attribute is matched. Valid values:  Include: Fuzzy match. A route matches the condition if the community of the route overlaps the community in the match condition. Complete: Exact match. A route matches the condition only when the community of the route is the same as the community in the match condition.
        /// </remarks>
        [JsiiProperty(name: "attrCommunityMatchMode", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrCommunityMatchMode
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute CommunityOperateMode: An action statement.</summary>
        /// <remarks>
        /// It indicates the mode in which the community attribute is operated. Valid values:  Additive: Sets a value for the community attribute. Replace: Replaces the value of the community attribute.
        /// </remarks>
        [JsiiProperty(name: "attrCommunityOperateMode", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrCommunityOperateMode
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute Description: The description of the route map.</summary>
        [JsiiProperty(name: "attrDescription", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrDescription
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute DestinationChildInstanceTypes: A match statement that indicates the list of IDs of the destination instances.</summary>
        /// <remarks>
        /// VPC: VPC VBR: VBR CCN: Mainland China CCN This parameter is valid only when the TransmitDirection parameter is set to RegionOut, and the destination instance and the route map belong to the same region.
        /// </remarks>
        [JsiiProperty(name: "attrDestinationChildInstanceTypes", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrDestinationChildInstanceTypes
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute DestinationCidrBlocks: A match statement that indicates the prefix list.</summary>
        [JsiiProperty(name: "attrDestinationCidrBlocks", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrDestinationCidrBlocks
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute DestinationInstanceIds: A match statement that indicates the list of IDs of the destination instances.</summary>
        /// <remarks>
        /// This parameter is valid only when the TransmitDirection parameter is set to RegionOut, and the destination instance and the route map belongs to the same region.
        /// </remarks>
        [JsiiProperty(name: "attrDestinationInstanceIds", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrDestinationInstanceIds
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute DestinationInstanceIdsReverseMatch: Indicates whether to enable the reverse match method of the DestinationInstanceIds match condition.</summary>
        /// <remarks>
        /// Valid values:  false (default): If the ID of a route's destination instance is included in DestinationInstanceIds, the route is permitted. true: If the ID of a route's destination instance is not included in DestinationInstanceIds, the route is permitted.
        /// </remarks>
        [JsiiProperty(name: "attrDestinationInstanceIdsReverseMatch", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrDestinationInstanceIdsReverseMatch
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute DestinationRouteTableIds: A match statement that indicates the list of IDs of the destination route tables.</summary>
        /// <remarks>
        /// This parameter is valid only when the TransmitDirection parameter is set to RegionOut, and the destination route table and the route map belongs to the same region.
        /// </remarks>
        [JsiiProperty(name: "attrDestinationRouteTableIds", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrDestinationRouteTableIds
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute MapResult: The action that is performed to a route if the route meets all the match conditions.</summary>
        /// <remarks>
        /// Permit: The route is permitted. Deny: The route is denied.
        /// </remarks>
        [JsiiProperty(name: "attrMapResult", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrMapResult
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute MatchAsns: A match statement that indicates the As path list.</summary>
        [JsiiProperty(name: "attrMatchAsns", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrMatchAsns
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute MatchCommunitySet: A match statement that indicates the community set.</summary>
        [JsiiProperty(name: "attrMatchCommunitySet", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrMatchCommunitySet
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute NextPriority: The priority of the next route map that is associated with the current route map.</summary>
        /// <remarks>
        /// Value range: 1 to 100.  If this parameter is not set, the current route map is not associated with any route map that is ordered next to the current route map. If this parameter is set to 1, the current route map is associated with the next route map. If this parameter is set to a value other than 1, the priority of the associated route map must be lower than the priority of the current route map, that is, the value of NextPriority must be greater than the value set for Priority. Only when MapResult is set to Permit, the routes which match all the matching conditions will be evaluated by the associated route map that is configured with a specific preference value.
        /// </remarks>
        [JsiiProperty(name: "attrNextPriority", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrNextPriority
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute OperateCommunitySet: An action statement that operates the community attribute.</summary>
        [JsiiProperty(name: "attrOperateCommunitySet", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrOperateCommunitySet
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute Preference: An action statement that modifies the preference of the route.</summary>
        [JsiiProperty(name: "attrPreference", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrPreference
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute PrependAsPath: Indicates AS Path prepending when a regional gateway receives or publishes a route.</summary>
        [JsiiProperty(name: "attrPrependAsPath", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrPrependAsPath
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute Priority: The priority of the route map.</summary>
        [JsiiProperty(name: "attrPriority", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrPriority
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute RouteMapId: The ID of the route map.</summary>
        [JsiiProperty(name: "attrRouteMapId", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrRouteMapId
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute RouteTypes: A match statement that indicates the list of route types.</summary>
        /// <remarks>
        /// System: System routes generated by the system. Custom: Custom routes added by users. BGP: Routes advertised to BGP.
        /// </remarks>
        [JsiiProperty(name: "attrRouteTypes", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrRouteTypes
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute SourceChildInstanceTypes: A match statement that indicates the list of IDs of the source instances.</summary>
        /// <remarks>
        /// VPC: Virtual Private Cloud (VPC) VBR: Virtual Border Router (VBR) CCN: Mainland China Cloud Connect Network (CCN)
        /// </remarks>
        [JsiiProperty(name: "attrSourceChildInstanceTypes", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrSourceChildInstanceTypes
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute SourceInstanceIds: A match statement that indicates the list of IDs of the source instances.</summary>
        [JsiiProperty(name: "attrSourceInstanceIds", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrSourceInstanceIds
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute SourceInstanceIdsReverseMatch: Indicates whether to enable the reverse match method of the SourceInstanceIds match condition.</summary>
        /// <remarks>
        /// Valid values:  false (default): If the ID of a route's source instance is included in SourceInstanceIds, the route is permitted. true: If the ID of a route's source instance is not included in SourceInstanceIds, the route is permitted.
        /// </remarks>
        [JsiiProperty(name: "attrSourceInstanceIdsReverseMatch", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrSourceInstanceIdsReverseMatch
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute SourceRegionIds: A match statement that indicates the list of IDs of the source regions.</summary>
        [JsiiProperty(name: "attrSourceRegionIds", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrSourceRegionIds
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute SourceRouteTableIds: A match statement that indicates the list of IDs of the source route tables.</summary>
        [JsiiProperty(name: "attrSourceRouteTableIds", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrSourceRouteTableIds
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute TransmitDirection: The direction in which the route map is applied.</summary>
        /// <remarks>
        /// Valid values:  RegionIn: The direction in which routes are imported to the regional gateway of the CEN.  For example, routes are imported to the regional gateway from an instance in the current region or another region.  RegionOut: The direction in which routes are exported from the regional gateway of the CEN.  For example, routes are exported from the regional gateway of the current region to an instance in the same region, or to the regional gateway in another region.
        /// </remarks>
        [JsiiProperty(name: "attrTransmitDirection", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrTransmitDirection
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }
    }
}
