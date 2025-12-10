package com.aliyun.ros.cdk.dms.datasource;

/**
 * This class encapsulates and extends the ROS resource type <code>DATASOURCE::DMS::Database</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:54.568Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dms.$Module.class, fqn = "@alicloud/ros-cdk-dms.datasource.Database")
public class Database extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.dms.datasource.IDatabase {

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
    public Database(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dms.datasource.DatabaseProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Database(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dms.datasource.DatabaseProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute CatalogName: Database catalog name.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCatalogName() {
        return software.amazon.jsii.Kernel.get(this, "attrCatalogName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DatabaseId: Database ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDatabaseId() {
        return software.amazon.jsii.Kernel.get(this, "attrDatabaseId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DbaId: Database administrator ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbaId() {
        return software.amazon.jsii.Kernel.get(this, "attrDbaId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DbaName: Database administrator name.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbaName() {
        return software.amazon.jsii.Kernel.get(this, "attrDbaName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DbType: Database type.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbType() {
        return software.amazon.jsii.Kernel.get(this, "attrDbType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Encoding: Database encoding.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEncoding() {
        return software.amazon.jsii.Kernel.get(this, "attrEncoding", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute EnvType: Database environment type.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnvType() {
        return software.amazon.jsii.Kernel.get(this, "attrEnvType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Host: Database connection address.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHost() {
        return software.amazon.jsii.Kernel.get(this, "attrHost", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InstanceAlias: Database instance alias.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceAlias() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceAlias", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InstanceId: Database instance ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute OwnerIdList: Database owner ID list.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrOwnerIdList() {
        return software.amazon.jsii.Kernel.get(this, "attrOwnerIdList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute OwnerNameList: Database owner name list.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrOwnerNameList() {
        return software.amazon.jsii.Kernel.get(this, "attrOwnerNameList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Port: Database connection port.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPort() {
        return software.amazon.jsii.Kernel.get(this, "attrPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SchemaName: Database schema name.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSchemaName() {
        return software.amazon.jsii.Kernel.get(this, "attrSchemaName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SearchName: Database search name.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSearchName() {
        return software.amazon.jsii.Kernel.get(this, "attrSearchName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Sid: Database SID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSid() {
        return software.amazon.jsii.Kernel.get(this, "attrSid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute State: Database state.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrState() {
        return software.amazon.jsii.Kernel.get(this, "attrState", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dms.datasource.DatabaseProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.dms.datasource.DatabaseProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.dms.datasource.Database}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.dms.datasource.Database> {
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
        private final com.aliyun.ros.cdk.dms.datasource.DatabaseProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.dms.datasource.DatabaseProps.Builder();
        }

        /**
         * Property host: Database connection address.
         * <p>
         * @return {@code this}
         * @param host Property host: Database connection address. This parameter is required.
         */
        public Builder host(final java.lang.String host) {
            this.props.host(host);
            return this;
        }
        /**
         * Property host: Database connection address.
         * <p>
         * @return {@code this}
         * @param host Property host: Database connection address. This parameter is required.
         */
        public Builder host(final com.aliyun.ros.cdk.core.IResolvable host) {
            this.props.host(host);
            return this;
        }

        /**
         * Property port: Database connection port.
         * <p>
         * @return {@code this}
         * @param port Property port: Database connection port. This parameter is required.
         */
        public Builder port(final java.lang.Number port) {
            this.props.port(port);
            return this;
        }
        /**
         * Property port: Database connection port.
         * <p>
         * @return {@code this}
         * @param port Property port: Database connection port. This parameter is required.
         */
        public Builder port(final com.aliyun.ros.cdk.core.IResolvable port) {
            this.props.port(port);
            return this;
        }

        /**
         * Property schemaName: Database schema name.
         * <p>
         * @return {@code this}
         * @param schemaName Property schemaName: Database schema name. This parameter is required.
         */
        public Builder schemaName(final java.lang.String schemaName) {
            this.props.schemaName(schemaName);
            return this;
        }
        /**
         * Property schemaName: Database schema name.
         * <p>
         * @return {@code this}
         * @param schemaName Property schemaName: Database schema name. This parameter is required.
         */
        public Builder schemaName(final com.aliyun.ros.cdk.core.IResolvable schemaName) {
            this.props.schemaName(schemaName);
            return this;
        }

        /**
         * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         * <li>Always: Always refresh the datasource resource when the stack is updated.
         * Default is Never.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. This parameter is required.
         */
        public Builder refreshOptions(final java.lang.String refreshOptions) {
            this.props.refreshOptions(refreshOptions);
            return this;
        }
        /**
         * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         * <li>Always: Always refresh the datasource resource when the stack is updated.
         * Default is Never.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. This parameter is required.
         */
        public Builder refreshOptions(final com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.props.refreshOptions(refreshOptions);
            return this;
        }

        /**
         * Property sid: Database SID.
         * <p>
         * @return {@code this}
         * @param sid Property sid: Database SID. This parameter is required.
         */
        public Builder sid(final java.lang.String sid) {
            this.props.sid(sid);
            return this;
        }
        /**
         * Property sid: Database SID.
         * <p>
         * @return {@code this}
         * @param sid Property sid: Database SID. This parameter is required.
         */
        public Builder sid(final com.aliyun.ros.cdk.core.IResolvable sid) {
            this.props.sid(sid);
            return this;
        }

        /**
         * Property tid: The tenant ID.
         * <p>
         * @return {@code this}
         * @param tid Property tid: The tenant ID. This parameter is required.
         */
        public Builder tid(final java.lang.Number tid) {
            this.props.tid(tid);
            return this;
        }
        /**
         * Property tid: The tenant ID.
         * <p>
         * @return {@code this}
         * @param tid Property tid: The tenant ID. This parameter is required.
         */
        public Builder tid(final com.aliyun.ros.cdk.core.IResolvable tid) {
            this.props.tid(tid);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.dms.datasource.Database}.
         */
        @Override
        public com.aliyun.ros.cdk.dms.datasource.Database build() {
            return new com.aliyun.ros.cdk.dms.datasource.Database(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
