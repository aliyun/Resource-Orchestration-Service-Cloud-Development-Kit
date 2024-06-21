package com.aliyun.ros.cdk.threatdetection;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::ThreatDetection::Instance</code>, which is used to purchase Security Center (SAS).
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-21T05:59:12.544Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.threatdetection.$Module.class, fqn = "@alicloud/ros-cdk-threatdetection.RosInstance")
public class RosInstance extends com.aliyun.ros.cdk.core.RosResource {

    protected RosInstance(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosInstance(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.threatdetection.RosInstance.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosInstance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.RosInstanceProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrBuyNumber() {
        return software.amazon.jsii.Kernel.get(this, "attrBuyNumber", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrContainerImageScan() {
        return software.amazon.jsii.Kernel.get(this, "attrContainerImageScan", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrContainerImageScanNew() {
        return software.amazon.jsii.Kernel.get(this, "attrContainerImageScanNew", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHoneypot() {
        return software.amazon.jsii.Kernel.get(this, "attrHoneypot", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHoneypotSwitch() {
        return software.amazon.jsii.Kernel.get(this, "attrHoneypotSwitch", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPaymentType() {
        return software.amazon.jsii.Kernel.get(this, "attrPaymentType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRaspCount() {
        return software.amazon.jsii.Kernel.get(this, "attrRaspCount", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRenewalPeriodUnit() {
        return software.amazon.jsii.Kernel.get(this, "attrRenewalPeriodUnit", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRenewalStatus() {
        return software.amazon.jsii.Kernel.get(this, "attrRenewalStatus", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRenewPeriod() {
        return software.amazon.jsii.Kernel.get(this, "attrRenewPeriod", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSasAntiRansomware() {
        return software.amazon.jsii.Kernel.get(this, "attrSasAntiRansomware", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSasCspm() {
        return software.amazon.jsii.Kernel.get(this, "attrSasCspm", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSasCspmSwitch() {
        return software.amazon.jsii.Kernel.get(this, "attrSasCspmSwitch", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSasSc() {
        return software.amazon.jsii.Kernel.get(this, "attrSasSc", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSasSdk() {
        return software.amazon.jsii.Kernel.get(this, "attrSasSdk", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSasSdkSwitch() {
        return software.amazon.jsii.Kernel.get(this, "attrSasSdkSwitch", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSasSlsStorage() {
        return software.amazon.jsii.Kernel.get(this, "attrSasSlsStorage", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSasWebguardBoolean() {
        return software.amazon.jsii.Kernel.get(this, "attrSasWebguardBoolean", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSasWebguardOrderNum() {
        return software.amazon.jsii.Kernel.get(this, "attrSasWebguardOrderNum", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrThreatAnalysis() {
        return software.amazon.jsii.Kernel.get(this, "attrThreatAnalysis", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrThreatAnalysisSwitch() {
        return software.amazon.jsii.Kernel.get(this, "attrThreatAnalysisSwitch", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVCore() {
        return software.amazon.jsii.Kernel.get(this, "attrVCore", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVersionCode() {
        return software.amazon.jsii.Kernel.get(this, "attrVersionCode", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVulCount() {
        return software.amazon.jsii.Kernel.get(this, "attrVulCount", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVulSwitch() {
        return software.amazon.jsii.Kernel.get(this, "attrVulSwitch", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getPaymentType() {
        return software.amazon.jsii.Kernel.get(this, "paymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPaymentType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "paymentType", java.util.Objects.requireNonNull(value, "paymentType is required"));
    }

    /**
     */
    public void setPaymentType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "paymentType", java.util.Objects.requireNonNull(value, "paymentType is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getVersionCode() {
        return software.amazon.jsii.Kernel.get(this, "versionCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVersionCode(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "versionCode", java.util.Objects.requireNonNull(value, "versionCode is required"));
    }

    /**
     */
    public void setVersionCode(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "versionCode", java.util.Objects.requireNonNull(value, "versionCode is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getBuyNumber() {
        return software.amazon.jsii.Kernel.get(this, "buyNumber", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setBuyNumber(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "buyNumber", value);
    }

    /**
     */
    public void setBuyNumber(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "buyNumber", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getContainerImageScan() {
        return software.amazon.jsii.Kernel.get(this, "containerImageScan", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setContainerImageScan(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "containerImageScan", value);
    }

    /**
     */
    public void setContainerImageScan(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "containerImageScan", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getContainerImageScanNew() {
        return software.amazon.jsii.Kernel.get(this, "containerImageScanNew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setContainerImageScanNew(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "containerImageScanNew", value);
    }

    /**
     */
    public void setContainerImageScanNew(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "containerImageScanNew", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getHoneypot() {
        return software.amazon.jsii.Kernel.get(this, "honeypot", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHoneypot(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "honeypot", value);
    }

    /**
     */
    public void setHoneypot(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "honeypot", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getHoneypotSwitch() {
        return software.amazon.jsii.Kernel.get(this, "honeypotSwitch", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHoneypotSwitch(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "honeypotSwitch", value);
    }

    /**
     */
    public void setHoneypotSwitch(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "honeypotSwitch", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getModifyType() {
        return software.amazon.jsii.Kernel.get(this, "modifyType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setModifyType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "modifyType", value);
    }

    /**
     */
    public void setModifyType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "modifyType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
        return software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPeriod(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "period", value);
    }

    /**
     */
    public void setPeriod(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "period", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getProductType() {
        return software.amazon.jsii.Kernel.get(this, "productType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setProductType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "productType", value);
    }

    /**
     */
    public void setProductType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "productType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRaspCount() {
        return software.amazon.jsii.Kernel.get(this, "raspCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRaspCount(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "raspCount", value);
    }

    /**
     */
    public void setRaspCount(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "raspCount", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRenewalPeriodUnit() {
        return software.amazon.jsii.Kernel.get(this, "renewalPeriodUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRenewalPeriodUnit(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "renewalPeriodUnit", value);
    }

    /**
     */
    public void setRenewalPeriodUnit(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "renewalPeriodUnit", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRenewalStatus() {
        return software.amazon.jsii.Kernel.get(this, "renewalStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRenewalStatus(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "renewalStatus", value);
    }

    /**
     */
    public void setRenewalStatus(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "renewalStatus", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRenewPeriod() {
        return software.amazon.jsii.Kernel.get(this, "renewPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRenewPeriod(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "renewPeriod", value);
    }

    /**
     */
    public void setRenewPeriod(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "renewPeriod", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSasAntiRansomware() {
        return software.amazon.jsii.Kernel.get(this, "sasAntiRansomware", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSasAntiRansomware(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "sasAntiRansomware", value);
    }

    /**
     */
    public void setSasAntiRansomware(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sasAntiRansomware", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSasCspm() {
        return software.amazon.jsii.Kernel.get(this, "sasCspm", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSasCspm(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "sasCspm", value);
    }

    /**
     */
    public void setSasCspm(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sasCspm", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSasCspmSwitch() {
        return software.amazon.jsii.Kernel.get(this, "sasCspmSwitch", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSasCspmSwitch(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "sasCspmSwitch", value);
    }

    /**
     */
    public void setSasCspmSwitch(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sasCspmSwitch", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSasSc() {
        return software.amazon.jsii.Kernel.get(this, "sasSc", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSasSc(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "sasSc", value);
    }

    /**
     */
    public void setSasSc(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sasSc", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSasSdk() {
        return software.amazon.jsii.Kernel.get(this, "sasSdk", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSasSdk(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "sasSdk", value);
    }

    /**
     */
    public void setSasSdk(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sasSdk", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSasSdkSwitch() {
        return software.amazon.jsii.Kernel.get(this, "sasSdkSwitch", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSasSdkSwitch(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "sasSdkSwitch", value);
    }

    /**
     */
    public void setSasSdkSwitch(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sasSdkSwitch", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSasSlsStorage() {
        return software.amazon.jsii.Kernel.get(this, "sasSlsStorage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSasSlsStorage(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "sasSlsStorage", value);
    }

    /**
     */
    public void setSasSlsStorage(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sasSlsStorage", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSasWebguardBoolean() {
        return software.amazon.jsii.Kernel.get(this, "sasWebguardBoolean", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSasWebguardBoolean(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "sasWebguardBoolean", value);
    }

    /**
     */
    public void setSasWebguardBoolean(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sasWebguardBoolean", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSasWebguardOrderNum() {
        return software.amazon.jsii.Kernel.get(this, "sasWebguardOrderNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSasWebguardOrderNum(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "sasWebguardOrderNum", value);
    }

    /**
     */
    public void setSasWebguardOrderNum(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sasWebguardOrderNum", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getThreatAnalysis() {
        return software.amazon.jsii.Kernel.get(this, "threatAnalysis", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setThreatAnalysis(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "threatAnalysis", value);
    }

    /**
     */
    public void setThreatAnalysis(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "threatAnalysis", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getThreatAnalysisSwitch() {
        return software.amazon.jsii.Kernel.get(this, "threatAnalysisSwitch", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setThreatAnalysisSwitch(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "threatAnalysisSwitch", value);
    }

    /**
     */
    public void setThreatAnalysisSwitch(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "threatAnalysisSwitch", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getVCore() {
        return software.amazon.jsii.Kernel.get(this, "vCore", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVCore(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "vCore", value);
    }

    /**
     */
    public void setVCore(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "vCore", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getVulCount() {
        return software.amazon.jsii.Kernel.get(this, "vulCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVulCount(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "vulCount", value);
    }

    /**
     */
    public void setVulCount(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "vulCount", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getVulSwitch() {
        return software.amazon.jsii.Kernel.get(this, "vulSwitch", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVulSwitch(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "vulSwitch", value);
    }

    /**
     */
    public void setVulSwitch(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "vulSwitch", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.threatdetection.RosInstance}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.threatdetection.RosInstance> {
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
        private final com.aliyun.ros.cdk.threatdetection.RosInstanceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.threatdetection.RosInstanceProps.Builder();
        }

        /**
         * @return {@code this}
         * @param paymentType This parameter is required.
         */
        public Builder paymentType(final java.lang.String paymentType) {
            this.props.paymentType(paymentType);
            return this;
        }
        /**
         * @return {@code this}
         * @param paymentType This parameter is required.
         */
        public Builder paymentType(final com.aliyun.ros.cdk.core.IResolvable paymentType) {
            this.props.paymentType(paymentType);
            return this;
        }

        /**
         * @return {@code this}
         * @param versionCode This parameter is required.
         */
        public Builder versionCode(final java.lang.String versionCode) {
            this.props.versionCode(versionCode);
            return this;
        }
        /**
         * @return {@code this}
         * @param versionCode This parameter is required.
         */
        public Builder versionCode(final com.aliyun.ros.cdk.core.IResolvable versionCode) {
            this.props.versionCode(versionCode);
            return this;
        }

        /**
         * @return {@code this}
         * @param buyNumber This parameter is required.
         */
        public Builder buyNumber(final java.lang.String buyNumber) {
            this.props.buyNumber(buyNumber);
            return this;
        }
        /**
         * @return {@code this}
         * @param buyNumber This parameter is required.
         */
        public Builder buyNumber(final com.aliyun.ros.cdk.core.IResolvable buyNumber) {
            this.props.buyNumber(buyNumber);
            return this;
        }

        /**
         * @return {@code this}
         * @param containerImageScan This parameter is required.
         */
        public Builder containerImageScan(final java.lang.String containerImageScan) {
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
         * @param containerImageScanNew This parameter is required.
         */
        public Builder containerImageScanNew(final java.lang.String containerImageScanNew) {
            this.props.containerImageScanNew(containerImageScanNew);
            return this;
        }
        /**
         * @return {@code this}
         * @param containerImageScanNew This parameter is required.
         */
        public Builder containerImageScanNew(final com.aliyun.ros.cdk.core.IResolvable containerImageScanNew) {
            this.props.containerImageScanNew(containerImageScanNew);
            return this;
        }

        /**
         * @return {@code this}
         * @param honeypot This parameter is required.
         */
        public Builder honeypot(final java.lang.String honeypot) {
            this.props.honeypot(honeypot);
            return this;
        }
        /**
         * @return {@code this}
         * @param honeypot This parameter is required.
         */
        public Builder honeypot(final com.aliyun.ros.cdk.core.IResolvable honeypot) {
            this.props.honeypot(honeypot);
            return this;
        }

        /**
         * @return {@code this}
         * @param honeypotSwitch This parameter is required.
         */
        public Builder honeypotSwitch(final java.lang.String honeypotSwitch) {
            this.props.honeypotSwitch(honeypotSwitch);
            return this;
        }
        /**
         * @return {@code this}
         * @param honeypotSwitch This parameter is required.
         */
        public Builder honeypotSwitch(final com.aliyun.ros.cdk.core.IResolvable honeypotSwitch) {
            this.props.honeypotSwitch(honeypotSwitch);
            return this;
        }

        /**
         * @return {@code this}
         * @param modifyType This parameter is required.
         */
        public Builder modifyType(final java.lang.String modifyType) {
            this.props.modifyType(modifyType);
            return this;
        }
        /**
         * @return {@code this}
         * @param modifyType This parameter is required.
         */
        public Builder modifyType(final com.aliyun.ros.cdk.core.IResolvable modifyType) {
            this.props.modifyType(modifyType);
            return this;
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
         * @param productType This parameter is required.
         */
        public Builder productType(final java.lang.String productType) {
            this.props.productType(productType);
            return this;
        }
        /**
         * @return {@code this}
         * @param productType This parameter is required.
         */
        public Builder productType(final com.aliyun.ros.cdk.core.IResolvable productType) {
            this.props.productType(productType);
            return this;
        }

        /**
         * @return {@code this}
         * @param raspCount This parameter is required.
         */
        public Builder raspCount(final java.lang.String raspCount) {
            this.props.raspCount(raspCount);
            return this;
        }
        /**
         * @return {@code this}
         * @param raspCount This parameter is required.
         */
        public Builder raspCount(final com.aliyun.ros.cdk.core.IResolvable raspCount) {
            this.props.raspCount(raspCount);
            return this;
        }

        /**
         * @return {@code this}
         * @param renewalPeriodUnit This parameter is required.
         */
        public Builder renewalPeriodUnit(final java.lang.String renewalPeriodUnit) {
            this.props.renewalPeriodUnit(renewalPeriodUnit);
            return this;
        }
        /**
         * @return {@code this}
         * @param renewalPeriodUnit This parameter is required.
         */
        public Builder renewalPeriodUnit(final com.aliyun.ros.cdk.core.IResolvable renewalPeriodUnit) {
            this.props.renewalPeriodUnit(renewalPeriodUnit);
            return this;
        }

        /**
         * @return {@code this}
         * @param renewalStatus This parameter is required.
         */
        public Builder renewalStatus(final java.lang.String renewalStatus) {
            this.props.renewalStatus(renewalStatus);
            return this;
        }
        /**
         * @return {@code this}
         * @param renewalStatus This parameter is required.
         */
        public Builder renewalStatus(final com.aliyun.ros.cdk.core.IResolvable renewalStatus) {
            this.props.renewalStatus(renewalStatus);
            return this;
        }

        /**
         * @return {@code this}
         * @param renewPeriod This parameter is required.
         */
        public Builder renewPeriod(final java.lang.Number renewPeriod) {
            this.props.renewPeriod(renewPeriod);
            return this;
        }
        /**
         * @return {@code this}
         * @param renewPeriod This parameter is required.
         */
        public Builder renewPeriod(final com.aliyun.ros.cdk.core.IResolvable renewPeriod) {
            this.props.renewPeriod(renewPeriod);
            return this;
        }

        /**
         * @return {@code this}
         * @param sasAntiRansomware This parameter is required.
         */
        public Builder sasAntiRansomware(final java.lang.String sasAntiRansomware) {
            this.props.sasAntiRansomware(sasAntiRansomware);
            return this;
        }
        /**
         * @return {@code this}
         * @param sasAntiRansomware This parameter is required.
         */
        public Builder sasAntiRansomware(final com.aliyun.ros.cdk.core.IResolvable sasAntiRansomware) {
            this.props.sasAntiRansomware(sasAntiRansomware);
            return this;
        }

        /**
         * @return {@code this}
         * @param sasCspm This parameter is required.
         */
        public Builder sasCspm(final java.lang.String sasCspm) {
            this.props.sasCspm(sasCspm);
            return this;
        }
        /**
         * @return {@code this}
         * @param sasCspm This parameter is required.
         */
        public Builder sasCspm(final com.aliyun.ros.cdk.core.IResolvable sasCspm) {
            this.props.sasCspm(sasCspm);
            return this;
        }

        /**
         * @return {@code this}
         * @param sasCspmSwitch This parameter is required.
         */
        public Builder sasCspmSwitch(final java.lang.String sasCspmSwitch) {
            this.props.sasCspmSwitch(sasCspmSwitch);
            return this;
        }
        /**
         * @return {@code this}
         * @param sasCspmSwitch This parameter is required.
         */
        public Builder sasCspmSwitch(final com.aliyun.ros.cdk.core.IResolvable sasCspmSwitch) {
            this.props.sasCspmSwitch(sasCspmSwitch);
            return this;
        }

        /**
         * @return {@code this}
         * @param sasSc This parameter is required.
         */
        public Builder sasSc(final java.lang.String sasSc) {
            this.props.sasSc(sasSc);
            return this;
        }
        /**
         * @return {@code this}
         * @param sasSc This parameter is required.
         */
        public Builder sasSc(final com.aliyun.ros.cdk.core.IResolvable sasSc) {
            this.props.sasSc(sasSc);
            return this;
        }

        /**
         * @return {@code this}
         * @param sasSdk This parameter is required.
         */
        public Builder sasSdk(final java.lang.String sasSdk) {
            this.props.sasSdk(sasSdk);
            return this;
        }
        /**
         * @return {@code this}
         * @param sasSdk This parameter is required.
         */
        public Builder sasSdk(final com.aliyun.ros.cdk.core.IResolvable sasSdk) {
            this.props.sasSdk(sasSdk);
            return this;
        }

        /**
         * @return {@code this}
         * @param sasSdkSwitch This parameter is required.
         */
        public Builder sasSdkSwitch(final java.lang.String sasSdkSwitch) {
            this.props.sasSdkSwitch(sasSdkSwitch);
            return this;
        }
        /**
         * @return {@code this}
         * @param sasSdkSwitch This parameter is required.
         */
        public Builder sasSdkSwitch(final com.aliyun.ros.cdk.core.IResolvable sasSdkSwitch) {
            this.props.sasSdkSwitch(sasSdkSwitch);
            return this;
        }

        /**
         * @return {@code this}
         * @param sasSlsStorage This parameter is required.
         */
        public Builder sasSlsStorage(final java.lang.String sasSlsStorage) {
            this.props.sasSlsStorage(sasSlsStorage);
            return this;
        }
        /**
         * @return {@code this}
         * @param sasSlsStorage This parameter is required.
         */
        public Builder sasSlsStorage(final com.aliyun.ros.cdk.core.IResolvable sasSlsStorage) {
            this.props.sasSlsStorage(sasSlsStorage);
            return this;
        }

        /**
         * @return {@code this}
         * @param sasWebguardBoolean This parameter is required.
         */
        public Builder sasWebguardBoolean(final java.lang.String sasWebguardBoolean) {
            this.props.sasWebguardBoolean(sasWebguardBoolean);
            return this;
        }
        /**
         * @return {@code this}
         * @param sasWebguardBoolean This parameter is required.
         */
        public Builder sasWebguardBoolean(final com.aliyun.ros.cdk.core.IResolvable sasWebguardBoolean) {
            this.props.sasWebguardBoolean(sasWebguardBoolean);
            return this;
        }

        /**
         * @return {@code this}
         * @param sasWebguardOrderNum This parameter is required.
         */
        public Builder sasWebguardOrderNum(final java.lang.String sasWebguardOrderNum) {
            this.props.sasWebguardOrderNum(sasWebguardOrderNum);
            return this;
        }
        /**
         * @return {@code this}
         * @param sasWebguardOrderNum This parameter is required.
         */
        public Builder sasWebguardOrderNum(final com.aliyun.ros.cdk.core.IResolvable sasWebguardOrderNum) {
            this.props.sasWebguardOrderNum(sasWebguardOrderNum);
            return this;
        }

        /**
         * @return {@code this}
         * @param threatAnalysis This parameter is required.
         */
        public Builder threatAnalysis(final java.lang.String threatAnalysis) {
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
         * @param threatAnalysisSwitch This parameter is required.
         */
        public Builder threatAnalysisSwitch(final java.lang.String threatAnalysisSwitch) {
            this.props.threatAnalysisSwitch(threatAnalysisSwitch);
            return this;
        }
        /**
         * @return {@code this}
         * @param threatAnalysisSwitch This parameter is required.
         */
        public Builder threatAnalysisSwitch(final com.aliyun.ros.cdk.core.IResolvable threatAnalysisSwitch) {
            this.props.threatAnalysisSwitch(threatAnalysisSwitch);
            return this;
        }

        /**
         * @return {@code this}
         * @param vCore This parameter is required.
         */
        public Builder vCore(final java.lang.String vCore) {
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
         * @param vulCount This parameter is required.
         */
        public Builder vulCount(final java.lang.String vulCount) {
            this.props.vulCount(vulCount);
            return this;
        }
        /**
         * @return {@code this}
         * @param vulCount This parameter is required.
         */
        public Builder vulCount(final com.aliyun.ros.cdk.core.IResolvable vulCount) {
            this.props.vulCount(vulCount);
            return this;
        }

        /**
         * @return {@code this}
         * @param vulSwitch This parameter is required.
         */
        public Builder vulSwitch(final java.lang.String vulSwitch) {
            this.props.vulSwitch(vulSwitch);
            return this;
        }
        /**
         * @return {@code this}
         * @param vulSwitch This parameter is required.
         */
        public Builder vulSwitch(final com.aliyun.ros.cdk.core.IResolvable vulSwitch) {
            this.props.vulSwitch(vulSwitch);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.threatdetection.RosInstance}.
         */
        @Override
        public com.aliyun.ros.cdk.threatdetection.RosInstance build() {
            return new com.aliyun.ros.cdk.threatdetection.RosInstance(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
