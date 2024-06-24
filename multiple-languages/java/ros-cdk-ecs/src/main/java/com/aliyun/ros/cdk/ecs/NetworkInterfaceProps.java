package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a <code>NetworkInterface</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-networkinterface
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-24T05:57:06.259Z")
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
     * Property deleteOnRelease: Specifies whether to delete the ENI when the instance is released.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeleteOnRelease() {
        return null;
    }

    /**
     * Property description: Description of your ENI.
     * <p>
     * It is a string of [2, 256] English or Chinese characters.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property ipv4PrefixCount: Specifies one or more IPv4 prefixes for the elastic network interface.
     * <p>
     * Range: 1-10
     * <strong>Note</strong>: If you need to set an IPv4 prefix for an elastic network interface, you must set either Ipv4Prefixes or Ipv4PrefixCount, but not both.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpv4PrefixCount() {
        return null;
    }

    /**
     * Property ipv4Prefixes: Specifies one or more IPv4 prefixes for the elastic network interface.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpv4Prefixes() {
        return null;
    }

    /**
     * Property ipv6AddressCount: The number of randomly generated IPv6 addresses that are assigned to the ENI.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpv6AddressCount() {
        return null;
    }

    /**
     * Property ipv6Addresses: The IPv6 address N to assign to the ENI.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpv6Addresses() {
        return null;
    }

    /**
     * Property ipv6PrefixCount: Specifies one or more IPv6 prefixes for the elastic network interface.
     * <p>
     * Range: 1-10
     * <strong>Note</strong>: If you need to set an IPv6 prefix for an elastic network interface, you must set either Ipv6Prefixes or Ipv6PrefixCount, but not both.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpv6PrefixCount() {
        return null;
    }

    /**
     * Property ipv6Prefixes: Specifies one or more IPv6 prefixes for the elastic network interface.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpv6Prefixes() {
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
     * Property networkInterfaceTrafficMode: The communication mode of the ENI.
     * <p>
     * Valid values:
     * Standard: uses the TCP communication mode.
     * HighPerformance: enables the Elastic RDMA Interface (ERI) and uses the remote direct memory access (RDMA) communication mode.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNetworkInterfaceTrafficMode() {
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
     * Property queueNumber: The number of queues that are supported by the ENI.
     * <p>
     * Valid values: 1 to 2048.
     * When you attach the ENI to an instance, make sure that the value of this parameter is less than the maximum number of queues per ENI that is allowed for the instance type. To view the maximum number of queues per ENI allowed for an instance type, you can call DescribeInstanceTypes and then check the return value of MaximumQueueNumberPerEni.
     * By default, this parameter is empty. If you do not specify this parameter, the default number of queues per ENI for the instance type of an instance is used when you attach the ENI to the instance. To learn about the default number of queues per ENI for an instance type, you can call DescribeInstanceTypes and then check the return value of SecondaryEniQueueNumber.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getQueueNumber() {
        return null;
    }

    /**
     * Property resourceGroupId: Resource group id.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property rxQueueSize: Elastic network card inbound queue depth.
     * <p>
     * <strong>Note</strong>: The inbound queue depth of the network card must be equal to the outbound queue depth, ranging from 8192 to 16384, and must be a power of two.
     * Larger inbound queue depth can improve inbound throughput, but it consumes more memory.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRxQueueSize() {
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
     * Property txQueueSize: Elastic network card outbound queue depth.
     * <p>
     * <strong>Note</strong>: The outbound queue depth of the network card must be equal to the inbound queue depth, ranging from 8192 to 16384, and must be a power of two.
     * Larger outbound queue depth can improve outbound throughput, but it consumes more memory.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTxQueueSize() {
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
         * Sets the value of {@link NetworkInterfaceProps#getDeleteOnRelease}
         * @param deleteOnRelease Property deleteOnRelease: Specifies whether to delete the ENI when the instance is released.
         * @return {@code this}
         */
        public Builder deleteOnRelease(java.lang.Boolean deleteOnRelease) {
            this.deleteOnRelease = deleteOnRelease;
            return this;
        }

        /**
         * Sets the value of {@link NetworkInterfaceProps#getDeleteOnRelease}
         * @param deleteOnRelease Property deleteOnRelease: Specifies whether to delete the ENI when the instance is released.
         * @return {@code this}
         */
        public Builder deleteOnRelease(com.aliyun.ros.cdk.core.IResolvable deleteOnRelease) {
            this.deleteOnRelease = deleteOnRelease;
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
         * Sets the value of {@link NetworkInterfaceProps#getIpv4PrefixCount}
         * @param ipv4PrefixCount Property ipv4PrefixCount: Specifies one or more IPv4 prefixes for the elastic network interface.
         *                        Range: 1-10
         *                        <strong>Note</strong>: If you need to set an IPv4 prefix for an elastic network interface, you must set either Ipv4Prefixes or Ipv4PrefixCount, but not both.
         * @return {@code this}
         */
        public Builder ipv4PrefixCount(java.lang.Number ipv4PrefixCount) {
            this.ipv4PrefixCount = ipv4PrefixCount;
            return this;
        }

        /**
         * Sets the value of {@link NetworkInterfaceProps#getIpv4PrefixCount}
         * @param ipv4PrefixCount Property ipv4PrefixCount: Specifies one or more IPv4 prefixes for the elastic network interface.
         *                        Range: 1-10
         *                        <strong>Note</strong>: If you need to set an IPv4 prefix for an elastic network interface, you must set either Ipv4Prefixes or Ipv4PrefixCount, but not both.
         * @return {@code this}
         */
        public Builder ipv4PrefixCount(com.aliyun.ros.cdk.core.IResolvable ipv4PrefixCount) {
            this.ipv4PrefixCount = ipv4PrefixCount;
            return this;
        }

        /**
         * Sets the value of {@link NetworkInterfaceProps#getIpv4Prefixes}
         * @param ipv4Prefixes Property ipv4Prefixes: Specifies one or more IPv4 prefixes for the elastic network interface.
         * @return {@code this}
         */
        public Builder ipv4Prefixes(com.aliyun.ros.cdk.core.IResolvable ipv4Prefixes) {
            this.ipv4Prefixes = ipv4Prefixes;
            return this;
        }

        /**
         * Sets the value of {@link NetworkInterfaceProps#getIpv4Prefixes}
         * @param ipv4Prefixes Property ipv4Prefixes: Specifies one or more IPv4 prefixes for the elastic network interface.
         * @return {@code this}
         */
        public Builder ipv4Prefixes(java.util.List<? extends java.lang.Object> ipv4Prefixes) {
            this.ipv4Prefixes = ipv4Prefixes;
            return this;
        }

        /**
         * Sets the value of {@link NetworkInterfaceProps#getIpv6AddressCount}
         * @param ipv6AddressCount Property ipv6AddressCount: The number of randomly generated IPv6 addresses that are assigned to the ENI.
         * @return {@code this}
         */
        public Builder ipv6AddressCount(java.lang.Number ipv6AddressCount) {
            this.ipv6AddressCount = ipv6AddressCount;
            return this;
        }

        /**
         * Sets the value of {@link NetworkInterfaceProps#getIpv6AddressCount}
         * @param ipv6AddressCount Property ipv6AddressCount: The number of randomly generated IPv6 addresses that are assigned to the ENI.
         * @return {@code this}
         */
        public Builder ipv6AddressCount(com.aliyun.ros.cdk.core.IResolvable ipv6AddressCount) {
            this.ipv6AddressCount = ipv6AddressCount;
            return this;
        }

        /**
         * Sets the value of {@link NetworkInterfaceProps#getIpv6Addresses}
         * @param ipv6Addresses Property ipv6Addresses: The IPv6 address N to assign to the ENI.
         * @return {@code this}
         */
        public Builder ipv6Addresses(com.aliyun.ros.cdk.core.IResolvable ipv6Addresses) {
            this.ipv6Addresses = ipv6Addresses;
            return this;
        }

        /**
         * Sets the value of {@link NetworkInterfaceProps#getIpv6Addresses}
         * @param ipv6Addresses Property ipv6Addresses: The IPv6 address N to assign to the ENI.
         * @return {@code this}
         */
        public Builder ipv6Addresses(java.util.List<? extends java.lang.Object> ipv6Addresses) {
            this.ipv6Addresses = ipv6Addresses;
            return this;
        }

        /**
         * Sets the value of {@link NetworkInterfaceProps#getIpv6PrefixCount}
         * @param ipv6PrefixCount Property ipv6PrefixCount: Specifies one or more IPv6 prefixes for the elastic network interface.
         *                        Range: 1-10
         *                        <strong>Note</strong>: If you need to set an IPv6 prefix for an elastic network interface, you must set either Ipv6Prefixes or Ipv6PrefixCount, but not both.
         * @return {@code this}
         */
        public Builder ipv6PrefixCount(java.lang.Number ipv6PrefixCount) {
            this.ipv6PrefixCount = ipv6PrefixCount;
            return this;
        }

        /**
         * Sets the value of {@link NetworkInterfaceProps#getIpv6PrefixCount}
         * @param ipv6PrefixCount Property ipv6PrefixCount: Specifies one or more IPv6 prefixes for the elastic network interface.
         *                        Range: 1-10
         *                        <strong>Note</strong>: If you need to set an IPv6 prefix for an elastic network interface, you must set either Ipv6Prefixes or Ipv6PrefixCount, but not both.
         * @return {@code this}
         */
        public Builder ipv6PrefixCount(com.aliyun.ros.cdk.core.IResolvable ipv6PrefixCount) {
            this.ipv6PrefixCount = ipv6PrefixCount;
            return this;
        }

        /**
         * Sets the value of {@link NetworkInterfaceProps#getIpv6Prefixes}
         * @param ipv6Prefixes Property ipv6Prefixes: Specifies one or more IPv6 prefixes for the elastic network interface.
         * @return {@code this}
         */
        public Builder ipv6Prefixes(com.aliyun.ros.cdk.core.IResolvable ipv6Prefixes) {
            this.ipv6Prefixes = ipv6Prefixes;
            return this;
        }

        /**
         * Sets the value of {@link NetworkInterfaceProps#getIpv6Prefixes}
         * @param ipv6Prefixes Property ipv6Prefixes: Specifies one or more IPv6 prefixes for the elastic network interface.
         * @return {@code this}
         */
        public Builder ipv6Prefixes(java.util.List<? extends java.lang.Object> ipv6Prefixes) {
            this.ipv6Prefixes = ipv6Prefixes;
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
         * Sets the value of {@link NetworkInterfaceProps#getNetworkInterfaceTrafficMode}
         * @param networkInterfaceTrafficMode Property networkInterfaceTrafficMode: The communication mode of the ENI.
         *                                    Valid values:
         *                                    Standard: uses the TCP communication mode.
         *                                    HighPerformance: enables the Elastic RDMA Interface (ERI) and uses the remote direct memory access (RDMA) communication mode.
         * @return {@code this}
         */
        public Builder networkInterfaceTrafficMode(java.lang.String networkInterfaceTrafficMode) {
            this.networkInterfaceTrafficMode = networkInterfaceTrafficMode;
            return this;
        }

        /**
         * Sets the value of {@link NetworkInterfaceProps#getNetworkInterfaceTrafficMode}
         * @param networkInterfaceTrafficMode Property networkInterfaceTrafficMode: The communication mode of the ENI.
         *                                    Valid values:
         *                                    Standard: uses the TCP communication mode.
         *                                    HighPerformance: enables the Elastic RDMA Interface (ERI) and uses the remote direct memory access (RDMA) communication mode.
         * @return {@code this}
         */
        public Builder networkInterfaceTrafficMode(com.aliyun.ros.cdk.core.IResolvable networkInterfaceTrafficMode) {
            this.networkInterfaceTrafficMode = networkInterfaceTrafficMode;
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
         * Sets the value of {@link NetworkInterfaceProps#getQueueNumber}
         * @param queueNumber Property queueNumber: The number of queues that are supported by the ENI.
         *                    Valid values: 1 to 2048.
         *                    When you attach the ENI to an instance, make sure that the value of this parameter is less than the maximum number of queues per ENI that is allowed for the instance type. To view the maximum number of queues per ENI allowed for an instance type, you can call DescribeInstanceTypes and then check the return value of MaximumQueueNumberPerEni.
         *                    By default, this parameter is empty. If you do not specify this parameter, the default number of queues per ENI for the instance type of an instance is used when you attach the ENI to the instance. To learn about the default number of queues per ENI for an instance type, you can call DescribeInstanceTypes and then check the return value of SecondaryEniQueueNumber.
         * @return {@code this}
         */
        public Builder queueNumber(java.lang.Number queueNumber) {
            this.queueNumber = queueNumber;
            return this;
        }

        /**
         * Sets the value of {@link NetworkInterfaceProps#getQueueNumber}
         * @param queueNumber Property queueNumber: The number of queues that are supported by the ENI.
         *                    Valid values: 1 to 2048.
         *                    When you attach the ENI to an instance, make sure that the value of this parameter is less than the maximum number of queues per ENI that is allowed for the instance type. To view the maximum number of queues per ENI allowed for an instance type, you can call DescribeInstanceTypes and then check the return value of MaximumQueueNumberPerEni.
         *                    By default, this parameter is empty. If you do not specify this parameter, the default number of queues per ENI for the instance type of an instance is used when you attach the ENI to the instance. To learn about the default number of queues per ENI for an instance type, you can call DescribeInstanceTypes and then check the return value of SecondaryEniQueueNumber.
         * @return {@code this}
         */
        public Builder queueNumber(com.aliyun.ros.cdk.core.IResolvable queueNumber) {
            this.queueNumber = queueNumber;
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
         * Sets the value of {@link NetworkInterfaceProps#getRxQueueSize}
         * @param rxQueueSize Property rxQueueSize: Elastic network card inbound queue depth.
         *                    <strong>Note</strong>: The inbound queue depth of the network card must be equal to the outbound queue depth, ranging from 8192 to 16384, and must be a power of two.
         *                    Larger inbound queue depth can improve inbound throughput, but it consumes more memory.
         * @return {@code this}
         */
        public Builder rxQueueSize(java.lang.Number rxQueueSize) {
            this.rxQueueSize = rxQueueSize;
            return this;
        }

        /**
         * Sets the value of {@link NetworkInterfaceProps#getRxQueueSize}
         * @param rxQueueSize Property rxQueueSize: Elastic network card inbound queue depth.
         *                    <strong>Note</strong>: The inbound queue depth of the network card must be equal to the outbound queue depth, ranging from 8192 to 16384, and must be a power of two.
         *                    Larger inbound queue depth can improve inbound throughput, but it consumes more memory.
         * @return {@code this}
         */
        public Builder rxQueueSize(com.aliyun.ros.cdk.core.IResolvable rxQueueSize) {
            this.rxQueueSize = rxQueueSize;
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
         * Sets the value of {@link NetworkInterfaceProps#getTxQueueSize}
         * @param txQueueSize Property txQueueSize: Elastic network card outbound queue depth.
         *                    <strong>Note</strong>: The outbound queue depth of the network card must be equal to the inbound queue depth, ranging from 8192 to 16384, and must be a power of two.
         *                    Larger outbound queue depth can improve outbound throughput, but it consumes more memory.
         * @return {@code this}
         */
        public Builder txQueueSize(java.lang.Number txQueueSize) {
            this.txQueueSize = txQueueSize;
            return this;
        }

        /**
         * Sets the value of {@link NetworkInterfaceProps#getTxQueueSize}
         * @param txQueueSize Property txQueueSize: Elastic network card outbound queue depth.
         *                    <strong>Note</strong>: The outbound queue depth of the network card must be equal to the inbound queue depth, ranging from 8192 to 16384, and must be a power of two.
         *                    Larger outbound queue depth can improve outbound throughput, but it consumes more memory.
         * @return {@code this}
         */
        public Builder txQueueSize(com.aliyun.ros.cdk.core.IResolvable txQueueSize) {
            this.txQueueSize = txQueueSize;
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
