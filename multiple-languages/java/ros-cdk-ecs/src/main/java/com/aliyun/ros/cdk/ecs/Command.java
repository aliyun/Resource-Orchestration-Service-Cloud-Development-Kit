package com.aliyun.ros.cdk.ecs;

/**
 * A ROS resource type:  `ALIYUN::ECS::Command`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.62.0 (build 293ac17)", date = "2022-07-21T02:24:24.667Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.Command")
public class Command extends com.aliyun.ros.cdk.core.Resource {

    protected Command(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Command(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::ECS::Command`.
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
    public Command(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.CommandProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::ECS::Command`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Command(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.CommandProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute CommandId: The id of command created.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCommandId() {
        return software.amazon.jsii.Kernel.get(this, "attrCommandId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ecs.Command}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecs.Command> {
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
        private final com.aliyun.ros.cdk.ecs.CommandProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ecs.CommandProps.Builder();
        }

        /**
         * Property type: The type of command.
         * <p>
         * @return {@code this}
         * @param type Property type: The type of command. This parameter is required.
         */
        public Builder type(final java.lang.String type) {
            this.props.type(type);
            return this;
        }
        /**
         * Property type: The type of command.
         * <p>
         * @return {@code this}
         * @param type Property type: The type of command. This parameter is required.
         */
        public Builder type(final com.aliyun.ros.cdk.core.IResolvable type) {
            this.props.type(type);
            return this;
        }

        /**
         * Property commandContent: The content of command.
         * <p>
         * Content requires base64 encoding. Maximum size support 16KB.
         * <p>
         * @return {@code this}
         * @param commandContent Property commandContent: The content of command. This parameter is required.
         */
        public Builder commandContent(final java.lang.String commandContent) {
            this.props.commandContent(commandContent);
            return this;
        }
        /**
         * Property commandContent: The content of command.
         * <p>
         * Content requires base64 encoding. Maximum size support 16KB.
         * <p>
         * @return {@code this}
         * @param commandContent Property commandContent: The content of command. This parameter is required.
         */
        public Builder commandContent(final com.aliyun.ros.cdk.core.IResolvable commandContent) {
            this.props.commandContent(commandContent);
            return this;
        }

        /**
         * Property description: The description of command.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of command. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of command.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of command. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property enableParameter: Specifies whether the script contains custom parameters.
         * <p>
         * Default value: false
         * <p>
         * @return {@code this}
         * @param enableParameter Property enableParameter: Specifies whether the script contains custom parameters. This parameter is required.
         */
        public Builder enableParameter(final java.lang.Boolean enableParameter) {
            this.props.enableParameter(enableParameter);
            return this;
        }
        /**
         * Property enableParameter: Specifies whether the script contains custom parameters.
         * <p>
         * Default value: false
         * <p>
         * @return {@code this}
         * @param enableParameter Property enableParameter: Specifies whether the script contains custom parameters. This parameter is required.
         */
        public Builder enableParameter(final com.aliyun.ros.cdk.core.IResolvable enableParameter) {
            this.props.enableParameter(enableParameter);
            return this;
        }

        /**
         * Property name: The name of command.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of command. This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * Property name: The name of command.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of command. This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * Property timeout: Total timeout when the command is executed in the instance.
         * <p>
         * Input the time unit as second. Default is 60s.
         * <p>
         * @return {@code this}
         * @param timeout Property timeout: Total timeout when the command is executed in the instance. This parameter is required.
         */
        public Builder timeout(final java.lang.Number timeout) {
            this.props.timeout(timeout);
            return this;
        }
        /**
         * Property timeout: Total timeout when the command is executed in the instance.
         * <p>
         * Input the time unit as second. Default is 60s.
         * <p>
         * @return {@code this}
         * @param timeout Property timeout: Total timeout when the command is executed in the instance. This parameter is required.
         */
        public Builder timeout(final com.aliyun.ros.cdk.core.IResolvable timeout) {
            this.props.timeout(timeout);
            return this;
        }

        /**
         * Property workingDir: The path where command will be executed in the instance.
         * <p>
         * @return {@code this}
         * @param workingDir Property workingDir: The path where command will be executed in the instance. This parameter is required.
         */
        public Builder workingDir(final java.lang.String workingDir) {
            this.props.workingDir(workingDir);
            return this;
        }
        /**
         * Property workingDir: The path where command will be executed in the instance.
         * <p>
         * @return {@code this}
         * @param workingDir Property workingDir: The path where command will be executed in the instance. This parameter is required.
         */
        public Builder workingDir(final com.aliyun.ros.cdk.core.IResolvable workingDir) {
            this.props.workingDir(workingDir);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.ecs.Command}.
         */
        @Override
        public com.aliyun.ros.cdk.ecs.Command build() {
            return new com.aliyun.ros.cdk.ecs.Command(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
