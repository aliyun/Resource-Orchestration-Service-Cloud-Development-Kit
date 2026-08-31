package com.aliyun.ros.cdk.vpc;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::VPC::SnatEntry</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-08-31T12:05:00.479Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.SnatEntry")
public class SnatEntry extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.vpc.ISnatEntry {

    protected SnatEntry(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected SnatEntry(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public SnatEntry(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.SnatEntryProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public SnatEntry(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.SnatEntryProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute SnatEntryIds: The IDS of the SNAT entry.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSnatEntryIds() {
        return software.amazon.jsii.Kernel.get(this, "attrSnatEntryIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.SnatEntryProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.SnatEntryProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.SnatEntry}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.SnatEntry> {
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
        private final com.aliyun.ros.cdk.vpc.SnatEntryProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.vpc.SnatEntryProps.Builder();
        }

        /**
         * Property snatIp: The public IP address.
         * <p>
         * Separate multiple EIPs with commas.
         * <p>
         * @return {@code this}
         * @param snatIp Property snatIp: The public IP address. This parameter is required.
         */
        public Builder snatIp(final java.lang.String snatIp) {
            this.props.snatIp(snatIp);
            return this;
        }
        /**
         * Property snatIp: The public IP address.
         * <p>
         * Separate multiple EIPs with commas.
         * <p>
         * @return {@code this}
         * @param snatIp Property snatIp: The public IP address. This parameter is required.
         */
        public Builder snatIp(final com.aliyun.ros.cdk.core.IResolvable snatIp) {
            this.props.snatIp(snatIp);
            return this;
        }

        /**
         * Property snatTableId: The ID of the SNAT table.
         * <p>
         * @return {@code this}
         * @param snatTableId Property snatTableId: The ID of the SNAT table. This parameter is required.
         */
        public Builder snatTableId(final java.lang.String snatTableId) {
            this.props.snatTableId(snatTableId);
            return this;
        }
        /**
         * Property snatTableId: The ID of the SNAT table.
         * <p>
         * @return {@code this}
         * @param snatTableId Property snatTableId: The ID of the SNAT table. This parameter is required.
         */
        public Builder snatTableId(final com.aliyun.ros.cdk.core.IResolvable snatTableId) {
            this.props.snatTableId(snatTableId);
            return this;
        }

        /**
         * Property eipAffinity: Specifies whether to enable EIP affinity.
         * <p>
         * Valid values:
         * 0: no
         * 1: yes
         * If EIP affinity is enabled and the SNAT entry is associated with multiple EIPs, a client uses the same EIP to access the Internet. Otherwise, the client uses an EIP selected from the associated EIPs to access the Internet.
         * <p>
         * @return {@code this}
         * @param eipAffinity Property eipAffinity: Specifies whether to enable EIP affinity. This parameter is required.
         */
        public Builder eipAffinity(final java.lang.Number eipAffinity) {
            this.props.eipAffinity(eipAffinity);
            return this;
        }
        /**
         * Property eipAffinity: Specifies whether to enable EIP affinity.
         * <p>
         * Valid values:
         * 0: no
         * 1: yes
         * If EIP affinity is enabled and the SNAT entry is associated with multiple EIPs, a client uses the same EIP to access the Internet. Otherwise, the client uses an EIP selected from the associated EIPs to access the Internet.
         * <p>
         * @return {@code this}
         * @param eipAffinity Property eipAffinity: Specifies whether to enable EIP affinity. This parameter is required.
         */
        public Builder eipAffinity(final com.aliyun.ros.cdk.core.IResolvable eipAffinity) {
            this.props.eipAffinity(eipAffinity);
            return this;
        }

        /**
         * Property networkInterfaceId: The ID of the elastic network interface.
         * <p>
         * The IPv4 addresses of the elastic network interface will be used as the SNAT IP addresses.
         * <p>
         * @return {@code this}
         * @param networkInterfaceId Property networkInterfaceId: The ID of the elastic network interface. This parameter is required.
         */
        public Builder networkInterfaceId(final java.lang.String networkInterfaceId) {
            this.props.networkInterfaceId(networkInterfaceId);
            return this;
        }
        /**
         * Property networkInterfaceId: The ID of the elastic network interface.
         * <p>
         * The IPv4 addresses of the elastic network interface will be used as the SNAT IP addresses.
         * <p>
         * @return {@code this}
         * @param networkInterfaceId Property networkInterfaceId: The ID of the elastic network interface. This parameter is required.
         */
        public Builder networkInterfaceId(final com.aliyun.ros.cdk.core.IResolvable networkInterfaceId) {
            this.props.networkInterfaceId(networkInterfaceId);
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
         * Property sourceVSwitchIds: The ID of the VSwitch to access the Internet.
         * <p>
         * When updating this list parameter, a new item will lead to a creation of new Snat Entry with latest properties, a removed item will lead to a deletion of the attached SnatEntry
         * <p>
         * @return {@code this}
         * @param sourceVSwitchIds Property sourceVSwitchIds: The ID of the VSwitch to access the Internet. This parameter is required.
         */
        public Builder sourceVSwitchIds(final com.aliyun.ros.cdk.core.IResolvable sourceVSwitchIds) {
            this.props.sourceVSwitchIds(sourceVSwitchIds);
            return this;
        }
        /**
         * Property sourceVSwitchIds: The ID of the VSwitch to access the Internet.
         * <p>
         * When updating this list parameter, a new item will lead to a creation of new Snat Entry with latest properties, a removed item will lead to a deletion of the attached SnatEntry
         * <p>
         * @return {@code this}
         * @param sourceVSwitchIds Property sourceVSwitchIds: The ID of the VSwitch to access the Internet. This parameter is required.
         */
        public Builder sourceVSwitchIds(final java.util.List<? extends java.lang.Object> sourceVSwitchIds) {
            this.props.sourceVSwitchIds(sourceVSwitchIds);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.vpc.SnatEntry}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.SnatEntry build() {
            return new com.aliyun.ros.cdk.vpc.SnatEntry(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
