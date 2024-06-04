package com.aliyun.ros.cdk.waf3;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::WAF3::Instance</code>, which is used to create a Web Application Firewall (WAF) 3.0 instance.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-04T02:47:58.261Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.waf3.$Module.class, fqn = "@alicloud/ros-cdk-waf3.Instance")
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
    public Instance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.waf3.InstanceProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Instance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.waf3.InstanceProps props) {
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.waf3.InstanceProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.waf3.InstanceProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.waf3.InstanceProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.waf3.Instance}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.waf3.Instance> {
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
        private final com.aliyun.ros.cdk.waf3.InstanceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.waf3.InstanceProps.Builder();
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
         * Property region: Web Application Firewall is available in the following regions: regions in the Chinese mainland, China (Hong Kong), Singapore (Singapore), Malaysia (Kuala Lumpur), US (Silicon Valley), Australia (Sydney), Germany (Frankfurt), India (Mumbai), Indonesia (Jakarta), UAE (Dubai), and Japan (Tokyo).
         * <p>
         * If your origin server is deployed within the Chinese mainland, select Chinese Mainland. If your origin server is deployed outside the Chinese mainland, select Outside Chinese mainland. Intelligent region selection is supported.
         * <p>
         * @return {@code this}
         * @param region Property region: Web Application Firewall is available in the following regions: regions in the Chinese mainland, China (Hong Kong), Singapore (Singapore), Malaysia (Kuala Lumpur), US (Silicon Valley), Australia (Sydney), Germany (Frankfurt), India (Mumbai), Indonesia (Jakarta), UAE (Dubai), and Japan (Tokyo). This parameter is required.
         */
        public Builder region(final java.lang.String region) {
            this.props.region(region);
            return this;
        }
        /**
         * Property region: Web Application Firewall is available in the following regions: regions in the Chinese mainland, China (Hong Kong), Singapore (Singapore), Malaysia (Kuala Lumpur), US (Silicon Valley), Australia (Sydney), Germany (Frankfurt), India (Mumbai), Indonesia (Jakarta), UAE (Dubai), and Japan (Tokyo).
         * <p>
         * If your origin server is deployed within the Chinese mainland, select Chinese Mainland. If your origin server is deployed outside the Chinese mainland, select Outside Chinese mainland. Intelligent region selection is supported.
         * <p>
         * @return {@code this}
         * @param region Property region: Web Application Firewall is available in the following regions: regions in the Chinese mainland, China (Hong Kong), Singapore (Singapore), Malaysia (Kuala Lumpur), US (Silicon Valley), Australia (Sydney), Germany (Frankfurt), India (Mumbai), Indonesia (Jakarta), UAE (Dubai), and Japan (Tokyo). This parameter is required.
         */
        public Builder region(final com.aliyun.ros.cdk.core.IResolvable region) {
            this.props.region(region);
            return this;
        }

        /**
         * Property additionalProtectionNodes: Each protection cluster has at least two protection nodes, and each node provides the protection capabilities of up to 5,000 QPS for HTTP requests or up to 3,000 QPS for HTTPS requests.
         * <p>
         * You can add protection nodes to increase protection capabilities.
         * <p>
         * @return {@code this}
         * @param additionalProtectionNodes Property additionalProtectionNodes: Each protection cluster has at least two protection nodes, and each node provides the protection capabilities of up to 5,000 QPS for HTTP requests or up to 3,000 QPS for HTTPS requests. This parameter is required.
         */
        public Builder additionalProtectionNodes(final java.lang.Number additionalProtectionNodes) {
            this.props.additionalProtectionNodes(additionalProtectionNodes);
            return this;
        }
        /**
         * Property additionalProtectionNodes: Each protection cluster has at least two protection nodes, and each node provides the protection capabilities of up to 5,000 QPS for HTTP requests or up to 3,000 QPS for HTTPS requests.
         * <p>
         * You can add protection nodes to increase protection capabilities.
         * <p>
         * @return {@code this}
         * @param additionalProtectionNodes Property additionalProtectionNodes: Each protection cluster has at least two protection nodes, and each node provides the protection capabilities of up to 5,000 QPS for HTTP requests or up to 3,000 QPS for HTTPS requests. This parameter is required.
         */
        public Builder additionalProtectionNodes(final com.aliyun.ros.cdk.core.IResolvable additionalProtectionNodes) {
            this.props.additionalProtectionNodes(additionalProtectionNodes);
            return this;
        }

        /**
         * Property apiSecurity: The API security feature detects responses with specified characteristics to check whether data leaks occur.
         * <p>
         * After you enable the feature, WAF is authorized to perform related analysis on your data. If you select Chinese Mainland, service deployment and data processing are performed in the Chinese mainland.
         * <p>
         * @return {@code this}
         * @param apiSecurity Property apiSecurity: The API security feature detects responses with specified characteristics to check whether data leaks occur. This parameter is required.
         */
        public Builder apiSecurity(final java.lang.Boolean apiSecurity) {
            this.props.apiSecurity(apiSecurity);
            return this;
        }
        /**
         * Property apiSecurity: The API security feature detects responses with specified characteristics to check whether data leaks occur.
         * <p>
         * After you enable the feature, WAF is authorized to perform related analysis on your data. If you select Chinese Mainland, service deployment and data processing are performed in the Chinese mainland.
         * <p>
         * @return {@code this}
         * @param apiSecurity Property apiSecurity: The API security feature detects responses with specified characteristics to check whether data leaks occur. This parameter is required.
         */
        public Builder apiSecurity(final com.aliyun.ros.cdk.core.IResolvable apiSecurity) {
            this.props.apiSecurity(apiSecurity);
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
         * Property botAppProtection: Bot management module for App protection.
         * <p>
         * @return {@code this}
         * @param botAppProtection Property botAppProtection: Bot management module for App protection. This parameter is required.
         */
        public Builder botAppProtection(final java.lang.Boolean botAppProtection) {
            this.props.botAppProtection(botAppProtection);
            return this;
        }
        /**
         * Property botAppProtection: Bot management module for App protection.
         * <p>
         * @return {@code this}
         * @param botAppProtection Property botAppProtection: Bot management module for App protection. This parameter is required.
         */
        public Builder botAppProtection(final com.aliyun.ros.cdk.core.IResolvable botAppProtection) {
            this.props.botAppProtection(botAppProtection);
            return this;
        }

        /**
         * Property botWebProtection: Bot management module for Web application protection.
         * <p>
         * @return {@code this}
         * @param botWebProtection Property botWebProtection: Bot management module for Web application protection. This parameter is required.
         */
        public Builder botWebProtection(final java.lang.Boolean botWebProtection) {
            this.props.botWebProtection(botWebProtection);
            return this;
        }
        /**
         * Property botWebProtection: Bot management module for Web application protection.
         * <p>
         * @return {@code this}
         * @param botWebProtection Property botWebProtection: Bot management module for Web application protection. This parameter is required.
         */
        public Builder botWebProtection(final com.aliyun.ros.cdk.core.IResolvable botWebProtection) {
            this.props.botWebProtection(botWebProtection);
            return this;
        }

        /**
         * Property domainsExtension: If the actual number of required access domain names exceeds the number of free domain names in the version, the number of domain names can be expanded according to this specification.Domain name counting does not differentiate between domain name types. The main domain name, sub-domain name, and pan-domain name are each counted as one domain name.
         * <p>
         * @return {@code this}
         * @param domainsExtension Property domainsExtension: If the actual number of required access domain names exceeds the number of free domain names in the version, the number of domain names can be expanded according to this specification.Domain name counting does not differentiate between domain name types. The main domain name, sub-domain name, and pan-domain name are each counted as one domain name. This parameter is required.
         */
        public Builder domainsExtension(final java.lang.Number domainsExtension) {
            this.props.domainsExtension(domainsExtension);
            return this;
        }
        /**
         * Property domainsExtension: If the actual number of required access domain names exceeds the number of free domain names in the version, the number of domain names can be expanded according to this specification.Domain name counting does not differentiate between domain name types. The main domain name, sub-domain name, and pan-domain name are each counted as one domain name.
         * <p>
         * @return {@code this}
         * @param domainsExtension Property domainsExtension: If the actual number of required access domain names exceeds the number of free domain names in the version, the number of domain names can be expanded according to this specification.Domain name counting does not differentiate between domain name types. The main domain name, sub-domain name, and pan-domain name are each counted as one domain name. This parameter is required.
         */
        public Builder domainsExtension(final com.aliyun.ros.cdk.core.IResolvable domainsExtension) {
            this.props.domainsExtension(domainsExtension);
            return this;
        }

        /**
         * Property elasticQps: The burstable QPS (pay-as-you-go) feature is suitable for scenarios that involve short-term or sudden traffic surges, for example, during promotions.
         * <p>
         * In these scenarios, the traffic peak may exceed the sum of the maximum QPS that is supported by your WAF edition and the extended QPS. If you enable the feature, you are charged based on the amount of excess QPS resources that you use. This helps prevent your domain names from being added to a sandbox when QPS resources are excessively used and helps ensure service continuity.
         * <p>
         * @return {@code this}
         * @param elasticQps Property elasticQps: The burstable QPS (pay-as-you-go) feature is suitable for scenarios that involve short-term or sudden traffic surges, for example, during promotions. This parameter is required.
         */
        public Builder elasticQps(final java.lang.Number elasticQps) {
            this.props.elasticQps(elasticQps);
            return this;
        }
        /**
         * Property elasticQps: The burstable QPS (pay-as-you-go) feature is suitable for scenarios that involve short-term or sudden traffic surges, for example, during promotions.
         * <p>
         * In these scenarios, the traffic peak may exceed the sum of the maximum QPS that is supported by your WAF edition and the extended QPS. If you enable the feature, you are charged based on the amount of excess QPS resources that you use. This helps prevent your domain names from being added to a sandbox when QPS resources are excessively used and helps ensure service continuity.
         * <p>
         * @return {@code this}
         * @param elasticQps Property elasticQps: The burstable QPS (pay-as-you-go) feature is suitable for scenarios that involve short-term or sudden traffic surges, for example, during promotions. This parameter is required.
         */
        public Builder elasticQps(final com.aliyun.ros.cdk.core.IResolvable elasticQps) {
            this.props.elasticQps(elasticQps);
            return this;
        }

        /**
         * Property exclusiveIpAddress: Excluesive IP address number.
         * <p>
         * @return {@code this}
         * @param exclusiveIpAddress Property exclusiveIpAddress: Excluesive IP address number. This parameter is required.
         */
        public Builder exclusiveIpAddress(final java.lang.Number exclusiveIpAddress) {
            this.props.exclusiveIpAddress(exclusiveIpAddress);
            return this;
        }
        /**
         * Property exclusiveIpAddress: Excluesive IP address number.
         * <p>
         * @return {@code this}
         * @param exclusiveIpAddress Property exclusiveIpAddress: Excluesive IP address number. This parameter is required.
         */
        public Builder exclusiveIpAddress(final com.aliyun.ros.cdk.core.IResolvable exclusiveIpAddress) {
            this.props.exclusiveIpAddress(exclusiveIpAddress);
            return this;
        }

        /**
         * Property fraudDetection: You can enable this feature only after you enable the bot management module.
         * <p>
         * If abnormal phone numbers are used in logon or registration scenarios, anomaly tags are matched. Requests from the abnormal phone numbers are blocked or CAPTCHA verification is required. You are charged based on the number of times that anomaly tags are matched.
         * <p>
         * @return {@code this}
         * @param fraudDetection Property fraudDetection: You can enable this feature only after you enable the bot management module. This parameter is required.
         */
        public Builder fraudDetection(final java.lang.Boolean fraudDetection) {
            this.props.fraudDetection(fraudDetection);
            return this;
        }
        /**
         * Property fraudDetection: You can enable this feature only after you enable the bot management module.
         * <p>
         * If abnormal phone numbers are used in logon or registration scenarios, anomaly tags are matched. Requests from the abnormal phone numbers are blocked or CAPTCHA verification is required. You are charged based on the number of times that anomaly tags are matched.
         * <p>
         * @return {@code this}
         * @param fraudDetection Property fraudDetection: You can enable this feature only after you enable the bot management module. This parameter is required.
         */
        public Builder fraudDetection(final com.aliyun.ros.cdk.core.IResolvable fraudDetection) {
            this.props.fraudDetection(fraudDetection);
            return this;
        }

        /**
         * Property ignoreExisting: Whether to ignore existing WAF3 instance False: ROS will perform a uniqueness check.If the WAF3 instance exists, an error will be reported when creating it. True: ROS will not check the uniqueness.If the WAF3 instance exists, the creation process will be ignored. If the WAF3 instance is not created by ROS, it will be ignored during update and delete stage.
         * <p>
         * @return {@code this}
         * @param ignoreExisting Property ignoreExisting: Whether to ignore existing WAF3 instance False: ROS will perform a uniqueness check.If the WAF3 instance exists, an error will be reported when creating it. True: ROS will not check the uniqueness.If the WAF3 instance exists, the creation process will be ignored. If the WAF3 instance is not created by ROS, it will be ignored during update and delete stage. This parameter is required.
         */
        public Builder ignoreExisting(final java.lang.Boolean ignoreExisting) {
            this.props.ignoreExisting(ignoreExisting);
            return this;
        }
        /**
         * Property ignoreExisting: Whether to ignore existing WAF3 instance False: ROS will perform a uniqueness check.If the WAF3 instance exists, an error will be reported when creating it. True: ROS will not check the uniqueness.If the WAF3 instance exists, the creation process will be ignored. If the WAF3 instance is not created by ROS, it will be ignored during update and delete stage.
         * <p>
         * @return {@code this}
         * @param ignoreExisting Property ignoreExisting: Whether to ignore existing WAF3 instance False: ROS will perform a uniqueness check.If the WAF3 instance exists, an error will be reported when creating it. True: ROS will not check the uniqueness.If the WAF3 instance exists, the creation process will be ignored. If the WAF3 instance is not created by ROS, it will be ignored during update and delete stage. This parameter is required.
         */
        public Builder ignoreExisting(final com.aliyun.ros.cdk.core.IResolvable ignoreExisting) {
            this.props.ignoreExisting(ignoreExisting);
            return this;
        }

        /**
         * Property intelligentLoadBalancing: Intelligent load balancer for WAF instance.
         * <p>
         * @return {@code this}
         * @param intelligentLoadBalancing Property intelligentLoadBalancing: Intelligent load balancer for WAF instance. This parameter is required.
         */
        public Builder intelligentLoadBalancing(final java.lang.Boolean intelligentLoadBalancing) {
            this.props.intelligentLoadBalancing(intelligentLoadBalancing);
            return this;
        }
        /**
         * Property intelligentLoadBalancing: Intelligent load balancer for WAF instance.
         * <p>
         * @return {@code this}
         * @param intelligentLoadBalancing Property intelligentLoadBalancing: Intelligent load balancer for WAF instance. This parameter is required.
         */
        public Builder intelligentLoadBalancing(final com.aliyun.ros.cdk.core.IResolvable intelligentLoadBalancing) {
            this.props.intelligentLoadBalancing(intelligentLoadBalancing);
            return this;
        }

        /**
         * Property logService: Log service for WAF instance.
         * <p>
         * @return {@code this}
         * @param logService Property logService: Log service for WAF instance. This parameter is required.
         */
        public Builder logService(final java.lang.Boolean logService) {
            this.props.logService(logService);
            return this;
        }
        /**
         * Property logService: Log service for WAF instance.
         * <p>
         * @return {@code this}
         * @param logService Property logService: Log service for WAF instance. This parameter is required.
         */
        public Builder logService(final com.aliyun.ros.cdk.core.IResolvable logService) {
            this.props.logService(logService);
            return this;
        }

        /**
         * Property logStorage: Log storage capacity.
         * <p>
         * @return {@code this}
         * @param logStorage Property logStorage: Log storage capacity. This parameter is required.
         */
        public Builder logStorage(final java.lang.Number logStorage) {
            this.props.logStorage(logStorage);
            return this;
        }
        /**
         * Property logStorage: Log storage capacity.
         * <p>
         * @return {@code this}
         * @param logStorage Property logStorage: Log storage capacity. This parameter is required.
         */
        public Builder logStorage(final com.aliyun.ros.cdk.core.IResolvable logStorage) {
            this.props.logStorage(logStorage);
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
         * Property qpsExtension: Extended QPS.
         * <p>
         * @return {@code this}
         * @param qpsExtension Property qpsExtension: Extended QPS. This parameter is required.
         */
        public Builder qpsExtension(final java.lang.Number qpsExtension) {
            this.props.qpsExtension(qpsExtension);
            return this;
        }
        /**
         * Property qpsExtension: Extended QPS.
         * <p>
         * @return {@code this}
         * @param qpsExtension Property qpsExtension: Extended QPS. This parameter is required.
         */
        public Builder qpsExtension(final com.aliyun.ros.cdk.core.IResolvable qpsExtension) {
            this.props.qpsExtension(qpsExtension);
            return this;
        }

        /**
         * Property trafficBillingProtectionThreshold: In pay-as-you-go WAF 3.0, the traffic billing protection feature is automatically enabled to prevent unexpected and unusually high bills that result from unpredictable factors such as HTTP flood attacks. A bill is not generated for an hour if the peak traffic exceeds the traffic billing protection threshold within the hour. Then, your WAF instance is added to a sandbox. If the peak traffic is lower than the traffic billing protection threshold the next hour, your WAF instance is removed from the sandbox.
         * <p>
         * @return {@code this}
         * @param trafficBillingProtectionThreshold Property trafficBillingProtectionThreshold: In pay-as-you-go WAF 3.0, the traffic billing protection feature is automatically enabled to prevent unexpected and unusually high bills that result from unpredictable factors such as HTTP flood attacks. A bill is not generated for an hour if the peak traffic exceeds the traffic billing protection threshold within the hour. Then, your WAF instance is added to a sandbox. If the peak traffic is lower than the traffic billing protection threshold the next hour, your WAF instance is removed from the sandbox. This parameter is required.
         */
        public Builder trafficBillingProtectionThreshold(final java.lang.Number trafficBillingProtectionThreshold) {
            this.props.trafficBillingProtectionThreshold(trafficBillingProtectionThreshold);
            return this;
        }
        /**
         * Property trafficBillingProtectionThreshold: In pay-as-you-go WAF 3.0, the traffic billing protection feature is automatically enabled to prevent unexpected and unusually high bills that result from unpredictable factors such as HTTP flood attacks. A bill is not generated for an hour if the peak traffic exceeds the traffic billing protection threshold within the hour. Then, your WAF instance is added to a sandbox. If the peak traffic is lower than the traffic billing protection threshold the next hour, your WAF instance is removed from the sandbox.
         * <p>
         * @return {@code this}
         * @param trafficBillingProtectionThreshold Property trafficBillingProtectionThreshold: In pay-as-you-go WAF 3.0, the traffic billing protection feature is automatically enabled to prevent unexpected and unusually high bills that result from unpredictable factors such as HTTP flood attacks. A bill is not generated for an hour if the peak traffic exceeds the traffic billing protection threshold within the hour. Then, your WAF instance is added to a sandbox. If the peak traffic is lower than the traffic billing protection threshold the next hour, your WAF instance is removed from the sandbox. This parameter is required.
         */
        public Builder trafficBillingProtectionThreshold(final com.aliyun.ros.cdk.core.IResolvable trafficBillingProtectionThreshold) {
            this.props.trafficBillingProtectionThreshold(trafficBillingProtectionThreshold);
            return this;
        }

        /**
         * Property wafVersion: The version of WAF3.0.
         * <p>
         * @return {@code this}
         * @param wafVersion Property wafVersion: The version of WAF3.0. This parameter is required.
         */
        public Builder wafVersion(final java.lang.String wafVersion) {
            this.props.wafVersion(wafVersion);
            return this;
        }
        /**
         * Property wafVersion: The version of WAF3.0.
         * <p>
         * @return {@code this}
         * @param wafVersion Property wafVersion: The version of WAF3.0. This parameter is required.
         */
        public Builder wafVersion(final com.aliyun.ros.cdk.core.IResolvable wafVersion) {
            this.props.wafVersion(wafVersion);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.waf3.Instance}.
         */
        @Override
        public com.aliyun.ros.cdk.waf3.Instance build() {
            return new com.aliyun.ros.cdk.waf3.Instance(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
