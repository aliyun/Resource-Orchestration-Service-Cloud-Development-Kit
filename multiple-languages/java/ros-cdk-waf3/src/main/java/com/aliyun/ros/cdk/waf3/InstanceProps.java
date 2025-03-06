package com.aliyun.ros.cdk.waf3;

/**
 * Properties for defining a <code>Instance</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-waf3-instance
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:11.985Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.waf3.$Module.class, fqn = "@alicloud/ros-cdk-waf3.InstanceProps")
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
     * Property region: Web Application Firewall is available in the following regions: regions in the Chinese mainland, China (Hong Kong), Singapore (Singapore), Malaysia (Kuala Lumpur), US (Silicon Valley), Australia (Sydney), Germany (Frankfurt), India (Mumbai), Indonesia (Jakarta), UAE (Dubai), and Japan (Tokyo).
     * <p>
     * If your origin server is deployed within the Chinese mainland, select Chinese Mainland. If your origin server is deployed outside the Chinese mainland, select Outside Chinese mainland. Intelligent region selection is supported.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRegion();

    /**
     * Property additionalProtectionNodes: Each protection cluster has at least two protection nodes, and each node provides the protection capabilities of up to 5,000 QPS for HTTP requests or up to 3,000 QPS for HTTPS requests.
     * <p>
     * You can add protection nodes to increase protection capabilities.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAdditionalProtectionNodes() {
        return null;
    }

    /**
     * Property apiSecurity: The API security feature detects responses with specified characteristics to check whether data leaks occur.
     * <p>
     * After you enable the feature, WAF is authorized to perform related analysis on your data. If you select Chinese Mainland, service deployment and data processing are performed in the Chinese mainland.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getApiSecurity() {
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
     * Property botAppProtection: Bot management module for App protection.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBotAppProtection() {
        return null;
    }

    /**
     * Property botWebProtection: Bot management module for Web application protection.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBotWebProtection() {
        return null;
    }

    /**
     * Property domainsExtension: If the actual number of required access domain names exceeds the number of free domain names in the version, the number of domain names can be expanded according to this specification.Domain name counting does not differentiate between domain name types. The main domain name, sub-domain name, and pan-domain name are each counted as one domain name.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDomainsExtension() {
        return null;
    }

    /**
     * Property elasticQps: The burstable QPS (pay-as-you-go) feature is suitable for scenarios that involve short-term or sudden traffic surges, for example, during promotions.
     * <p>
     * In these scenarios, the traffic peak may exceed the sum of the maximum QPS that is supported by your WAF edition and the extended QPS. If you enable the feature, you are charged based on the amount of excess QPS resources that you use. This helps prevent your domain names from being added to a sandbox when QPS resources are excessively used and helps ensure service continuity.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getElasticQps() {
        return null;
    }

    /**
     * Property exclusiveIpAddress: Excluesive IP address number.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getExclusiveIpAddress() {
        return null;
    }

    /**
     * Property fraudDetection: You can enable this feature only after you enable the bot management module.
     * <p>
     * If abnormal phone numbers are used in logon or registration scenarios, anomaly tags are matched. Requests from the abnormal phone numbers are blocked or CAPTCHA verification is required. You are charged based on the number of times that anomaly tags are matched.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFraudDetection() {
        return null;
    }

    /**
     * Property ignoreExisting: Whether to ignore existing WAF3 instance False: ROS will perform a uniqueness check.If the WAF3 instance exists, an error will be reported when creating it. True: ROS will not check the uniqueness.If the WAF3 instance exists, the creation process will be ignored. If the WAF3 instance is not created by ROS, it will be ignored during update and delete stage.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIgnoreExisting() {
        return null;
    }

    /**
     * Property intelligentLoadBalancing: Intelligent load balancer for WAF instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIntelligentLoadBalancing() {
        return null;
    }

    /**
     * Property logService: Log service for WAF instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLogService() {
        return null;
    }

    /**
     * Property logStorage: Log storage capacity.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLogStorage() {
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
     * Property qpsExtension: Extended QPS.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getQpsExtension() {
        return null;
    }

    /**
     * Property trafficBillingProtectionThreshold: In pay-as-you-go WAF 3.0, the traffic billing protection feature is automatically enabled to prevent unexpected and unusually high bills that result from unpredictable factors such as HTTP flood attacks. A bill is not generated for an hour if the peak traffic exceeds the traffic billing protection threshold within the hour. Then, your WAF instance is added to a sandbox. If the peak traffic is lower than the traffic billing protection threshold the next hour, your WAF instance is removed from the sandbox.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTrafficBillingProtectionThreshold() {
        return null;
    }

    /**
     * Property wafVersion: The version of WAF3.0.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getWafVersion() {
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
        java.lang.Object region;
        java.lang.Object additionalProtectionNodes;
        java.lang.Object apiSecurity;
        java.lang.Object autoPay;
        java.lang.Object autoRenew;
        java.lang.Object botAppProtection;
        java.lang.Object botWebProtection;
        java.lang.Object domainsExtension;
        java.lang.Object elasticQps;
        java.lang.Object exclusiveIpAddress;
        java.lang.Object fraudDetection;
        java.lang.Object ignoreExisting;
        java.lang.Object intelligentLoadBalancing;
        java.lang.Object logService;
        java.lang.Object logStorage;
        java.lang.Object period;
        java.lang.Object periodUnit;
        java.lang.Object qpsExtension;
        java.lang.Object trafficBillingProtectionThreshold;
        java.lang.Object wafVersion;

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
         * Sets the value of {@link InstanceProps#getRegion}
         * @param region Property region: Web Application Firewall is available in the following regions: regions in the Chinese mainland, China (Hong Kong), Singapore (Singapore), Malaysia (Kuala Lumpur), US (Silicon Valley), Australia (Sydney), Germany (Frankfurt), India (Mumbai), Indonesia (Jakarta), UAE (Dubai), and Japan (Tokyo). This parameter is required.
         *               If your origin server is deployed within the Chinese mainland, select Chinese Mainland. If your origin server is deployed outside the Chinese mainland, select Outside Chinese mainland. Intelligent region selection is supported.
         * @return {@code this}
         */
        public Builder region(java.lang.String region) {
            this.region = region;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getRegion}
         * @param region Property region: Web Application Firewall is available in the following regions: regions in the Chinese mainland, China (Hong Kong), Singapore (Singapore), Malaysia (Kuala Lumpur), US (Silicon Valley), Australia (Sydney), Germany (Frankfurt), India (Mumbai), Indonesia (Jakarta), UAE (Dubai), and Japan (Tokyo). This parameter is required.
         *               If your origin server is deployed within the Chinese mainland, select Chinese Mainland. If your origin server is deployed outside the Chinese mainland, select Outside Chinese mainland. Intelligent region selection is supported.
         * @return {@code this}
         */
        public Builder region(com.aliyun.ros.cdk.core.IResolvable region) {
            this.region = region;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getAdditionalProtectionNodes}
         * @param additionalProtectionNodes Property additionalProtectionNodes: Each protection cluster has at least two protection nodes, and each node provides the protection capabilities of up to 5,000 QPS for HTTP requests or up to 3,000 QPS for HTTPS requests.
         *                                  You can add protection nodes to increase protection capabilities.
         * @return {@code this}
         */
        public Builder additionalProtectionNodes(java.lang.Number additionalProtectionNodes) {
            this.additionalProtectionNodes = additionalProtectionNodes;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getAdditionalProtectionNodes}
         * @param additionalProtectionNodes Property additionalProtectionNodes: Each protection cluster has at least two protection nodes, and each node provides the protection capabilities of up to 5,000 QPS for HTTP requests or up to 3,000 QPS for HTTPS requests.
         *                                  You can add protection nodes to increase protection capabilities.
         * @return {@code this}
         */
        public Builder additionalProtectionNodes(com.aliyun.ros.cdk.core.IResolvable additionalProtectionNodes) {
            this.additionalProtectionNodes = additionalProtectionNodes;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getApiSecurity}
         * @param apiSecurity Property apiSecurity: The API security feature detects responses with specified characteristics to check whether data leaks occur.
         *                    After you enable the feature, WAF is authorized to perform related analysis on your data. If you select Chinese Mainland, service deployment and data processing are performed in the Chinese mainland.
         * @return {@code this}
         */
        public Builder apiSecurity(java.lang.Boolean apiSecurity) {
            this.apiSecurity = apiSecurity;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getApiSecurity}
         * @param apiSecurity Property apiSecurity: The API security feature detects responses with specified characteristics to check whether data leaks occur.
         *                    After you enable the feature, WAF is authorized to perform related analysis on your data. If you select Chinese Mainland, service deployment and data processing are performed in the Chinese mainland.
         * @return {@code this}
         */
        public Builder apiSecurity(com.aliyun.ros.cdk.core.IResolvable apiSecurity) {
            this.apiSecurity = apiSecurity;
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
         * Sets the value of {@link InstanceProps#getBotAppProtection}
         * @param botAppProtection Property botAppProtection: Bot management module for App protection.
         * @return {@code this}
         */
        public Builder botAppProtection(java.lang.Boolean botAppProtection) {
            this.botAppProtection = botAppProtection;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getBotAppProtection}
         * @param botAppProtection Property botAppProtection: Bot management module for App protection.
         * @return {@code this}
         */
        public Builder botAppProtection(com.aliyun.ros.cdk.core.IResolvable botAppProtection) {
            this.botAppProtection = botAppProtection;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getBotWebProtection}
         * @param botWebProtection Property botWebProtection: Bot management module for Web application protection.
         * @return {@code this}
         */
        public Builder botWebProtection(java.lang.Boolean botWebProtection) {
            this.botWebProtection = botWebProtection;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getBotWebProtection}
         * @param botWebProtection Property botWebProtection: Bot management module for Web application protection.
         * @return {@code this}
         */
        public Builder botWebProtection(com.aliyun.ros.cdk.core.IResolvable botWebProtection) {
            this.botWebProtection = botWebProtection;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getDomainsExtension}
         * @param domainsExtension Property domainsExtension: If the actual number of required access domain names exceeds the number of free domain names in the version, the number of domain names can be expanded according to this specification.Domain name counting does not differentiate between domain name types. The main domain name, sub-domain name, and pan-domain name are each counted as one domain name.
         * @return {@code this}
         */
        public Builder domainsExtension(java.lang.Number domainsExtension) {
            this.domainsExtension = domainsExtension;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getDomainsExtension}
         * @param domainsExtension Property domainsExtension: If the actual number of required access domain names exceeds the number of free domain names in the version, the number of domain names can be expanded according to this specification.Domain name counting does not differentiate between domain name types. The main domain name, sub-domain name, and pan-domain name are each counted as one domain name.
         * @return {@code this}
         */
        public Builder domainsExtension(com.aliyun.ros.cdk.core.IResolvable domainsExtension) {
            this.domainsExtension = domainsExtension;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getElasticQps}
         * @param elasticQps Property elasticQps: The burstable QPS (pay-as-you-go) feature is suitable for scenarios that involve short-term or sudden traffic surges, for example, during promotions.
         *                   In these scenarios, the traffic peak may exceed the sum of the maximum QPS that is supported by your WAF edition and the extended QPS. If you enable the feature, you are charged based on the amount of excess QPS resources that you use. This helps prevent your domain names from being added to a sandbox when QPS resources are excessively used and helps ensure service continuity.
         * @return {@code this}
         */
        public Builder elasticQps(java.lang.Number elasticQps) {
            this.elasticQps = elasticQps;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getElasticQps}
         * @param elasticQps Property elasticQps: The burstable QPS (pay-as-you-go) feature is suitable for scenarios that involve short-term or sudden traffic surges, for example, during promotions.
         *                   In these scenarios, the traffic peak may exceed the sum of the maximum QPS that is supported by your WAF edition and the extended QPS. If you enable the feature, you are charged based on the amount of excess QPS resources that you use. This helps prevent your domain names from being added to a sandbox when QPS resources are excessively used and helps ensure service continuity.
         * @return {@code this}
         */
        public Builder elasticQps(com.aliyun.ros.cdk.core.IResolvable elasticQps) {
            this.elasticQps = elasticQps;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getExclusiveIpAddress}
         * @param exclusiveIpAddress Property exclusiveIpAddress: Excluesive IP address number.
         * @return {@code this}
         */
        public Builder exclusiveIpAddress(java.lang.Number exclusiveIpAddress) {
            this.exclusiveIpAddress = exclusiveIpAddress;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getExclusiveIpAddress}
         * @param exclusiveIpAddress Property exclusiveIpAddress: Excluesive IP address number.
         * @return {@code this}
         */
        public Builder exclusiveIpAddress(com.aliyun.ros.cdk.core.IResolvable exclusiveIpAddress) {
            this.exclusiveIpAddress = exclusiveIpAddress;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getFraudDetection}
         * @param fraudDetection Property fraudDetection: You can enable this feature only after you enable the bot management module.
         *                       If abnormal phone numbers are used in logon or registration scenarios, anomaly tags are matched. Requests from the abnormal phone numbers are blocked or CAPTCHA verification is required. You are charged based on the number of times that anomaly tags are matched.
         * @return {@code this}
         */
        public Builder fraudDetection(java.lang.Boolean fraudDetection) {
            this.fraudDetection = fraudDetection;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getFraudDetection}
         * @param fraudDetection Property fraudDetection: You can enable this feature only after you enable the bot management module.
         *                       If abnormal phone numbers are used in logon or registration scenarios, anomaly tags are matched. Requests from the abnormal phone numbers are blocked or CAPTCHA verification is required. You are charged based on the number of times that anomaly tags are matched.
         * @return {@code this}
         */
        public Builder fraudDetection(com.aliyun.ros.cdk.core.IResolvable fraudDetection) {
            this.fraudDetection = fraudDetection;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getIgnoreExisting}
         * @param ignoreExisting Property ignoreExisting: Whether to ignore existing WAF3 instance False: ROS will perform a uniqueness check.If the WAF3 instance exists, an error will be reported when creating it. True: ROS will not check the uniqueness.If the WAF3 instance exists, the creation process will be ignored. If the WAF3 instance is not created by ROS, it will be ignored during update and delete stage.
         * @return {@code this}
         */
        public Builder ignoreExisting(java.lang.Boolean ignoreExisting) {
            this.ignoreExisting = ignoreExisting;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getIgnoreExisting}
         * @param ignoreExisting Property ignoreExisting: Whether to ignore existing WAF3 instance False: ROS will perform a uniqueness check.If the WAF3 instance exists, an error will be reported when creating it. True: ROS will not check the uniqueness.If the WAF3 instance exists, the creation process will be ignored. If the WAF3 instance is not created by ROS, it will be ignored during update and delete stage.
         * @return {@code this}
         */
        public Builder ignoreExisting(com.aliyun.ros.cdk.core.IResolvable ignoreExisting) {
            this.ignoreExisting = ignoreExisting;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getIntelligentLoadBalancing}
         * @param intelligentLoadBalancing Property intelligentLoadBalancing: Intelligent load balancer for WAF instance.
         * @return {@code this}
         */
        public Builder intelligentLoadBalancing(java.lang.Boolean intelligentLoadBalancing) {
            this.intelligentLoadBalancing = intelligentLoadBalancing;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getIntelligentLoadBalancing}
         * @param intelligentLoadBalancing Property intelligentLoadBalancing: Intelligent load balancer for WAF instance.
         * @return {@code this}
         */
        public Builder intelligentLoadBalancing(com.aliyun.ros.cdk.core.IResolvable intelligentLoadBalancing) {
            this.intelligentLoadBalancing = intelligentLoadBalancing;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getLogService}
         * @param logService Property logService: Log service for WAF instance.
         * @return {@code this}
         */
        public Builder logService(java.lang.Boolean logService) {
            this.logService = logService;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getLogService}
         * @param logService Property logService: Log service for WAF instance.
         * @return {@code this}
         */
        public Builder logService(com.aliyun.ros.cdk.core.IResolvable logService) {
            this.logService = logService;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getLogStorage}
         * @param logStorage Property logStorage: Log storage capacity.
         * @return {@code this}
         */
        public Builder logStorage(java.lang.Number logStorage) {
            this.logStorage = logStorage;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getLogStorage}
         * @param logStorage Property logStorage: Log storage capacity.
         * @return {@code this}
         */
        public Builder logStorage(com.aliyun.ros.cdk.core.IResolvable logStorage) {
            this.logStorage = logStorage;
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
         * Sets the value of {@link InstanceProps#getQpsExtension}
         * @param qpsExtension Property qpsExtension: Extended QPS.
         * @return {@code this}
         */
        public Builder qpsExtension(java.lang.Number qpsExtension) {
            this.qpsExtension = qpsExtension;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getQpsExtension}
         * @param qpsExtension Property qpsExtension: Extended QPS.
         * @return {@code this}
         */
        public Builder qpsExtension(com.aliyun.ros.cdk.core.IResolvable qpsExtension) {
            this.qpsExtension = qpsExtension;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getTrafficBillingProtectionThreshold}
         * @param trafficBillingProtectionThreshold Property trafficBillingProtectionThreshold: In pay-as-you-go WAF 3.0, the traffic billing protection feature is automatically enabled to prevent unexpected and unusually high bills that result from unpredictable factors such as HTTP flood attacks. A bill is not generated for an hour if the peak traffic exceeds the traffic billing protection threshold within the hour. Then, your WAF instance is added to a sandbox. If the peak traffic is lower than the traffic billing protection threshold the next hour, your WAF instance is removed from the sandbox.
         * @return {@code this}
         */
        public Builder trafficBillingProtectionThreshold(java.lang.Number trafficBillingProtectionThreshold) {
            this.trafficBillingProtectionThreshold = trafficBillingProtectionThreshold;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getTrafficBillingProtectionThreshold}
         * @param trafficBillingProtectionThreshold Property trafficBillingProtectionThreshold: In pay-as-you-go WAF 3.0, the traffic billing protection feature is automatically enabled to prevent unexpected and unusually high bills that result from unpredictable factors such as HTTP flood attacks. A bill is not generated for an hour if the peak traffic exceeds the traffic billing protection threshold within the hour. Then, your WAF instance is added to a sandbox. If the peak traffic is lower than the traffic billing protection threshold the next hour, your WAF instance is removed from the sandbox.
         * @return {@code this}
         */
        public Builder trafficBillingProtectionThreshold(com.aliyun.ros.cdk.core.IResolvable trafficBillingProtectionThreshold) {
            this.trafficBillingProtectionThreshold = trafficBillingProtectionThreshold;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getWafVersion}
         * @param wafVersion Property wafVersion: The version of WAF3.0.
         * @return {@code this}
         */
        public Builder wafVersion(java.lang.String wafVersion) {
            this.wafVersion = wafVersion;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getWafVersion}
         * @param wafVersion Property wafVersion: The version of WAF3.0.
         * @return {@code this}
         */
        public Builder wafVersion(com.aliyun.ros.cdk.core.IResolvable wafVersion) {
            this.wafVersion = wafVersion;
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
        private final java.lang.Object region;
        private final java.lang.Object additionalProtectionNodes;
        private final java.lang.Object apiSecurity;
        private final java.lang.Object autoPay;
        private final java.lang.Object autoRenew;
        private final java.lang.Object botAppProtection;
        private final java.lang.Object botWebProtection;
        private final java.lang.Object domainsExtension;
        private final java.lang.Object elasticQps;
        private final java.lang.Object exclusiveIpAddress;
        private final java.lang.Object fraudDetection;
        private final java.lang.Object ignoreExisting;
        private final java.lang.Object intelligentLoadBalancing;
        private final java.lang.Object logService;
        private final java.lang.Object logStorage;
        private final java.lang.Object period;
        private final java.lang.Object periodUnit;
        private final java.lang.Object qpsExtension;
        private final java.lang.Object trafficBillingProtectionThreshold;
        private final java.lang.Object wafVersion;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.payType = software.amazon.jsii.Kernel.get(this, "payType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.region = software.amazon.jsii.Kernel.get(this, "region", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.additionalProtectionNodes = software.amazon.jsii.Kernel.get(this, "additionalProtectionNodes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.apiSecurity = software.amazon.jsii.Kernel.get(this, "apiSecurity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoPay = software.amazon.jsii.Kernel.get(this, "autoPay", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoRenew = software.amazon.jsii.Kernel.get(this, "autoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.botAppProtection = software.amazon.jsii.Kernel.get(this, "botAppProtection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.botWebProtection = software.amazon.jsii.Kernel.get(this, "botWebProtection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.domainsExtension = software.amazon.jsii.Kernel.get(this, "domainsExtension", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.elasticQps = software.amazon.jsii.Kernel.get(this, "elasticQps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.exclusiveIpAddress = software.amazon.jsii.Kernel.get(this, "exclusiveIpAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.fraudDetection = software.amazon.jsii.Kernel.get(this, "fraudDetection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ignoreExisting = software.amazon.jsii.Kernel.get(this, "ignoreExisting", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.intelligentLoadBalancing = software.amazon.jsii.Kernel.get(this, "intelligentLoadBalancing", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.logService = software.amazon.jsii.Kernel.get(this, "logService", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.logStorage = software.amazon.jsii.Kernel.get(this, "logStorage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.periodUnit = software.amazon.jsii.Kernel.get(this, "periodUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.qpsExtension = software.amazon.jsii.Kernel.get(this, "qpsExtension", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.trafficBillingProtectionThreshold = software.amazon.jsii.Kernel.get(this, "trafficBillingProtectionThreshold", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.wafVersion = software.amazon.jsii.Kernel.get(this, "wafVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.payType = java.util.Objects.requireNonNull(builder.payType, "payType is required");
            this.region = java.util.Objects.requireNonNull(builder.region, "region is required");
            this.additionalProtectionNodes = builder.additionalProtectionNodes;
            this.apiSecurity = builder.apiSecurity;
            this.autoPay = builder.autoPay;
            this.autoRenew = builder.autoRenew;
            this.botAppProtection = builder.botAppProtection;
            this.botWebProtection = builder.botWebProtection;
            this.domainsExtension = builder.domainsExtension;
            this.elasticQps = builder.elasticQps;
            this.exclusiveIpAddress = builder.exclusiveIpAddress;
            this.fraudDetection = builder.fraudDetection;
            this.ignoreExisting = builder.ignoreExisting;
            this.intelligentLoadBalancing = builder.intelligentLoadBalancing;
            this.logService = builder.logService;
            this.logStorage = builder.logStorage;
            this.period = builder.period;
            this.periodUnit = builder.periodUnit;
            this.qpsExtension = builder.qpsExtension;
            this.trafficBillingProtectionThreshold = builder.trafficBillingProtectionThreshold;
            this.wafVersion = builder.wafVersion;
        }

        @Override
        public final java.lang.Object getPayType() {
            return this.payType;
        }

        @Override
        public final java.lang.Object getRegion() {
            return this.region;
        }

        @Override
        public final java.lang.Object getAdditionalProtectionNodes() {
            return this.additionalProtectionNodes;
        }

        @Override
        public final java.lang.Object getApiSecurity() {
            return this.apiSecurity;
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
        public final java.lang.Object getBotAppProtection() {
            return this.botAppProtection;
        }

        @Override
        public final java.lang.Object getBotWebProtection() {
            return this.botWebProtection;
        }

        @Override
        public final java.lang.Object getDomainsExtension() {
            return this.domainsExtension;
        }

        @Override
        public final java.lang.Object getElasticQps() {
            return this.elasticQps;
        }

        @Override
        public final java.lang.Object getExclusiveIpAddress() {
            return this.exclusiveIpAddress;
        }

        @Override
        public final java.lang.Object getFraudDetection() {
            return this.fraudDetection;
        }

        @Override
        public final java.lang.Object getIgnoreExisting() {
            return this.ignoreExisting;
        }

        @Override
        public final java.lang.Object getIntelligentLoadBalancing() {
            return this.intelligentLoadBalancing;
        }

        @Override
        public final java.lang.Object getLogService() {
            return this.logService;
        }

        @Override
        public final java.lang.Object getLogStorage() {
            return this.logStorage;
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
        public final java.lang.Object getQpsExtension() {
            return this.qpsExtension;
        }

        @Override
        public final java.lang.Object getTrafficBillingProtectionThreshold() {
            return this.trafficBillingProtectionThreshold;
        }

        @Override
        public final java.lang.Object getWafVersion() {
            return this.wafVersion;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("payType", om.valueToTree(this.getPayType()));
            data.set("region", om.valueToTree(this.getRegion()));
            if (this.getAdditionalProtectionNodes() != null) {
                data.set("additionalProtectionNodes", om.valueToTree(this.getAdditionalProtectionNodes()));
            }
            if (this.getApiSecurity() != null) {
                data.set("apiSecurity", om.valueToTree(this.getApiSecurity()));
            }
            if (this.getAutoPay() != null) {
                data.set("autoPay", om.valueToTree(this.getAutoPay()));
            }
            if (this.getAutoRenew() != null) {
                data.set("autoRenew", om.valueToTree(this.getAutoRenew()));
            }
            if (this.getBotAppProtection() != null) {
                data.set("botAppProtection", om.valueToTree(this.getBotAppProtection()));
            }
            if (this.getBotWebProtection() != null) {
                data.set("botWebProtection", om.valueToTree(this.getBotWebProtection()));
            }
            if (this.getDomainsExtension() != null) {
                data.set("domainsExtension", om.valueToTree(this.getDomainsExtension()));
            }
            if (this.getElasticQps() != null) {
                data.set("elasticQps", om.valueToTree(this.getElasticQps()));
            }
            if (this.getExclusiveIpAddress() != null) {
                data.set("exclusiveIpAddress", om.valueToTree(this.getExclusiveIpAddress()));
            }
            if (this.getFraudDetection() != null) {
                data.set("fraudDetection", om.valueToTree(this.getFraudDetection()));
            }
            if (this.getIgnoreExisting() != null) {
                data.set("ignoreExisting", om.valueToTree(this.getIgnoreExisting()));
            }
            if (this.getIntelligentLoadBalancing() != null) {
                data.set("intelligentLoadBalancing", om.valueToTree(this.getIntelligentLoadBalancing()));
            }
            if (this.getLogService() != null) {
                data.set("logService", om.valueToTree(this.getLogService()));
            }
            if (this.getLogStorage() != null) {
                data.set("logStorage", om.valueToTree(this.getLogStorage()));
            }
            if (this.getPeriod() != null) {
                data.set("period", om.valueToTree(this.getPeriod()));
            }
            if (this.getPeriodUnit() != null) {
                data.set("periodUnit", om.valueToTree(this.getPeriodUnit()));
            }
            if (this.getQpsExtension() != null) {
                data.set("qpsExtension", om.valueToTree(this.getQpsExtension()));
            }
            if (this.getTrafficBillingProtectionThreshold() != null) {
                data.set("trafficBillingProtectionThreshold", om.valueToTree(this.getTrafficBillingProtectionThreshold()));
            }
            if (this.getWafVersion() != null) {
                data.set("wafVersion", om.valueToTree(this.getWafVersion()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-waf3.InstanceProps"));
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
            if (!region.equals(that.region)) return false;
            if (this.additionalProtectionNodes != null ? !this.additionalProtectionNodes.equals(that.additionalProtectionNodes) : that.additionalProtectionNodes != null) return false;
            if (this.apiSecurity != null ? !this.apiSecurity.equals(that.apiSecurity) : that.apiSecurity != null) return false;
            if (this.autoPay != null ? !this.autoPay.equals(that.autoPay) : that.autoPay != null) return false;
            if (this.autoRenew != null ? !this.autoRenew.equals(that.autoRenew) : that.autoRenew != null) return false;
            if (this.botAppProtection != null ? !this.botAppProtection.equals(that.botAppProtection) : that.botAppProtection != null) return false;
            if (this.botWebProtection != null ? !this.botWebProtection.equals(that.botWebProtection) : that.botWebProtection != null) return false;
            if (this.domainsExtension != null ? !this.domainsExtension.equals(that.domainsExtension) : that.domainsExtension != null) return false;
            if (this.elasticQps != null ? !this.elasticQps.equals(that.elasticQps) : that.elasticQps != null) return false;
            if (this.exclusiveIpAddress != null ? !this.exclusiveIpAddress.equals(that.exclusiveIpAddress) : that.exclusiveIpAddress != null) return false;
            if (this.fraudDetection != null ? !this.fraudDetection.equals(that.fraudDetection) : that.fraudDetection != null) return false;
            if (this.ignoreExisting != null ? !this.ignoreExisting.equals(that.ignoreExisting) : that.ignoreExisting != null) return false;
            if (this.intelligentLoadBalancing != null ? !this.intelligentLoadBalancing.equals(that.intelligentLoadBalancing) : that.intelligentLoadBalancing != null) return false;
            if (this.logService != null ? !this.logService.equals(that.logService) : that.logService != null) return false;
            if (this.logStorage != null ? !this.logStorage.equals(that.logStorage) : that.logStorage != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.periodUnit != null ? !this.periodUnit.equals(that.periodUnit) : that.periodUnit != null) return false;
            if (this.qpsExtension != null ? !this.qpsExtension.equals(that.qpsExtension) : that.qpsExtension != null) return false;
            if (this.trafficBillingProtectionThreshold != null ? !this.trafficBillingProtectionThreshold.equals(that.trafficBillingProtectionThreshold) : that.trafficBillingProtectionThreshold != null) return false;
            return this.wafVersion != null ? this.wafVersion.equals(that.wafVersion) : that.wafVersion == null;
        }

        @Override
        public final int hashCode() {
            int result = this.payType.hashCode();
            result = 31 * result + (this.region.hashCode());
            result = 31 * result + (this.additionalProtectionNodes != null ? this.additionalProtectionNodes.hashCode() : 0);
            result = 31 * result + (this.apiSecurity != null ? this.apiSecurity.hashCode() : 0);
            result = 31 * result + (this.autoPay != null ? this.autoPay.hashCode() : 0);
            result = 31 * result + (this.autoRenew != null ? this.autoRenew.hashCode() : 0);
            result = 31 * result + (this.botAppProtection != null ? this.botAppProtection.hashCode() : 0);
            result = 31 * result + (this.botWebProtection != null ? this.botWebProtection.hashCode() : 0);
            result = 31 * result + (this.domainsExtension != null ? this.domainsExtension.hashCode() : 0);
            result = 31 * result + (this.elasticQps != null ? this.elasticQps.hashCode() : 0);
            result = 31 * result + (this.exclusiveIpAddress != null ? this.exclusiveIpAddress.hashCode() : 0);
            result = 31 * result + (this.fraudDetection != null ? this.fraudDetection.hashCode() : 0);
            result = 31 * result + (this.ignoreExisting != null ? this.ignoreExisting.hashCode() : 0);
            result = 31 * result + (this.intelligentLoadBalancing != null ? this.intelligentLoadBalancing.hashCode() : 0);
            result = 31 * result + (this.logService != null ? this.logService.hashCode() : 0);
            result = 31 * result + (this.logStorage != null ? this.logStorage.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.periodUnit != null ? this.periodUnit.hashCode() : 0);
            result = 31 * result + (this.qpsExtension != null ? this.qpsExtension.hashCode() : 0);
            result = 31 * result + (this.trafficBillingProtectionThreshold != null ? this.trafficBillingProtectionThreshold.hashCode() : 0);
            result = 31 * result + (this.wafVersion != null ? this.wafVersion.hashCode() : 0);
            return result;
        }
    }
}
