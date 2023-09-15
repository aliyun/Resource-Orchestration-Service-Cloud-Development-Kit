package com.aliyun.ros.cdk.vpc;

/**
 * Properties for defining a <code>ALIYUN::VPC::DhcpOptionsSet</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-15T09:57:28.658Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.DhcpOptionsSetProps")
@software.amazon.jsii.Jsii.Proxy(DhcpOptionsSetProps.Jsii$Proxy.class)
public interface DhcpOptionsSetProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property dhcpOptionsSetDescription: The description of the DHCP options set.
     * <p>
     * The description must be 2 to 256 characters in length and cannot start with http:// or https://.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDhcpOptionsSetDescription() {
        return null;
    }

    /**
     * Property dhcpOptionsSetName: The name of the DHCP options set.
     * <p>
     * The name must be 2 to 128 characters in length and can contain letters, Chinese characters, digits, underscores (_), and hyphens (-). It must start with a letter or a Chinese character.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDhcpOptionsSetName() {
        return null;
    }

    /**
     * Property domainName: The root domain, for example, example.com. After a DHCP options set is associated with a Virtual Private Cloud (VPC) network, the root domain in the DHCP options set is automatically synchronized to the ECS instances in the VPC network.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDomainName() {
        return null;
    }

    /**
     * Property domainNameServers: The DNS server IP addresses.
     * <p>
     * Note Before you specify any DNS server IP address, all ECS instances in the associated VPC network use the IP addresses of the Alibaba Cloud DNS servers, which are 100.100.2.136 and 100.100.2.138.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDomainNameServers() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link DhcpOptionsSetProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link DhcpOptionsSetProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<DhcpOptionsSetProps> {
        java.lang.Object dhcpOptionsSetDescription;
        java.lang.Object dhcpOptionsSetName;
        java.lang.Object domainName;
        java.lang.Object domainNameServers;

        /**
         * Sets the value of {@link DhcpOptionsSetProps#getDhcpOptionsSetDescription}
         * @param dhcpOptionsSetDescription Property dhcpOptionsSetDescription: The description of the DHCP options set.
         *                                  The description must be 2 to 256 characters in length and cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder dhcpOptionsSetDescription(java.lang.String dhcpOptionsSetDescription) {
            this.dhcpOptionsSetDescription = dhcpOptionsSetDescription;
            return this;
        }

        /**
         * Sets the value of {@link DhcpOptionsSetProps#getDhcpOptionsSetDescription}
         * @param dhcpOptionsSetDescription Property dhcpOptionsSetDescription: The description of the DHCP options set.
         *                                  The description must be 2 to 256 characters in length and cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder dhcpOptionsSetDescription(com.aliyun.ros.cdk.core.IResolvable dhcpOptionsSetDescription) {
            this.dhcpOptionsSetDescription = dhcpOptionsSetDescription;
            return this;
        }

        /**
         * Sets the value of {@link DhcpOptionsSetProps#getDhcpOptionsSetName}
         * @param dhcpOptionsSetName Property dhcpOptionsSetName: The name of the DHCP options set.
         *                           The name must be 2 to 128 characters in length and can contain letters, Chinese characters, digits, underscores (_), and hyphens (-). It must start with a letter or a Chinese character.
         * @return {@code this}
         */
        public Builder dhcpOptionsSetName(java.lang.String dhcpOptionsSetName) {
            this.dhcpOptionsSetName = dhcpOptionsSetName;
            return this;
        }

        /**
         * Sets the value of {@link DhcpOptionsSetProps#getDhcpOptionsSetName}
         * @param dhcpOptionsSetName Property dhcpOptionsSetName: The name of the DHCP options set.
         *                           The name must be 2 to 128 characters in length and can contain letters, Chinese characters, digits, underscores (_), and hyphens (-). It must start with a letter or a Chinese character.
         * @return {@code this}
         */
        public Builder dhcpOptionsSetName(com.aliyun.ros.cdk.core.IResolvable dhcpOptionsSetName) {
            this.dhcpOptionsSetName = dhcpOptionsSetName;
            return this;
        }

        /**
         * Sets the value of {@link DhcpOptionsSetProps#getDomainName}
         * @param domainName Property domainName: The root domain, for example, example.com. After a DHCP options set is associated with a Virtual Private Cloud (VPC) network, the root domain in the DHCP options set is automatically synchronized to the ECS instances in the VPC network.
         * @return {@code this}
         */
        public Builder domainName(java.lang.String domainName) {
            this.domainName = domainName;
            return this;
        }

        /**
         * Sets the value of {@link DhcpOptionsSetProps#getDomainName}
         * @param domainName Property domainName: The root domain, for example, example.com. After a DHCP options set is associated with a Virtual Private Cloud (VPC) network, the root domain in the DHCP options set is automatically synchronized to the ECS instances in the VPC network.
         * @return {@code this}
         */
        public Builder domainName(com.aliyun.ros.cdk.core.IResolvable domainName) {
            this.domainName = domainName;
            return this;
        }

        /**
         * Sets the value of {@link DhcpOptionsSetProps#getDomainNameServers}
         * @param domainNameServers Property domainNameServers: The DNS server IP addresses.
         *                          Note Before you specify any DNS server IP address, all ECS instances in the associated VPC network use the IP addresses of the Alibaba Cloud DNS servers, which are 100.100.2.136 and 100.100.2.138.
         * @return {@code this}
         */
        public Builder domainNameServers(com.aliyun.ros.cdk.core.IResolvable domainNameServers) {
            this.domainNameServers = domainNameServers;
            return this;
        }

        /**
         * Sets the value of {@link DhcpOptionsSetProps#getDomainNameServers}
         * @param domainNameServers Property domainNameServers: The DNS server IP addresses.
         *                          Note Before you specify any DNS server IP address, all ECS instances in the associated VPC network use the IP addresses of the Alibaba Cloud DNS servers, which are 100.100.2.136 and 100.100.2.138.
         * @return {@code this}
         */
        public Builder domainNameServers(java.util.List<? extends java.lang.Object> domainNameServers) {
            this.domainNameServers = domainNameServers;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link DhcpOptionsSetProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public DhcpOptionsSetProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link DhcpOptionsSetProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DhcpOptionsSetProps {
        private final java.lang.Object dhcpOptionsSetDescription;
        private final java.lang.Object dhcpOptionsSetName;
        private final java.lang.Object domainName;
        private final java.lang.Object domainNameServers;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.dhcpOptionsSetDescription = software.amazon.jsii.Kernel.get(this, "dhcpOptionsSetDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dhcpOptionsSetName = software.amazon.jsii.Kernel.get(this, "dhcpOptionsSetName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.domainName = software.amazon.jsii.Kernel.get(this, "domainName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.domainNameServers = software.amazon.jsii.Kernel.get(this, "domainNameServers", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.dhcpOptionsSetDescription = builder.dhcpOptionsSetDescription;
            this.dhcpOptionsSetName = builder.dhcpOptionsSetName;
            this.domainName = builder.domainName;
            this.domainNameServers = builder.domainNameServers;
        }

        @Override
        public final java.lang.Object getDhcpOptionsSetDescription() {
            return this.dhcpOptionsSetDescription;
        }

        @Override
        public final java.lang.Object getDhcpOptionsSetName() {
            return this.dhcpOptionsSetName;
        }

        @Override
        public final java.lang.Object getDomainName() {
            return this.domainName;
        }

        @Override
        public final java.lang.Object getDomainNameServers() {
            return this.domainNameServers;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getDhcpOptionsSetDescription() != null) {
                data.set("dhcpOptionsSetDescription", om.valueToTree(this.getDhcpOptionsSetDescription()));
            }
            if (this.getDhcpOptionsSetName() != null) {
                data.set("dhcpOptionsSetName", om.valueToTree(this.getDhcpOptionsSetName()));
            }
            if (this.getDomainName() != null) {
                data.set("domainName", om.valueToTree(this.getDomainName()));
            }
            if (this.getDomainNameServers() != null) {
                data.set("domainNameServers", om.valueToTree(this.getDomainNameServers()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.DhcpOptionsSetProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            DhcpOptionsSetProps.Jsii$Proxy that = (DhcpOptionsSetProps.Jsii$Proxy) o;

            if (this.dhcpOptionsSetDescription != null ? !this.dhcpOptionsSetDescription.equals(that.dhcpOptionsSetDescription) : that.dhcpOptionsSetDescription != null) return false;
            if (this.dhcpOptionsSetName != null ? !this.dhcpOptionsSetName.equals(that.dhcpOptionsSetName) : that.dhcpOptionsSetName != null) return false;
            if (this.domainName != null ? !this.domainName.equals(that.domainName) : that.domainName != null) return false;
            return this.domainNameServers != null ? this.domainNameServers.equals(that.domainNameServers) : that.domainNameServers == null;
        }

        @Override
        public final int hashCode() {
            int result = this.dhcpOptionsSetDescription != null ? this.dhcpOptionsSetDescription.hashCode() : 0;
            result = 31 * result + (this.dhcpOptionsSetName != null ? this.dhcpOptionsSetName.hashCode() : 0);
            result = 31 * result + (this.domainName != null ? this.domainName.hashCode() : 0);
            result = 31 * result + (this.domainNameServers != null ? this.domainNameServers.hashCode() : 0);
            return result;
        }
    }
}
