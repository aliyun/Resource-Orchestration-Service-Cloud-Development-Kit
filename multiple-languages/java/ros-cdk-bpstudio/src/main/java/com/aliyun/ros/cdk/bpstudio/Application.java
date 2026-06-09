package com.aliyun.ros.cdk.bpstudio;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::BPStudio::Application</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T10:37:10.194Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.bpstudio.$Module.class, fqn = "@alicloud/ros-cdk-bpstudio.Application")
public class Application extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.bpstudio.IApplication {

    protected Application(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Application(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Application(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.bpstudio.ApplicationProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Application(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.bpstudio.ApplicationProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ApplicationId: The ID of the application.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrApplicationId() {
        return software.amazon.jsii.Kernel.get(this, "attrApplicationId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ApplicationName: Product Application.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrApplicationName() {
        return software.amazon.jsii.Kernel.get(this, "attrApplicationName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ImageUrl: The Picture in the OSS Storage Address.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageUrl() {
        return software.amazon.jsii.Kernel.get(this, "attrImageUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute TemplateId: The ID of the template.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTemplateId() {
        return software.amazon.jsii.Kernel.get(this, "attrTemplateId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.bpstudio.ApplicationProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.bpstudio.ApplicationProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.bpstudio.Application}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.bpstudio.Application> {
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
        private final com.aliyun.ros.cdk.bpstudio.ApplicationProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.bpstudio.ApplicationProps.Builder();
        }

        /**
         * Property imageUrl: The Picture in the OSS Storage Address.
         * <p>
         * @return {@code this}
         * @param imageUrl Property imageUrl: The Picture in the OSS Storage Address. This parameter is required.
         */
        public Builder imageUrl(final java.lang.String imageUrl) {
            this.props.imageUrl(imageUrl);
            return this;
        }
        /**
         * Property imageUrl: The Picture in the OSS Storage Address.
         * <p>
         * @return {@code this}
         * @param imageUrl Property imageUrl: The Picture in the OSS Storage Address. This parameter is required.
         */
        public Builder imageUrl(final com.aliyun.ros.cdk.core.IResolvable imageUrl) {
            this.props.imageUrl(imageUrl);
            return this;
        }

        /**
         * Property templateId: The ID of the template.
         * <p>
         * @return {@code this}
         * @param templateId Property templateId: The ID of the template. This parameter is required.
         */
        public Builder templateId(final java.lang.String templateId) {
            this.props.templateId(templateId);
            return this;
        }
        /**
         * Property templateId: The ID of the template.
         * <p>
         * @return {@code this}
         * @param templateId Property templateId: The ID of the template. This parameter is required.
         */
        public Builder templateId(final com.aliyun.ros.cdk.core.IResolvable templateId) {
            this.props.templateId(templateId);
            return this;
        }

        /**
         * Property topoUrl: Topo.
         * <p>
         * Json Files in OSS Address.
         * <p>
         * @return {@code this}
         * @param topoUrl Property topoUrl: Topo. This parameter is required.
         */
        public Builder topoUrl(final java.lang.String topoUrl) {
            this.props.topoUrl(topoUrl);
            return this;
        }
        /**
         * Property topoUrl: Topo.
         * <p>
         * Json Files in OSS Address.
         * <p>
         * @return {@code this}
         * @param topoUrl Property topoUrl: Topo. This parameter is required.
         */
        public Builder topoUrl(final com.aliyun.ros.cdk.core.IResolvable topoUrl) {
            this.props.topoUrl(topoUrl);
            return this;
        }

        /**
         * Property applicationName: The name of the resource.
         * <p>
         * @return {@code this}
         * @param applicationName Property applicationName: The name of the resource. This parameter is required.
         */
        public Builder applicationName(final java.lang.String applicationName) {
            this.props.applicationName(applicationName);
            return this;
        }
        /**
         * Property applicationName: The name of the resource.
         * <p>
         * @return {@code this}
         * @param applicationName Property applicationName: The name of the resource. This parameter is required.
         */
        public Builder applicationName(final com.aliyun.ros.cdk.core.IResolvable applicationName) {
            this.props.applicationName(applicationName);
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
         * @return a newly built instance of {@link com.aliyun.ros.cdk.bpstudio.Application}.
         */
        @Override
        public com.aliyun.ros.cdk.bpstudio.Application build() {
            return new com.aliyun.ros.cdk.bpstudio.Application(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
