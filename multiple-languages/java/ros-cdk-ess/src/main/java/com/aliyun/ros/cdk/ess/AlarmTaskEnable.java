package com.aliyun.ros.cdk.ess;

/**
 * A ROS resource type:  <code>ALIYUN::ESS::AlarmTaskEnable</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-25T05:23:25.331Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ess.$Module.class, fqn = "@alicloud/ros-cdk-ess.AlarmTaskEnable")
public class AlarmTaskEnable extends com.aliyun.ros.cdk.core.Resource {

    protected AlarmTaskEnable(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected AlarmTaskEnable(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>ALIYUN::ESS::AlarmTaskEnable</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public AlarmTaskEnable(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ess.AlarmTaskEnableProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>ALIYUN::ESS::AlarmTaskEnable</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public AlarmTaskEnable(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ess.AlarmTaskEnableProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ess.AlarmTaskEnable}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ess.AlarmTaskEnable> {
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
        private final com.aliyun.ros.cdk.ess.AlarmTaskEnableProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ess.AlarmTaskEnableProps.Builder();
        }

        /**
         * Property alarmTaskId: The id of alarm task.
         * <p>
         * @return {@code this}
         * @param alarmTaskId Property alarmTaskId: The id of alarm task. This parameter is required.
         */
        public Builder alarmTaskId(final java.lang.String alarmTaskId) {
            this.props.alarmTaskId(alarmTaskId);
            return this;
        }
        /**
         * Property alarmTaskId: The id of alarm task.
         * <p>
         * @return {@code this}
         * @param alarmTaskId Property alarmTaskId: The id of alarm task. This parameter is required.
         */
        public Builder alarmTaskId(final com.aliyun.ros.cdk.core.IResolvable alarmTaskId) {
            this.props.alarmTaskId(alarmTaskId);
            return this;
        }

        /**
         * Property enable: Enable alarm task or not.
         * <p>
         * @return {@code this}
         * @param enable Property enable: Enable alarm task or not. This parameter is required.
         */
        public Builder enable(final java.lang.Boolean enable) {
            this.props.enable(enable);
            return this;
        }
        /**
         * Property enable: Enable alarm task or not.
         * <p>
         * @return {@code this}
         * @param enable Property enable: Enable alarm task or not. This parameter is required.
         */
        public Builder enable(final com.aliyun.ros.cdk.core.IResolvable enable) {
            this.props.enable(enable);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ess.AlarmTaskEnable}.
         */
        @Override
        public com.aliyun.ros.cdk.ess.AlarmTaskEnable build() {
            return new com.aliyun.ros.cdk.ess.AlarmTaskEnable(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
