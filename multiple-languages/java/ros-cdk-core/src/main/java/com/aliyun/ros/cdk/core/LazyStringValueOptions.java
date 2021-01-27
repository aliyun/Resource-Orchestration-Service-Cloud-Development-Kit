package com.aliyun.ros.cdk.core;

/**
 * Options for creating a lazy string token.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:32.144Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.LazyStringValueOptions")
@software.amazon.jsii.Jsii.Proxy(LazyStringValueOptions.Jsii$Proxy.class)
public interface LazyStringValueOptions extends software.amazon.jsii.JsiiSerializable {

    /**
     * Use the given name as a display hint.
     * <p>
     * Default: - No hint
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDisplayHint() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link LazyStringValueOptions}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link LazyStringValueOptions}
     */
    public static final class Builder implements software.amazon.jsii.Builder<LazyStringValueOptions> {
        private java.lang.String displayHint;

        /**
         * Sets the value of {@link LazyStringValueOptions#getDisplayHint}
         * @param displayHint Use the given name as a display hint.
         * @return {@code this}
         */
        public Builder displayHint(java.lang.String displayHint) {
            this.displayHint = displayHint;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link LazyStringValueOptions}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public LazyStringValueOptions build() {
            return new Jsii$Proxy(displayHint);
        }
    }

    /**
     * An implementation for {@link LazyStringValueOptions}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements LazyStringValueOptions {
        private final java.lang.String displayHint;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.displayHint = software.amazon.jsii.Kernel.get(this, "displayHint", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String displayHint) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.displayHint = displayHint;
        }

        @Override
        public final java.lang.String getDisplayHint() {
            return this.displayHint;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getDisplayHint() != null) {
                data.set("displayHint", om.valueToTree(this.getDisplayHint()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-core.LazyStringValueOptions"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            LazyStringValueOptions.Jsii$Proxy that = (LazyStringValueOptions.Jsii$Proxy) o;

            return this.displayHint != null ? this.displayHint.equals(that.displayHint) : that.displayHint == null;
        }

        @Override
        public final int hashCode() {
            int result = this.displayHint != null ? this.displayHint.hashCode() : 0;
            return result;
        }
    }
}
