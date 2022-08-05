package com.aliyun.ros.cdk.core;

/**
 * An error returned during the validation phase.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.63.2 (build a8a8833)", date = "2022-08-05T07:29:02.602Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.ValidationError")
@software.amazon.jsii.Jsii.Proxy(ValidationError.Jsii$Proxy.class)
public interface ValidationError extends software.amazon.jsii.JsiiSerializable {

    /**
     * The error message.
     */
    @org.jetbrains.annotations.NotNull java.lang.String getMessage();

    /**
     * The construct which emitted the error.
     */
    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getSource();

    /**
     * @return a {@link Builder} of {@link ValidationError}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ValidationError}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ValidationError> {
        java.lang.String message;
        com.aliyun.ros.cdk.core.Construct source;

        /**
         * Sets the value of {@link ValidationError#getMessage}
         * @param message The error message. This parameter is required.
         * @return {@code this}
         */
        public Builder message(java.lang.String message) {
            this.message = message;
            return this;
        }

        /**
         * Sets the value of {@link ValidationError#getSource}
         * @param source The construct which emitted the error. This parameter is required.
         * @return {@code this}
         */
        public Builder source(com.aliyun.ros.cdk.core.Construct source) {
            this.source = source;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ValidationError}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ValidationError build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ValidationError}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ValidationError {
        private final java.lang.String message;
        private final com.aliyun.ros.cdk.core.Construct source;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.message = software.amazon.jsii.Kernel.get(this, "message", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.source = software.amazon.jsii.Kernel.get(this, "source", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.message = java.util.Objects.requireNonNull(builder.message, "message is required");
            this.source = java.util.Objects.requireNonNull(builder.source, "source is required");
        }

        @Override
        public final java.lang.String getMessage() {
            return this.message;
        }

        @Override
        public final com.aliyun.ros.cdk.core.Construct getSource() {
            return this.source;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("message", om.valueToTree(this.getMessage()));
            data.set("source", om.valueToTree(this.getSource()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-core.ValidationError"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ValidationError.Jsii$Proxy that = (ValidationError.Jsii$Proxy) o;

            if (!message.equals(that.message)) return false;
            return this.source.equals(that.source);
        }

        @Override
        public final int hashCode() {
            int result = this.message.hashCode();
            result = 31 * result + (this.source.hashCode());
            return result;
        }
    }
}
