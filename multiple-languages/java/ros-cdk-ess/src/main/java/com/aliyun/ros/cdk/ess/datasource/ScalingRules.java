package com.aliyun.ros.cdk.ess.datasource;

/**
 * This class encapsulates and extends the ROS resource type <code>DATASOURCE::ESS::ScalingRules</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:40.092Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ess.$Module.class, fqn = "@alicloud/ros-cdk-ess.datasource.ScalingRules")
public class ScalingRules extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.ess.datasource.IScalingRules {

    protected ScalingRules(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ScalingRules(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public ScalingRules(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ess.datasource.ScalingRulesProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public ScalingRules(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ess.datasource.ScalingRulesProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public ScalingRules(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute ScalingRuleIds: The list of scaling rule IDs.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingRuleIds() {
        return software.amazon.jsii.Kernel.get(this, "attrScalingRuleIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ScalingRules: The list of scaling rules.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingRules() {
        return software.amazon.jsii.Kernel.get(this, "attrScalingRules", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ess.datasource.ScalingRulesProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ess.datasource.ScalingRulesProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.ess.datasource.ScalingRules}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ess.datasource.ScalingRules> {
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
        private com.aliyun.ros.cdk.ess.datasource.ScalingRulesProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         * <li>Always: Always refresh the datasource resource when the stack is updated.
         * Default is Never.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. This parameter is required.
         */
        public Builder refreshOptions(final java.lang.String refreshOptions) {
            this.props().refreshOptions(refreshOptions);
            return this;
        }
        /**
         * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         * <li>Always: Always refresh the datasource resource when the stack is updated.
         * Default is Never.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. This parameter is required.
         */
        public Builder refreshOptions(final com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.props().refreshOptions(refreshOptions);
            return this;
        }

        /**
         * Property scalingGroupId: The ID of the scaling group.
         * <p>
         * @return {@code this}
         * @param scalingGroupId Property scalingGroupId: The ID of the scaling group. This parameter is required.
         */
        public Builder scalingGroupId(final java.lang.String scalingGroupId) {
            this.props().scalingGroupId(scalingGroupId);
            return this;
        }
        /**
         * Property scalingGroupId: The ID of the scaling group.
         * <p>
         * @return {@code this}
         * @param scalingGroupId Property scalingGroupId: The ID of the scaling group. This parameter is required.
         */
        public Builder scalingGroupId(final com.aliyun.ros.cdk.core.IResolvable scalingGroupId) {
            this.props().scalingGroupId(scalingGroupId);
            return this;
        }

        /**
         * Property scalingRuleAris: The unique identifiers of the scaling rules that you want to query.
         * <p>
         * @return {@code this}
         * @param scalingRuleAris Property scalingRuleAris: The unique identifiers of the scaling rules that you want to query. This parameter is required.
         */
        public Builder scalingRuleAris(final java.util.List<? extends java.lang.Object> scalingRuleAris) {
            this.props().scalingRuleAris(scalingRuleAris);
            return this;
        }
        /**
         * Property scalingRuleAris: The unique identifiers of the scaling rules that you want to query.
         * <p>
         * @return {@code this}
         * @param scalingRuleAris Property scalingRuleAris: The unique identifiers of the scaling rules that you want to query. This parameter is required.
         */
        public Builder scalingRuleAris(final com.aliyun.ros.cdk.core.IResolvable scalingRuleAris) {
            this.props().scalingRuleAris(scalingRuleAris);
            return this;
        }

        /**
         * Property scalingRuleIds: The IDs of the scaling rules that you want to query.
         * <p>
         * @return {@code this}
         * @param scalingRuleIds Property scalingRuleIds: The IDs of the scaling rules that you want to query. This parameter is required.
         */
        public Builder scalingRuleIds(final java.util.List<? extends java.lang.Object> scalingRuleIds) {
            this.props().scalingRuleIds(scalingRuleIds);
            return this;
        }
        /**
         * Property scalingRuleIds: The IDs of the scaling rules that you want to query.
         * <p>
         * @return {@code this}
         * @param scalingRuleIds Property scalingRuleIds: The IDs of the scaling rules that you want to query. This parameter is required.
         */
        public Builder scalingRuleIds(final com.aliyun.ros.cdk.core.IResolvable scalingRuleIds) {
            this.props().scalingRuleIds(scalingRuleIds);
            return this;
        }

        /**
         * Property scalingRuleNames: The names of the scaling rules that you want to query.
         * <p>
         * @return {@code this}
         * @param scalingRuleNames Property scalingRuleNames: The names of the scaling rules that you want to query. This parameter is required.
         */
        public Builder scalingRuleNames(final java.util.List<? extends java.lang.Object> scalingRuleNames) {
            this.props().scalingRuleNames(scalingRuleNames);
            return this;
        }
        /**
         * Property scalingRuleNames: The names of the scaling rules that you want to query.
         * <p>
         * @return {@code this}
         * @param scalingRuleNames Property scalingRuleNames: The names of the scaling rules that you want to query. This parameter is required.
         */
        public Builder scalingRuleNames(final com.aliyun.ros.cdk.core.IResolvable scalingRuleNames) {
            this.props().scalingRuleNames(scalingRuleNames);
            return this;
        }

        /**
         * Property scalingRuleType: The type of the scaling rule.
         * <p>
         * Valid values:
         * SimpleScalingRule: adjusts the number of ECS instances based on the values of the AdjustmentType and AdjustmentValue parameters.
         * TargetTrackingScalingRule: calculates the number of ECS instances that need to be scaled in a dynamic manner and maintains the value of a predefined metric close to the value of the TargetValue parameter.
         * StepScalingRule: scales ECS instances in steps based on the specified thresholds and metric values.
         * PredictiveScalingRule: uses machine learning to analyze historical monitoring data of the scaling group and predicts the future values of metrics. In addition, Auto Scaling automatically creates scheduled tasks to adjust the boundary values for the scaling group.
         * <p>
         * @return {@code this}
         * @param scalingRuleType Property scalingRuleType: The type of the scaling rule. This parameter is required.
         */
        public Builder scalingRuleType(final java.lang.String scalingRuleType) {
            this.props().scalingRuleType(scalingRuleType);
            return this;
        }
        /**
         * Property scalingRuleType: The type of the scaling rule.
         * <p>
         * Valid values:
         * SimpleScalingRule: adjusts the number of ECS instances based on the values of the AdjustmentType and AdjustmentValue parameters.
         * TargetTrackingScalingRule: calculates the number of ECS instances that need to be scaled in a dynamic manner and maintains the value of a predefined metric close to the value of the TargetValue parameter.
         * StepScalingRule: scales ECS instances in steps based on the specified thresholds and metric values.
         * PredictiveScalingRule: uses machine learning to analyze historical monitoring data of the scaling group and predicts the future values of metrics. In addition, Auto Scaling automatically creates scheduled tasks to adjust the boundary values for the scaling group.
         * <p>
         * @return {@code this}
         * @param scalingRuleType Property scalingRuleType: The type of the scaling rule. This parameter is required.
         */
        public Builder scalingRuleType(final com.aliyun.ros.cdk.core.IResolvable scalingRuleType) {
            this.props().scalingRuleType(scalingRuleType);
            return this;
        }

        /**
         * Property showAlarmRules: Specifies whether to return the event-triggered tasks that are associated with the scaling rule.
         * <p>
         * Valid values:
         * true
         * false
         * Default value: false.
         * <p>
         * @return {@code this}
         * @param showAlarmRules Property showAlarmRules: Specifies whether to return the event-triggered tasks that are associated with the scaling rule. This parameter is required.
         */
        public Builder showAlarmRules(final java.lang.Boolean showAlarmRules) {
            this.props().showAlarmRules(showAlarmRules);
            return this;
        }
        /**
         * Property showAlarmRules: Specifies whether to return the event-triggered tasks that are associated with the scaling rule.
         * <p>
         * Valid values:
         * true
         * false
         * Default value: false.
         * <p>
         * @return {@code this}
         * @param showAlarmRules Property showAlarmRules: Specifies whether to return the event-triggered tasks that are associated with the scaling rule. This parameter is required.
         */
        public Builder showAlarmRules(final com.aliyun.ros.cdk.core.IResolvable showAlarmRules) {
            this.props().showAlarmRules(showAlarmRules);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ess.datasource.ScalingRules}.
         */
        @Override
        public com.aliyun.ros.cdk.ess.datasource.ScalingRules build() {
            return new com.aliyun.ros.cdk.ess.datasource.ScalingRules(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.ess.datasource.ScalingRulesProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.ess.datasource.ScalingRulesProps.Builder();
            }
            return this.props;
        }
    }
}
