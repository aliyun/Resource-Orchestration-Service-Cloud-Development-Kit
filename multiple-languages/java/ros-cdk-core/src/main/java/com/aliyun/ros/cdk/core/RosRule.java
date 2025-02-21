package com.aliyun.ros.cdk.core;

/**
 * Rules are used to verify that the parameter values passed to the template when the resource stack is created or updated are as expected.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:10.920Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.RosRule")
public class RosRule extends com.aliyun.ros.cdk.core.RosElement {

    protected RosRule(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosRule(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    public RosRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.RosRuleProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.core.RosRule}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.core.RosRule> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final com.aliyun.ros.cdk.core.RosRuleProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            this.scope = scope;
            this.id = id;
            this.props = new com.aliyun.ros.cdk.core.RosRuleProps.Builder();
        }

        /**
         * Used to describe assertions.
         * <p>
         * @return {@code this}
         * @param assertions Used to describe assertions. This parameter is required.
         */
        public Builder assertions(final com.aliyun.ros.cdk.core.RosRuleAssertionProps assertions) {
            this.props.assertions(assertions);
            return this;
        }

        /**
         * Define the rule condition.
         * <p>
         * If the rule condition is not defined, the assertion is always valid.
         * <p>
         * Default: - None
         * <p>
         * @return {@code this}
         * @param ruleCondition Define the rule condition. This parameter is required.
         */
        public Builder ruleCondition(final com.aliyun.ros.cdk.core.IResolvable ruleCondition) {
            this.props.ruleCondition(ruleCondition);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.core.RosRule}.
         */
        @Override
        public com.aliyun.ros.cdk.core.RosRule build() {
            return new com.aliyun.ros.cdk.core.RosRule(
                this.scope,
                this.id,
                this.props.build()
            );
        }
    }
}
