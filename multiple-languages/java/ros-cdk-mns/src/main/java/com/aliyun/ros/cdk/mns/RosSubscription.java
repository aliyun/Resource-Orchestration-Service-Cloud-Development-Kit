package com.aliyun.ros.cdk.mns;

/**
 * A ROS template type:  `ALIYUN::MNS::Subscription`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.53.0 (build c071d26)", date = "2022-02-11T01:44:08.138Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mns.$Module.class, fqn = "@alicloud/ros-cdk-mns.RosSubscription")
public class RosSubscription extends com.aliyun.ros.cdk.core.RosResource {

    protected RosSubscription(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosSubscription(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.mns.RosSubscription.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::MNS::Subscription`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosSubscription(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mns.RosSubscriptionProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSubscriptionName() {
        return software.amazon.jsii.Kernel.get(this, "attrSubscriptionName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSubscriptionUrl() {
        return software.amazon.jsii.Kernel.get(this, "attrSubscriptionUrl", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTopicName() {
        return software.amazon.jsii.Kernel.get(this, "attrTopicName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getEndpoint() {
        return software.amazon.jsii.Kernel.get(this, "endpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEndpoint(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "endpoint", java.util.Objects.requireNonNull(value, "endpoint is required"));
    }

    /**
     */
    public void setEndpoint(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "endpoint", java.util.Objects.requireNonNull(value, "endpoint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getSubscriptionName() {
        return software.amazon.jsii.Kernel.get(this, "subscriptionName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSubscriptionName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "subscriptionName", java.util.Objects.requireNonNull(value, "subscriptionName is required"));
    }

    /**
     */
    public void setSubscriptionName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "subscriptionName", java.util.Objects.requireNonNull(value, "subscriptionName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getTopicName() {
        return software.amazon.jsii.Kernel.get(this, "topicName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTopicName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "topicName", java.util.Objects.requireNonNull(value, "topicName is required"));
    }

    /**
     */
    public void setTopicName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "topicName", java.util.Objects.requireNonNull(value, "topicName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getFilterTag() {
        return software.amazon.jsii.Kernel.get(this, "filterTag", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFilterTag(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "filterTag", value);
    }

    /**
     */
    public void setFilterTag(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "filterTag", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getNotifyContentFormat() {
        return software.amazon.jsii.Kernel.get(this, "notifyContentFormat", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNotifyContentFormat(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "notifyContentFormat", value);
    }

    /**
     */
    public void setNotifyContentFormat(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "notifyContentFormat", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getNotifyStrategy() {
        return software.amazon.jsii.Kernel.get(this, "notifyStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNotifyStrategy(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "notifyStrategy", value);
    }

    /**
     */
    public void setNotifyStrategy(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "notifyStrategy", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.mns.RosSubscription}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.mns.RosSubscription> {
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
        private final com.aliyun.ros.cdk.mns.RosSubscriptionProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.mns.RosSubscriptionProps.Builder();
        }

        /**
         * @return {@code this}
         * @param endpoint This parameter is required.
         */
        public Builder endpoint(final java.lang.String endpoint) {
            this.props.endpoint(endpoint);
            return this;
        }
        /**
         * @return {@code this}
         * @param endpoint This parameter is required.
         */
        public Builder endpoint(final com.aliyun.ros.cdk.core.IResolvable endpoint) {
            this.props.endpoint(endpoint);
            return this;
        }

        /**
         * @return {@code this}
         * @param subscriptionName This parameter is required.
         */
        public Builder subscriptionName(final java.lang.String subscriptionName) {
            this.props.subscriptionName(subscriptionName);
            return this;
        }
        /**
         * @return {@code this}
         * @param subscriptionName This parameter is required.
         */
        public Builder subscriptionName(final com.aliyun.ros.cdk.core.IResolvable subscriptionName) {
            this.props.subscriptionName(subscriptionName);
            return this;
        }

        /**
         * @return {@code this}
         * @param topicName This parameter is required.
         */
        public Builder topicName(final java.lang.String topicName) {
            this.props.topicName(topicName);
            return this;
        }
        /**
         * @return {@code this}
         * @param topicName This parameter is required.
         */
        public Builder topicName(final com.aliyun.ros.cdk.core.IResolvable topicName) {
            this.props.topicName(topicName);
            return this;
        }

        /**
         * @return {@code this}
         * @param filterTag This parameter is required.
         */
        public Builder filterTag(final java.lang.String filterTag) {
            this.props.filterTag(filterTag);
            return this;
        }
        /**
         * @return {@code this}
         * @param filterTag This parameter is required.
         */
        public Builder filterTag(final com.aliyun.ros.cdk.core.IResolvable filterTag) {
            this.props.filterTag(filterTag);
            return this;
        }

        /**
         * @return {@code this}
         * @param notifyContentFormat This parameter is required.
         */
        public Builder notifyContentFormat(final java.lang.String notifyContentFormat) {
            this.props.notifyContentFormat(notifyContentFormat);
            return this;
        }
        /**
         * @return {@code this}
         * @param notifyContentFormat This parameter is required.
         */
        public Builder notifyContentFormat(final com.aliyun.ros.cdk.core.IResolvable notifyContentFormat) {
            this.props.notifyContentFormat(notifyContentFormat);
            return this;
        }

        /**
         * @return {@code this}
         * @param notifyStrategy This parameter is required.
         */
        public Builder notifyStrategy(final java.lang.String notifyStrategy) {
            this.props.notifyStrategy(notifyStrategy);
            return this;
        }
        /**
         * @return {@code this}
         * @param notifyStrategy This parameter is required.
         */
        public Builder notifyStrategy(final com.aliyun.ros.cdk.core.IResolvable notifyStrategy) {
            this.props.notifyStrategy(notifyStrategy);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.mns.RosSubscription}.
         */
        @Override
        public com.aliyun.ros.cdk.mns.RosSubscription build() {
            return new com.aliyun.ros.cdk.mns.RosSubscription(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
