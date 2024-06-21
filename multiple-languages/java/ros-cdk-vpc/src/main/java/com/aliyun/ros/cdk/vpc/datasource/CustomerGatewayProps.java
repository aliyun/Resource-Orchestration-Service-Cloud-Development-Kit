package com.aliyun.ros.cdk.vpc.datasource;

/**
 * Properties for defining a <code>CustomerGateway</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-customergateway
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-21T05:59:12.886Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.datasource.CustomerGatewayProps")
@software.amazon.jsii.Jsii.Proxy(CustomerGatewayProps.Jsii$Proxy.class)
public interface CustomerGatewayProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property customerGatewayId: The ID of the customer gateway.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCustomerGatewayId();

    /**
     * @return a {@link Builder} of {@link CustomerGatewayProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link CustomerGatewayProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<CustomerGatewayProps> {
        java.lang.Object customerGatewayId;

        /**
         * Sets the value of {@link CustomerGatewayProps#getCustomerGatewayId}
         * @param customerGatewayId Property customerGatewayId: The ID of the customer gateway. This parameter is required.
         * @return {@code this}
         */
        public Builder customerGatewayId(java.lang.String customerGatewayId) {
            this.customerGatewayId = customerGatewayId;
            return this;
        }

        /**
         * Sets the value of {@link CustomerGatewayProps#getCustomerGatewayId}
         * @param customerGatewayId Property customerGatewayId: The ID of the customer gateway. This parameter is required.
         * @return {@code this}
         */
        public Builder customerGatewayId(com.aliyun.ros.cdk.core.IResolvable customerGatewayId) {
            this.customerGatewayId = customerGatewayId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link CustomerGatewayProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public CustomerGatewayProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link CustomerGatewayProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements CustomerGatewayProps {
        private final java.lang.Object customerGatewayId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.customerGatewayId = software.amazon.jsii.Kernel.get(this, "customerGatewayId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.customerGatewayId = java.util.Objects.requireNonNull(builder.customerGatewayId, "customerGatewayId is required");
        }

        @Override
        public final java.lang.Object getCustomerGatewayId() {
            return this.customerGatewayId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("customerGatewayId", om.valueToTree(this.getCustomerGatewayId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.datasource.CustomerGatewayProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            CustomerGatewayProps.Jsii$Proxy that = (CustomerGatewayProps.Jsii$Proxy) o;

            return this.customerGatewayId.equals(that.customerGatewayId);
        }

        @Override
        public final int hashCode() {
            int result = this.customerGatewayId.hashCode();
            return result;
        }
    }
}
