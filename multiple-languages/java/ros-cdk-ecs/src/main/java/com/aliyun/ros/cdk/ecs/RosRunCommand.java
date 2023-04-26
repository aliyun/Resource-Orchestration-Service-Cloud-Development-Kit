package com.aliyun.ros.cdk.ecs;

/**
 * A ROS template type:  `ALIYUN::ECS::RunCommand`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.80.0 (build bce6a1d)", date = "2023-04-26T03:02:19.414Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RosRunCommand")
public class RosRunCommand extends com.aliyun.ros.cdk.core.RosResource {

    protected RosRunCommand(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosRunCommand(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.ecs.RosRunCommand.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::ECS::RunCommand`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosRunCommand(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.RosRunCommandProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCommandId() {
        return software.amazon.jsii.Kernel.get(this, "attrCommandId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInvokeId() {
        return software.amazon.jsii.Kernel.get(this, "attrInvokeId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInvokeInstances() {
        return software.amazon.jsii.Kernel.get(this, "attrInvokeInstances", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInvokeResults() {
        return software.amazon.jsii.Kernel.get(this, "attrInvokeResults", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getCommandContent() {
        return software.amazon.jsii.Kernel.get(this, "commandContent", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCommandContent(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "commandContent", java.util.Objects.requireNonNull(value, "commandContent is required"));
    }

    /**
     */
    public void setCommandContent(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "commandContent", java.util.Objects.requireNonNull(value, "commandContent is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getInstanceIds() {
        return software.amazon.jsii.Kernel.get(this, "instanceIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInstanceIds(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "instanceIds", java.util.Objects.requireNonNull(value, "instanceIds is required"));
    }

    /**
     */
    public void setInstanceIds(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof java.lang.String)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "instanceIds", java.util.Objects.requireNonNull(value, "instanceIds is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getType() {
        return software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "type", java.util.Objects.requireNonNull(value, "type is required"));
    }

    /**
     */
    public void setType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "type", java.util.Objects.requireNonNull(value, "type is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getContentEncoding() {
        return software.amazon.jsii.Kernel.get(this, "contentEncoding", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setContentEncoding(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "contentEncoding", value);
    }

    /**
     */
    public void setContentEncoding(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "contentEncoding", value);
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
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEnableParameter() {
        return software.amazon.jsii.Kernel.get(this, "enableParameter", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEnableParameter(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableParameter", value);
    }

    /**
     */
    public void setEnableParameter(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "enableParameter", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getFrequency() {
        return software.amazon.jsii.Kernel.get(this, "frequency", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFrequency(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "frequency", value);
    }

    /**
     */
    public void setFrequency(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "frequency", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getKeepCommand() {
        return software.amazon.jsii.Kernel.get(this, "keepCommand", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setKeepCommand(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "keepCommand", value);
    }

    /**
     */
    public void setKeepCommand(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "keepCommand", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getName() {
        return software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "name", value);
    }

    /**
     */
    public void setName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "name", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getParameters() {
        return software.amazon.jsii.Kernel.get(this, "parameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setParameters(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "parameters", value);
    }

    /**
     */
    public void setParameters(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            if (!(value.keySet().toArray()[0] instanceof String)) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("value").append(".keySet()")
                        .append(" to contain class String; received ")
                        .append(value.keySet().toArray()[0].getClass()).toString());
            }
            for (final java.util.Map.Entry<String, java.lang.Object> __item_ac66f0: value.entrySet()) {
                final java.lang.Object __val_ac66f0 = __item_ac66f0.getValue();
            }
        }
        software.amazon.jsii.Kernel.set(this, "parameters", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSync() {
        return software.amazon.jsii.Kernel.get(this, "sync", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSync(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "sync", value);
    }

    /**
     */
    public void setSync(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sync", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTimed() {
        return software.amazon.jsii.Kernel.get(this, "timed", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTimed(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "timed", value);
    }

    /**
     */
    public void setTimed(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "timed", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTimeout() {
        return software.amazon.jsii.Kernel.get(this, "timeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTimeout(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "timeout", value);
    }

    /**
     */
    public void setTimeout(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "timeout", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getWorkingDir() {
        return software.amazon.jsii.Kernel.get(this, "workingDir", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setWorkingDir(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "workingDir", value);
    }

    /**
     */
    public void setWorkingDir(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "workingDir", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ecs.RosRunCommand}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecs.RosRunCommand> {
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
        private final com.aliyun.ros.cdk.ecs.RosRunCommandProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ecs.RosRunCommandProps.Builder();
        }

        /**
         * @return {@code this}
         * @param commandContent This parameter is required.
         */
        public Builder commandContent(final java.lang.String commandContent) {
            this.props.commandContent(commandContent);
            return this;
        }
        /**
         * @return {@code this}
         * @param commandContent This parameter is required.
         */
        public Builder commandContent(final com.aliyun.ros.cdk.core.IResolvable commandContent) {
            this.props.commandContent(commandContent);
            return this;
        }

        /**
         * @return {@code this}
         * @param instanceIds This parameter is required.
         */
        public Builder instanceIds(final com.aliyun.ros.cdk.core.IResolvable instanceIds) {
            this.props.instanceIds(instanceIds);
            return this;
        }
        /**
         * @return {@code this}
         * @param instanceIds This parameter is required.
         */
        public Builder instanceIds(final java.util.List<? extends java.lang.Object> instanceIds) {
            this.props.instanceIds(instanceIds);
            return this;
        }

        /**
         * @return {@code this}
         * @param type This parameter is required.
         */
        public Builder type(final java.lang.String type) {
            this.props.type(type);
            return this;
        }
        /**
         * @return {@code this}
         * @param type This parameter is required.
         */
        public Builder type(final com.aliyun.ros.cdk.core.IResolvable type) {
            this.props.type(type);
            return this;
        }

        /**
         * @return {@code this}
         * @param contentEncoding This parameter is required.
         */
        public Builder contentEncoding(final java.lang.String contentEncoding) {
            this.props.contentEncoding(contentEncoding);
            return this;
        }
        /**
         * @return {@code this}
         * @param contentEncoding This parameter is required.
         */
        public Builder contentEncoding(final com.aliyun.ros.cdk.core.IResolvable contentEncoding) {
            this.props.contentEncoding(contentEncoding);
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
         * @return {@code this}
         * @param enableParameter This parameter is required.
         */
        public Builder enableParameter(final java.lang.Boolean enableParameter) {
            this.props.enableParameter(enableParameter);
            return this;
        }
        /**
         * @return {@code this}
         * @param enableParameter This parameter is required.
         */
        public Builder enableParameter(final com.aliyun.ros.cdk.core.IResolvable enableParameter) {
            this.props.enableParameter(enableParameter);
            return this;
        }

        /**
         * @return {@code this}
         * @param frequency This parameter is required.
         */
        public Builder frequency(final java.lang.String frequency) {
            this.props.frequency(frequency);
            return this;
        }
        /**
         * @return {@code this}
         * @param frequency This parameter is required.
         */
        public Builder frequency(final com.aliyun.ros.cdk.core.IResolvable frequency) {
            this.props.frequency(frequency);
            return this;
        }

        /**
         * @return {@code this}
         * @param keepCommand This parameter is required.
         */
        public Builder keepCommand(final java.lang.Boolean keepCommand) {
            this.props.keepCommand(keepCommand);
            return this;
        }
        /**
         * @return {@code this}
         * @param keepCommand This parameter is required.
         */
        public Builder keepCommand(final com.aliyun.ros.cdk.core.IResolvable keepCommand) {
            this.props.keepCommand(keepCommand);
            return this;
        }

        /**
         * @return {@code this}
         * @param name This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * @return {@code this}
         * @param name This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * @return {@code this}
         * @param parameters This parameter is required.
         */
        public Builder parameters(final com.aliyun.ros.cdk.core.IResolvable parameters) {
            this.props.parameters(parameters);
            return this;
        }
        /**
         * @return {@code this}
         * @param parameters This parameter is required.
         */
        public Builder parameters(final java.util.Map<java.lang.String, ? extends java.lang.Object> parameters) {
            this.props.parameters(parameters);
            return this;
        }

        /**
         * @return {@code this}
         * @param sync This parameter is required.
         */
        public Builder sync(final java.lang.Boolean sync) {
            this.props.sync(sync);
            return this;
        }
        /**
         * @return {@code this}
         * @param sync This parameter is required.
         */
        public Builder sync(final com.aliyun.ros.cdk.core.IResolvable sync) {
            this.props.sync(sync);
            return this;
        }

        /**
         * @return {@code this}
         * @param timed This parameter is required.
         */
        public Builder timed(final java.lang.Boolean timed) {
            this.props.timed(timed);
            return this;
        }
        /**
         * @return {@code this}
         * @param timed This parameter is required.
         */
        public Builder timed(final com.aliyun.ros.cdk.core.IResolvable timed) {
            this.props.timed(timed);
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
         * @param workingDir This parameter is required.
         */
        public Builder workingDir(final java.lang.String workingDir) {
            this.props.workingDir(workingDir);
            return this;
        }
        /**
         * @return {@code this}
         * @param workingDir This parameter is required.
         */
        public Builder workingDir(final com.aliyun.ros.cdk.core.IResolvable workingDir) {
            this.props.workingDir(workingDir);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.ecs.RosRunCommand}.
         */
        @Override
        public com.aliyun.ros.cdk.ecs.RosRunCommand build() {
            return new com.aliyun.ros.cdk.ecs.RosRunCommand(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
