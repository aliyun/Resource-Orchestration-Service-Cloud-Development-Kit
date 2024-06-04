package com.aliyun.ros.cdk.ecs.datasource;

/**
 * Properties for defining a <code>Instances</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-instances
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-04T02:47:55.012Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.datasource.InstancesProps")
@software.amazon.jsii.Jsii.Proxy(InstancesProps.Jsii$Proxy.class)
public interface InstancesProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property additionalAttributes: The value of attribute N.
     * <p>
     * Valid values of N: 1 to 20. Valid values:
     * META_OPTIONS: instance metadata
     * DDH_CLUSTER: dedicated host cluster
     * NETWORK_PRIMARY_ENI_IP: secondary IP address associated with the primary ENI of the instance
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAdditionalAttributes() {
        return null;
    }

    /**
     * Property eipAddresses: The elastic IP addresses (EIPs) of instances.
     * <p>
     * This parameter is valid when InstanceNetworkType is set to vpc. The value can be a JSON array that consists of up to 100 IP addresses. Separate the IP addresses with commas (,).
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEipAddresses() {
        return null;
    }

    /**
     * Property filters: Filter value when querying resources.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFilters() {
        return null;
    }

    /**
     * Property hpcClusterId: The ID of the High Performance Computing (HPC) cluster to which the instance belongs.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHpcClusterId() {
        return null;
    }

    /**
     * Property imageId: The ID of the image.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getImageId() {
        return null;
    }

    /**
     * Property innerIpAddresses: The internal IP addresses of instances located in the classic network.
     * <p>
     * This parameter is valid when InstanceNetworkType is set to classic. The value can be a JSON array that consists of up to 100 IP addresses. Separate the IP addresses with commas (,).
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInnerIpAddresses() {
        return null;
    }

    /**
     * Property instanceChargeType: The billing method of the instance.
     * <p>
     * Valid values:
     * PostPaid: pay-as-you-go
     * PrePaid: subscription
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceChargeType() {
        return null;
    }

    /**
     * Property instanceId: The IDs of instances.
     * <p>
     * The value can be a JSON array that consists of up to 100 instance IDs. Separate the instance IDs with commas (,).
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceId() {
        return null;
    }

    /**
     * Property instanceIds: The IDs of instances.
     * <p>
     * The value can be a JSON array that consists of up to 100 instance IDs. Separate the instance IDs with commas (,).
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceIds() {
        return null;
    }

    /**
     * Property instanceName: The name of the instance.
     * <p>
     * Fuzzy search with the asterisk (*) wildcard is supported.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceName() {
        return null;
    }

    /**
     * Property instanceNetworkType: The network type of the instance.
     * <p>
     * Valid values:
     * classic: classic network
     * vpc: VPC
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceNetworkType() {
        return null;
    }

    /**
     * Property instanceType: The instance type of the instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceType() {
        return null;
    }

    /**
     * Property instanceTypeFamily: The instance family of the instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceTypeFamily() {
        return null;
    }

    /**
     * Property internetChargeType: The billing method for network usage.
     * <p>
     * Valid values:
     * PayByBandwidth: pay-by-bandwidth
     * PayByTraffic: pay-by-traffic
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInternetChargeType() {
        return null;
    }

    /**
     * Property ioOptimized: Specifies whether the instance is I/O optimized.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIoOptimized() {
        return null;
    }

    /**
     * Property ipv6Address: IPv6 address N of the elastic network interface (ENI).
     * <p>
     * You can specify multiple IPv6 addresses. Valid values of N: 1 to 100.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpv6Address() {
        return null;
    }

    /**
     * Property keyPairName: The name of the SSH key pair bound to the instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getKeyPairName() {
        return null;
    }

    /**
     * Property privateIpAddresses: The private IP addresses of instances located in VPCs.
     * <p>
     * This parameter is valid when InstanceNetworkType is set to vpc. The value can be a JSON array that consists of up to 100 IP addresses. Separate the IP addresses with commas (,).
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPrivateIpAddresses() {
        return null;
    }

    /**
     * Property publicIpAddresses: The public IP addresses of instances.
     * <p>
     * The value can be a JSON array that consists of up to 100 IP addresses. Separate the IP addresses with commas (,).
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPublicIpAddresses() {
        return null;
    }

    /**
     * Property rdmaIpAddresses: The Remote Direct Memory Access (RDMA) IP addresses of HPC instances.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRdmaIpAddresses() {
        return null;
    }

    /**
     * Property resourceGroupId: The ID of the resource group to which the instance belongs.
     * <p>
     * If this parameter is specified to query resources,up to 1,000 resources that belong to the specified resource group can be displayed in the response.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property securityGroupId: The ID of the security group to which the instance belongs.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupId() {
        return null;
    }

    /**
     * Property status: The state of the instance.
     * <p>
     * Valid values:
     * Pending
     * Running
     * Starting
     * Stopping
     * Stopped
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStatus() {
        return null;
    }

    /**
     * Property tags: Tags of instance.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ecs.datasource.RosInstances.TagsProperty> getTags() {
        return null;
    }

    /**
     * Property vpcId: The ID of the virtual private cloud (VPC).
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVpcId() {
        return null;
    }

    /**
     * Property vSwitchId: The ID of the vSwitch.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchId() {
        return null;
    }

    /**
     * Property zoneId: The zone ID of the instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getZoneId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link InstancesProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link InstancesProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<InstancesProps> {
        java.lang.Object additionalAttributes;
        java.lang.Object eipAddresses;
        java.lang.Object filters;
        java.lang.Object hpcClusterId;
        java.lang.Object imageId;
        java.lang.Object innerIpAddresses;
        java.lang.Object instanceChargeType;
        java.lang.Object instanceId;
        java.lang.Object instanceIds;
        java.lang.Object instanceName;
        java.lang.Object instanceNetworkType;
        java.lang.Object instanceType;
        java.lang.Object instanceTypeFamily;
        java.lang.Object internetChargeType;
        java.lang.Object ioOptimized;
        java.lang.Object ipv6Address;
        java.lang.Object keyPairName;
        java.lang.Object privateIpAddresses;
        java.lang.Object publicIpAddresses;
        java.lang.Object rdmaIpAddresses;
        java.lang.Object resourceGroupId;
        java.lang.Object securityGroupId;
        java.lang.Object status;
        java.util.List<com.aliyun.ros.cdk.ecs.datasource.RosInstances.TagsProperty> tags;
        java.lang.Object vpcId;
        java.lang.Object vSwitchId;
        java.lang.Object zoneId;

        /**
         * Sets the value of {@link InstancesProps#getAdditionalAttributes}
         * @param additionalAttributes Property additionalAttributes: The value of attribute N.
         *                             Valid values of N: 1 to 20. Valid values:
         *                             META_OPTIONS: instance metadata
         *                             DDH_CLUSTER: dedicated host cluster
         *                             NETWORK_PRIMARY_ENI_IP: secondary IP address associated with the primary ENI of the instance
         * @return {@code this}
         */
        public Builder additionalAttributes(com.aliyun.ros.cdk.core.IResolvable additionalAttributes) {
            this.additionalAttributes = additionalAttributes;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getAdditionalAttributes}
         * @param additionalAttributes Property additionalAttributes: The value of attribute N.
         *                             Valid values of N: 1 to 20. Valid values:
         *                             META_OPTIONS: instance metadata
         *                             DDH_CLUSTER: dedicated host cluster
         *                             NETWORK_PRIMARY_ENI_IP: secondary IP address associated with the primary ENI of the instance
         * @return {@code this}
         */
        public Builder additionalAttributes(java.util.List<? extends java.lang.Object> additionalAttributes) {
            this.additionalAttributes = additionalAttributes;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getEipAddresses}
         * @param eipAddresses Property eipAddresses: The elastic IP addresses (EIPs) of instances.
         *                     This parameter is valid when InstanceNetworkType is set to vpc. The value can be a JSON array that consists of up to 100 IP addresses. Separate the IP addresses with commas (,).
         * @return {@code this}
         */
        public Builder eipAddresses(com.aliyun.ros.cdk.core.IResolvable eipAddresses) {
            this.eipAddresses = eipAddresses;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getEipAddresses}
         * @param eipAddresses Property eipAddresses: The elastic IP addresses (EIPs) of instances.
         *                     This parameter is valid when InstanceNetworkType is set to vpc. The value can be a JSON array that consists of up to 100 IP addresses. Separate the IP addresses with commas (,).
         * @return {@code this}
         */
        public Builder eipAddresses(java.util.List<? extends java.lang.Object> eipAddresses) {
            this.eipAddresses = eipAddresses;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getFilters}
         * @param filters Property filters: Filter value when querying resources.
         * @return {@code this}
         */
        public Builder filters(com.aliyun.ros.cdk.core.IResolvable filters) {
            this.filters = filters;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getFilters}
         * @param filters Property filters: Filter value when querying resources.
         * @return {@code this}
         */
        public Builder filters(java.util.List<? extends java.lang.Object> filters) {
            this.filters = filters;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getHpcClusterId}
         * @param hpcClusterId Property hpcClusterId: The ID of the High Performance Computing (HPC) cluster to which the instance belongs.
         * @return {@code this}
         */
        public Builder hpcClusterId(java.lang.String hpcClusterId) {
            this.hpcClusterId = hpcClusterId;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getHpcClusterId}
         * @param hpcClusterId Property hpcClusterId: The ID of the High Performance Computing (HPC) cluster to which the instance belongs.
         * @return {@code this}
         */
        public Builder hpcClusterId(com.aliyun.ros.cdk.core.IResolvable hpcClusterId) {
            this.hpcClusterId = hpcClusterId;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getImageId}
         * @param imageId Property imageId: The ID of the image.
         * @return {@code this}
         */
        public Builder imageId(java.lang.String imageId) {
            this.imageId = imageId;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getImageId}
         * @param imageId Property imageId: The ID of the image.
         * @return {@code this}
         */
        public Builder imageId(com.aliyun.ros.cdk.core.IResolvable imageId) {
            this.imageId = imageId;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getInnerIpAddresses}
         * @param innerIpAddresses Property innerIpAddresses: The internal IP addresses of instances located in the classic network.
         *                         This parameter is valid when InstanceNetworkType is set to classic. The value can be a JSON array that consists of up to 100 IP addresses. Separate the IP addresses with commas (,).
         * @return {@code this}
         */
        public Builder innerIpAddresses(com.aliyun.ros.cdk.core.IResolvable innerIpAddresses) {
            this.innerIpAddresses = innerIpAddresses;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getInnerIpAddresses}
         * @param innerIpAddresses Property innerIpAddresses: The internal IP addresses of instances located in the classic network.
         *                         This parameter is valid when InstanceNetworkType is set to classic. The value can be a JSON array that consists of up to 100 IP addresses. Separate the IP addresses with commas (,).
         * @return {@code this}
         */
        public Builder innerIpAddresses(java.util.List<? extends java.lang.Object> innerIpAddresses) {
            this.innerIpAddresses = innerIpAddresses;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getInstanceChargeType}
         * @param instanceChargeType Property instanceChargeType: The billing method of the instance.
         *                           Valid values:
         *                           PostPaid: pay-as-you-go
         *                           PrePaid: subscription
         * @return {@code this}
         */
        public Builder instanceChargeType(java.lang.String instanceChargeType) {
            this.instanceChargeType = instanceChargeType;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getInstanceChargeType}
         * @param instanceChargeType Property instanceChargeType: The billing method of the instance.
         *                           Valid values:
         *                           PostPaid: pay-as-you-go
         *                           PrePaid: subscription
         * @return {@code this}
         */
        public Builder instanceChargeType(com.aliyun.ros.cdk.core.IResolvable instanceChargeType) {
            this.instanceChargeType = instanceChargeType;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getInstanceId}
         * @param instanceId Property instanceId: The IDs of instances.
         *                   The value can be a JSON array that consists of up to 100 instance IDs. Separate the instance IDs with commas (,).
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getInstanceId}
         * @param instanceId Property instanceId: The IDs of instances.
         *                   The value can be a JSON array that consists of up to 100 instance IDs. Separate the instance IDs with commas (,).
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getInstanceIds}
         * @param instanceIds Property instanceIds: The IDs of instances.
         *                    The value can be a JSON array that consists of up to 100 instance IDs. Separate the instance IDs with commas (,).
         * @return {@code this}
         */
        public Builder instanceIds(com.aliyun.ros.cdk.core.IResolvable instanceIds) {
            this.instanceIds = instanceIds;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getInstanceIds}
         * @param instanceIds Property instanceIds: The IDs of instances.
         *                    The value can be a JSON array that consists of up to 100 instance IDs. Separate the instance IDs with commas (,).
         * @return {@code this}
         */
        public Builder instanceIds(java.util.List<? extends java.lang.Object> instanceIds) {
            this.instanceIds = instanceIds;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getInstanceName}
         * @param instanceName Property instanceName: The name of the instance.
         *                     Fuzzy search with the asterisk (*) wildcard is supported.
         * @return {@code this}
         */
        public Builder instanceName(java.lang.String instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getInstanceName}
         * @param instanceName Property instanceName: The name of the instance.
         *                     Fuzzy search with the asterisk (*) wildcard is supported.
         * @return {@code this}
         */
        public Builder instanceName(com.aliyun.ros.cdk.core.IResolvable instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getInstanceNetworkType}
         * @param instanceNetworkType Property instanceNetworkType: The network type of the instance.
         *                            Valid values:
         *                            classic: classic network
         *                            vpc: VPC
         * @return {@code this}
         */
        public Builder instanceNetworkType(java.lang.String instanceNetworkType) {
            this.instanceNetworkType = instanceNetworkType;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getInstanceNetworkType}
         * @param instanceNetworkType Property instanceNetworkType: The network type of the instance.
         *                            Valid values:
         *                            classic: classic network
         *                            vpc: VPC
         * @return {@code this}
         */
        public Builder instanceNetworkType(com.aliyun.ros.cdk.core.IResolvable instanceNetworkType) {
            this.instanceNetworkType = instanceNetworkType;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getInstanceType}
         * @param instanceType Property instanceType: The instance type of the instance.
         * @return {@code this}
         */
        public Builder instanceType(java.lang.String instanceType) {
            this.instanceType = instanceType;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getInstanceType}
         * @param instanceType Property instanceType: The instance type of the instance.
         * @return {@code this}
         */
        public Builder instanceType(com.aliyun.ros.cdk.core.IResolvable instanceType) {
            this.instanceType = instanceType;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getInstanceTypeFamily}
         * @param instanceTypeFamily Property instanceTypeFamily: The instance family of the instance.
         * @return {@code this}
         */
        public Builder instanceTypeFamily(java.lang.String instanceTypeFamily) {
            this.instanceTypeFamily = instanceTypeFamily;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getInstanceTypeFamily}
         * @param instanceTypeFamily Property instanceTypeFamily: The instance family of the instance.
         * @return {@code this}
         */
        public Builder instanceTypeFamily(com.aliyun.ros.cdk.core.IResolvable instanceTypeFamily) {
            this.instanceTypeFamily = instanceTypeFamily;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getInternetChargeType}
         * @param internetChargeType Property internetChargeType: The billing method for network usage.
         *                           Valid values:
         *                           PayByBandwidth: pay-by-bandwidth
         *                           PayByTraffic: pay-by-traffic
         * @return {@code this}
         */
        public Builder internetChargeType(java.lang.String internetChargeType) {
            this.internetChargeType = internetChargeType;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getInternetChargeType}
         * @param internetChargeType Property internetChargeType: The billing method for network usage.
         *                           Valid values:
         *                           PayByBandwidth: pay-by-bandwidth
         *                           PayByTraffic: pay-by-traffic
         * @return {@code this}
         */
        public Builder internetChargeType(com.aliyun.ros.cdk.core.IResolvable internetChargeType) {
            this.internetChargeType = internetChargeType;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getIoOptimized}
         * @param ioOptimized Property ioOptimized: Specifies whether the instance is I/O optimized.
         * @return {@code this}
         */
        public Builder ioOptimized(java.lang.Boolean ioOptimized) {
            this.ioOptimized = ioOptimized;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getIoOptimized}
         * @param ioOptimized Property ioOptimized: Specifies whether the instance is I/O optimized.
         * @return {@code this}
         */
        public Builder ioOptimized(com.aliyun.ros.cdk.core.IResolvable ioOptimized) {
            this.ioOptimized = ioOptimized;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getIpv6Address}
         * @param ipv6Address Property ipv6Address: IPv6 address N of the elastic network interface (ENI).
         *                    You can specify multiple IPv6 addresses. Valid values of N: 1 to 100.
         * @return {@code this}
         */
        public Builder ipv6Address(com.aliyun.ros.cdk.core.IResolvable ipv6Address) {
            this.ipv6Address = ipv6Address;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getIpv6Address}
         * @param ipv6Address Property ipv6Address: IPv6 address N of the elastic network interface (ENI).
         *                    You can specify multiple IPv6 addresses. Valid values of N: 1 to 100.
         * @return {@code this}
         */
        public Builder ipv6Address(java.util.List<? extends java.lang.Object> ipv6Address) {
            this.ipv6Address = ipv6Address;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getKeyPairName}
         * @param keyPairName Property keyPairName: The name of the SSH key pair bound to the instance.
         * @return {@code this}
         */
        public Builder keyPairName(java.lang.String keyPairName) {
            this.keyPairName = keyPairName;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getKeyPairName}
         * @param keyPairName Property keyPairName: The name of the SSH key pair bound to the instance.
         * @return {@code this}
         */
        public Builder keyPairName(com.aliyun.ros.cdk.core.IResolvable keyPairName) {
            this.keyPairName = keyPairName;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getPrivateIpAddresses}
         * @param privateIpAddresses Property privateIpAddresses: The private IP addresses of instances located in VPCs.
         *                           This parameter is valid when InstanceNetworkType is set to vpc. The value can be a JSON array that consists of up to 100 IP addresses. Separate the IP addresses with commas (,).
         * @return {@code this}
         */
        public Builder privateIpAddresses(com.aliyun.ros.cdk.core.IResolvable privateIpAddresses) {
            this.privateIpAddresses = privateIpAddresses;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getPrivateIpAddresses}
         * @param privateIpAddresses Property privateIpAddresses: The private IP addresses of instances located in VPCs.
         *                           This parameter is valid when InstanceNetworkType is set to vpc. The value can be a JSON array that consists of up to 100 IP addresses. Separate the IP addresses with commas (,).
         * @return {@code this}
         */
        public Builder privateIpAddresses(java.util.List<? extends java.lang.Object> privateIpAddresses) {
            this.privateIpAddresses = privateIpAddresses;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getPublicIpAddresses}
         * @param publicIpAddresses Property publicIpAddresses: The public IP addresses of instances.
         *                          The value can be a JSON array that consists of up to 100 IP addresses. Separate the IP addresses with commas (,).
         * @return {@code this}
         */
        public Builder publicIpAddresses(com.aliyun.ros.cdk.core.IResolvable publicIpAddresses) {
            this.publicIpAddresses = publicIpAddresses;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getPublicIpAddresses}
         * @param publicIpAddresses Property publicIpAddresses: The public IP addresses of instances.
         *                          The value can be a JSON array that consists of up to 100 IP addresses. Separate the IP addresses with commas (,).
         * @return {@code this}
         */
        public Builder publicIpAddresses(java.util.List<? extends java.lang.Object> publicIpAddresses) {
            this.publicIpAddresses = publicIpAddresses;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getRdmaIpAddresses}
         * @param rdmaIpAddresses Property rdmaIpAddresses: The Remote Direct Memory Access (RDMA) IP addresses of HPC instances.
         * @return {@code this}
         */
        public Builder rdmaIpAddresses(java.lang.String rdmaIpAddresses) {
            this.rdmaIpAddresses = rdmaIpAddresses;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getRdmaIpAddresses}
         * @param rdmaIpAddresses Property rdmaIpAddresses: The Remote Direct Memory Access (RDMA) IP addresses of HPC instances.
         * @return {@code this}
         */
        public Builder rdmaIpAddresses(com.aliyun.ros.cdk.core.IResolvable rdmaIpAddresses) {
            this.rdmaIpAddresses = rdmaIpAddresses;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the instance belongs.
         *                        If this parameter is specified to query resources,up to 1,000 resources that belong to the specified resource group can be displayed in the response.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the instance belongs.
         *                        If this parameter is specified to query resources,up to 1,000 resources that belong to the specified resource group can be displayed in the response.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getSecurityGroupId}
         * @param securityGroupId Property securityGroupId: The ID of the security group to which the instance belongs.
         * @return {@code this}
         */
        public Builder securityGroupId(java.lang.String securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getSecurityGroupId}
         * @param securityGroupId Property securityGroupId: The ID of the security group to which the instance belongs.
         * @return {@code this}
         */
        public Builder securityGroupId(com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getStatus}
         * @param status Property status: The state of the instance.
         *               Valid values:
         *               Pending
         *               Running
         *               Starting
         *               Stopping
         *               Stopped
         * @return {@code this}
         */
        public Builder status(java.lang.String status) {
            this.status = status;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getStatus}
         * @param status Property status: The state of the instance.
         *               Valid values:
         *               Pending
         *               Running
         *               Starting
         *               Stopping
         *               Stopped
         * @return {@code this}
         */
        public Builder status(com.aliyun.ros.cdk.core.IResolvable status) {
            this.status = status;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getTags}
         * @param tags Property tags: Tags of instance.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.ecs.datasource.RosInstances.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.datasource.RosInstances.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getVpcId}
         * @param vpcId Property vpcId: The ID of the virtual private cloud (VPC).
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getVpcId}
         * @param vpcId Property vpcId: The ID of the virtual private cloud (VPC).
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: The ID of the vSwitch.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: The ID of the vSwitch.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getZoneId}
         * @param zoneId Property zoneId: The zone ID of the instance.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getZoneId}
         * @param zoneId Property zoneId: The zone ID of the instance.
         * @return {@code this}
         */
        public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link InstancesProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public InstancesProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link InstancesProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements InstancesProps {
        private final java.lang.Object additionalAttributes;
        private final java.lang.Object eipAddresses;
        private final java.lang.Object filters;
        private final java.lang.Object hpcClusterId;
        private final java.lang.Object imageId;
        private final java.lang.Object innerIpAddresses;
        private final java.lang.Object instanceChargeType;
        private final java.lang.Object instanceId;
        private final java.lang.Object instanceIds;
        private final java.lang.Object instanceName;
        private final java.lang.Object instanceNetworkType;
        private final java.lang.Object instanceType;
        private final java.lang.Object instanceTypeFamily;
        private final java.lang.Object internetChargeType;
        private final java.lang.Object ioOptimized;
        private final java.lang.Object ipv6Address;
        private final java.lang.Object keyPairName;
        private final java.lang.Object privateIpAddresses;
        private final java.lang.Object publicIpAddresses;
        private final java.lang.Object rdmaIpAddresses;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object securityGroupId;
        private final java.lang.Object status;
        private final java.util.List<com.aliyun.ros.cdk.ecs.datasource.RosInstances.TagsProperty> tags;
        private final java.lang.Object vpcId;
        private final java.lang.Object vSwitchId;
        private final java.lang.Object zoneId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.additionalAttributes = software.amazon.jsii.Kernel.get(this, "additionalAttributes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.eipAddresses = software.amazon.jsii.Kernel.get(this, "eipAddresses", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.filters = software.amazon.jsii.Kernel.get(this, "filters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.hpcClusterId = software.amazon.jsii.Kernel.get(this, "hpcClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.imageId = software.amazon.jsii.Kernel.get(this, "imageId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.innerIpAddresses = software.amazon.jsii.Kernel.get(this, "innerIpAddresses", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceChargeType = software.amazon.jsii.Kernel.get(this, "instanceChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceIds = software.amazon.jsii.Kernel.get(this, "instanceIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceName = software.amazon.jsii.Kernel.get(this, "instanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceNetworkType = software.amazon.jsii.Kernel.get(this, "instanceNetworkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceType = software.amazon.jsii.Kernel.get(this, "instanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceTypeFamily = software.amazon.jsii.Kernel.get(this, "instanceTypeFamily", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.internetChargeType = software.amazon.jsii.Kernel.get(this, "internetChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ioOptimized = software.amazon.jsii.Kernel.get(this, "ioOptimized", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipv6Address = software.amazon.jsii.Kernel.get(this, "ipv6Address", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.keyPairName = software.amazon.jsii.Kernel.get(this, "keyPairName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.privateIpAddresses = software.amazon.jsii.Kernel.get(this, "privateIpAddresses", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.publicIpAddresses = software.amazon.jsii.Kernel.get(this, "publicIpAddresses", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.rdmaIpAddresses = software.amazon.jsii.Kernel.get(this, "rdmaIpAddresses", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityGroupId = software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.status = software.amazon.jsii.Kernel.get(this, "status", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.datasource.RosInstances.TagsProperty.class)));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.additionalAttributes = builder.additionalAttributes;
            this.eipAddresses = builder.eipAddresses;
            this.filters = builder.filters;
            this.hpcClusterId = builder.hpcClusterId;
            this.imageId = builder.imageId;
            this.innerIpAddresses = builder.innerIpAddresses;
            this.instanceChargeType = builder.instanceChargeType;
            this.instanceId = builder.instanceId;
            this.instanceIds = builder.instanceIds;
            this.instanceName = builder.instanceName;
            this.instanceNetworkType = builder.instanceNetworkType;
            this.instanceType = builder.instanceType;
            this.instanceTypeFamily = builder.instanceTypeFamily;
            this.internetChargeType = builder.internetChargeType;
            this.ioOptimized = builder.ioOptimized;
            this.ipv6Address = builder.ipv6Address;
            this.keyPairName = builder.keyPairName;
            this.privateIpAddresses = builder.privateIpAddresses;
            this.publicIpAddresses = builder.publicIpAddresses;
            this.rdmaIpAddresses = builder.rdmaIpAddresses;
            this.resourceGroupId = builder.resourceGroupId;
            this.securityGroupId = builder.securityGroupId;
            this.status = builder.status;
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.datasource.RosInstances.TagsProperty>)builder.tags;
            this.vpcId = builder.vpcId;
            this.vSwitchId = builder.vSwitchId;
            this.zoneId = builder.zoneId;
        }

        @Override
        public final java.lang.Object getAdditionalAttributes() {
            return this.additionalAttributes;
        }

        @Override
        public final java.lang.Object getEipAddresses() {
            return this.eipAddresses;
        }

        @Override
        public final java.lang.Object getFilters() {
            return this.filters;
        }

        @Override
        public final java.lang.Object getHpcClusterId() {
            return this.hpcClusterId;
        }

        @Override
        public final java.lang.Object getImageId() {
            return this.imageId;
        }

        @Override
        public final java.lang.Object getInnerIpAddresses() {
            return this.innerIpAddresses;
        }

        @Override
        public final java.lang.Object getInstanceChargeType() {
            return this.instanceChargeType;
        }

        @Override
        public final java.lang.Object getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.Object getInstanceIds() {
            return this.instanceIds;
        }

        @Override
        public final java.lang.Object getInstanceName() {
            return this.instanceName;
        }

        @Override
        public final java.lang.Object getInstanceNetworkType() {
            return this.instanceNetworkType;
        }

        @Override
        public final java.lang.Object getInstanceType() {
            return this.instanceType;
        }

        @Override
        public final java.lang.Object getInstanceTypeFamily() {
            return this.instanceTypeFamily;
        }

        @Override
        public final java.lang.Object getInternetChargeType() {
            return this.internetChargeType;
        }

        @Override
        public final java.lang.Object getIoOptimized() {
            return this.ioOptimized;
        }

        @Override
        public final java.lang.Object getIpv6Address() {
            return this.ipv6Address;
        }

        @Override
        public final java.lang.Object getKeyPairName() {
            return this.keyPairName;
        }

        @Override
        public final java.lang.Object getPrivateIpAddresses() {
            return this.privateIpAddresses;
        }

        @Override
        public final java.lang.Object getPublicIpAddresses() {
            return this.publicIpAddresses;
        }

        @Override
        public final java.lang.Object getRdmaIpAddresses() {
            return this.rdmaIpAddresses;
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
        public final java.lang.Object getStatus() {
            return this.status;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.ecs.datasource.RosInstances.TagsProperty> getTags() {
            return this.tags;
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
        public final java.lang.Object getZoneId() {
            return this.zoneId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getAdditionalAttributes() != null) {
                data.set("additionalAttributes", om.valueToTree(this.getAdditionalAttributes()));
            }
            if (this.getEipAddresses() != null) {
                data.set("eipAddresses", om.valueToTree(this.getEipAddresses()));
            }
            if (this.getFilters() != null) {
                data.set("filters", om.valueToTree(this.getFilters()));
            }
            if (this.getHpcClusterId() != null) {
                data.set("hpcClusterId", om.valueToTree(this.getHpcClusterId()));
            }
            if (this.getImageId() != null) {
                data.set("imageId", om.valueToTree(this.getImageId()));
            }
            if (this.getInnerIpAddresses() != null) {
                data.set("innerIpAddresses", om.valueToTree(this.getInnerIpAddresses()));
            }
            if (this.getInstanceChargeType() != null) {
                data.set("instanceChargeType", om.valueToTree(this.getInstanceChargeType()));
            }
            if (this.getInstanceId() != null) {
                data.set("instanceId", om.valueToTree(this.getInstanceId()));
            }
            if (this.getInstanceIds() != null) {
                data.set("instanceIds", om.valueToTree(this.getInstanceIds()));
            }
            if (this.getInstanceName() != null) {
                data.set("instanceName", om.valueToTree(this.getInstanceName()));
            }
            if (this.getInstanceNetworkType() != null) {
                data.set("instanceNetworkType", om.valueToTree(this.getInstanceNetworkType()));
            }
            if (this.getInstanceType() != null) {
                data.set("instanceType", om.valueToTree(this.getInstanceType()));
            }
            if (this.getInstanceTypeFamily() != null) {
                data.set("instanceTypeFamily", om.valueToTree(this.getInstanceTypeFamily()));
            }
            if (this.getInternetChargeType() != null) {
                data.set("internetChargeType", om.valueToTree(this.getInternetChargeType()));
            }
            if (this.getIoOptimized() != null) {
                data.set("ioOptimized", om.valueToTree(this.getIoOptimized()));
            }
            if (this.getIpv6Address() != null) {
                data.set("ipv6Address", om.valueToTree(this.getIpv6Address()));
            }
            if (this.getKeyPairName() != null) {
                data.set("keyPairName", om.valueToTree(this.getKeyPairName()));
            }
            if (this.getPrivateIpAddresses() != null) {
                data.set("privateIpAddresses", om.valueToTree(this.getPrivateIpAddresses()));
            }
            if (this.getPublicIpAddresses() != null) {
                data.set("publicIpAddresses", om.valueToTree(this.getPublicIpAddresses()));
            }
            if (this.getRdmaIpAddresses() != null) {
                data.set("rdmaIpAddresses", om.valueToTree(this.getRdmaIpAddresses()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getSecurityGroupId() != null) {
                data.set("securityGroupId", om.valueToTree(this.getSecurityGroupId()));
            }
            if (this.getStatus() != null) {
                data.set("status", om.valueToTree(this.getStatus()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getVpcId() != null) {
                data.set("vpcId", om.valueToTree(this.getVpcId()));
            }
            if (this.getVSwitchId() != null) {
                data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
            }
            if (this.getZoneId() != null) {
                data.set("zoneId", om.valueToTree(this.getZoneId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.datasource.InstancesProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            InstancesProps.Jsii$Proxy that = (InstancesProps.Jsii$Proxy) o;

            if (this.additionalAttributes != null ? !this.additionalAttributes.equals(that.additionalAttributes) : that.additionalAttributes != null) return false;
            if (this.eipAddresses != null ? !this.eipAddresses.equals(that.eipAddresses) : that.eipAddresses != null) return false;
            if (this.filters != null ? !this.filters.equals(that.filters) : that.filters != null) return false;
            if (this.hpcClusterId != null ? !this.hpcClusterId.equals(that.hpcClusterId) : that.hpcClusterId != null) return false;
            if (this.imageId != null ? !this.imageId.equals(that.imageId) : that.imageId != null) return false;
            if (this.innerIpAddresses != null ? !this.innerIpAddresses.equals(that.innerIpAddresses) : that.innerIpAddresses != null) return false;
            if (this.instanceChargeType != null ? !this.instanceChargeType.equals(that.instanceChargeType) : that.instanceChargeType != null) return false;
            if (this.instanceId != null ? !this.instanceId.equals(that.instanceId) : that.instanceId != null) return false;
            if (this.instanceIds != null ? !this.instanceIds.equals(that.instanceIds) : that.instanceIds != null) return false;
            if (this.instanceName != null ? !this.instanceName.equals(that.instanceName) : that.instanceName != null) return false;
            if (this.instanceNetworkType != null ? !this.instanceNetworkType.equals(that.instanceNetworkType) : that.instanceNetworkType != null) return false;
            if (this.instanceType != null ? !this.instanceType.equals(that.instanceType) : that.instanceType != null) return false;
            if (this.instanceTypeFamily != null ? !this.instanceTypeFamily.equals(that.instanceTypeFamily) : that.instanceTypeFamily != null) return false;
            if (this.internetChargeType != null ? !this.internetChargeType.equals(that.internetChargeType) : that.internetChargeType != null) return false;
            if (this.ioOptimized != null ? !this.ioOptimized.equals(that.ioOptimized) : that.ioOptimized != null) return false;
            if (this.ipv6Address != null ? !this.ipv6Address.equals(that.ipv6Address) : that.ipv6Address != null) return false;
            if (this.keyPairName != null ? !this.keyPairName.equals(that.keyPairName) : that.keyPairName != null) return false;
            if (this.privateIpAddresses != null ? !this.privateIpAddresses.equals(that.privateIpAddresses) : that.privateIpAddresses != null) return false;
            if (this.publicIpAddresses != null ? !this.publicIpAddresses.equals(that.publicIpAddresses) : that.publicIpAddresses != null) return false;
            if (this.rdmaIpAddresses != null ? !this.rdmaIpAddresses.equals(that.rdmaIpAddresses) : that.rdmaIpAddresses != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.securityGroupId != null ? !this.securityGroupId.equals(that.securityGroupId) : that.securityGroupId != null) return false;
            if (this.status != null ? !this.status.equals(that.status) : that.status != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            if (this.vpcId != null ? !this.vpcId.equals(that.vpcId) : that.vpcId != null) return false;
            if (this.vSwitchId != null ? !this.vSwitchId.equals(that.vSwitchId) : that.vSwitchId != null) return false;
            return this.zoneId != null ? this.zoneId.equals(that.zoneId) : that.zoneId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.additionalAttributes != null ? this.additionalAttributes.hashCode() : 0;
            result = 31 * result + (this.eipAddresses != null ? this.eipAddresses.hashCode() : 0);
            result = 31 * result + (this.filters != null ? this.filters.hashCode() : 0);
            result = 31 * result + (this.hpcClusterId != null ? this.hpcClusterId.hashCode() : 0);
            result = 31 * result + (this.imageId != null ? this.imageId.hashCode() : 0);
            result = 31 * result + (this.innerIpAddresses != null ? this.innerIpAddresses.hashCode() : 0);
            result = 31 * result + (this.instanceChargeType != null ? this.instanceChargeType.hashCode() : 0);
            result = 31 * result + (this.instanceId != null ? this.instanceId.hashCode() : 0);
            result = 31 * result + (this.instanceIds != null ? this.instanceIds.hashCode() : 0);
            result = 31 * result + (this.instanceName != null ? this.instanceName.hashCode() : 0);
            result = 31 * result + (this.instanceNetworkType != null ? this.instanceNetworkType.hashCode() : 0);
            result = 31 * result + (this.instanceType != null ? this.instanceType.hashCode() : 0);
            result = 31 * result + (this.instanceTypeFamily != null ? this.instanceTypeFamily.hashCode() : 0);
            result = 31 * result + (this.internetChargeType != null ? this.internetChargeType.hashCode() : 0);
            result = 31 * result + (this.ioOptimized != null ? this.ioOptimized.hashCode() : 0);
            result = 31 * result + (this.ipv6Address != null ? this.ipv6Address.hashCode() : 0);
            result = 31 * result + (this.keyPairName != null ? this.keyPairName.hashCode() : 0);
            result = 31 * result + (this.privateIpAddresses != null ? this.privateIpAddresses.hashCode() : 0);
            result = 31 * result + (this.publicIpAddresses != null ? this.publicIpAddresses.hashCode() : 0);
            result = 31 * result + (this.rdmaIpAddresses != null ? this.rdmaIpAddresses.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.securityGroupId != null ? this.securityGroupId.hashCode() : 0);
            result = 31 * result + (this.status != null ? this.status.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
            result = 31 * result + (this.vSwitchId != null ? this.vSwitchId.hashCode() : 0);
            result = 31 * result + (this.zoneId != null ? this.zoneId.hashCode() : 0);
            return result;
        }
    }
}
