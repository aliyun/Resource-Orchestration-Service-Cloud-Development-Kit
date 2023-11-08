package com.aliyun.ros.cdk.vpc.datasource;

/**
 * A ROS resource type:  <code>DATASOURCE::VPC::RouteEntries</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-11-07T09:08:37.801Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.datasource.RouteEntries")
public class RouteEntries extends com.aliyun.ros.cdk.core.Resource {

    protected RouteEntries(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RouteEntries(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>DATASOURCE::VPC::RouteEntries</code>.
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
    public RouteEntries(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.datasource.RouteEntriesProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>DATASOURCE::VPC::RouteEntries</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public RouteEntries(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.datasource.RouteEntriesProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute RouteEntries: The list of The route entries.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRouteEntries() {
        return software.amazon.jsii.Kernel.get(this, "attrRouteEntries", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute RouteEntryIds: the list of the route entry ids.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRouteEntryIds() {
        return software.amazon.jsii.Kernel.get(this, "attrRouteEntryIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.datasource.RouteEntries}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.datasource.RouteEntries> {
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
        private final com.aliyun.ros.cdk.vpc.datasource.RouteEntriesProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.vpc.datasource.RouteEntriesProps.Builder();
        }

        /**
         * Property routeTableId: The ID of the route table.
         * <p>
         * @return {@code this}
         * @param routeTableId Property routeTableId: The ID of the route table. This parameter is required.
         */
        public Builder routeTableId(final java.lang.String routeTableId) {
            this.props.routeTableId(routeTableId);
            return this;
        }
        /**
         * Property routeTableId: The ID of the route table.
         * <p>
         * @return {@code this}
         * @param routeTableId Property routeTableId: The ID of the route table. This parameter is required.
         */
        public Builder routeTableId(final com.aliyun.ros.cdk.core.IResolvable routeTableId) {
            this.props.routeTableId(routeTableId);
            return this;
        }

        /**
         * Property destinationCidrBlock: The destination CIDR block of the route.
         * <p>
         * IPv4 and IPv6 CIDR blocks are supported.
         * <p>
         * @return {@code this}
         * @param destinationCidrBlock Property destinationCidrBlock: The destination CIDR block of the route. This parameter is required.
         */
        public Builder destinationCidrBlock(final java.lang.String destinationCidrBlock) {
            this.props.destinationCidrBlock(destinationCidrBlock);
            return this;
        }
        /**
         * Property destinationCidrBlock: The destination CIDR block of the route.
         * <p>
         * IPv4 and IPv6 CIDR blocks are supported.
         * <p>
         * @return {@code this}
         * @param destinationCidrBlock Property destinationCidrBlock: The destination CIDR block of the route. This parameter is required.
         */
        public Builder destinationCidrBlock(final com.aliyun.ros.cdk.core.IResolvable destinationCidrBlock) {
            this.props.destinationCidrBlock(destinationCidrBlock);
            return this;
        }

        /**
         * Property ipVersion: The IP version.
         * <p>
         * Valid values:
         * IPv4: IPv4
         * IPv6: IPv6
         * <p>
         * @return {@code this}
         * @param ipVersion Property ipVersion: The IP version. This parameter is required.
         */
        public Builder ipVersion(final java.lang.String ipVersion) {
            this.props.ipVersion(ipVersion);
            return this;
        }
        /**
         * Property ipVersion: The IP version.
         * <p>
         * Valid values:
         * IPv4: IPv4
         * IPv6: IPv6
         * <p>
         * @return {@code this}
         * @param ipVersion Property ipVersion: The IP version. This parameter is required.
         */
        public Builder ipVersion(final com.aliyun.ros.cdk.core.IResolvable ipVersion) {
            this.props.ipVersion(ipVersion);
            return this;
        }

        /**
         * Property nextHopId: The ID of the next hop.
         * <p>
         * @return {@code this}
         * @param nextHopId Property nextHopId: The ID of the next hop. This parameter is required.
         */
        public Builder nextHopId(final java.lang.String nextHopId) {
            this.props.nextHopId(nextHopId);
            return this;
        }
        /**
         * Property nextHopId: The ID of the next hop.
         * <p>
         * @return {@code this}
         * @param nextHopId Property nextHopId: The ID of the next hop. This parameter is required.
         */
        public Builder nextHopId(final com.aliyun.ros.cdk.core.IResolvable nextHopId) {
            this.props.nextHopId(nextHopId);
            return this;
        }

        /**
         * Property nextHopType: The type of the next hop.
         * <p>
         * Valid values:
         * Instance (default): an Elastic Compute Service (ECS) instance
         * HaVip: a high-availability virtual IP address (HAVIP)
         * VpnGateway: a VPN gateway
         * NatGateway: a NAT gateway
         * NetworkInterface: a secondary elastic network interface (ENI)
         * RouterInterface: a router interface
         * IPv6Gateway: an IPv6 gateway
         * Attachment: a transit router
         * <p>
         * @return {@code this}
         * @param nextHopType Property nextHopType: The type of the next hop. This parameter is required.
         */
        public Builder nextHopType(final java.lang.String nextHopType) {
            this.props.nextHopType(nextHopType);
            return this;
        }
        /**
         * Property nextHopType: The type of the next hop.
         * <p>
         * Valid values:
         * Instance (default): an Elastic Compute Service (ECS) instance
         * HaVip: a high-availability virtual IP address (HAVIP)
         * VpnGateway: a VPN gateway
         * NatGateway: a NAT gateway
         * NetworkInterface: a secondary elastic network interface (ENI)
         * RouterInterface: a router interface
         * IPv6Gateway: an IPv6 gateway
         * Attachment: a transit router
         * <p>
         * @return {@code this}
         * @param nextHopType Property nextHopType: The type of the next hop. This parameter is required.
         */
        public Builder nextHopType(final com.aliyun.ros.cdk.core.IResolvable nextHopType) {
            this.props.nextHopType(nextHopType);
            return this;
        }

        /**
         * Property routeEntryId: The ID of the route.
         * <p>
         * @return {@code this}
         * @param routeEntryId Property routeEntryId: The ID of the route. This parameter is required.
         */
        public Builder routeEntryId(final java.lang.String routeEntryId) {
            this.props.routeEntryId(routeEntryId);
            return this;
        }
        /**
         * Property routeEntryId: The ID of the route.
         * <p>
         * @return {@code this}
         * @param routeEntryId Property routeEntryId: The ID of the route. This parameter is required.
         */
        public Builder routeEntryId(final com.aliyun.ros.cdk.core.IResolvable routeEntryId) {
            this.props.routeEntryId(routeEntryId);
            return this;
        }

        /**
         * Property routeEntryName: The name of the route.
         * <p>
         * @return {@code this}
         * @param routeEntryName Property routeEntryName: The name of the route. This parameter is required.
         */
        public Builder routeEntryName(final java.lang.String routeEntryName) {
            this.props.routeEntryName(routeEntryName);
            return this;
        }
        /**
         * Property routeEntryName: The name of the route.
         * <p>
         * @return {@code this}
         * @param routeEntryName Property routeEntryName: The name of the route. This parameter is required.
         */
        public Builder routeEntryName(final com.aliyun.ros.cdk.core.IResolvable routeEntryName) {
            this.props.routeEntryName(routeEntryName);
            return this;
        }

        /**
         * Property routeEntryType: The type of the route.
         * <p>
         * Valid values:
         * Custom: a custom route
         * System: a system route
         * BGP: a Border Gateway Protocol (BGP) route
         * CEN: a Cloud Enterprise Network (CEN) route
         * <p>
         * @return {@code this}
         * @param routeEntryType Property routeEntryType: The type of the route. This parameter is required.
         */
        public Builder routeEntryType(final java.lang.String routeEntryType) {
            this.props.routeEntryType(routeEntryType);
            return this;
        }
        /**
         * Property routeEntryType: The type of the route.
         * <p>
         * Valid values:
         * Custom: a custom route
         * System: a system route
         * BGP: a Border Gateway Protocol (BGP) route
         * CEN: a Cloud Enterprise Network (CEN) route
         * <p>
         * @return {@code this}
         * @param routeEntryType Property routeEntryType: The type of the route. This parameter is required.
         */
        public Builder routeEntryType(final com.aliyun.ros.cdk.core.IResolvable routeEntryType) {
            this.props.routeEntryType(routeEntryType);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.vpc.datasource.RouteEntries}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.datasource.RouteEntries build() {
            return new com.aliyun.ros.cdk.vpc.datasource.RouteEntries(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
