package com.aliyun.ros.cdk.sas;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::SAS::Instance</code>, which is used to purchase Security Center.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-12T02:20:30.664Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sas.$Module.class, fqn = "@alicloud/ros-cdk-sas.Instance")
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
    public Instance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sas.InstanceProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Instance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sas.InstanceProps props) {
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sas.InstanceProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.sas.InstanceProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sas.InstanceProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.sas.Instance}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.sas.Instance> {
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
        private final com.aliyun.ros.cdk.sas.InstanceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.sas.InstanceProps.Builder();
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
         * <p>
         * @return {@code this}
         * @param periodUnit Property periodUnit: The unit of the subscription duration. This parameter is required.
         */
        public Builder periodUnit(final com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.props.periodUnit(periodUnit);
            return this;
        }

        /**
         * Property antiRansomware: Security Center provides a comprehensive anti-ransomware solution to protect your business.
         * <p>
         * We recommend that you configure a data protection capacity of 50GB for each server.
         * <p>
         * @return {@code this}
         * @param antiRansomware Property antiRansomware: Security Center provides a comprehensive anti-ransomware solution to protect your business. This parameter is required.
         */
        public Builder antiRansomware(final java.lang.Number antiRansomware) {
            this.props.antiRansomware(antiRansomware);
            return this;
        }
        /**
         * Property antiRansomware: Security Center provides a comprehensive anti-ransomware solution to protect your business.
         * <p>
         * We recommend that you configure a data protection capacity of 50GB for each server.
         * <p>
         * @return {@code this}
         * @param antiRansomware Property antiRansomware: Security Center provides a comprehensive anti-ransomware solution to protect your business. This parameter is required.
         */
        public Builder antiRansomware(final com.aliyun.ros.cdk.core.IResolvable antiRansomware) {
            this.props.antiRansomware(antiRansomware);
            return this;
        }

        /**
         * Property autoPay: Whether to auto pay the bill.Default: True.
         * <p>
         * @return {@code this}
         * @param autoPay Property autoPay: Whether to auto pay the bill.Default: True. This parameter is required.
         */
        public Builder autoPay(final java.lang.Boolean autoPay) {
            this.props.autoPay(autoPay);
            return this;
        }
        /**
         * Property autoPay: Whether to auto pay the bill.Default: True.
         * <p>
         * @return {@code this}
         * @param autoPay Property autoPay: Whether to auto pay the bill.Default: True. This parameter is required.
         */
        public Builder autoPay(final com.aliyun.ros.cdk.core.IResolvable autoPay) {
            this.props.autoPay(autoPay);
            return this;
        }

        /**
         * Property autoRenew: Whether to auto renew the prepay instance.Default: False.
         * <p>
         * @return {@code this}
         * @param autoRenew Property autoRenew: Whether to auto renew the prepay instance.Default: False. This parameter is required.
         */
        public Builder autoRenew(final java.lang.Boolean autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }
        /**
         * Property autoRenew: Whether to auto renew the prepay instance.Default: False.
         * <p>
         * @return {@code this}
         * @param autoRenew Property autoRenew: Whether to auto renew the prepay instance.Default: False. This parameter is required.
         */
        public Builder autoRenew(final com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }

        /**
         * Property cloudHoneypot: The cloud honeypot feature can capture attacks in a timely and efficient manner.
         * <p>
         * You can use the feature to protect your core assets and detect attacks in attack and defense scenarios.
         * <p>
         * @return {@code this}
         * @param cloudHoneypot Property cloudHoneypot: The cloud honeypot feature can capture attacks in a timely and efficient manner. This parameter is required.
         */
        public Builder cloudHoneypot(final java.lang.Boolean cloudHoneypot) {
            this.props.cloudHoneypot(cloudHoneypot);
            return this;
        }
        /**
         * Property cloudHoneypot: The cloud honeypot feature can capture attacks in a timely and efficient manner.
         * <p>
         * You can use the feature to protect your core assets and detect attacks in attack and defense scenarios.
         * <p>
         * @return {@code this}
         * @param cloudHoneypot Property cloudHoneypot: The cloud honeypot feature can capture attacks in a timely and efficient manner. This parameter is required.
         */
        public Builder cloudHoneypot(final com.aliyun.ros.cdk.core.IResolvable cloudHoneypot) {
            this.props.cloudHoneypot(cloudHoneypot);
            return this;
        }

        /**
         * Property configurationAssessment: The configuration assessment feature detects configuration errors and security risks on cloud services from the following dimensions: identity and permission management, security risks in Alibaba Cloud services, and compliance risks.This ensures the security of the running environment of your cloud services.
         * <p>
         * @return {@code this}
         * @param configurationAssessment Property configurationAssessment: The configuration assessment feature detects configuration errors and security risks on cloud services from the following dimensions: identity and permission management, security risks in Alibaba Cloud services, and compliance risks.This ensures the security of the running environment of your cloud services. This parameter is required.
         */
        public Builder configurationAssessment(final java.lang.Boolean configurationAssessment) {
            this.props.configurationAssessment(configurationAssessment);
            return this;
        }
        /**
         * Property configurationAssessment: The configuration assessment feature detects configuration errors and security risks on cloud services from the following dimensions: identity and permission management, security risks in Alibaba Cloud services, and compliance risks.This ensures the security of the running environment of your cloud services.
         * <p>
         * @return {@code this}
         * @param configurationAssessment Property configurationAssessment: The configuration assessment feature detects configuration errors and security risks on cloud services from the following dimensions: identity and permission management, security risks in Alibaba Cloud services, and compliance risks.This ensures the security of the running environment of your cloud services. This parameter is required.
         */
        public Builder configurationAssessment(final com.aliyun.ros.cdk.core.IResolvable configurationAssessment) {
            this.props.configurationAssessment(configurationAssessment);
            return this;
        }

        /**
         * Property containerImageScan: Security Center provides the container image scan feature to protect containers.
         * <p>
         * Security Center can detect CVEs, application vulnerabilities, viruses, and malicious samples and allows you to handle the detected risks. You can configure this parameter based on the number of images or digests. For example, if the number of images or digests that are updated in the previous day is 10, you can set this parameter to 300 for a monthly subscription or to 3650 for a yearly subscription. This is more cost-effective.
         * <p>
         * @return {@code this}
         * @param containerImageScan Property containerImageScan: Security Center provides the container image scan feature to protect containers. This parameter is required.
         */
        public Builder containerImageScan(final java.lang.Number containerImageScan) {
            this.props.containerImageScan(containerImageScan);
            return this;
        }
        /**
         * Property containerImageScan: Security Center provides the container image scan feature to protect containers.
         * <p>
         * Security Center can detect CVEs, application vulnerabilities, viruses, and malicious samples and allows you to handle the detected risks. You can configure this parameter based on the number of images or digests. For example, if the number of images or digests that are updated in the previous day is 10, you can set this parameter to 300 for a monthly subscription or to 3650 for a yearly subscription. This is more cost-effective.
         * <p>
         * @return {@code this}
         * @param containerImageScan Property containerImageScan: Security Center provides the container image scan feature to protect containers. This parameter is required.
         */
        public Builder containerImageScan(final com.aliyun.ros.cdk.core.IResolvable containerImageScan) {
            this.props.containerImageScan(containerImageScan);
            return this;
        }

        /**
         * Property edition: The version of Security center.
         * <p>
         * @return {@code this}
         * @param edition Property edition: The version of Security center. This parameter is required.
         */
        public Builder edition(final java.lang.String edition) {
            this.props.edition(edition);
            return this;
        }
        /**
         * Property edition: The version of Security center.
         * <p>
         * @return {@code this}
         * @param edition Property edition: The version of Security center. This parameter is required.
         */
        public Builder edition(final com.aliyun.ros.cdk.core.IResolvable edition) {
            this.props.edition(edition);
            return this;
        }

        /**
         * Property logAnalysis: In response to the requirements of the network security law, which requires logs to be stored for at least 180 days, we recommend that you configure a 40GB log storage each server.
         * <p>
         * Log analysis supports multi-dimensional security logs of cloud assets, out-of-the-box reports, and powerful SQL syntax analysis, so as to monitor business status, troubleshoot attacks, security operations such as traceability and positioning are easier.
         * <p>
         * @return {@code this}
         * @param logAnalysis Property logAnalysis: In response to the requirements of the network security law, which requires logs to be stored for at least 180 days, we recommend that you configure a 40GB log storage each server. This parameter is required.
         */
        public Builder logAnalysis(final java.lang.Number logAnalysis) {
            this.props.logAnalysis(logAnalysis);
            return this;
        }
        /**
         * Property logAnalysis: In response to the requirements of the network security law, which requires logs to be stored for at least 180 days, we recommend that you configure a 40GB log storage each server.
         * <p>
         * Log analysis supports multi-dimensional security logs of cloud assets, out-of-the-box reports, and powerful SQL syntax analysis, so as to monitor business status, troubleshoot attacks, security operations such as traceability and positioning are easier.
         * <p>
         * @return {@code this}
         * @param logAnalysis Property logAnalysis: In response to the requirements of the network security law, which requires logs to be stored for at least 180 days, we recommend that you configure a 40GB log storage each server. This parameter is required.
         */
        public Builder logAnalysis(final com.aliyun.ros.cdk.core.IResolvable logAnalysis) {
            this.props.logAnalysis(logAnalysis);
            return this;
        }

        /**
         * Property maliciousFileDetectionSdk: The configuration assessment feature detects configuration errors and security risks on cloud services from the following dimensions: identity and permission management, security risks in Alibaba Cloud services, and compliance risks.
         * <p>
         * This ensures the security of the running environment of your cloud services.
         * <p>
         * @return {@code this}
         * @param maliciousFileDetectionSdk Property maliciousFileDetectionSdk: The configuration assessment feature detects configuration errors and security risks on cloud services from the following dimensions: identity and permission management, security risks in Alibaba Cloud services, and compliance risks. This parameter is required.
         */
        public Builder maliciousFileDetectionSdk(final java.lang.Boolean maliciousFileDetectionSdk) {
            this.props.maliciousFileDetectionSdk(maliciousFileDetectionSdk);
            return this;
        }
        /**
         * Property maliciousFileDetectionSdk: The configuration assessment feature detects configuration errors and security risks on cloud services from the following dimensions: identity and permission management, security risks in Alibaba Cloud services, and compliance risks.
         * <p>
         * This ensures the security of the running environment of your cloud services.
         * <p>
         * @return {@code this}
         * @param maliciousFileDetectionSdk Property maliciousFileDetectionSdk: The configuration assessment feature detects configuration errors and security risks on cloud services from the following dimensions: identity and permission management, security risks in Alibaba Cloud services, and compliance risks. This parameter is required.
         */
        public Builder maliciousFileDetectionSdk(final com.aliyun.ros.cdk.core.IResolvable maliciousFileDetectionSdk) {
            this.props.maliciousFileDetectionSdk(maliciousFileDetectionSdk);
            return this;
        }

        /**
         * Property protectedServers: Authorization is the same as the number of servers you have.
         * <p>
         * @return {@code this}
         * @param protectedServers Property protectedServers: Authorization is the same as the number of servers you have. This parameter is required.
         */
        public Builder protectedServers(final java.lang.Number protectedServers) {
            this.props.protectedServers(protectedServers);
            return this;
        }
        /**
         * Property protectedServers: Authorization is the same as the number of servers you have.
         * <p>
         * @return {@code this}
         * @param protectedServers Property protectedServers: Authorization is the same as the number of servers you have. This parameter is required.
         */
        public Builder protectedServers(final com.aliyun.ros.cdk.core.IResolvable protectedServers) {
            this.props.protectedServers(protectedServers);
            return this;
        }

        /**
         * Property quotaForApplicationProtection: The application protection feature can detect attacks on applications and provide self-protection during application runtime.
         * <p>
         * The feature supports simple and convenient O&amp;M and can effectively defend against zero-day and OWASP Top vulnerabilities. The feature is a value-added feature. You are charged based on the number of assets on which the RASP agent is installed. You must configure protection policies after you purchase the feature.
         * <p>
         * @return {@code this}
         * @param quotaForApplicationProtection Property quotaForApplicationProtection: The application protection feature can detect attacks on applications and provide self-protection during application runtime. This parameter is required.
         */
        public Builder quotaForApplicationProtection(final java.lang.Number quotaForApplicationProtection) {
            this.props.quotaForApplicationProtection(quotaForApplicationProtection);
            return this;
        }
        /**
         * Property quotaForApplicationProtection: The application protection feature can detect attacks on applications and provide self-protection during application runtime.
         * <p>
         * The feature supports simple and convenient O&amp;M and can effectively defend against zero-day and OWASP Top vulnerabilities. The feature is a value-added feature. You are charged based on the number of assets on which the RASP agent is installed. You must configure protection policies after you purchase the feature.
         * <p>
         * @return {@code this}
         * @param quotaForApplicationProtection Property quotaForApplicationProtection: The application protection feature can detect attacks on applications and provide self-protection during application runtime. This parameter is required.
         */
        public Builder quotaForApplicationProtection(final com.aliyun.ros.cdk.core.IResolvable quotaForApplicationProtection) {
            this.props.quotaForApplicationProtection(quotaForApplicationProtection);
            return this;
        }

        /**
         * Property quotaForCloudHoneypot:.
         * <p>
         * @return {@code this}
         * @param quotaForCloudHoneypot Property quotaForCloudHoneypot:. This parameter is required.
         */
        public Builder quotaForCloudHoneypot(final java.lang.Number quotaForCloudHoneypot) {
            this.props.quotaForCloudHoneypot(quotaForCloudHoneypot);
            return this;
        }
        /**
         * Property quotaForCloudHoneypot:.
         * <p>
         * @return {@code this}
         * @param quotaForCloudHoneypot Property quotaForCloudHoneypot:. This parameter is required.
         */
        public Builder quotaForCloudHoneypot(final com.aliyun.ros.cdk.core.IResolvable quotaForCloudHoneypot) {
            this.props.quotaForCloudHoneypot(quotaForCloudHoneypot);
            return this;
        }

        /**
         * Property quotaForConfigurationAssessment:.
         * <p>
         * @return {@code this}
         * @param quotaForConfigurationAssessment Property quotaForConfigurationAssessment:. This parameter is required.
         */
        public Builder quotaForConfigurationAssessment(final java.lang.Number quotaForConfigurationAssessment) {
            this.props.quotaForConfigurationAssessment(quotaForConfigurationAssessment);
            return this;
        }
        /**
         * Property quotaForConfigurationAssessment:.
         * <p>
         * @return {@code this}
         * @param quotaForConfigurationAssessment Property quotaForConfigurationAssessment:. This parameter is required.
         */
        public Builder quotaForConfigurationAssessment(final com.aliyun.ros.cdk.core.IResolvable quotaForConfigurationAssessment) {
            this.props.quotaForConfigurationAssessment(quotaForConfigurationAssessment);
            return this;
        }

        /**
         * Property quotaForMaliciousFileDetectionSdk:.
         * <p>
         * @return {@code this}
         * @param quotaForMaliciousFileDetectionSdk Property quotaForMaliciousFileDetectionSdk:. This parameter is required.
         */
        public Builder quotaForMaliciousFileDetectionSdk(final java.lang.Number quotaForMaliciousFileDetectionSdk) {
            this.props.quotaForMaliciousFileDetectionSdk(quotaForMaliciousFileDetectionSdk);
            return this;
        }
        /**
         * Property quotaForMaliciousFileDetectionSdk:.
         * <p>
         * @return {@code this}
         * @param quotaForMaliciousFileDetectionSdk Property quotaForMaliciousFileDetectionSdk:. This parameter is required.
         */
        public Builder quotaForMaliciousFileDetectionSdk(final com.aliyun.ros.cdk.core.IResolvable quotaForMaliciousFileDetectionSdk) {
            this.props.quotaForMaliciousFileDetectionSdk(quotaForMaliciousFileDetectionSdk);
            return this;
        }

        /**
         * Property quotaForVulnerabilityFixing: Specify the quota for vulnerability fixing based on the number of vulnerabilities that you want to fix each month.
         * <p>
         * The quota is equal to the total number of vulnerabilities that you want to fix on all servers regardless of the vulnerability names. For example, if you use Security Center to fix the same vulnerability on 10 servers, the quota is deducted by 10.
         * <p>
         * @return {@code this}
         * @param quotaForVulnerabilityFixing Property quotaForVulnerabilityFixing: Specify the quota for vulnerability fixing based on the number of vulnerabilities that you want to fix each month. This parameter is required.
         */
        public Builder quotaForVulnerabilityFixing(final java.lang.Number quotaForVulnerabilityFixing) {
            this.props.quotaForVulnerabilityFixing(quotaForVulnerabilityFixing);
            return this;
        }
        /**
         * Property quotaForVulnerabilityFixing: Specify the quota for vulnerability fixing based on the number of vulnerabilities that you want to fix each month.
         * <p>
         * The quota is equal to the total number of vulnerabilities that you want to fix on all servers regardless of the vulnerability names. For example, if you use Security Center to fix the same vulnerability on 10 servers, the quota is deducted by 10.
         * <p>
         * @return {@code this}
         * @param quotaForVulnerabilityFixing Property quotaForVulnerabilityFixing: Specify the quota for vulnerability fixing based on the number of vulnerabilities that you want to fix each month. This parameter is required.
         */
        public Builder quotaForVulnerabilityFixing(final com.aliyun.ros.cdk.core.IResolvable quotaForVulnerabilityFixing) {
            this.props.quotaForVulnerabilityFixing(quotaForVulnerabilityFixing);
            return this;
        }

        /**
         * Property quotaForWebTamperProofing:.
         * <p>
         * @return {@code this}
         * @param quotaForWebTamperProofing Property quotaForWebTamperProofing:. This parameter is required.
         */
        public Builder quotaForWebTamperProofing(final java.lang.Number quotaForWebTamperProofing) {
            this.props.quotaForWebTamperProofing(quotaForWebTamperProofing);
            return this;
        }
        /**
         * Property quotaForWebTamperProofing:.
         * <p>
         * @return {@code this}
         * @param quotaForWebTamperProofing Property quotaForWebTamperProofing:. This parameter is required.
         */
        public Builder quotaForWebTamperProofing(final com.aliyun.ros.cdk.core.IResolvable quotaForWebTamperProofing) {
            this.props.quotaForWebTamperProofing(quotaForWebTamperProofing);
            return this;
        }

        /**
         * Property threatAnalysis: The threat analysis feature allows you to handle alerts that are generated for assets in the cloud within different accounts and assets of multiple cloud services in a centralized manner.
         * <p>
         * The feature also allows you to handle risks with a few clicks. The feature provides automatic orchestration and response capabilities.
         * <p>
         * @return {@code this}
         * @param threatAnalysis Property threatAnalysis: The threat analysis feature allows you to handle alerts that are generated for assets in the cloud within different accounts and assets of multiple cloud services in a centralized manner. This parameter is required.
         */
        public Builder threatAnalysis(final java.lang.Boolean threatAnalysis) {
            this.props.threatAnalysis(threatAnalysis);
            return this;
        }
        /**
         * Property threatAnalysis: The threat analysis feature allows you to handle alerts that are generated for assets in the cloud within different accounts and assets of multiple cloud services in a centralized manner.
         * <p>
         * The feature also allows you to handle risks with a few clicks. The feature provides automatic orchestration and response capabilities.
         * <p>
         * @return {@code this}
         * @param threatAnalysis Property threatAnalysis: The threat analysis feature allows you to handle alerts that are generated for assets in the cloud within different accounts and assets of multiple cloud services in a centralized manner. This parameter is required.
         */
        public Builder threatAnalysis(final com.aliyun.ros.cdk.core.IResolvable threatAnalysis) {
            this.props.threatAnalysis(threatAnalysis);
            return this;
        }

        /**
         * Property threatAnalysisLogStorageCapacity:.
         * <p>
         * @return {@code this}
         * @param threatAnalysisLogStorageCapacity Property threatAnalysisLogStorageCapacity:. This parameter is required.
         */
        public Builder threatAnalysisLogStorageCapacity(final java.lang.Number threatAnalysisLogStorageCapacity) {
            this.props.threatAnalysisLogStorageCapacity(threatAnalysisLogStorageCapacity);
            return this;
        }
        /**
         * Property threatAnalysisLogStorageCapacity:.
         * <p>
         * @return {@code this}
         * @param threatAnalysisLogStorageCapacity Property threatAnalysisLogStorageCapacity:. This parameter is required.
         */
        public Builder threatAnalysisLogStorageCapacity(final com.aliyun.ros.cdk.core.IResolvable threatAnalysisLogStorageCapacity) {
            this.props.threatAnalysisLogStorageCapacity(threatAnalysisLogStorageCapacity);
            return this;
        }

        /**
         * Property vCore: This parameter indicates the number of server vCPUs.
         * <p>
         * @return {@code this}
         * @param vCore Property vCore: This parameter indicates the number of server vCPUs. This parameter is required.
         */
        public Builder vCore(final java.lang.Number vCore) {
            this.props.vCore(vCore);
            return this;
        }
        /**
         * Property vCore: This parameter indicates the number of server vCPUs.
         * <p>
         * @return {@code this}
         * @param vCore Property vCore: This parameter indicates the number of server vCPUs. This parameter is required.
         */
        public Builder vCore(final com.aliyun.ros.cdk.core.IResolvable vCore) {
            this.props.vCore(vCore);
            return this;
        }

        /**
         * Property vulnerabilityFixing: The vulnerability fixing feature allows you to fix system vulnerabilities with a few clicks.
         * <p>
         * This improves O&amp;M efficiency. You can separately purchase the vulnerability fixing feature. You are charged based on the number of times that you perform vulnerability fixing.
         * <p>
         * @return {@code this}
         * @param vulnerabilityFixing Property vulnerabilityFixing: The vulnerability fixing feature allows you to fix system vulnerabilities with a few clicks. This parameter is required.
         */
        public Builder vulnerabilityFixing(final java.lang.Boolean vulnerabilityFixing) {
            this.props.vulnerabilityFixing(vulnerabilityFixing);
            return this;
        }
        /**
         * Property vulnerabilityFixing: The vulnerability fixing feature allows you to fix system vulnerabilities with a few clicks.
         * <p>
         * This improves O&amp;M efficiency. You can separately purchase the vulnerability fixing feature. You are charged based on the number of times that you perform vulnerability fixing.
         * <p>
         * @return {@code this}
         * @param vulnerabilityFixing Property vulnerabilityFixing: The vulnerability fixing feature allows you to fix system vulnerabilities with a few clicks. This parameter is required.
         */
        public Builder vulnerabilityFixing(final com.aliyun.ros.cdk.core.IResolvable vulnerabilityFixing) {
            this.props.vulnerabilityFixing(vulnerabilityFixing);
            return this;
        }

        /**
         * Property webTamperProtection: To ensure that the website information of important systems is not maliciously tampered with, there are bad content such as hanging horses, black chains, illegal implantation of terrorist threats, pornography, etc.
         * <p>
         * @return {@code this}
         * @param webTamperProtection Property webTamperProtection: To ensure that the website information of important systems is not maliciously tampered with, there are bad content such as hanging horses, black chains, illegal implantation of terrorist threats, pornography, etc. This parameter is required.
         */
        public Builder webTamperProtection(final java.lang.Boolean webTamperProtection) {
            this.props.webTamperProtection(webTamperProtection);
            return this;
        }
        /**
         * Property webTamperProtection: To ensure that the website information of important systems is not maliciously tampered with, there are bad content such as hanging horses, black chains, illegal implantation of terrorist threats, pornography, etc.
         * <p>
         * @return {@code this}
         * @param webTamperProtection Property webTamperProtection: To ensure that the website information of important systems is not maliciously tampered with, there are bad content such as hanging horses, black chains, illegal implantation of terrorist threats, pornography, etc. This parameter is required.
         */
        public Builder webTamperProtection(final com.aliyun.ros.cdk.core.IResolvable webTamperProtection) {
            this.props.webTamperProtection(webTamperProtection);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.sas.Instance}.
         */
        @Override
        public com.aliyun.ros.cdk.sas.Instance build() {
            return new com.aliyun.ros.cdk.sas.Instance(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
