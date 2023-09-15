package com.aliyun.ros.cdk.core;

/**
 * Configuration properties for DefaultStackSynthesizer.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-15T07:33:46.056Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.DefaultStackSynthesizerProps")
@software.amazon.jsii.Jsii.Proxy(DefaultStackSynthesizerProps.Jsii$Proxy.class)
public interface DefaultStackSynthesizerProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Qualifier to disambiguate multiple environments in the same account.
     * <p>
     * You can use this and leave the other naming properties empty if you have deployed
     * the bootstrap environment with standard names but only differnet qualifiers.
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getQualifier() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link DefaultStackSynthesizerProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link DefaultStackSynthesizerProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<DefaultStackSynthesizerProps> {
        java.lang.String qualifier;

        /**
         * Sets the value of {@link DefaultStackSynthesizerProps#getQualifier}
         * @param qualifier Qualifier to disambiguate multiple environments in the same account.
         *                  You can use this and leave the other naming properties empty if you have deployed
         *                  the bootstrap environment with standard names but only differnet qualifiers.
         * @return {@code this}
         */
        public Builder qualifier(java.lang.String qualifier) {
            this.qualifier = qualifier;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link DefaultStackSynthesizerProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public DefaultStackSynthesizerProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link DefaultStackSynthesizerProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DefaultStackSynthesizerProps {
        private final java.lang.String qualifier;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.qualifier = software.amazon.jsii.Kernel.get(this, "qualifier", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.qualifier = builder.qualifier;
        }

        @Override
        public final java.lang.String getQualifier() {
            return this.qualifier;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getQualifier() != null) {
                data.set("qualifier", om.valueToTree(this.getQualifier()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-core.DefaultStackSynthesizerProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            DefaultStackSynthesizerProps.Jsii$Proxy that = (DefaultStackSynthesizerProps.Jsii$Proxy) o;

            return this.qualifier != null ? this.qualifier.equals(that.qualifier) : that.qualifier == null;
        }

        @Override
        public final int hashCode() {
            int result = this.qualifier != null ? this.qualifier.hashCode() : 0;
            return result;
        }
    }
}
