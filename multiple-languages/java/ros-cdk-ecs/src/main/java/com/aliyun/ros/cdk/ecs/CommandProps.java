package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a <code>Command</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-command
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-02-28T02:53:28.188Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.CommandProps")
@software.amazon.jsii.Jsii.Proxy(CommandProps.Jsii$Proxy.class)
public interface CommandProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property type: The type of command.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getType();

    /**
     * Property commandContent: The content of command.
     * <p>
     * Content requires base64 encoding. Maximum size support 16KB.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCommandContent() {
        return null;
    }

    /**
     * Property description: The description of command.
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
     * Property name: The name of command.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
        return null;
    }

    /**
     * Property tags: Tags to attach to command.
     * <p>
     * Max support 20 tags to add during create command. Each tag with two properties Key and Value, and Key is required.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ecs.RosCommand.TagsProperty> getTags() {
        return null;
    }

    /**
     * Property timeout: Total timeout when the command is executed in the instance.
     * <p>
     * Input the time unit as second. Default is 60s.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTimeout() {
        return null;
    }

    /**
     * Property workingDir: The path where command will be executed in the instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getWorkingDir() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link CommandProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link CommandProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<CommandProps> {
        java.lang.Object type;
        java.lang.Object commandContent;
        java.lang.Object description;
        java.lang.Object enableParameter;
        java.lang.Object name;
        java.util.List<com.aliyun.ros.cdk.ecs.RosCommand.TagsProperty> tags;
        java.lang.Object timeout;
        java.lang.Object workingDir;

        /**
         * Sets the value of {@link CommandProps#getType}
         * @param type Property type: The type of command. This parameter is required.
         * @return {@code this}
         */
        public Builder type(java.lang.String type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link CommandProps#getType}
         * @param type Property type: The type of command. This parameter is required.
         * @return {@code this}
         */
        public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link CommandProps#getCommandContent}
         * @param commandContent Property commandContent: The content of command.
         *                       Content requires base64 encoding. Maximum size support 16KB.
         * @return {@code this}
         */
        public Builder commandContent(java.lang.String commandContent) {
            this.commandContent = commandContent;
            return this;
        }

        /**
         * Sets the value of {@link CommandProps#getCommandContent}
         * @param commandContent Property commandContent: The content of command.
         *                       Content requires base64 encoding. Maximum size support 16KB.
         * @return {@code this}
         */
        public Builder commandContent(com.aliyun.ros.cdk.core.IResolvable commandContent) {
            this.commandContent = commandContent;
            return this;
        }

        /**
         * Sets the value of {@link CommandProps#getDescription}
         * @param description Property description: The description of command.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link CommandProps#getDescription}
         * @param description Property description: The description of command.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link CommandProps#getEnableParameter}
         * @param enableParameter Property enableParameter: Specifies whether the script contains custom parameters.
         *                        Default value: false
         * @return {@code this}
         */
        public Builder enableParameter(java.lang.Boolean enableParameter) {
            this.enableParameter = enableParameter;
            return this;
        }

        /**
         * Sets the value of {@link CommandProps#getEnableParameter}
         * @param enableParameter Property enableParameter: Specifies whether the script contains custom parameters.
         *                        Default value: false
         * @return {@code this}
         */
        public Builder enableParameter(com.aliyun.ros.cdk.core.IResolvable enableParameter) {
            this.enableParameter = enableParameter;
            return this;
        }

        /**
         * Sets the value of {@link CommandProps#getName}
         * @param name Property name: The name of command.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link CommandProps#getName}
         * @param name Property name: The name of command.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link CommandProps#getTags}
         * @param tags Property tags: Tags to attach to command.
         *             Max support 20 tags to add during create command. Each tag with two properties Key and Value, and Key is required.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.ecs.RosCommand.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.RosCommand.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link CommandProps#getTimeout}
         * @param timeout Property timeout: Total timeout when the command is executed in the instance.
         *                Input the time unit as second. Default is 60s.
         * @return {@code this}
         */
        public Builder timeout(java.lang.Number timeout) {
            this.timeout = timeout;
            return this;
        }

        /**
         * Sets the value of {@link CommandProps#getTimeout}
         * @param timeout Property timeout: Total timeout when the command is executed in the instance.
         *                Input the time unit as second. Default is 60s.
         * @return {@code this}
         */
        public Builder timeout(com.aliyun.ros.cdk.core.IResolvable timeout) {
            this.timeout = timeout;
            return this;
        }

        /**
         * Sets the value of {@link CommandProps#getWorkingDir}
         * @param workingDir Property workingDir: The path where command will be executed in the instance.
         * @return {@code this}
         */
        public Builder workingDir(java.lang.String workingDir) {
            this.workingDir = workingDir;
            return this;
        }

        /**
         * Sets the value of {@link CommandProps#getWorkingDir}
         * @param workingDir Property workingDir: The path where command will be executed in the instance.
         * @return {@code this}
         */
        public Builder workingDir(com.aliyun.ros.cdk.core.IResolvable workingDir) {
            this.workingDir = workingDir;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link CommandProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public CommandProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link CommandProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements CommandProps {
        private final java.lang.Object type;
        private final java.lang.Object commandContent;
        private final java.lang.Object description;
        private final java.lang.Object enableParameter;
        private final java.lang.Object name;
        private final java.util.List<com.aliyun.ros.cdk.ecs.RosCommand.TagsProperty> tags;
        private final java.lang.Object timeout;
        private final java.lang.Object workingDir;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.commandContent = software.amazon.jsii.Kernel.get(this, "commandContent", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enableParameter = software.amazon.jsii.Kernel.get(this, "enableParameter", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.RosCommand.TagsProperty.class)));
            this.timeout = software.amazon.jsii.Kernel.get(this, "timeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.workingDir = software.amazon.jsii.Kernel.get(this, "workingDir", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.type = java.util.Objects.requireNonNull(builder.type, "type is required");
            this.commandContent = builder.commandContent;
            this.description = builder.description;
            this.enableParameter = builder.enableParameter;
            this.name = builder.name;
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.RosCommand.TagsProperty>)builder.tags;
            this.timeout = builder.timeout;
            this.workingDir = builder.workingDir;
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
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getEnableParameter() {
            return this.enableParameter;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.ecs.RosCommand.TagsProperty> getTags() {
            return this.tags;
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

            data.set("type", om.valueToTree(this.getType()));
            if (this.getCommandContent() != null) {
                data.set("commandContent", om.valueToTree(this.getCommandContent()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getEnableParameter() != null) {
                data.set("enableParameter", om.valueToTree(this.getEnableParameter()));
            }
            if (this.getName() != null) {
                data.set("name", om.valueToTree(this.getName()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getTimeout() != null) {
                data.set("timeout", om.valueToTree(this.getTimeout()));
            }
            if (this.getWorkingDir() != null) {
                data.set("workingDir", om.valueToTree(this.getWorkingDir()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.CommandProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            CommandProps.Jsii$Proxy that = (CommandProps.Jsii$Proxy) o;

            if (!type.equals(that.type)) return false;
            if (this.commandContent != null ? !this.commandContent.equals(that.commandContent) : that.commandContent != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.enableParameter != null ? !this.enableParameter.equals(that.enableParameter) : that.enableParameter != null) return false;
            if (this.name != null ? !this.name.equals(that.name) : that.name != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            if (this.timeout != null ? !this.timeout.equals(that.timeout) : that.timeout != null) return false;
            return this.workingDir != null ? this.workingDir.equals(that.workingDir) : that.workingDir == null;
        }

        @Override
        public final int hashCode() {
            int result = this.type.hashCode();
            result = 31 * result + (this.commandContent != null ? this.commandContent.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.enableParameter != null ? this.enableParameter.hashCode() : 0);
            result = 31 * result + (this.name != null ? this.name.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.timeout != null ? this.timeout.hashCode() : 0);
            result = 31 * result + (this.workingDir != null ? this.workingDir.hashCode() : 0);
            return result;
        }
    }
}
