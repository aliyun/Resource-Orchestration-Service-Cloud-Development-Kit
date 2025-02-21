package com.aliyun.ros.cdk.cloudfw;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::CLOUDFW::TrFirewall</code>, which is used to create a virtual private cloud (VPC) firewall for a transit router.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:12.856Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudfw.$Module.class, fqn = "@alicloud/ros-cdk-cloudfw.RosTrFirewall")
public class RosTrFirewall extends com.aliyun.ros.cdk.core.RosResource {

    protected RosTrFirewall(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosTrFirewall(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.cloudfw.RosTrFirewall.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosTrFirewall(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudfw.RosTrFirewallProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrFirewallId() {
        return software.amazon.jsii.Kernel.get(this, "attrFirewallId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getCenId() {
        return software.amazon.jsii.Kernel.get(this, "cenId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCenId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "cenId", java.util.Objects.requireNonNull(value, "cenId is required"));
    }

    /**
     */
    public void setCenId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "cenId", java.util.Objects.requireNonNull(value, "cenId is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getFirewallName() {
        return software.amazon.jsii.Kernel.get(this, "firewallName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFirewallName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "firewallName", java.util.Objects.requireNonNull(value, "firewallName is required"));
    }

    /**
     */
    public void setFirewallName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "firewallName", java.util.Objects.requireNonNull(value, "firewallName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getRegionNo() {
        return software.amazon.jsii.Kernel.get(this, "regionNo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRegionNo(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "regionNo", java.util.Objects.requireNonNull(value, "regionNo is required"));
    }

    /**
     */
    public void setRegionNo(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "regionNo", java.util.Objects.requireNonNull(value, "regionNo is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getRouteMode() {
        return software.amazon.jsii.Kernel.get(this, "routeMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRouteMode(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "routeMode", java.util.Objects.requireNonNull(value, "routeMode is required"));
    }

    /**
     */
    public void setRouteMode(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "routeMode", java.util.Objects.requireNonNull(value, "routeMode is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getTransitRouterId() {
        return software.amazon.jsii.Kernel.get(this, "transitRouterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTransitRouterId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "transitRouterId", java.util.Objects.requireNonNull(value, "transitRouterId is required"));
    }

    /**
     */
    public void setTransitRouterId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "transitRouterId", java.util.Objects.requireNonNull(value, "transitRouterId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getFirewallDescription() {
        return software.amazon.jsii.Kernel.get(this, "firewallDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFirewallDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "firewallDescription", value);
    }

    /**
     */
    public void setFirewallDescription(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "firewallDescription", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getFirewallSubnetCidr() {
        return software.amazon.jsii.Kernel.get(this, "firewallSubnetCidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFirewallSubnetCidr(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "firewallSubnetCidr", value);
    }

    /**
     */
    public void setFirewallSubnetCidr(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "firewallSubnetCidr", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getFirewallVpcCidr() {
        return software.amazon.jsii.Kernel.get(this, "firewallVpcCidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFirewallVpcCidr(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "firewallVpcCidr", value);
    }

    /**
     */
    public void setFirewallVpcCidr(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "firewallVpcCidr", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getFirewallVpcId() {
        return software.amazon.jsii.Kernel.get(this, "firewallVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFirewallVpcId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "firewallVpcId", value);
    }

    /**
     */
    public void setFirewallVpcId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "firewallVpcId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getFirewallVswitchId() {
        return software.amazon.jsii.Kernel.get(this, "firewallVswitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFirewallVswitchId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "firewallVswitchId", value);
    }

    /**
     */
    public void setFirewallVswitchId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "firewallVswitchId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTrAttachmentMasterCidr() {
        return software.amazon.jsii.Kernel.get(this, "trAttachmentMasterCidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTrAttachmentMasterCidr(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "trAttachmentMasterCidr", value);
    }

    /**
     */
    public void setTrAttachmentMasterCidr(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "trAttachmentMasterCidr", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTrAttachmentMasterZone() {
        return software.amazon.jsii.Kernel.get(this, "trAttachmentMasterZone", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTrAttachmentMasterZone(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "trAttachmentMasterZone", value);
    }

    /**
     */
    public void setTrAttachmentMasterZone(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "trAttachmentMasterZone", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTrAttachmentSlaveCidr() {
        return software.amazon.jsii.Kernel.get(this, "trAttachmentSlaveCidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTrAttachmentSlaveCidr(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "trAttachmentSlaveCidr", value);
    }

    /**
     */
    public void setTrAttachmentSlaveCidr(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "trAttachmentSlaveCidr", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTrAttachmentSlaveZone() {
        return software.amazon.jsii.Kernel.get(this, "trAttachmentSlaveZone", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTrAttachmentSlaveZone(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "trAttachmentSlaveZone", value);
    }

    /**
     */
    public void setTrAttachmentSlaveZone(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "trAttachmentSlaveZone", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cloudfw.RosTrFirewall}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cloudfw.RosTrFirewall> {
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
        private final com.aliyun.ros.cdk.cloudfw.RosTrFirewallProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cloudfw.RosTrFirewallProps.Builder();
        }

        /**
         * @return {@code this}
         * @param cenId This parameter is required.
         */
        public Builder cenId(final java.lang.String cenId) {
            this.props.cenId(cenId);
            return this;
        }
        /**
         * @return {@code this}
         * @param cenId This parameter is required.
         */
        public Builder cenId(final com.aliyun.ros.cdk.core.IResolvable cenId) {
            this.props.cenId(cenId);
            return this;
        }

        /**
         * @return {@code this}
         * @param firewallName This parameter is required.
         */
        public Builder firewallName(final java.lang.String firewallName) {
            this.props.firewallName(firewallName);
            return this;
        }
        /**
         * @return {@code this}
         * @param firewallName This parameter is required.
         */
        public Builder firewallName(final com.aliyun.ros.cdk.core.IResolvable firewallName) {
            this.props.firewallName(firewallName);
            return this;
        }

        /**
         * @return {@code this}
         * @param regionNo This parameter is required.
         */
        public Builder regionNo(final java.lang.String regionNo) {
            this.props.regionNo(regionNo);
            return this;
        }
        /**
         * @return {@code this}
         * @param regionNo This parameter is required.
         */
        public Builder regionNo(final com.aliyun.ros.cdk.core.IResolvable regionNo) {
            this.props.regionNo(regionNo);
            return this;
        }

        /**
         * @return {@code this}
         * @param routeMode This parameter is required.
         */
        public Builder routeMode(final java.lang.String routeMode) {
            this.props.routeMode(routeMode);
            return this;
        }
        /**
         * @return {@code this}
         * @param routeMode This parameter is required.
         */
        public Builder routeMode(final com.aliyun.ros.cdk.core.IResolvable routeMode) {
            this.props.routeMode(routeMode);
            return this;
        }

        /**
         * @return {@code this}
         * @param transitRouterId This parameter is required.
         */
        public Builder transitRouterId(final java.lang.String transitRouterId) {
            this.props.transitRouterId(transitRouterId);
            return this;
        }
        /**
         * @return {@code this}
         * @param transitRouterId This parameter is required.
         */
        public Builder transitRouterId(final com.aliyun.ros.cdk.core.IResolvable transitRouterId) {
            this.props.transitRouterId(transitRouterId);
            return this;
        }

        /**
         * @return {@code this}
         * @param firewallDescription This parameter is required.
         */
        public Builder firewallDescription(final java.lang.String firewallDescription) {
            this.props.firewallDescription(firewallDescription);
            return this;
        }
        /**
         * @return {@code this}
         * @param firewallDescription This parameter is required.
         */
        public Builder firewallDescription(final com.aliyun.ros.cdk.core.IResolvable firewallDescription) {
            this.props.firewallDescription(firewallDescription);
            return this;
        }

        /**
         * @return {@code this}
         * @param firewallSubnetCidr This parameter is required.
         */
        public Builder firewallSubnetCidr(final java.lang.String firewallSubnetCidr) {
            this.props.firewallSubnetCidr(firewallSubnetCidr);
            return this;
        }
        /**
         * @return {@code this}
         * @param firewallSubnetCidr This parameter is required.
         */
        public Builder firewallSubnetCidr(final com.aliyun.ros.cdk.core.IResolvable firewallSubnetCidr) {
            this.props.firewallSubnetCidr(firewallSubnetCidr);
            return this;
        }

        /**
         * @return {@code this}
         * @param firewallVpcCidr This parameter is required.
         */
        public Builder firewallVpcCidr(final java.lang.String firewallVpcCidr) {
            this.props.firewallVpcCidr(firewallVpcCidr);
            return this;
        }
        /**
         * @return {@code this}
         * @param firewallVpcCidr This parameter is required.
         */
        public Builder firewallVpcCidr(final com.aliyun.ros.cdk.core.IResolvable firewallVpcCidr) {
            this.props.firewallVpcCidr(firewallVpcCidr);
            return this;
        }

        /**
         * @return {@code this}
         * @param firewallVpcId This parameter is required.
         */
        public Builder firewallVpcId(final java.lang.String firewallVpcId) {
            this.props.firewallVpcId(firewallVpcId);
            return this;
        }
        /**
         * @return {@code this}
         * @param firewallVpcId This parameter is required.
         */
        public Builder firewallVpcId(final com.aliyun.ros.cdk.core.IResolvable firewallVpcId) {
            this.props.firewallVpcId(firewallVpcId);
            return this;
        }

        /**
         * @return {@code this}
         * @param firewallVswitchId This parameter is required.
         */
        public Builder firewallVswitchId(final java.lang.String firewallVswitchId) {
            this.props.firewallVswitchId(firewallVswitchId);
            return this;
        }
        /**
         * @return {@code this}
         * @param firewallVswitchId This parameter is required.
         */
        public Builder firewallVswitchId(final com.aliyun.ros.cdk.core.IResolvable firewallVswitchId) {
            this.props.firewallVswitchId(firewallVswitchId);
            return this;
        }

        /**
         * @return {@code this}
         * @param trAttachmentMasterCidr This parameter is required.
         */
        public Builder trAttachmentMasterCidr(final java.lang.String trAttachmentMasterCidr) {
            this.props.trAttachmentMasterCidr(trAttachmentMasterCidr);
            return this;
        }
        /**
         * @return {@code this}
         * @param trAttachmentMasterCidr This parameter is required.
         */
        public Builder trAttachmentMasterCidr(final com.aliyun.ros.cdk.core.IResolvable trAttachmentMasterCidr) {
            this.props.trAttachmentMasterCidr(trAttachmentMasterCidr);
            return this;
        }

        /**
         * @return {@code this}
         * @param trAttachmentMasterZone This parameter is required.
         */
        public Builder trAttachmentMasterZone(final java.lang.String trAttachmentMasterZone) {
            this.props.trAttachmentMasterZone(trAttachmentMasterZone);
            return this;
        }
        /**
         * @return {@code this}
         * @param trAttachmentMasterZone This parameter is required.
         */
        public Builder trAttachmentMasterZone(final com.aliyun.ros.cdk.core.IResolvable trAttachmentMasterZone) {
            this.props.trAttachmentMasterZone(trAttachmentMasterZone);
            return this;
        }

        /**
         * @return {@code this}
         * @param trAttachmentSlaveCidr This parameter is required.
         */
        public Builder trAttachmentSlaveCidr(final java.lang.String trAttachmentSlaveCidr) {
            this.props.trAttachmentSlaveCidr(trAttachmentSlaveCidr);
            return this;
        }
        /**
         * @return {@code this}
         * @param trAttachmentSlaveCidr This parameter is required.
         */
        public Builder trAttachmentSlaveCidr(final com.aliyun.ros.cdk.core.IResolvable trAttachmentSlaveCidr) {
            this.props.trAttachmentSlaveCidr(trAttachmentSlaveCidr);
            return this;
        }

        /**
         * @return {@code this}
         * @param trAttachmentSlaveZone This parameter is required.
         */
        public Builder trAttachmentSlaveZone(final java.lang.String trAttachmentSlaveZone) {
            this.props.trAttachmentSlaveZone(trAttachmentSlaveZone);
            return this;
        }
        /**
         * @return {@code this}
         * @param trAttachmentSlaveZone This parameter is required.
         */
        public Builder trAttachmentSlaveZone(final com.aliyun.ros.cdk.core.IResolvable trAttachmentSlaveZone) {
            this.props.trAttachmentSlaveZone(trAttachmentSlaveZone);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cloudfw.RosTrFirewall}.
         */
        @Override
        public com.aliyun.ros.cdk.cloudfw.RosTrFirewall build() {
            return new com.aliyun.ros.cdk.cloudfw.RosTrFirewall(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
