package com.aliyun.ros.cdk.vpc.datasource;

/**
 * Properties for defining a <code>DATASOURCE::VPC::Ipv4Gateways</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-07-25T03:56:02.920Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.datasource.Ipv4GatewaysProps")
@software.amazon.jsii.Jsii.Proxy(Ipv4GatewaysProps.Jsii$Proxy.class)
public interface Ipv4GatewaysProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property ipv4GatewayId: The resource attribute field that represents the resource level 1 ID.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpv4GatewayId() {
        return null;
    }

    /**
     * Property ipv4GatewayName: Resource name.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpv4GatewayName() {
        return null;
    }

    /**
     * Property vpcId: The ID of the VPC associated with the IPv4 Gateway.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVpcId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link Ipv4GatewaysProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link Ipv4GatewaysProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<Ipv4GatewaysProps> {
        java.lang.Object ipv4GatewayId;
        java.lang.Object ipv4GatewayName;
        java.lang.Object vpcId;

        /**
         * Sets the value of {@link Ipv4GatewaysProps#getIpv4GatewayId}
         * @param ipv4GatewayId Property ipv4GatewayId: The resource attribute field that represents the resource level 1 ID.
         * @return {@code this}
         */
        public Builder ipv4GatewayId(java.lang.String ipv4GatewayId) {
            this.ipv4GatewayId = ipv4GatewayId;
            return this;
        }

        /**
         * Sets the value of {@link Ipv4GatewaysProps#getIpv4GatewayId}
         * @param ipv4GatewayId Property ipv4GatewayId: The resource attribute field that represents the resource level 1 ID.
         * @return {@code this}
         */
        public Builder ipv4GatewayId(com.aliyun.ros.cdk.core.IResolvable ipv4GatewayId) {
            this.ipv4GatewayId = ipv4GatewayId;
            return this;
        }

        /**
         * Sets the value of {@link Ipv4GatewaysProps#getIpv4GatewayName}
         * @param ipv4GatewayName Property ipv4GatewayName: Resource name.
         * @return {@code this}
         */
        public Builder ipv4GatewayName(java.lang.String ipv4GatewayName) {
            this.ipv4GatewayName = ipv4GatewayName;
            return this;
        }

        /**
         * Sets the value of {@link Ipv4GatewaysProps#getIpv4GatewayName}
         * @param ipv4GatewayName Property ipv4GatewayName: Resource name.
         * @return {@code this}
         */
        public Builder ipv4GatewayName(com.aliyun.ros.cdk.core.IResolvable ipv4GatewayName) {
            this.ipv4GatewayName = ipv4GatewayName;
            return this;
        }

        /**
         * Sets the value of {@link Ipv4GatewaysProps#getVpcId}
         * @param vpcId Property vpcId: The ID of the VPC associated with the IPv4 Gateway.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link Ipv4GatewaysProps#getVpcId}
         * @param vpcId Property vpcId: The ID of the VPC associated with the IPv4 Gateway.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link Ipv4GatewaysProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public Ipv4GatewaysProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link Ipv4GatewaysProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements Ipv4GatewaysProps {
        private final java.lang.Object ipv4GatewayId;
        private final java.lang.Object ipv4GatewayName;
        private final java.lang.Object vpcId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.ipv4GatewayId = software.amazon.jsii.Kernel.get(this, "ipv4GatewayId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipv4GatewayName = software.amazon.jsii.Kernel.get(this, "ipv4GatewayName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.ipv4GatewayId = builder.ipv4GatewayId;
            this.ipv4GatewayName = builder.ipv4GatewayName;
            this.vpcId = builder.vpcId;
        }

        @Override
        public final java.lang.Object getIpv4GatewayId() {
            return this.ipv4GatewayId;
        }

        @Override
        public final java.lang.Object getIpv4GatewayName() {
            return this.ipv4GatewayName;
        }

        @Override
        public final java.lang.Object getVpcId() {
            return this.vpcId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getIpv4GatewayId() != null) {
                data.set("ipv4GatewayId", om.valueToTree(this.getIpv4GatewayId()));
            }
            if (this.getIpv4GatewayName() != null) {
                data.set("ipv4GatewayName", om.valueToTree(this.getIpv4GatewayName()));
            }
            if (this.getVpcId() != null) {
                data.set("vpcId", om.valueToTree(this.getVpcId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.datasource.Ipv4GatewaysProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            Ipv4GatewaysProps.Jsii$Proxy that = (Ipv4GatewaysProps.Jsii$Proxy) o;

            if (this.ipv4GatewayId != null ? !this.ipv4GatewayId.equals(that.ipv4GatewayId) : that.ipv4GatewayId != null) return false;
            if (this.ipv4GatewayName != null ? !this.ipv4GatewayName.equals(that.ipv4GatewayName) : that.ipv4GatewayName != null) return false;
            return this.vpcId != null ? this.vpcId.equals(that.vpcId) : that.vpcId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.ipv4GatewayId != null ? this.ipv4GatewayId.hashCode() : 0;
            result = 31 * result + (this.ipv4GatewayName != null ? this.ipv4GatewayName.hashCode() : 0);
            result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
            return result;
        }
    }
}
