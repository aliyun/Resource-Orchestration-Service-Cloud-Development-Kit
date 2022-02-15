package com.aliyun.ros.cdk.cms;

/**
 * A ROS resource type:  `ALIYUN::CMS::EventRule`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.53.0 (build c071d26)", date = "2022-02-11T01:44:07.101Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms.$Module.class, fqn = "@alicloud/ros-cdk-cms.EventRule")
public class EventRule extends com.aliyun.ros.cdk.core.Resource {

    protected EventRule(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected EventRule(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::CMS::EventRule`.
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
    public EventRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cms.EventRuleProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::CMS::EventRule`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public EventRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cms.EventRuleProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Data: Number of rows affected.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrData() {
        return software.amazon.jsii.Kernel.get(this, "attrData", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cms.EventRule}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cms.EventRule> {
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
        private final com.aliyun.ros.cdk.cms.EventRuleProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cms.EventRuleProps.Builder();
        }

        /**
         * Property eventPattern: Event pattern configuration.A maximum of 20 event patterns.
         * <p>
         * @return {@code this}
         * @param eventPattern Property eventPattern: Event pattern configuration.A maximum of 20 event patterns. This parameter is required.
         */
        public Builder eventPattern(final com.aliyun.ros.cdk.core.IResolvable eventPattern) {
            this.props.eventPattern(eventPattern);
            return this;
        }
        /**
         * Property eventPattern: Event pattern configuration.A maximum of 20 event patterns.
         * <p>
         * @return {@code this}
         * @param eventPattern Property eventPattern: Event pattern configuration.A maximum of 20 event patterns. This parameter is required.
         */
        public Builder eventPattern(final java.util.List<? extends java.lang.Object> eventPattern) {
            this.props.eventPattern(eventPattern);
            return this;
        }

        /**
         * Property ruleName: The name of the alarm rule.
         * <p>
         * @return {@code this}
         * @param ruleName Property ruleName: The name of the alarm rule. This parameter is required.
         */
        public Builder ruleName(final java.lang.String ruleName) {
            this.props.ruleName(ruleName);
            return this;
        }
        /**
         * Property ruleName: The name of the alarm rule.
         * <p>
         * @return {@code this}
         * @param ruleName Property ruleName: The name of the alarm rule. This parameter is required.
         */
        public Builder ruleName(final com.aliyun.ros.cdk.core.IResolvable ruleName) {
            this.props.ruleName(ruleName);
            return this;
        }

        /**
         * Property description: The description of the alert rule.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the alert rule. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of the alert rule.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the alert rule. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property eventType: The type of the event alert.
         * <p>
         * Valid values:
         * SYSTEM
         * CUSTOM
         * <p>
         * @return {@code this}
         * @param eventType Property eventType: The type of the event alert. This parameter is required.
         */
        public Builder eventType(final java.lang.String eventType) {
            this.props.eventType(eventType);
            return this;
        }
        /**
         * Property eventType: The type of the event alert.
         * <p>
         * Valid values:
         * SYSTEM
         * CUSTOM
         * <p>
         * @return {@code this}
         * @param eventType Property eventType: The type of the event alert. This parameter is required.
         */
        public Builder eventType(final com.aliyun.ros.cdk.core.IResolvable eventType) {
            this.props.eventType(eventType);
            return this;
        }

        /**
         * Property groupId: The ID of the application group.
         * <p>
         * @return {@code this}
         * @param groupId Property groupId: The ID of the application group. This parameter is required.
         */
        public Builder groupId(final java.lang.String groupId) {
            this.props.groupId(groupId);
            return this;
        }
        /**
         * Property groupId: The ID of the application group.
         * <p>
         * @return {@code this}
         * @param groupId Property groupId: The ID of the application group. This parameter is required.
         */
        public Builder groupId(final com.aliyun.ros.cdk.core.IResolvable groupId) {
            this.props.groupId(groupId);
            return this;
        }

        /**
         * Property state: The status of the alert rule.
         * <p>
         * Valid values:
         * ENABLED
         * DISABLED
         * <p>
         * @return {@code this}
         * @param state Property state: The status of the alert rule. This parameter is required.
         */
        public Builder state(final java.lang.String state) {
            this.props.state(state);
            return this;
        }
        /**
         * Property state: The status of the alert rule.
         * <p>
         * Valid values:
         * ENABLED
         * DISABLED
         * <p>
         * @return {@code this}
         * @param state Property state: The status of the alert rule. This parameter is required.
         */
        public Builder state(final com.aliyun.ros.cdk.core.IResolvable state) {
            this.props.state(state);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.cms.EventRule}.
         */
        @Override
        public com.aliyun.ros.cdk.cms.EventRule build() {
            return new com.aliyun.ros.cdk.cms.EventRule(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
