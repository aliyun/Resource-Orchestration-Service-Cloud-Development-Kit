package com.aliyun.ros.cdk.cen;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::CEN::CenRouteMap</code>, which is used to create a routing policy.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-10-18T08:56:27.201Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cen.$Module.class, fqn = "@alicloud/ros-cdk-cen.CenRouteMap")
public class CenRouteMap extends com.aliyun.ros.cdk.core.Resource {

    protected CenRouteMap(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected CenRouteMap(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
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
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
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
     * Attribute RouteMapId: The ID of the route map.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRouteMapId() {
        return software.amazon.jsii.Kernel.get(this, "attrRouteMapId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    protected void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.String getId() {
        return software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    protected void setId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "id", java.util.Objects.requireNonNull(value, "id is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.CenRouteMapProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cen.CenRouteMapProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.CenRouteMapProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
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
         * Property cenId: The ID of the Cloud Enterprise Network (CEN) instance.
         * <p>
         * @return {@code this}
         * @param cenId Property cenId: The ID of the Cloud Enterprise Network (CEN) instance. This parameter is required.
         */
        public Builder cenId(final java.lang.String cenId) {
            this.props.cenId(cenId);
            return this;
        }
        /**
         * Property cenId: The ID of the Cloud Enterprise Network (CEN) instance.
         * <p>
         * @return {@code this}
         * @param cenId Property cenId: The ID of the Cloud Enterprise Network (CEN) instance. This parameter is required.
         */
        public Builder cenId(final com.aliyun.ros.cdk.core.IResolvable cenId) {
            this.props.cenId(cenId);
            return this;
        }

        /**
         * Property cenRegionId: The region where the CEN instance is deployed.
         * <p>
         * You can call the DescribeRegions operation to query region IDs.
         * <p>
         * @return {@code this}
         * @param cenRegionId Property cenRegionId: The region where the CEN instance is deployed. This parameter is required.
         */
        public Builder cenRegionId(final java.lang.String cenRegionId) {
            this.props.cenRegionId(cenRegionId);
            return this;
        }
        /**
         * Property cenRegionId: The region where the CEN instance is deployed.
         * <p>
         * You can call the DescribeRegions operation to query region IDs.
         * <p>
         * @return {@code this}
         * @param cenRegionId Property cenRegionId: The region where the CEN instance is deployed. This parameter is required.
         */
        public Builder cenRegionId(final com.aliyun.ros.cdk.core.IResolvable cenRegionId) {
            this.props.cenRegionId(cenRegionId);
            return this;
        }

        /**
         * Property mapResult: The route map behavior after all conditions are matched.
         * <p>
         * Valid values:
         * Permit: allows the routes that are matched.
         * Deny: rejects the routes that are matched.
         * <p>
         * @return {@code this}
         * @param mapResult Property mapResult: The route map behavior after all conditions are matched. This parameter is required.
         */
        public Builder mapResult(final java.lang.String mapResult) {
            this.props.mapResult(mapResult);
            return this;
        }
        /**
         * Property mapResult: The route map behavior after all conditions are matched.
         * <p>
         * Valid values:
         * Permit: allows the routes that are matched.
         * Deny: rejects the routes that are matched.
         * <p>
         * @return {@code this}
         * @param mapResult Property mapResult: The route map behavior after all conditions are matched. This parameter is required.
         */
        public Builder mapResult(final com.aliyun.ros.cdk.core.IResolvable mapResult) {
            this.props.mapResult(mapResult);
            return this;
        }

        /**
         * Property priority: The priority of the route map.
         * <p>
         * Valid values: 1 to 100 . A lower value indicates a higher priority.
         * Note In the same region, for route maps that are applied in the same direction, the priority is unique. When a route map is implemented, the system matches conditions with a route map whose priority number is the smallest. Therefore, make sure that you set priorities for route maps to meet your requirements.
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
         * Valid values: 1 to 100 . A lower value indicates a higher priority.
         * Note In the same region, for route maps that are applied in the same direction, the priority is unique. When a route map is implemented, the system matches conditions with a route map whose priority number is the smallest. Therefore, make sure that you set priorities for route maps to meet your requirements.
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
         * Valid values:
         * RegionIn: Routes are advertised to CEN gateways.
         * For example, routes are advertised from network instances deployed in the current region or other regions to the gateways deployed in the current region.
         * RegionOut: Routes are advertised from CEN gateways.
         * For example, routes are advertised from gateways deployed in the current region to network instances or gateways deployed in other regions.
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
         * Valid values:
         * RegionIn: Routes are advertised to CEN gateways.
         * For example, routes are advertised from network instances deployed in the current region or other regions to the gateways deployed in the current region.
         * RegionOut: Routes are advertised from CEN gateways.
         * For example, routes are advertised from gateways deployed in the current region to network instances or gateways deployed in other regions.
         * <p>
         * @return {@code this}
         * @param transmitDirection Property transmitDirection: The direction in which the route map is applied. This parameter is required.
         */
        public Builder transmitDirection(final com.aliyun.ros.cdk.core.IResolvable transmitDirection) {
            this.props.transmitDirection(transmitDirection);
            return this;
        }

        /**
         * Property asPathMatchMode: Match statements are used to match the AS paths.
         * <p>
         * Valid values:
         * Include: uses fuzzy match. If the AS path in the condition overlaps with the AS path in the route, the match is successful.
         * Complete: uses exact match. Only when the AS path in the condition is the same as the AS path in the route, the match is successful.
         * <p>
         * @return {@code this}
         * @param asPathMatchMode Property asPathMatchMode: Match statements are used to match the AS paths. This parameter is required.
         */
        public Builder asPathMatchMode(final java.lang.String asPathMatchMode) {
            this.props.asPathMatchMode(asPathMatchMode);
            return this;
        }
        /**
         * Property asPathMatchMode: Match statements are used to match the AS paths.
         * <p>
         * Valid values:
         * Include: uses fuzzy match. If the AS path in the condition overlaps with the AS path in the route, the match is successful.
         * Complete: uses exact match. Only when the AS path in the condition is the same as the AS path in the route, the match is successful.
         * <p>
         * @return {@code this}
         * @param asPathMatchMode Property asPathMatchMode: Match statements are used to match the AS paths. This parameter is required.
         */
        public Builder asPathMatchMode(final com.aliyun.ros.cdk.core.IResolvable asPathMatchMode) {
            this.props.asPathMatchMode(asPathMatchMode);
            return this;
        }

        /**
         * Property cidrMatchMode: Match statements are used to match the prefixes.
         * <p>
         * Valid values:
         * Include: uses fuzzy match. If the routing prefix in the condition contains the routing prefix of the route, the match is successful.
         * For example, the 1.1.0.0/16 policy can match the 1.1.1.0/24 route.
         * Complete: uses exact match. Only when the routing prefix in the condition is the same as the routing prefix of the route, the match is successful.
         * For example, the 1.1.0.0/16 policy can match the 1.1.0.0/16 route.
         * <p>
         * @return {@code this}
         * @param cidrMatchMode Property cidrMatchMode: Match statements are used to match the prefixes. This parameter is required.
         */
        public Builder cidrMatchMode(final java.lang.String cidrMatchMode) {
            this.props.cidrMatchMode(cidrMatchMode);
            return this;
        }
        /**
         * Property cidrMatchMode: Match statements are used to match the prefixes.
         * <p>
         * Valid values:
         * Include: uses fuzzy match. If the routing prefix in the condition contains the routing prefix of the route, the match is successful.
         * For example, the 1.1.0.0/16 policy can match the 1.1.1.0/24 route.
         * Complete: uses exact match. Only when the routing prefix in the condition is the same as the routing prefix of the route, the match is successful.
         * For example, the 1.1.0.0/16 policy can match the 1.1.0.0/16 route.
         * <p>
         * @return {@code this}
         * @param cidrMatchMode Property cidrMatchMode: Match statements are used to match the prefixes. This parameter is required.
         */
        public Builder cidrMatchMode(final com.aliyun.ros.cdk.core.IResolvable cidrMatchMode) {
            this.props.cidrMatchMode(cidrMatchMode);
            return this;
        }

        /**
         * Property communityMatchMode: Match statements are used to match the Communities.
         * <p>
         * Valid values:
         * Include: uses fuzzy match. If the Community in the condition overlaps with the Community of the route, the match is successful.
         * Complete: uses exact match. Only when the Community in the condition is the same as the Community of the route, the match is successful.
         * <p>
         * @return {@code this}
         * @param communityMatchMode Property communityMatchMode: Match statements are used to match the Communities. This parameter is required.
         */
        public Builder communityMatchMode(final java.lang.String communityMatchMode) {
            this.props.communityMatchMode(communityMatchMode);
            return this;
        }
        /**
         * Property communityMatchMode: Match statements are used to match the Communities.
         * <p>
         * Valid values:
         * Include: uses fuzzy match. If the Community in the condition overlaps with the Community of the route, the match is successful.
         * Complete: uses exact match. Only when the Community in the condition is the same as the Community of the route, the match is successful.
         * <p>
         * @return {@code this}
         * @param communityMatchMode Property communityMatchMode: Match statements are used to match the Communities. This parameter is required.
         */
        public Builder communityMatchMode(final com.aliyun.ros.cdk.core.IResolvable communityMatchMode) {
            this.props.communityMatchMode(communityMatchMode);
            return this;
        }

        /**
         * Property communityOperateMode: Action statements are used to operate the Communities.
         * <p>
         * Valid values:
         * Additive: adds.
         * Replace: replaces.
         * <p>
         * @return {@code this}
         * @param communityOperateMode Property communityOperateMode: Action statements are used to operate the Communities. This parameter is required.
         */
        public Builder communityOperateMode(final java.lang.String communityOperateMode) {
            this.props.communityOperateMode(communityOperateMode);
            return this;
        }
        /**
         * Property communityOperateMode: Action statements are used to operate the Communities.
         * <p>
         * Valid values:
         * Additive: adds.
         * Replace: replaces.
         * <p>
         * @return {@code this}
         * @param communityOperateMode Property communityOperateMode: Action statements are used to operate the Communities. This parameter is required.
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
         * Property destinationChildInstanceTypes: Match statements are used to match the destination instance types.
         * <p>
         * Valid values:
         * VPC: VPCs.
         * VBR: VBRs.
         * CCN: CCN instances in mainland China.
         * Note The destination instance types are valid only when the route map is applied to scenarios where routes are advertised from gateways in the current region to instances in the current region.
         * <p>
         * @return {@code this}
         * @param destinationChildInstanceTypes Property destinationChildInstanceTypes: Match statements are used to match the destination instance types. This parameter is required.
         */
        public Builder destinationChildInstanceTypes(final com.aliyun.ros.cdk.core.IResolvable destinationChildInstanceTypes) {
            this.props.destinationChildInstanceTypes(destinationChildInstanceTypes);
            return this;
        }
        /**
         * Property destinationChildInstanceTypes: Match statements are used to match the destination instance types.
         * <p>
         * Valid values:
         * VPC: VPCs.
         * VBR: VBRs.
         * CCN: CCN instances in mainland China.
         * Note The destination instance types are valid only when the route map is applied to scenarios where routes are advertised from gateways in the current region to instances in the current region.
         * <p>
         * @return {@code this}
         * @param destinationChildInstanceTypes Property destinationChildInstanceTypes: Match statements are used to match the destination instance types. This parameter is required.
         */
        public Builder destinationChildInstanceTypes(final java.util.List<? extends java.lang.Object> destinationChildInstanceTypes) {
            this.props.destinationChildInstanceTypes(destinationChildInstanceTypes);
            return this;
        }

        /**
         * Property destinationCidrBlocks: Match statements are used to match the routing prefixes.
         * <p>
         * The CIDR format is used. You can enter at most 32 CIDR blocks.
         * <p>
         * @return {@code this}
         * @param destinationCidrBlocks Property destinationCidrBlocks: Match statements are used to match the routing prefixes. This parameter is required.
         */
        public Builder destinationCidrBlocks(final com.aliyun.ros.cdk.core.IResolvable destinationCidrBlocks) {
            this.props.destinationCidrBlocks(destinationCidrBlocks);
            return this;
        }
        /**
         * Property destinationCidrBlocks: Match statements are used to match the routing prefixes.
         * <p>
         * The CIDR format is used. You can enter at most 32 CIDR blocks.
         * <p>
         * @return {@code this}
         * @param destinationCidrBlocks Property destinationCidrBlocks: Match statements are used to match the routing prefixes. This parameter is required.
         */
        public Builder destinationCidrBlocks(final java.util.List<? extends java.lang.Object> destinationCidrBlocks) {
            this.props.destinationCidrBlocks(destinationCidrBlocks);
            return this;
        }

        /**
         * Property destinationInstanceIds: Match statements are used to match the destination instance IDs.
         * <p>
         * You can enter instance IDs of the following types: VPC, VBR, CCN in mainland China, and SAG. You can enter at most 32 instance IDs.
         * Note The destination instance IDs are valid only when the route map is applied to scenarios where routes are advertised from gateways in the current region to instances in the current region.
         * <p>
         * @return {@code this}
         * @param destinationInstanceIds Property destinationInstanceIds: Match statements are used to match the destination instance IDs. This parameter is required.
         */
        public Builder destinationInstanceIds(final com.aliyun.ros.cdk.core.IResolvable destinationInstanceIds) {
            this.props.destinationInstanceIds(destinationInstanceIds);
            return this;
        }
        /**
         * Property destinationInstanceIds: Match statements are used to match the destination instance IDs.
         * <p>
         * You can enter instance IDs of the following types: VPC, VBR, CCN in mainland China, and SAG. You can enter at most 32 instance IDs.
         * Note The destination instance IDs are valid only when the route map is applied to scenarios where routes are advertised from gateways in the current region to instances in the current region.
         * <p>
         * @return {@code this}
         * @param destinationInstanceIds Property destinationInstanceIds: Match statements are used to match the destination instance IDs. This parameter is required.
         */
        public Builder destinationInstanceIds(final java.util.List<? extends java.lang.Object> destinationInstanceIds) {
            this.props.destinationInstanceIds(destinationInstanceIds);
            return this;
        }

        /**
         * Property destinationInstanceIdsReverseMatch: The IDs of destination instances to be advertised do not support match statements.
         * <p>
         * Valid values:
         * false(default value): If the ID of the destination instance to be advertised is in the DestinationInstanceIds field, the match is successful.
         * true: If the ID of the destination instance to be advertised is not in the DestinationInstanceIds filed, the match is successful.
         * <p>
         * @return {@code this}
         * @param destinationInstanceIdsReverseMatch Property destinationInstanceIdsReverseMatch: The IDs of destination instances to be advertised do not support match statements. This parameter is required.
         */
        public Builder destinationInstanceIdsReverseMatch(final java.lang.Boolean destinationInstanceIdsReverseMatch) {
            this.props.destinationInstanceIdsReverseMatch(destinationInstanceIdsReverseMatch);
            return this;
        }
        /**
         * Property destinationInstanceIdsReverseMatch: The IDs of destination instances to be advertised do not support match statements.
         * <p>
         * Valid values:
         * false(default value): If the ID of the destination instance to be advertised is in the DestinationInstanceIds field, the match is successful.
         * true: If the ID of the destination instance to be advertised is not in the DestinationInstanceIds filed, the match is successful.
         * <p>
         * @return {@code this}
         * @param destinationInstanceIdsReverseMatch Property destinationInstanceIdsReverseMatch: The IDs of destination instances to be advertised do not support match statements. This parameter is required.
         */
        public Builder destinationInstanceIdsReverseMatch(final com.aliyun.ros.cdk.core.IResolvable destinationInstanceIdsReverseMatch) {
            this.props.destinationInstanceIdsReverseMatch(destinationInstanceIdsReverseMatch);
            return this;
        }

        /**
         * Property destinationRouteTableIds: Match statements are used to match the IDs of the destination route tables.
         * <p>
         * You can enter at most 32 route table IDs.
         * Note The destination route table IDs are valid only when the route map is applied to scenarios where routes are advertised from gateways in the current region to route tables in the current region.
         * <p>
         * @return {@code this}
         * @param destinationRouteTableIds Property destinationRouteTableIds: Match statements are used to match the IDs of the destination route tables. This parameter is required.
         */
        public Builder destinationRouteTableIds(final com.aliyun.ros.cdk.core.IResolvable destinationRouteTableIds) {
            this.props.destinationRouteTableIds(destinationRouteTableIds);
            return this;
        }
        /**
         * Property destinationRouteTableIds: Match statements are used to match the IDs of the destination route tables.
         * <p>
         * You can enter at most 32 route table IDs.
         * Note The destination route table IDs are valid only when the route map is applied to scenarios where routes are advertised from gateways in the current region to route tables in the current region.
         * <p>
         * @return {@code this}
         * @param destinationRouteTableIds Property destinationRouteTableIds: Match statements are used to match the IDs of the destination route tables. This parameter is required.
         */
        public Builder destinationRouteTableIds(final java.util.List<? extends java.lang.Object> destinationRouteTableIds) {
            this.props.destinationRouteTableIds(destinationRouteTableIds);
            return this;
        }

        /**
         * Property matchAsns: Match statements are used to match AS paths of the routes.
         * <p>
         * An AS path is a mandatory attribute, which describes the AS number through which a BGP route passes when the BGP route is advertised.
         * Only the AS-SEQUENCE parameter is supported. The AS-SET, AS-CONFED-SEQUENCE, and AS-CONFED-SET parameters are not supported. Specifically, only the AS number list is supported. Sets and sub-lists are not supported.
         * <p>
         * @return {@code this}
         * @param matchAsns Property matchAsns: Match statements are used to match AS paths of the routes. This parameter is required.
         */
        public Builder matchAsns(final com.aliyun.ros.cdk.core.IResolvable matchAsns) {
            this.props.matchAsns(matchAsns);
            return this;
        }
        /**
         * Property matchAsns: Match statements are used to match AS paths of the routes.
         * <p>
         * An AS path is a mandatory attribute, which describes the AS number through which a BGP route passes when the BGP route is advertised.
         * Only the AS-SEQUENCE parameter is supported. The AS-SET, AS-CONFED-SEQUENCE, and AS-CONFED-SET parameters are not supported. Specifically, only the AS number list is supported. Sets and sub-lists are not supported.
         * <p>
         * @return {@code this}
         * @param matchAsns Property matchAsns: Match statements are used to match AS paths of the routes. This parameter is required.
         */
        public Builder matchAsns(final java.util.List<? extends java.lang.Object> matchAsns) {
            this.props.matchAsns(matchAsns);
            return this;
        }

        /**
         * Property matchCommunitySet: Match statements are used to match the Communities.
         * <p>
         * Enter each Community in the format of nn:nn. Valid values of nn: 1 to 65535. You can enter at most 32 Communities. Each Community must comply with RFC 1997. RFC 8092 is not supported.
         * Note If the configurations of the Communities are incorrect, routes may not be advertised to the on-premises data center.
         * <p>
         * @return {@code this}
         * @param matchCommunitySet Property matchCommunitySet: Match statements are used to match the Communities. This parameter is required.
         */
        public Builder matchCommunitySet(final com.aliyun.ros.cdk.core.IResolvable matchCommunitySet) {
            this.props.matchCommunitySet(matchCommunitySet);
            return this;
        }
        /**
         * Property matchCommunitySet: Match statements are used to match the Communities.
         * <p>
         * Enter each Community in the format of nn:nn. Valid values of nn: 1 to 65535. You can enter at most 32 Communities. Each Community must comply with RFC 1997. RFC 8092 is not supported.
         * Note If the configurations of the Communities are incorrect, routes may not be advertised to the on-premises data center.
         * <p>
         * @return {@code this}
         * @param matchCommunitySet Property matchCommunitySet: Match statements are used to match the Communities. This parameter is required.
         */
        public Builder matchCommunitySet(final java.util.List<? extends java.lang.Object> matchCommunitySet) {
            this.props.matchCommunitySet(matchCommunitySet);
            return this;
        }

        /**
         * Property nextPriority: The priority of the next associated route map.
         * <p>
         * Valid values: 1 to 100.
         * If the priority is not set, no next route map is associated with the current route map.
         * If the priority is set to 1, the next route map is associated with the current route map.
         * If the priority is set and the value is not 1, the priority of the associated route map must be higher than that of the current route map.
         * Only when the MapResult parameter is set to Permit, the matched routes continue to match the next associated route maps.
         * <p>
         * @return {@code this}
         * @param nextPriority Property nextPriority: The priority of the next associated route map. This parameter is required.
         */
        public Builder nextPriority(final java.lang.Number nextPriority) {
            this.props.nextPriority(nextPriority);
            return this;
        }
        /**
         * Property nextPriority: The priority of the next associated route map.
         * <p>
         * Valid values: 1 to 100.
         * If the priority is not set, no next route map is associated with the current route map.
         * If the priority is set to 1, the next route map is associated with the current route map.
         * If the priority is set and the value is not 1, the priority of the associated route map must be higher than that of the current route map.
         * Only when the MapResult parameter is set to Permit, the matched routes continue to match the next associated route maps.
         * <p>
         * @return {@code this}
         * @param nextPriority Property nextPriority: The priority of the next associated route map. This parameter is required.
         */
        public Builder nextPriority(final com.aliyun.ros.cdk.core.IResolvable nextPriority) {
            this.props.nextPriority(nextPriority);
            return this;
        }

        /**
         * Property operateCommunitySet: Action statements are used to operate the Communities.
         * <p>
         * Valid values: Enter each Community in the format of nn:nn. Valid values of nn: 1 to 65535. You can enter at most 32 Communities. Each Community must comply with RFC 1997. RFC 8092 is not supported.
         * Note If the configurations of the Communities are incorrect, routes may not be advertised to the on-premises data center.
         * <p>
         * @return {@code this}
         * @param operateCommunitySet Property operateCommunitySet: Action statements are used to operate the Communities. This parameter is required.
         */
        public Builder operateCommunitySet(final com.aliyun.ros.cdk.core.IResolvable operateCommunitySet) {
            this.props.operateCommunitySet(operateCommunitySet);
            return this;
        }
        /**
         * Property operateCommunitySet: Action statements are used to operate the Communities.
         * <p>
         * Valid values: Enter each Community in the format of nn:nn. Valid values of nn: 1 to 65535. You can enter at most 32 Communities. Each Community must comply with RFC 1997. RFC 8092 is not supported.
         * Note If the configurations of the Communities are incorrect, routes may not be advertised to the on-premises data center.
         * <p>
         * @return {@code this}
         * @param operateCommunitySet Property operateCommunitySet: Action statements are used to operate the Communities. This parameter is required.
         */
        public Builder operateCommunitySet(final java.util.List<? extends java.lang.Object> operateCommunitySet) {
            this.props.operateCommunitySet(operateCommunitySet);
            return this;
        }

        /**
         * Property preference: Action statements are used to modify route priorities.
         * <p>
         * Valid values: 1 to 100. Default value: 50. A smaller number indicates a higher priority.
         * <p>
         * @return {@code this}
         * @param preference Property preference: Action statements are used to modify route priorities. This parameter is required.
         */
        public Builder preference(final java.lang.Number preference) {
            this.props.preference(preference);
            return this;
        }
        /**
         * Property preference: Action statements are used to modify route priorities.
         * <p>
         * Valid values: 1 to 100. Default value: 50. A smaller number indicates a higher priority.
         * <p>
         * @return {@code this}
         * @param preference Property preference: Action statements are used to modify route priorities. This parameter is required.
         */
        public Builder preference(final com.aliyun.ros.cdk.core.IResolvable preference) {
            this.props.preference(preference);
            return this;
        }

        /**
         * Property prependAsPath: AS paths are attached when regional gateways receive or advertise routes.
         * <p>
         * For route maps that are applied in different directions, the requirements for AS paths to be attached are different:
         * For the inbound direction: You must specify the list of source instance IDs and the source region in the condition to be matched. The source region must be the same as the region where the route map is applied.
         * For the outbound direction: You must specify the list of destination instance IDs in the condition to be matched.
         * <p>
         * @return {@code this}
         * @param prependAsPath Property prependAsPath: AS paths are attached when regional gateways receive or advertise routes. This parameter is required.
         */
        public Builder prependAsPath(final com.aliyun.ros.cdk.core.IResolvable prependAsPath) {
            this.props.prependAsPath(prependAsPath);
            return this;
        }
        /**
         * Property prependAsPath: AS paths are attached when regional gateways receive or advertise routes.
         * <p>
         * For route maps that are applied in different directions, the requirements for AS paths to be attached are different:
         * For the inbound direction: You must specify the list of source instance IDs and the source region in the condition to be matched. The source region must be the same as the region where the route map is applied.
         * For the outbound direction: You must specify the list of destination instance IDs in the condition to be matched.
         * <p>
         * @return {@code this}
         * @param prependAsPath Property prependAsPath: AS paths are attached when regional gateways receive or advertise routes. This parameter is required.
         */
        public Builder prependAsPath(final java.util.List<? extends java.lang.Object> prependAsPath) {
            this.props.prependAsPath(prependAsPath);
            return this;
        }

        /**
         * Property routeTypes: Match statements are used to match the route types.
         * <p>
         * Valid values:
         * System: system routes that are generated by the system.
         * Custom: custom routes that are created by users.
         * BGP: Border Gateway Protocol (BGP) routes that are advertised to BGP.
         * You can enter multiple types.
         * <p>
         * @return {@code this}
         * @param routeTypes Property routeTypes: Match statements are used to match the route types. This parameter is required.
         */
        public Builder routeTypes(final com.aliyun.ros.cdk.core.IResolvable routeTypes) {
            this.props.routeTypes(routeTypes);
            return this;
        }
        /**
         * Property routeTypes: Match statements are used to match the route types.
         * <p>
         * Valid values:
         * System: system routes that are generated by the system.
         * Custom: custom routes that are created by users.
         * BGP: Border Gateway Protocol (BGP) routes that are advertised to BGP.
         * You can enter multiple types.
         * <p>
         * @return {@code this}
         * @param routeTypes Property routeTypes: Match statements are used to match the route types. This parameter is required.
         */
        public Builder routeTypes(final java.util.List<? extends java.lang.Object> routeTypes) {
            this.props.routeTypes(routeTypes);
            return this;
        }

        /**
         * Property sourceChildInstanceTypes: Match statements are used to match source instance types of the routes.
         * <p>
         * Valid values:
         * VPC: VPCs.
         * VBR: VBRs.
         * CCN: CCN instances in mainland China.
         * <p>
         * @return {@code this}
         * @param sourceChildInstanceTypes Property sourceChildInstanceTypes: Match statements are used to match source instance types of the routes. This parameter is required.
         */
        public Builder sourceChildInstanceTypes(final com.aliyun.ros.cdk.core.IResolvable sourceChildInstanceTypes) {
            this.props.sourceChildInstanceTypes(sourceChildInstanceTypes);
            return this;
        }
        /**
         * Property sourceChildInstanceTypes: Match statements are used to match source instance types of the routes.
         * <p>
         * Valid values:
         * VPC: VPCs.
         * VBR: VBRs.
         * CCN: CCN instances in mainland China.
         * <p>
         * @return {@code this}
         * @param sourceChildInstanceTypes Property sourceChildInstanceTypes: Match statements are used to match source instance types of the routes. This parameter is required.
         */
        public Builder sourceChildInstanceTypes(final java.util.List<? extends java.lang.Object> sourceChildInstanceTypes) {
            this.props.sourceChildInstanceTypes(sourceChildInstanceTypes);
            return this;
        }

        /**
         * Property sourceInstanceIds: Match statements are used to match source instance IDs of the routes.
         * <p>
         * You can enter instance IDs of the following types: virtual private cloud (VPC), virtual border router (VBR), Cloud Connect Network (CCN) in mainland China, Smart Access Gateway (SAG). You can enter at most 32 instance IDs.
         * <p>
         * @return {@code this}
         * @param sourceInstanceIds Property sourceInstanceIds: Match statements are used to match source instance IDs of the routes. This parameter is required.
         */
        public Builder sourceInstanceIds(final com.aliyun.ros.cdk.core.IResolvable sourceInstanceIds) {
            this.props.sourceInstanceIds(sourceInstanceIds);
            return this;
        }
        /**
         * Property sourceInstanceIds: Match statements are used to match source instance IDs of the routes.
         * <p>
         * You can enter instance IDs of the following types: virtual private cloud (VPC), virtual border router (VBR), Cloud Connect Network (CCN) in mainland China, Smart Access Gateway (SAG). You can enter at most 32 instance IDs.
         * <p>
         * @return {@code this}
         * @param sourceInstanceIds Property sourceInstanceIds: Match statements are used to match source instance IDs of the routes. This parameter is required.
         */
        public Builder sourceInstanceIds(final java.util.List<? extends java.lang.Object> sourceInstanceIds) {
            this.props.sourceInstanceIds(sourceInstanceIds);
            return this;
        }

        /**
         * Property sourceInstanceIdsReverseMatch: The IDs of source instances to be advertised do not support match statements.
         * <p>
         * Valid values:
         * false (default value): If the source instance ID is in the SourceInstanceIds field, the match is successful.
         * true: If the source instance ID is not in the SourceInstanceIds field, the match is successful.
         * <p>
         * @return {@code this}
         * @param sourceInstanceIdsReverseMatch Property sourceInstanceIdsReverseMatch: The IDs of source instances to be advertised do not support match statements. This parameter is required.
         */
        public Builder sourceInstanceIdsReverseMatch(final java.lang.Boolean sourceInstanceIdsReverseMatch) {
            this.props.sourceInstanceIdsReverseMatch(sourceInstanceIdsReverseMatch);
            return this;
        }
        /**
         * Property sourceInstanceIdsReverseMatch: The IDs of source instances to be advertised do not support match statements.
         * <p>
         * Valid values:
         * false (default value): If the source instance ID is in the SourceInstanceIds field, the match is successful.
         * true: If the source instance ID is not in the SourceInstanceIds field, the match is successful.
         * <p>
         * @return {@code this}
         * @param sourceInstanceIdsReverseMatch Property sourceInstanceIdsReverseMatch: The IDs of source instances to be advertised do not support match statements. This parameter is required.
         */
        public Builder sourceInstanceIdsReverseMatch(final com.aliyun.ros.cdk.core.IResolvable sourceInstanceIdsReverseMatch) {
            this.props.sourceInstanceIdsReverseMatch(sourceInstanceIdsReverseMatch);
            return this;
        }

        /**
         * Property sourceRegionIds: Match statements are used to match source region IDs of the routes.
         * <p>
         * You can enter at most 32 region IDs.
         * <p>
         * @return {@code this}
         * @param sourceRegionIds Property sourceRegionIds: Match statements are used to match source region IDs of the routes. This parameter is required.
         */
        public Builder sourceRegionIds(final com.aliyun.ros.cdk.core.IResolvable sourceRegionIds) {
            this.props.sourceRegionIds(sourceRegionIds);
            return this;
        }
        /**
         * Property sourceRegionIds: Match statements are used to match source region IDs of the routes.
         * <p>
         * You can enter at most 32 region IDs.
         * <p>
         * @return {@code this}
         * @param sourceRegionIds Property sourceRegionIds: Match statements are used to match source region IDs of the routes. This parameter is required.
         */
        public Builder sourceRegionIds(final java.util.List<? extends java.lang.Object> sourceRegionIds) {
            this.props.sourceRegionIds(sourceRegionIds);
            return this;
        }

        /**
         * Property sourceRouteTableIds: Match statements are used to match source route table IDs of the routes.
         * <p>
         * You can enter at most 32 route table IDs.
         * <p>
         * @return {@code this}
         * @param sourceRouteTableIds Property sourceRouteTableIds: Match statements are used to match source route table IDs of the routes. This parameter is required.
         */
        public Builder sourceRouteTableIds(final com.aliyun.ros.cdk.core.IResolvable sourceRouteTableIds) {
            this.props.sourceRouteTableIds(sourceRouteTableIds);
            return this;
        }
        /**
         * Property sourceRouteTableIds: Match statements are used to match source route table IDs of the routes.
         * <p>
         * You can enter at most 32 route table IDs.
         * <p>
         * @return {@code this}
         * @param sourceRouteTableIds Property sourceRouteTableIds: Match statements are used to match source route table IDs of the routes. This parameter is required.
         */
        public Builder sourceRouteTableIds(final java.util.List<? extends java.lang.Object> sourceRouteTableIds) {
            this.props.sourceRouteTableIds(sourceRouteTableIds);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cen.CenRouteMap}.
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
