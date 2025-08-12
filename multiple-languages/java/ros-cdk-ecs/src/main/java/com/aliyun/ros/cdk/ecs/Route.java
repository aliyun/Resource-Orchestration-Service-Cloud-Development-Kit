package com.aliyun.ros.cdk.ecs;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ECS::Route</code>, which is used to create a custom route entry.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:46.573Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.Route")
public class Route extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.ecs.IRoute {

    protected Route(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Route(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Route(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.RouteProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Route(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.RouteProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute RouteEntryId: The ID of the route entry.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRouteEntryId() {
        return software.amazon.jsii.Kernel.get(this, "attrRouteEntryId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.RouteProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.RouteProps.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ecs.Route}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecs.Route> {
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
        private final com.aliyun.ros.cdk.ecs.RouteProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ecs.RouteProps.Builder();
        }

        /**
         * Property destinationCidrBlock: The RouteEntry's target network segment.
         * <p>
         * @return {@code this}
         * @param destinationCidrBlock Property destinationCidrBlock: The RouteEntry's target network segment. This parameter is required.
         */
        public Builder destinationCidrBlock(final java.lang.String destinationCidrBlock) {
            this.props.destinationCidrBlock(destinationCidrBlock);
            return this;
        }
        /**
         * Property destinationCidrBlock: The RouteEntry's target network segment.
         * <p>
         * @return {@code this}
         * @param destinationCidrBlock Property destinationCidrBlock: The RouteEntry's target network segment. This parameter is required.
         */
        public Builder destinationCidrBlock(final com.aliyun.ros.cdk.core.IResolvable destinationCidrBlock) {
            this.props.destinationCidrBlock(destinationCidrBlock);
            return this;
        }

        /**
         * Property routeTableId: RouteTableId of created route entry.
         * <p>
         * @return {@code this}
         * @param routeTableId Property routeTableId: RouteTableId of created route entry. This parameter is required.
         */
        public Builder routeTableId(final java.lang.String routeTableId) {
            this.props.routeTableId(routeTableId);
            return this;
        }
        /**
         * Property routeTableId: RouteTableId of created route entry.
         * <p>
         * @return {@code this}
         * @param routeTableId Property routeTableId: RouteTableId of created route entry. This parameter is required.
         */
        public Builder routeTableId(final com.aliyun.ros.cdk.core.IResolvable routeTableId) {
            this.props.routeTableId(routeTableId);
            return this;
        }

        /**
         * Property nextHopId: The route entry's next hop.
         * <p>
         * When the NextHopList is specified, the value will be ignored.
         * <p>
         * @return {@code this}
         * @param nextHopId Property nextHopId: The route entry's next hop. This parameter is required.
         */
        public Builder nextHopId(final java.lang.String nextHopId) {
            this.props.nextHopId(nextHopId);
            return this;
        }
        /**
         * Property nextHopId: The route entry's next hop.
         * <p>
         * When the NextHopList is specified, the value will be ignored.
         * <p>
         * @return {@code this}
         * @param nextHopId Property nextHopId: The route entry's next hop. This parameter is required.
         */
        public Builder nextHopId(final com.aliyun.ros.cdk.core.IResolvable nextHopId) {
            this.props.nextHopId(nextHopId);
            return this;
        }

        /**
         * Property nextHopList: The route entry's next hop list.
         * <p>
         * If router is virtual border router, the value will be ignore. The list should contain 2-4 next hop. NextHopId of each next hop must be RouterInterface that VRouter forwards to VBR.
         * <p>
         * @return {@code this}
         * @param nextHopList Property nextHopList: The route entry's next hop list. This parameter is required.
         */
        public Builder nextHopList(final com.aliyun.ros.cdk.core.IResolvable nextHopList) {
            this.props.nextHopList(nextHopList);
            return this;
        }
        /**
         * Property nextHopList: The route entry's next hop list.
         * <p>
         * If router is virtual border router, the value will be ignore. The list should contain 2-4 next hop. NextHopId of each next hop must be RouterInterface that VRouter forwards to VBR.
         * <p>
         * @return {@code this}
         * @param nextHopList Property nextHopList: The route entry's next hop list. This parameter is required.
         */
        public Builder nextHopList(final java.util.List<? extends java.lang.Object> nextHopList) {
            this.props.nextHopList(nextHopList);
            return this;
        }

        /**
         * Property nextHopType: The route entry next hop type.
         * <p>
         * Valid values:
         * Instance (default): Elastic Compute Service (ECS) instance.
         * HaVip: High Availability Virtual IP (HAVIP).
         * RouterInterface: Router interface.
         * NetworkInterface: Elastic Network Interface (ENI).
         * VpnGateway: VPN gateway.
         * IPv6Gateway: IPv6 gateway.
         * NatGateway: NAT gateway.
         * Attachment: Transit router.
         * VpcPeer: VPC peering connection.
         * Ipv4Gateway: IPv4 gateway.
         * GatewayEndpoint: Gateway endpoint.
         * Ecr: Express Connect router.
         * GatewayLoadBalancerEndpoint: Gateway Load Balancer endpoint.
         * The default value is 'Instance'.
         * If NextHopList is specified, this field will be ignored.
         * <p>
         * @return {@code this}
         * @param nextHopType Property nextHopType: The route entry next hop type. This parameter is required.
         */
        public Builder nextHopType(final java.lang.String nextHopType) {
            this.props.nextHopType(nextHopType);
            return this;
        }
        /**
         * Property nextHopType: The route entry next hop type.
         * <p>
         * Valid values:
         * Instance (default): Elastic Compute Service (ECS) instance.
         * HaVip: High Availability Virtual IP (HAVIP).
         * RouterInterface: Router interface.
         * NetworkInterface: Elastic Network Interface (ENI).
         * VpnGateway: VPN gateway.
         * IPv6Gateway: IPv6 gateway.
         * NatGateway: NAT gateway.
         * Attachment: Transit router.
         * VpcPeer: VPC peering connection.
         * Ipv4Gateway: IPv4 gateway.
         * GatewayEndpoint: Gateway endpoint.
         * Ecr: Express Connect router.
         * GatewayLoadBalancerEndpoint: Gateway Load Balancer endpoint.
         * The default value is 'Instance'.
         * If NextHopList is specified, this field will be ignored.
         * <p>
         * @return {@code this}
         * @param nextHopType Property nextHopType: The route entry next hop type. This parameter is required.
         */
        public Builder nextHopType(final com.aliyun.ros.cdk.core.IResolvable nextHopType) {
            this.props.nextHopType(nextHopType);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ecs.Route}.
         */
        @Override
        public com.aliyun.ros.cdk.ecs.Route build() {
            return new com.aliyun.ros.cdk.ecs.Route(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
