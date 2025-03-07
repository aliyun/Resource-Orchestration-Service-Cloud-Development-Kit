package com.aliyun.ros.cdk.ddospro;

/**
 * Properties for defining a <code>RosProInstance</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddospro-proinstance
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:03.751Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ddospro.$Module.class, fqn = "@alicloud/ros-cdk-ddospro.RosProInstanceProps")
@software.amazon.jsii.Jsii.Proxy(RosProInstanceProps.Jsii$Proxy.class)
public interface RosProInstanceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAddressType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBandwidth() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBaseBandwidth() {
        return null;
    }

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
    default @org.jetbrains.annotations.Nullable java.lang.Object getEdition() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFunctionVersion() {
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
    default @org.jetbrains.annotations.Nullable java.lang.Object getServiceBandwidth() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getServicePartner() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ddospro.RosProInstance.TagsProperty> getTags() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosProInstanceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosProInstanceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosProInstanceProps> {
        java.lang.Object addressType;
        java.lang.Object bandwidth;
        java.lang.Object baseBandwidth;
        java.lang.Object burstBandwidthMode;
        java.lang.Object domainCount;
        java.lang.Object edition;
        java.lang.Object functionVersion;
        java.lang.Object normalQps;
        java.lang.Object period;
        java.lang.Object periodUnit;
        java.lang.Object portCount;
        java.lang.Object serviceBandwidth;
        java.lang.Object servicePartner;
        java.util.List<com.aliyun.ros.cdk.ddospro.RosProInstance.TagsProperty> tags;

        /**
         * Sets the value of {@link RosProInstanceProps#getAddressType}
         * @param addressType the value to be set.
         * @return {@code this}
         */
        public Builder addressType(java.lang.String addressType) {
            this.addressType = addressType;
            return this;
        }

        /**
         * Sets the value of {@link RosProInstanceProps#getAddressType}
         * @param addressType the value to be set.
         * @return {@code this}
         */
        public Builder addressType(com.aliyun.ros.cdk.core.IResolvable addressType) {
            this.addressType = addressType;
            return this;
        }

        /**
         * Sets the value of {@link RosProInstanceProps#getBandwidth}
         * @param bandwidth the value to be set.
         * @return {@code this}
         */
        public Builder bandwidth(java.lang.Number bandwidth) {
            this.bandwidth = bandwidth;
            return this;
        }

        /**
         * Sets the value of {@link RosProInstanceProps#getBandwidth}
         * @param bandwidth the value to be set.
         * @return {@code this}
         */
        public Builder bandwidth(com.aliyun.ros.cdk.core.IResolvable bandwidth) {
            this.bandwidth = bandwidth;
            return this;
        }

        /**
         * Sets the value of {@link RosProInstanceProps#getBaseBandwidth}
         * @param baseBandwidth the value to be set.
         * @return {@code this}
         */
        public Builder baseBandwidth(java.lang.Number baseBandwidth) {
            this.baseBandwidth = baseBandwidth;
            return this;
        }

        /**
         * Sets the value of {@link RosProInstanceProps#getBaseBandwidth}
         * @param baseBandwidth the value to be set.
         * @return {@code this}
         */
        public Builder baseBandwidth(com.aliyun.ros.cdk.core.IResolvable baseBandwidth) {
            this.baseBandwidth = baseBandwidth;
            return this;
        }

        /**
         * Sets the value of {@link RosProInstanceProps#getBurstBandwidthMode}
         * @param burstBandwidthMode the value to be set.
         * @return {@code this}
         */
        public Builder burstBandwidthMode(java.lang.String burstBandwidthMode) {
            this.burstBandwidthMode = burstBandwidthMode;
            return this;
        }

        /**
         * Sets the value of {@link RosProInstanceProps#getBurstBandwidthMode}
         * @param burstBandwidthMode the value to be set.
         * @return {@code this}
         */
        public Builder burstBandwidthMode(com.aliyun.ros.cdk.core.IResolvable burstBandwidthMode) {
            this.burstBandwidthMode = burstBandwidthMode;
            return this;
        }

        /**
         * Sets the value of {@link RosProInstanceProps#getDomainCount}
         * @param domainCount the value to be set.
         * @return {@code this}
         */
        public Builder domainCount(java.lang.Number domainCount) {
            this.domainCount = domainCount;
            return this;
        }

        /**
         * Sets the value of {@link RosProInstanceProps#getDomainCount}
         * @param domainCount the value to be set.
         * @return {@code this}
         */
        public Builder domainCount(com.aliyun.ros.cdk.core.IResolvable domainCount) {
            this.domainCount = domainCount;
            return this;
        }

        /**
         * Sets the value of {@link RosProInstanceProps#getEdition}
         * @param edition the value to be set.
         * @return {@code this}
         */
        public Builder edition(java.lang.String edition) {
            this.edition = edition;
            return this;
        }

        /**
         * Sets the value of {@link RosProInstanceProps#getEdition}
         * @param edition the value to be set.
         * @return {@code this}
         */
        public Builder edition(com.aliyun.ros.cdk.core.IResolvable edition) {
            this.edition = edition;
            return this;
        }

        /**
         * Sets the value of {@link RosProInstanceProps#getFunctionVersion}
         * @param functionVersion the value to be set.
         * @return {@code this}
         */
        public Builder functionVersion(java.lang.String functionVersion) {
            this.functionVersion = functionVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosProInstanceProps#getFunctionVersion}
         * @param functionVersion the value to be set.
         * @return {@code this}
         */
        public Builder functionVersion(com.aliyun.ros.cdk.core.IResolvable functionVersion) {
            this.functionVersion = functionVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosProInstanceProps#getNormalQps}
         * @param normalQps the value to be set.
         * @return {@code this}
         */
        public Builder normalQps(java.lang.Number normalQps) {
            this.normalQps = normalQps;
            return this;
        }

        /**
         * Sets the value of {@link RosProInstanceProps#getNormalQps}
         * @param normalQps the value to be set.
         * @return {@code this}
         */
        public Builder normalQps(com.aliyun.ros.cdk.core.IResolvable normalQps) {
            this.normalQps = normalQps;
            return this;
        }

        /**
         * Sets the value of {@link RosProInstanceProps#getPeriod}
         * @param period the value to be set.
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link RosProInstanceProps#getPeriod}
         * @param period the value to be set.
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link RosProInstanceProps#getPeriodUnit}
         * @param periodUnit the value to be set.
         * @return {@code this}
         */
        public Builder periodUnit(java.lang.String periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link RosProInstanceProps#getPeriodUnit}
         * @param periodUnit the value to be set.
         * @return {@code this}
         */
        public Builder periodUnit(com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link RosProInstanceProps#getPortCount}
         * @param portCount the value to be set.
         * @return {@code this}
         */
        public Builder portCount(java.lang.Number portCount) {
            this.portCount = portCount;
            return this;
        }

        /**
         * Sets the value of {@link RosProInstanceProps#getPortCount}
         * @param portCount the value to be set.
         * @return {@code this}
         */
        public Builder portCount(com.aliyun.ros.cdk.core.IResolvable portCount) {
            this.portCount = portCount;
            return this;
        }

        /**
         * Sets the value of {@link RosProInstanceProps#getServiceBandwidth}
         * @param serviceBandwidth the value to be set.
         * @return {@code this}
         */
        public Builder serviceBandwidth(java.lang.Number serviceBandwidth) {
            this.serviceBandwidth = serviceBandwidth;
            return this;
        }

        /**
         * Sets the value of {@link RosProInstanceProps#getServiceBandwidth}
         * @param serviceBandwidth the value to be set.
         * @return {@code this}
         */
        public Builder serviceBandwidth(com.aliyun.ros.cdk.core.IResolvable serviceBandwidth) {
            this.serviceBandwidth = serviceBandwidth;
            return this;
        }

        /**
         * Sets the value of {@link RosProInstanceProps#getServicePartner}
         * @param servicePartner the value to be set.
         * @return {@code this}
         */
        public Builder servicePartner(java.lang.String servicePartner) {
            this.servicePartner = servicePartner;
            return this;
        }

        /**
         * Sets the value of {@link RosProInstanceProps#getServicePartner}
         * @param servicePartner the value to be set.
         * @return {@code this}
         */
        public Builder servicePartner(com.aliyun.ros.cdk.core.IResolvable servicePartner) {
            this.servicePartner = servicePartner;
            return this;
        }

        /**
         * Sets the value of {@link RosProInstanceProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.ddospro.RosProInstance.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.ddospro.RosProInstance.TagsProperty>)tags;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosProInstanceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosProInstanceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosProInstanceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosProInstanceProps {
        private final java.lang.Object addressType;
        private final java.lang.Object bandwidth;
        private final java.lang.Object baseBandwidth;
        private final java.lang.Object burstBandwidthMode;
        private final java.lang.Object domainCount;
        private final java.lang.Object edition;
        private final java.lang.Object functionVersion;
        private final java.lang.Object normalQps;
        private final java.lang.Object period;
        private final java.lang.Object periodUnit;
        private final java.lang.Object portCount;
        private final java.lang.Object serviceBandwidth;
        private final java.lang.Object servicePartner;
        private final java.util.List<com.aliyun.ros.cdk.ddospro.RosProInstance.TagsProperty> tags;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.addressType = software.amazon.jsii.Kernel.get(this, "addressType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.bandwidth = software.amazon.jsii.Kernel.get(this, "bandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.baseBandwidth = software.amazon.jsii.Kernel.get(this, "baseBandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.burstBandwidthMode = software.amazon.jsii.Kernel.get(this, "burstBandwidthMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.domainCount = software.amazon.jsii.Kernel.get(this, "domainCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.edition = software.amazon.jsii.Kernel.get(this, "edition", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.functionVersion = software.amazon.jsii.Kernel.get(this, "functionVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.normalQps = software.amazon.jsii.Kernel.get(this, "normalQps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.periodUnit = software.amazon.jsii.Kernel.get(this, "periodUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.portCount = software.amazon.jsii.Kernel.get(this, "portCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.serviceBandwidth = software.amazon.jsii.Kernel.get(this, "serviceBandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.servicePartner = software.amazon.jsii.Kernel.get(this, "servicePartner", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ddospro.RosProInstance.TagsProperty.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.addressType = builder.addressType;
            this.bandwidth = builder.bandwidth;
            this.baseBandwidth = builder.baseBandwidth;
            this.burstBandwidthMode = builder.burstBandwidthMode;
            this.domainCount = builder.domainCount;
            this.edition = builder.edition;
            this.functionVersion = builder.functionVersion;
            this.normalQps = builder.normalQps;
            this.period = builder.period;
            this.periodUnit = builder.periodUnit;
            this.portCount = builder.portCount;
            this.serviceBandwidth = builder.serviceBandwidth;
            this.servicePartner = builder.servicePartner;
            this.tags = (java.util.List<com.aliyun.ros.cdk.ddospro.RosProInstance.TagsProperty>)builder.tags;
        }

        @Override
        public final java.lang.Object getAddressType() {
            return this.addressType;
        }

        @Override
        public final java.lang.Object getBandwidth() {
            return this.bandwidth;
        }

        @Override
        public final java.lang.Object getBaseBandwidth() {
            return this.baseBandwidth;
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
        public final java.lang.Object getEdition() {
            return this.edition;
        }

        @Override
        public final java.lang.Object getFunctionVersion() {
            return this.functionVersion;
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
        public final java.lang.Object getServiceBandwidth() {
            return this.serviceBandwidth;
        }

        @Override
        public final java.lang.Object getServicePartner() {
            return this.servicePartner;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.ddospro.RosProInstance.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getAddressType() != null) {
                data.set("addressType", om.valueToTree(this.getAddressType()));
            }
            if (this.getBandwidth() != null) {
                data.set("bandwidth", om.valueToTree(this.getBandwidth()));
            }
            if (this.getBaseBandwidth() != null) {
                data.set("baseBandwidth", om.valueToTree(this.getBaseBandwidth()));
            }
            if (this.getBurstBandwidthMode() != null) {
                data.set("burstBandwidthMode", om.valueToTree(this.getBurstBandwidthMode()));
            }
            if (this.getDomainCount() != null) {
                data.set("domainCount", om.valueToTree(this.getDomainCount()));
            }
            if (this.getEdition() != null) {
                data.set("edition", om.valueToTree(this.getEdition()));
            }
            if (this.getFunctionVersion() != null) {
                data.set("functionVersion", om.valueToTree(this.getFunctionVersion()));
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
            if (this.getServiceBandwidth() != null) {
                data.set("serviceBandwidth", om.valueToTree(this.getServiceBandwidth()));
            }
            if (this.getServicePartner() != null) {
                data.set("servicePartner", om.valueToTree(this.getServicePartner()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ddospro.RosProInstanceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosProInstanceProps.Jsii$Proxy that = (RosProInstanceProps.Jsii$Proxy) o;

            if (this.addressType != null ? !this.addressType.equals(that.addressType) : that.addressType != null) return false;
            if (this.bandwidth != null ? !this.bandwidth.equals(that.bandwidth) : that.bandwidth != null) return false;
            if (this.baseBandwidth != null ? !this.baseBandwidth.equals(that.baseBandwidth) : that.baseBandwidth != null) return false;
            if (this.burstBandwidthMode != null ? !this.burstBandwidthMode.equals(that.burstBandwidthMode) : that.burstBandwidthMode != null) return false;
            if (this.domainCount != null ? !this.domainCount.equals(that.domainCount) : that.domainCount != null) return false;
            if (this.edition != null ? !this.edition.equals(that.edition) : that.edition != null) return false;
            if (this.functionVersion != null ? !this.functionVersion.equals(that.functionVersion) : that.functionVersion != null) return false;
            if (this.normalQps != null ? !this.normalQps.equals(that.normalQps) : that.normalQps != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.periodUnit != null ? !this.periodUnit.equals(that.periodUnit) : that.periodUnit != null) return false;
            if (this.portCount != null ? !this.portCount.equals(that.portCount) : that.portCount != null) return false;
            if (this.serviceBandwidth != null ? !this.serviceBandwidth.equals(that.serviceBandwidth) : that.serviceBandwidth != null) return false;
            if (this.servicePartner != null ? !this.servicePartner.equals(that.servicePartner) : that.servicePartner != null) return false;
            return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
        }

        @Override
        public final int hashCode() {
            int result = this.addressType != null ? this.addressType.hashCode() : 0;
            result = 31 * result + (this.bandwidth != null ? this.bandwidth.hashCode() : 0);
            result = 31 * result + (this.baseBandwidth != null ? this.baseBandwidth.hashCode() : 0);
            result = 31 * result + (this.burstBandwidthMode != null ? this.burstBandwidthMode.hashCode() : 0);
            result = 31 * result + (this.domainCount != null ? this.domainCount.hashCode() : 0);
            result = 31 * result + (this.edition != null ? this.edition.hashCode() : 0);
            result = 31 * result + (this.functionVersion != null ? this.functionVersion.hashCode() : 0);
            result = 31 * result + (this.normalQps != null ? this.normalQps.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.periodUnit != null ? this.periodUnit.hashCode() : 0);
            result = 31 * result + (this.portCount != null ? this.portCount.hashCode() : 0);
            result = 31 * result + (this.serviceBandwidth != null ? this.serviceBandwidth.hashCode() : 0);
            result = 31 * result + (this.servicePartner != null ? this.servicePartner.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            return result;
        }
    }
}
