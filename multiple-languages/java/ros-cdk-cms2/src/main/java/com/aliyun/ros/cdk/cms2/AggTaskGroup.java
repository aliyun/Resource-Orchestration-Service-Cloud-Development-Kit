package com.aliyun.ros.cdk.cms2;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::CMS2::AggTaskGroup</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-08-31T07:47:48.936Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms2.$Module.class, fqn = "@alicloud/ros-cdk-cms2.AggTaskGroup")
public class AggTaskGroup extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.cms2.IAggTaskGroup {

    protected AggTaskGroup(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected AggTaskGroup(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public AggTaskGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cms2.AggTaskGroupProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public AggTaskGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cms2.AggTaskGroupProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AggTaskGroupConfigHash: The config hash of the agg task group.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAggTaskGroupConfigHash() {
        return software.amazon.jsii.Kernel.get(this, "attrAggTaskGroupConfigHash", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute AggTaskGroupId: The ID of the agg task group.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAggTaskGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrAggTaskGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute AggTaskGroupName: The name of the agg task group.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAggTaskGroupName() {
        return software.amazon.jsii.Kernel.get(this, "attrAggTaskGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SourcePrometheusId: The ID of the source Prometheus instance of the agg task group.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourcePrometheusId() {
        return software.amazon.jsii.Kernel.get(this, "attrSourcePrometheusId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Status: The current status of the agg task group.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrStatus() {
        return software.amazon.jsii.Kernel.get(this, "attrStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cms2.AggTaskGroupProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cms2.AggTaskGroupProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.cms2.AggTaskGroup}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cms2.AggTaskGroup> {
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
        private final com.aliyun.ros.cdk.cms2.AggTaskGroupProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cms2.AggTaskGroupProps.Builder();
        }

        /**
         * Property aggTaskGroupConfig: The config of the agg task group.
         * <p>
         * Only "RecordingRuleYaml" format is supported, which must conform to the RecordingRule format of the open source Prometheus.
         * <p>
         * @return {@code this}
         * @param aggTaskGroupConfig Property aggTaskGroupConfig: The config of the agg task group. This parameter is required.
         */
        public Builder aggTaskGroupConfig(final java.lang.String aggTaskGroupConfig) {
            this.props.aggTaskGroupConfig(aggTaskGroupConfig);
            return this;
        }
        /**
         * Property aggTaskGroupConfig: The config of the agg task group.
         * <p>
         * Only "RecordingRuleYaml" format is supported, which must conform to the RecordingRule format of the open source Prometheus.
         * <p>
         * @return {@code this}
         * @param aggTaskGroupConfig Property aggTaskGroupConfig: The config of the agg task group. This parameter is required.
         */
        public Builder aggTaskGroupConfig(final com.aliyun.ros.cdk.core.IResolvable aggTaskGroupConfig) {
            this.props.aggTaskGroupConfig(aggTaskGroupConfig);
            return this;
        }

        /**
         * Property aggTaskGroupName: The name of the agg task group.
         * <p>
         * @return {@code this}
         * @param aggTaskGroupName Property aggTaskGroupName: The name of the agg task group. This parameter is required.
         */
        public Builder aggTaskGroupName(final java.lang.String aggTaskGroupName) {
            this.props.aggTaskGroupName(aggTaskGroupName);
            return this;
        }
        /**
         * Property aggTaskGroupName: The name of the agg task group.
         * <p>
         * @return {@code this}
         * @param aggTaskGroupName Property aggTaskGroupName: The name of the agg task group. This parameter is required.
         */
        public Builder aggTaskGroupName(final com.aliyun.ros.cdk.core.IResolvable aggTaskGroupName) {
            this.props.aggTaskGroupName(aggTaskGroupName);
            return this;
        }

        /**
         * Property instanceId: The ID of the source Prometheus instance the agg task group reads data from.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The ID of the source Prometheus instance the agg task group reads data from. This parameter is required.
         */
        public Builder instanceId(final java.lang.String instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }
        /**
         * Property instanceId: The ID of the source Prometheus instance the agg task group reads data from.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The ID of the source Prometheus instance the agg task group reads data from. This parameter is required.
         */
        public Builder instanceId(final com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }

        /**
         * Property targetPrometheusId: The ID of the target Prometheus instance of the agg task group.
         * <p>
         * @return {@code this}
         * @param targetPrometheusId Property targetPrometheusId: The ID of the target Prometheus instance of the agg task group. This parameter is required.
         */
        public Builder targetPrometheusId(final java.lang.String targetPrometheusId) {
            this.props.targetPrometheusId(targetPrometheusId);
            return this;
        }
        /**
         * Property targetPrometheusId: The ID of the target Prometheus instance of the agg task group.
         * <p>
         * @return {@code this}
         * @param targetPrometheusId Property targetPrometheusId: The ID of the target Prometheus instance of the agg task group. This parameter is required.
         */
        public Builder targetPrometheusId(final com.aliyun.ros.cdk.core.IResolvable targetPrometheusId) {
            this.props.targetPrometheusId(targetPrometheusId);
            return this;
        }

        /**
         * Property aggTaskGroupConfigType: The config type of the agg task group.
         * <p>
         * Default: "RecordingRuleYaml".
         * <p>
         * @return {@code this}
         * @param aggTaskGroupConfigType Property aggTaskGroupConfigType: The config type of the agg task group. This parameter is required.
         */
        public Builder aggTaskGroupConfigType(final java.lang.String aggTaskGroupConfigType) {
            this.props.aggTaskGroupConfigType(aggTaskGroupConfigType);
            return this;
        }
        /**
         * Property aggTaskGroupConfigType: The config type of the agg task group.
         * <p>
         * Default: "RecordingRuleYaml".
         * <p>
         * @return {@code this}
         * @param aggTaskGroupConfigType Property aggTaskGroupConfigType: The config type of the agg task group. This parameter is required.
         */
        public Builder aggTaskGroupConfigType(final com.aliyun.ros.cdk.core.IResolvable aggTaskGroupConfigType) {
            this.props.aggTaskGroupConfigType(aggTaskGroupConfigType);
            return this;
        }

        /**
         * Property cronExpr: The cron expression used when ScheduleMode is "Cron".
         * <p>
         * For example, "0/1 * * * *" means scheduling every 1 minute starting from minute 0.
         * <p>
         * @return {@code this}
         * @param cronExpr Property cronExpr: The cron expression used when ScheduleMode is "Cron". This parameter is required.
         */
        public Builder cronExpr(final java.lang.String cronExpr) {
            this.props.cronExpr(cronExpr);
            return this;
        }
        /**
         * Property cronExpr: The cron expression used when ScheduleMode is "Cron".
         * <p>
         * For example, "0/1 * * * *" means scheduling every 1 minute starting from minute 0.
         * <p>
         * @return {@code this}
         * @param cronExpr Property cronExpr: The cron expression used when ScheduleMode is "Cron". This parameter is required.
         */
        public Builder cronExpr(final com.aliyun.ros.cdk.core.IResolvable cronExpr) {
            this.props.cronExpr(cronExpr);
            return this;
        }

        /**
         * Property delay: The fixed delay of the schedule, in seconds.
         * <p>
         * Default: 30.
         * <p>
         * @return {@code this}
         * @param delay Property delay: The fixed delay of the schedule, in seconds. This parameter is required.
         */
        public Builder delay(final java.lang.Number delay) {
            this.props.delay(delay);
            return this;
        }
        /**
         * Property delay: The fixed delay of the schedule, in seconds.
         * <p>
         * Default: 30.
         * <p>
         * @return {@code this}
         * @param delay Property delay: The fixed delay of the schedule, in seconds. This parameter is required.
         */
        public Builder delay(final com.aliyun.ros.cdk.core.IResolvable delay) {
            this.props.delay(delay);
            return this;
        }

        /**
         * Property description: The description of the agg task group.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the agg task group. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of the agg task group.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the agg task group. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property fromTime: The second-level timestamp corresponding to the schedule start time.
         * <p>
         * @return {@code this}
         * @param fromTime Property fromTime: The second-level timestamp corresponding to the schedule start time. This parameter is required.
         */
        public Builder fromTime(final java.lang.Number fromTime) {
            this.props.fromTime(fromTime);
            return this;
        }
        /**
         * Property fromTime: The second-level timestamp corresponding to the schedule start time.
         * <p>
         * @return {@code this}
         * @param fromTime Property fromTime: The second-level timestamp corresponding to the schedule start time. This parameter is required.
         */
        public Builder fromTime(final com.aliyun.ros.cdk.core.IResolvable fromTime) {
            this.props.fromTime(fromTime);
            return this;
        }

        /**
         * Property maxRetries: The maximum number of retries for executing the agg task.
         * <p>
         * Default: 20.
         * <p>
         * @return {@code this}
         * @param maxRetries Property maxRetries: The maximum number of retries for executing the agg task. This parameter is required.
         */
        public Builder maxRetries(final java.lang.Number maxRetries) {
            this.props.maxRetries(maxRetries);
            return this;
        }
        /**
         * Property maxRetries: The maximum number of retries for executing the agg task.
         * <p>
         * Default: 20.
         * <p>
         * @return {@code this}
         * @param maxRetries Property maxRetries: The maximum number of retries for executing the agg task. This parameter is required.
         */
        public Builder maxRetries(final com.aliyun.ros.cdk.core.IResolvable maxRetries) {
            this.props.maxRetries(maxRetries);
            return this;
        }

        /**
         * Property maxRunTimeInSeconds: The maximum retry time for executing the agg task, in seconds.
         * <p>
         * Default: 600.
         * <p>
         * @return {@code this}
         * @param maxRunTimeInSeconds Property maxRunTimeInSeconds: The maximum retry time for executing the agg task, in seconds. This parameter is required.
         */
        public Builder maxRunTimeInSeconds(final java.lang.Number maxRunTimeInSeconds) {
            this.props.maxRunTimeInSeconds(maxRunTimeInSeconds);
            return this;
        }
        /**
         * Property maxRunTimeInSeconds: The maximum retry time for executing the agg task, in seconds.
         * <p>
         * Default: 600.
         * <p>
         * @return {@code this}
         * @param maxRunTimeInSeconds Property maxRunTimeInSeconds: The maximum retry time for executing the agg task, in seconds. This parameter is required.
         */
        public Builder maxRunTimeInSeconds(final com.aliyun.ros.cdk.core.IResolvable maxRunTimeInSeconds) {
            this.props.maxRunTimeInSeconds(maxRunTimeInSeconds);
            return this;
        }

        /**
         * Property overrideIfExists: Whether to override and update an existing agg task group with the same name when creating.
         * <p>
         * Create-only, cannot be updated.
         * <p>
         * @return {@code this}
         * @param overrideIfExists Property overrideIfExists: Whether to override and update an existing agg task group with the same name when creating. This parameter is required.
         */
        public Builder overrideIfExists(final java.lang.Boolean overrideIfExists) {
            this.props.overrideIfExists(overrideIfExists);
            return this;
        }
        /**
         * Property overrideIfExists: Whether to override and update an existing agg task group with the same name when creating.
         * <p>
         * Create-only, cannot be updated.
         * <p>
         * @return {@code this}
         * @param overrideIfExists Property overrideIfExists: Whether to override and update an existing agg task group with the same name when creating. This parameter is required.
         */
        public Builder overrideIfExists(final com.aliyun.ros.cdk.core.IResolvable overrideIfExists) {
            this.props.overrideIfExists(overrideIfExists);
            return this;
        }

        /**
         * Property precheckString: The precheck config.
         * <p>
         * Not configured by default.
         * <p>
         * @return {@code this}
         * @param precheckString Property precheckString: The precheck config. This parameter is required.
         */
        public Builder precheckString(final com.aliyun.ros.cdk.core.IResolvable precheckString) {
            this.props.precheckString(precheckString);
            return this;
        }
        /**
         * Property precheckString: The precheck config.
         * <p>
         * Not configured by default.
         * <p>
         * @return {@code this}
         * @param precheckString Property precheckString: The precheck config. This parameter is required.
         */
        public Builder precheckString(final java.util.Map<java.lang.String, ? extends java.lang.Object> precheckString) {
            this.props.precheckString(precheckString);
            return this;
        }

        /**
         * Property scheduleMode: The schedule mode, "Cron" or "FixedRate".
         * <p>
         * Default: "FixedRate".
         * <p>
         * @return {@code this}
         * @param scheduleMode Property scheduleMode: The schedule mode, "Cron" or "FixedRate". This parameter is required.
         */
        public Builder scheduleMode(final java.lang.String scheduleMode) {
            this.props.scheduleMode(scheduleMode);
            return this;
        }
        /**
         * Property scheduleMode: The schedule mode, "Cron" or "FixedRate".
         * <p>
         * Default: "FixedRate".
         * <p>
         * @return {@code this}
         * @param scheduleMode Property scheduleMode: The schedule mode, "Cron" or "FixedRate". This parameter is required.
         */
        public Builder scheduleMode(final com.aliyun.ros.cdk.core.IResolvable scheduleMode) {
            this.props.scheduleMode(scheduleMode);
            return this;
        }

        /**
         * Property scheduleTimeExpr: The schedule time expression, "&#64;s" or "&#64;m" is recommended, indicating the rounding granularity of the schedule time window.
         * <p>
         * Default: "&#64;m".
         * <p>
         * @return {@code this}
         * @param scheduleTimeExpr Property scheduleTimeExpr: The schedule time expression, "&#64;s" or "&#64;m" is recommended, indicating the rounding granularity of the schedule time window. This parameter is required.
         */
        public Builder scheduleTimeExpr(final java.lang.String scheduleTimeExpr) {
            this.props.scheduleTimeExpr(scheduleTimeExpr);
            return this;
        }
        /**
         * Property scheduleTimeExpr: The schedule time expression, "&#64;s" or "&#64;m" is recommended, indicating the rounding granularity of the schedule time window.
         * <p>
         * Default: "&#64;m".
         * <p>
         * @return {@code this}
         * @param scheduleTimeExpr Property scheduleTimeExpr: The schedule time expression, "&#64;s" or "&#64;m" is recommended, indicating the rounding granularity of the schedule time window. This parameter is required.
         */
        public Builder scheduleTimeExpr(final com.aliyun.ros.cdk.core.IResolvable scheduleTimeExpr) {
            this.props.scheduleTimeExpr(scheduleTimeExpr);
            return this;
        }

        /**
         * Property status: The status of the agg task group, "Running" or "Stopped".
         * <p>
         * Default: Running.
         * <p>
         * @return {@code this}
         * @param status Property status: The status of the agg task group, "Running" or "Stopped". This parameter is required.
         */
        public Builder status(final java.lang.String status) {
            this.props.status(status);
            return this;
        }
        /**
         * Property status: The status of the agg task group, "Running" or "Stopped".
         * <p>
         * Default: Running.
         * <p>
         * @return {@code this}
         * @param status Property status: The status of the agg task group, "Running" or "Stopped". This parameter is required.
         */
        public Builder status(final com.aliyun.ros.cdk.core.IResolvable status) {
            this.props.status(status);
            return this;
        }

        /**
         * Property tags: The tags of the agg task group.
         * <p>
         * @return {@code this}
         * @param tags Property tags: The tags of the agg task group. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.cms2.RosAggTaskGroup.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * Property toTime: The second-level timestamp corresponding to the schedule end time.
         * <p>
         * 0 means the schedule never stops.
         * <p>
         * @return {@code this}
         * @param toTime Property toTime: The second-level timestamp corresponding to the schedule end time. This parameter is required.
         */
        public Builder toTime(final java.lang.Number toTime) {
            this.props.toTime(toTime);
            return this;
        }
        /**
         * Property toTime: The second-level timestamp corresponding to the schedule end time.
         * <p>
         * 0 means the schedule never stops.
         * <p>
         * @return {@code this}
         * @param toTime Property toTime: The second-level timestamp corresponding to the schedule end time. This parameter is required.
         */
        public Builder toTime(final com.aliyun.ros.cdk.core.IResolvable toTime) {
            this.props.toTime(toTime);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cms2.AggTaskGroup}.
         */
        @Override
        public com.aliyun.ros.cdk.cms2.AggTaskGroup build() {
            return new com.aliyun.ros.cdk.cms2.AggTaskGroup(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
