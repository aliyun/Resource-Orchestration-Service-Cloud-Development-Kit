package com.aliyun.ros.cdk.sae;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::SAE::ApplicationScalingRule</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:25:00.102Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sae.$Module.class, fqn = "@alicloud/ros-cdk-sae.ApplicationScalingRule")
public class ApplicationScalingRule extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.sae.IApplicationScalingRule {

    protected ApplicationScalingRule(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ApplicationScalingRule(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public ApplicationScalingRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sae.ApplicationScalingRuleProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public ApplicationScalingRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sae.ApplicationScalingRuleProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ScalingRuleName: The name of the scaling rule.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingRuleName() {
        return software.amazon.jsii.Kernel.get(this, "attrScalingRuleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sae.ApplicationScalingRuleProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.sae.ApplicationScalingRuleProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.sae.ApplicationScalingRule}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.sae.ApplicationScalingRule> {
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
        private final com.aliyun.ros.cdk.sae.ApplicationScalingRuleProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.sae.ApplicationScalingRuleProps.Builder();
        }

        /**
         * Property appId: The ID of the application.
         * <p>
         * @return {@code this}
         * @param appId Property appId: The ID of the application. This parameter is required.
         */
        public Builder appId(final java.lang.String appId) {
            this.props.appId(appId);
            return this;
        }
        /**
         * Property appId: The ID of the application.
         * <p>
         * @return {@code this}
         * @param appId Property appId: The ID of the application. This parameter is required.
         */
        public Builder appId(final com.aliyun.ros.cdk.core.IResolvable appId) {
            this.props.appId(appId);
            return this;
        }

        /**
         * Property scalingRuleName: The name of the auto scaling policy.
         * <p>
         * The name must start with a lowercase letter, and can contain lowercase letters, digits, and hyphens (-).The name must be 1 to 32 characters in length.
         * <p>
         * @return {@code this}
         * @param scalingRuleName Property scalingRuleName: The name of the auto scaling policy. This parameter is required.
         */
        public Builder scalingRuleName(final java.lang.String scalingRuleName) {
            this.props.scalingRuleName(scalingRuleName);
            return this;
        }
        /**
         * Property scalingRuleName: The name of the auto scaling policy.
         * <p>
         * The name must start with a lowercase letter, and can contain lowercase letters, digits, and hyphens (-).The name must be 1 to 32 characters in length.
         * <p>
         * @return {@code this}
         * @param scalingRuleName Property scalingRuleName: The name of the auto scaling policy. This parameter is required.
         */
        public Builder scalingRuleName(final com.aliyun.ros.cdk.core.IResolvable scalingRuleName) {
            this.props.scalingRuleName(scalingRuleName);
            return this;
        }

        /**
         * Property scalingRuleType: The type of the auto scaling policy.
         * <p>
         * Valid values: timer: Timed scaling. metric: Custom metric scaling.mix: mix scaling
         * <p>
         * @return {@code this}
         * @param scalingRuleType Property scalingRuleType: The type of the auto scaling policy. This parameter is required.
         */
        public Builder scalingRuleType(final java.lang.String scalingRuleType) {
            this.props.scalingRuleType(scalingRuleType);
            return this;
        }
        /**
         * Property scalingRuleType: The type of the auto scaling policy.
         * <p>
         * Valid values: timer: Timed scaling. metric: Custom metric scaling.mix: mix scaling
         * <p>
         * @return {@code this}
         * @param scalingRuleType Property scalingRuleType: The type of the auto scaling policy. This parameter is required.
         */
        public Builder scalingRuleType(final com.aliyun.ros.cdk.core.IResolvable scalingRuleType) {
            this.props.scalingRuleType(scalingRuleType);
            return this;
        }

        /**
         * Property minReadyInstanceRatio: The minimum percentage of surviving instances.
         * <p>
         * The value description is as follows:-1: Initialization value, indicating that the percentage is not used.0~100: The unit is a percentage, rounded up. For example, if it is set to 50%, if there are currently 5 instances, the minimum number of surviving instances is 3.
         * <p>
         * @return {@code this}
         * @param minReadyInstanceRatio Property minReadyInstanceRatio: The minimum percentage of surviving instances. This parameter is required.
         */
        public Builder minReadyInstanceRatio(final java.lang.Number minReadyInstanceRatio) {
            this.props.minReadyInstanceRatio(minReadyInstanceRatio);
            return this;
        }
        /**
         * Property minReadyInstanceRatio: The minimum percentage of surviving instances.
         * <p>
         * The value description is as follows:-1: Initialization value, indicating that the percentage is not used.0~100: The unit is a percentage, rounded up. For example, if it is set to 50%, if there are currently 5 instances, the minimum number of surviving instances is 3.
         * <p>
         * @return {@code this}
         * @param minReadyInstanceRatio Property minReadyInstanceRatio: The minimum percentage of surviving instances. This parameter is required.
         */
        public Builder minReadyInstanceRatio(final com.aliyun.ros.cdk.core.IResolvable minReadyInstanceRatio) {
            this.props.minReadyInstanceRatio(minReadyInstanceRatio);
            return this;
        }

        /**
         * Property minReadyInstances: Minimum number of surviving instances.
         * <p>
         * The value is as follows:If set to 0, the application will be interrupted during the upgrade process.If set to <strong>-1</strong>, the minimum number of surviving instances will use the system recommended value, which is 25% of the existing number of instances. If there are currently 5 instances, 5×25%=1.25, after rounding up, the minimum number of surviving instances is 2.
         * <p>
         * @return {@code this}
         * @param minReadyInstances Property minReadyInstances: Minimum number of surviving instances. This parameter is required.
         */
        public Builder minReadyInstances(final java.lang.Number minReadyInstances) {
            this.props.minReadyInstances(minReadyInstances);
            return this;
        }
        /**
         * Property minReadyInstances: Minimum number of surviving instances.
         * <p>
         * The value is as follows:If set to 0, the application will be interrupted during the upgrade process.If set to <strong>-1</strong>, the minimum number of surviving instances will use the system recommended value, which is 25% of the existing number of instances. If there are currently 5 instances, 5×25%=1.25, after rounding up, the minimum number of surviving instances is 2.
         * <p>
         * @return {@code this}
         * @param minReadyInstances Property minReadyInstances: Minimum number of surviving instances. This parameter is required.
         */
        public Builder minReadyInstances(final com.aliyun.ros.cdk.core.IResolvable minReadyInstances) {
            this.props.minReadyInstances(minReadyInstances);
            return this;
        }

        /**
         * Property scalingRuleEnable: Whether to enable the scaling rule.
         * <p>
         * @return {@code this}
         * @param scalingRuleEnable Property scalingRuleEnable: Whether to enable the scaling rule. This parameter is required.
         */
        public Builder scalingRuleEnable(final java.lang.Boolean scalingRuleEnable) {
            this.props.scalingRuleEnable(scalingRuleEnable);
            return this;
        }
        /**
         * Property scalingRuleEnable: Whether to enable the scaling rule.
         * <p>
         * @return {@code this}
         * @param scalingRuleEnable Property scalingRuleEnable: Whether to enable the scaling rule. This parameter is required.
         */
        public Builder scalingRuleEnable(final com.aliyun.ros.cdk.core.IResolvable scalingRuleEnable) {
            this.props.scalingRuleEnable(scalingRuleEnable);
            return this;
        }

        /**
         * Property scalingRuleMetric: Configuration of monitoring indicator elasticity policy.
         * <p>
         * This parameter is required when you select monitoring indicator elasticity policy setting.
         * <p>
         * @return {@code this}
         * @param scalingRuleMetric Property scalingRuleMetric: Configuration of monitoring indicator elasticity policy. This parameter is required.
         */
        public Builder scalingRuleMetric(final com.aliyun.ros.cdk.core.IResolvable scalingRuleMetric) {
            this.props.scalingRuleMetric(scalingRuleMetric);
            return this;
        }
        /**
         * Property scalingRuleMetric: Configuration of monitoring indicator elasticity policy.
         * <p>
         * This parameter is required when you select monitoring indicator elasticity policy setting.
         * <p>
         * @return {@code this}
         * @param scalingRuleMetric Property scalingRuleMetric: Configuration of monitoring indicator elasticity policy. This parameter is required.
         */
        public Builder scalingRuleMetric(final com.aliyun.ros.cdk.sae.RosApplicationScalingRule.ScalingRuleMetricProperty scalingRuleMetric) {
            this.props.scalingRuleMetric(scalingRuleMetric);
            return this;
        }

        /**
         * Property scalingRuleTimer: The configuration of the timer scaling policy.
         * <p>
         * @return {@code this}
         * @param scalingRuleTimer Property scalingRuleTimer: The configuration of the timer scaling policy. This parameter is required.
         */
        public Builder scalingRuleTimer(final com.aliyun.ros.cdk.core.IResolvable scalingRuleTimer) {
            this.props.scalingRuleTimer(scalingRuleTimer);
            return this;
        }
        /**
         * Property scalingRuleTimer: The configuration of the timer scaling policy.
         * <p>
         * @return {@code this}
         * @param scalingRuleTimer Property scalingRuleTimer: The configuration of the timer scaling policy. This parameter is required.
         */
        public Builder scalingRuleTimer(final com.aliyun.ros.cdk.sae.RosApplicationScalingRule.ScalingRuleTimerProperty scalingRuleTimer) {
            this.props.scalingRuleTimer(scalingRuleTimer);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.sae.ApplicationScalingRule}.
         */
        @Override
        public com.aliyun.ros.cdk.sae.ApplicationScalingRule build() {
            return new com.aliyun.ros.cdk.sae.ApplicationScalingRule(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
