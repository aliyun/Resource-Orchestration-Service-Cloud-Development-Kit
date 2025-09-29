package com.aliyun.ros.cdk.hbr;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::HBR::DbAgent</code>, which is used to install a Data Disaster Recovery client.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:26.403Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.hbr.$Module.class, fqn = "@alicloud/ros-cdk-hbr.DbAgent")
public class DbAgent extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.hbr.IDbAgent {

    protected DbAgent(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected DbAgent(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public DbAgent(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.hbr.DbAgentProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public DbAgent(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.hbr.DbAgentProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute InstanceIds: Uni backup agent instance ids.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceIds() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute TaskId: Uni backup agent install task id.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTaskId() {
        return software.amazon.jsii.Kernel.get(this, "attrTaskId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute UniBackupInstanceDetails: Uni backup agent instance info details.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrUniBackupInstanceDetails() {
        return software.amazon.jsii.Kernel.get(this, "attrUniBackupInstanceDetails", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute UniBackupInstances: Uni backup agent instance info.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrUniBackupInstances() {
        return software.amazon.jsii.Kernel.get(this, "attrUniBackupInstances", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.hbr.DbAgentProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.hbr.DbAgentProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.hbr.DbAgent}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.hbr.DbAgent> {
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
        private final com.aliyun.ros.cdk.hbr.DbAgentProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.hbr.DbAgentProps.Builder();
        }

        /**
         * Property instanceInfo: Instance infos.
         * <p>
         * @return {@code this}
         * @param instanceInfo Property instanceInfo: Instance infos. This parameter is required.
         */
        public Builder instanceInfo(final com.aliyun.ros.cdk.core.IResolvable instanceInfo) {
            this.props.instanceInfo(instanceInfo);
            return this;
        }
        /**
         * Property instanceInfo: Instance infos.
         * <p>
         * @return {@code this}
         * @param instanceInfo Property instanceInfo: Instance infos. This parameter is required.
         */
        public Builder instanceInfo(final java.util.List<? extends java.lang.Object> instanceInfo) {
            this.props.instanceInfo(instanceInfo);
            return this;
        }

        /**
         * Property crossAccountRoleName: The RAM role name that the original account created for cross-account backup operations.
         * <p>
         * @return {@code this}
         * @param crossAccountRoleName Property crossAccountRoleName: The RAM role name that the original account created for cross-account backup operations. This parameter is required.
         */
        public Builder crossAccountRoleName(final java.lang.String crossAccountRoleName) {
            this.props.crossAccountRoleName(crossAccountRoleName);
            return this;
        }
        /**
         * Property crossAccountRoleName: The RAM role name that the original account created for cross-account backup operations.
         * <p>
         * @return {@code this}
         * @param crossAccountRoleName Property crossAccountRoleName: The RAM role name that the original account created for cross-account backup operations. This parameter is required.
         */
        public Builder crossAccountRoleName(final com.aliyun.ros.cdk.core.IResolvable crossAccountRoleName) {
            this.props.crossAccountRoleName(crossAccountRoleName);
            return this;
        }

        /**
         * Property crossAccountType: The type of cross-account backup.
         * <p>
         * Supported values: SELF_ACCOUNT: backup within the same account; CROSS_ACCOUNT: cross-account backup. Example: CROSS_ACCOUNT
         * <p>
         * @return {@code this}
         * @param crossAccountType Property crossAccountType: The type of cross-account backup. This parameter is required.
         */
        public Builder crossAccountType(final java.lang.String crossAccountType) {
            this.props.crossAccountType(crossAccountType);
            return this;
        }
        /**
         * Property crossAccountType: The type of cross-account backup.
         * <p>
         * Supported values: SELF_ACCOUNT: backup within the same account; CROSS_ACCOUNT: cross-account backup. Example: CROSS_ACCOUNT
         * <p>
         * @return {@code this}
         * @param crossAccountType Property crossAccountType: The type of cross-account backup. This parameter is required.
         */
        public Builder crossAccountType(final com.aliyun.ros.cdk.core.IResolvable crossAccountType) {
            this.props.crossAccountType(crossAccountType);
            return this;
        }

        /**
         * Property crossAccountUserId: The user ID of the original account for cross-account backup operations.
         * <p>
         * @return {@code this}
         * @param crossAccountUserId Property crossAccountUserId: The user ID of the original account for cross-account backup operations. This parameter is required.
         */
        public Builder crossAccountUserId(final java.lang.Number crossAccountUserId) {
            this.props.crossAccountUserId(crossAccountUserId);
            return this;
        }
        /**
         * Property crossAccountUserId: The user ID of the original account for cross-account backup operations.
         * <p>
         * @return {@code this}
         * @param crossAccountUserId Property crossAccountUserId: The user ID of the original account for cross-account backup operations. This parameter is required.
         */
        public Builder crossAccountUserId(final com.aliyun.ros.cdk.core.IResolvable crossAccountUserId) {
            this.props.crossAccountUserId(crossAccountUserId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.hbr.DbAgent}.
         */
        @Override
        public com.aliyun.ros.cdk.hbr.DbAgent build() {
            return new com.aliyun.ros.cdk.hbr.DbAgent(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
