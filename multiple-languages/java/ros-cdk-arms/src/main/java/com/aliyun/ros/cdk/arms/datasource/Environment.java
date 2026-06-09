package com.aliyun.ros.cdk.arms.datasource;

/**
 * This class encapsulates and extends the ROS resource type <code>DATASOURCE::ARMS::Environment</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T10:31:39.119Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.arms.$Module.class, fqn = "@alicloud/ros-cdk-arms.datasource.Environment")
public class Environment extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.arms.datasource.IEnvironment {

    protected Environment(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Environment(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Environment(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.arms.datasource.EnvironmentProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Environment(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.arms.datasource.EnvironmentProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute BindResourceId: The id or vpcId of the bound container instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrBindResourceId() {
        return software.amazon.jsii.Kernel.get(this, "attrBindResourceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute BindResourceType: Binding resource type.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrBindResourceType() {
        return software.amazon.jsii.Kernel.get(this, "attrBindResourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute BindVpcCidr: The network segment of the bound vpc.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrBindVpcCidr() {
        return software.amazon.jsii.Kernel.get(this, "attrBindVpcCidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute EnvironmentId: The first ID of the resource.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnvironmentId() {
        return software.amazon.jsii.Kernel.get(this, "attrEnvironmentId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute EnvironmentName: The name of the resource.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnvironmentName() {
        return software.amazon.jsii.Kernel.get(this, "attrEnvironmentName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute EnvironmentSubType: Subtype of environment.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnvironmentSubType() {
        return software.amazon.jsii.Kernel.get(this, "attrEnvironmentSubType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute EnvironmentType: Type of environment.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnvironmentType() {
        return software.amazon.jsii.Kernel.get(this, "attrEnvironmentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute FeePackage: Paid package.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrFeePackage() {
        return software.amazon.jsii.Kernel.get(this, "attrFeePackage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute GrafanaDatasourceUid: The uid of the Grafana data source.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrGrafanaDatasourceUid() {
        return software.amazon.jsii.Kernel.get(this, "attrGrafanaDatasourceUid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute GrafanaFolderUid: Binding Grafana directory uid.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrGrafanaFolderUid() {
        return software.amazon.jsii.Kernel.get(this, "attrGrafanaFolderUid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ManagedType: Hosting type.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrManagedType() {
        return software.amazon.jsii.Kernel.get(this, "attrManagedType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PrometheusInstanceId: The ID of the prometheus instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrometheusInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrPrometheusInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Tags: The tag of the resource.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
        return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute UserId: User ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserId() {
        return software.amazon.jsii.Kernel.get(this, "attrUserId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.arms.datasource.EnvironmentProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.arms.datasource.EnvironmentProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.arms.datasource.Environment}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.arms.datasource.Environment> {
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
        private final com.aliyun.ros.cdk.arms.datasource.EnvironmentProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.arms.datasource.EnvironmentProps.Builder();
        }

        /**
         * Property environmentId: The first ID of the resource.
         * <p>
         * @return {@code this}
         * @param environmentId Property environmentId: The first ID of the resource. This parameter is required.
         */
        public Builder environmentId(final java.lang.String environmentId) {
            this.props.environmentId(environmentId);
            return this;
        }
        /**
         * Property environmentId: The first ID of the resource.
         * <p>
         * @return {@code this}
         * @param environmentId Property environmentId: The first ID of the resource. This parameter is required.
         */
        public Builder environmentId(final com.aliyun.ros.cdk.core.IResolvable environmentId) {
            this.props.environmentId(environmentId);
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
         * @return a newly built instance of {@link com.aliyun.ros.cdk.arms.datasource.Environment}.
         */
        @Override
        public com.aliyun.ros.cdk.arms.datasource.Environment build() {
            return new com.aliyun.ros.cdk.arms.datasource.Environment(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
