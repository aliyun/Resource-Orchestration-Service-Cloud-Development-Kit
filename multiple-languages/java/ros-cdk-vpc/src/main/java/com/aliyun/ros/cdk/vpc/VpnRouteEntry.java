package com.aliyun.ros.cdk.vpc;

/**
 * A ROS resource type:  <code>ALIYUN::VPC::VpnRouteEntry</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.84.0 (build 5404dcf)", date = "2023-06-28T08:22:30.984Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.VpnRouteEntry")
public class VpnRouteEntry extends com.aliyun.ros.cdk.core.Resource {

    protected VpnRouteEntry(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected VpnRouteEntry(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>ALIYUN::VPC::VpnRouteEntry</code>.
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
    public VpnRouteEntry(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.VpnRouteEntryProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>ALIYUN::VPC::VpnRouteEntry</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public VpnRouteEntry(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.VpnRouteEntryProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute NextHop: The next hop of the destination route entry.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrNextHop() {
        return software.amazon.jsii.Kernel.get(this, "attrNextHop", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute RouteDest: The destination CIDR block of the destination route.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRouteDest() {
        return software.amazon.jsii.Kernel.get(this, "attrRouteDest", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute VpnGatewayId: The ID of the VPN Gateway.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVpnGatewayId() {
        return software.amazon.jsii.Kernel.get(this, "attrVpnGatewayId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.VpnRouteEntry}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.VpnRouteEntry> {
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
        private final com.aliyun.ros.cdk.vpc.VpnRouteEntryProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.vpc.VpnRouteEntryProps.Builder();
        }

        /**
         * Property nextHop: The next hop of the destination route entry.
         * <p>
         * @return {@code this}
         * @param nextHop Property nextHop: The next hop of the destination route entry. This parameter is required.
         */
        public Builder nextHop(final java.lang.String nextHop) {
            this.props.nextHop(nextHop);
            return this;
        }
        /**
         * Property nextHop: The next hop of the destination route entry.
         * <p>
         * @return {@code this}
         * @param nextHop Property nextHop: The next hop of the destination route entry. This parameter is required.
         */
        public Builder nextHop(final com.aliyun.ros.cdk.core.IResolvable nextHop) {
            this.props.nextHop(nextHop);
            return this;
        }

        /**
         * Property publishVpc: Indicates whether to publish the destination route to the VPC.
         * <p>
         * Valid values:
         * true: Publish the destination route to the VPC.
         * false: Do not publish the destination route to the VPC.
         * <p>
         * @return {@code this}
         * @param publishVpc Property publishVpc: Indicates whether to publish the destination route to the VPC. This parameter is required.
         */
        public Builder publishVpc(final java.lang.Boolean publishVpc) {
            this.props.publishVpc(publishVpc);
            return this;
        }
        /**
         * Property publishVpc: Indicates whether to publish the destination route to the VPC.
         * <p>
         * Valid values:
         * true: Publish the destination route to the VPC.
         * false: Do not publish the destination route to the VPC.
         * <p>
         * @return {@code this}
         * @param publishVpc Property publishVpc: Indicates whether to publish the destination route to the VPC. This parameter is required.
         */
        public Builder publishVpc(final com.aliyun.ros.cdk.core.IResolvable publishVpc) {
            this.props.publishVpc(publishVpc);
            return this;
        }

        /**
         * Property routeDest: The destination CIDR block of the destination route.
         * <p>
         * @return {@code this}
         * @param routeDest Property routeDest: The destination CIDR block of the destination route. This parameter is required.
         */
        public Builder routeDest(final java.lang.String routeDest) {
            this.props.routeDest(routeDest);
            return this;
        }
        /**
         * Property routeDest: The destination CIDR block of the destination route.
         * <p>
         * @return {@code this}
         * @param routeDest Property routeDest: The destination CIDR block of the destination route. This parameter is required.
         */
        public Builder routeDest(final com.aliyun.ros.cdk.core.IResolvable routeDest) {
            this.props.routeDest(routeDest);
            return this;
        }

        /**
         * Property vpnGatewayId: The ID of the VPN Gateway.
         * <p>
         * @return {@code this}
         * @param vpnGatewayId Property vpnGatewayId: The ID of the VPN Gateway. This parameter is required.
         */
        public Builder vpnGatewayId(final java.lang.String vpnGatewayId) {
            this.props.vpnGatewayId(vpnGatewayId);
            return this;
        }
        /**
         * Property vpnGatewayId: The ID of the VPN Gateway.
         * <p>
         * @return {@code this}
         * @param vpnGatewayId Property vpnGatewayId: The ID of the VPN Gateway. This parameter is required.
         */
        public Builder vpnGatewayId(final com.aliyun.ros.cdk.core.IResolvable vpnGatewayId) {
            this.props.vpnGatewayId(vpnGatewayId);
            return this;
        }

        /**
         * Property weight: The weight of the destination route.
         * <p>
         * Valid values: 0|100.
         * <p>
         * @return {@code this}
         * @param weight Property weight: The weight of the destination route. This parameter is required.
         */
        public Builder weight(final java.lang.Number weight) {
            this.props.weight(weight);
            return this;
        }
        /**
         * Property weight: The weight of the destination route.
         * <p>
         * Valid values: 0|100.
         * <p>
         * @return {@code this}
         * @param weight Property weight: The weight of the destination route. This parameter is required.
         */
        public Builder weight(final com.aliyun.ros.cdk.core.IResolvable weight) {
            this.props.weight(weight);
            return this;
        }

        /**
         * Property description: The description of the VPN destination route.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the VPN destination route. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of the VPN destination route.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the VPN destination route. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property overlayMode: The overlay mode.
         * <p>
         * @return {@code this}
         * @param overlayMode Property overlayMode: The overlay mode. This parameter is required.
         */
        public Builder overlayMode(final java.lang.String overlayMode) {
            this.props.overlayMode(overlayMode);
            return this;
        }
        /**
         * Property overlayMode: The overlay mode.
         * <p>
         * @return {@code this}
         * @param overlayMode Property overlayMode: The overlay mode. This parameter is required.
         */
        public Builder overlayMode(final com.aliyun.ros.cdk.core.IResolvable overlayMode) {
            this.props.overlayMode(overlayMode);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.vpc.VpnRouteEntry}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.VpnRouteEntry build() {
            return new com.aliyun.ros.cdk.vpc.VpnRouteEntry(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
