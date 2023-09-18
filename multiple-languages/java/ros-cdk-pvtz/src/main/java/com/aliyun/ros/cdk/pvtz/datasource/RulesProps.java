package com.aliyun.ros.cdk.pvtz.datasource;

/**
 * Properties for defining a <code>DATASOURCE::PVTZ::Rules</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-15T09:57:27.517Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.pvtz.$Module.class, fqn = "@alicloud/ros-cdk-pvtz.datasource.RulesProps")
@software.amazon.jsii.Jsii.Proxy(RulesProps.Jsii$Proxy.class)
public interface RulesProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property endpointId: EndpointId.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEndpointId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RulesProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RulesProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RulesProps> {
        java.lang.Object endpointId;

        /**
         * Sets the value of {@link RulesProps#getEndpointId}
         * @param endpointId Property endpointId: EndpointId.
         * @return {@code this}
         */
        public Builder endpointId(java.lang.String endpointId) {
            this.endpointId = endpointId;
            return this;
        }

        /**
         * Sets the value of {@link RulesProps#getEndpointId}
         * @param endpointId Property endpointId: EndpointId.
         * @return {@code this}
         */
        public Builder endpointId(com.aliyun.ros.cdk.core.IResolvable endpointId) {
            this.endpointId = endpointId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RulesProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RulesProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RulesProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RulesProps {
        private final java.lang.Object endpointId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.endpointId = software.amazon.jsii.Kernel.get(this, "endpointId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.endpointId = builder.endpointId;
        }

        @Override
        public final java.lang.Object getEndpointId() {
            return this.endpointId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getEndpointId() != null) {
                data.set("endpointId", om.valueToTree(this.getEndpointId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-pvtz.datasource.RulesProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RulesProps.Jsii$Proxy that = (RulesProps.Jsii$Proxy) o;

            return this.endpointId != null ? this.endpointId.equals(that.endpointId) : that.endpointId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.endpointId != null ? this.endpointId.hashCode() : 0;
            return result;
        }
    }
}
