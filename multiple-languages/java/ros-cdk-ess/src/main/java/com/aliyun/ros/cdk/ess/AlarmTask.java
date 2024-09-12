package com.aliyun.ros.cdk.ess;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ESS::AlarmTask</code>, which is used to create a metric-based alarm task.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-12T02:20:26.993Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ess.$Module.class, fqn = "@alicloud/ros-cdk-ess.AlarmTask")
public class AlarmTask extends com.aliyun.ros.cdk.core.Resource {

    protected AlarmTask(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected AlarmTask(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public AlarmTask(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ess.AlarmTaskProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public AlarmTask(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ess.AlarmTaskProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AlarmTaskId: The alarm task ID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAlarmTaskId() {
        return software.amazon.jsii.Kernel.get(this, "attrAlarmTaskId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ess.AlarmTaskProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ess.AlarmTaskProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ess.AlarmTaskProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ess.AlarmTask}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ess.AlarmTask> {
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
        private final com.aliyun.ros.cdk.ess.AlarmTaskProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ess.AlarmTaskProps.Builder();
        }

        /**
         * Property alarmAction: Alarm Actions.
         * <p>
         * @return {@code this}
         * @param alarmAction Property alarmAction: Alarm Actions. This parameter is required.
         */
        public Builder alarmAction(final com.aliyun.ros.cdk.core.IResolvable alarmAction) {
            this.props.alarmAction(alarmAction);
            return this;
        }
        /**
         * Property alarmAction: Alarm Actions.
         * <p>
         * @return {@code this}
         * @param alarmAction Property alarmAction: Alarm Actions. This parameter is required.
         */
        public Builder alarmAction(final java.util.List<? extends java.lang.Object> alarmAction) {
            this.props.alarmAction(alarmAction);
            return this;
        }

        /**
         * Property metricName: Metric Name.
         * <p>
         * @return {@code this}
         * @param metricName Property metricName: Metric Name. This parameter is required.
         */
        public Builder metricName(final java.lang.String metricName) {
            this.props.metricName(metricName);
            return this;
        }
        /**
         * Property metricName: Metric Name.
         * <p>
         * @return {@code this}
         * @param metricName Property metricName: Metric Name. This parameter is required.
         */
        public Builder metricName(final com.aliyun.ros.cdk.core.IResolvable metricName) {
            this.props.metricName(metricName);
            return this;
        }

        /**
         * Property scalingGroupId: The ID of the scaling group.
         * <p>
         * @return {@code this}
         * @param scalingGroupId Property scalingGroupId: The ID of the scaling group. This parameter is required.
         */
        public Builder scalingGroupId(final java.lang.String scalingGroupId) {
            this.props.scalingGroupId(scalingGroupId);
            return this;
        }
        /**
         * Property scalingGroupId: The ID of the scaling group.
         * <p>
         * @return {@code this}
         * @param scalingGroupId Property scalingGroupId: The ID of the scaling group. This parameter is required.
         */
        public Builder scalingGroupId(final com.aliyun.ros.cdk.core.IResolvable scalingGroupId) {
            this.props.scalingGroupId(scalingGroupId);
            return this;
        }

        /**
         * Property threshold: Threshold.
         * <p>
         * @return {@code this}
         * @param threshold Property threshold: Threshold. This parameter is required.
         */
        public Builder threshold(final java.lang.Number threshold) {
            this.props.threshold(threshold);
            return this;
        }
        /**
         * Property threshold: Threshold.
         * <p>
         * @return {@code this}
         * @param threshold Property threshold: Threshold. This parameter is required.
         */
        public Builder threshold(final com.aliyun.ros.cdk.core.IResolvable threshold) {
            this.props.threshold(threshold);
            return this;
        }

        /**
         * Property comparisonOperator: Comparison Operator.
         * <p>
         * @return {@code this}
         * @param comparisonOperator Property comparisonOperator: Comparison Operator. This parameter is required.
         */
        public Builder comparisonOperator(final java.lang.String comparisonOperator) {
            this.props.comparisonOperator(comparisonOperator);
            return this;
        }
        /**
         * Property comparisonOperator: Comparison Operator.
         * <p>
         * @return {@code this}
         * @param comparisonOperator Property comparisonOperator: Comparison Operator. This parameter is required.
         */
        public Builder comparisonOperator(final com.aliyun.ros.cdk.core.IResolvable comparisonOperator) {
            this.props.comparisonOperator(comparisonOperator);
            return this;
        }

        /**
         * Property description: Description.
         * <p>
         * @return {@code this}
         * @param description Property description: Description. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: Description.
         * <p>
         * @return {@code this}
         * @param description Property description: Description. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property dimensions: Dimensions.
         * <p>
         * @return {@code this}
         * @param dimensions Property dimensions: Dimensions. This parameter is required.
         */
        public Builder dimensions(final com.aliyun.ros.cdk.core.IResolvable dimensions) {
            this.props.dimensions(dimensions);
            return this;
        }
        /**
         * Property dimensions: Dimensions.
         * <p>
         * @return {@code this}
         * @param dimensions Property dimensions: Dimensions. This parameter is required.
         */
        public Builder dimensions(final java.util.List<? extends java.lang.Object> dimensions) {
            this.props.dimensions(dimensions);
            return this;
        }

        /**
         * Property evaluationCount: Evaluation Count.
         * <p>
         * @return {@code this}
         * @param evaluationCount Property evaluationCount: Evaluation Count. This parameter is required.
         */
        public Builder evaluationCount(final java.lang.Number evaluationCount) {
            this.props.evaluationCount(evaluationCount);
            return this;
        }
        /**
         * Property evaluationCount: Evaluation Count.
         * <p>
         * @return {@code this}
         * @param evaluationCount Property evaluationCount: Evaluation Count. This parameter is required.
         */
        public Builder evaluationCount(final com.aliyun.ros.cdk.core.IResolvable evaluationCount) {
            this.props.evaluationCount(evaluationCount);
            return this;
        }

        /**
         * Property groupId: Group Id.
         * <p>
         * @return {@code this}
         * @param groupId Property groupId: Group Id. This parameter is required.
         */
        public Builder groupId(final java.lang.Number groupId) {
            this.props.groupId(groupId);
            return this;
        }
        /**
         * Property groupId: Group Id.
         * <p>
         * @return {@code this}
         * @param groupId Property groupId: Group Id. This parameter is required.
         */
        public Builder groupId(final com.aliyun.ros.cdk.core.IResolvable groupId) {
            this.props.groupId(groupId);
            return this;
        }

        /**
         * Property metricType: Metric Type.
         * <p>
         * @return {@code this}
         * @param metricType Property metricType: Metric Type. This parameter is required.
         */
        public Builder metricType(final java.lang.String metricType) {
            this.props.metricType(metricType);
            return this;
        }
        /**
         * Property metricType: Metric Type.
         * <p>
         * @return {@code this}
         * @param metricType Property metricType: Metric Type. This parameter is required.
         */
        public Builder metricType(final com.aliyun.ros.cdk.core.IResolvable metricType) {
            this.props.metricType(metricType);
            return this;
        }

        /**
         * Property name: Name.
         * <p>
         * @return {@code this}
         * @param name Property name: Name. This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * Property name: Name.
         * <p>
         * @return {@code this}
         * @param name Property name: Name. This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * Property period: Period.
         * <p>
         * @return {@code this}
         * @param period Property period: Period. This parameter is required.
         */
        public Builder period(final java.lang.Number period) {
            this.props.period(period);
            return this;
        }
        /**
         * Property period: Period.
         * <p>
         * @return {@code this}
         * @param period Property period: Period. This parameter is required.
         */
        public Builder period(final com.aliyun.ros.cdk.core.IResolvable period) {
            this.props.period(period);
            return this;
        }

        /**
         * Property statistics: Statistics.
         * <p>
         * @return {@code this}
         * @param statistics Property statistics: Statistics. This parameter is required.
         */
        public Builder statistics(final java.lang.String statistics) {
            this.props.statistics(statistics);
            return this;
        }
        /**
         * Property statistics: Statistics.
         * <p>
         * @return {@code this}
         * @param statistics Property statistics: Statistics. This parameter is required.
         */
        public Builder statistics(final com.aliyun.ros.cdk.core.IResolvable statistics) {
            this.props.statistics(statistics);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ess.AlarmTask}.
         */
        @Override
        public com.aliyun.ros.cdk.ess.AlarmTask build() {
            return new com.aliyun.ros.cdk.ess.AlarmTask(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
