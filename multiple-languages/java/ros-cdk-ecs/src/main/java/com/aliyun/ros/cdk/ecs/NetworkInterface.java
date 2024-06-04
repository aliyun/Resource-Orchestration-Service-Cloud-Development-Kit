package com.aliyun.ros.cdk.ecs;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ECS::NetworkInterface</code>, which is used to create an elastic network interface (ENI).
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-04T02:47:54.665Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.NetworkInterface")
public class NetworkInterface extends com.aliyun.ros.cdk.core.Resource {

    protected NetworkInterface(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected NetworkInterface(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public NetworkInterface(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.NetworkInterfaceProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public NetworkInterface(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.NetworkInterfaceProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute MacAddress: The MAC address of your Network Interface.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrMacAddress() {
        return software.amazon.jsii.Kernel.get(this, "attrMacAddress", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute NetworkInterfaceId: ID of your Network Interface.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrNetworkInterfaceId() {
        return software.amazon.jsii.Kernel.get(this, "attrNetworkInterfaceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute PrivateIpAddress: The primary private ip address of your Network Interface.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPrivateIpAddress() {
        return software.amazon.jsii.Kernel.get(this, "attrPrivateIpAddress", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute SecondaryPrivateIpAddresses: The secondary private IP addresses of your Network Interface.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSecondaryPrivateIpAddresses() {
        return software.amazon.jsii.Kernel.get(this, "attrSecondaryPrivateIpAddresses", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    protected void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.String getId() {
        return software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    protected void setId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "id", java.util.Objects.requireNonNull(value, "id is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.NetworkInterfaceProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.NetworkInterfaceProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.NetworkInterfaceProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ecs.NetworkInterface}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecs.NetworkInterface> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.ecs.NetworkInterfaceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ecs.NetworkInterfaceProps.Builder();
        }

        /**
         * Property vSwitchId: VSwitch ID of the specified VPC.
         * <p>
         * Specifies the switch ID for the VPC.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: VSwitch ID of the specified VPC. This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }
        /**
         * Property vSwitchId: VSwitch ID of the specified VPC.
         * <p>
         * Specifies the switch ID for the VPC.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: VSwitch ID of the specified VPC. This parameter is required.
         */
        public Builder vSwitchId(final com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }

        /**
         * Property deleteOnRelease: Specifies whether to delete the ENI when the instance is released.
         * <p>
         * @return {@code this}
         * @param deleteOnRelease Property deleteOnRelease: Specifies whether to delete the ENI when the instance is released. This parameter is required.
         */
        public Builder deleteOnRelease(final java.lang.Boolean deleteOnRelease) {
            this.props.deleteOnRelease(deleteOnRelease);
            return this;
        }
        /**
         * Property deleteOnRelease: Specifies whether to delete the ENI when the instance is released.
         * <p>
         * @return {@code this}
         * @param deleteOnRelease Property deleteOnRelease: Specifies whether to delete the ENI when the instance is released. This parameter is required.
         */
        public Builder deleteOnRelease(final com.aliyun.ros.cdk.core.IResolvable deleteOnRelease) {
            this.props.deleteOnRelease(deleteOnRelease);
            return this;
        }

        /**
         * Property description: Description of your ENI.
         * <p>
         * It is a string of [2, 256] English or Chinese characters.
         * <p>
         * @return {@code this}
         * @param description Property description: Description of your ENI. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: Description of your ENI.
         * <p>
         * It is a string of [2, 256] English or Chinese characters.
         * <p>
         * @return {@code this}
         * @param description Property description: Description of your ENI. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property ipv4PrefixCount: Specifies one or more IPv4 prefixes for the elastic network interface.
         * <p>
         * Range: 1-10
         * <strong>Note</strong>: If you need to set an IPv4 prefix for an elastic network interface, you must set either Ipv4Prefixes or Ipv4PrefixCount, but not both.
         * <p>
         * @return {@code this}
         * @param ipv4PrefixCount Property ipv4PrefixCount: Specifies one or more IPv4 prefixes for the elastic network interface. This parameter is required.
         */
        public Builder ipv4PrefixCount(final java.lang.Number ipv4PrefixCount) {
            this.props.ipv4PrefixCount(ipv4PrefixCount);
            return this;
        }
        /**
         * Property ipv4PrefixCount: Specifies one or more IPv4 prefixes for the elastic network interface.
         * <p>
         * Range: 1-10
         * <strong>Note</strong>: If you need to set an IPv4 prefix for an elastic network interface, you must set either Ipv4Prefixes or Ipv4PrefixCount, but not both.
         * <p>
         * @return {@code this}
         * @param ipv4PrefixCount Property ipv4PrefixCount: Specifies one or more IPv4 prefixes for the elastic network interface. This parameter is required.
         */
        public Builder ipv4PrefixCount(final com.aliyun.ros.cdk.core.IResolvable ipv4PrefixCount) {
            this.props.ipv4PrefixCount(ipv4PrefixCount);
            return this;
        }

        /**
         * Property ipv4Prefixes: Specifies one or more IPv4 prefixes for the elastic network interface.
         * <p>
         * @return {@code this}
         * @param ipv4Prefixes Property ipv4Prefixes: Specifies one or more IPv4 prefixes for the elastic network interface. This parameter is required.
         */
        public Builder ipv4Prefixes(final com.aliyun.ros.cdk.core.IResolvable ipv4Prefixes) {
            this.props.ipv4Prefixes(ipv4Prefixes);
            return this;
        }
        /**
         * Property ipv4Prefixes: Specifies one or more IPv4 prefixes for the elastic network interface.
         * <p>
         * @return {@code this}
         * @param ipv4Prefixes Property ipv4Prefixes: Specifies one or more IPv4 prefixes for the elastic network interface. This parameter is required.
         */
        public Builder ipv4Prefixes(final java.util.List<? extends java.lang.Object> ipv4Prefixes) {
            this.props.ipv4Prefixes(ipv4Prefixes);
            return this;
        }

        /**
         * Property ipv6AddressCount: The number of randomly generated IPv6 addresses that are assigned to the ENI.
         * <p>
         * @return {@code this}
         * @param ipv6AddressCount Property ipv6AddressCount: The number of randomly generated IPv6 addresses that are assigned to the ENI. This parameter is required.
         */
        public Builder ipv6AddressCount(final java.lang.Number ipv6AddressCount) {
            this.props.ipv6AddressCount(ipv6AddressCount);
            return this;
        }
        /**
         * Property ipv6AddressCount: The number of randomly generated IPv6 addresses that are assigned to the ENI.
         * <p>
         * @return {@code this}
         * @param ipv6AddressCount Property ipv6AddressCount: The number of randomly generated IPv6 addresses that are assigned to the ENI. This parameter is required.
         */
        public Builder ipv6AddressCount(final com.aliyun.ros.cdk.core.IResolvable ipv6AddressCount) {
            this.props.ipv6AddressCount(ipv6AddressCount);
            return this;
        }

        /**
         * Property ipv6Addresses: The IPv6 address N to assign to the ENI.
         * <p>
         * @return {@code this}
         * @param ipv6Addresses Property ipv6Addresses: The IPv6 address N to assign to the ENI. This parameter is required.
         */
        public Builder ipv6Addresses(final com.aliyun.ros.cdk.core.IResolvable ipv6Addresses) {
            this.props.ipv6Addresses(ipv6Addresses);
            return this;
        }
        /**
         * Property ipv6Addresses: The IPv6 address N to assign to the ENI.
         * <p>
         * @return {@code this}
         * @param ipv6Addresses Property ipv6Addresses: The IPv6 address N to assign to the ENI. This parameter is required.
         */
        public Builder ipv6Addresses(final java.util.List<? extends java.lang.Object> ipv6Addresses) {
            this.props.ipv6Addresses(ipv6Addresses);
            return this;
        }

        /**
         * Property ipv6PrefixCount: Specifies one or more IPv6 prefixes for the elastic network interface.
         * <p>
         * Range: 1-10
         * <strong>Note</strong>: If you need to set an IPv6 prefix for an elastic network interface, you must set either Ipv6Prefixes or Ipv6PrefixCount, but not both.
         * <p>
         * @return {@code this}
         * @param ipv6PrefixCount Property ipv6PrefixCount: Specifies one or more IPv6 prefixes for the elastic network interface. This parameter is required.
         */
        public Builder ipv6PrefixCount(final java.lang.Number ipv6PrefixCount) {
            this.props.ipv6PrefixCount(ipv6PrefixCount);
            return this;
        }
        /**
         * Property ipv6PrefixCount: Specifies one or more IPv6 prefixes for the elastic network interface.
         * <p>
         * Range: 1-10
         * <strong>Note</strong>: If you need to set an IPv6 prefix for an elastic network interface, you must set either Ipv6Prefixes or Ipv6PrefixCount, but not both.
         * <p>
         * @return {@code this}
         * @param ipv6PrefixCount Property ipv6PrefixCount: Specifies one or more IPv6 prefixes for the elastic network interface. This parameter is required.
         */
        public Builder ipv6PrefixCount(final com.aliyun.ros.cdk.core.IResolvable ipv6PrefixCount) {
            this.props.ipv6PrefixCount(ipv6PrefixCount);
            return this;
        }

        /**
         * Property ipv6Prefixes: Specifies one or more IPv6 prefixes for the elastic network interface.
         * <p>
         * @return {@code this}
         * @param ipv6Prefixes Property ipv6Prefixes: Specifies one or more IPv6 prefixes for the elastic network interface. This parameter is required.
         */
        public Builder ipv6Prefixes(final com.aliyun.ros.cdk.core.IResolvable ipv6Prefixes) {
            this.props.ipv6Prefixes(ipv6Prefixes);
            return this;
        }
        /**
         * Property ipv6Prefixes: Specifies one or more IPv6 prefixes for the elastic network interface.
         * <p>
         * @return {@code this}
         * @param ipv6Prefixes Property ipv6Prefixes: Specifies one or more IPv6 prefixes for the elastic network interface. This parameter is required.
         */
        public Builder ipv6Prefixes(final java.util.List<? extends java.lang.Object> ipv6Prefixes) {
            this.props.ipv6Prefixes(ipv6Prefixes);
            return this;
        }

        /**
         * Property networkInterfaceName: Name of your ENI.
         * <p>
         * It is a string of [2, 128]  Chinese or English characters. It must begin with a letter and can contain numbers, underscores (_), colons (:), or hyphens (-).
         * <p>
         * @return {@code this}
         * @param networkInterfaceName Property networkInterfaceName: Name of your ENI. This parameter is required.
         */
        public Builder networkInterfaceName(final java.lang.String networkInterfaceName) {
            this.props.networkInterfaceName(networkInterfaceName);
            return this;
        }
        /**
         * Property networkInterfaceName: Name of your ENI.
         * <p>
         * It is a string of [2, 128]  Chinese or English characters. It must begin with a letter and can contain numbers, underscores (_), colons (:), or hyphens (-).
         * <p>
         * @return {@code this}
         * @param networkInterfaceName Property networkInterfaceName: Name of your ENI. This parameter is required.
         */
        public Builder networkInterfaceName(final com.aliyun.ros.cdk.core.IResolvable networkInterfaceName) {
            this.props.networkInterfaceName(networkInterfaceName);
            return this;
        }

        /**
         * Property networkInterfaceTrafficMode: The communication mode of the ENI.
         * <p>
         * Valid values:
         * Standard: uses the TCP communication mode.
         * HighPerformance: enables the Elastic RDMA Interface (ERI) and uses the remote direct memory access (RDMA) communication mode.
         * <p>
         * @return {@code this}
         * @param networkInterfaceTrafficMode Property networkInterfaceTrafficMode: The communication mode of the ENI. This parameter is required.
         */
        public Builder networkInterfaceTrafficMode(final java.lang.String networkInterfaceTrafficMode) {
            this.props.networkInterfaceTrafficMode(networkInterfaceTrafficMode);
            return this;
        }
        /**
         * Property networkInterfaceTrafficMode: The communication mode of the ENI.
         * <p>
         * Valid values:
         * Standard: uses the TCP communication mode.
         * HighPerformance: enables the Elastic RDMA Interface (ERI) and uses the remote direct memory access (RDMA) communication mode.
         * <p>
         * @return {@code this}
         * @param networkInterfaceTrafficMode Property networkInterfaceTrafficMode: The communication mode of the ENI. This parameter is required.
         */
        public Builder networkInterfaceTrafficMode(final com.aliyun.ros.cdk.core.IResolvable networkInterfaceTrafficMode) {
            this.props.networkInterfaceTrafficMode(networkInterfaceTrafficMode);
            return this;
        }

        /**
         * Property primaryIpAddress: The primary private IP address of the ENI.
         * <p>
         * The specified IP address must have the same Host ID as the VSwitch. If no IP addresses are specified, a random network ID is assigned for the ENI.
         * <p>
         * @return {@code this}
         * @param primaryIpAddress Property primaryIpAddress: The primary private IP address of the ENI. This parameter is required.
         */
        public Builder primaryIpAddress(final java.lang.String primaryIpAddress) {
            this.props.primaryIpAddress(primaryIpAddress);
            return this;
        }
        /**
         * Property primaryIpAddress: The primary private IP address of the ENI.
         * <p>
         * The specified IP address must have the same Host ID as the VSwitch. If no IP addresses are specified, a random network ID is assigned for the ENI.
         * <p>
         * @return {@code this}
         * @param primaryIpAddress Property primaryIpAddress: The primary private IP address of the ENI. This parameter is required.
         */
        public Builder primaryIpAddress(final com.aliyun.ros.cdk.core.IResolvable primaryIpAddress) {
            this.props.primaryIpAddress(primaryIpAddress);
            return this;
        }

        /**
         * Property privateIpAddresses: Specifies secondary private IP addresses of the ENI.
         * <p>
         * This IP address must be an available IP address in the CIDR block of the VSwitch to which the ENI belongs.
         * <p>
         * @return {@code this}
         * @param privateIpAddresses Property privateIpAddresses: Specifies secondary private IP addresses of the ENI. This parameter is required.
         */
        public Builder privateIpAddresses(final com.aliyun.ros.cdk.core.IResolvable privateIpAddresses) {
            this.props.privateIpAddresses(privateIpAddresses);
            return this;
        }
        /**
         * Property privateIpAddresses: Specifies secondary private IP addresses of the ENI.
         * <p>
         * This IP address must be an available IP address in the CIDR block of the VSwitch to which the ENI belongs.
         * <p>
         * @return {@code this}
         * @param privateIpAddresses Property privateIpAddresses: Specifies secondary private IP addresses of the ENI. This parameter is required.
         */
        public Builder privateIpAddresses(final java.util.List<? extends java.lang.Object> privateIpAddresses) {
            this.props.privateIpAddresses(privateIpAddresses);
            return this;
        }

        /**
         * Property queueNumber: The number of queues that are supported by the ENI.
         * <p>
         * Valid values: 1 to 2048.
         * When you attach the ENI to an instance, make sure that the value of this parameter is less than the maximum number of queues per ENI that is allowed for the instance type. To view the maximum number of queues per ENI allowed for an instance type, you can call DescribeInstanceTypes and then check the return value of MaximumQueueNumberPerEni.
         * By default, this parameter is empty. If you do not specify this parameter, the default number of queues per ENI for the instance type of an instance is used when you attach the ENI to the instance. To learn about the default number of queues per ENI for an instance type, you can call DescribeInstanceTypes and then check the return value of SecondaryEniQueueNumber.
         * <p>
         * @return {@code this}
         * @param queueNumber Property queueNumber: The number of queues that are supported by the ENI. This parameter is required.
         */
        public Builder queueNumber(final java.lang.Number queueNumber) {
            this.props.queueNumber(queueNumber);
            return this;
        }
        /**
         * Property queueNumber: The number of queues that are supported by the ENI.
         * <p>
         * Valid values: 1 to 2048.
         * When you attach the ENI to an instance, make sure that the value of this parameter is less than the maximum number of queues per ENI that is allowed for the instance type. To view the maximum number of queues per ENI allowed for an instance type, you can call DescribeInstanceTypes and then check the return value of MaximumQueueNumberPerEni.
         * By default, this parameter is empty. If you do not specify this parameter, the default number of queues per ENI for the instance type of an instance is used when you attach the ENI to the instance. To learn about the default number of queues per ENI for an instance type, you can call DescribeInstanceTypes and then check the return value of SecondaryEniQueueNumber.
         * <p>
         * @return {@code this}
         * @param queueNumber Property queueNumber: The number of queues that are supported by the ENI. This parameter is required.
         */
        public Builder queueNumber(final com.aliyun.ros.cdk.core.IResolvable queueNumber) {
            this.props.queueNumber(queueNumber);
            return this;
        }

        /**
         * Property resourceGroupId: Resource group id.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: Resource group id. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: Resource group id.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: Resource group id. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property rxQueueSize: Elastic network card inbound queue depth.
         * <p>
         * <strong>Note</strong>: The inbound queue depth of the network card must be equal to the outbound queue depth, ranging from 8192 to 16384, and must be a power of two.
         * Larger inbound queue depth can improve inbound throughput, but it consumes more memory.
         * <p>
         * @return {@code this}
         * @param rxQueueSize Property rxQueueSize: Elastic network card inbound queue depth. This parameter is required.
         */
        public Builder rxQueueSize(final java.lang.Number rxQueueSize) {
            this.props.rxQueueSize(rxQueueSize);
            return this;
        }
        /**
         * Property rxQueueSize: Elastic network card inbound queue depth.
         * <p>
         * <strong>Note</strong>: The inbound queue depth of the network card must be equal to the outbound queue depth, ranging from 8192 to 16384, and must be a power of two.
         * Larger inbound queue depth can improve inbound throughput, but it consumes more memory.
         * <p>
         * @return {@code this}
         * @param rxQueueSize Property rxQueueSize: Elastic network card inbound queue depth. This parameter is required.
         */
        public Builder rxQueueSize(final com.aliyun.ros.cdk.core.IResolvable rxQueueSize) {
            this.props.rxQueueSize(rxQueueSize);
            return this;
        }

        /**
         * Property secondaryPrivateIpAddressCount: The number of private IP addresses that can be created automatically by ECS.
         * <p>
         * @return {@code this}
         * @param secondaryPrivateIpAddressCount Property secondaryPrivateIpAddressCount: The number of private IP addresses that can be created automatically by ECS. This parameter is required.
         */
        public Builder secondaryPrivateIpAddressCount(final java.lang.Number secondaryPrivateIpAddressCount) {
            this.props.secondaryPrivateIpAddressCount(secondaryPrivateIpAddressCount);
            return this;
        }
        /**
         * Property secondaryPrivateIpAddressCount: The number of private IP addresses that can be created automatically by ECS.
         * <p>
         * @return {@code this}
         * @param secondaryPrivateIpAddressCount Property secondaryPrivateIpAddressCount: The number of private IP addresses that can be created automatically by ECS. This parameter is required.
         */
        public Builder secondaryPrivateIpAddressCount(final com.aliyun.ros.cdk.core.IResolvable secondaryPrivateIpAddressCount) {
            this.props.secondaryPrivateIpAddressCount(secondaryPrivateIpAddressCount);
            return this;
        }

        /**
         * Property securityGroupId: The ID of the security group that the ENI joins.
         * <p>
         * The security group and the ENI must be in a same VPC.
         * <p>
         * @return {@code this}
         * @param securityGroupId Property securityGroupId: The ID of the security group that the ENI joins. This parameter is required.
         */
        public Builder securityGroupId(final java.lang.String securityGroupId) {
            this.props.securityGroupId(securityGroupId);
            return this;
        }
        /**
         * Property securityGroupId: The ID of the security group that the ENI joins.
         * <p>
         * The security group and the ENI must be in a same VPC.
         * <p>
         * @return {@code this}
         * @param securityGroupId Property securityGroupId: The ID of the security group that the ENI joins. This parameter is required.
         */
        public Builder securityGroupId(final com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.props.securityGroupId(securityGroupId);
            return this;
        }

        /**
         * Property securityGroupIds: The IDs of the security groups that the ENI joins.
         * <p>
         * The security groups and the ENI must belong to the same VPC.
         * <p>
         * @return {@code this}
         * @param securityGroupIds Property securityGroupIds: The IDs of the security groups that the ENI joins. This parameter is required.
         */
        public Builder securityGroupIds(final com.aliyun.ros.cdk.core.IResolvable securityGroupIds) {
            this.props.securityGroupIds(securityGroupIds);
            return this;
        }
        /**
         * Property securityGroupIds: The IDs of the security groups that the ENI joins.
         * <p>
         * The security groups and the ENI must belong to the same VPC.
         * <p>
         * @return {@code this}
         * @param securityGroupIds Property securityGroupIds: The IDs of the security groups that the ENI joins. This parameter is required.
         */
        public Builder securityGroupIds(final java.util.List<? extends java.lang.Object> securityGroupIds) {
            this.props.securityGroupIds(securityGroupIds);
            return this;
        }

        /**
         * Property tags: Tags to attach to instance.
         * <p>
         * Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags to attach to instance. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.ecs.RosNetworkInterface.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * Property txQueueSize: Elastic network card outbound queue depth.
         * <p>
         * <strong>Note</strong>: The outbound queue depth of the network card must be equal to the inbound queue depth, ranging from 8192 to 16384, and must be a power of two.
         * Larger outbound queue depth can improve outbound throughput, but it consumes more memory.
         * <p>
         * @return {@code this}
         * @param txQueueSize Property txQueueSize: Elastic network card outbound queue depth. This parameter is required.
         */
        public Builder txQueueSize(final java.lang.Number txQueueSize) {
            this.props.txQueueSize(txQueueSize);
            return this;
        }
        /**
         * Property txQueueSize: Elastic network card outbound queue depth.
         * <p>
         * <strong>Note</strong>: The outbound queue depth of the network card must be equal to the inbound queue depth, ranging from 8192 to 16384, and must be a power of two.
         * Larger outbound queue depth can improve outbound throughput, but it consumes more memory.
         * <p>
         * @return {@code this}
         * @param txQueueSize Property txQueueSize: Elastic network card outbound queue depth. This parameter is required.
         */
        public Builder txQueueSize(final com.aliyun.ros.cdk.core.IResolvable txQueueSize) {
            this.props.txQueueSize(txQueueSize);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ecs.NetworkInterface}.
         */
        @Override
        public com.aliyun.ros.cdk.ecs.NetworkInterface build() {
            return new com.aliyun.ros.cdk.ecs.NetworkInterface(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
