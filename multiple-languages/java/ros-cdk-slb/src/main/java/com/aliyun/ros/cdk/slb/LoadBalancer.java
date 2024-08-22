package com.aliyun.ros.cdk.slb;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::SLB::LoadBalancer</code>, which is used to create a Server Load Balancer (SLB) instance.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-22T08:56:24.172Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.slb.$Module.class, fqn = "@alicloud/ros-cdk-slb.LoadBalancer")
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
     * @param props
     * @param enableResourcePropertyConstraint
     */
    public LoadBalancer(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.slb.LoadBalancerProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public LoadBalancer(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.slb.LoadBalancerProps props) {
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
     * Attribute AddressIPVersion: IP version.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAddressIpVersion() {
        return software.amazon.jsii.Kernel.get(this, "attrAddressIpVersion", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute AddressType: The address type of the load balancer.
     * <p>
     * "intranet" or "internet".
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAddressType() {
        return software.amazon.jsii.Kernel.get(this, "attrAddressType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Bandwidth: The bandwidth for network.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrBandwidth() {
        return software.amazon.jsii.Kernel.get(this, "attrBandwidth", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute IpAddress: The ip address of the load balancer.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrIpAddress() {
        return software.amazon.jsii.Kernel.get(this, "attrIpAddress", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute LoadBalancerId: The id of load balance created.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrLoadBalancerId() {
        return software.amazon.jsii.Kernel.get(this, "attrLoadBalancerId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute LoadBalancerName: Name of created load balancer.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrLoadBalancerName() {
        return software.amazon.jsii.Kernel.get(this, "attrLoadBalancerName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute LoadBalancerSpec: The specification of the Server Load Balancer instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrLoadBalancerSpec() {
        return software.amazon.jsii.Kernel.get(this, "attrLoadBalancerSpec", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute MasterZoneId: The master zone id to create load balancer instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrMasterZoneId() {
        return software.amazon.jsii.Kernel.get(this, "attrMasterZoneId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute NetworkType: The network type of the load balancer.
     * <p>
     * "vpc" or "classic" network.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrNetworkType() {
        return software.amazon.jsii.Kernel.get(this, "attrNetworkType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute OrderId: The order ID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrOrderId() {
        return software.amazon.jsii.Kernel.get(this, "attrOrderId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute PayType: The billing method of the instance to be created.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPayType() {
        return software.amazon.jsii.Kernel.get(this, "attrPayType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ResourceGroupId: Resource group id.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrResourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute SlaveZoneId: The slave zone id to create load balancer instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSlaveZoneId() {
        return software.amazon.jsii.Kernel.get(this, "attrSlaveZoneId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute VpcId: Vpc id.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVpcId() {
        return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute VSwitchId: VSwitch id.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVSwitchId() {
        return software.amazon.jsii.Kernel.get(this, "attrVSwitchId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.slb.LoadBalancerProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.slb.LoadBalancerProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.slb.LoadBalancerProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.slb.LoadBalancer}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.slb.LoadBalancer> {
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
        private com.aliyun.ros.cdk.slb.LoadBalancerProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property addressIpVersion: IP version, support 'ipv4' or 'ipv6'.
         * <p>
         * If 'ipv6' is selected, please note that the zone and the specification are supported.
         * <p>
         * @return {@code this}
         * @param addressIpVersion Property addressIpVersion: IP version, support 'ipv4' or 'ipv6'. This parameter is required.
         */
        public Builder addressIpVersion(final java.lang.String addressIpVersion) {
            this.props().addressIpVersion(addressIpVersion);
            return this;
        }
        /**
         * Property addressIpVersion: IP version, support 'ipv4' or 'ipv6'.
         * <p>
         * If 'ipv6' is selected, please note that the zone and the specification are supported.
         * <p>
         * @return {@code this}
         * @param addressIpVersion Property addressIpVersion: IP version, support 'ipv4' or 'ipv6'. This parameter is required.
         */
        public Builder addressIpVersion(final com.aliyun.ros.cdk.core.IResolvable addressIpVersion) {
            this.props().addressIpVersion(addressIpVersion);
            return this;
        }

        /**
         * Property addressType: The network type of the CLB instance.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>internet</strong> (default): After an internet-facing CLB instance is created, the system assigns a public IP address to the CLB instance. Then, the CLB instance can forward requests over the Internet.</li>
         * <li><strong>intranet</strong>: After an internal-facing CLB instance is created, the system assigns a private IP address to the CLB instance. Then, the CLB instance can forward requests only over the internal networks.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param addressType Property addressType: The network type of the CLB instance. This parameter is required.
         */
        public Builder addressType(final java.lang.String addressType) {
            this.props().addressType(addressType);
            return this;
        }
        /**
         * Property addressType: The network type of the CLB instance.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>internet</strong> (default): After an internet-facing CLB instance is created, the system assigns a public IP address to the CLB instance. Then, the CLB instance can forward requests over the Internet.</li>
         * <li><strong>intranet</strong>: After an internal-facing CLB instance is created, the system assigns a private IP address to the CLB instance. Then, the CLB instance can forward requests only over the internal networks.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param addressType Property addressType: The network type of the CLB instance. This parameter is required.
         */
        public Builder addressType(final com.aliyun.ros.cdk.core.IResolvable addressType) {
            this.props().addressType(addressType);
            return this;
        }

        /**
         * Property autoPay: Specifies whether to automatically pay for the subscription Internet-facing CLB instance.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>true</strong>: automatically pays for the CLB instance. After you call this operation, the system automatically completes the payment and creates the CLB instance.- <strong>false</strong> (default): After you call the operation, the order is created but the payment is not completed. You can view the pending order in the console. The CLB instance will not be created until you complete the payment.<strong>Note</strong> This parameter is supported only by subscription instances created on the Alibaba Cloud China site.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param autoPay Property autoPay: Specifies whether to automatically pay for the subscription Internet-facing CLB instance. This parameter is required.
         */
        public Builder autoPay(final java.lang.Boolean autoPay) {
            this.props().autoPay(autoPay);
            return this;
        }
        /**
         * Property autoPay: Specifies whether to automatically pay for the subscription Internet-facing CLB instance.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>true</strong>: automatically pays for the CLB instance. After you call this operation, the system automatically completes the payment and creates the CLB instance.- <strong>false</strong> (default): After you call the operation, the order is created but the payment is not completed. You can view the pending order in the console. The CLB instance will not be created until you complete the payment.<strong>Note</strong> This parameter is supported only by subscription instances created on the Alibaba Cloud China site.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param autoPay Property autoPay: Specifies whether to automatically pay for the subscription Internet-facing CLB instance. This parameter is required.
         */
        public Builder autoPay(final com.aliyun.ros.cdk.core.IResolvable autoPay) {
            this.props().autoPay(autoPay);
            return this;
        }

        /**
         * Property autoRenew: Indicates whether automatic renewal is enabled for the instance.
         * <p>
         * Valid values:- <strong>true</strong>: Automatic renewal is enabled.- <strong>false</strong> (default): Automatic renewal is not enabled. You must renew the instance manually.
         * <p>
         * @return {@code this}
         * @param autoRenew Property autoRenew: Indicates whether automatic renewal is enabled for the instance. This parameter is required.
         */
        public Builder autoRenew(final java.lang.Boolean autoRenew) {
            this.props().autoRenew(autoRenew);
            return this;
        }
        /**
         * Property autoRenew: Indicates whether automatic renewal is enabled for the instance.
         * <p>
         * Valid values:- <strong>true</strong>: Automatic renewal is enabled.- <strong>false</strong> (default): Automatic renewal is not enabled. You must renew the instance manually.
         * <p>
         * @return {@code this}
         * @param autoRenew Property autoRenew: Indicates whether automatic renewal is enabled for the instance. This parameter is required.
         */
        public Builder autoRenew(final com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.props().autoRenew(autoRenew);
            return this;
        }

        /**
         * Property autoRenewPeriod: Automatic renewal cycle, which takes effect when AutoRenew is true, and is required: When PricingCycle = month, the value range is 1 to 9 or 12, 24, 36.
         * <p>
         * When PeriodUnit = year, the value range is 1-3.
         * <p>
         * @return {@code this}
         * @param autoRenewPeriod Property autoRenewPeriod: Automatic renewal cycle, which takes effect when AutoRenew is true, and is required: When PricingCycle = month, the value range is 1 to 9 or 12, 24, 36. This parameter is required.
         */
        public Builder autoRenewPeriod(final java.lang.Number autoRenewPeriod) {
            this.props().autoRenewPeriod(autoRenewPeriod);
            return this;
        }
        /**
         * Property autoRenewPeriod: Automatic renewal cycle, which takes effect when AutoRenew is true, and is required: When PricingCycle = month, the value range is 1 to 9 or 12, 24, 36.
         * <p>
         * When PeriodUnit = year, the value range is 1-3.
         * <p>
         * @return {@code this}
         * @param autoRenewPeriod Property autoRenewPeriod: Automatic renewal cycle, which takes effect when AutoRenew is true, and is required: When PricingCycle = month, the value range is 1 to 9 or 12, 24, 36. This parameter is required.
         */
        public Builder autoRenewPeriod(final com.aliyun.ros.cdk.core.IResolvable autoRenewPeriod) {
            this.props().autoRenewPeriod(autoRenewPeriod);
            return this;
        }

        /**
         * Property bandwidth: The bandwidth for network, unit in Mbps(Mega bit per second).
         * <p>
         * Default is 1. If InternetChargeType is specified as "paybytraffic", this property will be ignore and please specify the "Bandwidth" in ALIYUN::SLB::Listener.
         * <p>
         * @return {@code this}
         * @param bandwidth Property bandwidth: The bandwidth for network, unit in Mbps(Mega bit per second). This parameter is required.
         */
        public Builder bandwidth(final java.lang.Number bandwidth) {
            this.props().bandwidth(bandwidth);
            return this;
        }
        /**
         * Property bandwidth: The bandwidth for network, unit in Mbps(Mega bit per second).
         * <p>
         * Default is 1. If InternetChargeType is specified as "paybytraffic", this property will be ignore and please specify the "Bandwidth" in ALIYUN::SLB::Listener.
         * <p>
         * @return {@code this}
         * @param bandwidth Property bandwidth: The bandwidth for network, unit in Mbps(Mega bit per second). This parameter is required.
         */
        public Builder bandwidth(final com.aliyun.ros.cdk.core.IResolvable bandwidth) {
            this.props().bandwidth(bandwidth);
            return this;
        }

        /**
         * Property deletionProtection: Whether to enable deletion protection.
         * <p>
         * @return {@code this}
         * @param deletionProtection Property deletionProtection: Whether to enable deletion protection. This parameter is required.
         */
        public Builder deletionProtection(final java.lang.Boolean deletionProtection) {
            this.props().deletionProtection(deletionProtection);
            return this;
        }
        /**
         * Property deletionProtection: Whether to enable deletion protection.
         * <p>
         * @return {@code this}
         * @param deletionProtection Property deletionProtection: Whether to enable deletion protection. This parameter is required.
         */
        public Builder deletionProtection(final com.aliyun.ros.cdk.core.IResolvable deletionProtection) {
            this.props().deletionProtection(deletionProtection);
            return this;
        }

        /**
         * Property duration: Optional.
         * <p>
         * The subscription duration of a Subscription Internet instance.
         * Valid values:
         * If PricingCycle is month, the valid range is 1 to 9 or 12, 24, 36, 48, 60.
         * If PricingCycle is year, the value range is 1 to 5.
         * <p>
         * @return {@code this}
         * @param duration Property duration: Optional. This parameter is required.
         */
        public Builder duration(final java.lang.Number duration) {
            this.props().duration(duration);
            return this;
        }
        /**
         * Property duration: Optional.
         * <p>
         * The subscription duration of a Subscription Internet instance.
         * Valid values:
         * If PricingCycle is month, the valid range is 1 to 9 or 12, 24, 36, 48, 60.
         * If PricingCycle is year, the value range is 1 to 5.
         * <p>
         * @return {@code this}
         * @param duration Property duration: Optional. This parameter is required.
         */
        public Builder duration(final com.aliyun.ros.cdk.core.IResolvable duration) {
            this.props().duration(duration);
            return this;
        }

        /**
         * Property instanceChargeType: Instance billing method.
         * <p>
         * Valid value:
         * <p>
         * <ul>
         * <li><strong>PayBySpec</strong> (default): Pay by spec.</li>
         * <li><strong>PayByCLCU</strong>: billed by usage.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param instanceChargeType Property instanceChargeType: Instance billing method. This parameter is required.
         */
        public Builder instanceChargeType(final java.lang.String instanceChargeType) {
            this.props().instanceChargeType(instanceChargeType);
            return this;
        }
        /**
         * Property instanceChargeType: Instance billing method.
         * <p>
         * Valid value:
         * <p>
         * <ul>
         * <li><strong>PayBySpec</strong> (default): Pay by spec.</li>
         * <li><strong>PayByCLCU</strong>: billed by usage.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param instanceChargeType Property instanceChargeType: Instance billing method. This parameter is required.
         */
        public Builder instanceChargeType(final com.aliyun.ros.cdk.core.IResolvable instanceChargeType) {
            this.props().instanceChargeType(instanceChargeType);
            return this;
        }

        /**
         * Property internetChargeType: The metering method of the Internet-facing CLB instance.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>paybytraffic</strong> (default): If you set the value to paybytraffic, you do not need to specify Bandwidth. Even if you specify Bandwidth, the value does not take effect.</li>
         * <li><strong>paybybandwidth</strong>: pay-by-bandwidth.
         * <strong>Note</strong> If you set PayType to PayOnDemand and set InstanceChargeType to PayByCLCU, you must set InternetChargeType to paybytraffic.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param internetChargeType Property internetChargeType: The metering method of the Internet-facing CLB instance. This parameter is required.
         */
        public Builder internetChargeType(final java.lang.String internetChargeType) {
            this.props().internetChargeType(internetChargeType);
            return this;
        }
        /**
         * Property internetChargeType: The metering method of the Internet-facing CLB instance.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>paybytraffic</strong> (default): If you set the value to paybytraffic, you do not need to specify Bandwidth. Even if you specify Bandwidth, the value does not take effect.</li>
         * <li><strong>paybybandwidth</strong>: pay-by-bandwidth.
         * <strong>Note</strong> If you set PayType to PayOnDemand and set InstanceChargeType to PayByCLCU, you must set InternetChargeType to paybytraffic.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param internetChargeType Property internetChargeType: The metering method of the Internet-facing CLB instance. This parameter is required.
         */
        public Builder internetChargeType(final com.aliyun.ros.cdk.core.IResolvable internetChargeType) {
            this.props().internetChargeType(internetChargeType);
            return this;
        }

        /**
         * Property loadBalancerName: Name of created load balancer.
         * <p>
         * Length is limited to 1-80 characters, allowed to contain letters, numbers, '-, /, _,.' When not specified, a default name will be assigned.
         * <p>
         * @return {@code this}
         * @param loadBalancerName Property loadBalancerName: Name of created load balancer. This parameter is required.
         */
        public Builder loadBalancerName(final java.lang.String loadBalancerName) {
            this.props().loadBalancerName(loadBalancerName);
            return this;
        }
        /**
         * Property loadBalancerName: Name of created load balancer.
         * <p>
         * Length is limited to 1-80 characters, allowed to contain letters, numbers, '-, /, _,.' When not specified, a default name will be assigned.
         * <p>
         * @return {@code this}
         * @param loadBalancerName Property loadBalancerName: Name of created load balancer. This parameter is required.
         */
        public Builder loadBalancerName(final com.aliyun.ros.cdk.core.IResolvable loadBalancerName) {
            this.props().loadBalancerName(loadBalancerName);
            return this;
        }

        /**
         * Property loadBalancerSpec: The specification of the CLB instance.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>slb.s1.small</strong></li>
         * <li><strong>slb.s2.small</strong></li>
         * <li><strong>slb.s2.medium</strong></li>
         * <li><strong>slb.s3.small</strong></li>
         * <li><strong>slb.s3.medium</strong></li>
         * <li><strong>slb.s3.large</strong>
         * <strong>Note</strong> If you do not specify this parameter, a shared-resource CLB instance is created. Shared-resource CLB instances are no longer available for purchase. Therefore, you must specify this parameter.
         * If InstanceChargeType is set to PayByCLCU, this parameter is invalid and you do not need to specify this parameter.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param loadBalancerSpec Property loadBalancerSpec: The specification of the CLB instance. This parameter is required.
         */
        public Builder loadBalancerSpec(final java.lang.String loadBalancerSpec) {
            this.props().loadBalancerSpec(loadBalancerSpec);
            return this;
        }
        /**
         * Property loadBalancerSpec: The specification of the CLB instance.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>slb.s1.small</strong></li>
         * <li><strong>slb.s2.small</strong></li>
         * <li><strong>slb.s2.medium</strong></li>
         * <li><strong>slb.s3.small</strong></li>
         * <li><strong>slb.s3.medium</strong></li>
         * <li><strong>slb.s3.large</strong>
         * <strong>Note</strong> If you do not specify this parameter, a shared-resource CLB instance is created. Shared-resource CLB instances are no longer available for purchase. Therefore, you must specify this parameter.
         * If InstanceChargeType is set to PayByCLCU, this parameter is invalid and you do not need to specify this parameter.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param loadBalancerSpec Property loadBalancerSpec: The specification of the CLB instance. This parameter is required.
         */
        public Builder loadBalancerSpec(final com.aliyun.ros.cdk.core.IResolvable loadBalancerSpec) {
            this.props().loadBalancerSpec(loadBalancerSpec);
            return this;
        }

        /**
         * Property masterZoneId: The master zone id to create load balancer instance.
         * <p>
         * @return {@code this}
         * @param masterZoneId Property masterZoneId: The master zone id to create load balancer instance. This parameter is required.
         */
        public Builder masterZoneId(final java.lang.String masterZoneId) {
            this.props().masterZoneId(masterZoneId);
            return this;
        }
        /**
         * Property masterZoneId: The master zone id to create load balancer instance.
         * <p>
         * @return {@code this}
         * @param masterZoneId Property masterZoneId: The master zone id to create load balancer instance. This parameter is required.
         */
        public Builder masterZoneId(final com.aliyun.ros.cdk.core.IResolvable masterZoneId) {
            this.props().masterZoneId(masterZoneId);
            return this;
        }

        /**
         * Property modificationProtectionReason: Set the reason for modifying the protection status.
         * <p>
         * The length is 1-80 English or Chinese characters, must start with upper and lower letters or Chinese, and can include numbers, periods (.), underscores (_) and dashes (-).
         * Only valid when ModificationProtectionStatus is ConsoleProtection.
         * <p>
         * @return {@code this}
         * @param modificationProtectionReason Property modificationProtectionReason: Set the reason for modifying the protection status. This parameter is required.
         */
        public Builder modificationProtectionReason(final java.lang.String modificationProtectionReason) {
            this.props().modificationProtectionReason(modificationProtectionReason);
            return this;
        }
        /**
         * Property modificationProtectionReason: Set the reason for modifying the protection status.
         * <p>
         * The length is 1-80 English or Chinese characters, must start with upper and lower letters or Chinese, and can include numbers, periods (.), underscores (_) and dashes (-).
         * Only valid when ModificationProtectionStatus is ConsoleProtection.
         * <p>
         * @return {@code this}
         * @param modificationProtectionReason Property modificationProtectionReason: Set the reason for modifying the protection status. This parameter is required.
         */
        public Builder modificationProtectionReason(final com.aliyun.ros.cdk.core.IResolvable modificationProtectionReason) {
            this.props().modificationProtectionReason(modificationProtectionReason);
            return this;
        }

        /**
         * Property modificationProtectionStatus: NonProtection or empty: means no restriction on modification protection ConsoleProtection: Modify instance protection status by console Default value is empty.
         * <p>
         * @return {@code this}
         * @param modificationProtectionStatus Property modificationProtectionStatus: NonProtection or empty: means no restriction on modification protection ConsoleProtection: Modify instance protection status by console Default value is empty. This parameter is required.
         */
        public Builder modificationProtectionStatus(final java.lang.String modificationProtectionStatus) {
            this.props().modificationProtectionStatus(modificationProtectionStatus);
            return this;
        }
        /**
         * Property modificationProtectionStatus: NonProtection or empty: means no restriction on modification protection ConsoleProtection: Modify instance protection status by console Default value is empty.
         * <p>
         * @return {@code this}
         * @param modificationProtectionStatus Property modificationProtectionStatus: NonProtection or empty: means no restriction on modification protection ConsoleProtection: Modify instance protection status by console Default value is empty. This parameter is required.
         */
        public Builder modificationProtectionStatus(final com.aliyun.ros.cdk.core.IResolvable modificationProtectionStatus) {
            this.props().modificationProtectionStatus(modificationProtectionStatus);
            return this;
        }

        /**
         * Property payType: Optional.
         * <p>
         * The billing method of the instance to be created.
         * Valid value: PayOnDemand (Pay-As-You-Go) | PrePay (Subscription)
         * <p>
         * @return {@code this}
         * @param payType Property payType: Optional. This parameter is required.
         */
        public Builder payType(final java.lang.String payType) {
            this.props().payType(payType);
            return this;
        }
        /**
         * Property payType: Optional.
         * <p>
         * The billing method of the instance to be created.
         * Valid value: PayOnDemand (Pay-As-You-Go) | PrePay (Subscription)
         * <p>
         * @return {@code this}
         * @param payType Property payType: Optional. This parameter is required.
         */
        public Builder payType(final com.aliyun.ros.cdk.core.IResolvable payType) {
            this.props().payType(payType);
            return this;
        }

        /**
         * Property pricingCycle: Optional.
         * <p>
         * The duration of the Subscription-billed Internet instance to be created.
         * Valid values: month | year.
         * <p>
         * @return {@code this}
         * @param pricingCycle Property pricingCycle: Optional. This parameter is required.
         */
        public Builder pricingCycle(final java.lang.String pricingCycle) {
            this.props().pricingCycle(pricingCycle);
            return this;
        }
        /**
         * Property pricingCycle: Optional.
         * <p>
         * The duration of the Subscription-billed Internet instance to be created.
         * Valid values: month | year.
         * <p>
         * @return {@code this}
         * @param pricingCycle Property pricingCycle: Optional. This parameter is required.
         */
        public Builder pricingCycle(final com.aliyun.ros.cdk.core.IResolvable pricingCycle) {
            this.props().pricingCycle(pricingCycle);
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
         * Property slaveZoneId: The slave zone id to create load balancer instance.
         * <p>
         * @return {@code this}
         * @param slaveZoneId Property slaveZoneId: The slave zone id to create load balancer instance. This parameter is required.
         */
        public Builder slaveZoneId(final java.lang.String slaveZoneId) {
            this.props().slaveZoneId(slaveZoneId);
            return this;
        }
        /**
         * Property slaveZoneId: The slave zone id to create load balancer instance.
         * <p>
         * @return {@code this}
         * @param slaveZoneId Property slaveZoneId: The slave zone id to create load balancer instance. This parameter is required.
         */
        public Builder slaveZoneId(final com.aliyun.ros.cdk.core.IResolvable slaveZoneId) {
            this.props().slaveZoneId(slaveZoneId);
            return this;
        }

        /**
         * Property tags: Tags to attach to slb.
         * <p>
         * Max support 5 tags to add during create slb. Each tag with two properties Key and Value, and Key is required.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags to attach to slb. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.slb.RosLoadBalancer.TagsProperty> tags) {
            this.props().tags(tags);
            return this;
        }

        /**
         * Property vpcId: The VPC id to create load balancer instance.
         * <p>
         * For VPC network only.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The VPC id to create load balancer instance. This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props().vpcId(vpcId);
            return this;
        }
        /**
         * Property vpcId: The VPC id to create load balancer instance.
         * <p>
         * For VPC network only.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The VPC id to create load balancer instance. This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props().vpcId(vpcId);
            return this;
        }

        /**
         * Property vSwitchId: The VSwitch id to create load balancer instance.
         * <p>
         * For VPC network only.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The VSwitch id to create load balancer instance. This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props().vSwitchId(vSwitchId);
            return this;
        }
        /**
         * Property vSwitchId: The VSwitch id to create load balancer instance.
         * <p>
         * For VPC network only.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The VSwitch id to create load balancer instance. This parameter is required.
         */
        public Builder vSwitchId(final com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.props().vSwitchId(vSwitchId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.slb.LoadBalancer}.
         */
        @Override
        public com.aliyun.ros.cdk.slb.LoadBalancer build() {
            return new com.aliyun.ros.cdk.slb.LoadBalancer(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.slb.LoadBalancerProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.slb.LoadBalancerProps.Builder();
            }
            return this.props;
        }
    }
}
