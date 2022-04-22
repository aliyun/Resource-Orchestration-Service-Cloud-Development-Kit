package com.aliyun.ros.cdk.ros;

/**
 * A ROS resource type:  `ALIYUN::ROS::Sleep`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.57.0 (build f614666)", date = "2022-04-22T03:34:41.475Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ros.$Module.class, fqn = "@alicloud/ros-cdk-ros.Sleep")
public class Sleep extends com.aliyun.ros.cdk.core.Resource {

    protected Sleep(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Sleep(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::ROS::Sleep`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     * @param enableResourcePropertyConstraint
     */
    public Sleep(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ros.SleepProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props, enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::ROS::Sleep`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     */
    public Sleep(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ros.SleepProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Create a new `ALIYUN::ROS::Sleep`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public Sleep(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ros.Sleep}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ros.Sleep> {
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
        private com.aliyun.ros.cdk.ros.SleepProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property createDuration: The number of seconds to wait before resource creation.
         * <p>
         * @return {@code this}
         * @param createDuration Property createDuration: The number of seconds to wait before resource creation. This parameter is required.
         */
        public Builder createDuration(final java.lang.Number createDuration) {
            this.props().createDuration(createDuration);
            return this;
        }
        /**
         * Property createDuration: The number of seconds to wait before resource creation.
         * <p>
         * @return {@code this}
         * @param createDuration Property createDuration: The number of seconds to wait before resource creation. This parameter is required.
         */
        public Builder createDuration(final com.aliyun.ros.cdk.core.IResolvable createDuration) {
            this.props().createDuration(createDuration);
            return this;
        }

        /**
         * Property deleteDuration: The number of seconds to wait before resource deletion.
         * <p>
         * @return {@code this}
         * @param deleteDuration Property deleteDuration: The number of seconds to wait before resource deletion. This parameter is required.
         */
        public Builder deleteDuration(final java.lang.Number deleteDuration) {
            this.props().deleteDuration(deleteDuration);
            return this;
        }
        /**
         * Property deleteDuration: The number of seconds to wait before resource deletion.
         * <p>
         * @return {@code this}
         * @param deleteDuration Property deleteDuration: The number of seconds to wait before resource deletion. This parameter is required.
         */
        public Builder deleteDuration(final com.aliyun.ros.cdk.core.IResolvable deleteDuration) {
            this.props().deleteDuration(deleteDuration);
            return this;
        }

        /**
         * Property triggers: Arbitrary map of values that, when changed, will run update or update rollback delays again.
         * <p>
         * @return {@code this}
         * @param triggers Property triggers: Arbitrary map of values that, when changed, will run update or update rollback delays again. This parameter is required.
         */
        public Builder triggers(final com.aliyun.ros.cdk.core.IResolvable triggers) {
            this.props().triggers(triggers);
            return this;
        }
        /**
         * Property triggers: Arbitrary map of values that, when changed, will run update or update rollback delays again.
         * <p>
         * @return {@code this}
         * @param triggers Property triggers: Arbitrary map of values that, when changed, will run update or update rollback delays again. This parameter is required.
         */
        public Builder triggers(final java.util.Map<java.lang.String, ? extends java.lang.Object> triggers) {
            this.props().triggers(triggers);
            return this;
        }

        /**
         * Property updateDuration: The number of seconds to wait before resource update.
         * <p>
         * It only triggers when the property Triggers change and the status of stack is UPDATE_IN_PROGRESS.
         * <p>
         * @return {@code this}
         * @param updateDuration Property updateDuration: The number of seconds to wait before resource update. This parameter is required.
         */
        public Builder updateDuration(final java.lang.Number updateDuration) {
            this.props().updateDuration(updateDuration);
            return this;
        }
        /**
         * Property updateDuration: The number of seconds to wait before resource update.
         * <p>
         * It only triggers when the property Triggers change and the status of stack is UPDATE_IN_PROGRESS.
         * <p>
         * @return {@code this}
         * @param updateDuration Property updateDuration: The number of seconds to wait before resource update. This parameter is required.
         */
        public Builder updateDuration(final com.aliyun.ros.cdk.core.IResolvable updateDuration) {
            this.props().updateDuration(updateDuration);
            return this;
        }

        /**
         * Property updateRollbackDuration: The number of seconds to wait before resource update rollback.
         * <p>
         * It only triggers when stack update failed and resource was updated.
         * <p>
         * @return {@code this}
         * @param updateRollbackDuration Property updateRollbackDuration: The number of seconds to wait before resource update rollback. This parameter is required.
         */
        public Builder updateRollbackDuration(final java.lang.Number updateRollbackDuration) {
            this.props().updateRollbackDuration(updateRollbackDuration);
            return this;
        }
        /**
         * Property updateRollbackDuration: The number of seconds to wait before resource update rollback.
         * <p>
         * It only triggers when stack update failed and resource was updated.
         * <p>
         * @return {@code this}
         * @param updateRollbackDuration Property updateRollbackDuration: The number of seconds to wait before resource update rollback. This parameter is required.
         */
        public Builder updateRollbackDuration(final com.aliyun.ros.cdk.core.IResolvable updateRollbackDuration) {
            this.props().updateRollbackDuration(updateRollbackDuration);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.ros.Sleep}.
         */
        @Override
        public com.aliyun.ros.cdk.ros.Sleep build() {
            return new com.aliyun.ros.cdk.ros.Sleep(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.ros.SleepProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.ros.SleepProps.Builder();
            }
            return this.props;
        }
    }
}
