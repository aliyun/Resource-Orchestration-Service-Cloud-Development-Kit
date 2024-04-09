package com.aliyun.ros.cdk.ecs.datasource;

/**
 * Properties for defining a <code>Command</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-command
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-04-09T06:05:32.462Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.datasource.CommandProps")
@software.amazon.jsii.Jsii.Proxy(CommandProps.Jsii$Proxy.class)
public interface CommandProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property commandId: Command ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCommandId();

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
        java.lang.Object commandId;

        /**
         * Sets the value of {@link CommandProps#getCommandId}
         * @param commandId Property commandId: Command ID. This parameter is required.
         * @return {@code this}
         */
        public Builder commandId(java.lang.String commandId) {
            this.commandId = commandId;
            return this;
        }

        /**
         * Sets the value of {@link CommandProps#getCommandId}
         * @param commandId Property commandId: Command ID. This parameter is required.
         * @return {@code this}
         */
        public Builder commandId(com.aliyun.ros.cdk.core.IResolvable commandId) {
            this.commandId = commandId;
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
        private final java.lang.Object commandId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.commandId = software.amazon.jsii.Kernel.get(this, "commandId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.commandId = java.util.Objects.requireNonNull(builder.commandId, "commandId is required");
        }

        @Override
        public final java.lang.Object getCommandId() {
            return this.commandId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("commandId", om.valueToTree(this.getCommandId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.datasource.CommandProps"));
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

            return this.commandId.equals(that.commandId);
        }

        @Override
        public final int hashCode() {
            int result = this.commandId.hashCode();
            return result;
        }
    }
}
