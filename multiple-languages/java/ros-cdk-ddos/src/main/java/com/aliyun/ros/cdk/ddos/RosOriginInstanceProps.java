package com.aliyun.ros.cdk.ddos;

/**
 * Properties for defining a <code>RosOriginInstance</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddos-origininstance
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-22T08:56:19.229Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ddos.$Module.class, fqn = "@alicloud/ros-cdk-ddos.RosOriginInstanceProps")
@software.amazon.jsii.Jsii.Proxy(RosOriginInstanceProps.Jsii$Proxy.class)
public interface RosOriginInstanceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEdition();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getProtectionMode();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getChargeType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCleanBandwidth() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableLog() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpAddresses() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNetworkProtocol() {
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
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ddos.RosOriginInstance.TagsProperty> getTags() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosOriginInstanceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosOriginInstanceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosOriginInstanceProps> {
        java.lang.Object edition;
        java.lang.Object protectionMode;
        java.lang.Object chargeType;
        java.lang.Object cleanBandwidth;
        java.lang.Object enableLog;
        java.lang.Object ipAddresses;
        java.lang.Object networkProtocol;
        java.lang.Object period;
        java.lang.Object periodUnit;
        java.util.List<com.aliyun.ros.cdk.ddos.RosOriginInstance.TagsProperty> tags;

        /**
         * Sets the value of {@link RosOriginInstanceProps#getEdition}
         * @param edition the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder edition(java.lang.String edition) {
            this.edition = edition;
            return this;
        }

        /**
         * Sets the value of {@link RosOriginInstanceProps#getEdition}
         * @param edition the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder edition(com.aliyun.ros.cdk.core.IResolvable edition) {
            this.edition = edition;
            return this;
        }

        /**
         * Sets the value of {@link RosOriginInstanceProps#getProtectionMode}
         * @param protectionMode the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder protectionMode(java.lang.String protectionMode) {
            this.protectionMode = protectionMode;
            return this;
        }

        /**
         * Sets the value of {@link RosOriginInstanceProps#getProtectionMode}
         * @param protectionMode the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder protectionMode(com.aliyun.ros.cdk.core.IResolvable protectionMode) {
            this.protectionMode = protectionMode;
            return this;
        }

        /**
         * Sets the value of {@link RosOriginInstanceProps#getChargeType}
         * @param chargeType the value to be set.
         * @return {@code this}
         */
        public Builder chargeType(java.lang.String chargeType) {
            this.chargeType = chargeType;
            return this;
        }

        /**
         * Sets the value of {@link RosOriginInstanceProps#getChargeType}
         * @param chargeType the value to be set.
         * @return {@code this}
         */
        public Builder chargeType(com.aliyun.ros.cdk.core.IResolvable chargeType) {
            this.chargeType = chargeType;
            return this;
        }

        /**
         * Sets the value of {@link RosOriginInstanceProps#getCleanBandwidth}
         * @param cleanBandwidth the value to be set.
         * @return {@code this}
         */
        public Builder cleanBandwidth(java.lang.Number cleanBandwidth) {
            this.cleanBandwidth = cleanBandwidth;
            return this;
        }

        /**
         * Sets the value of {@link RosOriginInstanceProps#getCleanBandwidth}
         * @param cleanBandwidth the value to be set.
         * @return {@code this}
         */
        public Builder cleanBandwidth(com.aliyun.ros.cdk.core.IResolvable cleanBandwidth) {
            this.cleanBandwidth = cleanBandwidth;
            return this;
        }

        /**
         * Sets the value of {@link RosOriginInstanceProps#getEnableLog}
         * @param enableLog the value to be set.
         * @return {@code this}
         */
        public Builder enableLog(java.lang.Boolean enableLog) {
            this.enableLog = enableLog;
            return this;
        }

        /**
         * Sets the value of {@link RosOriginInstanceProps#getEnableLog}
         * @param enableLog the value to be set.
         * @return {@code this}
         */
        public Builder enableLog(com.aliyun.ros.cdk.core.IResolvable enableLog) {
            this.enableLog = enableLog;
            return this;
        }

        /**
         * Sets the value of {@link RosOriginInstanceProps#getIpAddresses}
         * @param ipAddresses the value to be set.
         * @return {@code this}
         */
        public Builder ipAddresses(java.lang.Number ipAddresses) {
            this.ipAddresses = ipAddresses;
            return this;
        }

        /**
         * Sets the value of {@link RosOriginInstanceProps#getIpAddresses}
         * @param ipAddresses the value to be set.
         * @return {@code this}
         */
        public Builder ipAddresses(com.aliyun.ros.cdk.core.IResolvable ipAddresses) {
            this.ipAddresses = ipAddresses;
            return this;
        }

        /**
         * Sets the value of {@link RosOriginInstanceProps#getNetworkProtocol}
         * @param networkProtocol the value to be set.
         * @return {@code this}
         */
        public Builder networkProtocol(java.lang.String networkProtocol) {
            this.networkProtocol = networkProtocol;
            return this;
        }

        /**
         * Sets the value of {@link RosOriginInstanceProps#getNetworkProtocol}
         * @param networkProtocol the value to be set.
         * @return {@code this}
         */
        public Builder networkProtocol(com.aliyun.ros.cdk.core.IResolvable networkProtocol) {
            this.networkProtocol = networkProtocol;
            return this;
        }

        /**
         * Sets the value of {@link RosOriginInstanceProps#getPeriod}
         * @param period the value to be set.
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link RosOriginInstanceProps#getPeriod}
         * @param period the value to be set.
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link RosOriginInstanceProps#getPeriodUnit}
         * @param periodUnit the value to be set.
         * @return {@code this}
         */
        public Builder periodUnit(java.lang.String periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link RosOriginInstanceProps#getPeriodUnit}
         * @param periodUnit the value to be set.
         * @return {@code this}
         */
        public Builder periodUnit(com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link RosOriginInstanceProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.ddos.RosOriginInstance.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.ddos.RosOriginInstance.TagsProperty>)tags;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosOriginInstanceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosOriginInstanceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosOriginInstanceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosOriginInstanceProps {
        private final java.lang.Object edition;
        private final java.lang.Object protectionMode;
        private final java.lang.Object chargeType;
        private final java.lang.Object cleanBandwidth;
        private final java.lang.Object enableLog;
        private final java.lang.Object ipAddresses;
        private final java.lang.Object networkProtocol;
        private final java.lang.Object period;
        private final java.lang.Object periodUnit;
        private final java.util.List<com.aliyun.ros.cdk.ddos.RosOriginInstance.TagsProperty> tags;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.edition = software.amazon.jsii.Kernel.get(this, "edition", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.protectionMode = software.amazon.jsii.Kernel.get(this, "protectionMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.chargeType = software.amazon.jsii.Kernel.get(this, "chargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.cleanBandwidth = software.amazon.jsii.Kernel.get(this, "cleanBandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enableLog = software.amazon.jsii.Kernel.get(this, "enableLog", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipAddresses = software.amazon.jsii.Kernel.get(this, "ipAddresses", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.networkProtocol = software.amazon.jsii.Kernel.get(this, "networkProtocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.periodUnit = software.amazon.jsii.Kernel.get(this, "periodUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ddos.RosOriginInstance.TagsProperty.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.edition = java.util.Objects.requireNonNull(builder.edition, "edition is required");
            this.protectionMode = java.util.Objects.requireNonNull(builder.protectionMode, "protectionMode is required");
            this.chargeType = builder.chargeType;
            this.cleanBandwidth = builder.cleanBandwidth;
            this.enableLog = builder.enableLog;
            this.ipAddresses = builder.ipAddresses;
            this.networkProtocol = builder.networkProtocol;
            this.period = builder.period;
            this.periodUnit = builder.periodUnit;
            this.tags = (java.util.List<com.aliyun.ros.cdk.ddos.RosOriginInstance.TagsProperty>)builder.tags;
        }

        @Override
        public final java.lang.Object getEdition() {
            return this.edition;
        }

        @Override
        public final java.lang.Object getProtectionMode() {
            return this.protectionMode;
        }

        @Override
        public final java.lang.Object getChargeType() {
            return this.chargeType;
        }

        @Override
        public final java.lang.Object getCleanBandwidth() {
            return this.cleanBandwidth;
        }

        @Override
        public final java.lang.Object getEnableLog() {
            return this.enableLog;
        }

        @Override
        public final java.lang.Object getIpAddresses() {
            return this.ipAddresses;
        }

        @Override
        public final java.lang.Object getNetworkProtocol() {
            return this.networkProtocol;
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
        public final java.util.List<com.aliyun.ros.cdk.ddos.RosOriginInstance.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("edition", om.valueToTree(this.getEdition()));
            data.set("protectionMode", om.valueToTree(this.getProtectionMode()));
            if (this.getChargeType() != null) {
                data.set("chargeType", om.valueToTree(this.getChargeType()));
            }
            if (this.getCleanBandwidth() != null) {
                data.set("cleanBandwidth", om.valueToTree(this.getCleanBandwidth()));
            }
            if (this.getEnableLog() != null) {
                data.set("enableLog", om.valueToTree(this.getEnableLog()));
            }
            if (this.getIpAddresses() != null) {
                data.set("ipAddresses", om.valueToTree(this.getIpAddresses()));
            }
            if (this.getNetworkProtocol() != null) {
                data.set("networkProtocol", om.valueToTree(this.getNetworkProtocol()));
            }
            if (this.getPeriod() != null) {
                data.set("period", om.valueToTree(this.getPeriod()));
            }
            if (this.getPeriodUnit() != null) {
                data.set("periodUnit", om.valueToTree(this.getPeriodUnit()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ddos.RosOriginInstanceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosOriginInstanceProps.Jsii$Proxy that = (RosOriginInstanceProps.Jsii$Proxy) o;

            if (!edition.equals(that.edition)) return false;
            if (!protectionMode.equals(that.protectionMode)) return false;
            if (this.chargeType != null ? !this.chargeType.equals(that.chargeType) : that.chargeType != null) return false;
            if (this.cleanBandwidth != null ? !this.cleanBandwidth.equals(that.cleanBandwidth) : that.cleanBandwidth != null) return false;
            if (this.enableLog != null ? !this.enableLog.equals(that.enableLog) : that.enableLog != null) return false;
            if (this.ipAddresses != null ? !this.ipAddresses.equals(that.ipAddresses) : that.ipAddresses != null) return false;
            if (this.networkProtocol != null ? !this.networkProtocol.equals(that.networkProtocol) : that.networkProtocol != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.periodUnit != null ? !this.periodUnit.equals(that.periodUnit) : that.periodUnit != null) return false;
            return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
        }

        @Override
        public final int hashCode() {
            int result = this.edition.hashCode();
            result = 31 * result + (this.protectionMode.hashCode());
            result = 31 * result + (this.chargeType != null ? this.chargeType.hashCode() : 0);
            result = 31 * result + (this.cleanBandwidth != null ? this.cleanBandwidth.hashCode() : 0);
            result = 31 * result + (this.enableLog != null ? this.enableLog.hashCode() : 0);
            result = 31 * result + (this.ipAddresses != null ? this.ipAddresses.hashCode() : 0);
            result = 31 * result + (this.networkProtocol != null ? this.networkProtocol.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.periodUnit != null ? this.periodUnit.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            return result;
        }
    }
}
