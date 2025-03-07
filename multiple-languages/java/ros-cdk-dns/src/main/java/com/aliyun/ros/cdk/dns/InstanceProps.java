package com.aliyun.ros.cdk.dns;

/**
 * Properties for defining a <code>Instance</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-instance
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:03.959Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dns.$Module.class, fqn = "@alicloud/ros-cdk-dns.InstanceProps")
@software.amazon.jsii.Jsii.Proxy(InstanceProps.Jsii$Proxy.class)
public interface InstanceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property dnsSecurity: The DNS security policy.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>no: No protection against DNS attacks is provided.</li>
     * <li>basic: Basic protection against DNS attacks is provided.</li>
     * <li>advanced: Advanced protection against DNS attacks is provided.</li>
     * </ul>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDnsSecurity();

    /**
     * Property domainNumbers: The number of domain names.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDomainNumbers();

    /**
     * Property period: The subscription duration.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>If unit is month: 1, 2, 3, 6</li>
     * <li>If unit is year: 1, 2</li>
     * </ul>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPeriod();

    /**
     * Property periodUnit: The subscription duration unit.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPeriodUnit();

    /**
     * Property version: The edition of Alibaba Cloud DNS.
     * <p>
     * Valid values:
     * If create hosted public zone:
     * <p>
     * <ul>
     * <li>version_personal: Personal Edition.</li>
     * <li>version_enterprise_basic: Enterprise Standard Edition.</li>
     * <li>version_enterprise_advanced: Enterprise Ultimate Edition.
     * If create cached public zone:</li>
     * <li>version_cached_basic<strong>Note</strong>: Only upgrade operations are supported after instance creation.</li>
     * </ul>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVersion();

    /**
     * Property domain: The domain name that you want to bind to the instance.
     * <p>
     * If you want to bind multiple domain names to the instance, separate these domain names with commas (,).
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDomain() {
        return null;
    }

    /**
     * Property instanceType: The type of the instance.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>HostedPublicZone: Hosted Public Zone</li>
     * <li>CachedPublicZone: Cached Public Zone.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceType() {
        return null;
    }

    /**
     * Property renewalStatus: The renewal method.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>AutoRenewal: The instance is automatically renewed.</li>
     * <li>ManualRenewal: The instance is manually renewed.
     * Default value: ManualRenewal.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRenewalStatus() {
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
        java.lang.Object dnsSecurity;
        java.lang.Object domainNumbers;
        java.lang.Object period;
        java.lang.Object periodUnit;
        java.lang.Object version;
        java.lang.Object domain;
        java.lang.Object instanceType;
        java.lang.Object renewalStatus;

        /**
         * Sets the value of {@link InstanceProps#getDnsSecurity}
         * @param dnsSecurity Property dnsSecurity: The DNS security policy. This parameter is required.
         *                    Valid values:
         *                    <p>
         *                    <ul>
         *                    <li>no: No protection against DNS attacks is provided.</li>
         *                    <li>basic: Basic protection against DNS attacks is provided.</li>
         *                    <li>advanced: Advanced protection against DNS attacks is provided.</li>
         *                    </ul>
         * @return {@code this}
         */
        public Builder dnsSecurity(java.lang.String dnsSecurity) {
            this.dnsSecurity = dnsSecurity;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getDnsSecurity}
         * @param dnsSecurity Property dnsSecurity: The DNS security policy. This parameter is required.
         *                    Valid values:
         *                    <p>
         *                    <ul>
         *                    <li>no: No protection against DNS attacks is provided.</li>
         *                    <li>basic: Basic protection against DNS attacks is provided.</li>
         *                    <li>advanced: Advanced protection against DNS attacks is provided.</li>
         *                    </ul>
         * @return {@code this}
         */
        public Builder dnsSecurity(com.aliyun.ros.cdk.core.IResolvable dnsSecurity) {
            this.dnsSecurity = dnsSecurity;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getDomainNumbers}
         * @param domainNumbers Property domainNumbers: The number of domain names. This parameter is required.
         * @return {@code this}
         */
        public Builder domainNumbers(java.lang.Number domainNumbers) {
            this.domainNumbers = domainNumbers;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getDomainNumbers}
         * @param domainNumbers Property domainNumbers: The number of domain names. This parameter is required.
         * @return {@code this}
         */
        public Builder domainNumbers(com.aliyun.ros.cdk.core.IResolvable domainNumbers) {
            this.domainNumbers = domainNumbers;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getPeriod}
         * @param period Property period: The subscription duration. This parameter is required.
         *               Valid values:
         *               <p>
         *               <ul>
         *               <li>If unit is month: 1, 2, 3, 6</li>
         *               <li>If unit is year: 1, 2</li>
         *               </ul>
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getPeriod}
         * @param period Property period: The subscription duration. This parameter is required.
         *               Valid values:
         *               <p>
         *               <ul>
         *               <li>If unit is month: 1, 2, 3, 6</li>
         *               <li>If unit is year: 1, 2</li>
         *               </ul>
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getPeriodUnit}
         * @param periodUnit Property periodUnit: The subscription duration unit. This parameter is required.
         * @return {@code this}
         */
        public Builder periodUnit(java.lang.String periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getPeriodUnit}
         * @param periodUnit Property periodUnit: The subscription duration unit. This parameter is required.
         * @return {@code this}
         */
        public Builder periodUnit(com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getVersion}
         * @param version Property version: The edition of Alibaba Cloud DNS. This parameter is required.
         *                Valid values:
         *                If create hosted public zone:
         *                <p>
         *                <ul>
         *                <li>version_personal: Personal Edition.</li>
         *                <li>version_enterprise_basic: Enterprise Standard Edition.</li>
         *                <li>version_enterprise_advanced: Enterprise Ultimate Edition.
         *                If create cached public zone:</li>
         *                <li>version_cached_basic<strong>Note</strong>: Only upgrade operations are supported after instance creation.</li>
         *                </ul>
         * @return {@code this}
         */
        public Builder version(java.lang.String version) {
            this.version = version;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getVersion}
         * @param version Property version: The edition of Alibaba Cloud DNS. This parameter is required.
         *                Valid values:
         *                If create hosted public zone:
         *                <p>
         *                <ul>
         *                <li>version_personal: Personal Edition.</li>
         *                <li>version_enterprise_basic: Enterprise Standard Edition.</li>
         *                <li>version_enterprise_advanced: Enterprise Ultimate Edition.
         *                If create cached public zone:</li>
         *                <li>version_cached_basic<strong>Note</strong>: Only upgrade operations are supported after instance creation.</li>
         *                </ul>
         * @return {@code this}
         */
        public Builder version(com.aliyun.ros.cdk.core.IResolvable version) {
            this.version = version;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getDomain}
         * @param domain Property domain: The domain name that you want to bind to the instance.
         *               If you want to bind multiple domain names to the instance, separate these domain names with commas (,).
         * @return {@code this}
         */
        public Builder domain(java.lang.String domain) {
            this.domain = domain;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getDomain}
         * @param domain Property domain: The domain name that you want to bind to the instance.
         *               If you want to bind multiple domain names to the instance, separate these domain names with commas (,).
         * @return {@code this}
         */
        public Builder domain(com.aliyun.ros.cdk.core.IResolvable domain) {
            this.domain = domain;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getInstanceType}
         * @param instanceType Property instanceType: The type of the instance.
         *                     Valid values:
         *                     <p>
         *                     <ul>
         *                     <li>HostedPublicZone: Hosted Public Zone</li>
         *                     <li>CachedPublicZone: Cached Public Zone.</li>
         *                     </ul>
         * @return {@code this}
         */
        public Builder instanceType(java.lang.String instanceType) {
            this.instanceType = instanceType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getInstanceType}
         * @param instanceType Property instanceType: The type of the instance.
         *                     Valid values:
         *                     <p>
         *                     <ul>
         *                     <li>HostedPublicZone: Hosted Public Zone</li>
         *                     <li>CachedPublicZone: Cached Public Zone.</li>
         *                     </ul>
         * @return {@code this}
         */
        public Builder instanceType(com.aliyun.ros.cdk.core.IResolvable instanceType) {
            this.instanceType = instanceType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getRenewalStatus}
         * @param renewalStatus Property renewalStatus: The renewal method.
         *                      Valid values:
         *                      <p>
         *                      <ul>
         *                      <li>AutoRenewal: The instance is automatically renewed.</li>
         *                      <li>ManualRenewal: The instance is manually renewed.
         *                      Default value: ManualRenewal.</li>
         *                      </ul>
         * @return {@code this}
         */
        public Builder renewalStatus(java.lang.String renewalStatus) {
            this.renewalStatus = renewalStatus;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getRenewalStatus}
         * @param renewalStatus Property renewalStatus: The renewal method.
         *                      Valid values:
         *                      <p>
         *                      <ul>
         *                      <li>AutoRenewal: The instance is automatically renewed.</li>
         *                      <li>ManualRenewal: The instance is manually renewed.
         *                      Default value: ManualRenewal.</li>
         *                      </ul>
         * @return {@code this}
         */
        public Builder renewalStatus(com.aliyun.ros.cdk.core.IResolvable renewalStatus) {
            this.renewalStatus = renewalStatus;
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
        private final java.lang.Object dnsSecurity;
        private final java.lang.Object domainNumbers;
        private final java.lang.Object period;
        private final java.lang.Object periodUnit;
        private final java.lang.Object version;
        private final java.lang.Object domain;
        private final java.lang.Object instanceType;
        private final java.lang.Object renewalStatus;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.dnsSecurity = software.amazon.jsii.Kernel.get(this, "dnsSecurity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.domainNumbers = software.amazon.jsii.Kernel.get(this, "domainNumbers", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.periodUnit = software.amazon.jsii.Kernel.get(this, "periodUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.version = software.amazon.jsii.Kernel.get(this, "version", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.domain = software.amazon.jsii.Kernel.get(this, "domain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceType = software.amazon.jsii.Kernel.get(this, "instanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.renewalStatus = software.amazon.jsii.Kernel.get(this, "renewalStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.dnsSecurity = java.util.Objects.requireNonNull(builder.dnsSecurity, "dnsSecurity is required");
            this.domainNumbers = java.util.Objects.requireNonNull(builder.domainNumbers, "domainNumbers is required");
            this.period = java.util.Objects.requireNonNull(builder.period, "period is required");
            this.periodUnit = java.util.Objects.requireNonNull(builder.periodUnit, "periodUnit is required");
            this.version = java.util.Objects.requireNonNull(builder.version, "version is required");
            this.domain = builder.domain;
            this.instanceType = builder.instanceType;
            this.renewalStatus = builder.renewalStatus;
        }

        @Override
        public final java.lang.Object getDnsSecurity() {
            return this.dnsSecurity;
        }

        @Override
        public final java.lang.Object getDomainNumbers() {
            return this.domainNumbers;
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
        public final java.lang.Object getVersion() {
            return this.version;
        }

        @Override
        public final java.lang.Object getDomain() {
            return this.domain;
        }

        @Override
        public final java.lang.Object getInstanceType() {
            return this.instanceType;
        }

        @Override
        public final java.lang.Object getRenewalStatus() {
            return this.renewalStatus;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("dnsSecurity", om.valueToTree(this.getDnsSecurity()));
            data.set("domainNumbers", om.valueToTree(this.getDomainNumbers()));
            data.set("period", om.valueToTree(this.getPeriod()));
            data.set("periodUnit", om.valueToTree(this.getPeriodUnit()));
            data.set("version", om.valueToTree(this.getVersion()));
            if (this.getDomain() != null) {
                data.set("domain", om.valueToTree(this.getDomain()));
            }
            if (this.getInstanceType() != null) {
                data.set("instanceType", om.valueToTree(this.getInstanceType()));
            }
            if (this.getRenewalStatus() != null) {
                data.set("renewalStatus", om.valueToTree(this.getRenewalStatus()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-dns.InstanceProps"));
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

            if (!dnsSecurity.equals(that.dnsSecurity)) return false;
            if (!domainNumbers.equals(that.domainNumbers)) return false;
            if (!period.equals(that.period)) return false;
            if (!periodUnit.equals(that.periodUnit)) return false;
            if (!version.equals(that.version)) return false;
            if (this.domain != null ? !this.domain.equals(that.domain) : that.domain != null) return false;
            if (this.instanceType != null ? !this.instanceType.equals(that.instanceType) : that.instanceType != null) return false;
            return this.renewalStatus != null ? this.renewalStatus.equals(that.renewalStatus) : that.renewalStatus == null;
        }

        @Override
        public final int hashCode() {
            int result = this.dnsSecurity.hashCode();
            result = 31 * result + (this.domainNumbers.hashCode());
            result = 31 * result + (this.period.hashCode());
            result = 31 * result + (this.periodUnit.hashCode());
            result = 31 * result + (this.version.hashCode());
            result = 31 * result + (this.domain != null ? this.domain.hashCode() : 0);
            result = 31 * result + (this.instanceType != null ? this.instanceType.hashCode() : 0);
            result = 31 * result + (this.renewalStatus != null ? this.renewalStatus.hashCode() : 0);
            return result;
        }
    }
}
