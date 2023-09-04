package com.aliyun.ros.cdk.ecs.datasource;

/**
 * A ROS resource type:  <code>DATASOURCE::ECS::Commands</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-01T09:26:37.217Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.datasource.Commands")
public class Commands extends com.aliyun.ros.cdk.core.Resource {

    protected Commands(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Commands(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>DATASOURCE::ECS::Commands</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     * @param enableResourcePropertyConstraint
     */
    public Commands(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ecs.datasource.CommandsProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props, enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>DATASOURCE::ECS::Commands</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     */
    public Commands(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ecs.datasource.CommandsProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Create a new <code>DATASOURCE::ECS::Commands</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public Commands(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute CommandIds: The list of command IDs.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCommandIds() {
        return software.amazon.jsii.Kernel.get(this, "attrCommandIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Commands: The list of commands.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCommands() {
        return software.amazon.jsii.Kernel.get(this, "attrCommands", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ecs.datasource.Commands}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecs.datasource.Commands> {
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
        private com.aliyun.ros.cdk.ecs.datasource.CommandsProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property commandId: The ID of the command.
         * <p>
         * @return {@code this}
         * @param commandId Property commandId: The ID of the command. This parameter is required.
         */
        public Builder commandId(final java.lang.String commandId) {
            this.props().commandId(commandId);
            return this;
        }
        /**
         * Property commandId: The ID of the command.
         * <p>
         * @return {@code this}
         * @param commandId Property commandId: The ID of the command. This parameter is required.
         */
        public Builder commandId(final com.aliyun.ros.cdk.core.IResolvable commandId) {
            this.props().commandId(commandId);
            return this;
        }

        /**
         * Property commandName: The name of the command.
         * <p>
         * Partial command names are not supported.
         * <p>
         * @return {@code this}
         * @param commandName Property commandName: The name of the command. This parameter is required.
         */
        public Builder commandName(final java.lang.String commandName) {
            this.props().commandName(commandName);
            return this;
        }
        /**
         * Property commandName: The name of the command.
         * <p>
         * Partial command names are not supported.
         * <p>
         * @return {@code this}
         * @param commandName Property commandName: The name of the command. This parameter is required.
         */
        public Builder commandName(final com.aliyun.ros.cdk.core.IResolvable commandName) {
            this.props().commandName(commandName);
            return this;
        }

        /**
         * Property description: Command description.
         * <p>
         * @return {@code this}
         * @param description Property description: Command description. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props().description(description);
            return this;
        }
        /**
         * Property description: Command description.
         * <p>
         * @return {@code this}
         * @param description Property description: Command description. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props().description(description);
            return this;
        }

        /**
         * Property type: The command type.
         * <p>
         * Valid values:
         * RunBatScript: batch command, applicable to Windows instances
         * RunPowerShellScript: PowerShell command, applicable to Windows instances
         * RunShellScript: shell command, applicable to Linux instances
         * <p>
         * @return {@code this}
         * @param type Property type: The command type. This parameter is required.
         */
        public Builder type(final java.lang.String type) {
            this.props().type(type);
            return this;
        }
        /**
         * Property type: The command type.
         * <p>
         * Valid values:
         * RunBatScript: batch command, applicable to Windows instances
         * RunPowerShellScript: PowerShell command, applicable to Windows instances
         * RunShellScript: shell command, applicable to Linux instances
         * <p>
         * @return {@code this}
         * @param type Property type: The command type. This parameter is required.
         */
        public Builder type(final com.aliyun.ros.cdk.core.IResolvable type) {
            this.props().type(type);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ecs.datasource.Commands}.
         */
        @Override
        public com.aliyun.ros.cdk.ecs.datasource.Commands build() {
            return new com.aliyun.ros.cdk.ecs.datasource.Commands(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.ecs.datasource.CommandsProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.ecs.datasource.CommandsProps.Builder();
            }
            return this.props;
        }
    }
}
