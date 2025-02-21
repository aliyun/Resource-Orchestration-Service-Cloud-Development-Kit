package com.aliyun.ros.cdk.slb.datasource;

/**
 * This class encapsulates and extends the ROS resource type <code>DATASOURCE::SLB::LoadBalancers</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:20.884Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.slb.$Module.class, fqn = "@alicloud/ros-cdk-slb.datasource.LoadBalancers")
public class LoadBalancers extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.slb.datasource.ILoadBalancers {

    protected LoadBalancers(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected LoadBalancers(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public LoadBalancers(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.slb.datasource.LoadBalancersProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public LoadBalancers(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.slb.datasource.LoadBalancersProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public LoadBalancers(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute LoadBalancerIds: The list of load balancer IDs.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoadBalancerIds() {
        return software.amazon.jsii.Kernel.get(this, "attrLoadBalancerIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute LoadBalancers: The list of load balancers.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoadBalancers() {
        return software.amazon.jsii.Kernel.get(this, "attrLoadBalancers", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.slb.datasource.LoadBalancersProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.slb.datasource.LoadBalancersProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.slb.datasource.LoadBalancers}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.slb.datasource.LoadBalancers> {
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
        private com.aliyun.ros.cdk.slb.datasource.LoadBalancersProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property address: The service address of the load balancing instance.
         * <p>
         * @return {@code this}
         * @param address Property address: The service address of the load balancing instance. This parameter is required.
         */
        public Builder address(final java.lang.String address) {
            this.props().address(address);
            return this;
        }
        /**
         * Property address: The service address of the load balancing instance.
         * <p>
         * @return {@code this}
         * @param address Property address: The service address of the load balancing instance. This parameter is required.
         */
        public Builder address(final com.aliyun.ros.cdk.core.IResolvable address) {
            this.props().address(address);
            return this;
        }

        /**
         * Property addressIpVersion: IP version.
         * <p>
         * @return {@code this}
         * @param addressIpVersion Property addressIpVersion: IP version. This parameter is required.
         */
        public Builder addressIpVersion(final java.lang.String addressIpVersion) {
            this.props().addressIpVersion(addressIpVersion);
            return this;
        }
        /**
         * Property addressIpVersion: IP version.
         * <p>
         * @return {@code this}
         * @param addressIpVersion Property addressIpVersion: IP version. This parameter is required.
         */
        public Builder addressIpVersion(final com.aliyun.ros.cdk.core.IResolvable addressIpVersion) {
            this.props().addressIpVersion(addressIpVersion);
            return this;
        }

        /**
         * Property addressType: The address type of the load balancing instance.
         * <p>
         * @return {@code this}
         * @param addressType Property addressType: The address type of the load balancing instance. This parameter is required.
         */
        public Builder addressType(final java.lang.String addressType) {
            this.props().addressType(addressType);
            return this;
        }
        /**
         * Property addressType: The address type of the load balancing instance.
         * <p>
         * @return {@code this}
         * @param addressType Property addressType: The address type of the load balancing instance. This parameter is required.
         */
        public Builder addressType(final com.aliyun.ros.cdk.core.IResolvable addressType) {
            this.props().addressType(addressType);
            return this;
        }

        /**
         * Property internetChargeType: Public network type instance payment method.
         * <p>
         * @return {@code this}
         * @param internetChargeType Property internetChargeType: Public network type instance payment method. This parameter is required.
         */
        public Builder internetChargeType(final java.lang.String internetChargeType) {
            this.props().internetChargeType(internetChargeType);
            return this;
        }
        /**
         * Property internetChargeType: Public network type instance payment method.
         * <p>
         * @return {@code this}
         * @param internetChargeType Property internetChargeType: Public network type instance payment method. This parameter is required.
         */
        public Builder internetChargeType(final com.aliyun.ros.cdk.core.IResolvable internetChargeType) {
            this.props().internetChargeType(internetChargeType);
            return this;
        }

        /**
         * Property loadBalancerId: ID of the load balancing instance.
         * <p>
         * @return {@code this}
         * @param loadBalancerId Property loadBalancerId: ID of the load balancing instance. This parameter is required.
         */
        public Builder loadBalancerId(final java.lang.String loadBalancerId) {
            this.props().loadBalancerId(loadBalancerId);
            return this;
        }
        /**
         * Property loadBalancerId: ID of the load balancing instance.
         * <p>
         * @return {@code this}
         * @param loadBalancerId Property loadBalancerId: ID of the load balancing instance. This parameter is required.
         */
        public Builder loadBalancerId(final com.aliyun.ros.cdk.core.IResolvable loadBalancerId) {
            this.props().loadBalancerId(loadBalancerId);
            return this;
        }

        /**
         * Property loadBalancerName: Name of the load balancing instance.
         * <p>
         * @return {@code this}
         * @param loadBalancerName Property loadBalancerName: Name of the load balancing instance. This parameter is required.
         */
        public Builder loadBalancerName(final java.lang.String loadBalancerName) {
            this.props().loadBalancerName(loadBalancerName);
            return this;
        }
        /**
         * Property loadBalancerName: Name of the load balancing instance.
         * <p>
         * @return {@code this}
         * @param loadBalancerName Property loadBalancerName: Name of the load balancing instance. This parameter is required.
         */
        public Builder loadBalancerName(final com.aliyun.ros.cdk.core.IResolvable loadBalancerName) {
            this.props().loadBalancerName(loadBalancerName);
            return this;
        }

        /**
         * Property masterZoneId: ID of the primary available area of the load balancing instance.
         * <p>
         * @return {@code this}
         * @param masterZoneId Property masterZoneId: ID of the primary available area of the load balancing instance. This parameter is required.
         */
        public Builder masterZoneId(final java.lang.String masterZoneId) {
            this.props().masterZoneId(masterZoneId);
            return this;
        }
        /**
         * Property masterZoneId: ID of the primary available area of the load balancing instance.
         * <p>
         * @return {@code this}
         * @param masterZoneId Property masterZoneId: ID of the primary available area of the load balancing instance. This parameter is required.
         */
        public Builder masterZoneId(final com.aliyun.ros.cdk.core.IResolvable masterZoneId) {
            this.props().masterZoneId(masterZoneId);
            return this;
        }

        /**
         * Property networkType: The network type of the private network load balancing instance.
         * <p>
         * @return {@code this}
         * @param networkType Property networkType: The network type of the private network load balancing instance. This parameter is required.
         */
        public Builder networkType(final java.lang.String networkType) {
            this.props().networkType(networkType);
            return this;
        }
        /**
         * Property networkType: The network type of the private network load balancing instance.
         * <p>
         * @return {@code this}
         * @param networkType Property networkType: The network type of the private network load balancing instance. This parameter is required.
         */
        public Builder networkType(final com.aliyun.ros.cdk.core.IResolvable networkType) {
            this.props().networkType(networkType);
            return this;
        }

        /**
         * Property paymentType: Load balancing instance payment type.
         * <p>
         * @return {@code this}
         * @param paymentType Property paymentType: Load balancing instance payment type. This parameter is required.
         */
        public Builder paymentType(final java.lang.String paymentType) {
            this.props().paymentType(paymentType);
            return this;
        }
        /**
         * Property paymentType: Load balancing instance payment type.
         * <p>
         * @return {@code this}
         * @param paymentType Property paymentType: Load balancing instance payment type. This parameter is required.
         */
        public Builder paymentType(final com.aliyun.ros.cdk.core.IResolvable paymentType) {
            this.props().paymentType(paymentType);
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
         * Property resourceGroupId: Resource group id.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: Resource group id. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props().resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: Resource group id.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: Resource group id. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props().resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property slaveZoneId: ID of the ready-to-use zone of the load balancing instance.
         * <p>
         * @return {@code this}
         * @param slaveZoneId Property slaveZoneId: ID of the ready-to-use zone of the load balancing instance. This parameter is required.
         */
        public Builder slaveZoneId(final java.lang.String slaveZoneId) {
            this.props().slaveZoneId(slaveZoneId);
            return this;
        }
        /**
         * Property slaveZoneId: ID of the ready-to-use zone of the load balancing instance.
         * <p>
         * @return {@code this}
         * @param slaveZoneId Property slaveZoneId: ID of the ready-to-use zone of the load balancing instance. This parameter is required.
         */
        public Builder slaveZoneId(final com.aliyun.ros.cdk.core.IResolvable slaveZoneId) {
            this.props().slaveZoneId(slaveZoneId);
            return this;
        }

        /**
         * Property status: The status of SLB.
         * <p>
         * @return {@code this}
         * @param status Property status: The status of SLB. This parameter is required.
         */
        public Builder status(final java.lang.String status) {
            this.props().status(status);
            return this;
        }
        /**
         * Property status: The status of SLB.
         * <p>
         * @return {@code this}
         * @param status Property status: The status of SLB. This parameter is required.
         */
        public Builder status(final com.aliyun.ros.cdk.core.IResolvable status) {
            this.props().status(status);
            return this;
        }

        /**
         * Property vpcId: VPC ID.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: VPC ID. This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props().vpcId(vpcId);
            return this;
        }
        /**
         * Property vpcId: VPC ID.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: VPC ID. This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props().vpcId(vpcId);
            return this;
        }

        /**
         * Property vSwitchId: The ID of the switch.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The ID of the switch. This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props().vSwitchId(vSwitchId);
            return this;
        }
        /**
         * Property vSwitchId: The ID of the switch.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The ID of the switch. This parameter is required.
         */
        public Builder vSwitchId(final com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.props().vSwitchId(vSwitchId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.slb.datasource.LoadBalancers}.
         */
        @Override
        public com.aliyun.ros.cdk.slb.datasource.LoadBalancers build() {
            return new com.aliyun.ros.cdk.slb.datasource.LoadBalancers(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.slb.datasource.LoadBalancersProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.slb.datasource.LoadBalancersProps.Builder();
            }
            return this.props;
        }
    }
}
