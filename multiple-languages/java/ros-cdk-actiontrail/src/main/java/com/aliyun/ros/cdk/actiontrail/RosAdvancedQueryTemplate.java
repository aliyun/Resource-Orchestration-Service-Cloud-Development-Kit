package com.aliyun.ros.cdk.actiontrail;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::ACTIONTRAIL::AdvancedQueryTemplate</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:21.039Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.actiontrail.$Module.class, fqn = "@alicloud/ros-cdk-actiontrail.RosAdvancedQueryTemplate")
public class RosAdvancedQueryTemplate extends com.aliyun.ros.cdk.core.RosResource {

    protected RosAdvancedQueryTemplate(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosAdvancedQueryTemplate(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.actiontrail.RosAdvancedQueryTemplate.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosAdvancedQueryTemplate(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.actiontrail.RosAdvancedQueryTemplateProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTemplateId() {
        return software.amazon.jsii.Kernel.get(this, "attrTemplateId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getSimpleQuery() {
        return software.amazon.jsii.Kernel.get(this, "simpleQuery", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSimpleQuery(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "simpleQuery", java.util.Objects.requireNonNull(value, "simpleQuery is required"));
    }

    /**
     */
    public void setSimpleQuery(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "simpleQuery", java.util.Objects.requireNonNull(value, "simpleQuery is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getTemplateSql() {
        return software.amazon.jsii.Kernel.get(this, "templateSql", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTemplateSql(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "templateSql", java.util.Objects.requireNonNull(value, "templateSql is required"));
    }

    /**
     */
    public void setTemplateSql(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "templateSql", java.util.Objects.requireNonNull(value, "templateSql is required"));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.actiontrail.RosAdvancedQueryTemplate}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.actiontrail.RosAdvancedQueryTemplate> {
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
        private final com.aliyun.ros.cdk.actiontrail.RosAdvancedQueryTemplateProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.actiontrail.RosAdvancedQueryTemplateProps.Builder();
        }

        /**
         * @return {@code this}
         * @param simpleQuery This parameter is required.
         */
        public Builder simpleQuery(final java.lang.Boolean simpleQuery) {
            this.props.simpleQuery(simpleQuery);
            return this;
        }
        /**
         * @return {@code this}
         * @param simpleQuery This parameter is required.
         */
        public Builder simpleQuery(final com.aliyun.ros.cdk.core.IResolvable simpleQuery) {
            this.props.simpleQuery(simpleQuery);
            return this;
        }

        /**
         * @return {@code this}
         * @param templateSql This parameter is required.
         */
        public Builder templateSql(final java.lang.String templateSql) {
            this.props.templateSql(templateSql);
            return this;
        }
        /**
         * @return {@code this}
         * @param templateSql This parameter is required.
         */
        public Builder templateSql(final com.aliyun.ros.cdk.core.IResolvable templateSql) {
            this.props.templateSql(templateSql);
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
         * @return a newly built instance of {@link com.aliyun.ros.cdk.actiontrail.RosAdvancedQueryTemplate}.
         */
        @Override
        public com.aliyun.ros.cdk.actiontrail.RosAdvancedQueryTemplate build() {
            return new com.aliyun.ros.cdk.actiontrail.RosAdvancedQueryTemplate(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
