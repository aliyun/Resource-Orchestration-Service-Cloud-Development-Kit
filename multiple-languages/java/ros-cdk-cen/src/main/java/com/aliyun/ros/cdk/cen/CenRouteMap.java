package com.aliyun.ros.cdk.cen;

/**
 * A ROS resource type:  `ALIYUN::CEN::CenRouteMap`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.27.0 (build 07d848a)", date = "2021-04-07T04:01:41.800Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cen.$Module.class, fqn = "@alicloud/ros-cdk-cen.CenRouteMap")
public class CenRouteMap extends com.aliyun.ros.cdk.core.Resource {

    protected CenRouteMap(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected CenRouteMap(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::CEN::CenRouteMap`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public CenRouteMap(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.CenRouteMapProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::CEN::CenRouteMap`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public CenRouteMap(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.CenRouteMapProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AsPathMatchMode: A match statement.
     * <p>
     * It indicates the mode in which the as-path attribute is matched. Valid values:  Include: Fuzzy match. A route matches the condition if the AS path in the route overlaps the AS path in the match condition. Complete: Exact match. A route matches the condition only when the AS path of the route is the same as the AS path in the match condition.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAsPathMatchMode() {
        return software.amazon.jsii.Kernel.get(this, "attrAsPathMatchMode", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute CenId: The ID of the CEN instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCenId() {
        return software.amazon.jsii.Kernel.get(this, "attrCenId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute CenRegionId: The ID of the region to which the CEN instance belongs.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCenRegionId() {
        return software.amazon.jsii.Kernel.get(this, "attrCenRegionId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute CidrMatchMode: A match statement.
     * <p>
     * It indicates the mode in which the prefix attribute is matched. Valid values:  Include: Fuzzy match. If the prefix of a route is contained in the prefix in the match condition, the route matches the condition.  For example, if the prefix in the match condition is set to 1.1.0.0/16 and the match method is set to Fuzzy Match, the route with the prefix of 1.1.1.0/24 matches the condition.  Complete: Exact match. A route matches the condition only when the prefix of the route is the same as the prefix in the match condition.  For example, if the prefix in the match condition is set to 1.1.0.0/16 and the match method is set to Exact Match, only the route with the prefix of 1.1.1.0/16 matches the condition.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCidrMatchMode() {
        return software.amazon.jsii.Kernel.get(this, "attrCidrMatchMode", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute CommunityMatchMode: A match statement.
     * <p>
     * It indicates the mode in which the community attribute is matched. Valid values:  Include: Fuzzy match. A route matches the condition if the community of the route overlaps the community in the match condition. Complete: Exact match. A route matches the condition only when the community of the route is the same as the community in the match condition.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCommunityMatchMode() {
        return software.amazon.jsii.Kernel.get(this, "attrCommunityMatchMode", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute CommunityOperateMode: An action statement.
     * <p>
     * It indicates the mode in which the community attribute is operated. Valid values:  Additive: Sets a value for the community attribute. Replace: Replaces the value of the community attribute.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCommunityOperateMode() {
        return software.amazon.jsii.Kernel.get(this, "attrCommunityOperateMode", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Description: The description of the route map.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute DestinationChildInstanceTypes: A match statement that indicates the list of IDs of the destination instances.
     * <p>
     * VPC: VPC VBR: VBR CCN: Mainland China CCN This parameter is valid only when the TransmitDirection parameter is set to RegionOut, and the destination instance and the route map belong to the same region.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDestinationChildInstanceTypes() {
        return software.amazon.jsii.Kernel.get(this, "attrDestinationChildInstanceTypes", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute DestinationCidrBlocks: A match statement that indicates the prefix list.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDestinationCidrBlocks() {
        return software.amazon.jsii.Kernel.get(this, "attrDestinationCidrBlocks", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute DestinationInstanceIds: A match statement that indicates the list of IDs of the destination instances.
     * <p>
     * This parameter is valid only when the TransmitDirection parameter is set to RegionOut, and the destination instance and the route map belongs to the same region.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDestinationInstanceIds() {
        return software.amazon.jsii.Kernel.get(this, "attrDestinationInstanceIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute DestinationInstanceIdsReverseMatch: Indicates whether to enable the reverse match method of the DestinationInstanceIds match condition.
     * <p>
     * Valid values:  false (default): If the ID of a route's destination instance is included in DestinationInstanceIds, the route is permitted. true: If the ID of a route's destination instance is not included in DestinationInstanceIds, the route is permitted.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDestinationInstanceIdsReverseMatch() {
        return software.amazon.jsii.Kernel.get(this, "attrDestinationInstanceIdsReverseMatch", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute DestinationRouteTableIds: A match statement that indicates the list of IDs of the destination route tables.
     * <p>
     * This parameter is valid only when the TransmitDirection parameter is set to RegionOut, and the destination route table and the route map belongs to the same region.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDestinationRouteTableIds() {
        return software.amazon.jsii.Kernel.get(this, "attrDestinationRouteTableIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute MapResult: The action that is performed to a route if the route meets all the match conditions.
     * <p>
     * Permit: The route is permitted. Deny: The route is denied.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrMapResult() {
        return software.amazon.jsii.Kernel.get(this, "attrMapResult", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute MatchAsns: A match statement that indicates the As path list.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrMatchAsns() {
        return software.amazon.jsii.Kernel.get(this, "attrMatchAsns", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute MatchCommunitySet: A match statement that indicates the community set.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrMatchCommunitySet() {
        return software.amazon.jsii.Kernel.get(this, "attrMatchCommunitySet", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute NextPriority: The priority of the next route map that is associated with the current route map.
     * <p>
     * Value range: 1 to 100.  If this parameter is not set, the current route map is not associated with any route map that is ordered next to the current route map. If this parameter is set to 1, the current route map is associated with the next route map. If this parameter is set to a value other than 1, the priority of the associated route map must be lower than the priority of the current route map, that is, the value of NextPriority must be greater than the value set for Priority. Only when MapResult is set to Permit, the routes which match all the matching conditions will be evaluated by the associated route map that is configured with a specific preference value.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrNextPriority() {
        return software.amazon.jsii.Kernel.get(this, "attrNextPriority", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute OperateCommunitySet: An action statement that operates the community attribute.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrOperateCommunitySet() {
        return software.amazon.jsii.Kernel.get(this, "attrOperateCommunitySet", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Preference: An action statement that modifies the preference of the route.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPreference() {
        return software.amazon.jsii.Kernel.get(this, "attrPreference", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute PrependAsPath: Indicates AS Path prepending when a regional gateway receives or publishes a route.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPrependAsPath() {
        return software.amazon.jsii.Kernel.get(this, "attrPrependAsPath", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Priority: The priority of the route map.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPriority() {
        return software.amazon.jsii.Kernel.get(this, "attrPriority", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute RouteMapId: The ID of the route map.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRouteMapId() {
        return software.amazon.jsii.Kernel.get(this, "attrRouteMapId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute RouteTypes: A match statement that indicates the list of route types.
     * <p>
     * System: System routes generated by the system. Custom: Custom routes added by users. BGP: Routes advertised to BGP.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRouteTypes() {
        return software.amazon.jsii.Kernel.get(this, "attrRouteTypes", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute SourceChildInstanceTypes: A match statement that indicates the list of IDs of the source instances.
     * <p>
     * VPC: Virtual Private Cloud (VPC) VBR: Virtual Border Router (VBR) CCN: Mainland China Cloud Connect Network (CCN)
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSourceChildInstanceTypes() {
        return software.amazon.jsii.Kernel.get(this, "attrSourceChildInstanceTypes", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute SourceInstanceIds: A match statement that indicates the list of IDs of the source instances.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSourceInstanceIds() {
        return software.amazon.jsii.Kernel.get(this, "attrSourceInstanceIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute SourceInstanceIdsReverseMatch: Indicates whether to enable the reverse match method of the SourceInstanceIds match condition.
     * <p>
     * Valid values:  false (default): If the ID of a route's source instance is included in SourceInstanceIds, the route is permitted. true: If the ID of a route's source instance is not included in SourceInstanceIds, the route is permitted.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSourceInstanceIdsReverseMatch() {
        return software.amazon.jsii.Kernel.get(this, "attrSourceInstanceIdsReverseMatch", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute SourceRegionIds: A match statement that indicates the list of IDs of the source regions.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSourceRegionIds() {
        return software.amazon.jsii.Kernel.get(this, "attrSourceRegionIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute SourceRouteTableIds: A match statement that indicates the list of IDs of the source route tables.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSourceRouteTableIds() {
        return software.amazon.jsii.Kernel.get(this, "attrSourceRouteTableIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute TransmitDirection: The direction in which the route map is applied.
     * <p>
     * Valid values:  RegionIn: The direction in which routes are imported to the regional gateway of the CEN.  For example, routes are imported to the regional gateway from an instance in the current region or another region.  RegionOut: The direction in which routes are exported from the regional gateway of the CEN.  For example, routes are exported from the regional gateway of the current region to an instance in the same region, or to the regional gateway in another region.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTransmitDirection() {
        return software.amazon.jsii.Kernel.get(this, "attrTransmitDirection", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cen.CenRouteMap}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cen.CenRouteMap> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.cen.CenRouteMapProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cen.CenRouteMapProps.Builder();
        }

        /**
         * Property cenId: The ID of the CEN instance.
         * <p>
         * @return {@code this}
         * @param cenId Property cenId: The ID of the CEN instance. This parameter is required.
         */
        public Builder cenId(final java.lang.String cenId) {
            this.props.cenId(cenId);
            return this;
        }
        /**
         * Property cenId: The ID of the CEN instance.
         * <p>
         * @return {@code this}
         * @param cenId Property cenId: The ID of the CEN instance. This parameter is required.
         */
        public Builder cenId(final com.aliyun.ros.cdk.core.IResolvable cenId) {
            this.props.cenId(cenId);
            return this;
        }

        /**
         * Property cenRegionId: The ID of the region to which the CEN instance belongs.
         * <p>
         * @return {@code this}
         * @param cenRegionId Property cenRegionId: The ID of the region to which the CEN instance belongs. This parameter is required.
         */
        public Builder cenRegionId(final java.lang.String cenRegionId) {
            this.props.cenRegionId(cenRegionId);
            return this;
        }
        /**
         * Property cenRegionId: The ID of the region to which the CEN instance belongs.
         * <p>
         * @return {@code this}
         * @param cenRegionId Property cenRegionId: The ID of the region to which the CEN instance belongs. This parameter is required.
         */
        public Builder cenRegionId(final com.aliyun.ros.cdk.core.IResolvable cenRegionId) {
            this.props.cenRegionId(cenRegionId);
            return this;
        }

        /**
         * Property mapResult: The action that is performed to a route if the route meets all the match conditions.
         * <p>
         * Permit: The route is permitted. Deny: The route is denied.
         * <p>
         * @return {@code this}
         * @param mapResult Property mapResult: The action that is performed to a route if the route meets all the match conditions. This parameter is required.
         */
        public Builder mapResult(final java.lang.String mapResult) {
            this.props.mapResult(mapResult);
            return this;
        }
        /**
         * Property mapResult: The action that is performed to a route if the route meets all the match conditions.
         * <p>
         * Permit: The route is permitted. Deny: The route is denied.
         * <p>
         * @return {@code this}
         * @param mapResult Property mapResult: The action that is performed to a route if the route meets all the match conditions. This parameter is required.
         */
        public Builder mapResult(final com.aliyun.ros.cdk.core.IResolvable mapResult) {
            this.props.mapResult(mapResult);
            return this;
        }

        /**
         * Property priority: The priority of the route map.
         * <p>
         * @return {@code this}
         * @param priority Property priority: The priority of the route map. This parameter is required.
         */
        public Builder priority(final java.lang.Number priority) {
            this.props.priority(priority);
            return this;
        }
        /**
         * Property priority: The priority of the route map.
         * <p>
         * @return {@code this}
         * @param priority Property priority: The priority of the route map. This parameter is required.
         */
        public Builder priority(final com.aliyun.ros.cdk.core.IResolvable priority) {
            this.props.priority(priority);
            return this;
        }

        /**
         * Property transmitDirection: The direction in which the route map is applied.
         * <p>
         * Valid values:  RegionIn: The direction in which routes are imported to the regional gateway of the CEN.  For example, routes are imported to the regional gateway from an instance in the current region or another region.  RegionOut: The direction in which routes are exported from the regional gateway of the CEN.  For example, routes are exported from the regional gateway of the current region to an instance in the same region, or to the regional gateway in another region.
         * <p>
         * @return {@code this}
         * @param transmitDirection Property transmitDirection: The direction in which the route map is applied. This parameter is required.
         */
        public Builder transmitDirection(final java.lang.String transmitDirection) {
            this.props.transmitDirection(transmitDirection);
            return this;
        }
        /**
         * Property transmitDirection: The direction in which the route map is applied.
         * <p>
         * Valid values:  RegionIn: The direction in which routes are imported to the regional gateway of the CEN.  For example, routes are imported to the regional gateway from an instance in the current region or another region.  RegionOut: The direction in which routes are exported from the regional gateway of the CEN.  For example, routes are exported from the regional gateway of the current region to an instance in the same region, or to the regional gateway in another region.
         * <p>
         * @return {@code this}
         * @param transmitDirection Property transmitDirection: The direction in which the route map is applied. This parameter is required.
         */
        public Builder transmitDirection(final com.aliyun.ros.cdk.core.IResolvable transmitDirection) {
            this.props.transmitDirection(transmitDirection);
            return this;
        }

        /**
         * Property asPathMatchMode: A match statement.
         * <p>
         * It indicates the mode in which the as-path attribute is matched. Valid values:  Include: Fuzzy match. A route matches the condition if the AS path in the route overlaps the AS path in the match condition. Complete: Exact match. A route matches the condition only when the AS path of the route is the same as the AS path in the match condition.
         * <p>
         * @return {@code this}
         * @param asPathMatchMode Property asPathMatchMode: A match statement. This parameter is required.
         */
        public Builder asPathMatchMode(final java.lang.String asPathMatchMode) {
            this.props.asPathMatchMode(asPathMatchMode);
            return this;
        }
        /**
         * Property asPathMatchMode: A match statement.
         * <p>
         * It indicates the mode in which the as-path attribute is matched. Valid values:  Include: Fuzzy match. A route matches the condition if the AS path in the route overlaps the AS path in the match condition. Complete: Exact match. A route matches the condition only when the AS path of the route is the same as the AS path in the match condition.
         * <p>
         * @return {@code this}
         * @param asPathMatchMode Property asPathMatchMode: A match statement. This parameter is required.
         */
        public Builder asPathMatchMode(final com.aliyun.ros.cdk.core.IResolvable asPathMatchMode) {
            this.props.asPathMatchMode(asPathMatchMode);
            return this;
        }

        /**
         * Property cidrMatchMode: A match statement.
         * <p>
         * It indicates the mode in which the prefix attribute is matched. Valid values:  Include: Fuzzy match. If the prefix of a route is contained in the prefix in the match condition, the route matches the condition.  For example, if the prefix in the match condition is set to 1.1.0.0/16 and the match method is set to Fuzzy Match, the route with the prefix of 1.1.1.0/24 matches the condition.  Complete: Exact match. A route matches the condition only when the prefix of the route is the same as the prefix in the match condition.  For example, if the prefix in the match condition is set to 1.1.0.0/16 and the match method is set to Exact Match, only the route with the prefix of 1.1.1.0/16 matches the condition.
         * <p>
         * @return {@code this}
         * @param cidrMatchMode Property cidrMatchMode: A match statement. This parameter is required.
         */
        public Builder cidrMatchMode(final java.lang.String cidrMatchMode) {
            this.props.cidrMatchMode(cidrMatchMode);
            return this;
        }
        /**
         * Property cidrMatchMode: A match statement.
         * <p>
         * It indicates the mode in which the prefix attribute is matched. Valid values:  Include: Fuzzy match. If the prefix of a route is contained in the prefix in the match condition, the route matches the condition.  For example, if the prefix in the match condition is set to 1.1.0.0/16 and the match method is set to Fuzzy Match, the route with the prefix of 1.1.1.0/24 matches the condition.  Complete: Exact match. A route matches the condition only when the prefix of the route is the same as the prefix in the match condition.  For example, if the prefix in the match condition is set to 1.1.0.0/16 and the match method is set to Exact Match, only the route with the prefix of 1.1.1.0/16 matches the condition.
         * <p>
         * @return {@code this}
         * @param cidrMatchMode Property cidrMatchMode: A match statement. This parameter is required.
         */
        public Builder cidrMatchMode(final com.aliyun.ros.cdk.core.IResolvable cidrMatchMode) {
            this.props.cidrMatchMode(cidrMatchMode);
            return this;
        }

        /**
         * Property communityMatchMode: A match statement.
         * <p>
         * It indicates the mode in which the community attribute is matched. Valid values:  Include: Fuzzy match. A route matches the condition if the community of the route overlaps the community in the match condition. Complete: Exact match. A route matches the condition only when the community of the route is the same as the community in the match condition.
         * <p>
         * @return {@code this}
         * @param communityMatchMode Property communityMatchMode: A match statement. This parameter is required.
         */
        public Builder communityMatchMode(final java.lang.String communityMatchMode) {
            this.props.communityMatchMode(communityMatchMode);
            return this;
        }
        /**
         * Property communityMatchMode: A match statement.
         * <p>
         * It indicates the mode in which the community attribute is matched. Valid values:  Include: Fuzzy match. A route matches the condition if the community of the route overlaps the community in the match condition. Complete: Exact match. A route matches the condition only when the community of the route is the same as the community in the match condition.
         * <p>
         * @return {@code this}
         * @param communityMatchMode Property communityMatchMode: A match statement. This parameter is required.
         */
        public Builder communityMatchMode(final com.aliyun.ros.cdk.core.IResolvable communityMatchMode) {
            this.props.communityMatchMode(communityMatchMode);
            return this;
        }

        /**
         * Property communityOperateMode: An action statement.
         * <p>
         * It indicates the mode in which the community attribute is operated. Valid values:  Additive: Sets a value for the community attribute. Replace: Replaces the value of the community attribute.
         * <p>
         * @return {@code this}
         * @param communityOperateMode Property communityOperateMode: An action statement. This parameter is required.
         */
        public Builder communityOperateMode(final java.lang.String communityOperateMode) {
            this.props.communityOperateMode(communityOperateMode);
            return this;
        }
        /**
         * Property communityOperateMode: An action statement.
         * <p>
         * It indicates the mode in which the community attribute is operated. Valid values:  Additive: Sets a value for the community attribute. Replace: Replaces the value of the community attribute.
         * <p>
         * @return {@code this}
         * @param communityOperateMode Property communityOperateMode: An action statement. This parameter is required.
         */
        public Builder communityOperateMode(final com.aliyun.ros.cdk.core.IResolvable communityOperateMode) {
            this.props.communityOperateMode(communityOperateMode);
            return this;
        }

        /**
         * Property description: The description of the route map.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the route map. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of the route map.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the route map. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property destinationChildInstanceTypes: A match statement that indicates the list of IDs of the destination instances.
         * <p>
         * VPC: VPC VBR: VBR CCN: Mainland China CCN This parameter is valid only when the TransmitDirection parameter is set to RegionOut, and the destination instance and the route map belong to the same region.
         * <p>
         * @return {@code this}
         * @param destinationChildInstanceTypes Property destinationChildInstanceTypes: A match statement that indicates the list of IDs of the destination instances. This parameter is required.
         */
        public Builder destinationChildInstanceTypes(final com.aliyun.ros.cdk.core.IResolvable destinationChildInstanceTypes) {
            this.props.destinationChildInstanceTypes(destinationChildInstanceTypes);
            return this;
        }
        /**
         * Property destinationChildInstanceTypes: A match statement that indicates the list of IDs of the destination instances.
         * <p>
         * VPC: VPC VBR: VBR CCN: Mainland China CCN This parameter is valid only when the TransmitDirection parameter is set to RegionOut, and the destination instance and the route map belong to the same region.
         * <p>
         * @return {@code this}
         * @param destinationChildInstanceTypes Property destinationChildInstanceTypes: A match statement that indicates the list of IDs of the destination instances. This parameter is required.
         */
        public Builder destinationChildInstanceTypes(final java.util.List<? extends java.lang.Object> destinationChildInstanceTypes) {
            this.props.destinationChildInstanceTypes(destinationChildInstanceTypes);
            return this;
        }

        /**
         * Property destinationCidrBlocks: A match statement that indicates the prefix list.
         * <p>
         * @return {@code this}
         * @param destinationCidrBlocks Property destinationCidrBlocks: A match statement that indicates the prefix list. This parameter is required.
         */
        public Builder destinationCidrBlocks(final com.aliyun.ros.cdk.core.IResolvable destinationCidrBlocks) {
            this.props.destinationCidrBlocks(destinationCidrBlocks);
            return this;
        }
        /**
         * Property destinationCidrBlocks: A match statement that indicates the prefix list.
         * <p>
         * @return {@code this}
         * @param destinationCidrBlocks Property destinationCidrBlocks: A match statement that indicates the prefix list. This parameter is required.
         */
        public Builder destinationCidrBlocks(final java.util.List<? extends java.lang.Object> destinationCidrBlocks) {
            this.props.destinationCidrBlocks(destinationCidrBlocks);
            return this;
        }

        /**
         * Property destinationInstanceIds: A match statement that indicates the list of IDs of the destination instances.
         * <p>
         * This parameter is valid only when the TransmitDirection parameter is set to RegionOut, and the destination instance and the route map belongs to the same region.
         * <p>
         * @return {@code this}
         * @param destinationInstanceIds Property destinationInstanceIds: A match statement that indicates the list of IDs of the destination instances. This parameter is required.
         */
        public Builder destinationInstanceIds(final com.aliyun.ros.cdk.core.IResolvable destinationInstanceIds) {
            this.props.destinationInstanceIds(destinationInstanceIds);
            return this;
        }
        /**
         * Property destinationInstanceIds: A match statement that indicates the list of IDs of the destination instances.
         * <p>
         * This parameter is valid only when the TransmitDirection parameter is set to RegionOut, and the destination instance and the route map belongs to the same region.
         * <p>
         * @return {@code this}
         * @param destinationInstanceIds Property destinationInstanceIds: A match statement that indicates the list of IDs of the destination instances. This parameter is required.
         */
        public Builder destinationInstanceIds(final java.util.List<? extends java.lang.Object> destinationInstanceIds) {
            this.props.destinationInstanceIds(destinationInstanceIds);
            return this;
        }

        /**
         * Property destinationInstanceIdsReverseMatch: Indicates whether to enable the reverse match method of the DestinationInstanceIds match condition.
         * <p>
         * Valid values:  false (default): If the ID of a route's destination instance is included in DestinationInstanceIds, the route is permitted. true: If the ID of a route's destination instance is not included in DestinationInstanceIds, the route is permitted.
         * <p>
         * @return {@code this}
         * @param destinationInstanceIdsReverseMatch Property destinationInstanceIdsReverseMatch: Indicates whether to enable the reverse match method of the DestinationInstanceIds match condition. This parameter is required.
         */
        public Builder destinationInstanceIdsReverseMatch(final java.lang.Boolean destinationInstanceIdsReverseMatch) {
            this.props.destinationInstanceIdsReverseMatch(destinationInstanceIdsReverseMatch);
            return this;
        }
        /**
         * Property destinationInstanceIdsReverseMatch: Indicates whether to enable the reverse match method of the DestinationInstanceIds match condition.
         * <p>
         * Valid values:  false (default): If the ID of a route's destination instance is included in DestinationInstanceIds, the route is permitted. true: If the ID of a route's destination instance is not included in DestinationInstanceIds, the route is permitted.
         * <p>
         * @return {@code this}
         * @param destinationInstanceIdsReverseMatch Property destinationInstanceIdsReverseMatch: Indicates whether to enable the reverse match method of the DestinationInstanceIds match condition. This parameter is required.
         */
        public Builder destinationInstanceIdsReverseMatch(final com.aliyun.ros.cdk.core.IResolvable destinationInstanceIdsReverseMatch) {
            this.props.destinationInstanceIdsReverseMatch(destinationInstanceIdsReverseMatch);
            return this;
        }

        /**
         * Property destinationRouteTableIds: A match statement that indicates the list of IDs of the destination route tables.
         * <p>
         * This parameter is valid only when the TransmitDirection parameter is set to RegionOut, and the destination route table and the route map belongs to the same region.
         * <p>
         * @return {@code this}
         * @param destinationRouteTableIds Property destinationRouteTableIds: A match statement that indicates the list of IDs of the destination route tables. This parameter is required.
         */
        public Builder destinationRouteTableIds(final com.aliyun.ros.cdk.core.IResolvable destinationRouteTableIds) {
            this.props.destinationRouteTableIds(destinationRouteTableIds);
            return this;
        }
        /**
         * Property destinationRouteTableIds: A match statement that indicates the list of IDs of the destination route tables.
         * <p>
         * This parameter is valid only when the TransmitDirection parameter is set to RegionOut, and the destination route table and the route map belongs to the same region.
         * <p>
         * @return {@code this}
         * @param destinationRouteTableIds Property destinationRouteTableIds: A match statement that indicates the list of IDs of the destination route tables. This parameter is required.
         */
        public Builder destinationRouteTableIds(final java.util.List<? extends java.lang.Object> destinationRouteTableIds) {
            this.props.destinationRouteTableIds(destinationRouteTableIds);
            return this;
        }

        /**
         * Property matchAsns: A match statement that indicates the As path list.
         * <p>
         * @return {@code this}
         * @param matchAsns Property matchAsns: A match statement that indicates the As path list. This parameter is required.
         */
        public Builder matchAsns(final com.aliyun.ros.cdk.core.IResolvable matchAsns) {
            this.props.matchAsns(matchAsns);
            return this;
        }
        /**
         * Property matchAsns: A match statement that indicates the As path list.
         * <p>
         * @return {@code this}
         * @param matchAsns Property matchAsns: A match statement that indicates the As path list. This parameter is required.
         */
        public Builder matchAsns(final java.util.List<? extends java.lang.Object> matchAsns) {
            this.props.matchAsns(matchAsns);
            return this;
        }

        /**
         * Property matchCommunitySet: A match statement that indicates the community set.
         * <p>
         * @return {@code this}
         * @param matchCommunitySet Property matchCommunitySet: A match statement that indicates the community set. This parameter is required.
         */
        public Builder matchCommunitySet(final com.aliyun.ros.cdk.core.IResolvable matchCommunitySet) {
            this.props.matchCommunitySet(matchCommunitySet);
            return this;
        }
        /**
         * Property matchCommunitySet: A match statement that indicates the community set.
         * <p>
         * @return {@code this}
         * @param matchCommunitySet Property matchCommunitySet: A match statement that indicates the community set. This parameter is required.
         */
        public Builder matchCommunitySet(final java.util.List<? extends java.lang.Object> matchCommunitySet) {
            this.props.matchCommunitySet(matchCommunitySet);
            return this;
        }

        /**
         * Property nextPriority: The priority of the next route map that is associated with the current route map.
         * <p>
         * Value range: 1 to 100.  If this parameter is not set, the current route map is not associated with any route map that is ordered next to the current route map. If this parameter is set to 1, the current route map is associated with the next route map. If this parameter is set to a value other than 1, the priority of the associated route map must be lower than the priority of the current route map, that is, the value of NextPriority must be greater than the value set for Priority. Only when MapResult is set to Permit, the routes which match all the matching conditions will be evaluated by the associated route map that is configured with a specific preference value.
         * <p>
         * @return {@code this}
         * @param nextPriority Property nextPriority: The priority of the next route map that is associated with the current route map. This parameter is required.
         */
        public Builder nextPriority(final java.lang.Number nextPriority) {
            this.props.nextPriority(nextPriority);
            return this;
        }
        /**
         * Property nextPriority: The priority of the next route map that is associated with the current route map.
         * <p>
         * Value range: 1 to 100.  If this parameter is not set, the current route map is not associated with any route map that is ordered next to the current route map. If this parameter is set to 1, the current route map is associated with the next route map. If this parameter is set to a value other than 1, the priority of the associated route map must be lower than the priority of the current route map, that is, the value of NextPriority must be greater than the value set for Priority. Only when MapResult is set to Permit, the routes which match all the matching conditions will be evaluated by the associated route map that is configured with a specific preference value.
         * <p>
         * @return {@code this}
         * @param nextPriority Property nextPriority: The priority of the next route map that is associated with the current route map. This parameter is required.
         */
        public Builder nextPriority(final com.aliyun.ros.cdk.core.IResolvable nextPriority) {
            this.props.nextPriority(nextPriority);
            return this;
        }

        /**
         * Property operateCommunitySet: An action statement that operates the community attribute.
         * <p>
         * @return {@code this}
         * @param operateCommunitySet Property operateCommunitySet: An action statement that operates the community attribute. This parameter is required.
         */
        public Builder operateCommunitySet(final com.aliyun.ros.cdk.core.IResolvable operateCommunitySet) {
            this.props.operateCommunitySet(operateCommunitySet);
            return this;
        }
        /**
         * Property operateCommunitySet: An action statement that operates the community attribute.
         * <p>
         * @return {@code this}
         * @param operateCommunitySet Property operateCommunitySet: An action statement that operates the community attribute. This parameter is required.
         */
        public Builder operateCommunitySet(final java.util.List<? extends java.lang.Object> operateCommunitySet) {
            this.props.operateCommunitySet(operateCommunitySet);
            return this;
        }

        /**
         * Property preference: An action statement that modifies the preference of the route.
         * <p>
         * @return {@code this}
         * @param preference Property preference: An action statement that modifies the preference of the route. This parameter is required.
         */
        public Builder preference(final java.lang.Number preference) {
            this.props.preference(preference);
            return this;
        }
        /**
         * Property preference: An action statement that modifies the preference of the route.
         * <p>
         * @return {@code this}
         * @param preference Property preference: An action statement that modifies the preference of the route. This parameter is required.
         */
        public Builder preference(final com.aliyun.ros.cdk.core.IResolvable preference) {
            this.props.preference(preference);
            return this;
        }

        /**
         * Property prependAsPath: Indicates AS Path prepending when a regional gateway receives or publishes a route.
         * <p>
         * @return {@code this}
         * @param prependAsPath Property prependAsPath: Indicates AS Path prepending when a regional gateway receives or publishes a route. This parameter is required.
         */
        public Builder prependAsPath(final com.aliyun.ros.cdk.core.IResolvable prependAsPath) {
            this.props.prependAsPath(prependAsPath);
            return this;
        }
        /**
         * Property prependAsPath: Indicates AS Path prepending when a regional gateway receives or publishes a route.
         * <p>
         * @return {@code this}
         * @param prependAsPath Property prependAsPath: Indicates AS Path prepending when a regional gateway receives or publishes a route. This parameter is required.
         */
        public Builder prependAsPath(final java.util.List<? extends java.lang.Object> prependAsPath) {
            this.props.prependAsPath(prependAsPath);
            return this;
        }

        /**
         * Property routeTypes: A match statement that indicates the list of route types.
         * <p>
         * System: System routes generated by the system. Custom: Custom routes added by users. BGP: Routes advertised to BGP.
         * <p>
         * @return {@code this}
         * @param routeTypes Property routeTypes: A match statement that indicates the list of route types. This parameter is required.
         */
        public Builder routeTypes(final com.aliyun.ros.cdk.core.IResolvable routeTypes) {
            this.props.routeTypes(routeTypes);
            return this;
        }
        /**
         * Property routeTypes: A match statement that indicates the list of route types.
         * <p>
         * System: System routes generated by the system. Custom: Custom routes added by users. BGP: Routes advertised to BGP.
         * <p>
         * @return {@code this}
         * @param routeTypes Property routeTypes: A match statement that indicates the list of route types. This parameter is required.
         */
        public Builder routeTypes(final java.util.List<? extends java.lang.Object> routeTypes) {
            this.props.routeTypes(routeTypes);
            return this;
        }

        /**
         * Property sourceChildInstanceTypes: A match statement that indicates the list of IDs of the source instances.
         * <p>
         * VPC: Virtual Private Cloud (VPC) VBR: Virtual Border Router (VBR) CCN: Mainland China Cloud Connect Network (CCN)
         * <p>
         * @return {@code this}
         * @param sourceChildInstanceTypes Property sourceChildInstanceTypes: A match statement that indicates the list of IDs of the source instances. This parameter is required.
         */
        public Builder sourceChildInstanceTypes(final com.aliyun.ros.cdk.core.IResolvable sourceChildInstanceTypes) {
            this.props.sourceChildInstanceTypes(sourceChildInstanceTypes);
            return this;
        }
        /**
         * Property sourceChildInstanceTypes: A match statement that indicates the list of IDs of the source instances.
         * <p>
         * VPC: Virtual Private Cloud (VPC) VBR: Virtual Border Router (VBR) CCN: Mainland China Cloud Connect Network (CCN)
         * <p>
         * @return {@code this}
         * @param sourceChildInstanceTypes Property sourceChildInstanceTypes: A match statement that indicates the list of IDs of the source instances. This parameter is required.
         */
        public Builder sourceChildInstanceTypes(final java.util.List<? extends java.lang.Object> sourceChildInstanceTypes) {
            this.props.sourceChildInstanceTypes(sourceChildInstanceTypes);
            return this;
        }

        /**
         * Property sourceInstanceIds: A match statement that indicates the list of IDs of the source instances.
         * <p>
         * @return {@code this}
         * @param sourceInstanceIds Property sourceInstanceIds: A match statement that indicates the list of IDs of the source instances. This parameter is required.
         */
        public Builder sourceInstanceIds(final com.aliyun.ros.cdk.core.IResolvable sourceInstanceIds) {
            this.props.sourceInstanceIds(sourceInstanceIds);
            return this;
        }
        /**
         * Property sourceInstanceIds: A match statement that indicates the list of IDs of the source instances.
         * <p>
         * @return {@code this}
         * @param sourceInstanceIds Property sourceInstanceIds: A match statement that indicates the list of IDs of the source instances. This parameter is required.
         */
        public Builder sourceInstanceIds(final java.util.List<? extends java.lang.Object> sourceInstanceIds) {
            this.props.sourceInstanceIds(sourceInstanceIds);
            return this;
        }

        /**
         * Property sourceInstanceIdsReverseMatch: Indicates whether to enable the reverse match method of the SourceInstanceIds match condition.
         * <p>
         * Valid values:  false (default): If the ID of a route's source instance is included in SourceInstanceIds, the route is permitted. true: If the ID of a route's source instance is not included in SourceInstanceIds, the route is permitted.
         * <p>
         * @return {@code this}
         * @param sourceInstanceIdsReverseMatch Property sourceInstanceIdsReverseMatch: Indicates whether to enable the reverse match method of the SourceInstanceIds match condition. This parameter is required.
         */
        public Builder sourceInstanceIdsReverseMatch(final java.lang.Boolean sourceInstanceIdsReverseMatch) {
            this.props.sourceInstanceIdsReverseMatch(sourceInstanceIdsReverseMatch);
            return this;
        }
        /**
         * Property sourceInstanceIdsReverseMatch: Indicates whether to enable the reverse match method of the SourceInstanceIds match condition.
         * <p>
         * Valid values:  false (default): If the ID of a route's source instance is included in SourceInstanceIds, the route is permitted. true: If the ID of a route's source instance is not included in SourceInstanceIds, the route is permitted.
         * <p>
         * @return {@code this}
         * @param sourceInstanceIdsReverseMatch Property sourceInstanceIdsReverseMatch: Indicates whether to enable the reverse match method of the SourceInstanceIds match condition. This parameter is required.
         */
        public Builder sourceInstanceIdsReverseMatch(final com.aliyun.ros.cdk.core.IResolvable sourceInstanceIdsReverseMatch) {
            this.props.sourceInstanceIdsReverseMatch(sourceInstanceIdsReverseMatch);
            return this;
        }

        /**
         * Property sourceRegionIds: A match statement that indicates the list of IDs of the source regions.
         * <p>
         * @return {@code this}
         * @param sourceRegionIds Property sourceRegionIds: A match statement that indicates the list of IDs of the source regions. This parameter is required.
         */
        public Builder sourceRegionIds(final com.aliyun.ros.cdk.core.IResolvable sourceRegionIds) {
            this.props.sourceRegionIds(sourceRegionIds);
            return this;
        }
        /**
         * Property sourceRegionIds: A match statement that indicates the list of IDs of the source regions.
         * <p>
         * @return {@code this}
         * @param sourceRegionIds Property sourceRegionIds: A match statement that indicates the list of IDs of the source regions. This parameter is required.
         */
        public Builder sourceRegionIds(final java.util.List<? extends java.lang.Object> sourceRegionIds) {
            this.props.sourceRegionIds(sourceRegionIds);
            return this;
        }

        /**
         * Property sourceRouteTableIds: A match statement that indicates the list of IDs of the source route tables.
         * <p>
         * @return {@code this}
         * @param sourceRouteTableIds Property sourceRouteTableIds: A match statement that indicates the list of IDs of the source route tables. This parameter is required.
         */
        public Builder sourceRouteTableIds(final com.aliyun.ros.cdk.core.IResolvable sourceRouteTableIds) {
            this.props.sourceRouteTableIds(sourceRouteTableIds);
            return this;
        }
        /**
         * Property sourceRouteTableIds: A match statement that indicates the list of IDs of the source route tables.
         * <p>
         * @return {@code this}
         * @param sourceRouteTableIds Property sourceRouteTableIds: A match statement that indicates the list of IDs of the source route tables. This parameter is required.
         */
        public Builder sourceRouteTableIds(final java.util.List<? extends java.lang.Object> sourceRouteTableIds) {
            this.props.sourceRouteTableIds(sourceRouteTableIds);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.cen.CenRouteMap}.
         */
        @Override
        public com.aliyun.ros.cdk.cen.CenRouteMap build() {
            return new com.aliyun.ros.cdk.cen.CenRouteMap(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
