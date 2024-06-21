package com.aliyun.ros.cdk.cms;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::CMS::EventRuleTargets</code>, which is used to add or change the recipients to which alert notifications are sent based on an event-triggered alert rule.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-21T05:59:08.041Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms.$Module.class, fqn = "@alicloud/ros-cdk-cms.EventRuleTargets")
public class EventRuleTargets extends com.aliyun.ros.cdk.core.Resource {

    protected EventRuleTargets(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected EventRuleTargets(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public EventRuleTargets(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cms.EventRuleTargetsProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public EventRuleTargets(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cms.EventRuleTargetsProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cms.EventRuleTargetsProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cms.EventRuleTargetsProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cms.EventRuleTargetsProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cms.EventRuleTargets}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cms.EventRuleTargets> {
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
        private final com.aliyun.ros.cdk.cms.EventRuleTargetsProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cms.EventRuleTargetsProps.Builder();
        }

        /**
         * Property ruleName: The name of the alert rule.
         * <p>
         * @return {@code this}
         * @param ruleName Property ruleName: The name of the alert rule. This parameter is required.
         */
        public Builder ruleName(final java.lang.String ruleName) {
            this.props.ruleName(ruleName);
            return this;
        }
        /**
         * Property ruleName: The name of the alert rule.
         * <p>
         * @return {@code this}
         * @param ruleName Property ruleName: The name of the alert rule. This parameter is required.
         */
        public Builder ruleName(final com.aliyun.ros.cdk.core.IResolvable ruleName) {
            this.props.ruleName(ruleName);
            return this;
        }

        /**
         * Property contactParameters: CONTACT configuration.A maximum of 5 parameters.
         * <p>
         * @return {@code this}
         * @param contactParameters Property contactParameters: CONTACT configuration.A maximum of 5 parameters. This parameter is required.
         */
        public Builder contactParameters(final com.aliyun.ros.cdk.core.IResolvable contactParameters) {
            this.props.contactParameters(contactParameters);
            return this;
        }
        /**
         * Property contactParameters: CONTACT configuration.A maximum of 5 parameters.
         * <p>
         * @return {@code this}
         * @param contactParameters Property contactParameters: CONTACT configuration.A maximum of 5 parameters. This parameter is required.
         */
        public Builder contactParameters(final java.util.List<? extends java.lang.Object> contactParameters) {
            this.props.contactParameters(contactParameters);
            return this;
        }

        /**
         * Property fcParameters: FC configuration.A maximum of 5 parameters.
         * <p>
         * @return {@code this}
         * @param fcParameters Property fcParameters: FC configuration.A maximum of 5 parameters. This parameter is required.
         */
        public Builder fcParameters(final com.aliyun.ros.cdk.core.IResolvable fcParameters) {
            this.props.fcParameters(fcParameters);
            return this;
        }
        /**
         * Property fcParameters: FC configuration.A maximum of 5 parameters.
         * <p>
         * @return {@code this}
         * @param fcParameters Property fcParameters: FC configuration.A maximum of 5 parameters. This parameter is required.
         */
        public Builder fcParameters(final java.util.List<? extends java.lang.Object> fcParameters) {
            this.props.fcParameters(fcParameters);
            return this;
        }

        /**
         * Property mnsParameters: MNS configuration.A maximum of 5 parameters.
         * <p>
         * @return {@code this}
         * @param mnsParameters Property mnsParameters: MNS configuration.A maximum of 5 parameters. This parameter is required.
         */
        public Builder mnsParameters(final com.aliyun.ros.cdk.core.IResolvable mnsParameters) {
            this.props.mnsParameters(mnsParameters);
            return this;
        }
        /**
         * Property mnsParameters: MNS configuration.A maximum of 5 parameters.
         * <p>
         * @return {@code this}
         * @param mnsParameters Property mnsParameters: MNS configuration.A maximum of 5 parameters. This parameter is required.
         */
        public Builder mnsParameters(final java.util.List<? extends java.lang.Object> mnsParameters) {
            this.props.mnsParameters(mnsParameters);
            return this;
        }

        /**
         * Property slsParameters: SLS configuration.A maximum of 5 parameters.
         * <p>
         * @return {@code this}
         * @param slsParameters Property slsParameters: SLS configuration.A maximum of 5 parameters. This parameter is required.
         */
        public Builder slsParameters(final com.aliyun.ros.cdk.core.IResolvable slsParameters) {
            this.props.slsParameters(slsParameters);
            return this;
        }
        /**
         * Property slsParameters: SLS configuration.A maximum of 5 parameters.
         * <p>
         * @return {@code this}
         * @param slsParameters Property slsParameters: SLS configuration.A maximum of 5 parameters. This parameter is required.
         */
        public Builder slsParameters(final java.util.List<? extends java.lang.Object> slsParameters) {
            this.props.slsParameters(slsParameters);
            return this;
        }

        /**
         * Property webhookParameters: WEBHOOK configuration.A maximum of 5 parameters.
         * <p>
         * @return {@code this}
         * @param webhookParameters Property webhookParameters: WEBHOOK configuration.A maximum of 5 parameters. This parameter is required.
         */
        public Builder webhookParameters(final com.aliyun.ros.cdk.core.IResolvable webhookParameters) {
            this.props.webhookParameters(webhookParameters);
            return this;
        }
        /**
         * Property webhookParameters: WEBHOOK configuration.A maximum of 5 parameters.
         * <p>
         * @return {@code this}
         * @param webhookParameters Property webhookParameters: WEBHOOK configuration.A maximum of 5 parameters. This parameter is required.
         */
        public Builder webhookParameters(final java.util.List<? extends java.lang.Object> webhookParameters) {
            this.props.webhookParameters(webhookParameters);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cms.EventRuleTargets}.
         */
        @Override
        public com.aliyun.ros.cdk.cms.EventRuleTargets build() {
            return new com.aliyun.ros.cdk.cms.EventRuleTargets(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
