package com.aliyun.ros.cdk.ecs;

/**
 * A ROS resource type:  <code>ALIYUN::ECS::Invocation</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-07-18T08:28:01.268Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.Invocation")
public class Invocation extends com.aliyun.ros.cdk.core.Resource {

    protected Invocation(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Invocation(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>ALIYUN::ECS::Invocation</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public Invocation(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.InvocationProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>ALIYUN::ECS::Invocation</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Invocation(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.InvocationProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute InvokeId: The id of command execution.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInvokeId() {
        return software.amazon.jsii.Kernel.get(this, "attrInvokeId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute InvokeInstances: The InvokeInstances of command.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInvokeInstances() {
        return software.amazon.jsii.Kernel.get(this, "attrInvokeInstances", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute InvokeResults: The results of invoke command.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInvokeResults() {
        return software.amazon.jsii.Kernel.get(this, "attrInvokeResults", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ecs.Invocation}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecs.Invocation> {
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
        private final com.aliyun.ros.cdk.ecs.InvocationProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ecs.InvocationProps.Builder();
        }

        /**
         * Property instanceIds: The instance id list.
         * <p>
         * Instances status must be running.
         * <p>
         * @return {@code this}
         * @param instanceIds Property instanceIds: The instance id list. This parameter is required.
         */
        public Builder instanceIds(final java.util.List<? extends java.lang.Object> instanceIds) {
            this.props.instanceIds(instanceIds);
            return this;
        }
        /**
         * Property instanceIds: The instance id list.
         * <p>
         * Instances status must be running.
         * <p>
         * @return {@code this}
         * @param instanceIds Property instanceIds: The instance id list. This parameter is required.
         */
        public Builder instanceIds(final com.aliyun.ros.cdk.core.IResolvable instanceIds) {
            this.props.instanceIds(instanceIds);
            return this;
        }

        /**
         * Property commandId: The id of command.
         * <p>
         * @return {@code this}
         * @param commandId Property commandId: The id of command. This parameter is required.
         */
        public Builder commandId(final java.lang.String commandId) {
            this.props.commandId(commandId);
            return this;
        }
        /**
         * Property commandId: The id of command.
         * <p>
         * @return {@code this}
         * @param commandId Property commandId: The id of command. This parameter is required.
         */
        public Builder commandId(final com.aliyun.ros.cdk.core.IResolvable commandId) {
            this.props.commandId(commandId);
            return this;
        }

        /**
         * Property commandName: The name of command.
         * <p>
         * Only system commands whose provide is AlibabaCloud are supported
         * <p>
         * @return {@code this}
         * @param commandName Property commandName: The name of command. This parameter is required.
         */
        public Builder commandName(final java.lang.String commandName) {
            this.props.commandName(commandName);
            return this;
        }
        /**
         * Property commandName: The name of command.
         * <p>
         * Only system commands whose provide is AlibabaCloud are supported
         * <p>
         * @return {@code this}
         * @param commandName Property commandName: The name of command. This parameter is required.
         */
        public Builder commandName(final com.aliyun.ros.cdk.core.IResolvable commandName) {
            this.props.commandName(commandName);
            return this;
        }

        /**
         * Property frequency: The frequency of timing execution (the shortest frequency is performed every 1 minute).
         * <p>
         * It iss mandatory when Timing is True.The value rule follows the rules of the cron expression.
         * <p>
         * @return {@code this}
         * @param frequency Property frequency: The frequency of timing execution (the shortest frequency is performed every 1 minute). This parameter is required.
         */
        public Builder frequency(final java.lang.String frequency) {
            this.props.frequency(frequency);
            return this;
        }
        /**
         * Property frequency: The frequency of timing execution (the shortest frequency is performed every 1 minute).
         * <p>
         * It iss mandatory when Timing is True.The value rule follows the rules of the cron expression.
         * <p>
         * @return {@code this}
         * @param frequency Property frequency: The frequency of timing execution (the shortest frequency is performed every 1 minute). This parameter is required.
         */
        public Builder frequency(final com.aliyun.ros.cdk.core.IResolvable frequency) {
            this.props.frequency(frequency);
            return this;
        }

        /**
         * Property parameters: The key-value pairs of custom parameters passed in when the script contains custom parameters.
         * <p>
         * Number of custom parameters: 0 to 10.
         * The key cannot be an empty string. It can be up to 64 characters in length.
         * The value can be an empty string.
         * After the custom parameters and the original script content are Base64 encoded, the total size cannot exceed 16 KB.
         * The set of custom parameter names must be a subset of the parameter set that is defined when you created the script. You can use an empty string to represent the parameters that are not passed in.
         * Default value: null, indicating that this parameter is canceled and customer parameters are disabled.
         * <p>
         * @return {@code this}
         * @param parameters Property parameters: The key-value pairs of custom parameters passed in when the script contains custom parameters. This parameter is required.
         */
        public Builder parameters(final com.aliyun.ros.cdk.core.IResolvable parameters) {
            this.props.parameters(parameters);
            return this;
        }
        /**
         * Property parameters: The key-value pairs of custom parameters passed in when the script contains custom parameters.
         * <p>
         * Number of custom parameters: 0 to 10.
         * The key cannot be an empty string. It can be up to 64 characters in length.
         * The value can be an empty string.
         * After the custom parameters and the original script content are Base64 encoded, the total size cannot exceed 16 KB.
         * The set of custom parameter names must be a subset of the parameter set that is defined when you created the script. You can use an empty string to represent the parameters that are not passed in.
         * Default value: null, indicating that this parameter is canceled and customer parameters are disabled.
         * <p>
         * @return {@code this}
         * @param parameters Property parameters: The key-value pairs of custom parameters passed in when the script contains custom parameters. This parameter is required.
         */
        public Builder parameters(final java.util.Map<java.lang.String, ? extends java.lang.Object> parameters) {
            this.props.parameters(parameters);
            return this;
        }

        /**
         * Property sync: Whether to invoke synchronously.
         * <p>
         * @return {@code this}
         * @param sync Property sync: Whether to invoke synchronously. This parameter is required.
         */
        public Builder sync(final java.lang.Boolean sync) {
            this.props.sync(sync);
            return this;
        }
        /**
         * Property sync: Whether to invoke synchronously.
         * <p>
         * @return {@code this}
         * @param sync Property sync: Whether to invoke synchronously. This parameter is required.
         */
        public Builder sync(final com.aliyun.ros.cdk.core.IResolvable sync) {
            this.props.sync(sync);
            return this;
        }

        /**
         * Property timed: Whether it is timed execution.
         * <p>
         * Default is False.
         * <p>
         * @return {@code this}
         * @param timed Property timed: Whether it is timed execution. This parameter is required.
         */
        public Builder timed(final java.lang.Boolean timed) {
            this.props.timed(timed);
            return this;
        }
        /**
         * Property timed: Whether it is timed execution.
         * <p>
         * Default is False.
         * <p>
         * @return {@code this}
         * @param timed Property timed: Whether it is timed execution. This parameter is required.
         */
        public Builder timed(final com.aliyun.ros.cdk.core.IResolvable timed) {
            this.props.timed(timed);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ecs.Invocation}.
         */
        @Override
        public com.aliyun.ros.cdk.ecs.Invocation build() {
            return new com.aliyun.ros.cdk.ecs.Invocation(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
