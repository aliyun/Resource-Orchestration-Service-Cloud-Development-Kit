package com.aliyun.ros.cdk.threatdetection;

/**
 * Properties for defining a <code>RosInstance</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-instance
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:30.190Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.threatdetection.$Module.class, fqn = "@alicloud/ros-cdk-threatdetection.RosInstanceProps")
@software.amazon.jsii.Jsii.Proxy(RosInstanceProps.Jsii$Proxy.class)
public interface RosInstanceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPaymentType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVersionCode();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBuyNumber() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getContainerImageScan() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getContainerImageScanNew() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHoneypot() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHoneypotSwitch() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getModifyType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getProductType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRaspCount() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRenewalPeriodUnit() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRenewalStatus() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRenewPeriod() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSasAntiRansomware() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSasCspm() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSasCspmSwitch() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSasSc() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSasSdk() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSasSdkSwitch() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSasSlsStorage() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSasWebguardBoolean() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSasWebguardOrderNum() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getThreatAnalysis() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getThreatAnalysisSwitch() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVCore() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVulCount() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVulSwitch() {
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
        java.lang.Object paymentType;
        java.lang.Object versionCode;
        java.lang.Object buyNumber;
        java.lang.Object containerImageScan;
        java.lang.Object containerImageScanNew;
        java.lang.Object honeypot;
        java.lang.Object honeypotSwitch;
        java.lang.Object modifyType;
        java.lang.Object period;
        java.lang.Object productType;
        java.lang.Object raspCount;
        java.lang.Object renewalPeriodUnit;
        java.lang.Object renewalStatus;
        java.lang.Object renewPeriod;
        java.lang.Object sasAntiRansomware;
        java.lang.Object sasCspm;
        java.lang.Object sasCspmSwitch;
        java.lang.Object sasSc;
        java.lang.Object sasSdk;
        java.lang.Object sasSdkSwitch;
        java.lang.Object sasSlsStorage;
        java.lang.Object sasWebguardBoolean;
        java.lang.Object sasWebguardOrderNum;
        java.lang.Object threatAnalysis;
        java.lang.Object threatAnalysisSwitch;
        java.lang.Object vCore;
        java.lang.Object vulCount;
        java.lang.Object vulSwitch;

        /**
         * Sets the value of {@link RosInstanceProps#getPaymentType}
         * @param paymentType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder paymentType(java.lang.String paymentType) {
            this.paymentType = paymentType;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getPaymentType}
         * @param paymentType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder paymentType(com.aliyun.ros.cdk.core.IResolvable paymentType) {
            this.paymentType = paymentType;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getVersionCode}
         * @param versionCode the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder versionCode(java.lang.String versionCode) {
            this.versionCode = versionCode;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getVersionCode}
         * @param versionCode the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder versionCode(com.aliyun.ros.cdk.core.IResolvable versionCode) {
            this.versionCode = versionCode;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getBuyNumber}
         * @param buyNumber the value to be set.
         * @return {@code this}
         */
        public Builder buyNumber(java.lang.String buyNumber) {
            this.buyNumber = buyNumber;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getBuyNumber}
         * @param buyNumber the value to be set.
         * @return {@code this}
         */
        public Builder buyNumber(com.aliyun.ros.cdk.core.IResolvable buyNumber) {
            this.buyNumber = buyNumber;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getContainerImageScan}
         * @param containerImageScan the value to be set.
         * @return {@code this}
         */
        public Builder containerImageScan(java.lang.String containerImageScan) {
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
         * Sets the value of {@link RosInstanceProps#getContainerImageScanNew}
         * @param containerImageScanNew the value to be set.
         * @return {@code this}
         */
        public Builder containerImageScanNew(java.lang.String containerImageScanNew) {
            this.containerImageScanNew = containerImageScanNew;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getContainerImageScanNew}
         * @param containerImageScanNew the value to be set.
         * @return {@code this}
         */
        public Builder containerImageScanNew(com.aliyun.ros.cdk.core.IResolvable containerImageScanNew) {
            this.containerImageScanNew = containerImageScanNew;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getHoneypot}
         * @param honeypot the value to be set.
         * @return {@code this}
         */
        public Builder honeypot(java.lang.String honeypot) {
            this.honeypot = honeypot;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getHoneypot}
         * @param honeypot the value to be set.
         * @return {@code this}
         */
        public Builder honeypot(com.aliyun.ros.cdk.core.IResolvable honeypot) {
            this.honeypot = honeypot;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getHoneypotSwitch}
         * @param honeypotSwitch the value to be set.
         * @return {@code this}
         */
        public Builder honeypotSwitch(java.lang.String honeypotSwitch) {
            this.honeypotSwitch = honeypotSwitch;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getHoneypotSwitch}
         * @param honeypotSwitch the value to be set.
         * @return {@code this}
         */
        public Builder honeypotSwitch(com.aliyun.ros.cdk.core.IResolvable honeypotSwitch) {
            this.honeypotSwitch = honeypotSwitch;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getModifyType}
         * @param modifyType the value to be set.
         * @return {@code this}
         */
        public Builder modifyType(java.lang.String modifyType) {
            this.modifyType = modifyType;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getModifyType}
         * @param modifyType the value to be set.
         * @return {@code this}
         */
        public Builder modifyType(com.aliyun.ros.cdk.core.IResolvable modifyType) {
            this.modifyType = modifyType;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getPeriod}
         * @param period the value to be set.
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getPeriod}
         * @param period the value to be set.
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getProductType}
         * @param productType the value to be set.
         * @return {@code this}
         */
        public Builder productType(java.lang.String productType) {
            this.productType = productType;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getProductType}
         * @param productType the value to be set.
         * @return {@code this}
         */
        public Builder productType(com.aliyun.ros.cdk.core.IResolvable productType) {
            this.productType = productType;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getRaspCount}
         * @param raspCount the value to be set.
         * @return {@code this}
         */
        public Builder raspCount(java.lang.String raspCount) {
            this.raspCount = raspCount;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getRaspCount}
         * @param raspCount the value to be set.
         * @return {@code this}
         */
        public Builder raspCount(com.aliyun.ros.cdk.core.IResolvable raspCount) {
            this.raspCount = raspCount;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getRenewalPeriodUnit}
         * @param renewalPeriodUnit the value to be set.
         * @return {@code this}
         */
        public Builder renewalPeriodUnit(java.lang.String renewalPeriodUnit) {
            this.renewalPeriodUnit = renewalPeriodUnit;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getRenewalPeriodUnit}
         * @param renewalPeriodUnit the value to be set.
         * @return {@code this}
         */
        public Builder renewalPeriodUnit(com.aliyun.ros.cdk.core.IResolvable renewalPeriodUnit) {
            this.renewalPeriodUnit = renewalPeriodUnit;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getRenewalStatus}
         * @param renewalStatus the value to be set.
         * @return {@code this}
         */
        public Builder renewalStatus(java.lang.String renewalStatus) {
            this.renewalStatus = renewalStatus;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getRenewalStatus}
         * @param renewalStatus the value to be set.
         * @return {@code this}
         */
        public Builder renewalStatus(com.aliyun.ros.cdk.core.IResolvable renewalStatus) {
            this.renewalStatus = renewalStatus;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getRenewPeriod}
         * @param renewPeriod the value to be set.
         * @return {@code this}
         */
        public Builder renewPeriod(java.lang.Number renewPeriod) {
            this.renewPeriod = renewPeriod;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getRenewPeriod}
         * @param renewPeriod the value to be set.
         * @return {@code this}
         */
        public Builder renewPeriod(com.aliyun.ros.cdk.core.IResolvable renewPeriod) {
            this.renewPeriod = renewPeriod;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getSasAntiRansomware}
         * @param sasAntiRansomware the value to be set.
         * @return {@code this}
         */
        public Builder sasAntiRansomware(java.lang.String sasAntiRansomware) {
            this.sasAntiRansomware = sasAntiRansomware;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getSasAntiRansomware}
         * @param sasAntiRansomware the value to be set.
         * @return {@code this}
         */
        public Builder sasAntiRansomware(com.aliyun.ros.cdk.core.IResolvable sasAntiRansomware) {
            this.sasAntiRansomware = sasAntiRansomware;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getSasCspm}
         * @param sasCspm the value to be set.
         * @return {@code this}
         */
        public Builder sasCspm(java.lang.String sasCspm) {
            this.sasCspm = sasCspm;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getSasCspm}
         * @param sasCspm the value to be set.
         * @return {@code this}
         */
        public Builder sasCspm(com.aliyun.ros.cdk.core.IResolvable sasCspm) {
            this.sasCspm = sasCspm;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getSasCspmSwitch}
         * @param sasCspmSwitch the value to be set.
         * @return {@code this}
         */
        public Builder sasCspmSwitch(java.lang.String sasCspmSwitch) {
            this.sasCspmSwitch = sasCspmSwitch;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getSasCspmSwitch}
         * @param sasCspmSwitch the value to be set.
         * @return {@code this}
         */
        public Builder sasCspmSwitch(com.aliyun.ros.cdk.core.IResolvable sasCspmSwitch) {
            this.sasCspmSwitch = sasCspmSwitch;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getSasSc}
         * @param sasSc the value to be set.
         * @return {@code this}
         */
        public Builder sasSc(java.lang.String sasSc) {
            this.sasSc = sasSc;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getSasSc}
         * @param sasSc the value to be set.
         * @return {@code this}
         */
        public Builder sasSc(com.aliyun.ros.cdk.core.IResolvable sasSc) {
            this.sasSc = sasSc;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getSasSdk}
         * @param sasSdk the value to be set.
         * @return {@code this}
         */
        public Builder sasSdk(java.lang.String sasSdk) {
            this.sasSdk = sasSdk;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getSasSdk}
         * @param sasSdk the value to be set.
         * @return {@code this}
         */
        public Builder sasSdk(com.aliyun.ros.cdk.core.IResolvable sasSdk) {
            this.sasSdk = sasSdk;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getSasSdkSwitch}
         * @param sasSdkSwitch the value to be set.
         * @return {@code this}
         */
        public Builder sasSdkSwitch(java.lang.String sasSdkSwitch) {
            this.sasSdkSwitch = sasSdkSwitch;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getSasSdkSwitch}
         * @param sasSdkSwitch the value to be set.
         * @return {@code this}
         */
        public Builder sasSdkSwitch(com.aliyun.ros.cdk.core.IResolvable sasSdkSwitch) {
            this.sasSdkSwitch = sasSdkSwitch;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getSasSlsStorage}
         * @param sasSlsStorage the value to be set.
         * @return {@code this}
         */
        public Builder sasSlsStorage(java.lang.String sasSlsStorage) {
            this.sasSlsStorage = sasSlsStorage;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getSasSlsStorage}
         * @param sasSlsStorage the value to be set.
         * @return {@code this}
         */
        public Builder sasSlsStorage(com.aliyun.ros.cdk.core.IResolvable sasSlsStorage) {
            this.sasSlsStorage = sasSlsStorage;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getSasWebguardBoolean}
         * @param sasWebguardBoolean the value to be set.
         * @return {@code this}
         */
        public Builder sasWebguardBoolean(java.lang.String sasWebguardBoolean) {
            this.sasWebguardBoolean = sasWebguardBoolean;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getSasWebguardBoolean}
         * @param sasWebguardBoolean the value to be set.
         * @return {@code this}
         */
        public Builder sasWebguardBoolean(com.aliyun.ros.cdk.core.IResolvable sasWebguardBoolean) {
            this.sasWebguardBoolean = sasWebguardBoolean;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getSasWebguardOrderNum}
         * @param sasWebguardOrderNum the value to be set.
         * @return {@code this}
         */
        public Builder sasWebguardOrderNum(java.lang.String sasWebguardOrderNum) {
            this.sasWebguardOrderNum = sasWebguardOrderNum;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getSasWebguardOrderNum}
         * @param sasWebguardOrderNum the value to be set.
         * @return {@code this}
         */
        public Builder sasWebguardOrderNum(com.aliyun.ros.cdk.core.IResolvable sasWebguardOrderNum) {
            this.sasWebguardOrderNum = sasWebguardOrderNum;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getThreatAnalysis}
         * @param threatAnalysis the value to be set.
         * @return {@code this}
         */
        public Builder threatAnalysis(java.lang.String threatAnalysis) {
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
         * Sets the value of {@link RosInstanceProps#getThreatAnalysisSwitch}
         * @param threatAnalysisSwitch the value to be set.
         * @return {@code this}
         */
        public Builder threatAnalysisSwitch(java.lang.String threatAnalysisSwitch) {
            this.threatAnalysisSwitch = threatAnalysisSwitch;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getThreatAnalysisSwitch}
         * @param threatAnalysisSwitch the value to be set.
         * @return {@code this}
         */
        public Builder threatAnalysisSwitch(com.aliyun.ros.cdk.core.IResolvable threatAnalysisSwitch) {
            this.threatAnalysisSwitch = threatAnalysisSwitch;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getVCore}
         * @param vCore the value to be set.
         * @return {@code this}
         */
        public Builder vCore(java.lang.String vCore) {
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
         * Sets the value of {@link RosInstanceProps#getVulCount}
         * @param vulCount the value to be set.
         * @return {@code this}
         */
        public Builder vulCount(java.lang.String vulCount) {
            this.vulCount = vulCount;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getVulCount}
         * @param vulCount the value to be set.
         * @return {@code this}
         */
        public Builder vulCount(com.aliyun.ros.cdk.core.IResolvable vulCount) {
            this.vulCount = vulCount;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getVulSwitch}
         * @param vulSwitch the value to be set.
         * @return {@code this}
         */
        public Builder vulSwitch(java.lang.String vulSwitch) {
            this.vulSwitch = vulSwitch;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getVulSwitch}
         * @param vulSwitch the value to be set.
         * @return {@code this}
         */
        public Builder vulSwitch(com.aliyun.ros.cdk.core.IResolvable vulSwitch) {
            this.vulSwitch = vulSwitch;
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
        private final java.lang.Object paymentType;
        private final java.lang.Object versionCode;
        private final java.lang.Object buyNumber;
        private final java.lang.Object containerImageScan;
        private final java.lang.Object containerImageScanNew;
        private final java.lang.Object honeypot;
        private final java.lang.Object honeypotSwitch;
        private final java.lang.Object modifyType;
        private final java.lang.Object period;
        private final java.lang.Object productType;
        private final java.lang.Object raspCount;
        private final java.lang.Object renewalPeriodUnit;
        private final java.lang.Object renewalStatus;
        private final java.lang.Object renewPeriod;
        private final java.lang.Object sasAntiRansomware;
        private final java.lang.Object sasCspm;
        private final java.lang.Object sasCspmSwitch;
        private final java.lang.Object sasSc;
        private final java.lang.Object sasSdk;
        private final java.lang.Object sasSdkSwitch;
        private final java.lang.Object sasSlsStorage;
        private final java.lang.Object sasWebguardBoolean;
        private final java.lang.Object sasWebguardOrderNum;
        private final java.lang.Object threatAnalysis;
        private final java.lang.Object threatAnalysisSwitch;
        private final java.lang.Object vCore;
        private final java.lang.Object vulCount;
        private final java.lang.Object vulSwitch;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.paymentType = software.amazon.jsii.Kernel.get(this, "paymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.versionCode = software.amazon.jsii.Kernel.get(this, "versionCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.buyNumber = software.amazon.jsii.Kernel.get(this, "buyNumber", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.containerImageScan = software.amazon.jsii.Kernel.get(this, "containerImageScan", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.containerImageScanNew = software.amazon.jsii.Kernel.get(this, "containerImageScanNew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.honeypot = software.amazon.jsii.Kernel.get(this, "honeypot", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.honeypotSwitch = software.amazon.jsii.Kernel.get(this, "honeypotSwitch", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.modifyType = software.amazon.jsii.Kernel.get(this, "modifyType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.productType = software.amazon.jsii.Kernel.get(this, "productType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.raspCount = software.amazon.jsii.Kernel.get(this, "raspCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.renewalPeriodUnit = software.amazon.jsii.Kernel.get(this, "renewalPeriodUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.renewalStatus = software.amazon.jsii.Kernel.get(this, "renewalStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.renewPeriod = software.amazon.jsii.Kernel.get(this, "renewPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sasAntiRansomware = software.amazon.jsii.Kernel.get(this, "sasAntiRansomware", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sasCspm = software.amazon.jsii.Kernel.get(this, "sasCspm", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sasCspmSwitch = software.amazon.jsii.Kernel.get(this, "sasCspmSwitch", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sasSc = software.amazon.jsii.Kernel.get(this, "sasSc", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sasSdk = software.amazon.jsii.Kernel.get(this, "sasSdk", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sasSdkSwitch = software.amazon.jsii.Kernel.get(this, "sasSdkSwitch", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sasSlsStorage = software.amazon.jsii.Kernel.get(this, "sasSlsStorage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sasWebguardBoolean = software.amazon.jsii.Kernel.get(this, "sasWebguardBoolean", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sasWebguardOrderNum = software.amazon.jsii.Kernel.get(this, "sasWebguardOrderNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.threatAnalysis = software.amazon.jsii.Kernel.get(this, "threatAnalysis", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.threatAnalysisSwitch = software.amazon.jsii.Kernel.get(this, "threatAnalysisSwitch", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vCore = software.amazon.jsii.Kernel.get(this, "vCore", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vulCount = software.amazon.jsii.Kernel.get(this, "vulCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vulSwitch = software.amazon.jsii.Kernel.get(this, "vulSwitch", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.paymentType = java.util.Objects.requireNonNull(builder.paymentType, "paymentType is required");
            this.versionCode = java.util.Objects.requireNonNull(builder.versionCode, "versionCode is required");
            this.buyNumber = builder.buyNumber;
            this.containerImageScan = builder.containerImageScan;
            this.containerImageScanNew = builder.containerImageScanNew;
            this.honeypot = builder.honeypot;
            this.honeypotSwitch = builder.honeypotSwitch;
            this.modifyType = builder.modifyType;
            this.period = builder.period;
            this.productType = builder.productType;
            this.raspCount = builder.raspCount;
            this.renewalPeriodUnit = builder.renewalPeriodUnit;
            this.renewalStatus = builder.renewalStatus;
            this.renewPeriod = builder.renewPeriod;
            this.sasAntiRansomware = builder.sasAntiRansomware;
            this.sasCspm = builder.sasCspm;
            this.sasCspmSwitch = builder.sasCspmSwitch;
            this.sasSc = builder.sasSc;
            this.sasSdk = builder.sasSdk;
            this.sasSdkSwitch = builder.sasSdkSwitch;
            this.sasSlsStorage = builder.sasSlsStorage;
            this.sasWebguardBoolean = builder.sasWebguardBoolean;
            this.sasWebguardOrderNum = builder.sasWebguardOrderNum;
            this.threatAnalysis = builder.threatAnalysis;
            this.threatAnalysisSwitch = builder.threatAnalysisSwitch;
            this.vCore = builder.vCore;
            this.vulCount = builder.vulCount;
            this.vulSwitch = builder.vulSwitch;
        }

        @Override
        public final java.lang.Object getPaymentType() {
            return this.paymentType;
        }

        @Override
        public final java.lang.Object getVersionCode() {
            return this.versionCode;
        }

        @Override
        public final java.lang.Object getBuyNumber() {
            return this.buyNumber;
        }

        @Override
        public final java.lang.Object getContainerImageScan() {
            return this.containerImageScan;
        }

        @Override
        public final java.lang.Object getContainerImageScanNew() {
            return this.containerImageScanNew;
        }

        @Override
        public final java.lang.Object getHoneypot() {
            return this.honeypot;
        }

        @Override
        public final java.lang.Object getHoneypotSwitch() {
            return this.honeypotSwitch;
        }

        @Override
        public final java.lang.Object getModifyType() {
            return this.modifyType;
        }

        @Override
        public final java.lang.Object getPeriod() {
            return this.period;
        }

        @Override
        public final java.lang.Object getProductType() {
            return this.productType;
        }

        @Override
        public final java.lang.Object getRaspCount() {
            return this.raspCount;
        }

        @Override
        public final java.lang.Object getRenewalPeriodUnit() {
            return this.renewalPeriodUnit;
        }

        @Override
        public final java.lang.Object getRenewalStatus() {
            return this.renewalStatus;
        }

        @Override
        public final java.lang.Object getRenewPeriod() {
            return this.renewPeriod;
        }

        @Override
        public final java.lang.Object getSasAntiRansomware() {
            return this.sasAntiRansomware;
        }

        @Override
        public final java.lang.Object getSasCspm() {
            return this.sasCspm;
        }

        @Override
        public final java.lang.Object getSasCspmSwitch() {
            return this.sasCspmSwitch;
        }

        @Override
        public final java.lang.Object getSasSc() {
            return this.sasSc;
        }

        @Override
        public final java.lang.Object getSasSdk() {
            return this.sasSdk;
        }

        @Override
        public final java.lang.Object getSasSdkSwitch() {
            return this.sasSdkSwitch;
        }

        @Override
        public final java.lang.Object getSasSlsStorage() {
            return this.sasSlsStorage;
        }

        @Override
        public final java.lang.Object getSasWebguardBoolean() {
            return this.sasWebguardBoolean;
        }

        @Override
        public final java.lang.Object getSasWebguardOrderNum() {
            return this.sasWebguardOrderNum;
        }

        @Override
        public final java.lang.Object getThreatAnalysis() {
            return this.threatAnalysis;
        }

        @Override
        public final java.lang.Object getThreatAnalysisSwitch() {
            return this.threatAnalysisSwitch;
        }

        @Override
        public final java.lang.Object getVCore() {
            return this.vCore;
        }

        @Override
        public final java.lang.Object getVulCount() {
            return this.vulCount;
        }

        @Override
        public final java.lang.Object getVulSwitch() {
            return this.vulSwitch;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("paymentType", om.valueToTree(this.getPaymentType()));
            data.set("versionCode", om.valueToTree(this.getVersionCode()));
            if (this.getBuyNumber() != null) {
                data.set("buyNumber", om.valueToTree(this.getBuyNumber()));
            }
            if (this.getContainerImageScan() != null) {
                data.set("containerImageScan", om.valueToTree(this.getContainerImageScan()));
            }
            if (this.getContainerImageScanNew() != null) {
                data.set("containerImageScanNew", om.valueToTree(this.getContainerImageScanNew()));
            }
            if (this.getHoneypot() != null) {
                data.set("honeypot", om.valueToTree(this.getHoneypot()));
            }
            if (this.getHoneypotSwitch() != null) {
                data.set("honeypotSwitch", om.valueToTree(this.getHoneypotSwitch()));
            }
            if (this.getModifyType() != null) {
                data.set("modifyType", om.valueToTree(this.getModifyType()));
            }
            if (this.getPeriod() != null) {
                data.set("period", om.valueToTree(this.getPeriod()));
            }
            if (this.getProductType() != null) {
                data.set("productType", om.valueToTree(this.getProductType()));
            }
            if (this.getRaspCount() != null) {
                data.set("raspCount", om.valueToTree(this.getRaspCount()));
            }
            if (this.getRenewalPeriodUnit() != null) {
                data.set("renewalPeriodUnit", om.valueToTree(this.getRenewalPeriodUnit()));
            }
            if (this.getRenewalStatus() != null) {
                data.set("renewalStatus", om.valueToTree(this.getRenewalStatus()));
            }
            if (this.getRenewPeriod() != null) {
                data.set("renewPeriod", om.valueToTree(this.getRenewPeriod()));
            }
            if (this.getSasAntiRansomware() != null) {
                data.set("sasAntiRansomware", om.valueToTree(this.getSasAntiRansomware()));
            }
            if (this.getSasCspm() != null) {
                data.set("sasCspm", om.valueToTree(this.getSasCspm()));
            }
            if (this.getSasCspmSwitch() != null) {
                data.set("sasCspmSwitch", om.valueToTree(this.getSasCspmSwitch()));
            }
            if (this.getSasSc() != null) {
                data.set("sasSc", om.valueToTree(this.getSasSc()));
            }
            if (this.getSasSdk() != null) {
                data.set("sasSdk", om.valueToTree(this.getSasSdk()));
            }
            if (this.getSasSdkSwitch() != null) {
                data.set("sasSdkSwitch", om.valueToTree(this.getSasSdkSwitch()));
            }
            if (this.getSasSlsStorage() != null) {
                data.set("sasSlsStorage", om.valueToTree(this.getSasSlsStorage()));
            }
            if (this.getSasWebguardBoolean() != null) {
                data.set("sasWebguardBoolean", om.valueToTree(this.getSasWebguardBoolean()));
            }
            if (this.getSasWebguardOrderNum() != null) {
                data.set("sasWebguardOrderNum", om.valueToTree(this.getSasWebguardOrderNum()));
            }
            if (this.getThreatAnalysis() != null) {
                data.set("threatAnalysis", om.valueToTree(this.getThreatAnalysis()));
            }
            if (this.getThreatAnalysisSwitch() != null) {
                data.set("threatAnalysisSwitch", om.valueToTree(this.getThreatAnalysisSwitch()));
            }
            if (this.getVCore() != null) {
                data.set("vCore", om.valueToTree(this.getVCore()));
            }
            if (this.getVulCount() != null) {
                data.set("vulCount", om.valueToTree(this.getVulCount()));
            }
            if (this.getVulSwitch() != null) {
                data.set("vulSwitch", om.valueToTree(this.getVulSwitch()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-threatdetection.RosInstanceProps"));
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

            if (!paymentType.equals(that.paymentType)) return false;
            if (!versionCode.equals(that.versionCode)) return false;
            if (this.buyNumber != null ? !this.buyNumber.equals(that.buyNumber) : that.buyNumber != null) return false;
            if (this.containerImageScan != null ? !this.containerImageScan.equals(that.containerImageScan) : that.containerImageScan != null) return false;
            if (this.containerImageScanNew != null ? !this.containerImageScanNew.equals(that.containerImageScanNew) : that.containerImageScanNew != null) return false;
            if (this.honeypot != null ? !this.honeypot.equals(that.honeypot) : that.honeypot != null) return false;
            if (this.honeypotSwitch != null ? !this.honeypotSwitch.equals(that.honeypotSwitch) : that.honeypotSwitch != null) return false;
            if (this.modifyType != null ? !this.modifyType.equals(that.modifyType) : that.modifyType != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.productType != null ? !this.productType.equals(that.productType) : that.productType != null) return false;
            if (this.raspCount != null ? !this.raspCount.equals(that.raspCount) : that.raspCount != null) return false;
            if (this.renewalPeriodUnit != null ? !this.renewalPeriodUnit.equals(that.renewalPeriodUnit) : that.renewalPeriodUnit != null) return false;
            if (this.renewalStatus != null ? !this.renewalStatus.equals(that.renewalStatus) : that.renewalStatus != null) return false;
            if (this.renewPeriod != null ? !this.renewPeriod.equals(that.renewPeriod) : that.renewPeriod != null) return false;
            if (this.sasAntiRansomware != null ? !this.sasAntiRansomware.equals(that.sasAntiRansomware) : that.sasAntiRansomware != null) return false;
            if (this.sasCspm != null ? !this.sasCspm.equals(that.sasCspm) : that.sasCspm != null) return false;
            if (this.sasCspmSwitch != null ? !this.sasCspmSwitch.equals(that.sasCspmSwitch) : that.sasCspmSwitch != null) return false;
            if (this.sasSc != null ? !this.sasSc.equals(that.sasSc) : that.sasSc != null) return false;
            if (this.sasSdk != null ? !this.sasSdk.equals(that.sasSdk) : that.sasSdk != null) return false;
            if (this.sasSdkSwitch != null ? !this.sasSdkSwitch.equals(that.sasSdkSwitch) : that.sasSdkSwitch != null) return false;
            if (this.sasSlsStorage != null ? !this.sasSlsStorage.equals(that.sasSlsStorage) : that.sasSlsStorage != null) return false;
            if (this.sasWebguardBoolean != null ? !this.sasWebguardBoolean.equals(that.sasWebguardBoolean) : that.sasWebguardBoolean != null) return false;
            if (this.sasWebguardOrderNum != null ? !this.sasWebguardOrderNum.equals(that.sasWebguardOrderNum) : that.sasWebguardOrderNum != null) return false;
            if (this.threatAnalysis != null ? !this.threatAnalysis.equals(that.threatAnalysis) : that.threatAnalysis != null) return false;
            if (this.threatAnalysisSwitch != null ? !this.threatAnalysisSwitch.equals(that.threatAnalysisSwitch) : that.threatAnalysisSwitch != null) return false;
            if (this.vCore != null ? !this.vCore.equals(that.vCore) : that.vCore != null) return false;
            if (this.vulCount != null ? !this.vulCount.equals(that.vulCount) : that.vulCount != null) return false;
            return this.vulSwitch != null ? this.vulSwitch.equals(that.vulSwitch) : that.vulSwitch == null;
        }

        @Override
        public final int hashCode() {
            int result = this.paymentType.hashCode();
            result = 31 * result + (this.versionCode.hashCode());
            result = 31 * result + (this.buyNumber != null ? this.buyNumber.hashCode() : 0);
            result = 31 * result + (this.containerImageScan != null ? this.containerImageScan.hashCode() : 0);
            result = 31 * result + (this.containerImageScanNew != null ? this.containerImageScanNew.hashCode() : 0);
            result = 31 * result + (this.honeypot != null ? this.honeypot.hashCode() : 0);
            result = 31 * result + (this.honeypotSwitch != null ? this.honeypotSwitch.hashCode() : 0);
            result = 31 * result + (this.modifyType != null ? this.modifyType.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.productType != null ? this.productType.hashCode() : 0);
            result = 31 * result + (this.raspCount != null ? this.raspCount.hashCode() : 0);
            result = 31 * result + (this.renewalPeriodUnit != null ? this.renewalPeriodUnit.hashCode() : 0);
            result = 31 * result + (this.renewalStatus != null ? this.renewalStatus.hashCode() : 0);
            result = 31 * result + (this.renewPeriod != null ? this.renewPeriod.hashCode() : 0);
            result = 31 * result + (this.sasAntiRansomware != null ? this.sasAntiRansomware.hashCode() : 0);
            result = 31 * result + (this.sasCspm != null ? this.sasCspm.hashCode() : 0);
            result = 31 * result + (this.sasCspmSwitch != null ? this.sasCspmSwitch.hashCode() : 0);
            result = 31 * result + (this.sasSc != null ? this.sasSc.hashCode() : 0);
            result = 31 * result + (this.sasSdk != null ? this.sasSdk.hashCode() : 0);
            result = 31 * result + (this.sasSdkSwitch != null ? this.sasSdkSwitch.hashCode() : 0);
            result = 31 * result + (this.sasSlsStorage != null ? this.sasSlsStorage.hashCode() : 0);
            result = 31 * result + (this.sasWebguardBoolean != null ? this.sasWebguardBoolean.hashCode() : 0);
            result = 31 * result + (this.sasWebguardOrderNum != null ? this.sasWebguardOrderNum.hashCode() : 0);
            result = 31 * result + (this.threatAnalysis != null ? this.threatAnalysis.hashCode() : 0);
            result = 31 * result + (this.threatAnalysisSwitch != null ? this.threatAnalysisSwitch.hashCode() : 0);
            result = 31 * result + (this.vCore != null ? this.vCore.hashCode() : 0);
            result = 31 * result + (this.vulCount != null ? this.vulCount.hashCode() : 0);
            result = 31 * result + (this.vulSwitch != null ? this.vulSwitch.hashCode() : 0);
            return result;
        }
    }
}
