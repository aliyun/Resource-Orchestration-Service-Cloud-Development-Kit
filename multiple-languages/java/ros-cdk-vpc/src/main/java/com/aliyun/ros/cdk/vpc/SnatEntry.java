package com.aliyun.ros.cdk.vpc;

/**
 * A ROS resource type:  <code>ALIYUN::VPC::SnatEntry</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-15T07:33:50.850Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.SnatEntry")
public class SnatEntry extends com.aliyun.ros.cdk.core.Resource {

    protected SnatEntry(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected SnatEntry(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>ALIYUN::VPC::SnatEntry</code>.
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
    public SnatEntry(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.SnatEntryProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>ALIYUN::VPC::SnatEntry</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSnatEntryIds() {
        return software.amazon.jsii.Kernel.get(this, "attrSnatEntryIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
         * Property snatEntryName: he name of the SNAT rule is 2-128 characters long and must start with a letter or Chinese, but cannot begin with HTTP:// or https://.
         * <p>
         * @return {@code this}
         * @param snatEntryName Property snatEntryName: he name of the SNAT rule is 2-128 characters long and must start with a letter or Chinese, but cannot begin with HTTP:// or https://. This parameter is required.
         */
        public Builder snatEntryName(final java.lang.String snatEntryName) {
            this.props.snatEntryName(snatEntryName);
            return this;
        }
        /**
         * Property snatEntryName: he name of the SNAT rule is 2-128 characters long and must start with a letter or Chinese, but cannot begin with HTTP:// or https://.
         * <p>
         * @return {@code this}
         * @param snatEntryName Property snatEntryName: he name of the SNAT rule is 2-128 characters long and must start with a letter or Chinese, but cannot begin with HTTP:// or https://. This parameter is required.
         */
        public Builder snatEntryName(final com.aliyun.ros.cdk.core.IResolvable snatEntryName) {
            this.props.snatEntryName(snatEntryName);
            return this;
        }

        /**
         * Property sourceCidr: Specifies the network segment of the switch.
         * <p>
         * For example, 10.0.0.1/24. This parameter and the SourceVSwtichId parameter are mutually exclusive and cannot appear at the same time.
         * <p>
         * @return {@code this}
         * @param sourceCidr Property sourceCidr: Specifies the network segment of the switch. This parameter is required.
         */
        public Builder sourceCidr(final java.lang.String sourceCidr) {
            this.props.sourceCidr(sourceCidr);
            return this;
        }
        /**
         * Property sourceCidr: Specifies the network segment of the switch.
         * <p>
         * For example, 10.0.0.1/24. This parameter and the SourceVSwtichId parameter are mutually exclusive and cannot appear at the same time.
         * <p>
         * @return {@code this}
         * @param sourceCidr Property sourceCidr: Specifies the network segment of the switch. This parameter is required.
         */
        public Builder sourceCidr(final com.aliyun.ros.cdk.core.IResolvable sourceCidr) {
            this.props.sourceCidr(sourceCidr);
            return this;
        }

        /**
         * Property sourceVSwitchIds: The ID of the VSwitch to access the Internet.
         * <p>
         * @return {@code this}
         * @param sourceVSwitchIds Property sourceVSwitchIds: The ID of the VSwitch to access the Internet. This parameter is required.
         */
        public Builder sourceVSwitchIds(final java.util.List<? extends java.lang.Object> sourceVSwitchIds) {
            this.props.sourceVSwitchIds(sourceVSwitchIds);
            return this;
        }
        /**
         * Property sourceVSwitchIds: The ID of the VSwitch to access the Internet.
         * <p>
         * @return {@code this}
         * @param sourceVSwitchIds Property sourceVSwitchIds: The ID of the VSwitch to access the Internet. This parameter is required.
         */
        public Builder sourceVSwitchIds(final com.aliyun.ros.cdk.core.IResolvable sourceVSwitchIds) {
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
