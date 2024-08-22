package com.aliyun.ros.cdk.cloudfw;

/**
 * Properties for defining a <code>Instance</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-instance
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-22T08:56:18.381Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudfw.$Module.class, fqn = "@alicloud/ros-cdk-cloudfw.InstanceProps")
@software.amazon.jsii.Jsii.Proxy(InstanceProps.Jsii$Proxy.class)
public interface InstanceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property payType: The billing method of the firewall instance.
     * <p>
     * Valid values:
     * PayAsYouGo: pay-as-you-go
     * Subscription: subscription
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPayType();

    /**
     * Property accountNum: The number of multi-account management and control is the number of member accounts that you need to uniformly control.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAccountNum() {
        return null;
    }

    /**
     * Property aclExtension: When the default access control authorization specifications of your version are not enough, you can purchase global extension specifications of access control.
     * <p>
     * This extension supports shared occupancy with Internet and VPC boundary ACL specifications.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAclExtension() {
        return null;
    }

    /**
     * Property autoPay: Whether to auto pay the bill.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoPay() {
        return null;
    }

    /**
     * Property autoRenew: Whether to auto renew the prepay instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenew() {
        return null;
    }

    /**
     * Property bandwidth: Public network processing capability.
     * <p>
     * Valid values: 10 to 15000. Unit: Mbps.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBandwidth() {
        return null;
    }

    /**
     * Property ignoreExisting: Whether to ignore existing cloud firewall instance False: ROS will perform a uniqueness check.If the cloud firewall instance exists, an error will be reported when creating it. True: ROS will not check the uniqueness.If the cloud firewall instance exists, the creation process will be ignored. If the cloud firewall instance is not created by ROS, it will be ignored during update and delete stage.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIgnoreExisting() {
        return null;
    }

    /**
     * Property ipNum: The number of public IPs that can be protected.
     * <p>
     * Valid values: 20 to 4000.PremiumVersion: [20, 1000]
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpNum() {
        return null;
    }

    /**
     * Property logAnalysis: The cloud firewall includes 7 days of free log storage and auditing by default.
     * <p>
     * If you need longer storage time or meet the requirements for equal protection, it is recommended to purchase the log analysis service.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLogAnalysis() {
        return null;
    }

    /**
     * Property logStorage: Reference for purchasing storage capacity: 10M public network bandwidth, 6 months of log storage, recommended purchase of 1000GB log storage capacity.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLogStorage() {
        return null;
    }

    /**
     * Property multiAccountManagement: Multiple accounts on the enterprise cloud can be managed centrally on the cloud firewall, including asset inventory, ACL policies, attack protection, log reports, etc.
     * <p>
     * After the member account is managed by the current account, there will be no need to purchase it separately.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMultiAccountManagement() {
        return null;
    }

    /**
     * Property natBandwidth: The bandwidth of private network traffic processed by the NAT firewall.
     * <p>
     * The premium version does not include it by default, the enterprise version has 10Mbps by default, and the ultimate version has 20Mbps by default.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNatBandwidth() {
        return null;
    }

    /**
     * Property natFirewallNum: The number of NAT gateway instances of the NAT firewall you need to enable.
     * <p>
     * Each NAT gateway instance corresponds to one NAT firewall instance. The premium version does not include it by default, the enterprise version comes with 1 specification by default,and the ultimate version comes with 2 specifications by default.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNatFirewallNum() {
        return null;
    }

    /**
     * Property period: The subscription period of the firewallIf PeriodUnit is month, the valid range is 1, 3, 6 If periodUnit is year, the valid range is 1, 2, 3.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
        return null;
    }

    /**
     * Property periodUnit: The unit of the subscription duration.
     * <p>
     * Valid values:
     * Month
     * Year
     * Default value: Month.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriodUnit() {
        return null;
    }

    /**
     * Property spec: The version of Cloud Firewall.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSpec() {
        return null;
    }

    /**
     * Property vpcBandwidth: VPC network processing capability.
     * <p>
     * Valid values: 1000 to 15000. Unit: Mbps.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVpcBandwidth() {
        return null;
    }

    /**
     * Property vpcFirewallNum: The number of protected VPCs.
     * <p>
     * It will be ignored when spec = "premium_version". Valid values between 2 and 500.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVpcFirewallNum() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link InstanceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link InstanceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<InstanceProps> {
        java.lang.Object payType;
        java.lang.Object accountNum;
        java.lang.Object aclExtension;
        java.lang.Object autoPay;
        java.lang.Object autoRenew;
        java.lang.Object bandwidth;
        java.lang.Object ignoreExisting;
        java.lang.Object ipNum;
        java.lang.Object logAnalysis;
        java.lang.Object logStorage;
        java.lang.Object multiAccountManagement;
        java.lang.Object natBandwidth;
        java.lang.Object natFirewallNum;
        java.lang.Object period;
        java.lang.Object periodUnit;
        java.lang.Object spec;
        java.lang.Object vpcBandwidth;
        java.lang.Object vpcFirewallNum;

        /**
         * Sets the value of {@link InstanceProps#getPayType}
         * @param payType Property payType: The billing method of the firewall instance. This parameter is required.
         *                Valid values:
         *                PayAsYouGo: pay-as-you-go
         *                Subscription: subscription
         * @return {@code this}
         */
        public Builder payType(java.lang.String payType) {
            this.payType = payType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getPayType}
         * @param payType Property payType: The billing method of the firewall instance. This parameter is required.
         *                Valid values:
         *                PayAsYouGo: pay-as-you-go
         *                Subscription: subscription
         * @return {@code this}
         */
        public Builder payType(com.aliyun.ros.cdk.core.IResolvable payType) {
            this.payType = payType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getAccountNum}
         * @param accountNum Property accountNum: The number of multi-account management and control is the number of member accounts that you need to uniformly control.
         * @return {@code this}
         */
        public Builder accountNum(java.lang.Number accountNum) {
            this.accountNum = accountNum;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getAccountNum}
         * @param accountNum Property accountNum: The number of multi-account management and control is the number of member accounts that you need to uniformly control.
         * @return {@code this}
         */
        public Builder accountNum(com.aliyun.ros.cdk.core.IResolvable accountNum) {
            this.accountNum = accountNum;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getAclExtension}
         * @param aclExtension Property aclExtension: When the default access control authorization specifications of your version are not enough, you can purchase global extension specifications of access control.
         *                     This extension supports shared occupancy with Internet and VPC boundary ACL specifications.
         * @return {@code this}
         */
        public Builder aclExtension(java.lang.Number aclExtension) {
            this.aclExtension = aclExtension;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getAclExtension}
         * @param aclExtension Property aclExtension: When the default access control authorization specifications of your version are not enough, you can purchase global extension specifications of access control.
         *                     This extension supports shared occupancy with Internet and VPC boundary ACL specifications.
         * @return {@code this}
         */
        public Builder aclExtension(com.aliyun.ros.cdk.core.IResolvable aclExtension) {
            this.aclExtension = aclExtension;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getAutoPay}
         * @param autoPay Property autoPay: Whether to auto pay the bill.
         * @return {@code this}
         */
        public Builder autoPay(java.lang.Boolean autoPay) {
            this.autoPay = autoPay;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getAutoPay}
         * @param autoPay Property autoPay: Whether to auto pay the bill.
         * @return {@code this}
         */
        public Builder autoPay(com.aliyun.ros.cdk.core.IResolvable autoPay) {
            this.autoPay = autoPay;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getAutoRenew}
         * @param autoRenew Property autoRenew: Whether to auto renew the prepay instance.
         * @return {@code this}
         */
        public Builder autoRenew(java.lang.Boolean autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getAutoRenew}
         * @param autoRenew Property autoRenew: Whether to auto renew the prepay instance.
         * @return {@code this}
         */
        public Builder autoRenew(com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getBandwidth}
         * @param bandwidth Property bandwidth: Public network processing capability.
         *                  Valid values: 10 to 15000. Unit: Mbps.
         * @return {@code this}
         */
        public Builder bandwidth(java.lang.Number bandwidth) {
            this.bandwidth = bandwidth;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getBandwidth}
         * @param bandwidth Property bandwidth: Public network processing capability.
         *                  Valid values: 10 to 15000. Unit: Mbps.
         * @return {@code this}
         */
        public Builder bandwidth(com.aliyun.ros.cdk.core.IResolvable bandwidth) {
            this.bandwidth = bandwidth;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getIgnoreExisting}
         * @param ignoreExisting Property ignoreExisting: Whether to ignore existing cloud firewall instance False: ROS will perform a uniqueness check.If the cloud firewall instance exists, an error will be reported when creating it. True: ROS will not check the uniqueness.If the cloud firewall instance exists, the creation process will be ignored. If the cloud firewall instance is not created by ROS, it will be ignored during update and delete stage.
         * @return {@code this}
         */
        public Builder ignoreExisting(java.lang.Boolean ignoreExisting) {
            this.ignoreExisting = ignoreExisting;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getIgnoreExisting}
         * @param ignoreExisting Property ignoreExisting: Whether to ignore existing cloud firewall instance False: ROS will perform a uniqueness check.If the cloud firewall instance exists, an error will be reported when creating it. True: ROS will not check the uniqueness.If the cloud firewall instance exists, the creation process will be ignored. If the cloud firewall instance is not created by ROS, it will be ignored during update and delete stage.
         * @return {@code this}
         */
        public Builder ignoreExisting(com.aliyun.ros.cdk.core.IResolvable ignoreExisting) {
            this.ignoreExisting = ignoreExisting;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getIpNum}
         * @param ipNum Property ipNum: The number of public IPs that can be protected.
         *              Valid values: 20 to 4000.PremiumVersion: [20, 1000]
         * @return {@code this}
         */
        public Builder ipNum(java.lang.Number ipNum) {
            this.ipNum = ipNum;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getIpNum}
         * @param ipNum Property ipNum: The number of public IPs that can be protected.
         *              Valid values: 20 to 4000.PremiumVersion: [20, 1000]
         * @return {@code this}
         */
        public Builder ipNum(com.aliyun.ros.cdk.core.IResolvable ipNum) {
            this.ipNum = ipNum;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getLogAnalysis}
         * @param logAnalysis Property logAnalysis: The cloud firewall includes 7 days of free log storage and auditing by default.
         *                    If you need longer storage time or meet the requirements for equal protection, it is recommended to purchase the log analysis service.
         * @return {@code this}
         */
        public Builder logAnalysis(java.lang.Boolean logAnalysis) {
            this.logAnalysis = logAnalysis;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getLogAnalysis}
         * @param logAnalysis Property logAnalysis: The cloud firewall includes 7 days of free log storage and auditing by default.
         *                    If you need longer storage time or meet the requirements for equal protection, it is recommended to purchase the log analysis service.
         * @return {@code this}
         */
        public Builder logAnalysis(com.aliyun.ros.cdk.core.IResolvable logAnalysis) {
            this.logAnalysis = logAnalysis;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getLogStorage}
         * @param logStorage Property logStorage: Reference for purchasing storage capacity: 10M public network bandwidth, 6 months of log storage, recommended purchase of 1000GB log storage capacity.
         * @return {@code this}
         */
        public Builder logStorage(java.lang.Number logStorage) {
            this.logStorage = logStorage;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getLogStorage}
         * @param logStorage Property logStorage: Reference for purchasing storage capacity: 10M public network bandwidth, 6 months of log storage, recommended purchase of 1000GB log storage capacity.
         * @return {@code this}
         */
        public Builder logStorage(com.aliyun.ros.cdk.core.IResolvable logStorage) {
            this.logStorage = logStorage;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getMultiAccountManagement}
         * @param multiAccountManagement Property multiAccountManagement: Multiple accounts on the enterprise cloud can be managed centrally on the cloud firewall, including asset inventory, ACL policies, attack protection, log reports, etc.
         *                               After the member account is managed by the current account, there will be no need to purchase it separately.
         * @return {@code this}
         */
        public Builder multiAccountManagement(java.lang.Boolean multiAccountManagement) {
            this.multiAccountManagement = multiAccountManagement;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getMultiAccountManagement}
         * @param multiAccountManagement Property multiAccountManagement: Multiple accounts on the enterprise cloud can be managed centrally on the cloud firewall, including asset inventory, ACL policies, attack protection, log reports, etc.
         *                               After the member account is managed by the current account, there will be no need to purchase it separately.
         * @return {@code this}
         */
        public Builder multiAccountManagement(com.aliyun.ros.cdk.core.IResolvable multiAccountManagement) {
            this.multiAccountManagement = multiAccountManagement;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getNatBandwidth}
         * @param natBandwidth Property natBandwidth: The bandwidth of private network traffic processed by the NAT firewall.
         *                     The premium version does not include it by default, the enterprise version has 10Mbps by default, and the ultimate version has 20Mbps by default.
         * @return {@code this}
         */
        public Builder natBandwidth(java.lang.Number natBandwidth) {
            this.natBandwidth = natBandwidth;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getNatBandwidth}
         * @param natBandwidth Property natBandwidth: The bandwidth of private network traffic processed by the NAT firewall.
         *                     The premium version does not include it by default, the enterprise version has 10Mbps by default, and the ultimate version has 20Mbps by default.
         * @return {@code this}
         */
        public Builder natBandwidth(com.aliyun.ros.cdk.core.IResolvable natBandwidth) {
            this.natBandwidth = natBandwidth;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getNatFirewallNum}
         * @param natFirewallNum Property natFirewallNum: The number of NAT gateway instances of the NAT firewall you need to enable.
         *                       Each NAT gateway instance corresponds to one NAT firewall instance. The premium version does not include it by default, the enterprise version comes with 1 specification by default,and the ultimate version comes with 2 specifications by default.
         * @return {@code this}
         */
        public Builder natFirewallNum(java.lang.Number natFirewallNum) {
            this.natFirewallNum = natFirewallNum;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getNatFirewallNum}
         * @param natFirewallNum Property natFirewallNum: The number of NAT gateway instances of the NAT firewall you need to enable.
         *                       Each NAT gateway instance corresponds to one NAT firewall instance. The premium version does not include it by default, the enterprise version comes with 1 specification by default,and the ultimate version comes with 2 specifications by default.
         * @return {@code this}
         */
        public Builder natFirewallNum(com.aliyun.ros.cdk.core.IResolvable natFirewallNum) {
            this.natFirewallNum = natFirewallNum;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getPeriod}
         * @param period Property period: The subscription period of the firewallIf PeriodUnit is month, the valid range is 1, 3, 6 If periodUnit is year, the valid range is 1, 2, 3.
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getPeriod}
         * @param period Property period: The subscription period of the firewallIf PeriodUnit is month, the valid range is 1, 3, 6 If periodUnit is year, the valid range is 1, 2, 3.
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getPeriodUnit}
         * @param periodUnit Property periodUnit: The unit of the subscription duration.
         *                   Valid values:
         *                   Month
         *                   Year
         *                   Default value: Month.
         * @return {@code this}
         */
        public Builder periodUnit(java.lang.String periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getPeriodUnit}
         * @param periodUnit Property periodUnit: The unit of the subscription duration.
         *                   Valid values:
         *                   Month
         *                   Year
         *                   Default value: Month.
         * @return {@code this}
         */
        public Builder periodUnit(com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getSpec}
         * @param spec Property spec: The version of Cloud Firewall.
         * @return {@code this}
         */
        public Builder spec(java.lang.String spec) {
            this.spec = spec;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getSpec}
         * @param spec Property spec: The version of Cloud Firewall.
         * @return {@code this}
         */
        public Builder spec(com.aliyun.ros.cdk.core.IResolvable spec) {
            this.spec = spec;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getVpcBandwidth}
         * @param vpcBandwidth Property vpcBandwidth: VPC network processing capability.
         *                     Valid values: 1000 to 15000. Unit: Mbps.
         * @return {@code this}
         */
        public Builder vpcBandwidth(java.lang.Number vpcBandwidth) {
            this.vpcBandwidth = vpcBandwidth;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getVpcBandwidth}
         * @param vpcBandwidth Property vpcBandwidth: VPC network processing capability.
         *                     Valid values: 1000 to 15000. Unit: Mbps.
         * @return {@code this}
         */
        public Builder vpcBandwidth(com.aliyun.ros.cdk.core.IResolvable vpcBandwidth) {
            this.vpcBandwidth = vpcBandwidth;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getVpcFirewallNum}
         * @param vpcFirewallNum Property vpcFirewallNum: The number of protected VPCs.
         *                       It will be ignored when spec = "premium_version". Valid values between 2 and 500.
         * @return {@code this}
         */
        public Builder vpcFirewallNum(java.lang.Number vpcFirewallNum) {
            this.vpcFirewallNum = vpcFirewallNum;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getVpcFirewallNum}
         * @param vpcFirewallNum Property vpcFirewallNum: The number of protected VPCs.
         *                       It will be ignored when spec = "premium_version". Valid values between 2 and 500.
         * @return {@code this}
         */
        public Builder vpcFirewallNum(com.aliyun.ros.cdk.core.IResolvable vpcFirewallNum) {
            this.vpcFirewallNum = vpcFirewallNum;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link InstanceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public InstanceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link InstanceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements InstanceProps {
        private final java.lang.Object payType;
        private final java.lang.Object accountNum;
        private final java.lang.Object aclExtension;
        private final java.lang.Object autoPay;
        private final java.lang.Object autoRenew;
        private final java.lang.Object bandwidth;
        private final java.lang.Object ignoreExisting;
        private final java.lang.Object ipNum;
        private final java.lang.Object logAnalysis;
        private final java.lang.Object logStorage;
        private final java.lang.Object multiAccountManagement;
        private final java.lang.Object natBandwidth;
        private final java.lang.Object natFirewallNum;
        private final java.lang.Object period;
        private final java.lang.Object periodUnit;
        private final java.lang.Object spec;
        private final java.lang.Object vpcBandwidth;
        private final java.lang.Object vpcFirewallNum;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.payType = software.amazon.jsii.Kernel.get(this, "payType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.accountNum = software.amazon.jsii.Kernel.get(this, "accountNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.aclExtension = software.amazon.jsii.Kernel.get(this, "aclExtension", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoPay = software.amazon.jsii.Kernel.get(this, "autoPay", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoRenew = software.amazon.jsii.Kernel.get(this, "autoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.bandwidth = software.amazon.jsii.Kernel.get(this, "bandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ignoreExisting = software.amazon.jsii.Kernel.get(this, "ignoreExisting", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipNum = software.amazon.jsii.Kernel.get(this, "ipNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.logAnalysis = software.amazon.jsii.Kernel.get(this, "logAnalysis", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.logStorage = software.amazon.jsii.Kernel.get(this, "logStorage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.multiAccountManagement = software.amazon.jsii.Kernel.get(this, "multiAccountManagement", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.natBandwidth = software.amazon.jsii.Kernel.get(this, "natBandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.natFirewallNum = software.amazon.jsii.Kernel.get(this, "natFirewallNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.periodUnit = software.amazon.jsii.Kernel.get(this, "periodUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.spec = software.amazon.jsii.Kernel.get(this, "spec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcBandwidth = software.amazon.jsii.Kernel.get(this, "vpcBandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcFirewallNum = software.amazon.jsii.Kernel.get(this, "vpcFirewallNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.payType = java.util.Objects.requireNonNull(builder.payType, "payType is required");
            this.accountNum = builder.accountNum;
            this.aclExtension = builder.aclExtension;
            this.autoPay = builder.autoPay;
            this.autoRenew = builder.autoRenew;
            this.bandwidth = builder.bandwidth;
            this.ignoreExisting = builder.ignoreExisting;
            this.ipNum = builder.ipNum;
            this.logAnalysis = builder.logAnalysis;
            this.logStorage = builder.logStorage;
            this.multiAccountManagement = builder.multiAccountManagement;
            this.natBandwidth = builder.natBandwidth;
            this.natFirewallNum = builder.natFirewallNum;
            this.period = builder.period;
            this.periodUnit = builder.periodUnit;
            this.spec = builder.spec;
            this.vpcBandwidth = builder.vpcBandwidth;
            this.vpcFirewallNum = builder.vpcFirewallNum;
        }

        @Override
        public final java.lang.Object getPayType() {
            return this.payType;
        }

        @Override
        public final java.lang.Object getAccountNum() {
            return this.accountNum;
        }

        @Override
        public final java.lang.Object getAclExtension() {
            return this.aclExtension;
        }

        @Override
        public final java.lang.Object getAutoPay() {
            return this.autoPay;
        }

        @Override
        public final java.lang.Object getAutoRenew() {
            return this.autoRenew;
        }

        @Override
        public final java.lang.Object getBandwidth() {
            return this.bandwidth;
        }

        @Override
        public final java.lang.Object getIgnoreExisting() {
            return this.ignoreExisting;
        }

        @Override
        public final java.lang.Object getIpNum() {
            return this.ipNum;
        }

        @Override
        public final java.lang.Object getLogAnalysis() {
            return this.logAnalysis;
        }

        @Override
        public final java.lang.Object getLogStorage() {
            return this.logStorage;
        }

        @Override
        public final java.lang.Object getMultiAccountManagement() {
            return this.multiAccountManagement;
        }

        @Override
        public final java.lang.Object getNatBandwidth() {
            return this.natBandwidth;
        }

        @Override
        public final java.lang.Object getNatFirewallNum() {
            return this.natFirewallNum;
        }

        @Override
        public final java.lang.Object getPeriod() {
            return this.period;
        }

        @Override
        public final java.lang.Object getPeriodUnit() {
            return this.periodUnit;
        }

        @Override
        public final java.lang.Object getSpec() {
            return this.spec;
        }

        @Override
        public final java.lang.Object getVpcBandwidth() {
            return this.vpcBandwidth;
        }

        @Override
        public final java.lang.Object getVpcFirewallNum() {
            return this.vpcFirewallNum;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("payType", om.valueToTree(this.getPayType()));
            if (this.getAccountNum() != null) {
                data.set("accountNum", om.valueToTree(this.getAccountNum()));
            }
            if (this.getAclExtension() != null) {
                data.set("aclExtension", om.valueToTree(this.getAclExtension()));
            }
            if (this.getAutoPay() != null) {
                data.set("autoPay", om.valueToTree(this.getAutoPay()));
            }
            if (this.getAutoRenew() != null) {
                data.set("autoRenew", om.valueToTree(this.getAutoRenew()));
            }
            if (this.getBandwidth() != null) {
                data.set("bandwidth", om.valueToTree(this.getBandwidth()));
            }
            if (this.getIgnoreExisting() != null) {
                data.set("ignoreExisting", om.valueToTree(this.getIgnoreExisting()));
            }
            if (this.getIpNum() != null) {
                data.set("ipNum", om.valueToTree(this.getIpNum()));
            }
            if (this.getLogAnalysis() != null) {
                data.set("logAnalysis", om.valueToTree(this.getLogAnalysis()));
            }
            if (this.getLogStorage() != null) {
                data.set("logStorage", om.valueToTree(this.getLogStorage()));
            }
            if (this.getMultiAccountManagement() != null) {
                data.set("multiAccountManagement", om.valueToTree(this.getMultiAccountManagement()));
            }
            if (this.getNatBandwidth() != null) {
                data.set("natBandwidth", om.valueToTree(this.getNatBandwidth()));
            }
            if (this.getNatFirewallNum() != null) {
                data.set("natFirewallNum", om.valueToTree(this.getNatFirewallNum()));
            }
            if (this.getPeriod() != null) {
                data.set("period", om.valueToTree(this.getPeriod()));
            }
            if (this.getPeriodUnit() != null) {
                data.set("periodUnit", om.valueToTree(this.getPeriodUnit()));
            }
            if (this.getSpec() != null) {
                data.set("spec", om.valueToTree(this.getSpec()));
            }
            if (this.getVpcBandwidth() != null) {
                data.set("vpcBandwidth", om.valueToTree(this.getVpcBandwidth()));
            }
            if (this.getVpcFirewallNum() != null) {
                data.set("vpcFirewallNum", om.valueToTree(this.getVpcFirewallNum()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cloudfw.InstanceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            InstanceProps.Jsii$Proxy that = (InstanceProps.Jsii$Proxy) o;

            if (!payType.equals(that.payType)) return false;
            if (this.accountNum != null ? !this.accountNum.equals(that.accountNum) : that.accountNum != null) return false;
            if (this.aclExtension != null ? !this.aclExtension.equals(that.aclExtension) : that.aclExtension != null) return false;
            if (this.autoPay != null ? !this.autoPay.equals(that.autoPay) : that.autoPay != null) return false;
            if (this.autoRenew != null ? !this.autoRenew.equals(that.autoRenew) : that.autoRenew != null) return false;
            if (this.bandwidth != null ? !this.bandwidth.equals(that.bandwidth) : that.bandwidth != null) return false;
            if (this.ignoreExisting != null ? !this.ignoreExisting.equals(that.ignoreExisting) : that.ignoreExisting != null) return false;
            if (this.ipNum != null ? !this.ipNum.equals(that.ipNum) : that.ipNum != null) return false;
            if (this.logAnalysis != null ? !this.logAnalysis.equals(that.logAnalysis) : that.logAnalysis != null) return false;
            if (this.logStorage != null ? !this.logStorage.equals(that.logStorage) : that.logStorage != null) return false;
            if (this.multiAccountManagement != null ? !this.multiAccountManagement.equals(that.multiAccountManagement) : that.multiAccountManagement != null) return false;
            if (this.natBandwidth != null ? !this.natBandwidth.equals(that.natBandwidth) : that.natBandwidth != null) return false;
            if (this.natFirewallNum != null ? !this.natFirewallNum.equals(that.natFirewallNum) : that.natFirewallNum != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.periodUnit != null ? !this.periodUnit.equals(that.periodUnit) : that.periodUnit != null) return false;
            if (this.spec != null ? !this.spec.equals(that.spec) : that.spec != null) return false;
            if (this.vpcBandwidth != null ? !this.vpcBandwidth.equals(that.vpcBandwidth) : that.vpcBandwidth != null) return false;
            return this.vpcFirewallNum != null ? this.vpcFirewallNum.equals(that.vpcFirewallNum) : that.vpcFirewallNum == null;
        }

        @Override
        public final int hashCode() {
            int result = this.payType.hashCode();
            result = 31 * result + (this.accountNum != null ? this.accountNum.hashCode() : 0);
            result = 31 * result + (this.aclExtension != null ? this.aclExtension.hashCode() : 0);
            result = 31 * result + (this.autoPay != null ? this.autoPay.hashCode() : 0);
            result = 31 * result + (this.autoRenew != null ? this.autoRenew.hashCode() : 0);
            result = 31 * result + (this.bandwidth != null ? this.bandwidth.hashCode() : 0);
            result = 31 * result + (this.ignoreExisting != null ? this.ignoreExisting.hashCode() : 0);
            result = 31 * result + (this.ipNum != null ? this.ipNum.hashCode() : 0);
            result = 31 * result + (this.logAnalysis != null ? this.logAnalysis.hashCode() : 0);
            result = 31 * result + (this.logStorage != null ? this.logStorage.hashCode() : 0);
            result = 31 * result + (this.multiAccountManagement != null ? this.multiAccountManagement.hashCode() : 0);
            result = 31 * result + (this.natBandwidth != null ? this.natBandwidth.hashCode() : 0);
            result = 31 * result + (this.natFirewallNum != null ? this.natFirewallNum.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.periodUnit != null ? this.periodUnit.hashCode() : 0);
            result = 31 * result + (this.spec != null ? this.spec.hashCode() : 0);
            result = 31 * result + (this.vpcBandwidth != null ? this.vpcBandwidth.hashCode() : 0);
            result = 31 * result + (this.vpcFirewallNum != null ? this.vpcFirewallNum.hashCode() : 0);
            return result;
        }
    }
}
