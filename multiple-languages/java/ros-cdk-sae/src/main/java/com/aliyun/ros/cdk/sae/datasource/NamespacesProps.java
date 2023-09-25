package com.aliyun.ros.cdk.sae.datasource;

/**
 * Properties for defining a <code>DATASOURCE::SAE::Namespaces</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-25T05:23:26.834Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sae.$Module.class, fqn = "@alicloud/ros-cdk-sae.datasource.NamespacesProps")
@software.amazon.jsii.Jsii.Proxy(NamespacesProps.Jsii$Proxy.class)
public interface NamespacesProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * @return a {@link Builder} of {@link NamespacesProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link NamespacesProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<NamespacesProps> {

        /**
         * Builds the configured instance.
         * @return a new instance of {@link NamespacesProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public NamespacesProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link NamespacesProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements NamespacesProps {

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();


            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sae.datasource.NamespacesProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }
    }
}
