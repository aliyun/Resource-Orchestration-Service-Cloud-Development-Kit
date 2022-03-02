package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a `ALIYUN::ECS::RunCommand`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.53.0 (build c071d26)", date = "2022-02-11T01:44:07.505Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RunCommandProps")
@software.amazon.jsii.Jsii.Proxy(RunCommandProps.Jsii$Proxy.class)
public interface RunCommandProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property commandContent: The plaintext content or the Base64-encoded content of the script.
     * <p>
     * The Base64-encoded script content cannot exceed 16 KB.
     * You can enable the custom parameter function by setting EnableParameter=true in the script content:
     * Define custom parameters in the {{}} format. Within {{}}, the spaces and line breaks before and after the name of the parameter are ignored.
     * The number of custom parameters cannot exceed 20.
     * A custom parameter name can contain only letters, digits, underscores (_), and hyphens (-). It is case insensitive.
     * Each custom parameter key cannot exceed 64 bytes.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCommandContent();

    /**
     * Property instanceIds: The instance id list.
     * <p>
     * Select up to 20 instances at a time.Instances status must be running.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceIds();

    /**
     * Property type: The language type of the O&M script.
     * <p>
     * Valid values:
     * RunBatScript: batch scripts for Windows instances
     * RunPowerShellScript: PowerShell scripts for Windows instances
     * RunShellScript: shell scripts for Linux instances
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getType();

    /**
     * Property contentEncoding: The encoding mode of script content (CommandContent).
     * <p>
     * Valid values (case insensitive):
     * PlainText: The script content is not encoded, and transmitted in plaintext.
     * Base64: base64-encoded.
     * Default value: PlainText. If the specified value of this parameter is invalid, PlainText is used by default.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getContentEncoding() {
        return null;
    }

    /**
     * Property description: The description of the script, which supports all character sets.
     * <p>
     * It can be up to 512 characters in length.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property enableParameter: Specifies whether the script contains custom parameters.
     * <p>
     * Default value: false
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableParameter() {
        return null;
    }

    /**
     * Property frequency: The execution period of recurring tasks.
     * <p>
     * If the Timed parameter is set to True, you must specify the Frequency parameter. The interval between two recurring tasks cannot be less than 10 seconds.
     * The parameter value follows the cron expression. For more information, see Configure scheduled commands.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFrequency() {
        return null;
    }

    /**
     * Property keepCommand: Specifies whether to retain the script after it is run.
     * <p>
     * Valid values:
     * true: The script is retained. You can call the InvokeCommand operation to run the script again, call the DescribeCommands operation to query the script, and call the DeleteCommands operation to delete the script. The retained script takes up the quota of Cloud Assistant scripts.
     * false: The script is not retained. It is automatically deleted after running, without taking up the quota of Cloud Assistant scripts.
     * Default value: false
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getKeepCommand() {
        return null;
    }

    /**
     * Property name: The name of the script, which supports all character sets.
     * <p>
     * It can be up to 128 characters in length.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
        return null;
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
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getParameters() {
        return null;
    }

    /**
     * Property timed: Specifies whether to periodically run the script.
     * <p>
     * Valid values:
     * true: runs the script on a regular basis based on the value set for the Frequency parameter. The result of the previous execution task does not affect the next execution task.
     * false: runs once only.
     * Default value: false
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTimed() {
        return null;
    }

    /**
     * Property timeout: The timeout period for script execution.
     * <p>
     * Unit: seconds. A timeout error occurs when a script cannot be run because the process slows down, a specific module or the Cloud Assistant client does not exist. When the script times out, the script process is forcibly terminated.
     * Default value: 60.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTimeout() {
        return null;
    }

    /**
     * Property workingDir: The running directory of the script in the ECS instance.
     * <p>
     * Default value:
     * Linux instances: under the home directory of the administrator (root user): /root.
     * Windows instances: under the directory where the process of the Cloud Assistant client is located, such as C:\ProgramData\aliyun\assist$(version).
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getWorkingDir() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RunCommandProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RunCommandProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RunCommandProps> {
        java.lang.Object commandContent;
        java.lang.Object instanceIds;
        java.lang.Object type;
        java.lang.Object contentEncoding;
        java.lang.Object description;
        java.lang.Object enableParameter;
        java.lang.Object frequency;
        java.lang.Object keepCommand;
        java.lang.Object name;
        java.lang.Object parameters;
        java.lang.Object timed;
        java.lang.Object timeout;
        java.lang.Object workingDir;

        /**
         * Sets the value of {@link RunCommandProps#getCommandContent}
         * @param commandContent Property commandContent: The plaintext content or the Base64-encoded content of the script. This parameter is required.
         *                       The Base64-encoded script content cannot exceed 16 KB.
         *                       You can enable the custom parameter function by setting EnableParameter=true in the script content:
         *                       Define custom parameters in the {{}} format. Within {{}}, the spaces and line breaks before and after the name of the parameter are ignored.
         *                       The number of custom parameters cannot exceed 20.
         *                       A custom parameter name can contain only letters, digits, underscores (_), and hyphens (-). It is case insensitive.
         *                       Each custom parameter key cannot exceed 64 bytes.
         * @return {@code this}
         */
        public Builder commandContent(java.lang.String commandContent) {
            this.commandContent = commandContent;
            return this;
        }

        /**
         * Sets the value of {@link RunCommandProps#getCommandContent}
         * @param commandContent Property commandContent: The plaintext content or the Base64-encoded content of the script. This parameter is required.
         *                       The Base64-encoded script content cannot exceed 16 KB.
         *                       You can enable the custom parameter function by setting EnableParameter=true in the script content:
         *                       Define custom parameters in the {{}} format. Within {{}}, the spaces and line breaks before and after the name of the parameter are ignored.
         *                       The number of custom parameters cannot exceed 20.
         *                       A custom parameter name can contain only letters, digits, underscores (_), and hyphens (-). It is case insensitive.
         *                       Each custom parameter key cannot exceed 64 bytes.
         * @return {@code this}
         */
        public Builder commandContent(com.aliyun.ros.cdk.core.IResolvable commandContent) {
            this.commandContent = commandContent;
            return this;
        }

        /**
         * Sets the value of {@link RunCommandProps#getInstanceIds}
         * @param instanceIds Property instanceIds: The instance id list. This parameter is required.
         *                    Select up to 20 instances at a time.Instances status must be running.
         * @return {@code this}
         */
        public Builder instanceIds(com.aliyun.ros.cdk.core.IResolvable instanceIds) {
            this.instanceIds = instanceIds;
            return this;
        }

        /**
         * Sets the value of {@link RunCommandProps#getInstanceIds}
         * @param instanceIds Property instanceIds: The instance id list. This parameter is required.
         *                    Select up to 20 instances at a time.Instances status must be running.
         * @return {@code this}
         */
        public Builder instanceIds(java.util.List<? extends java.lang.Object> instanceIds) {
            this.instanceIds = instanceIds;
            return this;
        }

        /**
         * Sets the value of {@link RunCommandProps#getType}
         * @param type Property type: The language type of the O&M script. This parameter is required.
         *             Valid values:
         *             RunBatScript: batch scripts for Windows instances
         *             RunPowerShellScript: PowerShell scripts for Windows instances
         *             RunShellScript: shell scripts for Linux instances
         * @return {@code this}
         */
        public Builder type(java.lang.String type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link RunCommandProps#getType}
         * @param type Property type: The language type of the O&M script. This parameter is required.
         *             Valid values:
         *             RunBatScript: batch scripts for Windows instances
         *             RunPowerShellScript: PowerShell scripts for Windows instances
         *             RunShellScript: shell scripts for Linux instances
         * @return {@code this}
         */
        public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link RunCommandProps#getContentEncoding}
         * @param contentEncoding Property contentEncoding: The encoding mode of script content (CommandContent).
         *                        Valid values (case insensitive):
         *                        PlainText: The script content is not encoded, and transmitted in plaintext.
         *                        Base64: base64-encoded.
         *                        Default value: PlainText. If the specified value of this parameter is invalid, PlainText is used by default.
         * @return {@code this}
         */
        public Builder contentEncoding(java.lang.String contentEncoding) {
            this.contentEncoding = contentEncoding;
            return this;
        }

        /**
         * Sets the value of {@link RunCommandProps#getContentEncoding}
         * @param contentEncoding Property contentEncoding: The encoding mode of script content (CommandContent).
         *                        Valid values (case insensitive):
         *                        PlainText: The script content is not encoded, and transmitted in plaintext.
         *                        Base64: base64-encoded.
         *                        Default value: PlainText. If the specified value of this parameter is invalid, PlainText is used by default.
         * @return {@code this}
         */
        public Builder contentEncoding(com.aliyun.ros.cdk.core.IResolvable contentEncoding) {
            this.contentEncoding = contentEncoding;
            return this;
        }

        /**
         * Sets the value of {@link RunCommandProps#getDescription}
         * @param description Property description: The description of the script, which supports all character sets.
         *                    It can be up to 512 characters in length.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RunCommandProps#getDescription}
         * @param description Property description: The description of the script, which supports all character sets.
         *                    It can be up to 512 characters in length.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RunCommandProps#getEnableParameter}
         * @param enableParameter Property enableParameter: Specifies whether the script contains custom parameters.
         *                        Default value: false
         * @return {@code this}
         */
        public Builder enableParameter(java.lang.Boolean enableParameter) {
            this.enableParameter = enableParameter;
            return this;
        }

        /**
         * Sets the value of {@link RunCommandProps#getEnableParameter}
         * @param enableParameter Property enableParameter: Specifies whether the script contains custom parameters.
         *                        Default value: false
         * @return {@code this}
         */
        public Builder enableParameter(com.aliyun.ros.cdk.core.IResolvable enableParameter) {
            this.enableParameter = enableParameter;
            return this;
        }

        /**
         * Sets the value of {@link RunCommandProps#getFrequency}
         * @param frequency Property frequency: The execution period of recurring tasks.
         *                  If the Timed parameter is set to True, you must specify the Frequency parameter. The interval between two recurring tasks cannot be less than 10 seconds.
         *                  The parameter value follows the cron expression. For more information, see Configure scheduled commands.
         * @return {@code this}
         */
        public Builder frequency(java.lang.String frequency) {
            this.frequency = frequency;
            return this;
        }

        /**
         * Sets the value of {@link RunCommandProps#getFrequency}
         * @param frequency Property frequency: The execution period of recurring tasks.
         *                  If the Timed parameter is set to True, you must specify the Frequency parameter. The interval between two recurring tasks cannot be less than 10 seconds.
         *                  The parameter value follows the cron expression. For more information, see Configure scheduled commands.
         * @return {@code this}
         */
        public Builder frequency(com.aliyun.ros.cdk.core.IResolvable frequency) {
            this.frequency = frequency;
            return this;
        }

        /**
         * Sets the value of {@link RunCommandProps#getKeepCommand}
         * @param keepCommand Property keepCommand: Specifies whether to retain the script after it is run.
         *                    Valid values:
         *                    true: The script is retained. You can call the InvokeCommand operation to run the script again, call the DescribeCommands operation to query the script, and call the DeleteCommands operation to delete the script. The retained script takes up the quota of Cloud Assistant scripts.
         *                    false: The script is not retained. It is automatically deleted after running, without taking up the quota of Cloud Assistant scripts.
         *                    Default value: false
         * @return {@code this}
         */
        public Builder keepCommand(java.lang.Boolean keepCommand) {
            this.keepCommand = keepCommand;
            return this;
        }

        /**
         * Sets the value of {@link RunCommandProps#getKeepCommand}
         * @param keepCommand Property keepCommand: Specifies whether to retain the script after it is run.
         *                    Valid values:
         *                    true: The script is retained. You can call the InvokeCommand operation to run the script again, call the DescribeCommands operation to query the script, and call the DeleteCommands operation to delete the script. The retained script takes up the quota of Cloud Assistant scripts.
         *                    false: The script is not retained. It is automatically deleted after running, without taking up the quota of Cloud Assistant scripts.
         *                    Default value: false
         * @return {@code this}
         */
        public Builder keepCommand(com.aliyun.ros.cdk.core.IResolvable keepCommand) {
            this.keepCommand = keepCommand;
            return this;
        }

        /**
         * Sets the value of {@link RunCommandProps#getName}
         * @param name Property name: The name of the script, which supports all character sets.
         *             It can be up to 128 characters in length.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RunCommandProps#getName}
         * @param name Property name: The name of the script, which supports all character sets.
         *             It can be up to 128 characters in length.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RunCommandProps#getParameters}
         * @param parameters Property parameters: The key-value pairs of custom parameters passed in when the script contains custom parameters.
         *                   Number of custom parameters: 0 to 10.
         *                   The key cannot be an empty string. It can be up to 64 characters in length.
         *                   The value can be an empty string.
         *                   After the custom parameters and the original script content are Base64 encoded, the total size cannot exceed 16 KB.
         *                   The set of custom parameter names must be a subset of the parameter set that is defined when you created the script. You can use an empty string to represent the parameters that are not passed in.
         *                   Default value: null, indicating that this parameter is canceled and customer parameters are disabled.
         * @return {@code this}
         */
        public Builder parameters(com.aliyun.ros.cdk.core.IResolvable parameters) {
            this.parameters = parameters;
            return this;
        }

        /**
         * Sets the value of {@link RunCommandProps#getParameters}
         * @param parameters Property parameters: The key-value pairs of custom parameters passed in when the script contains custom parameters.
         *                   Number of custom parameters: 0 to 10.
         *                   The key cannot be an empty string. It can be up to 64 characters in length.
         *                   The value can be an empty string.
         *                   After the custom parameters and the original script content are Base64 encoded, the total size cannot exceed 16 KB.
         *                   The set of custom parameter names must be a subset of the parameter set that is defined when you created the script. You can use an empty string to represent the parameters that are not passed in.
         *                   Default value: null, indicating that this parameter is canceled and customer parameters are disabled.
         * @return {@code this}
         */
        public Builder parameters(java.util.Map<java.lang.String, ? extends java.lang.Object> parameters) {
            this.parameters = parameters;
            return this;
        }

        /**
         * Sets the value of {@link RunCommandProps#getTimed}
         * @param timed Property timed: Specifies whether to periodically run the script.
         *              Valid values:
         *              true: runs the script on a regular basis based on the value set for the Frequency parameter. The result of the previous execution task does not affect the next execution task.
         *              false: runs once only.
         *              Default value: false
         * @return {@code this}
         */
        public Builder timed(java.lang.Boolean timed) {
            this.timed = timed;
            return this;
        }

        /**
         * Sets the value of {@link RunCommandProps#getTimed}
         * @param timed Property timed: Specifies whether to periodically run the script.
         *              Valid values:
         *              true: runs the script on a regular basis based on the value set for the Frequency parameter. The result of the previous execution task does not affect the next execution task.
         *              false: runs once only.
         *              Default value: false
         * @return {@code this}
         */
        public Builder timed(com.aliyun.ros.cdk.core.IResolvable timed) {
            this.timed = timed;
            return this;
        }

        /**
         * Sets the value of {@link RunCommandProps#getTimeout}
         * @param timeout Property timeout: The timeout period for script execution.
         *                Unit: seconds. A timeout error occurs when a script cannot be run because the process slows down, a specific module or the Cloud Assistant client does not exist. When the script times out, the script process is forcibly terminated.
         *                Default value: 60.
         * @return {@code this}
         */
        public Builder timeout(java.lang.Number timeout) {
            this.timeout = timeout;
            return this;
        }

        /**
         * Sets the value of {@link RunCommandProps#getTimeout}
         * @param timeout Property timeout: The timeout period for script execution.
         *                Unit: seconds. A timeout error occurs when a script cannot be run because the process slows down, a specific module or the Cloud Assistant client does not exist. When the script times out, the script process is forcibly terminated.
         *                Default value: 60.
         * @return {@code this}
         */
        public Builder timeout(com.aliyun.ros.cdk.core.IResolvable timeout) {
            this.timeout = timeout;
            return this;
        }

        /**
         * Sets the value of {@link RunCommandProps#getWorkingDir}
         * @param workingDir Property workingDir: The running directory of the script in the ECS instance.
         *                   Default value:
         *                   Linux instances: under the home directory of the administrator (root user): /root.
         *                   Windows instances: under the directory where the process of the Cloud Assistant client is located, such as C:\ProgramData\aliyun\assist$(version).
         * @return {@code this}
         */
        public Builder workingDir(java.lang.String workingDir) {
            this.workingDir = workingDir;
            return this;
        }

        /**
         * Sets the value of {@link RunCommandProps#getWorkingDir}
         * @param workingDir Property workingDir: The running directory of the script in the ECS instance.
         *                   Default value:
         *                   Linux instances: under the home directory of the administrator (root user): /root.
         *                   Windows instances: under the directory where the process of the Cloud Assistant client is located, such as C:\ProgramData\aliyun\assist$(version).
         * @return {@code this}
         */
        public Builder workingDir(com.aliyun.ros.cdk.core.IResolvable workingDir) {
            this.workingDir = workingDir;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RunCommandProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RunCommandProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RunCommandProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RunCommandProps {
        private final java.lang.Object commandContent;
        private final java.lang.Object instanceIds;
        private final java.lang.Object type;
        private final java.lang.Object contentEncoding;
        private final java.lang.Object description;
        private final java.lang.Object enableParameter;
        private final java.lang.Object frequency;
        private final java.lang.Object keepCommand;
        private final java.lang.Object name;
        private final java.lang.Object parameters;
        private final java.lang.Object timed;
        private final java.lang.Object timeout;
        private final java.lang.Object workingDir;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.commandContent = software.amazon.jsii.Kernel.get(this, "commandContent", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceIds = software.amazon.jsii.Kernel.get(this, "instanceIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.contentEncoding = software.amazon.jsii.Kernel.get(this, "contentEncoding", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enableParameter = software.amazon.jsii.Kernel.get(this, "enableParameter", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.frequency = software.amazon.jsii.Kernel.get(this, "frequency", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.keepCommand = software.amazon.jsii.Kernel.get(this, "keepCommand", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.parameters = software.amazon.jsii.Kernel.get(this, "parameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.timed = software.amazon.jsii.Kernel.get(this, "timed", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.timeout = software.amazon.jsii.Kernel.get(this, "timeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.workingDir = software.amazon.jsii.Kernel.get(this, "workingDir", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.commandContent = java.util.Objects.requireNonNull(builder.commandContent, "commandContent is required");
            this.instanceIds = java.util.Objects.requireNonNull(builder.instanceIds, "instanceIds is required");
            this.type = java.util.Objects.requireNonNull(builder.type, "type is required");
            this.contentEncoding = builder.contentEncoding;
            this.description = builder.description;
            this.enableParameter = builder.enableParameter;
            this.frequency = builder.frequency;
            this.keepCommand = builder.keepCommand;
            this.name = builder.name;
            this.parameters = builder.parameters;
            this.timed = builder.timed;
            this.timeout = builder.timeout;
            this.workingDir = builder.workingDir;
        }

        @Override
        public final java.lang.Object getCommandContent() {
            return this.commandContent;
        }

        @Override
        public final java.lang.Object getInstanceIds() {
            return this.instanceIds;
        }

        @Override
        public final java.lang.Object getType() {
            return this.type;
        }

        @Override
        public final java.lang.Object getContentEncoding() {
            return this.contentEncoding;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getEnableParameter() {
            return this.enableParameter;
        }

        @Override
        public final java.lang.Object getFrequency() {
            return this.frequency;
        }

        @Override
        public final java.lang.Object getKeepCommand() {
            return this.keepCommand;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getParameters() {
            return this.parameters;
        }

        @Override
        public final java.lang.Object getTimed() {
            return this.timed;
        }

        @Override
        public final java.lang.Object getTimeout() {
            return this.timeout;
        }

        @Override
        public final java.lang.Object getWorkingDir() {
            return this.workingDir;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("commandContent", om.valueToTree(this.getCommandContent()));
            data.set("instanceIds", om.valueToTree(this.getInstanceIds()));
            data.set("type", om.valueToTree(this.getType()));
            if (this.getContentEncoding() != null) {
                data.set("contentEncoding", om.valueToTree(this.getContentEncoding()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getEnableParameter() != null) {
                data.set("enableParameter", om.valueToTree(this.getEnableParameter()));
            }
            if (this.getFrequency() != null) {
                data.set("frequency", om.valueToTree(this.getFrequency()));
            }
            if (this.getKeepCommand() != null) {
                data.set("keepCommand", om.valueToTree(this.getKeepCommand()));
            }
            if (this.getName() != null) {
                data.set("name", om.valueToTree(this.getName()));
            }
            if (this.getParameters() != null) {
                data.set("parameters", om.valueToTree(this.getParameters()));
            }
            if (this.getTimed() != null) {
                data.set("timed", om.valueToTree(this.getTimed()));
            }
            if (this.getTimeout() != null) {
                data.set("timeout", om.valueToTree(this.getTimeout()));
            }
            if (this.getWorkingDir() != null) {
                data.set("workingDir", om.valueToTree(this.getWorkingDir()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.RunCommandProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RunCommandProps.Jsii$Proxy that = (RunCommandProps.Jsii$Proxy) o;

            if (!commandContent.equals(that.commandContent)) return false;
            if (!instanceIds.equals(that.instanceIds)) return false;
            if (!type.equals(that.type)) return false;
            if (this.contentEncoding != null ? !this.contentEncoding.equals(that.contentEncoding) : that.contentEncoding != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.enableParameter != null ? !this.enableParameter.equals(that.enableParameter) : that.enableParameter != null) return false;
            if (this.frequency != null ? !this.frequency.equals(that.frequency) : that.frequency != null) return false;
            if (this.keepCommand != null ? !this.keepCommand.equals(that.keepCommand) : that.keepCommand != null) return false;
            if (this.name != null ? !this.name.equals(that.name) : that.name != null) return false;
            if (this.parameters != null ? !this.parameters.equals(that.parameters) : that.parameters != null) return false;
            if (this.timed != null ? !this.timed.equals(that.timed) : that.timed != null) return false;
            if (this.timeout != null ? !this.timeout.equals(that.timeout) : that.timeout != null) return false;
            return this.workingDir != null ? this.workingDir.equals(that.workingDir) : that.workingDir == null;
        }

        @Override
        public final int hashCode() {
            int result = this.commandContent.hashCode();
            result = 31 * result + (this.instanceIds.hashCode());
            result = 31 * result + (this.type.hashCode());
            result = 31 * result + (this.contentEncoding != null ? this.contentEncoding.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.enableParameter != null ? this.enableParameter.hashCode() : 0);
            result = 31 * result + (this.frequency != null ? this.frequency.hashCode() : 0);
            result = 31 * result + (this.keepCommand != null ? this.keepCommand.hashCode() : 0);
            result = 31 * result + (this.name != null ? this.name.hashCode() : 0);
            result = 31 * result + (this.parameters != null ? this.parameters.hashCode() : 0);
            result = 31 * result + (this.timed != null ? this.timed.hashCode() : 0);
            result = 31 * result + (this.timeout != null ? this.timeout.hashCode() : 0);
            result = 31 * result + (this.workingDir != null ? this.workingDir.hashCode() : 0);
            return result;
        }
    }
}
