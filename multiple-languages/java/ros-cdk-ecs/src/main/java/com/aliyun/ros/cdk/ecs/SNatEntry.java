package com.aliyun.ros.cdk.ecs;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ECS::SNatEntry</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-08-31T08:37:38.634Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.SNatEntry")
public class SNatEntry extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.ecs.ISNatEntry {

    protected SNatEntry(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected SNatEntry(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public SNatEntry(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.SNatEntryProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public SNatEntry(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.SNatEntryProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute SNatEntryId: The id of created SNAT entry.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSNatEntryId() {
        return software.amazon.jsii.Kernel.get(this, "attrSNatEntryId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.SNatEntryProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.SNatEntryProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.ecs.SNatEntry}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecs.SNatEntry> {
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
        private final com.aliyun.ros.cdk.ecs.SNatEntryProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ecs.SNatEntryProps.Builder();
        }

        /**
         * Property sNatIp: Source IP, must belongs to bandwidth package internet IP.
         * <p>
         * @return {@code this}
         * @param sNatIp Property sNatIp: Source IP, must belongs to bandwidth package internet IP. This parameter is required.
         */
        public Builder sNatIp(final java.lang.String sNatIp) {
            this.props.sNatIp(sNatIp);
            return this;
        }
        /**
         * Property sNatIp: Source IP, must belongs to bandwidth package internet IP.
         * <p>
         * @return {@code this}
         * @param sNatIp Property sNatIp: Source IP, must belongs to bandwidth package internet IP. This parameter is required.
         */
        public Builder sNatIp(final com.aliyun.ros.cdk.core.IResolvable sNatIp) {
            this.props.sNatIp(sNatIp);
            return this;
        }

        /**
         * Property sNatTableId: Create SNAT entry in specified SNAT table.
         * <p>
         * @return {@code this}
         * @param sNatTableId Property sNatTableId: Create SNAT entry in specified SNAT table. This parameter is required.
         */
        public Builder sNatTableId(final java.lang.String sNatTableId) {
            this.props.sNatTableId(sNatTableId);
            return this;
        }
        /**
         * Property sNatTableId: Create SNAT entry in specified SNAT table.
         * <p>
         * @return {@code this}
         * @param sNatTableId Property sNatTableId: Create SNAT entry in specified SNAT table. This parameter is required.
         */
        public Builder sNatTableId(final com.aliyun.ros.cdk.core.IResolvable sNatTableId) {
            this.props.sNatTableId(sNatTableId);
            return this;
        }

        /**
         * Property snatEntryName: The name of the SNAT entry.
         * <p>
         * The name must be 2 to 128 characters in length. It must start with a letter but
         * cannot start with <code>http:\/\/</code> or <code>https:\/\/</code>.
         * <p>
         * @return {@code this}
         * @param snatEntryName Property snatEntryName: The name of the SNAT entry. This parameter is required.
         */
        public Builder snatEntryName(final java.lang.String snatEntryName) {
            this.props.snatEntryName(snatEntryName);
            return this;
        }
        /**
         * Property snatEntryName: The name of the SNAT entry.
         * <p>
         * The name must be 2 to 128 characters in length. It must start with a letter but
         * cannot start with <code>http:\/\/</code> or <code>https:\/\/</code>.
         * <p>
         * @return {@code this}
         * @param snatEntryName Property snatEntryName: The name of the SNAT entry. This parameter is required.
         */
        public Builder snatEntryName(final com.aliyun.ros.cdk.core.IResolvable snatEntryName) {
            this.props.snatEntryName(snatEntryName);
            return this;
        }

        /**
         * Property sourceCidr: You can specify the CIDR block of a VPC, a vSwitch, or an ECS instance or enter a custom CIDR block.
         * <p>
         * You can specify an SNAT entry in the following ways:
         * <p>
         * <ul>
         * <li>You can specify the CIDR block of the VPC where the NAT gateway is deployed.
         * Then, all ECS instances in the VPC can access the Internet or external networks
         * by using SNAT.</li>
         * <li>You can specify the CIDR block of a vSwitch, for example, 192.168.1.0/24.
         * Then, the ECS instances in the vSwitch can access the Internet or external
         * networks by using SNAT.</li>
         * <li>You can specify the IP address of an ECS instance, for example,
         * 192.168.1.1/32. Then, the ECS instance can access the Internet or external
         * networks by using SNAT.</li>
         * <li>You can specify a custom CIDR block. Then, all ECS instances within the
         * specified CIDR block can access the Internet or external networks by using SNAT.
         * When you add an SNAT entry to an Internet NAT gateway, if SnatIp is set to an
         * EIP, the ECS instance uses the specified EIP to access the Internet.
         * If SnatIp is set to multiple EIPs, the ECS instance randomly selects an EIP
         * specified in the SnatIp parameter to access the Internet.
         * You cannot specify this parameter and SourceVSwtichId at the same time. If
         * SourceVSwitchId is specified, you cannot specify SourceCIDR. If SourceCIDR is
         * specified, you cannot specify SourceVSwitchId.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param sourceCidr Property sourceCidr: You can specify the CIDR block of a VPC, a vSwitch, or an ECS instance or enter a custom CIDR block. This parameter is required.
         */
        public Builder sourceCidr(final java.lang.String sourceCidr) {
            this.props.sourceCidr(sourceCidr);
            return this;
        }
        /**
         * Property sourceCidr: You can specify the CIDR block of a VPC, a vSwitch, or an ECS instance or enter a custom CIDR block.
         * <p>
         * You can specify an SNAT entry in the following ways:
         * <p>
         * <ul>
         * <li>You can specify the CIDR block of the VPC where the NAT gateway is deployed.
         * Then, all ECS instances in the VPC can access the Internet or external networks
         * by using SNAT.</li>
         * <li>You can specify the CIDR block of a vSwitch, for example, 192.168.1.0/24.
         * Then, the ECS instances in the vSwitch can access the Internet or external
         * networks by using SNAT.</li>
         * <li>You can specify the IP address of an ECS instance, for example,
         * 192.168.1.1/32. Then, the ECS instance can access the Internet or external
         * networks by using SNAT.</li>
         * <li>You can specify a custom CIDR block. Then, all ECS instances within the
         * specified CIDR block can access the Internet or external networks by using SNAT.
         * When you add an SNAT entry to an Internet NAT gateway, if SnatIp is set to an
         * EIP, the ECS instance uses the specified EIP to access the Internet.
         * If SnatIp is set to multiple EIPs, the ECS instance randomly selects an EIP
         * specified in the SnatIp parameter to access the Internet.
         * You cannot specify this parameter and SourceVSwtichId at the same time. If
         * SourceVSwitchId is specified, you cannot specify SourceCIDR. If SourceCIDR is
         * specified, you cannot specify SourceVSwitchId.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param sourceCidr Property sourceCidr: You can specify the CIDR block of a VPC, a vSwitch, or an ECS instance or enter a custom CIDR block. This parameter is required.
         */
        public Builder sourceCidr(final com.aliyun.ros.cdk.core.IResolvable sourceCidr) {
            this.props.sourceCidr(sourceCidr);
            return this;
        }

        /**
         * Property sourceVSwitchId: The ID of the vSwitch.
         * <p>
         * <ul>
         * <li>When you add an SNAT entry to an Internet NAT gateway, this parameter
         * specifies that ECS instances in the vSwitch can use the SNAT entry to access the
         * Internet. If you select multiple elastic IP addresses (EIPs) to create an SNAT
         * address pool, connections are hashed to these EIPs. Network traffic may not be
         * evenly distributed to the EIPs because the amount of traffic that passes through
         * each connection varies. We recommend that you associate these EIPs with the same
         * EIP bandwidth plan to prevent service interruptions due to the bandwidth limits
         * on individual EIPs.</li>
         * <li>When you add an SNAT entry to a VPC NAT gateway, this parameter specifies
         * that ECS instances in the vSwitch can use the SNAT entry to access external
         * networks.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param sourceVSwitchId Property sourceVSwitchId: The ID of the vSwitch. This parameter is required.
         */
        public Builder sourceVSwitchId(final java.lang.String sourceVSwitchId) {
            this.props.sourceVSwitchId(sourceVSwitchId);
            return this;
        }
        /**
         * Property sourceVSwitchId: The ID of the vSwitch.
         * <p>
         * <ul>
         * <li>When you add an SNAT entry to an Internet NAT gateway, this parameter
         * specifies that ECS instances in the vSwitch can use the SNAT entry to access the
         * Internet. If you select multiple elastic IP addresses (EIPs) to create an SNAT
         * address pool, connections are hashed to these EIPs. Network traffic may not be
         * evenly distributed to the EIPs because the amount of traffic that passes through
         * each connection varies. We recommend that you associate these EIPs with the same
         * EIP bandwidth plan to prevent service interruptions due to the bandwidth limits
         * on individual EIPs.</li>
         * <li>When you add an SNAT entry to a VPC NAT gateway, this parameter specifies
         * that ECS instances in the vSwitch can use the SNAT entry to access external
         * networks.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param sourceVSwitchId Property sourceVSwitchId: The ID of the vSwitch. This parameter is required.
         */
        public Builder sourceVSwitchId(final com.aliyun.ros.cdk.core.IResolvable sourceVSwitchId) {
            this.props.sourceVSwitchId(sourceVSwitchId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ecs.SNatEntry}.
         */
        @Override
        public com.aliyun.ros.cdk.ecs.SNatEntry build() {
            return new com.aliyun.ros.cdk.ecs.SNatEntry(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
