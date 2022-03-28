package com.aliyun.ros.cdk.ecs;

/**
 * A ROS resource type:  `ALIYUN::ECS::RunCommand`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.55.1 (build 07d2d90)", date = "2022-03-28T07:49:02.452Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RunCommand")
public class RunCommand extends com.aliyun.ros.cdk.core.Resource {

    protected RunCommand(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RunCommand(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::ECS::RunCommand`.
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
    public RunCommand(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.RunCommandProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::ECS::RunCommand`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public RunCommand(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.RunCommandProps props) {
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
     * Attribute InvokeId: The invoke id of command.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInvokeId() {
        return software.amazon.jsii.Kernel.get(this, "attrInvokeId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ecs.RunCommand}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecs.RunCommand> {
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
        private final com.aliyun.ros.cdk.ecs.RunCommandProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ecs.RunCommandProps.Builder();
        }

        /**
         * Property commandContent: The plaintext content or the Base64-encoded content of the script.
         * <p>
         * The Base64-encoded script content cannot exceed 16 KB.
         * You can enable the custom parameter function by setting EnableParameter=true in the script content:
         * Define custom parameters in the {{}} format. Within {{}}, the spaces and line breaks before and after the name of the parameter are ignored.
         * The number of custom parameters cannot exceed 20.
         * A custom parameter name can contain only letters, digits, underscores (_), and hyphens (-). It is case insensitive.
         * Each custom parameter key cannot exceed 64 bytes.
         * <p>
         * @return {@code this}
         * @param commandContent Property commandContent: The plaintext content or the Base64-encoded content of the script. This parameter is required.
         */
        public Builder commandContent(final java.lang.String commandContent) {
            this.props.commandContent(commandContent);
            return this;
        }
        /**
         * Property commandContent: The plaintext content or the Base64-encoded content of the script.
         * <p>
         * The Base64-encoded script content cannot exceed 16 KB.
         * You can enable the custom parameter function by setting EnableParameter=true in the script content:
         * Define custom parameters in the {{}} format. Within {{}}, the spaces and line breaks before and after the name of the parameter are ignored.
         * The number of custom parameters cannot exceed 20.
         * A custom parameter name can contain only letters, digits, underscores (_), and hyphens (-). It is case insensitive.
         * Each custom parameter key cannot exceed 64 bytes.
         * <p>
         * @return {@code this}
         * @param commandContent Property commandContent: The plaintext content or the Base64-encoded content of the script. This parameter is required.
         */
        public Builder commandContent(final com.aliyun.ros.cdk.core.IResolvable commandContent) {
            this.props.commandContent(commandContent);
            return this;
        }

        /**
         * Property instanceIds: The instance id list.
         * <p>
         * Select up to 20 instances at a time.Instances status must be running.
         * <p>
         * @return {@code this}
         * @param instanceIds Property instanceIds: The instance id list. This parameter is required.
         */
        public Builder instanceIds(final com.aliyun.ros.cdk.core.IResolvable instanceIds) {
            this.props.instanceIds(instanceIds);
            return this;
        }
        /**
         * Property instanceIds: The instance id list.
         * <p>
         * Select up to 20 instances at a time.Instances status must be running.
         * <p>
         * @return {@code this}
         * @param instanceIds Property instanceIds: The instance id list. This parameter is required.
         */
        public Builder instanceIds(final java.util.List<? extends java.lang.Object> instanceIds) {
            this.props.instanceIds(instanceIds);
            return this;
        }

        /**
         * Property type: The language type of the O&M script.
         * <p>
         * Valid values:
         * RunBatScript: batch scripts for Windows instances
         * RunPowerShellScript: PowerShell scripts for Windows instances
         * RunShellScript: shell scripts for Linux instances
         * <p>
         * @return {@code this}
         * @param type Property type: The language type of the O&M script. This parameter is required.
         */
        public Builder type(final java.lang.String type) {
            this.props.type(type);
            return this;
        }
        /**
         * Property type: The language type of the O&M script.
         * <p>
         * Valid values:
         * RunBatScript: batch scripts for Windows instances
         * RunPowerShellScript: PowerShell scripts for Windows instances
         * RunShellScript: shell scripts for Linux instances
         * <p>
         * @return {@code this}
         * @param type Property type: The language type of the O&M script. This parameter is required.
         */
        public Builder type(final com.aliyun.ros.cdk.core.IResolvable type) {
            this.props.type(type);
            return this;
        }

        /**
         * Property contentEncoding: The encoding mode of script content (CommandContent).
         * <p>
         * Valid values (case insensitive):
         * PlainText: The script content is not encoded, and transmitted in plaintext.
         * Base64: base64-encoded.
         * Default value: PlainText. If the specified value of this parameter is invalid, PlainText is used by default.
         * <p>
         * @return {@code this}
         * @param contentEncoding Property contentEncoding: The encoding mode of script content (CommandContent). This parameter is required.
         */
        public Builder contentEncoding(final java.lang.String contentEncoding) {
            this.props.contentEncoding(contentEncoding);
            return this;
        }
        /**
         * Property contentEncoding: The encoding mode of script content (CommandContent).
         * <p>
         * Valid values (case insensitive):
         * PlainText: The script content is not encoded, and transmitted in plaintext.
         * Base64: base64-encoded.
         * Default value: PlainText. If the specified value of this parameter is invalid, PlainText is used by default.
         * <p>
         * @return {@code this}
         * @param contentEncoding Property contentEncoding: The encoding mode of script content (CommandContent). This parameter is required.
         */
        public Builder contentEncoding(final com.aliyun.ros.cdk.core.IResolvable contentEncoding) {
            this.props.contentEncoding(contentEncoding);
            return this;
        }

        /**
         * Property description: The description of the script, which supports all character sets.
         * <p>
         * It can be up to 512 characters in length.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the script, which supports all character sets. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of the script, which supports all character sets.
         * <p>
         * It can be up to 512 characters in length.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the script, which supports all character sets. This parameter is required.
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
         * Property frequency: The execution period of recurring tasks.
         * <p>
         * If the Timed parameter is set to True, you must specify the Frequency parameter. The interval between two recurring tasks cannot be less than 10 seconds.
         * The parameter value follows the cron expression. For more information, see Configure scheduled commands.
         * <p>
         * @return {@code this}
         * @param frequency Property frequency: The execution period of recurring tasks. This parameter is required.
         */
        public Builder frequency(final java.lang.String frequency) {
            this.props.frequency(frequency);
            return this;
        }
        /**
         * Property frequency: The execution period of recurring tasks.
         * <p>
         * If the Timed parameter is set to True, you must specify the Frequency parameter. The interval between two recurring tasks cannot be less than 10 seconds.
         * The parameter value follows the cron expression. For more information, see Configure scheduled commands.
         * <p>
         * @return {@code this}
         * @param frequency Property frequency: The execution period of recurring tasks. This parameter is required.
         */
        public Builder frequency(final com.aliyun.ros.cdk.core.IResolvable frequency) {
            this.props.frequency(frequency);
            return this;
        }

        /**
         * Property keepCommand: Specifies whether to retain the script after it is run.
         * <p>
         * Valid values:
         * true: The script is retained. You can call the InvokeCommand operation to run the script again, call the DescribeCommands operation to query the script, and call the DeleteCommands operation to delete the script. The retained script takes up the quota of Cloud Assistant scripts.
         * false: The script is not retained. It is automatically deleted after running, without taking up the quota of Cloud Assistant scripts.
         * Default value: false
         * <p>
         * @return {@code this}
         * @param keepCommand Property keepCommand: Specifies whether to retain the script after it is run. This parameter is required.
         */
        public Builder keepCommand(final java.lang.Boolean keepCommand) {
            this.props.keepCommand(keepCommand);
            return this;
        }
        /**
         * Property keepCommand: Specifies whether to retain the script after it is run.
         * <p>
         * Valid values:
         * true: The script is retained. You can call the InvokeCommand operation to run the script again, call the DescribeCommands operation to query the script, and call the DeleteCommands operation to delete the script. The retained script takes up the quota of Cloud Assistant scripts.
         * false: The script is not retained. It is automatically deleted after running, without taking up the quota of Cloud Assistant scripts.
         * Default value: false
         * <p>
         * @return {@code this}
         * @param keepCommand Property keepCommand: Specifies whether to retain the script after it is run. This parameter is required.
         */
        public Builder keepCommand(final com.aliyun.ros.cdk.core.IResolvable keepCommand) {
            this.props.keepCommand(keepCommand);
            return this;
        }

        /**
         * Property name: The name of the script, which supports all character sets.
         * <p>
         * It can be up to 128 characters in length.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the script, which supports all character sets. This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * Property name: The name of the script, which supports all character sets.
         * <p>
         * It can be up to 128 characters in length.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the script, which supports all character sets. This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
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
         * Property timed: Specifies whether to periodically run the script.
         * <p>
         * Valid values:
         * true: runs the script on a regular basis based on the value set for the Frequency parameter. The result of the previous execution task does not affect the next execution task.
         * false: runs once only.
         * Default value: false
         * <p>
         * @return {@code this}
         * @param timed Property timed: Specifies whether to periodically run the script. This parameter is required.
         */
        public Builder timed(final java.lang.Boolean timed) {
            this.props.timed(timed);
            return this;
        }
        /**
         * Property timed: Specifies whether to periodically run the script.
         * <p>
         * Valid values:
         * true: runs the script on a regular basis based on the value set for the Frequency parameter. The result of the previous execution task does not affect the next execution task.
         * false: runs once only.
         * Default value: false
         * <p>
         * @return {@code this}
         * @param timed Property timed: Specifies whether to periodically run the script. This parameter is required.
         */
        public Builder timed(final com.aliyun.ros.cdk.core.IResolvable timed) {
            this.props.timed(timed);
            return this;
        }

        /**
         * Property timeout: The timeout period for script execution.
         * <p>
         * Unit: seconds. A timeout error occurs when a script cannot be run because the process slows down, a specific module or the Cloud Assistant client does not exist. When the script times out, the script process is forcibly terminated.
         * Default value: 60.
         * <p>
         * @return {@code this}
         * @param timeout Property timeout: The timeout period for script execution. This parameter is required.
         */
        public Builder timeout(final java.lang.Number timeout) {
            this.props.timeout(timeout);
            return this;
        }
        /**
         * Property timeout: The timeout period for script execution.
         * <p>
         * Unit: seconds. A timeout error occurs when a script cannot be run because the process slows down, a specific module or the Cloud Assistant client does not exist. When the script times out, the script process is forcibly terminated.
         * Default value: 60.
         * <p>
         * @return {@code this}
         * @param timeout Property timeout: The timeout period for script execution. This parameter is required.
         */
        public Builder timeout(final com.aliyun.ros.cdk.core.IResolvable timeout) {
            this.props.timeout(timeout);
            return this;
        }

        /**
         * Property workingDir: The running directory of the script in the ECS instance.
         * <p>
         * Default value:
         * Linux instances: under the home directory of the administrator (root user): /root.
         * Windows instances: under the directory where the process of the Cloud Assistant client is located, such as C:\ProgramData\aliyun\assist$(version).
         * <p>
         * @return {@code this}
         * @param workingDir Property workingDir: The running directory of the script in the ECS instance. This parameter is required.
         */
        public Builder workingDir(final java.lang.String workingDir) {
            this.props.workingDir(workingDir);
            return this;
        }
        /**
         * Property workingDir: The running directory of the script in the ECS instance.
         * <p>
         * Default value:
         * Linux instances: under the home directory of the administrator (root user): /root.
         * Windows instances: under the directory where the process of the Cloud Assistant client is located, such as C:\ProgramData\aliyun\assist$(version).
         * <p>
         * @return {@code this}
         * @param workingDir Property workingDir: The running directory of the script in the ECS instance. This parameter is required.
         */
        public Builder workingDir(final com.aliyun.ros.cdk.core.IResolvable workingDir) {
            this.props.workingDir(workingDir);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.ecs.RunCommand}.
         */
        @Override
        public com.aliyun.ros.cdk.ecs.RunCommand build() {
            return new com.aliyun.ros.cdk.ecs.RunCommand(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
