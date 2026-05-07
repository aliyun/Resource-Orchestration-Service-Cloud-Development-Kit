package com.aliyun.ros.cdk.clickhouse;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ClickHouse::EnterpriseDBClusterAccount</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:46.543Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.clickhouse.$Module.class, fqn = "@alicloud/ros-cdk-clickhouse.EnterpriseDBClusterAccount")
public class EnterpriseDBClusterAccount extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.clickhouse.IEnterpriseDBClusterAccount {

    protected EnterpriseDBClusterAccount(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected EnterpriseDBClusterAccount(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public EnterpriseDBClusterAccount(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.clickhouse.EnterpriseDBClusterAccountProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public EnterpriseDBClusterAccount(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.clickhouse.EnterpriseDBClusterAccountProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Account: The name of the database account.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccount() {
        return software.amazon.jsii.Kernel.get(this, "attrAccount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute AccountType: The type of the database account.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccountType() {
        return software.amazon.jsii.Kernel.get(this, "attrAccountType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Description: The description of the account.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DmlAuthSetting: The information about permissions.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDmlAuthSetting() {
        return software.amazon.jsii.Kernel.get(this, "attrDmlAuthSetting", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.clickhouse.EnterpriseDBClusterAccountProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.clickhouse.EnterpriseDBClusterAccountProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.clickhouse.EnterpriseDBClusterAccount}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.clickhouse.EnterpriseDBClusterAccount> {
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
        private final com.aliyun.ros.cdk.clickhouse.EnterpriseDBClusterAccountProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.clickhouse.EnterpriseDBClusterAccountProps.Builder();
        }

        /**
         * Property account: The name of the database account.
         * <p>
         * @return {@code this}
         * @param account Property account: The name of the database account. This parameter is required.
         */
        public Builder account(final java.lang.String account) {
            this.props.account(account);
            return this;
        }
        /**
         * Property account: The name of the database account.
         * <p>
         * @return {@code this}
         * @param account Property account: The name of the database account. This parameter is required.
         */
        public Builder account(final com.aliyun.ros.cdk.core.IResolvable account) {
            this.props.account(account);
            return this;
        }

        /**
         * Property accountType: The type of the database account.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>NormalAccount</strong>: Normal account number.</li>
         * <li><strong>SuperAccount</strong>: The privileged account.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param accountType Property accountType: The type of the database account. This parameter is required.
         */
        public Builder accountType(final java.lang.String accountType) {
            this.props.accountType(accountType);
            return this;
        }
        /**
         * Property accountType: The type of the database account.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>NormalAccount</strong>: Normal account number.</li>
         * <li><strong>SuperAccount</strong>: The privileged account.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param accountType Property accountType: The type of the database account. This parameter is required.
         */
        public Builder accountType(final com.aliyun.ros.cdk.core.IResolvable accountType) {
            this.props.accountType(accountType);
            return this;
        }

        /**
         * Property dbInstanceId: The cluster ID.
         * <p>
         * @return {@code this}
         * @param dbInstanceId Property dbInstanceId: The cluster ID. This parameter is required.
         */
        public Builder dbInstanceId(final java.lang.String dbInstanceId) {
            this.props.dbInstanceId(dbInstanceId);
            return this;
        }
        /**
         * Property dbInstanceId: The cluster ID.
         * <p>
         * @return {@code this}
         * @param dbInstanceId Property dbInstanceId: The cluster ID. This parameter is required.
         */
        public Builder dbInstanceId(final com.aliyun.ros.cdk.core.IResolvable dbInstanceId) {
            this.props.dbInstanceId(dbInstanceId);
            return this;
        }

        /**
         * Property password: Database account password.
         * <p>
         * Set the following rules.
         * <p>
         * <ul>
         * <li>Consists of at least three of uppercase letters, lowercase letters, numbers, and special characters.</li>
         * <li>Oh-! &#64;#$%^&amp; *()_+-= is a special character.</li>
         * <li>Length is 8~32 characters.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param password Property password: Database account password. This parameter is required.
         */
        public Builder password(final java.lang.String password) {
            this.props.password(password);
            return this;
        }
        /**
         * Property password: Database account password.
         * <p>
         * Set the following rules.
         * <p>
         * <ul>
         * <li>Consists of at least three of uppercase letters, lowercase letters, numbers, and special characters.</li>
         * <li>Oh-! &#64;#$%^&amp; *()_+-= is a special character.</li>
         * <li>Length is 8~32 characters.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param password Property password: Database account password. This parameter is required.
         */
        public Builder password(final com.aliyun.ros.cdk.core.IResolvable password) {
            this.props.password(password);
            return this;
        }

        /**
         * Property description: The description of the account.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the account. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of the account.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the account. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property dmlAuthSetting: The information about permissions.
         * <p>
         * @return {@code this}
         * @param dmlAuthSetting Property dmlAuthSetting: The information about permissions. This parameter is required.
         */
        public Builder dmlAuthSetting(final com.aliyun.ros.cdk.core.IResolvable dmlAuthSetting) {
            this.props.dmlAuthSetting(dmlAuthSetting);
            return this;
        }
        /**
         * Property dmlAuthSetting: The information about permissions.
         * <p>
         * @return {@code this}
         * @param dmlAuthSetting Property dmlAuthSetting: The information about permissions. This parameter is required.
         */
        public Builder dmlAuthSetting(final com.aliyun.ros.cdk.clickhouse.RosEnterpriseDBClusterAccount.DmlAuthSettingProperty dmlAuthSetting) {
            this.props.dmlAuthSetting(dmlAuthSetting);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.clickhouse.EnterpriseDBClusterAccount}.
         */
        @Override
        public com.aliyun.ros.cdk.clickhouse.EnterpriseDBClusterAccount build() {
            return new com.aliyun.ros.cdk.clickhouse.EnterpriseDBClusterAccount(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
