package com.aliyun.ros.cdk.sas;

/**
 * Properties for defining a <code>RosInstance</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sas-instance
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-03T08:19:54.422Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sas.$Module.class, fqn = "@alicloud/ros-cdk-sas.RosInstanceProps")
@software.amazon.jsii.Jsii.Proxy(RosInstanceProps.Jsii$Proxy.class)
public interface RosInstanceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPeriod();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPeriodUnit();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAntiRansomware() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoPay() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenew() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCloudHoneypot() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getConfigurationAssessment() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getContainerImageScan() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEdition() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLogAnalysis() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMaliciousFileDetectionSdk() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getProtectedServers() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getQuotaForApplicationProtection() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getQuotaForCloudHoneypot() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getQuotaForConfigurationAssessment() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getQuotaForMaliciousFileDetectionSdk() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getQuotaForVulnerabilityFixing() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getQuotaForWebTamperProofing() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getThreatAnalysis() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getThreatAnalysisLogStorageCapacity() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVCore() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVulnerabilityFixing() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getWebTamperProtection() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosInstanceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosInstanceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosInstanceProps> {
        java.lang.Object period;
        java.lang.Object periodUnit;
        java.lang.Object antiRansomware;
        java.lang.Object autoPay;
        java.lang.Object autoRenew;
        java.lang.Object cloudHoneypot;
        java.lang.Object configurationAssessment;
        java.lang.Object containerImageScan;
        java.lang.Object edition;
        java.lang.Object logAnalysis;
        java.lang.Object maliciousFileDetectionSdk;
        java.lang.Object protectedServers;
        java.lang.Object quotaForApplicationProtection;
        java.lang.Object quotaForCloudHoneypot;
        java.lang.Object quotaForConfigurationAssessment;
        java.lang.Object quotaForMaliciousFileDetectionSdk;
        java.lang.Object quotaForVulnerabilityFixing;
        java.lang.Object quotaForWebTamperProofing;
        java.lang.Object threatAnalysis;
        java.lang.Object threatAnalysisLogStorageCapacity;
        java.lang.Object vCore;
        java.lang.Object vulnerabilityFixing;
        java.lang.Object webTamperProtection;

        /**
         * Sets the value of {@link RosInstanceProps#getPeriod}
         * @param period the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getPeriod}
         * @param period the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getPeriodUnit}
         * @param periodUnit the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder periodUnit(java.lang.String periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getPeriodUnit}
         * @param periodUnit the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder periodUnit(com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getAntiRansomware}
         * @param antiRansomware the value to be set.
         * @return {@code this}
         */
        public Builder antiRansomware(java.lang.Number antiRansomware) {
            this.antiRansomware = antiRansomware;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getAntiRansomware}
         * @param antiRansomware the value to be set.
         * @return {@code this}
         */
        public Builder antiRansomware(com.aliyun.ros.cdk.core.IResolvable antiRansomware) {
            this.antiRansomware = antiRansomware;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getAutoPay}
         * @param autoPay the value to be set.
         * @return {@code this}
         */
        public Builder autoPay(java.lang.Boolean autoPay) {
            this.autoPay = autoPay;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getAutoPay}
         * @param autoPay the value to be set.
         * @return {@code this}
         */
        public Builder autoPay(com.aliyun.ros.cdk.core.IResolvable autoPay) {
            this.autoPay = autoPay;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getAutoRenew}
         * @param autoRenew the value to be set.
         * @return {@code this}
         */
        public Builder autoRenew(java.lang.Boolean autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getAutoRenew}
         * @param autoRenew the value to be set.
         * @return {@code this}
         */
        public Builder autoRenew(com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getCloudHoneypot}
         * @param cloudHoneypot the value to be set.
         * @return {@code this}
         */
        public Builder cloudHoneypot(java.lang.Boolean cloudHoneypot) {
            this.cloudHoneypot = cloudHoneypot;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getCloudHoneypot}
         * @param cloudHoneypot the value to be set.
         * @return {@code this}
         */
        public Builder cloudHoneypot(com.aliyun.ros.cdk.core.IResolvable cloudHoneypot) {
            this.cloudHoneypot = cloudHoneypot;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getConfigurationAssessment}
         * @param configurationAssessment the value to be set.
         * @return {@code this}
         */
        public Builder configurationAssessment(java.lang.Boolean configurationAssessment) {
            this.configurationAssessment = configurationAssessment;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getConfigurationAssessment}
         * @param configurationAssessment the value to be set.
         * @return {@code this}
         */
        public Builder configurationAssessment(com.aliyun.ros.cdk.core.IResolvable configurationAssessment) {
            this.configurationAssessment = configurationAssessment;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getContainerImageScan}
         * @param containerImageScan the value to be set.
         * @return {@code this}
         */
        public Builder containerImageScan(java.lang.Number containerImageScan) {
            this.containerImageScan = containerImageScan;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getContainerImageScan}
         * @param containerImageScan the value to be set.
         * @return {@code this}
         */
        public Builder containerImageScan(com.aliyun.ros.cdk.core.IResolvable containerImageScan) {
            this.containerImageScan = containerImageScan;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getEdition}
         * @param edition the value to be set.
         * @return {@code this}
         */
        public Builder edition(java.lang.String edition) {
            this.edition = edition;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getEdition}
         * @param edition the value to be set.
         * @return {@code this}
         */
        public Builder edition(com.aliyun.ros.cdk.core.IResolvable edition) {
            this.edition = edition;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getLogAnalysis}
         * @param logAnalysis the value to be set.
         * @return {@code this}
         */
        public Builder logAnalysis(java.lang.Number logAnalysis) {
            this.logAnalysis = logAnalysis;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getLogAnalysis}
         * @param logAnalysis the value to be set.
         * @return {@code this}
         */
        public Builder logAnalysis(com.aliyun.ros.cdk.core.IResolvable logAnalysis) {
            this.logAnalysis = logAnalysis;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getMaliciousFileDetectionSdk}
         * @param maliciousFileDetectionSdk the value to be set.
         * @return {@code this}
         */
        public Builder maliciousFileDetectionSdk(java.lang.Boolean maliciousFileDetectionSdk) {
            this.maliciousFileDetectionSdk = maliciousFileDetectionSdk;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getMaliciousFileDetectionSdk}
         * @param maliciousFileDetectionSdk the value to be set.
         * @return {@code this}
         */
        public Builder maliciousFileDetectionSdk(com.aliyun.ros.cdk.core.IResolvable maliciousFileDetectionSdk) {
            this.maliciousFileDetectionSdk = maliciousFileDetectionSdk;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getProtectedServers}
         * @param protectedServers the value to be set.
         * @return {@code this}
         */
        public Builder protectedServers(java.lang.Number protectedServers) {
            this.protectedServers = protectedServers;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getProtectedServers}
         * @param protectedServers the value to be set.
         * @return {@code this}
         */
        public Builder protectedServers(com.aliyun.ros.cdk.core.IResolvable protectedServers) {
            this.protectedServers = protectedServers;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getQuotaForApplicationProtection}
         * @param quotaForApplicationProtection the value to be set.
         * @return {@code this}
         */
        public Builder quotaForApplicationProtection(java.lang.Number quotaForApplicationProtection) {
            this.quotaForApplicationProtection = quotaForApplicationProtection;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getQuotaForApplicationProtection}
         * @param quotaForApplicationProtection the value to be set.
         * @return {@code this}
         */
        public Builder quotaForApplicationProtection(com.aliyun.ros.cdk.core.IResolvable quotaForApplicationProtection) {
            this.quotaForApplicationProtection = quotaForApplicationProtection;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getQuotaForCloudHoneypot}
         * @param quotaForCloudHoneypot the value to be set.
         * @return {@code this}
         */
        public Builder quotaForCloudHoneypot(java.lang.Number quotaForCloudHoneypot) {
            this.quotaForCloudHoneypot = quotaForCloudHoneypot;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getQuotaForCloudHoneypot}
         * @param quotaForCloudHoneypot the value to be set.
         * @return {@code this}
         */
        public Builder quotaForCloudHoneypot(com.aliyun.ros.cdk.core.IResolvable quotaForCloudHoneypot) {
            this.quotaForCloudHoneypot = quotaForCloudHoneypot;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getQuotaForConfigurationAssessment}
         * @param quotaForConfigurationAssessment the value to be set.
         * @return {@code this}
         */
        public Builder quotaForConfigurationAssessment(java.lang.Number quotaForConfigurationAssessment) {
            this.quotaForConfigurationAssessment = quotaForConfigurationAssessment;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getQuotaForConfigurationAssessment}
         * @param quotaForConfigurationAssessment the value to be set.
         * @return {@code this}
         */
        public Builder quotaForConfigurationAssessment(com.aliyun.ros.cdk.core.IResolvable quotaForConfigurationAssessment) {
            this.quotaForConfigurationAssessment = quotaForConfigurationAssessment;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getQuotaForMaliciousFileDetectionSdk}
         * @param quotaForMaliciousFileDetectionSdk the value to be set.
         * @return {@code this}
         */
        public Builder quotaForMaliciousFileDetectionSdk(java.lang.Number quotaForMaliciousFileDetectionSdk) {
            this.quotaForMaliciousFileDetectionSdk = quotaForMaliciousFileDetectionSdk;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getQuotaForMaliciousFileDetectionSdk}
         * @param quotaForMaliciousFileDetectionSdk the value to be set.
         * @return {@code this}
         */
        public Builder quotaForMaliciousFileDetectionSdk(com.aliyun.ros.cdk.core.IResolvable quotaForMaliciousFileDetectionSdk) {
            this.quotaForMaliciousFileDetectionSdk = quotaForMaliciousFileDetectionSdk;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getQuotaForVulnerabilityFixing}
         * @param quotaForVulnerabilityFixing the value to be set.
         * @return {@code this}
         */
        public Builder quotaForVulnerabilityFixing(java.lang.Number quotaForVulnerabilityFixing) {
            this.quotaForVulnerabilityFixing = quotaForVulnerabilityFixing;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getQuotaForVulnerabilityFixing}
         * @param quotaForVulnerabilityFixing the value to be set.
         * @return {@code this}
         */
        public Builder quotaForVulnerabilityFixing(com.aliyun.ros.cdk.core.IResolvable quotaForVulnerabilityFixing) {
            this.quotaForVulnerabilityFixing = quotaForVulnerabilityFixing;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getQuotaForWebTamperProofing}
         * @param quotaForWebTamperProofing the value to be set.
         * @return {@code this}
         */
        public Builder quotaForWebTamperProofing(java.lang.Number quotaForWebTamperProofing) {
            this.quotaForWebTamperProofing = quotaForWebTamperProofing;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getQuotaForWebTamperProofing}
         * @param quotaForWebTamperProofing the value to be set.
         * @return {@code this}
         */
        public Builder quotaForWebTamperProofing(com.aliyun.ros.cdk.core.IResolvable quotaForWebTamperProofing) {
            this.quotaForWebTamperProofing = quotaForWebTamperProofing;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getThreatAnalysis}
         * @param threatAnalysis the value to be set.
         * @return {@code this}
         */
        public Builder threatAnalysis(java.lang.Boolean threatAnalysis) {
            this.threatAnalysis = threatAnalysis;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getThreatAnalysis}
         * @param threatAnalysis the value to be set.
         * @return {@code this}
         */
        public Builder threatAnalysis(com.aliyun.ros.cdk.core.IResolvable threatAnalysis) {
            this.threatAnalysis = threatAnalysis;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getThreatAnalysisLogStorageCapacity}
         * @param threatAnalysisLogStorageCapacity the value to be set.
         * @return {@code this}
         */
        public Builder threatAnalysisLogStorageCapacity(java.lang.Number threatAnalysisLogStorageCapacity) {
            this.threatAnalysisLogStorageCapacity = threatAnalysisLogStorageCapacity;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getThreatAnalysisLogStorageCapacity}
         * @param threatAnalysisLogStorageCapacity the value to be set.
         * @return {@code this}
         */
        public Builder threatAnalysisLogStorageCapacity(com.aliyun.ros.cdk.core.IResolvable threatAnalysisLogStorageCapacity) {
            this.threatAnalysisLogStorageCapacity = threatAnalysisLogStorageCapacity;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getVCore}
         * @param vCore the value to be set.
         * @return {@code this}
         */
        public Builder vCore(java.lang.Number vCore) {
            this.vCore = vCore;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getVCore}
         * @param vCore the value to be set.
         * @return {@code this}
         */
        public Builder vCore(com.aliyun.ros.cdk.core.IResolvable vCore) {
            this.vCore = vCore;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getVulnerabilityFixing}
         * @param vulnerabilityFixing the value to be set.
         * @return {@code this}
         */
        public Builder vulnerabilityFixing(java.lang.Boolean vulnerabilityFixing) {
            this.vulnerabilityFixing = vulnerabilityFixing;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getVulnerabilityFixing}
         * @param vulnerabilityFixing the value to be set.
         * @return {@code this}
         */
        public Builder vulnerabilityFixing(com.aliyun.ros.cdk.core.IResolvable vulnerabilityFixing) {
            this.vulnerabilityFixing = vulnerabilityFixing;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getWebTamperProtection}
         * @param webTamperProtection the value to be set.
         * @return {@code this}
         */
        public Builder webTamperProtection(java.lang.Boolean webTamperProtection) {
            this.webTamperProtection = webTamperProtection;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getWebTamperProtection}
         * @param webTamperProtection the value to be set.
         * @return {@code this}
         */
        public Builder webTamperProtection(com.aliyun.ros.cdk.core.IResolvable webTamperProtection) {
            this.webTamperProtection = webTamperProtection;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosInstanceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosInstanceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosInstanceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosInstanceProps {
        private final java.lang.Object period;
        private final java.lang.Object periodUnit;
        private final java.lang.Object antiRansomware;
        private final java.lang.Object autoPay;
        private final java.lang.Object autoRenew;
        private final java.lang.Object cloudHoneypot;
        private final java.lang.Object configurationAssessment;
        private final java.lang.Object containerImageScan;
        private final java.lang.Object edition;
        private final java.lang.Object logAnalysis;
        private final java.lang.Object maliciousFileDetectionSdk;
        private final java.lang.Object protectedServers;
        private final java.lang.Object quotaForApplicationProtection;
        private final java.lang.Object quotaForCloudHoneypot;
        private final java.lang.Object quotaForConfigurationAssessment;
        private final java.lang.Object quotaForMaliciousFileDetectionSdk;
        private final java.lang.Object quotaForVulnerabilityFixing;
        private final java.lang.Object quotaForWebTamperProofing;
        private final java.lang.Object threatAnalysis;
        private final java.lang.Object threatAnalysisLogStorageCapacity;
        private final java.lang.Object vCore;
        private final java.lang.Object vulnerabilityFixing;
        private final java.lang.Object webTamperProtection;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.periodUnit = software.amazon.jsii.Kernel.get(this, "periodUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.antiRansomware = software.amazon.jsii.Kernel.get(this, "antiRansomware", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoPay = software.amazon.jsii.Kernel.get(this, "autoPay", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoRenew = software.amazon.jsii.Kernel.get(this, "autoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.cloudHoneypot = software.amazon.jsii.Kernel.get(this, "cloudHoneypot", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.configurationAssessment = software.amazon.jsii.Kernel.get(this, "configurationAssessment", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.containerImageScan = software.amazon.jsii.Kernel.get(this, "containerImageScan", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.edition = software.amazon.jsii.Kernel.get(this, "edition", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.logAnalysis = software.amazon.jsii.Kernel.get(this, "logAnalysis", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.maliciousFileDetectionSdk = software.amazon.jsii.Kernel.get(this, "maliciousFileDetectionSdk", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.protectedServers = software.amazon.jsii.Kernel.get(this, "protectedServers", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.quotaForApplicationProtection = software.amazon.jsii.Kernel.get(this, "quotaForApplicationProtection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.quotaForCloudHoneypot = software.amazon.jsii.Kernel.get(this, "quotaForCloudHoneypot", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.quotaForConfigurationAssessment = software.amazon.jsii.Kernel.get(this, "quotaForConfigurationAssessment", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.quotaForMaliciousFileDetectionSdk = software.amazon.jsii.Kernel.get(this, "quotaForMaliciousFileDetectionSdk", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.quotaForVulnerabilityFixing = software.amazon.jsii.Kernel.get(this, "quotaForVulnerabilityFixing", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.quotaForWebTamperProofing = software.amazon.jsii.Kernel.get(this, "quotaForWebTamperProofing", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.threatAnalysis = software.amazon.jsii.Kernel.get(this, "threatAnalysis", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.threatAnalysisLogStorageCapacity = software.amazon.jsii.Kernel.get(this, "threatAnalysisLogStorageCapacity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vCore = software.amazon.jsii.Kernel.get(this, "vCore", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vulnerabilityFixing = software.amazon.jsii.Kernel.get(this, "vulnerabilityFixing", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.webTamperProtection = software.amazon.jsii.Kernel.get(this, "webTamperProtection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.period = java.util.Objects.requireNonNull(builder.period, "period is required");
            this.periodUnit = java.util.Objects.requireNonNull(builder.periodUnit, "periodUnit is required");
            this.antiRansomware = builder.antiRansomware;
            this.autoPay = builder.autoPay;
            this.autoRenew = builder.autoRenew;
            this.cloudHoneypot = builder.cloudHoneypot;
            this.configurationAssessment = builder.configurationAssessment;
            this.containerImageScan = builder.containerImageScan;
            this.edition = builder.edition;
            this.logAnalysis = builder.logAnalysis;
            this.maliciousFileDetectionSdk = builder.maliciousFileDetectionSdk;
            this.protectedServers = builder.protectedServers;
            this.quotaForApplicationProtection = builder.quotaForApplicationProtection;
            this.quotaForCloudHoneypot = builder.quotaForCloudHoneypot;
            this.quotaForConfigurationAssessment = builder.quotaForConfigurationAssessment;
            this.quotaForMaliciousFileDetectionSdk = builder.quotaForMaliciousFileDetectionSdk;
            this.quotaForVulnerabilityFixing = builder.quotaForVulnerabilityFixing;
            this.quotaForWebTamperProofing = builder.quotaForWebTamperProofing;
            this.threatAnalysis = builder.threatAnalysis;
            this.threatAnalysisLogStorageCapacity = builder.threatAnalysisLogStorageCapacity;
            this.vCore = builder.vCore;
            this.vulnerabilityFixing = builder.vulnerabilityFixing;
            this.webTamperProtection = builder.webTamperProtection;
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
        public final java.lang.Object getAntiRansomware() {
            return this.antiRansomware;
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
        public final java.lang.Object getCloudHoneypot() {
            return this.cloudHoneypot;
        }

        @Override
        public final java.lang.Object getConfigurationAssessment() {
            return this.configurationAssessment;
        }

        @Override
        public final java.lang.Object getContainerImageScan() {
            return this.containerImageScan;
        }

        @Override
        public final java.lang.Object getEdition() {
            return this.edition;
        }

        @Override
        public final java.lang.Object getLogAnalysis() {
            return this.logAnalysis;
        }

        @Override
        public final java.lang.Object getMaliciousFileDetectionSdk() {
            return this.maliciousFileDetectionSdk;
        }

        @Override
        public final java.lang.Object getProtectedServers() {
            return this.protectedServers;
        }

        @Override
        public final java.lang.Object getQuotaForApplicationProtection() {
            return this.quotaForApplicationProtection;
        }

        @Override
        public final java.lang.Object getQuotaForCloudHoneypot() {
            return this.quotaForCloudHoneypot;
        }

        @Override
        public final java.lang.Object getQuotaForConfigurationAssessment() {
            return this.quotaForConfigurationAssessment;
        }

        @Override
        public final java.lang.Object getQuotaForMaliciousFileDetectionSdk() {
            return this.quotaForMaliciousFileDetectionSdk;
        }

        @Override
        public final java.lang.Object getQuotaForVulnerabilityFixing() {
            return this.quotaForVulnerabilityFixing;
        }

        @Override
        public final java.lang.Object getQuotaForWebTamperProofing() {
            return this.quotaForWebTamperProofing;
        }

        @Override
        public final java.lang.Object getThreatAnalysis() {
            return this.threatAnalysis;
        }

        @Override
        public final java.lang.Object getThreatAnalysisLogStorageCapacity() {
            return this.threatAnalysisLogStorageCapacity;
        }

        @Override
        public final java.lang.Object getVCore() {
            return this.vCore;
        }

        @Override
        public final java.lang.Object getVulnerabilityFixing() {
            return this.vulnerabilityFixing;
        }

        @Override
        public final java.lang.Object getWebTamperProtection() {
            return this.webTamperProtection;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("period", om.valueToTree(this.getPeriod()));
            data.set("periodUnit", om.valueToTree(this.getPeriodUnit()));
            if (this.getAntiRansomware() != null) {
                data.set("antiRansomware", om.valueToTree(this.getAntiRansomware()));
            }
            if (this.getAutoPay() != null) {
                data.set("autoPay", om.valueToTree(this.getAutoPay()));
            }
            if (this.getAutoRenew() != null) {
                data.set("autoRenew", om.valueToTree(this.getAutoRenew()));
            }
            if (this.getCloudHoneypot() != null) {
                data.set("cloudHoneypot", om.valueToTree(this.getCloudHoneypot()));
            }
            if (this.getConfigurationAssessment() != null) {
                data.set("configurationAssessment", om.valueToTree(this.getConfigurationAssessment()));
            }
            if (this.getContainerImageScan() != null) {
                data.set("containerImageScan", om.valueToTree(this.getContainerImageScan()));
            }
            if (this.getEdition() != null) {
                data.set("edition", om.valueToTree(this.getEdition()));
            }
            if (this.getLogAnalysis() != null) {
                data.set("logAnalysis", om.valueToTree(this.getLogAnalysis()));
            }
            if (this.getMaliciousFileDetectionSdk() != null) {
                data.set("maliciousFileDetectionSdk", om.valueToTree(this.getMaliciousFileDetectionSdk()));
            }
            if (this.getProtectedServers() != null) {
                data.set("protectedServers", om.valueToTree(this.getProtectedServers()));
            }
            if (this.getQuotaForApplicationProtection() != null) {
                data.set("quotaForApplicationProtection", om.valueToTree(this.getQuotaForApplicationProtection()));
            }
            if (this.getQuotaForCloudHoneypot() != null) {
                data.set("quotaForCloudHoneypot", om.valueToTree(this.getQuotaForCloudHoneypot()));
            }
            if (this.getQuotaForConfigurationAssessment() != null) {
                data.set("quotaForConfigurationAssessment", om.valueToTree(this.getQuotaForConfigurationAssessment()));
            }
            if (this.getQuotaForMaliciousFileDetectionSdk() != null) {
                data.set("quotaForMaliciousFileDetectionSdk", om.valueToTree(this.getQuotaForMaliciousFileDetectionSdk()));
            }
            if (this.getQuotaForVulnerabilityFixing() != null) {
                data.set("quotaForVulnerabilityFixing", om.valueToTree(this.getQuotaForVulnerabilityFixing()));
            }
            if (this.getQuotaForWebTamperProofing() != null) {
                data.set("quotaForWebTamperProofing", om.valueToTree(this.getQuotaForWebTamperProofing()));
            }
            if (this.getThreatAnalysis() != null) {
                data.set("threatAnalysis", om.valueToTree(this.getThreatAnalysis()));
            }
            if (this.getThreatAnalysisLogStorageCapacity() != null) {
                data.set("threatAnalysisLogStorageCapacity", om.valueToTree(this.getThreatAnalysisLogStorageCapacity()));
            }
            if (this.getVCore() != null) {
                data.set("vCore", om.valueToTree(this.getVCore()));
            }
            if (this.getVulnerabilityFixing() != null) {
                data.set("vulnerabilityFixing", om.valueToTree(this.getVulnerabilityFixing()));
            }
            if (this.getWebTamperProtection() != null) {
                data.set("webTamperProtection", om.valueToTree(this.getWebTamperProtection()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sas.RosInstanceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosInstanceProps.Jsii$Proxy that = (RosInstanceProps.Jsii$Proxy) o;

            if (!period.equals(that.period)) return false;
            if (!periodUnit.equals(that.periodUnit)) return false;
            if (this.antiRansomware != null ? !this.antiRansomware.equals(that.antiRansomware) : that.antiRansomware != null) return false;
            if (this.autoPay != null ? !this.autoPay.equals(that.autoPay) : that.autoPay != null) return false;
            if (this.autoRenew != null ? !this.autoRenew.equals(that.autoRenew) : that.autoRenew != null) return false;
            if (this.cloudHoneypot != null ? !this.cloudHoneypot.equals(that.cloudHoneypot) : that.cloudHoneypot != null) return false;
            if (this.configurationAssessment != null ? !this.configurationAssessment.equals(that.configurationAssessment) : that.configurationAssessment != null) return false;
            if (this.containerImageScan != null ? !this.containerImageScan.equals(that.containerImageScan) : that.containerImageScan != null) return false;
            if (this.edition != null ? !this.edition.equals(that.edition) : that.edition != null) return false;
            if (this.logAnalysis != null ? !this.logAnalysis.equals(that.logAnalysis) : that.logAnalysis != null) return false;
            if (this.maliciousFileDetectionSdk != null ? !this.maliciousFileDetectionSdk.equals(that.maliciousFileDetectionSdk) : that.maliciousFileDetectionSdk != null) return false;
            if (this.protectedServers != null ? !this.protectedServers.equals(that.protectedServers) : that.protectedServers != null) return false;
            if (this.quotaForApplicationProtection != null ? !this.quotaForApplicationProtection.equals(that.quotaForApplicationProtection) : that.quotaForApplicationProtection != null) return false;
            if (this.quotaForCloudHoneypot != null ? !this.quotaForCloudHoneypot.equals(that.quotaForCloudHoneypot) : that.quotaForCloudHoneypot != null) return false;
            if (this.quotaForConfigurationAssessment != null ? !this.quotaForConfigurationAssessment.equals(that.quotaForConfigurationAssessment) : that.quotaForConfigurationAssessment != null) return false;
            if (this.quotaForMaliciousFileDetectionSdk != null ? !this.quotaForMaliciousFileDetectionSdk.equals(that.quotaForMaliciousFileDetectionSdk) : that.quotaForMaliciousFileDetectionSdk != null) return false;
            if (this.quotaForVulnerabilityFixing != null ? !this.quotaForVulnerabilityFixing.equals(that.quotaForVulnerabilityFixing) : that.quotaForVulnerabilityFixing != null) return false;
            if (this.quotaForWebTamperProofing != null ? !this.quotaForWebTamperProofing.equals(that.quotaForWebTamperProofing) : that.quotaForWebTamperProofing != null) return false;
            if (this.threatAnalysis != null ? !this.threatAnalysis.equals(that.threatAnalysis) : that.threatAnalysis != null) return false;
            if (this.threatAnalysisLogStorageCapacity != null ? !this.threatAnalysisLogStorageCapacity.equals(that.threatAnalysisLogStorageCapacity) : that.threatAnalysisLogStorageCapacity != null) return false;
            if (this.vCore != null ? !this.vCore.equals(that.vCore) : that.vCore != null) return false;
            if (this.vulnerabilityFixing != null ? !this.vulnerabilityFixing.equals(that.vulnerabilityFixing) : that.vulnerabilityFixing != null) return false;
            return this.webTamperProtection != null ? this.webTamperProtection.equals(that.webTamperProtection) : that.webTamperProtection == null;
        }

        @Override
        public final int hashCode() {
            int result = this.period.hashCode();
            result = 31 * result + (this.periodUnit.hashCode());
            result = 31 * result + (this.antiRansomware != null ? this.antiRansomware.hashCode() : 0);
            result = 31 * result + (this.autoPay != null ? this.autoPay.hashCode() : 0);
            result = 31 * result + (this.autoRenew != null ? this.autoRenew.hashCode() : 0);
            result = 31 * result + (this.cloudHoneypot != null ? this.cloudHoneypot.hashCode() : 0);
            result = 31 * result + (this.configurationAssessment != null ? this.configurationAssessment.hashCode() : 0);
            result = 31 * result + (this.containerImageScan != null ? this.containerImageScan.hashCode() : 0);
            result = 31 * result + (this.edition != null ? this.edition.hashCode() : 0);
            result = 31 * result + (this.logAnalysis != null ? this.logAnalysis.hashCode() : 0);
            result = 31 * result + (this.maliciousFileDetectionSdk != null ? this.maliciousFileDetectionSdk.hashCode() : 0);
            result = 31 * result + (this.protectedServers != null ? this.protectedServers.hashCode() : 0);
            result = 31 * result + (this.quotaForApplicationProtection != null ? this.quotaForApplicationProtection.hashCode() : 0);
            result = 31 * result + (this.quotaForCloudHoneypot != null ? this.quotaForCloudHoneypot.hashCode() : 0);
            result = 31 * result + (this.quotaForConfigurationAssessment != null ? this.quotaForConfigurationAssessment.hashCode() : 0);
            result = 31 * result + (this.quotaForMaliciousFileDetectionSdk != null ? this.quotaForMaliciousFileDetectionSdk.hashCode() : 0);
            result = 31 * result + (this.quotaForVulnerabilityFixing != null ? this.quotaForVulnerabilityFixing.hashCode() : 0);
            result = 31 * result + (this.quotaForWebTamperProofing != null ? this.quotaForWebTamperProofing.hashCode() : 0);
            result = 31 * result + (this.threatAnalysis != null ? this.threatAnalysis.hashCode() : 0);
            result = 31 * result + (this.threatAnalysisLogStorageCapacity != null ? this.threatAnalysisLogStorageCapacity.hashCode() : 0);
            result = 31 * result + (this.vCore != null ? this.vCore.hashCode() : 0);
            result = 31 * result + (this.vulnerabilityFixing != null ? this.vulnerabilityFixing.hashCode() : 0);
            result = 31 * result + (this.webTamperProtection != null ? this.webTamperProtection.hashCode() : 0);
            return result;
        }
    }
}
