package com.aliyun.ros.cdk.bastionhost;

/**
 * Properties for defining a <code>RosInstance</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-instance
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-04T02:47:52.751Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.bastionhost.$Module.class, fqn = "@alicloud/ros-cdk-bastionhost.RosInstanceProps")
@software.amazon.jsii.Jsii.Proxy(RosInstanceProps.Jsii$Proxy.class)
public interface RosInstanceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getExtendedStoragePlans();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getExtraBandwidth();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPlan();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getStartInstanceParam();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVersion();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoPay() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenew() {
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
        java.lang.Object extendedStoragePlans;
        java.lang.Object extraBandwidth;
        java.lang.Object plan;
        java.lang.Object startInstanceParam;
        java.lang.Object version;
        java.lang.Object autoPay;
        java.lang.Object autoRenew;
        java.lang.Object period;
        java.lang.Object periodUnit;
        java.lang.Object resourceGroupId;

        /**
         * Sets the value of {@link RosInstanceProps#getExtendedStoragePlans}
         * @param extendedStoragePlans the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder extendedStoragePlans(java.lang.Number extendedStoragePlans) {
            this.extendedStoragePlans = extendedStoragePlans;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getExtendedStoragePlans}
         * @param extendedStoragePlans the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder extendedStoragePlans(com.aliyun.ros.cdk.core.IResolvable extendedStoragePlans) {
            this.extendedStoragePlans = extendedStoragePlans;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getExtraBandwidth}
         * @param extraBandwidth the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder extraBandwidth(java.lang.Number extraBandwidth) {
            this.extraBandwidth = extraBandwidth;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getExtraBandwidth}
         * @param extraBandwidth the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder extraBandwidth(com.aliyun.ros.cdk.core.IResolvable extraBandwidth) {
            this.extraBandwidth = extraBandwidth;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getPlan}
         * @param plan the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder plan(java.lang.Number plan) {
            this.plan = plan;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getPlan}
         * @param plan the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder plan(com.aliyun.ros.cdk.core.IResolvable plan) {
            this.plan = plan;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getStartInstanceParam}
         * @param startInstanceParam the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder startInstanceParam(com.aliyun.ros.cdk.core.IResolvable startInstanceParam) {
            this.startInstanceParam = startInstanceParam;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getStartInstanceParam}
         * @param startInstanceParam the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder startInstanceParam(com.aliyun.ros.cdk.bastionhost.RosInstance.StartInstanceParamProperty startInstanceParam) {
            this.startInstanceParam = startInstanceParam;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getVersion}
         * @param version the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder version(java.lang.String version) {
            this.version = version;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getVersion}
         * @param version the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder version(com.aliyun.ros.cdk.core.IResolvable version) {
            this.version = version;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getAutoPay}
         * @param autoPay the value to be set.
         * @return {@code this}
         */
        public Builder autoPay(java.lang.Boolean autoPay) {
            this.autoPay = autoPay;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getAutoPay}
         * @param autoPay the value to be set.
         * @return {@code this}
         */
        public Builder autoPay(com.aliyun.ros.cdk.core.IResolvable autoPay) {
            this.autoPay = autoPay;
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
        private final java.lang.Object extendedStoragePlans;
        private final java.lang.Object extraBandwidth;
        private final java.lang.Object plan;
        private final java.lang.Object startInstanceParam;
        private final java.lang.Object version;
        private final java.lang.Object autoPay;
        private final java.lang.Object autoRenew;
        private final java.lang.Object period;
        private final java.lang.Object periodUnit;
        private final java.lang.Object resourceGroupId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.extendedStoragePlans = software.amazon.jsii.Kernel.get(this, "extendedStoragePlans", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.extraBandwidth = software.amazon.jsii.Kernel.get(this, "extraBandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.plan = software.amazon.jsii.Kernel.get(this, "plan", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.startInstanceParam = software.amazon.jsii.Kernel.get(this, "startInstanceParam", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.version = software.amazon.jsii.Kernel.get(this, "version", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoPay = software.amazon.jsii.Kernel.get(this, "autoPay", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoRenew = software.amazon.jsii.Kernel.get(this, "autoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.periodUnit = software.amazon.jsii.Kernel.get(this, "periodUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.extendedStoragePlans = java.util.Objects.requireNonNull(builder.extendedStoragePlans, "extendedStoragePlans is required");
            this.extraBandwidth = java.util.Objects.requireNonNull(builder.extraBandwidth, "extraBandwidth is required");
            this.plan = java.util.Objects.requireNonNull(builder.plan, "plan is required");
            this.startInstanceParam = java.util.Objects.requireNonNull(builder.startInstanceParam, "startInstanceParam is required");
            this.version = java.util.Objects.requireNonNull(builder.version, "version is required");
            this.autoPay = builder.autoPay;
            this.autoRenew = builder.autoRenew;
            this.period = builder.period;
            this.periodUnit = builder.periodUnit;
            this.resourceGroupId = builder.resourceGroupId;
        }

        @Override
        public final java.lang.Object getExtendedStoragePlans() {
            return this.extendedStoragePlans;
        }

        @Override
        public final java.lang.Object getExtraBandwidth() {
            return this.extraBandwidth;
        }

        @Override
        public final java.lang.Object getPlan() {
            return this.plan;
        }

        @Override
        public final java.lang.Object getStartInstanceParam() {
            return this.startInstanceParam;
        }

        @Override
        public final java.lang.Object getVersion() {
            return this.version;
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
        public final java.lang.Object getPeriod() {
            return this.period;
        }

        @Override
        public final java.lang.Object getPeriodUnit() {
            return this.periodUnit;
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

            data.set("extendedStoragePlans", om.valueToTree(this.getExtendedStoragePlans()));
            data.set("extraBandwidth", om.valueToTree(this.getExtraBandwidth()));
            data.set("plan", om.valueToTree(this.getPlan()));
            data.set("startInstanceParam", om.valueToTree(this.getStartInstanceParam()));
            data.set("version", om.valueToTree(this.getVersion()));
            if (this.getAutoPay() != null) {
                data.set("autoPay", om.valueToTree(this.getAutoPay()));
            }
            if (this.getAutoRenew() != null) {
                data.set("autoRenew", om.valueToTree(this.getAutoRenew()));
            }
            if (this.getPeriod() != null) {
                data.set("period", om.valueToTree(this.getPeriod()));
            }
            if (this.getPeriodUnit() != null) {
                data.set("periodUnit", om.valueToTree(this.getPeriodUnit()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-bastionhost.RosInstanceProps"));
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

            if (!extendedStoragePlans.equals(that.extendedStoragePlans)) return false;
            if (!extraBandwidth.equals(that.extraBandwidth)) return false;
            if (!plan.equals(that.plan)) return false;
            if (!startInstanceParam.equals(that.startInstanceParam)) return false;
            if (!version.equals(that.version)) return false;
            if (this.autoPay != null ? !this.autoPay.equals(that.autoPay) : that.autoPay != null) return false;
            if (this.autoRenew != null ? !this.autoRenew.equals(that.autoRenew) : that.autoRenew != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.periodUnit != null ? !this.periodUnit.equals(that.periodUnit) : that.periodUnit != null) return false;
            return this.resourceGroupId != null ? this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.extendedStoragePlans.hashCode();
            result = 31 * result + (this.extraBandwidth.hashCode());
            result = 31 * result + (this.plan.hashCode());
            result = 31 * result + (this.startInstanceParam.hashCode());
            result = 31 * result + (this.version.hashCode());
            result = 31 * result + (this.autoPay != null ? this.autoPay.hashCode() : 0);
            result = 31 * result + (this.autoRenew != null ? this.autoRenew.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.periodUnit != null ? this.periodUnit.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            return result;
        }
    }
}
