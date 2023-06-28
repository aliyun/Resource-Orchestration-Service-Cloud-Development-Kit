package com.aliyun.ros.cdk.cloudphone;

/**
 * Properties for defining a <code>ALIYUN::CloudPhone::InstanceGroup</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.84.0 (build 5404dcf)", date = "2023-06-28T08:22:27.196Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudphone.$Module.class, fqn = "@alicloud/ros-cdk-cloudphone.InstanceGroupProps")
@software.amazon.jsii.Jsii.Proxy(InstanceGroupProps.Jsii$Proxy.class)
public interface InstanceGroupProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property imageId: The image id.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getImageId();

    /**
     * Property instanceType: instance type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceType();

    /**
     * Property securityGroupId: Security group to create ecs instance.
     * <p>
     * For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSecurityGroupId();

    /**
     * Property vSwitchId: vswitch id.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVSwitchId();

    /**
     * Property amount: Specifies the number of ECS instances to create.Value range: 1~100 Default：1.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAmount() {
        return null;
    }

    /**
     * Property autoPay: Whether to pay automatically, the default is true.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoPay() {
        return null;
    }

    /**
     * Property autoRenew: Whether renew the fee automatically.
     * <p>
     * When the parameter InstanceChargeType is PrePaid, it will take effect.
     * Range of value:True: automatic renewal.
     * False: no automatic renewal. Default value is False.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenew() {
        return null;
    }

    /**
     * Property chargeType: Instance internet access charge type.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getChargeType() {
        return null;
    }

    /**
     * Property description: Description of instance.
     * <p>
     * The length is 2~256 English or Chinese characters and cannot start with http:// and https://.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property eipBandwidth: EIP bandwidth value, the value range is 1-200.
     * <p>
     * Setting this parameter will automatically create an EIP instance
     * corresponding to the bandwidth and bind the EIP instance to the
     * cloud phone instance. When the instance is released, this EIP
     * instance will be released and recycled together.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEipBandwidth() {
        return null;
    }

    /**
     * Property instanceName: "Display name of the instance, [2, 128] English or Chinese characters, must  start with a letter or Chinese in size, can contain numbers, "_" or ".", "-".
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceName() {
        return null;
    }

    /**
     * Property keyPairName: Cloud phone instance key pair name.
     * <p>
     * The cloud phone key can be imported through the ImportKeyPair interface.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getKeyPairName() {
        return null;
    }

    /**
     * Property period: Prepaid time period.
     * <p>
     * While PeriodUnit is month, it could be 1, 2, 3, 6.
     * While PeriodUnit is year, it could be from 1 to 5Default value is 1.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
        return null;
    }

    /**
     * Property periodUnit: Unit of prepaid time period, it could be Month/Year.
     * <p>
     * Default value is Month.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriodUnit() {
        return null;
    }

    /**
     * Property resolution: You can use the DescribeInstanceTypes interface to query the list of  resolutions supported by the current specification and select an appropriate resolution.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResolution() {
        return null;
    }

    /**
     * Property tag: Tags to attach to instance.
     * <p>
     * Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTag() {
        return null;
    }

    /**
     * Property vncPassword: Cloud phone VNC password.
     * <p>
     * The password must be six characters long, and must contain only uppercase,
     * lowercase English letters and Arabic numerals.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVncPassword() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link InstanceGroupProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link InstanceGroupProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<InstanceGroupProps> {
        java.lang.Object imageId;
        java.lang.Object instanceType;
        java.lang.Object securityGroupId;
        java.lang.Object vSwitchId;
        java.lang.Object amount;
        java.lang.Object autoPay;
        java.lang.Object autoRenew;
        java.lang.Object chargeType;
        java.lang.Object description;
        java.lang.Object eipBandwidth;
        java.lang.Object instanceName;
        java.lang.Object keyPairName;
        java.lang.Object period;
        java.lang.Object periodUnit;
        java.lang.Object resolution;
        java.lang.Object tag;
        java.lang.Object vncPassword;

        /**
         * Sets the value of {@link InstanceGroupProps#getImageId}
         * @param imageId Property imageId: The image id. This parameter is required.
         * @return {@code this}
         */
        public Builder imageId(java.lang.String imageId) {
            this.imageId = imageId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupProps#getImageId}
         * @param imageId Property imageId: The image id. This parameter is required.
         * @return {@code this}
         */
        public Builder imageId(com.aliyun.ros.cdk.core.IResolvable imageId) {
            this.imageId = imageId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupProps#getInstanceType}
         * @param instanceType Property instanceType: instance type. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceType(java.lang.String instanceType) {
            this.instanceType = instanceType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupProps#getInstanceType}
         * @param instanceType Property instanceType: instance type. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceType(com.aliyun.ros.cdk.core.IResolvable instanceType) {
            this.instanceType = instanceType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupProps#getSecurityGroupId}
         * @param securityGroupId Property securityGroupId: Security group to create ecs instance. This parameter is required.
         *                        For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
         * @return {@code this}
         */
        public Builder securityGroupId(java.lang.String securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupProps#getSecurityGroupId}
         * @param securityGroupId Property securityGroupId: Security group to create ecs instance. This parameter is required.
         *                        For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
         * @return {@code this}
         */
        public Builder securityGroupId(com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: vswitch id. This parameter is required.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: vswitch id. This parameter is required.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupProps#getAmount}
         * @param amount Property amount: Specifies the number of ECS instances to create.Value range: 1~100 Default：1.
         * @return {@code this}
         */
        public Builder amount(java.lang.Number amount) {
            this.amount = amount;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupProps#getAmount}
         * @param amount Property amount: Specifies the number of ECS instances to create.Value range: 1~100 Default：1.
         * @return {@code this}
         */
        public Builder amount(com.aliyun.ros.cdk.core.IResolvable amount) {
            this.amount = amount;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupProps#getAutoPay}
         * @param autoPay Property autoPay: Whether to pay automatically, the default is true.
         * @return {@code this}
         */
        public Builder autoPay(java.lang.Boolean autoPay) {
            this.autoPay = autoPay;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupProps#getAutoPay}
         * @param autoPay Property autoPay: Whether to pay automatically, the default is true.
         * @return {@code this}
         */
        public Builder autoPay(com.aliyun.ros.cdk.core.IResolvable autoPay) {
            this.autoPay = autoPay;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupProps#getAutoRenew}
         * @param autoRenew Property autoRenew: Whether renew the fee automatically.
         *                  When the parameter InstanceChargeType is PrePaid, it will take effect.
         *                  Range of value:True: automatic renewal.
         *                  False: no automatic renewal. Default value is False.
         * @return {@code this}
         */
        public Builder autoRenew(java.lang.Boolean autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupProps#getAutoRenew}
         * @param autoRenew Property autoRenew: Whether renew the fee automatically.
         *                  When the parameter InstanceChargeType is PrePaid, it will take effect.
         *                  Range of value:True: automatic renewal.
         *                  False: no automatic renewal. Default value is False.
         * @return {@code this}
         */
        public Builder autoRenew(com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupProps#getChargeType}
         * @param chargeType Property chargeType: Instance internet access charge type.
         * @return {@code this}
         */
        public Builder chargeType(java.lang.String chargeType) {
            this.chargeType = chargeType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupProps#getChargeType}
         * @param chargeType Property chargeType: Instance internet access charge type.
         * @return {@code this}
         */
        public Builder chargeType(com.aliyun.ros.cdk.core.IResolvable chargeType) {
            this.chargeType = chargeType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupProps#getDescription}
         * @param description Property description: Description of instance.
         *                    The length is 2~256 English or Chinese characters and cannot start with http:// and https://.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupProps#getDescription}
         * @param description Property description: Description of instance.
         *                    The length is 2~256 English or Chinese characters and cannot start with http:// and https://.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupProps#getEipBandwidth}
         * @param eipBandwidth Property eipBandwidth: EIP bandwidth value, the value range is 1-200.
         *                     Setting this parameter will automatically create an EIP instance
         *                     corresponding to the bandwidth and bind the EIP instance to the
         *                     cloud phone instance. When the instance is released, this EIP
         *                     instance will be released and recycled together.
         * @return {@code this}
         */
        public Builder eipBandwidth(java.lang.Number eipBandwidth) {
            this.eipBandwidth = eipBandwidth;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupProps#getEipBandwidth}
         * @param eipBandwidth Property eipBandwidth: EIP bandwidth value, the value range is 1-200.
         *                     Setting this parameter will automatically create an EIP instance
         *                     corresponding to the bandwidth and bind the EIP instance to the
         *                     cloud phone instance. When the instance is released, this EIP
         *                     instance will be released and recycled together.
         * @return {@code this}
         */
        public Builder eipBandwidth(com.aliyun.ros.cdk.core.IResolvable eipBandwidth) {
            this.eipBandwidth = eipBandwidth;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupProps#getInstanceName}
         * @param instanceName Property instanceName: "Display name of the instance, [2, 128] English or Chinese characters, must  start with a letter or Chinese in size, can contain numbers, "_" or ".", "-".
         * @return {@code this}
         */
        public Builder instanceName(java.lang.String instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupProps#getInstanceName}
         * @param instanceName Property instanceName: "Display name of the instance, [2, 128] English or Chinese characters, must  start with a letter or Chinese in size, can contain numbers, "_" or ".", "-".
         * @return {@code this}
         */
        public Builder instanceName(com.aliyun.ros.cdk.core.IResolvable instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupProps#getKeyPairName}
         * @param keyPairName Property keyPairName: Cloud phone instance key pair name.
         *                    The cloud phone key can be imported through the ImportKeyPair interface.
         * @return {@code this}
         */
        public Builder keyPairName(java.lang.String keyPairName) {
            this.keyPairName = keyPairName;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupProps#getKeyPairName}
         * @param keyPairName Property keyPairName: Cloud phone instance key pair name.
         *                    The cloud phone key can be imported through the ImportKeyPair interface.
         * @return {@code this}
         */
        public Builder keyPairName(com.aliyun.ros.cdk.core.IResolvable keyPairName) {
            this.keyPairName = keyPairName;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupProps#getPeriod}
         * @param period Property period: Prepaid time period.
         *               While PeriodUnit is month, it could be 1, 2, 3, 6.
         *               While PeriodUnit is year, it could be from 1 to 5Default value is 1.
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupProps#getPeriod}
         * @param period Property period: Prepaid time period.
         *               While PeriodUnit is month, it could be 1, 2, 3, 6.
         *               While PeriodUnit is year, it could be from 1 to 5Default value is 1.
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupProps#getPeriodUnit}
         * @param periodUnit Property periodUnit: Unit of prepaid time period, it could be Month/Year.
         *                   Default value is Month.
         * @return {@code this}
         */
        public Builder periodUnit(java.lang.String periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupProps#getPeriodUnit}
         * @param periodUnit Property periodUnit: Unit of prepaid time period, it could be Month/Year.
         *                   Default value is Month.
         * @return {@code this}
         */
        public Builder periodUnit(com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupProps#getResolution}
         * @param resolution Property resolution: You can use the DescribeInstanceTypes interface to query the list of  resolutions supported by the current specification and select an appropriate resolution.
         * @return {@code this}
         */
        public Builder resolution(java.lang.String resolution) {
            this.resolution = resolution;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupProps#getResolution}
         * @param resolution Property resolution: You can use the DescribeInstanceTypes interface to query the list of  resolutions supported by the current specification and select an appropriate resolution.
         * @return {@code this}
         */
        public Builder resolution(com.aliyun.ros.cdk.core.IResolvable resolution) {
            this.resolution = resolution;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupProps#getTag}
         * @param tag Property tag: Tags to attach to instance.
         *            Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
         * @return {@code this}
         */
        public Builder tag(com.aliyun.ros.cdk.core.IResolvable tag) {
            this.tag = tag;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupProps#getTag}
         * @param tag Property tag: Tags to attach to instance.
         *            Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
         * @return {@code this}
         */
        public Builder tag(java.util.List<? extends java.lang.Object> tag) {
            this.tag = tag;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupProps#getVncPassword}
         * @param vncPassword Property vncPassword: Cloud phone VNC password.
         *                    The password must be six characters long, and must contain only uppercase,
         *                    lowercase English letters and Arabic numerals.
         * @return {@code this}
         */
        public Builder vncPassword(java.lang.String vncPassword) {
            this.vncPassword = vncPassword;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupProps#getVncPassword}
         * @param vncPassword Property vncPassword: Cloud phone VNC password.
         *                    The password must be six characters long, and must contain only uppercase,
         *                    lowercase English letters and Arabic numerals.
         * @return {@code this}
         */
        public Builder vncPassword(com.aliyun.ros.cdk.core.IResolvable vncPassword) {
            this.vncPassword = vncPassword;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link InstanceGroupProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public InstanceGroupProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link InstanceGroupProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements InstanceGroupProps {
        private final java.lang.Object imageId;
        private final java.lang.Object instanceType;
        private final java.lang.Object securityGroupId;
        private final java.lang.Object vSwitchId;
        private final java.lang.Object amount;
        private final java.lang.Object autoPay;
        private final java.lang.Object autoRenew;
        private final java.lang.Object chargeType;
        private final java.lang.Object description;
        private final java.lang.Object eipBandwidth;
        private final java.lang.Object instanceName;
        private final java.lang.Object keyPairName;
        private final java.lang.Object period;
        private final java.lang.Object periodUnit;
        private final java.lang.Object resolution;
        private final java.lang.Object tag;
        private final java.lang.Object vncPassword;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.imageId = software.amazon.jsii.Kernel.get(this, "imageId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceType = software.amazon.jsii.Kernel.get(this, "instanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityGroupId = software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.amount = software.amazon.jsii.Kernel.get(this, "amount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoPay = software.amazon.jsii.Kernel.get(this, "autoPay", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoRenew = software.amazon.jsii.Kernel.get(this, "autoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.chargeType = software.amazon.jsii.Kernel.get(this, "chargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.eipBandwidth = software.amazon.jsii.Kernel.get(this, "eipBandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceName = software.amazon.jsii.Kernel.get(this, "instanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.keyPairName = software.amazon.jsii.Kernel.get(this, "keyPairName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.periodUnit = software.amazon.jsii.Kernel.get(this, "periodUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resolution = software.amazon.jsii.Kernel.get(this, "resolution", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tag = software.amazon.jsii.Kernel.get(this, "tag", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vncPassword = software.amazon.jsii.Kernel.get(this, "vncPassword", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.imageId = java.util.Objects.requireNonNull(builder.imageId, "imageId is required");
            this.instanceType = java.util.Objects.requireNonNull(builder.instanceType, "instanceType is required");
            this.securityGroupId = java.util.Objects.requireNonNull(builder.securityGroupId, "securityGroupId is required");
            this.vSwitchId = java.util.Objects.requireNonNull(builder.vSwitchId, "vSwitchId is required");
            this.amount = builder.amount;
            this.autoPay = builder.autoPay;
            this.autoRenew = builder.autoRenew;
            this.chargeType = builder.chargeType;
            this.description = builder.description;
            this.eipBandwidth = builder.eipBandwidth;
            this.instanceName = builder.instanceName;
            this.keyPairName = builder.keyPairName;
            this.period = builder.period;
            this.periodUnit = builder.periodUnit;
            this.resolution = builder.resolution;
            this.tag = builder.tag;
            this.vncPassword = builder.vncPassword;
        }

        @Override
        public final java.lang.Object getImageId() {
            return this.imageId;
        }

        @Override
        public final java.lang.Object getInstanceType() {
            return this.instanceType;
        }

        @Override
        public final java.lang.Object getSecurityGroupId() {
            return this.securityGroupId;
        }

        @Override
        public final java.lang.Object getVSwitchId() {
            return this.vSwitchId;
        }

        @Override
        public final java.lang.Object getAmount() {
            return this.amount;
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
        public final java.lang.Object getChargeType() {
            return this.chargeType;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getEipBandwidth() {
            return this.eipBandwidth;
        }

        @Override
        public final java.lang.Object getInstanceName() {
            return this.instanceName;
        }

        @Override
        public final java.lang.Object getKeyPairName() {
            return this.keyPairName;
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
        public final java.lang.Object getResolution() {
            return this.resolution;
        }

        @Override
        public final java.lang.Object getTag() {
            return this.tag;
        }

        @Override
        public final java.lang.Object getVncPassword() {
            return this.vncPassword;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("imageId", om.valueToTree(this.getImageId()));
            data.set("instanceType", om.valueToTree(this.getInstanceType()));
            data.set("securityGroupId", om.valueToTree(this.getSecurityGroupId()));
            data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
            if (this.getAmount() != null) {
                data.set("amount", om.valueToTree(this.getAmount()));
            }
            if (this.getAutoPay() != null) {
                data.set("autoPay", om.valueToTree(this.getAutoPay()));
            }
            if (this.getAutoRenew() != null) {
                data.set("autoRenew", om.valueToTree(this.getAutoRenew()));
            }
            if (this.getChargeType() != null) {
                data.set("chargeType", om.valueToTree(this.getChargeType()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getEipBandwidth() != null) {
                data.set("eipBandwidth", om.valueToTree(this.getEipBandwidth()));
            }
            if (this.getInstanceName() != null) {
                data.set("instanceName", om.valueToTree(this.getInstanceName()));
            }
            if (this.getKeyPairName() != null) {
                data.set("keyPairName", om.valueToTree(this.getKeyPairName()));
            }
            if (this.getPeriod() != null) {
                data.set("period", om.valueToTree(this.getPeriod()));
            }
            if (this.getPeriodUnit() != null) {
                data.set("periodUnit", om.valueToTree(this.getPeriodUnit()));
            }
            if (this.getResolution() != null) {
                data.set("resolution", om.valueToTree(this.getResolution()));
            }
            if (this.getTag() != null) {
                data.set("tag", om.valueToTree(this.getTag()));
            }
            if (this.getVncPassword() != null) {
                data.set("vncPassword", om.valueToTree(this.getVncPassword()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cloudphone.InstanceGroupProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            InstanceGroupProps.Jsii$Proxy that = (InstanceGroupProps.Jsii$Proxy) o;

            if (!imageId.equals(that.imageId)) return false;
            if (!instanceType.equals(that.instanceType)) return false;
            if (!securityGroupId.equals(that.securityGroupId)) return false;
            if (!vSwitchId.equals(that.vSwitchId)) return false;
            if (this.amount != null ? !this.amount.equals(that.amount) : that.amount != null) return false;
            if (this.autoPay != null ? !this.autoPay.equals(that.autoPay) : that.autoPay != null) return false;
            if (this.autoRenew != null ? !this.autoRenew.equals(that.autoRenew) : that.autoRenew != null) return false;
            if (this.chargeType != null ? !this.chargeType.equals(that.chargeType) : that.chargeType != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.eipBandwidth != null ? !this.eipBandwidth.equals(that.eipBandwidth) : that.eipBandwidth != null) return false;
            if (this.instanceName != null ? !this.instanceName.equals(that.instanceName) : that.instanceName != null) return false;
            if (this.keyPairName != null ? !this.keyPairName.equals(that.keyPairName) : that.keyPairName != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.periodUnit != null ? !this.periodUnit.equals(that.periodUnit) : that.periodUnit != null) return false;
            if (this.resolution != null ? !this.resolution.equals(that.resolution) : that.resolution != null) return false;
            if (this.tag != null ? !this.tag.equals(that.tag) : that.tag != null) return false;
            return this.vncPassword != null ? this.vncPassword.equals(that.vncPassword) : that.vncPassword == null;
        }

        @Override
        public final int hashCode() {
            int result = this.imageId.hashCode();
            result = 31 * result + (this.instanceType.hashCode());
            result = 31 * result + (this.securityGroupId.hashCode());
            result = 31 * result + (this.vSwitchId.hashCode());
            result = 31 * result + (this.amount != null ? this.amount.hashCode() : 0);
            result = 31 * result + (this.autoPay != null ? this.autoPay.hashCode() : 0);
            result = 31 * result + (this.autoRenew != null ? this.autoRenew.hashCode() : 0);
            result = 31 * result + (this.chargeType != null ? this.chargeType.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.eipBandwidth != null ? this.eipBandwidth.hashCode() : 0);
            result = 31 * result + (this.instanceName != null ? this.instanceName.hashCode() : 0);
            result = 31 * result + (this.keyPairName != null ? this.keyPairName.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.periodUnit != null ? this.periodUnit.hashCode() : 0);
            result = 31 * result + (this.resolution != null ? this.resolution.hashCode() : 0);
            result = 31 * result + (this.tag != null ? this.tag.hashCode() : 0);
            result = 31 * result + (this.vncPassword != null ? this.vncPassword.hashCode() : 0);
            return result;
        }
    }
}
