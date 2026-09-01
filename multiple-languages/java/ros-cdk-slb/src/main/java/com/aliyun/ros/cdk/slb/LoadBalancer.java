package com.aliyun.ros.cdk.slb;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::SLB::LoadBalancer</code>Use the , which resource type to create an SLB instance.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-08-31T11:44:47.077Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.slb.$Module.class, fqn = "@alicloud/ros-cdk-slb.LoadBalancer")
public class LoadBalancer extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.slb.ILoadBalancer {

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
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAddressIpVersion() {
        return software.amazon.jsii.Kernel.get(this, "attrAddressIpVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute AddressType: The address type of the load balancer.
     * <p>
     * "intranet" or "internet".
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAddressType() {
        return software.amazon.jsii.Kernel.get(this, "attrAddressType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Bandwidth: The bandwidth for network.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrBandwidth() {
        return software.amazon.jsii.Kernel.get(this, "attrBandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute IpAddress: The ip address of the load balancer.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpAddress() {
        return software.amazon.jsii.Kernel.get(this, "attrIpAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute LoadBalancerId: The id of load balance created.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoadBalancerId() {
        return software.amazon.jsii.Kernel.get(this, "attrLoadBalancerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute LoadBalancerName: Name of created load balancer.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoadBalancerName() {
        return software.amazon.jsii.Kernel.get(this, "attrLoadBalancerName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute LoadBalancerSpec: The specification of the Server Load Balancer instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoadBalancerSpec() {
        return software.amazon.jsii.Kernel.get(this, "attrLoadBalancerSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute MasterZoneId: The master zone id to create load balancer instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrMasterZoneId() {
        return software.amazon.jsii.Kernel.get(this, "attrMasterZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute NetworkType: The network type of the load balancer.
     * <p>
     * "vpc" or "classic" network.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrNetworkType() {
        return software.amazon.jsii.Kernel.get(this, "attrNetworkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute OrderId: The order ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrOrderId() {
        return software.amazon.jsii.Kernel.get(this, "attrOrderId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PayType: The billing method of the instance to be created.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPayType() {
        return software.amazon.jsii.Kernel.get(this, "attrPayType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ResourceGroupId: Resource group id.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SlaveZoneId: The slave zone id to create load balancer instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSlaveZoneId() {
        return software.amazon.jsii.Kernel.get(this, "attrSlaveZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute VpcId: Vpc id.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId() {
        return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute VSwitchId: VSwitch id.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchId() {
        return software.amazon.jsii.Kernel.get(this, "attrVSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.slb.LoadBalancerProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.slb.LoadBalancerProps.class));
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
         * Property addressIpVersion: The IP version of the CLB instance.
         * <p>
         * Valid values: ipv4 and ipv6.
         * <p>
         * @return {@code this}
         * @param addressIpVersion Property addressIpVersion: The IP version of the CLB instance. This parameter is required.
         */
        public Builder addressIpVersion(final java.lang.String addressIpVersion) {
            this.props().addressIpVersion(addressIpVersion);
            return this;
        }
        /**
         * Property addressIpVersion: The IP version of the CLB instance.
         * <p>
         * Valid values: ipv4 and ipv6.
         * <p>
         * @return {@code this}
         * @param addressIpVersion Property addressIpVersion: The IP version of the CLB instance. This parameter is required.
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
         * Property instanceChargeType: The resource metering method for the CLB instance.
         * <p>
         * Valid value:
         * <p>
         * <ul>
         * <li>PayByCLCU: pay-by-data-transfer</li>
         * </ul>
         * <p>
         * <blockquote>
         * <p>
         * As of 00:00:00 (UTC+8) on June 1, 2025, pay-by-specification CLB instances are
         * no longer available for purchase. For more details, see <a href="t2857909.xdita#"></a>.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param instanceChargeType Property instanceChargeType: The resource metering method for the CLB instance. This parameter is required.
         */
        public Builder instanceChargeType(final java.lang.String instanceChargeType) {
            this.props().instanceChargeType(instanceChargeType);
            return this;
        }
        /**
         * Property instanceChargeType: The resource metering method for the CLB instance.
         * <p>
         * Valid value:
         * <p>
         * <ul>
         * <li>PayByCLCU: pay-by-data-transfer</li>
         * </ul>
         * <p>
         * <blockquote>
         * <p>
         * As of 00:00:00 (UTC+8) on June 1, 2025, pay-by-specification CLB instances are
         * no longer available for purchase. For more details, see <a href="t2857909.xdita#"></a>.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param instanceChargeType Property instanceChargeType: The resource metering method for the CLB instance. This parameter is required.
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
         * Property loadBalancerName: The CLB instance name.
         * <p>
         * The name must be 1 to 80 characters in length, and can contain digits, periods
         * (.), underscores (_), and hyphens (-). It must start with a letter.
         * If you do not specify this parameter, the system automatically assigns a name to
         * the CLB instance.
         * <p>
         * @return {@code this}
         * @param loadBalancerName Property loadBalancerName: The CLB instance name. This parameter is required.
         */
        public Builder loadBalancerName(final java.lang.String loadBalancerName) {
            this.props().loadBalancerName(loadBalancerName);
            return this;
        }
        /**
         * Property loadBalancerName: The CLB instance name.
         * <p>
         * The name must be 1 to 80 characters in length, and can contain digits, periods
         * (.), underscores (_), and hyphens (-). It must start with a letter.
         * If you do not specify this parameter, the system automatically assigns a name to
         * the CLB instance.
         * <p>
         * @return {@code this}
         * @param loadBalancerName Property loadBalancerName: The CLB instance name. This parameter is required.
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
         * <li>slb.s1.small</li>
         * <li>slb.s2.small</li>
         * <li>slb.s2.medium</li>
         * <li>slb.s3.small</li>
         * <li>slb.s3.medium</li>
         * <li>slb.s3.large</li>
         * </ul>
         * <p>
         * <blockquote>
         * <p>
         * <ul>
         * <li>If InstanceChargeType is set to PayByCLCU, this parameter is invalid and you
         * do not need to specify this parameter.</li>
         * <li>As of 00:00:00 (UTC+8) on June 1, 2025, pay-by-specification CLB instances
         * are no longer available for purchase. For more details, see <a href="t2857909.xdita#"></a>.</li>
         * </ul>
         * <p>
         * </blockquote>
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
         * <li>slb.s1.small</li>
         * <li>slb.s2.small</li>
         * <li>slb.s2.medium</li>
         * <li>slb.s3.small</li>
         * <li>slb.s3.medium</li>
         * <li>slb.s3.large</li>
         * </ul>
         * <p>
         * <blockquote>
         * <p>
         * <ul>
         * <li>If InstanceChargeType is set to PayByCLCU, this parameter is invalid and you
         * do not need to specify this parameter.</li>
         * <li>As of 00:00:00 (UTC+8) on June 1, 2025, pay-by-specification CLB instances
         * are no longer available for purchase. For more details, see <a href="t2857909.xdita#"></a>.</li>
         * </ul>
         * <p>
         * </blockquote>
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
         * Property modificationProtectionReason: The reason for enabling the configuration read-only mode.
         * <p>
         * The reason must be 1 to
         * 80 characters in length. It must start with a letter and can contain letters,
         * digits, periods (.), underscores (_), and hyphens (-).
         * <p>
         * <blockquote>
         * <p>
         * This parameter takes effect only when ModificationProtectionStatus is set to
         * ConsoleProtection.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param modificationProtectionReason Property modificationProtectionReason: The reason for enabling the configuration read-only mode. This parameter is required.
         */
        public Builder modificationProtectionReason(final java.lang.String modificationProtectionReason) {
            this.props().modificationProtectionReason(modificationProtectionReason);
            return this;
        }
        /**
         * Property modificationProtectionReason: The reason for enabling the configuration read-only mode.
         * <p>
         * The reason must be 1 to
         * 80 characters in length. It must start with a letter and can contain letters,
         * digits, periods (.), underscores (_), and hyphens (-).
         * <p>
         * <blockquote>
         * <p>
         * This parameter takes effect only when ModificationProtectionStatus is set to
         * ConsoleProtection.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param modificationProtectionReason Property modificationProtectionReason: The reason for enabling the configuration read-only mode. This parameter is required.
         */
        public Builder modificationProtectionReason(final com.aliyun.ros.cdk.core.IResolvable modificationProtectionReason) {
            this.props().modificationProtectionReason(modificationProtectionReason);
            return this;
        }

        /**
         * Property modificationProtectionStatus: Specifies whether to enable the configuration read-only mode.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>NonProtection: disables the configuration read-only mode. After you disable the
         * configuration read-only mode, the value of ModificationProtectionReason is
         * cleared.</li>
         * <li>ConsoleProtection: enables the configuration read-only mode.</li>
         * </ul>
         * <p>
         * <blockquote>
         * <p>
         * If you set this parameter to ConsoleProtection, you cannot modify instance
         * configurations in the CLB console. However, you can modify instance
         * configurations by calling API operations.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param modificationProtectionStatus Property modificationProtectionStatus: Specifies whether to enable the configuration read-only mode. This parameter is required.
         */
        public Builder modificationProtectionStatus(final java.lang.String modificationProtectionStatus) {
            this.props().modificationProtectionStatus(modificationProtectionStatus);
            return this;
        }
        /**
         * Property modificationProtectionStatus: Specifies whether to enable the configuration read-only mode.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>NonProtection: disables the configuration read-only mode. After you disable the
         * configuration read-only mode, the value of ModificationProtectionReason is
         * cleared.</li>
         * <li>ConsoleProtection: enables the configuration read-only mode.</li>
         * </ul>
         * <p>
         * <blockquote>
         * <p>
         * If you set this parameter to ConsoleProtection, you cannot modify instance
         * configurations in the CLB console. However, you can modify instance
         * configurations by calling API operations.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param modificationProtectionStatus Property modificationProtectionStatus: Specifies whether to enable the configuration read-only mode. This parameter is required.
         */
        public Builder modificationProtectionStatus(final com.aliyun.ros.cdk.core.IResolvable modificationProtectionStatus) {
            this.props().modificationProtectionStatus(modificationProtectionStatus);
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
         * Property vSwitchId: The ID of the vSwitch to which the CLB instance belongs.
         * <p>
         * If you want to deploy the CLB instance in a VPC, this parameter is required. If
         * this parameter is specified, AddessType is set to intranet by default.
         * <p>
         * <blockquote>
         * <p>
         * The vSwitch must be in the primary zone.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The ID of the vSwitch to which the CLB instance belongs. This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props().vSwitchId(vSwitchId);
            return this;
        }
        /**
         * Property vSwitchId: The ID of the vSwitch to which the CLB instance belongs.
         * <p>
         * If you want to deploy the CLB instance in a VPC, this parameter is required. If
         * this parameter is specified, AddessType is set to intranet by default.
         * <p>
         * <blockquote>
         * <p>
         * The vSwitch must be in the primary zone.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The ID of the vSwitch to which the CLB instance belongs. This parameter is required.
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
