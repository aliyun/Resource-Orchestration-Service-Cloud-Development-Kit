package com.aliyun.ros.cdk.aligreen;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::Aligreen::BizType</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:52.161Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.aligreen.$Module.class, fqn = "@alicloud/ros-cdk-aligreen.BizType")
public class BizType extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.aligreen.IBizType {

    protected BizType(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected BizType(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public BizType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.aligreen.BizTypeProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public BizType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.aligreen.BizTypeProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute BizTypeName: The name of the business scenario defined by the customer.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrBizTypeName() {
        return software.amazon.jsii.Kernel.get(this, "attrBizTypeName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CiteTemplate: Specifies whether to import the configuration of an industry template.
     * <p>
     * Default value: false.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCiteTemplate() {
        return software.amazon.jsii.Kernel.get(this, "attrCiteTemplate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Description: The description of the business scenario defined by the customer.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute IndustryInfo: The industry classification.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrIndustryInfo() {
        return software.amazon.jsii.Kernel.get(this, "attrIndustryInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.aligreen.BizTypeProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.aligreen.BizTypeProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.aligreen.BizType}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.aligreen.BizType> {
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
        private final com.aliyun.ros.cdk.aligreen.BizTypeProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.aligreen.BizTypeProps.Builder();
        }

        /**
         * Property bizTypeName: The name of the business scenario defined by the customer.
         * <p>
         * It can contain no more than 32 characters in English, numbers, and underscores.
         * <p>
         * @return {@code this}
         * @param bizTypeName Property bizTypeName: The name of the business scenario defined by the customer. This parameter is required.
         */
        public Builder bizTypeName(final java.lang.String bizTypeName) {
            this.props.bizTypeName(bizTypeName);
            return this;
        }
        /**
         * Property bizTypeName: The name of the business scenario defined by the customer.
         * <p>
         * It can contain no more than 32 characters in English, numbers, and underscores.
         * <p>
         * @return {@code this}
         * @param bizTypeName Property bizTypeName: The name of the business scenario defined by the customer. This parameter is required.
         */
        public Builder bizTypeName(final com.aliyun.ros.cdk.core.IResolvable bizTypeName) {
            this.props.bizTypeName(bizTypeName);
            return this;
        }

        /**
         * Property citeTemplate: Specifies whether to import the configuration of an industry template.
         * <p>
         * Default value: false. Valid values:
         * true: imports the configuration of an industry template.
         * false: does not import the configuration of an industry template. If the value is true, you must specify the industryInfo parameter.
         * <p>
         * @return {@code this}
         * @param citeTemplate Property citeTemplate: Specifies whether to import the configuration of an industry template. This parameter is required.
         */
        public Builder citeTemplate(final java.lang.Boolean citeTemplate) {
            this.props.citeTemplate(citeTemplate);
            return this;
        }
        /**
         * Property citeTemplate: Specifies whether to import the configuration of an industry template.
         * <p>
         * Default value: false. Valid values:
         * true: imports the configuration of an industry template.
         * false: does not import the configuration of an industry template. If the value is true, you must specify the industryInfo parameter.
         * <p>
         * @return {@code this}
         * @param citeTemplate Property citeTemplate: Specifies whether to import the configuration of an industry template. This parameter is required.
         */
        public Builder citeTemplate(final com.aliyun.ros.cdk.core.IResolvable citeTemplate) {
            this.props.citeTemplate(citeTemplate);
            return this;
        }

        /**
         * Property bizTypeImport: The name of the existing business scenario that was imported from when the business scenario was created.
         * <p>
         * @return {@code this}
         * @param bizTypeImport Property bizTypeImport: The name of the existing business scenario that was imported from when the business scenario was created. This parameter is required.
         */
        public Builder bizTypeImport(final java.lang.String bizTypeImport) {
            this.props.bizTypeImport(bizTypeImport);
            return this;
        }
        /**
         * Property bizTypeImport: The name of the existing business scenario that was imported from when the business scenario was created.
         * <p>
         * @return {@code this}
         * @param bizTypeImport Property bizTypeImport: The name of the existing business scenario that was imported from when the business scenario was created. This parameter is required.
         */
        public Builder bizTypeImport(final com.aliyun.ros.cdk.core.IResolvable bizTypeImport) {
            this.props.bizTypeImport(bizTypeImport);
            return this;
        }

        /**
         * Property description: The description of the business scenario defined by the customer, which is a combination of Chinese and English, numbers, and underscores, and cannot exceed 32 characters.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the business scenario defined by the customer, which is a combination of Chinese and English, numbers, and underscores, and cannot exceed 32 characters. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of the business scenario defined by the customer, which is a combination of Chinese and English, numbers, and underscores, and cannot exceed 32 characters.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the business scenario defined by the customer, which is a combination of Chinese and English, numbers, and underscores, and cannot exceed 32 characters. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property industryInfo: The industry classification.
         * <p>
         * For specific types see <a href='https:\/\/help.aliyun.com\/document_detail\/210982.html' target='_blank'>CreateBizType</a>.
         * <p>
         * @return {@code this}
         * @param industryInfo Property industryInfo: The industry classification. This parameter is required.
         */
        public Builder industryInfo(final java.lang.String industryInfo) {
            this.props.industryInfo(industryInfo);
            return this;
        }
        /**
         * Property industryInfo: The industry classification.
         * <p>
         * For specific types see <a href='https:\/\/help.aliyun.com\/document_detail\/210982.html' target='_blank'>CreateBizType</a>.
         * <p>
         * @return {@code this}
         * @param industryInfo Property industryInfo: The industry classification. This parameter is required.
         */
        public Builder industryInfo(final com.aliyun.ros.cdk.core.IResolvable industryInfo) {
            this.props.industryInfo(industryInfo);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.aligreen.BizType}.
         */
        @Override
        public com.aliyun.ros.cdk.aligreen.BizType build() {
            return new com.aliyun.ros.cdk.aligreen.BizType(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
