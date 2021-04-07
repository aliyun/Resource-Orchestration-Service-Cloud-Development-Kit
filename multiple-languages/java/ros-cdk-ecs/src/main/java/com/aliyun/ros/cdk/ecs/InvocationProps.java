package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a `ALIYUN::ECS::Invocation`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.27.0 (build 07d848a)", date = "2021-04-07T04:01:42.233Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.InvocationProps")
@software.amazon.jsii.Jsii.Proxy(InvocationProps.Jsii$Proxy.class)
public interface InvocationProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property commandId: The id of command.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCommandId();

    /**
     * Property instanceIds: The instance id list.
     * <p>
     * Select up to 50 instances at a time.Instances status must be running.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceIds();

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
     * Property timed: Whether it is timed execution.
     * <p>
     * Default is False.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTimed() {
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
        private java.lang.Object commandId;
        private java.lang.Object instanceIds;
        private java.lang.Object frequency;
        private java.lang.Object parameters;
        private java.lang.Object timed;

        /**
         * Sets the value of {@link InvocationProps#getCommandId}
         * @param commandId Property commandId: The id of command. This parameter is required.
         * @return {@code this}
         */
        public Builder commandId(java.lang.String commandId) {
            this.commandId = commandId;
            return this;
        }

        /**
         * Sets the value of {@link InvocationProps#getCommandId}
         * @param commandId Property commandId: The id of command. This parameter is required.
         * @return {@code this}
         */
        public Builder commandId(com.aliyun.ros.cdk.core.IResolvable commandId) {
            this.commandId = commandId;
            return this;
        }

        /**
         * Sets the value of {@link InvocationProps#getInstanceIds}
         * @param instanceIds Property instanceIds: The instance id list. This parameter is required.
         *                    Select up to 50 instances at a time.Instances status must be running.
         * @return {@code this}
         */
        public Builder instanceIds(java.util.List<? extends java.lang.Object> instanceIds) {
            this.instanceIds = instanceIds;
            return this;
        }

        /**
         * Sets the value of {@link InvocationProps#getInstanceIds}
         * @param instanceIds Property instanceIds: The instance id list. This parameter is required.
         *                    Select up to 50 instances at a time.Instances status must be running.
         * @return {@code this}
         */
        public Builder instanceIds(com.aliyun.ros.cdk.core.IResolvable instanceIds) {
            this.instanceIds = instanceIds;
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
         * Sets the value of {@link InvocationProps#getTimed}
         * @param timed Property timed: Whether it is timed execution.
         *              Default is False.
         * @return {@code this}
         */
        public Builder timed(java.lang.Boolean timed) {
            this.timed = timed;
            return this;
        }

        /**
         * Sets the value of {@link InvocationProps#getTimed}
         * @param timed Property timed: Whether it is timed execution.
         *              Default is False.
         * @return {@code this}
         */
        public Builder timed(com.aliyun.ros.cdk.core.IResolvable timed) {
            this.timed = timed;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link InvocationProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public InvocationProps build() {
            return new Jsii$Proxy(commandId, instanceIds, frequency, parameters, timed);
        }
    }

    /**
     * An implementation for {@link InvocationProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements InvocationProps {
        private final java.lang.Object commandId;
        private final java.lang.Object instanceIds;
        private final java.lang.Object frequency;
        private final java.lang.Object parameters;
        private final java.lang.Object timed;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.commandId = software.amazon.jsii.Kernel.get(this, "commandId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceIds = software.amazon.jsii.Kernel.get(this, "instanceIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.frequency = software.amazon.jsii.Kernel.get(this, "frequency", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.parameters = software.amazon.jsii.Kernel.get(this, "parameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.timed = software.amazon.jsii.Kernel.get(this, "timed", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.Object commandId, final java.lang.Object instanceIds, final java.lang.Object frequency, final java.lang.Object parameters, final java.lang.Object timed) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.commandId = java.util.Objects.requireNonNull(commandId, "commandId is required");
            this.instanceIds = java.util.Objects.requireNonNull(instanceIds, "instanceIds is required");
            this.frequency = frequency;
            this.parameters = parameters;
            this.timed = timed;
        }

        @Override
        public final java.lang.Object getCommandId() {
            return this.commandId;
        }

        @Override
        public final java.lang.Object getInstanceIds() {
            return this.instanceIds;
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
        public final java.lang.Object getTimed() {
            return this.timed;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("commandId", om.valueToTree(this.getCommandId()));
            data.set("instanceIds", om.valueToTree(this.getInstanceIds()));
            if (this.getFrequency() != null) {
                data.set("frequency", om.valueToTree(this.getFrequency()));
            }
            if (this.getParameters() != null) {
                data.set("parameters", om.valueToTree(this.getParameters()));
            }
            if (this.getTimed() != null) {
                data.set("timed", om.valueToTree(this.getTimed()));
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

            if (!commandId.equals(that.commandId)) return false;
            if (!instanceIds.equals(that.instanceIds)) return false;
            if (this.frequency != null ? !this.frequency.equals(that.frequency) : that.frequency != null) return false;
            if (this.parameters != null ? !this.parameters.equals(that.parameters) : that.parameters != null) return false;
            return this.timed != null ? this.timed.equals(that.timed) : that.timed == null;
        }

        @Override
        public final int hashCode() {
            int result = this.commandId.hashCode();
            result = 31 * result + (this.instanceIds.hashCode());
            result = 31 * result + (this.frequency != null ? this.frequency.hashCode() : 0);
            result = 31 * result + (this.parameters != null ? this.parameters.hashCode() : 0);
            result = 31 * result + (this.timed != null ? this.timed.hashCode() : 0);
            return result;
        }
    }
}
