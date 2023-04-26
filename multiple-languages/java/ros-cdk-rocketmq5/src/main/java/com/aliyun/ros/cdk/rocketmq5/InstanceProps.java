package com.aliyun.ros.cdk.rocketmq5;

/**
 * Properties for defining a `ALIYUN::ROCKETMQ5::Instance`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.80.0 (build bce6a1d)", date = "2023-04-26T03:02:20.883Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.rocketmq5.$Module.class, fqn = "@alicloud/ros-cdk-rocketmq5.InstanceProps")
@software.amazon.jsii.Jsii.Proxy(InstanceProps.Jsii$Proxy.class)
public interface InstanceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property internetInfo: Public network configuration information.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInternetInfo();

    /**
     * Property productInfo: Instance specification information.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getProductInfo();

    /**
     * Property seriesCode: The primary series code of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSeriesCode();

    /**
     * Property subSeriesCode: The sub series code of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSubSeriesCode();

    /**
     * Property vpcInfo: Private network configuration information.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVpcInfo();

    /**
     * Property autoRenew: Whether to auto-renew.
     * <p>
     * This parameter takes effect only when the PaymentType=Subscription.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenew() {
        return null;
    }

    /**
     * Property autoRenewPeriod: Automatic renewal period.
     * <p>
     * This parameter is valid only when automatic renewal is enabled. Unit: Month.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenewPeriod() {
        return null;
    }

    /**
     * Property instanceName: The name of the instance to be created.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceName() {
        return null;
    }

    /**
     * Property paymentType: The sub series code of the instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPaymentType() {
        return null;
    }

    /**
     * Property period: The subscription duration.
     * <p>
     * Valid values:
     * When Period is Month, it could be from 1 to 6, 12, 24, 36.
     * When Period is Year, it could be from 1 to 3.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
        return null;
    }

    /**
     * Property periodUnit: The period unit for the duration of the instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriodUnit() {
        return null;
    }

    /**
     * Property remark: The remark of instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRemark() {
        return null;
    }

    /**
     * Property resourceGroupId: Resource group ID.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
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
        java.lang.Object internetInfo;
        java.lang.Object productInfo;
        java.lang.Object seriesCode;
        java.lang.Object subSeriesCode;
        java.lang.Object vpcInfo;
        java.lang.Object autoRenew;
        java.lang.Object autoRenewPeriod;
        java.lang.Object instanceName;
        java.lang.Object paymentType;
        java.lang.Object period;
        java.lang.Object periodUnit;
        java.lang.Object remark;
        java.lang.Object resourceGroupId;

        /**
         * Sets the value of {@link InstanceProps#getInternetInfo}
         * @param internetInfo Property internetInfo: Public network configuration information. This parameter is required.
         * @return {@code this}
         */
        public Builder internetInfo(com.aliyun.ros.cdk.core.IResolvable internetInfo) {
            this.internetInfo = internetInfo;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getInternetInfo}
         * @param internetInfo Property internetInfo: Public network configuration information. This parameter is required.
         * @return {@code this}
         */
        public Builder internetInfo(com.aliyun.ros.cdk.rocketmq5.RosInstance.InternetInfoProperty internetInfo) {
            this.internetInfo = internetInfo;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getProductInfo}
         * @param productInfo Property productInfo: Instance specification information. This parameter is required.
         * @return {@code this}
         */
        public Builder productInfo(com.aliyun.ros.cdk.core.IResolvable productInfo) {
            this.productInfo = productInfo;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getProductInfo}
         * @param productInfo Property productInfo: Instance specification information. This parameter is required.
         * @return {@code this}
         */
        public Builder productInfo(com.aliyun.ros.cdk.rocketmq5.RosInstance.ProductInfoProperty productInfo) {
            this.productInfo = productInfo;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getSeriesCode}
         * @param seriesCode Property seriesCode: The primary series code of the instance. This parameter is required.
         * @return {@code this}
         */
        public Builder seriesCode(java.lang.String seriesCode) {
            this.seriesCode = seriesCode;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getSeriesCode}
         * @param seriesCode Property seriesCode: The primary series code of the instance. This parameter is required.
         * @return {@code this}
         */
        public Builder seriesCode(com.aliyun.ros.cdk.core.IResolvable seriesCode) {
            this.seriesCode = seriesCode;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getSubSeriesCode}
         * @param subSeriesCode Property subSeriesCode: The sub series code of the instance. This parameter is required.
         * @return {@code this}
         */
        public Builder subSeriesCode(java.lang.String subSeriesCode) {
            this.subSeriesCode = subSeriesCode;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getSubSeriesCode}
         * @param subSeriesCode Property subSeriesCode: The sub series code of the instance. This parameter is required.
         * @return {@code this}
         */
        public Builder subSeriesCode(com.aliyun.ros.cdk.core.IResolvable subSeriesCode) {
            this.subSeriesCode = subSeriesCode;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getVpcInfo}
         * @param vpcInfo Property vpcInfo: Private network configuration information. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcInfo(com.aliyun.ros.cdk.core.IResolvable vpcInfo) {
            this.vpcInfo = vpcInfo;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getVpcInfo}
         * @param vpcInfo Property vpcInfo: Private network configuration information. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcInfo(com.aliyun.ros.cdk.rocketmq5.RosInstance.VpcInfoProperty vpcInfo) {
            this.vpcInfo = vpcInfo;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getAutoRenew}
         * @param autoRenew Property autoRenew: Whether to auto-renew.
         *                  This parameter takes effect only when the PaymentType=Subscription.
         * @return {@code this}
         */
        public Builder autoRenew(java.lang.Boolean autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getAutoRenew}
         * @param autoRenew Property autoRenew: Whether to auto-renew.
         *                  This parameter takes effect only when the PaymentType=Subscription.
         * @return {@code this}
         */
        public Builder autoRenew(com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getAutoRenewPeriod}
         * @param autoRenewPeriod Property autoRenewPeriod: Automatic renewal period.
         *                        This parameter is valid only when automatic renewal is enabled. Unit: Month.
         * @return {@code this}
         */
        public Builder autoRenewPeriod(java.lang.Number autoRenewPeriod) {
            this.autoRenewPeriod = autoRenewPeriod;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getAutoRenewPeriod}
         * @param autoRenewPeriod Property autoRenewPeriod: Automatic renewal period.
         *                        This parameter is valid only when automatic renewal is enabled. Unit: Month.
         * @return {@code this}
         */
        public Builder autoRenewPeriod(com.aliyun.ros.cdk.core.IResolvable autoRenewPeriod) {
            this.autoRenewPeriod = autoRenewPeriod;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getInstanceName}
         * @param instanceName Property instanceName: The name of the instance to be created.
         * @return {@code this}
         */
        public Builder instanceName(java.lang.String instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getInstanceName}
         * @param instanceName Property instanceName: The name of the instance to be created.
         * @return {@code this}
         */
        public Builder instanceName(com.aliyun.ros.cdk.core.IResolvable instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getPaymentType}
         * @param paymentType Property paymentType: The sub series code of the instance.
         * @return {@code this}
         */
        public Builder paymentType(java.lang.String paymentType) {
            this.paymentType = paymentType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getPaymentType}
         * @param paymentType Property paymentType: The sub series code of the instance.
         * @return {@code this}
         */
        public Builder paymentType(com.aliyun.ros.cdk.core.IResolvable paymentType) {
            this.paymentType = paymentType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getPeriod}
         * @param period Property period: The subscription duration.
         *               Valid values:
         *               When Period is Month, it could be from 1 to 6, 12, 24, 36.
         *               When Period is Year, it could be from 1 to 3.
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getPeriod}
         * @param period Property period: The subscription duration.
         *               Valid values:
         *               When Period is Month, it could be from 1 to 6, 12, 24, 36.
         *               When Period is Year, it could be from 1 to 3.
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getPeriodUnit}
         * @param periodUnit Property periodUnit: The period unit for the duration of the instance.
         * @return {@code this}
         */
        public Builder periodUnit(java.lang.String periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getPeriodUnit}
         * @param periodUnit Property periodUnit: The period unit for the duration of the instance.
         * @return {@code this}
         */
        public Builder periodUnit(com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getRemark}
         * @param remark Property remark: The remark of instance.
         * @return {@code this}
         */
        public Builder remark(java.lang.String remark) {
            this.remark = remark;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getRemark}
         * @param remark Property remark: The remark of instance.
         * @return {@code this}
         */
        public Builder remark(com.aliyun.ros.cdk.core.IResolvable remark) {
            this.remark = remark;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: Resource group ID.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: Resource group ID.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
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
        private final java.lang.Object internetInfo;
        private final java.lang.Object productInfo;
        private final java.lang.Object seriesCode;
        private final java.lang.Object subSeriesCode;
        private final java.lang.Object vpcInfo;
        private final java.lang.Object autoRenew;
        private final java.lang.Object autoRenewPeriod;
        private final java.lang.Object instanceName;
        private final java.lang.Object paymentType;
        private final java.lang.Object period;
        private final java.lang.Object periodUnit;
        private final java.lang.Object remark;
        private final java.lang.Object resourceGroupId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.internetInfo = software.amazon.jsii.Kernel.get(this, "internetInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.productInfo = software.amazon.jsii.Kernel.get(this, "productInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.seriesCode = software.amazon.jsii.Kernel.get(this, "seriesCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.subSeriesCode = software.amazon.jsii.Kernel.get(this, "subSeriesCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcInfo = software.amazon.jsii.Kernel.get(this, "vpcInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoRenew = software.amazon.jsii.Kernel.get(this, "autoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoRenewPeriod = software.amazon.jsii.Kernel.get(this, "autoRenewPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceName = software.amazon.jsii.Kernel.get(this, "instanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.paymentType = software.amazon.jsii.Kernel.get(this, "paymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.periodUnit = software.amazon.jsii.Kernel.get(this, "periodUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.remark = software.amazon.jsii.Kernel.get(this, "remark", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.internetInfo = java.util.Objects.requireNonNull(builder.internetInfo, "internetInfo is required");
            this.productInfo = java.util.Objects.requireNonNull(builder.productInfo, "productInfo is required");
            this.seriesCode = java.util.Objects.requireNonNull(builder.seriesCode, "seriesCode is required");
            this.subSeriesCode = java.util.Objects.requireNonNull(builder.subSeriesCode, "subSeriesCode is required");
            this.vpcInfo = java.util.Objects.requireNonNull(builder.vpcInfo, "vpcInfo is required");
            this.autoRenew = builder.autoRenew;
            this.autoRenewPeriod = builder.autoRenewPeriod;
            this.instanceName = builder.instanceName;
            this.paymentType = builder.paymentType;
            this.period = builder.period;
            this.periodUnit = builder.periodUnit;
            this.remark = builder.remark;
            this.resourceGroupId = builder.resourceGroupId;
        }

        @Override
        public final java.lang.Object getInternetInfo() {
            return this.internetInfo;
        }

        @Override
        public final java.lang.Object getProductInfo() {
            return this.productInfo;
        }

        @Override
        public final java.lang.Object getSeriesCode() {
            return this.seriesCode;
        }

        @Override
        public final java.lang.Object getSubSeriesCode() {
            return this.subSeriesCode;
        }

        @Override
        public final java.lang.Object getVpcInfo() {
            return this.vpcInfo;
        }

        @Override
        public final java.lang.Object getAutoRenew() {
            return this.autoRenew;
        }

        @Override
        public final java.lang.Object getAutoRenewPeriod() {
            return this.autoRenewPeriod;
        }

        @Override
        public final java.lang.Object getInstanceName() {
            return this.instanceName;
        }

        @Override
        public final java.lang.Object getPaymentType() {
            return this.paymentType;
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
        public final java.lang.Object getRemark() {
            return this.remark;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("internetInfo", om.valueToTree(this.getInternetInfo()));
            data.set("productInfo", om.valueToTree(this.getProductInfo()));
            data.set("seriesCode", om.valueToTree(this.getSeriesCode()));
            data.set("subSeriesCode", om.valueToTree(this.getSubSeriesCode()));
            data.set("vpcInfo", om.valueToTree(this.getVpcInfo()));
            if (this.getAutoRenew() != null) {
                data.set("autoRenew", om.valueToTree(this.getAutoRenew()));
            }
            if (this.getAutoRenewPeriod() != null) {
                data.set("autoRenewPeriod", om.valueToTree(this.getAutoRenewPeriod()));
            }
            if (this.getInstanceName() != null) {
                data.set("instanceName", om.valueToTree(this.getInstanceName()));
            }
            if (this.getPaymentType() != null) {
                data.set("paymentType", om.valueToTree(this.getPaymentType()));
            }
            if (this.getPeriod() != null) {
                data.set("period", om.valueToTree(this.getPeriod()));
            }
            if (this.getPeriodUnit() != null) {
                data.set("periodUnit", om.valueToTree(this.getPeriodUnit()));
            }
            if (this.getRemark() != null) {
                data.set("remark", om.valueToTree(this.getRemark()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-rocketmq5.InstanceProps"));
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

            if (!internetInfo.equals(that.internetInfo)) return false;
            if (!productInfo.equals(that.productInfo)) return false;
            if (!seriesCode.equals(that.seriesCode)) return false;
            if (!subSeriesCode.equals(that.subSeriesCode)) return false;
            if (!vpcInfo.equals(that.vpcInfo)) return false;
            if (this.autoRenew != null ? !this.autoRenew.equals(that.autoRenew) : that.autoRenew != null) return false;
            if (this.autoRenewPeriod != null ? !this.autoRenewPeriod.equals(that.autoRenewPeriod) : that.autoRenewPeriod != null) return false;
            if (this.instanceName != null ? !this.instanceName.equals(that.instanceName) : that.instanceName != null) return false;
            if (this.paymentType != null ? !this.paymentType.equals(that.paymentType) : that.paymentType != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.periodUnit != null ? !this.periodUnit.equals(that.periodUnit) : that.periodUnit != null) return false;
            if (this.remark != null ? !this.remark.equals(that.remark) : that.remark != null) return false;
            return this.resourceGroupId != null ? this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.internetInfo.hashCode();
            result = 31 * result + (this.productInfo.hashCode());
            result = 31 * result + (this.seriesCode.hashCode());
            result = 31 * result + (this.subSeriesCode.hashCode());
            result = 31 * result + (this.vpcInfo.hashCode());
            result = 31 * result + (this.autoRenew != null ? this.autoRenew.hashCode() : 0);
            result = 31 * result + (this.autoRenewPeriod != null ? this.autoRenewPeriod.hashCode() : 0);
            result = 31 * result + (this.instanceName != null ? this.instanceName.hashCode() : 0);
            result = 31 * result + (this.paymentType != null ? this.paymentType.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.periodUnit != null ? this.periodUnit.hashCode() : 0);
            result = 31 * result + (this.remark != null ? this.remark.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            return result;
        }
    }
}
