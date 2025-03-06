package com.aliyun.ros.cdk.rds;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::RDS::PostgresExtensions</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:09.618Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.rds.$Module.class, fqn = "@alicloud/ros-cdk-rds.PostgresExtensions")
public class PostgresExtensions extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.rds.IPostgresExtensions {

    protected PostgresExtensions(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected PostgresExtensions(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public PostgresExtensions(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.rds.PostgresExtensionsProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public PostgresExtensions(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.rds.PostgresExtensionsProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute InstalledExtensionNames: Extension names installed via ROS.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstalledExtensionNames() {
        return software.amazon.jsii.Kernel.get(this, "attrInstalledExtensionNames", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.rds.PostgresExtensionsProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.rds.PostgresExtensionsProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.rds.PostgresExtensions}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.rds.PostgresExtensions> {
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
        private final com.aliyun.ros.cdk.rds.PostgresExtensionsProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.rds.PostgresExtensionsProps.Builder();
        }

        /**
         * Property accountName: The account of the user who owns the extension.
         * <p>
         * Only privileged accounts are supported.
         * <p>
         * @return {@code this}
         * @param accountName Property accountName: The account of the user who owns the extension. This parameter is required.
         */
        public Builder accountName(final java.lang.String accountName) {
            this.props.accountName(accountName);
            return this;
        }
        /**
         * Property accountName: The account of the user who owns the extension.
         * <p>
         * Only privileged accounts are supported.
         * <p>
         * @return {@code this}
         * @param accountName Property accountName: The account of the user who owns the extension. This parameter is required.
         */
        public Builder accountName(final com.aliyun.ros.cdk.core.IResolvable accountName) {
            this.props.accountName(accountName);
            return this;
        }

        /**
         * Property dbInstanceId: The instance ID.
         * <p>
         * You can call the DescribeDBInstances operation to query the instance ID.
         * <p>
         * @return {@code this}
         * @param dbInstanceId Property dbInstanceId: The instance ID. This parameter is required.
         */
        public Builder dbInstanceId(final java.lang.String dbInstanceId) {
            this.props.dbInstanceId(dbInstanceId);
            return this;
        }
        /**
         * Property dbInstanceId: The instance ID.
         * <p>
         * You can call the DescribeDBInstances operation to query the instance ID.
         * <p>
         * @return {@code this}
         * @param dbInstanceId Property dbInstanceId: The instance ID. This parameter is required.
         */
        public Builder dbInstanceId(final com.aliyun.ros.cdk.core.IResolvable dbInstanceId) {
            this.props.dbInstanceId(dbInstanceId);
            return this;
        }

        /**
         * Property dbName: The database name.
         * <p>
         * You can call the DescribeDatabases operation to query the database name.
         * <p>
         * @return {@code this}
         * @param dbName Property dbName: The database name. This parameter is required.
         */
        public Builder dbName(final java.lang.String dbName) {
            this.props.dbName(dbName);
            return this;
        }
        /**
         * Property dbName: The database name.
         * <p>
         * You can call the DescribeDatabases operation to query the database name.
         * <p>
         * @return {@code this}
         * @param dbName Property dbName: The database name. This parameter is required.
         */
        public Builder dbName(final com.aliyun.ros.cdk.core.IResolvable dbName) {
            this.props.dbName(dbName);
            return this;
        }

        /**
         * Property extensions: The extensions that you want to install.
         * <p>
         * @return {@code this}
         * @param extensions Property extensions: The extensions that you want to install. This parameter is required.
         */
        public Builder extensions(final com.aliyun.ros.cdk.core.IResolvable extensions) {
            this.props.extensions(extensions);
            return this;
        }
        /**
         * Property extensions: The extensions that you want to install.
         * <p>
         * @return {@code this}
         * @param extensions Property extensions: The extensions that you want to install. This parameter is required.
         */
        public Builder extensions(final java.util.List<? extends java.lang.Object> extensions) {
            this.props.extensions(extensions);
            return this;
        }

        /**
         * Property resourceGroupId: The ID of the resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The ID of the resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property riskConfirmed: The risk description that you need to confirm.
         * <p>
         * If your instance runs an outdated minor engine version, installing specific extensions on the instance poses security risks. Proceed with the installation only after you acknowledge these risks. Valid values:
         * true
         * false
         * Note For more information about the risks, see Limits on extension creation for ApsaraDB RDS for PostgreSQL instances.
         * <p>
         * @return {@code this}
         * @param riskConfirmed Property riskConfirmed: The risk description that you need to confirm. This parameter is required.
         */
        public Builder riskConfirmed(final java.lang.Boolean riskConfirmed) {
            this.props.riskConfirmed(riskConfirmed);
            return this;
        }
        /**
         * Property riskConfirmed: The risk description that you need to confirm.
         * <p>
         * If your instance runs an outdated minor engine version, installing specific extensions on the instance poses security risks. Proceed with the installation only after you acknowledge these risks. Valid values:
         * true
         * false
         * Note For more information about the risks, see Limits on extension creation for ApsaraDB RDS for PostgreSQL instances.
         * <p>
         * @return {@code this}
         * @param riskConfirmed Property riskConfirmed: The risk description that you need to confirm. This parameter is required.
         */
        public Builder riskConfirmed(final com.aliyun.ros.cdk.core.IResolvable riskConfirmed) {
            this.props.riskConfirmed(riskConfirmed);
            return this;
        }

        /**
         * Property sourceDatabase: The source database from which you want to synchronize the extension to the destination database.
         * <p>
         * If you do not specify the Extensions parameter, you must specify this parameter.
         * <p>
         * @return {@code this}
         * @param sourceDatabase Property sourceDatabase: The source database from which you want to synchronize the extension to the destination database. This parameter is required.
         */
        public Builder sourceDatabase(final java.lang.String sourceDatabase) {
            this.props.sourceDatabase(sourceDatabase);
            return this;
        }
        /**
         * Property sourceDatabase: The source database from which you want to synchronize the extension to the destination database.
         * <p>
         * If you do not specify the Extensions parameter, you must specify this parameter.
         * <p>
         * @return {@code this}
         * @param sourceDatabase Property sourceDatabase: The source database from which you want to synchronize the extension to the destination database. This parameter is required.
         */
        public Builder sourceDatabase(final com.aliyun.ros.cdk.core.IResolvable sourceDatabase) {
            this.props.sourceDatabase(sourceDatabase);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.rds.PostgresExtensions}.
         */
        @Override
        public com.aliyun.ros.cdk.rds.PostgresExtensions build() {
            return new com.aliyun.ros.cdk.rds.PostgresExtensions(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
