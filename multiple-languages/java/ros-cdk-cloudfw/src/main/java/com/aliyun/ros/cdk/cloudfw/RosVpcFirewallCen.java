package com.aliyun.ros.cdk.cloudfw;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::CLOUDFW::VpcFirewallCen</code>, which is used to create a virtual private cloud (VPC) firewall.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:12.864Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudfw.$Module.class, fqn = "@alicloud/ros-cdk-cloudfw.RosVpcFirewallCen")
public class RosVpcFirewallCen extends com.aliyun.ros.cdk.core.RosResource {

    protected RosVpcFirewallCen(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosVpcFirewallCen(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.cloudfw.RosVpcFirewallCen.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosVpcFirewallCen(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudfw.RosVpcFirewallCenProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVpcFirewallId() {
        return software.amazon.jsii.Kernel.get(this, "attrVpcFirewallId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getFirewallSwitch() {
        return software.amazon.jsii.Kernel.get(this, "firewallSwitch", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFirewallSwitch(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "firewallSwitch", java.util.Objects.requireNonNull(value, "firewallSwitch is required"));
    }

    /**
     */
    public void setFirewallSwitch(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "firewallSwitch", java.util.Objects.requireNonNull(value, "firewallSwitch is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getFirewallVpcZoneId() {
        return software.amazon.jsii.Kernel.get(this, "firewallVpcZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFirewallVpcZoneId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "firewallVpcZoneId", java.util.Objects.requireNonNull(value, "firewallVpcZoneId is required"));
    }

    /**
     */
    public void setFirewallVpcZoneId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "firewallVpcZoneId", java.util.Objects.requireNonNull(value, "firewallVpcZoneId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getNetworkInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "networkInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNetworkInstanceId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "networkInstanceId", java.util.Objects.requireNonNull(value, "networkInstanceId is required"));
    }

    /**
     */
    public void setNetworkInstanceId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "networkInstanceId", java.util.Objects.requireNonNull(value, "networkInstanceId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getVpcFirewallName() {
        return software.amazon.jsii.Kernel.get(this, "vpcFirewallName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVpcFirewallName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "vpcFirewallName", java.util.Objects.requireNonNull(value, "vpcFirewallName is required"));
    }

    /**
     */
    public void setVpcFirewallName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "vpcFirewallName", java.util.Objects.requireNonNull(value, "vpcFirewallName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getVpcRegion() {
        return software.amazon.jsii.Kernel.get(this, "vpcRegion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVpcRegion(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "vpcRegion", java.util.Objects.requireNonNull(value, "vpcRegion is required"));
    }

    /**
     */
    public void setVpcRegion(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "vpcRegion", java.util.Objects.requireNonNull(value, "vpcRegion is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getFirewallVpcCidrBlock() {
        return software.amazon.jsii.Kernel.get(this, "firewallVpcCidrBlock", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFirewallVpcCidrBlock(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "firewallVpcCidrBlock", value);
    }

    /**
     */
    public void setFirewallVpcCidrBlock(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "firewallVpcCidrBlock", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getFirewallVSwitchCidrBlock() {
        return software.amazon.jsii.Kernel.get(this, "firewallVSwitchCidrBlock", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFirewallVSwitchCidrBlock(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "firewallVSwitchCidrBlock", value);
    }

    /**
     */
    public void setFirewallVSwitchCidrBlock(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "firewallVSwitchCidrBlock", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMemberUid() {
        return software.amazon.jsii.Kernel.get(this, "memberUid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMemberUid(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "memberUid", value);
    }

    /**
     */
    public void setMemberUid(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "memberUid", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchId() {
        return software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVSwitchId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "vSwitchId", value);
    }

    /**
     */
    public void setVSwitchId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "vSwitchId", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cloudfw.RosVpcFirewallCen}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cloudfw.RosVpcFirewallCen> {
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
        private final com.aliyun.ros.cdk.cloudfw.RosVpcFirewallCenProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cloudfw.RosVpcFirewallCenProps.Builder();
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
         * @param firewallSwitch This parameter is required.
         */
        public Builder firewallSwitch(final java.lang.String firewallSwitch) {
            this.props.firewallSwitch(firewallSwitch);
            return this;
        }
        /**
         * @return {@code this}
         * @param firewallSwitch This parameter is required.
         */
        public Builder firewallSwitch(final com.aliyun.ros.cdk.core.IResolvable firewallSwitch) {
            this.props.firewallSwitch(firewallSwitch);
            return this;
        }

        /**
         * @return {@code this}
         * @param firewallVpcZoneId This parameter is required.
         */
        public Builder firewallVpcZoneId(final java.lang.String firewallVpcZoneId) {
            this.props.firewallVpcZoneId(firewallVpcZoneId);
            return this;
        }
        /**
         * @return {@code this}
         * @param firewallVpcZoneId This parameter is required.
         */
        public Builder firewallVpcZoneId(final com.aliyun.ros.cdk.core.IResolvable firewallVpcZoneId) {
            this.props.firewallVpcZoneId(firewallVpcZoneId);
            return this;
        }

        /**
         * @return {@code this}
         * @param networkInstanceId This parameter is required.
         */
        public Builder networkInstanceId(final java.lang.String networkInstanceId) {
            this.props.networkInstanceId(networkInstanceId);
            return this;
        }
        /**
         * @return {@code this}
         * @param networkInstanceId This parameter is required.
         */
        public Builder networkInstanceId(final com.aliyun.ros.cdk.core.IResolvable networkInstanceId) {
            this.props.networkInstanceId(networkInstanceId);
            return this;
        }

        /**
         * @return {@code this}
         * @param vpcFirewallName This parameter is required.
         */
        public Builder vpcFirewallName(final java.lang.String vpcFirewallName) {
            this.props.vpcFirewallName(vpcFirewallName);
            return this;
        }
        /**
         * @return {@code this}
         * @param vpcFirewallName This parameter is required.
         */
        public Builder vpcFirewallName(final com.aliyun.ros.cdk.core.IResolvable vpcFirewallName) {
            this.props.vpcFirewallName(vpcFirewallName);
            return this;
        }

        /**
         * @return {@code this}
         * @param vpcRegion This parameter is required.
         */
        public Builder vpcRegion(final java.lang.String vpcRegion) {
            this.props.vpcRegion(vpcRegion);
            return this;
        }
        /**
         * @return {@code this}
         * @param vpcRegion This parameter is required.
         */
        public Builder vpcRegion(final com.aliyun.ros.cdk.core.IResolvable vpcRegion) {
            this.props.vpcRegion(vpcRegion);
            return this;
        }

        /**
         * @return {@code this}
         * @param firewallVpcCidrBlock This parameter is required.
         */
        public Builder firewallVpcCidrBlock(final java.lang.String firewallVpcCidrBlock) {
            this.props.firewallVpcCidrBlock(firewallVpcCidrBlock);
            return this;
        }
        /**
         * @return {@code this}
         * @param firewallVpcCidrBlock This parameter is required.
         */
        public Builder firewallVpcCidrBlock(final com.aliyun.ros.cdk.core.IResolvable firewallVpcCidrBlock) {
            this.props.firewallVpcCidrBlock(firewallVpcCidrBlock);
            return this;
        }

        /**
         * @return {@code this}
         * @param firewallVSwitchCidrBlock This parameter is required.
         */
        public Builder firewallVSwitchCidrBlock(final java.lang.String firewallVSwitchCidrBlock) {
            this.props.firewallVSwitchCidrBlock(firewallVSwitchCidrBlock);
            return this;
        }
        /**
         * @return {@code this}
         * @param firewallVSwitchCidrBlock This parameter is required.
         */
        public Builder firewallVSwitchCidrBlock(final com.aliyun.ros.cdk.core.IResolvable firewallVSwitchCidrBlock) {
            this.props.firewallVSwitchCidrBlock(firewallVSwitchCidrBlock);
            return this;
        }

        /**
         * @return {@code this}
         * @param memberUid This parameter is required.
         */
        public Builder memberUid(final java.lang.String memberUid) {
            this.props.memberUid(memberUid);
            return this;
        }
        /**
         * @return {@code this}
         * @param memberUid This parameter is required.
         */
        public Builder memberUid(final com.aliyun.ros.cdk.core.IResolvable memberUid) {
            this.props.memberUid(memberUid);
            return this;
        }

        /**
         * @return {@code this}
         * @param vSwitchId This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }
        /**
         * @return {@code this}
         * @param vSwitchId This parameter is required.
         */
        public Builder vSwitchId(final com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cloudfw.RosVpcFirewallCen}.
         */
        @Override
        public com.aliyun.ros.cdk.cloudfw.RosVpcFirewallCen build() {
            return new com.aliyun.ros.cdk.cloudfw.RosVpcFirewallCen(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
