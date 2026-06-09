package com.aliyun.ros.cdk.paifeaturestore;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::PaiFeatureStore::Datasource</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T13:25:42.642Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.paifeaturestore.$Module.class, fqn = "@alicloud/ros-cdk-paifeaturestore.Datasource")
public class Datasource extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.paifeaturestore.IDatasource {

    protected Datasource(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Datasource(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Datasource(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.paifeaturestore.DatasourceProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Datasource(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.paifeaturestore.DatasourceProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Config: Resource configuration information.
     * <p>
     * The string format is json.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfig() {
        return software.amazon.jsii.Kernel.get(this, "attrConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CreateTime: The creation time of the resource.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DatasourceId: The first ID of the resource.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDatasourceId() {
        return software.amazon.jsii.Kernel.get(this, "attrDatasourceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DatasourceName: The datasource name.
     * <p>
     * Start with a letter or number and contain only letters, numbers, and underscores. The maximum length cannot exceed 63.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDatasourceName() {
        return software.amazon.jsii.Kernel.get(this, "attrDatasourceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Type: Data source type.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrType() {
        return software.amazon.jsii.Kernel.get(this, "attrType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Uri: The resource address of the datasource.
     * <p>
     * The maximum length cannot exceed 64.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrUri() {
        return software.amazon.jsii.Kernel.get(this, "attrUri", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute WorkspaceId: PAI workspace ID, which can be obtained through the ListWorkspaces interface.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrWorkspaceId() {
        return software.amazon.jsii.Kernel.get(this, "attrWorkspaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.paifeaturestore.DatasourceProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.paifeaturestore.DatasourceProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.paifeaturestore.Datasource}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.paifeaturestore.Datasource> {
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
        private final com.aliyun.ros.cdk.paifeaturestore.DatasourceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.paifeaturestore.DatasourceProps.Builder();
        }

        /**
         * Property datasourceName: The datasource name.
         * <p>
         * Start with a letter or number and contain only letters, numbers, and underscores. The maximum length cannot exceed 63.
         * <p>
         * @return {@code this}
         * @param datasourceName Property datasourceName: The datasource name. This parameter is required.
         */
        public Builder datasourceName(final java.lang.String datasourceName) {
            this.props.datasourceName(datasourceName);
            return this;
        }
        /**
         * Property datasourceName: The datasource name.
         * <p>
         * Start with a letter or number and contain only letters, numbers, and underscores. The maximum length cannot exceed 63.
         * <p>
         * @return {@code this}
         * @param datasourceName Property datasourceName: The datasource name. This parameter is required.
         */
        public Builder datasourceName(final com.aliyun.ros.cdk.core.IResolvable datasourceName) {
            this.props.datasourceName(datasourceName);
            return this;
        }

        /**
         * Property instanceId: The ID of FeatureStore instance, which can be obtained through the ListInstances interface.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The ID of FeatureStore instance, which can be obtained through the ListInstances interface. This parameter is required.
         */
        public Builder instanceId(final java.lang.String instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }
        /**
         * Property instanceId: The ID of FeatureStore instance, which can be obtained through the ListInstances interface.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The ID of FeatureStore instance, which can be obtained through the ListInstances interface. This parameter is required.
         */
        public Builder instanceId(final com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }

        /**
         * Property type: Data source type.
         * <p>
         * The value is as follows:
         * <p>
         * <ul>
         * <li>Hologres</li>
         * <li>GraphCompute</li>
         * <li>FeatureDB</li>
         * <li>MaxCompute.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param type Property type: Data source type. This parameter is required.
         */
        public Builder type(final java.lang.String type) {
            this.props.type(type);
            return this;
        }
        /**
         * Property type: Data source type.
         * <p>
         * The value is as follows:
         * <p>
         * <ul>
         * <li>Hologres</li>
         * <li>GraphCompute</li>
         * <li>FeatureDB</li>
         * <li>MaxCompute.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param type Property type: Data source type. This parameter is required.
         */
        public Builder type(final com.aliyun.ros.cdk.core.IResolvable type) {
            this.props.type(type);
            return this;
        }

        /**
         * Property uri: The resource address of the datasource.
         * <p>
         * The maximum length cannot exceed 64.
         * <p>
         * @return {@code this}
         * @param uri Property uri: The resource address of the datasource. This parameter is required.
         */
        public Builder uri(final java.lang.String uri) {
            this.props.uri(uri);
            return this;
        }
        /**
         * Property uri: The resource address of the datasource.
         * <p>
         * The maximum length cannot exceed 64.
         * <p>
         * @return {@code this}
         * @param uri Property uri: The resource address of the datasource. This parameter is required.
         */
        public Builder uri(final com.aliyun.ros.cdk.core.IResolvable uri) {
            this.props.uri(uri);
            return this;
        }

        /**
         * Property workspaceId: PAI workspace ID, which can be obtained through the ListWorkspaces interface.
         * <p>
         * @return {@code this}
         * @param workspaceId Property workspaceId: PAI workspace ID, which can be obtained through the ListWorkspaces interface. This parameter is required.
         */
        public Builder workspaceId(final java.lang.String workspaceId) {
            this.props.workspaceId(workspaceId);
            return this;
        }
        /**
         * Property workspaceId: PAI workspace ID, which can be obtained through the ListWorkspaces interface.
         * <p>
         * @return {@code this}
         * @param workspaceId Property workspaceId: PAI workspace ID, which can be obtained through the ListWorkspaces interface. This parameter is required.
         */
        public Builder workspaceId(final com.aliyun.ros.cdk.core.IResolvable workspaceId) {
            this.props.workspaceId(workspaceId);
            return this;
        }

        /**
         * Property config: Resource configuration information.
         * <p>
         * The string format is json.
         * <p>
         * @return {@code this}
         * @param config Property config: Resource configuration information. This parameter is required.
         */
        public Builder config(final com.aliyun.ros.cdk.core.IResolvable config) {
            this.props.config(config);
            return this;
        }
        /**
         * Property config: Resource configuration information.
         * <p>
         * The string format is json.
         * <p>
         * @return {@code this}
         * @param config Property config: Resource configuration information. This parameter is required.
         */
        public Builder config(final java.util.Map<java.lang.String, ? extends java.lang.Object> config) {
            this.props.config(config);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.paifeaturestore.Datasource}.
         */
        @Override
        public com.aliyun.ros.cdk.paifeaturestore.Datasource build() {
            return new com.aliyun.ros.cdk.paifeaturestore.Datasource(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
