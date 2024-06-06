package com.aliyun.ros.cdk.ess;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::ESS::LifecycleHook</code>, which is used to create a lifecycle hook for a scaling group.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-06T03:35:15.194Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ess.$Module.class, fqn = "@alicloud/ros-cdk-ess.RosLifecycleHook")
public class RosLifecycleHook extends com.aliyun.ros.cdk.core.RosResource {

    protected RosLifecycleHook(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosLifecycleHook(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.ess.RosLifecycleHook.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosLifecycleHook(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ess.RosLifecycleHookProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrLifecycleHookId() {
        return software.amazon.jsii.Kernel.get(this, "attrLifecycleHookId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrScalingGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrScalingGroupId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getLifecycleTransition() {
        return software.amazon.jsii.Kernel.get(this, "lifecycleTransition", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLifecycleTransition(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "lifecycleTransition", java.util.Objects.requireNonNull(value, "lifecycleTransition is required"));
    }

    /**
     */
    public void setLifecycleTransition(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "lifecycleTransition", java.util.Objects.requireNonNull(value, "lifecycleTransition is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getScalingGroupId() {
        return software.amazon.jsii.Kernel.get(this, "scalingGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setScalingGroupId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "scalingGroupId", java.util.Objects.requireNonNull(value, "scalingGroupId is required"));
    }

    /**
     */
    public void setScalingGroupId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "scalingGroupId", java.util.Objects.requireNonNull(value, "scalingGroupId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDefaultResult() {
        return software.amazon.jsii.Kernel.get(this, "defaultResult", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDefaultResult(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "defaultResult", value);
    }

    /**
     */
    public void setDefaultResult(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "defaultResult", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getHeartbeatTimeout() {
        return software.amazon.jsii.Kernel.get(this, "heartbeatTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHeartbeatTimeout(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "heartbeatTimeout", value);
    }

    /**
     */
    public void setHeartbeatTimeout(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "heartbeatTimeout", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getLifecycleHookName() {
        return software.amazon.jsii.Kernel.get(this, "lifecycleHookName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLifecycleHookName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "lifecycleHookName", value);
    }

    /**
     */
    public void setLifecycleHookName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "lifecycleHookName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getNotificationArn() {
        return software.amazon.jsii.Kernel.get(this, "notificationArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNotificationArn(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "notificationArn", value);
    }

    /**
     */
    public void setNotificationArn(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "notificationArn", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getNotificationMetadata() {
        return software.amazon.jsii.Kernel.get(this, "notificationMetadata", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNotificationMetadata(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "notificationMetadata", value);
    }

    /**
     */
    public void setNotificationMetadata(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "notificationMetadata", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ess.RosLifecycleHook}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ess.RosLifecycleHook> {
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
        private final com.aliyun.ros.cdk.ess.RosLifecycleHookProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ess.RosLifecycleHookProps.Builder();
        }

        /**
         * @return {@code this}
         * @param lifecycleTransition This parameter is required.
         */
        public Builder lifecycleTransition(final java.lang.String lifecycleTransition) {
            this.props.lifecycleTransition(lifecycleTransition);
            return this;
        }
        /**
         * @return {@code this}
         * @param lifecycleTransition This parameter is required.
         */
        public Builder lifecycleTransition(final com.aliyun.ros.cdk.core.IResolvable lifecycleTransition) {
            this.props.lifecycleTransition(lifecycleTransition);
            return this;
        }

        /**
         * @return {@code this}
         * @param scalingGroupId This parameter is required.
         */
        public Builder scalingGroupId(final java.lang.String scalingGroupId) {
            this.props.scalingGroupId(scalingGroupId);
            return this;
        }
        /**
         * @return {@code this}
         * @param scalingGroupId This parameter is required.
         */
        public Builder scalingGroupId(final com.aliyun.ros.cdk.core.IResolvable scalingGroupId) {
            this.props.scalingGroupId(scalingGroupId);
            return this;
        }

        /**
         * @return {@code this}
         * @param defaultResult This parameter is required.
         */
        public Builder defaultResult(final java.lang.String defaultResult) {
            this.props.defaultResult(defaultResult);
            return this;
        }
        /**
         * @return {@code this}
         * @param defaultResult This parameter is required.
         */
        public Builder defaultResult(final com.aliyun.ros.cdk.core.IResolvable defaultResult) {
            this.props.defaultResult(defaultResult);
            return this;
        }

        /**
         * @return {@code this}
         * @param heartbeatTimeout This parameter is required.
         */
        public Builder heartbeatTimeout(final java.lang.Number heartbeatTimeout) {
            this.props.heartbeatTimeout(heartbeatTimeout);
            return this;
        }
        /**
         * @return {@code this}
         * @param heartbeatTimeout This parameter is required.
         */
        public Builder heartbeatTimeout(final com.aliyun.ros.cdk.core.IResolvable heartbeatTimeout) {
            this.props.heartbeatTimeout(heartbeatTimeout);
            return this;
        }

        /**
         * @return {@code this}
         * @param lifecycleHookName This parameter is required.
         */
        public Builder lifecycleHookName(final java.lang.String lifecycleHookName) {
            this.props.lifecycleHookName(lifecycleHookName);
            return this;
        }
        /**
         * @return {@code this}
         * @param lifecycleHookName This parameter is required.
         */
        public Builder lifecycleHookName(final com.aliyun.ros.cdk.core.IResolvable lifecycleHookName) {
            this.props.lifecycleHookName(lifecycleHookName);
            return this;
        }

        /**
         * @return {@code this}
         * @param notificationArn This parameter is required.
         */
        public Builder notificationArn(final java.lang.String notificationArn) {
            this.props.notificationArn(notificationArn);
            return this;
        }
        /**
         * @return {@code this}
         * @param notificationArn This parameter is required.
         */
        public Builder notificationArn(final com.aliyun.ros.cdk.core.IResolvable notificationArn) {
            this.props.notificationArn(notificationArn);
            return this;
        }

        /**
         * @return {@code this}
         * @param notificationMetadata This parameter is required.
         */
        public Builder notificationMetadata(final java.lang.String notificationMetadata) {
            this.props.notificationMetadata(notificationMetadata);
            return this;
        }
        /**
         * @return {@code this}
         * @param notificationMetadata This parameter is required.
         */
        public Builder notificationMetadata(final com.aliyun.ros.cdk.core.IResolvable notificationMetadata) {
            this.props.notificationMetadata(notificationMetadata);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ess.RosLifecycleHook}.
         */
        @Override
        public com.aliyun.ros.cdk.ess.RosLifecycleHook build() {
            return new com.aliyun.ros.cdk.ess.RosLifecycleHook(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
