package com.aliyun.ros.cdk.resourcemanager;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ResourceManager::SavedQuery</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:29.541Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.resourcemanager.$Module.class, fqn = "@alicloud/ros-cdk-resourcemanager.SavedQuery")
public class SavedQuery extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.resourcemanager.ISavedQuery {

    protected SavedQuery(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected SavedQuery(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public SavedQuery(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.resourcemanager.SavedQueryProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public SavedQuery(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.resourcemanager.SavedQueryProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute CreateTime: The creation time of the template.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Description: The description of the template.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Expression: Query Expression of the template.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpression() {
        return software.amazon.jsii.Kernel.get(this, "attrExpression", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SavedQueryId: The id of the template.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSavedQueryId() {
        return software.amazon.jsii.Kernel.get(this, "attrSavedQueryId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SavedQueryName: The name of the template.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSavedQueryName() {
        return software.amazon.jsii.Kernel.get(this, "attrSavedQueryName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute UpdateTime: Update time of the template.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrUpdateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.resourcemanager.SavedQueryProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.resourcemanager.SavedQueryProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.resourcemanager.SavedQuery}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.resourcemanager.SavedQuery> {
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
        private final com.aliyun.ros.cdk.resourcemanager.SavedQueryProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.resourcemanager.SavedQueryProps.Builder();
        }

        /**
         * Property expression: The expression of the template.
         * <p>
         * @return {@code this}
         * @param expression Property expression: The expression of the template. This parameter is required.
         */
        public Builder expression(final java.lang.String expression) {
            this.props.expression(expression);
            return this;
        }
        /**
         * Property expression: The expression of the template.
         * <p>
         * @return {@code this}
         * @param expression Property expression: The expression of the template. This parameter is required.
         */
        public Builder expression(final com.aliyun.ros.cdk.core.IResolvable expression) {
            this.props.expression(expression);
            return this;
        }

        /**
         * Property savedQueryName: The name of the template.
         * <p>
         * <ul>
         * <li>The name must be 1 to 64 characters in length.</li>
         * <li>The name can contain letters, digits, underscores (_), and hyphens (-).</li>
         * <li>The template name must be unique.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param savedQueryName Property savedQueryName: The name of the template. This parameter is required.
         */
        public Builder savedQueryName(final java.lang.String savedQueryName) {
            this.props.savedQueryName(savedQueryName);
            return this;
        }
        /**
         * Property savedQueryName: The name of the template.
         * <p>
         * <ul>
         * <li>The name must be 1 to 64 characters in length.</li>
         * <li>The name can contain letters, digits, underscores (_), and hyphens (-).</li>
         * <li>The template name must be unique.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param savedQueryName Property savedQueryName: The name of the template. This parameter is required.
         */
        public Builder savedQueryName(final com.aliyun.ros.cdk.core.IResolvable savedQueryName) {
            this.props.savedQueryName(savedQueryName);
            return this;
        }

        /**
         * Property description: The description of the template.
         * <p>
         * The description must be 1 to 256 characters in length.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the template. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of the template.
         * <p>
         * The description must be 1 to 256 characters in length.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the template. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.resourcemanager.SavedQuery}.
         */
        @Override
        public com.aliyun.ros.cdk.resourcemanager.SavedQuery build() {
            return new com.aliyun.ros.cdk.resourcemanager.SavedQuery(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
