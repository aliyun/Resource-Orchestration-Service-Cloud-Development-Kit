package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a <code>AssignPrivateIpAddresses</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-assignprivateipaddresses
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:37.794Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.AssignPrivateIpAddressesProps")
@software.amazon.jsii.Jsii.Proxy(AssignPrivateIpAddressesProps.Jsii$Proxy.class)
public interface AssignPrivateIpAddressesProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property networkInterfaceId: The ID of the ENI.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNetworkInterfaceId();

    /**
     * Property ipv4PrefixCount: The specified number of IPv4 prefixes to be assigned to the ENI.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpv4PrefixCount() {
        return null;
    }

    /**
     * Property ipv4Prefixes: One or multiple IPv4 prefixes to be assigned to the ENI.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpv4Prefixes() {
        return null;
    }

    /**
     * Property privateIpAddresses: One or multiple secondary private IP addresses selected from the CIDR block of the VSwitch that hosts the ENI.
     * <p>
     * Valid values of number of private ip addresses:
     * When the ENI is in the Available state: 1 to 10.
     * When the ENI is in the InUse state: limited by the instance type.
     * For more information, see Instance type families.
     * You must specify either the PrivateIpAddresses parameter or the SecondaryPrivateIpAddressCount parameter to assign secondary private IP addresses.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPrivateIpAddresses() {
        return null;
    }

    /**
     * Property secondaryPrivateIpAddressCount: The specified number of private IP addresses to be assigned by the ECS instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecondaryPrivateIpAddressCount() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link AssignPrivateIpAddressesProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link AssignPrivateIpAddressesProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<AssignPrivateIpAddressesProps> {
        java.lang.Object networkInterfaceId;
        java.lang.Object ipv4PrefixCount;
        java.lang.Object ipv4Prefixes;
        java.lang.Object privateIpAddresses;
        java.lang.Object secondaryPrivateIpAddressCount;

        /**
         * Sets the value of {@link AssignPrivateIpAddressesProps#getNetworkInterfaceId}
         * @param networkInterfaceId Property networkInterfaceId: The ID of the ENI. This parameter is required.
         * @return {@code this}
         */
        public Builder networkInterfaceId(java.lang.String networkInterfaceId) {
            this.networkInterfaceId = networkInterfaceId;
            return this;
        }

        /**
         * Sets the value of {@link AssignPrivateIpAddressesProps#getNetworkInterfaceId}
         * @param networkInterfaceId Property networkInterfaceId: The ID of the ENI. This parameter is required.
         * @return {@code this}
         */
        public Builder networkInterfaceId(com.aliyun.ros.cdk.core.IResolvable networkInterfaceId) {
            this.networkInterfaceId = networkInterfaceId;
            return this;
        }

        /**
         * Sets the value of {@link AssignPrivateIpAddressesProps#getIpv4PrefixCount}
         * @param ipv4PrefixCount Property ipv4PrefixCount: The specified number of IPv4 prefixes to be assigned to the ENI.
         * @return {@code this}
         */
        public Builder ipv4PrefixCount(java.lang.Number ipv4PrefixCount) {
            this.ipv4PrefixCount = ipv4PrefixCount;
            return this;
        }

        /**
         * Sets the value of {@link AssignPrivateIpAddressesProps#getIpv4PrefixCount}
         * @param ipv4PrefixCount Property ipv4PrefixCount: The specified number of IPv4 prefixes to be assigned to the ENI.
         * @return {@code this}
         */
        public Builder ipv4PrefixCount(com.aliyun.ros.cdk.core.IResolvable ipv4PrefixCount) {
            this.ipv4PrefixCount = ipv4PrefixCount;
            return this;
        }

        /**
         * Sets the value of {@link AssignPrivateIpAddressesProps#getIpv4Prefixes}
         * @param ipv4Prefixes Property ipv4Prefixes: One or multiple IPv4 prefixes to be assigned to the ENI.
         * @return {@code this}
         */
        public Builder ipv4Prefixes(java.util.List<? extends java.lang.Object> ipv4Prefixes) {
            this.ipv4Prefixes = ipv4Prefixes;
            return this;
        }

        /**
         * Sets the value of {@link AssignPrivateIpAddressesProps#getIpv4Prefixes}
         * @param ipv4Prefixes Property ipv4Prefixes: One or multiple IPv4 prefixes to be assigned to the ENI.
         * @return {@code this}
         */
        public Builder ipv4Prefixes(com.aliyun.ros.cdk.core.IResolvable ipv4Prefixes) {
            this.ipv4Prefixes = ipv4Prefixes;
            return this;
        }

        /**
         * Sets the value of {@link AssignPrivateIpAddressesProps#getPrivateIpAddresses}
         * @param privateIpAddresses Property privateIpAddresses: One or multiple secondary private IP addresses selected from the CIDR block of the VSwitch that hosts the ENI.
         *                           Valid values of number of private ip addresses:
         *                           When the ENI is in the Available state: 1 to 10.
         *                           When the ENI is in the InUse state: limited by the instance type.
         *                           For more information, see Instance type families.
         *                           You must specify either the PrivateIpAddresses parameter or the SecondaryPrivateIpAddressCount parameter to assign secondary private IP addresses.
         * @return {@code this}
         */
        public Builder privateIpAddresses(java.util.List<? extends java.lang.Object> privateIpAddresses) {
            this.privateIpAddresses = privateIpAddresses;
            return this;
        }

        /**
         * Sets the value of {@link AssignPrivateIpAddressesProps#getPrivateIpAddresses}
         * @param privateIpAddresses Property privateIpAddresses: One or multiple secondary private IP addresses selected from the CIDR block of the VSwitch that hosts the ENI.
         *                           Valid values of number of private ip addresses:
         *                           When the ENI is in the Available state: 1 to 10.
         *                           When the ENI is in the InUse state: limited by the instance type.
         *                           For more information, see Instance type families.
         *                           You must specify either the PrivateIpAddresses parameter or the SecondaryPrivateIpAddressCount parameter to assign secondary private IP addresses.
         * @return {@code this}
         */
        public Builder privateIpAddresses(com.aliyun.ros.cdk.core.IResolvable privateIpAddresses) {
            this.privateIpAddresses = privateIpAddresses;
            return this;
        }

        /**
         * Sets the value of {@link AssignPrivateIpAddressesProps#getSecondaryPrivateIpAddressCount}
         * @param secondaryPrivateIpAddressCount Property secondaryPrivateIpAddressCount: The specified number of private IP addresses to be assigned by the ECS instance.
         * @return {@code this}
         */
        public Builder secondaryPrivateIpAddressCount(java.lang.Number secondaryPrivateIpAddressCount) {
            this.secondaryPrivateIpAddressCount = secondaryPrivateIpAddressCount;
            return this;
        }

        /**
         * Sets the value of {@link AssignPrivateIpAddressesProps#getSecondaryPrivateIpAddressCount}
         * @param secondaryPrivateIpAddressCount Property secondaryPrivateIpAddressCount: The specified number of private IP addresses to be assigned by the ECS instance.
         * @return {@code this}
         */
        public Builder secondaryPrivateIpAddressCount(com.aliyun.ros.cdk.core.IResolvable secondaryPrivateIpAddressCount) {
            this.secondaryPrivateIpAddressCount = secondaryPrivateIpAddressCount;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link AssignPrivateIpAddressesProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public AssignPrivateIpAddressesProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link AssignPrivateIpAddressesProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AssignPrivateIpAddressesProps {
        private final java.lang.Object networkInterfaceId;
        private final java.lang.Object ipv4PrefixCount;
        private final java.lang.Object ipv4Prefixes;
        private final java.lang.Object privateIpAddresses;
        private final java.lang.Object secondaryPrivateIpAddressCount;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.networkInterfaceId = software.amazon.jsii.Kernel.get(this, "networkInterfaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipv4PrefixCount = software.amazon.jsii.Kernel.get(this, "ipv4PrefixCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipv4Prefixes = software.amazon.jsii.Kernel.get(this, "ipv4Prefixes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.privateIpAddresses = software.amazon.jsii.Kernel.get(this, "privateIpAddresses", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.secondaryPrivateIpAddressCount = software.amazon.jsii.Kernel.get(this, "secondaryPrivateIpAddressCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.networkInterfaceId = java.util.Objects.requireNonNull(builder.networkInterfaceId, "networkInterfaceId is required");
            this.ipv4PrefixCount = builder.ipv4PrefixCount;
            this.ipv4Prefixes = builder.ipv4Prefixes;
            this.privateIpAddresses = builder.privateIpAddresses;
            this.secondaryPrivateIpAddressCount = builder.secondaryPrivateIpAddressCount;
        }

        @Override
        public final java.lang.Object getNetworkInterfaceId() {
            return this.networkInterfaceId;
        }

        @Override
        public final java.lang.Object getIpv4PrefixCount() {
            return this.ipv4PrefixCount;
        }

        @Override
        public final java.lang.Object getIpv4Prefixes() {
            return this.ipv4Prefixes;
        }

        @Override
        public final java.lang.Object getPrivateIpAddresses() {
            return this.privateIpAddresses;
        }

        @Override
        public final java.lang.Object getSecondaryPrivateIpAddressCount() {
            return this.secondaryPrivateIpAddressCount;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("networkInterfaceId", om.valueToTree(this.getNetworkInterfaceId()));
            if (this.getIpv4PrefixCount() != null) {
                data.set("ipv4PrefixCount", om.valueToTree(this.getIpv4PrefixCount()));
            }
            if (this.getIpv4Prefixes() != null) {
                data.set("ipv4Prefixes", om.valueToTree(this.getIpv4Prefixes()));
            }
            if (this.getPrivateIpAddresses() != null) {
                data.set("privateIpAddresses", om.valueToTree(this.getPrivateIpAddresses()));
            }
            if (this.getSecondaryPrivateIpAddressCount() != null) {
                data.set("secondaryPrivateIpAddressCount", om.valueToTree(this.getSecondaryPrivateIpAddressCount()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.AssignPrivateIpAddressesProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            AssignPrivateIpAddressesProps.Jsii$Proxy that = (AssignPrivateIpAddressesProps.Jsii$Proxy) o;

            if (!networkInterfaceId.equals(that.networkInterfaceId)) return false;
            if (this.ipv4PrefixCount != null ? !this.ipv4PrefixCount.equals(that.ipv4PrefixCount) : that.ipv4PrefixCount != null) return false;
            if (this.ipv4Prefixes != null ? !this.ipv4Prefixes.equals(that.ipv4Prefixes) : that.ipv4Prefixes != null) return false;
            if (this.privateIpAddresses != null ? !this.privateIpAddresses.equals(that.privateIpAddresses) : that.privateIpAddresses != null) return false;
            return this.secondaryPrivateIpAddressCount != null ? this.secondaryPrivateIpAddressCount.equals(that.secondaryPrivateIpAddressCount) : that.secondaryPrivateIpAddressCount == null;
        }

        @Override
        public final int hashCode() {
            int result = this.networkInterfaceId.hashCode();
            result = 31 * result + (this.ipv4PrefixCount != null ? this.ipv4PrefixCount.hashCode() : 0);
            result = 31 * result + (this.ipv4Prefixes != null ? this.ipv4Prefixes.hashCode() : 0);
            result = 31 * result + (this.privateIpAddresses != null ? this.privateIpAddresses.hashCode() : 0);
            result = 31 * result + (this.secondaryPrivateIpAddressCount != null ? this.secondaryPrivateIpAddressCount.hashCode() : 0);
            return result;
        }
    }
}
