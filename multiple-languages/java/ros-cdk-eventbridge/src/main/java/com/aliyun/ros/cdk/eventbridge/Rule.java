package com.aliyun.ros.cdk.eventbridge;

/**
 * A ROS resource type:  `ALIYUN::EventBridge::Rule`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.80.0 (build bce6a1d)", date = "2023-04-26T01:43:50.923Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.eventbridge.$Module.class, fqn = "@alicloud/ros-cdk-eventbridge.Rule")
public class Rule extends com.aliyun.ros.cdk.core.Resource {

    protected Rule(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Rule(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::EventBridge::Rule`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public Rule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.eventbridge.RuleProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::EventBridge::Rule`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Rule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.eventbridge.RuleProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute EventBusName: The name of the event bus.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEventBusName() {
        return software.amazon.jsii.Kernel.get(this, "attrEventBusName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute RuleARN: The Alibaba Cloud Resource Name (ARN) of the event rule.
     * <p>
     * The ARN is used for authorization.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRuleArn() {
        return software.amazon.jsii.Kernel.get(this, "attrRuleArn", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute RuleName: The name of the event rule.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRuleName() {
        return software.amazon.jsii.Kernel.get(this, "attrRuleName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.eventbridge.Rule}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.eventbridge.Rule> {
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
        private final com.aliyun.ros.cdk.eventbridge.RuleProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.eventbridge.RuleProps.Builder();
        }

        /**
         * Property eventBusName: The name of the event bus.
         * <p>
         * @return {@code this}
         * @param eventBusName Property eventBusName: The name of the event bus. This parameter is required.
         */
        public Builder eventBusName(final java.lang.String eventBusName) {
            this.props.eventBusName(eventBusName);
            return this;
        }
        /**
         * Property eventBusName: The name of the event bus.
         * <p>
         * @return {@code this}
         * @param eventBusName Property eventBusName: The name of the event bus. This parameter is required.
         */
        public Builder eventBusName(final com.aliyun.ros.cdk.core.IResolvable eventBusName) {
            this.props.eventBusName(eventBusName);
            return this;
        }

        /**
         * Property filterPattern: The event pattern, in the JSON format.
         * <p>
         * @return {@code this}
         * @param filterPattern Property filterPattern: The event pattern, in the JSON format. This parameter is required.
         */
        public Builder filterPattern(final com.aliyun.ros.cdk.core.IResolvable filterPattern) {
            this.props.filterPattern(filterPattern);
            return this;
        }
        /**
         * Property filterPattern: The event pattern, in the JSON format.
         * <p>
         * @return {@code this}
         * @param filterPattern Property filterPattern: The event pattern, in the JSON format. This parameter is required.
         */
        public Builder filterPattern(final java.util.Map<java.lang.String, ? extends java.lang.Object> filterPattern) {
            this.props.filterPattern(filterPattern);
            return this;
        }

        /**
         * Property ruleName: The name of the event rule.
         * <p>
         * @return {@code this}
         * @param ruleName Property ruleName: The name of the event rule. This parameter is required.
         */
        public Builder ruleName(final java.lang.String ruleName) {
            this.props.ruleName(ruleName);
            return this;
        }
        /**
         * Property ruleName: The name of the event rule.
         * <p>
         * @return {@code this}
         * @param ruleName Property ruleName: The name of the event rule. This parameter is required.
         */
        public Builder ruleName(final com.aliyun.ros.cdk.core.IResolvable ruleName) {
            this.props.ruleName(ruleName);
            return this;
        }

        /**
         * Property targets: The event target to which events are delivered.
         * <p>
         * @return {@code this}
         * @param targets Property targets: The event target to which events are delivered. This parameter is required.
         */
        public Builder targets(final com.aliyun.ros.cdk.core.IResolvable targets) {
            this.props.targets(targets);
            return this;
        }
        /**
         * Property targets: The event target to which events are delivered.
         * <p>
         * @return {@code this}
         * @param targets Property targets: The event target to which events are delivered. This parameter is required.
         */
        public Builder targets(final java.util.List<? extends java.lang.Object> targets) {
            this.props.targets(targets);
            return this;
        }

        /**
         * Property description: The description of the event rule.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the event rule. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of the event rule.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the event rule. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property status: The status of the event rule.
         * <p>
         * Valid values:
         * ENABLE: The event rule is enabled. It is the default state of the event rule.
         * DISABLE: The event rule is disabled.
         * <p>
         * @return {@code this}
         * @param status Property status: The status of the event rule. This parameter is required.
         */
        public Builder status(final java.lang.String status) {
            this.props.status(status);
            return this;
        }
        /**
         * Property status: The status of the event rule.
         * <p>
         * Valid values:
         * ENABLE: The event rule is enabled. It is the default state of the event rule.
         * DISABLE: The event rule is disabled.
         * <p>
         * @return {@code this}
         * @param status Property status: The status of the event rule. This parameter is required.
         */
        public Builder status(final com.aliyun.ros.cdk.core.IResolvable status) {
            this.props.status(status);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.eventbridge.Rule}.
         */
        @Override
        public com.aliyun.ros.cdk.eventbridge.Rule build() {
            return new com.aliyun.ros.cdk.eventbridge.Rule(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
