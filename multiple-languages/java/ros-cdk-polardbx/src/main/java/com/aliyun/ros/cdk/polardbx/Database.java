package com.aliyun.ros.cdk.polardbx;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::PolarDBX::Database</code>, which is used to create a database.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-04T02:47:56.732Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.polardbx.$Module.class, fqn = "@alicloud/ros-cdk-polardbx.Database")
public class Database extends com.aliyun.ros.cdk.core.Resource {

    protected Database(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Database(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Database(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.polardbx.DatabaseProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Database(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.polardbx.DatabaseProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Accounts: List of accounts.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAccounts() {
        return software.amazon.jsii.Kernel.get(this, "attrAccounts", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute CharacterSetName: Character set, which supports the following character sets:.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCharacterSetName() {
        return software.amazon.jsii.Kernel.get(this, "attrCharacterSetName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute DatabaseDescription: Database description information.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDatabaseDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrDatabaseDescription", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute DatabaseName: The name of the database.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDatabaseName() {
        return software.amazon.jsii.Kernel.get(this, "attrDatabaseName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute DBInstanceId: The ID of the instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDbInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrDbInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.polardbx.DatabaseProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.polardbx.DatabaseProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.polardbx.DatabaseProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.polardbx.Database}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.polardbx.Database> {
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
        private final com.aliyun.ros.cdk.polardbx.DatabaseProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.polardbx.DatabaseProps.Builder();
        }

        /**
         * Property accounts: List of accounts.
         * <p>
         * @return {@code this}
         * @param accounts Property accounts: List of accounts. This parameter is required.
         */
        public Builder accounts(final com.aliyun.ros.cdk.core.IResolvable accounts) {
            this.props.accounts(accounts);
            return this;
        }
        /**
         * Property accounts: List of accounts.
         * <p>
         * @return {@code this}
         * @param accounts Property accounts: List of accounts. This parameter is required.
         */
        public Builder accounts(final java.util.List<? extends java.lang.Object> accounts) {
            this.props.accounts(accounts);
            return this;
        }

        /**
         * Property characterSetName: Character set, which supports the following character sets: - **utf8 * * - <strong>gbk</strong> - **latin1 * * - **utf8mb4 * *.
         * <p>
         * @return {@code this}
         * @param characterSetName Property characterSetName: Character set, which supports the following character sets: - **utf8 * * - <strong>gbk</strong> - **latin1 * * - **utf8mb4 * *. This parameter is required.
         */
        public Builder characterSetName(final java.lang.String characterSetName) {
            this.props.characterSetName(characterSetName);
            return this;
        }
        /**
         * Property characterSetName: Character set, which supports the following character sets: - **utf8 * * - <strong>gbk</strong> - **latin1 * * - **utf8mb4 * *.
         * <p>
         * @return {@code this}
         * @param characterSetName Property characterSetName: Character set, which supports the following character sets: - **utf8 * * - <strong>gbk</strong> - **latin1 * * - **utf8mb4 * *. This parameter is required.
         */
        public Builder characterSetName(final com.aliyun.ros.cdk.core.IResolvable characterSetName) {
            this.props.characterSetName(characterSetName);
            return this;
        }

        /**
         * Property databaseName: The name of the database.
         * <p>
         * @return {@code this}
         * @param databaseName Property databaseName: The name of the database. This parameter is required.
         */
        public Builder databaseName(final java.lang.String databaseName) {
            this.props.databaseName(databaseName);
            return this;
        }
        /**
         * Property databaseName: The name of the database.
         * <p>
         * @return {@code this}
         * @param databaseName Property databaseName: The name of the database. This parameter is required.
         */
        public Builder databaseName(final com.aliyun.ros.cdk.core.IResolvable databaseName) {
            this.props.databaseName(databaseName);
            return this;
        }

        /**
         * Property dbInstanceId: The ID of the instance.
         * <p>
         * @return {@code this}
         * @param dbInstanceId Property dbInstanceId: The ID of the instance. This parameter is required.
         */
        public Builder dbInstanceId(final java.lang.String dbInstanceId) {
            this.props.dbInstanceId(dbInstanceId);
            return this;
        }
        /**
         * Property dbInstanceId: The ID of the instance.
         * <p>
         * @return {@code this}
         * @param dbInstanceId Property dbInstanceId: The ID of the instance. This parameter is required.
         */
        public Builder dbInstanceId(final com.aliyun.ros.cdk.core.IResolvable dbInstanceId) {
            this.props.dbInstanceId(dbInstanceId);
            return this;
        }

        /**
         * Property databaseDescription: Database description information.
         * <p>
         * @return {@code this}
         * @param databaseDescription Property databaseDescription: Database description information. This parameter is required.
         */
        public Builder databaseDescription(final java.lang.String databaseDescription) {
            this.props.databaseDescription(databaseDescription);
            return this;
        }
        /**
         * Property databaseDescription: Database description information.
         * <p>
         * @return {@code this}
         * @param databaseDescription Property databaseDescription: Database description information. This parameter is required.
         */
        public Builder databaseDescription(final com.aliyun.ros.cdk.core.IResolvable databaseDescription) {
            this.props.databaseDescription(databaseDescription);
            return this;
        }

        /**
         * Property mode: The mode selected when creating the database.
         * <p>
         * The values are as follows:
         * <p>
         * <ul>
         * <li><strong>auto</strong>: The database in this mode supports automatic partitioning, that is, you do not need to specify a partition key when creating a table;</li>
         * <li><strong>drds</strong>: databases in this mode do not support automatic partitioning. When creating tables, you must use the dedicated database Shard syntax and specify the database shard key.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param mode Property mode: The mode selected when creating the database. This parameter is required.
         */
        public Builder mode(final java.lang.String mode) {
            this.props.mode(mode);
            return this;
        }
        /**
         * Property mode: The mode selected when creating the database.
         * <p>
         * The values are as follows:
         * <p>
         * <ul>
         * <li><strong>auto</strong>: The database in this mode supports automatic partitioning, that is, you do not need to specify a partition key when creating a table;</li>
         * <li><strong>drds</strong>: databases in this mode do not support automatic partitioning. When creating tables, you must use the dedicated database Shard syntax and specify the database shard key.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param mode Property mode: The mode selected when creating the database. This parameter is required.
         */
        public Builder mode(final com.aliyun.ros.cdk.core.IResolvable mode) {
            this.props.mode(mode);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.polardbx.Database}.
         */
        @Override
        public com.aliyun.ros.cdk.polardbx.Database build() {
            return new com.aliyun.ros.cdk.polardbx.Database(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
