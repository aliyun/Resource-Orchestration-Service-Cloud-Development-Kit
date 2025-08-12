package com.aliyun.ros.cdk.cms;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::CMS::MetricRuleTemplateDeployment</code>, which is used to apply an alert template to an application group.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:44.884Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms.$Module.class, fqn = "@alicloud/ros-cdk-cms.RosMetricRuleTemplateDeployment")
public class RosMetricRuleTemplateDeployment extends com.aliyun.ros.cdk.core.RosResource {

    protected RosMetricRuleTemplateDeployment(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosMetricRuleTemplateDeployment(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.cms.RosMetricRuleTemplateDeployment.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosMetricRuleTemplateDeployment(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cms.RosMetricRuleTemplateDeploymentProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrGroupId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRuleIds() {
        return software.amazon.jsii.Kernel.get(this, "attrRuleIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getGroupId() {
        return software.amazon.jsii.Kernel.get(this, "groupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setGroupId(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "groupId", java.util.Objects.requireNonNull(value, "groupId is required"));
    }

    /**
     */
    public void setGroupId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "groupId", java.util.Objects.requireNonNull(value, "groupId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getTemplateIds() {
        return software.amazon.jsii.Kernel.get(this, "templateIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTemplateIds(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "templateIds", java.util.Objects.requireNonNull(value, "templateIds is required"));
    }

    /**
     */
    public void setTemplateIds(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
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
        software.amazon.jsii.Kernel.set(this, "templateIds", java.util.Objects.requireNonNull(value, "templateIds is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAppendMode() {
        return software.amazon.jsii.Kernel.get(this, "appendMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAppendMode(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "appendMode", value);
    }

    /**
     */
    public void setAppendMode(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "appendMode", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getApplyMode() {
        return software.amazon.jsii.Kernel.get(this, "applyMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setApplyMode(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "applyMode", value);
    }

    /**
     */
    public void setApplyMode(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "applyMode", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEnableEndTime() {
        return software.amazon.jsii.Kernel.get(this, "enableEndTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEnableEndTime(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "enableEndTime", value);
    }

    /**
     */
    public void setEnableEndTime(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "enableEndTime", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEnableStartTime() {
        return software.amazon.jsii.Kernel.get(this, "enableStartTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEnableStartTime(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "enableStartTime", value);
    }

    /**
     */
    public void setEnableStartTime(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "enableStartTime", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getNotifyLevel() {
        return software.amazon.jsii.Kernel.get(this, "notifyLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNotifyLevel(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "notifyLevel", value);
    }

    /**
     */
    public void setNotifyLevel(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "notifyLevel", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSilenceTime() {
        return software.amazon.jsii.Kernel.get(this, "silenceTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSilenceTime(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "silenceTime", value);
    }

    /**
     */
    public void setSilenceTime(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "silenceTime", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getWebhook() {
        return software.amazon.jsii.Kernel.get(this, "webhook", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setWebhook(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "webhook", value);
    }

    /**
     */
    public void setWebhook(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "webhook", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cms.RosMetricRuleTemplateDeployment}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cms.RosMetricRuleTemplateDeployment> {
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
        private final com.aliyun.ros.cdk.cms.RosMetricRuleTemplateDeploymentProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cms.RosMetricRuleTemplateDeploymentProps.Builder();
        }

        /**
         * @return {@code this}
         * @param groupId This parameter is required.
         */
        public Builder groupId(final java.lang.Number groupId) {
            this.props.groupId(groupId);
            return this;
        }
        /**
         * @return {@code this}
         * @param groupId This parameter is required.
         */
        public Builder groupId(final com.aliyun.ros.cdk.core.IResolvable groupId) {
            this.props.groupId(groupId);
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
         * @param appendMode This parameter is required.
         */
        public Builder appendMode(final java.lang.String appendMode) {
            this.props.appendMode(appendMode);
            return this;
        }
        /**
         * @return {@code this}
         * @param appendMode This parameter is required.
         */
        public Builder appendMode(final com.aliyun.ros.cdk.core.IResolvable appendMode) {
            this.props.appendMode(appendMode);
            return this;
        }

        /**
         * @return {@code this}
         * @param applyMode This parameter is required.
         */
        public Builder applyMode(final java.lang.String applyMode) {
            this.props.applyMode(applyMode);
            return this;
        }
        /**
         * @return {@code this}
         * @param applyMode This parameter is required.
         */
        public Builder applyMode(final com.aliyun.ros.cdk.core.IResolvable applyMode) {
            this.props.applyMode(applyMode);
            return this;
        }

        /**
         * @return {@code this}
         * @param enableEndTime This parameter is required.
         */
        public Builder enableEndTime(final java.lang.Number enableEndTime) {
            this.props.enableEndTime(enableEndTime);
            return this;
        }
        /**
         * @return {@code this}
         * @param enableEndTime This parameter is required.
         */
        public Builder enableEndTime(final com.aliyun.ros.cdk.core.IResolvable enableEndTime) {
            this.props.enableEndTime(enableEndTime);
            return this;
        }

        /**
         * @return {@code this}
         * @param enableStartTime This parameter is required.
         */
        public Builder enableStartTime(final java.lang.Number enableStartTime) {
            this.props.enableStartTime(enableStartTime);
            return this;
        }
        /**
         * @return {@code this}
         * @param enableStartTime This parameter is required.
         */
        public Builder enableStartTime(final com.aliyun.ros.cdk.core.IResolvable enableStartTime) {
            this.props.enableStartTime(enableStartTime);
            return this;
        }

        /**
         * @return {@code this}
         * @param notifyLevel This parameter is required.
         */
        public Builder notifyLevel(final java.lang.Number notifyLevel) {
            this.props.notifyLevel(notifyLevel);
            return this;
        }
        /**
         * @return {@code this}
         * @param notifyLevel This parameter is required.
         */
        public Builder notifyLevel(final com.aliyun.ros.cdk.core.IResolvable notifyLevel) {
            this.props.notifyLevel(notifyLevel);
            return this;
        }

        /**
         * @return {@code this}
         * @param silenceTime This parameter is required.
         */
        public Builder silenceTime(final java.lang.Number silenceTime) {
            this.props.silenceTime(silenceTime);
            return this;
        }
        /**
         * @return {@code this}
         * @param silenceTime This parameter is required.
         */
        public Builder silenceTime(final com.aliyun.ros.cdk.core.IResolvable silenceTime) {
            this.props.silenceTime(silenceTime);
            return this;
        }

        /**
         * @return {@code this}
         * @param webhook This parameter is required.
         */
        public Builder webhook(final java.lang.String webhook) {
            this.props.webhook(webhook);
            return this;
        }
        /**
         * @return {@code this}
         * @param webhook This parameter is required.
         */
        public Builder webhook(final com.aliyun.ros.cdk.core.IResolvable webhook) {
            this.props.webhook(webhook);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cms.RosMetricRuleTemplateDeployment}.
         */
        @Override
        public com.aliyun.ros.cdk.cms.RosMetricRuleTemplateDeployment build() {
            return new com.aliyun.ros.cdk.cms.RosMetricRuleTemplateDeployment(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
