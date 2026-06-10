package com.aliyun.ros.cdk.threatdetection;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ThreatDetection::BaselineStrategy</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T13:59:58.432Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.threatdetection.$Module.class, fqn = "@alicloud/ros-cdk-threatdetection.BaselineStrategy")
public class BaselineStrategy extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.threatdetection.IBaselineStrategy {

    protected BaselineStrategy(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected BaselineStrategy(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public BaselineStrategy(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.BaselineStrategyProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public BaselineStrategy(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.BaselineStrategyProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute BaselineStrategyId: The ID of the baseline check policy.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrBaselineStrategyId() {
        return software.amazon.jsii.Kernel.get(this, "attrBaselineStrategyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute BaselineStrategyName: The new name of the baseline check policy.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrBaselineStrategyName() {
        return software.amazon.jsii.Kernel.get(this, "attrBaselineStrategyName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CustomType: The type of the baseline check policy.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCustomType() {
        return software.amazon.jsii.Kernel.get(this, "attrCustomType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CycleDays: The new interval of the baseline check.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCycleDays() {
        return software.amazon.jsii.Kernel.get(this, "attrCycleDays", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute EndTime: The time when the baseline check based on the baseline check policy ends.
     * <p>
     * Specify the time in the hh:mm:ss format.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEndTime() {
        return software.amazon.jsii.Kernel.get(this, "attrEndTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute RiskSubTypeName: The subtype of the baselines.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRiskSubTypeName() {
        return software.amazon.jsii.Kernel.get(this, "attrRiskSubTypeName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute StartTime: The time when the baseline check based on the baseline check policy starts.
     * <p>
     * Specify the time in the hh:mm:ss format.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrStartTime() {
        return software.amazon.jsii.Kernel.get(this, "attrStartTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute TargetType: The method that is used to apply the baseline check policy.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTargetType() {
        return software.amazon.jsii.Kernel.get(this, "attrTargetType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.BaselineStrategyProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.threatdetection.BaselineStrategyProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.threatdetection.BaselineStrategy}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.threatdetection.BaselineStrategy> {
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
        private final com.aliyun.ros.cdk.threatdetection.BaselineStrategyProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.threatdetection.BaselineStrategyProps.Builder();
        }

        /**
         * Property baselineStrategyName: The new name of the baseline check policy.
         * <p>
         * @return {@code this}
         * @param baselineStrategyName Property baselineStrategyName: The new name of the baseline check policy. This parameter is required.
         */
        public Builder baselineStrategyName(final java.lang.String baselineStrategyName) {
            this.props.baselineStrategyName(baselineStrategyName);
            return this;
        }
        /**
         * Property baselineStrategyName: The new name of the baseline check policy.
         * <p>
         * @return {@code this}
         * @param baselineStrategyName Property baselineStrategyName: The new name of the baseline check policy. This parameter is required.
         */
        public Builder baselineStrategyName(final com.aliyun.ros.cdk.core.IResolvable baselineStrategyName) {
            this.props.baselineStrategyName(baselineStrategyName);
            return this;
        }

        /**
         * Property customType: The type of the baseline check policy.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>custom</strong>: a custom baseline check policy</li>
         * <li><strong>common</strong>: a standard baseline check policy.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param customType Property customType: The type of the baseline check policy. This parameter is required.
         */
        public Builder customType(final java.lang.String customType) {
            this.props.customType(customType);
            return this;
        }
        /**
         * Property customType: The type of the baseline check policy.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>custom</strong>: a custom baseline check policy</li>
         * <li><strong>common</strong>: a standard baseline check policy.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param customType Property customType: The type of the baseline check policy. This parameter is required.
         */
        public Builder customType(final com.aliyun.ros.cdk.core.IResolvable customType) {
            this.props.customType(customType);
            return this;
        }

        /**
         * Property cycleDays: The new interval of the baseline check.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>1</strong>: every 2 days</li>
         * <li><strong>3</strong>: every 4 days</li>
         * <li><strong>7</strong>: every 8 days</li>
         * <li><strong>30</strong>: every 31 days.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param cycleDays Property cycleDays: The new interval of the baseline check. This parameter is required.
         */
        public Builder cycleDays(final java.lang.Number cycleDays) {
            this.props.cycleDays(cycleDays);
            return this;
        }
        /**
         * Property cycleDays: The new interval of the baseline check.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>1</strong>: every 2 days</li>
         * <li><strong>3</strong>: every 4 days</li>
         * <li><strong>7</strong>: every 8 days</li>
         * <li><strong>30</strong>: every 31 days.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param cycleDays Property cycleDays: The new interval of the baseline check. This parameter is required.
         */
        public Builder cycleDays(final com.aliyun.ros.cdk.core.IResolvable cycleDays) {
            this.props.cycleDays(cycleDays);
            return this;
        }

        /**
         * Property endTime: The time when the baseline check based on the baseline check policy ends.
         * <p>
         * Specify the time in the hh:mm:ss format.
         * <p>
         * @return {@code this}
         * @param endTime Property endTime: The time when the baseline check based on the baseline check policy ends. This parameter is required.
         */
        public Builder endTime(final java.lang.String endTime) {
            this.props.endTime(endTime);
            return this;
        }
        /**
         * Property endTime: The time when the baseline check based on the baseline check policy ends.
         * <p>
         * Specify the time in the hh:mm:ss format.
         * <p>
         * @return {@code this}
         * @param endTime Property endTime: The time when the baseline check based on the baseline check policy ends. This parameter is required.
         */
        public Builder endTime(final com.aliyun.ros.cdk.core.IResolvable endTime) {
            this.props.endTime(endTime);
            return this;
        }

        /**
         * Property riskSubTypeName: The subtype of the baselines.
         * <p>
         * @return {@code this}
         * @param riskSubTypeName Property riskSubTypeName: The subtype of the baselines. This parameter is required.
         */
        public Builder riskSubTypeName(final java.lang.String riskSubTypeName) {
            this.props.riskSubTypeName(riskSubTypeName);
            return this;
        }
        /**
         * Property riskSubTypeName: The subtype of the baselines.
         * <p>
         * @return {@code this}
         * @param riskSubTypeName Property riskSubTypeName: The subtype of the baselines. This parameter is required.
         */
        public Builder riskSubTypeName(final com.aliyun.ros.cdk.core.IResolvable riskSubTypeName) {
            this.props.riskSubTypeName(riskSubTypeName);
            return this;
        }

        /**
         * Property startTime: The time when the baseline check based on the baseline check policy starts.
         * <p>
         * Specify the time in the hh:mm:ss format.
         * <p>
         * @return {@code this}
         * @param startTime Property startTime: The time when the baseline check based on the baseline check policy starts. This parameter is required.
         */
        public Builder startTime(final java.lang.String startTime) {
            this.props.startTime(startTime);
            return this;
        }
        /**
         * Property startTime: The time when the baseline check based on the baseline check policy starts.
         * <p>
         * Specify the time in the hh:mm:ss format.
         * <p>
         * @return {@code this}
         * @param startTime Property startTime: The time when the baseline check based on the baseline check policy starts. This parameter is required.
         */
        public Builder startTime(final com.aliyun.ros.cdk.core.IResolvable startTime) {
            this.props.startTime(startTime);
            return this;
        }

        /**
         * Property targetType: The method that is used to apply the baseline check policy.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>groupId</strong>: asset groups</li>
         * <li><strong>uuid</strong>: assets.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param targetType Property targetType: The method that is used to apply the baseline check policy. This parameter is required.
         */
        public Builder targetType(final java.lang.String targetType) {
            this.props.targetType(targetType);
            return this;
        }
        /**
         * Property targetType: The method that is used to apply the baseline check policy.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>groupId</strong>: asset groups</li>
         * <li><strong>uuid</strong>: assets.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param targetType Property targetType: The method that is used to apply the baseline check policy. This parameter is required.
         */
        public Builder targetType(final com.aliyun.ros.cdk.core.IResolvable targetType) {
            this.props.targetType(targetType);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.threatdetection.BaselineStrategy}.
         */
        @Override
        public com.aliyun.ros.cdk.threatdetection.BaselineStrategy build() {
            return new com.aliyun.ros.cdk.threatdetection.BaselineStrategy(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
