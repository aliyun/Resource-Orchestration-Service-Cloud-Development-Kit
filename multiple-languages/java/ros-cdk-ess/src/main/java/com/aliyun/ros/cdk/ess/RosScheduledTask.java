package com.aliyun.ros.cdk.ess;

/**
 * A ROS template type:  <code>ALIYUN::ESS::ScheduledTask</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-25T05:23:25.372Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ess.$Module.class, fqn = "@alicloud/ros-cdk-ess.RosScheduledTask")
public class RosScheduledTask extends com.aliyun.ros.cdk.core.RosResource {

    protected RosScheduledTask(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosScheduledTask(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.ess.RosScheduledTask.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new <code>ALIYUN::ESS::ScheduledTask</code>.
     * <p>
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosScheduledTask(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ess.RosScheduledTaskProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), java.util.Objects.requireNonNull(enableResourcePropertyConstraint, "enableResourcePropertyConstraint is required") });
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> renderProperties(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> props) {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.call(this, "renderProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)), new Object[] { java.util.Objects.requireNonNull(props, "props is required") }));
    }

    /**
     * The resource type name for this resource class.
     */
    public final static java.lang.String ROS_RESOURCE_TYPE_NAME;

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrScheduledTaskId() {
        return software.amazon.jsii.Kernel.get(this, "attrScheduledTaskId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getLaunchTime() {
        return software.amazon.jsii.Kernel.get(this, "launchTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLaunchTime(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "launchTime", java.util.Objects.requireNonNull(value, "launchTime is required"));
    }

    /**
     */
    public void setLaunchTime(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "launchTime", java.util.Objects.requireNonNull(value, "launchTime is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getScheduledAction() {
        return software.amazon.jsii.Kernel.get(this, "scheduledAction", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setScheduledAction(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "scheduledAction", java.util.Objects.requireNonNull(value, "scheduledAction is required"));
    }

    /**
     */
    public void setScheduledAction(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "scheduledAction", java.util.Objects.requireNonNull(value, "scheduledAction is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getLaunchExpirationTime() {
        return software.amazon.jsii.Kernel.get(this, "launchExpirationTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLaunchExpirationTime(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "launchExpirationTime", value);
    }

    /**
     */
    public void setLaunchExpirationTime(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "launchExpirationTime", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRecurrenceEndTime() {
        return software.amazon.jsii.Kernel.get(this, "recurrenceEndTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRecurrenceEndTime(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "recurrenceEndTime", value);
    }

    /**
     */
    public void setRecurrenceEndTime(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "recurrenceEndTime", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRecurrenceType() {
        return software.amazon.jsii.Kernel.get(this, "recurrenceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRecurrenceType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "recurrenceType", value);
    }

    /**
     */
    public void setRecurrenceType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "recurrenceType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRecurrenceValue() {
        return software.amazon.jsii.Kernel.get(this, "recurrenceValue", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRecurrenceValue(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "recurrenceValue", value);
    }

    /**
     */
    public void setRecurrenceValue(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "recurrenceValue", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getScheduledTaskName() {
        return software.amazon.jsii.Kernel.get(this, "scheduledTaskName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setScheduledTaskName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "scheduledTaskName", value);
    }

    /**
     */
    public void setScheduledTaskName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "scheduledTaskName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTaskEnabled() {
        return software.amazon.jsii.Kernel.get(this, "taskEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTaskEnabled(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "taskEnabled", value);
    }

    /**
     */
    public void setTaskEnabled(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "taskEnabled", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ess.RosScheduledTask}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ess.RosScheduledTask> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
         * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.ess.RosScheduledTaskProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ess.RosScheduledTaskProps.Builder();
        }

        /**
         * @return {@code this}
         * @param launchTime This parameter is required.
         */
        public Builder launchTime(final java.lang.String launchTime) {
            this.props.launchTime(launchTime);
            return this;
        }
        /**
         * @return {@code this}
         * @param launchTime This parameter is required.
         */
        public Builder launchTime(final com.aliyun.ros.cdk.core.IResolvable launchTime) {
            this.props.launchTime(launchTime);
            return this;
        }

        /**
         * @return {@code this}
         * @param scheduledAction This parameter is required.
         */
        public Builder scheduledAction(final java.lang.String scheduledAction) {
            this.props.scheduledAction(scheduledAction);
            return this;
        }
        /**
         * @return {@code this}
         * @param scheduledAction This parameter is required.
         */
        public Builder scheduledAction(final com.aliyun.ros.cdk.core.IResolvable scheduledAction) {
            this.props.scheduledAction(scheduledAction);
            return this;
        }

        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * @return {@code this}
         * @param launchExpirationTime This parameter is required.
         */
        public Builder launchExpirationTime(final java.lang.Number launchExpirationTime) {
            this.props.launchExpirationTime(launchExpirationTime);
            return this;
        }
        /**
         * @return {@code this}
         * @param launchExpirationTime This parameter is required.
         */
        public Builder launchExpirationTime(final com.aliyun.ros.cdk.core.IResolvable launchExpirationTime) {
            this.props.launchExpirationTime(launchExpirationTime);
            return this;
        }

        /**
         * @return {@code this}
         * @param recurrenceEndTime This parameter is required.
         */
        public Builder recurrenceEndTime(final java.lang.String recurrenceEndTime) {
            this.props.recurrenceEndTime(recurrenceEndTime);
            return this;
        }
        /**
         * @return {@code this}
         * @param recurrenceEndTime This parameter is required.
         */
        public Builder recurrenceEndTime(final com.aliyun.ros.cdk.core.IResolvable recurrenceEndTime) {
            this.props.recurrenceEndTime(recurrenceEndTime);
            return this;
        }

        /**
         * @return {@code this}
         * @param recurrenceType This parameter is required.
         */
        public Builder recurrenceType(final java.lang.String recurrenceType) {
            this.props.recurrenceType(recurrenceType);
            return this;
        }
        /**
         * @return {@code this}
         * @param recurrenceType This parameter is required.
         */
        public Builder recurrenceType(final com.aliyun.ros.cdk.core.IResolvable recurrenceType) {
            this.props.recurrenceType(recurrenceType);
            return this;
        }

        /**
         * @return {@code this}
         * @param recurrenceValue This parameter is required.
         */
        public Builder recurrenceValue(final java.lang.String recurrenceValue) {
            this.props.recurrenceValue(recurrenceValue);
            return this;
        }
        /**
         * @return {@code this}
         * @param recurrenceValue This parameter is required.
         */
        public Builder recurrenceValue(final com.aliyun.ros.cdk.core.IResolvable recurrenceValue) {
            this.props.recurrenceValue(recurrenceValue);
            return this;
        }

        /**
         * @return {@code this}
         * @param scheduledTaskName This parameter is required.
         */
        public Builder scheduledTaskName(final java.lang.String scheduledTaskName) {
            this.props.scheduledTaskName(scheduledTaskName);
            return this;
        }
        /**
         * @return {@code this}
         * @param scheduledTaskName This parameter is required.
         */
        public Builder scheduledTaskName(final com.aliyun.ros.cdk.core.IResolvable scheduledTaskName) {
            this.props.scheduledTaskName(scheduledTaskName);
            return this;
        }

        /**
         * @return {@code this}
         * @param taskEnabled This parameter is required.
         */
        public Builder taskEnabled(final java.lang.Boolean taskEnabled) {
            this.props.taskEnabled(taskEnabled);
            return this;
        }
        /**
         * @return {@code this}
         * @param taskEnabled This parameter is required.
         */
        public Builder taskEnabled(final com.aliyun.ros.cdk.core.IResolvable taskEnabled) {
            this.props.taskEnabled(taskEnabled);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ess.RosScheduledTask}.
         */
        @Override
        public com.aliyun.ros.cdk.ess.RosScheduledTask build() {
            return new com.aliyun.ros.cdk.ess.RosScheduledTask(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
