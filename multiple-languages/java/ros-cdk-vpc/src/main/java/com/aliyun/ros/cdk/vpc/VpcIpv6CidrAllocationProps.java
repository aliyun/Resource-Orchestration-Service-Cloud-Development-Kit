package com.aliyun.ros.cdk.vpc;

/**
 * Properties for defining a <code>VpcIpv6CidrAllocation</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpcipv6cidrallocation
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-10-18T08:56:34.286Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.VpcIpv6CidrAllocationProps")
@software.amazon.jsii.Jsii.Proxy(VpcIpv6CidrAllocationProps.Jsii$Proxy.class)
public interface VpcIpv6CidrAllocationProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property addressPoolType: The type of the IPv6 address pool.
     * <p>
     * Set the value to custom.
     * Note This parameter is required.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAddressPoolType() {
        return null;
    }

    /**
     * Property ipv6CidrBlock: The IPv6 CIDR block that you want to reserve.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpv6CidrBlock() {
        return null;
    }

    /**
     * Property ipv6Isp: The type of IPv6 CIDR block.
     * <p>
     * Valid values:
     * BGP (default)
     * BGP_International
     * ChinaMobile
     * ChinaUnicom
     * ChinaTelecom
     * ChinaMobile_L2
     * ChinaUnicom_L2
     * ChinaTelecom_L2
     * Note
     * If your Alibaba Cloud account is allowed to use single-ISP bandwidth, valid values are: ChinaTelecom, ChinaUnicom, and ChinaMobile.
     * You can reserve only one IPv6 CIDR block of each type. After a reserved IPv6 CIDR block of a type is allocated to a VPC, you can reserve another IPv6 CIDR of the type.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpv6Isp() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link VpcIpv6CidrAllocationProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link VpcIpv6CidrAllocationProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<VpcIpv6CidrAllocationProps> {
        java.lang.Object addressPoolType;
        java.lang.Object ipv6CidrBlock;
        java.lang.Object ipv6Isp;

        /**
         * Sets the value of {@link VpcIpv6CidrAllocationProps#getAddressPoolType}
         * @param addressPoolType Property addressPoolType: The type of the IPv6 address pool.
         *                        Set the value to custom.
         *                        Note This parameter is required.
         * @return {@code this}
         */
        public Builder addressPoolType(java.lang.String addressPoolType) {
            this.addressPoolType = addressPoolType;
            return this;
        }

        /**
         * Sets the value of {@link VpcIpv6CidrAllocationProps#getAddressPoolType}
         * @param addressPoolType Property addressPoolType: The type of the IPv6 address pool.
         *                        Set the value to custom.
         *                        Note This parameter is required.
         * @return {@code this}
         */
        public Builder addressPoolType(com.aliyun.ros.cdk.core.IResolvable addressPoolType) {
            this.addressPoolType = addressPoolType;
            return this;
        }

        /**
         * Sets the value of {@link VpcIpv6CidrAllocationProps#getIpv6CidrBlock}
         * @param ipv6CidrBlock Property ipv6CidrBlock: The IPv6 CIDR block that you want to reserve.
         * @return {@code this}
         */
        public Builder ipv6CidrBlock(java.lang.String ipv6CidrBlock) {
            this.ipv6CidrBlock = ipv6CidrBlock;
            return this;
        }

        /**
         * Sets the value of {@link VpcIpv6CidrAllocationProps#getIpv6CidrBlock}
         * @param ipv6CidrBlock Property ipv6CidrBlock: The IPv6 CIDR block that you want to reserve.
         * @return {@code this}
         */
        public Builder ipv6CidrBlock(com.aliyun.ros.cdk.core.IResolvable ipv6CidrBlock) {
            this.ipv6CidrBlock = ipv6CidrBlock;
            return this;
        }

        /**
         * Sets the value of {@link VpcIpv6CidrAllocationProps#getIpv6Isp}
         * @param ipv6Isp Property ipv6Isp: The type of IPv6 CIDR block.
         *                Valid values:
         *                BGP (default)
         *                BGP_International
         *                ChinaMobile
         *                ChinaUnicom
         *                ChinaTelecom
         *                ChinaMobile_L2
         *                ChinaUnicom_L2
         *                ChinaTelecom_L2
         *                Note
         *                If your Alibaba Cloud account is allowed to use single-ISP bandwidth, valid values are: ChinaTelecom, ChinaUnicom, and ChinaMobile.
         *                You can reserve only one IPv6 CIDR block of each type. After a reserved IPv6 CIDR block of a type is allocated to a VPC, you can reserve another IPv6 CIDR of the type.
         * @return {@code this}
         */
        public Builder ipv6Isp(java.lang.String ipv6Isp) {
            this.ipv6Isp = ipv6Isp;
            return this;
        }

        /**
         * Sets the value of {@link VpcIpv6CidrAllocationProps#getIpv6Isp}
         * @param ipv6Isp Property ipv6Isp: The type of IPv6 CIDR block.
         *                Valid values:
         *                BGP (default)
         *                BGP_International
         *                ChinaMobile
         *                ChinaUnicom
         *                ChinaTelecom
         *                ChinaMobile_L2
         *                ChinaUnicom_L2
         *                ChinaTelecom_L2
         *                Note
         *                If your Alibaba Cloud account is allowed to use single-ISP bandwidth, valid values are: ChinaTelecom, ChinaUnicom, and ChinaMobile.
         *                You can reserve only one IPv6 CIDR block of each type. After a reserved IPv6 CIDR block of a type is allocated to a VPC, you can reserve another IPv6 CIDR of the type.
         * @return {@code this}
         */
        public Builder ipv6Isp(com.aliyun.ros.cdk.core.IResolvable ipv6Isp) {
            this.ipv6Isp = ipv6Isp;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link VpcIpv6CidrAllocationProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public VpcIpv6CidrAllocationProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link VpcIpv6CidrAllocationProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements VpcIpv6CidrAllocationProps {
        private final java.lang.Object addressPoolType;
        private final java.lang.Object ipv6CidrBlock;
        private final java.lang.Object ipv6Isp;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.addressPoolType = software.amazon.jsii.Kernel.get(this, "addressPoolType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipv6CidrBlock = software.amazon.jsii.Kernel.get(this, "ipv6CidrBlock", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipv6Isp = software.amazon.jsii.Kernel.get(this, "ipv6Isp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.addressPoolType = builder.addressPoolType;
            this.ipv6CidrBlock = builder.ipv6CidrBlock;
            this.ipv6Isp = builder.ipv6Isp;
        }

        @Override
        public final java.lang.Object getAddressPoolType() {
            return this.addressPoolType;
        }

        @Override
        public final java.lang.Object getIpv6CidrBlock() {
            return this.ipv6CidrBlock;
        }

        @Override
        public final java.lang.Object getIpv6Isp() {
            return this.ipv6Isp;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getAddressPoolType() != null) {
                data.set("addressPoolType", om.valueToTree(this.getAddressPoolType()));
            }
            if (this.getIpv6CidrBlock() != null) {
                data.set("ipv6CidrBlock", om.valueToTree(this.getIpv6CidrBlock()));
            }
            if (this.getIpv6Isp() != null) {
                data.set("ipv6Isp", om.valueToTree(this.getIpv6Isp()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.VpcIpv6CidrAllocationProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            VpcIpv6CidrAllocationProps.Jsii$Proxy that = (VpcIpv6CidrAllocationProps.Jsii$Proxy) o;

            if (this.addressPoolType != null ? !this.addressPoolType.equals(that.addressPoolType) : that.addressPoolType != null) return false;
            if (this.ipv6CidrBlock != null ? !this.ipv6CidrBlock.equals(that.ipv6CidrBlock) : that.ipv6CidrBlock != null) return false;
            return this.ipv6Isp != null ? this.ipv6Isp.equals(that.ipv6Isp) : that.ipv6Isp == null;
        }

        @Override
        public final int hashCode() {
            int result = this.addressPoolType != null ? this.addressPoolType.hashCode() : 0;
            result = 31 * result + (this.ipv6CidrBlock != null ? this.ipv6CidrBlock.hashCode() : 0);
            result = 31 * result + (this.ipv6Isp != null ? this.ipv6Isp.hashCode() : 0);
            return result;
        }
    }
}
