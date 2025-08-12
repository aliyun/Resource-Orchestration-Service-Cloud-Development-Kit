package com.aliyun.ros.cdk.nlb.datasource;

/**
 * This class encapsulates and extends the ROS resource type <code>DATASOURCE::NLB::LoadBalancer</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:48.881Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.nlb.$Module.class, fqn = "@alicloud/ros-cdk-nlb.datasource.LoadBalancer")
public class LoadBalancer extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.nlb.datasource.ILoadBalancer {

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
     * @param props
     * @param enableResourcePropertyConstraint
     */
    public LoadBalancer(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.nlb.datasource.LoadBalancerProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public LoadBalancer(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.nlb.datasource.LoadBalancerProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public LoadBalancer(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute AddressIpVersion: The protocol version.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAddressIpVersion() {
        return software.amazon.jsii.Kernel.get(this, "attrAddressIpVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute AddressType: The IPv4 network type of the NLB instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAddressType() {
        return software.amazon.jsii.Kernel.get(this, "attrAddressType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute BandwidthPackageId: The ID of the EIP bandwidth plan.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrBandwidthPackageId() {
        return software.amazon.jsii.Kernel.get(this, "attrBandwidthPackageId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Cps: The maximum number of new connections per second supported by the NLB instance in each zone (virtual IP address).
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCps() {
        return software.amazon.jsii.Kernel.get(this, "attrCps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CreateTime: The time when the NLB instance was created.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CrossZoneEnabled: Indicates whether the NLB instance is accessible across zones.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCrossZoneEnabled() {
        return software.amazon.jsii.Kernel.get(this, "attrCrossZoneEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DeletionProtectionConfig: The configuration of the deletion protection feature.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeletionProtectionConfig() {
        return software.amazon.jsii.Kernel.get(this, "attrDeletionProtectionConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DNSName: The domain name of the NLB instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDnsName() {
        return software.amazon.jsii.Kernel.get(this, "attrDnsName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Ipv6AddressType: The IPv6 network type of the NLB instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpv6AddressType() {
        return software.amazon.jsii.Kernel.get(this, "attrIpv6AddressType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute LoadBalancerBillingConfig: The billing information of the NLB instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoadBalancerBillingConfig() {
        return software.amazon.jsii.Kernel.get(this, "attrLoadBalancerBillingConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute LoadBalancerBusinessStatus: The status of workloads on the NLB instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoadBalancerBusinessStatus() {
        return software.amazon.jsii.Kernel.get(this, "attrLoadBalancerBusinessStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute LoadBalancerId: ID of the LoadBalancer.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoadBalancerId() {
        return software.amazon.jsii.Kernel.get(this, "attrLoadBalancerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute LoadBalancerName: The NLB instance name.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoadBalancerName() {
        return software.amazon.jsii.Kernel.get(this, "attrLoadBalancerName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute LoadBalancerStatus: The NLB instance status.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoadBalancerStatus() {
        return software.amazon.jsii.Kernel.get(this, "attrLoadBalancerStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute LoadBalancerType: The type of the Server Load Balancer (SLB) instance.
     * <p>
     * Set the value to network, which specifies NLB.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoadBalancerType() {
        return software.amazon.jsii.Kernel.get(this, "attrLoadBalancerType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ModificationProtectionConfig: The configuration of the configuration read-only mode.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrModificationProtectionConfig() {
        return software.amazon.jsii.Kernel.get(this, "attrModificationProtectionConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute OperationLocks: The information about the locked NLB instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrOperationLocks() {
        return software.amazon.jsii.Kernel.get(this, "attrOperationLocks", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute RegionId: The region ID of the NLB instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRegionId() {
        return software.amazon.jsii.Kernel.get(this, "attrRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SecurityGroupIds: The ID of the security group associated with the NLB instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityGroupIds() {
        return software.amazon.jsii.Kernel.get(this, "attrSecurityGroupIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Tags: The tags of the resource.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
        return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute VpcId: The VPC ID of the NLB instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId() {
        return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ZoneMappings: The list of zones and vSwitches in the zones.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneMappings() {
        return software.amazon.jsii.Kernel.get(this, "attrZoneMappings", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.nlb.datasource.LoadBalancerProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.nlb.datasource.LoadBalancerProps.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.nlb.datasource.LoadBalancer}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.nlb.datasource.LoadBalancer> {
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
        private com.aliyun.ros.cdk.nlb.datasource.LoadBalancerProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property loadBalancerId: ID of the LoadBalancer.
         * <p>
         * @return {@code this}
         * @param loadBalancerId Property loadBalancerId: ID of the LoadBalancer. This parameter is required.
         */
        public Builder loadBalancerId(final java.lang.String loadBalancerId) {
            this.props().loadBalancerId(loadBalancerId);
            return this;
        }
        /**
         * Property loadBalancerId: ID of the LoadBalancer.
         * <p>
         * @return {@code this}
         * @param loadBalancerId Property loadBalancerId: ID of the LoadBalancer. This parameter is required.
         */
        public Builder loadBalancerId(final com.aliyun.ros.cdk.core.IResolvable loadBalancerId) {
            this.props().loadBalancerId(loadBalancerId);
            return this;
        }

        /**
         * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         * <li>Always: Always refresh the datasource resource when the stack is updated.
         * Default is Never.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. This parameter is required.
         */
        public Builder refreshOptions(final java.lang.String refreshOptions) {
            this.props().refreshOptions(refreshOptions);
            return this;
        }
        /**
         * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         * <li>Always: Always refresh the datasource resource when the stack is updated.
         * Default is Never.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. This parameter is required.
         */
        public Builder refreshOptions(final com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.props().refreshOptions(refreshOptions);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.nlb.datasource.LoadBalancer}.
         */
        @Override
        public com.aliyun.ros.cdk.nlb.datasource.LoadBalancer build() {
            return new com.aliyun.ros.cdk.nlb.datasource.LoadBalancer(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.nlb.datasource.LoadBalancerProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.nlb.datasource.LoadBalancerProps.Builder();
            }
            return this.props;
        }
    }
}
