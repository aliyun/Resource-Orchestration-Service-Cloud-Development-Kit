package com.aliyun.ros.cdk.vpc.datasource;

/**
 * Properties for defining a <code>RosCustomerGateways</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-customergateways
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-02-28T02:53:31.336Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.datasource.RosCustomerGatewaysProps")
@software.amazon.jsii.Jsii.Proxy(RosCustomerGatewaysProps.Jsii$Proxy.class)
public interface RosCustomerGatewaysProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCustomerGatewayId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosCustomerGatewaysProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosCustomerGatewaysProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosCustomerGatewaysProps> {
        java.lang.Object customerGatewayId;

        /**
         * Sets the value of {@link RosCustomerGatewaysProps#getCustomerGatewayId}
         * @param customerGatewayId the value to be set.
         * @return {@code this}
         */
        public Builder customerGatewayId(java.lang.String customerGatewayId) {
            this.customerGatewayId = customerGatewayId;
            return this;
        }

        /**
         * Sets the value of {@link RosCustomerGatewaysProps#getCustomerGatewayId}
         * @param customerGatewayId the value to be set.
         * @return {@code this}
         */
        public Builder customerGatewayId(com.aliyun.ros.cdk.core.IResolvable customerGatewayId) {
            this.customerGatewayId = customerGatewayId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosCustomerGatewaysProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosCustomerGatewaysProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosCustomerGatewaysProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosCustomerGatewaysProps {
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
            this.customerGatewayId = builder.customerGatewayId;
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

            if (this.getCustomerGatewayId() != null) {
                data.set("customerGatewayId", om.valueToTree(this.getCustomerGatewayId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.datasource.RosCustomerGatewaysProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosCustomerGatewaysProps.Jsii$Proxy that = (RosCustomerGatewaysProps.Jsii$Proxy) o;

            return this.customerGatewayId != null ? this.customerGatewayId.equals(that.customerGatewayId) : that.customerGatewayId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.customerGatewayId != null ? this.customerGatewayId.hashCode() : 0;
            return result;
        }
    }
}
