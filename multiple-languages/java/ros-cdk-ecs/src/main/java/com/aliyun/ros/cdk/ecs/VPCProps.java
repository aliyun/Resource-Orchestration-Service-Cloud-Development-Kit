package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a <code>ALIYUN::ECS::VPC</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-01T09:26:37.206Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.VPCProps")
@software.amazon.jsii.Jsii.Proxy(VPCProps.Jsii$Proxy.class)
public interface VPCProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property cidrBlock: The IP address range of the VPC in the CIDR block form.
     * <p>
     * You can use the following IP address ranges and their subnets:
     * 10.0.0.0/8
     * 172.16.0.0/12 (Default)
     * 192.168.0.0/16
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCidrBlock() {
        return null;
    }

    /**
     * Property description: Description of the vpc, [2, 256] characters.
     * <p>
     * Do not fill or empty, the default is empty.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property enableIpv6: Whether to enable an IPv6 network cidr, the value is:False (default): not turned on.True: On.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableIpv6() {
        return null;
    }

    /**
     * Property ipv6CidrBlock: IPv6 network cidr of the VPC.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpv6CidrBlock() {
        return null;
    }

    /**
     * Property ipv6Isp: The Internet service provider (ISP) for IPv6 addresses of the VPC.
     * <p>
     * Valid values:
     * BGP(default): Alibaba Cloud BGP IPv6
     * ChinaMobile: China Mobile (single line)
     * ChinaUnicom: China Unicom (single line)
     * ChinaTelecom: China Telecom (single line)
     * Note If your Alibaba Cloud account is allowed to activate single-ISP bandwidth, you can set the parameter to ChinaTelecom, ChinaUnicom, and ChinaMobile.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpv6Isp() {
        return null;
    }

    /**
     * Property resourceGroupId: Resource group id.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property secondaryCidrBlocks: The secondary IPv4 CIDR blocks.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecondaryCidrBlocks() {
        return null;
    }

    /**
     * Property tags: Tags to attach to vpc.
     * <p>
     * Max support 20 tags to add during create vpc. Each tag with two properties Key and Value, and Key is required.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ecs.RosVPC.TagsProperty> getTags() {
        return null;
    }

    /**
     * Property userCidr: The user CIDR block.
     * <p>
     * Separate multiple CIDR blocks with commas (,). At most three CIDR blocks are supported.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUserCidr() {
        return null;
    }

    /**
     * Property vpcName: Display name of the vpc instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVpcName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link VPCProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link VPCProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<VPCProps> {
        java.lang.Object cidrBlock;
        java.lang.Object description;
        java.lang.Object enableIpv6;
        java.lang.Object ipv6CidrBlock;
        java.lang.Object ipv6Isp;
        java.lang.Object resourceGroupId;
        java.lang.Object secondaryCidrBlocks;
        java.util.List<com.aliyun.ros.cdk.ecs.RosVPC.TagsProperty> tags;
        java.lang.Object userCidr;
        java.lang.Object vpcName;

        /**
         * Sets the value of {@link VPCProps#getCidrBlock}
         * @param cidrBlock Property cidrBlock: The IP address range of the VPC in the CIDR block form.
         *                  You can use the following IP address ranges and their subnets:
         *                  10.0.0.0/8
         *                  172.16.0.0/12 (Default)
         *                  192.168.0.0/16
         * @return {@code this}
         */
        public Builder cidrBlock(java.lang.String cidrBlock) {
            this.cidrBlock = cidrBlock;
            return this;
        }

        /**
         * Sets the value of {@link VPCProps#getCidrBlock}
         * @param cidrBlock Property cidrBlock: The IP address range of the VPC in the CIDR block form.
         *                  You can use the following IP address ranges and their subnets:
         *                  10.0.0.0/8
         *                  172.16.0.0/12 (Default)
         *                  192.168.0.0/16
         * @return {@code this}
         */
        public Builder cidrBlock(com.aliyun.ros.cdk.core.IResolvable cidrBlock) {
            this.cidrBlock = cidrBlock;
            return this;
        }

        /**
         * Sets the value of {@link VPCProps#getDescription}
         * @param description Property description: Description of the vpc, [2, 256] characters.
         *                    Do not fill or empty, the default is empty.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link VPCProps#getDescription}
         * @param description Property description: Description of the vpc, [2, 256] characters.
         *                    Do not fill or empty, the default is empty.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link VPCProps#getEnableIpv6}
         * @param enableIpv6 Property enableIpv6: Whether to enable an IPv6 network cidr, the value is:False (default): not turned on.True: On.
         * @return {@code this}
         */
        public Builder enableIpv6(java.lang.Boolean enableIpv6) {
            this.enableIpv6 = enableIpv6;
            return this;
        }

        /**
         * Sets the value of {@link VPCProps#getEnableIpv6}
         * @param enableIpv6 Property enableIpv6: Whether to enable an IPv6 network cidr, the value is:False (default): not turned on.True: On.
         * @return {@code this}
         */
        public Builder enableIpv6(com.aliyun.ros.cdk.core.IResolvable enableIpv6) {
            this.enableIpv6 = enableIpv6;
            return this;
        }

        /**
         * Sets the value of {@link VPCProps#getIpv6CidrBlock}
         * @param ipv6CidrBlock Property ipv6CidrBlock: IPv6 network cidr of the VPC.
         * @return {@code this}
         */
        public Builder ipv6CidrBlock(java.lang.String ipv6CidrBlock) {
            this.ipv6CidrBlock = ipv6CidrBlock;
            return this;
        }

        /**
         * Sets the value of {@link VPCProps#getIpv6CidrBlock}
         * @param ipv6CidrBlock Property ipv6CidrBlock: IPv6 network cidr of the VPC.
         * @return {@code this}
         */
        public Builder ipv6CidrBlock(com.aliyun.ros.cdk.core.IResolvable ipv6CidrBlock) {
            this.ipv6CidrBlock = ipv6CidrBlock;
            return this;
        }

        /**
         * Sets the value of {@link VPCProps#getIpv6Isp}
         * @param ipv6Isp Property ipv6Isp: The Internet service provider (ISP) for IPv6 addresses of the VPC.
         *                Valid values:
         *                BGP(default): Alibaba Cloud BGP IPv6
         *                ChinaMobile: China Mobile (single line)
         *                ChinaUnicom: China Unicom (single line)
         *                ChinaTelecom: China Telecom (single line)
         *                Note If your Alibaba Cloud account is allowed to activate single-ISP bandwidth, you can set the parameter to ChinaTelecom, ChinaUnicom, and ChinaMobile.
         * @return {@code this}
         */
        public Builder ipv6Isp(java.lang.String ipv6Isp) {
            this.ipv6Isp = ipv6Isp;
            return this;
        }

        /**
         * Sets the value of {@link VPCProps#getIpv6Isp}
         * @param ipv6Isp Property ipv6Isp: The Internet service provider (ISP) for IPv6 addresses of the VPC.
         *                Valid values:
         *                BGP(default): Alibaba Cloud BGP IPv6
         *                ChinaMobile: China Mobile (single line)
         *                ChinaUnicom: China Unicom (single line)
         *                ChinaTelecom: China Telecom (single line)
         *                Note If your Alibaba Cloud account is allowed to activate single-ISP bandwidth, you can set the parameter to ChinaTelecom, ChinaUnicom, and ChinaMobile.
         * @return {@code this}
         */
        public Builder ipv6Isp(com.aliyun.ros.cdk.core.IResolvable ipv6Isp) {
            this.ipv6Isp = ipv6Isp;
            return this;
        }

        /**
         * Sets the value of {@link VPCProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: Resource group id.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link VPCProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: Resource group id.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link VPCProps#getSecondaryCidrBlocks}
         * @param secondaryCidrBlocks Property secondaryCidrBlocks: The secondary IPv4 CIDR blocks.
         * @return {@code this}
         */
        public Builder secondaryCidrBlocks(com.aliyun.ros.cdk.core.IResolvable secondaryCidrBlocks) {
            this.secondaryCidrBlocks = secondaryCidrBlocks;
            return this;
        }

        /**
         * Sets the value of {@link VPCProps#getSecondaryCidrBlocks}
         * @param secondaryCidrBlocks Property secondaryCidrBlocks: The secondary IPv4 CIDR blocks.
         * @return {@code this}
         */
        public Builder secondaryCidrBlocks(java.util.List<? extends java.lang.Object> secondaryCidrBlocks) {
            this.secondaryCidrBlocks = secondaryCidrBlocks;
            return this;
        }

        /**
         * Sets the value of {@link VPCProps#getTags}
         * @param tags Property tags: Tags to attach to vpc.
         *             Max support 20 tags to add during create vpc. Each tag with two properties Key and Value, and Key is required.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.ecs.RosVPC.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.RosVPC.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link VPCProps#getUserCidr}
         * @param userCidr Property userCidr: The user CIDR block.
         *                 Separate multiple CIDR blocks with commas (,). At most three CIDR blocks are supported.
         * @return {@code this}
         */
        public Builder userCidr(java.lang.String userCidr) {
            this.userCidr = userCidr;
            return this;
        }

        /**
         * Sets the value of {@link VPCProps#getUserCidr}
         * @param userCidr Property userCidr: The user CIDR block.
         *                 Separate multiple CIDR blocks with commas (,). At most three CIDR blocks are supported.
         * @return {@code this}
         */
        public Builder userCidr(com.aliyun.ros.cdk.core.IResolvable userCidr) {
            this.userCidr = userCidr;
            return this;
        }

        /**
         * Sets the value of {@link VPCProps#getVpcName}
         * @param vpcName Property vpcName: Display name of the vpc instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
         * @return {@code this}
         */
        public Builder vpcName(java.lang.String vpcName) {
            this.vpcName = vpcName;
            return this;
        }

        /**
         * Sets the value of {@link VPCProps#getVpcName}
         * @param vpcName Property vpcName: Display name of the vpc instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
         * @return {@code this}
         */
        public Builder vpcName(com.aliyun.ros.cdk.core.IResolvable vpcName) {
            this.vpcName = vpcName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link VPCProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public VPCProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link VPCProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements VPCProps {
        private final java.lang.Object cidrBlock;
        private final java.lang.Object description;
        private final java.lang.Object enableIpv6;
        private final java.lang.Object ipv6CidrBlock;
        private final java.lang.Object ipv6Isp;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object secondaryCidrBlocks;
        private final java.util.List<com.aliyun.ros.cdk.ecs.RosVPC.TagsProperty> tags;
        private final java.lang.Object userCidr;
        private final java.lang.Object vpcName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.cidrBlock = software.amazon.jsii.Kernel.get(this, "cidrBlock", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enableIpv6 = software.amazon.jsii.Kernel.get(this, "enableIpv6", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipv6CidrBlock = software.amazon.jsii.Kernel.get(this, "ipv6CidrBlock", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipv6Isp = software.amazon.jsii.Kernel.get(this, "ipv6Isp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.secondaryCidrBlocks = software.amazon.jsii.Kernel.get(this, "secondaryCidrBlocks", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.RosVPC.TagsProperty.class)));
            this.userCidr = software.amazon.jsii.Kernel.get(this, "userCidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcName = software.amazon.jsii.Kernel.get(this, "vpcName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.cidrBlock = builder.cidrBlock;
            this.description = builder.description;
            this.enableIpv6 = builder.enableIpv6;
            this.ipv6CidrBlock = builder.ipv6CidrBlock;
            this.ipv6Isp = builder.ipv6Isp;
            this.resourceGroupId = builder.resourceGroupId;
            this.secondaryCidrBlocks = builder.secondaryCidrBlocks;
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.RosVPC.TagsProperty>)builder.tags;
            this.userCidr = builder.userCidr;
            this.vpcName = builder.vpcName;
        }

        @Override
        public final java.lang.Object getCidrBlock() {
            return this.cidrBlock;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getEnableIpv6() {
            return this.enableIpv6;
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
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getSecondaryCidrBlocks() {
            return this.secondaryCidrBlocks;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.ecs.RosVPC.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.Object getUserCidr() {
            return this.userCidr;
        }

        @Override
        public final java.lang.Object getVpcName() {
            return this.vpcName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getCidrBlock() != null) {
                data.set("cidrBlock", om.valueToTree(this.getCidrBlock()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getEnableIpv6() != null) {
                data.set("enableIpv6", om.valueToTree(this.getEnableIpv6()));
            }
            if (this.getIpv6CidrBlock() != null) {
                data.set("ipv6CidrBlock", om.valueToTree(this.getIpv6CidrBlock()));
            }
            if (this.getIpv6Isp() != null) {
                data.set("ipv6Isp", om.valueToTree(this.getIpv6Isp()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getSecondaryCidrBlocks() != null) {
                data.set("secondaryCidrBlocks", om.valueToTree(this.getSecondaryCidrBlocks()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getUserCidr() != null) {
                data.set("userCidr", om.valueToTree(this.getUserCidr()));
            }
            if (this.getVpcName() != null) {
                data.set("vpcName", om.valueToTree(this.getVpcName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.VPCProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            VPCProps.Jsii$Proxy that = (VPCProps.Jsii$Proxy) o;

            if (this.cidrBlock != null ? !this.cidrBlock.equals(that.cidrBlock) : that.cidrBlock != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.enableIpv6 != null ? !this.enableIpv6.equals(that.enableIpv6) : that.enableIpv6 != null) return false;
            if (this.ipv6CidrBlock != null ? !this.ipv6CidrBlock.equals(that.ipv6CidrBlock) : that.ipv6CidrBlock != null) return false;
            if (this.ipv6Isp != null ? !this.ipv6Isp.equals(that.ipv6Isp) : that.ipv6Isp != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.secondaryCidrBlocks != null ? !this.secondaryCidrBlocks.equals(that.secondaryCidrBlocks) : that.secondaryCidrBlocks != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            if (this.userCidr != null ? !this.userCidr.equals(that.userCidr) : that.userCidr != null) return false;
            return this.vpcName != null ? this.vpcName.equals(that.vpcName) : that.vpcName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.cidrBlock != null ? this.cidrBlock.hashCode() : 0;
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.enableIpv6 != null ? this.enableIpv6.hashCode() : 0);
            result = 31 * result + (this.ipv6CidrBlock != null ? this.ipv6CidrBlock.hashCode() : 0);
            result = 31 * result + (this.ipv6Isp != null ? this.ipv6Isp.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.secondaryCidrBlocks != null ? this.secondaryCidrBlocks.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.userCidr != null ? this.userCidr.hashCode() : 0);
            result = 31 * result + (this.vpcName != null ? this.vpcName.hashCode() : 0);
            return result;
        }
    }
}
