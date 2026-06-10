package com.aliyun.ros.cdk.dataworks;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::DataWorks::DataSourceSharedRule</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T11:09:51.184Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dataworks.$Module.class, fqn = "@alicloud/ros-cdk-dataworks.DataSourceSharedRule")
public class DataSourceSharedRule extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.dataworks.IDataSourceSharedRule {

    protected DataSourceSharedRule(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected DataSourceSharedRule(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public DataSourceSharedRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dataworks.DataSourceSharedRuleProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public DataSourceSharedRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dataworks.DataSourceSharedRuleProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute CreateTime: The creation time of the data source sharing rule.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CreateUser: Creator of the data source permission policy.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateUser() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateUser", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DataSourceId: The ID of the data source, that is, the unique identifier of the data source.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDataSourceId() {
        return software.amazon.jsii.Kernel.get(this, "attrDataSourceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DataSourceSharedRuleId: The data source sharing rule ID, that is, the unique identifier of the data source sharing rule.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDataSourceSharedRuleId() {
        return software.amazon.jsii.Kernel.get(this, "attrDataSourceSharedRuleId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute EnvType: The environment type of the data source shared to the target project, such as Dev (Development Environment) and Prod (production environment).
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnvType() {
        return software.amazon.jsii.Kernel.get(this, "attrEnvType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SharedDataSourceName: The name of the data source shared to the target space.
     * <p>
     * Consists of the name of the source space and the name of the data source, separated by dots.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSharedDataSourceName() {
        return software.amazon.jsii.Kernel.get(this, "attrSharedDataSourceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SharedUser: The target user of the data source permission policy, which is null to share to the project.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSharedUser() {
        return software.amazon.jsii.Kernel.get(this, "attrSharedUser", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SourceProjectId: The ID of the project to which the data source is originally created.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceProjectId() {
        return software.amazon.jsii.Kernel.get(this, "attrSourceProjectId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute TargetProjectId: The ID of the project to which the data source is shared.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTargetProjectId() {
        return software.amazon.jsii.Kernel.get(this, "attrTargetProjectId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dataworks.DataSourceSharedRuleProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.dataworks.DataSourceSharedRuleProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.dataworks.DataSourceSharedRule}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.dataworks.DataSourceSharedRule> {
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
        private final com.aliyun.ros.cdk.dataworks.DataSourceSharedRuleProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.dataworks.DataSourceSharedRuleProps.Builder();
        }

        /**
         * Property dataSourceId: The ID of the data source, that is, the unique identifier of the data source.
         * <p>
         * @return {@code this}
         * @param dataSourceId Property dataSourceId: The ID of the data source, that is, the unique identifier of the data source. This parameter is required.
         */
        public Builder dataSourceId(final java.lang.Number dataSourceId) {
            this.props.dataSourceId(dataSourceId);
            return this;
        }
        /**
         * Property dataSourceId: The ID of the data source, that is, the unique identifier of the data source.
         * <p>
         * @return {@code this}
         * @param dataSourceId Property dataSourceId: The ID of the data source, that is, the unique identifier of the data source. This parameter is required.
         */
        public Builder dataSourceId(final com.aliyun.ros.cdk.core.IResolvable dataSourceId) {
            this.props.dataSourceId(dataSourceId);
            return this;
        }

        /**
         * Property envType: The environment type of the data source shared to the target project, such as Dev (Development Environment) and Prod (production environment).
         * <p>
         * @return {@code this}
         * @param envType Property envType: The environment type of the data source shared to the target project, such as Dev (Development Environment) and Prod (production environment). This parameter is required.
         */
        public Builder envType(final java.lang.String envType) {
            this.props.envType(envType);
            return this;
        }
        /**
         * Property envType: The environment type of the data source shared to the target project, such as Dev (Development Environment) and Prod (production environment).
         * <p>
         * @return {@code this}
         * @param envType Property envType: The environment type of the data source shared to the target project, such as Dev (Development Environment) and Prod (production environment). This parameter is required.
         */
        public Builder envType(final com.aliyun.ros.cdk.core.IResolvable envType) {
            this.props.envType(envType);
            return this;
        }

        /**
         * Property targetProjectId: The ID of the project to which the data source is shared.
         * <p>
         * @return {@code this}
         * @param targetProjectId Property targetProjectId: The ID of the project to which the data source is shared. This parameter is required.
         */
        public Builder targetProjectId(final java.lang.Number targetProjectId) {
            this.props.targetProjectId(targetProjectId);
            return this;
        }
        /**
         * Property targetProjectId: The ID of the project to which the data source is shared.
         * <p>
         * @return {@code this}
         * @param targetProjectId Property targetProjectId: The ID of the project to which the data source is shared. This parameter is required.
         */
        public Builder targetProjectId(final com.aliyun.ros.cdk.core.IResolvable targetProjectId) {
            this.props.targetProjectId(targetProjectId);
            return this;
        }

        /**
         * Property sharedUser: The target user of the data source permission policy, which is null to share to the project.
         * <p>
         * @return {@code this}
         * @param sharedUser Property sharedUser: The target user of the data source permission policy, which is null to share to the project. This parameter is required.
         */
        public Builder sharedUser(final java.lang.String sharedUser) {
            this.props.sharedUser(sharedUser);
            return this;
        }
        /**
         * Property sharedUser: The target user of the data source permission policy, which is null to share to the project.
         * <p>
         * @return {@code this}
         * @param sharedUser Property sharedUser: The target user of the data source permission policy, which is null to share to the project. This parameter is required.
         */
        public Builder sharedUser(final com.aliyun.ros.cdk.core.IResolvable sharedUser) {
            this.props.sharedUser(sharedUser);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.dataworks.DataSourceSharedRule}.
         */
        @Override
        public com.aliyun.ros.cdk.dataworks.DataSourceSharedRule build() {
            return new com.aliyun.ros.cdk.dataworks.DataSourceSharedRule(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
