package com.aliyun.ros.cdk.oos.datasource;

/**
 * This class encapsulates and extends the ROS resource type <code>DATASOURCE::OOS::Templates</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:27.409Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oos.$Module.class, fqn = "@alicloud/ros-cdk-oos.datasource.Templates")
public class Templates extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.oos.datasource.ITemplates {

    protected Templates(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Templates(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     * @param enableResourcePropertyConstraint
     */
    public Templates(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.oos.datasource.TemplatesProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props, enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     */
    public Templates(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.oos.datasource.TemplatesProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public Templates(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute TemplateNames: The list of template_names.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTemplateNames() {
        return software.amazon.jsii.Kernel.get(this, "attrTemplateNames", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Templates: The list of templates.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTemplates() {
        return software.amazon.jsii.Kernel.get(this, "attrTemplates", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.oos.datasource.TemplatesProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.oos.datasource.TemplatesProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.oos.datasource.Templates}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.oos.datasource.Templates> {
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
        private com.aliyun.ros.cdk.oos.datasource.TemplatesProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property category: The type of the template.
         * <p>
         * Valid values include TimerTrigger, EventTrigger, AlarmTrigger, and Other.
         * <p>
         * @return {@code this}
         * @param category Property category: The type of the template. This parameter is required.
         */
        public Builder category(final java.lang.String category) {
            this.props().category(category);
            return this;
        }
        /**
         * Property category: The type of the template.
         * <p>
         * Valid values include TimerTrigger, EventTrigger, AlarmTrigger, and Other.
         * <p>
         * @return {@code this}
         * @param category Property category: The type of the template. This parameter is required.
         */
        public Builder category(final com.aliyun.ros.cdk.core.IResolvable category) {
            this.props().category(category);
            return this;
        }

        /**
         * Property createdBy: The creator of the template.
         * <p>
         * @return {@code this}
         * @param createdBy Property createdBy: The creator of the template. This parameter is required.
         */
        public Builder createdBy(final java.lang.String createdBy) {
            this.props().createdBy(createdBy);
            return this;
        }
        /**
         * Property createdBy: The creator of the template.
         * <p>
         * @return {@code this}
         * @param createdBy Property createdBy: The creator of the template. This parameter is required.
         */
        public Builder createdBy(final com.aliyun.ros.cdk.core.IResolvable createdBy) {
            this.props().createdBy(createdBy);
            return this;
        }

        /**
         * Property createdDateAfter: Specifies to query the template that is created at or later than the specified time.The value must be in the YYYY-MM-DDThh:mm:ssZ format.
         * <p>
         * @return {@code this}
         * @param createdDateAfter Property createdDateAfter: Specifies to query the template that is created at or later than the specified time.The value must be in the YYYY-MM-DDThh:mm:ssZ format. This parameter is required.
         */
        public Builder createdDateAfter(final java.lang.String createdDateAfter) {
            this.props().createdDateAfter(createdDateAfter);
            return this;
        }
        /**
         * Property createdDateAfter: Specifies to query the template that is created at or later than the specified time.The value must be in the YYYY-MM-DDThh:mm:ssZ format.
         * <p>
         * @return {@code this}
         * @param createdDateAfter Property createdDateAfter: Specifies to query the template that is created at or later than the specified time.The value must be in the YYYY-MM-DDThh:mm:ssZ format. This parameter is required.
         */
        public Builder createdDateAfter(final com.aliyun.ros.cdk.core.IResolvable createdDateAfter) {
            this.props().createdDateAfter(createdDateAfter);
            return this;
        }

        /**
         * Property createdDateBefore: Specifies to query the template that is created at or before the specified time.The value must be in the YYYY-MM-DDThh:mm::ssZ format.
         * <p>
         * @return {@code this}
         * @param createdDateBefore Property createdDateBefore: Specifies to query the template that is created at or before the specified time.The value must be in the YYYY-MM-DDThh:mm::ssZ format. This parameter is required.
         */
        public Builder createdDateBefore(final java.lang.String createdDateBefore) {
            this.props().createdDateBefore(createdDateBefore);
            return this;
        }
        /**
         * Property createdDateBefore: Specifies to query the template that is created at or before the specified time.The value must be in the YYYY-MM-DDThh:mm::ssZ format.
         * <p>
         * @return {@code this}
         * @param createdDateBefore Property createdDateBefore: Specifies to query the template that is created at or before the specified time.The value must be in the YYYY-MM-DDThh:mm::ssZ format. This parameter is required.
         */
        public Builder createdDateBefore(final com.aliyun.ros.cdk.core.IResolvable createdDateBefore) {
            this.props().createdDateBefore(createdDateBefore);
            return this;
        }

        /**
         * Property hasTrigger: Specifies whether to query the template that is configured with a trigger.
         * <p>
         * @return {@code this}
         * @param hasTrigger Property hasTrigger: Specifies whether to query the template that is configured with a trigger. This parameter is required.
         */
        public Builder hasTrigger(final java.lang.Boolean hasTrigger) {
            this.props().hasTrigger(hasTrigger);
            return this;
        }
        /**
         * Property hasTrigger: Specifies whether to query the template that is configured with a trigger.
         * <p>
         * @return {@code this}
         * @param hasTrigger Property hasTrigger: Specifies whether to query the template that is configured with a trigger. This parameter is required.
         */
        public Builder hasTrigger(final com.aliyun.ros.cdk.core.IResolvable hasTrigger) {
            this.props().hasTrigger(hasTrigger);
            return this;
        }

        /**
         * Property isExample: Specifies whether the template is an example template.
         * <p>
         * @return {@code this}
         * @param isExample Property isExample: Specifies whether the template is an example template. This parameter is required.
         */
        public Builder isExample(final java.lang.Boolean isExample) {
            this.props().isExample(isExample);
            return this;
        }
        /**
         * Property isExample: Specifies whether the template is an example template.
         * <p>
         * @return {@code this}
         * @param isExample Property isExample: Specifies whether the template is an example template. This parameter is required.
         */
        public Builder isExample(final com.aliyun.ros.cdk.core.IResolvable isExample) {
            this.props().isExample(isExample);
            return this;
        }

        /**
         * Property isFavorite: Specifies whether the template is added to favorites.
         * <p>
         * @return {@code this}
         * @param isFavorite Property isFavorite: Specifies whether the template is added to favorites. This parameter is required.
         */
        public Builder isFavorite(final java.lang.Boolean isFavorite) {
            this.props().isFavorite(isFavorite);
            return this;
        }
        /**
         * Property isFavorite: Specifies whether the template is added to favorites.
         * <p>
         * @return {@code this}
         * @param isFavorite Property isFavorite: Specifies whether the template is added to favorites. This parameter is required.
         */
        public Builder isFavorite(final com.aliyun.ros.cdk.core.IResolvable isFavorite) {
            this.props().isFavorite(isFavorite);
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
            this.props().refreshOptions(refreshOptions);
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
            this.props().refreshOptions(refreshOptions);
            return this;
        }

        /**
         * Property resourceGroupId: The ID of the resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props().resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The ID of the resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props().resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property shareType: The share type of the template.
         * <p>
         * Valid values:
         * Public
         * Private
         * <p>
         * @return {@code this}
         * @param shareType Property shareType: The share type of the template. This parameter is required.
         */
        public Builder shareType(final java.lang.String shareType) {
            this.props().shareType(shareType);
            return this;
        }
        /**
         * Property shareType: The share type of the template.
         * <p>
         * Valid values:
         * Public
         * Private
         * <p>
         * @return {@code this}
         * @param shareType Property shareType: The share type of the template. This parameter is required.
         */
        public Builder shareType(final com.aliyun.ros.cdk.core.IResolvable shareType) {
            this.props().shareType(shareType);
            return this;
        }

        /**
         * Property sortField: The field that is used to sort the templates to be queried.
         * <p>
         * Valid values:
         * TotalExecutionCount (default): The system sorts the returned templates based on the total number of times that the templates are used.
         * Popularity: The system sorts the returned templates based on the popularity of the templates.
         * TemplateName: The system sorts the returned templates based on the names of the templates.
         * CreatedDate: The system sorts the returned templates based on the points in time when the templates are created.
         * UpdatedDate: The system sorts the returned templates based on the points in time when the templates are updated.
         * <p>
         * @return {@code this}
         * @param sortField Property sortField: The field that is used to sort the templates to be queried. This parameter is required.
         */
        public Builder sortField(final java.lang.String sortField) {
            this.props().sortField(sortField);
            return this;
        }
        /**
         * Property sortField: The field that is used to sort the templates to be queried.
         * <p>
         * Valid values:
         * TotalExecutionCount (default): The system sorts the returned templates based on the total number of times that the templates are used.
         * Popularity: The system sorts the returned templates based on the popularity of the templates.
         * TemplateName: The system sorts the returned templates based on the names of the templates.
         * CreatedDate: The system sorts the returned templates based on the points in time when the templates are created.
         * UpdatedDate: The system sorts the returned templates based on the points in time when the templates are updated.
         * <p>
         * @return {@code this}
         * @param sortField Property sortField: The field that is used to sort the templates to be queried. This parameter is required.
         */
        public Builder sortField(final com.aliyun.ros.cdk.core.IResolvable sortField) {
            this.props().sortField(sortField);
            return this;
        }

        /**
         * Property sortOrder: The order in which you want to sort the results.
         * <p>
         * Valid values:
         * Ascending: ascending order.
         * Descending: descending order. This is the default value.
         * <p>
         * @return {@code this}
         * @param sortOrder Property sortOrder: The order in which you want to sort the results. This parameter is required.
         */
        public Builder sortOrder(final java.lang.String sortOrder) {
            this.props().sortOrder(sortOrder);
            return this;
        }
        /**
         * Property sortOrder: The order in which you want to sort the results.
         * <p>
         * Valid values:
         * Ascending: ascending order.
         * Descending: descending order. This is the default value.
         * <p>
         * @return {@code this}
         * @param sortOrder Property sortOrder: The order in which you want to sort the results. This parameter is required.
         */
        public Builder sortOrder(final com.aliyun.ros.cdk.core.IResolvable sortOrder) {
            this.props().sortOrder(sortOrder);
            return this;
        }

        /**
         * Property tags: The tag keys and values.
         * <p>
         * The number of key-value pairs ranges from 1 to 20. Example: {"k1":"k2","k2":"v2"}
         * <p>
         * @return {@code this}
         * @param tags Property tags: The tag keys and values. This parameter is required.
         */
        public Builder tags(final java.util.Map<java.lang.String, ? extends java.lang.Object> tags) {
            this.props().tags(tags);
            return this;
        }

        /**
         * Property templateFormat: The format of the template.
         * <p>
         * Valid values:
         * JSON
         * YAML
         * <p>
         * @return {@code this}
         * @param templateFormat Property templateFormat: The format of the template. This parameter is required.
         */
        public Builder templateFormat(final java.lang.String templateFormat) {
            this.props().templateFormat(templateFormat);
            return this;
        }
        /**
         * Property templateFormat: The format of the template.
         * <p>
         * Valid values:
         * JSON
         * YAML
         * <p>
         * @return {@code this}
         * @param templateFormat Property templateFormat: The format of the template. This parameter is required.
         */
        public Builder templateFormat(final com.aliyun.ros.cdk.core.IResolvable templateFormat) {
            this.props().templateFormat(templateFormat);
            return this;
        }

        /**
         * Property templateName: The name of the template.
         * <p>
         * @return {@code this}
         * @param templateName Property templateName: The name of the template. This parameter is required.
         */
        public Builder templateName(final java.lang.String templateName) {
            this.props().templateName(templateName);
            return this;
        }
        /**
         * Property templateName: The name of the template.
         * <p>
         * @return {@code this}
         * @param templateName Property templateName: The name of the template. This parameter is required.
         */
        public Builder templateName(final com.aliyun.ros.cdk.core.IResolvable templateName) {
            this.props().templateName(templateName);
            return this;
        }

        /**
         * Property templateType: The type of the template.
         * <p>
         * Valid values:
         * Automation: the template for automated tasks.
         * State: the template for configuration inventories.
         * Package: the template for software packages.
         * <p>
         * @return {@code this}
         * @param templateType Property templateType: The type of the template. This parameter is required.
         */
        public Builder templateType(final java.lang.String templateType) {
            this.props().templateType(templateType);
            return this;
        }
        /**
         * Property templateType: The type of the template.
         * <p>
         * Valid values:
         * Automation: the template for automated tasks.
         * State: the template for configuration inventories.
         * Package: the template for software packages.
         * <p>
         * @return {@code this}
         * @param templateType Property templateType: The type of the template. This parameter is required.
         */
        public Builder templateType(final com.aliyun.ros.cdk.core.IResolvable templateType) {
            this.props().templateType(templateType);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.oos.datasource.Templates}.
         */
        @Override
        public com.aliyun.ros.cdk.oos.datasource.Templates build() {
            return new com.aliyun.ros.cdk.oos.datasource.Templates(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.oos.datasource.TemplatesProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.oos.datasource.TemplatesProps.Builder();
            }
            return this.props;
        }
    }
}
