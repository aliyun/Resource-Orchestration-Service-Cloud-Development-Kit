package com.aliyun.ros.cdk.vpc;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::VPC::EIPPro</code>, which is used to create an elastic IP address (EIP).
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-10-18T08:56:33.939Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.EIPPro")
public class EIPPro extends com.aliyun.ros.cdk.core.Resource {

    protected EIPPro(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected EIPPro(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public EIPPro(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.vpc.EIPProProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public EIPPro(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.vpc.EIPProProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public EIPPro(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute AllocationId: ID that Aliyun assigns to represent the allocation of the address for use with VPC.
     * <p>
     * Returned only for VPC elastic IP addresses.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAllocationId() {
        return software.amazon.jsii.Kernel.get(this, "attrAllocationId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute EipAddress: IP address of created EIP.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEipAddress() {
        return software.amazon.jsii.Kernel.get(this, "attrEipAddress", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ISP: The line type.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrIsp() {
        return software.amazon.jsii.Kernel.get(this, "attrIsp", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute OrderId: Order ID of prepaid EIP instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrOrderId() {
        return software.amazon.jsii.Kernel.get(this, "attrOrderId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.EIPProProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.EIPProProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.EIPProProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.EIPPro}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.EIPPro> {
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
        private com.aliyun.ros.cdk.vpc.EIPProProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property autoPay: Automatic Payment.
         * <p>
         * Default is true.
         * <p>
         * @return {@code this}
         * @param autoPay Property autoPay: Automatic Payment. This parameter is required.
         */
        public Builder autoPay(final java.lang.Boolean autoPay) {
            this.props().autoPay(autoPay);
            return this;
        }
        /**
         * Property autoPay: Automatic Payment.
         * <p>
         * Default is true.
         * <p>
         * @return {@code this}
         * @param autoPay Property autoPay: Automatic Payment. This parameter is required.
         */
        public Builder autoPay(final com.aliyun.ros.cdk.core.IResolvable autoPay) {
            this.props().autoPay(autoPay);
            return this;
        }

        /**
         * Property bandwidth: Bandwidth for the output network.
         * <p>
         * Default is 5MB.
         * <p>
         * @return {@code this}
         * @param bandwidth Property bandwidth: Bandwidth for the output network. This parameter is required.
         */
        public Builder bandwidth(final java.lang.Number bandwidth) {
            this.props().bandwidth(bandwidth);
            return this;
        }
        /**
         * Property bandwidth: Bandwidth for the output network.
         * <p>
         * Default is 5MB.
         * <p>
         * @return {@code this}
         * @param bandwidth Property bandwidth: Bandwidth for the output network. This parameter is required.
         */
        public Builder bandwidth(final com.aliyun.ros.cdk.core.IResolvable bandwidth) {
            this.props().bandwidth(bandwidth);
            return this;
        }

        /**
         * Property deletionProtection: Whether to enable deletion protection.
         * <p>
         * Default to False.
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
         * Default to False.
         * <p>
         * @return {@code this}
         * @param deletionProtection Property deletionProtection: Whether to enable deletion protection. This parameter is required.
         */
        public Builder deletionProtection(final com.aliyun.ros.cdk.core.IResolvable deletionProtection) {
            this.props().deletionProtection(deletionProtection);
            return this;
        }

        /**
         * Property description: Optional.
         * <p>
         * The description of the EIP. The description must be 2 to 256 characters in length. It must start with a letter. It cannot start with http://  or https://.
         * <p>
         * @return {@code this}
         * @param description Property description: Optional. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props().description(description);
            return this;
        }
        /**
         * Property description: Optional.
         * <p>
         * The description of the EIP. The description must be 2 to 256 characters in length. It must start with a letter. It cannot start with http://  or https://.
         * <p>
         * @return {@code this}
         * @param description Property description: Optional. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props().description(description);
            return this;
        }

        /**
         * Property instanceChargeType: The resource charge type.
         * <p>
         * Default value is Postpaid
         * <p>
         * @return {@code this}
         * @param instanceChargeType Property instanceChargeType: The resource charge type. This parameter is required.
         */
        public Builder instanceChargeType(final java.lang.String instanceChargeType) {
            this.props().instanceChargeType(instanceChargeType);
            return this;
        }
        /**
         * Property instanceChargeType: The resource charge type.
         * <p>
         * Default value is Postpaid
         * <p>
         * @return {@code this}
         * @param instanceChargeType Property instanceChargeType: The resource charge type. This parameter is required.
         */
        public Builder instanceChargeType(final com.aliyun.ros.cdk.core.IResolvable instanceChargeType) {
            this.props().instanceChargeType(instanceChargeType);
            return this;
        }

        /**
         * Property instanceId: The ID of the requested EIP.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The ID of the requested EIP. This parameter is required.
         */
        public Builder instanceId(final java.lang.String instanceId) {
            this.props().instanceId(instanceId);
            return this;
        }
        /**
         * Property instanceId: The ID of the requested EIP.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The ID of the requested EIP. This parameter is required.
         */
        public Builder instanceId(final com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.props().instanceId(instanceId);
            return this;
        }

        /**
         * Property internetChargeType: The network charge type.
         * <p>
         * Support 'PayByBandwidth' and 'PayByTraffic' only. Default is PayByBandwidth. PayByTraffic will charge by hour, PayByBandwidth will charge by day.
         * <p>
         * @return {@code this}
         * @param internetChargeType Property internetChargeType: The network charge type. This parameter is required.
         */
        public Builder internetChargeType(final java.lang.String internetChargeType) {
            this.props().internetChargeType(internetChargeType);
            return this;
        }
        /**
         * Property internetChargeType: The network charge type.
         * <p>
         * Support 'PayByBandwidth' and 'PayByTraffic' only. Default is PayByBandwidth. PayByTraffic will charge by hour, PayByBandwidth will charge by day.
         * <p>
         * @return {@code this}
         * @param internetChargeType Property internetChargeType: The network charge type. This parameter is required.
         */
        public Builder internetChargeType(final com.aliyun.ros.cdk.core.IResolvable internetChargeType) {
            this.props().internetChargeType(internetChargeType);
            return this;
        }

        /**
         * Property ipAddress: The IP address of the requested EIP.
         * <p>
         * @return {@code this}
         * @param ipAddress Property ipAddress: The IP address of the requested EIP. This parameter is required.
         */
        public Builder ipAddress(final java.lang.String ipAddress) {
            this.props().ipAddress(ipAddress);
            return this;
        }
        /**
         * Property ipAddress: The IP address of the requested EIP.
         * <p>
         * @return {@code this}
         * @param ipAddress Property ipAddress: The IP address of the requested EIP. This parameter is required.
         */
        public Builder ipAddress(final com.aliyun.ros.cdk.core.IResolvable ipAddress) {
            this.props().ipAddress(ipAddress);
            return this;
        }

        /**
         * Property isp: The line type.
         * <p>
         * You can set this parameter only when you create a pay-as-you-go EIP. Valid values:
         * BGP: BGP (Multi-ISP) lines. Up to 89 high-quality BGP lines are available worldwide. Direct connections with multiple Internet Service Providers (ISPs), including Telecom, Unicom, Mobile, Railcom, Netcom, CERNET, China Broadcast Network, Dr. Peng, and Founder, can be established in all regions in mainland China.
         * BGP_PRO: BGP (Multi-ISP) Pro lines. BGP (Multi-ISP) Pro lines optimize data transmission to China and improve connection quality for international services. Compared with traditional BGP (Multi-ISP) lines, BGP (Multi-ISP) Pro lines can be used to establish direct connections without using international ISP services. Therefore, BGP (Multi-ISP) Pro lines reduce network latency.
         * <p>
         * @return {@code this}
         * @param isp Property isp: The line type. This parameter is required.
         */
        public Builder isp(final java.lang.String isp) {
            this.props().isp(isp);
            return this;
        }
        /**
         * Property isp: The line type.
         * <p>
         * You can set this parameter only when you create a pay-as-you-go EIP. Valid values:
         * BGP: BGP (Multi-ISP) lines. Up to 89 high-quality BGP lines are available worldwide. Direct connections with multiple Internet Service Providers (ISPs), including Telecom, Unicom, Mobile, Railcom, Netcom, CERNET, China Broadcast Network, Dr. Peng, and Founder, can be established in all regions in mainland China.
         * BGP_PRO: BGP (Multi-ISP) Pro lines. BGP (Multi-ISP) Pro lines optimize data transmission to China and improve connection quality for international services. Compared with traditional BGP (Multi-ISP) lines, BGP (Multi-ISP) Pro lines can be used to establish direct connections without using international ISP services. Therefore, BGP (Multi-ISP) Pro lines reduce network latency.
         * <p>
         * @return {@code this}
         * @param isp Property isp: The line type. This parameter is required.
         */
        public Builder isp(final com.aliyun.ros.cdk.core.IResolvable isp) {
            this.props().isp(isp);
            return this;
        }

        /**
         * Property name: The name of the EIP.
         * <p>
         * The name must be 2 to 128 characters in length. It must start with a letter. It can contain numbers, periods (.), underscores (_), and hyphens (-). It cannot start with http://  or https://
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the EIP. This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props().name(name);
            return this;
        }
        /**
         * Property name: The name of the EIP.
         * <p>
         * The name must be 2 to 128 characters in length. It must start with a letter. It can contain numbers, periods (.), underscores (_), and hyphens (-). It cannot start with http://  or https://
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the EIP. This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props().name(name);
            return this;
        }

        /**
         * Property netmode: The network type.
         * <p>
         * Valid value: public (public network).
         * <p>
         * @return {@code this}
         * @param netmode Property netmode: The network type. This parameter is required.
         */
        public Builder netmode(final java.lang.String netmode) {
            this.props().netmode(netmode);
            return this;
        }
        /**
         * Property netmode: The network type.
         * <p>
         * Valid value: public (public network).
         * <p>
         * @return {@code this}
         * @param netmode Property netmode: The network type. This parameter is required.
         */
        public Builder netmode(final com.aliyun.ros.cdk.core.IResolvable netmode) {
            this.props().netmode(netmode);
            return this;
        }

        /**
         * Property period: Prepaid time period.
         * <p>
         * While choose by pay by month, it could be from 1 to 9 or 12, 24, 36.
         * While choose pay by year, it could be from 1 to 3.
         * <p>
         * @return {@code this}
         * @param period Property period: Prepaid time period. This parameter is required.
         */
        public Builder period(final java.lang.Number period) {
            this.props().period(period);
            return this;
        }
        /**
         * Property period: Prepaid time period.
         * <p>
         * While choose by pay by month, it could be from 1 to 9 or 12, 24, 36.
         * While choose pay by year, it could be from 1 to 3.
         * <p>
         * @return {@code this}
         * @param period Property period: Prepaid time period. This parameter is required.
         */
        public Builder period(final com.aliyun.ros.cdk.core.IResolvable period) {
            this.props().period(period);
            return this;
        }

        /**
         * Property pricingCycle: Price cycle of the resource.
         * <p>
         * This property has no default value. If ChargeType is specified as Postpaid, this value will be ignore.
         * <p>
         * @return {@code this}
         * @param pricingCycle Property pricingCycle: Price cycle of the resource. This parameter is required.
         */
        public Builder pricingCycle(final java.lang.String pricingCycle) {
            this.props().pricingCycle(pricingCycle);
            return this;
        }
        /**
         * Property pricingCycle: Price cycle of the resource.
         * <p>
         * This property has no default value. If ChargeType is specified as Postpaid, this value will be ignore.
         * <p>
         * @return {@code this}
         * @param pricingCycle Property pricingCycle: Price cycle of the resource. This parameter is required.
         */
        public Builder pricingCycle(final com.aliyun.ros.cdk.core.IResolvable pricingCycle) {
            this.props().pricingCycle(pricingCycle);
            return this;
        }

        /**
         * Property publicIpAddressPoolId: The ID of the IP address pool.
         * <p>
         * The EIP is allocated from the IP address pool.
         * <p>
         * @return {@code this}
         * @param publicIpAddressPoolId Property publicIpAddressPoolId: The ID of the IP address pool. This parameter is required.
         */
        public Builder publicIpAddressPoolId(final java.lang.String publicIpAddressPoolId) {
            this.props().publicIpAddressPoolId(publicIpAddressPoolId);
            return this;
        }
        /**
         * Property publicIpAddressPoolId: The ID of the IP address pool.
         * <p>
         * The EIP is allocated from the IP address pool.
         * <p>
         * @return {@code this}
         * @param publicIpAddressPoolId Property publicIpAddressPoolId: The ID of the IP address pool. This parameter is required.
         */
        public Builder publicIpAddressPoolId(final com.aliyun.ros.cdk.core.IResolvable publicIpAddressPoolId) {
            this.props().publicIpAddressPoolId(publicIpAddressPoolId);
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
         * Property securityProtectionTypes: The edition of Anti-DDoS.
         * <p>
         * If you do not set this parameter, Anti-DDoS Origin Basic is used.
         * If you set the value to AntiDDoS_Enhanced, Anti-DDoS Pro/Premium is used.
         * <p>
         * @return {@code this}
         * @param securityProtectionTypes Property securityProtectionTypes: The edition of Anti-DDoS. This parameter is required.
         */
        public Builder securityProtectionTypes(final com.aliyun.ros.cdk.core.IResolvable securityProtectionTypes) {
            this.props().securityProtectionTypes(securityProtectionTypes);
            return this;
        }
        /**
         * Property securityProtectionTypes: The edition of Anti-DDoS.
         * <p>
         * If you do not set this parameter, Anti-DDoS Origin Basic is used.
         * If you set the value to AntiDDoS_Enhanced, Anti-DDoS Pro/Premium is used.
         * <p>
         * @return {@code this}
         * @param securityProtectionTypes Property securityProtectionTypes: The edition of Anti-DDoS. This parameter is required.
         */
        public Builder securityProtectionTypes(final java.util.List<? extends java.lang.Object> securityProtectionTypes) {
            this.props().securityProtectionTypes(securityProtectionTypes);
            return this;
        }

        /**
         * Property tags: Tags to attach to eip.
         * <p>
         * Max support 20 tags to add during create eip. Each tag with two properties Key and Value, and Key is required.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags to attach to eip. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.vpc.RosEIPPro.TagsProperty> tags) {
            this.props().tags(tags);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.vpc.EIPPro}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.EIPPro build() {
            return new com.aliyun.ros.cdk.vpc.EIPPro(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.vpc.EIPProProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.vpc.EIPProProps.Builder();
            }
            return this.props;
        }
    }
}
