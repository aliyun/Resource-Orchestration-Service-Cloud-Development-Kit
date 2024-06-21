package com.aliyun.ros.cdk.vod;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::VOD::MessageCallback</code>, which is used to configure the callback method, callback URL, and event types for an event notification.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-21T05:59:12.580Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vod.$Module.class, fqn = "@alicloud/ros-cdk-vod.RosMessageCallback")
public class RosMessageCallback extends com.aliyun.ros.cdk.core.RosResource {

    protected RosMessageCallback(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosMessageCallback(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.vod.RosMessageCallback.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosMessageCallback(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vod.RosMessageCallbackProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAppId() {
        return software.amazon.jsii.Kernel.get(this, "attrAppId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAuthKey() {
        return software.amazon.jsii.Kernel.get(this, "attrAuthKey", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAuthSwitch() {
        return software.amazon.jsii.Kernel.get(this, "attrAuthSwitch", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCallbackType() {
        return software.amazon.jsii.Kernel.get(this, "attrCallbackType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCallbackUrl() {
        return software.amazon.jsii.Kernel.get(this, "attrCallbackUrl", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEventTypeList() {
        return software.amazon.jsii.Kernel.get(this, "attrEventTypeList", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrMnsEndpoint() {
        return software.amazon.jsii.Kernel.get(this, "attrMnsEndpoint", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrMnsQueueName() {
        return software.amazon.jsii.Kernel.get(this, "attrMnsQueueName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getCallbackType() {
        return software.amazon.jsii.Kernel.get(this, "callbackType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCallbackType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "callbackType", java.util.Objects.requireNonNull(value, "callbackType is required"));
    }

    /**
     */
    public void setCallbackType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "callbackType", java.util.Objects.requireNonNull(value, "callbackType is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAppId() {
        return software.amazon.jsii.Kernel.get(this, "appId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAppId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "appId", value);
    }

    /**
     */
    public void setAppId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "appId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAuthKey() {
        return software.amazon.jsii.Kernel.get(this, "authKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAuthKey(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "authKey", value);
    }

    /**
     */
    public void setAuthKey(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "authKey", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAuthSwitch() {
        return software.amazon.jsii.Kernel.get(this, "authSwitch", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAuthSwitch(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "authSwitch", value);
    }

    /**
     */
    public void setAuthSwitch(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "authSwitch", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCallbackUrl() {
        return software.amazon.jsii.Kernel.get(this, "callbackUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCallbackUrl(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "callbackUrl", value);
    }

    /**
     */
    public void setCallbackUrl(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "callbackUrl", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEventTypeList() {
        return software.amazon.jsii.Kernel.get(this, "eventTypeList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEventTypeList(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "eventTypeList", value);
    }

    /**
     */
    public void setEventTypeList(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "eventTypeList", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMnsEndpoint() {
        return software.amazon.jsii.Kernel.get(this, "mnsEndpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMnsEndpoint(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "mnsEndpoint", value);
    }

    /**
     */
    public void setMnsEndpoint(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "mnsEndpoint", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMnsQueueName() {
        return software.amazon.jsii.Kernel.get(this, "mnsQueueName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMnsQueueName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "mnsQueueName", value);
    }

    /**
     */
    public void setMnsQueueName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "mnsQueueName", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.vod.RosMessageCallback}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vod.RosMessageCallback> {
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
        private final com.aliyun.ros.cdk.vod.RosMessageCallbackProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.vod.RosMessageCallbackProps.Builder();
        }

        /**
         * @return {@code this}
         * @param callbackType This parameter is required.
         */
        public Builder callbackType(final java.lang.String callbackType) {
            this.props.callbackType(callbackType);
            return this;
        }
        /**
         * @return {@code this}
         * @param callbackType This parameter is required.
         */
        public Builder callbackType(final com.aliyun.ros.cdk.core.IResolvable callbackType) {
            this.props.callbackType(callbackType);
            return this;
        }

        /**
         * @return {@code this}
         * @param appId This parameter is required.
         */
        public Builder appId(final java.lang.String appId) {
            this.props.appId(appId);
            return this;
        }
        /**
         * @return {@code this}
         * @param appId This parameter is required.
         */
        public Builder appId(final com.aliyun.ros.cdk.core.IResolvable appId) {
            this.props.appId(appId);
            return this;
        }

        /**
         * @return {@code this}
         * @param authKey This parameter is required.
         */
        public Builder authKey(final java.lang.String authKey) {
            this.props.authKey(authKey);
            return this;
        }
        /**
         * @return {@code this}
         * @param authKey This parameter is required.
         */
        public Builder authKey(final com.aliyun.ros.cdk.core.IResolvable authKey) {
            this.props.authKey(authKey);
            return this;
        }

        /**
         * @return {@code this}
         * @param authSwitch This parameter is required.
         */
        public Builder authSwitch(final java.lang.String authSwitch) {
            this.props.authSwitch(authSwitch);
            return this;
        }
        /**
         * @return {@code this}
         * @param authSwitch This parameter is required.
         */
        public Builder authSwitch(final com.aliyun.ros.cdk.core.IResolvable authSwitch) {
            this.props.authSwitch(authSwitch);
            return this;
        }

        /**
         * @return {@code this}
         * @param callbackUrl This parameter is required.
         */
        public Builder callbackUrl(final java.lang.String callbackUrl) {
            this.props.callbackUrl(callbackUrl);
            return this;
        }
        /**
         * @return {@code this}
         * @param callbackUrl This parameter is required.
         */
        public Builder callbackUrl(final com.aliyun.ros.cdk.core.IResolvable callbackUrl) {
            this.props.callbackUrl(callbackUrl);
            return this;
        }

        /**
         * @return {@code this}
         * @param eventTypeList This parameter is required.
         */
        public Builder eventTypeList(final java.lang.String eventTypeList) {
            this.props.eventTypeList(eventTypeList);
            return this;
        }
        /**
         * @return {@code this}
         * @param eventTypeList This parameter is required.
         */
        public Builder eventTypeList(final com.aliyun.ros.cdk.core.IResolvable eventTypeList) {
            this.props.eventTypeList(eventTypeList);
            return this;
        }

        /**
         * @return {@code this}
         * @param mnsEndpoint This parameter is required.
         */
        public Builder mnsEndpoint(final java.lang.String mnsEndpoint) {
            this.props.mnsEndpoint(mnsEndpoint);
            return this;
        }
        /**
         * @return {@code this}
         * @param mnsEndpoint This parameter is required.
         */
        public Builder mnsEndpoint(final com.aliyun.ros.cdk.core.IResolvable mnsEndpoint) {
            this.props.mnsEndpoint(mnsEndpoint);
            return this;
        }

        /**
         * @return {@code this}
         * @param mnsQueueName This parameter is required.
         */
        public Builder mnsQueueName(final java.lang.String mnsQueueName) {
            this.props.mnsQueueName(mnsQueueName);
            return this;
        }
        /**
         * @return {@code this}
         * @param mnsQueueName This parameter is required.
         */
        public Builder mnsQueueName(final com.aliyun.ros.cdk.core.IResolvable mnsQueueName) {
            this.props.mnsQueueName(mnsQueueName);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.vod.RosMessageCallback}.
         */
        @Override
        public com.aliyun.ros.cdk.vod.RosMessageCallback build() {
            return new com.aliyun.ros.cdk.vod.RosMessageCallback(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
