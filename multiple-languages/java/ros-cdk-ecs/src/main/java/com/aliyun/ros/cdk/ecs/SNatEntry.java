package com.aliyun.ros.cdk.ecs;

/**
 * A ROS resource type:  `ALIYUN::ECS::SNatEntry`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.71.0 (build f1f58ae)", date = "2022-11-30T05:21:19.183Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.SNatEntry")
public class SNatEntry extends com.aliyun.ros.cdk.core.Resource {

    protected SNatEntry(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected SNatEntry(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::ECS::SNatEntry`.
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
    public SNatEntry(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.SNatEntryProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::ECS::SNatEntry`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSNatEntryId() {
        return software.amazon.jsii.Kernel.get(this, "attrSNatEntryId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
         * Property sourceVSwitchId: Allow which switch can access internet.
         * <p>
         * @return {@code this}
         * @param sourceVSwitchId Property sourceVSwitchId: Allow which switch can access internet. This parameter is required.
         */
        public Builder sourceVSwitchId(final java.lang.String sourceVSwitchId) {
            this.props.sourceVSwitchId(sourceVSwitchId);
            return this;
        }
        /**
         * Property sourceVSwitchId: Allow which switch can access internet.
         * <p>
         * @return {@code this}
         * @param sourceVSwitchId Property sourceVSwitchId: Allow which switch can access internet. This parameter is required.
         */
        public Builder sourceVSwitchId(final com.aliyun.ros.cdk.core.IResolvable sourceVSwitchId) {
            this.props.sourceVSwitchId(sourceVSwitchId);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.ecs.SNatEntry}.
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
