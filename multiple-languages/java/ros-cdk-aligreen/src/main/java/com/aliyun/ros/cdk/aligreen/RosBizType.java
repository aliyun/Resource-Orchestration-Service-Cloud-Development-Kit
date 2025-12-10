package com.aliyun.ros.cdk.aligreen;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::Aligreen::BizType</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:52.215Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.aligreen.$Module.class, fqn = "@alicloud/ros-cdk-aligreen.RosBizType")
public class RosBizType extends com.aliyun.ros.cdk.core.RosResource {

    protected RosBizType(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosBizType(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.aligreen.RosBizType.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosBizType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.aligreen.RosBizTypeProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrBizTypeName() {
        return software.amazon.jsii.Kernel.get(this, "attrBizTypeName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCiteTemplate() {
        return software.amazon.jsii.Kernel.get(this, "attrCiteTemplate", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrIndustryInfo() {
        return software.amazon.jsii.Kernel.get(this, "attrIndustryInfo", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getBizTypeName() {
        return software.amazon.jsii.Kernel.get(this, "bizTypeName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setBizTypeName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "bizTypeName", java.util.Objects.requireNonNull(value, "bizTypeName is required"));
    }

    /**
     */
    public void setBizTypeName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "bizTypeName", java.util.Objects.requireNonNull(value, "bizTypeName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getCiteTemplate() {
        return software.amazon.jsii.Kernel.get(this, "citeTemplate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCiteTemplate(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "citeTemplate", java.util.Objects.requireNonNull(value, "citeTemplate is required"));
    }

    /**
     */
    public void setCiteTemplate(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "citeTemplate", java.util.Objects.requireNonNull(value, "citeTemplate is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getBizTypeImport() {
        return software.amazon.jsii.Kernel.get(this, "bizTypeImport", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setBizTypeImport(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "bizTypeImport", value);
    }

    /**
     */
    public void setBizTypeImport(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "bizTypeImport", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getIndustryInfo() {
        return software.amazon.jsii.Kernel.get(this, "industryInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setIndustryInfo(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "industryInfo", value);
    }

    /**
     */
    public void setIndustryInfo(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "industryInfo", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.aligreen.RosBizType}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.aligreen.RosBizType> {
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
        private final com.aliyun.ros.cdk.aligreen.RosBizTypeProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.aligreen.RosBizTypeProps.Builder();
        }

        /**
         * @return {@code this}
         * @param bizTypeName This parameter is required.
         */
        public Builder bizTypeName(final java.lang.String bizTypeName) {
            this.props.bizTypeName(bizTypeName);
            return this;
        }
        /**
         * @return {@code this}
         * @param bizTypeName This parameter is required.
         */
        public Builder bizTypeName(final com.aliyun.ros.cdk.core.IResolvable bizTypeName) {
            this.props.bizTypeName(bizTypeName);
            return this;
        }

        /**
         * @return {@code this}
         * @param citeTemplate This parameter is required.
         */
        public Builder citeTemplate(final java.lang.Boolean citeTemplate) {
            this.props.citeTemplate(citeTemplate);
            return this;
        }
        /**
         * @return {@code this}
         * @param citeTemplate This parameter is required.
         */
        public Builder citeTemplate(final com.aliyun.ros.cdk.core.IResolvable citeTemplate) {
            this.props.citeTemplate(citeTemplate);
            return this;
        }

        /**
         * @return {@code this}
         * @param bizTypeImport This parameter is required.
         */
        public Builder bizTypeImport(final java.lang.String bizTypeImport) {
            this.props.bizTypeImport(bizTypeImport);
            return this;
        }
        /**
         * @return {@code this}
         * @param bizTypeImport This parameter is required.
         */
        public Builder bizTypeImport(final com.aliyun.ros.cdk.core.IResolvable bizTypeImport) {
            this.props.bizTypeImport(bizTypeImport);
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
         * @param industryInfo This parameter is required.
         */
        public Builder industryInfo(final java.lang.String industryInfo) {
            this.props.industryInfo(industryInfo);
            return this;
        }
        /**
         * @return {@code this}
         * @param industryInfo This parameter is required.
         */
        public Builder industryInfo(final com.aliyun.ros.cdk.core.IResolvable industryInfo) {
            this.props.industryInfo(industryInfo);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.aligreen.RosBizType}.
         */
        @Override
        public com.aliyun.ros.cdk.aligreen.RosBizType build() {
            return new com.aliyun.ros.cdk.aligreen.RosBizType(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
