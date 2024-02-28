package com.aliyun.ros.cdk.ecs.datasource;

/**
 * Properties for defining a <code>NetworkInterfaces</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-networkinterfaces
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-02-28T02:53:28.639Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.datasource.NetworkInterfacesProps")
@software.amazon.jsii.Jsii.Proxy(NetworkInterfacesProps.Jsii$Proxy.class)
public interface NetworkInterfacesProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property instanceId: The ID of the instance to which the ENI is bound.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceId() {
        return null;
    }

    /**
     * Property ipv6Addresses: IPv6 address N of the ENI.
     * <p>
     * You can specify multiple IPv6 addresses. Valid values of N: 1 to 100.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpv6Addresses() {
        return null;
    }

    /**
     * Property networkInterfaceIds: The ID of ENI N.
     * <p>
     * Valid values of N: 1 to 100.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNetworkInterfaceIds() {
        return null;
    }

    /**
     * Property networkInterfaceName: The name of the ENI.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNetworkInterfaceName() {
        return null;
    }

    /**
     * Property primaryIpAddress: The primary private IPv4 address of the ENI.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPrimaryIpAddress() {
        return null;
    }

    /**
     * Property privateIpAddresses: Secondary private IPv4 address N of the ENI.
     * <p>
     * Valid values of N: 1 to 100.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPrivateIpAddresses() {
        return null;
    }

    /**
     * Property resourceGroupId: The ID of the resource group to which the eni belongs.
     * <p>
     * If this parameter is specified to query resources,up to 1,000 resources that belong to the specified resource group can be displayed in the response.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property securityGroupId: The ID of the security group to which the secondary ENI belongs.
     * <p>
     * To query the details of secondary ENIs based on the ID of a security group, specify this parameter.
     * To query the details of primary ENIs based on the ID of a security group, call the DescribeInstances operation and specify the SecurityGroupId parameter.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupId() {
        return null;
    }

    /**
     * Property serviceManaged: Specifies whether the user is an Alibaba Cloud service or a distributor.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getServiceManaged() {
        return null;
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
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStatus() {
        return null;
    }

    /**
     * Property tags: Tags of eni.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ecs.datasource.RosNetworkInterfaces.TagsProperty> getTags() {
        return null;
    }

    /**
     * Property type: The type of the ENI.
     * <p>
     * Valid values:
     * Primary
     * Secondary
     * This parameter is empty by default, which indicates that both primary and secondary ENIs are queried.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getType() {
        return null;
    }

    /**
     * Property vpcId: The ID of the virtual private cloud (VPC) to which the ENI belongs.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVpcId() {
        return null;
    }

    /**
     * Property vSwitchId: The ID of the vSwitch to which the ENI is connected.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link NetworkInterfacesProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link NetworkInterfacesProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<NetworkInterfacesProps> {
        java.lang.Object instanceId;
        java.lang.Object ipv6Addresses;
        java.lang.Object networkInterfaceIds;
        java.lang.Object networkInterfaceName;
        java.lang.Object primaryIpAddress;
        java.lang.Object privateIpAddresses;
        java.lang.Object resourceGroupId;
        java.lang.Object securityGroupId;
        java.lang.Object serviceManaged;
        java.lang.Object status;
        java.util.List<com.aliyun.ros.cdk.ecs.datasource.RosNetworkInterfaces.TagsProperty> tags;
        java.lang.Object type;
        java.lang.Object vpcId;
        java.lang.Object vSwitchId;

        /**
         * Sets the value of {@link NetworkInterfacesProps#getInstanceId}
         * @param instanceId Property instanceId: The ID of the instance to which the ENI is bound.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link NetworkInterfacesProps#getInstanceId}
         * @param instanceId Property instanceId: The ID of the instance to which the ENI is bound.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link NetworkInterfacesProps#getIpv6Addresses}
         * @param ipv6Addresses Property ipv6Addresses: IPv6 address N of the ENI.
         *                      You can specify multiple IPv6 addresses. Valid values of N: 1 to 100.
         * @return {@code this}
         */
        public Builder ipv6Addresses(com.aliyun.ros.cdk.core.IResolvable ipv6Addresses) {
            this.ipv6Addresses = ipv6Addresses;
            return this;
        }

        /**
         * Sets the value of {@link NetworkInterfacesProps#getIpv6Addresses}
         * @param ipv6Addresses Property ipv6Addresses: IPv6 address N of the ENI.
         *                      You can specify multiple IPv6 addresses. Valid values of N: 1 to 100.
         * @return {@code this}
         */
        public Builder ipv6Addresses(java.util.List<? extends java.lang.Object> ipv6Addresses) {
            this.ipv6Addresses = ipv6Addresses;
            return this;
        }

        /**
         * Sets the value of {@link NetworkInterfacesProps#getNetworkInterfaceIds}
         * @param networkInterfaceIds Property networkInterfaceIds: The ID of ENI N.
         *                            Valid values of N: 1 to 100.
         * @return {@code this}
         */
        public Builder networkInterfaceIds(com.aliyun.ros.cdk.core.IResolvable networkInterfaceIds) {
            this.networkInterfaceIds = networkInterfaceIds;
            return this;
        }

        /**
         * Sets the value of {@link NetworkInterfacesProps#getNetworkInterfaceIds}
         * @param networkInterfaceIds Property networkInterfaceIds: The ID of ENI N.
         *                            Valid values of N: 1 to 100.
         * @return {@code this}
         */
        public Builder networkInterfaceIds(java.util.List<? extends java.lang.Object> networkInterfaceIds) {
            this.networkInterfaceIds = networkInterfaceIds;
            return this;
        }

        /**
         * Sets the value of {@link NetworkInterfacesProps#getNetworkInterfaceName}
         * @param networkInterfaceName Property networkInterfaceName: The name of the ENI.
         * @return {@code this}
         */
        public Builder networkInterfaceName(java.lang.String networkInterfaceName) {
            this.networkInterfaceName = networkInterfaceName;
            return this;
        }

        /**
         * Sets the value of {@link NetworkInterfacesProps#getNetworkInterfaceName}
         * @param networkInterfaceName Property networkInterfaceName: The name of the ENI.
         * @return {@code this}
         */
        public Builder networkInterfaceName(com.aliyun.ros.cdk.core.IResolvable networkInterfaceName) {
            this.networkInterfaceName = networkInterfaceName;
            return this;
        }

        /**
         * Sets the value of {@link NetworkInterfacesProps#getPrimaryIpAddress}
         * @param primaryIpAddress Property primaryIpAddress: The primary private IPv4 address of the ENI.
         * @return {@code this}
         */
        public Builder primaryIpAddress(java.lang.String primaryIpAddress) {
            this.primaryIpAddress = primaryIpAddress;
            return this;
        }

        /**
         * Sets the value of {@link NetworkInterfacesProps#getPrimaryIpAddress}
         * @param primaryIpAddress Property primaryIpAddress: The primary private IPv4 address of the ENI.
         * @return {@code this}
         */
        public Builder primaryIpAddress(com.aliyun.ros.cdk.core.IResolvable primaryIpAddress) {
            this.primaryIpAddress = primaryIpAddress;
            return this;
        }

        /**
         * Sets the value of {@link NetworkInterfacesProps#getPrivateIpAddresses}
         * @param privateIpAddresses Property privateIpAddresses: Secondary private IPv4 address N of the ENI.
         *                           Valid values of N: 1 to 100.
         * @return {@code this}
         */
        public Builder privateIpAddresses(com.aliyun.ros.cdk.core.IResolvable privateIpAddresses) {
            this.privateIpAddresses = privateIpAddresses;
            return this;
        }

        /**
         * Sets the value of {@link NetworkInterfacesProps#getPrivateIpAddresses}
         * @param privateIpAddresses Property privateIpAddresses: Secondary private IPv4 address N of the ENI.
         *                           Valid values of N: 1 to 100.
         * @return {@code this}
         */
        public Builder privateIpAddresses(java.util.List<? extends java.lang.Object> privateIpAddresses) {
            this.privateIpAddresses = privateIpAddresses;
            return this;
        }

        /**
         * Sets the value of {@link NetworkInterfacesProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the eni belongs.
         *                        If this parameter is specified to query resources,up to 1,000 resources that belong to the specified resource group can be displayed in the response.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link NetworkInterfacesProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the eni belongs.
         *                        If this parameter is specified to query resources,up to 1,000 resources that belong to the specified resource group can be displayed in the response.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link NetworkInterfacesProps#getSecurityGroupId}
         * @param securityGroupId Property securityGroupId: The ID of the security group to which the secondary ENI belongs.
         *                        To query the details of secondary ENIs based on the ID of a security group, specify this parameter.
         *                        To query the details of primary ENIs based on the ID of a security group, call the DescribeInstances operation and specify the SecurityGroupId parameter.
         * @return {@code this}
         */
        public Builder securityGroupId(java.lang.String securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link NetworkInterfacesProps#getSecurityGroupId}
         * @param securityGroupId Property securityGroupId: The ID of the security group to which the secondary ENI belongs.
         *                        To query the details of secondary ENIs based on the ID of a security group, specify this parameter.
         *                        To query the details of primary ENIs based on the ID of a security group, call the DescribeInstances operation and specify the SecurityGroupId parameter.
         * @return {@code this}
         */
        public Builder securityGroupId(com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link NetworkInterfacesProps#getServiceManaged}
         * @param serviceManaged Property serviceManaged: Specifies whether the user is an Alibaba Cloud service or a distributor.
         * @return {@code this}
         */
        public Builder serviceManaged(java.lang.Boolean serviceManaged) {
            this.serviceManaged = serviceManaged;
            return this;
        }

        /**
         * Sets the value of {@link NetworkInterfacesProps#getServiceManaged}
         * @param serviceManaged Property serviceManaged: Specifies whether the user is an Alibaba Cloud service or a distributor.
         * @return {@code this}
         */
        public Builder serviceManaged(com.aliyun.ros.cdk.core.IResolvable serviceManaged) {
            this.serviceManaged = serviceManaged;
            return this;
        }

        /**
         * Sets the value of {@link NetworkInterfacesProps#getStatus}
         * @param status Property status: The state of the ENI.
         *               Valid values:
         *               Creating: The ENI is being created.
         *               Available: The ENI is not bound to an instance.
         *               Attaching: The ENI is being bound to an instance.
         *               InUse: The ENI is bound to an instance.
         *               Detaching: The ENI is being unbound from an instance.
         *               Deleting: The ENI is being deleted.
         *               CreateFailed: The ENI cannot be created.
         *               This parameter is empty by default, which indicates that ENIs in all states are queried.
         * @return {@code this}
         */
        public Builder status(java.lang.String status) {
            this.status = status;
            return this;
        }

        /**
         * Sets the value of {@link NetworkInterfacesProps#getStatus}
         * @param status Property status: The state of the ENI.
         *               Valid values:
         *               Creating: The ENI is being created.
         *               Available: The ENI is not bound to an instance.
         *               Attaching: The ENI is being bound to an instance.
         *               InUse: The ENI is bound to an instance.
         *               Detaching: The ENI is being unbound from an instance.
         *               Deleting: The ENI is being deleted.
         *               CreateFailed: The ENI cannot be created.
         *               This parameter is empty by default, which indicates that ENIs in all states are queried.
         * @return {@code this}
         */
        public Builder status(com.aliyun.ros.cdk.core.IResolvable status) {
            this.status = status;
            return this;
        }

        /**
         * Sets the value of {@link NetworkInterfacesProps#getTags}
         * @param tags Property tags: Tags of eni.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.ecs.datasource.RosNetworkInterfaces.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.datasource.RosNetworkInterfaces.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link NetworkInterfacesProps#getType}
         * @param type Property type: The type of the ENI.
         *             Valid values:
         *             Primary
         *             Secondary
         *             This parameter is empty by default, which indicates that both primary and secondary ENIs are queried.
         * @return {@code this}
         */
        public Builder type(java.lang.String type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link NetworkInterfacesProps#getType}
         * @param type Property type: The type of the ENI.
         *             Valid values:
         *             Primary
         *             Secondary
         *             This parameter is empty by default, which indicates that both primary and secondary ENIs are queried.
         * @return {@code this}
         */
        public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link NetworkInterfacesProps#getVpcId}
         * @param vpcId Property vpcId: The ID of the virtual private cloud (VPC) to which the ENI belongs.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link NetworkInterfacesProps#getVpcId}
         * @param vpcId Property vpcId: The ID of the virtual private cloud (VPC) to which the ENI belongs.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link NetworkInterfacesProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: The ID of the vSwitch to which the ENI is connected.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link NetworkInterfacesProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: The ID of the vSwitch to which the ENI is connected.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link NetworkInterfacesProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public NetworkInterfacesProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link NetworkInterfacesProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements NetworkInterfacesProps {
        private final java.lang.Object instanceId;
        private final java.lang.Object ipv6Addresses;
        private final java.lang.Object networkInterfaceIds;
        private final java.lang.Object networkInterfaceName;
        private final java.lang.Object primaryIpAddress;
        private final java.lang.Object privateIpAddresses;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object securityGroupId;
        private final java.lang.Object serviceManaged;
        private final java.lang.Object status;
        private final java.util.List<com.aliyun.ros.cdk.ecs.datasource.RosNetworkInterfaces.TagsProperty> tags;
        private final java.lang.Object type;
        private final java.lang.Object vpcId;
        private final java.lang.Object vSwitchId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipv6Addresses = software.amazon.jsii.Kernel.get(this, "ipv6Addresses", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.networkInterfaceIds = software.amazon.jsii.Kernel.get(this, "networkInterfaceIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.networkInterfaceName = software.amazon.jsii.Kernel.get(this, "networkInterfaceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.primaryIpAddress = software.amazon.jsii.Kernel.get(this, "primaryIpAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.privateIpAddresses = software.amazon.jsii.Kernel.get(this, "privateIpAddresses", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityGroupId = software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.serviceManaged = software.amazon.jsii.Kernel.get(this, "serviceManaged", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.status = software.amazon.jsii.Kernel.get(this, "status", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.datasource.RosNetworkInterfaces.TagsProperty.class)));
            this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.instanceId = builder.instanceId;
            this.ipv6Addresses = builder.ipv6Addresses;
            this.networkInterfaceIds = builder.networkInterfaceIds;
            this.networkInterfaceName = builder.networkInterfaceName;
            this.primaryIpAddress = builder.primaryIpAddress;
            this.privateIpAddresses = builder.privateIpAddresses;
            this.resourceGroupId = builder.resourceGroupId;
            this.securityGroupId = builder.securityGroupId;
            this.serviceManaged = builder.serviceManaged;
            this.status = builder.status;
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.datasource.RosNetworkInterfaces.TagsProperty>)builder.tags;
            this.type = builder.type;
            this.vpcId = builder.vpcId;
            this.vSwitchId = builder.vSwitchId;
        }

        @Override
        public final java.lang.Object getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.Object getIpv6Addresses() {
            return this.ipv6Addresses;
        }

        @Override
        public final java.lang.Object getNetworkInterfaceIds() {
            return this.networkInterfaceIds;
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
        public final java.lang.Object getSecurityGroupId() {
            return this.securityGroupId;
        }

        @Override
        public final java.lang.Object getServiceManaged() {
            return this.serviceManaged;
        }

        @Override
        public final java.lang.Object getStatus() {
            return this.status;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.ecs.datasource.RosNetworkInterfaces.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.Object getType() {
            return this.type;
        }

        @Override
        public final java.lang.Object getVpcId() {
            return this.vpcId;
        }

        @Override
        public final java.lang.Object getVSwitchId() {
            return this.vSwitchId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getInstanceId() != null) {
                data.set("instanceId", om.valueToTree(this.getInstanceId()));
            }
            if (this.getIpv6Addresses() != null) {
                data.set("ipv6Addresses", om.valueToTree(this.getIpv6Addresses()));
            }
            if (this.getNetworkInterfaceIds() != null) {
                data.set("networkInterfaceIds", om.valueToTree(this.getNetworkInterfaceIds()));
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
            if (this.getSecurityGroupId() != null) {
                data.set("securityGroupId", om.valueToTree(this.getSecurityGroupId()));
            }
            if (this.getServiceManaged() != null) {
                data.set("serviceManaged", om.valueToTree(this.getServiceManaged()));
            }
            if (this.getStatus() != null) {
                data.set("status", om.valueToTree(this.getStatus()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getType() != null) {
                data.set("type", om.valueToTree(this.getType()));
            }
            if (this.getVpcId() != null) {
                data.set("vpcId", om.valueToTree(this.getVpcId()));
            }
            if (this.getVSwitchId() != null) {
                data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.datasource.NetworkInterfacesProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            NetworkInterfacesProps.Jsii$Proxy that = (NetworkInterfacesProps.Jsii$Proxy) o;

            if (this.instanceId != null ? !this.instanceId.equals(that.instanceId) : that.instanceId != null) return false;
            if (this.ipv6Addresses != null ? !this.ipv6Addresses.equals(that.ipv6Addresses) : that.ipv6Addresses != null) return false;
            if (this.networkInterfaceIds != null ? !this.networkInterfaceIds.equals(that.networkInterfaceIds) : that.networkInterfaceIds != null) return false;
            if (this.networkInterfaceName != null ? !this.networkInterfaceName.equals(that.networkInterfaceName) : that.networkInterfaceName != null) return false;
            if (this.primaryIpAddress != null ? !this.primaryIpAddress.equals(that.primaryIpAddress) : that.primaryIpAddress != null) return false;
            if (this.privateIpAddresses != null ? !this.privateIpAddresses.equals(that.privateIpAddresses) : that.privateIpAddresses != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.securityGroupId != null ? !this.securityGroupId.equals(that.securityGroupId) : that.securityGroupId != null) return false;
            if (this.serviceManaged != null ? !this.serviceManaged.equals(that.serviceManaged) : that.serviceManaged != null) return false;
            if (this.status != null ? !this.status.equals(that.status) : that.status != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            if (this.type != null ? !this.type.equals(that.type) : that.type != null) return false;
            if (this.vpcId != null ? !this.vpcId.equals(that.vpcId) : that.vpcId != null) return false;
            return this.vSwitchId != null ? this.vSwitchId.equals(that.vSwitchId) : that.vSwitchId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.instanceId != null ? this.instanceId.hashCode() : 0;
            result = 31 * result + (this.ipv6Addresses != null ? this.ipv6Addresses.hashCode() : 0);
            result = 31 * result + (this.networkInterfaceIds != null ? this.networkInterfaceIds.hashCode() : 0);
            result = 31 * result + (this.networkInterfaceName != null ? this.networkInterfaceName.hashCode() : 0);
            result = 31 * result + (this.primaryIpAddress != null ? this.primaryIpAddress.hashCode() : 0);
            result = 31 * result + (this.privateIpAddresses != null ? this.privateIpAddresses.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.securityGroupId != null ? this.securityGroupId.hashCode() : 0);
            result = 31 * result + (this.serviceManaged != null ? this.serviceManaged.hashCode() : 0);
            result = 31 * result + (this.status != null ? this.status.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.type != null ? this.type.hashCode() : 0);
            result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
            result = 31 * result + (this.vSwitchId != null ? this.vSwitchId.hashCode() : 0);
            return result;
        }
    }
}
