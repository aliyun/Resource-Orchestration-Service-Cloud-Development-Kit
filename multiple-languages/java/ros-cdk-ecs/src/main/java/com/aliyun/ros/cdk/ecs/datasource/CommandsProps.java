package com.aliyun.ros.cdk.ecs.datasource;

/**
 * Properties for defining a <code>DATASOURCE::ECS::Commands</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-11-07T09:08:35.090Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.datasource.CommandsProps")
@software.amazon.jsii.Jsii.Proxy(CommandsProps.Jsii$Proxy.class)
public interface CommandsProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property commandId: The ID of the command.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCommandId() {
        return null;
    }

    /**
     * Property commandName: The name of the command.
     * <p>
     * Partial command names are not supported.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCommandName() {
        return null;
    }

    /**
     * Property description: Command description.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property type: The command type.
     * <p>
     * Valid values:
     * RunBatScript: batch command, applicable to Windows instances
     * RunPowerShellScript: PowerShell command, applicable to Windows instances
     * RunShellScript: shell command, applicable to Linux instances
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getType() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link CommandsProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link CommandsProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<CommandsProps> {
        java.lang.Object commandId;
        java.lang.Object commandName;
        java.lang.Object description;
        java.lang.Object type;

        /**
         * Sets the value of {@link CommandsProps#getCommandId}
         * @param commandId Property commandId: The ID of the command.
         * @return {@code this}
         */
        public Builder commandId(java.lang.String commandId) {
            this.commandId = commandId;
            return this;
        }

        /**
         * Sets the value of {@link CommandsProps#getCommandId}
         * @param commandId Property commandId: The ID of the command.
         * @return {@code this}
         */
        public Builder commandId(com.aliyun.ros.cdk.core.IResolvable commandId) {
            this.commandId = commandId;
            return this;
        }

        /**
         * Sets the value of {@link CommandsProps#getCommandName}
         * @param commandName Property commandName: The name of the command.
         *                    Partial command names are not supported.
         * @return {@code this}
         */
        public Builder commandName(java.lang.String commandName) {
            this.commandName = commandName;
            return this;
        }

        /**
         * Sets the value of {@link CommandsProps#getCommandName}
         * @param commandName Property commandName: The name of the command.
         *                    Partial command names are not supported.
         * @return {@code this}
         */
        public Builder commandName(com.aliyun.ros.cdk.core.IResolvable commandName) {
            this.commandName = commandName;
            return this;
        }

        /**
         * Sets the value of {@link CommandsProps#getDescription}
         * @param description Property description: Command description.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link CommandsProps#getDescription}
         * @param description Property description: Command description.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link CommandsProps#getType}
         * @param type Property type: The command type.
         *             Valid values:
         *             RunBatScript: batch command, applicable to Windows instances
         *             RunPowerShellScript: PowerShell command, applicable to Windows instances
         *             RunShellScript: shell command, applicable to Linux instances
         * @return {@code this}
         */
        public Builder type(java.lang.String type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link CommandsProps#getType}
         * @param type Property type: The command type.
         *             Valid values:
         *             RunBatScript: batch command, applicable to Windows instances
         *             RunPowerShellScript: PowerShell command, applicable to Windows instances
         *             RunShellScript: shell command, applicable to Linux instances
         * @return {@code this}
         */
        public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
            this.type = type;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link CommandsProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public CommandsProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link CommandsProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements CommandsProps {
        private final java.lang.Object commandId;
        private final java.lang.Object commandName;
        private final java.lang.Object description;
        private final java.lang.Object type;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.commandId = software.amazon.jsii.Kernel.get(this, "commandId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.commandName = software.amazon.jsii.Kernel.get(this, "commandName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.commandId = builder.commandId;
            this.commandName = builder.commandName;
            this.description = builder.description;
            this.type = builder.type;
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
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getType() {
            return this.type;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getCommandId() != null) {
                data.set("commandId", om.valueToTree(this.getCommandId()));
            }
            if (this.getCommandName() != null) {
                data.set("commandName", om.valueToTree(this.getCommandName()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getType() != null) {
                data.set("type", om.valueToTree(this.getType()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.datasource.CommandsProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            CommandsProps.Jsii$Proxy that = (CommandsProps.Jsii$Proxy) o;

            if (this.commandId != null ? !this.commandId.equals(that.commandId) : that.commandId != null) return false;
            if (this.commandName != null ? !this.commandName.equals(that.commandName) : that.commandName != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            return this.type != null ? this.type.equals(that.type) : that.type == null;
        }

        @Override
        public final int hashCode() {
            int result = this.commandId != null ? this.commandId.hashCode() : 0;
            result = 31 * result + (this.commandName != null ? this.commandName.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.type != null ? this.type.hashCode() : 0);
            return result;
        }
    }
}
