package com.aliyun.ros.cdk.ros;

/**
 * A ROS template type:  `ALIYUN::ROS::WaitCondition`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.63.2 (build a8a8833)", date = "2022-08-05T07:29:05.442Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ros.$Module.class, fqn = "@alicloud/ros-cdk-ros.RosWaitCondition")
public class RosWaitCondition extends com.aliyun.ros.cdk.core.RosResource {

    protected RosWaitCondition(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosWaitCondition(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.ros.RosWaitCondition.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::ROS::WaitCondition`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosWaitCondition(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ros.RosWaitConditionProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrData() {
        return software.amazon.jsii.Kernel.get(this, "attrData", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrErrorData() {
        return software.amazon.jsii.Kernel.get(this, "attrErrorData", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrJoinedErrorData() {
        return software.amazon.jsii.Kernel.get(this, "attrJoinedErrorData", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getHandle() {
        return software.amazon.jsii.Kernel.get(this, "handle", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHandle(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "handle", java.util.Objects.requireNonNull(value, "handle is required"));
    }

    /**
     */
    public void setHandle(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "handle", java.util.Objects.requireNonNull(value, "handle is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getTimeout() {
        return software.amazon.jsii.Kernel.get(this, "timeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTimeout(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "timeout", java.util.Objects.requireNonNull(value, "timeout is required"));
    }

    /**
     */
    public void setTimeout(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "timeout", java.util.Objects.requireNonNull(value, "timeout is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCount() {
        return software.amazon.jsii.Kernel.get(this, "count", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCount(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "count", value);
    }

    /**
     */
    public void setCount(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "count", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getShowProgressEvent() {
        return software.amazon.jsii.Kernel.get(this, "showProgressEvent", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setShowProgressEvent(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "showProgressEvent", value);
    }

    /**
     */
    public void setShowProgressEvent(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "showProgressEvent", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ros.RosWaitCondition}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ros.RosWaitCondition> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.ros.RosWaitConditionProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ros.RosWaitConditionProps.Builder();
        }

        /**
         * @return {@code this}
         * @param handle This parameter is required.
         */
        public Builder handle(final java.lang.String handle) {
            this.props.handle(handle);
            return this;
        }
        /**
         * @return {@code this}
         * @param handle This parameter is required.
         */
        public Builder handle(final com.aliyun.ros.cdk.core.IResolvable handle) {
            this.props.handle(handle);
            return this;
        }

        /**
         * @return {@code this}
         * @param timeout This parameter is required.
         */
        public Builder timeout(final java.lang.Number timeout) {
            this.props.timeout(timeout);
            return this;
        }
        /**
         * @return {@code this}
         * @param timeout This parameter is required.
         */
        public Builder timeout(final com.aliyun.ros.cdk.core.IResolvable timeout) {
            this.props.timeout(timeout);
            return this;
        }

        /**
         * @return {@code this}
         * @param count This parameter is required.
         */
        public Builder count(final java.lang.Number count) {
            this.props.count(count);
            return this;
        }
        /**
         * @return {@code this}
         * @param count This parameter is required.
         */
        public Builder count(final com.aliyun.ros.cdk.core.IResolvable count) {
            this.props.count(count);
            return this;
        }

        /**
         * @return {@code this}
         * @param showProgressEvent This parameter is required.
         */
        public Builder showProgressEvent(final java.lang.String showProgressEvent) {
            this.props.showProgressEvent(showProgressEvent);
            return this;
        }
        /**
         * @return {@code this}
         * @param showProgressEvent This parameter is required.
         */
        public Builder showProgressEvent(final com.aliyun.ros.cdk.core.IResolvable showProgressEvent) {
            this.props.showProgressEvent(showProgressEvent);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.ros.RosWaitCondition}.
         */
        @Override
        public com.aliyun.ros.cdk.ros.RosWaitCondition build() {
            return new com.aliyun.ros.cdk.ros.RosWaitCondition(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
