package com.aliyun.ros.cdk.sas;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::SAS::Instance</code>, which is used to purchase Security Center.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-06T03:35:17.438Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sas.$Module.class, fqn = "@alicloud/ros-cdk-sas.RosInstance")
public class RosInstance extends com.aliyun.ros.cdk.core.RosResource {

    protected RosInstance(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosInstance(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.sas.RosInstance.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosInstance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sas.RosInstanceProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), java.util.Objects.requireNonNull(enableResourcePropertyConstraint, "enableResourcePropertyConstraint is required") });
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> renderProperties(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> props) {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.call(this, "renderProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)), new Object[] { java.util.Objects.requireNonNull(props, "props is required") }));
    }

    /**
     * The resource type name for this resource class.
     */
    public final static java.lang.String ROS_RESOURCE_TYPE_NAME;

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getPeriod() {
        return software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPeriod(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "period", java.util.Objects.requireNonNull(value, "period is required"));
    }

    /**
     */
    public void setPeriod(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "period", java.util.Objects.requireNonNull(value, "period is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getPeriodUnit() {
        return software.amazon.jsii.Kernel.get(this, "periodUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPeriodUnit(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "periodUnit", java.util.Objects.requireNonNull(value, "periodUnit is required"));
    }

    /**
     */
    public void setPeriodUnit(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "periodUnit", java.util.Objects.requireNonNull(value, "periodUnit is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAntiRansomware() {
        return software.amazon.jsii.Kernel.get(this, "antiRansomware", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAntiRansomware(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "antiRansomware", value);
    }

    /**
     */
    public void setAntiRansomware(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "antiRansomware", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAutoPay() {
        return software.amazon.jsii.Kernel.get(this, "autoPay", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAutoPay(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "autoPay", value);
    }

    /**
     */
    public void setAutoPay(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "autoPay", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenew() {
        return software.amazon.jsii.Kernel.get(this, "autoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAutoRenew(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "autoRenew", value);
    }

    /**
     */
    public void setAutoRenew(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "autoRenew", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCloudHoneypot() {
        return software.amazon.jsii.Kernel.get(this, "cloudHoneypot", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCloudHoneypot(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "cloudHoneypot", value);
    }

    /**
     */
    public void setCloudHoneypot(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "cloudHoneypot", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getConfigurationAssessment() {
        return software.amazon.jsii.Kernel.get(this, "configurationAssessment", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setConfigurationAssessment(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "configurationAssessment", value);
    }

    /**
     */
    public void setConfigurationAssessment(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "configurationAssessment", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getContainerImageScan() {
        return software.amazon.jsii.Kernel.get(this, "containerImageScan", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setContainerImageScan(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "containerImageScan", value);
    }

    /**
     */
    public void setContainerImageScan(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "containerImageScan", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEdition() {
        return software.amazon.jsii.Kernel.get(this, "edition", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEdition(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "edition", value);
    }

    /**
     */
    public void setEdition(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "edition", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getLogAnalysis() {
        return software.amazon.jsii.Kernel.get(this, "logAnalysis", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLogAnalysis(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "logAnalysis", value);
    }

    /**
     */
    public void setLogAnalysis(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "logAnalysis", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMaliciousFileDetectionSdk() {
        return software.amazon.jsii.Kernel.get(this, "maliciousFileDetectionSdk", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMaliciousFileDetectionSdk(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "maliciousFileDetectionSdk", value);
    }

    /**
     */
    public void setMaliciousFileDetectionSdk(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "maliciousFileDetectionSdk", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getProtectedServers() {
        return software.amazon.jsii.Kernel.get(this, "protectedServers", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setProtectedServers(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "protectedServers", value);
    }

    /**
     */
    public void setProtectedServers(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "protectedServers", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getQuotaForApplicationProtection() {
        return software.amazon.jsii.Kernel.get(this, "quotaForApplicationProtection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setQuotaForApplicationProtection(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "quotaForApplicationProtection", value);
    }

    /**
     */
    public void setQuotaForApplicationProtection(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "quotaForApplicationProtection", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getQuotaForCloudHoneypot() {
        return software.amazon.jsii.Kernel.get(this, "quotaForCloudHoneypot", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setQuotaForCloudHoneypot(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "quotaForCloudHoneypot", value);
    }

    /**
     */
    public void setQuotaForCloudHoneypot(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "quotaForCloudHoneypot", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getQuotaForConfigurationAssessment() {
        return software.amazon.jsii.Kernel.get(this, "quotaForConfigurationAssessment", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setQuotaForConfigurationAssessment(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "quotaForConfigurationAssessment", value);
    }

    /**
     */
    public void setQuotaForConfigurationAssessment(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "quotaForConfigurationAssessment", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getQuotaForMaliciousFileDetectionSdk() {
        return software.amazon.jsii.Kernel.get(this, "quotaForMaliciousFileDetectionSdk", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setQuotaForMaliciousFileDetectionSdk(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "quotaForMaliciousFileDetectionSdk", value);
    }

    /**
     */
    public void setQuotaForMaliciousFileDetectionSdk(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "quotaForMaliciousFileDetectionSdk", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getQuotaForVulnerabilityFixing() {
        return software.amazon.jsii.Kernel.get(this, "quotaForVulnerabilityFixing", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setQuotaForVulnerabilityFixing(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "quotaForVulnerabilityFixing", value);
    }

    /**
     */
    public void setQuotaForVulnerabilityFixing(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "quotaForVulnerabilityFixing", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getQuotaForWebTamperProofing() {
        return software.amazon.jsii.Kernel.get(this, "quotaForWebTamperProofing", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setQuotaForWebTamperProofing(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "quotaForWebTamperProofing", value);
    }

    /**
     */
    public void setQuotaForWebTamperProofing(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "quotaForWebTamperProofing", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getThreatAnalysis() {
        return software.amazon.jsii.Kernel.get(this, "threatAnalysis", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setThreatAnalysis(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "threatAnalysis", value);
    }

    /**
     */
    public void setThreatAnalysis(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "threatAnalysis", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getThreatAnalysisLogStorageCapacity() {
        return software.amazon.jsii.Kernel.get(this, "threatAnalysisLogStorageCapacity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setThreatAnalysisLogStorageCapacity(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "threatAnalysisLogStorageCapacity", value);
    }

    /**
     */
    public void setThreatAnalysisLogStorageCapacity(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "threatAnalysisLogStorageCapacity", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getVCore() {
        return software.amazon.jsii.Kernel.get(this, "vCore", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVCore(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "vCore", value);
    }

    /**
     */
    public void setVCore(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "vCore", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getVulnerabilityFixing() {
        return software.amazon.jsii.Kernel.get(this, "vulnerabilityFixing", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVulnerabilityFixing(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "vulnerabilityFixing", value);
    }

    /**
     */
    public void setVulnerabilityFixing(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "vulnerabilityFixing", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getWebTamperProtection() {
        return software.amazon.jsii.Kernel.get(this, "webTamperProtection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setWebTamperProtection(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "webTamperProtection", value);
    }

    /**
     */
    public void setWebTamperProtection(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "webTamperProtection", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.sas.RosInstance}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.sas.RosInstance> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
         * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.sas.RosInstanceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.sas.RosInstanceProps.Builder();
        }

        /**
         * @return {@code this}
         * @param period This parameter is required.
         */
        public Builder period(final java.lang.Number period) {
            this.props.period(period);
            return this;
        }
        /**
         * @return {@code this}
         * @param period This parameter is required.
         */
        public Builder period(final com.aliyun.ros.cdk.core.IResolvable period) {
            this.props.period(period);
            return this;
        }

        /**
         * @return {@code this}
         * @param periodUnit This parameter is required.
         */
        public Builder periodUnit(final java.lang.String periodUnit) {
            this.props.periodUnit(periodUnit);
            return this;
        }
        /**
         * @return {@code this}
         * @param periodUnit This parameter is required.
         */
        public Builder periodUnit(final com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.props.periodUnit(periodUnit);
            return this;
        }

        /**
         * @return {@code this}
         * @param antiRansomware This parameter is required.
         */
        public Builder antiRansomware(final java.lang.Number antiRansomware) {
            this.props.antiRansomware(antiRansomware);
            return this;
        }
        /**
         * @return {@code this}
         * @param antiRansomware This parameter is required.
         */
        public Builder antiRansomware(final com.aliyun.ros.cdk.core.IResolvable antiRansomware) {
            this.props.antiRansomware(antiRansomware);
            return this;
        }

        /**
         * @return {@code this}
         * @param autoPay This parameter is required.
         */
        public Builder autoPay(final java.lang.Boolean autoPay) {
            this.props.autoPay(autoPay);
            return this;
        }
        /**
         * @return {@code this}
         * @param autoPay This parameter is required.
         */
        public Builder autoPay(final com.aliyun.ros.cdk.core.IResolvable autoPay) {
            this.props.autoPay(autoPay);
            return this;
        }

        /**
         * @return {@code this}
         * @param autoRenew This parameter is required.
         */
        public Builder autoRenew(final java.lang.Boolean autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }
        /**
         * @return {@code this}
         * @param autoRenew This parameter is required.
         */
        public Builder autoRenew(final com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }

        /**
         * @return {@code this}
         * @param cloudHoneypot This parameter is required.
         */
        public Builder cloudHoneypot(final java.lang.Boolean cloudHoneypot) {
            this.props.cloudHoneypot(cloudHoneypot);
            return this;
        }
        /**
         * @return {@code this}
         * @param cloudHoneypot This parameter is required.
         */
        public Builder cloudHoneypot(final com.aliyun.ros.cdk.core.IResolvable cloudHoneypot) {
            this.props.cloudHoneypot(cloudHoneypot);
            return this;
        }

        /**
         * @return {@code this}
         * @param configurationAssessment This parameter is required.
         */
        public Builder configurationAssessment(final java.lang.Boolean configurationAssessment) {
            this.props.configurationAssessment(configurationAssessment);
            return this;
        }
        /**
         * @return {@code this}
         * @param configurationAssessment This parameter is required.
         */
        public Builder configurationAssessment(final com.aliyun.ros.cdk.core.IResolvable configurationAssessment) {
            this.props.configurationAssessment(configurationAssessment);
            return this;
        }

        /**
         * @return {@code this}
         * @param containerImageScan This parameter is required.
         */
        public Builder containerImageScan(final java.lang.Number containerImageScan) {
            this.props.containerImageScan(containerImageScan);
            return this;
        }
        /**
         * @return {@code this}
         * @param containerImageScan This parameter is required.
         */
        public Builder containerImageScan(final com.aliyun.ros.cdk.core.IResolvable containerImageScan) {
            this.props.containerImageScan(containerImageScan);
            return this;
        }

        /**
         * @return {@code this}
         * @param edition This parameter is required.
         */
        public Builder edition(final java.lang.String edition) {
            this.props.edition(edition);
            return this;
        }
        /**
         * @return {@code this}
         * @param edition This parameter is required.
         */
        public Builder edition(final com.aliyun.ros.cdk.core.IResolvable edition) {
            this.props.edition(edition);
            return this;
        }

        /**
         * @return {@code this}
         * @param logAnalysis This parameter is required.
         */
        public Builder logAnalysis(final java.lang.Number logAnalysis) {
            this.props.logAnalysis(logAnalysis);
            return this;
        }
        /**
         * @return {@code this}
         * @param logAnalysis This parameter is required.
         */
        public Builder logAnalysis(final com.aliyun.ros.cdk.core.IResolvable logAnalysis) {
            this.props.logAnalysis(logAnalysis);
            return this;
        }

        /**
         * @return {@code this}
         * @param maliciousFileDetectionSdk This parameter is required.
         */
        public Builder maliciousFileDetectionSdk(final java.lang.Boolean maliciousFileDetectionSdk) {
            this.props.maliciousFileDetectionSdk(maliciousFileDetectionSdk);
            return this;
        }
        /**
         * @return {@code this}
         * @param maliciousFileDetectionSdk This parameter is required.
         */
        public Builder maliciousFileDetectionSdk(final com.aliyun.ros.cdk.core.IResolvable maliciousFileDetectionSdk) {
            this.props.maliciousFileDetectionSdk(maliciousFileDetectionSdk);
            return this;
        }

        /**
         * @return {@code this}
         * @param protectedServers This parameter is required.
         */
        public Builder protectedServers(final java.lang.Number protectedServers) {
            this.props.protectedServers(protectedServers);
            return this;
        }
        /**
         * @return {@code this}
         * @param protectedServers This parameter is required.
         */
        public Builder protectedServers(final com.aliyun.ros.cdk.core.IResolvable protectedServers) {
            this.props.protectedServers(protectedServers);
            return this;
        }

        /**
         * @return {@code this}
         * @param quotaForApplicationProtection This parameter is required.
         */
        public Builder quotaForApplicationProtection(final java.lang.Number quotaForApplicationProtection) {
            this.props.quotaForApplicationProtection(quotaForApplicationProtection);
            return this;
        }
        /**
         * @return {@code this}
         * @param quotaForApplicationProtection This parameter is required.
         */
        public Builder quotaForApplicationProtection(final com.aliyun.ros.cdk.core.IResolvable quotaForApplicationProtection) {
            this.props.quotaForApplicationProtection(quotaForApplicationProtection);
            return this;
        }

        /**
         * @return {@code this}
         * @param quotaForCloudHoneypot This parameter is required.
         */
        public Builder quotaForCloudHoneypot(final java.lang.Number quotaForCloudHoneypot) {
            this.props.quotaForCloudHoneypot(quotaForCloudHoneypot);
            return this;
        }
        /**
         * @return {@code this}
         * @param quotaForCloudHoneypot This parameter is required.
         */
        public Builder quotaForCloudHoneypot(final com.aliyun.ros.cdk.core.IResolvable quotaForCloudHoneypot) {
            this.props.quotaForCloudHoneypot(quotaForCloudHoneypot);
            return this;
        }

        /**
         * @return {@code this}
         * @param quotaForConfigurationAssessment This parameter is required.
         */
        public Builder quotaForConfigurationAssessment(final java.lang.Number quotaForConfigurationAssessment) {
            this.props.quotaForConfigurationAssessment(quotaForConfigurationAssessment);
            return this;
        }
        /**
         * @return {@code this}
         * @param quotaForConfigurationAssessment This parameter is required.
         */
        public Builder quotaForConfigurationAssessment(final com.aliyun.ros.cdk.core.IResolvable quotaForConfigurationAssessment) {
            this.props.quotaForConfigurationAssessment(quotaForConfigurationAssessment);
            return this;
        }

        /**
         * @return {@code this}
         * @param quotaForMaliciousFileDetectionSdk This parameter is required.
         */
        public Builder quotaForMaliciousFileDetectionSdk(final java.lang.Number quotaForMaliciousFileDetectionSdk) {
            this.props.quotaForMaliciousFileDetectionSdk(quotaForMaliciousFileDetectionSdk);
            return this;
        }
        /**
         * @return {@code this}
         * @param quotaForMaliciousFileDetectionSdk This parameter is required.
         */
        public Builder quotaForMaliciousFileDetectionSdk(final com.aliyun.ros.cdk.core.IResolvable quotaForMaliciousFileDetectionSdk) {
            this.props.quotaForMaliciousFileDetectionSdk(quotaForMaliciousFileDetectionSdk);
            return this;
        }

        /**
         * @return {@code this}
         * @param quotaForVulnerabilityFixing This parameter is required.
         */
        public Builder quotaForVulnerabilityFixing(final java.lang.Number quotaForVulnerabilityFixing) {
            this.props.quotaForVulnerabilityFixing(quotaForVulnerabilityFixing);
            return this;
        }
        /**
         * @return {@code this}
         * @param quotaForVulnerabilityFixing This parameter is required.
         */
        public Builder quotaForVulnerabilityFixing(final com.aliyun.ros.cdk.core.IResolvable quotaForVulnerabilityFixing) {
            this.props.quotaForVulnerabilityFixing(quotaForVulnerabilityFixing);
            return this;
        }

        /**
         * @return {@code this}
         * @param quotaForWebTamperProofing This parameter is required.
         */
        public Builder quotaForWebTamperProofing(final java.lang.Number quotaForWebTamperProofing) {
            this.props.quotaForWebTamperProofing(quotaForWebTamperProofing);
            return this;
        }
        /**
         * @return {@code this}
         * @param quotaForWebTamperProofing This parameter is required.
         */
        public Builder quotaForWebTamperProofing(final com.aliyun.ros.cdk.core.IResolvable quotaForWebTamperProofing) {
            this.props.quotaForWebTamperProofing(quotaForWebTamperProofing);
            return this;
        }

        /**
         * @return {@code this}
         * @param threatAnalysis This parameter is required.
         */
        public Builder threatAnalysis(final java.lang.Boolean threatAnalysis) {
            this.props.threatAnalysis(threatAnalysis);
            return this;
        }
        /**
         * @return {@code this}
         * @param threatAnalysis This parameter is required.
         */
        public Builder threatAnalysis(final com.aliyun.ros.cdk.core.IResolvable threatAnalysis) {
            this.props.threatAnalysis(threatAnalysis);
            return this;
        }

        /**
         * @return {@code this}
         * @param threatAnalysisLogStorageCapacity This parameter is required.
         */
        public Builder threatAnalysisLogStorageCapacity(final java.lang.Number threatAnalysisLogStorageCapacity) {
            this.props.threatAnalysisLogStorageCapacity(threatAnalysisLogStorageCapacity);
            return this;
        }
        /**
         * @return {@code this}
         * @param threatAnalysisLogStorageCapacity This parameter is required.
         */
        public Builder threatAnalysisLogStorageCapacity(final com.aliyun.ros.cdk.core.IResolvable threatAnalysisLogStorageCapacity) {
            this.props.threatAnalysisLogStorageCapacity(threatAnalysisLogStorageCapacity);
            return this;
        }

        /**
         * @return {@code this}
         * @param vCore This parameter is required.
         */
        public Builder vCore(final java.lang.Number vCore) {
            this.props.vCore(vCore);
            return this;
        }
        /**
         * @return {@code this}
         * @param vCore This parameter is required.
         */
        public Builder vCore(final com.aliyun.ros.cdk.core.IResolvable vCore) {
            this.props.vCore(vCore);
            return this;
        }

        /**
         * @return {@code this}
         * @param vulnerabilityFixing This parameter is required.
         */
        public Builder vulnerabilityFixing(final java.lang.Boolean vulnerabilityFixing) {
            this.props.vulnerabilityFixing(vulnerabilityFixing);
            return this;
        }
        /**
         * @return {@code this}
         * @param vulnerabilityFixing This parameter is required.
         */
        public Builder vulnerabilityFixing(final com.aliyun.ros.cdk.core.IResolvable vulnerabilityFixing) {
            this.props.vulnerabilityFixing(vulnerabilityFixing);
            return this;
        }

        /**
         * @return {@code this}
         * @param webTamperProtection This parameter is required.
         */
        public Builder webTamperProtection(final java.lang.Boolean webTamperProtection) {
            this.props.webTamperProtection(webTamperProtection);
            return this;
        }
        /**
         * @return {@code this}
         * @param webTamperProtection This parameter is required.
         */
        public Builder webTamperProtection(final com.aliyun.ros.cdk.core.IResolvable webTamperProtection) {
            this.props.webTamperProtection(webTamperProtection);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.sas.RosInstance}.
         */
        @Override
        public com.aliyun.ros.cdk.sas.RosInstance build() {
            return new com.aliyun.ros.cdk.sas.RosInstance(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
