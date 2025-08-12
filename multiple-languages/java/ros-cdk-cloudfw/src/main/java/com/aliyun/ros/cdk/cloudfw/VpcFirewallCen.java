package com.aliyun.ros.cdk.cloudfw;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::CLOUDFW::VpcFirewallCen</code>, which is used to create a virtual private cloud (VPC) firewall.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:44.597Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudfw.$Module.class, fqn = "@alicloud/ros-cdk-cloudfw.VpcFirewallCen")
public class VpcFirewallCen extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.cloudfw.IVpcFirewallCen {

    protected VpcFirewallCen(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected VpcFirewallCen(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public VpcFirewallCen(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudfw.VpcFirewallCenProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public VpcFirewallCen(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudfw.VpcFirewallCenProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute VpcFirewallId: The instance ID of the VPC firewall.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcFirewallId() {
        return software.amazon.jsii.Kernel.get(this, "attrVpcFirewallId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudfw.VpcFirewallCenProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cloudfw.VpcFirewallCenProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.cloudfw.VpcFirewallCen}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cloudfw.VpcFirewallCen> {
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
        private final com.aliyun.ros.cdk.cloudfw.VpcFirewallCenProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cloudfw.VpcFirewallCenProps.Builder();
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
         * Property firewallSwitch: Specifies whether to enable the VPC firewall.
         * <p>
         * Valid values:
         * open: After you create the VPC firewall, the VPC firewall is automatically enabled. This is the default value.
         * close: After you create the VPC firewall, the VPC firewall is disabled. You can call the ModifyVpcFirewallCenSwitchStatus operation to manually enable the VPC firewall.
         * <p>
         * @return {@code this}
         * @param firewallSwitch Property firewallSwitch: Specifies whether to enable the VPC firewall. This parameter is required.
         */
        public Builder firewallSwitch(final java.lang.String firewallSwitch) {
            this.props.firewallSwitch(firewallSwitch);
            return this;
        }
        /**
         * Property firewallSwitch: Specifies whether to enable the VPC firewall.
         * <p>
         * Valid values:
         * open: After you create the VPC firewall, the VPC firewall is automatically enabled. This is the default value.
         * close: After you create the VPC firewall, the VPC firewall is disabled. You can call the ModifyVpcFirewallCenSwitchStatus operation to manually enable the VPC firewall.
         * <p>
         * @return {@code this}
         * @param firewallSwitch Property firewallSwitch: Specifies whether to enable the VPC firewall. This parameter is required.
         */
        public Builder firewallSwitch(final com.aliyun.ros.cdk.core.IResolvable firewallSwitch) {
            this.props.firewallSwitch(firewallSwitch);
            return this;
        }

        /**
         * Property firewallVpcZoneId: The ID of the zone to which the vSwitch belongs.
         * <p>
         * If your service is latency-sensitive, you can specify the same zone for the vSwitch of the firewall and the vSwitch of your business VPC to minimize latency.If you do not specify a value, a zone is automatically assigned for the vSwitch.
         * <p>
         * @return {@code this}
         * @param firewallVpcZoneId Property firewallVpcZoneId: The ID of the zone to which the vSwitch belongs. This parameter is required.
         */
        public Builder firewallVpcZoneId(final java.lang.String firewallVpcZoneId) {
            this.props.firewallVpcZoneId(firewallVpcZoneId);
            return this;
        }
        /**
         * Property firewallVpcZoneId: The ID of the zone to which the vSwitch belongs.
         * <p>
         * If your service is latency-sensitive, you can specify the same zone for the vSwitch of the firewall and the vSwitch of your business VPC to minimize latency.If you do not specify a value, a zone is automatically assigned for the vSwitch.
         * <p>
         * @return {@code this}
         * @param firewallVpcZoneId Property firewallVpcZoneId: The ID of the zone to which the vSwitch belongs. This parameter is required.
         */
        public Builder firewallVpcZoneId(final com.aliyun.ros.cdk.core.IResolvable firewallVpcZoneId) {
            this.props.firewallVpcZoneId(firewallVpcZoneId);
            return this;
        }

        /**
         * Property networkInstanceId: The ID of the VPC for which you want to create the VPC firewall.
         * <p>
         * @return {@code this}
         * @param networkInstanceId Property networkInstanceId: The ID of the VPC for which you want to create the VPC firewall. This parameter is required.
         */
        public Builder networkInstanceId(final java.lang.String networkInstanceId) {
            this.props.networkInstanceId(networkInstanceId);
            return this;
        }
        /**
         * Property networkInstanceId: The ID of the VPC for which you want to create the VPC firewall.
         * <p>
         * @return {@code this}
         * @param networkInstanceId Property networkInstanceId: The ID of the VPC for which you want to create the VPC firewall. This parameter is required.
         */
        public Builder networkInstanceId(final com.aliyun.ros.cdk.core.IResolvable networkInstanceId) {
            this.props.networkInstanceId(networkInstanceId);
            return this;
        }

        /**
         * Property vpcFirewallName: The instance name of the VPC firewall.
         * <p>
         * @return {@code this}
         * @param vpcFirewallName Property vpcFirewallName: The instance name of the VPC firewall. This parameter is required.
         */
        public Builder vpcFirewallName(final java.lang.String vpcFirewallName) {
            this.props.vpcFirewallName(vpcFirewallName);
            return this;
        }
        /**
         * Property vpcFirewallName: The instance name of the VPC firewall.
         * <p>
         * @return {@code this}
         * @param vpcFirewallName Property vpcFirewallName: The instance name of the VPC firewall. This parameter is required.
         */
        public Builder vpcFirewallName(final com.aliyun.ros.cdk.core.IResolvable vpcFirewallName) {
            this.props.vpcFirewallName(vpcFirewallName);
            return this;
        }

        /**
         * Property vpcRegion: The ID of the region to which the VPC belongs.
         * <p>
         * @return {@code this}
         * @param vpcRegion Property vpcRegion: The ID of the region to which the VPC belongs. This parameter is required.
         */
        public Builder vpcRegion(final java.lang.String vpcRegion) {
            this.props.vpcRegion(vpcRegion);
            return this;
        }
        /**
         * Property vpcRegion: The ID of the region to which the VPC belongs.
         * <p>
         * @return {@code this}
         * @param vpcRegion Property vpcRegion: The ID of the region to which the VPC belongs. This parameter is required.
         */
        public Builder vpcRegion(final com.aliyun.ros.cdk.core.IResolvable vpcRegion) {
            this.props.vpcRegion(vpcRegion);
            return this;
        }

        /**
         * Property firewallVpcCidrBlock: The CIDR block of the VPC that is automatically created for the VPC firewall.
         * <p>
         * You must specify a CIDR block for the Cloud_Firewall_VPC VPC that is automatically created for the VPC firewall for traffic redirection. The subnet mask of the CIDR block must be less than or equal to 28 bits in length.If you do not specify a value, the CIDR block 10.0.0.0/8 is automatically allocated.
         * <p>
         * @return {@code this}
         * @param firewallVpcCidrBlock Property firewallVpcCidrBlock: The CIDR block of the VPC that is automatically created for the VPC firewall. This parameter is required.
         */
        public Builder firewallVpcCidrBlock(final java.lang.String firewallVpcCidrBlock) {
            this.props.firewallVpcCidrBlock(firewallVpcCidrBlock);
            return this;
        }
        /**
         * Property firewallVpcCidrBlock: The CIDR block of the VPC that is automatically created for the VPC firewall.
         * <p>
         * You must specify a CIDR block for the Cloud_Firewall_VPC VPC that is automatically created for the VPC firewall for traffic redirection. The subnet mask of the CIDR block must be less than or equal to 28 bits in length.If you do not specify a value, the CIDR block 10.0.0.0/8 is automatically allocated.
         * <p>
         * @return {@code this}
         * @param firewallVpcCidrBlock Property firewallVpcCidrBlock: The CIDR block of the VPC that is automatically created for the VPC firewall. This parameter is required.
         */
        public Builder firewallVpcCidrBlock(final com.aliyun.ros.cdk.core.IResolvable firewallVpcCidrBlock) {
            this.props.firewallVpcCidrBlock(firewallVpcCidrBlock);
            return this;
        }

        /**
         * Property firewallVSwitchCidrBlock: The CIDR block of the vSwitch that is automatically created for the VPC firewall.You must specify a CIDR block for the Cloud_Firewall_VSWITCH VPC that is automatically created for the VPC firewall for traffic redirection. The CIDR block does not conflict with your network plan. The subnet mask of the CIDR block must be less than or equal to 29 bits in length. The CIDR block of the vSwitch must be within the network segment of the VPC.If you do not specify a value, the CIDR block 10.219.219.216/29 is automatically allocated.
         * <p>
         * @return {@code this}
         * @param firewallVSwitchCidrBlock Property firewallVSwitchCidrBlock: The CIDR block of the vSwitch that is automatically created for the VPC firewall.You must specify a CIDR block for the Cloud_Firewall_VSWITCH VPC that is automatically created for the VPC firewall for traffic redirection. The CIDR block does not conflict with your network plan. The subnet mask of the CIDR block must be less than or equal to 29 bits in length. The CIDR block of the vSwitch must be within the network segment of the VPC.If you do not specify a value, the CIDR block 10.219.219.216/29 is automatically allocated. This parameter is required.
         */
        public Builder firewallVSwitchCidrBlock(final java.lang.String firewallVSwitchCidrBlock) {
            this.props.firewallVSwitchCidrBlock(firewallVSwitchCidrBlock);
            return this;
        }
        /**
         * Property firewallVSwitchCidrBlock: The CIDR block of the vSwitch that is automatically created for the VPC firewall.You must specify a CIDR block for the Cloud_Firewall_VSWITCH VPC that is automatically created for the VPC firewall for traffic redirection. The CIDR block does not conflict with your network plan. The subnet mask of the CIDR block must be less than or equal to 29 bits in length. The CIDR block of the vSwitch must be within the network segment of the VPC.If you do not specify a value, the CIDR block 10.219.219.216/29 is automatically allocated.
         * <p>
         * @return {@code this}
         * @param firewallVSwitchCidrBlock Property firewallVSwitchCidrBlock: The CIDR block of the vSwitch that is automatically created for the VPC firewall.You must specify a CIDR block for the Cloud_Firewall_VSWITCH VPC that is automatically created for the VPC firewall for traffic redirection. The CIDR block does not conflict with your network plan. The subnet mask of the CIDR block must be less than or equal to 29 bits in length. The CIDR block of the vSwitch must be within the network segment of the VPC.If you do not specify a value, the CIDR block 10.219.219.216/29 is automatically allocated. This parameter is required.
         */
        public Builder firewallVSwitchCidrBlock(final com.aliyun.ros.cdk.core.IResolvable firewallVSwitchCidrBlock) {
            this.props.firewallVSwitchCidrBlock(firewallVSwitchCidrBlock);
            return this;
        }

        /**
         * Property memberUid: The UID of the member that is managed by your Alibaba Cloud account.
         * <p>
         * @return {@code this}
         * @param memberUid Property memberUid: The UID of the member that is managed by your Alibaba Cloud account. This parameter is required.
         */
        public Builder memberUid(final java.lang.String memberUid) {
            this.props.memberUid(memberUid);
            return this;
        }
        /**
         * Property memberUid: The UID of the member that is managed by your Alibaba Cloud account.
         * <p>
         * @return {@code this}
         * @param memberUid Property memberUid: The UID of the member that is managed by your Alibaba Cloud account. This parameter is required.
         */
        public Builder memberUid(final com.aliyun.ros.cdk.core.IResolvable memberUid) {
            this.props.memberUid(memberUid);
            return this;
        }

        /**
         * Property vSwitchId: The ID of the vSwitch that is used to associate with the elastic network interface (ENI) required by the VPC firewall.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The ID of the vSwitch that is used to associate with the elastic network interface (ENI) required by the VPC firewall. This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }
        /**
         * Property vSwitchId: The ID of the vSwitch that is used to associate with the elastic network interface (ENI) required by the VPC firewall.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The ID of the vSwitch that is used to associate with the elastic network interface (ENI) required by the VPC firewall. This parameter is required.
         */
        public Builder vSwitchId(final com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cloudfw.VpcFirewallCen}.
         */
        @Override
        public com.aliyun.ros.cdk.cloudfw.VpcFirewallCen build() {
            return new com.aliyun.ros.cdk.cloudfw.VpcFirewallCen(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
