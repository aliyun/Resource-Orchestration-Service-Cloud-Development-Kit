package com.aliyun.ros.cdk.cen;

/**
 * Properties for defining a `ALIYUN::CEN::CenRouteMap`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.56.0 (build 55e7d15)", date = "2022-04-18T07:25:24.722Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cen.$Module.class, fqn = "@alicloud/ros-cdk-cen.CenRouteMapProps")
@software.amazon.jsii.Jsii.Proxy(CenRouteMapProps.Jsii$Proxy.class)
public interface CenRouteMapProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property cenId: The ID of the Cloud Enterprise Network (CEN) instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCenId();

    /**
     * Property cenRegionId: The region where the CEN instance is deployed.
     * <p>
     * You can call the DescribeRegions operation to query region IDs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCenRegionId();

    /**
     * Property mapResult: The route map behavior after all conditions are matched.
     * <p>
     * Valid values:
     * Permit: allows the routes that are matched.
     * Deny: rejects the routes that are matched.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getMapResult();

    /**
     * Property priority: The priority of the route map.
     * <p>
     * Valid values: 1 to 100 . A lower value indicates a higher priority.
     * Note In the same region, for route maps that are applied in the same direction, the priority is unique. When a route map is implemented, the system matches conditions with a route map whose priority number is the smallest. Therefore, make sure that you set priorities for route maps to meet your requirements.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPriority();

    /**
     * Property transmitDirection: The direction in which the route map is applied.
     * <p>
     * Valid values:
     * RegionIn: Routes are advertised to CEN gateways.
     * For example, routes are advertised from network instances deployed in the current region or other regions to the gateways deployed in the current region.
     * RegionOut: Routes are advertised from CEN gateways.
     * For example, routes are advertised from gateways deployed in the current region to network instances or gateways deployed in other regions.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTransmitDirection();

    /**
     * Property asPathMatchMode: Match statements are used to match the AS paths.
     * <p>
     * Valid values:
     * Include: uses fuzzy match. If the AS path in the condition overlaps with the AS path in the route, the match is successful.
     * Complete: uses exact match. Only when the AS path in the condition is the same as the AS path in the route, the match is successful.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAsPathMatchMode() {
        return null;
    }

    /**
     * Property cidrMatchMode: Match statements are used to match the prefixes.
     * <p>
     * Valid values:
     * Include: uses fuzzy match. If the routing prefix in the condition contains the routing prefix of the route, the match is successful.
     * For example, the 1.1.0.0/16 policy can match the 1.1.1.0/24 route.
     * Complete: uses exact match. Only when the routing prefix in the condition is the same as the routing prefix of the route, the match is successful.
     * For example, the 1.1.0.0/16 policy can match the 1.1.0.0/16 route.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCidrMatchMode() {
        return null;
    }

    /**
     * Property communityMatchMode: Match statements are used to match the Communities.
     * <p>
     * Valid values:
     * Include: uses fuzzy match. If the Community in the condition overlaps with the Community of the route, the match is successful.
     * Complete: uses exact match. Only when the Community in the condition is the same as the Community of the route, the match is successful.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCommunityMatchMode() {
        return null;
    }

    /**
     * Property communityOperateMode: Action statements are used to operate the Communities.
     * <p>
     * Valid values:
     * Additive: adds.
     * Replace: replaces.
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
     * Property destinationChildInstanceTypes: Match statements are used to match the destination instance types.
     * <p>
     * Valid values:
     * VPC: VPCs.
     * VBR: VBRs.
     * CCN: CCN instances in mainland China.
     * Note The destination instance types are valid only when the route map is applied to scenarios where routes are advertised from gateways in the current region to instances in the current region.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDestinationChildInstanceTypes() {
        return null;
    }

    /**
     * Property destinationCidrBlocks: Match statements are used to match the routing prefixes.
     * <p>
     * The CIDR format is used. You can enter at most 32 CIDR blocks.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDestinationCidrBlocks() {
        return null;
    }

    /**
     * Property destinationInstanceIds: Match statements are used to match the destination instance IDs.
     * <p>
     * You can enter instance IDs of the following types: VPC, VBR, CCN in mainland China, and SAG. You can enter at most 32 instance IDs.
     * Note The destination instance IDs are valid only when the route map is applied to scenarios where routes are advertised from gateways in the current region to instances in the current region.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDestinationInstanceIds() {
        return null;
    }

    /**
     * Property destinationInstanceIdsReverseMatch: The IDs of destination instances to be advertised do not support match statements.
     * <p>
     * Valid values:
     * false(default value): If the ID of the destination instance to be advertised is in the DestinationInstanceIds field, the match is successful.
     * true: If the ID of the destination instance to be advertised is not in the DestinationInstanceIds filed, the match is successful.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDestinationInstanceIdsReverseMatch() {
        return null;
    }

    /**
     * Property destinationRouteTableIds: Match statements are used to match the IDs of the destination route tables.
     * <p>
     * You can enter at most 32 route table IDs.
     * Note The destination route table IDs are valid only when the route map is applied to scenarios where routes are advertised from gateways in the current region to route tables in the current region.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDestinationRouteTableIds() {
        return null;
    }

    /**
     * Property matchAsns: Match statements are used to match AS paths of the routes.
     * <p>
     * An AS path is a mandatory attribute, which describes the AS number through which a BGP route passes when the BGP route is advertised.
     * Only the AS-SEQUENCE parameter is supported. The AS-SET, AS-CONFED-SEQUENCE, and AS-CONFED-SET parameters are not supported. Specifically, only the AS number list is supported. Sets and sub-lists are not supported.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMatchAsns() {
        return null;
    }

    /**
     * Property matchCommunitySet: Match statements are used to match the Communities.
     * <p>
     * Enter each Community in the format of nn:nn. Valid values of nn: 1 to 65535. You can enter at most 32 Communities. Each Community must comply with RFC 1997. RFC 8092 is not supported.
     * Note If the configurations of the Communities are incorrect, routes may not be advertised to the on-premises data center.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMatchCommunitySet() {
        return null;
    }

    /**
     * Property nextPriority: The priority of the next associated route map.
     * <p>
     * Valid values: 1 to 100.
     * If the priority is not set, no next route map is associated with the current route map.
     * If the priority is set to 1, the next route map is associated with the current route map.
     * If the priority is set and the value is not 1, the priority of the associated route map must be higher than that of the current route map.
     * Only when the MapResult parameter is set to Permit, the matched routes continue to match the next associated route maps.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNextPriority() {
        return null;
    }

    /**
     * Property operateCommunitySet: Action statements are used to operate the Communities.
     * <p>
     * Valid values: Enter each Community in the format of nn:nn. Valid values of nn: 1 to 65535. You can enter at most 32 Communities. Each Community must comply with RFC 1997. RFC 8092 is not supported.
     * Note If the configurations of the Communities are incorrect, routes may not be advertised to the on-premises data center.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOperateCommunitySet() {
        return null;
    }

    /**
     * Property preference: Action statements are used to modify route priorities.
     * <p>
     * Valid values: 1 to 100. Default value: 50. A smaller number indicates a higher priority.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPreference() {
        return null;
    }

    /**
     * Property prependAsPath: AS paths are attached when regional gateways receive or advertise routes.
     * <p>
     * For route maps that are applied in different directions, the requirements for AS paths to be attached are different:
     * For the inbound direction: You must specify the list of source instance IDs and the source region in the condition to be matched. The source region must be the same as the region where the route map is applied.
     * For the outbound direction: You must specify the list of destination instance IDs in the condition to be matched.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPrependAsPath() {
        return null;
    }

    /**
     * Property routeTypes: Match statements are used to match the route types.
     * <p>
     * Valid values:
     * System: system routes that are generated by the system.
     * Custom: custom routes that are created by users.
     * BGP: Border Gateway Protocol (BGP) routes that are advertised to BGP.
     * You can enter multiple types.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRouteTypes() {
        return null;
    }

    /**
     * Property sourceChildInstanceTypes: Match statements are used to match source instance types of the routes.
     * <p>
     * Valid values:
     * VPC: VPCs.
     * VBR: VBRs.
     * CCN: CCN instances in mainland China.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSourceChildInstanceTypes() {
        return null;
    }

    /**
     * Property sourceInstanceIds: Match statements are used to match source instance IDs of the routes.
     * <p>
     * You can enter instance IDs of the following types: virtual private cloud (VPC), virtual border router (VBR), Cloud Connect Network (CCN) in mainland China, Smart Access Gateway (SAG). You can enter at most 32 instance IDs.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSourceInstanceIds() {
        return null;
    }

    /**
     * Property sourceInstanceIdsReverseMatch: The IDs of source instances to be advertised do not support match statements.
     * <p>
     * Valid values:
     * false (default value): If the source instance ID is in the SourceInstanceIds field, the match is successful.
     * true: If the source instance ID is not in the SourceInstanceIds field, the match is successful.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSourceInstanceIdsReverseMatch() {
        return null;
    }

    /**
     * Property sourceRegionIds: Match statements are used to match source region IDs of the routes.
     * <p>
     * You can enter at most 32 region IDs.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSourceRegionIds() {
        return null;
    }

    /**
     * Property sourceRouteTableIds: Match statements are used to match source route table IDs of the routes.
     * <p>
     * You can enter at most 32 route table IDs.
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
        java.lang.Object cenId;
        java.lang.Object cenRegionId;
        java.lang.Object mapResult;
        java.lang.Object priority;
        java.lang.Object transmitDirection;
        java.lang.Object asPathMatchMode;
        java.lang.Object cidrMatchMode;
        java.lang.Object communityMatchMode;
        java.lang.Object communityOperateMode;
        java.lang.Object description;
        java.lang.Object destinationChildInstanceTypes;
        java.lang.Object destinationCidrBlocks;
        java.lang.Object destinationInstanceIds;
        java.lang.Object destinationInstanceIdsReverseMatch;
        java.lang.Object destinationRouteTableIds;
        java.lang.Object matchAsns;
        java.lang.Object matchCommunitySet;
        java.lang.Object nextPriority;
        java.lang.Object operateCommunitySet;
        java.lang.Object preference;
        java.lang.Object prependAsPath;
        java.lang.Object routeTypes;
        java.lang.Object sourceChildInstanceTypes;
        java.lang.Object sourceInstanceIds;
        java.lang.Object sourceInstanceIdsReverseMatch;
        java.lang.Object sourceRegionIds;
        java.lang.Object sourceRouteTableIds;

        /**
         * Sets the value of {@link CenRouteMapProps#getCenId}
         * @param cenId Property cenId: The ID of the Cloud Enterprise Network (CEN) instance. This parameter is required.
         * @return {@code this}
         */
        public Builder cenId(java.lang.String cenId) {
            this.cenId = cenId;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getCenId}
         * @param cenId Property cenId: The ID of the Cloud Enterprise Network (CEN) instance. This parameter is required.
         * @return {@code this}
         */
        public Builder cenId(com.aliyun.ros.cdk.core.IResolvable cenId) {
            this.cenId = cenId;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getCenRegionId}
         * @param cenRegionId Property cenRegionId: The region where the CEN instance is deployed. This parameter is required.
         *                    You can call the DescribeRegions operation to query region IDs.
         * @return {@code this}
         */
        public Builder cenRegionId(java.lang.String cenRegionId) {
            this.cenRegionId = cenRegionId;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getCenRegionId}
         * @param cenRegionId Property cenRegionId: The region where the CEN instance is deployed. This parameter is required.
         *                    You can call the DescribeRegions operation to query region IDs.
         * @return {@code this}
         */
        public Builder cenRegionId(com.aliyun.ros.cdk.core.IResolvable cenRegionId) {
            this.cenRegionId = cenRegionId;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getMapResult}
         * @param mapResult Property mapResult: The route map behavior after all conditions are matched. This parameter is required.
         *                  Valid values:
         *                  Permit: allows the routes that are matched.
         *                  Deny: rejects the routes that are matched.
         * @return {@code this}
         */
        public Builder mapResult(java.lang.String mapResult) {
            this.mapResult = mapResult;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getMapResult}
         * @param mapResult Property mapResult: The route map behavior after all conditions are matched. This parameter is required.
         *                  Valid values:
         *                  Permit: allows the routes that are matched.
         *                  Deny: rejects the routes that are matched.
         * @return {@code this}
         */
        public Builder mapResult(com.aliyun.ros.cdk.core.IResolvable mapResult) {
            this.mapResult = mapResult;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getPriority}
         * @param priority Property priority: The priority of the route map. This parameter is required.
         *                 Valid values: 1 to 100 . A lower value indicates a higher priority.
         *                 Note In the same region, for route maps that are applied in the same direction, the priority is unique. When a route map is implemented, the system matches conditions with a route map whose priority number is the smallest. Therefore, make sure that you set priorities for route maps to meet your requirements.
         * @return {@code this}
         */
        public Builder priority(java.lang.Number priority) {
            this.priority = priority;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getPriority}
         * @param priority Property priority: The priority of the route map. This parameter is required.
         *                 Valid values: 1 to 100 . A lower value indicates a higher priority.
         *                 Note In the same region, for route maps that are applied in the same direction, the priority is unique. When a route map is implemented, the system matches conditions with a route map whose priority number is the smallest. Therefore, make sure that you set priorities for route maps to meet your requirements.
         * @return {@code this}
         */
        public Builder priority(com.aliyun.ros.cdk.core.IResolvable priority) {
            this.priority = priority;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getTransmitDirection}
         * @param transmitDirection Property transmitDirection: The direction in which the route map is applied. This parameter is required.
         *                          Valid values:
         *                          RegionIn: Routes are advertised to CEN gateways.
         *                          For example, routes are advertised from network instances deployed in the current region or other regions to the gateways deployed in the current region.
         *                          RegionOut: Routes are advertised from CEN gateways.
         *                          For example, routes are advertised from gateways deployed in the current region to network instances or gateways deployed in other regions.
         * @return {@code this}
         */
        public Builder transmitDirection(java.lang.String transmitDirection) {
            this.transmitDirection = transmitDirection;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getTransmitDirection}
         * @param transmitDirection Property transmitDirection: The direction in which the route map is applied. This parameter is required.
         *                          Valid values:
         *                          RegionIn: Routes are advertised to CEN gateways.
         *                          For example, routes are advertised from network instances deployed in the current region or other regions to the gateways deployed in the current region.
         *                          RegionOut: Routes are advertised from CEN gateways.
         *                          For example, routes are advertised from gateways deployed in the current region to network instances or gateways deployed in other regions.
         * @return {@code this}
         */
        public Builder transmitDirection(com.aliyun.ros.cdk.core.IResolvable transmitDirection) {
            this.transmitDirection = transmitDirection;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getAsPathMatchMode}
         * @param asPathMatchMode Property asPathMatchMode: Match statements are used to match the AS paths.
         *                        Valid values:
         *                        Include: uses fuzzy match. If the AS path in the condition overlaps with the AS path in the route, the match is successful.
         *                        Complete: uses exact match. Only when the AS path in the condition is the same as the AS path in the route, the match is successful.
         * @return {@code this}
         */
        public Builder asPathMatchMode(java.lang.String asPathMatchMode) {
            this.asPathMatchMode = asPathMatchMode;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getAsPathMatchMode}
         * @param asPathMatchMode Property asPathMatchMode: Match statements are used to match the AS paths.
         *                        Valid values:
         *                        Include: uses fuzzy match. If the AS path in the condition overlaps with the AS path in the route, the match is successful.
         *                        Complete: uses exact match. Only when the AS path in the condition is the same as the AS path in the route, the match is successful.
         * @return {@code this}
         */
        public Builder asPathMatchMode(com.aliyun.ros.cdk.core.IResolvable asPathMatchMode) {
            this.asPathMatchMode = asPathMatchMode;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getCidrMatchMode}
         * @param cidrMatchMode Property cidrMatchMode: Match statements are used to match the prefixes.
         *                      Valid values:
         *                      Include: uses fuzzy match. If the routing prefix in the condition contains the routing prefix of the route, the match is successful.
         *                      For example, the 1.1.0.0/16 policy can match the 1.1.1.0/24 route.
         *                      Complete: uses exact match. Only when the routing prefix in the condition is the same as the routing prefix of the route, the match is successful.
         *                      For example, the 1.1.0.0/16 policy can match the 1.1.0.0/16 route.
         * @return {@code this}
         */
        public Builder cidrMatchMode(java.lang.String cidrMatchMode) {
            this.cidrMatchMode = cidrMatchMode;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getCidrMatchMode}
         * @param cidrMatchMode Property cidrMatchMode: Match statements are used to match the prefixes.
         *                      Valid values:
         *                      Include: uses fuzzy match. If the routing prefix in the condition contains the routing prefix of the route, the match is successful.
         *                      For example, the 1.1.0.0/16 policy can match the 1.1.1.0/24 route.
         *                      Complete: uses exact match. Only when the routing prefix in the condition is the same as the routing prefix of the route, the match is successful.
         *                      For example, the 1.1.0.0/16 policy can match the 1.1.0.0/16 route.
         * @return {@code this}
         */
        public Builder cidrMatchMode(com.aliyun.ros.cdk.core.IResolvable cidrMatchMode) {
            this.cidrMatchMode = cidrMatchMode;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getCommunityMatchMode}
         * @param communityMatchMode Property communityMatchMode: Match statements are used to match the Communities.
         *                           Valid values:
         *                           Include: uses fuzzy match. If the Community in the condition overlaps with the Community of the route, the match is successful.
         *                           Complete: uses exact match. Only when the Community in the condition is the same as the Community of the route, the match is successful.
         * @return {@code this}
         */
        public Builder communityMatchMode(java.lang.String communityMatchMode) {
            this.communityMatchMode = communityMatchMode;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getCommunityMatchMode}
         * @param communityMatchMode Property communityMatchMode: Match statements are used to match the Communities.
         *                           Valid values:
         *                           Include: uses fuzzy match. If the Community in the condition overlaps with the Community of the route, the match is successful.
         *                           Complete: uses exact match. Only when the Community in the condition is the same as the Community of the route, the match is successful.
         * @return {@code this}
         */
        public Builder communityMatchMode(com.aliyun.ros.cdk.core.IResolvable communityMatchMode) {
            this.communityMatchMode = communityMatchMode;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getCommunityOperateMode}
         * @param communityOperateMode Property communityOperateMode: Action statements are used to operate the Communities.
         *                             Valid values:
         *                             Additive: adds.
         *                             Replace: replaces.
         * @return {@code this}
         */
        public Builder communityOperateMode(java.lang.String communityOperateMode) {
            this.communityOperateMode = communityOperateMode;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getCommunityOperateMode}
         * @param communityOperateMode Property communityOperateMode: Action statements are used to operate the Communities.
         *                             Valid values:
         *                             Additive: adds.
         *                             Replace: replaces.
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
         * @param destinationChildInstanceTypes Property destinationChildInstanceTypes: Match statements are used to match the destination instance types.
         *                                      Valid values:
         *                                      VPC: VPCs.
         *                                      VBR: VBRs.
         *                                      CCN: CCN instances in mainland China.
         *                                      Note The destination instance types are valid only when the route map is applied to scenarios where routes are advertised from gateways in the current region to instances in the current region.
         * @return {@code this}
         */
        public Builder destinationChildInstanceTypes(com.aliyun.ros.cdk.core.IResolvable destinationChildInstanceTypes) {
            this.destinationChildInstanceTypes = destinationChildInstanceTypes;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getDestinationChildInstanceTypes}
         * @param destinationChildInstanceTypes Property destinationChildInstanceTypes: Match statements are used to match the destination instance types.
         *                                      Valid values:
         *                                      VPC: VPCs.
         *                                      VBR: VBRs.
         *                                      CCN: CCN instances in mainland China.
         *                                      Note The destination instance types are valid only when the route map is applied to scenarios where routes are advertised from gateways in the current region to instances in the current region.
         * @return {@code this}
         */
        public Builder destinationChildInstanceTypes(java.util.List<? extends java.lang.Object> destinationChildInstanceTypes) {
            this.destinationChildInstanceTypes = destinationChildInstanceTypes;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getDestinationCidrBlocks}
         * @param destinationCidrBlocks Property destinationCidrBlocks: Match statements are used to match the routing prefixes.
         *                              The CIDR format is used. You can enter at most 32 CIDR blocks.
         * @return {@code this}
         */
        public Builder destinationCidrBlocks(com.aliyun.ros.cdk.core.IResolvable destinationCidrBlocks) {
            this.destinationCidrBlocks = destinationCidrBlocks;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getDestinationCidrBlocks}
         * @param destinationCidrBlocks Property destinationCidrBlocks: Match statements are used to match the routing prefixes.
         *                              The CIDR format is used. You can enter at most 32 CIDR blocks.
         * @return {@code this}
         */
        public Builder destinationCidrBlocks(java.util.List<? extends java.lang.Object> destinationCidrBlocks) {
            this.destinationCidrBlocks = destinationCidrBlocks;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getDestinationInstanceIds}
         * @param destinationInstanceIds Property destinationInstanceIds: Match statements are used to match the destination instance IDs.
         *                               You can enter instance IDs of the following types: VPC, VBR, CCN in mainland China, and SAG. You can enter at most 32 instance IDs.
         *                               Note The destination instance IDs are valid only when the route map is applied to scenarios where routes are advertised from gateways in the current region to instances in the current region.
         * @return {@code this}
         */
        public Builder destinationInstanceIds(com.aliyun.ros.cdk.core.IResolvable destinationInstanceIds) {
            this.destinationInstanceIds = destinationInstanceIds;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getDestinationInstanceIds}
         * @param destinationInstanceIds Property destinationInstanceIds: Match statements are used to match the destination instance IDs.
         *                               You can enter instance IDs of the following types: VPC, VBR, CCN in mainland China, and SAG. You can enter at most 32 instance IDs.
         *                               Note The destination instance IDs are valid only when the route map is applied to scenarios where routes are advertised from gateways in the current region to instances in the current region.
         * @return {@code this}
         */
        public Builder destinationInstanceIds(java.util.List<? extends java.lang.Object> destinationInstanceIds) {
            this.destinationInstanceIds = destinationInstanceIds;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getDestinationInstanceIdsReverseMatch}
         * @param destinationInstanceIdsReverseMatch Property destinationInstanceIdsReverseMatch: The IDs of destination instances to be advertised do not support match statements.
         *                                           Valid values:
         *                                           false(default value): If the ID of the destination instance to be advertised is in the DestinationInstanceIds field, the match is successful.
         *                                           true: If the ID of the destination instance to be advertised is not in the DestinationInstanceIds filed, the match is successful.
         * @return {@code this}
         */
        public Builder destinationInstanceIdsReverseMatch(java.lang.Boolean destinationInstanceIdsReverseMatch) {
            this.destinationInstanceIdsReverseMatch = destinationInstanceIdsReverseMatch;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getDestinationInstanceIdsReverseMatch}
         * @param destinationInstanceIdsReverseMatch Property destinationInstanceIdsReverseMatch: The IDs of destination instances to be advertised do not support match statements.
         *                                           Valid values:
         *                                           false(default value): If the ID of the destination instance to be advertised is in the DestinationInstanceIds field, the match is successful.
         *                                           true: If the ID of the destination instance to be advertised is not in the DestinationInstanceIds filed, the match is successful.
         * @return {@code this}
         */
        public Builder destinationInstanceIdsReverseMatch(com.aliyun.ros.cdk.core.IResolvable destinationInstanceIdsReverseMatch) {
            this.destinationInstanceIdsReverseMatch = destinationInstanceIdsReverseMatch;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getDestinationRouteTableIds}
         * @param destinationRouteTableIds Property destinationRouteTableIds: Match statements are used to match the IDs of the destination route tables.
         *                                 You can enter at most 32 route table IDs.
         *                                 Note The destination route table IDs are valid only when the route map is applied to scenarios where routes are advertised from gateways in the current region to route tables in the current region.
         * @return {@code this}
         */
        public Builder destinationRouteTableIds(com.aliyun.ros.cdk.core.IResolvable destinationRouteTableIds) {
            this.destinationRouteTableIds = destinationRouteTableIds;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getDestinationRouteTableIds}
         * @param destinationRouteTableIds Property destinationRouteTableIds: Match statements are used to match the IDs of the destination route tables.
         *                                 You can enter at most 32 route table IDs.
         *                                 Note The destination route table IDs are valid only when the route map is applied to scenarios where routes are advertised from gateways in the current region to route tables in the current region.
         * @return {@code this}
         */
        public Builder destinationRouteTableIds(java.util.List<? extends java.lang.Object> destinationRouteTableIds) {
            this.destinationRouteTableIds = destinationRouteTableIds;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getMatchAsns}
         * @param matchAsns Property matchAsns: Match statements are used to match AS paths of the routes.
         *                  An AS path is a mandatory attribute, which describes the AS number through which a BGP route passes when the BGP route is advertised.
         *                  Only the AS-SEQUENCE parameter is supported. The AS-SET, AS-CONFED-SEQUENCE, and AS-CONFED-SET parameters are not supported. Specifically, only the AS number list is supported. Sets and sub-lists are not supported.
         * @return {@code this}
         */
        public Builder matchAsns(com.aliyun.ros.cdk.core.IResolvable matchAsns) {
            this.matchAsns = matchAsns;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getMatchAsns}
         * @param matchAsns Property matchAsns: Match statements are used to match AS paths of the routes.
         *                  An AS path is a mandatory attribute, which describes the AS number through which a BGP route passes when the BGP route is advertised.
         *                  Only the AS-SEQUENCE parameter is supported. The AS-SET, AS-CONFED-SEQUENCE, and AS-CONFED-SET parameters are not supported. Specifically, only the AS number list is supported. Sets and sub-lists are not supported.
         * @return {@code this}
         */
        public Builder matchAsns(java.util.List<? extends java.lang.Object> matchAsns) {
            this.matchAsns = matchAsns;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getMatchCommunitySet}
         * @param matchCommunitySet Property matchCommunitySet: Match statements are used to match the Communities.
         *                          Enter each Community in the format of nn:nn. Valid values of nn: 1 to 65535. You can enter at most 32 Communities. Each Community must comply with RFC 1997. RFC 8092 is not supported.
         *                          Note If the configurations of the Communities are incorrect, routes may not be advertised to the on-premises data center.
         * @return {@code this}
         */
        public Builder matchCommunitySet(com.aliyun.ros.cdk.core.IResolvable matchCommunitySet) {
            this.matchCommunitySet = matchCommunitySet;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getMatchCommunitySet}
         * @param matchCommunitySet Property matchCommunitySet: Match statements are used to match the Communities.
         *                          Enter each Community in the format of nn:nn. Valid values of nn: 1 to 65535. You can enter at most 32 Communities. Each Community must comply with RFC 1997. RFC 8092 is not supported.
         *                          Note If the configurations of the Communities are incorrect, routes may not be advertised to the on-premises data center.
         * @return {@code this}
         */
        public Builder matchCommunitySet(java.util.List<? extends java.lang.Object> matchCommunitySet) {
            this.matchCommunitySet = matchCommunitySet;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getNextPriority}
         * @param nextPriority Property nextPriority: The priority of the next associated route map.
         *                     Valid values: 1 to 100.
         *                     If the priority is not set, no next route map is associated with the current route map.
         *                     If the priority is set to 1, the next route map is associated with the current route map.
         *                     If the priority is set and the value is not 1, the priority of the associated route map must be higher than that of the current route map.
         *                     Only when the MapResult parameter is set to Permit, the matched routes continue to match the next associated route maps.
         * @return {@code this}
         */
        public Builder nextPriority(java.lang.Number nextPriority) {
            this.nextPriority = nextPriority;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getNextPriority}
         * @param nextPriority Property nextPriority: The priority of the next associated route map.
         *                     Valid values: 1 to 100.
         *                     If the priority is not set, no next route map is associated with the current route map.
         *                     If the priority is set to 1, the next route map is associated with the current route map.
         *                     If the priority is set and the value is not 1, the priority of the associated route map must be higher than that of the current route map.
         *                     Only when the MapResult parameter is set to Permit, the matched routes continue to match the next associated route maps.
         * @return {@code this}
         */
        public Builder nextPriority(com.aliyun.ros.cdk.core.IResolvable nextPriority) {
            this.nextPriority = nextPriority;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getOperateCommunitySet}
         * @param operateCommunitySet Property operateCommunitySet: Action statements are used to operate the Communities.
         *                            Valid values: Enter each Community in the format of nn:nn. Valid values of nn: 1 to 65535. You can enter at most 32 Communities. Each Community must comply with RFC 1997. RFC 8092 is not supported.
         *                            Note If the configurations of the Communities are incorrect, routes may not be advertised to the on-premises data center.
         * @return {@code this}
         */
        public Builder operateCommunitySet(com.aliyun.ros.cdk.core.IResolvable operateCommunitySet) {
            this.operateCommunitySet = operateCommunitySet;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getOperateCommunitySet}
         * @param operateCommunitySet Property operateCommunitySet: Action statements are used to operate the Communities.
         *                            Valid values: Enter each Community in the format of nn:nn. Valid values of nn: 1 to 65535. You can enter at most 32 Communities. Each Community must comply with RFC 1997. RFC 8092 is not supported.
         *                            Note If the configurations of the Communities are incorrect, routes may not be advertised to the on-premises data center.
         * @return {@code this}
         */
        public Builder operateCommunitySet(java.util.List<? extends java.lang.Object> operateCommunitySet) {
            this.operateCommunitySet = operateCommunitySet;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getPreference}
         * @param preference Property preference: Action statements are used to modify route priorities.
         *                   Valid values: 1 to 100. Default value: 50. A smaller number indicates a higher priority.
         * @return {@code this}
         */
        public Builder preference(java.lang.Number preference) {
            this.preference = preference;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getPreference}
         * @param preference Property preference: Action statements are used to modify route priorities.
         *                   Valid values: 1 to 100. Default value: 50. A smaller number indicates a higher priority.
         * @return {@code this}
         */
        public Builder preference(com.aliyun.ros.cdk.core.IResolvable preference) {
            this.preference = preference;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getPrependAsPath}
         * @param prependAsPath Property prependAsPath: AS paths are attached when regional gateways receive or advertise routes.
         *                      For route maps that are applied in different directions, the requirements for AS paths to be attached are different:
         *                      For the inbound direction: You must specify the list of source instance IDs and the source region in the condition to be matched. The source region must be the same as the region where the route map is applied.
         *                      For the outbound direction: You must specify the list of destination instance IDs in the condition to be matched.
         * @return {@code this}
         */
        public Builder prependAsPath(com.aliyun.ros.cdk.core.IResolvable prependAsPath) {
            this.prependAsPath = prependAsPath;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getPrependAsPath}
         * @param prependAsPath Property prependAsPath: AS paths are attached when regional gateways receive or advertise routes.
         *                      For route maps that are applied in different directions, the requirements for AS paths to be attached are different:
         *                      For the inbound direction: You must specify the list of source instance IDs and the source region in the condition to be matched. The source region must be the same as the region where the route map is applied.
         *                      For the outbound direction: You must specify the list of destination instance IDs in the condition to be matched.
         * @return {@code this}
         */
        public Builder prependAsPath(java.util.List<? extends java.lang.Object> prependAsPath) {
            this.prependAsPath = prependAsPath;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getRouteTypes}
         * @param routeTypes Property routeTypes: Match statements are used to match the route types.
         *                   Valid values:
         *                   System: system routes that are generated by the system.
         *                   Custom: custom routes that are created by users.
         *                   BGP: Border Gateway Protocol (BGP) routes that are advertised to BGP.
         *                   You can enter multiple types.
         * @return {@code this}
         */
        public Builder routeTypes(com.aliyun.ros.cdk.core.IResolvable routeTypes) {
            this.routeTypes = routeTypes;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getRouteTypes}
         * @param routeTypes Property routeTypes: Match statements are used to match the route types.
         *                   Valid values:
         *                   System: system routes that are generated by the system.
         *                   Custom: custom routes that are created by users.
         *                   BGP: Border Gateway Protocol (BGP) routes that are advertised to BGP.
         *                   You can enter multiple types.
         * @return {@code this}
         */
        public Builder routeTypes(java.util.List<? extends java.lang.Object> routeTypes) {
            this.routeTypes = routeTypes;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getSourceChildInstanceTypes}
         * @param sourceChildInstanceTypes Property sourceChildInstanceTypes: Match statements are used to match source instance types of the routes.
         *                                 Valid values:
         *                                 VPC: VPCs.
         *                                 VBR: VBRs.
         *                                 CCN: CCN instances in mainland China.
         * @return {@code this}
         */
        public Builder sourceChildInstanceTypes(com.aliyun.ros.cdk.core.IResolvable sourceChildInstanceTypes) {
            this.sourceChildInstanceTypes = sourceChildInstanceTypes;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getSourceChildInstanceTypes}
         * @param sourceChildInstanceTypes Property sourceChildInstanceTypes: Match statements are used to match source instance types of the routes.
         *                                 Valid values:
         *                                 VPC: VPCs.
         *                                 VBR: VBRs.
         *                                 CCN: CCN instances in mainland China.
         * @return {@code this}
         */
        public Builder sourceChildInstanceTypes(java.util.List<? extends java.lang.Object> sourceChildInstanceTypes) {
            this.sourceChildInstanceTypes = sourceChildInstanceTypes;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getSourceInstanceIds}
         * @param sourceInstanceIds Property sourceInstanceIds: Match statements are used to match source instance IDs of the routes.
         *                          You can enter instance IDs of the following types: virtual private cloud (VPC), virtual border router (VBR), Cloud Connect Network (CCN) in mainland China, Smart Access Gateway (SAG). You can enter at most 32 instance IDs.
         * @return {@code this}
         */
        public Builder sourceInstanceIds(com.aliyun.ros.cdk.core.IResolvable sourceInstanceIds) {
            this.sourceInstanceIds = sourceInstanceIds;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getSourceInstanceIds}
         * @param sourceInstanceIds Property sourceInstanceIds: Match statements are used to match source instance IDs of the routes.
         *                          You can enter instance IDs of the following types: virtual private cloud (VPC), virtual border router (VBR), Cloud Connect Network (CCN) in mainland China, Smart Access Gateway (SAG). You can enter at most 32 instance IDs.
         * @return {@code this}
         */
        public Builder sourceInstanceIds(java.util.List<? extends java.lang.Object> sourceInstanceIds) {
            this.sourceInstanceIds = sourceInstanceIds;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getSourceInstanceIdsReverseMatch}
         * @param sourceInstanceIdsReverseMatch Property sourceInstanceIdsReverseMatch: The IDs of source instances to be advertised do not support match statements.
         *                                      Valid values:
         *                                      false (default value): If the source instance ID is in the SourceInstanceIds field, the match is successful.
         *                                      true: If the source instance ID is not in the SourceInstanceIds field, the match is successful.
         * @return {@code this}
         */
        public Builder sourceInstanceIdsReverseMatch(java.lang.Boolean sourceInstanceIdsReverseMatch) {
            this.sourceInstanceIdsReverseMatch = sourceInstanceIdsReverseMatch;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getSourceInstanceIdsReverseMatch}
         * @param sourceInstanceIdsReverseMatch Property sourceInstanceIdsReverseMatch: The IDs of source instances to be advertised do not support match statements.
         *                                      Valid values:
         *                                      false (default value): If the source instance ID is in the SourceInstanceIds field, the match is successful.
         *                                      true: If the source instance ID is not in the SourceInstanceIds field, the match is successful.
         * @return {@code this}
         */
        public Builder sourceInstanceIdsReverseMatch(com.aliyun.ros.cdk.core.IResolvable sourceInstanceIdsReverseMatch) {
            this.sourceInstanceIdsReverseMatch = sourceInstanceIdsReverseMatch;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getSourceRegionIds}
         * @param sourceRegionIds Property sourceRegionIds: Match statements are used to match source region IDs of the routes.
         *                        You can enter at most 32 region IDs.
         * @return {@code this}
         */
        public Builder sourceRegionIds(com.aliyun.ros.cdk.core.IResolvable sourceRegionIds) {
            this.sourceRegionIds = sourceRegionIds;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getSourceRegionIds}
         * @param sourceRegionIds Property sourceRegionIds: Match statements are used to match source region IDs of the routes.
         *                        You can enter at most 32 region IDs.
         * @return {@code this}
         */
        public Builder sourceRegionIds(java.util.List<? extends java.lang.Object> sourceRegionIds) {
            this.sourceRegionIds = sourceRegionIds;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getSourceRouteTableIds}
         * @param sourceRouteTableIds Property sourceRouteTableIds: Match statements are used to match source route table IDs of the routes.
         *                            You can enter at most 32 route table IDs.
         * @return {@code this}
         */
        public Builder sourceRouteTableIds(com.aliyun.ros.cdk.core.IResolvable sourceRouteTableIds) {
            this.sourceRouteTableIds = sourceRouteTableIds;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteMapProps#getSourceRouteTableIds}
         * @param sourceRouteTableIds Property sourceRouteTableIds: Match statements are used to match source route table IDs of the routes.
         *                            You can enter at most 32 route table IDs.
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
            return new Jsii$Proxy(this);
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
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.cenId = java.util.Objects.requireNonNull(builder.cenId, "cenId is required");
            this.cenRegionId = java.util.Objects.requireNonNull(builder.cenRegionId, "cenRegionId is required");
            this.mapResult = java.util.Objects.requireNonNull(builder.mapResult, "mapResult is required");
            this.priority = java.util.Objects.requireNonNull(builder.priority, "priority is required");
            this.transmitDirection = java.util.Objects.requireNonNull(builder.transmitDirection, "transmitDirection is required");
            this.asPathMatchMode = builder.asPathMatchMode;
            this.cidrMatchMode = builder.cidrMatchMode;
            this.communityMatchMode = builder.communityMatchMode;
            this.communityOperateMode = builder.communityOperateMode;
            this.description = builder.description;
            this.destinationChildInstanceTypes = builder.destinationChildInstanceTypes;
            this.destinationCidrBlocks = builder.destinationCidrBlocks;
            this.destinationInstanceIds = builder.destinationInstanceIds;
            this.destinationInstanceIdsReverseMatch = builder.destinationInstanceIdsReverseMatch;
            this.destinationRouteTableIds = builder.destinationRouteTableIds;
            this.matchAsns = builder.matchAsns;
            this.matchCommunitySet = builder.matchCommunitySet;
            this.nextPriority = builder.nextPriority;
            this.operateCommunitySet = builder.operateCommunitySet;
            this.preference = builder.preference;
            this.prependAsPath = builder.prependAsPath;
            this.routeTypes = builder.routeTypes;
            this.sourceChildInstanceTypes = builder.sourceChildInstanceTypes;
            this.sourceInstanceIds = builder.sourceInstanceIds;
            this.sourceInstanceIdsReverseMatch = builder.sourceInstanceIdsReverseMatch;
            this.sourceRegionIds = builder.sourceRegionIds;
            this.sourceRouteTableIds = builder.sourceRouteTableIds;
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
