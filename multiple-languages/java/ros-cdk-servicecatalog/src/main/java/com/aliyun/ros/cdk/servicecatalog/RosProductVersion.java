package com.aliyun.ros.cdk.servicecatalog;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::ServiceCatalog::ProductVersion</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:30.047Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.servicecatalog.$Module.class, fqn = "@alicloud/ros-cdk-servicecatalog.RosProductVersion")
public class RosProductVersion extends com.aliyun.ros.cdk.core.RosResource {

    protected RosProductVersion(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosProductVersion(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.servicecatalog.RosProductVersion.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosProductVersion(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.servicecatalog.RosProductVersionProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrActive() {
        return software.amazon.jsii.Kernel.get(this, "attrActive", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrGuidance() {
        return software.amazon.jsii.Kernel.get(this, "attrGuidance", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrProductId() {
        return software.amazon.jsii.Kernel.get(this, "attrProductId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrProductVersionId() {
        return software.amazon.jsii.Kernel.get(this, "attrProductVersionId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrProductVersionName() {
        return software.amazon.jsii.Kernel.get(this, "attrProductVersionName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTemplateType() {
        return software.amazon.jsii.Kernel.get(this, "attrTemplateType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTemplateUrl() {
        return software.amazon.jsii.Kernel.get(this, "attrTemplateUrl", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getProductId() {
        return software.amazon.jsii.Kernel.get(this, "productId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setProductId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "productId", java.util.Objects.requireNonNull(value, "productId is required"));
    }

    /**
     */
    public void setProductId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "productId", java.util.Objects.requireNonNull(value, "productId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getProductVersionName() {
        return software.amazon.jsii.Kernel.get(this, "productVersionName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setProductVersionName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "productVersionName", java.util.Objects.requireNonNull(value, "productVersionName is required"));
    }

    /**
     */
    public void setProductVersionName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "productVersionName", java.util.Objects.requireNonNull(value, "productVersionName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getTemplateType() {
        return software.amazon.jsii.Kernel.get(this, "templateType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTemplateType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "templateType", java.util.Objects.requireNonNull(value, "templateType is required"));
    }

    /**
     */
    public void setTemplateType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "templateType", java.util.Objects.requireNonNull(value, "templateType is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getTemplateUrl() {
        return software.amazon.jsii.Kernel.get(this, "templateUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTemplateUrl(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "templateUrl", java.util.Objects.requireNonNull(value, "templateUrl is required"));
    }

    /**
     */
    public void setTemplateUrl(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "templateUrl", java.util.Objects.requireNonNull(value, "templateUrl is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getActive() {
        return software.amazon.jsii.Kernel.get(this, "active", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setActive(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "active", value);
    }

    /**
     */
    public void setActive(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "active", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getGuidance() {
        return software.amazon.jsii.Kernel.get(this, "guidance", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setGuidance(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "guidance", value);
    }

    /**
     */
    public void setGuidance(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "guidance", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.servicecatalog.RosProductVersion}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.servicecatalog.RosProductVersion> {
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
        private final com.aliyun.ros.cdk.servicecatalog.RosProductVersionProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.servicecatalog.RosProductVersionProps.Builder();
        }

        /**
         * @return {@code this}
         * @param productId This parameter is required.
         */
        public Builder productId(final java.lang.String productId) {
            this.props.productId(productId);
            return this;
        }
        /**
         * @return {@code this}
         * @param productId This parameter is required.
         */
        public Builder productId(final com.aliyun.ros.cdk.core.IResolvable productId) {
            this.props.productId(productId);
            return this;
        }

        /**
         * @return {@code this}
         * @param productVersionName This parameter is required.
         */
        public Builder productVersionName(final java.lang.String productVersionName) {
            this.props.productVersionName(productVersionName);
            return this;
        }
        /**
         * @return {@code this}
         * @param productVersionName This parameter is required.
         */
        public Builder productVersionName(final com.aliyun.ros.cdk.core.IResolvable productVersionName) {
            this.props.productVersionName(productVersionName);
            return this;
        }

        /**
         * @return {@code this}
         * @param templateType This parameter is required.
         */
        public Builder templateType(final java.lang.String templateType) {
            this.props.templateType(templateType);
            return this;
        }
        /**
         * @return {@code this}
         * @param templateType This parameter is required.
         */
        public Builder templateType(final com.aliyun.ros.cdk.core.IResolvable templateType) {
            this.props.templateType(templateType);
            return this;
        }

        /**
         * @return {@code this}
         * @param templateUrl This parameter is required.
         */
        public Builder templateUrl(final java.lang.String templateUrl) {
            this.props.templateUrl(templateUrl);
            return this;
        }
        /**
         * @return {@code this}
         * @param templateUrl This parameter is required.
         */
        public Builder templateUrl(final com.aliyun.ros.cdk.core.IResolvable templateUrl) {
            this.props.templateUrl(templateUrl);
            return this;
        }

        /**
         * @return {@code this}
         * @param active This parameter is required.
         */
        public Builder active(final java.lang.Boolean active) {
            this.props.active(active);
            return this;
        }
        /**
         * @return {@code this}
         * @param active This parameter is required.
         */
        public Builder active(final com.aliyun.ros.cdk.core.IResolvable active) {
            this.props.active(active);
            return this;
        }

        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * @return {@code this}
         * @param guidance This parameter is required.
         */
        public Builder guidance(final java.lang.String guidance) {
            this.props.guidance(guidance);
            return this;
        }
        /**
         * @return {@code this}
         * @param guidance This parameter is required.
         */
        public Builder guidance(final com.aliyun.ros.cdk.core.IResolvable guidance) {
            this.props.guidance(guidance);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.servicecatalog.RosProductVersion}.
         */
        @Override
        public com.aliyun.ros.cdk.servicecatalog.RosProductVersion build() {
            return new com.aliyun.ros.cdk.servicecatalog.RosProductVersion(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
