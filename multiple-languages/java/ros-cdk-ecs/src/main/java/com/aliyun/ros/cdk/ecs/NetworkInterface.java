package com.aliyun.ros.cdk.ecs;

/**
 * A ROS resource type:  `ALIYUN::ECS::NetworkInterface`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.80.0 (build bce6a1d)", date = "2023-04-26T01:43:50.351Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.NetworkInterface")
public class NetworkInterface extends com.aliyun.ros.cdk.core.Resource {

    protected NetworkInterface(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected NetworkInterface(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::ECS::NetworkInterface`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
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
     * Create a new `ALIYUN::ECS::NetworkInterface`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
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
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.ecs.NetworkInterface}.
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
