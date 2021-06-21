package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a `ALIYUN::ECS::AssignIpv6Addresses`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.30.0 (build adae23f)", date = "2021-06-21T09:47:42.909Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.AssignIpv6AddressesProps")
@software.amazon.jsii.Jsii.Proxy(AssignIpv6AddressesProps.Jsii$Proxy.class)
public interface AssignIpv6AddressesProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property networkInterfaceId: Elastic network interface ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNetworkInterfaceId();

    /**
     * Property ipv6AddressCount: IPv6 addresses specified number of randomly generated interfaces elasticity.
     * <p>
     * Note You cannot specify the parameters Ipv6Addresses and Ipv6AddressCount at the same time.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpv6AddressCount() {
        return null;
    }

    /**
     * Property ipv6Addresses: Specify one or more IPv6 addresses for the elastic NIC.
     * <p>
     * Currently, the maximum list size is 1. Example value: 2001:db8:1234:1a00::*** .
     * Note You cannot specify the parameters Ipv6Addresses and Ipv6AddressCount at the same time.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpv6Addresses() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link AssignIpv6AddressesProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link AssignIpv6AddressesProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<AssignIpv6AddressesProps> {
        private java.lang.Object networkInterfaceId;
        private java.lang.Object ipv6AddressCount;
        private java.lang.Object ipv6Addresses;

        /**
         * Sets the value of {@link AssignIpv6AddressesProps#getNetworkInterfaceId}
         * @param networkInterfaceId Property networkInterfaceId: Elastic network interface ID. This parameter is required.
         * @return {@code this}
         */
        public Builder networkInterfaceId(java.lang.String networkInterfaceId) {
            this.networkInterfaceId = networkInterfaceId;
            return this;
        }

        /**
         * Sets the value of {@link AssignIpv6AddressesProps#getNetworkInterfaceId}
         * @param networkInterfaceId Property networkInterfaceId: Elastic network interface ID. This parameter is required.
         * @return {@code this}
         */
        public Builder networkInterfaceId(com.aliyun.ros.cdk.core.IResolvable networkInterfaceId) {
            this.networkInterfaceId = networkInterfaceId;
            return this;
        }

        /**
         * Sets the value of {@link AssignIpv6AddressesProps#getIpv6AddressCount}
         * @param ipv6AddressCount Property ipv6AddressCount: IPv6 addresses specified number of randomly generated interfaces elasticity.
         *                         Note You cannot specify the parameters Ipv6Addresses and Ipv6AddressCount at the same time.
         * @return {@code this}
         */
        public Builder ipv6AddressCount(java.lang.Number ipv6AddressCount) {
            this.ipv6AddressCount = ipv6AddressCount;
            return this;
        }

        /**
         * Sets the value of {@link AssignIpv6AddressesProps#getIpv6AddressCount}
         * @param ipv6AddressCount Property ipv6AddressCount: IPv6 addresses specified number of randomly generated interfaces elasticity.
         *                         Note You cannot specify the parameters Ipv6Addresses and Ipv6AddressCount at the same time.
         * @return {@code this}
         */
        public Builder ipv6AddressCount(com.aliyun.ros.cdk.core.IResolvable ipv6AddressCount) {
            this.ipv6AddressCount = ipv6AddressCount;
            return this;
        }

        /**
         * Sets the value of {@link AssignIpv6AddressesProps#getIpv6Addresses}
         * @param ipv6Addresses Property ipv6Addresses: Specify one or more IPv6 addresses for the elastic NIC.
         *                      Currently, the maximum list size is 1. Example value: 2001:db8:1234:1a00::*** .
         *                      Note You cannot specify the parameters Ipv6Addresses and Ipv6AddressCount at the same time.
         * @return {@code this}
         */
        public Builder ipv6Addresses(java.util.List<? extends java.lang.Object> ipv6Addresses) {
            this.ipv6Addresses = ipv6Addresses;
            return this;
        }

        /**
         * Sets the value of {@link AssignIpv6AddressesProps#getIpv6Addresses}
         * @param ipv6Addresses Property ipv6Addresses: Specify one or more IPv6 addresses for the elastic NIC.
         *                      Currently, the maximum list size is 1. Example value: 2001:db8:1234:1a00::*** .
         *                      Note You cannot specify the parameters Ipv6Addresses and Ipv6AddressCount at the same time.
         * @return {@code this}
         */
        public Builder ipv6Addresses(com.aliyun.ros.cdk.core.IResolvable ipv6Addresses) {
            this.ipv6Addresses = ipv6Addresses;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link AssignIpv6AddressesProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public AssignIpv6AddressesProps build() {
            return new Jsii$Proxy(networkInterfaceId, ipv6AddressCount, ipv6Addresses);
        }
    }

    /**
     * An implementation for {@link AssignIpv6AddressesProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AssignIpv6AddressesProps {
        private final java.lang.Object networkInterfaceId;
        private final java.lang.Object ipv6AddressCount;
        private final java.lang.Object ipv6Addresses;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.networkInterfaceId = software.amazon.jsii.Kernel.get(this, "networkInterfaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipv6AddressCount = software.amazon.jsii.Kernel.get(this, "ipv6AddressCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipv6Addresses = software.amazon.jsii.Kernel.get(this, "ipv6Addresses", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.Object networkInterfaceId, final java.lang.Object ipv6AddressCount, final java.lang.Object ipv6Addresses) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.networkInterfaceId = java.util.Objects.requireNonNull(networkInterfaceId, "networkInterfaceId is required");
            this.ipv6AddressCount = ipv6AddressCount;
            this.ipv6Addresses = ipv6Addresses;
        }

        @Override
        public final java.lang.Object getNetworkInterfaceId() {
            return this.networkInterfaceId;
        }

        @Override
        public final java.lang.Object getIpv6AddressCount() {
            return this.ipv6AddressCount;
        }

        @Override
        public final java.lang.Object getIpv6Addresses() {
            return this.ipv6Addresses;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("networkInterfaceId", om.valueToTree(this.getNetworkInterfaceId()));
            if (this.getIpv6AddressCount() != null) {
                data.set("ipv6AddressCount", om.valueToTree(this.getIpv6AddressCount()));
            }
            if (this.getIpv6Addresses() != null) {
                data.set("ipv6Addresses", om.valueToTree(this.getIpv6Addresses()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.AssignIpv6AddressesProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            AssignIpv6AddressesProps.Jsii$Proxy that = (AssignIpv6AddressesProps.Jsii$Proxy) o;

            if (!networkInterfaceId.equals(that.networkInterfaceId)) return false;
            if (this.ipv6AddressCount != null ? !this.ipv6AddressCount.equals(that.ipv6AddressCount) : that.ipv6AddressCount != null) return false;
            return this.ipv6Addresses != null ? this.ipv6Addresses.equals(that.ipv6Addresses) : that.ipv6Addresses == null;
        }

        @Override
        public final int hashCode() {
            int result = this.networkInterfaceId.hashCode();
            result = 31 * result + (this.ipv6AddressCount != null ? this.ipv6AddressCount.hashCode() : 0);
            result = 31 * result + (this.ipv6Addresses != null ? this.ipv6Addresses.hashCode() : 0);
            return result;
        }
    }
}
