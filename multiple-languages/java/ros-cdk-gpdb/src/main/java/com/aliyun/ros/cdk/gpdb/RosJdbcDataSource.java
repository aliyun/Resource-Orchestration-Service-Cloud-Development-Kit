package com.aliyun.ros.cdk.gpdb;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::GPDB::JdbcDataSource</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T12:13:37.809Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.gpdb.$Module.class, fqn = "@alicloud/ros-cdk-gpdb.RosJdbcDataSource")
public class RosJdbcDataSource extends com.aliyun.ros.cdk.core.RosResource {

    protected RosJdbcDataSource(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosJdbcDataSource(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.gpdb.RosJdbcDataSource.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosJdbcDataSource(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.gpdb.RosJdbcDataSourceProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), java.util.Objects.requireNonNull(enableResourcePropertyConstraint, "enableResourcePropertyConstraint is required") });
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> renderProperties(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> props) {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.call(this, "renderProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)), new Object[] { java.util.Objects.requireNonNull(props, "props is required") }));
    }

    /**
     * The resource type name for this resource class.
     */
    public final static java.lang.String ROS_RESOURCE_TYPE_NAME;

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrConnectionMessage() {
        return software.amazon.jsii.Kernel.get(this, "attrConnectionMessage", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrConnectionStatus() {
        return software.amazon.jsii.Kernel.get(this, "attrConnectionStatus", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDataSourceDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrDataSourceDescription", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDataSourceId() {
        return software.amazon.jsii.Kernel.get(this, "attrDataSourceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDataSourceName() {
        return software.amazon.jsii.Kernel.get(this, "attrDataSourceName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDataSourceType() {
        return software.amazon.jsii.Kernel.get(this, "attrDataSourceType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrExternalDataServiceId() {
        return software.amazon.jsii.Kernel.get(this, "attrExternalDataServiceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrJdbcConnectionString() {
        return software.amazon.jsii.Kernel.get(this, "attrJdbcConnectionString", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrJdbcPassword() {
        return software.amazon.jsii.Kernel.get(this, "attrJdbcPassword", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrJdbcUserName() {
        return software.amazon.jsii.Kernel.get(this, "attrJdbcUserName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrModifyTime() {
        return software.amazon.jsii.Kernel.get(this, "attrModifyTime", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrStatusMessage() {
        return software.amazon.jsii.Kernel.get(this, "attrStatusMessage", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDbInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "dbInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDbInstanceId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dbInstanceId", java.util.Objects.requireNonNull(value, "dbInstanceId is required"));
    }

    /**
     */
    public void setDbInstanceId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dbInstanceId", java.util.Objects.requireNonNull(value, "dbInstanceId is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getJdbcUserName() {
        return software.amazon.jsii.Kernel.get(this, "jdbcUserName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setJdbcUserName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "jdbcUserName", java.util.Objects.requireNonNull(value, "jdbcUserName is required"));
    }

    /**
     */
    public void setJdbcUserName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "jdbcUserName", java.util.Objects.requireNonNull(value, "jdbcUserName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDataSourceDescription() {
        return software.amazon.jsii.Kernel.get(this, "dataSourceDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDataSourceDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dataSourceDescription", value);
    }

    /**
     */
    public void setDataSourceDescription(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dataSourceDescription", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDataSourceName() {
        return software.amazon.jsii.Kernel.get(this, "dataSourceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDataSourceName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dataSourceName", value);
    }

    /**
     */
    public void setDataSourceName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dataSourceName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDataSourceType() {
        return software.amazon.jsii.Kernel.get(this, "dataSourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDataSourceType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dataSourceType", value);
    }

    /**
     */
    public void setDataSourceType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dataSourceType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getJdbcConnectionString() {
        return software.amazon.jsii.Kernel.get(this, "jdbcConnectionString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setJdbcConnectionString(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "jdbcConnectionString", value);
    }

    /**
     */
    public void setJdbcConnectionString(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "jdbcConnectionString", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getJdbcPassword() {
        return software.amazon.jsii.Kernel.get(this, "jdbcPassword", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setJdbcPassword(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "jdbcPassword", value);
    }

    /**
     */
    public void setJdbcPassword(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "jdbcPassword", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.gpdb.RosJdbcDataSource}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.gpdb.RosJdbcDataSource> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
         * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.gpdb.RosJdbcDataSourceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.gpdb.RosJdbcDataSourceProps.Builder();
        }

        /**
         * @return {@code this}
         * @param dbInstanceId This parameter is required.
         */
        public Builder dbInstanceId(final java.lang.String dbInstanceId) {
            this.props.dbInstanceId(dbInstanceId);
            return this;
        }
        /**
         * @return {@code this}
         * @param dbInstanceId This parameter is required.
         */
        public Builder dbInstanceId(final com.aliyun.ros.cdk.core.IResolvable dbInstanceId) {
            this.props.dbInstanceId(dbInstanceId);
            return this;
        }

        /**
         * @return {@code this}
         * @param jdbcUserName This parameter is required.
         */
        public Builder jdbcUserName(final java.lang.String jdbcUserName) {
            this.props.jdbcUserName(jdbcUserName);
            return this;
        }
        /**
         * @return {@code this}
         * @param jdbcUserName This parameter is required.
         */
        public Builder jdbcUserName(final com.aliyun.ros.cdk.core.IResolvable jdbcUserName) {
            this.props.jdbcUserName(jdbcUserName);
            return this;
        }

        /**
         * @return {@code this}
         * @param dataSourceDescription This parameter is required.
         */
        public Builder dataSourceDescription(final java.lang.String dataSourceDescription) {
            this.props.dataSourceDescription(dataSourceDescription);
            return this;
        }
        /**
         * @return {@code this}
         * @param dataSourceDescription This parameter is required.
         */
        public Builder dataSourceDescription(final com.aliyun.ros.cdk.core.IResolvable dataSourceDescription) {
            this.props.dataSourceDescription(dataSourceDescription);
            return this;
        }

        /**
         * @return {@code this}
         * @param dataSourceName This parameter is required.
         */
        public Builder dataSourceName(final java.lang.String dataSourceName) {
            this.props.dataSourceName(dataSourceName);
            return this;
        }
        /**
         * @return {@code this}
         * @param dataSourceName This parameter is required.
         */
        public Builder dataSourceName(final com.aliyun.ros.cdk.core.IResolvable dataSourceName) {
            this.props.dataSourceName(dataSourceName);
            return this;
        }

        /**
         * @return {@code this}
         * @param dataSourceType This parameter is required.
         */
        public Builder dataSourceType(final java.lang.String dataSourceType) {
            this.props.dataSourceType(dataSourceType);
            return this;
        }
        /**
         * @return {@code this}
         * @param dataSourceType This parameter is required.
         */
        public Builder dataSourceType(final com.aliyun.ros.cdk.core.IResolvable dataSourceType) {
            this.props.dataSourceType(dataSourceType);
            return this;
        }

        /**
         * @return {@code this}
         * @param jdbcConnectionString This parameter is required.
         */
        public Builder jdbcConnectionString(final java.lang.String jdbcConnectionString) {
            this.props.jdbcConnectionString(jdbcConnectionString);
            return this;
        }
        /**
         * @return {@code this}
         * @param jdbcConnectionString This parameter is required.
         */
        public Builder jdbcConnectionString(final com.aliyun.ros.cdk.core.IResolvable jdbcConnectionString) {
            this.props.jdbcConnectionString(jdbcConnectionString);
            return this;
        }

        /**
         * @return {@code this}
         * @param jdbcPassword This parameter is required.
         */
        public Builder jdbcPassword(final java.lang.String jdbcPassword) {
            this.props.jdbcPassword(jdbcPassword);
            return this;
        }
        /**
         * @return {@code this}
         * @param jdbcPassword This parameter is required.
         */
        public Builder jdbcPassword(final com.aliyun.ros.cdk.core.IResolvable jdbcPassword) {
            this.props.jdbcPassword(jdbcPassword);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.gpdb.RosJdbcDataSource}.
         */
        @Override
        public com.aliyun.ros.cdk.gpdb.RosJdbcDataSource build() {
            return new com.aliyun.ros.cdk.gpdb.RosJdbcDataSource(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
