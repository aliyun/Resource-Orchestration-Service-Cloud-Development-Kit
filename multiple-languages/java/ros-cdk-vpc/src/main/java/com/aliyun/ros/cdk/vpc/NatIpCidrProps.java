package com.aliyun.ros.cdk.vpc;

/**
 * Properties for defining a <code>NatIpCidr</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-natipcidr
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-12T02:20:31.352Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.NatIpCidrProps")
@software.amazon.jsii.Jsii.Proxy(NatIpCidrProps.Jsii$Proxy.class)
public interface NatIpCidrProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property natGatewayId: The ID of the Virtual Private Cloud (VPC) NAT gateway with which you want to associate the CIDR block.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNatGatewayId();

    /**
     * Property natIpCidr: The NAT CIDR block that you want to associate with the NAT gateway.
     * <p>
     * The new CIDR block must meet the following conditions:
     * The NAT CIDR block must fall within 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16, or their subnets.
     * The subnet mask must be 16 to 32 bits in length.
     * The NAT CIDR block cannot overlap with the private CIDR block of the VPC to which the NAT gateway belongs. If you want to use other IP addresses from the private CIDR block of the VPC to provide NAT services, create a vSwitch and attach the vSwitch to another VPC NAT gateway.
     * If you want to use public IP addresses to provide NAT services, make sure that the public IP addresses fall within a customer CIDR block of the VPC to which the VPC NAT gateway belongs. For more information, see What is customer CIDR block?.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNatIpCidr();

    /**
     * Property natIpCidrDescription: The description of the NAT CIDR block.
     * <p>
     * The description must be 2 to 256 characters in length and start with a letter. The description cannot start with http:// or https://.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNatIpCidrDescription();

    /**
     * Property natIpCidrName: The name of the CIDR block.
     * <p>
     * The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter. The name must start with a letter and cannot start with http:// or https://.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNatIpCidrName();

    /**
     * @return a {@link Builder} of {@link NatIpCidrProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link NatIpCidrProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<NatIpCidrProps> {
        java.lang.Object natGatewayId;
        java.lang.Object natIpCidr;
        java.lang.Object natIpCidrDescription;
        java.lang.Object natIpCidrName;

        /**
         * Sets the value of {@link NatIpCidrProps#getNatGatewayId}
         * @param natGatewayId Property natGatewayId: The ID of the Virtual Private Cloud (VPC) NAT gateway with which you want to associate the CIDR block. This parameter is required.
         * @return {@code this}
         */
        public Builder natGatewayId(java.lang.String natGatewayId) {
            this.natGatewayId = natGatewayId;
            return this;
        }

        /**
         * Sets the value of {@link NatIpCidrProps#getNatGatewayId}
         * @param natGatewayId Property natGatewayId: The ID of the Virtual Private Cloud (VPC) NAT gateway with which you want to associate the CIDR block. This parameter is required.
         * @return {@code this}
         */
        public Builder natGatewayId(com.aliyun.ros.cdk.core.IResolvable natGatewayId) {
            this.natGatewayId = natGatewayId;
            return this;
        }

        /**
         * Sets the value of {@link NatIpCidrProps#getNatIpCidr}
         * @param natIpCidr Property natIpCidr: The NAT CIDR block that you want to associate with the NAT gateway. This parameter is required.
         *                  The new CIDR block must meet the following conditions:
         *                  The NAT CIDR block must fall within 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16, or their subnets.
         *                  The subnet mask must be 16 to 32 bits in length.
         *                  The NAT CIDR block cannot overlap with the private CIDR block of the VPC to which the NAT gateway belongs. If you want to use other IP addresses from the private CIDR block of the VPC to provide NAT services, create a vSwitch and attach the vSwitch to another VPC NAT gateway.
         *                  If you want to use public IP addresses to provide NAT services, make sure that the public IP addresses fall within a customer CIDR block of the VPC to which the VPC NAT gateway belongs. For more information, see What is customer CIDR block?.
         * @return {@code this}
         */
        public Builder natIpCidr(java.lang.String natIpCidr) {
            this.natIpCidr = natIpCidr;
            return this;
        }

        /**
         * Sets the value of {@link NatIpCidrProps#getNatIpCidr}
         * @param natIpCidr Property natIpCidr: The NAT CIDR block that you want to associate with the NAT gateway. This parameter is required.
         *                  The new CIDR block must meet the following conditions:
         *                  The NAT CIDR block must fall within 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16, or their subnets.
         *                  The subnet mask must be 16 to 32 bits in length.
         *                  The NAT CIDR block cannot overlap with the private CIDR block of the VPC to which the NAT gateway belongs. If you want to use other IP addresses from the private CIDR block of the VPC to provide NAT services, create a vSwitch and attach the vSwitch to another VPC NAT gateway.
         *                  If you want to use public IP addresses to provide NAT services, make sure that the public IP addresses fall within a customer CIDR block of the VPC to which the VPC NAT gateway belongs. For more information, see What is customer CIDR block?.
         * @return {@code this}
         */
        public Builder natIpCidr(com.aliyun.ros.cdk.core.IResolvable natIpCidr) {
            this.natIpCidr = natIpCidr;
            return this;
        }

        /**
         * Sets the value of {@link NatIpCidrProps#getNatIpCidrDescription}
         * @param natIpCidrDescription Property natIpCidrDescription: The description of the NAT CIDR block. This parameter is required.
         *                             The description must be 2 to 256 characters in length and start with a letter. The description cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder natIpCidrDescription(java.lang.String natIpCidrDescription) {
            this.natIpCidrDescription = natIpCidrDescription;
            return this;
        }

        /**
         * Sets the value of {@link NatIpCidrProps#getNatIpCidrDescription}
         * @param natIpCidrDescription Property natIpCidrDescription: The description of the NAT CIDR block. This parameter is required.
         *                             The description must be 2 to 256 characters in length and start with a letter. The description cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder natIpCidrDescription(com.aliyun.ros.cdk.core.IResolvable natIpCidrDescription) {
            this.natIpCidrDescription = natIpCidrDescription;
            return this;
        }

        /**
         * Sets the value of {@link NatIpCidrProps#getNatIpCidrName}
         * @param natIpCidrName Property natIpCidrName: The name of the CIDR block. This parameter is required.
         *                      The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter. The name must start with a letter and cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder natIpCidrName(java.lang.String natIpCidrName) {
            this.natIpCidrName = natIpCidrName;
            return this;
        }

        /**
         * Sets the value of {@link NatIpCidrProps#getNatIpCidrName}
         * @param natIpCidrName Property natIpCidrName: The name of the CIDR block. This parameter is required.
         *                      The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter. The name must start with a letter and cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder natIpCidrName(com.aliyun.ros.cdk.core.IResolvable natIpCidrName) {
            this.natIpCidrName = natIpCidrName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link NatIpCidrProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public NatIpCidrProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link NatIpCidrProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements NatIpCidrProps {
        private final java.lang.Object natGatewayId;
        private final java.lang.Object natIpCidr;
        private final java.lang.Object natIpCidrDescription;
        private final java.lang.Object natIpCidrName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.natGatewayId = software.amazon.jsii.Kernel.get(this, "natGatewayId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.natIpCidr = software.amazon.jsii.Kernel.get(this, "natIpCidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.natIpCidrDescription = software.amazon.jsii.Kernel.get(this, "natIpCidrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.natIpCidrName = software.amazon.jsii.Kernel.get(this, "natIpCidrName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.natGatewayId = java.util.Objects.requireNonNull(builder.natGatewayId, "natGatewayId is required");
            this.natIpCidr = java.util.Objects.requireNonNull(builder.natIpCidr, "natIpCidr is required");
            this.natIpCidrDescription = java.util.Objects.requireNonNull(builder.natIpCidrDescription, "natIpCidrDescription is required");
            this.natIpCidrName = java.util.Objects.requireNonNull(builder.natIpCidrName, "natIpCidrName is required");
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
        public final java.lang.Object getNatIpCidrDescription() {
            return this.natIpCidrDescription;
        }

        @Override
        public final java.lang.Object getNatIpCidrName() {
            return this.natIpCidrName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("natGatewayId", om.valueToTree(this.getNatGatewayId()));
            data.set("natIpCidr", om.valueToTree(this.getNatIpCidr()));
            data.set("natIpCidrDescription", om.valueToTree(this.getNatIpCidrDescription()));
            data.set("natIpCidrName", om.valueToTree(this.getNatIpCidrName()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.NatIpCidrProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            NatIpCidrProps.Jsii$Proxy that = (NatIpCidrProps.Jsii$Proxy) o;

            if (!natGatewayId.equals(that.natGatewayId)) return false;
            if (!natIpCidr.equals(that.natIpCidr)) return false;
            if (!natIpCidrDescription.equals(that.natIpCidrDescription)) return false;
            return this.natIpCidrName.equals(that.natIpCidrName);
        }

        @Override
        public final int hashCode() {
            int result = this.natGatewayId.hashCode();
            result = 31 * result + (this.natIpCidr.hashCode());
            result = 31 * result + (this.natIpCidrDescription.hashCode());
            result = 31 * result + (this.natIpCidrName.hashCode());
            return result;
        }
    }
}
