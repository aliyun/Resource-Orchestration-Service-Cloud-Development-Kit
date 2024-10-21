package com.aliyun.ros.cdk.dts;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::DTS::ConsumerGroup</code>, which is used to create a consumer group for a change tracking instance.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-10-18T08:56:28.577Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dts.$Module.class, fqn = "@alicloud/ros-cdk-dts.ConsumerGroup")
public class ConsumerGroup extends com.aliyun.ros.cdk.core.Resource {

    protected ConsumerGroup(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ConsumerGroup(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public ConsumerGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dts.ConsumerGroupProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public ConsumerGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dts.ConsumerGroupProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ConsumerGroupID: Consumer group ID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrConsumerGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrConsumerGroupId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ConsumerGroupName: Consumer group name.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrConsumerGroupName() {
        return software.amazon.jsii.Kernel.get(this, "attrConsumerGroupName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute SubscriptionInstanceId: Subscription instance ID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSubscriptionInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrSubscriptionInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dts.ConsumerGroupProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.dts.ConsumerGroupProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dts.ConsumerGroupProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.dts.ConsumerGroup}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.dts.ConsumerGroup> {
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
        private final com.aliyun.ros.cdk.dts.ConsumerGroupProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.dts.ConsumerGroupProps.Builder();
        }

        /**
         * Property consumerGroupName: Consumer group name.
         * <p>
         * @return {@code this}
         * @param consumerGroupName Property consumerGroupName: Consumer group name. This parameter is required.
         */
        public Builder consumerGroupName(final java.lang.String consumerGroupName) {
            this.props.consumerGroupName(consumerGroupName);
            return this;
        }
        /**
         * Property consumerGroupName: Consumer group name.
         * <p>
         * @return {@code this}
         * @param consumerGroupName Property consumerGroupName: Consumer group name. This parameter is required.
         */
        public Builder consumerGroupName(final com.aliyun.ros.cdk.core.IResolvable consumerGroupName) {
            this.props.consumerGroupName(consumerGroupName);
            return this;
        }

        /**
         * Property consumerGroupPassword: Password of consumer group.
         * <p>
         * @return {@code this}
         * @param consumerGroupPassword Property consumerGroupPassword: Password of consumer group. This parameter is required.
         */
        public Builder consumerGroupPassword(final java.lang.String consumerGroupPassword) {
            this.props.consumerGroupPassword(consumerGroupPassword);
            return this;
        }
        /**
         * Property consumerGroupPassword: Password of consumer group.
         * <p>
         * @return {@code this}
         * @param consumerGroupPassword Property consumerGroupPassword: Password of consumer group. This parameter is required.
         */
        public Builder consumerGroupPassword(final com.aliyun.ros.cdk.core.IResolvable consumerGroupPassword) {
            this.props.consumerGroupPassword(consumerGroupPassword);
            return this;
        }

        /**
         * Property consumerGroupUserName: User name of consumer group.
         * <p>
         * @return {@code this}
         * @param consumerGroupUserName Property consumerGroupUserName: User name of consumer group. This parameter is required.
         */
        public Builder consumerGroupUserName(final java.lang.String consumerGroupUserName) {
            this.props.consumerGroupUserName(consumerGroupUserName);
            return this;
        }
        /**
         * Property consumerGroupUserName: User name of consumer group.
         * <p>
         * @return {@code this}
         * @param consumerGroupUserName Property consumerGroupUserName: User name of consumer group. This parameter is required.
         */
        public Builder consumerGroupUserName(final com.aliyun.ros.cdk.core.IResolvable consumerGroupUserName) {
            this.props.consumerGroupUserName(consumerGroupUserName);
            return this;
        }

        /**
         * Property subscriptionInstanceId: Subscription instance ID.
         * <p>
         * @return {@code this}
         * @param subscriptionInstanceId Property subscriptionInstanceId: Subscription instance ID. This parameter is required.
         */
        public Builder subscriptionInstanceId(final java.lang.String subscriptionInstanceId) {
            this.props.subscriptionInstanceId(subscriptionInstanceId);
            return this;
        }
        /**
         * Property subscriptionInstanceId: Subscription instance ID.
         * <p>
         * @return {@code this}
         * @param subscriptionInstanceId Property subscriptionInstanceId: Subscription instance ID. This parameter is required.
         */
        public Builder subscriptionInstanceId(final com.aliyun.ros.cdk.core.IResolvable subscriptionInstanceId) {
            this.props.subscriptionInstanceId(subscriptionInstanceId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.dts.ConsumerGroup}.
         */
        @Override
        public com.aliyun.ros.cdk.dts.ConsumerGroup build() {
            return new com.aliyun.ros.cdk.dts.ConsumerGroup(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
