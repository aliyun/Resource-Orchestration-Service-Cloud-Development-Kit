package com.aliyun.ros.cdk.arms;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ARMS::ApplyAlertRuleTemplate</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:52.745Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.arms.$Module.class, fqn = "@alicloud/ros-cdk-arms.ApplyAlertRuleTemplate")
public class ApplyAlertRuleTemplate extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.arms.IApplyAlertRuleTemplate {

    protected ApplyAlertRuleTemplate(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ApplyAlertRuleTemplate(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public ApplyAlertRuleTemplate(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.arms.ApplyAlertRuleTemplateProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public ApplyAlertRuleTemplate(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.arms.ApplyAlertRuleTemplateProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public ApplyAlertRuleTemplate(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.arms.ApplyAlertRuleTemplateProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.arms.ApplyAlertRuleTemplateProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.arms.ApplyAlertRuleTemplate}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.arms.ApplyAlertRuleTemplate> {
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
        private com.aliyun.ros.cdk.arms.ApplyAlertRuleTemplateProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property clusterIds: The IDs list of Prometheus Instances.
         * <p>
         * @return {@code this}
         * @param clusterIds Property clusterIds: The IDs list of Prometheus Instances. This parameter is required.
         */
        public Builder clusterIds(final com.aliyun.ros.cdk.core.IResolvable clusterIds) {
            this.props().clusterIds(clusterIds);
            return this;
        }
        /**
         * Property clusterIds: The IDs list of Prometheus Instances.
         * <p>
         * @return {@code this}
         * @param clusterIds Property clusterIds: The IDs list of Prometheus Instances. This parameter is required.
         */
        public Builder clusterIds(final java.util.List<? extends java.lang.Object> clusterIds) {
            this.props().clusterIds(clusterIds);
            return this;
        }

        /**
         * Property templateIds: The IDs list of Prometheus alert rule templates.
         * <p>
         * @return {@code this}
         * @param templateIds Property templateIds: The IDs list of Prometheus alert rule templates. This parameter is required.
         */
        public Builder templateIds(final com.aliyun.ros.cdk.core.IResolvable templateIds) {
            this.props().templateIds(templateIds);
            return this;
        }
        /**
         * Property templateIds: The IDs list of Prometheus alert rule templates.
         * <p>
         * @return {@code this}
         * @param templateIds Property templateIds: The IDs list of Prometheus alert rule templates. This parameter is required.
         */
        public Builder templateIds(final java.util.List<? extends java.lang.Object> templateIds) {
            this.props().templateIds(templateIds);
            return this;
        }

        /**
         * Property update: Whether to update created alert rules.
         * <p>
         * Default false.
         * <p>
         * @return {@code this}
         * @param update Property update: Whether to update created alert rules. This parameter is required.
         */
        public Builder update(final java.lang.Boolean update) {
            this.props().update(update);
            return this;
        }
        /**
         * Property update: Whether to update created alert rules.
         * <p>
         * Default false.
         * <p>
         * @return {@code this}
         * @param update Property update: Whether to update created alert rules. This parameter is required.
         */
        public Builder update(final com.aliyun.ros.cdk.core.IResolvable update) {
            this.props().update(update);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.arms.ApplyAlertRuleTemplate}.
         */
        @Override
        public com.aliyun.ros.cdk.arms.ApplyAlertRuleTemplate build() {
            return new com.aliyun.ros.cdk.arms.ApplyAlertRuleTemplate(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.arms.ApplyAlertRuleTemplateProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.arms.ApplyAlertRuleTemplateProps.Builder();
            }
            return this.props;
        }
    }
}
