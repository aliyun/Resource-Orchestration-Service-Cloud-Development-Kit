package com.aliyun.ros.cdk.swas;

/**
 * Properties for defining a <code>RunCommand</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-swas-runcommand
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T13:58:36.019Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.swas.$Module.class, fqn = "@alicloud/ros-cdk-swas.RunCommandProps")
@software.amazon.jsii.Jsii.Proxy(RunCommandProps.Jsii$Proxy.class)
public interface RunCommandProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property commandContent: The plaintext content of the command to run.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCommandContent();

    /**
     * Property instanceId: The ID of the SWAS instance on which to run the command.
     * <p>
     * The instance must be in 'Running' status.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

    /**
     * Property name: The name of the command to run.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getName();

    /**
     * Property type: The language type of the O&amp;M script.
     * <p>
     * Valid values:
     * RunShellScript: shell scripts for Linux instances
     * RunBatScript: batch scripts for Windows instances
     * RunPowerShellScript: PowerShell scripts for Windows instances
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getType();

    /**
     * Property contentEncoding: The encoding mode of command content (CommandContent).
     * <p>
     * Valid values (case insensitive):
     * PlainText: The command content is not encoded, and transmitted in plaintext.
     * Base64: base64-encoded.
     * Default value: PlainText. If the specified value of this parameter is invalid, PlainText is used by default.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getContentEncoding() {
        return null;
    }

    /**
     * Property enableParameter: Specifies whether the command contains custom parameters.
     * <p>
     * Default value: false
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableParameter() {
        return null;
    }

    /**
     * Property parameters: The key-value pairs of custom parameters passed in when the command contains custom parameters.
     * <p>
     * Number of custom parameters: 0 to 20.
     * The key cannot be an empty string. It can be up to 64 characters in length.
     * The value can be an empty string.
     * After the custom parameters and the original command content are Base64 encoded, the total size cannot exceed 16 KB.
     * The set of custom parameter names must be a subset of the parameter set that is defined when you created the command. You can use an empty string to represent the parameters that are not passed in.
     * Default value: null, indicating that this parameter is canceled and customer parameters are disabled.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getParameters() {
        return null;
    }

    /**
     * Property sync: Whether to run the command synchronously.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSync() {
        return null;
    }

    /**
     * Property timeout: The timeout period for command execution.
     * <p>
     * Unit: seconds. Valid values: 10 to 86400. Default value: 60.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTimeout() {
        return null;
    }

    /**
     * Property windowsPasswordName: The name of the password to use to run the command on Windows instances.
     * <p>
     * The name can be up to 255 characters in length.
     * If you do not want to use the default System user to run the command on Windows instances, specify both <strong>WindowsPasswordName</strong> and <strong>WorkingUser</strong>. To mitigate the risk of password leaks, the password is stored in plaintext in Operation Orchestration Service (OOS) Parameter Store, and only the name of the password is passed in by using WindowsPasswordName.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getWindowsPasswordName() {
        return null;
    }

    /**
     * Property workingDir: The directory in which to run the command on the instance.
     * <p>
     * Default value:
     * Linux instances: /root
     * Windows instances: C:\ProgramData\aliyun\assist$(version)
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getWorkingDir() {
        return null;
    }

    /**
     * Property workingUser: The user with which to run the command on the instance.
     * <p>
     * Default value: 'root' for Linux instances, 'system' for Windows instances. You can specify other existing users to run the command to reduce security risks.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getWorkingUser() {
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
        java.lang.Object instanceId;
        java.lang.Object name;
        java.lang.Object type;
        java.lang.Object contentEncoding;
        java.lang.Object enableParameter;
        java.lang.Object parameters;
        java.lang.Object sync;
        java.lang.Object timeout;
        java.lang.Object windowsPasswordName;
        java.lang.Object workingDir;
        java.lang.Object workingUser;

        /**
         * Sets the value of {@link RunCommandProps#getCommandContent}
         * @param commandContent Property commandContent: The plaintext content of the command to run. This parameter is required.
         * @return {@code this}
         */
        public Builder commandContent(java.lang.String commandContent) {
            this.commandContent = commandContent;
            return this;
        }

        /**
         * Sets the value of {@link RunCommandProps#getCommandContent}
         * @param commandContent Property commandContent: The plaintext content of the command to run. This parameter is required.
         * @return {@code this}
         */
        public Builder commandContent(com.aliyun.ros.cdk.core.IResolvable commandContent) {
            this.commandContent = commandContent;
            return this;
        }

        /**
         * Sets the value of {@link RunCommandProps#getInstanceId}
         * @param instanceId Property instanceId: The ID of the SWAS instance on which to run the command. This parameter is required.
         *                   The instance must be in 'Running' status.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link RunCommandProps#getInstanceId}
         * @param instanceId Property instanceId: The ID of the SWAS instance on which to run the command. This parameter is required.
         *                   The instance must be in 'Running' status.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link RunCommandProps#getName}
         * @param name Property name: The name of the command to run. This parameter is required.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RunCommandProps#getName}
         * @param name Property name: The name of the command to run. This parameter is required.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RunCommandProps#getType}
         * @param type Property type: The language type of the O&amp;M script. This parameter is required.
         *             Valid values:
         *             RunShellScript: shell scripts for Linux instances
         *             RunBatScript: batch scripts for Windows instances
         *             RunPowerShellScript: PowerShell scripts for Windows instances
         * @return {@code this}
         */
        public Builder type(java.lang.String type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link RunCommandProps#getType}
         * @param type Property type: The language type of the O&amp;M script. This parameter is required.
         *             Valid values:
         *             RunShellScript: shell scripts for Linux instances
         *             RunBatScript: batch scripts for Windows instances
         *             RunPowerShellScript: PowerShell scripts for Windows instances
         * @return {@code this}
         */
        public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link RunCommandProps#getContentEncoding}
         * @param contentEncoding Property contentEncoding: The encoding mode of command content (CommandContent).
         *                        Valid values (case insensitive):
         *                        PlainText: The command content is not encoded, and transmitted in plaintext.
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
         * @param contentEncoding Property contentEncoding: The encoding mode of command content (CommandContent).
         *                        Valid values (case insensitive):
         *                        PlainText: The command content is not encoded, and transmitted in plaintext.
         *                        Base64: base64-encoded.
         *                        Default value: PlainText. If the specified value of this parameter is invalid, PlainText is used by default.
         * @return {@code this}
         */
        public Builder contentEncoding(com.aliyun.ros.cdk.core.IResolvable contentEncoding) {
            this.contentEncoding = contentEncoding;
            return this;
        }

        /**
         * Sets the value of {@link RunCommandProps#getEnableParameter}
         * @param enableParameter Property enableParameter: Specifies whether the command contains custom parameters.
         *                        Default value: false
         * @return {@code this}
         */
        public Builder enableParameter(java.lang.Boolean enableParameter) {
            this.enableParameter = enableParameter;
            return this;
        }

        /**
         * Sets the value of {@link RunCommandProps#getEnableParameter}
         * @param enableParameter Property enableParameter: Specifies whether the command contains custom parameters.
         *                        Default value: false
         * @return {@code this}
         */
        public Builder enableParameter(com.aliyun.ros.cdk.core.IResolvable enableParameter) {
            this.enableParameter = enableParameter;
            return this;
        }

        /**
         * Sets the value of {@link RunCommandProps#getParameters}
         * @param parameters Property parameters: The key-value pairs of custom parameters passed in when the command contains custom parameters.
         *                   Number of custom parameters: 0 to 20.
         *                   The key cannot be an empty string. It can be up to 64 characters in length.
         *                   The value can be an empty string.
         *                   After the custom parameters and the original command content are Base64 encoded, the total size cannot exceed 16 KB.
         *                   The set of custom parameter names must be a subset of the parameter set that is defined when you created the command. You can use an empty string to represent the parameters that are not passed in.
         *                   Default value: null, indicating that this parameter is canceled and customer parameters are disabled.
         * @return {@code this}
         */
        public Builder parameters(com.aliyun.ros.cdk.core.IResolvable parameters) {
            this.parameters = parameters;
            return this;
        }

        /**
         * Sets the value of {@link RunCommandProps#getParameters}
         * @param parameters Property parameters: The key-value pairs of custom parameters passed in when the command contains custom parameters.
         *                   Number of custom parameters: 0 to 20.
         *                   The key cannot be an empty string. It can be up to 64 characters in length.
         *                   The value can be an empty string.
         *                   After the custom parameters and the original command content are Base64 encoded, the total size cannot exceed 16 KB.
         *                   The set of custom parameter names must be a subset of the parameter set that is defined when you created the command. You can use an empty string to represent the parameters that are not passed in.
         *                   Default value: null, indicating that this parameter is canceled and customer parameters are disabled.
         * @return {@code this}
         */
        public Builder parameters(java.util.Map<java.lang.String, ? extends java.lang.Object> parameters) {
            this.parameters = parameters;
            return this;
        }

        /**
         * Sets the value of {@link RunCommandProps#getSync}
         * @param sync Property sync: Whether to run the command synchronously.
         * @return {@code this}
         */
        public Builder sync(java.lang.Boolean sync) {
            this.sync = sync;
            return this;
        }

        /**
         * Sets the value of {@link RunCommandProps#getSync}
         * @param sync Property sync: Whether to run the command synchronously.
         * @return {@code this}
         */
        public Builder sync(com.aliyun.ros.cdk.core.IResolvable sync) {
            this.sync = sync;
            return this;
        }

        /**
         * Sets the value of {@link RunCommandProps#getTimeout}
         * @param timeout Property timeout: The timeout period for command execution.
         *                Unit: seconds. Valid values: 10 to 86400. Default value: 60.
         * @return {@code this}
         */
        public Builder timeout(java.lang.Number timeout) {
            this.timeout = timeout;
            return this;
        }

        /**
         * Sets the value of {@link RunCommandProps#getTimeout}
         * @param timeout Property timeout: The timeout period for command execution.
         *                Unit: seconds. Valid values: 10 to 86400. Default value: 60.
         * @return {@code this}
         */
        public Builder timeout(com.aliyun.ros.cdk.core.IResolvable timeout) {
            this.timeout = timeout;
            return this;
        }

        /**
         * Sets the value of {@link RunCommandProps#getWindowsPasswordName}
         * @param windowsPasswordName Property windowsPasswordName: The name of the password to use to run the command on Windows instances.
         *                            The name can be up to 255 characters in length.
         *                            If you do not want to use the default System user to run the command on Windows instances, specify both <strong>WindowsPasswordName</strong> and <strong>WorkingUser</strong>. To mitigate the risk of password leaks, the password is stored in plaintext in Operation Orchestration Service (OOS) Parameter Store, and only the name of the password is passed in by using WindowsPasswordName.
         * @return {@code this}
         */
        public Builder windowsPasswordName(java.lang.String windowsPasswordName) {
            this.windowsPasswordName = windowsPasswordName;
            return this;
        }

        /**
         * Sets the value of {@link RunCommandProps#getWindowsPasswordName}
         * @param windowsPasswordName Property windowsPasswordName: The name of the password to use to run the command on Windows instances.
         *                            The name can be up to 255 characters in length.
         *                            If you do not want to use the default System user to run the command on Windows instances, specify both <strong>WindowsPasswordName</strong> and <strong>WorkingUser</strong>. To mitigate the risk of password leaks, the password is stored in plaintext in Operation Orchestration Service (OOS) Parameter Store, and only the name of the password is passed in by using WindowsPasswordName.
         * @return {@code this}
         */
        public Builder windowsPasswordName(com.aliyun.ros.cdk.core.IResolvable windowsPasswordName) {
            this.windowsPasswordName = windowsPasswordName;
            return this;
        }

        /**
         * Sets the value of {@link RunCommandProps#getWorkingDir}
         * @param workingDir Property workingDir: The directory in which to run the command on the instance.
         *                   Default value:
         *                   Linux instances: /root
         *                   Windows instances: C:\ProgramData\aliyun\assist$(version)
         * @return {@code this}
         */
        public Builder workingDir(java.lang.String workingDir) {
            this.workingDir = workingDir;
            return this;
        }

        /**
         * Sets the value of {@link RunCommandProps#getWorkingDir}
         * @param workingDir Property workingDir: The directory in which to run the command on the instance.
         *                   Default value:
         *                   Linux instances: /root
         *                   Windows instances: C:\ProgramData\aliyun\assist$(version)
         * @return {@code this}
         */
        public Builder workingDir(com.aliyun.ros.cdk.core.IResolvable workingDir) {
            this.workingDir = workingDir;
            return this;
        }

        /**
         * Sets the value of {@link RunCommandProps#getWorkingUser}
         * @param workingUser Property workingUser: The user with which to run the command on the instance.
         *                    Default value: 'root' for Linux instances, 'system' for Windows instances. You can specify other existing users to run the command to reduce security risks.
         * @return {@code this}
         */
        public Builder workingUser(java.lang.String workingUser) {
            this.workingUser = workingUser;
            return this;
        }

        /**
         * Sets the value of {@link RunCommandProps#getWorkingUser}
         * @param workingUser Property workingUser: The user with which to run the command on the instance.
         *                    Default value: 'root' for Linux instances, 'system' for Windows instances. You can specify other existing users to run the command to reduce security risks.
         * @return {@code this}
         */
        public Builder workingUser(com.aliyun.ros.cdk.core.IResolvable workingUser) {
            this.workingUser = workingUser;
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
        private final java.lang.Object instanceId;
        private final java.lang.Object name;
        private final java.lang.Object type;
        private final java.lang.Object contentEncoding;
        private final java.lang.Object enableParameter;
        private final java.lang.Object parameters;
        private final java.lang.Object sync;
        private final java.lang.Object timeout;
        private final java.lang.Object windowsPasswordName;
        private final java.lang.Object workingDir;
        private final java.lang.Object workingUser;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.commandContent = software.amazon.jsii.Kernel.get(this, "commandContent", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.contentEncoding = software.amazon.jsii.Kernel.get(this, "contentEncoding", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enableParameter = software.amazon.jsii.Kernel.get(this, "enableParameter", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.parameters = software.amazon.jsii.Kernel.get(this, "parameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sync = software.amazon.jsii.Kernel.get(this, "sync", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.timeout = software.amazon.jsii.Kernel.get(this, "timeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.windowsPasswordName = software.amazon.jsii.Kernel.get(this, "windowsPasswordName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.workingDir = software.amazon.jsii.Kernel.get(this, "workingDir", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.workingUser = software.amazon.jsii.Kernel.get(this, "workingUser", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.commandContent = java.util.Objects.requireNonNull(builder.commandContent, "commandContent is required");
            this.instanceId = java.util.Objects.requireNonNull(builder.instanceId, "instanceId is required");
            this.name = java.util.Objects.requireNonNull(builder.name, "name is required");
            this.type = java.util.Objects.requireNonNull(builder.type, "type is required");
            this.contentEncoding = builder.contentEncoding;
            this.enableParameter = builder.enableParameter;
            this.parameters = builder.parameters;
            this.sync = builder.sync;
            this.timeout = builder.timeout;
            this.windowsPasswordName = builder.windowsPasswordName;
            this.workingDir = builder.workingDir;
            this.workingUser = builder.workingUser;
        }

        @Override
        public final java.lang.Object getCommandContent() {
            return this.commandContent;
        }

        @Override
        public final java.lang.Object getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
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
        public final java.lang.Object getEnableParameter() {
            return this.enableParameter;
        }

        @Override
        public final java.lang.Object getParameters() {
            return this.parameters;
        }

        @Override
        public final java.lang.Object getSync() {
            return this.sync;
        }

        @Override
        public final java.lang.Object getTimeout() {
            return this.timeout;
        }

        @Override
        public final java.lang.Object getWindowsPasswordName() {
            return this.windowsPasswordName;
        }

        @Override
        public final java.lang.Object getWorkingDir() {
            return this.workingDir;
        }

        @Override
        public final java.lang.Object getWorkingUser() {
            return this.workingUser;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("commandContent", om.valueToTree(this.getCommandContent()));
            data.set("instanceId", om.valueToTree(this.getInstanceId()));
            data.set("name", om.valueToTree(this.getName()));
            data.set("type", om.valueToTree(this.getType()));
            if (this.getContentEncoding() != null) {
                data.set("contentEncoding", om.valueToTree(this.getContentEncoding()));
            }
            if (this.getEnableParameter() != null) {
                data.set("enableParameter", om.valueToTree(this.getEnableParameter()));
            }
            if (this.getParameters() != null) {
                data.set("parameters", om.valueToTree(this.getParameters()));
            }
            if (this.getSync() != null) {
                data.set("sync", om.valueToTree(this.getSync()));
            }
            if (this.getTimeout() != null) {
                data.set("timeout", om.valueToTree(this.getTimeout()));
            }
            if (this.getWindowsPasswordName() != null) {
                data.set("windowsPasswordName", om.valueToTree(this.getWindowsPasswordName()));
            }
            if (this.getWorkingDir() != null) {
                data.set("workingDir", om.valueToTree(this.getWorkingDir()));
            }
            if (this.getWorkingUser() != null) {
                data.set("workingUser", om.valueToTree(this.getWorkingUser()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-swas.RunCommandProps"));
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
            if (!instanceId.equals(that.instanceId)) return false;
            if (!name.equals(that.name)) return false;
            if (!type.equals(that.type)) return false;
            if (this.contentEncoding != null ? !this.contentEncoding.equals(that.contentEncoding) : that.contentEncoding != null) return false;
            if (this.enableParameter != null ? !this.enableParameter.equals(that.enableParameter) : that.enableParameter != null) return false;
            if (this.parameters != null ? !this.parameters.equals(that.parameters) : that.parameters != null) return false;
            if (this.sync != null ? !this.sync.equals(that.sync) : that.sync != null) return false;
            if (this.timeout != null ? !this.timeout.equals(that.timeout) : that.timeout != null) return false;
            if (this.windowsPasswordName != null ? !this.windowsPasswordName.equals(that.windowsPasswordName) : that.windowsPasswordName != null) return false;
            if (this.workingDir != null ? !this.workingDir.equals(that.workingDir) : that.workingDir != null) return false;
            return this.workingUser != null ? this.workingUser.equals(that.workingUser) : that.workingUser == null;
        }

        @Override
        public final int hashCode() {
            int result = this.commandContent.hashCode();
            result = 31 * result + (this.instanceId.hashCode());
            result = 31 * result + (this.name.hashCode());
            result = 31 * result + (this.type.hashCode());
            result = 31 * result + (this.contentEncoding != null ? this.contentEncoding.hashCode() : 0);
            result = 31 * result + (this.enableParameter != null ? this.enableParameter.hashCode() : 0);
            result = 31 * result + (this.parameters != null ? this.parameters.hashCode() : 0);
            result = 31 * result + (this.sync != null ? this.sync.hashCode() : 0);
            result = 31 * result + (this.timeout != null ? this.timeout.hashCode() : 0);
            result = 31 * result + (this.windowsPasswordName != null ? this.windowsPasswordName.hashCode() : 0);
            result = 31 * result + (this.workingDir != null ? this.workingDir.hashCode() : 0);
            result = 31 * result + (this.workingUser != null ? this.workingUser.hashCode() : 0);
            return result;
        }
    }
}
