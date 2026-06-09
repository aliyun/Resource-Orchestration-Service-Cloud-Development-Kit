package com.aliyun.ros.cdk.servicecatalog;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ServiceCatalog::ProductVersion</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T13:53:18.341Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.servicecatalog.$Module.class, fqn = "@alicloud/ros-cdk-servicecatalog.ProductVersion")
public class ProductVersion extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.servicecatalog.IProductVersion {

    protected ProductVersion(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ProductVersion(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public ProductVersion(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.servicecatalog.ProductVersionProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public ProductVersion(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.servicecatalog.ProductVersionProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Active: Specifies whether the product version is active.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrActive() {
        return software.amazon.jsii.Kernel.get(this, "attrActive", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CreateTime: The creation time of the product version.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Description: The description of the product version.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Guidance: The recommendation information.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrGuidance() {
        return software.amazon.jsii.Kernel.get(this, "attrGuidance", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ProductId: The ID of the product to which the product version belongs.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrProductId() {
        return software.amazon.jsii.Kernel.get(this, "attrProductId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ProductVersionId: The ID of the product version.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrProductVersionId() {
        return software.amazon.jsii.Kernel.get(this, "attrProductVersionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ProductVersionName: The name of the product version.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrProductVersionName() {
        return software.amazon.jsii.Kernel.get(this, "attrProductVersionName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute TemplateType: The type of the product template.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTemplateType() {
        return software.amazon.jsii.Kernel.get(this, "attrTemplateType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute TemplateUrl: The URL of the template.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTemplateUrl() {
        return software.amazon.jsii.Kernel.get(this, "attrTemplateUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.servicecatalog.ProductVersionProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.servicecatalog.ProductVersionProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.servicecatalog.ProductVersion}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.servicecatalog.ProductVersion> {
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
        private final com.aliyun.ros.cdk.servicecatalog.ProductVersionProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.servicecatalog.ProductVersionProps.Builder();
        }

        /**
         * Property productId: The ID of the product to which the product version belongs.
         * <p>
         * @return {@code this}
         * @param productId Property productId: The ID of the product to which the product version belongs. This parameter is required.
         */
        public Builder productId(final java.lang.String productId) {
            this.props.productId(productId);
            return this;
        }
        /**
         * Property productId: The ID of the product to which the product version belongs.
         * <p>
         * @return {@code this}
         * @param productId Property productId: The ID of the product to which the product version belongs. This parameter is required.
         */
        public Builder productId(final com.aliyun.ros.cdk.core.IResolvable productId) {
            this.props.productId(productId);
            return this;
        }

        /**
         * Property productVersionName: The name of the product version.
         * <p>
         * @return {@code this}
         * @param productVersionName Property productVersionName: The name of the product version. This parameter is required.
         */
        public Builder productVersionName(final java.lang.String productVersionName) {
            this.props.productVersionName(productVersionName);
            return this;
        }
        /**
         * Property productVersionName: The name of the product version.
         * <p>
         * @return {@code this}
         * @param productVersionName Property productVersionName: The name of the product version. This parameter is required.
         */
        public Builder productVersionName(final com.aliyun.ros.cdk.core.IResolvable productVersionName) {
            this.props.productVersionName(productVersionName);
            return this;
        }

        /**
         * Property templateType: The type of the product template.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>RosTerraformTemplate: the Terraform template that is supported by Resource Orchestration Service (ROS).</li>
         * <li>RosStandardTemplate: the standard ROS template.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param templateType Property templateType: The type of the product template. This parameter is required.
         */
        public Builder templateType(final java.lang.String templateType) {
            this.props.templateType(templateType);
            return this;
        }
        /**
         * Property templateType: The type of the product template.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>RosTerraformTemplate: the Terraform template that is supported by Resource Orchestration Service (ROS).</li>
         * <li>RosStandardTemplate: the standard ROS template.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param templateType Property templateType: The type of the product template. This parameter is required.
         */
        public Builder templateType(final com.aliyun.ros.cdk.core.IResolvable templateType) {
            this.props.templateType(templateType);
            return this;
        }

        /**
         * Property templateUrl: The URL of the template.
         * <p>
         * @return {@code this}
         * @param templateUrl Property templateUrl: The URL of the template. This parameter is required.
         */
        public Builder templateUrl(final java.lang.String templateUrl) {
            this.props.templateUrl(templateUrl);
            return this;
        }
        /**
         * Property templateUrl: The URL of the template.
         * <p>
         * @return {@code this}
         * @param templateUrl Property templateUrl: The URL of the template. This parameter is required.
         */
        public Builder templateUrl(final com.aliyun.ros.cdk.core.IResolvable templateUrl) {
            this.props.templateUrl(templateUrl);
            return this;
        }

        /**
         * Property active: Specifies whether the product version is active.
         * <p>
         * @return {@code this}
         * @param active Property active: Specifies whether the product version is active. This parameter is required.
         */
        public Builder active(final java.lang.Boolean active) {
            this.props.active(active);
            return this;
        }
        /**
         * Property active: Specifies whether the product version is active.
         * <p>
         * @return {@code this}
         * @param active Property active: Specifies whether the product version is active. This parameter is required.
         */
        public Builder active(final com.aliyun.ros.cdk.core.IResolvable active) {
            this.props.active(active);
            return this;
        }

        /**
         * Property description: The description of the product version.
         * <p>
         * The value must be 1 to 128 characters in length.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the product version. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of the product version.
         * <p>
         * The value must be 1 to 128 characters in length.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the product version. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property guidance: The recommendation information.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Default: No recommendation information is provided. This is the default value.</li>
         * <li>Recommended: the recommendation version.</li>
         * <li>Latest: the latest version.</li>
         * <li>Deprecated: the version that is about to be discontinued.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param guidance Property guidance: The recommendation information. This parameter is required.
         */
        public Builder guidance(final java.lang.String guidance) {
            this.props.guidance(guidance);
            return this;
        }
        /**
         * Property guidance: The recommendation information.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Default: No recommendation information is provided. This is the default value.</li>
         * <li>Recommended: the recommendation version.</li>
         * <li>Latest: the latest version.</li>
         * <li>Deprecated: the version that is about to be discontinued.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param guidance Property guidance: The recommendation information. This parameter is required.
         */
        public Builder guidance(final com.aliyun.ros.cdk.core.IResolvable guidance) {
            this.props.guidance(guidance);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.servicecatalog.ProductVersion}.
         */
        @Override
        public com.aliyun.ros.cdk.servicecatalog.ProductVersion build() {
            return new com.aliyun.ros.cdk.servicecatalog.ProductVersion(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
