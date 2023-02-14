package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a `ALIYUN::ECS::NetworkInterface`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.74.0 (build 6d08790)", date = "2023-02-14T06:40:10.993Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.NetworkInterfaceProps")
@software.amazon.jsii.Jsii.Proxy(NetworkInterfaceProps.Jsii$Proxy.class)
public interface NetworkInterfaceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property vSwitchId: VSwitch ID of the specified VPC.
     * <p>
     * Specifies the switch ID for the VPC.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVSwitchId();

    /**
     * Property description: Description of your ENI.
     * <p>
     * It is a string of [2, 256] English or Chinese characters.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property networkInterfaceName: Name of your ENI.
     * <p>
     * It is a string of [2, 128]  Chinese or English characters. It must begin with a letter and can contain numbers, underscores (_), colons (:), or hyphens (-).
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNetworkInterfaceName() {
        return null;
    }

    /**
     * Property primaryIpAddress: The primary private IP address of the ENI.
     * <p>
     * The specified IP address must have the same Host ID as the VSwitch. If no IP addresses are specified, a random network ID is assigned for the ENI.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPrimaryIpAddress() {
        return null;
    }

    /**
     * Property privateIpAddresses: Specifies secondary private IP addresses of the ENI.
     * <p>
     * This IP address must be an available IP address in the CIDR block of the VSwitch to which the ENI belongs.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPrivateIpAddresses() {
        return null;
    }

    /**
     * Property resourceGroupId: Resource group id.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property secondaryPrivateIpAddressCount: The number of private IP addresses that can be created automatically by ECS.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecondaryPrivateIpAddressCount() {
        return null;
    }

    /**
     * Property securityGroupId: The ID of the security group that the ENI joins.
     * <p>
     * The security group and the ENI must be in a same VPC.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupId() {
        return null;
    }

    /**
     * Property securityGroupIds: The IDs of the security groups that the ENI joins.
     * <p>
     * The security groups and the ENI must belong to the same VPC.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupIds() {
        return null;
    }

    /**
     * Property tags: Tags to attach to instance.
     * <p>
     * Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ecs.RosNetworkInterface.TagsProperty> getTags() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link NetworkInterfaceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link NetworkInterfaceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<NetworkInterfaceProps> {
        java.lang.Object vSwitchId;
        java.lang.Object description;
        java.lang.Object networkInterfaceName;
        java.lang.Object primaryIpAddress;
        java.lang.Object privateIpAddresses;
        java.lang.Object resourceGroupId;
        java.lang.Object secondaryPrivateIpAddressCount;
        java.lang.Object securityGroupId;
        java.lang.Object securityGroupIds;
        java.util.List<com.aliyun.ros.cdk.ecs.RosNetworkInterface.TagsProperty> tags;

        /**
         * Sets the value of {@link NetworkInterfaceProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: VSwitch ID of the specified VPC. This parameter is required.
         *                  Specifies the switch ID for the VPC.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link NetworkInterfaceProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: VSwitch ID of the specified VPC. This parameter is required.
         *                  Specifies the switch ID for the VPC.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link NetworkInterfaceProps#getDescription}
         * @param description Property description: Description of your ENI.
         *                    It is a string of [2, 256] English or Chinese characters.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link NetworkInterfaceProps#getDescription}
         * @param description Property description: Description of your ENI.
         *                    It is a string of [2, 256] English or Chinese characters.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link NetworkInterfaceProps#getNetworkInterfaceName}
         * @param networkInterfaceName Property networkInterfaceName: Name of your ENI.
         *                             It is a string of [2, 128]  Chinese or English characters. It must begin with a letter and can contain numbers, underscores (_), colons (:), or hyphens (-).
         * @return {@code this}
         */
        public Builder networkInterfaceName(java.lang.String networkInterfaceName) {
            this.networkInterfaceName = networkInterfaceName;
            return this;
        }

        /**
         * Sets the value of {@link NetworkInterfaceProps#getNetworkInterfaceName}
         * @param networkInterfaceName Property networkInterfaceName: Name of your ENI.
         *                             It is a string of [2, 128]  Chinese or English characters. It must begin with a letter and can contain numbers, underscores (_), colons (:), or hyphens (-).
         * @return {@code this}
         */
        public Builder networkInterfaceName(com.aliyun.ros.cdk.core.IResolvable networkInterfaceName) {
            this.networkInterfaceName = networkInterfaceName;
            return this;
        }

        /**
         * Sets the value of {@link NetworkInterfaceProps#getPrimaryIpAddress}
         * @param primaryIpAddress Property primaryIpAddress: The primary private IP address of the ENI.
         *                         The specified IP address must have the same Host ID as the VSwitch. If no IP addresses are specified, a random network ID is assigned for the ENI.
         * @return {@code this}
         */
        public Builder primaryIpAddress(java.lang.String primaryIpAddress) {
            this.primaryIpAddress = primaryIpAddress;
            return this;
        }

        /**
         * Sets the value of {@link NetworkInterfaceProps#getPrimaryIpAddress}
         * @param primaryIpAddress Property primaryIpAddress: The primary private IP address of the ENI.
         *                         The specified IP address must have the same Host ID as the VSwitch. If no IP addresses are specified, a random network ID is assigned for the ENI.
         * @return {@code this}
         */
        public Builder primaryIpAddress(com.aliyun.ros.cdk.core.IResolvable primaryIpAddress) {
            this.primaryIpAddress = primaryIpAddress;
            return this;
        }

        /**
         * Sets the value of {@link NetworkInterfaceProps#getPrivateIpAddresses}
         * @param privateIpAddresses Property privateIpAddresses: Specifies secondary private IP addresses of the ENI.
         *                           This IP address must be an available IP address in the CIDR block of the VSwitch to which the ENI belongs.
         * @return {@code this}
         */
        public Builder privateIpAddresses(com.aliyun.ros.cdk.core.IResolvable privateIpAddresses) {
            this.privateIpAddresses = privateIpAddresses;
            return this;
        }

        /**
         * Sets the value of {@link NetworkInterfaceProps#getPrivateIpAddresses}
         * @param privateIpAddresses Property privateIpAddresses: Specifies secondary private IP addresses of the ENI.
         *                           This IP address must be an available IP address in the CIDR block of the VSwitch to which the ENI belongs.
         * @return {@code this}
         */
        public Builder privateIpAddresses(java.util.List<? extends java.lang.Object> privateIpAddresses) {
            this.privateIpAddresses = privateIpAddresses;
            return this;
        }

        /**
         * Sets the value of {@link NetworkInterfaceProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: Resource group id.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link NetworkInterfaceProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: Resource group id.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link NetworkInterfaceProps#getSecondaryPrivateIpAddressCount}
         * @param secondaryPrivateIpAddressCount Property secondaryPrivateIpAddressCount: The number of private IP addresses that can be created automatically by ECS.
         * @return {@code this}
         */
        public Builder secondaryPrivateIpAddressCount(java.lang.Number secondaryPrivateIpAddressCount) {
            this.secondaryPrivateIpAddressCount = secondaryPrivateIpAddressCount;
            return this;
        }

        /**
         * Sets the value of {@link NetworkInterfaceProps#getSecondaryPrivateIpAddressCount}
         * @param secondaryPrivateIpAddressCount Property secondaryPrivateIpAddressCount: The number of private IP addresses that can be created automatically by ECS.
         * @return {@code this}
         */
        public Builder secondaryPrivateIpAddressCount(com.aliyun.ros.cdk.core.IResolvable secondaryPrivateIpAddressCount) {
            this.secondaryPrivateIpAddressCount = secondaryPrivateIpAddressCount;
            return this;
        }

        /**
         * Sets the value of {@link NetworkInterfaceProps#getSecurityGroupId}
         * @param securityGroupId Property securityGroupId: The ID of the security group that the ENI joins.
         *                        The security group and the ENI must be in a same VPC.
         * @return {@code this}
         */
        public Builder securityGroupId(java.lang.String securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link NetworkInterfaceProps#getSecurityGroupId}
         * @param securityGroupId Property securityGroupId: The ID of the security group that the ENI joins.
         *                        The security group and the ENI must be in a same VPC.
         * @return {@code this}
         */
        public Builder securityGroupId(com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link NetworkInterfaceProps#getSecurityGroupIds}
         * @param securityGroupIds Property securityGroupIds: The IDs of the security groups that the ENI joins.
         *                         The security groups and the ENI must belong to the same VPC.
         * @return {@code this}
         */
        public Builder securityGroupIds(com.aliyun.ros.cdk.core.IResolvable securityGroupIds) {
            this.securityGroupIds = securityGroupIds;
            return this;
        }

        /**
         * Sets the value of {@link NetworkInterfaceProps#getSecurityGroupIds}
         * @param securityGroupIds Property securityGroupIds: The IDs of the security groups that the ENI joins.
         *                         The security groups and the ENI must belong to the same VPC.
         * @return {@code this}
         */
        public Builder securityGroupIds(java.util.List<? extends java.lang.Object> securityGroupIds) {
            this.securityGroupIds = securityGroupIds;
            return this;
        }

        /**
         * Sets the value of {@link NetworkInterfaceProps#getTags}
         * @param tags Property tags: Tags to attach to instance.
         *             Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.ecs.RosNetworkInterface.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.RosNetworkInterface.TagsProperty>)tags;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link NetworkInterfaceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public NetworkInterfaceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link NetworkInterfaceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements NetworkInterfaceProps {
        private final java.lang.Object vSwitchId;
        private final java.lang.Object description;
        private final java.lang.Object networkInterfaceName;
        private final java.lang.Object primaryIpAddress;
        private final java.lang.Object privateIpAddresses;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object secondaryPrivateIpAddressCount;
        private final java.lang.Object securityGroupId;
        private final java.lang.Object securityGroupIds;
        private final java.util.List<com.aliyun.ros.cdk.ecs.RosNetworkInterface.TagsProperty> tags;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.networkInterfaceName = software.amazon.jsii.Kernel.get(this, "networkInterfaceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.primaryIpAddress = software.amazon.jsii.Kernel.get(this, "primaryIpAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.privateIpAddresses = software.amazon.jsii.Kernel.get(this, "privateIpAddresses", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.secondaryPrivateIpAddressCount = software.amazon.jsii.Kernel.get(this, "secondaryPrivateIpAddressCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityGroupId = software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityGroupIds = software.amazon.jsii.Kernel.get(this, "securityGroupIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.RosNetworkInterface.TagsProperty.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.vSwitchId = java.util.Objects.requireNonNull(builder.vSwitchId, "vSwitchId is required");
            this.description = builder.description;
            this.networkInterfaceName = builder.networkInterfaceName;
            this.primaryIpAddress = builder.primaryIpAddress;
            this.privateIpAddresses = builder.privateIpAddresses;
            this.resourceGroupId = builder.resourceGroupId;
            this.secondaryPrivateIpAddressCount = builder.secondaryPrivateIpAddressCount;
            this.securityGroupId = builder.securityGroupId;
            this.securityGroupIds = builder.securityGroupIds;
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.RosNetworkInterface.TagsProperty>)builder.tags;
        }

        @Override
        public final java.lang.Object getVSwitchId() {
            return this.vSwitchId;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getNetworkInterfaceName() {
            return this.networkInterfaceName;
        }

        @Override
        public final java.lang.Object getPrimaryIpAddress() {
            return this.primaryIpAddress;
        }

        @Override
        public final java.lang.Object getPrivateIpAddresses() {
            return this.privateIpAddresses;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getSecondaryPrivateIpAddressCount() {
            return this.secondaryPrivateIpAddressCount;
        }

        @Override
        public final java.lang.Object getSecurityGroupId() {
            return this.securityGroupId;
        }

        @Override
        public final java.lang.Object getSecurityGroupIds() {
            return this.securityGroupIds;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.ecs.RosNetworkInterface.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getNetworkInterfaceName() != null) {
                data.set("networkInterfaceName", om.valueToTree(this.getNetworkInterfaceName()));
            }
            if (this.getPrimaryIpAddress() != null) {
                data.set("primaryIpAddress", om.valueToTree(this.getPrimaryIpAddress()));
            }
            if (this.getPrivateIpAddresses() != null) {
                data.set("privateIpAddresses", om.valueToTree(this.getPrivateIpAddresses()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getSecondaryPrivateIpAddressCount() != null) {
                data.set("secondaryPrivateIpAddressCount", om.valueToTree(this.getSecondaryPrivateIpAddressCount()));
            }
            if (this.getSecurityGroupId() != null) {
                data.set("securityGroupId", om.valueToTree(this.getSecurityGroupId()));
            }
            if (this.getSecurityGroupIds() != null) {
                data.set("securityGroupIds", om.valueToTree(this.getSecurityGroupIds()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.NetworkInterfaceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            NetworkInterfaceProps.Jsii$Proxy that = (NetworkInterfaceProps.Jsii$Proxy) o;

            if (!vSwitchId.equals(that.vSwitchId)) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.networkInterfaceName != null ? !this.networkInterfaceName.equals(that.networkInterfaceName) : that.networkInterfaceName != null) return false;
            if (this.primaryIpAddress != null ? !this.primaryIpAddress.equals(that.primaryIpAddress) : that.primaryIpAddress != null) return false;
            if (this.privateIpAddresses != null ? !this.privateIpAddresses.equals(that.privateIpAddresses) : that.privateIpAddresses != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.secondaryPrivateIpAddressCount != null ? !this.secondaryPrivateIpAddressCount.equals(that.secondaryPrivateIpAddressCount) : that.secondaryPrivateIpAddressCount != null) return false;
            if (this.securityGroupId != null ? !this.securityGroupId.equals(that.securityGroupId) : that.securityGroupId != null) return false;
            if (this.securityGroupIds != null ? !this.securityGroupIds.equals(that.securityGroupIds) : that.securityGroupIds != null) return false;
            return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
        }

        @Override
        public final int hashCode() {
            int result = this.vSwitchId.hashCode();
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.networkInterfaceName != null ? this.networkInterfaceName.hashCode() : 0);
            result = 31 * result + (this.primaryIpAddress != null ? this.primaryIpAddress.hashCode() : 0);
            result = 31 * result + (this.privateIpAddresses != null ? this.privateIpAddresses.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.secondaryPrivateIpAddressCount != null ? this.secondaryPrivateIpAddressCount.hashCode() : 0);
            result = 31 * result + (this.securityGroupId != null ? this.securityGroupId.hashCode() : 0);
            result = 31 * result + (this.securityGroupIds != null ? this.securityGroupIds.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            return result;
        }
    }
}
