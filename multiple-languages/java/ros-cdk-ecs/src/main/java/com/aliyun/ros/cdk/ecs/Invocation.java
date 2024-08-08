package com.aliyun.ros.cdk.ecs;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ECS::Invocation</code>, which is used to run a Cloud Assistant command on Elastic Compute Service (ECS) instances.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-08T09:17:09.780Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.Invocation")
public class Invocation extends com.aliyun.ros.cdk.core.Resource {

    protected Invocation(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Invocation(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Invocation(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.InvocationProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.InvocationProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.InvocationProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.InvocationProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
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
         * Property containerId: The ID of the container.
         * <p>
         * Only 64-bit hexadecimal strings are supported. You can use container IDs that are prefixed with docker://, containerd://, or cri-o:// to specify container runtimes.
         * Take note of the following items:
         * <p>
         * <ul>
         * <li>If you specify this parameter, Cloud Assistant runs scripts in the specified container of the instance.</li>
         * <li>If you specify this parameter, make sure that the version of Cloud Assistant Agent installed on Linux instances is 2.2.3.344 or later.- If you specify this parameter, Username that is specified in a request to call this operation and WorkingDir that is specified in a request to call the CreateCommand operation do not take effect. You can run the command only in the default working directory of the container by using the default user of the container.</li>
         * <li>If you specify this parameter, only shell scripts can be run in Linux containers. You cannot add a command in the format similar to #!/usr/bin/python at the beginning of a script to specify a script interpreter.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param containerId Property containerId: The ID of the container. This parameter is required.
         */
        public Builder containerId(final java.lang.String containerId) {
            this.props.containerId(containerId);
            return this;
        }
        /**
         * Property containerId: The ID of the container.
         * <p>
         * Only 64-bit hexadecimal strings are supported. You can use container IDs that are prefixed with docker://, containerd://, or cri-o:// to specify container runtimes.
         * Take note of the following items:
         * <p>
         * <ul>
         * <li>If you specify this parameter, Cloud Assistant runs scripts in the specified container of the instance.</li>
         * <li>If you specify this parameter, make sure that the version of Cloud Assistant Agent installed on Linux instances is 2.2.3.344 or later.- If you specify this parameter, Username that is specified in a request to call this operation and WorkingDir that is specified in a request to call the CreateCommand operation do not take effect. You can run the command only in the default working directory of the container by using the default user of the container.</li>
         * <li>If you specify this parameter, only shell scripts can be run in Linux containers. You cannot add a command in the format similar to #!/usr/bin/python at the beginning of a script to specify a script interpreter.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param containerId Property containerId: The ID of the container. This parameter is required.
         */
        public Builder containerId(final com.aliyun.ros.cdk.core.IResolvable containerId) {
            this.props.containerId(containerId);
            return this;
        }

        /**
         * Property containerName: The name of the container.
         * <p>
         * Take note of the following items:
         * <p>
         * <ul>
         * <li>If you specify this parameter, Cloud Assistant runs scripts in the specified container of the instance.</li>
         * <li>If you specify this parameter, make sure that the version of Cloud Assistant Agent installed on Linux instances is 2.2.3.344 or later.</li>
         * <li>If you specify this parameter, Username that is specified in a request to call this operation and WorkingDir that is specified in a request to call the CreateCommand operation do not take effect. You can run the command only in the default working directory of the container by using the default user of the container.</li>
         * <li>If you specify this parameter, only shell scripts can be run in Linux containers. You cannot add a command in the format similar to #!/usr/bin/python at the beginning of a script to specify a script interpreter.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param containerName Property containerName: The name of the container. This parameter is required.
         */
        public Builder containerName(final java.lang.String containerName) {
            this.props.containerName(containerName);
            return this;
        }
        /**
         * Property containerName: The name of the container.
         * <p>
         * Take note of the following items:
         * <p>
         * <ul>
         * <li>If you specify this parameter, Cloud Assistant runs scripts in the specified container of the instance.</li>
         * <li>If you specify this parameter, make sure that the version of Cloud Assistant Agent installed on Linux instances is 2.2.3.344 or later.</li>
         * <li>If you specify this parameter, Username that is specified in a request to call this operation and WorkingDir that is specified in a request to call the CreateCommand operation do not take effect. You can run the command only in the default working directory of the container by using the default user of the container.</li>
         * <li>If you specify this parameter, only shell scripts can be run in Linux containers. You cannot add a command in the format similar to #!/usr/bin/python at the beginning of a script to specify a script interpreter.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param containerName Property containerName: The name of the container. This parameter is required.
         */
        public Builder containerName(final com.aliyun.ros.cdk.core.IResolvable containerName) {
            this.props.containerName(containerName);
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
         * Property repeatMode: Specifies how to run the command.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>Once</strong>: immediately runs the command.</li>
         * <li><strong>Period</strong>: runs the command on a schedule. If you set this parameter to Period, you must specify <strong>Frequency</strong>.</li>
         * <li><strong>NextRebootOnly</strong>: runs the command the next time the instance is started.</li>
         * <li>*<em>EveryReboot</em>: runs the command every time the instance is started.
         * Default value:</li>
         * <li>If you do not specify Frequency, the default value is Once.</li>
         * <li>If you specify <strong>Frequency</strong>, <strong>Period</strong> is used as the value of RepeatMode regardless of whether RepeatMode is set to Period.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param repeatMode Property repeatMode: Specifies how to run the command. This parameter is required.
         */
        public Builder repeatMode(final java.lang.String repeatMode) {
            this.props.repeatMode(repeatMode);
            return this;
        }
        /**
         * Property repeatMode: Specifies how to run the command.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>Once</strong>: immediately runs the command.</li>
         * <li><strong>Period</strong>: runs the command on a schedule. If you set this parameter to Period, you must specify <strong>Frequency</strong>.</li>
         * <li><strong>NextRebootOnly</strong>: runs the command the next time the instance is started.</li>
         * <li>*<em>EveryReboot</em>: runs the command every time the instance is started.
         * Default value:</li>
         * <li>If you do not specify Frequency, the default value is Once.</li>
         * <li>If you specify <strong>Frequency</strong>, <strong>Period</strong> is used as the value of RepeatMode regardless of whether RepeatMode is set to Period.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param repeatMode Property repeatMode: Specifies how to run the command. This parameter is required.
         */
        public Builder repeatMode(final com.aliyun.ros.cdk.core.IResolvable repeatMode) {
            this.props.repeatMode(repeatMode);
            return this;
        }

        /**
         * Property resourceGroupId: The ID of the resource group to which to assign the command executions.
         * <p>
         * The instances specified by InstanceIds must belong to the specified resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which to assign the command executions. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The ID of the resource group to which to assign the command executions.
         * <p>
         * The instances specified by InstanceIds must belong to the specified resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which to assign the command executions. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
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
         * Property tags: Tags to attach to invocation.
         * <p>
         * Max support 20 tags to add during create invocation. Each tag with two properties Key and Value, and Key is required.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags to attach to invocation. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.ecs.RosInvocation.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * Property timeout: The timeout period for the command execution.
         * <p>
         * Unit: seconds.
         * <p>
         * <ul>
         * <li>The timeout period cannot be less than 10 seconds.</li>
         * <li>A timeout error occurs if the command cannot be run because the process slows down or because a specific module or Cloud Assistant Agent does not exist. When the specified timeout period ends, the command process is forcefully terminated.</li>
         * <li>If you do not specify this parameter, the timeout period that is specified when the command is created is used.</li>
         * <li>This timeout period is applicable only to this execution. The timeout period of the command is not modified.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param timeout Property timeout: The timeout period for the command execution. This parameter is required.
         */
        public Builder timeout(final java.lang.Number timeout) {
            this.props.timeout(timeout);
            return this;
        }
        /**
         * Property timeout: The timeout period for the command execution.
         * <p>
         * Unit: seconds.
         * <p>
         * <ul>
         * <li>The timeout period cannot be less than 10 seconds.</li>
         * <li>A timeout error occurs if the command cannot be run because the process slows down or because a specific module or Cloud Assistant Agent does not exist. When the specified timeout period ends, the command process is forcefully terminated.</li>
         * <li>If you do not specify this parameter, the timeout period that is specified when the command is created is used.</li>
         * <li>This timeout period is applicable only to this execution. The timeout period of the command is not modified.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param timeout Property timeout: The timeout period for the command execution. This parameter is required.
         */
        public Builder timeout(final com.aliyun.ros.cdk.core.IResolvable timeout) {
            this.props.timeout(timeout);
            return this;
        }

        /**
         * Property username: The username to use to run the command on instances.
         * <p>
         * The username can be up to 255 characters in length.
         * <p>
         * <ul>
         * <li>For Linux instances, the root username is used by default.</li>
         * <li>For Windows instances, the System username is used by default.
         * You can also specify other usernames that already exist in the instances to run the command. For security purposes, we recommend that you run Cloud Assistant commands as a regular user.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param username Property username: The username to use to run the command on instances. This parameter is required.
         */
        public Builder username(final java.lang.String username) {
            this.props.username(username);
            return this;
        }
        /**
         * Property username: The username to use to run the command on instances.
         * <p>
         * The username can be up to 255 characters in length.
         * <p>
         * <ul>
         * <li>For Linux instances, the root username is used by default.</li>
         * <li>For Windows instances, the System username is used by default.
         * You can also specify other usernames that already exist in the instances to run the command. For security purposes, we recommend that you run Cloud Assistant commands as a regular user.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param username Property username: The username to use to run the command on instances. This parameter is required.
         */
        public Builder username(final com.aliyun.ros.cdk.core.IResolvable username) {
            this.props.username(username);
            return this;
        }

        /**
         * Property windowsPasswordName: The name of the password to use to run the command on Windows instances.
         * <p>
         * The name can be up to 255 characters in length.
         * If you do not want to use the default System user to run the command on Windows instances, specify both <strong>WindowsPasswordName</strong> and <strong>Username</strong>. To mitigate the risk of password leaks, the password is stored in plaintext in Operation Orchestration Service (OOS) Parameter Store, and only the name of the password is passed in by using WindowsPasswordName.
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
         * If you do not want to use the default System user to run the command on Windows instances, specify both <strong>WindowsPasswordName</strong> and <strong>Username</strong>. To mitigate the risk of password leaks, the password is stored in plaintext in Operation Orchestration Service (OOS) Parameter Store, and only the name of the password is passed in by using WindowsPasswordName.
         * <p>
         * @return {@code this}
         * @param windowsPasswordName Property windowsPasswordName: The name of the password to use to run the command on Windows instances. This parameter is required.
         */
        public Builder windowsPasswordName(final com.aliyun.ros.cdk.core.IResolvable windowsPasswordName) {
            this.props.windowsPasswordName(windowsPasswordName);
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
