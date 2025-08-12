package com.aliyun.ros.cdk.config;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::Config::DeliveryChannel</code>, which is used to create or update a delivery channel.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:45.039Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.config.$Module.class, fqn = "@alicloud/ros-cdk-config.RosDeliveryChannel")
public class RosDeliveryChannel extends com.aliyun.ros.cdk.core.RosResource {

    protected RosDeliveryChannel(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosDeliveryChannel(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.config.RosDeliveryChannel.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosDeliveryChannel(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.config.RosDeliveryChannelProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDeliveryChannelId() {
        return software.amazon.jsii.Kernel.get(this, "attrDeliveryChannelId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDeliveryChannelAssumeRoleArn() {
        return software.amazon.jsii.Kernel.get(this, "deliveryChannelAssumeRoleArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDeliveryChannelAssumeRoleArn(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "deliveryChannelAssumeRoleArn", java.util.Objects.requireNonNull(value, "deliveryChannelAssumeRoleArn is required"));
    }

    /**
     */
    public void setDeliveryChannelAssumeRoleArn(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "deliveryChannelAssumeRoleArn", java.util.Objects.requireNonNull(value, "deliveryChannelAssumeRoleArn is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDeliveryChannelTargetArn() {
        return software.amazon.jsii.Kernel.get(this, "deliveryChannelTargetArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDeliveryChannelTargetArn(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "deliveryChannelTargetArn", java.util.Objects.requireNonNull(value, "deliveryChannelTargetArn is required"));
    }

    /**
     */
    public void setDeliveryChannelTargetArn(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "deliveryChannelTargetArn", java.util.Objects.requireNonNull(value, "deliveryChannelTargetArn is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDeliveryChannelType() {
        return software.amazon.jsii.Kernel.get(this, "deliveryChannelType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDeliveryChannelType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "deliveryChannelType", java.util.Objects.requireNonNull(value, "deliveryChannelType is required"));
    }

    /**
     */
    public void setDeliveryChannelType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "deliveryChannelType", java.util.Objects.requireNonNull(value, "deliveryChannelType is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDeliveryChannelCondition() {
        return software.amazon.jsii.Kernel.get(this, "deliveryChannelCondition", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDeliveryChannelCondition(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "deliveryChannelCondition", value);
    }

    /**
     */
    public void setDeliveryChannelCondition(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "deliveryChannelCondition", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDeliveryChannelName() {
        return software.amazon.jsii.Kernel.get(this, "deliveryChannelName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDeliveryChannelName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "deliveryChannelName", value);
    }

    /**
     */
    public void setDeliveryChannelName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "deliveryChannelName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.config.RosDeliveryChannel}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.config.RosDeliveryChannel> {
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
        private final com.aliyun.ros.cdk.config.RosDeliveryChannelProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.config.RosDeliveryChannelProps.Builder();
        }

        /**
         * @return {@code this}
         * @param deliveryChannelAssumeRoleArn This parameter is required.
         */
        public Builder deliveryChannelAssumeRoleArn(final java.lang.String deliveryChannelAssumeRoleArn) {
            this.props.deliveryChannelAssumeRoleArn(deliveryChannelAssumeRoleArn);
            return this;
        }
        /**
         * @return {@code this}
         * @param deliveryChannelAssumeRoleArn This parameter is required.
         */
        public Builder deliveryChannelAssumeRoleArn(final com.aliyun.ros.cdk.core.IResolvable deliveryChannelAssumeRoleArn) {
            this.props.deliveryChannelAssumeRoleArn(deliveryChannelAssumeRoleArn);
            return this;
        }

        /**
         * @return {@code this}
         * @param deliveryChannelTargetArn This parameter is required.
         */
        public Builder deliveryChannelTargetArn(final java.lang.String deliveryChannelTargetArn) {
            this.props.deliveryChannelTargetArn(deliveryChannelTargetArn);
            return this;
        }
        /**
         * @return {@code this}
         * @param deliveryChannelTargetArn This parameter is required.
         */
        public Builder deliveryChannelTargetArn(final com.aliyun.ros.cdk.core.IResolvable deliveryChannelTargetArn) {
            this.props.deliveryChannelTargetArn(deliveryChannelTargetArn);
            return this;
        }

        /**
         * @return {@code this}
         * @param deliveryChannelType This parameter is required.
         */
        public Builder deliveryChannelType(final java.lang.String deliveryChannelType) {
            this.props.deliveryChannelType(deliveryChannelType);
            return this;
        }
        /**
         * @return {@code this}
         * @param deliveryChannelType This parameter is required.
         */
        public Builder deliveryChannelType(final com.aliyun.ros.cdk.core.IResolvable deliveryChannelType) {
            this.props.deliveryChannelType(deliveryChannelType);
            return this;
        }

        /**
         * @return {@code this}
         * @param deliveryChannelCondition This parameter is required.
         */
        public Builder deliveryChannelCondition(final java.lang.String deliveryChannelCondition) {
            this.props.deliveryChannelCondition(deliveryChannelCondition);
            return this;
        }
        /**
         * @return {@code this}
         * @param deliveryChannelCondition This parameter is required.
         */
        public Builder deliveryChannelCondition(final com.aliyun.ros.cdk.core.IResolvable deliveryChannelCondition) {
            this.props.deliveryChannelCondition(deliveryChannelCondition);
            return this;
        }

        /**
         * @return {@code this}
         * @param deliveryChannelName This parameter is required.
         */
        public Builder deliveryChannelName(final java.lang.String deliveryChannelName) {
            this.props.deliveryChannelName(deliveryChannelName);
            return this;
        }
        /**
         * @return {@code this}
         * @param deliveryChannelName This parameter is required.
         */
        public Builder deliveryChannelName(final com.aliyun.ros.cdk.core.IResolvable deliveryChannelName) {
            this.props.deliveryChannelName(deliveryChannelName);
            return this;
        }

        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.config.RosDeliveryChannel}.
         */
        @Override
        public com.aliyun.ros.cdk.config.RosDeliveryChannel build() {
            return new com.aliyun.ros.cdk.config.RosDeliveryChannel(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
