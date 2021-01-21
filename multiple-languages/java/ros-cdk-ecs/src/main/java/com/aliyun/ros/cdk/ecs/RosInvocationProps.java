package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a `ALIYUN::ECS::Invocation`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-20T10:55:02.770Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RosInvocationProps")
@software.amazon.jsii.Jsii.Proxy(RosInvocationProps.Jsii$Proxy.class)
public interface RosInvocationProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getCommandId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceIds();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getFrequency() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getParameters() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTimed() {
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
        private java.lang.String commandId;
        private java.lang.Object instanceIds;
        private java.lang.String frequency;
        private java.lang.Object parameters;
        private java.lang.Object timed;

        /**
         * Sets the value of {@link RosInvocationProps#getCommandId}
         * @param commandId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder commandId(java.lang.String commandId) {
            this.commandId = commandId;
            return this;
        }

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
         * Sets the value of {@link RosInvocationProps#getFrequency}
         * @param frequency the value to be set.
         * @return {@code this}
         */
        public Builder frequency(java.lang.String frequency) {
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
         * Sets the value of {@link RosInvocationProps#getTimed}
         * @param timed the value to be set.
         * @return {@code this}
         */
        public Builder timed(java.lang.Boolean timed) {
            this.timed = timed;
            return this;
        }

        /**
         * Sets the value of {@link RosInvocationProps#getTimed}
         * @param timed the value to be set.
         * @return {@code this}
         */
        public Builder timed(com.aliyun.ros.cdk.core.IResolvable timed) {
            this.timed = timed;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosInvocationProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosInvocationProps build() {
            return new Jsii$Proxy(commandId, instanceIds, frequency, parameters, timed);
        }
    }

    /**
     * An implementation for {@link RosInvocationProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosInvocationProps {
        private final java.lang.String commandId;
        private final java.lang.Object instanceIds;
        private final java.lang.String frequency;
        private final java.lang.Object parameters;
        private final java.lang.Object timed;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.commandId = software.amazon.jsii.Kernel.get(this, "commandId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.instanceIds = software.amazon.jsii.Kernel.get(this, "instanceIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.frequency = software.amazon.jsii.Kernel.get(this, "frequency", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.parameters = software.amazon.jsii.Kernel.get(this, "parameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.timed = software.amazon.jsii.Kernel.get(this, "timed", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String commandId, final java.lang.Object instanceIds, final java.lang.String frequency, final java.lang.Object parameters, final java.lang.Object timed) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.commandId = java.util.Objects.requireNonNull(commandId, "commandId is required");
            this.instanceIds = java.util.Objects.requireNonNull(instanceIds, "instanceIds is required");
            this.frequency = frequency;
            this.parameters = parameters;
            this.timed = timed;
        }

        @Override
        public final java.lang.String getCommandId() {
            return this.commandId;
        }

        @Override
        public final java.lang.Object getInstanceIds() {
            return this.instanceIds;
        }

        @Override
        public final java.lang.String getFrequency() {
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
