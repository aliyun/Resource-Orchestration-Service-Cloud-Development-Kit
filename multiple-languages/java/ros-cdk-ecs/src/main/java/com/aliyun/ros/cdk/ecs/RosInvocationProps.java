package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a <code>RosInvocation</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-invocation
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-03-01T09:16:51.891Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RosInvocationProps")
@software.amazon.jsii.Jsii.Proxy(RosInvocationProps.Jsii$Proxy.class)
public interface RosInvocationProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceIds();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCommandId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCommandName() {
        return null;
    }

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
    default @org.jetbrains.annotations.Nullable java.lang.Object getFrequency() {
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
    default @org.jetbrains.annotations.Nullable java.lang.Object getSync() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ecs.RosInvocation.TagsProperty> getTags() {
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
     * @return a {@link Builder} of {@link RosInvocationProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosInvocationProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosInvocationProps> {
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
         * Sets the value of {@link RosInvocationProps#getInstanceIds}
         * @param instanceIds the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceIds(java.util.List<? extends java.lang.Object> instanceIds) {
            this.instanceIds = instanceIds;
            return this;
        }

        /**
         * Sets the value of {@link RosInvocationProps#getInstanceIds}
         * @param instanceIds the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceIds(com.aliyun.ros.cdk.core.IResolvable instanceIds) {
            this.instanceIds = instanceIds;
            return this;
        }

        /**
         * Sets the value of {@link RosInvocationProps#getCommandId}
         * @param commandId the value to be set.
         * @return {@code this}
         */
        public Builder commandId(java.lang.String commandId) {
            this.commandId = commandId;
            return this;
        }

        /**
         * Sets the value of {@link RosInvocationProps#getCommandId}
         * @param commandId the value to be set.
         * @return {@code this}
         */
        public Builder commandId(com.aliyun.ros.cdk.core.IResolvable commandId) {
            this.commandId = commandId;
            return this;
        }

        /**
         * Sets the value of {@link RosInvocationProps#getCommandName}
         * @param commandName the value to be set.
         * @return {@code this}
         */
        public Builder commandName(java.lang.String commandName) {
            this.commandName = commandName;
            return this;
        }

        /**
         * Sets the value of {@link RosInvocationProps#getCommandName}
         * @param commandName the value to be set.
         * @return {@code this}
         */
        public Builder commandName(com.aliyun.ros.cdk.core.IResolvable commandName) {
            this.commandName = commandName;
            return this;
        }

        /**
         * Sets the value of {@link RosInvocationProps#getContainerId}
         * @param containerId the value to be set.
         * @return {@code this}
         */
        public Builder containerId(java.lang.String containerId) {
            this.containerId = containerId;
            return this;
        }

        /**
         * Sets the value of {@link RosInvocationProps#getContainerId}
         * @param containerId the value to be set.
         * @return {@code this}
         */
        public Builder containerId(com.aliyun.ros.cdk.core.IResolvable containerId) {
            this.containerId = containerId;
            return this;
        }

        /**
         * Sets the value of {@link RosInvocationProps#getContainerName}
         * @param containerName the value to be set.
         * @return {@code this}
         */
        public Builder containerName(java.lang.String containerName) {
            this.containerName = containerName;
            return this;
        }

        /**
         * Sets the value of {@link RosInvocationProps#getContainerName}
         * @param containerName the value to be set.
         * @return {@code this}
         */
        public Builder containerName(com.aliyun.ros.cdk.core.IResolvable containerName) {
            this.containerName = containerName;
            return this;
        }

        /**
         * Sets the value of {@link RosInvocationProps#getFrequency}
         * @param frequency the value to be set.
         * @return {@code this}
         */
        public Builder frequency(java.lang.String frequency) {
            this.frequency = frequency;
            return this;
        }

        /**
         * Sets the value of {@link RosInvocationProps#getFrequency}
         * @param frequency the value to be set.
         * @return {@code this}
         */
        public Builder frequency(com.aliyun.ros.cdk.core.IResolvable frequency) {
            this.frequency = frequency;
            return this;
        }

        /**
         * Sets the value of {@link RosInvocationProps#getParameters}
         * @param parameters the value to be set.
         * @return {@code this}
         */
        public Builder parameters(com.aliyun.ros.cdk.core.IResolvable parameters) {
            this.parameters = parameters;
            return this;
        }

        /**
         * Sets the value of {@link RosInvocationProps#getParameters}
         * @param parameters the value to be set.
         * @return {@code this}
         */
        public Builder parameters(java.util.Map<java.lang.String, ? extends java.lang.Object> parameters) {
            this.parameters = parameters;
            return this;
        }

        /**
         * Sets the value of {@link RosInvocationProps#getRepeatMode}
         * @param repeatMode the value to be set.
         * @return {@code this}
         */
        public Builder repeatMode(java.lang.String repeatMode) {
            this.repeatMode = repeatMode;
            return this;
        }

        /**
         * Sets the value of {@link RosInvocationProps#getRepeatMode}
         * @param repeatMode the value to be set.
         * @return {@code this}
         */
        public Builder repeatMode(com.aliyun.ros.cdk.core.IResolvable repeatMode) {
            this.repeatMode = repeatMode;
            return this;
        }

        /**
         * Sets the value of {@link RosInvocationProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosInvocationProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosInvocationProps#getSync}
         * @param sync the value to be set.
         * @return {@code this}
         */
        public Builder sync(java.lang.Boolean sync) {
            this.sync = sync;
            return this;
        }

        /**
         * Sets the value of {@link RosInvocationProps#getSync}
         * @param sync the value to be set.
         * @return {@code this}
         */
        public Builder sync(com.aliyun.ros.cdk.core.IResolvable sync) {
            this.sync = sync;
            return this;
        }

        /**
         * Sets the value of {@link RosInvocationProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.ecs.RosInvocation.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.RosInvocation.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link RosInvocationProps#getTimeout}
         * @param timeout the value to be set.
         * @return {@code this}
         */
        public Builder timeout(java.lang.Number timeout) {
            this.timeout = timeout;
            return this;
        }

        /**
         * Sets the value of {@link RosInvocationProps#getTimeout}
         * @param timeout the value to be set.
         * @return {@code this}
         */
        public Builder timeout(com.aliyun.ros.cdk.core.IResolvable timeout) {
            this.timeout = timeout;
            return this;
        }

        /**
         * Sets the value of {@link RosInvocationProps#getUsername}
         * @param username the value to be set.
         * @return {@code this}
         */
        public Builder username(java.lang.String username) {
            this.username = username;
            return this;
        }

        /**
         * Sets the value of {@link RosInvocationProps#getUsername}
         * @param username the value to be set.
         * @return {@code this}
         */
        public Builder username(com.aliyun.ros.cdk.core.IResolvable username) {
            this.username = username;
            return this;
        }

        /**
         * Sets the value of {@link RosInvocationProps#getWindowsPasswordName}
         * @param windowsPasswordName the value to be set.
         * @return {@code this}
         */
        public Builder windowsPasswordName(java.lang.String windowsPasswordName) {
            this.windowsPasswordName = windowsPasswordName;
            return this;
        }

        /**
         * Sets the value of {@link RosInvocationProps#getWindowsPasswordName}
         * @param windowsPasswordName the value to be set.
         * @return {@code this}
         */
        public Builder windowsPasswordName(com.aliyun.ros.cdk.core.IResolvable windowsPasswordName) {
            this.windowsPasswordName = windowsPasswordName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosInvocationProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosInvocationProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosInvocationProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosInvocationProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.RosInvocationProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosInvocationProps.Jsii$Proxy that = (RosInvocationProps.Jsii$Proxy) o;

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
