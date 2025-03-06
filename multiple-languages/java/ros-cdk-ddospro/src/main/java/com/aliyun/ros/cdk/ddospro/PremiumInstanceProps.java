package com.aliyun.ros.cdk.ddospro;

/**
 * Properties for defining a <code>PremiumInstance</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddospro-premiuminstance
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:03.737Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ddospro.$Module.class, fqn = "@alicloud/ros-cdk-ddospro.PremiumInstanceProps")
@software.amazon.jsii.Jsii.Proxy(PremiumInstanceProps.Jsii$Proxy.class)
public interface PremiumInstanceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property burstBandwidthMode: The metering method of the 95th percentile burstable clean bandwidth.
     * <p>
     * Valid values:
     * 0: disables the burstable clean bandwidth feature.
     * 1: enables the burstable clean bandwidth feature and uses the daily 95th percentile metering method.
     * 2: enables the burstable clean bandwidth feature and uses the monthly 95th percentile metering method.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBurstBandwidthMode() {
        return null;
    }

    /**
     * Property domainCount: The number of domain names that you want to protect.
     * <p>
     * The value of DomainCount varies based on the value of ProductPlan.
     * If you set ProductPlan to 0, you can set DomainCount to a value that ranges from 10 to 200. The value must be a multiple of 10.
     * If you set ProductPlan to 1, you can set DomainCount to a value that ranges from 10 to 200. The value must be a multiple of 10.
     * If you set ProductPlan to 2, you do not need to specify this parameter.
     * If you set ProductPlan to 3, you can set DomainCount to a value that ranges from 10 to 200. The value must be a multiple of 10.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDomainCount() {
        return null;
    }

    /**
     * Property functionVersion: The function plan of the instance.
     * <p>
     * Valid values:
     * 0: the Standard function plan
     * 1: the Enhanced function plan.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFunctionVersion() {
        return null;
    }

    /**
     * Property normalBandwidth: The clean bandwidth provided by the instance.
     * <p>
     * Unit: Mbit/s.
     * The value of NormalBandwidth varies based on the value of ProductPlan.
     * If you set ProductPlan to 0, you can set NormalBandwidth to 100, 150, 200, 250, or 300.
     * If you set ProductPlan to 1, you can set NormalBandwidth to 100, 150, 200, 250, or 300.
     * If you set ProductPlan to 2, you can set NormalBandwidth to 10, 20, 30, 40, 50, 60, 70, 80, 90, or 100.
     * If you set ProductPlan to 3, you can set NormalBandwidth to 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 150, or 200.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNormalBandwidth() {
        return null;
    }

    /**
     * Property normalQps: The clean QPS provided by the instance.
     * <p>
     * The value of NormalQps varies based on the value of ProductPlan.
     * If you set ProductPlan to 0, you can set NormalQps to a value that ranges from 500 to 100000. The value must be a multiple of 100.
     * If you set ProductPlan to 1, you can set NormalQps to a value that ranges from 1000 to 100000. The value must be a multiple of 100.
     * If you set ProductPlan to 2, you do not need to specify this parameter.
     * If you set ProductPlan to 3, you can set NormalQps to a value that ranges from 500 to 100000. The value must be a multiple of 100.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNormalQps() {
        return null;
    }

    /**
     * Property period: The subscription period of the firewallIf PeriodUnit is Month, the valid range is 1, 2, 3, 4, 5, 6, 12, 24 If PeriodUnit is Year, the valid range is 1, 2.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
        return null;
    }

    /**
     * Property periodUnit: The unit of the subscription duration.
     * <p>
     * Valid values:
     * Month
     * Year
     * Default value: Month.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriodUnit() {
        return null;
    }

    /**
     * Property portCount: The number of ports that you want to protect.
     * <p>
     * The value of PortCount varies based on the value of ProductPlan.
     * If you set ProductPlan to 0, you can set PortCount to a value that ranges from 5 to 400. The value must be a multiple of 5.
     * If you set ProductPlan to 1, you can set PortCount to a value that ranges from 5 to 400. The value must be a multiple of 5.
     * If you set ProductPlan to 2, you do not need to specify this parameter.
     * If you set ProductPlan to 3, you can set PortCount to a value that ranges from 5 to 400. The value must be a multiple of 5.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPortCount() {
        return null;
    }

    /**
     * Property productPlan: The mitigation plan of the instance.
     * <p>
     * Valid values:
     * 0: the Insurance mitigation plan
     * 1: the Unlimited mitigation plan
     * 2: the Chinese Mainland Acceleration (CMA) mitigation plan
     * 3: the Secure Chinese Mainland Acceleration (Sec-CMA) mitigation plan
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getProductPlan() {
        return null;
    }

    /**
     * Property tags: Tags to attach to instance.
     * <p>
     * Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ddospro.RosPremiumInstance.TagsProperty> getTags() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link PremiumInstanceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link PremiumInstanceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<PremiumInstanceProps> {
        java.lang.Object burstBandwidthMode;
        java.lang.Object domainCount;
        java.lang.Object functionVersion;
        java.lang.Object normalBandwidth;
        java.lang.Object normalQps;
        java.lang.Object period;
        java.lang.Object periodUnit;
        java.lang.Object portCount;
        java.lang.Object productPlan;
        java.util.List<com.aliyun.ros.cdk.ddospro.RosPremiumInstance.TagsProperty> tags;

        /**
         * Sets the value of {@link PremiumInstanceProps#getBurstBandwidthMode}
         * @param burstBandwidthMode Property burstBandwidthMode: The metering method of the 95th percentile burstable clean bandwidth.
         *                           Valid values:
         *                           0: disables the burstable clean bandwidth feature.
         *                           1: enables the burstable clean bandwidth feature and uses the daily 95th percentile metering method.
         *                           2: enables the burstable clean bandwidth feature and uses the monthly 95th percentile metering method.
         * @return {@code this}
         */
        public Builder burstBandwidthMode(java.lang.String burstBandwidthMode) {
            this.burstBandwidthMode = burstBandwidthMode;
            return this;
        }

        /**
         * Sets the value of {@link PremiumInstanceProps#getBurstBandwidthMode}
         * @param burstBandwidthMode Property burstBandwidthMode: The metering method of the 95th percentile burstable clean bandwidth.
         *                           Valid values:
         *                           0: disables the burstable clean bandwidth feature.
         *                           1: enables the burstable clean bandwidth feature and uses the daily 95th percentile metering method.
         *                           2: enables the burstable clean bandwidth feature and uses the monthly 95th percentile metering method.
         * @return {@code this}
         */
        public Builder burstBandwidthMode(com.aliyun.ros.cdk.core.IResolvable burstBandwidthMode) {
            this.burstBandwidthMode = burstBandwidthMode;
            return this;
        }

        /**
         * Sets the value of {@link PremiumInstanceProps#getDomainCount}
         * @param domainCount Property domainCount: The number of domain names that you want to protect.
         *                    The value of DomainCount varies based on the value of ProductPlan.
         *                    If you set ProductPlan to 0, you can set DomainCount to a value that ranges from 10 to 200. The value must be a multiple of 10.
         *                    If you set ProductPlan to 1, you can set DomainCount to a value that ranges from 10 to 200. The value must be a multiple of 10.
         *                    If you set ProductPlan to 2, you do not need to specify this parameter.
         *                    If you set ProductPlan to 3, you can set DomainCount to a value that ranges from 10 to 200. The value must be a multiple of 10.
         * @return {@code this}
         */
        public Builder domainCount(java.lang.Number domainCount) {
            this.domainCount = domainCount;
            return this;
        }

        /**
         * Sets the value of {@link PremiumInstanceProps#getDomainCount}
         * @param domainCount Property domainCount: The number of domain names that you want to protect.
         *                    The value of DomainCount varies based on the value of ProductPlan.
         *                    If you set ProductPlan to 0, you can set DomainCount to a value that ranges from 10 to 200. The value must be a multiple of 10.
         *                    If you set ProductPlan to 1, you can set DomainCount to a value that ranges from 10 to 200. The value must be a multiple of 10.
         *                    If you set ProductPlan to 2, you do not need to specify this parameter.
         *                    If you set ProductPlan to 3, you can set DomainCount to a value that ranges from 10 to 200. The value must be a multiple of 10.
         * @return {@code this}
         */
        public Builder domainCount(com.aliyun.ros.cdk.core.IResolvable domainCount) {
            this.domainCount = domainCount;
            return this;
        }

        /**
         * Sets the value of {@link PremiumInstanceProps#getFunctionVersion}
         * @param functionVersion Property functionVersion: The function plan of the instance.
         *                        Valid values:
         *                        0: the Standard function plan
         *                        1: the Enhanced function plan.
         * @return {@code this}
         */
        public Builder functionVersion(java.lang.String functionVersion) {
            this.functionVersion = functionVersion;
            return this;
        }

        /**
         * Sets the value of {@link PremiumInstanceProps#getFunctionVersion}
         * @param functionVersion Property functionVersion: The function plan of the instance.
         *                        Valid values:
         *                        0: the Standard function plan
         *                        1: the Enhanced function plan.
         * @return {@code this}
         */
        public Builder functionVersion(com.aliyun.ros.cdk.core.IResolvable functionVersion) {
            this.functionVersion = functionVersion;
            return this;
        }

        /**
         * Sets the value of {@link PremiumInstanceProps#getNormalBandwidth}
         * @param normalBandwidth Property normalBandwidth: The clean bandwidth provided by the instance.
         *                        Unit: Mbit/s.
         *                        The value of NormalBandwidth varies based on the value of ProductPlan.
         *                        If you set ProductPlan to 0, you can set NormalBandwidth to 100, 150, 200, 250, or 300.
         *                        If you set ProductPlan to 1, you can set NormalBandwidth to 100, 150, 200, 250, or 300.
         *                        If you set ProductPlan to 2, you can set NormalBandwidth to 10, 20, 30, 40, 50, 60, 70, 80, 90, or 100.
         *                        If you set ProductPlan to 3, you can set NormalBandwidth to 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 150, or 200.
         * @return {@code this}
         */
        public Builder normalBandwidth(java.lang.Number normalBandwidth) {
            this.normalBandwidth = normalBandwidth;
            return this;
        }

        /**
         * Sets the value of {@link PremiumInstanceProps#getNormalBandwidth}
         * @param normalBandwidth Property normalBandwidth: The clean bandwidth provided by the instance.
         *                        Unit: Mbit/s.
         *                        The value of NormalBandwidth varies based on the value of ProductPlan.
         *                        If you set ProductPlan to 0, you can set NormalBandwidth to 100, 150, 200, 250, or 300.
         *                        If you set ProductPlan to 1, you can set NormalBandwidth to 100, 150, 200, 250, or 300.
         *                        If you set ProductPlan to 2, you can set NormalBandwidth to 10, 20, 30, 40, 50, 60, 70, 80, 90, or 100.
         *                        If you set ProductPlan to 3, you can set NormalBandwidth to 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 150, or 200.
         * @return {@code this}
         */
        public Builder normalBandwidth(com.aliyun.ros.cdk.core.IResolvable normalBandwidth) {
            this.normalBandwidth = normalBandwidth;
            return this;
        }

        /**
         * Sets the value of {@link PremiumInstanceProps#getNormalQps}
         * @param normalQps Property normalQps: The clean QPS provided by the instance.
         *                  The value of NormalQps varies based on the value of ProductPlan.
         *                  If you set ProductPlan to 0, you can set NormalQps to a value that ranges from 500 to 100000. The value must be a multiple of 100.
         *                  If you set ProductPlan to 1, you can set NormalQps to a value that ranges from 1000 to 100000. The value must be a multiple of 100.
         *                  If you set ProductPlan to 2, you do not need to specify this parameter.
         *                  If you set ProductPlan to 3, you can set NormalQps to a value that ranges from 500 to 100000. The value must be a multiple of 100.
         * @return {@code this}
         */
        public Builder normalQps(java.lang.Number normalQps) {
            this.normalQps = normalQps;
            return this;
        }

        /**
         * Sets the value of {@link PremiumInstanceProps#getNormalQps}
         * @param normalQps Property normalQps: The clean QPS provided by the instance.
         *                  The value of NormalQps varies based on the value of ProductPlan.
         *                  If you set ProductPlan to 0, you can set NormalQps to a value that ranges from 500 to 100000. The value must be a multiple of 100.
         *                  If you set ProductPlan to 1, you can set NormalQps to a value that ranges from 1000 to 100000. The value must be a multiple of 100.
         *                  If you set ProductPlan to 2, you do not need to specify this parameter.
         *                  If you set ProductPlan to 3, you can set NormalQps to a value that ranges from 500 to 100000. The value must be a multiple of 100.
         * @return {@code this}
         */
        public Builder normalQps(com.aliyun.ros.cdk.core.IResolvable normalQps) {
            this.normalQps = normalQps;
            return this;
        }

        /**
         * Sets the value of {@link PremiumInstanceProps#getPeriod}
         * @param period Property period: The subscription period of the firewallIf PeriodUnit is Month, the valid range is 1, 2, 3, 4, 5, 6, 12, 24 If PeriodUnit is Year, the valid range is 1, 2.
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link PremiumInstanceProps#getPeriod}
         * @param period Property period: The subscription period of the firewallIf PeriodUnit is Month, the valid range is 1, 2, 3, 4, 5, 6, 12, 24 If PeriodUnit is Year, the valid range is 1, 2.
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link PremiumInstanceProps#getPeriodUnit}
         * @param periodUnit Property periodUnit: The unit of the subscription duration.
         *                   Valid values:
         *                   Month
         *                   Year
         *                   Default value: Month.
         * @return {@code this}
         */
        public Builder periodUnit(java.lang.String periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link PremiumInstanceProps#getPeriodUnit}
         * @param periodUnit Property periodUnit: The unit of the subscription duration.
         *                   Valid values:
         *                   Month
         *                   Year
         *                   Default value: Month.
         * @return {@code this}
         */
        public Builder periodUnit(com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link PremiumInstanceProps#getPortCount}
         * @param portCount Property portCount: The number of ports that you want to protect.
         *                  The value of PortCount varies based on the value of ProductPlan.
         *                  If you set ProductPlan to 0, you can set PortCount to a value that ranges from 5 to 400. The value must be a multiple of 5.
         *                  If you set ProductPlan to 1, you can set PortCount to a value that ranges from 5 to 400. The value must be a multiple of 5.
         *                  If you set ProductPlan to 2, you do not need to specify this parameter.
         *                  If you set ProductPlan to 3, you can set PortCount to a value that ranges from 5 to 400. The value must be a multiple of 5.
         * @return {@code this}
         */
        public Builder portCount(java.lang.Number portCount) {
            this.portCount = portCount;
            return this;
        }

        /**
         * Sets the value of {@link PremiumInstanceProps#getPortCount}
         * @param portCount Property portCount: The number of ports that you want to protect.
         *                  The value of PortCount varies based on the value of ProductPlan.
         *                  If you set ProductPlan to 0, you can set PortCount to a value that ranges from 5 to 400. The value must be a multiple of 5.
         *                  If you set ProductPlan to 1, you can set PortCount to a value that ranges from 5 to 400. The value must be a multiple of 5.
         *                  If you set ProductPlan to 2, you do not need to specify this parameter.
         *                  If you set ProductPlan to 3, you can set PortCount to a value that ranges from 5 to 400. The value must be a multiple of 5.
         * @return {@code this}
         */
        public Builder portCount(com.aliyun.ros.cdk.core.IResolvable portCount) {
            this.portCount = portCount;
            return this;
        }

        /**
         * Sets the value of {@link PremiumInstanceProps#getProductPlan}
         * @param productPlan Property productPlan: The mitigation plan of the instance.
         *                    Valid values:
         *                    0: the Insurance mitigation plan
         *                    1: the Unlimited mitigation plan
         *                    2: the Chinese Mainland Acceleration (CMA) mitigation plan
         *                    3: the Secure Chinese Mainland Acceleration (Sec-CMA) mitigation plan
         * @return {@code this}
         */
        public Builder productPlan(java.lang.String productPlan) {
            this.productPlan = productPlan;
            return this;
        }

        /**
         * Sets the value of {@link PremiumInstanceProps#getProductPlan}
         * @param productPlan Property productPlan: The mitigation plan of the instance.
         *                    Valid values:
         *                    0: the Insurance mitigation plan
         *                    1: the Unlimited mitigation plan
         *                    2: the Chinese Mainland Acceleration (CMA) mitigation plan
         *                    3: the Secure Chinese Mainland Acceleration (Sec-CMA) mitigation plan
         * @return {@code this}
         */
        public Builder productPlan(com.aliyun.ros.cdk.core.IResolvable productPlan) {
            this.productPlan = productPlan;
            return this;
        }

        /**
         * Sets the value of {@link PremiumInstanceProps#getTags}
         * @param tags Property tags: Tags to attach to instance.
         *             Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.ddospro.RosPremiumInstance.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.ddospro.RosPremiumInstance.TagsProperty>)tags;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link PremiumInstanceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public PremiumInstanceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link PremiumInstanceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PremiumInstanceProps {
        private final java.lang.Object burstBandwidthMode;
        private final java.lang.Object domainCount;
        private final java.lang.Object functionVersion;
        private final java.lang.Object normalBandwidth;
        private final java.lang.Object normalQps;
        private final java.lang.Object period;
        private final java.lang.Object periodUnit;
        private final java.lang.Object portCount;
        private final java.lang.Object productPlan;
        private final java.util.List<com.aliyun.ros.cdk.ddospro.RosPremiumInstance.TagsProperty> tags;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.burstBandwidthMode = software.amazon.jsii.Kernel.get(this, "burstBandwidthMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.domainCount = software.amazon.jsii.Kernel.get(this, "domainCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.functionVersion = software.amazon.jsii.Kernel.get(this, "functionVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.normalBandwidth = software.amazon.jsii.Kernel.get(this, "normalBandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.normalQps = software.amazon.jsii.Kernel.get(this, "normalQps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.periodUnit = software.amazon.jsii.Kernel.get(this, "periodUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.portCount = software.amazon.jsii.Kernel.get(this, "portCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.productPlan = software.amazon.jsii.Kernel.get(this, "productPlan", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ddospro.RosPremiumInstance.TagsProperty.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.burstBandwidthMode = builder.burstBandwidthMode;
            this.domainCount = builder.domainCount;
            this.functionVersion = builder.functionVersion;
            this.normalBandwidth = builder.normalBandwidth;
            this.normalQps = builder.normalQps;
            this.period = builder.period;
            this.periodUnit = builder.periodUnit;
            this.portCount = builder.portCount;
            this.productPlan = builder.productPlan;
            this.tags = (java.util.List<com.aliyun.ros.cdk.ddospro.RosPremiumInstance.TagsProperty>)builder.tags;
        }

        @Override
        public final java.lang.Object getBurstBandwidthMode() {
            return this.burstBandwidthMode;
        }

        @Override
        public final java.lang.Object getDomainCount() {
            return this.domainCount;
        }

        @Override
        public final java.lang.Object getFunctionVersion() {
            return this.functionVersion;
        }

        @Override
        public final java.lang.Object getNormalBandwidth() {
            return this.normalBandwidth;
        }

        @Override
        public final java.lang.Object getNormalQps() {
            return this.normalQps;
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
        public final java.lang.Object getPortCount() {
            return this.portCount;
        }

        @Override
        public final java.lang.Object getProductPlan() {
            return this.productPlan;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.ddospro.RosPremiumInstance.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getBurstBandwidthMode() != null) {
                data.set("burstBandwidthMode", om.valueToTree(this.getBurstBandwidthMode()));
            }
            if (this.getDomainCount() != null) {
                data.set("domainCount", om.valueToTree(this.getDomainCount()));
            }
            if (this.getFunctionVersion() != null) {
                data.set("functionVersion", om.valueToTree(this.getFunctionVersion()));
            }
            if (this.getNormalBandwidth() != null) {
                data.set("normalBandwidth", om.valueToTree(this.getNormalBandwidth()));
            }
            if (this.getNormalQps() != null) {
                data.set("normalQps", om.valueToTree(this.getNormalQps()));
            }
            if (this.getPeriod() != null) {
                data.set("period", om.valueToTree(this.getPeriod()));
            }
            if (this.getPeriodUnit() != null) {
                data.set("periodUnit", om.valueToTree(this.getPeriodUnit()));
            }
            if (this.getPortCount() != null) {
                data.set("portCount", om.valueToTree(this.getPortCount()));
            }
            if (this.getProductPlan() != null) {
                data.set("productPlan", om.valueToTree(this.getProductPlan()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ddospro.PremiumInstanceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            PremiumInstanceProps.Jsii$Proxy that = (PremiumInstanceProps.Jsii$Proxy) o;

            if (this.burstBandwidthMode != null ? !this.burstBandwidthMode.equals(that.burstBandwidthMode) : that.burstBandwidthMode != null) return false;
            if (this.domainCount != null ? !this.domainCount.equals(that.domainCount) : that.domainCount != null) return false;
            if (this.functionVersion != null ? !this.functionVersion.equals(that.functionVersion) : that.functionVersion != null) return false;
            if (this.normalBandwidth != null ? !this.normalBandwidth.equals(that.normalBandwidth) : that.normalBandwidth != null) return false;
            if (this.normalQps != null ? !this.normalQps.equals(that.normalQps) : that.normalQps != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.periodUnit != null ? !this.periodUnit.equals(that.periodUnit) : that.periodUnit != null) return false;
            if (this.portCount != null ? !this.portCount.equals(that.portCount) : that.portCount != null) return false;
            if (this.productPlan != null ? !this.productPlan.equals(that.productPlan) : that.productPlan != null) return false;
            return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
        }

        @Override
        public final int hashCode() {
            int result = this.burstBandwidthMode != null ? this.burstBandwidthMode.hashCode() : 0;
            result = 31 * result + (this.domainCount != null ? this.domainCount.hashCode() : 0);
            result = 31 * result + (this.functionVersion != null ? this.functionVersion.hashCode() : 0);
            result = 31 * result + (this.normalBandwidth != null ? this.normalBandwidth.hashCode() : 0);
            result = 31 * result + (this.normalQps != null ? this.normalQps.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.periodUnit != null ? this.periodUnit.hashCode() : 0);
            result = 31 * result + (this.portCount != null ? this.portCount.hashCode() : 0);
            result = 31 * result + (this.productPlan != null ? this.productPlan.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            return result;
        }
    }
}
