package com.aliyun.ros.cdk.waf;

/**
 * Properties for defining a `ALIYUN::WAF::Instance`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:34.737Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.waf.$Module.class, fqn = "@alicloud/ros-cdk-waf.RosInstanceProps")
@software.amazon.jsii.Jsii.Proxy(RosInstanceProps.Jsii$Proxy.class)
public interface RosInstanceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getBigScreen();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getExclusiveIpPackage();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getExtBandwidth();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getExtDomainPackage();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getLogStorage();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getLogTime();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getPackageCode();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getPrefessionalService();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getSubscriptionType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getWafLog();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getPeriod() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getRenewalStatus() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getRenewPeriod() {
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
        private java.lang.String bigScreen;
        private java.lang.String exclusiveIpPackage;
        private java.lang.String extBandwidth;
        private java.lang.String extDomainPackage;
        private java.lang.String logStorage;
        private java.lang.String logTime;
        private java.lang.String packageCode;
        private java.lang.String prefessionalService;
        private java.lang.String subscriptionType;
        private java.lang.String wafLog;
        private java.lang.String period;
        private java.lang.String renewalStatus;
        private java.lang.String renewPeriod;

        /**
         * Sets the value of {@link RosInstanceProps#getBigScreen}
         * @param bigScreen the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder bigScreen(java.lang.String bigScreen) {
            this.bigScreen = bigScreen;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getExclusiveIpPackage}
         * @param exclusiveIpPackage the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder exclusiveIpPackage(java.lang.String exclusiveIpPackage) {
            this.exclusiveIpPackage = exclusiveIpPackage;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getExtBandwidth}
         * @param extBandwidth the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder extBandwidth(java.lang.String extBandwidth) {
            this.extBandwidth = extBandwidth;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getExtDomainPackage}
         * @param extDomainPackage the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder extDomainPackage(java.lang.String extDomainPackage) {
            this.extDomainPackage = extDomainPackage;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getLogStorage}
         * @param logStorage the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder logStorage(java.lang.String logStorage) {
            this.logStorage = logStorage;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getLogTime}
         * @param logTime the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder logTime(java.lang.String logTime) {
            this.logTime = logTime;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getPackageCode}
         * @param packageCode the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder packageCode(java.lang.String packageCode) {
            this.packageCode = packageCode;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getPrefessionalService}
         * @param prefessionalService the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder prefessionalService(java.lang.String prefessionalService) {
            this.prefessionalService = prefessionalService;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getSubscriptionType}
         * @param subscriptionType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder subscriptionType(java.lang.String subscriptionType) {
            this.subscriptionType = subscriptionType;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getWafLog}
         * @param wafLog the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder wafLog(java.lang.String wafLog) {
            this.wafLog = wafLog;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getPeriod}
         * @param period the value to be set.
         * @return {@code this}
         */
        public Builder period(java.lang.String period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getRenewalStatus}
         * @param renewalStatus the value to be set.
         * @return {@code this}
         */
        public Builder renewalStatus(java.lang.String renewalStatus) {
            this.renewalStatus = renewalStatus;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getRenewPeriod}
         * @param renewPeriod the value to be set.
         * @return {@code this}
         */
        public Builder renewPeriod(java.lang.String renewPeriod) {
            this.renewPeriod = renewPeriod;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosInstanceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosInstanceProps build() {
            return new Jsii$Proxy(bigScreen, exclusiveIpPackage, extBandwidth, extDomainPackage, logStorage, logTime, packageCode, prefessionalService, subscriptionType, wafLog, period, renewalStatus, renewPeriod);
        }
    }

    /**
     * An implementation for {@link RosInstanceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosInstanceProps {
        private final java.lang.String bigScreen;
        private final java.lang.String exclusiveIpPackage;
        private final java.lang.String extBandwidth;
        private final java.lang.String extDomainPackage;
        private final java.lang.String logStorage;
        private final java.lang.String logTime;
        private final java.lang.String packageCode;
        private final java.lang.String prefessionalService;
        private final java.lang.String subscriptionType;
        private final java.lang.String wafLog;
        private final java.lang.String period;
        private final java.lang.String renewalStatus;
        private final java.lang.String renewPeriod;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.bigScreen = software.amazon.jsii.Kernel.get(this, "bigScreen", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.exclusiveIpPackage = software.amazon.jsii.Kernel.get(this, "exclusiveIpPackage", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.extBandwidth = software.amazon.jsii.Kernel.get(this, "extBandwidth", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.extDomainPackage = software.amazon.jsii.Kernel.get(this, "extDomainPackage", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.logStorage = software.amazon.jsii.Kernel.get(this, "logStorage", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.logTime = software.amazon.jsii.Kernel.get(this, "logTime", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.packageCode = software.amazon.jsii.Kernel.get(this, "packageCode", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.prefessionalService = software.amazon.jsii.Kernel.get(this, "prefessionalService", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.subscriptionType = software.amazon.jsii.Kernel.get(this, "subscriptionType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.wafLog = software.amazon.jsii.Kernel.get(this, "wafLog", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.renewalStatus = software.amazon.jsii.Kernel.get(this, "renewalStatus", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.renewPeriod = software.amazon.jsii.Kernel.get(this, "renewPeriod", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String bigScreen, final java.lang.String exclusiveIpPackage, final java.lang.String extBandwidth, final java.lang.String extDomainPackage, final java.lang.String logStorage, final java.lang.String logTime, final java.lang.String packageCode, final java.lang.String prefessionalService, final java.lang.String subscriptionType, final java.lang.String wafLog, final java.lang.String period, final java.lang.String renewalStatus, final java.lang.String renewPeriod) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.bigScreen = java.util.Objects.requireNonNull(bigScreen, "bigScreen is required");
            this.exclusiveIpPackage = java.util.Objects.requireNonNull(exclusiveIpPackage, "exclusiveIpPackage is required");
            this.extBandwidth = java.util.Objects.requireNonNull(extBandwidth, "extBandwidth is required");
            this.extDomainPackage = java.util.Objects.requireNonNull(extDomainPackage, "extDomainPackage is required");
            this.logStorage = java.util.Objects.requireNonNull(logStorage, "logStorage is required");
            this.logTime = java.util.Objects.requireNonNull(logTime, "logTime is required");
            this.packageCode = java.util.Objects.requireNonNull(packageCode, "packageCode is required");
            this.prefessionalService = java.util.Objects.requireNonNull(prefessionalService, "prefessionalService is required");
            this.subscriptionType = java.util.Objects.requireNonNull(subscriptionType, "subscriptionType is required");
            this.wafLog = java.util.Objects.requireNonNull(wafLog, "wafLog is required");
            this.period = period;
            this.renewalStatus = renewalStatus;
            this.renewPeriod = renewPeriod;
        }

        @Override
        public final java.lang.String getBigScreen() {
            return this.bigScreen;
        }

        @Override
        public final java.lang.String getExclusiveIpPackage() {
            return this.exclusiveIpPackage;
        }

        @Override
        public final java.lang.String getExtBandwidth() {
            return this.extBandwidth;
        }

        @Override
        public final java.lang.String getExtDomainPackage() {
            return this.extDomainPackage;
        }

        @Override
        public final java.lang.String getLogStorage() {
            return this.logStorage;
        }

        @Override
        public final java.lang.String getLogTime() {
            return this.logTime;
        }

        @Override
        public final java.lang.String getPackageCode() {
            return this.packageCode;
        }

        @Override
        public final java.lang.String getPrefessionalService() {
            return this.prefessionalService;
        }

        @Override
        public final java.lang.String getSubscriptionType() {
            return this.subscriptionType;
        }

        @Override
        public final java.lang.String getWafLog() {
            return this.wafLog;
        }

        @Override
        public final java.lang.String getPeriod() {
            return this.period;
        }

        @Override
        public final java.lang.String getRenewalStatus() {
            return this.renewalStatus;
        }

        @Override
        public final java.lang.String getRenewPeriod() {
            return this.renewPeriod;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("bigScreen", om.valueToTree(this.getBigScreen()));
            data.set("exclusiveIpPackage", om.valueToTree(this.getExclusiveIpPackage()));
            data.set("extBandwidth", om.valueToTree(this.getExtBandwidth()));
            data.set("extDomainPackage", om.valueToTree(this.getExtDomainPackage()));
            data.set("logStorage", om.valueToTree(this.getLogStorage()));
            data.set("logTime", om.valueToTree(this.getLogTime()));
            data.set("packageCode", om.valueToTree(this.getPackageCode()));
            data.set("prefessionalService", om.valueToTree(this.getPrefessionalService()));
            data.set("subscriptionType", om.valueToTree(this.getSubscriptionType()));
            data.set("wafLog", om.valueToTree(this.getWafLog()));
            if (this.getPeriod() != null) {
                data.set("period", om.valueToTree(this.getPeriod()));
            }
            if (this.getRenewalStatus() != null) {
                data.set("renewalStatus", om.valueToTree(this.getRenewalStatus()));
            }
            if (this.getRenewPeriod() != null) {
                data.set("renewPeriod", om.valueToTree(this.getRenewPeriod()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-waf.RosInstanceProps"));
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

            if (!bigScreen.equals(that.bigScreen)) return false;
            if (!exclusiveIpPackage.equals(that.exclusiveIpPackage)) return false;
            if (!extBandwidth.equals(that.extBandwidth)) return false;
            if (!extDomainPackage.equals(that.extDomainPackage)) return false;
            if (!logStorage.equals(that.logStorage)) return false;
            if (!logTime.equals(that.logTime)) return false;
            if (!packageCode.equals(that.packageCode)) return false;
            if (!prefessionalService.equals(that.prefessionalService)) return false;
            if (!subscriptionType.equals(that.subscriptionType)) return false;
            if (!wafLog.equals(that.wafLog)) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.renewalStatus != null ? !this.renewalStatus.equals(that.renewalStatus) : that.renewalStatus != null) return false;
            return this.renewPeriod != null ? this.renewPeriod.equals(that.renewPeriod) : that.renewPeriod == null;
        }

        @Override
        public final int hashCode() {
            int result = this.bigScreen.hashCode();
            result = 31 * result + (this.exclusiveIpPackage.hashCode());
            result = 31 * result + (this.extBandwidth.hashCode());
            result = 31 * result + (this.extDomainPackage.hashCode());
            result = 31 * result + (this.logStorage.hashCode());
            result = 31 * result + (this.logTime.hashCode());
            result = 31 * result + (this.packageCode.hashCode());
            result = 31 * result + (this.prefessionalService.hashCode());
            result = 31 * result + (this.subscriptionType.hashCode());
            result = 31 * result + (this.wafLog.hashCode());
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.renewalStatus != null ? this.renewalStatus.hashCode() : 0);
            result = 31 * result + (this.renewPeriod != null ? this.renewPeriod.hashCode() : 0);
            return result;
        }
    }
}
