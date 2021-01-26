package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a `ALIYUN::ECS::AssignPrivateIpAddresses`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T03:36:09.899Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.AssignPrivateIpAddressesProps")
@software.amazon.jsii.Jsii.Proxy(AssignPrivateIpAddressesProps.Jsii$Proxy.class)
public interface AssignPrivateIpAddressesProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getNetworkInterfaceId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPrivateIpAddresses() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getSecondaryPrivateIpAddressCount() {
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
        private java.lang.String networkInterfaceId;
        private java.lang.Object privateIpAddresses;
        private java.lang.Number secondaryPrivateIpAddressCount;

        /**
         * Sets the value of {@link AssignPrivateIpAddressesProps#getNetworkInterfaceId}
         * @param networkInterfaceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder networkInterfaceId(java.lang.String networkInterfaceId) {
            this.networkInterfaceId = networkInterfaceId;
            return this;
        }

        /**
         * Sets the value of {@link AssignPrivateIpAddressesProps#getPrivateIpAddresses}
         * @param privateIpAddresses the value to be set.
         * @return {@code this}
         */
        public Builder privateIpAddresses(java.util.List<? extends java.lang.Object> privateIpAddresses) {
            this.privateIpAddresses = privateIpAddresses;
            return this;
        }

        /**
         * Sets the value of {@link AssignPrivateIpAddressesProps#getPrivateIpAddresses}
         * @param privateIpAddresses the value to be set.
         * @return {@code this}
         */
        public Builder privateIpAddresses(com.aliyun.ros.cdk.core.IResolvable privateIpAddresses) {
            this.privateIpAddresses = privateIpAddresses;
            return this;
        }

        /**
         * Sets the value of {@link AssignPrivateIpAddressesProps#getSecondaryPrivateIpAddressCount}
         * @param secondaryPrivateIpAddressCount the value to be set.
         * @return {@code this}
         */
        public Builder secondaryPrivateIpAddressCount(java.lang.Number secondaryPrivateIpAddressCount) {
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
            return new Jsii$Proxy(networkInterfaceId, privateIpAddresses, secondaryPrivateIpAddressCount);
        }
    }

    /**
     * An implementation for {@link AssignPrivateIpAddressesProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AssignPrivateIpAddressesProps {
        private final java.lang.String networkInterfaceId;
        private final java.lang.Object privateIpAddresses;
        private final java.lang.Number secondaryPrivateIpAddressCount;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.networkInterfaceId = software.amazon.jsii.Kernel.get(this, "networkInterfaceId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.privateIpAddresses = software.amazon.jsii.Kernel.get(this, "privateIpAddresses", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.secondaryPrivateIpAddressCount = software.amazon.jsii.Kernel.get(this, "secondaryPrivateIpAddressCount", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String networkInterfaceId, final java.lang.Object privateIpAddresses, final java.lang.Number secondaryPrivateIpAddressCount) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.networkInterfaceId = java.util.Objects.requireNonNull(networkInterfaceId, "networkInterfaceId is required");
            this.privateIpAddresses = privateIpAddresses;
            this.secondaryPrivateIpAddressCount = secondaryPrivateIpAddressCount;
        }

        @Override
        public final java.lang.String getNetworkInterfaceId() {
            return this.networkInterfaceId;
        }

        @Override
        public final java.lang.Object getPrivateIpAddresses() {
            return this.privateIpAddresses;
        }

        @Override
        public final java.lang.Number getSecondaryPrivateIpAddressCount() {
            return this.secondaryPrivateIpAddressCount;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("networkInterfaceId", om.valueToTree(this.getNetworkInterfaceId()));
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
            if (this.privateIpAddresses != null ? !this.privateIpAddresses.equals(that.privateIpAddresses) : that.privateIpAddresses != null) return false;
            return this.secondaryPrivateIpAddressCount != null ? this.secondaryPrivateIpAddressCount.equals(that.secondaryPrivateIpAddressCount) : that.secondaryPrivateIpAddressCount == null;
        }

        @Override
        public final int hashCode() {
            int result = this.networkInterfaceId.hashCode();
            result = 31 * result + (this.privateIpAddresses != null ? this.privateIpAddresses.hashCode() : 0);
            result = 31 * result + (this.secondaryPrivateIpAddressCount != null ? this.secondaryPrivateIpAddressCount.hashCode() : 0);
            return result;
        }
    }
}
