package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a <code>ALIYUN::ECS::Invocation</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-15T09:57:25.561Z")
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
    default @org.jetbrains.annotations.Nullable java.lang.Object getSync() {
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
        java.lang.Object instanceIds;
        java.lang.Object commandId;
        java.lang.Object commandName;
        java.lang.Object frequency;
        java.lang.Object parameters;
        java.lang.Object sync;
        java.lang.Object timed;

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
        private final java.lang.Object frequency;
        private final java.lang.Object parameters;
        private final java.lang.Object sync;
        private final java.lang.Object timed;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.instanceIds = software.amazon.jsii.Kernel.get(this, "instanceIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.commandId = software.amazon.jsii.Kernel.get(this, "commandId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.commandName = software.amazon.jsii.Kernel.get(this, "commandName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.frequency = software.amazon.jsii.Kernel.get(this, "frequency", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.parameters = software.amazon.jsii.Kernel.get(this, "parameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sync = software.amazon.jsii.Kernel.get(this, "sync", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.timed = software.amazon.jsii.Kernel.get(this, "timed", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.instanceIds = java.util.Objects.requireNonNull(builder.instanceIds, "instanceIds is required");
            this.commandId = builder.commandId;
            this.commandName = builder.commandName;
            this.frequency = builder.frequency;
            this.parameters = builder.parameters;
            this.sync = builder.sync;
            this.timed = builder.timed;
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
        public final java.lang.Object getFrequency() {
            return this.frequency;
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
            if (this.getFrequency() != null) {
                data.set("frequency", om.valueToTree(this.getFrequency()));
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
            if (this.frequency != null ? !this.frequency.equals(that.frequency) : that.frequency != null) return false;
            if (this.parameters != null ? !this.parameters.equals(that.parameters) : that.parameters != null) return false;
            if (this.sync != null ? !this.sync.equals(that.sync) : that.sync != null) return false;
            return this.timed != null ? this.timed.equals(that.timed) : that.timed == null;
        }

        @Override
        public final int hashCode() {
            int result = this.instanceIds.hashCode();
            result = 31 * result + (this.commandId != null ? this.commandId.hashCode() : 0);
            result = 31 * result + (this.commandName != null ? this.commandName.hashCode() : 0);
            result = 31 * result + (this.frequency != null ? this.frequency.hashCode() : 0);
            result = 31 * result + (this.parameters != null ? this.parameters.hashCode() : 0);
            result = 31 * result + (this.sync != null ? this.sync.hashCode() : 0);
            result = 31 * result + (this.timed != null ? this.timed.hashCode() : 0);
            return result;
        }
    }
}
