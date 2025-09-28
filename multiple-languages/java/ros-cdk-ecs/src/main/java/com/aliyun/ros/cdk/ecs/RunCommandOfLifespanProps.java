package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a <code>RunCommandOfLifespan</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-runcommandoflifespan
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:24.531Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RunCommandOfLifespanProps")
@software.amazon.jsii.Jsii.Proxy(RunCommandOfLifespanProps.Jsii$Proxy.class)
public interface RunCommandOfLifespanProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property instanceIds: The instance id list.
     * <p>
     * Instances status must be running.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceIds();

    /**
     * Property type: The language type of the O&amp;M script.
     * <p>
     * Valid values:
     * RunBatScript: batch scripts for Windows instances
     * RunPowerShellScript: PowerShell scripts for Windows instances
     * RunShellScript: shell scripts for Linux instances
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getType();

    /**
     * Property commandContent: When this resource is created, this content will be executed.
     * <p>
     * When this parameter changes, the new content will be executed. Either CommandContent or CommandContentOnDeletion must be specified. The plaintext content or the Base64-encoded content of the script. The Base64-encoded script content cannot exceed 16 KB.
     * You can enable the custom parameter function by setting EnableParameter=true in the script content:
     * Define custom parameters in the {{}} format. Within {{}}, the spaces and line breaks before and after the name of the parameter are ignored.
     * The number of custom parameters cannot exceed 20.
     * A custom parameter name can contain only letters, digits, underscores (_), and hyphens (-). It is case insensitive.
     * Each custom parameter key cannot exceed 64 bytes.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCommandContent() {
        return null;
    }

    /**
     * Property commandContentOnDeletion: When this resource is deleted, this content will be executed.
     * <p>
     * Either CommandContent or CommandContentOnDeletion must be specified. The plaintext content or the Base64-encoded content of the script. The Base64-encoded script content cannot exceed 16 KB.
     * You can enable the custom parameter function by setting EnableParameter=true in the script content:
     * Define custom parameters in the {{}} format. Within {{}}, the spaces and line breaks before and after the name of the parameter are ignored.
     * The number of custom parameters cannot exceed 20.
     * A custom parameter name can contain only letters, digits, underscores (_), and hyphens (-). It is case insensitive.
     * Each custom parameter key cannot exceed 64 bytes.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCommandContentOnDeletion() {
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
     * Property launcher: A bootloader for script execution.
     * <p>
     * The length cannot exceed 1 KB.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLauncher() {
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
     * Property tags: Tags to attach to run_command.
     * <p>
     * Max support 20 tags to add during create run_command. Each tag with two properties Key and Value, and Key is required.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ecs.RosRunCommandOfLifespan.TagsProperty> getTags() {
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
     * @return a {@link Builder} of {@link RunCommandOfLifespanProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RunCommandOfLifespanProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RunCommandOfLifespanProps> {
        java.lang.Object instanceIds;
        java.lang.Object type;
        java.lang.Object commandContent;
        java.lang.Object commandContentOnDeletion;
        java.lang.Object containerId;
        java.lang.Object containerName;
        java.lang.Object contentEncoding;
        java.lang.Object description;
        java.lang.Object enableParameter;
        java.lang.Object launcher;
        java.lang.Object name;
        java.lang.Object parameters;
        java.lang.Object resourceGroupId;
        java.lang.Object sync;
        java.util.List<com.aliyun.ros.cdk.ecs.RosRunCommandOfLifespan.TagsProperty> tags;
        java.lang.Object timeout;
        java.lang.Object username;
        java.lang.Object windowsPasswordName;
        java.lang.Object workingDir;

        /**
         * Sets the value of {@link RunCommandOfLifespanProps#getInstanceIds}
         * @param instanceIds Property instanceIds: The instance id list. This parameter is required.
         *                    Instances status must be running.
         * @return {@code this}
         */
        public Builder instanceIds(com.aliyun.ros.cdk.core.IResolvable instanceIds) {
            this.instanceIds = instanceIds;
            return this;
        }

        /**
         * Sets the value of {@link RunCommandOfLifespanProps#getInstanceIds}
         * @param instanceIds Property instanceIds: The instance id list. This parameter is required.
         *                    Instances status must be running.
         * @return {@code this}
         */
        public Builder instanceIds(java.util.List<? extends java.lang.Object> instanceIds) {
            this.instanceIds = instanceIds;
            return this;
        }

        /**
         * Sets the value of {@link RunCommandOfLifespanProps#getType}
         * @param type Property type: The language type of the O&amp;M script. This parameter is required.
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
         * Sets the value of {@link RunCommandOfLifespanProps#getType}
         * @param type Property type: The language type of the O&amp;M script. This parameter is required.
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
         * Sets the value of {@link RunCommandOfLifespanProps#getCommandContent}
         * @param commandContent Property commandContent: When this resource is created, this content will be executed.
         *                       When this parameter changes, the new content will be executed. Either CommandContent or CommandContentOnDeletion must be specified. The plaintext content or the Base64-encoded content of the script. The Base64-encoded script content cannot exceed 16 KB.
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
         * Sets the value of {@link RunCommandOfLifespanProps#getCommandContent}
         * @param commandContent Property commandContent: When this resource is created, this content will be executed.
         *                       When this parameter changes, the new content will be executed. Either CommandContent or CommandContentOnDeletion must be specified. The plaintext content or the Base64-encoded content of the script. The Base64-encoded script content cannot exceed 16 KB.
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
         * Sets the value of {@link RunCommandOfLifespanProps#getCommandContentOnDeletion}
         * @param commandContentOnDeletion Property commandContentOnDeletion: When this resource is deleted, this content will be executed.
         *                                 Either CommandContent or CommandContentOnDeletion must be specified. The plaintext content or the Base64-encoded content of the script. The Base64-encoded script content cannot exceed 16 KB.
         *                                 You can enable the custom parameter function by setting EnableParameter=true in the script content:
         *                                 Define custom parameters in the {{}} format. Within {{}}, the spaces and line breaks before and after the name of the parameter are ignored.
         *                                 The number of custom parameters cannot exceed 20.
         *                                 A custom parameter name can contain only letters, digits, underscores (_), and hyphens (-). It is case insensitive.
         *                                 Each custom parameter key cannot exceed 64 bytes.
         * @return {@code this}
         */
        public Builder commandContentOnDeletion(java.lang.String commandContentOnDeletion) {
            this.commandContentOnDeletion = commandContentOnDeletion;
            return this;
        }

        /**
         * Sets the value of {@link RunCommandOfLifespanProps#getCommandContentOnDeletion}
         * @param commandContentOnDeletion Property commandContentOnDeletion: When this resource is deleted, this content will be executed.
         *                                 Either CommandContent or CommandContentOnDeletion must be specified. The plaintext content or the Base64-encoded content of the script. The Base64-encoded script content cannot exceed 16 KB.
         *                                 You can enable the custom parameter function by setting EnableParameter=true in the script content:
         *                                 Define custom parameters in the {{}} format. Within {{}}, the spaces and line breaks before and after the name of the parameter are ignored.
         *                                 The number of custom parameters cannot exceed 20.
         *                                 A custom parameter name can contain only letters, digits, underscores (_), and hyphens (-). It is case insensitive.
         *                                 Each custom parameter key cannot exceed 64 bytes.
         * @return {@code this}
         */
        public Builder commandContentOnDeletion(com.aliyun.ros.cdk.core.IResolvable commandContentOnDeletion) {
            this.commandContentOnDeletion = commandContentOnDeletion;
            return this;
        }

        /**
         * Sets the value of {@link RunCommandOfLifespanProps#getContainerId}
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
         * Sets the value of {@link RunCommandOfLifespanProps#getContainerId}
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
         * Sets the value of {@link RunCommandOfLifespanProps#getContainerName}
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
         * Sets the value of {@link RunCommandOfLifespanProps#getContainerName}
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
         * Sets the value of {@link RunCommandOfLifespanProps#getContentEncoding}
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
         * Sets the value of {@link RunCommandOfLifespanProps#getContentEncoding}
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
         * Sets the value of {@link RunCommandOfLifespanProps#getDescription}
         * @param description Property description: The description of the script, which supports all character sets.
         *                    It can be up to 512 characters in length.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RunCommandOfLifespanProps#getDescription}
         * @param description Property description: The description of the script, which supports all character sets.
         *                    It can be up to 512 characters in length.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RunCommandOfLifespanProps#getEnableParameter}
         * @param enableParameter Property enableParameter: Specifies whether the script contains custom parameters.
         *                        Default value: false
         * @return {@code this}
         */
        public Builder enableParameter(java.lang.Boolean enableParameter) {
            this.enableParameter = enableParameter;
            return this;
        }

        /**
         * Sets the value of {@link RunCommandOfLifespanProps#getEnableParameter}
         * @param enableParameter Property enableParameter: Specifies whether the script contains custom parameters.
         *                        Default value: false
         * @return {@code this}
         */
        public Builder enableParameter(com.aliyun.ros.cdk.core.IResolvable enableParameter) {
            this.enableParameter = enableParameter;
            return this;
        }

        /**
         * Sets the value of {@link RunCommandOfLifespanProps#getLauncher}
         * @param launcher Property launcher: A bootloader for script execution.
         *                 The length cannot exceed 1 KB.
         * @return {@code this}
         */
        public Builder launcher(java.lang.String launcher) {
            this.launcher = launcher;
            return this;
        }

        /**
         * Sets the value of {@link RunCommandOfLifespanProps#getLauncher}
         * @param launcher Property launcher: A bootloader for script execution.
         *                 The length cannot exceed 1 KB.
         * @return {@code this}
         */
        public Builder launcher(com.aliyun.ros.cdk.core.IResolvable launcher) {
            this.launcher = launcher;
            return this;
        }

        /**
         * Sets the value of {@link RunCommandOfLifespanProps#getName}
         * @param name Property name: The name of the script, which supports all character sets.
         *             It can be up to 128 characters in length.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RunCommandOfLifespanProps#getName}
         * @param name Property name: The name of the script, which supports all character sets.
         *             It can be up to 128 characters in length.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RunCommandOfLifespanProps#getParameters}
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
         * Sets the value of {@link RunCommandOfLifespanProps#getParameters}
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
         * Sets the value of {@link RunCommandOfLifespanProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which to assign the command executions.
         *                        The instances specified by InstanceIds must belong to the specified resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RunCommandOfLifespanProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which to assign the command executions.
         *                        The instances specified by InstanceIds must belong to the specified resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RunCommandOfLifespanProps#getSync}
         * @param sync Property sync: Whether to invoke synchronously.
         * @return {@code this}
         */
        public Builder sync(java.lang.Boolean sync) {
            this.sync = sync;
            return this;
        }

        /**
         * Sets the value of {@link RunCommandOfLifespanProps#getSync}
         * @param sync Property sync: Whether to invoke synchronously.
         * @return {@code this}
         */
        public Builder sync(com.aliyun.ros.cdk.core.IResolvable sync) {
            this.sync = sync;
            return this;
        }

        /**
         * Sets the value of {@link RunCommandOfLifespanProps#getTags}
         * @param tags Property tags: Tags to attach to run_command.
         *             Max support 20 tags to add during create run_command. Each tag with two properties Key and Value, and Key is required.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.ecs.RosRunCommandOfLifespan.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.RosRunCommandOfLifespan.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link RunCommandOfLifespanProps#getTimeout}
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
         * Sets the value of {@link RunCommandOfLifespanProps#getTimeout}
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
         * Sets the value of {@link RunCommandOfLifespanProps#getUsername}
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
         * Sets the value of {@link RunCommandOfLifespanProps#getUsername}
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
         * Sets the value of {@link RunCommandOfLifespanProps#getWindowsPasswordName}
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
         * Sets the value of {@link RunCommandOfLifespanProps#getWindowsPasswordName}
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
         * Sets the value of {@link RunCommandOfLifespanProps#getWorkingDir}
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
         * Sets the value of {@link RunCommandOfLifespanProps#getWorkingDir}
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
         * @return a new instance of {@link RunCommandOfLifespanProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RunCommandOfLifespanProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RunCommandOfLifespanProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RunCommandOfLifespanProps {
        private final java.lang.Object instanceIds;
        private final java.lang.Object type;
        private final java.lang.Object commandContent;
        private final java.lang.Object commandContentOnDeletion;
        private final java.lang.Object containerId;
        private final java.lang.Object containerName;
        private final java.lang.Object contentEncoding;
        private final java.lang.Object description;
        private final java.lang.Object enableParameter;
        private final java.lang.Object launcher;
        private final java.lang.Object name;
        private final java.lang.Object parameters;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object sync;
        private final java.util.List<com.aliyun.ros.cdk.ecs.RosRunCommandOfLifespan.TagsProperty> tags;
        private final java.lang.Object timeout;
        private final java.lang.Object username;
        private final java.lang.Object windowsPasswordName;
        private final java.lang.Object workingDir;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.instanceIds = software.amazon.jsii.Kernel.get(this, "instanceIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.commandContent = software.amazon.jsii.Kernel.get(this, "commandContent", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.commandContentOnDeletion = software.amazon.jsii.Kernel.get(this, "commandContentOnDeletion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.containerId = software.amazon.jsii.Kernel.get(this, "containerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.containerName = software.amazon.jsii.Kernel.get(this, "containerName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.contentEncoding = software.amazon.jsii.Kernel.get(this, "contentEncoding", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enableParameter = software.amazon.jsii.Kernel.get(this, "enableParameter", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.launcher = software.amazon.jsii.Kernel.get(this, "launcher", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.parameters = software.amazon.jsii.Kernel.get(this, "parameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sync = software.amazon.jsii.Kernel.get(this, "sync", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.RosRunCommandOfLifespan.TagsProperty.class)));
            this.timeout = software.amazon.jsii.Kernel.get(this, "timeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.username = software.amazon.jsii.Kernel.get(this, "username", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.windowsPasswordName = software.amazon.jsii.Kernel.get(this, "windowsPasswordName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.workingDir = software.amazon.jsii.Kernel.get(this, "workingDir", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.instanceIds = java.util.Objects.requireNonNull(builder.instanceIds, "instanceIds is required");
            this.type = java.util.Objects.requireNonNull(builder.type, "type is required");
            this.commandContent = builder.commandContent;
            this.commandContentOnDeletion = builder.commandContentOnDeletion;
            this.containerId = builder.containerId;
            this.containerName = builder.containerName;
            this.contentEncoding = builder.contentEncoding;
            this.description = builder.description;
            this.enableParameter = builder.enableParameter;
            this.launcher = builder.launcher;
            this.name = builder.name;
            this.parameters = builder.parameters;
            this.resourceGroupId = builder.resourceGroupId;
            this.sync = builder.sync;
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.RosRunCommandOfLifespan.TagsProperty>)builder.tags;
            this.timeout = builder.timeout;
            this.username = builder.username;
            this.windowsPasswordName = builder.windowsPasswordName;
            this.workingDir = builder.workingDir;
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
        public final java.lang.Object getCommandContent() {
            return this.commandContent;
        }

        @Override
        public final java.lang.Object getCommandContentOnDeletion() {
            return this.commandContentOnDeletion;
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
        public final java.lang.Object getLauncher() {
            return this.launcher;
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
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getSync() {
            return this.sync;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.ecs.RosRunCommandOfLifespan.TagsProperty> getTags() {
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
        public final java.lang.Object getWorkingDir() {
            return this.workingDir;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("instanceIds", om.valueToTree(this.getInstanceIds()));
            data.set("type", om.valueToTree(this.getType()));
            if (this.getCommandContent() != null) {
                data.set("commandContent", om.valueToTree(this.getCommandContent()));
            }
            if (this.getCommandContentOnDeletion() != null) {
                data.set("commandContentOnDeletion", om.valueToTree(this.getCommandContentOnDeletion()));
            }
            if (this.getContainerId() != null) {
                data.set("containerId", om.valueToTree(this.getContainerId()));
            }
            if (this.getContainerName() != null) {
                data.set("containerName", om.valueToTree(this.getContainerName()));
            }
            if (this.getContentEncoding() != null) {
                data.set("contentEncoding", om.valueToTree(this.getContentEncoding()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getEnableParameter() != null) {
                data.set("enableParameter", om.valueToTree(this.getEnableParameter()));
            }
            if (this.getLauncher() != null) {
                data.set("launcher", om.valueToTree(this.getLauncher()));
            }
            if (this.getName() != null) {
                data.set("name", om.valueToTree(this.getName()));
            }
            if (this.getParameters() != null) {
                data.set("parameters", om.valueToTree(this.getParameters()));
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
            if (this.getWorkingDir() != null) {
                data.set("workingDir", om.valueToTree(this.getWorkingDir()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.RunCommandOfLifespanProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RunCommandOfLifespanProps.Jsii$Proxy that = (RunCommandOfLifespanProps.Jsii$Proxy) o;

            if (!instanceIds.equals(that.instanceIds)) return false;
            if (!type.equals(that.type)) return false;
            if (this.commandContent != null ? !this.commandContent.equals(that.commandContent) : that.commandContent != null) return false;
            if (this.commandContentOnDeletion != null ? !this.commandContentOnDeletion.equals(that.commandContentOnDeletion) : that.commandContentOnDeletion != null) return false;
            if (this.containerId != null ? !this.containerId.equals(that.containerId) : that.containerId != null) return false;
            if (this.containerName != null ? !this.containerName.equals(that.containerName) : that.containerName != null) return false;
            if (this.contentEncoding != null ? !this.contentEncoding.equals(that.contentEncoding) : that.contentEncoding != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.enableParameter != null ? !this.enableParameter.equals(that.enableParameter) : that.enableParameter != null) return false;
            if (this.launcher != null ? !this.launcher.equals(that.launcher) : that.launcher != null) return false;
            if (this.name != null ? !this.name.equals(that.name) : that.name != null) return false;
            if (this.parameters != null ? !this.parameters.equals(that.parameters) : that.parameters != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.sync != null ? !this.sync.equals(that.sync) : that.sync != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            if (this.timeout != null ? !this.timeout.equals(that.timeout) : that.timeout != null) return false;
            if (this.username != null ? !this.username.equals(that.username) : that.username != null) return false;
            if (this.windowsPasswordName != null ? !this.windowsPasswordName.equals(that.windowsPasswordName) : that.windowsPasswordName != null) return false;
            return this.workingDir != null ? this.workingDir.equals(that.workingDir) : that.workingDir == null;
        }

        @Override
        public final int hashCode() {
            int result = this.instanceIds.hashCode();
            result = 31 * result + (this.type.hashCode());
            result = 31 * result + (this.commandContent != null ? this.commandContent.hashCode() : 0);
            result = 31 * result + (this.commandContentOnDeletion != null ? this.commandContentOnDeletion.hashCode() : 0);
            result = 31 * result + (this.containerId != null ? this.containerId.hashCode() : 0);
            result = 31 * result + (this.containerName != null ? this.containerName.hashCode() : 0);
            result = 31 * result + (this.contentEncoding != null ? this.contentEncoding.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.enableParameter != null ? this.enableParameter.hashCode() : 0);
            result = 31 * result + (this.launcher != null ? this.launcher.hashCode() : 0);
            result = 31 * result + (this.name != null ? this.name.hashCode() : 0);
            result = 31 * result + (this.parameters != null ? this.parameters.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.sync != null ? this.sync.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.timeout != null ? this.timeout.hashCode() : 0);
            result = 31 * result + (this.username != null ? this.username.hashCode() : 0);
            result = 31 * result + (this.windowsPasswordName != null ? this.windowsPasswordName.hashCode() : 0);
            result = 31 * result + (this.workingDir != null ? this.workingDir.hashCode() : 0);
            return result;
        }
    }
}
