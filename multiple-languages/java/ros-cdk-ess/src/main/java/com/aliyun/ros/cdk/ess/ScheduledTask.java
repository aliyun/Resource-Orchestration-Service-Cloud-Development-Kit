package com.aliyun.ros.cdk.ess;

/**
 * A ROS resource type:  `ALIYUN::ESS::ScheduledTask`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:33.929Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ess.$Module.class, fqn = "@alicloud/ros-cdk-ess.ScheduledTask")
public class ScheduledTask extends com.aliyun.ros.cdk.core.Resource {

    protected ScheduledTask(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ScheduledTask(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::ESS::ScheduledTask`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public ScheduledTask(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ess.ScheduledTaskProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::ESS::ScheduledTask`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     */
    public ScheduledTask(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ess.ScheduledTaskProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrScheduledTaskId() {
        return software.amazon.jsii.Kernel.get(this, "attrScheduledTaskId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ess.ScheduledTask}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ess.ScheduledTask> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.ess.ScheduledTaskProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ess.ScheduledTaskProps.Builder();
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
         * @param scheduledAction This parameter is required.
         */
        public Builder scheduledAction(final java.lang.String scheduledAction) {
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
         * @param launchExpirationTime This parameter is required.
         */
        public Builder launchExpirationTime(final java.lang.Number launchExpirationTime) {
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
         * @param recurrenceType This parameter is required.
         */
        public Builder recurrenceType(final java.lang.String recurrenceType) {
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
         * @param scheduledTaskName This parameter is required.
         */
        public Builder scheduledTaskName(final java.lang.String scheduledTaskName) {
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
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.ess.ScheduledTask}.
         */
        @Override
        public com.aliyun.ros.cdk.ess.ScheduledTask build() {
            return new com.aliyun.ros.cdk.ess.ScheduledTask(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
