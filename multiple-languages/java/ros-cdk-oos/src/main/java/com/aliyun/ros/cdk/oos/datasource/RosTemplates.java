package com.aliyun.ros.cdk.oos.datasource;

/**
 * This class is a base encapsulation around the ROS resource type <code>DATASOURCE::OOS::Templates</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:48.995Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oos.$Module.class, fqn = "@alicloud/ros-cdk-oos.datasource.RosTemplates")
public class RosTemplates extends com.aliyun.ros.cdk.core.RosResource {

    protected RosTemplates(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosTemplates(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.oos.datasource.RosTemplates.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosTemplates(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.oos.datasource.RosTemplatesProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTemplateNames() {
        return software.amazon.jsii.Kernel.get(this, "attrTemplateNames", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTemplates() {
        return software.amazon.jsii.Kernel.get(this, "attrTemplates", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getCategory() {
        return software.amazon.jsii.Kernel.get(this, "category", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCategory(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "category", value);
    }

    /**
     */
    public void setCategory(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "category", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCreatedBy() {
        return software.amazon.jsii.Kernel.get(this, "createdBy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCreatedBy(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "createdBy", value);
    }

    /**
     */
    public void setCreatedBy(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "createdBy", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCreatedDateAfter() {
        return software.amazon.jsii.Kernel.get(this, "createdDateAfter", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCreatedDateAfter(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "createdDateAfter", value);
    }

    /**
     */
    public void setCreatedDateAfter(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "createdDateAfter", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCreatedDateBefore() {
        return software.amazon.jsii.Kernel.get(this, "createdDateBefore", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCreatedDateBefore(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "createdDateBefore", value);
    }

    /**
     */
    public void setCreatedDateBefore(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "createdDateBefore", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getHasTrigger() {
        return software.amazon.jsii.Kernel.get(this, "hasTrigger", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHasTrigger(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "hasTrigger", value);
    }

    /**
     */
    public void setHasTrigger(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "hasTrigger", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getIsExample() {
        return software.amazon.jsii.Kernel.get(this, "isExample", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setIsExample(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "isExample", value);
    }

    /**
     */
    public void setIsExample(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "isExample", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getIsFavorite() {
        return software.amazon.jsii.Kernel.get(this, "isFavorite", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setIsFavorite(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "isFavorite", value);
    }

    /**
     */
    public void setIsFavorite(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "isFavorite", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRefreshOptions() {
        return software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRefreshOptions(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "refreshOptions", value);
    }

    /**
     */
    public void setRefreshOptions(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "refreshOptions", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setResourceGroupId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "resourceGroupId", value);
    }

    /**
     */
    public void setResourceGroupId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "resourceGroupId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getShareType() {
        return software.amazon.jsii.Kernel.get(this, "shareType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setShareType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "shareType", value);
    }

    /**
     */
    public void setShareType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "shareType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSortField() {
        return software.amazon.jsii.Kernel.get(this, "sortField", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSortField(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "sortField", value);
    }

    /**
     */
    public void setSortField(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sortField", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSortOrder() {
        return software.amazon.jsii.Kernel.get(this, "sortOrder", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSortOrder(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "sortOrder", value);
    }

    /**
     */
    public void setSortOrder(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sortOrder", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> getTags() {
        return java.util.Optional.ofNullable((java.util.Map<java.lang.String, java.lang.Object>)(software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))))).map(java.util.Collections::unmodifiableMap).orElse(null);
    }

    /**
     */
    public void setTags(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> value) {
        software.amazon.jsii.Kernel.set(this, "tags", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTemplateFormat() {
        return software.amazon.jsii.Kernel.get(this, "templateFormat", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTemplateFormat(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "templateFormat", value);
    }

    /**
     */
    public void setTemplateFormat(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "templateFormat", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTemplateName() {
        return software.amazon.jsii.Kernel.get(this, "templateName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTemplateName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "templateName", value);
    }

    /**
     */
    public void setTemplateName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "templateName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTemplateType() {
        return software.amazon.jsii.Kernel.get(this, "templateType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTemplateType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "templateType", value);
    }

    /**
     */
    public void setTemplateType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "templateType", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.oos.datasource.RosTemplates}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.oos.datasource.RosTemplates> {
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
        private final com.aliyun.ros.cdk.oos.datasource.RosTemplatesProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.oos.datasource.RosTemplatesProps.Builder();
        }

        /**
         * @return {@code this}
         * @param category This parameter is required.
         */
        public Builder category(final java.lang.String category) {
            this.props.category(category);
            return this;
        }
        /**
         * @return {@code this}
         * @param category This parameter is required.
         */
        public Builder category(final com.aliyun.ros.cdk.core.IResolvable category) {
            this.props.category(category);
            return this;
        }

        /**
         * @return {@code this}
         * @param createdBy This parameter is required.
         */
        public Builder createdBy(final java.lang.String createdBy) {
            this.props.createdBy(createdBy);
            return this;
        }
        /**
         * @return {@code this}
         * @param createdBy This parameter is required.
         */
        public Builder createdBy(final com.aliyun.ros.cdk.core.IResolvable createdBy) {
            this.props.createdBy(createdBy);
            return this;
        }

        /**
         * @return {@code this}
         * @param createdDateAfter This parameter is required.
         */
        public Builder createdDateAfter(final java.lang.String createdDateAfter) {
            this.props.createdDateAfter(createdDateAfter);
            return this;
        }
        /**
         * @return {@code this}
         * @param createdDateAfter This parameter is required.
         */
        public Builder createdDateAfter(final com.aliyun.ros.cdk.core.IResolvable createdDateAfter) {
            this.props.createdDateAfter(createdDateAfter);
            return this;
        }

        /**
         * @return {@code this}
         * @param createdDateBefore This parameter is required.
         */
        public Builder createdDateBefore(final java.lang.String createdDateBefore) {
            this.props.createdDateBefore(createdDateBefore);
            return this;
        }
        /**
         * @return {@code this}
         * @param createdDateBefore This parameter is required.
         */
        public Builder createdDateBefore(final com.aliyun.ros.cdk.core.IResolvable createdDateBefore) {
            this.props.createdDateBefore(createdDateBefore);
            return this;
        }

        /**
         * @return {@code this}
         * @param hasTrigger This parameter is required.
         */
        public Builder hasTrigger(final java.lang.Boolean hasTrigger) {
            this.props.hasTrigger(hasTrigger);
            return this;
        }
        /**
         * @return {@code this}
         * @param hasTrigger This parameter is required.
         */
        public Builder hasTrigger(final com.aliyun.ros.cdk.core.IResolvable hasTrigger) {
            this.props.hasTrigger(hasTrigger);
            return this;
        }

        /**
         * @return {@code this}
         * @param isExample This parameter is required.
         */
        public Builder isExample(final java.lang.Boolean isExample) {
            this.props.isExample(isExample);
            return this;
        }
        /**
         * @return {@code this}
         * @param isExample This parameter is required.
         */
        public Builder isExample(final com.aliyun.ros.cdk.core.IResolvable isExample) {
            this.props.isExample(isExample);
            return this;
        }

        /**
         * @return {@code this}
         * @param isFavorite This parameter is required.
         */
        public Builder isFavorite(final java.lang.Boolean isFavorite) {
            this.props.isFavorite(isFavorite);
            return this;
        }
        /**
         * @return {@code this}
         * @param isFavorite This parameter is required.
         */
        public Builder isFavorite(final com.aliyun.ros.cdk.core.IResolvable isFavorite) {
            this.props.isFavorite(isFavorite);
            return this;
        }

        /**
         * @return {@code this}
         * @param refreshOptions This parameter is required.
         */
        public Builder refreshOptions(final java.lang.String refreshOptions) {
            this.props.refreshOptions(refreshOptions);
            return this;
        }
        /**
         * @return {@code this}
         * @param refreshOptions This parameter is required.
         */
        public Builder refreshOptions(final com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.props.refreshOptions(refreshOptions);
            return this;
        }

        /**
         * @return {@code this}
         * @param resourceGroupId This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * @return {@code this}
         * @param resourceGroupId This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * @return {@code this}
         * @param shareType This parameter is required.
         */
        public Builder shareType(final java.lang.String shareType) {
            this.props.shareType(shareType);
            return this;
        }
        /**
         * @return {@code this}
         * @param shareType This parameter is required.
         */
        public Builder shareType(final com.aliyun.ros.cdk.core.IResolvable shareType) {
            this.props.shareType(shareType);
            return this;
        }

        /**
         * @return {@code this}
         * @param sortField This parameter is required.
         */
        public Builder sortField(final java.lang.String sortField) {
            this.props.sortField(sortField);
            return this;
        }
        /**
         * @return {@code this}
         * @param sortField This parameter is required.
         */
        public Builder sortField(final com.aliyun.ros.cdk.core.IResolvable sortField) {
            this.props.sortField(sortField);
            return this;
        }

        /**
         * @return {@code this}
         * @param sortOrder This parameter is required.
         */
        public Builder sortOrder(final java.lang.String sortOrder) {
            this.props.sortOrder(sortOrder);
            return this;
        }
        /**
         * @return {@code this}
         * @param sortOrder This parameter is required.
         */
        public Builder sortOrder(final com.aliyun.ros.cdk.core.IResolvable sortOrder) {
            this.props.sortOrder(sortOrder);
            return this;
        }

        /**
         * @return {@code this}
         * @param tags This parameter is required.
         */
        public Builder tags(final java.util.Map<java.lang.String, ? extends java.lang.Object> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * @return {@code this}
         * @param templateFormat This parameter is required.
         */
        public Builder templateFormat(final java.lang.String templateFormat) {
            this.props.templateFormat(templateFormat);
            return this;
        }
        /**
         * @return {@code this}
         * @param templateFormat This parameter is required.
         */
        public Builder templateFormat(final com.aliyun.ros.cdk.core.IResolvable templateFormat) {
            this.props.templateFormat(templateFormat);
            return this;
        }

        /**
         * @return {@code this}
         * @param templateName This parameter is required.
         */
        public Builder templateName(final java.lang.String templateName) {
            this.props.templateName(templateName);
            return this;
        }
        /**
         * @return {@code this}
         * @param templateName This parameter is required.
         */
        public Builder templateName(final com.aliyun.ros.cdk.core.IResolvable templateName) {
            this.props.templateName(templateName);
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
         * @return a newly built instance of {@link com.aliyun.ros.cdk.oos.datasource.RosTemplates}.
         */
        @Override
        public com.aliyun.ros.cdk.oos.datasource.RosTemplates build() {
            return new com.aliyun.ros.cdk.oos.datasource.RosTemplates(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
