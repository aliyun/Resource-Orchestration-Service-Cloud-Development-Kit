package com.aliyun.ros.cdk.vpc;

/**
 * Properties for defining a <code>PublicIpAddressPool</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-publicipaddresspool
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:25:01.024Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.PublicIpAddressPoolProps")
@software.amazon.jsii.Jsii.Proxy(PublicIpAddressPoolProps.Jsii$Proxy.class)
public interface PublicIpAddressPoolProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property bizType: The business type of IP address pool.Value: Cloudbox: Cloud Box.Cloud box users support to select this type. Default (default): default, indicating non -special types.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBizType() {
        return null;
    }

    /**
     * Property description: Description of the address pool instance.
     * <p>
     * The length is 0-256 characters, and you cannot start with http:// or https: //.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property isp: The line type.
     * <p>
     * Valid values:
     * BGP (default): BGP (Multi-ISP) lines. All regions support BGP (Multi-ISP) EIPs.
     * BGP_PRO: BGP (Multi-ISP) Pro lines.
     * Only the following regions support BGP (Multi-ISP) Pro lines:
     * China (Hong Kong), Singapore, Malaysia (Kuala Lumpur), Philippines (Manila), Indonesia (Jakarta), and Thailand (Bangkok).
     * For more information about BGP (Multi-ISP) and BGP (Multi-ISP) Pro, see EIP line types.
     * If you are allowed to use single-ISP bandwidth, you can also choose one of the following values:
     * ChinaTelecom: China Telecom
     * ChinaUnicom: China Unicom
     * ChinaMobile: China Mobile
     * ChinaTelecom_L2: China Telecom L2
     * ChinaUnicom_L2: China Unicom L2
     * ChinaMobile_L2: China Mobile L2
     * If your services are deployed in China East 1 Finance, you must set this parameter to BGP_FinanceCloud.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIsp() {
        return null;
    }

    /**
     * Property name: The name of the address pool instance.
     * <p>
     * The length is 0-128 characters, and you cannot start with http: // or https: //.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
        return null;
    }

    /**
     * Property resourceGroupId: The ID of the resource group that the IP address pool belongs to.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property securityProtectionTypes: Safety protection level.
     * <p>
     * When configured as empty, the default is DDOS protection (basic version).
     * When configured as Antiddos_enhanced, it means DDOS protection (enhanced version).
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityProtectionTypes() {
        return null;
    }

    /**
     * Property tags: The list of container group tags in the form of key/value pairs.
     * <p>
     * You can define a maximum of 20 tags for each container group.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.vpc.RosPublicIpAddressPool.TagsProperty> getTags() {
        return null;
    }

    /**
     * Property zones: The available areas of the IP address pool.
     * <p>
     * The Biztype value is Cloudbox, that is, when the type of IP address pool is a cloud box, the parameter must be filled.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getZones() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link PublicIpAddressPoolProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link PublicIpAddressPoolProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<PublicIpAddressPoolProps> {
        java.lang.Object bizType;
        java.lang.Object description;
        java.lang.Object isp;
        java.lang.Object name;
        java.lang.Object resourceGroupId;
        java.lang.Object securityProtectionTypes;
        java.util.List<com.aliyun.ros.cdk.vpc.RosPublicIpAddressPool.TagsProperty> tags;
        java.lang.Object zones;

        /**
         * Sets the value of {@link PublicIpAddressPoolProps#getBizType}
         * @param bizType Property bizType: The business type of IP address pool.Value: Cloudbox: Cloud Box.Cloud box users support to select this type. Default (default): default, indicating non -special types.
         * @return {@code this}
         */
        public Builder bizType(java.lang.String bizType) {
            this.bizType = bizType;
            return this;
        }

        /**
         * Sets the value of {@link PublicIpAddressPoolProps#getBizType}
         * @param bizType Property bizType: The business type of IP address pool.Value: Cloudbox: Cloud Box.Cloud box users support to select this type. Default (default): default, indicating non -special types.
         * @return {@code this}
         */
        public Builder bizType(com.aliyun.ros.cdk.core.IResolvable bizType) {
            this.bizType = bizType;
            return this;
        }

        /**
         * Sets the value of {@link PublicIpAddressPoolProps#getDescription}
         * @param description Property description: Description of the address pool instance.
         *                    The length is 0-256 characters, and you cannot start with http:// or https: //.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link PublicIpAddressPoolProps#getDescription}
         * @param description Property description: Description of the address pool instance.
         *                    The length is 0-256 characters, and you cannot start with http:// or https: //.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link PublicIpAddressPoolProps#getIsp}
         * @param isp Property isp: The line type.
         *            Valid values:
         *            BGP (default): BGP (Multi-ISP) lines. All regions support BGP (Multi-ISP) EIPs.
         *            BGP_PRO: BGP (Multi-ISP) Pro lines.
         *            Only the following regions support BGP (Multi-ISP) Pro lines:
         *            China (Hong Kong), Singapore, Malaysia (Kuala Lumpur), Philippines (Manila), Indonesia (Jakarta), and Thailand (Bangkok).
         *            For more information about BGP (Multi-ISP) and BGP (Multi-ISP) Pro, see EIP line types.
         *            If you are allowed to use single-ISP bandwidth, you can also choose one of the following values:
         *            ChinaTelecom: China Telecom
         *            ChinaUnicom: China Unicom
         *            ChinaMobile: China Mobile
         *            ChinaTelecom_L2: China Telecom L2
         *            ChinaUnicom_L2: China Unicom L2
         *            ChinaMobile_L2: China Mobile L2
         *            If your services are deployed in China East 1 Finance, you must set this parameter to BGP_FinanceCloud.
         * @return {@code this}
         */
        public Builder isp(java.lang.String isp) {
            this.isp = isp;
            return this;
        }

        /**
         * Sets the value of {@link PublicIpAddressPoolProps#getIsp}
         * @param isp Property isp: The line type.
         *            Valid values:
         *            BGP (default): BGP (Multi-ISP) lines. All regions support BGP (Multi-ISP) EIPs.
         *            BGP_PRO: BGP (Multi-ISP) Pro lines.
         *            Only the following regions support BGP (Multi-ISP) Pro lines:
         *            China (Hong Kong), Singapore, Malaysia (Kuala Lumpur), Philippines (Manila), Indonesia (Jakarta), and Thailand (Bangkok).
         *            For more information about BGP (Multi-ISP) and BGP (Multi-ISP) Pro, see EIP line types.
         *            If you are allowed to use single-ISP bandwidth, you can also choose one of the following values:
         *            ChinaTelecom: China Telecom
         *            ChinaUnicom: China Unicom
         *            ChinaMobile: China Mobile
         *            ChinaTelecom_L2: China Telecom L2
         *            ChinaUnicom_L2: China Unicom L2
         *            ChinaMobile_L2: China Mobile L2
         *            If your services are deployed in China East 1 Finance, you must set this parameter to BGP_FinanceCloud.
         * @return {@code this}
         */
        public Builder isp(com.aliyun.ros.cdk.core.IResolvable isp) {
            this.isp = isp;
            return this;
        }

        /**
         * Sets the value of {@link PublicIpAddressPoolProps#getName}
         * @param name Property name: The name of the address pool instance.
         *             The length is 0-128 characters, and you cannot start with http: // or https: //.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link PublicIpAddressPoolProps#getName}
         * @param name Property name: The name of the address pool instance.
         *             The length is 0-128 characters, and you cannot start with http: // or https: //.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link PublicIpAddressPoolProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group that the IP address pool belongs to.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link PublicIpAddressPoolProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group that the IP address pool belongs to.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link PublicIpAddressPoolProps#getSecurityProtectionTypes}
         * @param securityProtectionTypes Property securityProtectionTypes: Safety protection level.
         *                                When configured as empty, the default is DDOS protection (basic version).
         *                                When configured as Antiddos_enhanced, it means DDOS protection (enhanced version).
         * @return {@code this}
         */
        public Builder securityProtectionTypes(com.aliyun.ros.cdk.core.IResolvable securityProtectionTypes) {
            this.securityProtectionTypes = securityProtectionTypes;
            return this;
        }

        /**
         * Sets the value of {@link PublicIpAddressPoolProps#getSecurityProtectionTypes}
         * @param securityProtectionTypes Property securityProtectionTypes: Safety protection level.
         *                                When configured as empty, the default is DDOS protection (basic version).
         *                                When configured as Antiddos_enhanced, it means DDOS protection (enhanced version).
         * @return {@code this}
         */
        public Builder securityProtectionTypes(java.util.List<? extends java.lang.Object> securityProtectionTypes) {
            this.securityProtectionTypes = securityProtectionTypes;
            return this;
        }

        /**
         * Sets the value of {@link PublicIpAddressPoolProps#getTags}
         * @param tags Property tags: The list of container group tags in the form of key/value pairs.
         *             You can define a maximum of 20 tags for each container group.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.vpc.RosPublicIpAddressPool.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.vpc.RosPublicIpAddressPool.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link PublicIpAddressPoolProps#getZones}
         * @param zones Property zones: The available areas of the IP address pool.
         *              The Biztype value is Cloudbox, that is, when the type of IP address pool is a cloud box, the parameter must be filled.
         * @return {@code this}
         */
        public Builder zones(com.aliyun.ros.cdk.core.IResolvable zones) {
            this.zones = zones;
            return this;
        }

        /**
         * Sets the value of {@link PublicIpAddressPoolProps#getZones}
         * @param zones Property zones: The available areas of the IP address pool.
         *              The Biztype value is Cloudbox, that is, when the type of IP address pool is a cloud box, the parameter must be filled.
         * @return {@code this}
         */
        public Builder zones(java.util.List<? extends java.lang.Object> zones) {
            this.zones = zones;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link PublicIpAddressPoolProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public PublicIpAddressPoolProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link PublicIpAddressPoolProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PublicIpAddressPoolProps {
        private final java.lang.Object bizType;
        private final java.lang.Object description;
        private final java.lang.Object isp;
        private final java.lang.Object name;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object securityProtectionTypes;
        private final java.util.List<com.aliyun.ros.cdk.vpc.RosPublicIpAddressPool.TagsProperty> tags;
        private final java.lang.Object zones;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.bizType = software.amazon.jsii.Kernel.get(this, "bizType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.isp = software.amazon.jsii.Kernel.get(this, "isp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityProtectionTypes = software.amazon.jsii.Kernel.get(this, "securityProtectionTypes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.RosPublicIpAddressPool.TagsProperty.class)));
            this.zones = software.amazon.jsii.Kernel.get(this, "zones", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.bizType = builder.bizType;
            this.description = builder.description;
            this.isp = builder.isp;
            this.name = builder.name;
            this.resourceGroupId = builder.resourceGroupId;
            this.securityProtectionTypes = builder.securityProtectionTypes;
            this.tags = (java.util.List<com.aliyun.ros.cdk.vpc.RosPublicIpAddressPool.TagsProperty>)builder.tags;
            this.zones = builder.zones;
        }

        @Override
        public final java.lang.Object getBizType() {
            return this.bizType;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getIsp() {
            return this.isp;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getSecurityProtectionTypes() {
            return this.securityProtectionTypes;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.vpc.RosPublicIpAddressPool.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.Object getZones() {
            return this.zones;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getBizType() != null) {
                data.set("bizType", om.valueToTree(this.getBizType()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getIsp() != null) {
                data.set("isp", om.valueToTree(this.getIsp()));
            }
            if (this.getName() != null) {
                data.set("name", om.valueToTree(this.getName()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getSecurityProtectionTypes() != null) {
                data.set("securityProtectionTypes", om.valueToTree(this.getSecurityProtectionTypes()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getZones() != null) {
                data.set("zones", om.valueToTree(this.getZones()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.PublicIpAddressPoolProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            PublicIpAddressPoolProps.Jsii$Proxy that = (PublicIpAddressPoolProps.Jsii$Proxy) o;

            if (this.bizType != null ? !this.bizType.equals(that.bizType) : that.bizType != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.isp != null ? !this.isp.equals(that.isp) : that.isp != null) return false;
            if (this.name != null ? !this.name.equals(that.name) : that.name != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.securityProtectionTypes != null ? !this.securityProtectionTypes.equals(that.securityProtectionTypes) : that.securityProtectionTypes != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            return this.zones != null ? this.zones.equals(that.zones) : that.zones == null;
        }

        @Override
        public final int hashCode() {
            int result = this.bizType != null ? this.bizType.hashCode() : 0;
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.isp != null ? this.isp.hashCode() : 0);
            result = 31 * result + (this.name != null ? this.name.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.securityProtectionTypes != null ? this.securityProtectionTypes.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.zones != null ? this.zones.hashCode() : 0);
            return result;
        }
    }
}
