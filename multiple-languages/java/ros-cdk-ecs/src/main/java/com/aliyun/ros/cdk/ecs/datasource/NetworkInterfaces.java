package com.aliyun.ros.cdk.ecs.datasource;

/**
 * A ROS resource type:  <code>DATASOURCE::ECS::NetworkInterfaces</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-15T09:57:25.822Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.datasource.NetworkInterfaces")
public class NetworkInterfaces extends com.aliyun.ros.cdk.core.Resource {

    protected NetworkInterfaces(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected NetworkInterfaces(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>DATASOURCE::ECS::NetworkInterfaces</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     * @param enableResourcePropertyConstraint
     */
    public NetworkInterfaces(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ecs.datasource.NetworkInterfacesProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props, enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>DATASOURCE::ECS::NetworkInterfaces</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     */
    public NetworkInterfaces(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ecs.datasource.NetworkInterfacesProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Create a new <code>DATASOURCE::ECS::NetworkInterfaces</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public NetworkInterfaces(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute NetworkInterfaceIds: The list of NetworkInterfaceIds.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrNetworkInterfaceIds() {
        return software.amazon.jsii.Kernel.get(this, "attrNetworkInterfaceIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute NetworkInterfaces: The list of NetworkInterfaces.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrNetworkInterfaces() {
        return software.amazon.jsii.Kernel.get(this, "attrNetworkInterfaces", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ecs.datasource.NetworkInterfaces}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecs.datasource.NetworkInterfaces> {
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
        private com.aliyun.ros.cdk.ecs.datasource.NetworkInterfacesProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property instanceId: The ID of the instance to which the ENI is bound.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The ID of the instance to which the ENI is bound. This parameter is required.
         */
        public Builder instanceId(final java.lang.String instanceId) {
            this.props().instanceId(instanceId);
            return this;
        }
        /**
         * Property instanceId: The ID of the instance to which the ENI is bound.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The ID of the instance to which the ENI is bound. This parameter is required.
         */
        public Builder instanceId(final com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.props().instanceId(instanceId);
            return this;
        }

        /**
         * Property ipv6Addresses: IPv6 address N of the ENI.
         * <p>
         * You can specify multiple IPv6 addresses. Valid values of N: 1 to 100.
         * <p>
         * @return {@code this}
         * @param ipv6Addresses Property ipv6Addresses: IPv6 address N of the ENI. This parameter is required.
         */
        public Builder ipv6Addresses(final com.aliyun.ros.cdk.core.IResolvable ipv6Addresses) {
            this.props().ipv6Addresses(ipv6Addresses);
            return this;
        }
        /**
         * Property ipv6Addresses: IPv6 address N of the ENI.
         * <p>
         * You can specify multiple IPv6 addresses. Valid values of N: 1 to 100.
         * <p>
         * @return {@code this}
         * @param ipv6Addresses Property ipv6Addresses: IPv6 address N of the ENI. This parameter is required.
         */
        public Builder ipv6Addresses(final java.util.List<? extends java.lang.Object> ipv6Addresses) {
            this.props().ipv6Addresses(ipv6Addresses);
            return this;
        }

        /**
         * Property networkInterfaceIds: The ID of ENI N.
         * <p>
         * Valid values of N: 1 to 100.
         * <p>
         * @return {@code this}
         * @param networkInterfaceIds Property networkInterfaceIds: The ID of ENI N. This parameter is required.
         */
        public Builder networkInterfaceIds(final com.aliyun.ros.cdk.core.IResolvable networkInterfaceIds) {
            this.props().networkInterfaceIds(networkInterfaceIds);
            return this;
        }
        /**
         * Property networkInterfaceIds: The ID of ENI N.
         * <p>
         * Valid values of N: 1 to 100.
         * <p>
         * @return {@code this}
         * @param networkInterfaceIds Property networkInterfaceIds: The ID of ENI N. This parameter is required.
         */
        public Builder networkInterfaceIds(final java.util.List<? extends java.lang.Object> networkInterfaceIds) {
            this.props().networkInterfaceIds(networkInterfaceIds);
            return this;
        }

        /**
         * Property networkInterfaceName: The name of the ENI.
         * <p>
         * @return {@code this}
         * @param networkInterfaceName Property networkInterfaceName: The name of the ENI. This parameter is required.
         */
        public Builder networkInterfaceName(final java.lang.String networkInterfaceName) {
            this.props().networkInterfaceName(networkInterfaceName);
            return this;
        }
        /**
         * Property networkInterfaceName: The name of the ENI.
         * <p>
         * @return {@code this}
         * @param networkInterfaceName Property networkInterfaceName: The name of the ENI. This parameter is required.
         */
        public Builder networkInterfaceName(final com.aliyun.ros.cdk.core.IResolvable networkInterfaceName) {
            this.props().networkInterfaceName(networkInterfaceName);
            return this;
        }

        /**
         * Property primaryIpAddress: The primary private IPv4 address of the ENI.
         * <p>
         * @return {@code this}
         * @param primaryIpAddress Property primaryIpAddress: The primary private IPv4 address of the ENI. This parameter is required.
         */
        public Builder primaryIpAddress(final java.lang.String primaryIpAddress) {
            this.props().primaryIpAddress(primaryIpAddress);
            return this;
        }
        /**
         * Property primaryIpAddress: The primary private IPv4 address of the ENI.
         * <p>
         * @return {@code this}
         * @param primaryIpAddress Property primaryIpAddress: The primary private IPv4 address of the ENI. This parameter is required.
         */
        public Builder primaryIpAddress(final com.aliyun.ros.cdk.core.IResolvable primaryIpAddress) {
            this.props().primaryIpAddress(primaryIpAddress);
            return this;
        }

        /**
         * Property privateIpAddresses: Secondary private IPv4 address N of the ENI.
         * <p>
         * Valid values of N: 1 to 100.
         * <p>
         * @return {@code this}
         * @param privateIpAddresses Property privateIpAddresses: Secondary private IPv4 address N of the ENI. This parameter is required.
         */
        public Builder privateIpAddresses(final com.aliyun.ros.cdk.core.IResolvable privateIpAddresses) {
            this.props().privateIpAddresses(privateIpAddresses);
            return this;
        }
        /**
         * Property privateIpAddresses: Secondary private IPv4 address N of the ENI.
         * <p>
         * Valid values of N: 1 to 100.
         * <p>
         * @return {@code this}
         * @param privateIpAddresses Property privateIpAddresses: Secondary private IPv4 address N of the ENI. This parameter is required.
         */
        public Builder privateIpAddresses(final java.util.List<? extends java.lang.Object> privateIpAddresses) {
            this.props().privateIpAddresses(privateIpAddresses);
            return this;
        }

        /**
         * Property resourceGroupId: The ID of the resource group to which the eni belongs.
         * <p>
         * If this parameter is specified to query resources,up to 1,000 resources that belong to the specified resource group can be displayed in the response.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the eni belongs. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props().resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The ID of the resource group to which the eni belongs.
         * <p>
         * If this parameter is specified to query resources,up to 1,000 resources that belong to the specified resource group can be displayed in the response.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the eni belongs. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props().resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property securityGroupId: The ID of the security group to which the secondary ENI belongs.
         * <p>
         * To query the details of secondary ENIs based on the ID of a security group, specify this parameter.
         * To query the details of primary ENIs based on the ID of a security group, call the DescribeInstances operation and specify the SecurityGroupId parameter.
         * <p>
         * @return {@code this}
         * @param securityGroupId Property securityGroupId: The ID of the security group to which the secondary ENI belongs. This parameter is required.
         */
        public Builder securityGroupId(final java.lang.String securityGroupId) {
            this.props().securityGroupId(securityGroupId);
            return this;
        }
        /**
         * Property securityGroupId: The ID of the security group to which the secondary ENI belongs.
         * <p>
         * To query the details of secondary ENIs based on the ID of a security group, specify this parameter.
         * To query the details of primary ENIs based on the ID of a security group, call the DescribeInstances operation and specify the SecurityGroupId parameter.
         * <p>
         * @return {@code this}
         * @param securityGroupId Property securityGroupId: The ID of the security group to which the secondary ENI belongs. This parameter is required.
         */
        public Builder securityGroupId(final com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.props().securityGroupId(securityGroupId);
            return this;
        }

        /**
         * Property serviceManaged: Specifies whether the user is an Alibaba Cloud service or a distributor.
         * <p>
         * @return {@code this}
         * @param serviceManaged Property serviceManaged: Specifies whether the user is an Alibaba Cloud service or a distributor. This parameter is required.
         */
        public Builder serviceManaged(final java.lang.Boolean serviceManaged) {
            this.props().serviceManaged(serviceManaged);
            return this;
        }
        /**
         * Property serviceManaged: Specifies whether the user is an Alibaba Cloud service or a distributor.
         * <p>
         * @return {@code this}
         * @param serviceManaged Property serviceManaged: Specifies whether the user is an Alibaba Cloud service or a distributor. This parameter is required.
         */
        public Builder serviceManaged(final com.aliyun.ros.cdk.core.IResolvable serviceManaged) {
            this.props().serviceManaged(serviceManaged);
            return this;
        }

        /**
         * Property status: The state of the ENI.
         * <p>
         * Valid values:
         * Creating: The ENI is being created.
         * Available: The ENI is not bound to an instance.
         * Attaching: The ENI is being bound to an instance.
         * InUse: The ENI is bound to an instance.
         * Detaching: The ENI is being unbound from an instance.
         * Deleting: The ENI is being deleted.
         * CreateFailed: The ENI cannot be created.
         * This parameter is empty by default, which indicates that ENIs in all states are queried.
         * <p>
         * @return {@code this}
         * @param status Property status: The state of the ENI. This parameter is required.
         */
        public Builder status(final java.lang.String status) {
            this.props().status(status);
            return this;
        }
        /**
         * Property status: The state of the ENI.
         * <p>
         * Valid values:
         * Creating: The ENI is being created.
         * Available: The ENI is not bound to an instance.
         * Attaching: The ENI is being bound to an instance.
         * InUse: The ENI is bound to an instance.
         * Detaching: The ENI is being unbound from an instance.
         * Deleting: The ENI is being deleted.
         * CreateFailed: The ENI cannot be created.
         * This parameter is empty by default, which indicates that ENIs in all states are queried.
         * <p>
         * @return {@code this}
         * @param status Property status: The state of the ENI. This parameter is required.
         */
        public Builder status(final com.aliyun.ros.cdk.core.IResolvable status) {
            this.props().status(status);
            return this;
        }

        /**
         * Property tags: Tags of eni.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags of eni. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.ecs.datasource.RosNetworkInterfaces.TagsProperty> tags) {
            this.props().tags(tags);
            return this;
        }

        /**
         * Property type: The type of the ENI.
         * <p>
         * Valid values:
         * Primary
         * Secondary
         * This parameter is empty by default, which indicates that both primary and secondary ENIs are queried.
         * <p>
         * @return {@code this}
         * @param type Property type: The type of the ENI. This parameter is required.
         */
        public Builder type(final java.lang.String type) {
            this.props().type(type);
            return this;
        }
        /**
         * Property type: The type of the ENI.
         * <p>
         * Valid values:
         * Primary
         * Secondary
         * This parameter is empty by default, which indicates that both primary and secondary ENIs are queried.
         * <p>
         * @return {@code this}
         * @param type Property type: The type of the ENI. This parameter is required.
         */
        public Builder type(final com.aliyun.ros.cdk.core.IResolvable type) {
            this.props().type(type);
            return this;
        }

        /**
         * Property vpcId: The ID of the virtual private cloud (VPC) to which the ENI belongs.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The ID of the virtual private cloud (VPC) to which the ENI belongs. This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props().vpcId(vpcId);
            return this;
        }
        /**
         * Property vpcId: The ID of the virtual private cloud (VPC) to which the ENI belongs.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The ID of the virtual private cloud (VPC) to which the ENI belongs. This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props().vpcId(vpcId);
            return this;
        }

        /**
         * Property vSwitchId: The ID of the vSwitch to which the ENI is connected.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The ID of the vSwitch to which the ENI is connected. This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props().vSwitchId(vSwitchId);
            return this;
        }
        /**
         * Property vSwitchId: The ID of the vSwitch to which the ENI is connected.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The ID of the vSwitch to which the ENI is connected. This parameter is required.
         */
        public Builder vSwitchId(final com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.props().vSwitchId(vSwitchId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ecs.datasource.NetworkInterfaces}.
         */
        @Override
        public com.aliyun.ros.cdk.ecs.datasource.NetworkInterfaces build() {
            return new com.aliyun.ros.cdk.ecs.datasource.NetworkInterfaces(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.ecs.datasource.NetworkInterfacesProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.ecs.datasource.NetworkInterfacesProps.Builder();
            }
            return this.props;
        }
    }
}
