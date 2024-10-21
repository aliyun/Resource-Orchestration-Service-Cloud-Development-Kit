package com.aliyun.ros.cdk.ddospro;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::DDoSPro::SchedulerRule</code>, which is used to create a scheduling rule for Sec-Traffic Manager.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-10-18T08:56:28.311Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ddospro.$Module.class, fqn = "@alicloud/ros-cdk-ddospro.RosSchedulerRule")
public class RosSchedulerRule extends com.aliyun.ros.cdk.core.RosResource {

    protected RosSchedulerRule(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosSchedulerRule(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.ddospro.RosSchedulerRule.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosSchedulerRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ddospro.RosSchedulerRuleProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRuleName() {
        return software.amazon.jsii.Kernel.get(this, "attrRuleName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getRuleName() {
        return software.amazon.jsii.Kernel.get(this, "ruleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRuleName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "ruleName", java.util.Objects.requireNonNull(value, "ruleName is required"));
    }

    /**
     */
    public void setRuleName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ruleName", java.util.Objects.requireNonNull(value, "ruleName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getRules() {
        return software.amazon.jsii.Kernel.get(this, "rules", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRules(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "rules", java.util.Objects.requireNonNull(value, "rules is required"));
    }

    /**
     */
    public void setRules(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "rules", java.util.Objects.requireNonNull(value, "rules is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getRuleType() {
        return software.amazon.jsii.Kernel.get(this, "ruleType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRuleType(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "ruleType", java.util.Objects.requireNonNull(value, "ruleType is required"));
    }

    /**
     */
    public void setRuleType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ruleType", java.util.Objects.requireNonNull(value, "ruleType is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getParam() {
        return software.amazon.jsii.Kernel.get(this, "param", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setParam(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "param", value);
    }

    /**
     */
    public void setParam(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "param", value);
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
     * A fluent builder for {@link com.aliyun.ros.cdk.ddospro.RosSchedulerRule}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ddospro.RosSchedulerRule> {
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
        private final com.aliyun.ros.cdk.ddospro.RosSchedulerRuleProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ddospro.RosSchedulerRuleProps.Builder();
        }

        /**
         * @return {@code this}
         * @param ruleName This parameter is required.
         */
        public Builder ruleName(final java.lang.String ruleName) {
            this.props.ruleName(ruleName);
            return this;
        }
        /**
         * @return {@code this}
         * @param ruleName This parameter is required.
         */
        public Builder ruleName(final com.aliyun.ros.cdk.core.IResolvable ruleName) {
            this.props.ruleName(ruleName);
            return this;
        }

        /**
         * @return {@code this}
         * @param rules This parameter is required.
         */
        public Builder rules(final java.lang.String rules) {
            this.props.rules(rules);
            return this;
        }
        /**
         * @return {@code this}
         * @param rules This parameter is required.
         */
        public Builder rules(final com.aliyun.ros.cdk.core.IResolvable rules) {
            this.props.rules(rules);
            return this;
        }

        /**
         * @return {@code this}
         * @param ruleType This parameter is required.
         */
        public Builder ruleType(final java.lang.Number ruleType) {
            this.props.ruleType(ruleType);
            return this;
        }
        /**
         * @return {@code this}
         * @param ruleType This parameter is required.
         */
        public Builder ruleType(final com.aliyun.ros.cdk.core.IResolvable ruleType) {
            this.props.ruleType(ruleType);
            return this;
        }

        /**
         * @return {@code this}
         * @param param This parameter is required.
         */
        public Builder param(final java.lang.String param) {
            this.props.param(param);
            return this;
        }
        /**
         * @return {@code this}
         * @param param This parameter is required.
         */
        public Builder param(final com.aliyun.ros.cdk.core.IResolvable param) {
            this.props.param(param);
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
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ddospro.RosSchedulerRule}.
         */
        @Override
        public com.aliyun.ros.cdk.ddospro.RosSchedulerRule build() {
            return new com.aliyun.ros.cdk.ddospro.RosSchedulerRule(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
