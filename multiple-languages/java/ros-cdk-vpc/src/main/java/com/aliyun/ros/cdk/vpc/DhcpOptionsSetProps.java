package com.aliyun.ros.cdk.vpc;

/**
 * Properties for defining a <code>DhcpOptionsSet</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-dhcpoptionsset
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:54.876Z")
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
     * Property ipv6LeaseTime: The lease time of the IPv6 DHCP options set.
     * <p>
     * <ul>
     * <li>When setting lease time in hours: unit: h. Valid values: <strong>24h~1176h</strong>, <strong>87600h~175200h</strong>. Default value: <strong>24h</strong>.</li>
     * <li>When setting lease time in days: unit: d. Valid values: <strong>1d~49d</strong>, <strong>3650d~7300d</strong>. Default value: <strong>1d</strong>.</li>
     * </ul>
     * <p>
     * When specifying parameter values, you must include the unit.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpv6LeaseTime() {
        return null;
    }

    /**
     * Property leaseTime: The lease time of the IPv4 DHCP options set.
     * <p>
     * <ul>
     * <li>When setting lease time in hours: unit: h. Valid values: <strong>24h~1176h</strong>, <strong>87600h~175200h</strong>. Default value: <strong>87600h</strong>.</li>
     * <li>When setting lease time in days: unit: d. Valid values: <strong>1d~49d</strong>, <strong>3650d~7300d</strong>. Default value: <strong>3650d</strong>.</li>
     * </ul>
     * <p>
     * When specifying parameter values, you must include the unit.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLeaseTime() {
        return null;
    }

    /**
     * Property resourceGroupId: The ID of the resource group to which the DHCP options set belongs.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
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
        java.lang.Object ipv6LeaseTime;
        java.lang.Object leaseTime;
        java.lang.Object resourceGroupId;

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
         * Sets the value of {@link DhcpOptionsSetProps#getIpv6LeaseTime}
         * @param ipv6LeaseTime Property ipv6LeaseTime: The lease time of the IPv6 DHCP options set.
         *                      <ul>
         *                      <li>When setting lease time in hours: unit: h. Valid values: <strong>24h~1176h</strong>, <strong>87600h~175200h</strong>. Default value: <strong>24h</strong>.</li>
         *                      <li>When setting lease time in days: unit: d. Valid values: <strong>1d~49d</strong>, <strong>3650d~7300d</strong>. Default value: <strong>1d</strong>.</li>
         *                      </ul>
         *                      <p>
         *                      When specifying parameter values, you must include the unit.
         * @return {@code this}
         */
        public Builder ipv6LeaseTime(java.lang.String ipv6LeaseTime) {
            this.ipv6LeaseTime = ipv6LeaseTime;
            return this;
        }

        /**
         * Sets the value of {@link DhcpOptionsSetProps#getIpv6LeaseTime}
         * @param ipv6LeaseTime Property ipv6LeaseTime: The lease time of the IPv6 DHCP options set.
         *                      <ul>
         *                      <li>When setting lease time in hours: unit: h. Valid values: <strong>24h~1176h</strong>, <strong>87600h~175200h</strong>. Default value: <strong>24h</strong>.</li>
         *                      <li>When setting lease time in days: unit: d. Valid values: <strong>1d~49d</strong>, <strong>3650d~7300d</strong>. Default value: <strong>1d</strong>.</li>
         *                      </ul>
         *                      <p>
         *                      When specifying parameter values, you must include the unit.
         * @return {@code this}
         */
        public Builder ipv6LeaseTime(com.aliyun.ros.cdk.core.IResolvable ipv6LeaseTime) {
            this.ipv6LeaseTime = ipv6LeaseTime;
            return this;
        }

        /**
         * Sets the value of {@link DhcpOptionsSetProps#getLeaseTime}
         * @param leaseTime Property leaseTime: The lease time of the IPv4 DHCP options set.
         *                  <ul>
         *                  <li>When setting lease time in hours: unit: h. Valid values: <strong>24h~1176h</strong>, <strong>87600h~175200h</strong>. Default value: <strong>87600h</strong>.</li>
         *                  <li>When setting lease time in days: unit: d. Valid values: <strong>1d~49d</strong>, <strong>3650d~7300d</strong>. Default value: <strong>3650d</strong>.</li>
         *                  </ul>
         *                  <p>
         *                  When specifying parameter values, you must include the unit.
         * @return {@code this}
         */
        public Builder leaseTime(java.lang.String leaseTime) {
            this.leaseTime = leaseTime;
            return this;
        }

        /**
         * Sets the value of {@link DhcpOptionsSetProps#getLeaseTime}
         * @param leaseTime Property leaseTime: The lease time of the IPv4 DHCP options set.
         *                  <ul>
         *                  <li>When setting lease time in hours: unit: h. Valid values: <strong>24h~1176h</strong>, <strong>87600h~175200h</strong>. Default value: <strong>87600h</strong>.</li>
         *                  <li>When setting lease time in days: unit: d. Valid values: <strong>1d~49d</strong>, <strong>3650d~7300d</strong>. Default value: <strong>3650d</strong>.</li>
         *                  </ul>
         *                  <p>
         *                  When specifying parameter values, you must include the unit.
         * @return {@code this}
         */
        public Builder leaseTime(com.aliyun.ros.cdk.core.IResolvable leaseTime) {
            this.leaseTime = leaseTime;
            return this;
        }

        /**
         * Sets the value of {@link DhcpOptionsSetProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the DHCP options set belongs.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link DhcpOptionsSetProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the DHCP options set belongs.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
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
        private final java.lang.Object ipv6LeaseTime;
        private final java.lang.Object leaseTime;
        private final java.lang.Object resourceGroupId;

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
            this.ipv6LeaseTime = software.amazon.jsii.Kernel.get(this, "ipv6LeaseTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.leaseTime = software.amazon.jsii.Kernel.get(this, "leaseTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
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
            this.ipv6LeaseTime = builder.ipv6LeaseTime;
            this.leaseTime = builder.leaseTime;
            this.resourceGroupId = builder.resourceGroupId;
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
        public final java.lang.Object getIpv6LeaseTime() {
            return this.ipv6LeaseTime;
        }

        @Override
        public final java.lang.Object getLeaseTime() {
            return this.leaseTime;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
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
            if (this.getIpv6LeaseTime() != null) {
                data.set("ipv6LeaseTime", om.valueToTree(this.getIpv6LeaseTime()));
            }
            if (this.getLeaseTime() != null) {
                data.set("leaseTime", om.valueToTree(this.getLeaseTime()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
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
            if (this.domainNameServers != null ? !this.domainNameServers.equals(that.domainNameServers) : that.domainNameServers != null) return false;
            if (this.ipv6LeaseTime != null ? !this.ipv6LeaseTime.equals(that.ipv6LeaseTime) : that.ipv6LeaseTime != null) return false;
            if (this.leaseTime != null ? !this.leaseTime.equals(that.leaseTime) : that.leaseTime != null) return false;
            return this.resourceGroupId != null ? this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.dhcpOptionsSetDescription != null ? this.dhcpOptionsSetDescription.hashCode() : 0;
            result = 31 * result + (this.dhcpOptionsSetName != null ? this.dhcpOptionsSetName.hashCode() : 0);
            result = 31 * result + (this.domainName != null ? this.domainName.hashCode() : 0);
            result = 31 * result + (this.domainNameServers != null ? this.domainNameServers.hashCode() : 0);
            result = 31 * result + (this.ipv6LeaseTime != null ? this.ipv6LeaseTime.hashCode() : 0);
            result = 31 * result + (this.leaseTime != null ? this.leaseTime.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            return result;
        }
    }
}
