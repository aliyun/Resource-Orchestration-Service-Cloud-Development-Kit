package com.aliyun.ros.cdk.vpc;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::VPC::VpnRouteEntry</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:22.142Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RosVpnRouteEntry")
public class RosVpnRouteEntry extends com.aliyun.ros.cdk.core.RosResource {

    protected RosVpnRouteEntry(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosVpnRouteEntry(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.vpc.RosVpnRouteEntry.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosVpnRouteEntry(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.RosVpnRouteEntryProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), java.util.Objects.requireNonNull(enableResourcePropertyConstraint, "enableResourcePropertyConstraint is required") });
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> renderProperties(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> props) {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.call(this, "renderProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)), new Object[] { java.util.Objects.requireNonNull(props, "props is required") }));
    }

    /**
     * The resource type name for this resource class.
     */
    public final static java.lang.String ROS_RESOURCE_TYPE_NAME;

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrNextHop() {
        return software.amazon.jsii.Kernel.get(this, "attrNextHop", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRouteDest() {
        return software.amazon.jsii.Kernel.get(this, "attrRouteDest", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVpnGatewayId() {
        return software.amazon.jsii.Kernel.get(this, "attrVpnGatewayId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getNextHop() {
        return software.amazon.jsii.Kernel.get(this, "nextHop", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNextHop(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "nextHop", java.util.Objects.requireNonNull(value, "nextHop is required"));
    }

    /**
     */
    public void setNextHop(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "nextHop", java.util.Objects.requireNonNull(value, "nextHop is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getPublishVpc() {
        return software.amazon.jsii.Kernel.get(this, "publishVpc", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPublishVpc(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "publishVpc", java.util.Objects.requireNonNull(value, "publishVpc is required"));
    }

    /**
     */
    public void setPublishVpc(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "publishVpc", java.util.Objects.requireNonNull(value, "publishVpc is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getRouteDest() {
        return software.amazon.jsii.Kernel.get(this, "routeDest", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRouteDest(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "routeDest", java.util.Objects.requireNonNull(value, "routeDest is required"));
    }

    /**
     */
    public void setRouteDest(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "routeDest", java.util.Objects.requireNonNull(value, "routeDest is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getVpnGatewayId() {
        return software.amazon.jsii.Kernel.get(this, "vpnGatewayId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVpnGatewayId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "vpnGatewayId", java.util.Objects.requireNonNull(value, "vpnGatewayId is required"));
    }

    /**
     */
    public void setVpnGatewayId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "vpnGatewayId", java.util.Objects.requireNonNull(value, "vpnGatewayId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getWeight() {
        return software.amazon.jsii.Kernel.get(this, "weight", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setWeight(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "weight", java.util.Objects.requireNonNull(value, "weight is required"));
    }

    /**
     */
    public void setWeight(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "weight", java.util.Objects.requireNonNull(value, "weight is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getOverlayMode() {
        return software.amazon.jsii.Kernel.get(this, "overlayMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setOverlayMode(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "overlayMode", value);
    }

    /**
     */
    public void setOverlayMode(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "overlayMode", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.RosVpnRouteEntry}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.RosVpnRouteEntry> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
         * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.vpc.RosVpnRouteEntryProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.vpc.RosVpnRouteEntryProps.Builder();
        }

        /**
         * @return {@code this}
         * @param nextHop This parameter is required.
         */
        public Builder nextHop(final java.lang.String nextHop) {
            this.props.nextHop(nextHop);
            return this;
        }
        /**
         * @return {@code this}
         * @param nextHop This parameter is required.
         */
        public Builder nextHop(final com.aliyun.ros.cdk.core.IResolvable nextHop) {
            this.props.nextHop(nextHop);
            return this;
        }

        /**
         * @return {@code this}
         * @param publishVpc This parameter is required.
         */
        public Builder publishVpc(final java.lang.Boolean publishVpc) {
            this.props.publishVpc(publishVpc);
            return this;
        }
        /**
         * @return {@code this}
         * @param publishVpc This parameter is required.
         */
        public Builder publishVpc(final com.aliyun.ros.cdk.core.IResolvable publishVpc) {
            this.props.publishVpc(publishVpc);
            return this;
        }

        /**
         * @return {@code this}
         * @param routeDest This parameter is required.
         */
        public Builder routeDest(final java.lang.String routeDest) {
            this.props.routeDest(routeDest);
            return this;
        }
        /**
         * @return {@code this}
         * @param routeDest This parameter is required.
         */
        public Builder routeDest(final com.aliyun.ros.cdk.core.IResolvable routeDest) {
            this.props.routeDest(routeDest);
            return this;
        }

        /**
         * @return {@code this}
         * @param vpnGatewayId This parameter is required.
         */
        public Builder vpnGatewayId(final java.lang.String vpnGatewayId) {
            this.props.vpnGatewayId(vpnGatewayId);
            return this;
        }
        /**
         * @return {@code this}
         * @param vpnGatewayId This parameter is required.
         */
        public Builder vpnGatewayId(final com.aliyun.ros.cdk.core.IResolvable vpnGatewayId) {
            this.props.vpnGatewayId(vpnGatewayId);
            return this;
        }

        /**
         * @return {@code this}
         * @param weight This parameter is required.
         */
        public Builder weight(final java.lang.Number weight) {
            this.props.weight(weight);
            return this;
        }
        /**
         * @return {@code this}
         * @param weight This parameter is required.
         */
        public Builder weight(final com.aliyun.ros.cdk.core.IResolvable weight) {
            this.props.weight(weight);
            return this;
        }

        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * @return {@code this}
         * @param overlayMode This parameter is required.
         */
        public Builder overlayMode(final java.lang.String overlayMode) {
            this.props.overlayMode(overlayMode);
            return this;
        }
        /**
         * @return {@code this}
         * @param overlayMode This parameter is required.
         */
        public Builder overlayMode(final com.aliyun.ros.cdk.core.IResolvable overlayMode) {
            this.props.overlayMode(overlayMode);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.vpc.RosVpnRouteEntry}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.RosVpnRouteEntry build() {
            return new com.aliyun.ros.cdk.vpc.RosVpnRouteEntry(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
