package com.aliyun.ros.cdk.ecs.datasource;

/**
 * This class encapsulates and extends the ROS resource type <code>DATASOURCE::ECS::Instances</code>, which is used to query the details of Elastic Compute Service (ECS) instances.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-03-01T09:16:52.026Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.datasource.Instances")
public class Instances extends com.aliyun.ros.cdk.core.Resource {

    protected Instances(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Instances(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     * @param enableResourcePropertyConstraint
     */
    public Instances(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ecs.datasource.InstancesProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props, enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     */
    public Instances(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ecs.datasource.InstancesProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public Instances(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute InstanceIds: The list of InstanceIds.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceIds() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Instances: The list of Instances.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstances() {
        return software.amazon.jsii.Kernel.get(this, "attrInstances", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.datasource.InstancesProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.datasource.InstancesProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.datasource.InstancesProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ecs.datasource.Instances}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecs.datasource.Instances> {
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
        private com.aliyun.ros.cdk.ecs.datasource.InstancesProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property additionalAttributes: The value of attribute N.
         * <p>
         * Valid values of N: 1 to 20. Valid values:
         * META_OPTIONS: instance metadata
         * DDH_CLUSTER: dedicated host cluster
         * NETWORK_PRIMARY_ENI_IP: secondary IP address associated with the primary ENI of the instance
         * <p>
         * @return {@code this}
         * @param additionalAttributes Property additionalAttributes: The value of attribute N. This parameter is required.
         */
        public Builder additionalAttributes(final com.aliyun.ros.cdk.core.IResolvable additionalAttributes) {
            this.props().additionalAttributes(additionalAttributes);
            return this;
        }
        /**
         * Property additionalAttributes: The value of attribute N.
         * <p>
         * Valid values of N: 1 to 20. Valid values:
         * META_OPTIONS: instance metadata
         * DDH_CLUSTER: dedicated host cluster
         * NETWORK_PRIMARY_ENI_IP: secondary IP address associated with the primary ENI of the instance
         * <p>
         * @return {@code this}
         * @param additionalAttributes Property additionalAttributes: The value of attribute N. This parameter is required.
         */
        public Builder additionalAttributes(final java.util.List<? extends java.lang.Object> additionalAttributes) {
            this.props().additionalAttributes(additionalAttributes);
            return this;
        }

        /**
         * Property eipAddresses: The elastic IP addresses (EIPs) of instances.
         * <p>
         * This parameter is valid when InstanceNetworkType is set to vpc. The value can be a JSON array that consists of up to 100 IP addresses. Separate the IP addresses with commas (,).
         * <p>
         * @return {@code this}
         * @param eipAddresses Property eipAddresses: The elastic IP addresses (EIPs) of instances. This parameter is required.
         */
        public Builder eipAddresses(final com.aliyun.ros.cdk.core.IResolvable eipAddresses) {
            this.props().eipAddresses(eipAddresses);
            return this;
        }
        /**
         * Property eipAddresses: The elastic IP addresses (EIPs) of instances.
         * <p>
         * This parameter is valid when InstanceNetworkType is set to vpc. The value can be a JSON array that consists of up to 100 IP addresses. Separate the IP addresses with commas (,).
         * <p>
         * @return {@code this}
         * @param eipAddresses Property eipAddresses: The elastic IP addresses (EIPs) of instances. This parameter is required.
         */
        public Builder eipAddresses(final java.util.List<? extends java.lang.Object> eipAddresses) {
            this.props().eipAddresses(eipAddresses);
            return this;
        }

        /**
         * Property filters: Filter value when querying resources.
         * <p>
         * @return {@code this}
         * @param filters Property filters: Filter value when querying resources. This parameter is required.
         */
        public Builder filters(final com.aliyun.ros.cdk.core.IResolvable filters) {
            this.props().filters(filters);
            return this;
        }
        /**
         * Property filters: Filter value when querying resources.
         * <p>
         * @return {@code this}
         * @param filters Property filters: Filter value when querying resources. This parameter is required.
         */
        public Builder filters(final java.util.List<? extends java.lang.Object> filters) {
            this.props().filters(filters);
            return this;
        }

        /**
         * Property hpcClusterId: The ID of the High Performance Computing (HPC) cluster to which the instance belongs.
         * <p>
         * @return {@code this}
         * @param hpcClusterId Property hpcClusterId: The ID of the High Performance Computing (HPC) cluster to which the instance belongs. This parameter is required.
         */
        public Builder hpcClusterId(final java.lang.String hpcClusterId) {
            this.props().hpcClusterId(hpcClusterId);
            return this;
        }
        /**
         * Property hpcClusterId: The ID of the High Performance Computing (HPC) cluster to which the instance belongs.
         * <p>
         * @return {@code this}
         * @param hpcClusterId Property hpcClusterId: The ID of the High Performance Computing (HPC) cluster to which the instance belongs. This parameter is required.
         */
        public Builder hpcClusterId(final com.aliyun.ros.cdk.core.IResolvable hpcClusterId) {
            this.props().hpcClusterId(hpcClusterId);
            return this;
        }

        /**
         * Property imageId: The ID of the image.
         * <p>
         * @return {@code this}
         * @param imageId Property imageId: The ID of the image. This parameter is required.
         */
        public Builder imageId(final java.lang.String imageId) {
            this.props().imageId(imageId);
            return this;
        }
        /**
         * Property imageId: The ID of the image.
         * <p>
         * @return {@code this}
         * @param imageId Property imageId: The ID of the image. This parameter is required.
         */
        public Builder imageId(final com.aliyun.ros.cdk.core.IResolvable imageId) {
            this.props().imageId(imageId);
            return this;
        }

        /**
         * Property innerIpAddresses: The internal IP addresses of instances located in the classic network.
         * <p>
         * This parameter is valid when InstanceNetworkType is set to classic. The value can be a JSON array that consists of up to 100 IP addresses. Separate the IP addresses with commas (,).
         * <p>
         * @return {@code this}
         * @param innerIpAddresses Property innerIpAddresses: The internal IP addresses of instances located in the classic network. This parameter is required.
         */
        public Builder innerIpAddresses(final com.aliyun.ros.cdk.core.IResolvable innerIpAddresses) {
            this.props().innerIpAddresses(innerIpAddresses);
            return this;
        }
        /**
         * Property innerIpAddresses: The internal IP addresses of instances located in the classic network.
         * <p>
         * This parameter is valid when InstanceNetworkType is set to classic. The value can be a JSON array that consists of up to 100 IP addresses. Separate the IP addresses with commas (,).
         * <p>
         * @return {@code this}
         * @param innerIpAddresses Property innerIpAddresses: The internal IP addresses of instances located in the classic network. This parameter is required.
         */
        public Builder innerIpAddresses(final java.util.List<? extends java.lang.Object> innerIpAddresses) {
            this.props().innerIpAddresses(innerIpAddresses);
            return this;
        }

        /**
         * Property instanceChargeType: The billing method of the instance.
         * <p>
         * Valid values:
         * PostPaid: pay-as-you-go
         * PrePaid: subscription
         * <p>
         * @return {@code this}
         * @param instanceChargeType Property instanceChargeType: The billing method of the instance. This parameter is required.
         */
        public Builder instanceChargeType(final java.lang.String instanceChargeType) {
            this.props().instanceChargeType(instanceChargeType);
            return this;
        }
        /**
         * Property instanceChargeType: The billing method of the instance.
         * <p>
         * Valid values:
         * PostPaid: pay-as-you-go
         * PrePaid: subscription
         * <p>
         * @return {@code this}
         * @param instanceChargeType Property instanceChargeType: The billing method of the instance. This parameter is required.
         */
        public Builder instanceChargeType(final com.aliyun.ros.cdk.core.IResolvable instanceChargeType) {
            this.props().instanceChargeType(instanceChargeType);
            return this;
        }

        /**
         * Property instanceId: The IDs of instances.
         * <p>
         * The value can be a JSON array that consists of up to 100 instance IDs. Separate the instance IDs with commas (,).
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The IDs of instances. This parameter is required.
         */
        public Builder instanceId(final java.lang.String instanceId) {
            this.props().instanceId(instanceId);
            return this;
        }
        /**
         * Property instanceId: The IDs of instances.
         * <p>
         * The value can be a JSON array that consists of up to 100 instance IDs. Separate the instance IDs with commas (,).
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The IDs of instances. This parameter is required.
         */
        public Builder instanceId(final com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.props().instanceId(instanceId);
            return this;
        }

        /**
         * Property instanceIds: The IDs of instances.
         * <p>
         * The value can be a JSON array that consists of up to 100 instance IDs. Separate the instance IDs with commas (,).
         * <p>
         * @return {@code this}
         * @param instanceIds Property instanceIds: The IDs of instances. This parameter is required.
         */
        public Builder instanceIds(final com.aliyun.ros.cdk.core.IResolvable instanceIds) {
            this.props().instanceIds(instanceIds);
            return this;
        }
        /**
         * Property instanceIds: The IDs of instances.
         * <p>
         * The value can be a JSON array that consists of up to 100 instance IDs. Separate the instance IDs with commas (,).
         * <p>
         * @return {@code this}
         * @param instanceIds Property instanceIds: The IDs of instances. This parameter is required.
         */
        public Builder instanceIds(final java.util.List<? extends java.lang.Object> instanceIds) {
            this.props().instanceIds(instanceIds);
            return this;
        }

        /**
         * Property instanceName: The name of the instance.
         * <p>
         * Fuzzy search with the asterisk (*) wildcard is supported.
         * <p>
         * @return {@code this}
         * @param instanceName Property instanceName: The name of the instance. This parameter is required.
         */
        public Builder instanceName(final java.lang.String instanceName) {
            this.props().instanceName(instanceName);
            return this;
        }
        /**
         * Property instanceName: The name of the instance.
         * <p>
         * Fuzzy search with the asterisk (*) wildcard is supported.
         * <p>
         * @return {@code this}
         * @param instanceName Property instanceName: The name of the instance. This parameter is required.
         */
        public Builder instanceName(final com.aliyun.ros.cdk.core.IResolvable instanceName) {
            this.props().instanceName(instanceName);
            return this;
        }

        /**
         * Property instanceNetworkType: The network type of the instance.
         * <p>
         * Valid values:
         * classic: classic network
         * vpc: VPC
         * <p>
         * @return {@code this}
         * @param instanceNetworkType Property instanceNetworkType: The network type of the instance. This parameter is required.
         */
        public Builder instanceNetworkType(final java.lang.String instanceNetworkType) {
            this.props().instanceNetworkType(instanceNetworkType);
            return this;
        }
        /**
         * Property instanceNetworkType: The network type of the instance.
         * <p>
         * Valid values:
         * classic: classic network
         * vpc: VPC
         * <p>
         * @return {@code this}
         * @param instanceNetworkType Property instanceNetworkType: The network type of the instance. This parameter is required.
         */
        public Builder instanceNetworkType(final com.aliyun.ros.cdk.core.IResolvable instanceNetworkType) {
            this.props().instanceNetworkType(instanceNetworkType);
            return this;
        }

        /**
         * Property instanceType: The instance type of the instance.
         * <p>
         * @return {@code this}
         * @param instanceType Property instanceType: The instance type of the instance. This parameter is required.
         */
        public Builder instanceType(final java.lang.String instanceType) {
            this.props().instanceType(instanceType);
            return this;
        }
        /**
         * Property instanceType: The instance type of the instance.
         * <p>
         * @return {@code this}
         * @param instanceType Property instanceType: The instance type of the instance. This parameter is required.
         */
        public Builder instanceType(final com.aliyun.ros.cdk.core.IResolvable instanceType) {
            this.props().instanceType(instanceType);
            return this;
        }

        /**
         * Property instanceTypeFamily: The instance family of the instance.
         * <p>
         * @return {@code this}
         * @param instanceTypeFamily Property instanceTypeFamily: The instance family of the instance. This parameter is required.
         */
        public Builder instanceTypeFamily(final java.lang.String instanceTypeFamily) {
            this.props().instanceTypeFamily(instanceTypeFamily);
            return this;
        }
        /**
         * Property instanceTypeFamily: The instance family of the instance.
         * <p>
         * @return {@code this}
         * @param instanceTypeFamily Property instanceTypeFamily: The instance family of the instance. This parameter is required.
         */
        public Builder instanceTypeFamily(final com.aliyun.ros.cdk.core.IResolvable instanceTypeFamily) {
            this.props().instanceTypeFamily(instanceTypeFamily);
            return this;
        }

        /**
         * Property internetChargeType: The billing method for network usage.
         * <p>
         * Valid values:
         * PayByBandwidth: pay-by-bandwidth
         * PayByTraffic: pay-by-traffic
         * <p>
         * @return {@code this}
         * @param internetChargeType Property internetChargeType: The billing method for network usage. This parameter is required.
         */
        public Builder internetChargeType(final java.lang.String internetChargeType) {
            this.props().internetChargeType(internetChargeType);
            return this;
        }
        /**
         * Property internetChargeType: The billing method for network usage.
         * <p>
         * Valid values:
         * PayByBandwidth: pay-by-bandwidth
         * PayByTraffic: pay-by-traffic
         * <p>
         * @return {@code this}
         * @param internetChargeType Property internetChargeType: The billing method for network usage. This parameter is required.
         */
        public Builder internetChargeType(final com.aliyun.ros.cdk.core.IResolvable internetChargeType) {
            this.props().internetChargeType(internetChargeType);
            return this;
        }

        /**
         * Property ioOptimized: Specifies whether the instance is I/O optimized.
         * <p>
         * @return {@code this}
         * @param ioOptimized Property ioOptimized: Specifies whether the instance is I/O optimized. This parameter is required.
         */
        public Builder ioOptimized(final java.lang.Boolean ioOptimized) {
            this.props().ioOptimized(ioOptimized);
            return this;
        }
        /**
         * Property ioOptimized: Specifies whether the instance is I/O optimized.
         * <p>
         * @return {@code this}
         * @param ioOptimized Property ioOptimized: Specifies whether the instance is I/O optimized. This parameter is required.
         */
        public Builder ioOptimized(final com.aliyun.ros.cdk.core.IResolvable ioOptimized) {
            this.props().ioOptimized(ioOptimized);
            return this;
        }

        /**
         * Property ipv6Address: IPv6 address N of the elastic network interface (ENI).
         * <p>
         * You can specify multiple IPv6 addresses. Valid values of N: 1 to 100.
         * <p>
         * @return {@code this}
         * @param ipv6Address Property ipv6Address: IPv6 address N of the elastic network interface (ENI). This parameter is required.
         */
        public Builder ipv6Address(final com.aliyun.ros.cdk.core.IResolvable ipv6Address) {
            this.props().ipv6Address(ipv6Address);
            return this;
        }
        /**
         * Property ipv6Address: IPv6 address N of the elastic network interface (ENI).
         * <p>
         * You can specify multiple IPv6 addresses. Valid values of N: 1 to 100.
         * <p>
         * @return {@code this}
         * @param ipv6Address Property ipv6Address: IPv6 address N of the elastic network interface (ENI). This parameter is required.
         */
        public Builder ipv6Address(final java.util.List<? extends java.lang.Object> ipv6Address) {
            this.props().ipv6Address(ipv6Address);
            return this;
        }

        /**
         * Property keyPairName: The name of the SSH key pair bound to the instance.
         * <p>
         * @return {@code this}
         * @param keyPairName Property keyPairName: The name of the SSH key pair bound to the instance. This parameter is required.
         */
        public Builder keyPairName(final java.lang.String keyPairName) {
            this.props().keyPairName(keyPairName);
            return this;
        }
        /**
         * Property keyPairName: The name of the SSH key pair bound to the instance.
         * <p>
         * @return {@code this}
         * @param keyPairName Property keyPairName: The name of the SSH key pair bound to the instance. This parameter is required.
         */
        public Builder keyPairName(final com.aliyun.ros.cdk.core.IResolvable keyPairName) {
            this.props().keyPairName(keyPairName);
            return this;
        }

        /**
         * Property privateIpAddresses: The private IP addresses of instances located in VPCs.
         * <p>
         * This parameter is valid when InstanceNetworkType is set to vpc. The value can be a JSON array that consists of up to 100 IP addresses. Separate the IP addresses with commas (,).
         * <p>
         * @return {@code this}
         * @param privateIpAddresses Property privateIpAddresses: The private IP addresses of instances located in VPCs. This parameter is required.
         */
        public Builder privateIpAddresses(final com.aliyun.ros.cdk.core.IResolvable privateIpAddresses) {
            this.props().privateIpAddresses(privateIpAddresses);
            return this;
        }
        /**
         * Property privateIpAddresses: The private IP addresses of instances located in VPCs.
         * <p>
         * This parameter is valid when InstanceNetworkType is set to vpc. The value can be a JSON array that consists of up to 100 IP addresses. Separate the IP addresses with commas (,).
         * <p>
         * @return {@code this}
         * @param privateIpAddresses Property privateIpAddresses: The private IP addresses of instances located in VPCs. This parameter is required.
         */
        public Builder privateIpAddresses(final java.util.List<? extends java.lang.Object> privateIpAddresses) {
            this.props().privateIpAddresses(privateIpAddresses);
            return this;
        }

        /**
         * Property publicIpAddresses: The public IP addresses of instances.
         * <p>
         * The value can be a JSON array that consists of up to 100 IP addresses. Separate the IP addresses with commas (,).
         * <p>
         * @return {@code this}
         * @param publicIpAddresses Property publicIpAddresses: The public IP addresses of instances. This parameter is required.
         */
        public Builder publicIpAddresses(final com.aliyun.ros.cdk.core.IResolvable publicIpAddresses) {
            this.props().publicIpAddresses(publicIpAddresses);
            return this;
        }
        /**
         * Property publicIpAddresses: The public IP addresses of instances.
         * <p>
         * The value can be a JSON array that consists of up to 100 IP addresses. Separate the IP addresses with commas (,).
         * <p>
         * @return {@code this}
         * @param publicIpAddresses Property publicIpAddresses: The public IP addresses of instances. This parameter is required.
         */
        public Builder publicIpAddresses(final java.util.List<? extends java.lang.Object> publicIpAddresses) {
            this.props().publicIpAddresses(publicIpAddresses);
            return this;
        }

        /**
         * Property rdmaIpAddresses: The Remote Direct Memory Access (RDMA) IP addresses of HPC instances.
         * <p>
         * @return {@code this}
         * @param rdmaIpAddresses Property rdmaIpAddresses: The Remote Direct Memory Access (RDMA) IP addresses of HPC instances. This parameter is required.
         */
        public Builder rdmaIpAddresses(final java.lang.String rdmaIpAddresses) {
            this.props().rdmaIpAddresses(rdmaIpAddresses);
            return this;
        }
        /**
         * Property rdmaIpAddresses: The Remote Direct Memory Access (RDMA) IP addresses of HPC instances.
         * <p>
         * @return {@code this}
         * @param rdmaIpAddresses Property rdmaIpAddresses: The Remote Direct Memory Access (RDMA) IP addresses of HPC instances. This parameter is required.
         */
        public Builder rdmaIpAddresses(final com.aliyun.ros.cdk.core.IResolvable rdmaIpAddresses) {
            this.props().rdmaIpAddresses(rdmaIpAddresses);
            return this;
        }

        /**
         * Property resourceGroupId: The ID of the resource group to which the instance belongs.
         * <p>
         * If this parameter is specified to query resources,up to 1,000 resources that belong to the specified resource group can be displayed in the response.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the instance belongs. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props().resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The ID of the resource group to which the instance belongs.
         * <p>
         * If this parameter is specified to query resources,up to 1,000 resources that belong to the specified resource group can be displayed in the response.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the instance belongs. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props().resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property securityGroupId: The ID of the security group to which the instance belongs.
         * <p>
         * @return {@code this}
         * @param securityGroupId Property securityGroupId: The ID of the security group to which the instance belongs. This parameter is required.
         */
        public Builder securityGroupId(final java.lang.String securityGroupId) {
            this.props().securityGroupId(securityGroupId);
            return this;
        }
        /**
         * Property securityGroupId: The ID of the security group to which the instance belongs.
         * <p>
         * @return {@code this}
         * @param securityGroupId Property securityGroupId: The ID of the security group to which the instance belongs. This parameter is required.
         */
        public Builder securityGroupId(final com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.props().securityGroupId(securityGroupId);
            return this;
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
         * <p>
         * @return {@code this}
         * @param status Property status: The state of the instance. This parameter is required.
         */
        public Builder status(final java.lang.String status) {
            this.props().status(status);
            return this;
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
         * <p>
         * @return {@code this}
         * @param status Property status: The state of the instance. This parameter is required.
         */
        public Builder status(final com.aliyun.ros.cdk.core.IResolvable status) {
            this.props().status(status);
            return this;
        }

        /**
         * Property tags: Tags of instance.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags of instance. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.ecs.datasource.RosInstances.TagsProperty> tags) {
            this.props().tags(tags);
            return this;
        }

        /**
         * Property vpcId: The ID of the virtual private cloud (VPC).
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The ID of the virtual private cloud (VPC). This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props().vpcId(vpcId);
            return this;
        }
        /**
         * Property vpcId: The ID of the virtual private cloud (VPC).
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The ID of the virtual private cloud (VPC). This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props().vpcId(vpcId);
            return this;
        }

        /**
         * Property vSwitchId: The ID of the vSwitch.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The ID of the vSwitch. This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props().vSwitchId(vSwitchId);
            return this;
        }
        /**
         * Property vSwitchId: The ID of the vSwitch.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The ID of the vSwitch. This parameter is required.
         */
        public Builder vSwitchId(final com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.props().vSwitchId(vSwitchId);
            return this;
        }

        /**
         * Property zoneId: The zone ID of the instance.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: The zone ID of the instance. This parameter is required.
         */
        public Builder zoneId(final java.lang.String zoneId) {
            this.props().zoneId(zoneId);
            return this;
        }
        /**
         * Property zoneId: The zone ID of the instance.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: The zone ID of the instance. This parameter is required.
         */
        public Builder zoneId(final com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.props().zoneId(zoneId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ecs.datasource.Instances}.
         */
        @Override
        public com.aliyun.ros.cdk.ecs.datasource.Instances build() {
            return new com.aliyun.ros.cdk.ecs.datasource.Instances(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.ecs.datasource.InstancesProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.ecs.datasource.InstancesProps.Builder();
            }
            return this.props;
        }
    }
}
