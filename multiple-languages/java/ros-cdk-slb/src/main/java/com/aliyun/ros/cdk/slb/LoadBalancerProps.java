package com.aliyun.ros.cdk.slb;

/**
 * Properties for defining a `ALIYUN::SLB::LoadBalancer`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.27.0 (build 07d848a)", date = "2021-04-07T04:01:43.072Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.slb.$Module.class, fqn = "@alicloud/ros-cdk-slb.LoadBalancerProps")
@software.amazon.jsii.Jsii.Proxy(LoadBalancerProps.Jsii$Proxy.class)
public interface LoadBalancerProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property addressType: Loader balancer address type.
     * <p>
     * Support 'internet' and 'intranet' only, default is 'internet'.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAddressType() {
        return null;
    }

    /**
     * Property autoPay: Optional.
     * <p>
     * Indicates whether to automatically pay the bill for the Subscription-billed Internet instance to be created.
     * Valid values: true | false (default value)
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoPay() {
        return null;
    }

    /**
     * Property bandwidth: The bandwidth for network, unit in Mbps(Mega bit per second).
     * <p>
     * Range is 1 to 1000, default is 1. If InternetChargeType is specified as "paybytraffic", this property will be ignore and please specify the "Bandwidth" in ALIYUN::SLB::Listener.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBandwidth() {
        return null;
    }

    /**
     * Property deletionProtection: Whether to enable deletion protection.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeletionProtection() {
        return null;
    }

    /**
     * Property duration: Optional.
     * <p>
     * The subscription duration of a Subscription Internet instance.
     * Valid values:
     * If PricingCycle is month, the valid range is 1 to 9 or 12, 24, 36.
     * If PricingCycle is year, the value range is 1 to 3.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDuration() {
        return null;
    }

    /**
     * Property internetChargeType: Instance internet access charge type.Support 'paybybandwidth' and 'paybytraffic' only. Default is 'paybytraffic'. If load balancer is created in VPC, the charge type will be set as 'paybytraffic' by default.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInternetChargeType() {
        return null;
    }

    /**
     * Property loadBalancerName: Name of created load balancer.
     * <p>
     * Length is limited to 1-80 characters, allowed to contain letters, numbers, '-, /, _,.' When not specified, a default name will be assigned.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLoadBalancerName() {
        return null;
    }

    /**
     * Property loadBalancerSpec: The specification of the Server Load Balancer instance.
     * <p>
     * Allowed value: slb.s1.small|slb.s2.small|slb.s2.medium|slb.s3.small|slb.s3.medium|slb.s3.large|slb.s3.xlarge|slb.s3.xxlarge. Default value: slb.s1.small. The supported performance specification in each region is different, two specifications are supported in the US East 1 region. If the region does not support the performance-guaranteed instances, the value will not take effect.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLoadBalancerSpec() {
        return null;
    }

    /**
     * Property masterZoneId: The master zone id to create load balancer instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMasterZoneId() {
        return null;
    }

    /**
     * Property modificationProtectionReason: Set the reason for modifying the protection status.
     * <p>
     * The length is 1-80 English or Chinese characters, must start with upper and lower letters or Chinese, and can include numbers, periods (.), underscores (_) and dashes (-).
     * Only valid when ModificationProtectionStatus is ConsoleProtection.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getModificationProtectionReason() {
        return null;
    }

    /**
     * Property modificationProtectionStatus: NonProtection or empty: means no restriction on modification protection ConsoleProtection: Modify instance protection status by console Default value is empty.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getModificationProtectionStatus() {
        return null;
    }

    /**
     * Property payType: Optional.
     * <p>
     * The billing method of the instance to be created.
     * Valid value: PayOnDemand (Pay-As-You-Go) | PrePay (Subscription)
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPayType() {
        return null;
    }

    /**
     * Property pricingCycle: Optional.
     * <p>
     * The duration of the Subscription-billed Internet instance to be created.
     * Valid values: month | year.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPricingCycle() {
        return null;
    }

    /**
     * Property resourceGroupId: Resource group id.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property slaveZoneId: The slave zone id to create load balancer instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSlaveZoneId() {
        return null;
    }

    /**
     * Property tags: Tags to attach to slb.
     * <p>
     * Max support 5 tags to add during create slb. Each tag with two properties Key and Value, and Key is required.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.slb.RosLoadBalancer.TagsProperty> getTags() {
        return null;
    }

    /**
     * Property vpcId: The VPC id to create load balancer instance.
     * <p>
     * For VPC network only.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVpcId() {
        return null;
    }

    /**
     * Property vSwitchId: The VSwitch id to create load balancer instance.
     * <p>
     * For VPC network only.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link LoadBalancerProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link LoadBalancerProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<LoadBalancerProps> {
        private java.lang.Object addressType;
        private java.lang.Object autoPay;
        private java.lang.Object bandwidth;
        private java.lang.Object deletionProtection;
        private java.lang.Object duration;
        private java.lang.Object internetChargeType;
        private java.lang.Object loadBalancerName;
        private java.lang.Object loadBalancerSpec;
        private java.lang.Object masterZoneId;
        private java.lang.Object modificationProtectionReason;
        private java.lang.Object modificationProtectionStatus;
        private java.lang.Object payType;
        private java.lang.Object pricingCycle;
        private java.lang.Object resourceGroupId;
        private java.lang.Object slaveZoneId;
        private java.util.List<com.aliyun.ros.cdk.slb.RosLoadBalancer.TagsProperty> tags;
        private java.lang.Object vpcId;
        private java.lang.Object vSwitchId;

        /**
         * Sets the value of {@link LoadBalancerProps#getAddressType}
         * @param addressType Property addressType: Loader balancer address type.
         *                    Support 'internet' and 'intranet' only, default is 'internet'.
         * @return {@code this}
         */
        public Builder addressType(java.lang.String addressType) {
            this.addressType = addressType;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getAddressType}
         * @param addressType Property addressType: Loader balancer address type.
         *                    Support 'internet' and 'intranet' only, default is 'internet'.
         * @return {@code this}
         */
        public Builder addressType(com.aliyun.ros.cdk.core.IResolvable addressType) {
            this.addressType = addressType;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getAutoPay}
         * @param autoPay Property autoPay: Optional.
         *                Indicates whether to automatically pay the bill for the Subscription-billed Internet instance to be created.
         *                Valid values: true | false (default value)
         * @return {@code this}
         */
        public Builder autoPay(java.lang.Boolean autoPay) {
            this.autoPay = autoPay;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getAutoPay}
         * @param autoPay Property autoPay: Optional.
         *                Indicates whether to automatically pay the bill for the Subscription-billed Internet instance to be created.
         *                Valid values: true | false (default value)
         * @return {@code this}
         */
        public Builder autoPay(com.aliyun.ros.cdk.core.IResolvable autoPay) {
            this.autoPay = autoPay;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getBandwidth}
         * @param bandwidth Property bandwidth: The bandwidth for network, unit in Mbps(Mega bit per second).
         *                  Range is 1 to 1000, default is 1. If InternetChargeType is specified as "paybytraffic", this property will be ignore and please specify the "Bandwidth" in ALIYUN::SLB::Listener.
         * @return {@code this}
         */
        public Builder bandwidth(java.lang.Number bandwidth) {
            this.bandwidth = bandwidth;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getBandwidth}
         * @param bandwidth Property bandwidth: The bandwidth for network, unit in Mbps(Mega bit per second).
         *                  Range is 1 to 1000, default is 1. If InternetChargeType is specified as "paybytraffic", this property will be ignore and please specify the "Bandwidth" in ALIYUN::SLB::Listener.
         * @return {@code this}
         */
        public Builder bandwidth(com.aliyun.ros.cdk.core.IResolvable bandwidth) {
            this.bandwidth = bandwidth;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getDeletionProtection}
         * @param deletionProtection Property deletionProtection: Whether to enable deletion protection.
         * @return {@code this}
         */
        public Builder deletionProtection(java.lang.Boolean deletionProtection) {
            this.deletionProtection = deletionProtection;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getDeletionProtection}
         * @param deletionProtection Property deletionProtection: Whether to enable deletion protection.
         * @return {@code this}
         */
        public Builder deletionProtection(com.aliyun.ros.cdk.core.IResolvable deletionProtection) {
            this.deletionProtection = deletionProtection;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getDuration}
         * @param duration Property duration: Optional.
         *                 The subscription duration of a Subscription Internet instance.
         *                 Valid values:
         *                 If PricingCycle is month, the valid range is 1 to 9 or 12, 24, 36.
         *                 If PricingCycle is year, the value range is 1 to 3.
         * @return {@code this}
         */
        public Builder duration(java.lang.Number duration) {
            this.duration = duration;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getDuration}
         * @param duration Property duration: Optional.
         *                 The subscription duration of a Subscription Internet instance.
         *                 Valid values:
         *                 If PricingCycle is month, the valid range is 1 to 9 or 12, 24, 36.
         *                 If PricingCycle is year, the value range is 1 to 3.
         * @return {@code this}
         */
        public Builder duration(com.aliyun.ros.cdk.core.IResolvable duration) {
            this.duration = duration;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getInternetChargeType}
         * @param internetChargeType Property internetChargeType: Instance internet access charge type.Support 'paybybandwidth' and 'paybytraffic' only. Default is 'paybytraffic'. If load balancer is created in VPC, the charge type will be set as 'paybytraffic' by default.
         * @return {@code this}
         */
        public Builder internetChargeType(java.lang.String internetChargeType) {
            this.internetChargeType = internetChargeType;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getInternetChargeType}
         * @param internetChargeType Property internetChargeType: Instance internet access charge type.Support 'paybybandwidth' and 'paybytraffic' only. Default is 'paybytraffic'. If load balancer is created in VPC, the charge type will be set as 'paybytraffic' by default.
         * @return {@code this}
         */
        public Builder internetChargeType(com.aliyun.ros.cdk.core.IResolvable internetChargeType) {
            this.internetChargeType = internetChargeType;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getLoadBalancerName}
         * @param loadBalancerName Property loadBalancerName: Name of created load balancer.
         *                         Length is limited to 1-80 characters, allowed to contain letters, numbers, '-, /, _,.' When not specified, a default name will be assigned.
         * @return {@code this}
         */
        public Builder loadBalancerName(java.lang.String loadBalancerName) {
            this.loadBalancerName = loadBalancerName;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getLoadBalancerName}
         * @param loadBalancerName Property loadBalancerName: Name of created load balancer.
         *                         Length is limited to 1-80 characters, allowed to contain letters, numbers, '-, /, _,.' When not specified, a default name will be assigned.
         * @return {@code this}
         */
        public Builder loadBalancerName(com.aliyun.ros.cdk.core.IResolvable loadBalancerName) {
            this.loadBalancerName = loadBalancerName;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getLoadBalancerSpec}
         * @param loadBalancerSpec Property loadBalancerSpec: The specification of the Server Load Balancer instance.
         *                         Allowed value: slb.s1.small|slb.s2.small|slb.s2.medium|slb.s3.small|slb.s3.medium|slb.s3.large|slb.s3.xlarge|slb.s3.xxlarge. Default value: slb.s1.small. The supported performance specification in each region is different, two specifications are supported in the US East 1 region. If the region does not support the performance-guaranteed instances, the value will not take effect.
         * @return {@code this}
         */
        public Builder loadBalancerSpec(java.lang.String loadBalancerSpec) {
            this.loadBalancerSpec = loadBalancerSpec;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getLoadBalancerSpec}
         * @param loadBalancerSpec Property loadBalancerSpec: The specification of the Server Load Balancer instance.
         *                         Allowed value: slb.s1.small|slb.s2.small|slb.s2.medium|slb.s3.small|slb.s3.medium|slb.s3.large|slb.s3.xlarge|slb.s3.xxlarge. Default value: slb.s1.small. The supported performance specification in each region is different, two specifications are supported in the US East 1 region. If the region does not support the performance-guaranteed instances, the value will not take effect.
         * @return {@code this}
         */
        public Builder loadBalancerSpec(com.aliyun.ros.cdk.core.IResolvable loadBalancerSpec) {
            this.loadBalancerSpec = loadBalancerSpec;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getMasterZoneId}
         * @param masterZoneId Property masterZoneId: The master zone id to create load balancer instance.
         * @return {@code this}
         */
        public Builder masterZoneId(java.lang.String masterZoneId) {
            this.masterZoneId = masterZoneId;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getMasterZoneId}
         * @param masterZoneId Property masterZoneId: The master zone id to create load balancer instance.
         * @return {@code this}
         */
        public Builder masterZoneId(com.aliyun.ros.cdk.core.IResolvable masterZoneId) {
            this.masterZoneId = masterZoneId;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getModificationProtectionReason}
         * @param modificationProtectionReason Property modificationProtectionReason: Set the reason for modifying the protection status.
         *                                     The length is 1-80 English or Chinese characters, must start with upper and lower letters or Chinese, and can include numbers, periods (.), underscores (_) and dashes (-).
         *                                     Only valid when ModificationProtectionStatus is ConsoleProtection.
         * @return {@code this}
         */
        public Builder modificationProtectionReason(java.lang.String modificationProtectionReason) {
            this.modificationProtectionReason = modificationProtectionReason;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getModificationProtectionReason}
         * @param modificationProtectionReason Property modificationProtectionReason: Set the reason for modifying the protection status.
         *                                     The length is 1-80 English or Chinese characters, must start with upper and lower letters or Chinese, and can include numbers, periods (.), underscores (_) and dashes (-).
         *                                     Only valid when ModificationProtectionStatus is ConsoleProtection.
         * @return {@code this}
         */
        public Builder modificationProtectionReason(com.aliyun.ros.cdk.core.IResolvable modificationProtectionReason) {
            this.modificationProtectionReason = modificationProtectionReason;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getModificationProtectionStatus}
         * @param modificationProtectionStatus Property modificationProtectionStatus: NonProtection or empty: means no restriction on modification protection ConsoleProtection: Modify instance protection status by console Default value is empty.
         * @return {@code this}
         */
        public Builder modificationProtectionStatus(java.lang.String modificationProtectionStatus) {
            this.modificationProtectionStatus = modificationProtectionStatus;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getModificationProtectionStatus}
         * @param modificationProtectionStatus Property modificationProtectionStatus: NonProtection or empty: means no restriction on modification protection ConsoleProtection: Modify instance protection status by console Default value is empty.
         * @return {@code this}
         */
        public Builder modificationProtectionStatus(com.aliyun.ros.cdk.core.IResolvable modificationProtectionStatus) {
            this.modificationProtectionStatus = modificationProtectionStatus;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getPayType}
         * @param payType Property payType: Optional.
         *                The billing method of the instance to be created.
         *                Valid value: PayOnDemand (Pay-As-You-Go) | PrePay (Subscription)
         * @return {@code this}
         */
        public Builder payType(java.lang.String payType) {
            this.payType = payType;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getPayType}
         * @param payType Property payType: Optional.
         *                The billing method of the instance to be created.
         *                Valid value: PayOnDemand (Pay-As-You-Go) | PrePay (Subscription)
         * @return {@code this}
         */
        public Builder payType(com.aliyun.ros.cdk.core.IResolvable payType) {
            this.payType = payType;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getPricingCycle}
         * @param pricingCycle Property pricingCycle: Optional.
         *                     The duration of the Subscription-billed Internet instance to be created.
         *                     Valid values: month | year.
         * @return {@code this}
         */
        public Builder pricingCycle(java.lang.String pricingCycle) {
            this.pricingCycle = pricingCycle;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getPricingCycle}
         * @param pricingCycle Property pricingCycle: Optional.
         *                     The duration of the Subscription-billed Internet instance to be created.
         *                     Valid values: month | year.
         * @return {@code this}
         */
        public Builder pricingCycle(com.aliyun.ros.cdk.core.IResolvable pricingCycle) {
            this.pricingCycle = pricingCycle;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: Resource group id.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: Resource group id.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getSlaveZoneId}
         * @param slaveZoneId Property slaveZoneId: The slave zone id to create load balancer instance.
         * @return {@code this}
         */
        public Builder slaveZoneId(java.lang.String slaveZoneId) {
            this.slaveZoneId = slaveZoneId;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getSlaveZoneId}
         * @param slaveZoneId Property slaveZoneId: The slave zone id to create load balancer instance.
         * @return {@code this}
         */
        public Builder slaveZoneId(com.aliyun.ros.cdk.core.IResolvable slaveZoneId) {
            this.slaveZoneId = slaveZoneId;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getTags}
         * @param tags Property tags: Tags to attach to slb.
         *             Max support 5 tags to add during create slb. Each tag with two properties Key and Value, and Key is required.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.slb.RosLoadBalancer.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.slb.RosLoadBalancer.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getVpcId}
         * @param vpcId Property vpcId: The VPC id to create load balancer instance.
         *              For VPC network only.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getVpcId}
         * @param vpcId Property vpcId: The VPC id to create load balancer instance.
         *              For VPC network only.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: The VSwitch id to create load balancer instance.
         *                  For VPC network only.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: The VSwitch id to create load balancer instance.
         *                  For VPC network only.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link LoadBalancerProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public LoadBalancerProps build() {
            return new Jsii$Proxy(addressType, autoPay, bandwidth, deletionProtection, duration, internetChargeType, loadBalancerName, loadBalancerSpec, masterZoneId, modificationProtectionReason, modificationProtectionStatus, payType, pricingCycle, resourceGroupId, slaveZoneId, tags, vpcId, vSwitchId);
        }
    }

    /**
     * An implementation for {@link LoadBalancerProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements LoadBalancerProps {
        private final java.lang.Object addressType;
        private final java.lang.Object autoPay;
        private final java.lang.Object bandwidth;
        private final java.lang.Object deletionProtection;
        private final java.lang.Object duration;
        private final java.lang.Object internetChargeType;
        private final java.lang.Object loadBalancerName;
        private final java.lang.Object loadBalancerSpec;
        private final java.lang.Object masterZoneId;
        private final java.lang.Object modificationProtectionReason;
        private final java.lang.Object modificationProtectionStatus;
        private final java.lang.Object payType;
        private final java.lang.Object pricingCycle;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object slaveZoneId;
        private final java.util.List<com.aliyun.ros.cdk.slb.RosLoadBalancer.TagsProperty> tags;
        private final java.lang.Object vpcId;
        private final java.lang.Object vSwitchId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.addressType = software.amazon.jsii.Kernel.get(this, "addressType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoPay = software.amazon.jsii.Kernel.get(this, "autoPay", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.bandwidth = software.amazon.jsii.Kernel.get(this, "bandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deletionProtection = software.amazon.jsii.Kernel.get(this, "deletionProtection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.duration = software.amazon.jsii.Kernel.get(this, "duration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.internetChargeType = software.amazon.jsii.Kernel.get(this, "internetChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.loadBalancerName = software.amazon.jsii.Kernel.get(this, "loadBalancerName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.loadBalancerSpec = software.amazon.jsii.Kernel.get(this, "loadBalancerSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.masterZoneId = software.amazon.jsii.Kernel.get(this, "masterZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.modificationProtectionReason = software.amazon.jsii.Kernel.get(this, "modificationProtectionReason", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.modificationProtectionStatus = software.amazon.jsii.Kernel.get(this, "modificationProtectionStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.payType = software.amazon.jsii.Kernel.get(this, "payType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.pricingCycle = software.amazon.jsii.Kernel.get(this, "pricingCycle", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.slaveZoneId = software.amazon.jsii.Kernel.get(this, "slaveZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.slb.RosLoadBalancer.TagsProperty.class)));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final java.lang.Object addressType, final java.lang.Object autoPay, final java.lang.Object bandwidth, final java.lang.Object deletionProtection, final java.lang.Object duration, final java.lang.Object internetChargeType, final java.lang.Object loadBalancerName, final java.lang.Object loadBalancerSpec, final java.lang.Object masterZoneId, final java.lang.Object modificationProtectionReason, final java.lang.Object modificationProtectionStatus, final java.lang.Object payType, final java.lang.Object pricingCycle, final java.lang.Object resourceGroupId, final java.lang.Object slaveZoneId, final java.util.List<? extends com.aliyun.ros.cdk.slb.RosLoadBalancer.TagsProperty> tags, final java.lang.Object vpcId, final java.lang.Object vSwitchId) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.addressType = addressType;
            this.autoPay = autoPay;
            this.bandwidth = bandwidth;
            this.deletionProtection = deletionProtection;
            this.duration = duration;
            this.internetChargeType = internetChargeType;
            this.loadBalancerName = loadBalancerName;
            this.loadBalancerSpec = loadBalancerSpec;
            this.masterZoneId = masterZoneId;
            this.modificationProtectionReason = modificationProtectionReason;
            this.modificationProtectionStatus = modificationProtectionStatus;
            this.payType = payType;
            this.pricingCycle = pricingCycle;
            this.resourceGroupId = resourceGroupId;
            this.slaveZoneId = slaveZoneId;
            this.tags = (java.util.List<com.aliyun.ros.cdk.slb.RosLoadBalancer.TagsProperty>)tags;
            this.vpcId = vpcId;
            this.vSwitchId = vSwitchId;
        }

        @Override
        public final java.lang.Object getAddressType() {
            return this.addressType;
        }

        @Override
        public final java.lang.Object getAutoPay() {
            return this.autoPay;
        }

        @Override
        public final java.lang.Object getBandwidth() {
            return this.bandwidth;
        }

        @Override
        public final java.lang.Object getDeletionProtection() {
            return this.deletionProtection;
        }

        @Override
        public final java.lang.Object getDuration() {
            return this.duration;
        }

        @Override
        public final java.lang.Object getInternetChargeType() {
            return this.internetChargeType;
        }

        @Override
        public final java.lang.Object getLoadBalancerName() {
            return this.loadBalancerName;
        }

        @Override
        public final java.lang.Object getLoadBalancerSpec() {
            return this.loadBalancerSpec;
        }

        @Override
        public final java.lang.Object getMasterZoneId() {
            return this.masterZoneId;
        }

        @Override
        public final java.lang.Object getModificationProtectionReason() {
            return this.modificationProtectionReason;
        }

        @Override
        public final java.lang.Object getModificationProtectionStatus() {
            return this.modificationProtectionStatus;
        }

        @Override
        public final java.lang.Object getPayType() {
            return this.payType;
        }

        @Override
        public final java.lang.Object getPricingCycle() {
            return this.pricingCycle;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getSlaveZoneId() {
            return this.slaveZoneId;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.slb.RosLoadBalancer.TagsProperty> getTags() {
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
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getAddressType() != null) {
                data.set("addressType", om.valueToTree(this.getAddressType()));
            }
            if (this.getAutoPay() != null) {
                data.set("autoPay", om.valueToTree(this.getAutoPay()));
            }
            if (this.getBandwidth() != null) {
                data.set("bandwidth", om.valueToTree(this.getBandwidth()));
            }
            if (this.getDeletionProtection() != null) {
                data.set("deletionProtection", om.valueToTree(this.getDeletionProtection()));
            }
            if (this.getDuration() != null) {
                data.set("duration", om.valueToTree(this.getDuration()));
            }
            if (this.getInternetChargeType() != null) {
                data.set("internetChargeType", om.valueToTree(this.getInternetChargeType()));
            }
            if (this.getLoadBalancerName() != null) {
                data.set("loadBalancerName", om.valueToTree(this.getLoadBalancerName()));
            }
            if (this.getLoadBalancerSpec() != null) {
                data.set("loadBalancerSpec", om.valueToTree(this.getLoadBalancerSpec()));
            }
            if (this.getMasterZoneId() != null) {
                data.set("masterZoneId", om.valueToTree(this.getMasterZoneId()));
            }
            if (this.getModificationProtectionReason() != null) {
                data.set("modificationProtectionReason", om.valueToTree(this.getModificationProtectionReason()));
            }
            if (this.getModificationProtectionStatus() != null) {
                data.set("modificationProtectionStatus", om.valueToTree(this.getModificationProtectionStatus()));
            }
            if (this.getPayType() != null) {
                data.set("payType", om.valueToTree(this.getPayType()));
            }
            if (this.getPricingCycle() != null) {
                data.set("pricingCycle", om.valueToTree(this.getPricingCycle()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getSlaveZoneId() != null) {
                data.set("slaveZoneId", om.valueToTree(this.getSlaveZoneId()));
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

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-slb.LoadBalancerProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            LoadBalancerProps.Jsii$Proxy that = (LoadBalancerProps.Jsii$Proxy) o;

            if (this.addressType != null ? !this.addressType.equals(that.addressType) : that.addressType != null) return false;
            if (this.autoPay != null ? !this.autoPay.equals(that.autoPay) : that.autoPay != null) return false;
            if (this.bandwidth != null ? !this.bandwidth.equals(that.bandwidth) : that.bandwidth != null) return false;
            if (this.deletionProtection != null ? !this.deletionProtection.equals(that.deletionProtection) : that.deletionProtection != null) return false;
            if (this.duration != null ? !this.duration.equals(that.duration) : that.duration != null) return false;
            if (this.internetChargeType != null ? !this.internetChargeType.equals(that.internetChargeType) : that.internetChargeType != null) return false;
            if (this.loadBalancerName != null ? !this.loadBalancerName.equals(that.loadBalancerName) : that.loadBalancerName != null) return false;
            if (this.loadBalancerSpec != null ? !this.loadBalancerSpec.equals(that.loadBalancerSpec) : that.loadBalancerSpec != null) return false;
            if (this.masterZoneId != null ? !this.masterZoneId.equals(that.masterZoneId) : that.masterZoneId != null) return false;
            if (this.modificationProtectionReason != null ? !this.modificationProtectionReason.equals(that.modificationProtectionReason) : that.modificationProtectionReason != null) return false;
            if (this.modificationProtectionStatus != null ? !this.modificationProtectionStatus.equals(that.modificationProtectionStatus) : that.modificationProtectionStatus != null) return false;
            if (this.payType != null ? !this.payType.equals(that.payType) : that.payType != null) return false;
            if (this.pricingCycle != null ? !this.pricingCycle.equals(that.pricingCycle) : that.pricingCycle != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.slaveZoneId != null ? !this.slaveZoneId.equals(that.slaveZoneId) : that.slaveZoneId != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            if (this.vpcId != null ? !this.vpcId.equals(that.vpcId) : that.vpcId != null) return false;
            return this.vSwitchId != null ? this.vSwitchId.equals(that.vSwitchId) : that.vSwitchId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.addressType != null ? this.addressType.hashCode() : 0;
            result = 31 * result + (this.autoPay != null ? this.autoPay.hashCode() : 0);
            result = 31 * result + (this.bandwidth != null ? this.bandwidth.hashCode() : 0);
            result = 31 * result + (this.deletionProtection != null ? this.deletionProtection.hashCode() : 0);
            result = 31 * result + (this.duration != null ? this.duration.hashCode() : 0);
            result = 31 * result + (this.internetChargeType != null ? this.internetChargeType.hashCode() : 0);
            result = 31 * result + (this.loadBalancerName != null ? this.loadBalancerName.hashCode() : 0);
            result = 31 * result + (this.loadBalancerSpec != null ? this.loadBalancerSpec.hashCode() : 0);
            result = 31 * result + (this.masterZoneId != null ? this.masterZoneId.hashCode() : 0);
            result = 31 * result + (this.modificationProtectionReason != null ? this.modificationProtectionReason.hashCode() : 0);
            result = 31 * result + (this.modificationProtectionStatus != null ? this.modificationProtectionStatus.hashCode() : 0);
            result = 31 * result + (this.payType != null ? this.payType.hashCode() : 0);
            result = 31 * result + (this.pricingCycle != null ? this.pricingCycle.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.slaveZoneId != null ? this.slaveZoneId.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
            result = 31 * result + (this.vSwitchId != null ? this.vSwitchId.hashCode() : 0);
            return result;
        }
    }
}
