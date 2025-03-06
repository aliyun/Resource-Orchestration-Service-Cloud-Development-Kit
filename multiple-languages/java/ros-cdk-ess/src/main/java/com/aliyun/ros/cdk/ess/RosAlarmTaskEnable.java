package com.aliyun.ros.cdk.ess;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::ESS::AlarmTaskEnable</code>, which is used to start an alarm task.
 * <p>
 * You can call this operation to enable alarm tasks when the task is stopped.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:06.633Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ess.$Module.class, fqn = "@alicloud/ros-cdk-ess.RosAlarmTaskEnable")
public class RosAlarmTaskEnable extends com.aliyun.ros.cdk.core.RosResource {

    protected RosAlarmTaskEnable(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosAlarmTaskEnable(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.ess.RosAlarmTaskEnable.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosAlarmTaskEnable(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ess.RosAlarmTaskEnableProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAlarmTaskId() {
        return software.amazon.jsii.Kernel.get(this, "alarmTaskId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAlarmTaskId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "alarmTaskId", java.util.Objects.requireNonNull(value, "alarmTaskId is required"));
    }

    /**
     */
    public void setAlarmTaskId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "alarmTaskId", java.util.Objects.requireNonNull(value, "alarmTaskId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getEnable() {
        return software.amazon.jsii.Kernel.get(this, "enable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEnable(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enable", java.util.Objects.requireNonNull(value, "enable is required"));
    }

    /**
     */
    public void setEnable(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "enable", java.util.Objects.requireNonNull(value, "enable is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ess.RosAlarmTaskEnable}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ess.RosAlarmTaskEnable> {
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
        private final com.aliyun.ros.cdk.ess.RosAlarmTaskEnableProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ess.RosAlarmTaskEnableProps.Builder();
        }

        /**
         * @return {@code this}
         * @param alarmTaskId This parameter is required.
         */
        public Builder alarmTaskId(final java.lang.String alarmTaskId) {
            this.props.alarmTaskId(alarmTaskId);
            return this;
        }
        /**
         * @return {@code this}
         * @param alarmTaskId This parameter is required.
         */
        public Builder alarmTaskId(final com.aliyun.ros.cdk.core.IResolvable alarmTaskId) {
            this.props.alarmTaskId(alarmTaskId);
            return this;
        }

        /**
         * @return {@code this}
         * @param enable This parameter is required.
         */
        public Builder enable(final java.lang.Boolean enable) {
            this.props.enable(enable);
            return this;
        }
        /**
         * @return {@code this}
         * @param enable This parameter is required.
         */
        public Builder enable(final com.aliyun.ros.cdk.core.IResolvable enable) {
            this.props.enable(enable);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ess.RosAlarmTaskEnable}.
         */
        @Override
        public com.aliyun.ros.cdk.ess.RosAlarmTaskEnable build() {
            return new com.aliyun.ros.cdk.ess.RosAlarmTaskEnable(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
