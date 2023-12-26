package com.aliyun.ros.cdk.ecs;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ECS::Activation</code>, which is used to create an activation code.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-12-26T06:30:15.145Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.Activation")
public class Activation extends com.aliyun.ros.cdk.core.Resource {

    protected Activation(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Activation(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     * @param enableResourcePropertyConstraint
     */
    public Activation(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ecs.ActivationProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props, enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     */
    public Activation(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ecs.ActivationProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public Activation(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute ActivationCode: Activation code.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrActivationCode() {
        return software.amazon.jsii.Kernel.get(this, "attrActivationCode", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ActivationId: Activation code ID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrActivationId() {
        return software.amazon.jsii.Kernel.get(this, "attrActivationId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute DeregisteredCount: The number of instances that have been logged out.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDeregisteredCount() {
        return software.amazon.jsii.Kernel.get(this, "attrDeregisteredCount", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute RegisteredCount: The number of registered instances.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRegisteredCount() {
        return software.amazon.jsii.Kernel.get(this, "attrRegisteredCount", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ecs.Activation}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecs.Activation> {
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
        private com.aliyun.ros.cdk.ecs.ActivationProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property description: The description of the activation code.
         * <p>
         * It must be 1 to 100 characters in length.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the activation code. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props().description(description);
            return this;
        }
        /**
         * Property description: The description of the activation code.
         * <p>
         * It must be 1 to 100 characters in length.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the activation code. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props().description(description);
            return this;
        }

        /**
         * Property instanceCount: The maximum number of times that you can use the activation code to register managed instances.
         * <p>
         * Valid values: 1 to 1000.Default value: 10.
         * <p>
         * @return {@code this}
         * @param instanceCount Property instanceCount: The maximum number of times that you can use the activation code to register managed instances. This parameter is required.
         */
        public Builder instanceCount(final java.lang.Number instanceCount) {
            this.props().instanceCount(instanceCount);
            return this;
        }
        /**
         * Property instanceCount: The maximum number of times that you can use the activation code to register managed instances.
         * <p>
         * Valid values: 1 to 1000.Default value: 10.
         * <p>
         * @return {@code this}
         * @param instanceCount Property instanceCount: The maximum number of times that you can use the activation code to register managed instances. This parameter is required.
         */
        public Builder instanceCount(final com.aliyun.ros.cdk.core.IResolvable instanceCount) {
            this.props().instanceCount(instanceCount);
            return this;
        }

        /**
         * Property instanceName: The default instance name prefix.
         * <p>
         * The instance name prefix must be 2 to 50 characters in length. It must start with a letter and cannot start with http:// or https://. It can contain letters, digits, periods (.), underscores (_), hyphens (-), and colons (:). If you use the activation code that is created by calling this operation (CreateActivation) to register managed instances, the instances are assigned sequential names that are prefixed by the value of this parameter. You can also specify a new instance name to replace the assigned sequential name when you register a managed instance.If you specify InstanceName when you register a managed instance, an instance name in theformat of <InstanceName>-<Number> is generated. The number of digits in the <Number> value isdetermined by that in the InstanceCount value. Example: 001. If you do not specify InstanceName, the hostname (Hostname) is used as the instance name.
         * <p>
         * @return {@code this}
         * @param instanceName Property instanceName: The default instance name prefix. This parameter is required.
         */
        public Builder instanceName(final java.lang.String instanceName) {
            this.props().instanceName(instanceName);
            return this;
        }
        /**
         * Property instanceName: The default instance name prefix.
         * <p>
         * The instance name prefix must be 2 to 50 characters in length. It must start with a letter and cannot start with http:// or https://. It can contain letters, digits, periods (.), underscores (_), hyphens (-), and colons (:). If you use the activation code that is created by calling this operation (CreateActivation) to register managed instances, the instances are assigned sequential names that are prefixed by the value of this parameter. You can also specify a new instance name to replace the assigned sequential name when you register a managed instance.If you specify InstanceName when you register a managed instance, an instance name in theformat of <InstanceName>-<Number> is generated. The number of digits in the <Number> value isdetermined by that in the InstanceCount value. Example: 001. If you do not specify InstanceName, the hostname (Hostname) is used as the instance name.
         * <p>
         * @return {@code this}
         * @param instanceName Property instanceName: The default instance name prefix. This parameter is required.
         */
        public Builder instanceName(final com.aliyun.ros.cdk.core.IResolvable instanceName) {
            this.props().instanceName(instanceName);
            return this;
        }

        /**
         * Property ipAddressRange: The IP addresses of hosts that are allowed to use the activation code.
         * <p>
         * The value can be IPv4 addresses, IPv6 addresses, or CIDR blocks.
         * <p>
         * @return {@code this}
         * @param ipAddressRange Property ipAddressRange: The IP addresses of hosts that are allowed to use the activation code. This parameter is required.
         */
        public Builder ipAddressRange(final java.lang.String ipAddressRange) {
            this.props().ipAddressRange(ipAddressRange);
            return this;
        }
        /**
         * Property ipAddressRange: The IP addresses of hosts that are allowed to use the activation code.
         * <p>
         * The value can be IPv4 addresses, IPv6 addresses, or CIDR blocks.
         * <p>
         * @return {@code this}
         * @param ipAddressRange Property ipAddressRange: The IP addresses of hosts that are allowed to use the activation code. This parameter is required.
         */
        public Builder ipAddressRange(final com.aliyun.ros.cdk.core.IResolvable ipAddressRange) {
            this.props().ipAddressRange(ipAddressRange);
            return this;
        }

        /**
         * Property tags: Tags to attach to instance.
         * <p>
         * Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags to attach to instance. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.ecs.RosActivation.TagsProperty> tags) {
            this.props().tags(tags);
            return this;
        }

        /**
         * Property timeToLiveInHours: The validity period of the activation code.
         * <p>
         * The activation code can no longer be used to register instances after the period ends. Unit: hours. Valid values: 1 to 876576, which represents a range of time from 1 hour to 100 years.Default value: 4.
         * <p>
         * @return {@code this}
         * @param timeToLiveInHours Property timeToLiveInHours: The validity period of the activation code. This parameter is required.
         */
        public Builder timeToLiveInHours(final java.lang.Number timeToLiveInHours) {
            this.props().timeToLiveInHours(timeToLiveInHours);
            return this;
        }
        /**
         * Property timeToLiveInHours: The validity period of the activation code.
         * <p>
         * The activation code can no longer be used to register instances after the period ends. Unit: hours. Valid values: 1 to 876576, which represents a range of time from 1 hour to 100 years.Default value: 4.
         * <p>
         * @return {@code this}
         * @param timeToLiveInHours Property timeToLiveInHours: The validity period of the activation code. This parameter is required.
         */
        public Builder timeToLiveInHours(final com.aliyun.ros.cdk.core.IResolvable timeToLiveInHours) {
            this.props().timeToLiveInHours(timeToLiveInHours);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ecs.Activation}.
         */
        @Override
        public com.aliyun.ros.cdk.ecs.Activation build() {
            return new com.aliyun.ros.cdk.ecs.Activation(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.ecs.ActivationProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.ecs.ActivationProps.Builder();
            }
            return this.props;
        }
    }
}
