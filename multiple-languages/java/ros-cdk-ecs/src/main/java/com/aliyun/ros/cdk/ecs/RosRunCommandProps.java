package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a `ALIYUN::ECS::RunCommand`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.63.2 (build a8a8833)", date = "2022-08-05T07:29:03.956Z")
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
    default @org.jetbrains.annotations.Nullable java.lang.Object getSync() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTimed() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTimeout() {
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
        java.lang.Object contentEncoding;
        java.lang.Object description;
        java.lang.Object enableParameter;
        java.lang.Object frequency;
        java.lang.Object keepCommand;
        java.lang.Object name;
        java.lang.Object parameters;
        java.lang.Object sync;
        java.lang.Object timed;
        java.lang.Object timeout;
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
         * Sets the value of {@link RosRunCommandProps#getTimed}
         * @param timed the value to be set.
         * @return {@code this}
         */
        public Builder timed(java.lang.Boolean timed) {
            this.timed = timed;
            return this;
        }

        /**
         * Sets the value of {@link RosRunCommandProps#getTimed}
         * @param timed the value to be set.
         * @return {@code this}
         */
        public Builder timed(com.aliyun.ros.cdk.core.IResolvable timed) {
            this.timed = timed;
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
        private final java.lang.Object contentEncoding;
        private final java.lang.Object description;
        private final java.lang.Object enableParameter;
        private final java.lang.Object frequency;
        private final java.lang.Object keepCommand;
        private final java.lang.Object name;
        private final java.lang.Object parameters;
        private final java.lang.Object sync;
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
            this.sync = software.amazon.jsii.Kernel.get(this, "sync", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
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
            this.sync = builder.sync;
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
        public final java.lang.Object getSync() {
            return this.sync;
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
            if (this.getSync() != null) {
                data.set("sync", om.valueToTree(this.getSync()));
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
            if (this.contentEncoding != null ? !this.contentEncoding.equals(that.contentEncoding) : that.contentEncoding != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.enableParameter != null ? !this.enableParameter.equals(that.enableParameter) : that.enableParameter != null) return false;
            if (this.frequency != null ? !this.frequency.equals(that.frequency) : that.frequency != null) return false;
            if (this.keepCommand != null ? !this.keepCommand.equals(that.keepCommand) : that.keepCommand != null) return false;
            if (this.name != null ? !this.name.equals(that.name) : that.name != null) return false;
            if (this.parameters != null ? !this.parameters.equals(that.parameters) : that.parameters != null) return false;
            if (this.sync != null ? !this.sync.equals(that.sync) : that.sync != null) return false;
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
            result = 31 * result + (this.sync != null ? this.sync.hashCode() : 0);
            result = 31 * result + (this.timed != null ? this.timed.hashCode() : 0);
            result = 31 * result + (this.timeout != null ? this.timeout.hashCode() : 0);
            result = 31 * result + (this.workingDir != null ? this.workingDir.hashCode() : 0);
            return result;
        }
    }
}
