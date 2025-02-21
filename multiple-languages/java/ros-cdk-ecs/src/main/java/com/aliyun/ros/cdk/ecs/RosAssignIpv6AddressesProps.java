package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a <code>RosAssignIpv6Addresses</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-assignipv6addresses
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:15.381Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RosAssignIpv6AddressesProps")
@software.amazon.jsii.Jsii.Proxy(RosAssignIpv6AddressesProps.Jsii$Proxy.class)
public interface RosAssignIpv6AddressesProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNetworkInterfaceId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpv6AddressCount() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpv6Addresses() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpv6PrefixCount() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpv6Prefixes() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosAssignIpv6AddressesProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosAssignIpv6AddressesProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosAssignIpv6AddressesProps> {
        java.lang.Object networkInterfaceId;
        java.lang.Object ipv6AddressCount;
        java.lang.Object ipv6Addresses;
        java.lang.Object ipv6PrefixCount;
        java.lang.Object ipv6Prefixes;

        /**
         * Sets the value of {@link RosAssignIpv6AddressesProps#getNetworkInterfaceId}
         * @param networkInterfaceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder networkInterfaceId(java.lang.String networkInterfaceId) {
            this.networkInterfaceId = networkInterfaceId;
            return this;
        }

        /**
         * Sets the value of {@link RosAssignIpv6AddressesProps#getNetworkInterfaceId}
         * @param networkInterfaceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder networkInterfaceId(com.aliyun.ros.cdk.core.IResolvable networkInterfaceId) {
            this.networkInterfaceId = networkInterfaceId;
            return this;
        }

        /**
         * Sets the value of {@link RosAssignIpv6AddressesProps#getIpv6AddressCount}
         * @param ipv6AddressCount the value to be set.
         * @return {@code this}
         */
        public Builder ipv6AddressCount(java.lang.Number ipv6AddressCount) {
            this.ipv6AddressCount = ipv6AddressCount;
            return this;
        }

        /**
         * Sets the value of {@link RosAssignIpv6AddressesProps#getIpv6AddressCount}
         * @param ipv6AddressCount the value to be set.
         * @return {@code this}
         */
        public Builder ipv6AddressCount(com.aliyun.ros.cdk.core.IResolvable ipv6AddressCount) {
            this.ipv6AddressCount = ipv6AddressCount;
            return this;
        }

        /**
         * Sets the value of {@link RosAssignIpv6AddressesProps#getIpv6Addresses}
         * @param ipv6Addresses the value to be set.
         * @return {@code this}
         */
        public Builder ipv6Addresses(java.util.List<? extends java.lang.Object> ipv6Addresses) {
            this.ipv6Addresses = ipv6Addresses;
            return this;
        }

        /**
         * Sets the value of {@link RosAssignIpv6AddressesProps#getIpv6Addresses}
         * @param ipv6Addresses the value to be set.
         * @return {@code this}
         */
        public Builder ipv6Addresses(com.aliyun.ros.cdk.core.IResolvable ipv6Addresses) {
            this.ipv6Addresses = ipv6Addresses;
            return this;
        }

        /**
         * Sets the value of {@link RosAssignIpv6AddressesProps#getIpv6PrefixCount}
         * @param ipv6PrefixCount the value to be set.
         * @return {@code this}
         */
        public Builder ipv6PrefixCount(java.lang.Number ipv6PrefixCount) {
            this.ipv6PrefixCount = ipv6PrefixCount;
            return this;
        }

        /**
         * Sets the value of {@link RosAssignIpv6AddressesProps#getIpv6PrefixCount}
         * @param ipv6PrefixCount the value to be set.
         * @return {@code this}
         */
        public Builder ipv6PrefixCount(com.aliyun.ros.cdk.core.IResolvable ipv6PrefixCount) {
            this.ipv6PrefixCount = ipv6PrefixCount;
            return this;
        }

        /**
         * Sets the value of {@link RosAssignIpv6AddressesProps#getIpv6Prefixes}
         * @param ipv6Prefixes the value to be set.
         * @return {@code this}
         */
        public Builder ipv6Prefixes(java.util.List<? extends java.lang.Object> ipv6Prefixes) {
            this.ipv6Prefixes = ipv6Prefixes;
            return this;
        }

        /**
         * Sets the value of {@link RosAssignIpv6AddressesProps#getIpv6Prefixes}
         * @param ipv6Prefixes the value to be set.
         * @return {@code this}
         */
        public Builder ipv6Prefixes(com.aliyun.ros.cdk.core.IResolvable ipv6Prefixes) {
            this.ipv6Prefixes = ipv6Prefixes;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosAssignIpv6AddressesProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosAssignIpv6AddressesProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosAssignIpv6AddressesProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosAssignIpv6AddressesProps {
        private final java.lang.Object networkInterfaceId;
        private final java.lang.Object ipv6AddressCount;
        private final java.lang.Object ipv6Addresses;
        private final java.lang.Object ipv6PrefixCount;
        private final java.lang.Object ipv6Prefixes;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.networkInterfaceId = software.amazon.jsii.Kernel.get(this, "networkInterfaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipv6AddressCount = software.amazon.jsii.Kernel.get(this, "ipv6AddressCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipv6Addresses = software.amazon.jsii.Kernel.get(this, "ipv6Addresses", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipv6PrefixCount = software.amazon.jsii.Kernel.get(this, "ipv6PrefixCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipv6Prefixes = software.amazon.jsii.Kernel.get(this, "ipv6Prefixes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.networkInterfaceId = java.util.Objects.requireNonNull(builder.networkInterfaceId, "networkInterfaceId is required");
            this.ipv6AddressCount = builder.ipv6AddressCount;
            this.ipv6Addresses = builder.ipv6Addresses;
            this.ipv6PrefixCount = builder.ipv6PrefixCount;
            this.ipv6Prefixes = builder.ipv6Prefixes;
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
        public final java.lang.Object getIpv6PrefixCount() {
            return this.ipv6PrefixCount;
        }

        @Override
        public final java.lang.Object getIpv6Prefixes() {
            return this.ipv6Prefixes;
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
            if (this.getIpv6PrefixCount() != null) {
                data.set("ipv6PrefixCount", om.valueToTree(this.getIpv6PrefixCount()));
            }
            if (this.getIpv6Prefixes() != null) {
                data.set("ipv6Prefixes", om.valueToTree(this.getIpv6Prefixes()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.RosAssignIpv6AddressesProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosAssignIpv6AddressesProps.Jsii$Proxy that = (RosAssignIpv6AddressesProps.Jsii$Proxy) o;

            if (!networkInterfaceId.equals(that.networkInterfaceId)) return false;
            if (this.ipv6AddressCount != null ? !this.ipv6AddressCount.equals(that.ipv6AddressCount) : that.ipv6AddressCount != null) return false;
            if (this.ipv6Addresses != null ? !this.ipv6Addresses.equals(that.ipv6Addresses) : that.ipv6Addresses != null) return false;
            if (this.ipv6PrefixCount != null ? !this.ipv6PrefixCount.equals(that.ipv6PrefixCount) : that.ipv6PrefixCount != null) return false;
            return this.ipv6Prefixes != null ? this.ipv6Prefixes.equals(that.ipv6Prefixes) : that.ipv6Prefixes == null;
        }

        @Override
        public final int hashCode() {
            int result = this.networkInterfaceId.hashCode();
            result = 31 * result + (this.ipv6AddressCount != null ? this.ipv6AddressCount.hashCode() : 0);
            result = 31 * result + (this.ipv6Addresses != null ? this.ipv6Addresses.hashCode() : 0);
            result = 31 * result + (this.ipv6PrefixCount != null ? this.ipv6PrefixCount.hashCode() : 0);
            result = 31 * result + (this.ipv6Prefixes != null ? this.ipv6Prefixes.hashCode() : 0);
            return result;
        }
    }
}
