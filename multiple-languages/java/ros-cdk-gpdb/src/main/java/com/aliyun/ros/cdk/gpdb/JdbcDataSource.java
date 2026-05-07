package com.aliyun.ros.cdk.gpdb;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::GPDB::JdbcDataSource</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:50.959Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.gpdb.$Module.class, fqn = "@alicloud/ros-cdk-gpdb.JdbcDataSource")
public class JdbcDataSource extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.gpdb.IJdbcDataSource {

    protected JdbcDataSource(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected JdbcDataSource(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public JdbcDataSource(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.gpdb.JdbcDataSourceProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public JdbcDataSource(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.gpdb.JdbcDataSourceProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ConnectionMessage: Return Information: If the connection fails, an error message is returned.
     * <p>
     * Otherwise, "" is returned "".
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrConnectionMessage() {
        return software.amazon.jsii.Kernel.get(this, "attrConnectionMessage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ConnectionStatus: Service Status:.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrConnectionStatus() {
        return software.amazon.jsii.Kernel.get(this, "attrConnectionStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CreateTime: The creation time of the resource.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DataSourceDescription: Data Source Description.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDataSourceDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrDataSourceDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DataSourceId: The data source ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDataSourceId() {
        return software.amazon.jsii.Kernel.get(this, "attrDataSourceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DataSourceName: Data Source Name.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDataSourceName() {
        return software.amazon.jsii.Kernel.get(this, "attrDataSourceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DataSourceType: Data Source Type.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDataSourceType() {
        return software.amazon.jsii.Kernel.get(this, "attrDataSourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ExternalDataServiceId: External Data Service id.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrExternalDataServiceId() {
        return software.amazon.jsii.Kernel.get(this, "attrExternalDataServiceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute JdbcConnectionString: The JDBC connection string.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrJdbcConnectionString() {
        return software.amazon.jsii.Kernel.get(this, "attrJdbcConnectionString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute JdbcPassword: The password of the database account.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrJdbcPassword() {
        return software.amazon.jsii.Kernel.get(this, "attrJdbcPassword", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute JdbcUserName: The name of the database account.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrJdbcUserName() {
        return software.amazon.jsii.Kernel.get(this, "attrJdbcUserName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ModifyTime: Last modification time.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrModifyTime() {
        return software.amazon.jsii.Kernel.get(this, "attrModifyTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute StatusMessage: Service status information, such as exceptions, displays the reason for the exception.
     * <p>
     * A null value in the normal Running state.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrStatusMessage() {
        return software.amazon.jsii.Kernel.get(this, "attrStatusMessage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.gpdb.JdbcDataSourceProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.gpdb.JdbcDataSourceProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.gpdb.JdbcDataSource}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.gpdb.JdbcDataSource> {
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
        private final com.aliyun.ros.cdk.gpdb.JdbcDataSourceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.gpdb.JdbcDataSourceProps.Builder();
        }

        /**
         * Property dbInstanceId: The instance ID.
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
         * @return {@code this}
         * @param dbInstanceId Property dbInstanceId: The instance ID. This parameter is required.
         */
        public Builder dbInstanceId(final com.aliyun.ros.cdk.core.IResolvable dbInstanceId) {
            this.props.dbInstanceId(dbInstanceId);
            return this;
        }

        /**
         * Property jdbcUserName: The name of the database account.
         * <p>
         * @return {@code this}
         * @param jdbcUserName Property jdbcUserName: The name of the database account. This parameter is required.
         */
        public Builder jdbcUserName(final java.lang.String jdbcUserName) {
            this.props.jdbcUserName(jdbcUserName);
            return this;
        }
        /**
         * Property jdbcUserName: The name of the database account.
         * <p>
         * @return {@code this}
         * @param jdbcUserName Property jdbcUserName: The name of the database account. This parameter is required.
         */
        public Builder jdbcUserName(final com.aliyun.ros.cdk.core.IResolvable jdbcUserName) {
            this.props.jdbcUserName(jdbcUserName);
            return this;
        }

        /**
         * Property dataSourceDescription: Data Source Description.
         * <p>
         * @return {@code this}
         * @param dataSourceDescription Property dataSourceDescription: Data Source Description. This parameter is required.
         */
        public Builder dataSourceDescription(final java.lang.String dataSourceDescription) {
            this.props.dataSourceDescription(dataSourceDescription);
            return this;
        }
        /**
         * Property dataSourceDescription: Data Source Description.
         * <p>
         * @return {@code this}
         * @param dataSourceDescription Property dataSourceDescription: Data Source Description. This parameter is required.
         */
        public Builder dataSourceDescription(final com.aliyun.ros.cdk.core.IResolvable dataSourceDescription) {
            this.props.dataSourceDescription(dataSourceDescription);
            return this;
        }

        /**
         * Property dataSourceName: Data Source Name.
         * <p>
         * @return {@code this}
         * @param dataSourceName Property dataSourceName: Data Source Name. This parameter is required.
         */
        public Builder dataSourceName(final java.lang.String dataSourceName) {
            this.props.dataSourceName(dataSourceName);
            return this;
        }
        /**
         * Property dataSourceName: Data Source Name.
         * <p>
         * @return {@code this}
         * @param dataSourceName Property dataSourceName: Data Source Name. This parameter is required.
         */
        public Builder dataSourceName(final com.aliyun.ros.cdk.core.IResolvable dataSourceName) {
            this.props.dataSourceName(dataSourceName);
            return this;
        }

        /**
         * Property dataSourceType: Data Source Type.
         * <p>
         * @return {@code this}
         * @param dataSourceType Property dataSourceType: Data Source Type. This parameter is required.
         */
        public Builder dataSourceType(final java.lang.String dataSourceType) {
            this.props.dataSourceType(dataSourceType);
            return this;
        }
        /**
         * Property dataSourceType: Data Source Type.
         * <p>
         * @return {@code this}
         * @param dataSourceType Property dataSourceType: Data Source Type. This parameter is required.
         */
        public Builder dataSourceType(final com.aliyun.ros.cdk.core.IResolvable dataSourceType) {
            this.props.dataSourceType(dataSourceType);
            return this;
        }

        /**
         * Property jdbcConnectionString: The JDBC connection string.
         * <p>
         * @return {@code this}
         * @param jdbcConnectionString Property jdbcConnectionString: The JDBC connection string. This parameter is required.
         */
        public Builder jdbcConnectionString(final java.lang.String jdbcConnectionString) {
            this.props.jdbcConnectionString(jdbcConnectionString);
            return this;
        }
        /**
         * Property jdbcConnectionString: The JDBC connection string.
         * <p>
         * @return {@code this}
         * @param jdbcConnectionString Property jdbcConnectionString: The JDBC connection string. This parameter is required.
         */
        public Builder jdbcConnectionString(final com.aliyun.ros.cdk.core.IResolvable jdbcConnectionString) {
            this.props.jdbcConnectionString(jdbcConnectionString);
            return this;
        }

        /**
         * Property jdbcPassword: The password of the database account.
         * <p>
         * @return {@code this}
         * @param jdbcPassword Property jdbcPassword: The password of the database account. This parameter is required.
         */
        public Builder jdbcPassword(final java.lang.String jdbcPassword) {
            this.props.jdbcPassword(jdbcPassword);
            return this;
        }
        /**
         * Property jdbcPassword: The password of the database account.
         * <p>
         * @return {@code this}
         * @param jdbcPassword Property jdbcPassword: The password of the database account. This parameter is required.
         */
        public Builder jdbcPassword(final com.aliyun.ros.cdk.core.IResolvable jdbcPassword) {
            this.props.jdbcPassword(jdbcPassword);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.gpdb.JdbcDataSource}.
         */
        @Override
        public com.aliyun.ros.cdk.gpdb.JdbcDataSource build() {
            return new com.aliyun.ros.cdk.gpdb.JdbcDataSource(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
