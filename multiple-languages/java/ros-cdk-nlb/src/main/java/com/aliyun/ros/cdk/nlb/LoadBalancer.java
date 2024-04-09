package com.aliyun.ros.cdk.nlb;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::NLB::LoadBalancer</code>, which is used to create a Network Load Balancer (NLB) instance.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-04-09T06:05:34.062Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.nlb.$Module.class, fqn = "@alicloud/ros-cdk-nlb.LoadBalancer")
public class LoadBalancer extends com.aliyun.ros.cdk.core.Resource {

    protected LoadBalancer(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected LoadBalancer(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public LoadBalancer(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.nlb.LoadBalancerProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public LoadBalancer(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.nlb.LoadBalancerProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AddressIpVersion: The version of IP address that the NLB instance uses to provide services.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAddressIpVersion() {
        return software.amazon.jsii.Kernel.get(this, "attrAddressIpVersion", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute AddressType: The type of IP address that the NLB instance uses to provide services.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAddressType() {
        return software.amazon.jsii.Kernel.get(this, "attrAddressType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute DNSName: The domain name of the NLB instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDnsName() {
        return software.amazon.jsii.Kernel.get(this, "attrDnsName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute LoadBalancerId: The ID of the NLB instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrLoadBalancerId() {
        return software.amazon.jsii.Kernel.get(this, "attrLoadBalancerId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute LoadBalancerType: The type of the NLB instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrLoadBalancerType() {
        return software.amazon.jsii.Kernel.get(this, "attrLoadBalancerType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute VpcId: The ID of the virtual private cloud (VPC) where the NLB instance is deployed.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVpcId() {
        return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ZoneMappings: The zones, vSwitches and addresses which are mapped to the zones.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrZoneMappings() {
        return software.amazon.jsii.Kernel.get(this, "attrZoneMappings", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.nlb.LoadBalancerProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.nlb.LoadBalancerProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.nlb.LoadBalancerProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.nlb.LoadBalancer}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.nlb.LoadBalancer> {
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
        private final com.aliyun.ros.cdk.nlb.LoadBalancerProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.nlb.LoadBalancerProps.Builder();
        }

        /**
         * Property addressType: The type of IP address that the NLB instance uses to provide services.
         * <p>
         * Valid values:
         * Internet: The NLB instance uses a public IP address. The domain name of the NLB instance is resolved to the public IP address. Therefore, the NLB instance can be accessed over the Internet.
         * Intranet: The NLB instance uses a private IP address. The domain name of the NLB instance is resolved to the private IP address. Therefore, the NLB instance can be accessed over the VPC where the NLB instance is deployed.
         * <p>
         * @return {@code this}
         * @param addressType Property addressType: The type of IP address that the NLB instance uses to provide services. This parameter is required.
         */
        public Builder addressType(final java.lang.String addressType) {
            this.props.addressType(addressType);
            return this;
        }
        /**
         * Property addressType: The type of IP address that the NLB instance uses to provide services.
         * <p>
         * Valid values:
         * Internet: The NLB instance uses a public IP address. The domain name of the NLB instance is resolved to the public IP address. Therefore, the NLB instance can be accessed over the Internet.
         * Intranet: The NLB instance uses a private IP address. The domain name of the NLB instance is resolved to the private IP address. Therefore, the NLB instance can be accessed over the VPC where the NLB instance is deployed.
         * <p>
         * @return {@code this}
         * @param addressType Property addressType: The type of IP address that the NLB instance uses to provide services. This parameter is required.
         */
        public Builder addressType(final com.aliyun.ros.cdk.core.IResolvable addressType) {
            this.props.addressType(addressType);
            return this;
        }

        /**
         * Property vpcId: The ID of the virtual private cloud (VPC) where the NLB instance is deployed.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The ID of the virtual private cloud (VPC) where the NLB instance is deployed. This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }
        /**
         * Property vpcId: The ID of the virtual private cloud (VPC) where the NLB instance is deployed.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The ID of the virtual private cloud (VPC) where the NLB instance is deployed. This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * Property zoneMappings: The zones and the vSwitches in the zones.
         * <p>
         * You must specify at least two zones.
         * <p>
         * @return {@code this}
         * @param zoneMappings Property zoneMappings: The zones and the vSwitches in the zones. This parameter is required.
         */
        public Builder zoneMappings(final com.aliyun.ros.cdk.core.IResolvable zoneMappings) {
            this.props.zoneMappings(zoneMappings);
            return this;
        }
        /**
         * Property zoneMappings: The zones and the vSwitches in the zones.
         * <p>
         * You must specify at least two zones.
         * <p>
         * @return {@code this}
         * @param zoneMappings Property zoneMappings: The zones and the vSwitches in the zones. This parameter is required.
         */
        public Builder zoneMappings(final java.util.List<? extends java.lang.Object> zoneMappings) {
            this.props.zoneMappings(zoneMappings);
            return this;
        }

        /**
         * Property addressIpVersion: The version of IP address that the NLB instance uses to provide services.
         * <p>
         * @return {@code this}
         * @param addressIpVersion Property addressIpVersion: The version of IP address that the NLB instance uses to provide services. This parameter is required.
         */
        public Builder addressIpVersion(final java.lang.String addressIpVersion) {
            this.props.addressIpVersion(addressIpVersion);
            return this;
        }
        /**
         * Property addressIpVersion: The version of IP address that the NLB instance uses to provide services.
         * <p>
         * @return {@code this}
         * @param addressIpVersion Property addressIpVersion: The version of IP address that the NLB instance uses to provide services. This parameter is required.
         */
        public Builder addressIpVersion(final com.aliyun.ros.cdk.core.IResolvable addressIpVersion) {
            this.props.addressIpVersion(addressIpVersion);
            return this;
        }

        /**
         * Property bandwidthPackageId: Attach common bandwidth package to load balancer.
         * <p>
         * @return {@code this}
         * @param bandwidthPackageId Property bandwidthPackageId: Attach common bandwidth package to load balancer. This parameter is required.
         */
        public Builder bandwidthPackageId(final java.lang.String bandwidthPackageId) {
            this.props.bandwidthPackageId(bandwidthPackageId);
            return this;
        }
        /**
         * Property bandwidthPackageId: Attach common bandwidth package to load balancer.
         * <p>
         * @return {@code this}
         * @param bandwidthPackageId Property bandwidthPackageId: Attach common bandwidth package to load balancer. This parameter is required.
         */
        public Builder bandwidthPackageId(final com.aliyun.ros.cdk.core.IResolvable bandwidthPackageId) {
            this.props.bandwidthPackageId(bandwidthPackageId);
            return this;
        }

        /**
         * Property crossZoneEnabled: Whether enable cross zone.
         * <p>
         * Default: true
         * <p>
         * @return {@code this}
         * @param crossZoneEnabled Property crossZoneEnabled: Whether enable cross zone. This parameter is required.
         */
        public Builder crossZoneEnabled(final java.lang.Boolean crossZoneEnabled) {
            this.props.crossZoneEnabled(crossZoneEnabled);
            return this;
        }
        /**
         * Property crossZoneEnabled: Whether enable cross zone.
         * <p>
         * Default: true
         * <p>
         * @return {@code this}
         * @param crossZoneEnabled Property crossZoneEnabled: Whether enable cross zone. This parameter is required.
         */
        public Builder crossZoneEnabled(final com.aliyun.ros.cdk.core.IResolvable crossZoneEnabled) {
            this.props.crossZoneEnabled(crossZoneEnabled);
            return this;
        }

        /**
         * Property deletionProtectionConfig: The configuration of the deletion protection feature.
         * <p>
         * @return {@code this}
         * @param deletionProtectionConfig Property deletionProtectionConfig: The configuration of the deletion protection feature. This parameter is required.
         */
        public Builder deletionProtectionConfig(final com.aliyun.ros.cdk.core.IResolvable deletionProtectionConfig) {
            this.props.deletionProtectionConfig(deletionProtectionConfig);
            return this;
        }
        /**
         * Property deletionProtectionConfig: The configuration of the deletion protection feature.
         * <p>
         * @return {@code this}
         * @param deletionProtectionConfig Property deletionProtectionConfig: The configuration of the deletion protection feature. This parameter is required.
         */
        public Builder deletionProtectionConfig(final com.aliyun.ros.cdk.nlb.RosLoadBalancer.DeletionProtectionConfigProperty deletionProtectionConfig) {
            this.props.deletionProtectionConfig(deletionProtectionConfig);
            return this;
        }

        /**
         * Property loadBalancerBillingConfig: The configuration of the billing method.
         * <p>
         * @return {@code this}
         * @param loadBalancerBillingConfig Property loadBalancerBillingConfig: The configuration of the billing method. This parameter is required.
         */
        public Builder loadBalancerBillingConfig(final com.aliyun.ros.cdk.core.IResolvable loadBalancerBillingConfig) {
            this.props.loadBalancerBillingConfig(loadBalancerBillingConfig);
            return this;
        }
        /**
         * Property loadBalancerBillingConfig: The configuration of the billing method.
         * <p>
         * @return {@code this}
         * @param loadBalancerBillingConfig Property loadBalancerBillingConfig: The configuration of the billing method. This parameter is required.
         */
        public Builder loadBalancerBillingConfig(final com.aliyun.ros.cdk.nlb.RosLoadBalancer.LoadBalancerBillingConfigProperty loadBalancerBillingConfig) {
            this.props.loadBalancerBillingConfig(loadBalancerBillingConfig);
            return this;
        }

        /**
         * Property loadBalancerName: The name of the NLB instance.
         * <p>
         * The name must be 2 to 128 characters in length, and can contain letters, digits, periods(.), underscores (_), and hyphens (-). The name must start with a letter.
         * <p>
         * @return {@code this}
         * @param loadBalancerName Property loadBalancerName: The name of the NLB instance. This parameter is required.
         */
        public Builder loadBalancerName(final java.lang.String loadBalancerName) {
            this.props.loadBalancerName(loadBalancerName);
            return this;
        }
        /**
         * Property loadBalancerName: The name of the NLB instance.
         * <p>
         * The name must be 2 to 128 characters in length, and can contain letters, digits, periods(.), underscores (_), and hyphens (-). The name must start with a letter.
         * <p>
         * @return {@code this}
         * @param loadBalancerName Property loadBalancerName: The name of the NLB instance. This parameter is required.
         */
        public Builder loadBalancerName(final com.aliyun.ros.cdk.core.IResolvable loadBalancerName) {
            this.props.loadBalancerName(loadBalancerName);
            return this;
        }

        /**
         * Property loadBalancerType: The type of the NLB instance.
         * <p>
         * @return {@code this}
         * @param loadBalancerType Property loadBalancerType: The type of the NLB instance. This parameter is required.
         */
        public Builder loadBalancerType(final java.lang.String loadBalancerType) {
            this.props.loadBalancerType(loadBalancerType);
            return this;
        }
        /**
         * Property loadBalancerType: The type of the NLB instance.
         * <p>
         * @return {@code this}
         * @param loadBalancerType Property loadBalancerType: The type of the NLB instance. This parameter is required.
         */
        public Builder loadBalancerType(final com.aliyun.ros.cdk.core.IResolvable loadBalancerType) {
            this.props.loadBalancerType(loadBalancerType);
            return this;
        }

        /**
         * Property modificationProtectionConfig: The configuration of the configuration read-only mode.
         * <p>
         * @return {@code this}
         * @param modificationProtectionConfig Property modificationProtectionConfig: The configuration of the configuration read-only mode. This parameter is required.
         */
        public Builder modificationProtectionConfig(final com.aliyun.ros.cdk.core.IResolvable modificationProtectionConfig) {
            this.props.modificationProtectionConfig(modificationProtectionConfig);
            return this;
        }
        /**
         * Property modificationProtectionConfig: The configuration of the configuration read-only mode.
         * <p>
         * @return {@code this}
         * @param modificationProtectionConfig Property modificationProtectionConfig: The configuration of the configuration read-only mode. This parameter is required.
         */
        public Builder modificationProtectionConfig(final com.aliyun.ros.cdk.nlb.RosLoadBalancer.ModificationProtectionConfigProperty modificationProtectionConfig) {
            this.props.modificationProtectionConfig(modificationProtectionConfig);
            return this;
        }

        /**
         * Property resourceGroupId: The ID of the resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The ID of the resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
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
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.nlb.RosLoadBalancer.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * Property trafficAffinityEnabled: Whether enable traffic affinity.
         * <p>
         * Default: false
         * <p>
         * @return {@code this}
         * @param trafficAffinityEnabled Property trafficAffinityEnabled: Whether enable traffic affinity. This parameter is required.
         */
        public Builder trafficAffinityEnabled(final java.lang.Boolean trafficAffinityEnabled) {
            this.props.trafficAffinityEnabled(trafficAffinityEnabled);
            return this;
        }
        /**
         * Property trafficAffinityEnabled: Whether enable traffic affinity.
         * <p>
         * Default: false
         * <p>
         * @return {@code this}
         * @param trafficAffinityEnabled Property trafficAffinityEnabled: Whether enable traffic affinity. This parameter is required.
         */
        public Builder trafficAffinityEnabled(final com.aliyun.ros.cdk.core.IResolvable trafficAffinityEnabled) {
            this.props.trafficAffinityEnabled(trafficAffinityEnabled);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.nlb.LoadBalancer}.
         */
        @Override
        public com.aliyun.ros.cdk.nlb.LoadBalancer build() {
            return new com.aliyun.ros.cdk.nlb.LoadBalancer(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
