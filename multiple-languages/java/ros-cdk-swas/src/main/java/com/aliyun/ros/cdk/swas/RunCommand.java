package com.aliyun.ros.cdk.swas;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::SWAS::RunCommand</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:54.553Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.swas.$Module.class, fqn = "@alicloud/ros-cdk-swas.RunCommand")
public class RunCommand extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.swas.IRunCommand {

    protected RunCommand(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RunCommand(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public RunCommand(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.swas.RunCommandProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public RunCommand(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.swas.RunCommandProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute InvokeId: The ID of the command execution.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInvokeId() {
        return software.amazon.jsii.Kernel.get(this, "attrInvokeId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InvokeResult: The result of the command execution.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInvokeResult() {
        return software.amazon.jsii.Kernel.get(this, "attrInvokeResult", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.swas.RunCommandProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.swas.RunCommandProps.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.swas.RunCommand}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.swas.RunCommand> {
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
        private final com.aliyun.ros.cdk.swas.RunCommandProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.swas.RunCommandProps.Builder();
        }

        /**
         * Property commandContent: The plaintext content of the command to run.
         * <p>
         * @return {@code this}
         * @param commandContent Property commandContent: The plaintext content of the command to run. This parameter is required.
         */
        public Builder commandContent(final java.lang.String commandContent) {
            this.props.commandContent(commandContent);
            return this;
        }
        /**
         * Property commandContent: The plaintext content of the command to run.
         * <p>
         * @return {@code this}
         * @param commandContent Property commandContent: The plaintext content of the command to run. This parameter is required.
         */
        public Builder commandContent(final com.aliyun.ros.cdk.core.IResolvable commandContent) {
            this.props.commandContent(commandContent);
            return this;
        }

        /**
         * Property instanceId: The ID of the SWAS instance on which to run the command.
         * <p>
         * The instance must be in 'Running' status.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The ID of the SWAS instance on which to run the command. This parameter is required.
         */
        public Builder instanceId(final java.lang.String instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }
        /**
         * Property instanceId: The ID of the SWAS instance on which to run the command.
         * <p>
         * The instance must be in 'Running' status.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The ID of the SWAS instance on which to run the command. This parameter is required.
         */
        public Builder instanceId(final com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }

        /**
         * Property name: The name of the command to run.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the command to run. This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * Property name: The name of the command to run.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the command to run. This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * Property type: The language type of the O&amp;M script.
         * <p>
         * Valid values:
         * RunShellScript: shell scripts for Linux instances
         * RunBatScript: batch scripts for Windows instances
         * RunPowerShellScript: PowerShell scripts for Windows instances
         * <p>
         * @return {@code this}
         * @param type Property type: The language type of the O&amp;M script. This parameter is required.
         */
        public Builder type(final java.lang.String type) {
            this.props.type(type);
            return this;
        }
        /**
         * Property type: The language type of the O&amp;M script.
         * <p>
         * Valid values:
         * RunShellScript: shell scripts for Linux instances
         * RunBatScript: batch scripts for Windows instances
         * RunPowerShellScript: PowerShell scripts for Windows instances
         * <p>
         * @return {@code this}
         * @param type Property type: The language type of the O&amp;M script. This parameter is required.
         */
        public Builder type(final com.aliyun.ros.cdk.core.IResolvable type) {
            this.props.type(type);
            return this;
        }

        /**
         * Property contentEncoding: The encoding mode of command content (CommandContent).
         * <p>
         * Valid values (case insensitive):
         * PlainText: The command content is not encoded, and transmitted in plaintext.
         * Base64: base64-encoded.
         * Default value: PlainText. If the specified value of this parameter is invalid, PlainText is used by default.
         * <p>
         * @return {@code this}
         * @param contentEncoding Property contentEncoding: The encoding mode of command content (CommandContent). This parameter is required.
         */
        public Builder contentEncoding(final java.lang.String contentEncoding) {
            this.props.contentEncoding(contentEncoding);
            return this;
        }
        /**
         * Property contentEncoding: The encoding mode of command content (CommandContent).
         * <p>
         * Valid values (case insensitive):
         * PlainText: The command content is not encoded, and transmitted in plaintext.
         * Base64: base64-encoded.
         * Default value: PlainText. If the specified value of this parameter is invalid, PlainText is used by default.
         * <p>
         * @return {@code this}
         * @param contentEncoding Property contentEncoding: The encoding mode of command content (CommandContent). This parameter is required.
         */
        public Builder contentEncoding(final com.aliyun.ros.cdk.core.IResolvable contentEncoding) {
            this.props.contentEncoding(contentEncoding);
            return this;
        }

        /**
         * Property enableParameter: Specifies whether the command contains custom parameters.
         * <p>
         * Default value: false
         * <p>
         * @return {@code this}
         * @param enableParameter Property enableParameter: Specifies whether the command contains custom parameters. This parameter is required.
         */
        public Builder enableParameter(final java.lang.Boolean enableParameter) {
            this.props.enableParameter(enableParameter);
            return this;
        }
        /**
         * Property enableParameter: Specifies whether the command contains custom parameters.
         * <p>
         * Default value: false
         * <p>
         * @return {@code this}
         * @param enableParameter Property enableParameter: Specifies whether the command contains custom parameters. This parameter is required.
         */
        public Builder enableParameter(final com.aliyun.ros.cdk.core.IResolvable enableParameter) {
            this.props.enableParameter(enableParameter);
            return this;
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
         * <p>
         * @return {@code this}
         * @param parameters Property parameters: The key-value pairs of custom parameters passed in when the command contains custom parameters. This parameter is required.
         */
        public Builder parameters(final com.aliyun.ros.cdk.core.IResolvable parameters) {
            this.props.parameters(parameters);
            return this;
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
         * <p>
         * @return {@code this}
         * @param parameters Property parameters: The key-value pairs of custom parameters passed in when the command contains custom parameters. This parameter is required.
         */
        public Builder parameters(final java.util.Map<java.lang.String, ? extends java.lang.Object> parameters) {
            this.props.parameters(parameters);
            return this;
        }

        /**
         * Property sync: Whether to run the command synchronously.
         * <p>
         * @return {@code this}
         * @param sync Property sync: Whether to run the command synchronously. This parameter is required.
         */
        public Builder sync(final java.lang.Boolean sync) {
            this.props.sync(sync);
            return this;
        }
        /**
         * Property sync: Whether to run the command synchronously.
         * <p>
         * @return {@code this}
         * @param sync Property sync: Whether to run the command synchronously. This parameter is required.
         */
        public Builder sync(final com.aliyun.ros.cdk.core.IResolvable sync) {
            this.props.sync(sync);
            return this;
        }

        /**
         * Property timeout: The timeout period for command execution.
         * <p>
         * Unit: seconds. Valid values: 10 to 86400. Default value: 60.
         * <p>
         * @return {@code this}
         * @param timeout Property timeout: The timeout period for command execution. This parameter is required.
         */
        public Builder timeout(final java.lang.Number timeout) {
            this.props.timeout(timeout);
            return this;
        }
        /**
         * Property timeout: The timeout period for command execution.
         * <p>
         * Unit: seconds. Valid values: 10 to 86400. Default value: 60.
         * <p>
         * @return {@code this}
         * @param timeout Property timeout: The timeout period for command execution. This parameter is required.
         */
        public Builder timeout(final com.aliyun.ros.cdk.core.IResolvable timeout) {
            this.props.timeout(timeout);
            return this;
        }

        /**
         * Property windowsPasswordName: The name of the password to use to run the command on Windows instances.
         * <p>
         * The name can be up to 255 characters in length.
         * If you do not want to use the default System user to run the command on Windows instances, specify both <strong>WindowsPasswordName</strong> and <strong>WorkingUser</strong>. To mitigate the risk of password leaks, the password is stored in plaintext in Operation Orchestration Service (OOS) Parameter Store, and only the name of the password is passed in by using WindowsPasswordName.
         * <p>
         * @return {@code this}
         * @param windowsPasswordName Property windowsPasswordName: The name of the password to use to run the command on Windows instances. This parameter is required.
         */
        public Builder windowsPasswordName(final java.lang.String windowsPasswordName) {
            this.props.windowsPasswordName(windowsPasswordName);
            return this;
        }
        /**
         * Property windowsPasswordName: The name of the password to use to run the command on Windows instances.
         * <p>
         * The name can be up to 255 characters in length.
         * If you do not want to use the default System user to run the command on Windows instances, specify both <strong>WindowsPasswordName</strong> and <strong>WorkingUser</strong>. To mitigate the risk of password leaks, the password is stored in plaintext in Operation Orchestration Service (OOS) Parameter Store, and only the name of the password is passed in by using WindowsPasswordName.
         * <p>
         * @return {@code this}
         * @param windowsPasswordName Property windowsPasswordName: The name of the password to use to run the command on Windows instances. This parameter is required.
         */
        public Builder windowsPasswordName(final com.aliyun.ros.cdk.core.IResolvable windowsPasswordName) {
            this.props.windowsPasswordName(windowsPasswordName);
            return this;
        }

        /**
         * Property workingDir: The directory in which to run the command on the instance.
         * <p>
         * Default value:
         * Linux instances: /root
         * Windows instances: C:\ProgramData\aliyun\assist$(version)
         * <p>
         * @return {@code this}
         * @param workingDir Property workingDir: The directory in which to run the command on the instance. This parameter is required.
         */
        public Builder workingDir(final java.lang.String workingDir) {
            this.props.workingDir(workingDir);
            return this;
        }
        /**
         * Property workingDir: The directory in which to run the command on the instance.
         * <p>
         * Default value:
         * Linux instances: /root
         * Windows instances: C:\ProgramData\aliyun\assist$(version)
         * <p>
         * @return {@code this}
         * @param workingDir Property workingDir: The directory in which to run the command on the instance. This parameter is required.
         */
        public Builder workingDir(final com.aliyun.ros.cdk.core.IResolvable workingDir) {
            this.props.workingDir(workingDir);
            return this;
        }

        /**
         * Property workingUser: The user with which to run the command on the instance.
         * <p>
         * Default value: 'root' for Linux instances, 'system' for Windows instances. You can specify other existing users to run the command to reduce security risks.
         * <p>
         * @return {@code this}
         * @param workingUser Property workingUser: The user with which to run the command on the instance. This parameter is required.
         */
        public Builder workingUser(final java.lang.String workingUser) {
            this.props.workingUser(workingUser);
            return this;
        }
        /**
         * Property workingUser: The user with which to run the command on the instance.
         * <p>
         * Default value: 'root' for Linux instances, 'system' for Windows instances. You can specify other existing users to run the command to reduce security risks.
         * <p>
         * @return {@code this}
         * @param workingUser Property workingUser: The user with which to run the command on the instance. This parameter is required.
         */
        public Builder workingUser(final com.aliyun.ros.cdk.core.IResolvable workingUser) {
            this.props.workingUser(workingUser);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.swas.RunCommand}.
         */
        @Override
        public com.aliyun.ros.cdk.swas.RunCommand build() {
            return new com.aliyun.ros.cdk.swas.RunCommand(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
