package com.aliyun.ros.cdk.cen;

/**
 * Properties for defining a `ALIYUN::CEN::CenRouteMap`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.27.0 (build 07d848a)", date = "2021-04-07T04:01:41.804Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cen.$Module.class, fqn = "@alicloud/ros-cdk-cen.CenRouteMapProps")
@software.amazon.jsii.Jsii.Proxy(CenRouteMapProps.Jsii$Proxy.class)
public interface CenRouteMapProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property cenId: The ID of the CEN instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCenId();

    /**
     * Property cenRegionId: The ID of the region to which the CEN instance belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCenRegionId();

    /**
     * Property mapResult: The action that is performed to a route if the route meets all the match conditions.
     * <p>
     * Permit: The route is permitted. Deny: The route is denied.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getMapResult();

    /**
     * Property priority: The priority of the route map.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPriority();

    /**
     * Property transmitDirection: The direction in which the route map is applied.
     * <p>
     * Valid values:  RegionIn: The direction in which routes are imported to the regional gateway of the CEN.  For example, routes are imported to the regional gateway from an instance in the current region or another region.  RegionOut: The direction in which routes are exported from the regional gateway of the CEN.  For example, routes are exported from the regional gateway of the current region to an instance in the same region, or to the regional gateway in another region.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTransmitDirection();

    /**
     * Property asPathMatchMode: A match statement.
     * <p>
     * It indicates the mode in which the as-path attribute is matched. Valid values:  Include: Fuzzy match. A route matches the condition if the AS path in the route overlaps the AS path in the match condition. Complete: Exact match. A route matches the condition only when the AS path of the route is the same as the AS path in the match condition.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAsPathMatchMode() {
        return null;
    }

    /**
     * Property cidrMatchMode: A match statement.
     * <p>
     * It indicates the mode in which the prefix attribute is matched. Valid values:  Include: Fuzzy match. If the prefix of a route is contained in the prefix in the match condition, the route matches the condition.  For example, if the prefix in the match condition is set to 1.1.0.0/16 and the match method is set to Fuzzy Match, the route with the prefix of 1.1.1.0/24 matches the condition.  Complete: Exact match. A route matches the condition only when the prefix of the route is the same as the prefix in the match condition.  For example, if the prefix in the match condition is set to 1.1.0.0/16 and the match method is set to Exact Match, only the route with the prefix of 1.1.1.0/16 matches the condition.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCidrMatchMode() {
        return null;
    }

    /**
     * Property communityMatchMode: A match statement.
     * <p>
     * It indicates the mode in which the community attribute is matched. Valid values:  Include: Fuzzy match. A route matches the condition if the community of the route overlaps the community in the match condition. Complete: Exact match. A route matches the condition only when the community of the route is the same as the community in the match condition.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCommunityMatchMode() {
        return null;
    }

    /**
     * Property communityOperateMode: An action statement.
     * <p>
     * It indicates the mode in which the community attribute is operated. Valid values:  Additive: Sets a value for the community attribute. Replace: Replaces the value of the community attribute.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCommunityOperateMode() {
        return null;
    }

    /**
     * Property description: The description of the route map.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property destinationChildInstanceTypes: A match statement that indicates the list of IDs of the destination instances.
     * <p>
     * VPC: VPC VBR: VBR CCN: Mainland China CCN This parameter is valid only when the TransmitDirection parameter is set to RegionOut, and the destination instance and the route map belong to the same region.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDestinationChildInstanceTypes() {
        return null;
    }

    /**
     * Property destinationCidrBlocks: A match statement that indicates the prefix list.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDestinationCidrBlocks() {
        return null;
    }

    /**
     * Property destinationInstanceIds: A match statement that indicates the list of IDs of the destination instances.
     * <p>
     * This parameter is valid only when the TransmitDirection parameter is set to RegionOut, and the destination instance and the route map belongs to the same region.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDestinationInstanceIds() {
        return null;
    }

    /**
     * Property destinationInstanceIdsReverseMatch: Indicates whether to enable the reverse match method of the DestinationInstanceIds match condition.
     * <p>
     * Valid values:  false (default): If the ID of a route's destination instance is included in DestinationInstanceIds, the route is permitted. true: If the ID of a route's destination instance is not included in DestinationInstanceIds, the route is permitted.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDestinationInstanceIdsReverseMatch() {
        return null;
    }

    /**
     * Property destinationRouteTableIds: A match statement that indicates the list of IDs of the destination route tables.
     * <p>
     * This parameter is valid only when the TransmitDirection parameter is set to RegionOut, and the destination route table and the route map belongs to the same region.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDestinationRouteTableIds() {
        return null;
    }

    /**
     * Property matchAsns: A match statement that indicates the As path list.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMatchAsns() {
        return null;
    }

    /**
     * Property matchCommunitySet: A match statement that indicates the community set.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMatchCommunitySet() {
        return null;
    }

    /**
     * Property nextPriority: The priority of the next route map that is associated with the current route map.
     * <p>
     * Value range: 1 to 100.  If this parameter is not set, the current route map is not associated with any route map that is ordered next to the current route map. If this parameter is set to 1, the current route map is associated with the next route map. If this parameter is set to a value other than 1, the priority of the associated route map must be lower than the priority of the current route map, that is, the value of NextPriority must be greater than the value set for Priority. Only when MapResult is set to Permit, the routes which match all the matching conditions will be evaluated by the associated route map that is configured with a specific preference value.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNextPriority() {
        return null;
    }

    /**
     * Property operateCommunitySet: An action statement that operates the community attribute.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOperateCommunitySet() {
        return null;
    }

    /**
     * Property preference: An action statement that modifies the preference of the route.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPreference() {
        return null;
    }

    /**
     * Property prependAsPath: Indicates AS Path prepending when a regional gateway receives or publishes a route.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPrependAsPath() {
        return null;
    }

    /**
     * Property routeTypes: A match statement that indicates the list of route types.
     * <p>
     * System: System routes generated by the system. Custom: Custom routes added by users. BGP: Routes advertised to BGP.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRouteTypes() {
        return null;
    }

    /**
     * Property sourceChildInstanceTypes: A match statement that indicates the list of IDs of the source instances.
     * <p>
     * VPC: Virtual Private Cloud (VPC) VBR: Virtual Border Router (VBR) CCN: Mainland China Cloud Connect Network (CCN)
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSourceChildInstanceTypes() {
        return null;
    }

    /**
     * Property sourceInstanceIds: A match statement that indicates the list of IDs of the source instances.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSourceInstanceIds() {
        return null;
    }

    /**
     * Property sourceInstanceIdsReverseMatch: Indicates whether to enable the reverse match method of the SourceInstanceIds match condition.
     * <p>
     * Valid values:  false (default): If the ID of a route's source instance is included in SourceInstanceIds, the route is permitted. true: If the ID of a route's source instance is not included in SourceInstanceIds, the route is permitted.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSourceInstanceIdsReverseMatch() {
        return null;
    }

    /**
     * Property sourceRegionIds: A match statement that indicates the list of IDs of the source regions.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSourceRegionIds() {
        return null;
    }

    /**
     * Property sourceRouteTableIds: A match statement that indicates the list of IDs of the source route tables.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSourceRouteTableIds() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link CenRouteMapProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link CenRouteMapProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<CenRouteMapProps> {
        private java.lang.Object cenId;
        private java.lang.Object cenRegionId;
        private java.lang.Object mapResult;
        private java.lang.Object priority;
        private java.lang.Object transmitDirection;
        private java.lang.Object asPathMatchMode;
        private java.lang.Object cidrMatchMode;
        private java.lang.Object communityMatchMode;
        private java.lang.Object communityOperateMode;
        private java.lang.Object description;
        private java.lang.Object destinationChildInstanceTypes;
        private java.lang.Object destinationCidrBlocks;
        private java.lang.Object destinationInstanceIds;
        private java.lang.Object destinationInstanceIdsReverseMatch;
        private java.lang.Object destinationRouteTableIds;
        private java.lang.Object matchAsns;
        private java.lang.Object matchCommunitySet;
        private java.lang.Object nextPriority;
        private java.lang.Object operateCommunitySet;
        private java.lang.Object preference;
        private java.lang.Object prependAsPath;
        private java.lang.Object routeTypes;
        private java.lang.Object sourceChildInstanceTypes;
        private java.lang.Object sourceInstanceIds;
        private java.lang.Object sourceInstanceIdsReverseMatch;
        private java.lang.Object sourceRegionIds;
        private java.lang.Object sourceRouteTableIds;

        /**
         * Sets the value of {@link CenRouteMapProps#getCenId}
         * @param cenId Property cenId: The ID of the CEN instance. This parameter is required.
         * @return {@code this}
         */
        public Builder cenId(java.lang.String cenId) {
            this.cenId = cenId;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getCenId}
         * @param cenId Property cenId: The ID of the CEN instance. This parameter is required.
         * @return {@code this}
         */
        public Builder cenId(com.aliyun.ros.cdk.core.IResolvable cenId) {
            this.cenId = cenId;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getCenRegionId}
         * @param cenRegionId Property cenRegionId: The ID of the region to which the CEN instance belongs. This parameter is required.
         * @return {@code this}
         */
        public Builder cenRegionId(java.lang.String cenRegionId) {
            this.cenRegionId = cenRegionId;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getCenRegionId}
         * @param cenRegionId Property cenRegionId: The ID of the region to which the CEN instance belongs. This parameter is required.
         * @return {@code this}
         */
        public Builder cenRegionId(com.aliyun.ros.cdk.core.IResolvable cenRegionId) {
            this.cenRegionId = cenRegionId;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getMapResult}
         * @param mapResult Property mapResult: The action that is performed to a route if the route meets all the match conditions. This parameter is required.
         *                  Permit: The route is permitted. Deny: The route is denied.
         * @return {@code this}
         */
        public Builder mapResult(java.lang.String mapResult) {
            this.mapResult = mapResult;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getMapResult}
         * @param mapResult Property mapResult: The action that is performed to a route if the route meets all the match conditions. This parameter is required.
         *                  Permit: The route is permitted. Deny: The route is denied.
         * @return {@code this}
         */
        public Builder mapResult(com.aliyun.ros.cdk.core.IResolvable mapResult) {
            this.mapResult = mapResult;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getPriority}
         * @param priority Property priority: The priority of the route map. This parameter is required.
         * @return {@code this}
         */
        public Builder priority(java.lang.Number priority) {
            this.priority = priority;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getPriority}
         * @param priority Property priority: The priority of the route map. This parameter is required.
         * @return {@code this}
         */
        public Builder priority(com.aliyun.ros.cdk.core.IResolvable priority) {
            this.priority = priority;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getTransmitDirection}
         * @param transmitDirection Property transmitDirection: The direction in which the route map is applied. This parameter is required.
         *                          Valid values:  RegionIn: The direction in which routes are imported to the regional gateway of the CEN.  For example, routes are imported to the regional gateway from an instance in the current region or another region.  RegionOut: The direction in which routes are exported from the regional gateway of the CEN.  For example, routes are exported from the regional gateway of the current region to an instance in the same region, or to the regional gateway in another region.
         * @return {@code this}
         */
        public Builder transmitDirection(java.lang.String transmitDirection) {
            this.transmitDirection = transmitDirection;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getTransmitDirection}
         * @param transmitDirection Property transmitDirection: The direction in which the route map is applied. This parameter is required.
         *                          Valid values:  RegionIn: The direction in which routes are imported to the regional gateway of the CEN.  For example, routes are imported to the regional gateway from an instance in the current region or another region.  RegionOut: The direction in which routes are exported from the regional gateway of the CEN.  For example, routes are exported from the regional gateway of the current region to an instance in the same region, or to the regional gateway in another region.
         * @return {@code this}
         */
        public Builder transmitDirection(com.aliyun.ros.cdk.core.IResolvable transmitDirection) {
            this.transmitDirection = transmitDirection;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getAsPathMatchMode}
         * @param asPathMatchMode Property asPathMatchMode: A match statement.
         *                        It indicates the mode in which the as-path attribute is matched. Valid values:  Include: Fuzzy match. A route matches the condition if the AS path in the route overlaps the AS path in the match condition. Complete: Exact match. A route matches the condition only when the AS path of the route is the same as the AS path in the match condition.
         * @return {@code this}
         */
        public Builder asPathMatchMode(java.lang.String asPathMatchMode) {
            this.asPathMatchMode = asPathMatchMode;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getAsPathMatchMode}
         * @param asPathMatchMode Property asPathMatchMode: A match statement.
         *                        It indicates the mode in which the as-path attribute is matched. Valid values:  Include: Fuzzy match. A route matches the condition if the AS path in the route overlaps the AS path in the match condition. Complete: Exact match. A route matches the condition only when the AS path of the route is the same as the AS path in the match condition.
         * @return {@code this}
         */
        public Builder asPathMatchMode(com.aliyun.ros.cdk.core.IResolvable asPathMatchMode) {
            this.asPathMatchMode = asPathMatchMode;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getCidrMatchMode}
         * @param cidrMatchMode Property cidrMatchMode: A match statement.
         *                      It indicates the mode in which the prefix attribute is matched. Valid values:  Include: Fuzzy match. If the prefix of a route is contained in the prefix in the match condition, the route matches the condition.  For example, if the prefix in the match condition is set to 1.1.0.0/16 and the match method is set to Fuzzy Match, the route with the prefix of 1.1.1.0/24 matches the condition.  Complete: Exact match. A route matches the condition only when the prefix of the route is the same as the prefix in the match condition.  For example, if the prefix in the match condition is set to 1.1.0.0/16 and the match method is set to Exact Match, only the route with the prefix of 1.1.1.0/16 matches the condition.
         * @return {@code this}
         */
        public Builder cidrMatchMode(java.lang.String cidrMatchMode) {
            this.cidrMatchMode = cidrMatchMode;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getCidrMatchMode}
         * @param cidrMatchMode Property cidrMatchMode: A match statement.
         *                      It indicates the mode in which the prefix attribute is matched. Valid values:  Include: Fuzzy match. If the prefix of a route is contained in the prefix in the match condition, the route matches the condition.  For example, if the prefix in the match condition is set to 1.1.0.0/16 and the match method is set to Fuzzy Match, the route with the prefix of 1.1.1.0/24 matches the condition.  Complete: Exact match. A route matches the condition only when the prefix of the route is the same as the prefix in the match condition.  For example, if the prefix in the match condition is set to 1.1.0.0/16 and the match method is set to Exact Match, only the route with the prefix of 1.1.1.0/16 matches the condition.
         * @return {@code this}
         */
        public Builder cidrMatchMode(com.aliyun.ros.cdk.core.IResolvable cidrMatchMode) {
            this.cidrMatchMode = cidrMatchMode;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getCommunityMatchMode}
         * @param communityMatchMode Property communityMatchMode: A match statement.
         *                           It indicates the mode in which the community attribute is matched. Valid values:  Include: Fuzzy match. A route matches the condition if the community of the route overlaps the community in the match condition. Complete: Exact match. A route matches the condition only when the community of the route is the same as the community in the match condition.
         * @return {@code this}
         */
        public Builder communityMatchMode(java.lang.String communityMatchMode) {
            this.communityMatchMode = communityMatchMode;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getCommunityMatchMode}
         * @param communityMatchMode Property communityMatchMode: A match statement.
         *                           It indicates the mode in which the community attribute is matched. Valid values:  Include: Fuzzy match. A route matches the condition if the community of the route overlaps the community in the match condition. Complete: Exact match. A route matches the condition only when the community of the route is the same as the community in the match condition.
         * @return {@code this}
         */
        public Builder communityMatchMode(com.aliyun.ros.cdk.core.IResolvable communityMatchMode) {
            this.communityMatchMode = communityMatchMode;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getCommunityOperateMode}
         * @param communityOperateMode Property communityOperateMode: An action statement.
         *                             It indicates the mode in which the community attribute is operated. Valid values:  Additive: Sets a value for the community attribute. Replace: Replaces the value of the community attribute.
         * @return {@code this}
         */
        public Builder communityOperateMode(java.lang.String communityOperateMode) {
            this.communityOperateMode = communityOperateMode;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getCommunityOperateMode}
         * @param communityOperateMode Property communityOperateMode: An action statement.
         *                             It indicates the mode in which the community attribute is operated. Valid values:  Additive: Sets a value for the community attribute. Replace: Replaces the value of the community attribute.
         * @return {@code this}
         */
        public Builder communityOperateMode(com.aliyun.ros.cdk.core.IResolvable communityOperateMode) {
            this.communityOperateMode = communityOperateMode;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getDescription}
         * @param description Property description: The description of the route map.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getDescription}
         * @param description Property description: The description of the route map.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getDestinationChildInstanceTypes}
         * @param destinationChildInstanceTypes Property destinationChildInstanceTypes: A match statement that indicates the list of IDs of the destination instances.
         *                                      VPC: VPC VBR: VBR CCN: Mainland China CCN This parameter is valid only when the TransmitDirection parameter is set to RegionOut, and the destination instance and the route map belong to the same region.
         * @return {@code this}
         */
        public Builder destinationChildInstanceTypes(com.aliyun.ros.cdk.core.IResolvable destinationChildInstanceTypes) {
            this.destinationChildInstanceTypes = destinationChildInstanceTypes;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getDestinationChildInstanceTypes}
         * @param destinationChildInstanceTypes Property destinationChildInstanceTypes: A match statement that indicates the list of IDs of the destination instances.
         *                                      VPC: VPC VBR: VBR CCN: Mainland China CCN This parameter is valid only when the TransmitDirection parameter is set to RegionOut, and the destination instance and the route map belong to the same region.
         * @return {@code this}
         */
        public Builder destinationChildInstanceTypes(java.util.List<? extends java.lang.Object> destinationChildInstanceTypes) {
            this.destinationChildInstanceTypes = destinationChildInstanceTypes;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getDestinationCidrBlocks}
         * @param destinationCidrBlocks Property destinationCidrBlocks: A match statement that indicates the prefix list.
         * @return {@code this}
         */
        public Builder destinationCidrBlocks(com.aliyun.ros.cdk.core.IResolvable destinationCidrBlocks) {
            this.destinationCidrBlocks = destinationCidrBlocks;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getDestinationCidrBlocks}
         * @param destinationCidrBlocks Property destinationCidrBlocks: A match statement that indicates the prefix list.
         * @return {@code this}
         */
        public Builder destinationCidrBlocks(java.util.List<? extends java.lang.Object> destinationCidrBlocks) {
            this.destinationCidrBlocks = destinationCidrBlocks;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getDestinationInstanceIds}
         * @param destinationInstanceIds Property destinationInstanceIds: A match statement that indicates the list of IDs of the destination instances.
         *                               This parameter is valid only when the TransmitDirection parameter is set to RegionOut, and the destination instance and the route map belongs to the same region.
         * @return {@code this}
         */
        public Builder destinationInstanceIds(com.aliyun.ros.cdk.core.IResolvable destinationInstanceIds) {
            this.destinationInstanceIds = destinationInstanceIds;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getDestinationInstanceIds}
         * @param destinationInstanceIds Property destinationInstanceIds: A match statement that indicates the list of IDs of the destination instances.
         *                               This parameter is valid only when the TransmitDirection parameter is set to RegionOut, and the destination instance and the route map belongs to the same region.
         * @return {@code this}
         */
        public Builder destinationInstanceIds(java.util.List<? extends java.lang.Object> destinationInstanceIds) {
            this.destinationInstanceIds = destinationInstanceIds;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getDestinationInstanceIdsReverseMatch}
         * @param destinationInstanceIdsReverseMatch Property destinationInstanceIdsReverseMatch: Indicates whether to enable the reverse match method of the DestinationInstanceIds match condition.
         *                                           Valid values:  false (default): If the ID of a route's destination instance is included in DestinationInstanceIds, the route is permitted. true: If the ID of a route's destination instance is not included in DestinationInstanceIds, the route is permitted.
         * @return {@code this}
         */
        public Builder destinationInstanceIdsReverseMatch(java.lang.Boolean destinationInstanceIdsReverseMatch) {
            this.destinationInstanceIdsReverseMatch = destinationInstanceIdsReverseMatch;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getDestinationInstanceIdsReverseMatch}
         * @param destinationInstanceIdsReverseMatch Property destinationInstanceIdsReverseMatch: Indicates whether to enable the reverse match method of the DestinationInstanceIds match condition.
         *                                           Valid values:  false (default): If the ID of a route's destination instance is included in DestinationInstanceIds, the route is permitted. true: If the ID of a route's destination instance is not included in DestinationInstanceIds, the route is permitted.
         * @return {@code this}
         */
        public Builder destinationInstanceIdsReverseMatch(com.aliyun.ros.cdk.core.IResolvable destinationInstanceIdsReverseMatch) {
            this.destinationInstanceIdsReverseMatch = destinationInstanceIdsReverseMatch;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getDestinationRouteTableIds}
         * @param destinationRouteTableIds Property destinationRouteTableIds: A match statement that indicates the list of IDs of the destination route tables.
         *                                 This parameter is valid only when the TransmitDirection parameter is set to RegionOut, and the destination route table and the route map belongs to the same region.
         * @return {@code this}
         */
        public Builder destinationRouteTableIds(com.aliyun.ros.cdk.core.IResolvable destinationRouteTableIds) {
            this.destinationRouteTableIds = destinationRouteTableIds;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getDestinationRouteTableIds}
         * @param destinationRouteTableIds Property destinationRouteTableIds: A match statement that indicates the list of IDs of the destination route tables.
         *                                 This parameter is valid only when the TransmitDirection parameter is set to RegionOut, and the destination route table and the route map belongs to the same region.
         * @return {@code this}
         */
        public Builder destinationRouteTableIds(java.util.List<? extends java.lang.Object> destinationRouteTableIds) {
            this.destinationRouteTableIds = destinationRouteTableIds;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getMatchAsns}
         * @param matchAsns Property matchAsns: A match statement that indicates the As path list.
         * @return {@code this}
         */
        public Builder matchAsns(com.aliyun.ros.cdk.core.IResolvable matchAsns) {
            this.matchAsns = matchAsns;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getMatchAsns}
         * @param matchAsns Property matchAsns: A match statement that indicates the As path list.
         * @return {@code this}
         */
        public Builder matchAsns(java.util.List<? extends java.lang.Object> matchAsns) {
            this.matchAsns = matchAsns;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getMatchCommunitySet}
         * @param matchCommunitySet Property matchCommunitySet: A match statement that indicates the community set.
         * @return {@code this}
         */
        public Builder matchCommunitySet(com.aliyun.ros.cdk.core.IResolvable matchCommunitySet) {
            this.matchCommunitySet = matchCommunitySet;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getMatchCommunitySet}
         * @param matchCommunitySet Property matchCommunitySet: A match statement that indicates the community set.
         * @return {@code this}
         */
        public Builder matchCommunitySet(java.util.List<? extends java.lang.Object> matchCommunitySet) {
            this.matchCommunitySet = matchCommunitySet;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getNextPriority}
         * @param nextPriority Property nextPriority: The priority of the next route map that is associated with the current route map.
         *                     Value range: 1 to 100.  If this parameter is not set, the current route map is not associated with any route map that is ordered next to the current route map. If this parameter is set to 1, the current route map is associated with the next route map. If this parameter is set to a value other than 1, the priority of the associated route map must be lower than the priority of the current route map, that is, the value of NextPriority must be greater than the value set for Priority. Only when MapResult is set to Permit, the routes which match all the matching conditions will be evaluated by the associated route map that is configured with a specific preference value.
         * @return {@code this}
         */
        public Builder nextPriority(java.lang.Number nextPriority) {
            this.nextPriority = nextPriority;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getNextPriority}
         * @param nextPriority Property nextPriority: The priority of the next route map that is associated with the current route map.
         *                     Value range: 1 to 100.  If this parameter is not set, the current route map is not associated with any route map that is ordered next to the current route map. If this parameter is set to 1, the current route map is associated with the next route map. If this parameter is set to a value other than 1, the priority of the associated route map must be lower than the priority of the current route map, that is, the value of NextPriority must be greater than the value set for Priority. Only when MapResult is set to Permit, the routes which match all the matching conditions will be evaluated by the associated route map that is configured with a specific preference value.
         * @return {@code this}
         */
        public Builder nextPriority(com.aliyun.ros.cdk.core.IResolvable nextPriority) {
            this.nextPriority = nextPriority;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getOperateCommunitySet}
         * @param operateCommunitySet Property operateCommunitySet: An action statement that operates the community attribute.
         * @return {@code this}
         */
        public Builder operateCommunitySet(com.aliyun.ros.cdk.core.IResolvable operateCommunitySet) {
            this.operateCommunitySet = operateCommunitySet;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getOperateCommunitySet}
         * @param operateCommunitySet Property operateCommunitySet: An action statement that operates the community attribute.
         * @return {@code this}
         */
        public Builder operateCommunitySet(java.util.List<? extends java.lang.Object> operateCommunitySet) {
            this.operateCommunitySet = operateCommunitySet;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getPreference}
         * @param preference Property preference: An action statement that modifies the preference of the route.
         * @return {@code this}
         */
        public Builder preference(java.lang.Number preference) {
            this.preference = preference;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getPreference}
         * @param preference Property preference: An action statement that modifies the preference of the route.
         * @return {@code this}
         */
        public Builder preference(com.aliyun.ros.cdk.core.IResolvable preference) {
            this.preference = preference;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getPrependAsPath}
         * @param prependAsPath Property prependAsPath: Indicates AS Path prepending when a regional gateway receives or publishes a route.
         * @return {@code this}
         */
        public Builder prependAsPath(com.aliyun.ros.cdk.core.IResolvable prependAsPath) {
            this.prependAsPath = prependAsPath;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getPrependAsPath}
         * @param prependAsPath Property prependAsPath: Indicates AS Path prepending when a regional gateway receives or publishes a route.
         * @return {@code this}
         */
        public Builder prependAsPath(java.util.List<? extends java.lang.Object> prependAsPath) {
            this.prependAsPath = prependAsPath;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getRouteTypes}
         * @param routeTypes Property routeTypes: A match statement that indicates the list of route types.
         *                   System: System routes generated by the system. Custom: Custom routes added by users. BGP: Routes advertised to BGP.
         * @return {@code this}
         */
        public Builder routeTypes(com.aliyun.ros.cdk.core.IResolvable routeTypes) {
            this.routeTypes = routeTypes;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getRouteTypes}
         * @param routeTypes Property routeTypes: A match statement that indicates the list of route types.
         *                   System: System routes generated by the system. Custom: Custom routes added by users. BGP: Routes advertised to BGP.
         * @return {@code this}
         */
        public Builder routeTypes(java.util.List<? extends java.lang.Object> routeTypes) {
            this.routeTypes = routeTypes;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getSourceChildInstanceTypes}
         * @param sourceChildInstanceTypes Property sourceChildInstanceTypes: A match statement that indicates the list of IDs of the source instances.
         *                                 VPC: Virtual Private Cloud (VPC) VBR: Virtual Border Router (VBR) CCN: Mainland China Cloud Connect Network (CCN)
         * @return {@code this}
         */
        public Builder sourceChildInstanceTypes(com.aliyun.ros.cdk.core.IResolvable sourceChildInstanceTypes) {
            this.sourceChildInstanceTypes = sourceChildInstanceTypes;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getSourceChildInstanceTypes}
         * @param sourceChildInstanceTypes Property sourceChildInstanceTypes: A match statement that indicates the list of IDs of the source instances.
         *                                 VPC: Virtual Private Cloud (VPC) VBR: Virtual Border Router (VBR) CCN: Mainland China Cloud Connect Network (CCN)
         * @return {@code this}
         */
        public Builder sourceChildInstanceTypes(java.util.List<? extends java.lang.Object> sourceChildInstanceTypes) {
            this.sourceChildInstanceTypes = sourceChildInstanceTypes;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getSourceInstanceIds}
         * @param sourceInstanceIds Property sourceInstanceIds: A match statement that indicates the list of IDs of the source instances.
         * @return {@code this}
         */
        public Builder sourceInstanceIds(com.aliyun.ros.cdk.core.IResolvable sourceInstanceIds) {
            this.sourceInstanceIds = sourceInstanceIds;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getSourceInstanceIds}
         * @param sourceInstanceIds Property sourceInstanceIds: A match statement that indicates the list of IDs of the source instances.
         * @return {@code this}
         */
        public Builder sourceInstanceIds(java.util.List<? extends java.lang.Object> sourceInstanceIds) {
            this.sourceInstanceIds = sourceInstanceIds;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getSourceInstanceIdsReverseMatch}
         * @param sourceInstanceIdsReverseMatch Property sourceInstanceIdsReverseMatch: Indicates whether to enable the reverse match method of the SourceInstanceIds match condition.
         *                                      Valid values:  false (default): If the ID of a route's source instance is included in SourceInstanceIds, the route is permitted. true: If the ID of a route's source instance is not included in SourceInstanceIds, the route is permitted.
         * @return {@code this}
         */
        public Builder sourceInstanceIdsReverseMatch(java.lang.Boolean sourceInstanceIdsReverseMatch) {
            this.sourceInstanceIdsReverseMatch = sourceInstanceIdsReverseMatch;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getSourceInstanceIdsReverseMatch}
         * @param sourceInstanceIdsReverseMatch Property sourceInstanceIdsReverseMatch: Indicates whether to enable the reverse match method of the SourceInstanceIds match condition.
         *                                      Valid values:  false (default): If the ID of a route's source instance is included in SourceInstanceIds, the route is permitted. true: If the ID of a route's source instance is not included in SourceInstanceIds, the route is permitted.
         * @return {@code this}
         */
        public Builder sourceInstanceIdsReverseMatch(com.aliyun.ros.cdk.core.IResolvable sourceInstanceIdsReverseMatch) {
            this.sourceInstanceIdsReverseMatch = sourceInstanceIdsReverseMatch;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getSourceRegionIds}
         * @param sourceRegionIds Property sourceRegionIds: A match statement that indicates the list of IDs of the source regions.
         * @return {@code this}
         */
        public Builder sourceRegionIds(com.aliyun.ros.cdk.core.IResolvable sourceRegionIds) {
            this.sourceRegionIds = sourceRegionIds;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getSourceRegionIds}
         * @param sourceRegionIds Property sourceRegionIds: A match statement that indicates the list of IDs of the source regions.
         * @return {@code this}
         */
        public Builder sourceRegionIds(java.util.List<? extends java.lang.Object> sourceRegionIds) {
            this.sourceRegionIds = sourceRegionIds;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getSourceRouteTableIds}
         * @param sourceRouteTableIds Property sourceRouteTableIds: A match statement that indicates the list of IDs of the source route tables.
         * @return {@code this}
         */
        public Builder sourceRouteTableIds(com.aliyun.ros.cdk.core.IResolvable sourceRouteTableIds) {
            this.sourceRouteTableIds = sourceRouteTableIds;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getSourceRouteTableIds}
         * @param sourceRouteTableIds Property sourceRouteTableIds: A match statement that indicates the list of IDs of the source route tables.
         * @return {@code this}
         */
        public Builder sourceRouteTableIds(java.util.List<? extends java.lang.Object> sourceRouteTableIds) {
            this.sourceRouteTableIds = sourceRouteTableIds;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link CenRouteMapProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public CenRouteMapProps build() {
            return new Jsii$Proxy(cenId, cenRegionId, mapResult, priority, transmitDirection, asPathMatchMode, cidrMatchMode, communityMatchMode, communityOperateMode, description, destinationChildInstanceTypes, destinationCidrBlocks, destinationInstanceIds, destinationInstanceIdsReverseMatch, destinationRouteTableIds, matchAsns, matchCommunitySet, nextPriority, operateCommunitySet, preference, prependAsPath, routeTypes, sourceChildInstanceTypes, sourceInstanceIds, sourceInstanceIdsReverseMatch, sourceRegionIds, sourceRouteTableIds);
        }
    }

    /**
     * An implementation for {@link CenRouteMapProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements CenRouteMapProps {
        private final java.lang.Object cenId;
        private final java.lang.Object cenRegionId;
        private final java.lang.Object mapResult;
        private final java.lang.Object priority;
        private final java.lang.Object transmitDirection;
        private final java.lang.Object asPathMatchMode;
        private final java.lang.Object cidrMatchMode;
        private final java.lang.Object communityMatchMode;
        private final java.lang.Object communityOperateMode;
        private final java.lang.Object description;
        private final java.lang.Object destinationChildInstanceTypes;
        private final java.lang.Object destinationCidrBlocks;
        private final java.lang.Object destinationInstanceIds;
        private final java.lang.Object destinationInstanceIdsReverseMatch;
        private final java.lang.Object destinationRouteTableIds;
        private final java.lang.Object matchAsns;
        private final java.lang.Object matchCommunitySet;
        private final java.lang.Object nextPriority;
        private final java.lang.Object operateCommunitySet;
        private final java.lang.Object preference;
        private final java.lang.Object prependAsPath;
        private final java.lang.Object routeTypes;
        private final java.lang.Object sourceChildInstanceTypes;
        private final java.lang.Object sourceInstanceIds;
        private final java.lang.Object sourceInstanceIdsReverseMatch;
        private final java.lang.Object sourceRegionIds;
        private final java.lang.Object sourceRouteTableIds;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.cenId = software.amazon.jsii.Kernel.get(this, "cenId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.cenRegionId = software.amazon.jsii.Kernel.get(this, "cenRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.mapResult = software.amazon.jsii.Kernel.get(this, "mapResult", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.priority = software.amazon.jsii.Kernel.get(this, "priority", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.transmitDirection = software.amazon.jsii.Kernel.get(this, "transmitDirection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.asPathMatchMode = software.amazon.jsii.Kernel.get(this, "asPathMatchMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.cidrMatchMode = software.amazon.jsii.Kernel.get(this, "cidrMatchMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.communityMatchMode = software.amazon.jsii.Kernel.get(this, "communityMatchMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.communityOperateMode = software.amazon.jsii.Kernel.get(this, "communityOperateMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.destinationChildInstanceTypes = software.amazon.jsii.Kernel.get(this, "destinationChildInstanceTypes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.destinationCidrBlocks = software.amazon.jsii.Kernel.get(this, "destinationCidrBlocks", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.destinationInstanceIds = software.amazon.jsii.Kernel.get(this, "destinationInstanceIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.destinationInstanceIdsReverseMatch = software.amazon.jsii.Kernel.get(this, "destinationInstanceIdsReverseMatch", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.destinationRouteTableIds = software.amazon.jsii.Kernel.get(this, "destinationRouteTableIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.matchAsns = software.amazon.jsii.Kernel.get(this, "matchAsns", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.matchCommunitySet = software.amazon.jsii.Kernel.get(this, "matchCommunitySet", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.nextPriority = software.amazon.jsii.Kernel.get(this, "nextPriority", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.operateCommunitySet = software.amazon.jsii.Kernel.get(this, "operateCommunitySet", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.preference = software.amazon.jsii.Kernel.get(this, "preference", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.prependAsPath = software.amazon.jsii.Kernel.get(this, "prependAsPath", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.routeTypes = software.amazon.jsii.Kernel.get(this, "routeTypes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceChildInstanceTypes = software.amazon.jsii.Kernel.get(this, "sourceChildInstanceTypes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceInstanceIds = software.amazon.jsii.Kernel.get(this, "sourceInstanceIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceInstanceIdsReverseMatch = software.amazon.jsii.Kernel.get(this, "sourceInstanceIdsReverseMatch", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceRegionIds = software.amazon.jsii.Kernel.get(this, "sourceRegionIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceRouteTableIds = software.amazon.jsii.Kernel.get(this, "sourceRouteTableIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.Object cenId, final java.lang.Object cenRegionId, final java.lang.Object mapResult, final java.lang.Object priority, final java.lang.Object transmitDirection, final java.lang.Object asPathMatchMode, final java.lang.Object cidrMatchMode, final java.lang.Object communityMatchMode, final java.lang.Object communityOperateMode, final java.lang.Object description, final java.lang.Object destinationChildInstanceTypes, final java.lang.Object destinationCidrBlocks, final java.lang.Object destinationInstanceIds, final java.lang.Object destinationInstanceIdsReverseMatch, final java.lang.Object destinationRouteTableIds, final java.lang.Object matchAsns, final java.lang.Object matchCommunitySet, final java.lang.Object nextPriority, final java.lang.Object operateCommunitySet, final java.lang.Object preference, final java.lang.Object prependAsPath, final java.lang.Object routeTypes, final java.lang.Object sourceChildInstanceTypes, final java.lang.Object sourceInstanceIds, final java.lang.Object sourceInstanceIdsReverseMatch, final java.lang.Object sourceRegionIds, final java.lang.Object sourceRouteTableIds) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.cenId = java.util.Objects.requireNonNull(cenId, "cenId is required");
            this.cenRegionId = java.util.Objects.requireNonNull(cenRegionId, "cenRegionId is required");
            this.mapResult = java.util.Objects.requireNonNull(mapResult, "mapResult is required");
            this.priority = java.util.Objects.requireNonNull(priority, "priority is required");
            this.transmitDirection = java.util.Objects.requireNonNull(transmitDirection, "transmitDirection is required");
            this.asPathMatchMode = asPathMatchMode;
            this.cidrMatchMode = cidrMatchMode;
            this.communityMatchMode = communityMatchMode;
            this.communityOperateMode = communityOperateMode;
            this.description = description;
            this.destinationChildInstanceTypes = destinationChildInstanceTypes;
            this.destinationCidrBlocks = destinationCidrBlocks;
            this.destinationInstanceIds = destinationInstanceIds;
            this.destinationInstanceIdsReverseMatch = destinationInstanceIdsReverseMatch;
            this.destinationRouteTableIds = destinationRouteTableIds;
            this.matchAsns = matchAsns;
            this.matchCommunitySet = matchCommunitySet;
            this.nextPriority = nextPriority;
            this.operateCommunitySet = operateCommunitySet;
            this.preference = preference;
            this.prependAsPath = prependAsPath;
            this.routeTypes = routeTypes;
            this.sourceChildInstanceTypes = sourceChildInstanceTypes;
            this.sourceInstanceIds = sourceInstanceIds;
            this.sourceInstanceIdsReverseMatch = sourceInstanceIdsReverseMatch;
            this.sourceRegionIds = sourceRegionIds;
            this.sourceRouteTableIds = sourceRouteTableIds;
        }

        @Override
        public final java.lang.Object getCenId() {
            return this.cenId;
        }

        @Override
        public final java.lang.Object getCenRegionId() {
            return this.cenRegionId;
        }

        @Override
        public final java.lang.Object getMapResult() {
            return this.mapResult;
        }

        @Override
        public final java.lang.Object getPriority() {
            return this.priority;
        }

        @Override
        public final java.lang.Object getTransmitDirection() {
            return this.transmitDirection;
        }

        @Override
        public final java.lang.Object getAsPathMatchMode() {
            return this.asPathMatchMode;
        }

        @Override
        public final java.lang.Object getCidrMatchMode() {
            return this.cidrMatchMode;
        }

        @Override
        public final java.lang.Object getCommunityMatchMode() {
            return this.communityMatchMode;
        }

        @Override
        public final java.lang.Object getCommunityOperateMode() {
            return this.communityOperateMode;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getDestinationChildInstanceTypes() {
            return this.destinationChildInstanceTypes;
        }

        @Override
        public final java.lang.Object getDestinationCidrBlocks() {
            return this.destinationCidrBlocks;
        }

        @Override
        public final java.lang.Object getDestinationInstanceIds() {
            return this.destinationInstanceIds;
        }

        @Override
        public final java.lang.Object getDestinationInstanceIdsReverseMatch() {
            return this.destinationInstanceIdsReverseMatch;
        }

        @Override
        public final java.lang.Object getDestinationRouteTableIds() {
            return this.destinationRouteTableIds;
        }

        @Override
        public final java.lang.Object getMatchAsns() {
            return this.matchAsns;
        }

        @Override
        public final java.lang.Object getMatchCommunitySet() {
            return this.matchCommunitySet;
        }

        @Override
        public final java.lang.Object getNextPriority() {
            return this.nextPriority;
        }

        @Override
        public final java.lang.Object getOperateCommunitySet() {
            return this.operateCommunitySet;
        }

        @Override
        public final java.lang.Object getPreference() {
            return this.preference;
        }

        @Override
        public final java.lang.Object getPrependAsPath() {
            return this.prependAsPath;
        }

        @Override
        public final java.lang.Object getRouteTypes() {
            return this.routeTypes;
        }

        @Override
        public final java.lang.Object getSourceChildInstanceTypes() {
            return this.sourceChildInstanceTypes;
        }

        @Override
        public final java.lang.Object getSourceInstanceIds() {
            return this.sourceInstanceIds;
        }

        @Override
        public final java.lang.Object getSourceInstanceIdsReverseMatch() {
            return this.sourceInstanceIdsReverseMatch;
        }

        @Override
        public final java.lang.Object getSourceRegionIds() {
            return this.sourceRegionIds;
        }

        @Override
        public final java.lang.Object getSourceRouteTableIds() {
            return this.sourceRouteTableIds;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("cenId", om.valueToTree(this.getCenId()));
            data.set("cenRegionId", om.valueToTree(this.getCenRegionId()));
            data.set("mapResult", om.valueToTree(this.getMapResult()));
            data.set("priority", om.valueToTree(this.getPriority()));
            data.set("transmitDirection", om.valueToTree(this.getTransmitDirection()));
            if (this.getAsPathMatchMode() != null) {
                data.set("asPathMatchMode", om.valueToTree(this.getAsPathMatchMode()));
            }
            if (this.getCidrMatchMode() != null) {
                data.set("cidrMatchMode", om.valueToTree(this.getCidrMatchMode()));
            }
            if (this.getCommunityMatchMode() != null) {
                data.set("communityMatchMode", om.valueToTree(this.getCommunityMatchMode()));
            }
            if (this.getCommunityOperateMode() != null) {
                data.set("communityOperateMode", om.valueToTree(this.getCommunityOperateMode()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getDestinationChildInstanceTypes() != null) {
                data.set("destinationChildInstanceTypes", om.valueToTree(this.getDestinationChildInstanceTypes()));
            }
            if (this.getDestinationCidrBlocks() != null) {
                data.set("destinationCidrBlocks", om.valueToTree(this.getDestinationCidrBlocks()));
            }
            if (this.getDestinationInstanceIds() != null) {
                data.set("destinationInstanceIds", om.valueToTree(this.getDestinationInstanceIds()));
            }
            if (this.getDestinationInstanceIdsReverseMatch() != null) {
                data.set("destinationInstanceIdsReverseMatch", om.valueToTree(this.getDestinationInstanceIdsReverseMatch()));
            }
            if (this.getDestinationRouteTableIds() != null) {
                data.set("destinationRouteTableIds", om.valueToTree(this.getDestinationRouteTableIds()));
            }
            if (this.getMatchAsns() != null) {
                data.set("matchAsns", om.valueToTree(this.getMatchAsns()));
            }
            if (this.getMatchCommunitySet() != null) {
                data.set("matchCommunitySet", om.valueToTree(this.getMatchCommunitySet()));
            }
            if (this.getNextPriority() != null) {
                data.set("nextPriority", om.valueToTree(this.getNextPriority()));
            }
            if (this.getOperateCommunitySet() != null) {
                data.set("operateCommunitySet", om.valueToTree(this.getOperateCommunitySet()));
            }
            if (this.getPreference() != null) {
                data.set("preference", om.valueToTree(this.getPreference()));
            }
            if (this.getPrependAsPath() != null) {
                data.set("prependAsPath", om.valueToTree(this.getPrependAsPath()));
            }
            if (this.getRouteTypes() != null) {
                data.set("routeTypes", om.valueToTree(this.getRouteTypes()));
            }
            if (this.getSourceChildInstanceTypes() != null) {
                data.set("sourceChildInstanceTypes", om.valueToTree(this.getSourceChildInstanceTypes()));
            }
            if (this.getSourceInstanceIds() != null) {
                data.set("sourceInstanceIds", om.valueToTree(this.getSourceInstanceIds()));
            }
            if (this.getSourceInstanceIdsReverseMatch() != null) {
                data.set("sourceInstanceIdsReverseMatch", om.valueToTree(this.getSourceInstanceIdsReverseMatch()));
            }
            if (this.getSourceRegionIds() != null) {
                data.set("sourceRegionIds", om.valueToTree(this.getSourceRegionIds()));
            }
            if (this.getSourceRouteTableIds() != null) {
                data.set("sourceRouteTableIds", om.valueToTree(this.getSourceRouteTableIds()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cen.CenRouteMapProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            CenRouteMapProps.Jsii$Proxy that = (CenRouteMapProps.Jsii$Proxy) o;

            if (!cenId.equals(that.cenId)) return false;
            if (!cenRegionId.equals(that.cenRegionId)) return false;
            if (!mapResult.equals(that.mapResult)) return false;
            if (!priority.equals(that.priority)) return false;
            if (!transmitDirection.equals(that.transmitDirection)) return false;
            if (this.asPathMatchMode != null ? !this.asPathMatchMode.equals(that.asPathMatchMode) : that.asPathMatchMode != null) return false;
            if (this.cidrMatchMode != null ? !this.cidrMatchMode.equals(that.cidrMatchMode) : that.cidrMatchMode != null) return false;
            if (this.communityMatchMode != null ? !this.communityMatchMode.equals(that.communityMatchMode) : that.communityMatchMode != null) return false;
            if (this.communityOperateMode != null ? !this.communityOperateMode.equals(that.communityOperateMode) : that.communityOperateMode != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.destinationChildInstanceTypes != null ? !this.destinationChildInstanceTypes.equals(that.destinationChildInstanceTypes) : that.destinationChildInstanceTypes != null) return false;
            if (this.destinationCidrBlocks != null ? !this.destinationCidrBlocks.equals(that.destinationCidrBlocks) : that.destinationCidrBlocks != null) return false;
            if (this.destinationInstanceIds != null ? !this.destinationInstanceIds.equals(that.destinationInstanceIds) : that.destinationInstanceIds != null) return false;
            if (this.destinationInstanceIdsReverseMatch != null ? !this.destinationInstanceIdsReverseMatch.equals(that.destinationInstanceIdsReverseMatch) : that.destinationInstanceIdsReverseMatch != null) return false;
            if (this.destinationRouteTableIds != null ? !this.destinationRouteTableIds.equals(that.destinationRouteTableIds) : that.destinationRouteTableIds != null) return false;
            if (this.matchAsns != null ? !this.matchAsns.equals(that.matchAsns) : that.matchAsns != null) return false;
            if (this.matchCommunitySet != null ? !this.matchCommunitySet.equals(that.matchCommunitySet) : that.matchCommunitySet != null) return false;
            if (this.nextPriority != null ? !this.nextPriority.equals(that.nextPriority) : that.nextPriority != null) return false;
            if (this.operateCommunitySet != null ? !this.operateCommunitySet.equals(that.operateCommunitySet) : that.operateCommunitySet != null) return false;
            if (this.preference != null ? !this.preference.equals(that.preference) : that.preference != null) return false;
            if (this.prependAsPath != null ? !this.prependAsPath.equals(that.prependAsPath) : that.prependAsPath != null) return false;
            if (this.routeTypes != null ? !this.routeTypes.equals(that.routeTypes) : that.routeTypes != null) return false;
            if (this.sourceChildInstanceTypes != null ? !this.sourceChildInstanceTypes.equals(that.sourceChildInstanceTypes) : that.sourceChildInstanceTypes != null) return false;
            if (this.sourceInstanceIds != null ? !this.sourceInstanceIds.equals(that.sourceInstanceIds) : that.sourceInstanceIds != null) return false;
            if (this.sourceInstanceIdsReverseMatch != null ? !this.sourceInstanceIdsReverseMatch.equals(that.sourceInstanceIdsReverseMatch) : that.sourceInstanceIdsReverseMatch != null) return false;
            if (this.sourceRegionIds != null ? !this.sourceRegionIds.equals(that.sourceRegionIds) : that.sourceRegionIds != null) return false;
            return this.sourceRouteTableIds != null ? this.sourceRouteTableIds.equals(that.sourceRouteTableIds) : that.sourceRouteTableIds == null;
        }

        @Override
        public final int hashCode() {
            int result = this.cenId.hashCode();
            result = 31 * result + (this.cenRegionId.hashCode());
            result = 31 * result + (this.mapResult.hashCode());
            result = 31 * result + (this.priority.hashCode());
            result = 31 * result + (this.transmitDirection.hashCode());
            result = 31 * result + (this.asPathMatchMode != null ? this.asPathMatchMode.hashCode() : 0);
            result = 31 * result + (this.cidrMatchMode != null ? this.cidrMatchMode.hashCode() : 0);
            result = 31 * result + (this.communityMatchMode != null ? this.communityMatchMode.hashCode() : 0);
            result = 31 * result + (this.communityOperateMode != null ? this.communityOperateMode.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.destinationChildInstanceTypes != null ? this.destinationChildInstanceTypes.hashCode() : 0);
            result = 31 * result + (this.destinationCidrBlocks != null ? this.destinationCidrBlocks.hashCode() : 0);
            result = 31 * result + (this.destinationInstanceIds != null ? this.destinationInstanceIds.hashCode() : 0);
            result = 31 * result + (this.destinationInstanceIdsReverseMatch != null ? this.destinationInstanceIdsReverseMatch.hashCode() : 0);
            result = 31 * result + (this.destinationRouteTableIds != null ? this.destinationRouteTableIds.hashCode() : 0);
            result = 31 * result + (this.matchAsns != null ? this.matchAsns.hashCode() : 0);
            result = 31 * result + (this.matchCommunitySet != null ? this.matchCommunitySet.hashCode() : 0);
            result = 31 * result + (this.nextPriority != null ? this.nextPriority.hashCode() : 0);
            result = 31 * result + (this.operateCommunitySet != null ? this.operateCommunitySet.hashCode() : 0);
            result = 31 * result + (this.preference != null ? this.preference.hashCode() : 0);
            result = 31 * result + (this.prependAsPath != null ? this.prependAsPath.hashCode() : 0);
            result = 31 * result + (this.routeTypes != null ? this.routeTypes.hashCode() : 0);
            result = 31 * result + (this.sourceChildInstanceTypes != null ? this.sourceChildInstanceTypes.hashCode() : 0);
            result = 31 * result + (this.sourceInstanceIds != null ? this.sourceInstanceIds.hashCode() : 0);
            result = 31 * result + (this.sourceInstanceIdsReverseMatch != null ? this.sourceInstanceIdsReverseMatch.hashCode() : 0);
            result = 31 * result + (this.sourceRegionIds != null ? this.sourceRegionIds.hashCode() : 0);
            result = 31 * result + (this.sourceRouteTableIds != null ? this.sourceRouteTableIds.hashCode() : 0);
            return result;
        }
    }
}
