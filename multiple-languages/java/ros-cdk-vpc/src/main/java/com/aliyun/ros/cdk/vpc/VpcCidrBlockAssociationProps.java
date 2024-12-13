package com.aliyun.ros.cdk.vpc;

/**
 * Properties for defining a <code>VpcCidrBlockAssociation</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpccidrblockassociation
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-12-13T06:45:13.099Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.VpcCidrBlockAssociationProps")
@software.amazon.jsii.Jsii.Proxy(VpcCidrBlockAssociationProps.Jsii$Proxy.class)
public interface VpcCidrBlockAssociationProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property vpcId: The ID of the VPC to which you want to add a secondary CIDR block.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVpcId();

    /**
     * Property ipamPoolId: The ID of the IP Address Manager (IPAM) pool that contains IPv4 addresses.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpamPoolId() {
        return null;
    }

    /**
     * Property iPv6CidrBlock: The IPv6 CIDR block to be added.
     * <p>
     * Note You must and can specify only one of SecondaryCidrBlock and Ipv6CidrBlock.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIPv6CidrBlock() {
        return null;
    }

    /**
     * Property ipv6Isp: The type of the IPv6 CIDR block.
     * <p>
     * Valid values:
     * BGP (default)
     * ChinaMobile
     * ChinaUnicom
     * ChinaTelecom
     * Note If your Alibaba Cloud account is allowed to activate single-ISP bandwidth, you can set this parameter to ChinaTelecom, ChinaUnicom, or ChinaMobile.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpv6Isp() {
        return null;
    }

    /**
     * Property ipVersion: The version of the IP address.
     * <p>
     * Valid values:
     * IPV4: the IPv4 address.
     * IPV6: the IPv6 address. If you set IpVersion to IPV6 and do not specify SecondaryCidrBlock, you can add a secondary IPv6 CIDR block to the VPC.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpVersion() {
        return null;
    }

    /**
     * Property secondaryCidrBlock: The IPv4 CIDR block to be added.
     * <p>
     * Take note of the following requirements:
     * You can specify one of the following standard IPv4 CIDR blocks or their subnets as the secondary IPv4 CIDR block of the VPC: 192.168.0.0/16, 172.16.0.0/12, and 10.0.0.0/8.
     * You can also use a custom CIDR block other than 100.64.0.0/10, 224.0.0.0/4, 127.0.0.0/8, 169.254.0.0/16, or their subnets as the secondary IPv4 CIDR block of the VPC.
     * The CIDR block must meet the following requirements:
     * The CIDR block cannot start with 0. The subnet mask must be 8 to 28 bits in length.
     * The CIDR block cannot overlap with the primary CIDR block or an existing secondary CIDR block of the VPC.
     * Note You must and can specify only one of SecondaryCidrBlock and Ipv6CidrBlock.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecondaryCidrBlock() {
        return null;
    }

    /**
     * Property secondaryCidrMask: Add an additional network segment to the VPC from the iPam address pool by entering a mask.
     * <p>
     * Explain that the designated iPam address pool adds additional network segments to VPC, and the parameter SecondaryCidrblock or SecondaryCidrmask inputs at least one.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecondaryCidrMask() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link VpcCidrBlockAssociationProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link VpcCidrBlockAssociationProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<VpcCidrBlockAssociationProps> {
        java.lang.Object vpcId;
        java.lang.Object ipamPoolId;
        java.lang.Object iPv6CidrBlock;
        java.lang.Object ipv6Isp;
        java.lang.Object ipVersion;
        java.lang.Object secondaryCidrBlock;
        java.lang.Object secondaryCidrMask;

        /**
         * Sets the value of {@link VpcCidrBlockAssociationProps#getVpcId}
         * @param vpcId Property vpcId: The ID of the VPC to which you want to add a secondary CIDR block. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link VpcCidrBlockAssociationProps#getVpcId}
         * @param vpcId Property vpcId: The ID of the VPC to which you want to add a secondary CIDR block. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link VpcCidrBlockAssociationProps#getIpamPoolId}
         * @param ipamPoolId Property ipamPoolId: The ID of the IP Address Manager (IPAM) pool that contains IPv4 addresses.
         * @return {@code this}
         */
        public Builder ipamPoolId(java.lang.String ipamPoolId) {
            this.ipamPoolId = ipamPoolId;
            return this;
        }

        /**
         * Sets the value of {@link VpcCidrBlockAssociationProps#getIpamPoolId}
         * @param ipamPoolId Property ipamPoolId: The ID of the IP Address Manager (IPAM) pool that contains IPv4 addresses.
         * @return {@code this}
         */
        public Builder ipamPoolId(com.aliyun.ros.cdk.core.IResolvable ipamPoolId) {
            this.ipamPoolId = ipamPoolId;
            return this;
        }

        /**
         * Sets the value of {@link VpcCidrBlockAssociationProps#getIPv6CidrBlock}
         * @param iPv6CidrBlock Property iPv6CidrBlock: The IPv6 CIDR block to be added.
         *                      Note You must and can specify only one of SecondaryCidrBlock and Ipv6CidrBlock.
         * @return {@code this}
         */
        public Builder iPv6CidrBlock(java.lang.String iPv6CidrBlock) {
            this.iPv6CidrBlock = iPv6CidrBlock;
            return this;
        }

        /**
         * Sets the value of {@link VpcCidrBlockAssociationProps#getIPv6CidrBlock}
         * @param iPv6CidrBlock Property iPv6CidrBlock: The IPv6 CIDR block to be added.
         *                      Note You must and can specify only one of SecondaryCidrBlock and Ipv6CidrBlock.
         * @return {@code this}
         */
        public Builder iPv6CidrBlock(com.aliyun.ros.cdk.core.IResolvable iPv6CidrBlock) {
            this.iPv6CidrBlock = iPv6CidrBlock;
            return this;
        }

        /**
         * Sets the value of {@link VpcCidrBlockAssociationProps#getIpv6Isp}
         * @param ipv6Isp Property ipv6Isp: The type of the IPv6 CIDR block.
         *                Valid values:
         *                BGP (default)
         *                ChinaMobile
         *                ChinaUnicom
         *                ChinaTelecom
         *                Note If your Alibaba Cloud account is allowed to activate single-ISP bandwidth, you can set this parameter to ChinaTelecom, ChinaUnicom, or ChinaMobile.
         * @return {@code this}
         */
        public Builder ipv6Isp(java.lang.String ipv6Isp) {
            this.ipv6Isp = ipv6Isp;
            return this;
        }

        /**
         * Sets the value of {@link VpcCidrBlockAssociationProps#getIpv6Isp}
         * @param ipv6Isp Property ipv6Isp: The type of the IPv6 CIDR block.
         *                Valid values:
         *                BGP (default)
         *                ChinaMobile
         *                ChinaUnicom
         *                ChinaTelecom
         *                Note If your Alibaba Cloud account is allowed to activate single-ISP bandwidth, you can set this parameter to ChinaTelecom, ChinaUnicom, or ChinaMobile.
         * @return {@code this}
         */
        public Builder ipv6Isp(com.aliyun.ros.cdk.core.IResolvable ipv6Isp) {
            this.ipv6Isp = ipv6Isp;
            return this;
        }

        /**
         * Sets the value of {@link VpcCidrBlockAssociationProps#getIpVersion}
         * @param ipVersion Property ipVersion: The version of the IP address.
         *                  Valid values:
         *                  IPV4: the IPv4 address.
         *                  IPV6: the IPv6 address. If you set IpVersion to IPV6 and do not specify SecondaryCidrBlock, you can add a secondary IPv6 CIDR block to the VPC.
         * @return {@code this}
         */
        public Builder ipVersion(java.lang.String ipVersion) {
            this.ipVersion = ipVersion;
            return this;
        }

        /**
         * Sets the value of {@link VpcCidrBlockAssociationProps#getIpVersion}
         * @param ipVersion Property ipVersion: The version of the IP address.
         *                  Valid values:
         *                  IPV4: the IPv4 address.
         *                  IPV6: the IPv6 address. If you set IpVersion to IPV6 and do not specify SecondaryCidrBlock, you can add a secondary IPv6 CIDR block to the VPC.
         * @return {@code this}
         */
        public Builder ipVersion(com.aliyun.ros.cdk.core.IResolvable ipVersion) {
            this.ipVersion = ipVersion;
            return this;
        }

        /**
         * Sets the value of {@link VpcCidrBlockAssociationProps#getSecondaryCidrBlock}
         * @param secondaryCidrBlock Property secondaryCidrBlock: The IPv4 CIDR block to be added.
         *                           Take note of the following requirements:
         *                           You can specify one of the following standard IPv4 CIDR blocks or their subnets as the secondary IPv4 CIDR block of the VPC: 192.168.0.0/16, 172.16.0.0/12, and 10.0.0.0/8.
         *                           You can also use a custom CIDR block other than 100.64.0.0/10, 224.0.0.0/4, 127.0.0.0/8, 169.254.0.0/16, or their subnets as the secondary IPv4 CIDR block of the VPC.
         *                           The CIDR block must meet the following requirements:
         *                           The CIDR block cannot start with 0. The subnet mask must be 8 to 28 bits in length.
         *                           The CIDR block cannot overlap with the primary CIDR block or an existing secondary CIDR block of the VPC.
         *                           Note You must and can specify only one of SecondaryCidrBlock and Ipv6CidrBlock.
         * @return {@code this}
         */
        public Builder secondaryCidrBlock(java.lang.String secondaryCidrBlock) {
            this.secondaryCidrBlock = secondaryCidrBlock;
            return this;
        }

        /**
         * Sets the value of {@link VpcCidrBlockAssociationProps#getSecondaryCidrBlock}
         * @param secondaryCidrBlock Property secondaryCidrBlock: The IPv4 CIDR block to be added.
         *                           Take note of the following requirements:
         *                           You can specify one of the following standard IPv4 CIDR blocks or their subnets as the secondary IPv4 CIDR block of the VPC: 192.168.0.0/16, 172.16.0.0/12, and 10.0.0.0/8.
         *                           You can also use a custom CIDR block other than 100.64.0.0/10, 224.0.0.0/4, 127.0.0.0/8, 169.254.0.0/16, or their subnets as the secondary IPv4 CIDR block of the VPC.
         *                           The CIDR block must meet the following requirements:
         *                           The CIDR block cannot start with 0. The subnet mask must be 8 to 28 bits in length.
         *                           The CIDR block cannot overlap with the primary CIDR block or an existing secondary CIDR block of the VPC.
         *                           Note You must and can specify only one of SecondaryCidrBlock and Ipv6CidrBlock.
         * @return {@code this}
         */
        public Builder secondaryCidrBlock(com.aliyun.ros.cdk.core.IResolvable secondaryCidrBlock) {
            this.secondaryCidrBlock = secondaryCidrBlock;
            return this;
        }

        /**
         * Sets the value of {@link VpcCidrBlockAssociationProps#getSecondaryCidrMask}
         * @param secondaryCidrMask Property secondaryCidrMask: Add an additional network segment to the VPC from the iPam address pool by entering a mask.
         *                          Explain that the designated iPam address pool adds additional network segments to VPC, and the parameter SecondaryCidrblock or SecondaryCidrmask inputs at least one.
         * @return {@code this}
         */
        public Builder secondaryCidrMask(java.lang.Number secondaryCidrMask) {
            this.secondaryCidrMask = secondaryCidrMask;
            return this;
        }

        /**
         * Sets the value of {@link VpcCidrBlockAssociationProps#getSecondaryCidrMask}
         * @param secondaryCidrMask Property secondaryCidrMask: Add an additional network segment to the VPC from the iPam address pool by entering a mask.
         *                          Explain that the designated iPam address pool adds additional network segments to VPC, and the parameter SecondaryCidrblock or SecondaryCidrmask inputs at least one.
         * @return {@code this}
         */
        public Builder secondaryCidrMask(com.aliyun.ros.cdk.core.IResolvable secondaryCidrMask) {
            this.secondaryCidrMask = secondaryCidrMask;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link VpcCidrBlockAssociationProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public VpcCidrBlockAssociationProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link VpcCidrBlockAssociationProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements VpcCidrBlockAssociationProps {
        private final java.lang.Object vpcId;
        private final java.lang.Object ipamPoolId;
        private final java.lang.Object iPv6CidrBlock;
        private final java.lang.Object ipv6Isp;
        private final java.lang.Object ipVersion;
        private final java.lang.Object secondaryCidrBlock;
        private final java.lang.Object secondaryCidrMask;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipamPoolId = software.amazon.jsii.Kernel.get(this, "ipamPoolId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.iPv6CidrBlock = software.amazon.jsii.Kernel.get(this, "iPv6CidrBlock", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipv6Isp = software.amazon.jsii.Kernel.get(this, "ipv6Isp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipVersion = software.amazon.jsii.Kernel.get(this, "ipVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.secondaryCidrBlock = software.amazon.jsii.Kernel.get(this, "secondaryCidrBlock", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.secondaryCidrMask = software.amazon.jsii.Kernel.get(this, "secondaryCidrMask", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.vpcId = java.util.Objects.requireNonNull(builder.vpcId, "vpcId is required");
            this.ipamPoolId = builder.ipamPoolId;
            this.iPv6CidrBlock = builder.iPv6CidrBlock;
            this.ipv6Isp = builder.ipv6Isp;
            this.ipVersion = builder.ipVersion;
            this.secondaryCidrBlock = builder.secondaryCidrBlock;
            this.secondaryCidrMask = builder.secondaryCidrMask;
        }

        @Override
        public final java.lang.Object getVpcId() {
            return this.vpcId;
        }

        @Override
        public final java.lang.Object getIpamPoolId() {
            return this.ipamPoolId;
        }

        @Override
        public final java.lang.Object getIPv6CidrBlock() {
            return this.iPv6CidrBlock;
        }

        @Override
        public final java.lang.Object getIpv6Isp() {
            return this.ipv6Isp;
        }

        @Override
        public final java.lang.Object getIpVersion() {
            return this.ipVersion;
        }

        @Override
        public final java.lang.Object getSecondaryCidrBlock() {
            return this.secondaryCidrBlock;
        }

        @Override
        public final java.lang.Object getSecondaryCidrMask() {
            return this.secondaryCidrMask;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("vpcId", om.valueToTree(this.getVpcId()));
            if (this.getIpamPoolId() != null) {
                data.set("ipamPoolId", om.valueToTree(this.getIpamPoolId()));
            }
            if (this.getIPv6CidrBlock() != null) {
                data.set("iPv6CidrBlock", om.valueToTree(this.getIPv6CidrBlock()));
            }
            if (this.getIpv6Isp() != null) {
                data.set("ipv6Isp", om.valueToTree(this.getIpv6Isp()));
            }
            if (this.getIpVersion() != null) {
                data.set("ipVersion", om.valueToTree(this.getIpVersion()));
            }
            if (this.getSecondaryCidrBlock() != null) {
                data.set("secondaryCidrBlock", om.valueToTree(this.getSecondaryCidrBlock()));
            }
            if (this.getSecondaryCidrMask() != null) {
                data.set("secondaryCidrMask", om.valueToTree(this.getSecondaryCidrMask()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.VpcCidrBlockAssociationProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            VpcCidrBlockAssociationProps.Jsii$Proxy that = (VpcCidrBlockAssociationProps.Jsii$Proxy) o;

            if (!vpcId.equals(that.vpcId)) return false;
            if (this.ipamPoolId != null ? !this.ipamPoolId.equals(that.ipamPoolId) : that.ipamPoolId != null) return false;
            if (this.iPv6CidrBlock != null ? !this.iPv6CidrBlock.equals(that.iPv6CidrBlock) : that.iPv6CidrBlock != null) return false;
            if (this.ipv6Isp != null ? !this.ipv6Isp.equals(that.ipv6Isp) : that.ipv6Isp != null) return false;
            if (this.ipVersion != null ? !this.ipVersion.equals(that.ipVersion) : that.ipVersion != null) return false;
            if (this.secondaryCidrBlock != null ? !this.secondaryCidrBlock.equals(that.secondaryCidrBlock) : that.secondaryCidrBlock != null) return false;
            return this.secondaryCidrMask != null ? this.secondaryCidrMask.equals(that.secondaryCidrMask) : that.secondaryCidrMask == null;
        }

        @Override
        public final int hashCode() {
            int result = this.vpcId.hashCode();
            result = 31 * result + (this.ipamPoolId != null ? this.ipamPoolId.hashCode() : 0);
            result = 31 * result + (this.iPv6CidrBlock != null ? this.iPv6CidrBlock.hashCode() : 0);
            result = 31 * result + (this.ipv6Isp != null ? this.ipv6Isp.hashCode() : 0);
            result = 31 * result + (this.ipVersion != null ? this.ipVersion.hashCode() : 0);
            result = 31 * result + (this.secondaryCidrBlock != null ? this.secondaryCidrBlock.hashCode() : 0);
            result = 31 * result + (this.secondaryCidrMask != null ? this.secondaryCidrMask.hashCode() : 0);
            return result;
        }
    }
}
