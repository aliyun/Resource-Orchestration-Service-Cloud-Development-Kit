package com.aliyun.ros.cdk.rocketmq5;

/**
 * Properties for defining a <code>ALIYUN::ROCKETMQ5::Instance</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-07-25T03:56:02.055Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.rocketmq5.$Module.class, fqn = "@alicloud/ros-cdk-rocketmq5.RosInstanceProps")
@software.amazon.jsii.Jsii.Proxy(RosInstanceProps.Jsii$Proxy.class)
public interface RosInstanceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInternetInfo();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getProductInfo();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSeriesCode();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSubSeriesCode();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVpcInfo();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenew() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenewPeriod() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPaymentType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriodUnit() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRemark() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
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
         * Sets the value of {@link RosInstanceProps#getInternetInfo}
         * @param internetInfo the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder internetInfo(com.aliyun.ros.cdk.core.IResolvable internetInfo) {
            this.internetInfo = internetInfo;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getInternetInfo}
         * @param internetInfo the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder internetInfo(com.aliyun.ros.cdk.rocketmq5.RosInstance.InternetInfoProperty internetInfo) {
            this.internetInfo = internetInfo;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getProductInfo}
         * @param productInfo the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder productInfo(com.aliyun.ros.cdk.core.IResolvable productInfo) {
            this.productInfo = productInfo;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getProductInfo}
         * @param productInfo the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder productInfo(com.aliyun.ros.cdk.rocketmq5.RosInstance.ProductInfoProperty productInfo) {
            this.productInfo = productInfo;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getSeriesCode}
         * @param seriesCode the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder seriesCode(java.lang.String seriesCode) {
            this.seriesCode = seriesCode;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getSeriesCode}
         * @param seriesCode the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder seriesCode(com.aliyun.ros.cdk.core.IResolvable seriesCode) {
            this.seriesCode = seriesCode;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getSubSeriesCode}
         * @param subSeriesCode the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder subSeriesCode(java.lang.String subSeriesCode) {
            this.subSeriesCode = subSeriesCode;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getSubSeriesCode}
         * @param subSeriesCode the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder subSeriesCode(com.aliyun.ros.cdk.core.IResolvable subSeriesCode) {
            this.subSeriesCode = subSeriesCode;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getVpcInfo}
         * @param vpcInfo the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcInfo(com.aliyun.ros.cdk.core.IResolvable vpcInfo) {
            this.vpcInfo = vpcInfo;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getVpcInfo}
         * @param vpcInfo the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcInfo(com.aliyun.ros.cdk.rocketmq5.RosInstance.VpcInfoProperty vpcInfo) {
            this.vpcInfo = vpcInfo;
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
         * Sets the value of {@link RosInstanceProps#getAutoRenewPeriod}
         * @param autoRenewPeriod the value to be set.
         * @return {@code this}
         */
        public Builder autoRenewPeriod(java.lang.Number autoRenewPeriod) {
            this.autoRenewPeriod = autoRenewPeriod;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getAutoRenewPeriod}
         * @param autoRenewPeriod the value to be set.
         * @return {@code this}
         */
        public Builder autoRenewPeriod(com.aliyun.ros.cdk.core.IResolvable autoRenewPeriod) {
            this.autoRenewPeriod = autoRenewPeriod;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getInstanceName}
         * @param instanceName the value to be set.
         * @return {@code this}
         */
        public Builder instanceName(java.lang.String instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getInstanceName}
         * @param instanceName the value to be set.
         * @return {@code this}
         */
        public Builder instanceName(com.aliyun.ros.cdk.core.IResolvable instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getPaymentType}
         * @param paymentType the value to be set.
         * @return {@code this}
         */
        public Builder paymentType(java.lang.String paymentType) {
            this.paymentType = paymentType;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getPaymentType}
         * @param paymentType the value to be set.
         * @return {@code this}
         */
        public Builder paymentType(com.aliyun.ros.cdk.core.IResolvable paymentType) {
            this.paymentType = paymentType;
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
         * Sets the value of {@link RosInstanceProps#getPeriodUnit}
         * @param periodUnit the value to be set.
         * @return {@code this}
         */
        public Builder periodUnit(java.lang.String periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getPeriodUnit}
         * @param periodUnit the value to be set.
         * @return {@code this}
         */
        public Builder periodUnit(com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getRemark}
         * @param remark the value to be set.
         * @return {@code this}
         */
        public Builder remark(java.lang.String remark) {
            this.remark = remark;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getRemark}
         * @param remark the value to be set.
         * @return {@code this}
         */
        public Builder remark(com.aliyun.ros.cdk.core.IResolvable remark) {
            this.remark = remark;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-rocketmq5.RosInstanceProps"));
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
