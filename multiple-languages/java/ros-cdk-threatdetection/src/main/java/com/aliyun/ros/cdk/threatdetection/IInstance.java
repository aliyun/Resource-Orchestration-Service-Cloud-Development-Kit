package com.aliyun.ros.cdk.threatdetection;

/**
 * Represents a <code>Instance</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:51.007Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.threatdetection.$Module.class, fqn = "@alicloud/ros-cdk-threatdetection.IInstance")
@software.amazon.jsii.Jsii.Proxy(IInstance.Jsii$Proxy.class)
public interface IInstance extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute BuyNumber: Number of servers.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrBuyNumber();

    /**
     * Attribute ContainerImageScan: Container Image security scan.
     * <p>
     * Interval type, value interval:[0,200000].
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrContainerImageScan();

    /**
     * Attribute ContainerImageScanNew: Container Image security scan.
     * <p>
     * Interval type, value interval:[0,200000].
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrContainerImageScanNew();

    /**
     * Attribute CreateTime: The creation time of the resource.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute Honeypot: Number of cloud honeypot licenses.
     * <p>
     * Interval type, value interval:[20,500].
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHoneypot();

    /**
     * Attribute HoneypotSwitch: Cloud honeypot.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHoneypotSwitch();

    /**
     * Attribute InstanceId: The first ID of the resource.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId();

    /**
     * Attribute PaymentType: The payment type of the resource.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType();

    /**
     * Attribute RaspCount: Number of application protection licenses.
     * <p>
     * Interval type, value interval:[1,100000000].
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRaspCount();

    /**
     * Attribute RenewalPeriodUnit: Automatic renewal period unit, value:.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRenewalPeriodUnit();

    /**
     * Attribute RenewalStatus: Automatic renewal status, value:.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRenewalStatus();

    /**
     * Attribute RenewPeriod: Automatic renewal cycle, in months.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRenewPeriod();

    /**
     * Attribute SasAntiRansomware: Anti-ransomware capacity.
     * <p>
     * Unit: GB. Interval type, value interval:[0,9999999999].
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSasAntiRansomware();

    /**
     * Attribute SasCspm: Cloud platform configuration check scan times, interval type, value range:[1000,9999999999].
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSasCspm();

    /**
     * Attribute SasCspmSwitch: Cloud platform configuration check switch.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSasCspmSwitch();

    /**
     * Attribute SasSc: Security screen.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSasSc();

    /**
     * Attribute SasSdk: Number of malicious file detections.
     * <p>
     * Unit: 10,000 times. Interval type, value interval:[10,9999999999].
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSasSdk();

    /**
     * Attribute SasSdkSwitch: Malicious file detection SDK.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSasSdkSwitch();

    /**
     * Attribute SasSlsStorage: Log analysis storage capacity.
     * <p>
     * Unit: GB. Interval type, value interval:[0,600000].
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSasSlsStorage();

    /**
     * Attribute SasWebguardBoolean: Web tamper-proof switch.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSasWebguardBoolean();

    /**
     * Attribute SasWebguardOrderNum: Tamper-proof authorization number.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSasWebguardOrderNum();

    /**
     * Attribute ThreatAnalysis: Threat Analysis log storage capacity.
     * <p>
     * Interval type, value interval:[0,9999999999].
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrThreatAnalysis();

    /**
     * Attribute ThreatAnalysisSwitch: Threat analysis.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrThreatAnalysisSwitch();

    /**
     * Attribute VCore: Number of cores.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVCore();

    /**
     * Attribute VersionCode: Select the security center version.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVersionCode();

    /**
     * Attribute VulCount: Vulnerability repair times, interval type, value range:[20,100000000].
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVulCount();

    /**
     * Attribute VulSwitch: Vulnerability fix switch.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVulSwitch();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.InstanceProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.threatdetection.IInstance.Jsii$Default {
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
        }

        /**
         * The construct tree node for this construct.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ConstructNode getNode() {
            return software.amazon.jsii.Kernel.get(this, "node", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ConstructNode.class));
        }

        /**
         * The environment this resource belongs to.
         * <p>
         * For resources that are created and managed by the CDK
         * (generally, those created by creating new class instances like Role, Bucket, etc.),
         * this is always the same as the environment of the stack they belong to;
         * however, for imported resources
         * (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
         * that might be different than the stack they were imported into.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResourceEnvironment getEnv() {
            return software.amazon.jsii.Kernel.get(this, "env", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResourceEnvironment.class));
        }

        /**
         * The stack in which this resource is defined.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack getStack() {
            return software.amazon.jsii.Kernel.get(this, "stack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
        }

        /**
         * Attribute BuyNumber: Number of servers.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrBuyNumber() {
            return software.amazon.jsii.Kernel.get(this, "attrBuyNumber", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ContainerImageScan: Container Image security scan.
         * <p>
         * Interval type, value interval:[0,200000].
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrContainerImageScan() {
            return software.amazon.jsii.Kernel.get(this, "attrContainerImageScan", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ContainerImageScanNew: Container Image security scan.
         * <p>
         * Interval type, value interval:[0,200000].
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrContainerImageScanNew() {
            return software.amazon.jsii.Kernel.get(this, "attrContainerImageScanNew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The creation time of the resource.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Honeypot: Number of cloud honeypot licenses.
         * <p>
         * Interval type, value interval:[20,500].
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHoneypot() {
            return software.amazon.jsii.Kernel.get(this, "attrHoneypot", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HoneypotSwitch: Cloud honeypot.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHoneypotSwitch() {
            return software.amazon.jsii.Kernel.get(this, "attrHoneypotSwitch", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceId: The first ID of the resource.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PaymentType: The payment type of the resource.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType() {
            return software.amazon.jsii.Kernel.get(this, "attrPaymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RaspCount: Number of application protection licenses.
         * <p>
         * Interval type, value interval:[1,100000000].
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRaspCount() {
            return software.amazon.jsii.Kernel.get(this, "attrRaspCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RenewalPeriodUnit: Automatic renewal period unit, value:.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRenewalPeriodUnit() {
            return software.amazon.jsii.Kernel.get(this, "attrRenewalPeriodUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RenewalStatus: Automatic renewal status, value:.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRenewalStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrRenewalStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RenewPeriod: Automatic renewal cycle, in months.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRenewPeriod() {
            return software.amazon.jsii.Kernel.get(this, "attrRenewPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SasAntiRansomware: Anti-ransomware capacity.
         * <p>
         * Unit: GB. Interval type, value interval:[0,9999999999].
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSasAntiRansomware() {
            return software.amazon.jsii.Kernel.get(this, "attrSasAntiRansomware", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SasCspm: Cloud platform configuration check scan times, interval type, value range:[1000,9999999999].
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSasCspm() {
            return software.amazon.jsii.Kernel.get(this, "attrSasCspm", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SasCspmSwitch: Cloud platform configuration check switch.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSasCspmSwitch() {
            return software.amazon.jsii.Kernel.get(this, "attrSasCspmSwitch", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SasSc: Security screen.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSasSc() {
            return software.amazon.jsii.Kernel.get(this, "attrSasSc", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SasSdk: Number of malicious file detections.
         * <p>
         * Unit: 10,000 times. Interval type, value interval:[10,9999999999].
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSasSdk() {
            return software.amazon.jsii.Kernel.get(this, "attrSasSdk", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SasSdkSwitch: Malicious file detection SDK.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSasSdkSwitch() {
            return software.amazon.jsii.Kernel.get(this, "attrSasSdkSwitch", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SasSlsStorage: Log analysis storage capacity.
         * <p>
         * Unit: GB. Interval type, value interval:[0,600000].
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSasSlsStorage() {
            return software.amazon.jsii.Kernel.get(this, "attrSasSlsStorage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SasWebguardBoolean: Web tamper-proof switch.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSasWebguardBoolean() {
            return software.amazon.jsii.Kernel.get(this, "attrSasWebguardBoolean", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SasWebguardOrderNum: Tamper-proof authorization number.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSasWebguardOrderNum() {
            return software.amazon.jsii.Kernel.get(this, "attrSasWebguardOrderNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ThreatAnalysis: Threat Analysis log storage capacity.
         * <p>
         * Interval type, value interval:[0,9999999999].
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrThreatAnalysis() {
            return software.amazon.jsii.Kernel.get(this, "attrThreatAnalysis", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ThreatAnalysisSwitch: Threat analysis.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrThreatAnalysisSwitch() {
            return software.amazon.jsii.Kernel.get(this, "attrThreatAnalysisSwitch", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VCore: Number of cores.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVCore() {
            return software.amazon.jsii.Kernel.get(this, "attrVCore", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VersionCode: Select the security center version.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVersionCode() {
            return software.amazon.jsii.Kernel.get(this, "attrVersionCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VulCount: Vulnerability repair times, interval type, value range:[20,100000000].
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVulCount() {
            return software.amazon.jsii.Kernel.get(this, "attrVulCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VulSwitch: Vulnerability fix switch.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVulSwitch() {
            return software.amazon.jsii.Kernel.get(this, "attrVulSwitch", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.InstanceProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.threatdetection.InstanceProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IInstance}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IInstance, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

        /**
         * The construct tree node for this construct.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ConstructNode getNode() {
            return software.amazon.jsii.Kernel.get(this, "node", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ConstructNode.class));
        }

        /**
         * The environment this resource belongs to.
         * <p>
         * For resources that are created and managed by the CDK
         * (generally, those created by creating new class instances like Role, Bucket, etc.),
         * this is always the same as the environment of the stack they belong to;
         * however, for imported resources
         * (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
         * that might be different than the stack they were imported into.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResourceEnvironment getEnv() {
            return software.amazon.jsii.Kernel.get(this, "env", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResourceEnvironment.class));
        }

        /**
         * The stack in which this resource is defined.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack getStack() {
            return software.amazon.jsii.Kernel.get(this, "stack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
        }

        /**
         * Attribute BuyNumber: Number of servers.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrBuyNumber() {
            return software.amazon.jsii.Kernel.get(this, "attrBuyNumber", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ContainerImageScan: Container Image security scan.
         * <p>
         * Interval type, value interval:[0,200000].
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrContainerImageScan() {
            return software.amazon.jsii.Kernel.get(this, "attrContainerImageScan", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ContainerImageScanNew: Container Image security scan.
         * <p>
         * Interval type, value interval:[0,200000].
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrContainerImageScanNew() {
            return software.amazon.jsii.Kernel.get(this, "attrContainerImageScanNew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The creation time of the resource.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Honeypot: Number of cloud honeypot licenses.
         * <p>
         * Interval type, value interval:[20,500].
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHoneypot() {
            return software.amazon.jsii.Kernel.get(this, "attrHoneypot", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HoneypotSwitch: Cloud honeypot.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHoneypotSwitch() {
            return software.amazon.jsii.Kernel.get(this, "attrHoneypotSwitch", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceId: The first ID of the resource.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PaymentType: The payment type of the resource.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType() {
            return software.amazon.jsii.Kernel.get(this, "attrPaymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RaspCount: Number of application protection licenses.
         * <p>
         * Interval type, value interval:[1,100000000].
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRaspCount() {
            return software.amazon.jsii.Kernel.get(this, "attrRaspCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RenewalPeriodUnit: Automatic renewal period unit, value:.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRenewalPeriodUnit() {
            return software.amazon.jsii.Kernel.get(this, "attrRenewalPeriodUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RenewalStatus: Automatic renewal status, value:.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRenewalStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrRenewalStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RenewPeriod: Automatic renewal cycle, in months.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRenewPeriod() {
            return software.amazon.jsii.Kernel.get(this, "attrRenewPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SasAntiRansomware: Anti-ransomware capacity.
         * <p>
         * Unit: GB. Interval type, value interval:[0,9999999999].
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSasAntiRansomware() {
            return software.amazon.jsii.Kernel.get(this, "attrSasAntiRansomware", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SasCspm: Cloud platform configuration check scan times, interval type, value range:[1000,9999999999].
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSasCspm() {
            return software.amazon.jsii.Kernel.get(this, "attrSasCspm", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SasCspmSwitch: Cloud platform configuration check switch.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSasCspmSwitch() {
            return software.amazon.jsii.Kernel.get(this, "attrSasCspmSwitch", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SasSc: Security screen.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSasSc() {
            return software.amazon.jsii.Kernel.get(this, "attrSasSc", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SasSdk: Number of malicious file detections.
         * <p>
         * Unit: 10,000 times. Interval type, value interval:[10,9999999999].
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSasSdk() {
            return software.amazon.jsii.Kernel.get(this, "attrSasSdk", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SasSdkSwitch: Malicious file detection SDK.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSasSdkSwitch() {
            return software.amazon.jsii.Kernel.get(this, "attrSasSdkSwitch", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SasSlsStorage: Log analysis storage capacity.
         * <p>
         * Unit: GB. Interval type, value interval:[0,600000].
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSasSlsStorage() {
            return software.amazon.jsii.Kernel.get(this, "attrSasSlsStorage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SasWebguardBoolean: Web tamper-proof switch.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSasWebguardBoolean() {
            return software.amazon.jsii.Kernel.get(this, "attrSasWebguardBoolean", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SasWebguardOrderNum: Tamper-proof authorization number.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSasWebguardOrderNum() {
            return software.amazon.jsii.Kernel.get(this, "attrSasWebguardOrderNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ThreatAnalysis: Threat Analysis log storage capacity.
         * <p>
         * Interval type, value interval:[0,9999999999].
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrThreatAnalysis() {
            return software.amazon.jsii.Kernel.get(this, "attrThreatAnalysis", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ThreatAnalysisSwitch: Threat analysis.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrThreatAnalysisSwitch() {
            return software.amazon.jsii.Kernel.get(this, "attrThreatAnalysisSwitch", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VCore: Number of cores.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVCore() {
            return software.amazon.jsii.Kernel.get(this, "attrVCore", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VersionCode: Select the security center version.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVersionCode() {
            return software.amazon.jsii.Kernel.get(this, "attrVersionCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VulCount: Vulnerability repair times, interval type, value range:[20,100000000].
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVulCount() {
            return software.amazon.jsii.Kernel.get(this, "attrVulCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VulSwitch: Vulnerability fix switch.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVulSwitch() {
            return software.amazon.jsii.Kernel.get(this, "attrVulSwitch", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.InstanceProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.threatdetection.InstanceProps.class));
        }
    }
}
