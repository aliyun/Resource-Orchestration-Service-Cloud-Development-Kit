package com.aliyun.ros.cdk.dts;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::DTS::ConsumerGroup</code>, which is used to create a consumer group for a change tracking instance.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-22T08:56:19.551Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dts.$Module.class, fqn = "@alicloud/ros-cdk-dts.RosConsumerGroup")
public class RosConsumerGroup extends com.aliyun.ros.cdk.core.RosResource {

    protected RosConsumerGroup(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosConsumerGroup(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.dts.RosConsumerGroup.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosConsumerGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dts.RosConsumerGroupProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrConsumerGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrConsumerGroupId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrConsumerGroupName() {
        return software.amazon.jsii.Kernel.get(this, "attrConsumerGroupName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSubscriptionInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrSubscriptionInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getConsumerGroupName() {
        return software.amazon.jsii.Kernel.get(this, "consumerGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setConsumerGroupName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "consumerGroupName", java.util.Objects.requireNonNull(value, "consumerGroupName is required"));
    }

    /**
     */
    public void setConsumerGroupName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "consumerGroupName", java.util.Objects.requireNonNull(value, "consumerGroupName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getConsumerGroupPassword() {
        return software.amazon.jsii.Kernel.get(this, "consumerGroupPassword", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setConsumerGroupPassword(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "consumerGroupPassword", java.util.Objects.requireNonNull(value, "consumerGroupPassword is required"));
    }

    /**
     */
    public void setConsumerGroupPassword(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "consumerGroupPassword", java.util.Objects.requireNonNull(value, "consumerGroupPassword is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getConsumerGroupUserName() {
        return software.amazon.jsii.Kernel.get(this, "consumerGroupUserName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setConsumerGroupUserName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "consumerGroupUserName", java.util.Objects.requireNonNull(value, "consumerGroupUserName is required"));
    }

    /**
     */
    public void setConsumerGroupUserName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "consumerGroupUserName", java.util.Objects.requireNonNull(value, "consumerGroupUserName is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getSubscriptionInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "subscriptionInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSubscriptionInstanceId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "subscriptionInstanceId", java.util.Objects.requireNonNull(value, "subscriptionInstanceId is required"));
    }

    /**
     */
    public void setSubscriptionInstanceId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "subscriptionInstanceId", java.util.Objects.requireNonNull(value, "subscriptionInstanceId is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.dts.RosConsumerGroup}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.dts.RosConsumerGroup> {
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
        private final com.aliyun.ros.cdk.dts.RosConsumerGroupProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.dts.RosConsumerGroupProps.Builder();
        }

        /**
         * @return {@code this}
         * @param consumerGroupName This parameter is required.
         */
        public Builder consumerGroupName(final java.lang.String consumerGroupName) {
            this.props.consumerGroupName(consumerGroupName);
            return this;
        }
        /**
         * @return {@code this}
         * @param consumerGroupName This parameter is required.
         */
        public Builder consumerGroupName(final com.aliyun.ros.cdk.core.IResolvable consumerGroupName) {
            this.props.consumerGroupName(consumerGroupName);
            return this;
        }

        /**
         * @return {@code this}
         * @param consumerGroupPassword This parameter is required.
         */
        public Builder consumerGroupPassword(final java.lang.String consumerGroupPassword) {
            this.props.consumerGroupPassword(consumerGroupPassword);
            return this;
        }
        /**
         * @return {@code this}
         * @param consumerGroupPassword This parameter is required.
         */
        public Builder consumerGroupPassword(final com.aliyun.ros.cdk.core.IResolvable consumerGroupPassword) {
            this.props.consumerGroupPassword(consumerGroupPassword);
            return this;
        }

        /**
         * @return {@code this}
         * @param consumerGroupUserName This parameter is required.
         */
        public Builder consumerGroupUserName(final java.lang.String consumerGroupUserName) {
            this.props.consumerGroupUserName(consumerGroupUserName);
            return this;
        }
        /**
         * @return {@code this}
         * @param consumerGroupUserName This parameter is required.
         */
        public Builder consumerGroupUserName(final com.aliyun.ros.cdk.core.IResolvable consumerGroupUserName) {
            this.props.consumerGroupUserName(consumerGroupUserName);
            return this;
        }

        /**
         * @return {@code this}
         * @param subscriptionInstanceId This parameter is required.
         */
        public Builder subscriptionInstanceId(final java.lang.String subscriptionInstanceId) {
            this.props.subscriptionInstanceId(subscriptionInstanceId);
            return this;
        }
        /**
         * @return {@code this}
         * @param subscriptionInstanceId This parameter is required.
         */
        public Builder subscriptionInstanceId(final com.aliyun.ros.cdk.core.IResolvable subscriptionInstanceId) {
            this.props.subscriptionInstanceId(subscriptionInstanceId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.dts.RosConsumerGroup}.
         */
        @Override
        public com.aliyun.ros.cdk.dts.RosConsumerGroup build() {
            return new com.aliyun.ros.cdk.dts.RosConsumerGroup(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
