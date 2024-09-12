package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a <code>RosNetworkInterface</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-networkinterface
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-12T02:20:26.158Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RosNetworkInterfaceProps")
@software.amazon.jsii.Jsii.Proxy(RosNetworkInterfaceProps.Jsii$Proxy.class)
public interface RosNetworkInterfaceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVSwitchId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeleteOnRelease() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpv4PrefixCount() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpv4Prefixes() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpv6AddressCount() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpv6Addresses() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpv6PrefixCount() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpv6Prefixes() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNetworkInterfaceName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNetworkInterfaceTrafficMode() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPrimaryIpAddress() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPrivateIpAddresses() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getQueueNumber() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRxQueueSize() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecondaryPrivateIpAddressCount() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupIds() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ecs.RosNetworkInterface.TagsProperty> getTags() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTxQueueSize() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosNetworkInterfaceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosNetworkInterfaceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosNetworkInterfaceProps> {
        java.lang.Object vSwitchId;
        java.lang.Object deleteOnRelease;
        java.lang.Object description;
        java.lang.Object ipv4PrefixCount;
        java.lang.Object ipv4Prefixes;
        java.lang.Object ipv6AddressCount;
        java.lang.Object ipv6Addresses;
        java.lang.Object ipv6PrefixCount;
        java.lang.Object ipv6Prefixes;
        java.lang.Object networkInterfaceName;
        java.lang.Object networkInterfaceTrafficMode;
        java.lang.Object primaryIpAddress;
        java.lang.Object privateIpAddresses;
        java.lang.Object queueNumber;
        java.lang.Object resourceGroupId;
        java.lang.Object rxQueueSize;
        java.lang.Object secondaryPrivateIpAddressCount;
        java.lang.Object securityGroupId;
        java.lang.Object securityGroupIds;
        java.util.List<com.aliyun.ros.cdk.ecs.RosNetworkInterface.TagsProperty> tags;
        java.lang.Object txQueueSize;

        /**
         * Sets the value of {@link RosNetworkInterfaceProps#getVSwitchId}
         * @param vSwitchId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkInterfaceProps#getVSwitchId}
         * @param vSwitchId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkInterfaceProps#getDeleteOnRelease}
         * @param deleteOnRelease the value to be set.
         * @return {@code this}
         */
        public Builder deleteOnRelease(java.lang.Boolean deleteOnRelease) {
            this.deleteOnRelease = deleteOnRelease;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkInterfaceProps#getDeleteOnRelease}
         * @param deleteOnRelease the value to be set.
         * @return {@code this}
         */
        public Builder deleteOnRelease(com.aliyun.ros.cdk.core.IResolvable deleteOnRelease) {
            this.deleteOnRelease = deleteOnRelease;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkInterfaceProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkInterfaceProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkInterfaceProps#getIpv4PrefixCount}
         * @param ipv4PrefixCount the value to be set.
         * @return {@code this}
         */
        public Builder ipv4PrefixCount(java.lang.Number ipv4PrefixCount) {
            this.ipv4PrefixCount = ipv4PrefixCount;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkInterfaceProps#getIpv4PrefixCount}
         * @param ipv4PrefixCount the value to be set.
         * @return {@code this}
         */
        public Builder ipv4PrefixCount(com.aliyun.ros.cdk.core.IResolvable ipv4PrefixCount) {
            this.ipv4PrefixCount = ipv4PrefixCount;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkInterfaceProps#getIpv4Prefixes}
         * @param ipv4Prefixes the value to be set.
         * @return {@code this}
         */
        public Builder ipv4Prefixes(com.aliyun.ros.cdk.core.IResolvable ipv4Prefixes) {
            this.ipv4Prefixes = ipv4Prefixes;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkInterfaceProps#getIpv4Prefixes}
         * @param ipv4Prefixes the value to be set.
         * @return {@code this}
         */
        public Builder ipv4Prefixes(java.util.List<? extends java.lang.Object> ipv4Prefixes) {
            this.ipv4Prefixes = ipv4Prefixes;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkInterfaceProps#getIpv6AddressCount}
         * @param ipv6AddressCount the value to be set.
         * @return {@code this}
         */
        public Builder ipv6AddressCount(java.lang.Number ipv6AddressCount) {
            this.ipv6AddressCount = ipv6AddressCount;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkInterfaceProps#getIpv6AddressCount}
         * @param ipv6AddressCount the value to be set.
         * @return {@code this}
         */
        public Builder ipv6AddressCount(com.aliyun.ros.cdk.core.IResolvable ipv6AddressCount) {
            this.ipv6AddressCount = ipv6AddressCount;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkInterfaceProps#getIpv6Addresses}
         * @param ipv6Addresses the value to be set.
         * @return {@code this}
         */
        public Builder ipv6Addresses(com.aliyun.ros.cdk.core.IResolvable ipv6Addresses) {
            this.ipv6Addresses = ipv6Addresses;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkInterfaceProps#getIpv6Addresses}
         * @param ipv6Addresses the value to be set.
         * @return {@code this}
         */
        public Builder ipv6Addresses(java.util.List<? extends java.lang.Object> ipv6Addresses) {
            this.ipv6Addresses = ipv6Addresses;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkInterfaceProps#getIpv6PrefixCount}
         * @param ipv6PrefixCount the value to be set.
         * @return {@code this}
         */
        public Builder ipv6PrefixCount(java.lang.Number ipv6PrefixCount) {
            this.ipv6PrefixCount = ipv6PrefixCount;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkInterfaceProps#getIpv6PrefixCount}
         * @param ipv6PrefixCount the value to be set.
         * @return {@code this}
         */
        public Builder ipv6PrefixCount(com.aliyun.ros.cdk.core.IResolvable ipv6PrefixCount) {
            this.ipv6PrefixCount = ipv6PrefixCount;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkInterfaceProps#getIpv6Prefixes}
         * @param ipv6Prefixes the value to be set.
         * @return {@code this}
         */
        public Builder ipv6Prefixes(com.aliyun.ros.cdk.core.IResolvable ipv6Prefixes) {
            this.ipv6Prefixes = ipv6Prefixes;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkInterfaceProps#getIpv6Prefixes}
         * @param ipv6Prefixes the value to be set.
         * @return {@code this}
         */
        public Builder ipv6Prefixes(java.util.List<? extends java.lang.Object> ipv6Prefixes) {
            this.ipv6Prefixes = ipv6Prefixes;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkInterfaceProps#getNetworkInterfaceName}
         * @param networkInterfaceName the value to be set.
         * @return {@code this}
         */
        public Builder networkInterfaceName(java.lang.String networkInterfaceName) {
            this.networkInterfaceName = networkInterfaceName;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkInterfaceProps#getNetworkInterfaceName}
         * @param networkInterfaceName the value to be set.
         * @return {@code this}
         */
        public Builder networkInterfaceName(com.aliyun.ros.cdk.core.IResolvable networkInterfaceName) {
            this.networkInterfaceName = networkInterfaceName;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkInterfaceProps#getNetworkInterfaceTrafficMode}
         * @param networkInterfaceTrafficMode the value to be set.
         * @return {@code this}
         */
        public Builder networkInterfaceTrafficMode(java.lang.String networkInterfaceTrafficMode) {
            this.networkInterfaceTrafficMode = networkInterfaceTrafficMode;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkInterfaceProps#getNetworkInterfaceTrafficMode}
         * @param networkInterfaceTrafficMode the value to be set.
         * @return {@code this}
         */
        public Builder networkInterfaceTrafficMode(com.aliyun.ros.cdk.core.IResolvable networkInterfaceTrafficMode) {
            this.networkInterfaceTrafficMode = networkInterfaceTrafficMode;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkInterfaceProps#getPrimaryIpAddress}
         * @param primaryIpAddress the value to be set.
         * @return {@code this}
         */
        public Builder primaryIpAddress(java.lang.String primaryIpAddress) {
            this.primaryIpAddress = primaryIpAddress;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkInterfaceProps#getPrimaryIpAddress}
         * @param primaryIpAddress the value to be set.
         * @return {@code this}
         */
        public Builder primaryIpAddress(com.aliyun.ros.cdk.core.IResolvable primaryIpAddress) {
            this.primaryIpAddress = primaryIpAddress;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkInterfaceProps#getPrivateIpAddresses}
         * @param privateIpAddresses the value to be set.
         * @return {@code this}
         */
        public Builder privateIpAddresses(com.aliyun.ros.cdk.core.IResolvable privateIpAddresses) {
            this.privateIpAddresses = privateIpAddresses;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkInterfaceProps#getPrivateIpAddresses}
         * @param privateIpAddresses the value to be set.
         * @return {@code this}
         */
        public Builder privateIpAddresses(java.util.List<? extends java.lang.Object> privateIpAddresses) {
            this.privateIpAddresses = privateIpAddresses;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkInterfaceProps#getQueueNumber}
         * @param queueNumber the value to be set.
         * @return {@code this}
         */
        public Builder queueNumber(java.lang.Number queueNumber) {
            this.queueNumber = queueNumber;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkInterfaceProps#getQueueNumber}
         * @param queueNumber the value to be set.
         * @return {@code this}
         */
        public Builder queueNumber(com.aliyun.ros.cdk.core.IResolvable queueNumber) {
            this.queueNumber = queueNumber;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkInterfaceProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkInterfaceProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkInterfaceProps#getRxQueueSize}
         * @param rxQueueSize the value to be set.
         * @return {@code this}
         */
        public Builder rxQueueSize(java.lang.Number rxQueueSize) {
            this.rxQueueSize = rxQueueSize;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkInterfaceProps#getRxQueueSize}
         * @param rxQueueSize the value to be set.
         * @return {@code this}
         */
        public Builder rxQueueSize(com.aliyun.ros.cdk.core.IResolvable rxQueueSize) {
            this.rxQueueSize = rxQueueSize;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkInterfaceProps#getSecondaryPrivateIpAddressCount}
         * @param secondaryPrivateIpAddressCount the value to be set.
         * @return {@code this}
         */
        public Builder secondaryPrivateIpAddressCount(java.lang.Number secondaryPrivateIpAddressCount) {
            this.secondaryPrivateIpAddressCount = secondaryPrivateIpAddressCount;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkInterfaceProps#getSecondaryPrivateIpAddressCount}
         * @param secondaryPrivateIpAddressCount the value to be set.
         * @return {@code this}
         */
        public Builder secondaryPrivateIpAddressCount(com.aliyun.ros.cdk.core.IResolvable secondaryPrivateIpAddressCount) {
            this.secondaryPrivateIpAddressCount = secondaryPrivateIpAddressCount;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkInterfaceProps#getSecurityGroupId}
         * @param securityGroupId the value to be set.
         * @return {@code this}
         */
        public Builder securityGroupId(java.lang.String securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkInterfaceProps#getSecurityGroupId}
         * @param securityGroupId the value to be set.
         * @return {@code this}
         */
        public Builder securityGroupId(com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkInterfaceProps#getSecurityGroupIds}
         * @param securityGroupIds the value to be set.
         * @return {@code this}
         */
        public Builder securityGroupIds(com.aliyun.ros.cdk.core.IResolvable securityGroupIds) {
            this.securityGroupIds = securityGroupIds;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkInterfaceProps#getSecurityGroupIds}
         * @param securityGroupIds the value to be set.
         * @return {@code this}
         */
        public Builder securityGroupIds(java.util.List<? extends java.lang.Object> securityGroupIds) {
            this.securityGroupIds = securityGroupIds;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkInterfaceProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.ecs.RosNetworkInterface.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.RosNetworkInterface.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkInterfaceProps#getTxQueueSize}
         * @param txQueueSize the value to be set.
         * @return {@code this}
         */
        public Builder txQueueSize(java.lang.Number txQueueSize) {
            this.txQueueSize = txQueueSize;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkInterfaceProps#getTxQueueSize}
         * @param txQueueSize the value to be set.
         * @return {@code this}
         */
        public Builder txQueueSize(com.aliyun.ros.cdk.core.IResolvable txQueueSize) {
            this.txQueueSize = txQueueSize;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosNetworkInterfaceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosNetworkInterfaceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosNetworkInterfaceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosNetworkInterfaceProps {
        private final java.lang.Object vSwitchId;
        private final java.lang.Object deleteOnRelease;
        private final java.lang.Object description;
        private final java.lang.Object ipv4PrefixCount;
        private final java.lang.Object ipv4Prefixes;
        private final java.lang.Object ipv6AddressCount;
        private final java.lang.Object ipv6Addresses;
        private final java.lang.Object ipv6PrefixCount;
        private final java.lang.Object ipv6Prefixes;
        private final java.lang.Object networkInterfaceName;
        private final java.lang.Object networkInterfaceTrafficMode;
        private final java.lang.Object primaryIpAddress;
        private final java.lang.Object privateIpAddresses;
        private final java.lang.Object queueNumber;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object rxQueueSize;
        private final java.lang.Object secondaryPrivateIpAddressCount;
        private final java.lang.Object securityGroupId;
        private final java.lang.Object securityGroupIds;
        private final java.util.List<com.aliyun.ros.cdk.ecs.RosNetworkInterface.TagsProperty> tags;
        private final java.lang.Object txQueueSize;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deleteOnRelease = software.amazon.jsii.Kernel.get(this, "deleteOnRelease", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipv4PrefixCount = software.amazon.jsii.Kernel.get(this, "ipv4PrefixCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipv4Prefixes = software.amazon.jsii.Kernel.get(this, "ipv4Prefixes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipv6AddressCount = software.amazon.jsii.Kernel.get(this, "ipv6AddressCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipv6Addresses = software.amazon.jsii.Kernel.get(this, "ipv6Addresses", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipv6PrefixCount = software.amazon.jsii.Kernel.get(this, "ipv6PrefixCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipv6Prefixes = software.amazon.jsii.Kernel.get(this, "ipv6Prefixes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.networkInterfaceName = software.amazon.jsii.Kernel.get(this, "networkInterfaceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.networkInterfaceTrafficMode = software.amazon.jsii.Kernel.get(this, "networkInterfaceTrafficMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.primaryIpAddress = software.amazon.jsii.Kernel.get(this, "primaryIpAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.privateIpAddresses = software.amazon.jsii.Kernel.get(this, "privateIpAddresses", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.queueNumber = software.amazon.jsii.Kernel.get(this, "queueNumber", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.rxQueueSize = software.amazon.jsii.Kernel.get(this, "rxQueueSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.secondaryPrivateIpAddressCount = software.amazon.jsii.Kernel.get(this, "secondaryPrivateIpAddressCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityGroupId = software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityGroupIds = software.amazon.jsii.Kernel.get(this, "securityGroupIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.RosNetworkInterface.TagsProperty.class)));
            this.txQueueSize = software.amazon.jsii.Kernel.get(this, "txQueueSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.vSwitchId = java.util.Objects.requireNonNull(builder.vSwitchId, "vSwitchId is required");
            this.deleteOnRelease = builder.deleteOnRelease;
            this.description = builder.description;
            this.ipv4PrefixCount = builder.ipv4PrefixCount;
            this.ipv4Prefixes = builder.ipv4Prefixes;
            this.ipv6AddressCount = builder.ipv6AddressCount;
            this.ipv6Addresses = builder.ipv6Addresses;
            this.ipv6PrefixCount = builder.ipv6PrefixCount;
            this.ipv6Prefixes = builder.ipv6Prefixes;
            this.networkInterfaceName = builder.networkInterfaceName;
            this.networkInterfaceTrafficMode = builder.networkInterfaceTrafficMode;
            this.primaryIpAddress = builder.primaryIpAddress;
            this.privateIpAddresses = builder.privateIpAddresses;
            this.queueNumber = builder.queueNumber;
            this.resourceGroupId = builder.resourceGroupId;
            this.rxQueueSize = builder.rxQueueSize;
            this.secondaryPrivateIpAddressCount = builder.secondaryPrivateIpAddressCount;
            this.securityGroupId = builder.securityGroupId;
            this.securityGroupIds = builder.securityGroupIds;
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.RosNetworkInterface.TagsProperty>)builder.tags;
            this.txQueueSize = builder.txQueueSize;
        }

        @Override
        public final java.lang.Object getVSwitchId() {
            return this.vSwitchId;
        }

        @Override
        public final java.lang.Object getDeleteOnRelease() {
            return this.deleteOnRelease;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getIpv4PrefixCount() {
            return this.ipv4PrefixCount;
        }

        @Override
        public final java.lang.Object getIpv4Prefixes() {
            return this.ipv4Prefixes;
        }

        @Override
        public final java.lang.Object getIpv6AddressCount() {
            return this.ipv6AddressCount;
        }

        @Override
        public final java.lang.Object getIpv6Addresses() {
            return this.ipv6Addresses;
        }

        @Override
        public final java.lang.Object getIpv6PrefixCount() {
            return this.ipv6PrefixCount;
        }

        @Override
        public final java.lang.Object getIpv6Prefixes() {
            return this.ipv6Prefixes;
        }

        @Override
        public final java.lang.Object getNetworkInterfaceName() {
            return this.networkInterfaceName;
        }

        @Override
        public final java.lang.Object getNetworkInterfaceTrafficMode() {
            return this.networkInterfaceTrafficMode;
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
        public final java.lang.Object getQueueNumber() {
            return this.queueNumber;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getRxQueueSize() {
            return this.rxQueueSize;
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
        public final java.lang.Object getTxQueueSize() {
            return this.txQueueSize;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
            if (this.getDeleteOnRelease() != null) {
                data.set("deleteOnRelease", om.valueToTree(this.getDeleteOnRelease()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getIpv4PrefixCount() != null) {
                data.set("ipv4PrefixCount", om.valueToTree(this.getIpv4PrefixCount()));
            }
            if (this.getIpv4Prefixes() != null) {
                data.set("ipv4Prefixes", om.valueToTree(this.getIpv4Prefixes()));
            }
            if (this.getIpv6AddressCount() != null) {
                data.set("ipv6AddressCount", om.valueToTree(this.getIpv6AddressCount()));
            }
            if (this.getIpv6Addresses() != null) {
                data.set("ipv6Addresses", om.valueToTree(this.getIpv6Addresses()));
            }
            if (this.getIpv6PrefixCount() != null) {
                data.set("ipv6PrefixCount", om.valueToTree(this.getIpv6PrefixCount()));
            }
            if (this.getIpv6Prefixes() != null) {
                data.set("ipv6Prefixes", om.valueToTree(this.getIpv6Prefixes()));
            }
            if (this.getNetworkInterfaceName() != null) {
                data.set("networkInterfaceName", om.valueToTree(this.getNetworkInterfaceName()));
            }
            if (this.getNetworkInterfaceTrafficMode() != null) {
                data.set("networkInterfaceTrafficMode", om.valueToTree(this.getNetworkInterfaceTrafficMode()));
            }
            if (this.getPrimaryIpAddress() != null) {
                data.set("primaryIpAddress", om.valueToTree(this.getPrimaryIpAddress()));
            }
            if (this.getPrivateIpAddresses() != null) {
                data.set("privateIpAddresses", om.valueToTree(this.getPrivateIpAddresses()));
            }
            if (this.getQueueNumber() != null) {
                data.set("queueNumber", om.valueToTree(this.getQueueNumber()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getRxQueueSize() != null) {
                data.set("rxQueueSize", om.valueToTree(this.getRxQueueSize()));
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
            if (this.getTxQueueSize() != null) {
                data.set("txQueueSize", om.valueToTree(this.getTxQueueSize()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.RosNetworkInterfaceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosNetworkInterfaceProps.Jsii$Proxy that = (RosNetworkInterfaceProps.Jsii$Proxy) o;

            if (!vSwitchId.equals(that.vSwitchId)) return false;
            if (this.deleteOnRelease != null ? !this.deleteOnRelease.equals(that.deleteOnRelease) : that.deleteOnRelease != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.ipv4PrefixCount != null ? !this.ipv4PrefixCount.equals(that.ipv4PrefixCount) : that.ipv4PrefixCount != null) return false;
            if (this.ipv4Prefixes != null ? !this.ipv4Prefixes.equals(that.ipv4Prefixes) : that.ipv4Prefixes != null) return false;
            if (this.ipv6AddressCount != null ? !this.ipv6AddressCount.equals(that.ipv6AddressCount) : that.ipv6AddressCount != null) return false;
            if (this.ipv6Addresses != null ? !this.ipv6Addresses.equals(that.ipv6Addresses) : that.ipv6Addresses != null) return false;
            if (this.ipv6PrefixCount != null ? !this.ipv6PrefixCount.equals(that.ipv6PrefixCount) : that.ipv6PrefixCount != null) return false;
            if (this.ipv6Prefixes != null ? !this.ipv6Prefixes.equals(that.ipv6Prefixes) : that.ipv6Prefixes != null) return false;
            if (this.networkInterfaceName != null ? !this.networkInterfaceName.equals(that.networkInterfaceName) : that.networkInterfaceName != null) return false;
            if (this.networkInterfaceTrafficMode != null ? !this.networkInterfaceTrafficMode.equals(that.networkInterfaceTrafficMode) : that.networkInterfaceTrafficMode != null) return false;
            if (this.primaryIpAddress != null ? !this.primaryIpAddress.equals(that.primaryIpAddress) : that.primaryIpAddress != null) return false;
            if (this.privateIpAddresses != null ? !this.privateIpAddresses.equals(that.privateIpAddresses) : that.privateIpAddresses != null) return false;
            if (this.queueNumber != null ? !this.queueNumber.equals(that.queueNumber) : that.queueNumber != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.rxQueueSize != null ? !this.rxQueueSize.equals(that.rxQueueSize) : that.rxQueueSize != null) return false;
            if (this.secondaryPrivateIpAddressCount != null ? !this.secondaryPrivateIpAddressCount.equals(that.secondaryPrivateIpAddressCount) : that.secondaryPrivateIpAddressCount != null) return false;
            if (this.securityGroupId != null ? !this.securityGroupId.equals(that.securityGroupId) : that.securityGroupId != null) return false;
            if (this.securityGroupIds != null ? !this.securityGroupIds.equals(that.securityGroupIds) : that.securityGroupIds != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            return this.txQueueSize != null ? this.txQueueSize.equals(that.txQueueSize) : that.txQueueSize == null;
        }

        @Override
        public final int hashCode() {
            int result = this.vSwitchId.hashCode();
            result = 31 * result + (this.deleteOnRelease != null ? this.deleteOnRelease.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.ipv4PrefixCount != null ? this.ipv4PrefixCount.hashCode() : 0);
            result = 31 * result + (this.ipv4Prefixes != null ? this.ipv4Prefixes.hashCode() : 0);
            result = 31 * result + (this.ipv6AddressCount != null ? this.ipv6AddressCount.hashCode() : 0);
            result = 31 * result + (this.ipv6Addresses != null ? this.ipv6Addresses.hashCode() : 0);
            result = 31 * result + (this.ipv6PrefixCount != null ? this.ipv6PrefixCount.hashCode() : 0);
            result = 31 * result + (this.ipv6Prefixes != null ? this.ipv6Prefixes.hashCode() : 0);
            result = 31 * result + (this.networkInterfaceName != null ? this.networkInterfaceName.hashCode() : 0);
            result = 31 * result + (this.networkInterfaceTrafficMode != null ? this.networkInterfaceTrafficMode.hashCode() : 0);
            result = 31 * result + (this.primaryIpAddress != null ? this.primaryIpAddress.hashCode() : 0);
            result = 31 * result + (this.privateIpAddresses != null ? this.privateIpAddresses.hashCode() : 0);
            result = 31 * result + (this.queueNumber != null ? this.queueNumber.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.rxQueueSize != null ? this.rxQueueSize.hashCode() : 0);
            result = 31 * result + (this.secondaryPrivateIpAddressCount != null ? this.secondaryPrivateIpAddressCount.hashCode() : 0);
            result = 31 * result + (this.securityGroupId != null ? this.securityGroupId.hashCode() : 0);
            result = 31 * result + (this.securityGroupIds != null ? this.securityGroupIds.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.txQueueSize != null ? this.txQueueSize.hashCode() : 0);
            return result;
        }
    }
}
