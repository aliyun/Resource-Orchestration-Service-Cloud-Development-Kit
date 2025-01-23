package com.aliyun.ros.cdk.cloudfw;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::CLOUDFW::TrFirewall</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:35.782Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudfw.$Module.class, fqn = "@alicloud/ros-cdk-cloudfw.TrFirewall")
public class TrFirewall extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.cloudfw.ITrFirewall {

    protected TrFirewall(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected TrFirewall(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public TrFirewall(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudfw.TrFirewallProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public TrFirewall(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudfw.TrFirewallProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute FirewallId: The instance ID of the VPC firewall.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrFirewallId() {
        return software.amazon.jsii.Kernel.get(this, "attrFirewallId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudfw.TrFirewallProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cloudfw.TrFirewallProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.cloudfw.TrFirewall}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cloudfw.TrFirewall> {
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
        private final com.aliyun.ros.cdk.cloudfw.TrFirewallProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cloudfw.TrFirewallProps.Builder();
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
         * Property firewallName: The name of the firewall.
         * <p>
         * @return {@code this}
         * @param firewallName Property firewallName: The name of the firewall. This parameter is required.
         */
        public Builder firewallName(final java.lang.String firewallName) {
            this.props.firewallName(firewallName);
            return this;
        }
        /**
         * Property firewallName: The name of the firewall.
         * <p>
         * @return {@code this}
         * @param firewallName Property firewallName: The name of the firewall. This parameter is required.
         */
        public Builder firewallName(final com.aliyun.ros.cdk.core.IResolvable firewallName) {
            this.props.firewallName(firewallName);
            return this;
        }

        /**
         * Property regionNo: The region ID of the route router.
         * <p>
         * @return {@code this}
         * @param regionNo Property regionNo: The region ID of the route router. This parameter is required.
         */
        public Builder regionNo(final java.lang.String regionNo) {
            this.props.regionNo(regionNo);
            return this;
        }
        /**
         * Property regionNo: The region ID of the route router.
         * <p>
         * @return {@code this}
         * @param regionNo Property regionNo: The region ID of the route router. This parameter is required.
         */
        public Builder regionNo(final com.aliyun.ros.cdk.core.IResolvable regionNo) {
            this.props.regionNo(regionNo);
            return this;
        }

        /**
         * Property routeMode: The routing mode of the VPC firewall.
         * <p>
         * Valid values:
         * managed: automatic mode
         * manual: manual mode
         * <p>
         * @return {@code this}
         * @param routeMode Property routeMode: The routing mode of the VPC firewall. This parameter is required.
         */
        public Builder routeMode(final java.lang.String routeMode) {
            this.props.routeMode(routeMode);
            return this;
        }
        /**
         * Property routeMode: The routing mode of the VPC firewall.
         * <p>
         * Valid values:
         * managed: automatic mode
         * manual: manual mode
         * <p>
         * @return {@code this}
         * @param routeMode Property routeMode: The routing mode of the VPC firewall. This parameter is required.
         */
        public Builder routeMode(final com.aliyun.ros.cdk.core.IResolvable routeMode) {
            this.props.routeMode(routeMode);
            return this;
        }

        /**
         * Property transitRouterId: The ID of the transit router.
         * <p>
         * @return {@code this}
         * @param transitRouterId Property transitRouterId: The ID of the transit router. This parameter is required.
         */
        public Builder transitRouterId(final java.lang.String transitRouterId) {
            this.props.transitRouterId(transitRouterId);
            return this;
        }
        /**
         * Property transitRouterId: The ID of the transit router.
         * <p>
         * @return {@code this}
         * @param transitRouterId Property transitRouterId: The ID of the transit router. This parameter is required.
         */
        public Builder transitRouterId(final com.aliyun.ros.cdk.core.IResolvable transitRouterId) {
            this.props.transitRouterId(transitRouterId);
            return this;
        }

        /**
         * Property firewallDescription: The description of the firewall.
         * <p>
         * @return {@code this}
         * @param firewallDescription Property firewallDescription: The description of the firewall. This parameter is required.
         */
        public Builder firewallDescription(final java.lang.String firewallDescription) {
            this.props.firewallDescription(firewallDescription);
            return this;
        }
        /**
         * Property firewallDescription: The description of the firewall.
         * <p>
         * @return {@code this}
         * @param firewallDescription Property firewallDescription: The description of the firewall. This parameter is required.
         */
        public Builder firewallDescription(final com.aliyun.ros.cdk.core.IResolvable firewallDescription) {
            this.props.firewallDescription(firewallDescription);
            return this;
        }

        /**
         * Property firewallSubnetCidr: The subnet CIDR block of the VPC in which the ENI of the firewall is stored in automatic mode.
         * <p>
         * @return {@code this}
         * @param firewallSubnetCidr Property firewallSubnetCidr: The subnet CIDR block of the VPC in which the ENI of the firewall is stored in automatic mode. This parameter is required.
         */
        public Builder firewallSubnetCidr(final java.lang.String firewallSubnetCidr) {
            this.props.firewallSubnetCidr(firewallSubnetCidr);
            return this;
        }
        /**
         * Property firewallSubnetCidr: The subnet CIDR block of the VPC in which the ENI of the firewall is stored in automatic mode.
         * <p>
         * @return {@code this}
         * @param firewallSubnetCidr Property firewallSubnetCidr: The subnet CIDR block of the VPC in which the ENI of the firewall is stored in automatic mode. This parameter is required.
         */
        public Builder firewallSubnetCidr(final com.aliyun.ros.cdk.core.IResolvable firewallSubnetCidr) {
            this.props.firewallSubnetCidr(firewallSubnetCidr);
            return this;
        }

        /**
         * Property firewallVpcCidr: The CIDR block that is allocated to the VPC created for the VPC firewall in automatic mode.
         * <p>
         * @return {@code this}
         * @param firewallVpcCidr Property firewallVpcCidr: The CIDR block that is allocated to the VPC created for the VPC firewall in automatic mode. This parameter is required.
         */
        public Builder firewallVpcCidr(final java.lang.String firewallVpcCidr) {
            this.props.firewallVpcCidr(firewallVpcCidr);
            return this;
        }
        /**
         * Property firewallVpcCidr: The CIDR block that is allocated to the VPC created for the VPC firewall in automatic mode.
         * <p>
         * @return {@code this}
         * @param firewallVpcCidr Property firewallVpcCidr: The CIDR block that is allocated to the VPC created for the VPC firewall in automatic mode. This parameter is required.
         */
        public Builder firewallVpcCidr(final com.aliyun.ros.cdk.core.IResolvable firewallVpcCidr) {
            this.props.firewallVpcCidr(firewallVpcCidr);
            return this;
        }

        /**
         * Property firewallVpcId: The ID of the VPC in which the ENI associated with the VPC firewall is created in manual mode.
         * <p>
         * @return {@code this}
         * @param firewallVpcId Property firewallVpcId: The ID of the VPC in which the ENI associated with the VPC firewall is created in manual mode. This parameter is required.
         */
        public Builder firewallVpcId(final java.lang.String firewallVpcId) {
            this.props.firewallVpcId(firewallVpcId);
            return this;
        }
        /**
         * Property firewallVpcId: The ID of the VPC in which the ENI associated with the VPC firewall is created in manual mode.
         * <p>
         * @return {@code this}
         * @param firewallVpcId Property firewallVpcId: The ID of the VPC in which the ENI associated with the VPC firewall is created in manual mode. This parameter is required.
         */
        public Builder firewallVpcId(final com.aliyun.ros.cdk.core.IResolvable firewallVpcId) {
            this.props.firewallVpcId(firewallVpcId);
            return this;
        }

        /**
         * Property firewallVswitchId: The ID of the vSwitch that is used to create the ENI in manual mode.
         * <p>
         * @return {@code this}
         * @param firewallVswitchId Property firewallVswitchId: The ID of the vSwitch that is used to create the ENI in manual mode. This parameter is required.
         */
        public Builder firewallVswitchId(final java.lang.String firewallVswitchId) {
            this.props.firewallVswitchId(firewallVswitchId);
            return this;
        }
        /**
         * Property firewallVswitchId: The ID of the vSwitch that is used to create the ENI in manual mode.
         * <p>
         * @return {@code this}
         * @param firewallVswitchId Property firewallVswitchId: The ID of the vSwitch that is used to create the ENI in manual mode. This parameter is required.
         */
        public Builder firewallVswitchId(final com.aliyun.ros.cdk.core.IResolvable firewallVswitchId) {
            this.props.firewallVswitchId(firewallVswitchId);
            return this;
        }

        /**
         * Property trAttachmentMasterCidr: The primary subnet CIDR block that the VPC uses to connect to the transit router in automatic mode.
         * <p>
         * @return {@code this}
         * @param trAttachmentMasterCidr Property trAttachmentMasterCidr: The primary subnet CIDR block that the VPC uses to connect to the transit router in automatic mode. This parameter is required.
         */
        public Builder trAttachmentMasterCidr(final java.lang.String trAttachmentMasterCidr) {
            this.props.trAttachmentMasterCidr(trAttachmentMasterCidr);
            return this;
        }
        /**
         * Property trAttachmentMasterCidr: The primary subnet CIDR block that the VPC uses to connect to the transit router in automatic mode.
         * <p>
         * @return {@code this}
         * @param trAttachmentMasterCidr Property trAttachmentMasterCidr: The primary subnet CIDR block that the VPC uses to connect to the transit router in automatic mode. This parameter is required.
         */
        public Builder trAttachmentMasterCidr(final com.aliyun.ros.cdk.core.IResolvable trAttachmentMasterCidr) {
            this.props.trAttachmentMasterCidr(trAttachmentMasterCidr);
            return this;
        }

        /**
         * Property trAttachmentMasterZone: The primary zone for the vSwitch.
         * <p>
         * @return {@code this}
         * @param trAttachmentMasterZone Property trAttachmentMasterZone: The primary zone for the vSwitch. This parameter is required.
         */
        public Builder trAttachmentMasterZone(final java.lang.String trAttachmentMasterZone) {
            this.props.trAttachmentMasterZone(trAttachmentMasterZone);
            return this;
        }
        /**
         * Property trAttachmentMasterZone: The primary zone for the vSwitch.
         * <p>
         * @return {@code this}
         * @param trAttachmentMasterZone Property trAttachmentMasterZone: The primary zone for the vSwitch. This parameter is required.
         */
        public Builder trAttachmentMasterZone(final com.aliyun.ros.cdk.core.IResolvable trAttachmentMasterZone) {
            this.props.trAttachmentMasterZone(trAttachmentMasterZone);
            return this;
        }

        /**
         * Property trAttachmentSlaveCidr: The secondary subnet CIDR block that the VPC uses to connect to the transit router in automatic mode.
         * <p>
         * @return {@code this}
         * @param trAttachmentSlaveCidr Property trAttachmentSlaveCidr: The secondary subnet CIDR block that the VPC uses to connect to the transit router in automatic mode. This parameter is required.
         */
        public Builder trAttachmentSlaveCidr(final java.lang.String trAttachmentSlaveCidr) {
            this.props.trAttachmentSlaveCidr(trAttachmentSlaveCidr);
            return this;
        }
        /**
         * Property trAttachmentSlaveCidr: The secondary subnet CIDR block that the VPC uses to connect to the transit router in automatic mode.
         * <p>
         * @return {@code this}
         * @param trAttachmentSlaveCidr Property trAttachmentSlaveCidr: The secondary subnet CIDR block that the VPC uses to connect to the transit router in automatic mode. This parameter is required.
         */
        public Builder trAttachmentSlaveCidr(final com.aliyun.ros.cdk.core.IResolvable trAttachmentSlaveCidr) {
            this.props.trAttachmentSlaveCidr(trAttachmentSlaveCidr);
            return this;
        }

        /**
         * Property trAttachmentSlaveZone: The secondary zone for the vSwitch.
         * <p>
         * @return {@code this}
         * @param trAttachmentSlaveZone Property trAttachmentSlaveZone: The secondary zone for the vSwitch. This parameter is required.
         */
        public Builder trAttachmentSlaveZone(final java.lang.String trAttachmentSlaveZone) {
            this.props.trAttachmentSlaveZone(trAttachmentSlaveZone);
            return this;
        }
        /**
         * Property trAttachmentSlaveZone: The secondary zone for the vSwitch.
         * <p>
         * @return {@code this}
         * @param trAttachmentSlaveZone Property trAttachmentSlaveZone: The secondary zone for the vSwitch. This parameter is required.
         */
        public Builder trAttachmentSlaveZone(final com.aliyun.ros.cdk.core.IResolvable trAttachmentSlaveZone) {
            this.props.trAttachmentSlaveZone(trAttachmentSlaveZone);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cloudfw.TrFirewall}.
         */
        @Override
        public com.aliyun.ros.cdk.cloudfw.TrFirewall build() {
            return new com.aliyun.ros.cdk.cloudfw.TrFirewall(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
