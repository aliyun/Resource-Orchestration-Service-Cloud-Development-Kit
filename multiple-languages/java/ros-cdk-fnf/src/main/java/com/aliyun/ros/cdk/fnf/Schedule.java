package com.aliyun.ros.cdk.fnf;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::FNF::Schedule</code>, which is used to create a time-based schedule.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-22T08:56:21.662Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fnf.$Module.class, fqn = "@alicloud/ros-cdk-fnf.Schedule")
public class Schedule extends com.aliyun.ros.cdk.core.Resource {

    protected Schedule(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Schedule(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Schedule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fnf.ScheduleProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Schedule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fnf.ScheduleProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute FlowName: Flow name.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrFlowName() {
        return software.amazon.jsii.Kernel.get(this, "attrFlowName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ScheduleId: Schedule Id.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrScheduleId() {
        return software.amazon.jsii.Kernel.get(this, "attrScheduleId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ScheduleName: Schedule name.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrScheduleName() {
        return software.amazon.jsii.Kernel.get(this, "attrScheduleName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fnf.ScheduleProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.fnf.ScheduleProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fnf.ScheduleProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.fnf.Schedule}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.fnf.Schedule> {
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
        private final com.aliyun.ros.cdk.fnf.ScheduleProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.fnf.ScheduleProps.Builder();
        }

        /**
         * Property cronExpression: Cron expression.
         * <p>
         * @return {@code this}
         * @param cronExpression Property cronExpression: Cron expression. This parameter is required.
         */
        public Builder cronExpression(final java.lang.String cronExpression) {
            this.props.cronExpression(cronExpression);
            return this;
        }
        /**
         * Property cronExpression: Cron expression.
         * <p>
         * @return {@code this}
         * @param cronExpression Property cronExpression: Cron expression. This parameter is required.
         */
        public Builder cronExpression(final com.aliyun.ros.cdk.core.IResolvable cronExpression) {
            this.props.cronExpression(cronExpression);
            return this;
        }

        /**
         * Property flowName: Flow name.
         * <p>
         * @return {@code this}
         * @param flowName Property flowName: Flow name. This parameter is required.
         */
        public Builder flowName(final java.lang.String flowName) {
            this.props.flowName(flowName);
            return this;
        }
        /**
         * Property flowName: Flow name.
         * <p>
         * @return {@code this}
         * @param flowName Property flowName: Flow name. This parameter is required.
         */
        public Builder flowName(final com.aliyun.ros.cdk.core.IResolvable flowName) {
            this.props.flowName(flowName);
            return this;
        }

        /**
         * Property scheduleName: Schedule name.
         * <p>
         * @return {@code this}
         * @param scheduleName Property scheduleName: Schedule name. This parameter is required.
         */
        public Builder scheduleName(final java.lang.String scheduleName) {
            this.props.scheduleName(scheduleName);
            return this;
        }
        /**
         * Property scheduleName: Schedule name.
         * <p>
         * @return {@code this}
         * @param scheduleName Property scheduleName: Schedule name. This parameter is required.
         */
        public Builder scheduleName(final com.aliyun.ros.cdk.core.IResolvable scheduleName) {
            this.props.scheduleName(scheduleName);
            return this;
        }

        /**
         * Property description: Description of the schedule.
         * <p>
         * @return {@code this}
         * @param description Property description: Description of the schedule. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: Description of the schedule.
         * <p>
         * @return {@code this}
         * @param description Property description: Description of the schedule. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property enable: Whether enable schedule.
         * <p>
         * @return {@code this}
         * @param enable Property enable: Whether enable schedule. This parameter is required.
         */
        public Builder enable(final java.lang.Boolean enable) {
            this.props.enable(enable);
            return this;
        }
        /**
         * Property enable: Whether enable schedule.
         * <p>
         * @return {@code this}
         * @param enable Property enable: Whether enable schedule. This parameter is required.
         */
        public Builder enable(final com.aliyun.ros.cdk.core.IResolvable enable) {
            this.props.enable(enable);
            return this;
        }

        /**
         * Property payload: Payload.
         * <p>
         * @return {@code this}
         * @param payload Property payload: Payload. This parameter is required.
         */
        public Builder payload(final java.lang.String payload) {
            this.props.payload(payload);
            return this;
        }
        /**
         * Property payload: Payload.
         * <p>
         * @return {@code this}
         * @param payload Property payload: Payload. This parameter is required.
         */
        public Builder payload(final com.aliyun.ros.cdk.core.IResolvable payload) {
            this.props.payload(payload);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.fnf.Schedule}.
         */
        @Override
        public com.aliyun.ros.cdk.fnf.Schedule build() {
            return new com.aliyun.ros.cdk.fnf.Schedule(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
