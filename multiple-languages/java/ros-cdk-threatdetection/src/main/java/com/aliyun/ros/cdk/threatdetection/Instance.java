package com.aliyun.ros.cdk.threatdetection;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ThreatDetection::Instance</code>DATASOURCE::ThreatDetection::AntiBruteForceRules is used to query the basic information about defense rules against brute-force attacks.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-02-28T02:53:30.972Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.threatdetection.$Module.class, fqn = "@alicloud/ros-cdk-threatdetection.Instance")
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
    public Instance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.InstanceProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Instance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.InstanceProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute BuyNumber: Number of servers.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrBuyNumber() {
        return software.amazon.jsii.Kernel.get(this, "attrBuyNumber", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ContainerImageScan: Container Image security scan.
     * <p>
     * Interval type, value interval:[0,200000].
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrContainerImageScan() {
        return software.amazon.jsii.Kernel.get(this, "attrContainerImageScan", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ContainerImageScanNew: Container Image security scan.
     * <p>
     * Interval type, value interval:[0,200000].
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrContainerImageScanNew() {
        return software.amazon.jsii.Kernel.get(this, "attrContainerImageScanNew", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute CreateTime: The creation time of the resource.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Honeypot: Number of cloud honeypot licenses.
     * <p>
     * Interval type, value interval:[20,500].
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHoneypot() {
        return software.amazon.jsii.Kernel.get(this, "attrHoneypot", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute HoneypotSwitch: Cloud honeypot.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHoneypotSwitch() {
        return software.amazon.jsii.Kernel.get(this, "attrHoneypotSwitch", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute InstanceId: The first ID of the resource.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute PaymentType: The payment type of the resource.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPaymentType() {
        return software.amazon.jsii.Kernel.get(this, "attrPaymentType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute RaspCount: Number of application protection licenses.
     * <p>
     * Interval type, value interval:[1,100000000].
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRaspCount() {
        return software.amazon.jsii.Kernel.get(this, "attrRaspCount", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute RenewalPeriodUnit: Automatic renewal period unit, value:.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRenewalPeriodUnit() {
        return software.amazon.jsii.Kernel.get(this, "attrRenewalPeriodUnit", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute RenewalStatus: Automatic renewal status, value:.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRenewalStatus() {
        return software.amazon.jsii.Kernel.get(this, "attrRenewalStatus", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute RenewPeriod: Automatic renewal cycle, in months.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRenewPeriod() {
        return software.amazon.jsii.Kernel.get(this, "attrRenewPeriod", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute SasAntiRansomware: Anti-ransomware capacity.
     * <p>
     * Unit: GB. Interval type, value interval:[0,9999999999].
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSasAntiRansomware() {
        return software.amazon.jsii.Kernel.get(this, "attrSasAntiRansomware", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute SasCspm: Cloud platform configuration check scan times, interval type, value range:[1000,9999999999].
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSasCspm() {
        return software.amazon.jsii.Kernel.get(this, "attrSasCspm", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute SasCspmSwitch: Cloud platform configuration check switch.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSasCspmSwitch() {
        return software.amazon.jsii.Kernel.get(this, "attrSasCspmSwitch", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute SasSc: Security screen.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSasSc() {
        return software.amazon.jsii.Kernel.get(this, "attrSasSc", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute SasSdk: Number of malicious file detections.
     * <p>
     * Unit: 10,000 times. Interval type, value interval:[10,9999999999].
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSasSdk() {
        return software.amazon.jsii.Kernel.get(this, "attrSasSdk", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute SasSdkSwitch: Malicious file detection SDK.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSasSdkSwitch() {
        return software.amazon.jsii.Kernel.get(this, "attrSasSdkSwitch", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute SasSlsStorage: Log analysis storage capacity.
     * <p>
     * Unit: GB. Interval type, value interval:[0,600000].
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSasSlsStorage() {
        return software.amazon.jsii.Kernel.get(this, "attrSasSlsStorage", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute SasWebguardBoolean: Web tamper-proof switch.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSasWebguardBoolean() {
        return software.amazon.jsii.Kernel.get(this, "attrSasWebguardBoolean", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute SasWebguardOrderNum: Tamper-proof authorization number.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSasWebguardOrderNum() {
        return software.amazon.jsii.Kernel.get(this, "attrSasWebguardOrderNum", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ThreatAnalysis: Threat Analysis log storage capacity.
     * <p>
     * Interval type, value interval:[0,9999999999].
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrThreatAnalysis() {
        return software.amazon.jsii.Kernel.get(this, "attrThreatAnalysis", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ThreatAnalysisSwitch: Threat analysis.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrThreatAnalysisSwitch() {
        return software.amazon.jsii.Kernel.get(this, "attrThreatAnalysisSwitch", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute VCore: Number of cores.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVCore() {
        return software.amazon.jsii.Kernel.get(this, "attrVCore", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute VersionCode: Select the security center version.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVersionCode() {
        return software.amazon.jsii.Kernel.get(this, "attrVersionCode", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute VulCount: Vulnerability repair times, interval type, value range:[20,100000000].
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVulCount() {
        return software.amazon.jsii.Kernel.get(this, "attrVulCount", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute VulSwitch: Vulnerability fix switch.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVulSwitch() {
        return software.amazon.jsii.Kernel.get(this, "attrVulSwitch", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.threatdetection.Instance}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.threatdetection.Instance> {
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
        private final com.aliyun.ros.cdk.threatdetection.InstanceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.threatdetection.InstanceProps.Builder();
        }

        /**
         * Property paymentType: The payment type of the resource.
         * <p>
         * @return {@code this}
         * @param paymentType Property paymentType: The payment type of the resource. This parameter is required.
         */
        public Builder paymentType(final java.lang.String paymentType) {
            this.props.paymentType(paymentType);
            return this;
        }
        /**
         * Property paymentType: The payment type of the resource.
         * <p>
         * @return {@code this}
         * @param paymentType Property paymentType: The payment type of the resource. This parameter is required.
         */
        public Builder paymentType(final com.aliyun.ros.cdk.core.IResolvable paymentType) {
            this.props.paymentType(paymentType);
            return this;
        }

        /**
         * Property versionCode: Select the security center version.
         * <p>
         * Value:
         * <p>
         * <ul>
         * <li>level7: Antivirus Edition.</li>
         * <li>level3: Premium version.</li>
         * <li>level2: Enterprise Edition.</li>
         * <li>level8: Ultimate.</li>
         * <li>level10: Purchase value-added services only.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param versionCode Property versionCode: Select the security center version. This parameter is required.
         */
        public Builder versionCode(final java.lang.String versionCode) {
            this.props.versionCode(versionCode);
            return this;
        }
        /**
         * Property versionCode: Select the security center version.
         * <p>
         * Value:
         * <p>
         * <ul>
         * <li>level7: Antivirus Edition.</li>
         * <li>level3: Premium version.</li>
         * <li>level2: Enterprise Edition.</li>
         * <li>level8: Ultimate.</li>
         * <li>level10: Purchase value-added services only.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param versionCode Property versionCode: Select the security center version. This parameter is required.
         */
        public Builder versionCode(final com.aliyun.ros.cdk.core.IResolvable versionCode) {
            this.props.versionCode(versionCode);
            return this;
        }

        /**
         * Property buyNumber: Number of servers.
         * <p>
         * @return {@code this}
         * @param buyNumber Property buyNumber: Number of servers. This parameter is required.
         */
        public Builder buyNumber(final java.lang.String buyNumber) {
            this.props.buyNumber(buyNumber);
            return this;
        }
        /**
         * Property buyNumber: Number of servers.
         * <p>
         * @return {@code this}
         * @param buyNumber Property buyNumber: Number of servers. This parameter is required.
         */
        public Builder buyNumber(final com.aliyun.ros.cdk.core.IResolvable buyNumber) {
            this.props.buyNumber(buyNumber);
            return this;
        }

        /**
         * Property containerImageScan: Container Image security scan.
         * <p>
         * Interval type, value interval:[0,200000].
         * <p>
         * <blockquote>
         * <p>
         * The step size is 20, that is, only multiples of 20 can be filled in.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param containerImageScan Property containerImageScan: Container Image security scan. This parameter is required.
         */
        public Builder containerImageScan(final java.lang.String containerImageScan) {
            this.props.containerImageScan(containerImageScan);
            return this;
        }
        /**
         * Property containerImageScan: Container Image security scan.
         * <p>
         * Interval type, value interval:[0,200000].
         * <p>
         * <blockquote>
         * <p>
         * The step size is 20, that is, only multiples of 20 can be filled in.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param containerImageScan Property containerImageScan: Container Image security scan. This parameter is required.
         */
        public Builder containerImageScan(final com.aliyun.ros.cdk.core.IResolvable containerImageScan) {
            this.props.containerImageScan(containerImageScan);
            return this;
        }

        /**
         * Property containerImageScanNew: Container Image security scan.
         * <p>
         * Interval type, value interval:[0,200000].
         * <p>
         * <blockquote>
         * <p>
         * The step size is 20, that is, only multiples of 20 can be filled in.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param containerImageScanNew Property containerImageScanNew: Container Image security scan. This parameter is required.
         */
        public Builder containerImageScanNew(final java.lang.String containerImageScanNew) {
            this.props.containerImageScanNew(containerImageScanNew);
            return this;
        }
        /**
         * Property containerImageScanNew: Container Image security scan.
         * <p>
         * Interval type, value interval:[0,200000].
         * <p>
         * <blockquote>
         * <p>
         * The step size is 20, that is, only multiples of 20 can be filled in.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param containerImageScanNew Property containerImageScanNew: Container Image security scan. This parameter is required.
         */
        public Builder containerImageScanNew(final com.aliyun.ros.cdk.core.IResolvable containerImageScanNew) {
            this.props.containerImageScanNew(containerImageScanNew);
            return this;
        }

        /**
         * Property honeypot: Number of cloud honeypot licenses.
         * <p>
         * Interval type, value interval:[20,500].
         * <p>
         * <blockquote>
         * <p>
         * This module can only be purchased when honeypot_switch = 1, starting with 20.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param honeypot Property honeypot: Number of cloud honeypot licenses. This parameter is required.
         */
        public Builder honeypot(final java.lang.String honeypot) {
            this.props.honeypot(honeypot);
            return this;
        }
        /**
         * Property honeypot: Number of cloud honeypot licenses.
         * <p>
         * Interval type, value interval:[20,500].
         * <p>
         * <blockquote>
         * <p>
         * This module can only be purchased when honeypot_switch = 1, starting with 20.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param honeypot Property honeypot: Number of cloud honeypot licenses. This parameter is required.
         */
        public Builder honeypot(final com.aliyun.ros.cdk.core.IResolvable honeypot) {
            this.props.honeypot(honeypot);
            return this;
        }

        /**
         * Property honeypotSwitch: Cloud honeypot.
         * <p>
         * Value:
         * <p>
         * <ul>
         * <li>1: Yes.</li>
         * <li>2: No.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param honeypotSwitch Property honeypotSwitch: Cloud honeypot. This parameter is required.
         */
        public Builder honeypotSwitch(final java.lang.String honeypotSwitch) {
            this.props.honeypotSwitch(honeypotSwitch);
            return this;
        }
        /**
         * Property honeypotSwitch: Cloud honeypot.
         * <p>
         * Value:
         * <p>
         * <ul>
         * <li>1: Yes.</li>
         * <li>2: No.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param honeypotSwitch Property honeypotSwitch: Cloud honeypot. This parameter is required.
         */
        public Builder honeypotSwitch(final com.aliyun.ros.cdk.core.IResolvable honeypotSwitch) {
            this.props.honeypotSwitch(honeypotSwitch);
            return this;
        }

        /**
         * Property modifyType: Change configuration type, value - Upgrade: Upgrade.
         * <p>
         * <ul>
         * <li>Downgrade: Downgrade.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param modifyType Property modifyType: Change configuration type, value - Upgrade: Upgrade. This parameter is required.
         */
        public Builder modifyType(final java.lang.String modifyType) {
            this.props.modifyType(modifyType);
            return this;
        }
        /**
         * Property modifyType: Change configuration type, value - Upgrade: Upgrade.
         * <p>
         * <ul>
         * <li>Downgrade: Downgrade.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param modifyType Property modifyType: Change configuration type, value - Upgrade: Upgrade. This parameter is required.
         */
        public Builder modifyType(final com.aliyun.ros.cdk.core.IResolvable modifyType) {
            this.props.modifyType(modifyType);
            return this;
        }

        /**
         * Property period: Prepaid cycle.
         * <p>
         * The unit is Monthly, please enter an integer multiple of 12 for annual paid products.
         * <p>
         * <blockquote>
         * <p>
         * must be set when creating a prepaid instance.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param period Property period: Prepaid cycle. This parameter is required.
         */
        public Builder period(final java.lang.Number period) {
            this.props.period(period);
            return this;
        }
        /**
         * Property period: Prepaid cycle.
         * <p>
         * The unit is Monthly, please enter an integer multiple of 12 for annual paid products.
         * <p>
         * <blockquote>
         * <p>
         * must be set when creating a prepaid instance.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param period Property period: Prepaid cycle. This parameter is required.
         */
        public Builder period(final com.aliyun.ros.cdk.core.IResolvable period) {
            this.props.period(period);
            return this;
        }

        /**
         * Property productType: Product type, only China station needs to be set to sas, international station does not need to set.
         * <p>
         * @return {@code this}
         * @param productType Property productType: Product type, only China station needs to be set to sas, international station does not need to set. This parameter is required.
         */
        public Builder productType(final java.lang.String productType) {
            this.props.productType(productType);
            return this;
        }
        /**
         * Property productType: Product type, only China station needs to be set to sas, international station does not need to set.
         * <p>
         * @return {@code this}
         * @param productType Property productType: Product type, only China station needs to be set to sas, international station does not need to set. This parameter is required.
         */
        public Builder productType(final com.aliyun.ros.cdk.core.IResolvable productType) {
            this.props.productType(productType);
            return this;
        }

        /**
         * Property raspCount: Number of application protection licenses.
         * <p>
         * Interval type, value interval:[1,100000000].
         * <p>
         * @return {@code this}
         * @param raspCount Property raspCount: Number of application protection licenses. This parameter is required.
         */
        public Builder raspCount(final java.lang.String raspCount) {
            this.props.raspCount(raspCount);
            return this;
        }
        /**
         * Property raspCount: Number of application protection licenses.
         * <p>
         * Interval type, value interval:[1,100000000].
         * <p>
         * @return {@code this}
         * @param raspCount Property raspCount: Number of application protection licenses. This parameter is required.
         */
        public Builder raspCount(final com.aliyun.ros.cdk.core.IResolvable raspCount) {
            this.props.raspCount(raspCount);
            return this;
        }

        /**
         * Property renewalPeriodUnit: Automatic renewal period unit, value: - M: month.
         * <p>
         * <ul>
         * <li>Y: years.</li>
         * </ul>
         * <p>
         * <blockquote>
         * <p>
         * Must be set when RenewalStatus = AutoRenewal.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param renewalPeriodUnit Property renewalPeriodUnit: Automatic renewal period unit, value: - M: month. This parameter is required.
         */
        public Builder renewalPeriodUnit(final java.lang.String renewalPeriodUnit) {
            this.props.renewalPeriodUnit(renewalPeriodUnit);
            return this;
        }
        /**
         * Property renewalPeriodUnit: Automatic renewal period unit, value: - M: month.
         * <p>
         * <ul>
         * <li>Y: years.</li>
         * </ul>
         * <p>
         * <blockquote>
         * <p>
         * Must be set when RenewalStatus = AutoRenewal.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param renewalPeriodUnit Property renewalPeriodUnit: Automatic renewal period unit, value: - M: month. This parameter is required.
         */
        public Builder renewalPeriodUnit(final com.aliyun.ros.cdk.core.IResolvable renewalPeriodUnit) {
            this.props.renewalPeriodUnit(renewalPeriodUnit);
            return this;
        }

        /**
         * Property renewalStatus: Automatic renewal status, value: - AutoRenewal: automatic renewal.
         * <p>
         * <ul>
         * <li>ManualRenewal: manual renewal.
         * Default ManualRenewal.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param renewalStatus Property renewalStatus: Automatic renewal status, value: - AutoRenewal: automatic renewal. This parameter is required.
         */
        public Builder renewalStatus(final java.lang.String renewalStatus) {
            this.props.renewalStatus(renewalStatus);
            return this;
        }
        /**
         * Property renewalStatus: Automatic renewal status, value: - AutoRenewal: automatic renewal.
         * <p>
         * <ul>
         * <li>ManualRenewal: manual renewal.
         * Default ManualRenewal.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param renewalStatus Property renewalStatus: Automatic renewal status, value: - AutoRenewal: automatic renewal. This parameter is required.
         */
        public Builder renewalStatus(final com.aliyun.ros.cdk.core.IResolvable renewalStatus) {
            this.props.renewalStatus(renewalStatus);
            return this;
        }

        /**
         * Property renewPeriod: Automatic renewal cycle, in months.
         * <p>
         * <blockquote>
         * <p>
         * When <strong>RenewalStatus</strong> is set to <strong>AutoRenewal</strong>, it must be set.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param renewPeriod Property renewPeriod: Automatic renewal cycle, in months. This parameter is required.
         */
        public Builder renewPeriod(final java.lang.Number renewPeriod) {
            this.props.renewPeriod(renewPeriod);
            return this;
        }
        /**
         * Property renewPeriod: Automatic renewal cycle, in months.
         * <p>
         * <blockquote>
         * <p>
         * When <strong>RenewalStatus</strong> is set to <strong>AutoRenewal</strong>, it must be set.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param renewPeriod Property renewPeriod: Automatic renewal cycle, in months. This parameter is required.
         */
        public Builder renewPeriod(final com.aliyun.ros.cdk.core.IResolvable renewPeriod) {
            this.props.renewPeriod(renewPeriod);
            return this;
        }

        /**
         * Property sasAntiRansomware: Anti-ransomware capacity.
         * <p>
         * Unit: GB. Interval type, value interval:[0,9999999999].
         * <p>
         * <blockquote>
         * <p>
         * The step size is 10, that is, only multiples of 10 can be filled in.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param sasAntiRansomware Property sasAntiRansomware: Anti-ransomware capacity. This parameter is required.
         */
        public Builder sasAntiRansomware(final java.lang.String sasAntiRansomware) {
            this.props.sasAntiRansomware(sasAntiRansomware);
            return this;
        }
        /**
         * Property sasAntiRansomware: Anti-ransomware capacity.
         * <p>
         * Unit: GB. Interval type, value interval:[0,9999999999].
         * <p>
         * <blockquote>
         * <p>
         * The step size is 10, that is, only multiples of 10 can be filled in.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param sasAntiRansomware Property sasAntiRansomware: Anti-ransomware capacity. This parameter is required.
         */
        public Builder sasAntiRansomware(final com.aliyun.ros.cdk.core.IResolvable sasAntiRansomware) {
            this.props.sasAntiRansomware(sasAntiRansomware);
            return this;
        }

        /**
         * Property sasCspm: Cloud platform configuration check scan times, interval type, value range:[1000,9999999999].
         * <p>
         * <blockquote>
         * <p>
         * You must have sas_cspm_switch = 1 to purchase this module. The step size is 100, that is, only multiples of 10 can be filled in.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param sasCspm Property sasCspm: Cloud platform configuration check scan times, interval type, value range:[1000,9999999999]. This parameter is required.
         */
        public Builder sasCspm(final java.lang.String sasCspm) {
            this.props.sasCspm(sasCspm);
            return this;
        }
        /**
         * Property sasCspm: Cloud platform configuration check scan times, interval type, value range:[1000,9999999999].
         * <p>
         * <blockquote>
         * <p>
         * You must have sas_cspm_switch = 1 to purchase this module. The step size is 100, that is, only multiples of 10 can be filled in.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param sasCspm Property sasCspm: Cloud platform configuration check scan times, interval type, value range:[1000,9999999999]. This parameter is required.
         */
        public Builder sasCspm(final com.aliyun.ros.cdk.core.IResolvable sasCspm) {
            this.props.sasCspm(sasCspm);
            return this;
        }

        /**
         * Property sasCspmSwitch: Cloud platform configuration check switch.
         * <p>
         * Value:
         * <p>
         * <ul>
         * <li>0: No.</li>
         * <li>1: Yes.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param sasCspmSwitch Property sasCspmSwitch: Cloud platform configuration check switch. This parameter is required.
         */
        public Builder sasCspmSwitch(final java.lang.String sasCspmSwitch) {
            this.props.sasCspmSwitch(sasCspmSwitch);
            return this;
        }
        /**
         * Property sasCspmSwitch: Cloud platform configuration check switch.
         * <p>
         * Value:
         * <p>
         * <ul>
         * <li>0: No.</li>
         * <li>1: Yes.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param sasCspmSwitch Property sasCspmSwitch: Cloud platform configuration check switch. This parameter is required.
         */
        public Builder sasCspmSwitch(final com.aliyun.ros.cdk.core.IResolvable sasCspmSwitch) {
            this.props.sasCspmSwitch(sasCspmSwitch);
            return this;
        }

        /**
         * Property sasSc: Security screen.
         * <p>
         * Value:
         * <p>
         * <ul>
         * <li>true: Yes.</li>
         * <li>false: No.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param sasSc Property sasSc: Security screen. This parameter is required.
         */
        public Builder sasSc(final java.lang.String sasSc) {
            this.props.sasSc(sasSc);
            return this;
        }
        /**
         * Property sasSc: Security screen.
         * <p>
         * Value:
         * <p>
         * <ul>
         * <li>true: Yes.</li>
         * <li>false: No.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param sasSc Property sasSc: Security screen. This parameter is required.
         */
        public Builder sasSc(final com.aliyun.ros.cdk.core.IResolvable sasSc) {
            this.props.sasSc(sasSc);
            return this;
        }

        /**
         * Property sasSdk: Number of malicious file detections.
         * <p>
         * Unit: 10,000 times. Interval type, value interval:[10,9999999999].
         * <p>
         * <blockquote>
         * <p>
         * This module can only be purchased when sas_sdk_switch = 1. The step size is 10, that is, only multiples of 10 can be filled in.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param sasSdk Property sasSdk: Number of malicious file detections. This parameter is required.
         */
        public Builder sasSdk(final java.lang.String sasSdk) {
            this.props.sasSdk(sasSdk);
            return this;
        }
        /**
         * Property sasSdk: Number of malicious file detections.
         * <p>
         * Unit: 10,000 times. Interval type, value interval:[10,9999999999].
         * <p>
         * <blockquote>
         * <p>
         * This module can only be purchased when sas_sdk_switch = 1. The step size is 10, that is, only multiples of 10 can be filled in.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param sasSdk Property sasSdk: Number of malicious file detections. This parameter is required.
         */
        public Builder sasSdk(final com.aliyun.ros.cdk.core.IResolvable sasSdk) {
            this.props.sasSdk(sasSdk);
            return this;
        }

        /**
         * Property sasSdkSwitch: Malicious file detection SDK.
         * <p>
         * @return {@code this}
         * @param sasSdkSwitch Property sasSdkSwitch: Malicious file detection SDK. This parameter is required.
         */
        public Builder sasSdkSwitch(final java.lang.String sasSdkSwitch) {
            this.props.sasSdkSwitch(sasSdkSwitch);
            return this;
        }
        /**
         * Property sasSdkSwitch: Malicious file detection SDK.
         * <p>
         * @return {@code this}
         * @param sasSdkSwitch Property sasSdkSwitch: Malicious file detection SDK. This parameter is required.
         */
        public Builder sasSdkSwitch(final com.aliyun.ros.cdk.core.IResolvable sasSdkSwitch) {
            this.props.sasSdkSwitch(sasSdkSwitch);
            return this;
        }

        /**
         * Property sasSlsStorage: Log analysis storage capacity.
         * <p>
         * Unit: GB. Interval type, value interval:[0,600000].
         * <p>
         * <blockquote>
         * <p>
         * The step size is 10, that is, only multiples of 10 can be filled in.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param sasSlsStorage Property sasSlsStorage: Log analysis storage capacity. This parameter is required.
         */
        public Builder sasSlsStorage(final java.lang.String sasSlsStorage) {
            this.props.sasSlsStorage(sasSlsStorage);
            return this;
        }
        /**
         * Property sasSlsStorage: Log analysis storage capacity.
         * <p>
         * Unit: GB. Interval type, value interval:[0,600000].
         * <p>
         * <blockquote>
         * <p>
         * The step size is 10, that is, only multiples of 10 can be filled in.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param sasSlsStorage Property sasSlsStorage: Log analysis storage capacity. This parameter is required.
         */
        public Builder sasSlsStorage(final com.aliyun.ros.cdk.core.IResolvable sasSlsStorage) {
            this.props.sasSlsStorage(sasSlsStorage);
            return this;
        }

        /**
         * Property sasWebguardBoolean: Web tamper-proof switch.
         * <p>
         * Value:
         * <p>
         * <ul>
         * <li>0: No.</li>
         * <li>1: Yes.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param sasWebguardBoolean Property sasWebguardBoolean: Web tamper-proof switch. This parameter is required.
         */
        public Builder sasWebguardBoolean(final java.lang.String sasWebguardBoolean) {
            this.props.sasWebguardBoolean(sasWebguardBoolean);
            return this;
        }
        /**
         * Property sasWebguardBoolean: Web tamper-proof switch.
         * <p>
         * Value:
         * <p>
         * <ul>
         * <li>0: No.</li>
         * <li>1: Yes.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param sasWebguardBoolean Property sasWebguardBoolean: Web tamper-proof switch. This parameter is required.
         */
        public Builder sasWebguardBoolean(final com.aliyun.ros.cdk.core.IResolvable sasWebguardBoolean) {
            this.props.sasWebguardBoolean(sasWebguardBoolean);
            return this;
        }

        /**
         * Property sasWebguardOrderNum: Tamper-proof authorization number.
         * <p>
         * Value:
         * <p>
         * <ul>
         * <li>0: No</li>
         * <li>1: Yes.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param sasWebguardOrderNum Property sasWebguardOrderNum: Tamper-proof authorization number. This parameter is required.
         */
        public Builder sasWebguardOrderNum(final java.lang.String sasWebguardOrderNum) {
            this.props.sasWebguardOrderNum(sasWebguardOrderNum);
            return this;
        }
        /**
         * Property sasWebguardOrderNum: Tamper-proof authorization number.
         * <p>
         * Value:
         * <p>
         * <ul>
         * <li>0: No</li>
         * <li>1: Yes.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param sasWebguardOrderNum Property sasWebguardOrderNum: Tamper-proof authorization number. This parameter is required.
         */
        public Builder sasWebguardOrderNum(final com.aliyun.ros.cdk.core.IResolvable sasWebguardOrderNum) {
            this.props.sasWebguardOrderNum(sasWebguardOrderNum);
            return this;
        }

        /**
         * Property threatAnalysis: Threat Analysis log storage capacity.
         * <p>
         * Interval type, value interval:[0,9999999999].
         * <p>
         * <blockquote>
         * <p>
         * This module can only be purchased when Threat_analysis_switch = 1. The step size is 10, that is, only multiples of 10 can be filled in.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param threatAnalysis Property threatAnalysis: Threat Analysis log storage capacity. This parameter is required.
         */
        public Builder threatAnalysis(final java.lang.String threatAnalysis) {
            this.props.threatAnalysis(threatAnalysis);
            return this;
        }
        /**
         * Property threatAnalysis: Threat Analysis log storage capacity.
         * <p>
         * Interval type, value interval:[0,9999999999].
         * <p>
         * <blockquote>
         * <p>
         * This module can only be purchased when Threat_analysis_switch = 1. The step size is 10, that is, only multiples of 10 can be filled in.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param threatAnalysis Property threatAnalysis: Threat Analysis log storage capacity. This parameter is required.
         */
        public Builder threatAnalysis(final com.aliyun.ros.cdk.core.IResolvable threatAnalysis) {
            this.props.threatAnalysis(threatAnalysis);
            return this;
        }

        /**
         * Property threatAnalysisSwitch: Threat analysis.
         * <p>
         * Value:
         * <p>
         * <ul>
         * <li>0: No.</li>
         * <li>1: Yes.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param threatAnalysisSwitch Property threatAnalysisSwitch: Threat analysis. This parameter is required.
         */
        public Builder threatAnalysisSwitch(final java.lang.String threatAnalysisSwitch) {
            this.props.threatAnalysisSwitch(threatAnalysisSwitch);
            return this;
        }
        /**
         * Property threatAnalysisSwitch: Threat analysis.
         * <p>
         * Value:
         * <p>
         * <ul>
         * <li>0: No.</li>
         * <li>1: Yes.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param threatAnalysisSwitch Property threatAnalysisSwitch: Threat analysis. This parameter is required.
         */
        public Builder threatAnalysisSwitch(final com.aliyun.ros.cdk.core.IResolvable threatAnalysisSwitch) {
            this.props.threatAnalysisSwitch(threatAnalysisSwitch);
            return this;
        }

        /**
         * Property vCore: Number of cores.
         * <p>
         * @return {@code this}
         * @param vCore Property vCore: Number of cores. This parameter is required.
         */
        public Builder vCore(final java.lang.String vCore) {
            this.props.vCore(vCore);
            return this;
        }
        /**
         * Property vCore: Number of cores.
         * <p>
         * @return {@code this}
         * @param vCore Property vCore: Number of cores. This parameter is required.
         */
        public Builder vCore(final com.aliyun.ros.cdk.core.IResolvable vCore) {
            this.props.vCore(vCore);
            return this;
        }

        /**
         * Property vulCount: Vulnerability repair times, interval type, value range:[20,100000000].
         * <p>
         * <blockquote>
         * <p>
         * This module can only be purchased when vul_switch = 1. Only when the version_code value is level7 or level10. other versions do not need to be purchased separately.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param vulCount Property vulCount: Vulnerability repair times, interval type, value range:[20,100000000]. This parameter is required.
         */
        public Builder vulCount(final java.lang.String vulCount) {
            this.props.vulCount(vulCount);
            return this;
        }
        /**
         * Property vulCount: Vulnerability repair times, interval type, value range:[20,100000000].
         * <p>
         * <blockquote>
         * <p>
         * This module can only be purchased when vul_switch = 1. Only when the version_code value is level7 or level10. other versions do not need to be purchased separately.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param vulCount Property vulCount: Vulnerability repair times, interval type, value range:[20,100000000]. This parameter is required.
         */
        public Builder vulCount(final com.aliyun.ros.cdk.core.IResolvable vulCount) {
            this.props.vulCount(vulCount);
            return this;
        }

        /**
         * Property vulSwitch: Vulnerability fix switch.
         * <p>
         * Value:
         * <p>
         * <ul>
         * <li>0: No.</li>
         * <li>1: Yes.</li>
         * </ul>
         * <p>
         * <blockquote>
         * <p>
         * When the value of version_code is level7 or level10, the purchase is allowed. Other versions do not need to be purchased separately.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param vulSwitch Property vulSwitch: Vulnerability fix switch. This parameter is required.
         */
        public Builder vulSwitch(final java.lang.String vulSwitch) {
            this.props.vulSwitch(vulSwitch);
            return this;
        }
        /**
         * Property vulSwitch: Vulnerability fix switch.
         * <p>
         * Value:
         * <p>
         * <ul>
         * <li>0: No.</li>
         * <li>1: Yes.</li>
         * </ul>
         * <p>
         * <blockquote>
         * <p>
         * When the value of version_code is level7 or level10, the purchase is allowed. Other versions do not need to be purchased separately.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param vulSwitch Property vulSwitch: Vulnerability fix switch. This parameter is required.
         */
        public Builder vulSwitch(final com.aliyun.ros.cdk.core.IResolvable vulSwitch) {
            this.props.vulSwitch(vulSwitch);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.threatdetection.Instance}.
         */
        @Override
        public com.aliyun.ros.cdk.threatdetection.Instance build() {
            return new com.aliyun.ros.cdk.threatdetection.Instance(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
