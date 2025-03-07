package com.aliyun.ros.cdk.vpc;

/**
 * Properties for defining a <code>RosCustomerGateway</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-customergateway
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:11.383Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RosCustomerGatewayProps")
@software.amazon.jsii.Jsii.Proxy(RosCustomerGatewayProps.Jsii$Proxy.class)
public interface RosCustomerGatewayProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getIpAddress();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAsn() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosCustomerGatewayProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosCustomerGatewayProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosCustomerGatewayProps> {
        java.lang.Object ipAddress;
        java.lang.Object asn;
        java.lang.Object description;
        java.lang.Object name;

        /**
         * Sets the value of {@link RosCustomerGatewayProps#getIpAddress}
         * @param ipAddress the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ipAddress(java.lang.String ipAddress) {
            this.ipAddress = ipAddress;
            return this;
        }

        /**
         * Sets the value of {@link RosCustomerGatewayProps#getIpAddress}
         * @param ipAddress the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ipAddress(com.aliyun.ros.cdk.core.IResolvable ipAddress) {
            this.ipAddress = ipAddress;
            return this;
        }

        /**
         * Sets the value of {@link RosCustomerGatewayProps#getAsn}
         * @param asn the value to be set.
         * @return {@code this}
         */
        public Builder asn(java.lang.Number asn) {
            this.asn = asn;
            return this;
        }

        /**
         * Sets the value of {@link RosCustomerGatewayProps#getAsn}
         * @param asn the value to be set.
         * @return {@code this}
         */
        public Builder asn(com.aliyun.ros.cdk.core.IResolvable asn) {
            this.asn = asn;
            return this;
        }

        /**
         * Sets the value of {@link RosCustomerGatewayProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosCustomerGatewayProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosCustomerGatewayProps#getName}
         * @param name the value to be set.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosCustomerGatewayProps#getName}
         * @param name the value to be set.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosCustomerGatewayProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosCustomerGatewayProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosCustomerGatewayProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosCustomerGatewayProps {
        private final java.lang.Object ipAddress;
        private final java.lang.Object asn;
        private final java.lang.Object description;
        private final java.lang.Object name;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.ipAddress = software.amazon.jsii.Kernel.get(this, "ipAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.asn = software.amazon.jsii.Kernel.get(this, "asn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.ipAddress = java.util.Objects.requireNonNull(builder.ipAddress, "ipAddress is required");
            this.asn = builder.asn;
            this.description = builder.description;
            this.name = builder.name;
        }

        @Override
        public final java.lang.Object getIpAddress() {
            return this.ipAddress;
        }

        @Override
        public final java.lang.Object getAsn() {
            return this.asn;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("ipAddress", om.valueToTree(this.getIpAddress()));
            if (this.getAsn() != null) {
                data.set("asn", om.valueToTree(this.getAsn()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getName() != null) {
                data.set("name", om.valueToTree(this.getName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.RosCustomerGatewayProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosCustomerGatewayProps.Jsii$Proxy that = (RosCustomerGatewayProps.Jsii$Proxy) o;

            if (!ipAddress.equals(that.ipAddress)) return false;
            if (this.asn != null ? !this.asn.equals(that.asn) : that.asn != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            return this.name != null ? this.name.equals(that.name) : that.name == null;
        }

        @Override
        public final int hashCode() {
            int result = this.ipAddress.hashCode();
            result = 31 * result + (this.asn != null ? this.asn.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.name != null ? this.name.hashCode() : 0);
            return result;
        }
    }
}
