package com.aliyun.ros.cdk.cloudfw;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::CLOUDFW::VpcFirewallConfigure</code>, which is used to create a virtual private cloud (VPC) firewall.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:22.161Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudfw.$Module.class, fqn = "@alicloud/ros-cdk-cloudfw.VpcFirewallConfigure")
public class VpcFirewallConfigure extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.cloudfw.IVpcFirewallConfigure {

    protected VpcFirewallConfigure(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected VpcFirewallConfigure(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public VpcFirewallConfigure(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudfw.VpcFirewallConfigureProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public VpcFirewallConfigure(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudfw.VpcFirewallConfigureProps props) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudfw.VpcFirewallConfigureProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cloudfw.VpcFirewallConfigureProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.cloudfw.VpcFirewallConfigure}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cloudfw.VpcFirewallConfigure> {
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
        private final com.aliyun.ros.cdk.cloudfw.VpcFirewallConfigureProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cloudfw.VpcFirewallConfigureProps.Builder();
        }

        /**
         * Property firewallSwitch: The status of the VPC firewall after you create the firewall.
         * <p>
         * Valid values:
         * open: After you create the VPC firewall, the VPC firewall is automatically enabled. This is the default value.
         * close: After you create the VPC firewall, the VPC firewall is disabled. To enable the firewall, you can call the ModifyVpcFirewallSwitchStatus operation.
         * <p>
         * @return {@code this}
         * @param firewallSwitch Property firewallSwitch: The status of the VPC firewall after you create the firewall. This parameter is required.
         */
        public Builder firewallSwitch(final java.lang.String firewallSwitch) {
            this.props.firewallSwitch(firewallSwitch);
            return this;
        }
        /**
         * Property firewallSwitch: The status of the VPC firewall after you create the firewall.
         * <p>
         * Valid values:
         * open: After you create the VPC firewall, the VPC firewall is automatically enabled. This is the default value.
         * close: After you create the VPC firewall, the VPC firewall is disabled. To enable the firewall, you can call the ModifyVpcFirewallSwitchStatus operation.
         * <p>
         * @return {@code this}
         * @param firewallSwitch Property firewallSwitch: The status of the VPC firewall after you create the firewall. This parameter is required.
         */
        public Builder firewallSwitch(final com.aliyun.ros.cdk.core.IResolvable firewallSwitch) {
            this.props.firewallSwitch(firewallSwitch);
            return this;
        }

        /**
         * Property localVpcCidrTableList: The CIDR blocks of the local VPC.
         * <p>
         * @return {@code this}
         * @param localVpcCidrTableList Property localVpcCidrTableList: The CIDR blocks of the local VPC. This parameter is required.
         */
        public Builder localVpcCidrTableList(final com.aliyun.ros.cdk.core.IResolvable localVpcCidrTableList) {
            this.props.localVpcCidrTableList(localVpcCidrTableList);
            return this;
        }
        /**
         * Property localVpcCidrTableList: The CIDR blocks of the local VPC.
         * <p>
         * @return {@code this}
         * @param localVpcCidrTableList Property localVpcCidrTableList: The CIDR blocks of the local VPC. This parameter is required.
         */
        public Builder localVpcCidrTableList(final java.util.List<? extends java.lang.Object> localVpcCidrTableList) {
            this.props.localVpcCidrTableList(localVpcCidrTableList);
            return this;
        }

        /**
         * Property localVpcId: The ID of the local VPC.
         * <p>
         * @return {@code this}
         * @param localVpcId Property localVpcId: The ID of the local VPC. This parameter is required.
         */
        public Builder localVpcId(final java.lang.String localVpcId) {
            this.props.localVpcId(localVpcId);
            return this;
        }
        /**
         * Property localVpcId: The ID of the local VPC.
         * <p>
         * @return {@code this}
         * @param localVpcId Property localVpcId: The ID of the local VPC. This parameter is required.
         */
        public Builder localVpcId(final com.aliyun.ros.cdk.core.IResolvable localVpcId) {
            this.props.localVpcId(localVpcId);
            return this;
        }

        /**
         * Property localVpcRegion: The region ID of the local VPC.
         * <p>
         * @return {@code this}
         * @param localVpcRegion Property localVpcRegion: The region ID of the local VPC. This parameter is required.
         */
        public Builder localVpcRegion(final java.lang.String localVpcRegion) {
            this.props.localVpcRegion(localVpcRegion);
            return this;
        }
        /**
         * Property localVpcRegion: The region ID of the local VPC.
         * <p>
         * @return {@code this}
         * @param localVpcRegion Property localVpcRegion: The region ID of the local VPC. This parameter is required.
         */
        public Builder localVpcRegion(final com.aliyun.ros.cdk.core.IResolvable localVpcRegion) {
            this.props.localVpcRegion(localVpcRegion);
            return this;
        }

        /**
         * Property peerVpcCidrTableList: The CIDR blocks of the peer VPC.
         * <p>
         * @return {@code this}
         * @param peerVpcCidrTableList Property peerVpcCidrTableList: The CIDR blocks of the peer VPC. This parameter is required.
         */
        public Builder peerVpcCidrTableList(final com.aliyun.ros.cdk.core.IResolvable peerVpcCidrTableList) {
            this.props.peerVpcCidrTableList(peerVpcCidrTableList);
            return this;
        }
        /**
         * Property peerVpcCidrTableList: The CIDR blocks of the peer VPC.
         * <p>
         * @return {@code this}
         * @param peerVpcCidrTableList Property peerVpcCidrTableList: The CIDR blocks of the peer VPC. This parameter is required.
         */
        public Builder peerVpcCidrTableList(final java.util.List<? extends java.lang.Object> peerVpcCidrTableList) {
            this.props.peerVpcCidrTableList(peerVpcCidrTableList);
            return this;
        }

        /**
         * Property peerVpcId: The ID of the peer VPC.
         * <p>
         * @return {@code this}
         * @param peerVpcId Property peerVpcId: The ID of the peer VPC. This parameter is required.
         */
        public Builder peerVpcId(final java.lang.String peerVpcId) {
            this.props.peerVpcId(peerVpcId);
            return this;
        }
        /**
         * Property peerVpcId: The ID of the peer VPC.
         * <p>
         * @return {@code this}
         * @param peerVpcId Property peerVpcId: The ID of the peer VPC. This parameter is required.
         */
        public Builder peerVpcId(final com.aliyun.ros.cdk.core.IResolvable peerVpcId) {
            this.props.peerVpcId(peerVpcId);
            return this;
        }

        /**
         * Property peerVpcRegion: The region ID of the peer VPC.
         * <p>
         * @return {@code this}
         * @param peerVpcRegion Property peerVpcRegion: The region ID of the peer VPC. This parameter is required.
         */
        public Builder peerVpcRegion(final java.lang.String peerVpcRegion) {
            this.props.peerVpcRegion(peerVpcRegion);
            return this;
        }
        /**
         * Property peerVpcRegion: The region ID of the peer VPC.
         * <p>
         * @return {@code this}
         * @param peerVpcRegion Property peerVpcRegion: The region ID of the peer VPC. This parameter is required.
         */
        public Builder peerVpcRegion(final com.aliyun.ros.cdk.core.IResolvable peerVpcRegion) {
            this.props.peerVpcRegion(peerVpcRegion);
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
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cloudfw.VpcFirewallConfigure}.
         */
        @Override
        public com.aliyun.ros.cdk.cloudfw.VpcFirewallConfigure build() {
            return new com.aliyun.ros.cdk.cloudfw.VpcFirewallConfigure(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
