package com.aliyun.ros.cdk.esa;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ESA::ScheduledPreloadExecution</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:50.243Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.ScheduledPreloadExecution")
public class ScheduledPreloadExecution extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.esa.IScheduledPreloadExecution {

    protected ScheduledPreloadExecution(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ScheduledPreloadExecution(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public ScheduledPreloadExecution(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.ScheduledPreloadExecutionProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public ScheduledPreloadExecution(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.ScheduledPreloadExecutionProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute EndTime: The end time of the prefetch plan.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEndTime() {
        return software.amazon.jsii.Kernel.get(this, "attrEndTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Interval: The time interval between each batch execution.
     * <p>
     * Unit: seconds.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInterval() {
        return software.amazon.jsii.Kernel.get(this, "attrInterval", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ScheduledPreloadExecutionId: The ID of the prefetch plan.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrScheduledPreloadExecutionId() {
        return software.amazon.jsii.Kernel.get(this, "attrScheduledPreloadExecutionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ScheduledPreloadJobId: The ID of the prefetch task.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrScheduledPreloadJobId() {
        return software.amazon.jsii.Kernel.get(this, "attrScheduledPreloadJobId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SliceLen: The number of URLs prefetched in each batch.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSliceLen() {
        return software.amazon.jsii.Kernel.get(this, "attrSliceLen", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute StartTime: The start time of the prefetch plan.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrStartTime() {
        return software.amazon.jsii.Kernel.get(this, "attrStartTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.ScheduledPreloadExecutionProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.esa.ScheduledPreloadExecutionProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.esa.ScheduledPreloadExecution}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.esa.ScheduledPreloadExecution> {
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
        private final com.aliyun.ros.cdk.esa.ScheduledPreloadExecutionProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.esa.ScheduledPreloadExecutionProps.Builder();
        }

        /**
         * Property interval: The time interval between each batch execution.
         * <p>
         * Unit: seconds.
         * <p>
         * @return {@code this}
         * @param interval Property interval: The time interval between each batch execution. This parameter is required.
         */
        public Builder interval(final java.lang.Number interval) {
            this.props.interval(interval);
            return this;
        }
        /**
         * Property interval: The time interval between each batch execution.
         * <p>
         * Unit: seconds.
         * <p>
         * @return {@code this}
         * @param interval Property interval: The time interval between each batch execution. This parameter is required.
         */
        public Builder interval(final com.aliyun.ros.cdk.core.IResolvable interval) {
            this.props.interval(interval);
            return this;
        }

        /**
         * Property scheduledPreloadJobId: The ID of the prefetch task.
         * <p>
         * @return {@code this}
         * @param scheduledPreloadJobId Property scheduledPreloadJobId: The ID of the prefetch task. This parameter is required.
         */
        public Builder scheduledPreloadJobId(final java.lang.String scheduledPreloadJobId) {
            this.props.scheduledPreloadJobId(scheduledPreloadJobId);
            return this;
        }
        /**
         * Property scheduledPreloadJobId: The ID of the prefetch task.
         * <p>
         * @return {@code this}
         * @param scheduledPreloadJobId Property scheduledPreloadJobId: The ID of the prefetch task. This parameter is required.
         */
        public Builder scheduledPreloadJobId(final com.aliyun.ros.cdk.core.IResolvable scheduledPreloadJobId) {
            this.props.scheduledPreloadJobId(scheduledPreloadJobId);
            return this;
        }

        /**
         * Property sliceLen: The number of URLs prefetched in each batch.
         * <p>
         * @return {@code this}
         * @param sliceLen Property sliceLen: The number of URLs prefetched in each batch. This parameter is required.
         */
        public Builder sliceLen(final java.lang.Number sliceLen) {
            this.props.sliceLen(sliceLen);
            return this;
        }
        /**
         * Property sliceLen: The number of URLs prefetched in each batch.
         * <p>
         * @return {@code this}
         * @param sliceLen Property sliceLen: The number of URLs prefetched in each batch. This parameter is required.
         */
        public Builder sliceLen(final com.aliyun.ros.cdk.core.IResolvable sliceLen) {
            this.props.sliceLen(sliceLen);
            return this;
        }

        /**
         * Property endTime: The end time of the prefetch plan.
         * <p>
         * @return {@code this}
         * @param endTime Property endTime: The end time of the prefetch plan. This parameter is required.
         */
        public Builder endTime(final java.lang.String endTime) {
            this.props.endTime(endTime);
            return this;
        }
        /**
         * Property endTime: The end time of the prefetch plan.
         * <p>
         * @return {@code this}
         * @param endTime Property endTime: The end time of the prefetch plan. This parameter is required.
         */
        public Builder endTime(final com.aliyun.ros.cdk.core.IResolvable endTime) {
            this.props.endTime(endTime);
            return this;
        }

        /**
         * Property startTime: The start time of the prefetch plan.
         * <p>
         * @return {@code this}
         * @param startTime Property startTime: The start time of the prefetch plan. This parameter is required.
         */
        public Builder startTime(final java.lang.String startTime) {
            this.props.startTime(startTime);
            return this;
        }
        /**
         * Property startTime: The start time of the prefetch plan.
         * <p>
         * @return {@code this}
         * @param startTime Property startTime: The start time of the prefetch plan. This parameter is required.
         */
        public Builder startTime(final com.aliyun.ros.cdk.core.IResolvable startTime) {
            this.props.startTime(startTime);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.esa.ScheduledPreloadExecution}.
         */
        @Override
        public com.aliyun.ros.cdk.esa.ScheduledPreloadExecution build() {
            return new com.aliyun.ros.cdk.esa.ScheduledPreloadExecution(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
