package com.aliyun.ros.cdk.cddc;

/**
 * Properties for defining a <code>RosMyBase</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cddc-mybase
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-29T07:52:36.535Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cddc.$Module.class, fqn = "@alicloud/ros-cdk-cddc.RosMyBaseProps")
@software.amazon.jsii.Jsii.Proxy(RosMyBaseProps.Jsii$Proxy.class)
public interface RosMyBaseProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEcsClassList();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEngine();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPayType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPeriod();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSecurityGroupId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVpcId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVSwitchId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getZoneId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenew() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDedicatedHostGroupDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDedicatedHostGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEcsDeploymentSetId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEcsHostName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEcsInstanceName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEcsUniqueSuffix() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getImageId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInternetChargeType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInternetMaxBandwidthOut() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getKeyPairName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOsPassword() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPasswordInherit() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriodType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUserData() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUserDataInBase64() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosMyBaseProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosMyBaseProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosMyBaseProps> {
        java.lang.Object ecsClassList;
        java.lang.Object engine;
        java.lang.Object payType;
        java.lang.Object period;
        java.lang.Object securityGroupId;
        java.lang.Object vpcId;
        java.lang.Object vSwitchId;
        java.lang.Object zoneId;
        java.lang.Object autoRenew;
        java.lang.Object dedicatedHostGroupDescription;
        java.lang.Object dedicatedHostGroupId;
        java.lang.Object ecsDeploymentSetId;
        java.lang.Object ecsHostName;
        java.lang.Object ecsInstanceName;
        java.lang.Object ecsUniqueSuffix;
        java.lang.Object imageId;
        java.lang.Object internetChargeType;
        java.lang.Object internetMaxBandwidthOut;
        java.lang.Object keyPairName;
        java.lang.Object osPassword;
        java.lang.Object passwordInherit;
        java.lang.Object periodType;
        java.lang.Object resourceGroupId;
        java.lang.Object userData;
        java.lang.Object userDataInBase64;

        /**
         * Sets the value of {@link RosMyBaseProps#getEcsClassList}
         * @param ecsClassList the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ecsClassList(com.aliyun.ros.cdk.core.IResolvable ecsClassList) {
            this.ecsClassList = ecsClassList;
            return this;
        }

        /**
         * Sets the value of {@link RosMyBaseProps#getEcsClassList}
         * @param ecsClassList the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ecsClassList(java.util.List<? extends java.util.Map<java.lang.String, ? extends java.lang.Object>> ecsClassList) {
            this.ecsClassList = ecsClassList;
            return this;
        }

        /**
         * Sets the value of {@link RosMyBaseProps#getEngine}
         * @param engine the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder engine(java.lang.String engine) {
            this.engine = engine;
            return this;
        }

        /**
         * Sets the value of {@link RosMyBaseProps#getEngine}
         * @param engine the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder engine(com.aliyun.ros.cdk.core.IResolvable engine) {
            this.engine = engine;
            return this;
        }

        /**
         * Sets the value of {@link RosMyBaseProps#getPayType}
         * @param payType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder payType(java.lang.String payType) {
            this.payType = payType;
            return this;
        }

        /**
         * Sets the value of {@link RosMyBaseProps#getPayType}
         * @param payType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder payType(com.aliyun.ros.cdk.core.IResolvable payType) {
            this.payType = payType;
            return this;
        }

        /**
         * Sets the value of {@link RosMyBaseProps#getPeriod}
         * @param period the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link RosMyBaseProps#getPeriod}
         * @param period the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link RosMyBaseProps#getSecurityGroupId}
         * @param securityGroupId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder securityGroupId(java.lang.String securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosMyBaseProps#getSecurityGroupId}
         * @param securityGroupId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder securityGroupId(com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosMyBaseProps#getVpcId}
         * @param vpcId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosMyBaseProps#getVpcId}
         * @param vpcId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosMyBaseProps#getVSwitchId}
         * @param vSwitchId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosMyBaseProps#getVSwitchId}
         * @param vSwitchId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosMyBaseProps#getZoneId}
         * @param zoneId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link RosMyBaseProps#getZoneId}
         * @param zoneId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link RosMyBaseProps#getAutoRenew}
         * @param autoRenew the value to be set.
         * @return {@code this}
         */
        public Builder autoRenew(java.lang.Boolean autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link RosMyBaseProps#getAutoRenew}
         * @param autoRenew the value to be set.
         * @return {@code this}
         */
        public Builder autoRenew(com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link RosMyBaseProps#getDedicatedHostGroupDescription}
         * @param dedicatedHostGroupDescription the value to be set.
         * @return {@code this}
         */
        public Builder dedicatedHostGroupDescription(java.lang.String dedicatedHostGroupDescription) {
            this.dedicatedHostGroupDescription = dedicatedHostGroupDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosMyBaseProps#getDedicatedHostGroupDescription}
         * @param dedicatedHostGroupDescription the value to be set.
         * @return {@code this}
         */
        public Builder dedicatedHostGroupDescription(com.aliyun.ros.cdk.core.IResolvable dedicatedHostGroupDescription) {
            this.dedicatedHostGroupDescription = dedicatedHostGroupDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosMyBaseProps#getDedicatedHostGroupId}
         * @param dedicatedHostGroupId the value to be set.
         * @return {@code this}
         */
        public Builder dedicatedHostGroupId(java.lang.String dedicatedHostGroupId) {
            this.dedicatedHostGroupId = dedicatedHostGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosMyBaseProps#getDedicatedHostGroupId}
         * @param dedicatedHostGroupId the value to be set.
         * @return {@code this}
         */
        public Builder dedicatedHostGroupId(com.aliyun.ros.cdk.core.IResolvable dedicatedHostGroupId) {
            this.dedicatedHostGroupId = dedicatedHostGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosMyBaseProps#getEcsDeploymentSetId}
         * @param ecsDeploymentSetId the value to be set.
         * @return {@code this}
         */
        public Builder ecsDeploymentSetId(java.lang.String ecsDeploymentSetId) {
            this.ecsDeploymentSetId = ecsDeploymentSetId;
            return this;
        }

        /**
         * Sets the value of {@link RosMyBaseProps#getEcsDeploymentSetId}
         * @param ecsDeploymentSetId the value to be set.
         * @return {@code this}
         */
        public Builder ecsDeploymentSetId(com.aliyun.ros.cdk.core.IResolvable ecsDeploymentSetId) {
            this.ecsDeploymentSetId = ecsDeploymentSetId;
            return this;
        }

        /**
         * Sets the value of {@link RosMyBaseProps#getEcsHostName}
         * @param ecsHostName the value to be set.
         * @return {@code this}
         */
        public Builder ecsHostName(java.lang.String ecsHostName) {
            this.ecsHostName = ecsHostName;
            return this;
        }

        /**
         * Sets the value of {@link RosMyBaseProps#getEcsHostName}
         * @param ecsHostName the value to be set.
         * @return {@code this}
         */
        public Builder ecsHostName(com.aliyun.ros.cdk.core.IResolvable ecsHostName) {
            this.ecsHostName = ecsHostName;
            return this;
        }

        /**
         * Sets the value of {@link RosMyBaseProps#getEcsInstanceName}
         * @param ecsInstanceName the value to be set.
         * @return {@code this}
         */
        public Builder ecsInstanceName(java.lang.String ecsInstanceName) {
            this.ecsInstanceName = ecsInstanceName;
            return this;
        }

        /**
         * Sets the value of {@link RosMyBaseProps#getEcsInstanceName}
         * @param ecsInstanceName the value to be set.
         * @return {@code this}
         */
        public Builder ecsInstanceName(com.aliyun.ros.cdk.core.IResolvable ecsInstanceName) {
            this.ecsInstanceName = ecsInstanceName;
            return this;
        }

        /**
         * Sets the value of {@link RosMyBaseProps#getEcsUniqueSuffix}
         * @param ecsUniqueSuffix the value to be set.
         * @return {@code this}
         */
        public Builder ecsUniqueSuffix(java.lang.Boolean ecsUniqueSuffix) {
            this.ecsUniqueSuffix = ecsUniqueSuffix;
            return this;
        }

        /**
         * Sets the value of {@link RosMyBaseProps#getEcsUniqueSuffix}
         * @param ecsUniqueSuffix the value to be set.
         * @return {@code this}
         */
        public Builder ecsUniqueSuffix(com.aliyun.ros.cdk.core.IResolvable ecsUniqueSuffix) {
            this.ecsUniqueSuffix = ecsUniqueSuffix;
            return this;
        }

        /**
         * Sets the value of {@link RosMyBaseProps#getImageId}
         * @param imageId the value to be set.
         * @return {@code this}
         */
        public Builder imageId(java.lang.String imageId) {
            this.imageId = imageId;
            return this;
        }

        /**
         * Sets the value of {@link RosMyBaseProps#getImageId}
         * @param imageId the value to be set.
         * @return {@code this}
         */
        public Builder imageId(com.aliyun.ros.cdk.core.IResolvable imageId) {
            this.imageId = imageId;
            return this;
        }

        /**
         * Sets the value of {@link RosMyBaseProps#getInternetChargeType}
         * @param internetChargeType the value to be set.
         * @return {@code this}
         */
        public Builder internetChargeType(java.lang.String internetChargeType) {
            this.internetChargeType = internetChargeType;
            return this;
        }

        /**
         * Sets the value of {@link RosMyBaseProps#getInternetChargeType}
         * @param internetChargeType the value to be set.
         * @return {@code this}
         */
        public Builder internetChargeType(com.aliyun.ros.cdk.core.IResolvable internetChargeType) {
            this.internetChargeType = internetChargeType;
            return this;
        }

        /**
         * Sets the value of {@link RosMyBaseProps#getInternetMaxBandwidthOut}
         * @param internetMaxBandwidthOut the value to be set.
         * @return {@code this}
         */
        public Builder internetMaxBandwidthOut(java.lang.Number internetMaxBandwidthOut) {
            this.internetMaxBandwidthOut = internetMaxBandwidthOut;
            return this;
        }

        /**
         * Sets the value of {@link RosMyBaseProps#getInternetMaxBandwidthOut}
         * @param internetMaxBandwidthOut the value to be set.
         * @return {@code this}
         */
        public Builder internetMaxBandwidthOut(com.aliyun.ros.cdk.core.IResolvable internetMaxBandwidthOut) {
            this.internetMaxBandwidthOut = internetMaxBandwidthOut;
            return this;
        }

        /**
         * Sets the value of {@link RosMyBaseProps#getKeyPairName}
         * @param keyPairName the value to be set.
         * @return {@code this}
         */
        public Builder keyPairName(java.lang.String keyPairName) {
            this.keyPairName = keyPairName;
            return this;
        }

        /**
         * Sets the value of {@link RosMyBaseProps#getKeyPairName}
         * @param keyPairName the value to be set.
         * @return {@code this}
         */
        public Builder keyPairName(com.aliyun.ros.cdk.core.IResolvable keyPairName) {
            this.keyPairName = keyPairName;
            return this;
        }

        /**
         * Sets the value of {@link RosMyBaseProps#getOsPassword}
         * @param osPassword the value to be set.
         * @return {@code this}
         */
        public Builder osPassword(java.lang.String osPassword) {
            this.osPassword = osPassword;
            return this;
        }

        /**
         * Sets the value of {@link RosMyBaseProps#getOsPassword}
         * @param osPassword the value to be set.
         * @return {@code this}
         */
        public Builder osPassword(com.aliyun.ros.cdk.core.IResolvable osPassword) {
            this.osPassword = osPassword;
            return this;
        }

        /**
         * Sets the value of {@link RosMyBaseProps#getPasswordInherit}
         * @param passwordInherit the value to be set.
         * @return {@code this}
         */
        public Builder passwordInherit(java.lang.Boolean passwordInherit) {
            this.passwordInherit = passwordInherit;
            return this;
        }

        /**
         * Sets the value of {@link RosMyBaseProps#getPasswordInherit}
         * @param passwordInherit the value to be set.
         * @return {@code this}
         */
        public Builder passwordInherit(com.aliyun.ros.cdk.core.IResolvable passwordInherit) {
            this.passwordInherit = passwordInherit;
            return this;
        }

        /**
         * Sets the value of {@link RosMyBaseProps#getPeriodType}
         * @param periodType the value to be set.
         * @return {@code this}
         */
        public Builder periodType(java.lang.String periodType) {
            this.periodType = periodType;
            return this;
        }

        /**
         * Sets the value of {@link RosMyBaseProps#getPeriodType}
         * @param periodType the value to be set.
         * @return {@code this}
         */
        public Builder periodType(com.aliyun.ros.cdk.core.IResolvable periodType) {
            this.periodType = periodType;
            return this;
        }

        /**
         * Sets the value of {@link RosMyBaseProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosMyBaseProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosMyBaseProps#getUserData}
         * @param userData the value to be set.
         * @return {@code this}
         */
        public Builder userData(java.lang.String userData) {
            this.userData = userData;
            return this;
        }

        /**
         * Sets the value of {@link RosMyBaseProps#getUserData}
         * @param userData the value to be set.
         * @return {@code this}
         */
        public Builder userData(com.aliyun.ros.cdk.core.IResolvable userData) {
            this.userData = userData;
            return this;
        }

        /**
         * Sets the value of {@link RosMyBaseProps#getUserDataInBase64}
         * @param userDataInBase64 the value to be set.
         * @return {@code this}
         */
        public Builder userDataInBase64(java.lang.Boolean userDataInBase64) {
            this.userDataInBase64 = userDataInBase64;
            return this;
        }

        /**
         * Sets the value of {@link RosMyBaseProps#getUserDataInBase64}
         * @param userDataInBase64 the value to be set.
         * @return {@code this}
         */
        public Builder userDataInBase64(com.aliyun.ros.cdk.core.IResolvable userDataInBase64) {
            this.userDataInBase64 = userDataInBase64;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosMyBaseProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosMyBaseProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosMyBaseProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosMyBaseProps {
        private final java.lang.Object ecsClassList;
        private final java.lang.Object engine;
        private final java.lang.Object payType;
        private final java.lang.Object period;
        private final java.lang.Object securityGroupId;
        private final java.lang.Object vpcId;
        private final java.lang.Object vSwitchId;
        private final java.lang.Object zoneId;
        private final java.lang.Object autoRenew;
        private final java.lang.Object dedicatedHostGroupDescription;
        private final java.lang.Object dedicatedHostGroupId;
        private final java.lang.Object ecsDeploymentSetId;
        private final java.lang.Object ecsHostName;
        private final java.lang.Object ecsInstanceName;
        private final java.lang.Object ecsUniqueSuffix;
        private final java.lang.Object imageId;
        private final java.lang.Object internetChargeType;
        private final java.lang.Object internetMaxBandwidthOut;
        private final java.lang.Object keyPairName;
        private final java.lang.Object osPassword;
        private final java.lang.Object passwordInherit;
        private final java.lang.Object periodType;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object userData;
        private final java.lang.Object userDataInBase64;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.ecsClassList = software.amazon.jsii.Kernel.get(this, "ecsClassList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.engine = software.amazon.jsii.Kernel.get(this, "engine", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.payType = software.amazon.jsii.Kernel.get(this, "payType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityGroupId = software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoRenew = software.amazon.jsii.Kernel.get(this, "autoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dedicatedHostGroupDescription = software.amazon.jsii.Kernel.get(this, "dedicatedHostGroupDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dedicatedHostGroupId = software.amazon.jsii.Kernel.get(this, "dedicatedHostGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ecsDeploymentSetId = software.amazon.jsii.Kernel.get(this, "ecsDeploymentSetId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ecsHostName = software.amazon.jsii.Kernel.get(this, "ecsHostName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ecsInstanceName = software.amazon.jsii.Kernel.get(this, "ecsInstanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ecsUniqueSuffix = software.amazon.jsii.Kernel.get(this, "ecsUniqueSuffix", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.imageId = software.amazon.jsii.Kernel.get(this, "imageId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.internetChargeType = software.amazon.jsii.Kernel.get(this, "internetChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.internetMaxBandwidthOut = software.amazon.jsii.Kernel.get(this, "internetMaxBandwidthOut", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.keyPairName = software.amazon.jsii.Kernel.get(this, "keyPairName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.osPassword = software.amazon.jsii.Kernel.get(this, "osPassword", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.passwordInherit = software.amazon.jsii.Kernel.get(this, "passwordInherit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.periodType = software.amazon.jsii.Kernel.get(this, "periodType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.userData = software.amazon.jsii.Kernel.get(this, "userData", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.userDataInBase64 = software.amazon.jsii.Kernel.get(this, "userDataInBase64", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.ecsClassList = java.util.Objects.requireNonNull(builder.ecsClassList, "ecsClassList is required");
            this.engine = java.util.Objects.requireNonNull(builder.engine, "engine is required");
            this.payType = java.util.Objects.requireNonNull(builder.payType, "payType is required");
            this.period = java.util.Objects.requireNonNull(builder.period, "period is required");
            this.securityGroupId = java.util.Objects.requireNonNull(builder.securityGroupId, "securityGroupId is required");
            this.vpcId = java.util.Objects.requireNonNull(builder.vpcId, "vpcId is required");
            this.vSwitchId = java.util.Objects.requireNonNull(builder.vSwitchId, "vSwitchId is required");
            this.zoneId = java.util.Objects.requireNonNull(builder.zoneId, "zoneId is required");
            this.autoRenew = builder.autoRenew;
            this.dedicatedHostGroupDescription = builder.dedicatedHostGroupDescription;
            this.dedicatedHostGroupId = builder.dedicatedHostGroupId;
            this.ecsDeploymentSetId = builder.ecsDeploymentSetId;
            this.ecsHostName = builder.ecsHostName;
            this.ecsInstanceName = builder.ecsInstanceName;
            this.ecsUniqueSuffix = builder.ecsUniqueSuffix;
            this.imageId = builder.imageId;
            this.internetChargeType = builder.internetChargeType;
            this.internetMaxBandwidthOut = builder.internetMaxBandwidthOut;
            this.keyPairName = builder.keyPairName;
            this.osPassword = builder.osPassword;
            this.passwordInherit = builder.passwordInherit;
            this.periodType = builder.periodType;
            this.resourceGroupId = builder.resourceGroupId;
            this.userData = builder.userData;
            this.userDataInBase64 = builder.userDataInBase64;
        }

        @Override
        public final java.lang.Object getEcsClassList() {
            return this.ecsClassList;
        }

        @Override
        public final java.lang.Object getEngine() {
            return this.engine;
        }

        @Override
        public final java.lang.Object getPayType() {
            return this.payType;
        }

        @Override
        public final java.lang.Object getPeriod() {
            return this.period;
        }

        @Override
        public final java.lang.Object getSecurityGroupId() {
            return this.securityGroupId;
        }

        @Override
        public final java.lang.Object getVpcId() {
            return this.vpcId;
        }

        @Override
        public final java.lang.Object getVSwitchId() {
            return this.vSwitchId;
        }

        @Override
        public final java.lang.Object getZoneId() {
            return this.zoneId;
        }

        @Override
        public final java.lang.Object getAutoRenew() {
            return this.autoRenew;
        }

        @Override
        public final java.lang.Object getDedicatedHostGroupDescription() {
            return this.dedicatedHostGroupDescription;
        }

        @Override
        public final java.lang.Object getDedicatedHostGroupId() {
            return this.dedicatedHostGroupId;
        }

        @Override
        public final java.lang.Object getEcsDeploymentSetId() {
            return this.ecsDeploymentSetId;
        }

        @Override
        public final java.lang.Object getEcsHostName() {
            return this.ecsHostName;
        }

        @Override
        public final java.lang.Object getEcsInstanceName() {
            return this.ecsInstanceName;
        }

        @Override
        public final java.lang.Object getEcsUniqueSuffix() {
            return this.ecsUniqueSuffix;
        }

        @Override
        public final java.lang.Object getImageId() {
            return this.imageId;
        }

        @Override
        public final java.lang.Object getInternetChargeType() {
            return this.internetChargeType;
        }

        @Override
        public final java.lang.Object getInternetMaxBandwidthOut() {
            return this.internetMaxBandwidthOut;
        }

        @Override
        public final java.lang.Object getKeyPairName() {
            return this.keyPairName;
        }

        @Override
        public final java.lang.Object getOsPassword() {
            return this.osPassword;
        }

        @Override
        public final java.lang.Object getPasswordInherit() {
            return this.passwordInherit;
        }

        @Override
        public final java.lang.Object getPeriodType() {
            return this.periodType;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getUserData() {
            return this.userData;
        }

        @Override
        public final java.lang.Object getUserDataInBase64() {
            return this.userDataInBase64;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("ecsClassList", om.valueToTree(this.getEcsClassList()));
            data.set("engine", om.valueToTree(this.getEngine()));
            data.set("payType", om.valueToTree(this.getPayType()));
            data.set("period", om.valueToTree(this.getPeriod()));
            data.set("securityGroupId", om.valueToTree(this.getSecurityGroupId()));
            data.set("vpcId", om.valueToTree(this.getVpcId()));
            data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
            data.set("zoneId", om.valueToTree(this.getZoneId()));
            if (this.getAutoRenew() != null) {
                data.set("autoRenew", om.valueToTree(this.getAutoRenew()));
            }
            if (this.getDedicatedHostGroupDescription() != null) {
                data.set("dedicatedHostGroupDescription", om.valueToTree(this.getDedicatedHostGroupDescription()));
            }
            if (this.getDedicatedHostGroupId() != null) {
                data.set("dedicatedHostGroupId", om.valueToTree(this.getDedicatedHostGroupId()));
            }
            if (this.getEcsDeploymentSetId() != null) {
                data.set("ecsDeploymentSetId", om.valueToTree(this.getEcsDeploymentSetId()));
            }
            if (this.getEcsHostName() != null) {
                data.set("ecsHostName", om.valueToTree(this.getEcsHostName()));
            }
            if (this.getEcsInstanceName() != null) {
                data.set("ecsInstanceName", om.valueToTree(this.getEcsInstanceName()));
            }
            if (this.getEcsUniqueSuffix() != null) {
                data.set("ecsUniqueSuffix", om.valueToTree(this.getEcsUniqueSuffix()));
            }
            if (this.getImageId() != null) {
                data.set("imageId", om.valueToTree(this.getImageId()));
            }
            if (this.getInternetChargeType() != null) {
                data.set("internetChargeType", om.valueToTree(this.getInternetChargeType()));
            }
            if (this.getInternetMaxBandwidthOut() != null) {
                data.set("internetMaxBandwidthOut", om.valueToTree(this.getInternetMaxBandwidthOut()));
            }
            if (this.getKeyPairName() != null) {
                data.set("keyPairName", om.valueToTree(this.getKeyPairName()));
            }
            if (this.getOsPassword() != null) {
                data.set("osPassword", om.valueToTree(this.getOsPassword()));
            }
            if (this.getPasswordInherit() != null) {
                data.set("passwordInherit", om.valueToTree(this.getPasswordInherit()));
            }
            if (this.getPeriodType() != null) {
                data.set("periodType", om.valueToTree(this.getPeriodType()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getUserData() != null) {
                data.set("userData", om.valueToTree(this.getUserData()));
            }
            if (this.getUserDataInBase64() != null) {
                data.set("userDataInBase64", om.valueToTree(this.getUserDataInBase64()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cddc.RosMyBaseProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosMyBaseProps.Jsii$Proxy that = (RosMyBaseProps.Jsii$Proxy) o;

            if (!ecsClassList.equals(that.ecsClassList)) return false;
            if (!engine.equals(that.engine)) return false;
            if (!payType.equals(that.payType)) return false;
            if (!period.equals(that.period)) return false;
            if (!securityGroupId.equals(that.securityGroupId)) return false;
            if (!vpcId.equals(that.vpcId)) return false;
            if (!vSwitchId.equals(that.vSwitchId)) return false;
            if (!zoneId.equals(that.zoneId)) return false;
            if (this.autoRenew != null ? !this.autoRenew.equals(that.autoRenew) : that.autoRenew != null) return false;
            if (this.dedicatedHostGroupDescription != null ? !this.dedicatedHostGroupDescription.equals(that.dedicatedHostGroupDescription) : that.dedicatedHostGroupDescription != null) return false;
            if (this.dedicatedHostGroupId != null ? !this.dedicatedHostGroupId.equals(that.dedicatedHostGroupId) : that.dedicatedHostGroupId != null) return false;
            if (this.ecsDeploymentSetId != null ? !this.ecsDeploymentSetId.equals(that.ecsDeploymentSetId) : that.ecsDeploymentSetId != null) return false;
            if (this.ecsHostName != null ? !this.ecsHostName.equals(that.ecsHostName) : that.ecsHostName != null) return false;
            if (this.ecsInstanceName != null ? !this.ecsInstanceName.equals(that.ecsInstanceName) : that.ecsInstanceName != null) return false;
            if (this.ecsUniqueSuffix != null ? !this.ecsUniqueSuffix.equals(that.ecsUniqueSuffix) : that.ecsUniqueSuffix != null) return false;
            if (this.imageId != null ? !this.imageId.equals(that.imageId) : that.imageId != null) return false;
            if (this.internetChargeType != null ? !this.internetChargeType.equals(that.internetChargeType) : that.internetChargeType != null) return false;
            if (this.internetMaxBandwidthOut != null ? !this.internetMaxBandwidthOut.equals(that.internetMaxBandwidthOut) : that.internetMaxBandwidthOut != null) return false;
            if (this.keyPairName != null ? !this.keyPairName.equals(that.keyPairName) : that.keyPairName != null) return false;
            if (this.osPassword != null ? !this.osPassword.equals(that.osPassword) : that.osPassword != null) return false;
            if (this.passwordInherit != null ? !this.passwordInherit.equals(that.passwordInherit) : that.passwordInherit != null) return false;
            if (this.periodType != null ? !this.periodType.equals(that.periodType) : that.periodType != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.userData != null ? !this.userData.equals(that.userData) : that.userData != null) return false;
            return this.userDataInBase64 != null ? this.userDataInBase64.equals(that.userDataInBase64) : that.userDataInBase64 == null;
        }

        @Override
        public final int hashCode() {
            int result = this.ecsClassList.hashCode();
            result = 31 * result + (this.engine.hashCode());
            result = 31 * result + (this.payType.hashCode());
            result = 31 * result + (this.period.hashCode());
            result = 31 * result + (this.securityGroupId.hashCode());
            result = 31 * result + (this.vpcId.hashCode());
            result = 31 * result + (this.vSwitchId.hashCode());
            result = 31 * result + (this.zoneId.hashCode());
            result = 31 * result + (this.autoRenew != null ? this.autoRenew.hashCode() : 0);
            result = 31 * result + (this.dedicatedHostGroupDescription != null ? this.dedicatedHostGroupDescription.hashCode() : 0);
            result = 31 * result + (this.dedicatedHostGroupId != null ? this.dedicatedHostGroupId.hashCode() : 0);
            result = 31 * result + (this.ecsDeploymentSetId != null ? this.ecsDeploymentSetId.hashCode() : 0);
            result = 31 * result + (this.ecsHostName != null ? this.ecsHostName.hashCode() : 0);
            result = 31 * result + (this.ecsInstanceName != null ? this.ecsInstanceName.hashCode() : 0);
            result = 31 * result + (this.ecsUniqueSuffix != null ? this.ecsUniqueSuffix.hashCode() : 0);
            result = 31 * result + (this.imageId != null ? this.imageId.hashCode() : 0);
            result = 31 * result + (this.internetChargeType != null ? this.internetChargeType.hashCode() : 0);
            result = 31 * result + (this.internetMaxBandwidthOut != null ? this.internetMaxBandwidthOut.hashCode() : 0);
            result = 31 * result + (this.keyPairName != null ? this.keyPairName.hashCode() : 0);
            result = 31 * result + (this.osPassword != null ? this.osPassword.hashCode() : 0);
            result = 31 * result + (this.passwordInherit != null ? this.passwordInherit.hashCode() : 0);
            result = 31 * result + (this.periodType != null ? this.periodType.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.userData != null ? this.userData.hashCode() : 0);
            result = 31 * result + (this.userDataInBase64 != null ? this.userDataInBase64.hashCode() : 0);
            return result;
        }
    }
}
