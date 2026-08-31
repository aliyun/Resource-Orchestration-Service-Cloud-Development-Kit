package com.aliyun.ros.cdk.vpc;

/**
 * Properties for defining a <code>CustomerGateway</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-customergateway
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-08-31T12:05:00.175Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.CustomerGatewayProps")
@software.amazon.jsii.Jsii.Proxy(CustomerGatewayProps.Jsii$Proxy.class)
public interface CustomerGatewayProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property ipAddress: The static IP address of the gateway device in the data center.
     * <p>
     * <ul>
     * <li>If you want to create a public IPsec-VPN connection, enter a public IP
     * address.</li>
     * <li>If you want to create a private IPsec-VPN connection, enter a private IP
     * address.
     * You cannot use the following IP addresses. Otherwise, a IPsec-VPN connection
     * cannot be established:</li>
     * <li>100.64.0.0~100.127.255.255</li>
     * <li>127.0.0.0~127.255.255.255</li>
     * <li>169.254.0.0~169.254.255.255</li>
     * <li>224.0.0.0~239.255.255.255</li>
     * <li>255.0.0.0~255.255.255.255</li>
     * </ul>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getIpAddress();

    /**
     * Property asn: The autonomous system number (ASN) of the gateway device in your data center.
     * <p>
     * This parameter is required If you want to use Border Gateway Protocol (BGP) for
     * the IPsec-VPN connection. Valid values: 1 to 4294967295. 45104 is not supported.
     * Asn is a 4-byte number. You can enter it in two segments and separate the first
     * 16 bits from the following 16 bits with a period (.). Enter the number in each
     * segment in decimal format.
     * For example, if you enter 123.456, the ASN is 8061384. The ASN is calculated by
     * using the following formula: 123 × 65536 + 456 = 8061384.
     * <p>
     * <blockquote>
     * <p>
     * <ul>
     * <li>We recommend that you use a private ASN to establish BGP connections to
     * the cloud platform. For information about the range of private ASNs, see the relevant
     * documentation.</li>
     * <li>45104 is a unique identifier assigned by IANA to the cloud platform. It is used to
     * identify the cloud platform during route selection and data transmission over the
     * Internet.</li>
     * </ul>
     * <p>
     * </blockquote>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAsn() {
        return null;
    }

    /**
     * Property description: The description of the customer gateway.
     * <p>
     * The description must be 1 to 100 characters in length, and cannot start with
     * <code>http:\/\/</code> or <code>https:\/\/</code>.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property name: The name of the customer gateway.
     * <p>
     * The name must be 1 to 100 characters in length, and cannot start with <code>http:\/\/</code>
     * or <code>https:\/\/</code>.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
        return null;
    }

    /**
     * Property resourceGroupId: The ID of the resource group to which the user gateway belongs.
     * <p>
     * <ul>
     * <li>You can call the ListResourceGroups interface to query the resource group ID.</li>
     * <li>If you do not specify a resource group, the user gateway will belong to the default resource group after creation.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

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
        java.lang.Object ipAddress;
        java.lang.Object asn;
        java.lang.Object description;
        java.lang.Object name;
        java.lang.Object resourceGroupId;

        /**
         * Sets the value of {@link CustomerGatewayProps#getIpAddress}
         * @param ipAddress Property ipAddress: The static IP address of the gateway device in the data center. This parameter is required.
         *                  <ul>
         *                  <li>If you want to create a public IPsec-VPN connection, enter a public IP
         *                  address.</li>
         *                  <li>If you want to create a private IPsec-VPN connection, enter a private IP
         *                  address.
         *                  You cannot use the following IP addresses. Otherwise, a IPsec-VPN connection
         *                  cannot be established:</li>
         *                  <li>100.64.0.0~100.127.255.255</li>
         *                  <li>127.0.0.0~127.255.255.255</li>
         *                  <li>169.254.0.0~169.254.255.255</li>
         *                  <li>224.0.0.0~239.255.255.255</li>
         *                  <li>255.0.0.0~255.255.255.255</li>
         *                  </ul>
         * @return {@code this}
         */
        public Builder ipAddress(java.lang.String ipAddress) {
            this.ipAddress = ipAddress;
            return this;
        }

        /**
         * Sets the value of {@link CustomerGatewayProps#getIpAddress}
         * @param ipAddress Property ipAddress: The static IP address of the gateway device in the data center. This parameter is required.
         *                  <ul>
         *                  <li>If you want to create a public IPsec-VPN connection, enter a public IP
         *                  address.</li>
         *                  <li>If you want to create a private IPsec-VPN connection, enter a private IP
         *                  address.
         *                  You cannot use the following IP addresses. Otherwise, a IPsec-VPN connection
         *                  cannot be established:</li>
         *                  <li>100.64.0.0~100.127.255.255</li>
         *                  <li>127.0.0.0~127.255.255.255</li>
         *                  <li>169.254.0.0~169.254.255.255</li>
         *                  <li>224.0.0.0~239.255.255.255</li>
         *                  <li>255.0.0.0~255.255.255.255</li>
         *                  </ul>
         * @return {@code this}
         */
        public Builder ipAddress(com.aliyun.ros.cdk.core.IResolvable ipAddress) {
            this.ipAddress = ipAddress;
            return this;
        }

        /**
         * Sets the value of {@link CustomerGatewayProps#getAsn}
         * @param asn Property asn: The autonomous system number (ASN) of the gateway device in your data center.
         *            This parameter is required If you want to use Border Gateway Protocol (BGP) for
         *            the IPsec-VPN connection. Valid values: 1 to 4294967295. 45104 is not supported.
         *            Asn is a 4-byte number. You can enter it in two segments and separate the first
         *            16 bits from the following 16 bits with a period (.). Enter the number in each
         *            segment in decimal format.
         *            For example, if you enter 123.456, the ASN is 8061384. The ASN is calculated by
         *            using the following formula: 123 × 65536 + 456 = 8061384.
         *            <p>
         *            <blockquote>
         *            <p>
         *            <ul>
         *            <li>We recommend that you use a private ASN to establish BGP connections to
         *            the cloud platform. For information about the range of private ASNs, see the relevant
         *            documentation.</li>
         *            <li>45104 is a unique identifier assigned by IANA to the cloud platform. It is used to
         *            identify the cloud platform during route selection and data transmission over the
         *            Internet.</li>
         *            </ul>
         *            <p>
         *            </blockquote>
         * @return {@code this}
         */
        public Builder asn(java.lang.Number asn) {
            this.asn = asn;
            return this;
        }

        /**
         * Sets the value of {@link CustomerGatewayProps#getAsn}
         * @param asn Property asn: The autonomous system number (ASN) of the gateway device in your data center.
         *            This parameter is required If you want to use Border Gateway Protocol (BGP) for
         *            the IPsec-VPN connection. Valid values: 1 to 4294967295. 45104 is not supported.
         *            Asn is a 4-byte number. You can enter it in two segments and separate the first
         *            16 bits from the following 16 bits with a period (.). Enter the number in each
         *            segment in decimal format.
         *            For example, if you enter 123.456, the ASN is 8061384. The ASN is calculated by
         *            using the following formula: 123 × 65536 + 456 = 8061384.
         *            <p>
         *            <blockquote>
         *            <p>
         *            <ul>
         *            <li>We recommend that you use a private ASN to establish BGP connections to
         *            the cloud platform. For information about the range of private ASNs, see the relevant
         *            documentation.</li>
         *            <li>45104 is a unique identifier assigned by IANA to the cloud platform. It is used to
         *            identify the cloud platform during route selection and data transmission over the
         *            Internet.</li>
         *            </ul>
         *            <p>
         *            </blockquote>
         * @return {@code this}
         */
        public Builder asn(com.aliyun.ros.cdk.core.IResolvable asn) {
            this.asn = asn;
            return this;
        }

        /**
         * Sets the value of {@link CustomerGatewayProps#getDescription}
         * @param description Property description: The description of the customer gateway.
         *                    The description must be 1 to 100 characters in length, and cannot start with
         *                    <code>http:\/\/</code> or <code>https:\/\/</code>.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link CustomerGatewayProps#getDescription}
         * @param description Property description: The description of the customer gateway.
         *                    The description must be 1 to 100 characters in length, and cannot start with
         *                    <code>http:\/\/</code> or <code>https:\/\/</code>.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link CustomerGatewayProps#getName}
         * @param name Property name: The name of the customer gateway.
         *             The name must be 1 to 100 characters in length, and cannot start with <code>http:\/\/</code>
         *             or <code>https:\/\/</code>.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link CustomerGatewayProps#getName}
         * @param name Property name: The name of the customer gateway.
         *             The name must be 1 to 100 characters in length, and cannot start with <code>http:\/\/</code>
         *             or <code>https:\/\/</code>.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link CustomerGatewayProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the user gateway belongs.
         *                        <ul>
         *                        <li>You can call the ListResourceGroups interface to query the resource group ID.</li>
         *                        <li>If you do not specify a resource group, the user gateway will belong to the default resource group after creation.</li>
         *                        </ul>
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link CustomerGatewayProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the user gateway belongs.
         *                        <ul>
         *                        <li>You can call the ListResourceGroups interface to query the resource group ID.</li>
         *                        <li>If you do not specify a resource group, the user gateway will belong to the default resource group after creation.</li>
         *                        </ul>
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
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
        private final java.lang.Object ipAddress;
        private final java.lang.Object asn;
        private final java.lang.Object description;
        private final java.lang.Object name;
        private final java.lang.Object resourceGroupId;

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
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
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
            this.resourceGroupId = builder.resourceGroupId;
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
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
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
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.CustomerGatewayProps"));
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

            if (!ipAddress.equals(that.ipAddress)) return false;
            if (this.asn != null ? !this.asn.equals(that.asn) : that.asn != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.name != null ? !this.name.equals(that.name) : that.name != null) return false;
            return this.resourceGroupId != null ? this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.ipAddress.hashCode();
            result = 31 * result + (this.asn != null ? this.asn.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.name != null ? this.name.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            return result;
        }
    }
}
