package com.aliyun.ros.cdk.vpc.datasource;

/**
 * Properties for defining a <code>NatIpCidrs</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-natipcidrs
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:25:01.407Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.datasource.NatIpCidrsProps")
@software.amazon.jsii.Jsii.Proxy(NatIpCidrsProps.Jsii$Proxy.class)
public interface NatIpCidrsProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property natGatewayId: NAT IP ADDRESS range to the security group of the Kafka VPC NAT gateway instance ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNatGatewayId();

    /**
     * Property natIpCidr: Create a NAT IP ADDRESS.
     * <p>
     * The new address segment must meet the following conditions: belong to 10.0.0.0/8, 172.16.0.0/12 or 192.168.0.0/16 network segment and its subnet. Support the subnet mask of the number of bits in the range of 16 to 32-bit. If you want to use the IP address of a public network segment as the NAT IP ADDRESS, the Virtual Private Cloud (VPC NAT is already using the IP address of a public network of permissions. For more information, see create a virtual private cloud (VPC NAT gateway instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNatIpCidr() {
        return null;
    }

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
     * <li>Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRefreshOptions() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link NatIpCidrsProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link NatIpCidrsProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<NatIpCidrsProps> {
        java.lang.Object natGatewayId;
        java.lang.Object natIpCidr;
        java.lang.Object refreshOptions;

        /**
         * Sets the value of {@link NatIpCidrsProps#getNatGatewayId}
         * @param natGatewayId Property natGatewayId: NAT IP ADDRESS range to the security group of the Kafka VPC NAT gateway instance ID. This parameter is required.
         * @return {@code this}
         */
        public Builder natGatewayId(java.lang.String natGatewayId) {
            this.natGatewayId = natGatewayId;
            return this;
        }

        /**
         * Sets the value of {@link NatIpCidrsProps#getNatGatewayId}
         * @param natGatewayId Property natGatewayId: NAT IP ADDRESS range to the security group of the Kafka VPC NAT gateway instance ID. This parameter is required.
         * @return {@code this}
         */
        public Builder natGatewayId(com.aliyun.ros.cdk.core.IResolvable natGatewayId) {
            this.natGatewayId = natGatewayId;
            return this;
        }

        /**
         * Sets the value of {@link NatIpCidrsProps#getNatIpCidr}
         * @param natIpCidr Property natIpCidr: Create a NAT IP ADDRESS.
         *                  The new address segment must meet the following conditions: belong to 10.0.0.0/8, 172.16.0.0/12 or 192.168.0.0/16 network segment and its subnet. Support the subnet mask of the number of bits in the range of 16 to 32-bit. If you want to use the IP address of a public network segment as the NAT IP ADDRESS, the Virtual Private Cloud (VPC NAT is already using the IP address of a public network of permissions. For more information, see create a virtual private cloud (VPC NAT gateway instance.
         * @return {@code this}
         */
        public Builder natIpCidr(java.lang.String natIpCidr) {
            this.natIpCidr = natIpCidr;
            return this;
        }

        /**
         * Sets the value of {@link NatIpCidrsProps#getNatIpCidr}
         * @param natIpCidr Property natIpCidr: Create a NAT IP ADDRESS.
         *                  The new address segment must meet the following conditions: belong to 10.0.0.0/8, 172.16.0.0/12 or 192.168.0.0/16 network segment and its subnet. Support the subnet mask of the number of bits in the range of 16 to 32-bit. If you want to use the IP address of a public network segment as the NAT IP ADDRESS, the Virtual Private Cloud (VPC NAT is already using the IP address of a public network of permissions. For more information, see create a virtual private cloud (VPC NAT gateway instance.
         * @return {@code this}
         */
        public Builder natIpCidr(com.aliyun.ros.cdk.core.IResolvable natIpCidr) {
            this.natIpCidr = natIpCidr;
            return this;
        }

        /**
         * Sets the value of {@link NatIpCidrsProps#getRefreshOptions}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         *                       Valid values:
         *                       <p>
         *                       <ul>
         *                       <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         *                       <li>Always: Always refresh the datasource resource when the stack is updated.
         *                       Default is Never.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder refreshOptions(java.lang.String refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link NatIpCidrsProps#getRefreshOptions}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         *                       Valid values:
         *                       <p>
         *                       <ul>
         *                       <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         *                       <li>Always: Always refresh the datasource resource when the stack is updated.
         *                       Default is Never.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder refreshOptions(com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link NatIpCidrsProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public NatIpCidrsProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link NatIpCidrsProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements NatIpCidrsProps {
        private final java.lang.Object natGatewayId;
        private final java.lang.Object natIpCidr;
        private final java.lang.Object refreshOptions;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.natGatewayId = software.amazon.jsii.Kernel.get(this, "natGatewayId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.natIpCidr = software.amazon.jsii.Kernel.get(this, "natIpCidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.natGatewayId = java.util.Objects.requireNonNull(builder.natGatewayId, "natGatewayId is required");
            this.natIpCidr = builder.natIpCidr;
            this.refreshOptions = builder.refreshOptions;
        }

        @Override
        public final java.lang.Object getNatGatewayId() {
            return this.natGatewayId;
        }

        @Override
        public final java.lang.Object getNatIpCidr() {
            return this.natIpCidr;
        }

        @Override
        public final java.lang.Object getRefreshOptions() {
            return this.refreshOptions;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("natGatewayId", om.valueToTree(this.getNatGatewayId()));
            if (this.getNatIpCidr() != null) {
                data.set("natIpCidr", om.valueToTree(this.getNatIpCidr()));
            }
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.datasource.NatIpCidrsProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            NatIpCidrsProps.Jsii$Proxy that = (NatIpCidrsProps.Jsii$Proxy) o;

            if (!natGatewayId.equals(that.natGatewayId)) return false;
            if (this.natIpCidr != null ? !this.natIpCidr.equals(that.natIpCidr) : that.natIpCidr != null) return false;
            return this.refreshOptions != null ? this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions == null;
        }

        @Override
        public final int hashCode() {
            int result = this.natGatewayId.hashCode();
            result = 31 * result + (this.natIpCidr != null ? this.natIpCidr.hashCode() : 0);
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            return result;
        }
    }
}
