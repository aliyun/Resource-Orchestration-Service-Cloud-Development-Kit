package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a <code>RosRunCommand</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-runcommand
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-12-26T06:30:15.492Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RosRunCommandProps")
@software.amazon.jsii.Jsii.Proxy(RosRunCommandProps.Jsii$Proxy.class)
public interface RosRunCommandProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCommandContent();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceIds();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getType();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getContainerId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getContainerName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getContentEncoding() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableParameter() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFrequency() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getKeepCommand() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getParameters() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRepeatMode() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRunAgainOn() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSync() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ecs.RosRunCommand.TagsProperty> getTags() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTimeout() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUsername() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getWindowsPasswordName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getWorkingDir() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosRunCommandProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosRunCommandProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosRunCommandProps> {
        java.lang.Object commandContent;
        java.lang.Object instanceIds;
        java.lang.Object type;
        java.lang.Object containerId;
        java.lang.Object containerName;
        java.lang.Object contentEncoding;
        java.lang.Object description;
        java.lang.Object enableParameter;
        java.lang.Object frequency;
        java.lang.Object keepCommand;
        java.lang.Object name;
        java.lang.Object parameters;
        java.lang.Object repeatMode;
        java.lang.Object resourceGroupId;
        java.lang.Object runAgainOn;
        java.lang.Object sync;
        java.util.List<com.aliyun.ros.cdk.ecs.RosRunCommand.TagsProperty> tags;
        java.lang.Object timeout;
        java.lang.Object username;
        java.lang.Object windowsPasswordName;
        java.lang.Object workingDir;

        /**
         * Sets the value of {@link RosRunCommandProps#getCommandContent}
         * @param commandContent the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder commandContent(java.lang.String commandContent) {
            this.commandContent = commandContent;
            return this;
        }

        /**
         * Sets the value of {@link RosRunCommandProps#getCommandContent}
         * @param commandContent the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder commandContent(com.aliyun.ros.cdk.core.IResolvable commandContent) {
            this.commandContent = commandContent;
            return this;
        }

        /**
         * Sets the value of {@link RosRunCommandProps#getInstanceIds}
         * @param instanceIds the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceIds(com.aliyun.ros.cdk.core.IResolvable instanceIds) {
            this.instanceIds = instanceIds;
            return this;
        }

        /**
         * Sets the value of {@link RosRunCommandProps#getInstanceIds}
         * @param instanceIds the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceIds(java.util.List<? extends java.lang.Object> instanceIds) {
            this.instanceIds = instanceIds;
            return this;
        }

        /**
         * Sets the value of {@link RosRunCommandProps#getType}
         * @param type the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder type(java.lang.String type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link RosRunCommandProps#getType}
         * @param type the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link RosRunCommandProps#getContainerId}
         * @param containerId the value to be set.
         * @return {@code this}
         */
        public Builder containerId(java.lang.String containerId) {
            this.containerId = containerId;
            return this;
        }

        /**
         * Sets the value of {@link RosRunCommandProps#getContainerId}
         * @param containerId the value to be set.
         * @return {@code this}
         */
        public Builder containerId(com.aliyun.ros.cdk.core.IResolvable containerId) {
            this.containerId = containerId;
            return this;
        }

        /**
         * Sets the value of {@link RosRunCommandProps#getContainerName}
         * @param containerName the value to be set.
         * @return {@code this}
         */
        public Builder containerName(java.lang.String containerName) {
            this.containerName = containerName;
            return this;
        }

        /**
         * Sets the value of {@link RosRunCommandProps#getContainerName}
         * @param containerName the value to be set.
         * @return {@code this}
         */
        public Builder containerName(com.aliyun.ros.cdk.core.IResolvable containerName) {
            this.containerName = containerName;
            return this;
        }

        /**
         * Sets the value of {@link RosRunCommandProps#getContentEncoding}
         * @param contentEncoding the value to be set.
         * @return {@code this}
         */
        public Builder contentEncoding(java.lang.String contentEncoding) {
            this.contentEncoding = contentEncoding;
            return this;
        }

        /**
         * Sets the value of {@link RosRunCommandProps#getContentEncoding}
         * @param contentEncoding the value to be set.
         * @return {@code this}
         */
        public Builder contentEncoding(com.aliyun.ros.cdk.core.IResolvable contentEncoding) {
            this.contentEncoding = contentEncoding;
            return this;
        }

        /**
         * Sets the value of {@link RosRunCommandProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosRunCommandProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosRunCommandProps#getEnableParameter}
         * @param enableParameter the value to be set.
         * @return {@code this}
         */
        public Builder enableParameter(java.lang.Boolean enableParameter) {
            this.enableParameter = enableParameter;
            return this;
        }

        /**
         * Sets the value of {@link RosRunCommandProps#getEnableParameter}
         * @param enableParameter the value to be set.
         * @return {@code this}
         */
        public Builder enableParameter(com.aliyun.ros.cdk.core.IResolvable enableParameter) {
            this.enableParameter = enableParameter;
            return this;
        }

        /**
         * Sets the value of {@link RosRunCommandProps#getFrequency}
         * @param frequency the value to be set.
         * @return {@code this}
         */
        public Builder frequency(java.lang.String frequency) {
            this.frequency = frequency;
            return this;
        }

        /**
         * Sets the value of {@link RosRunCommandProps#getFrequency}
         * @param frequency the value to be set.
         * @return {@code this}
         */
        public Builder frequency(com.aliyun.ros.cdk.core.IResolvable frequency) {
            this.frequency = frequency;
            return this;
        }

        /**
         * Sets the value of {@link RosRunCommandProps#getKeepCommand}
         * @param keepCommand the value to be set.
         * @return {@code this}
         */
        public Builder keepCommand(java.lang.Boolean keepCommand) {
            this.keepCommand = keepCommand;
            return this;
        }

        /**
         * Sets the value of {@link RosRunCommandProps#getKeepCommand}
         * @param keepCommand the value to be set.
         * @return {@code this}
         */
        public Builder keepCommand(com.aliyun.ros.cdk.core.IResolvable keepCommand) {
            this.keepCommand = keepCommand;
            return this;
        }

        /**
         * Sets the value of {@link RosRunCommandProps#getName}
         * @param name the value to be set.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosRunCommandProps#getName}
         * @param name the value to be set.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosRunCommandProps#getParameters}
         * @param parameters the value to be set.
         * @return {@code this}
         */
        public Builder parameters(com.aliyun.ros.cdk.core.IResolvable parameters) {
            this.parameters = parameters;
            return this;
        }

        /**
         * Sets the value of {@link RosRunCommandProps#getParameters}
         * @param parameters the value to be set.
         * @return {@code this}
         */
        public Builder parameters(java.util.Map<java.lang.String, ? extends java.lang.Object> parameters) {
            this.parameters = parameters;
            return this;
        }

        /**
         * Sets the value of {@link RosRunCommandProps#getRepeatMode}
         * @param repeatMode the value to be set.
         * @return {@code this}
         */
        public Builder repeatMode(java.lang.String repeatMode) {
            this.repeatMode = repeatMode;
            return this;
        }

        /**
         * Sets the value of {@link RosRunCommandProps#getRepeatMode}
         * @param repeatMode the value to be set.
         * @return {@code this}
         */
        public Builder repeatMode(com.aliyun.ros.cdk.core.IResolvable repeatMode) {
            this.repeatMode = repeatMode;
            return this;
        }

        /**
         * Sets the value of {@link RosRunCommandProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosRunCommandProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosRunCommandProps#getRunAgainOn}
         * @param runAgainOn the value to be set.
         * @return {@code this}
         */
        public Builder runAgainOn(com.aliyun.ros.cdk.core.IResolvable runAgainOn) {
            this.runAgainOn = runAgainOn;
            return this;
        }

        /**
         * Sets the value of {@link RosRunCommandProps#getRunAgainOn}
         * @param runAgainOn the value to be set.
         * @return {@code this}
         */
        public Builder runAgainOn(java.util.List<? extends java.lang.Object> runAgainOn) {
            this.runAgainOn = runAgainOn;
            return this;
        }

        /**
         * Sets the value of {@link RosRunCommandProps#getSync}
         * @param sync the value to be set.
         * @return {@code this}
         */
        public Builder sync(java.lang.Boolean sync) {
            this.sync = sync;
            return this;
        }

        /**
         * Sets the value of {@link RosRunCommandProps#getSync}
         * @param sync the value to be set.
         * @return {@code this}
         */
        public Builder sync(com.aliyun.ros.cdk.core.IResolvable sync) {
            this.sync = sync;
            return this;
        }

        /**
         * Sets the value of {@link RosRunCommandProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.ecs.RosRunCommand.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.RosRunCommand.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link RosRunCommandProps#getTimeout}
         * @param timeout the value to be set.
         * @return {@code this}
         */
        public Builder timeout(java.lang.Number timeout) {
            this.timeout = timeout;
            return this;
        }

        /**
         * Sets the value of {@link RosRunCommandProps#getTimeout}
         * @param timeout the value to be set.
         * @return {@code this}
         */
        public Builder timeout(com.aliyun.ros.cdk.core.IResolvable timeout) {
            this.timeout = timeout;
            return this;
        }

        /**
         * Sets the value of {@link RosRunCommandProps#getUsername}
         * @param username the value to be set.
         * @return {@code this}
         */
        public Builder username(java.lang.String username) {
            this.username = username;
            return this;
        }

        /**
         * Sets the value of {@link RosRunCommandProps#getUsername}
         * @param username the value to be set.
         * @return {@code this}
         */
        public Builder username(com.aliyun.ros.cdk.core.IResolvable username) {
            this.username = username;
            return this;
        }

        /**
         * Sets the value of {@link RosRunCommandProps#getWindowsPasswordName}
         * @param windowsPasswordName the value to be set.
         * @return {@code this}
         */
        public Builder windowsPasswordName(java.lang.String windowsPasswordName) {
            this.windowsPasswordName = windowsPasswordName;
            return this;
        }

        /**
         * Sets the value of {@link RosRunCommandProps#getWindowsPasswordName}
         * @param windowsPasswordName the value to be set.
         * @return {@code this}
         */
        public Builder windowsPasswordName(com.aliyun.ros.cdk.core.IResolvable windowsPasswordName) {
            this.windowsPasswordName = windowsPasswordName;
            return this;
        }

        /**
         * Sets the value of {@link RosRunCommandProps#getWorkingDir}
         * @param workingDir the value to be set.
         * @return {@code this}
         */
        public Builder workingDir(java.lang.String workingDir) {
            this.workingDir = workingDir;
            return this;
        }

        /**
         * Sets the value of {@link RosRunCommandProps#getWorkingDir}
         * @param workingDir the value to be set.
         * @return {@code this}
         */
        public Builder workingDir(com.aliyun.ros.cdk.core.IResolvable workingDir) {
            this.workingDir = workingDir;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosRunCommandProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosRunCommandProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosRunCommandProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosRunCommandProps {
        private final java.lang.Object commandContent;
        private final java.lang.Object instanceIds;
        private final java.lang.Object type;
        private final java.lang.Object containerId;
        private final java.lang.Object containerName;
        private final java.lang.Object contentEncoding;
        private final java.lang.Object description;
        private final java.lang.Object enableParameter;
        private final java.lang.Object frequency;
        private final java.lang.Object keepCommand;
        private final java.lang.Object name;
        private final java.lang.Object parameters;
        private final java.lang.Object repeatMode;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object runAgainOn;
        private final java.lang.Object sync;
        private final java.util.List<com.aliyun.ros.cdk.ecs.RosRunCommand.TagsProperty> tags;
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
            this.commandContent = software.amazon.jsii.Kernel.get(this, "commandContent", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceIds = software.amazon.jsii.Kernel.get(this, "instanceIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.containerId = software.amazon.jsii.Kernel.get(this, "containerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.containerName = software.amazon.jsii.Kernel.get(this, "containerName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.contentEncoding = software.amazon.jsii.Kernel.get(this, "contentEncoding", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enableParameter = software.amazon.jsii.Kernel.get(this, "enableParameter", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.frequency = software.amazon.jsii.Kernel.get(this, "frequency", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.keepCommand = software.amazon.jsii.Kernel.get(this, "keepCommand", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.parameters = software.amazon.jsii.Kernel.get(this, "parameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.repeatMode = software.amazon.jsii.Kernel.get(this, "repeatMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.runAgainOn = software.amazon.jsii.Kernel.get(this, "runAgainOn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sync = software.amazon.jsii.Kernel.get(this, "sync", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.RosRunCommand.TagsProperty.class)));
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
            this.commandContent = java.util.Objects.requireNonNull(builder.commandContent, "commandContent is required");
            this.instanceIds = java.util.Objects.requireNonNull(builder.instanceIds, "instanceIds is required");
            this.type = java.util.Objects.requireNonNull(builder.type, "type is required");
            this.containerId = builder.containerId;
            this.containerName = builder.containerName;
            this.contentEncoding = builder.contentEncoding;
            this.description = builder.description;
            this.enableParameter = builder.enableParameter;
            this.frequency = builder.frequency;
            this.keepCommand = builder.keepCommand;
            this.name = builder.name;
            this.parameters = builder.parameters;
            this.repeatMode = builder.repeatMode;
            this.resourceGroupId = builder.resourceGroupId;
            this.runAgainOn = builder.runAgainOn;
            this.sync = builder.sync;
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.RosRunCommand.TagsProperty>)builder.tags;
            this.timeout = builder.timeout;
            this.username = builder.username;
            this.windowsPasswordName = builder.windowsPasswordName;
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
        public final java.lang.Object getRepeatMode() {
            return this.repeatMode;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getRunAgainOn() {
            return this.runAgainOn;
        }

        @Override
        public final java.lang.Object getSync() {
            return this.sync;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.ecs.RosRunCommand.TagsProperty> getTags() {
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

            data.set("commandContent", om.valueToTree(this.getCommandContent()));
            data.set("instanceIds", om.valueToTree(this.getInstanceIds()));
            data.set("type", om.valueToTree(this.getType()));
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
            if (this.getRepeatMode() != null) {
                data.set("repeatMode", om.valueToTree(this.getRepeatMode()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getRunAgainOn() != null) {
                data.set("runAgainOn", om.valueToTree(this.getRunAgainOn()));
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.RosRunCommandProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosRunCommandProps.Jsii$Proxy that = (RosRunCommandProps.Jsii$Proxy) o;

            if (!commandContent.equals(that.commandContent)) return false;
            if (!instanceIds.equals(that.instanceIds)) return false;
            if (!type.equals(that.type)) return false;
            if (this.containerId != null ? !this.containerId.equals(that.containerId) : that.containerId != null) return false;
            if (this.containerName != null ? !this.containerName.equals(that.containerName) : that.containerName != null) return false;
            if (this.contentEncoding != null ? !this.contentEncoding.equals(that.contentEncoding) : that.contentEncoding != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.enableParameter != null ? !this.enableParameter.equals(that.enableParameter) : that.enableParameter != null) return false;
            if (this.frequency != null ? !this.frequency.equals(that.frequency) : that.frequency != null) return false;
            if (this.keepCommand != null ? !this.keepCommand.equals(that.keepCommand) : that.keepCommand != null) return false;
            if (this.name != null ? !this.name.equals(that.name) : that.name != null) return false;
            if (this.parameters != null ? !this.parameters.equals(that.parameters) : that.parameters != null) return false;
            if (this.repeatMode != null ? !this.repeatMode.equals(that.repeatMode) : that.repeatMode != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.runAgainOn != null ? !this.runAgainOn.equals(that.runAgainOn) : that.runAgainOn != null) return false;
            if (this.sync != null ? !this.sync.equals(that.sync) : that.sync != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            if (this.timeout != null ? !this.timeout.equals(that.timeout) : that.timeout != null) return false;
            if (this.username != null ? !this.username.equals(that.username) : that.username != null) return false;
            if (this.windowsPasswordName != null ? !this.windowsPasswordName.equals(that.windowsPasswordName) : that.windowsPasswordName != null) return false;
            return this.workingDir != null ? this.workingDir.equals(that.workingDir) : that.workingDir == null;
        }

        @Override
        public final int hashCode() {
            int result = this.commandContent.hashCode();
            result = 31 * result + (this.instanceIds.hashCode());
            result = 31 * result + (this.type.hashCode());
            result = 31 * result + (this.containerId != null ? this.containerId.hashCode() : 0);
            result = 31 * result + (this.containerName != null ? this.containerName.hashCode() : 0);
            result = 31 * result + (this.contentEncoding != null ? this.contentEncoding.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.enableParameter != null ? this.enableParameter.hashCode() : 0);
            result = 31 * result + (this.frequency != null ? this.frequency.hashCode() : 0);
            result = 31 * result + (this.keepCommand != null ? this.keepCommand.hashCode() : 0);
            result = 31 * result + (this.name != null ? this.name.hashCode() : 0);
            result = 31 * result + (this.parameters != null ? this.parameters.hashCode() : 0);
            result = 31 * result + (this.repeatMode != null ? this.repeatMode.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.runAgainOn != null ? this.runAgainOn.hashCode() : 0);
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
