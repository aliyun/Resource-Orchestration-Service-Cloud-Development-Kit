package com.aliyun.ros.cdk.ddospro;

/**
 * Properties for defining a <code>RosPremiumInstance</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddospro-premiuminstance
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-21T05:59:08.569Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ddospro.$Module.class, fqn = "@alicloud/ros-cdk-ddospro.RosPremiumInstanceProps")
@software.amazon.jsii.Jsii.Proxy(RosPremiumInstanceProps.Jsii$Proxy.class)
public interface RosPremiumInstanceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBurstBandwidthMode() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDomainCount() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFunctionVersion() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNormalBandwidth() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNormalQps() {
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
    default @org.jetbrains.annotations.Nullable java.lang.Object getPortCount() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getProductPlan() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ddospro.RosPremiumInstance.TagsProperty> getTags() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosPremiumInstanceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosPremiumInstanceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosPremiumInstanceProps> {
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
         * Sets the value of {@link RosPremiumInstanceProps#getBurstBandwidthMode}
         * @param burstBandwidthMode the value to be set.
         * @return {@code this}
         */
        public Builder burstBandwidthMode(java.lang.String burstBandwidthMode) {
            this.burstBandwidthMode = burstBandwidthMode;
            return this;
        }

        /**
         * Sets the value of {@link RosPremiumInstanceProps#getBurstBandwidthMode}
         * @param burstBandwidthMode the value to be set.
         * @return {@code this}
         */
        public Builder burstBandwidthMode(com.aliyun.ros.cdk.core.IResolvable burstBandwidthMode) {
            this.burstBandwidthMode = burstBandwidthMode;
            return this;
        }

        /**
         * Sets the value of {@link RosPremiumInstanceProps#getDomainCount}
         * @param domainCount the value to be set.
         * @return {@code this}
         */
        public Builder domainCount(java.lang.Number domainCount) {
            this.domainCount = domainCount;
            return this;
        }

        /**
         * Sets the value of {@link RosPremiumInstanceProps#getDomainCount}
         * @param domainCount the value to be set.
         * @return {@code this}
         */
        public Builder domainCount(com.aliyun.ros.cdk.core.IResolvable domainCount) {
            this.domainCount = domainCount;
            return this;
        }

        /**
         * Sets the value of {@link RosPremiumInstanceProps#getFunctionVersion}
         * @param functionVersion the value to be set.
         * @return {@code this}
         */
        public Builder functionVersion(java.lang.String functionVersion) {
            this.functionVersion = functionVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosPremiumInstanceProps#getFunctionVersion}
         * @param functionVersion the value to be set.
         * @return {@code this}
         */
        public Builder functionVersion(com.aliyun.ros.cdk.core.IResolvable functionVersion) {
            this.functionVersion = functionVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosPremiumInstanceProps#getNormalBandwidth}
         * @param normalBandwidth the value to be set.
         * @return {@code this}
         */
        public Builder normalBandwidth(java.lang.Number normalBandwidth) {
            this.normalBandwidth = normalBandwidth;
            return this;
        }

        /**
         * Sets the value of {@link RosPremiumInstanceProps#getNormalBandwidth}
         * @param normalBandwidth the value to be set.
         * @return {@code this}
         */
        public Builder normalBandwidth(com.aliyun.ros.cdk.core.IResolvable normalBandwidth) {
            this.normalBandwidth = normalBandwidth;
            return this;
        }

        /**
         * Sets the value of {@link RosPremiumInstanceProps#getNormalQps}
         * @param normalQps the value to be set.
         * @return {@code this}
         */
        public Builder normalQps(java.lang.Number normalQps) {
            this.normalQps = normalQps;
            return this;
        }

        /**
         * Sets the value of {@link RosPremiumInstanceProps#getNormalQps}
         * @param normalQps the value to be set.
         * @return {@code this}
         */
        public Builder normalQps(com.aliyun.ros.cdk.core.IResolvable normalQps) {
            this.normalQps = normalQps;
            return this;
        }

        /**
         * Sets the value of {@link RosPremiumInstanceProps#getPeriod}
         * @param period the value to be set.
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link RosPremiumInstanceProps#getPeriod}
         * @param period the value to be set.
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link RosPremiumInstanceProps#getPeriodUnit}
         * @param periodUnit the value to be set.
         * @return {@code this}
         */
        public Builder periodUnit(java.lang.String periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link RosPremiumInstanceProps#getPeriodUnit}
         * @param periodUnit the value to be set.
         * @return {@code this}
         */
        public Builder periodUnit(com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link RosPremiumInstanceProps#getPortCount}
         * @param portCount the value to be set.
         * @return {@code this}
         */
        public Builder portCount(java.lang.Number portCount) {
            this.portCount = portCount;
            return this;
        }

        /**
         * Sets the value of {@link RosPremiumInstanceProps#getPortCount}
         * @param portCount the value to be set.
         * @return {@code this}
         */
        public Builder portCount(com.aliyun.ros.cdk.core.IResolvable portCount) {
            this.portCount = portCount;
            return this;
        }

        /**
         * Sets the value of {@link RosPremiumInstanceProps#getProductPlan}
         * @param productPlan the value to be set.
         * @return {@code this}
         */
        public Builder productPlan(java.lang.String productPlan) {
            this.productPlan = productPlan;
            return this;
        }

        /**
         * Sets the value of {@link RosPremiumInstanceProps#getProductPlan}
         * @param productPlan the value to be set.
         * @return {@code this}
         */
        public Builder productPlan(com.aliyun.ros.cdk.core.IResolvable productPlan) {
            this.productPlan = productPlan;
            return this;
        }

        /**
         * Sets the value of {@link RosPremiumInstanceProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.ddospro.RosPremiumInstance.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.ddospro.RosPremiumInstance.TagsProperty>)tags;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosPremiumInstanceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosPremiumInstanceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosPremiumInstanceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosPremiumInstanceProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ddospro.RosPremiumInstanceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosPremiumInstanceProps.Jsii$Proxy that = (RosPremiumInstanceProps.Jsii$Proxy) o;

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
