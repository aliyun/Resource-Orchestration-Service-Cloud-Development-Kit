package com.aliyun.ros.cdk.arms;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::ARMS::ApplyAlertRuleTemplate</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-21T05:59:07.521Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.arms.$Module.class, fqn = "@alicloud/ros-cdk-arms.RosApplyAlertRuleTemplate")
public class RosApplyAlertRuleTemplate extends com.aliyun.ros.cdk.core.RosResource {

    protected RosApplyAlertRuleTemplate(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosApplyAlertRuleTemplate(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.arms.RosApplyAlertRuleTemplate.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosApplyAlertRuleTemplate(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.arms.RosApplyAlertRuleTemplateProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getClusterIds() {
        return software.amazon.jsii.Kernel.get(this, "clusterIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setClusterIds(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "clusterIds", value);
    }

    /**
     */
    public void setClusterIds(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof java.lang.String)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "clusterIds", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTemplateIds() {
        return software.amazon.jsii.Kernel.get(this, "templateIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTemplateIds(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "templateIds", value);
    }

    /**
     */
    public void setTemplateIds(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof java.lang.String)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "templateIds", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getUpdate() {
        return software.amazon.jsii.Kernel.get(this, "update", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setUpdate(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "update", value);
    }

    /**
     */
    public void setUpdate(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "update", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.arms.RosApplyAlertRuleTemplate}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.arms.RosApplyAlertRuleTemplate> {
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
        private final com.aliyun.ros.cdk.arms.RosApplyAlertRuleTemplateProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.arms.RosApplyAlertRuleTemplateProps.Builder();
        }

        /**
         * @return {@code this}
         * @param clusterIds This parameter is required.
         */
        public Builder clusterIds(final com.aliyun.ros.cdk.core.IResolvable clusterIds) {
            this.props.clusterIds(clusterIds);
            return this;
        }
        /**
         * @return {@code this}
         * @param clusterIds This parameter is required.
         */
        public Builder clusterIds(final java.util.List<? extends java.lang.Object> clusterIds) {
            this.props.clusterIds(clusterIds);
            return this;
        }

        /**
         * @return {@code this}
         * @param templateIds This parameter is required.
         */
        public Builder templateIds(final com.aliyun.ros.cdk.core.IResolvable templateIds) {
            this.props.templateIds(templateIds);
            return this;
        }
        /**
         * @return {@code this}
         * @param templateIds This parameter is required.
         */
        public Builder templateIds(final java.util.List<? extends java.lang.Object> templateIds) {
            this.props.templateIds(templateIds);
            return this;
        }

        /**
         * @return {@code this}
         * @param update This parameter is required.
         */
        public Builder update(final java.lang.Boolean update) {
            this.props.update(update);
            return this;
        }
        /**
         * @return {@code this}
         * @param update This parameter is required.
         */
        public Builder update(final com.aliyun.ros.cdk.core.IResolvable update) {
            this.props.update(update);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.arms.RosApplyAlertRuleTemplate}.
         */
        @Override
        public com.aliyun.ros.cdk.arms.RosApplyAlertRuleTemplate build() {
            return new com.aliyun.ros.cdk.arms.RosApplyAlertRuleTemplate(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
