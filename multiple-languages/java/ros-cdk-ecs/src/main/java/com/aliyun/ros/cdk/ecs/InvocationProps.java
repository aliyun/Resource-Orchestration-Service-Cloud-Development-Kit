package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a <code>Invocation</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-invocation
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-04-09T06:05:32.128Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.InvocationProps")
@software.amazon.jsii.Jsii.Proxy(InvocationProps.Jsii$Proxy.class)
public interface InvocationProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property instanceIds: The instance id list.
     * <p>
     * Instances status must be running.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceIds();

    /**
     * Property commandId: The id of command.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCommandId() {
        return null;
    }

    /**
     * Property commandName: The name of command.
     * <p>
     * Only system commands whose provide is AlibabaCloud are supported
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCommandName() {
        return null;
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
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getContainerId() {
        return null;
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
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getContainerName() {
        return null;
    }

    /**
     * Property frequency: The frequency of timing execution (the shortest frequency is performed every 1 minute).
     * <p>
     * It iss mandatory when Timing is True.The value rule follows the rules of the cron expression.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFrequency() {
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
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRepeatMode() {
        return null;
    }

    /**
     * Property resourceGroupId: The ID of the resource group to which to assign the command executions.
     * <p>
     * The instances specified by InstanceIds must belong to the specified resource group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property sync: Whether to invoke synchronously.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSync() {
        return null;
    }

    /**
     * Property tags: Tags to attach to invocation.
     * <p>
     * Max support 20 tags to add during create invocation. Each tag with two properties Key and Value, and Key is required.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ecs.RosInvocation.TagsProperty> getTags() {
        return null;
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
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTimeout() {
        return null;
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
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUsername() {
        return null;
    }

    /**
     * Property windowsPasswordName: The name of the password to use to run the command on Windows instances.
     * <p>
     * The name can be up to 255 characters in length.
     * If you do not want to use the default System user to run the command on Windows instances, specify both <strong>WindowsPasswordName</strong> and <strong>Username</strong>. To mitigate the risk of password leaks, the password is stored in plaintext in Operation Orchestration Service (OOS) Parameter Store, and only the name of the password is passed in by using WindowsPasswordName.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getWindowsPasswordName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link InvocationProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link InvocationProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<InvocationProps> {
        java.lang.Object instanceIds;
        java.lang.Object commandId;
        java.lang.Object commandName;
        java.lang.Object containerId;
        java.lang.Object containerName;
        java.lang.Object frequency;
        java.lang.Object parameters;
        java.lang.Object repeatMode;
        java.lang.Object resourceGroupId;
        java.lang.Object sync;
        java.util.List<com.aliyun.ros.cdk.ecs.RosInvocation.TagsProperty> tags;
        java.lang.Object timeout;
        java.lang.Object username;
        java.lang.Object windowsPasswordName;

        /**
         * Sets the value of {@link InvocationProps#getInstanceIds}
         * @param instanceIds Property instanceIds: The instance id list. This parameter is required.
         *                    Instances status must be running.
         * @return {@code this}
         */
        public Builder instanceIds(java.util.List<? extends java.lang.Object> instanceIds) {
            this.instanceIds = instanceIds;
            return this;
        }

        /**
         * Sets the value of {@link InvocationProps#getInstanceIds}
         * @param instanceIds Property instanceIds: The instance id list. This parameter is required.
         *                    Instances status must be running.
         * @return {@code this}
         */
        public Builder instanceIds(com.aliyun.ros.cdk.core.IResolvable instanceIds) {
            this.instanceIds = instanceIds;
            return this;
        }

        /**
         * Sets the value of {@link InvocationProps#getCommandId}
         * @param commandId Property commandId: The id of command.
         * @return {@code this}
         */
        public Builder commandId(java.lang.String commandId) {
            this.commandId = commandId;
            return this;
        }

        /**
         * Sets the value of {@link InvocationProps#getCommandId}
         * @param commandId Property commandId: The id of command.
         * @return {@code this}
         */
        public Builder commandId(com.aliyun.ros.cdk.core.IResolvable commandId) {
            this.commandId = commandId;
            return this;
        }

        /**
         * Sets the value of {@link InvocationProps#getCommandName}
         * @param commandName Property commandName: The name of command.
         *                    Only system commands whose provide is AlibabaCloud are supported
         * @return {@code this}
         */
        public Builder commandName(java.lang.String commandName) {
            this.commandName = commandName;
            return this;
        }

        /**
         * Sets the value of {@link InvocationProps#getCommandName}
         * @param commandName Property commandName: The name of command.
         *                    Only system commands whose provide is AlibabaCloud are supported
         * @return {@code this}
         */
        public Builder commandName(com.aliyun.ros.cdk.core.IResolvable commandName) {
            this.commandName = commandName;
            return this;
        }

        /**
         * Sets the value of {@link InvocationProps#getContainerId}
         * @param containerId Property containerId: The ID of the container.
         *                    Only 64-bit hexadecimal strings are supported. You can use container IDs that are prefixed with docker://, containerd://, or cri-o:// to specify container runtimes.
         *                    Take note of the following items:
         *                    <p>
         *                    <ul>
         *                    <li>If you specify this parameter, Cloud Assistant runs scripts in the specified container of the instance.</li>
         *                    <li>If you specify this parameter, make sure that the version of Cloud Assistant Agent installed on Linux instances is 2.2.3.344 or later.- If you specify this parameter, Username that is specified in a request to call this operation and WorkingDir that is specified in a request to call the CreateCommand operation do not take effect. You can run the command only in the default working directory of the container by using the default user of the container.</li>
         *                    <li>If you specify this parameter, only shell scripts can be run in Linux containers. You cannot add a command in the format similar to #!/usr/bin/python at the beginning of a script to specify a script interpreter.</li>
         *                    </ul>
         * @return {@code this}
         */
        public Builder containerId(java.lang.String containerId) {
            this.containerId = containerId;
            return this;
        }

        /**
         * Sets the value of {@link InvocationProps#getContainerId}
         * @param containerId Property containerId: The ID of the container.
         *                    Only 64-bit hexadecimal strings are supported. You can use container IDs that are prefixed with docker://, containerd://, or cri-o:// to specify container runtimes.
         *                    Take note of the following items:
         *                    <p>
         *                    <ul>
         *                    <li>If you specify this parameter, Cloud Assistant runs scripts in the specified container of the instance.</li>
         *                    <li>If you specify this parameter, make sure that the version of Cloud Assistant Agent installed on Linux instances is 2.2.3.344 or later.- If you specify this parameter, Username that is specified in a request to call this operation and WorkingDir that is specified in a request to call the CreateCommand operation do not take effect. You can run the command only in the default working directory of the container by using the default user of the container.</li>
         *                    <li>If you specify this parameter, only shell scripts can be run in Linux containers. You cannot add a command in the format similar to #!/usr/bin/python at the beginning of a script to specify a script interpreter.</li>
         *                    </ul>
         * @return {@code this}
         */
        public Builder containerId(com.aliyun.ros.cdk.core.IResolvable containerId) {
            this.containerId = containerId;
            return this;
        }

        /**
         * Sets the value of {@link InvocationProps#getContainerName}
         * @param containerName Property containerName: The name of the container.
         *                      Take note of the following items:
         *                      <p>
         *                      <ul>
         *                      <li>If you specify this parameter, Cloud Assistant runs scripts in the specified container of the instance.</li>
         *                      <li>If you specify this parameter, make sure that the version of Cloud Assistant Agent installed on Linux instances is 2.2.3.344 or later.</li>
         *                      <li>If you specify this parameter, Username that is specified in a request to call this operation and WorkingDir that is specified in a request to call the CreateCommand operation do not take effect. You can run the command only in the default working directory of the container by using the default user of the container.</li>
         *                      <li>If you specify this parameter, only shell scripts can be run in Linux containers. You cannot add a command in the format similar to #!/usr/bin/python at the beginning of a script to specify a script interpreter.</li>
         *                      </ul>
         * @return {@code this}
         */
        public Builder containerName(java.lang.String containerName) {
            this.containerName = containerName;
            return this;
        }

        /**
         * Sets the value of {@link InvocationProps#getContainerName}
         * @param containerName Property containerName: The name of the container.
         *                      Take note of the following items:
         *                      <p>
         *                      <ul>
         *                      <li>If you specify this parameter, Cloud Assistant runs scripts in the specified container of the instance.</li>
         *                      <li>If you specify this parameter, make sure that the version of Cloud Assistant Agent installed on Linux instances is 2.2.3.344 or later.</li>
         *                      <li>If you specify this parameter, Username that is specified in a request to call this operation and WorkingDir that is specified in a request to call the CreateCommand operation do not take effect. You can run the command only in the default working directory of the container by using the default user of the container.</li>
         *                      <li>If you specify this parameter, only shell scripts can be run in Linux containers. You cannot add a command in the format similar to #!/usr/bin/python at the beginning of a script to specify a script interpreter.</li>
         *                      </ul>
         * @return {@code this}
         */
        public Builder containerName(com.aliyun.ros.cdk.core.IResolvable containerName) {
            this.containerName = containerName;
            return this;
        }

        /**
         * Sets the value of {@link InvocationProps#getFrequency}
         * @param frequency Property frequency: The frequency of timing execution (the shortest frequency is performed every 1 minute).
         *                  It iss mandatory when Timing is True.The value rule follows the rules of the cron expression.
         * @return {@code this}
         */
        public Builder frequency(java.lang.String frequency) {
            this.frequency = frequency;
            return this;
        }

        /**
         * Sets the value of {@link InvocationProps#getFrequency}
         * @param frequency Property frequency: The frequency of timing execution (the shortest frequency is performed every 1 minute).
         *                  It iss mandatory when Timing is True.The value rule follows the rules of the cron expression.
         * @return {@code this}
         */
        public Builder frequency(com.aliyun.ros.cdk.core.IResolvable frequency) {
            this.frequency = frequency;
            return this;
        }

        /**
         * Sets the value of {@link InvocationProps#getParameters}
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
         * Sets the value of {@link InvocationProps#getParameters}
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
         * Sets the value of {@link InvocationProps#getRepeatMode}
         * @param repeatMode Property repeatMode: Specifies how to run the command.
         *                   Valid values:
         *                   <p>
         *                   <ul>
         *                   <li><strong>Once</strong>: immediately runs the command.</li>
         *                   <li><strong>Period</strong>: runs the command on a schedule. If you set this parameter to Period, you must specify <strong>Frequency</strong>.</li>
         *                   <li><strong>NextRebootOnly</strong>: runs the command the next time the instance is started.</li>
         *                   <li>*<em>EveryReboot</em>: runs the command every time the instance is started.
         *                   Default value:</li>
         *                   <li>If you do not specify Frequency, the default value is Once.</li>
         *                   <li>If you specify <strong>Frequency</strong>, <strong>Period</strong> is used as the value of RepeatMode regardless of whether RepeatMode is set to Period.</li>
         *                   </ul>
         * @return {@code this}
         */
        public Builder repeatMode(java.lang.String repeatMode) {
            this.repeatMode = repeatMode;
            return this;
        }

        /**
         * Sets the value of {@link InvocationProps#getRepeatMode}
         * @param repeatMode Property repeatMode: Specifies how to run the command.
         *                   Valid values:
         *                   <p>
         *                   <ul>
         *                   <li><strong>Once</strong>: immediately runs the command.</li>
         *                   <li><strong>Period</strong>: runs the command on a schedule. If you set this parameter to Period, you must specify <strong>Frequency</strong>.</li>
         *                   <li><strong>NextRebootOnly</strong>: runs the command the next time the instance is started.</li>
         *                   <li>*<em>EveryReboot</em>: runs the command every time the instance is started.
         *                   Default value:</li>
         *                   <li>If you do not specify Frequency, the default value is Once.</li>
         *                   <li>If you specify <strong>Frequency</strong>, <strong>Period</strong> is used as the value of RepeatMode regardless of whether RepeatMode is set to Period.</li>
         *                   </ul>
         * @return {@code this}
         */
        public Builder repeatMode(com.aliyun.ros.cdk.core.IResolvable repeatMode) {
            this.repeatMode = repeatMode;
            return this;
        }

        /**
         * Sets the value of {@link InvocationProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which to assign the command executions.
         *                        The instances specified by InstanceIds must belong to the specified resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link InvocationProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which to assign the command executions.
         *                        The instances specified by InstanceIds must belong to the specified resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link InvocationProps#getSync}
         * @param sync Property sync: Whether to invoke synchronously.
         * @return {@code this}
         */
        public Builder sync(java.lang.Boolean sync) {
            this.sync = sync;
            return this;
        }

        /**
         * Sets the value of {@link InvocationProps#getSync}
         * @param sync Property sync: Whether to invoke synchronously.
         * @return {@code this}
         */
        public Builder sync(com.aliyun.ros.cdk.core.IResolvable sync) {
            this.sync = sync;
            return this;
        }

        /**
         * Sets the value of {@link InvocationProps#getTags}
         * @param tags Property tags: Tags to attach to invocation.
         *             Max support 20 tags to add during create invocation. Each tag with two properties Key and Value, and Key is required.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.ecs.RosInvocation.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.RosInvocation.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link InvocationProps#getTimeout}
         * @param timeout Property timeout: The timeout period for the command execution.
         *                Unit: seconds.
         *                <p>
         *                <ul>
         *                <li>The timeout period cannot be less than 10 seconds.</li>
         *                <li>A timeout error occurs if the command cannot be run because the process slows down or because a specific module or Cloud Assistant Agent does not exist. When the specified timeout period ends, the command process is forcefully terminated.</li>
         *                <li>If you do not specify this parameter, the timeout period that is specified when the command is created is used.</li>
         *                <li>This timeout period is applicable only to this execution. The timeout period of the command is not modified.</li>
         *                </ul>
         * @return {@code this}
         */
        public Builder timeout(java.lang.Number timeout) {
            this.timeout = timeout;
            return this;
        }

        /**
         * Sets the value of {@link InvocationProps#getTimeout}
         * @param timeout Property timeout: The timeout period for the command execution.
         *                Unit: seconds.
         *                <p>
         *                <ul>
         *                <li>The timeout period cannot be less than 10 seconds.</li>
         *                <li>A timeout error occurs if the command cannot be run because the process slows down or because a specific module or Cloud Assistant Agent does not exist. When the specified timeout period ends, the command process is forcefully terminated.</li>
         *                <li>If you do not specify this parameter, the timeout period that is specified when the command is created is used.</li>
         *                <li>This timeout period is applicable only to this execution. The timeout period of the command is not modified.</li>
         *                </ul>
         * @return {@code this}
         */
        public Builder timeout(com.aliyun.ros.cdk.core.IResolvable timeout) {
            this.timeout = timeout;
            return this;
        }

        /**
         * Sets the value of {@link InvocationProps#getUsername}
         * @param username Property username: The username to use to run the command on instances.
         *                 The username can be up to 255 characters in length.
         *                 <p>
         *                 <ul>
         *                 <li>For Linux instances, the root username is used by default.</li>
         *                 <li>For Windows instances, the System username is used by default.
         *                 You can also specify other usernames that already exist in the instances to run the command. For security purposes, we recommend that you run Cloud Assistant commands as a regular user.</li>
         *                 </ul>
         * @return {@code this}
         */
        public Builder username(java.lang.String username) {
            this.username = username;
            return this;
        }

        /**
         * Sets the value of {@link InvocationProps#getUsername}
         * @param username Property username: The username to use to run the command on instances.
         *                 The username can be up to 255 characters in length.
         *                 <p>
         *                 <ul>
         *                 <li>For Linux instances, the root username is used by default.</li>
         *                 <li>For Windows instances, the System username is used by default.
         *                 You can also specify other usernames that already exist in the instances to run the command. For security purposes, we recommend that you run Cloud Assistant commands as a regular user.</li>
         *                 </ul>
         * @return {@code this}
         */
        public Builder username(com.aliyun.ros.cdk.core.IResolvable username) {
            this.username = username;
            return this;
        }

        /**
         * Sets the value of {@link InvocationProps#getWindowsPasswordName}
         * @param windowsPasswordName Property windowsPasswordName: The name of the password to use to run the command on Windows instances.
         *                            The name can be up to 255 characters in length.
         *                            If you do not want to use the default System user to run the command on Windows instances, specify both <strong>WindowsPasswordName</strong> and <strong>Username</strong>. To mitigate the risk of password leaks, the password is stored in plaintext in Operation Orchestration Service (OOS) Parameter Store, and only the name of the password is passed in by using WindowsPasswordName.
         * @return {@code this}
         */
        public Builder windowsPasswordName(java.lang.String windowsPasswordName) {
            this.windowsPasswordName = windowsPasswordName;
            return this;
        }

        /**
         * Sets the value of {@link InvocationProps#getWindowsPasswordName}
         * @param windowsPasswordName Property windowsPasswordName: The name of the password to use to run the command on Windows instances.
         *                            The name can be up to 255 characters in length.
         *                            If you do not want to use the default System user to run the command on Windows instances, specify both <strong>WindowsPasswordName</strong> and <strong>Username</strong>. To mitigate the risk of password leaks, the password is stored in plaintext in Operation Orchestration Service (OOS) Parameter Store, and only the name of the password is passed in by using WindowsPasswordName.
         * @return {@code this}
         */
        public Builder windowsPasswordName(com.aliyun.ros.cdk.core.IResolvable windowsPasswordName) {
            this.windowsPasswordName = windowsPasswordName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link InvocationProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public InvocationProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link InvocationProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements InvocationProps {
        private final java.lang.Object instanceIds;
        private final java.lang.Object commandId;
        private final java.lang.Object commandName;
        private final java.lang.Object containerId;
        private final java.lang.Object containerName;
        private final java.lang.Object frequency;
        private final java.lang.Object parameters;
        private final java.lang.Object repeatMode;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object sync;
        private final java.util.List<com.aliyun.ros.cdk.ecs.RosInvocation.TagsProperty> tags;
        private final java.lang.Object timeout;
        private final java.lang.Object username;
        private final java.lang.Object windowsPasswordName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.instanceIds = software.amazon.jsii.Kernel.get(this, "instanceIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.commandId = software.amazon.jsii.Kernel.get(this, "commandId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.commandName = software.amazon.jsii.Kernel.get(this, "commandName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.containerId = software.amazon.jsii.Kernel.get(this, "containerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.containerName = software.amazon.jsii.Kernel.get(this, "containerName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.frequency = software.amazon.jsii.Kernel.get(this, "frequency", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.parameters = software.amazon.jsii.Kernel.get(this, "parameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.repeatMode = software.amazon.jsii.Kernel.get(this, "repeatMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sync = software.amazon.jsii.Kernel.get(this, "sync", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.RosInvocation.TagsProperty.class)));
            this.timeout = software.amazon.jsii.Kernel.get(this, "timeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.username = software.amazon.jsii.Kernel.get(this, "username", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.windowsPasswordName = software.amazon.jsii.Kernel.get(this, "windowsPasswordName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.instanceIds = java.util.Objects.requireNonNull(builder.instanceIds, "instanceIds is required");
            this.commandId = builder.commandId;
            this.commandName = builder.commandName;
            this.containerId = builder.containerId;
            this.containerName = builder.containerName;
            this.frequency = builder.frequency;
            this.parameters = builder.parameters;
            this.repeatMode = builder.repeatMode;
            this.resourceGroupId = builder.resourceGroupId;
            this.sync = builder.sync;
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.RosInvocation.TagsProperty>)builder.tags;
            this.timeout = builder.timeout;
            this.username = builder.username;
            this.windowsPasswordName = builder.windowsPasswordName;
        }

        @Override
        public final java.lang.Object getInstanceIds() {
            return this.instanceIds;
        }

        @Override
        public final java.lang.Object getCommandId() {
            return this.commandId;
        }

        @Override
        public final java.lang.Object getCommandName() {
            return this.commandName;
        }

        @Override
        public final java.lang.Object getContainerId() {
            return this.containerId;
        }

        @Override
        public final java.lang.Object getContainerName() {
            return this.containerName;
        }

        @Override
        public final java.lang.Object getFrequency() {
            return this.frequency;
        }

        @Override
        public final java.lang.Object getParameters() {
            return this.parameters;
        }

        @Override
        public final java.lang.Object getRepeatMode() {
            return this.repeatMode;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getSync() {
            return this.sync;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.ecs.RosInvocation.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.Object getTimeout() {
            return this.timeout;
        }

        @Override
        public final java.lang.Object getUsername() {
            return this.username;
        }

        @Override
        public final java.lang.Object getWindowsPasswordName() {
            return this.windowsPasswordName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("instanceIds", om.valueToTree(this.getInstanceIds()));
            if (this.getCommandId() != null) {
                data.set("commandId", om.valueToTree(this.getCommandId()));
            }
            if (this.getCommandName() != null) {
                data.set("commandName", om.valueToTree(this.getCommandName()));
            }
            if (this.getContainerId() != null) {
                data.set("containerId", om.valueToTree(this.getContainerId()));
            }
            if (this.getContainerName() != null) {
                data.set("containerName", om.valueToTree(this.getContainerName()));
            }
            if (this.getFrequency() != null) {
                data.set("frequency", om.valueToTree(this.getFrequency()));
            }
            if (this.getParameters() != null) {
                data.set("parameters", om.valueToTree(this.getParameters()));
            }
            if (this.getRepeatMode() != null) {
                data.set("repeatMode", om.valueToTree(this.getRepeatMode()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getSync() != null) {
                data.set("sync", om.valueToTree(this.getSync()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getTimeout() != null) {
                data.set("timeout", om.valueToTree(this.getTimeout()));
            }
            if (this.getUsername() != null) {
                data.set("username", om.valueToTree(this.getUsername()));
            }
            if (this.getWindowsPasswordName() != null) {
                data.set("windowsPasswordName", om.valueToTree(this.getWindowsPasswordName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.InvocationProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            InvocationProps.Jsii$Proxy that = (InvocationProps.Jsii$Proxy) o;

            if (!instanceIds.equals(that.instanceIds)) return false;
            if (this.commandId != null ? !this.commandId.equals(that.commandId) : that.commandId != null) return false;
            if (this.commandName != null ? !this.commandName.equals(that.commandName) : that.commandName != null) return false;
            if (this.containerId != null ? !this.containerId.equals(that.containerId) : that.containerId != null) return false;
            if (this.containerName != null ? !this.containerName.equals(that.containerName) : that.containerName != null) return false;
            if (this.frequency != null ? !this.frequency.equals(that.frequency) : that.frequency != null) return false;
            if (this.parameters != null ? !this.parameters.equals(that.parameters) : that.parameters != null) return false;
            if (this.repeatMode != null ? !this.repeatMode.equals(that.repeatMode) : that.repeatMode != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.sync != null ? !this.sync.equals(that.sync) : that.sync != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            if (this.timeout != null ? !this.timeout.equals(that.timeout) : that.timeout != null) return false;
            if (this.username != null ? !this.username.equals(that.username) : that.username != null) return false;
            return this.windowsPasswordName != null ? this.windowsPasswordName.equals(that.windowsPasswordName) : that.windowsPasswordName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.instanceIds.hashCode();
            result = 31 * result + (this.commandId != null ? this.commandId.hashCode() : 0);
            result = 31 * result + (this.commandName != null ? this.commandName.hashCode() : 0);
            result = 31 * result + (this.containerId != null ? this.containerId.hashCode() : 0);
            result = 31 * result + (this.containerName != null ? this.containerName.hashCode() : 0);
            result = 31 * result + (this.frequency != null ? this.frequency.hashCode() : 0);
            result = 31 * result + (this.parameters != null ? this.parameters.hashCode() : 0);
            result = 31 * result + (this.repeatMode != null ? this.repeatMode.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.sync != null ? this.sync.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.timeout != null ? this.timeout.hashCode() : 0);
            result = 31 * result + (this.username != null ? this.username.hashCode() : 0);
            result = 31 * result + (this.windowsPasswordName != null ? this.windowsPasswordName.hashCode() : 0);
            return result;
        }
    }
}
