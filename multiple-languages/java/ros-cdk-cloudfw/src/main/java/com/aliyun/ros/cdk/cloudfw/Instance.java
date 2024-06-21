package com.aliyun.ros.cdk.cloudfw;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::CLOUDFW::Instance</code>, which is used to create an instance of Cloud Firewall.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-21T05:59:07.890Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudfw.$Module.class, fqn = "@alicloud/ros-cdk-cloudfw.Instance")
public class Instance extends com.aliyun.ros.cdk.core.Resource {

    protected Instance(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Instance(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Instance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudfw.InstanceProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Instance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudfw.InstanceProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute InstanceId: Instance Id.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudfw.InstanceProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cloudfw.InstanceProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudfw.InstanceProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cloudfw.Instance}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cloudfw.Instance> {
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
        private final com.aliyun.ros.cdk.cloudfw.InstanceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cloudfw.InstanceProps.Builder();
        }

        /**
         * Property payType: The billing method of the firewall instance.
         * <p>
         * Valid values:
         * PayAsYouGo: pay-as-you-go
         * Subscription: subscription
         * <p>
         * @return {@code this}
         * @param payType Property payType: The billing method of the firewall instance. This parameter is required.
         */
        public Builder payType(final java.lang.String payType) {
            this.props.payType(payType);
            return this;
        }
        /**
         * Property payType: The billing method of the firewall instance.
         * <p>
         * Valid values:
         * PayAsYouGo: pay-as-you-go
         * Subscription: subscription
         * <p>
         * @return {@code this}
         * @param payType Property payType: The billing method of the firewall instance. This parameter is required.
         */
        public Builder payType(final com.aliyun.ros.cdk.core.IResolvable payType) {
            this.props.payType(payType);
            return this;
        }

        /**
         * Property accountNum: The number of multi-account management and control is the number of member accounts that you need to uniformly control.
         * <p>
         * @return {@code this}
         * @param accountNum Property accountNum: The number of multi-account management and control is the number of member accounts that you need to uniformly control. This parameter is required.
         */
        public Builder accountNum(final java.lang.Number accountNum) {
            this.props.accountNum(accountNum);
            return this;
        }
        /**
         * Property accountNum: The number of multi-account management and control is the number of member accounts that you need to uniformly control.
         * <p>
         * @return {@code this}
         * @param accountNum Property accountNum: The number of multi-account management and control is the number of member accounts that you need to uniformly control. This parameter is required.
         */
        public Builder accountNum(final com.aliyun.ros.cdk.core.IResolvable accountNum) {
            this.props.accountNum(accountNum);
            return this;
        }

        /**
         * Property aclExtension: When the default access control authorization specifications of your version are not enough, you can purchase global extension specifications of access control.
         * <p>
         * This extension supports shared occupancy with Internet and VPC boundary ACL specifications.
         * <p>
         * @return {@code this}
         * @param aclExtension Property aclExtension: When the default access control authorization specifications of your version are not enough, you can purchase global extension specifications of access control. This parameter is required.
         */
        public Builder aclExtension(final java.lang.Number aclExtension) {
            this.props.aclExtension(aclExtension);
            return this;
        }
        /**
         * Property aclExtension: When the default access control authorization specifications of your version are not enough, you can purchase global extension specifications of access control.
         * <p>
         * This extension supports shared occupancy with Internet and VPC boundary ACL specifications.
         * <p>
         * @return {@code this}
         * @param aclExtension Property aclExtension: When the default access control authorization specifications of your version are not enough, you can purchase global extension specifications of access control. This parameter is required.
         */
        public Builder aclExtension(final com.aliyun.ros.cdk.core.IResolvable aclExtension) {
            this.props.aclExtension(aclExtension);
            return this;
        }

        /**
         * Property autoPay: Whether to auto pay the bill.
         * <p>
         * @return {@code this}
         * @param autoPay Property autoPay: Whether to auto pay the bill. This parameter is required.
         */
        public Builder autoPay(final java.lang.Boolean autoPay) {
            this.props.autoPay(autoPay);
            return this;
        }
        /**
         * Property autoPay: Whether to auto pay the bill.
         * <p>
         * @return {@code this}
         * @param autoPay Property autoPay: Whether to auto pay the bill. This parameter is required.
         */
        public Builder autoPay(final com.aliyun.ros.cdk.core.IResolvable autoPay) {
            this.props.autoPay(autoPay);
            return this;
        }

        /**
         * Property autoRenew: Whether to auto renew the prepay instance.
         * <p>
         * @return {@code this}
         * @param autoRenew Property autoRenew: Whether to auto renew the prepay instance. This parameter is required.
         */
        public Builder autoRenew(final java.lang.Boolean autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }
        /**
         * Property autoRenew: Whether to auto renew the prepay instance.
         * <p>
         * @return {@code this}
         * @param autoRenew Property autoRenew: Whether to auto renew the prepay instance. This parameter is required.
         */
        public Builder autoRenew(final com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }

        /**
         * Property bandwidth: Public network processing capability.
         * <p>
         * Valid values: 10 to 15000. Unit: Mbps.
         * <p>
         * @return {@code this}
         * @param bandwidth Property bandwidth: Public network processing capability. This parameter is required.
         */
        public Builder bandwidth(final java.lang.Number bandwidth) {
            this.props.bandwidth(bandwidth);
            return this;
        }
        /**
         * Property bandwidth: Public network processing capability.
         * <p>
         * Valid values: 10 to 15000. Unit: Mbps.
         * <p>
         * @return {@code this}
         * @param bandwidth Property bandwidth: Public network processing capability. This parameter is required.
         */
        public Builder bandwidth(final com.aliyun.ros.cdk.core.IResolvable bandwidth) {
            this.props.bandwidth(bandwidth);
            return this;
        }

        /**
         * Property ignoreExisting: Whether to ignore existing cloud firewall instance False: ROS will perform a uniqueness check.If the cloud firewall instance exists, an error will be reported when creating it. True: ROS will not check the uniqueness.If the cloud firewall instance exists, the creation process will be ignored. If the cloud firewall instance is not created by ROS, it will be ignored during update and delete stage.
         * <p>
         * @return {@code this}
         * @param ignoreExisting Property ignoreExisting: Whether to ignore existing cloud firewall instance False: ROS will perform a uniqueness check.If the cloud firewall instance exists, an error will be reported when creating it. True: ROS will not check the uniqueness.If the cloud firewall instance exists, the creation process will be ignored. If the cloud firewall instance is not created by ROS, it will be ignored during update and delete stage. This parameter is required.
         */
        public Builder ignoreExisting(final java.lang.Boolean ignoreExisting) {
            this.props.ignoreExisting(ignoreExisting);
            return this;
        }
        /**
         * Property ignoreExisting: Whether to ignore existing cloud firewall instance False: ROS will perform a uniqueness check.If the cloud firewall instance exists, an error will be reported when creating it. True: ROS will not check the uniqueness.If the cloud firewall instance exists, the creation process will be ignored. If the cloud firewall instance is not created by ROS, it will be ignored during update and delete stage.
         * <p>
         * @return {@code this}
         * @param ignoreExisting Property ignoreExisting: Whether to ignore existing cloud firewall instance False: ROS will perform a uniqueness check.If the cloud firewall instance exists, an error will be reported when creating it. True: ROS will not check the uniqueness.If the cloud firewall instance exists, the creation process will be ignored. If the cloud firewall instance is not created by ROS, it will be ignored during update and delete stage. This parameter is required.
         */
        public Builder ignoreExisting(final com.aliyun.ros.cdk.core.IResolvable ignoreExisting) {
            this.props.ignoreExisting(ignoreExisting);
            return this;
        }

        /**
         * Property ipNum: The number of public IPs that can be protected.
         * <p>
         * Valid values: 20 to 4000.PremiumVersion: [20, 1000]
         * <p>
         * @return {@code this}
         * @param ipNum Property ipNum: The number of public IPs that can be protected. This parameter is required.
         */
        public Builder ipNum(final java.lang.Number ipNum) {
            this.props.ipNum(ipNum);
            return this;
        }
        /**
         * Property ipNum: The number of public IPs that can be protected.
         * <p>
         * Valid values: 20 to 4000.PremiumVersion: [20, 1000]
         * <p>
         * @return {@code this}
         * @param ipNum Property ipNum: The number of public IPs that can be protected. This parameter is required.
         */
        public Builder ipNum(final com.aliyun.ros.cdk.core.IResolvable ipNum) {
            this.props.ipNum(ipNum);
            return this;
        }

        /**
         * Property logAnalysis: The cloud firewall includes 7 days of free log storage and auditing by default.
         * <p>
         * If you need longer storage time or meet the requirements for equal protection, it is recommended to purchase the log analysis service.
         * <p>
         * @return {@code this}
         * @param logAnalysis Property logAnalysis: The cloud firewall includes 7 days of free log storage and auditing by default. This parameter is required.
         */
        public Builder logAnalysis(final java.lang.Boolean logAnalysis) {
            this.props.logAnalysis(logAnalysis);
            return this;
        }
        /**
         * Property logAnalysis: The cloud firewall includes 7 days of free log storage and auditing by default.
         * <p>
         * If you need longer storage time or meet the requirements for equal protection, it is recommended to purchase the log analysis service.
         * <p>
         * @return {@code this}
         * @param logAnalysis Property logAnalysis: The cloud firewall includes 7 days of free log storage and auditing by default. This parameter is required.
         */
        public Builder logAnalysis(final com.aliyun.ros.cdk.core.IResolvable logAnalysis) {
            this.props.logAnalysis(logAnalysis);
            return this;
        }

        /**
         * Property logStorage: Reference for purchasing storage capacity: 10M public network bandwidth, 6 months of log storage, recommended purchase of 1000GB log storage capacity.
         * <p>
         * @return {@code this}
         * @param logStorage Property logStorage: Reference for purchasing storage capacity: 10M public network bandwidth, 6 months of log storage, recommended purchase of 1000GB log storage capacity. This parameter is required.
         */
        public Builder logStorage(final java.lang.Number logStorage) {
            this.props.logStorage(logStorage);
            return this;
        }
        /**
         * Property logStorage: Reference for purchasing storage capacity: 10M public network bandwidth, 6 months of log storage, recommended purchase of 1000GB log storage capacity.
         * <p>
         * @return {@code this}
         * @param logStorage Property logStorage: Reference for purchasing storage capacity: 10M public network bandwidth, 6 months of log storage, recommended purchase of 1000GB log storage capacity. This parameter is required.
         */
        public Builder logStorage(final com.aliyun.ros.cdk.core.IResolvable logStorage) {
            this.props.logStorage(logStorage);
            return this;
        }

        /**
         * Property multiAccountManagement: Multiple accounts on the enterprise cloud can be managed centrally on the cloud firewall, including asset inventory, ACL policies, attack protection, log reports, etc.
         * <p>
         * After the member account is managed by the current account, there will be no need to purchase it separately.
         * <p>
         * @return {@code this}
         * @param multiAccountManagement Property multiAccountManagement: Multiple accounts on the enterprise cloud can be managed centrally on the cloud firewall, including asset inventory, ACL policies, attack protection, log reports, etc. This parameter is required.
         */
        public Builder multiAccountManagement(final java.lang.Boolean multiAccountManagement) {
            this.props.multiAccountManagement(multiAccountManagement);
            return this;
        }
        /**
         * Property multiAccountManagement: Multiple accounts on the enterprise cloud can be managed centrally on the cloud firewall, including asset inventory, ACL policies, attack protection, log reports, etc.
         * <p>
         * After the member account is managed by the current account, there will be no need to purchase it separately.
         * <p>
         * @return {@code this}
         * @param multiAccountManagement Property multiAccountManagement: Multiple accounts on the enterprise cloud can be managed centrally on the cloud firewall, including asset inventory, ACL policies, attack protection, log reports, etc. This parameter is required.
         */
        public Builder multiAccountManagement(final com.aliyun.ros.cdk.core.IResolvable multiAccountManagement) {
            this.props.multiAccountManagement(multiAccountManagement);
            return this;
        }

        /**
         * Property natBandwidth: The bandwidth of private network traffic processed by the NAT firewall.
         * <p>
         * The premium version does not include it by default, the enterprise version has 10Mbps by default, and the ultimate version has 20Mbps by default.
         * <p>
         * @return {@code this}
         * @param natBandwidth Property natBandwidth: The bandwidth of private network traffic processed by the NAT firewall. This parameter is required.
         */
        public Builder natBandwidth(final java.lang.Number natBandwidth) {
            this.props.natBandwidth(natBandwidth);
            return this;
        }
        /**
         * Property natBandwidth: The bandwidth of private network traffic processed by the NAT firewall.
         * <p>
         * The premium version does not include it by default, the enterprise version has 10Mbps by default, and the ultimate version has 20Mbps by default.
         * <p>
         * @return {@code this}
         * @param natBandwidth Property natBandwidth: The bandwidth of private network traffic processed by the NAT firewall. This parameter is required.
         */
        public Builder natBandwidth(final com.aliyun.ros.cdk.core.IResolvable natBandwidth) {
            this.props.natBandwidth(natBandwidth);
            return this;
        }

        /**
         * Property natFirewallNum: The number of NAT gateway instances of the NAT firewall you need to enable.
         * <p>
         * Each NAT gateway instance corresponds to one NAT firewall instance. The premium version does not include it by default, the enterprise version comes with 1 specification by default,and the ultimate version comes with 2 specifications by default.
         * <p>
         * @return {@code this}
         * @param natFirewallNum Property natFirewallNum: The number of NAT gateway instances of the NAT firewall you need to enable. This parameter is required.
         */
        public Builder natFirewallNum(final java.lang.Number natFirewallNum) {
            this.props.natFirewallNum(natFirewallNum);
            return this;
        }
        /**
         * Property natFirewallNum: The number of NAT gateway instances of the NAT firewall you need to enable.
         * <p>
         * Each NAT gateway instance corresponds to one NAT firewall instance. The premium version does not include it by default, the enterprise version comes with 1 specification by default,and the ultimate version comes with 2 specifications by default.
         * <p>
         * @return {@code this}
         * @param natFirewallNum Property natFirewallNum: The number of NAT gateway instances of the NAT firewall you need to enable. This parameter is required.
         */
        public Builder natFirewallNum(final com.aliyun.ros.cdk.core.IResolvable natFirewallNum) {
            this.props.natFirewallNum(natFirewallNum);
            return this;
        }

        /**
         * Property period: The subscription period of the firewallIf PeriodUnit is month, the valid range is 1, 3, 6 If periodUnit is year, the valid range is 1, 2, 3.
         * <p>
         * @return {@code this}
         * @param period Property period: The subscription period of the firewallIf PeriodUnit is month, the valid range is 1, 3, 6 If periodUnit is year, the valid range is 1, 2, 3. This parameter is required.
         */
        public Builder period(final java.lang.Number period) {
            this.props.period(period);
            return this;
        }
        /**
         * Property period: The subscription period of the firewallIf PeriodUnit is month, the valid range is 1, 3, 6 If periodUnit is year, the valid range is 1, 2, 3.
         * <p>
         * @return {@code this}
         * @param period Property period: The subscription period of the firewallIf PeriodUnit is month, the valid range is 1, 3, 6 If periodUnit is year, the valid range is 1, 2, 3. This parameter is required.
         */
        public Builder period(final com.aliyun.ros.cdk.core.IResolvable period) {
            this.props.period(period);
            return this;
        }

        /**
         * Property periodUnit: The unit of the subscription duration.
         * <p>
         * Valid values:
         * Month
         * Year
         * Default value: Month.
         * <p>
         * @return {@code this}
         * @param periodUnit Property periodUnit: The unit of the subscription duration. This parameter is required.
         */
        public Builder periodUnit(final java.lang.String periodUnit) {
            this.props.periodUnit(periodUnit);
            return this;
        }
        /**
         * Property periodUnit: The unit of the subscription duration.
         * <p>
         * Valid values:
         * Month
         * Year
         * Default value: Month.
         * <p>
         * @return {@code this}
         * @param periodUnit Property periodUnit: The unit of the subscription duration. This parameter is required.
         */
        public Builder periodUnit(final com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.props.periodUnit(periodUnit);
            return this;
        }

        /**
         * Property spec: The version of Cloud Firewall.
         * <p>
         * @return {@code this}
         * @param spec Property spec: The version of Cloud Firewall. This parameter is required.
         */
        public Builder spec(final java.lang.String spec) {
            this.props.spec(spec);
            return this;
        }
        /**
         * Property spec: The version of Cloud Firewall.
         * <p>
         * @return {@code this}
         * @param spec Property spec: The version of Cloud Firewall. This parameter is required.
         */
        public Builder spec(final com.aliyun.ros.cdk.core.IResolvable spec) {
            this.props.spec(spec);
            return this;
        }

        /**
         * Property vpcBandwidth: VPC network processing capability.
         * <p>
         * Valid values: 1000 to 15000. Unit: Mbps.
         * <p>
         * @return {@code this}
         * @param vpcBandwidth Property vpcBandwidth: VPC network processing capability. This parameter is required.
         */
        public Builder vpcBandwidth(final java.lang.Number vpcBandwidth) {
            this.props.vpcBandwidth(vpcBandwidth);
            return this;
        }
        /**
         * Property vpcBandwidth: VPC network processing capability.
         * <p>
         * Valid values: 1000 to 15000. Unit: Mbps.
         * <p>
         * @return {@code this}
         * @param vpcBandwidth Property vpcBandwidth: VPC network processing capability. This parameter is required.
         */
        public Builder vpcBandwidth(final com.aliyun.ros.cdk.core.IResolvable vpcBandwidth) {
            this.props.vpcBandwidth(vpcBandwidth);
            return this;
        }

        /**
         * Property vpcFirewallNum: The number of protected VPCs.
         * <p>
         * It will be ignored when spec = "premium_version". Valid values between 2 and 500.
         * <p>
         * @return {@code this}
         * @param vpcFirewallNum Property vpcFirewallNum: The number of protected VPCs. This parameter is required.
         */
        public Builder vpcFirewallNum(final java.lang.Number vpcFirewallNum) {
            this.props.vpcFirewallNum(vpcFirewallNum);
            return this;
        }
        /**
         * Property vpcFirewallNum: The number of protected VPCs.
         * <p>
         * It will be ignored when spec = "premium_version". Valid values between 2 and 500.
         * <p>
         * @return {@code this}
         * @param vpcFirewallNum Property vpcFirewallNum: The number of protected VPCs. This parameter is required.
         */
        public Builder vpcFirewallNum(final com.aliyun.ros.cdk.core.IResolvable vpcFirewallNum) {
            this.props.vpcFirewallNum(vpcFirewallNum);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cloudfw.Instance}.
         */
        @Override
        public com.aliyun.ros.cdk.cloudfw.Instance build() {
            return new com.aliyun.ros.cdk.cloudfw.Instance(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
