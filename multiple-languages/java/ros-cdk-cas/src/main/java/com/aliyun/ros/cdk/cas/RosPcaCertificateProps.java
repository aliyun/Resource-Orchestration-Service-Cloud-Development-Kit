package com.aliyun.ros.cdk.cas;

/**
 * Properties for defining a <code>RosPcaCertificate</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cas-pcacertificate
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T10:39:53.090Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cas.$Module.class, fqn = "@alicloud/ros-cdk-cas.RosPcaCertificateProps")
@software.amazon.jsii.Jsii.Proxy(RosPcaCertificateProps.Jsii$Proxy.class)
public interface RosPcaCertificateProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCommonName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getLocality();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getOrganization();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getOrganizationUnit();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getState();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getYears();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAlgorithm() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCaStatus() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCountryCode() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosPcaCertificateProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosPcaCertificateProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosPcaCertificateProps> {
        java.lang.Object commonName;
        java.lang.Object locality;
        java.lang.Object organization;
        java.lang.Object organizationUnit;
        java.lang.Object state;
        java.lang.Object years;
        java.lang.Object algorithm;
        java.lang.Object caStatus;
        java.lang.Object countryCode;

        /**
         * Sets the value of {@link RosPcaCertificateProps#getCommonName}
         * @param commonName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder commonName(java.lang.String commonName) {
            this.commonName = commonName;
            return this;
        }

        /**
         * Sets the value of {@link RosPcaCertificateProps#getCommonName}
         * @param commonName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder commonName(com.aliyun.ros.cdk.core.IResolvable commonName) {
            this.commonName = commonName;
            return this;
        }

        /**
         * Sets the value of {@link RosPcaCertificateProps#getLocality}
         * @param locality the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder locality(java.lang.String locality) {
            this.locality = locality;
            return this;
        }

        /**
         * Sets the value of {@link RosPcaCertificateProps#getLocality}
         * @param locality the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder locality(com.aliyun.ros.cdk.core.IResolvable locality) {
            this.locality = locality;
            return this;
        }

        /**
         * Sets the value of {@link RosPcaCertificateProps#getOrganization}
         * @param organization the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder organization(java.lang.String organization) {
            this.organization = organization;
            return this;
        }

        /**
         * Sets the value of {@link RosPcaCertificateProps#getOrganization}
         * @param organization the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder organization(com.aliyun.ros.cdk.core.IResolvable organization) {
            this.organization = organization;
            return this;
        }

        /**
         * Sets the value of {@link RosPcaCertificateProps#getOrganizationUnit}
         * @param organizationUnit the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder organizationUnit(java.lang.String organizationUnit) {
            this.organizationUnit = organizationUnit;
            return this;
        }

        /**
         * Sets the value of {@link RosPcaCertificateProps#getOrganizationUnit}
         * @param organizationUnit the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder organizationUnit(com.aliyun.ros.cdk.core.IResolvable organizationUnit) {
            this.organizationUnit = organizationUnit;
            return this;
        }

        /**
         * Sets the value of {@link RosPcaCertificateProps#getState}
         * @param state the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder state(java.lang.String state) {
            this.state = state;
            return this;
        }

        /**
         * Sets the value of {@link RosPcaCertificateProps#getState}
         * @param state the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder state(com.aliyun.ros.cdk.core.IResolvable state) {
            this.state = state;
            return this;
        }

        /**
         * Sets the value of {@link RosPcaCertificateProps#getYears}
         * @param years the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder years(java.lang.Number years) {
            this.years = years;
            return this;
        }

        /**
         * Sets the value of {@link RosPcaCertificateProps#getYears}
         * @param years the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder years(com.aliyun.ros.cdk.core.IResolvable years) {
            this.years = years;
            return this;
        }

        /**
         * Sets the value of {@link RosPcaCertificateProps#getAlgorithm}
         * @param algorithm the value to be set.
         * @return {@code this}
         */
        public Builder algorithm(java.lang.String algorithm) {
            this.algorithm = algorithm;
            return this;
        }

        /**
         * Sets the value of {@link RosPcaCertificateProps#getAlgorithm}
         * @param algorithm the value to be set.
         * @return {@code this}
         */
        public Builder algorithm(com.aliyun.ros.cdk.core.IResolvable algorithm) {
            this.algorithm = algorithm;
            return this;
        }

        /**
         * Sets the value of {@link RosPcaCertificateProps#getCaStatus}
         * @param caStatus the value to be set.
         * @return {@code this}
         */
        public Builder caStatus(java.lang.String caStatus) {
            this.caStatus = caStatus;
            return this;
        }

        /**
         * Sets the value of {@link RosPcaCertificateProps#getCaStatus}
         * @param caStatus the value to be set.
         * @return {@code this}
         */
        public Builder caStatus(com.aliyun.ros.cdk.core.IResolvable caStatus) {
            this.caStatus = caStatus;
            return this;
        }

        /**
         * Sets the value of {@link RosPcaCertificateProps#getCountryCode}
         * @param countryCode the value to be set.
         * @return {@code this}
         */
        public Builder countryCode(java.lang.String countryCode) {
            this.countryCode = countryCode;
            return this;
        }

        /**
         * Sets the value of {@link RosPcaCertificateProps#getCountryCode}
         * @param countryCode the value to be set.
         * @return {@code this}
         */
        public Builder countryCode(com.aliyun.ros.cdk.core.IResolvable countryCode) {
            this.countryCode = countryCode;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosPcaCertificateProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosPcaCertificateProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosPcaCertificateProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosPcaCertificateProps {
        private final java.lang.Object commonName;
        private final java.lang.Object locality;
        private final java.lang.Object organization;
        private final java.lang.Object organizationUnit;
        private final java.lang.Object state;
        private final java.lang.Object years;
        private final java.lang.Object algorithm;
        private final java.lang.Object caStatus;
        private final java.lang.Object countryCode;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.commonName = software.amazon.jsii.Kernel.get(this, "commonName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.locality = software.amazon.jsii.Kernel.get(this, "locality", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.organization = software.amazon.jsii.Kernel.get(this, "organization", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.organizationUnit = software.amazon.jsii.Kernel.get(this, "organizationUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.state = software.amazon.jsii.Kernel.get(this, "state", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.years = software.amazon.jsii.Kernel.get(this, "years", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.algorithm = software.amazon.jsii.Kernel.get(this, "algorithm", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.caStatus = software.amazon.jsii.Kernel.get(this, "caStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.countryCode = software.amazon.jsii.Kernel.get(this, "countryCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.commonName = java.util.Objects.requireNonNull(builder.commonName, "commonName is required");
            this.locality = java.util.Objects.requireNonNull(builder.locality, "locality is required");
            this.organization = java.util.Objects.requireNonNull(builder.organization, "organization is required");
            this.organizationUnit = java.util.Objects.requireNonNull(builder.organizationUnit, "organizationUnit is required");
            this.state = java.util.Objects.requireNonNull(builder.state, "state is required");
            this.years = java.util.Objects.requireNonNull(builder.years, "years is required");
            this.algorithm = builder.algorithm;
            this.caStatus = builder.caStatus;
            this.countryCode = builder.countryCode;
        }

        @Override
        public final java.lang.Object getCommonName() {
            return this.commonName;
        }

        @Override
        public final java.lang.Object getLocality() {
            return this.locality;
        }

        @Override
        public final java.lang.Object getOrganization() {
            return this.organization;
        }

        @Override
        public final java.lang.Object getOrganizationUnit() {
            return this.organizationUnit;
        }

        @Override
        public final java.lang.Object getState() {
            return this.state;
        }

        @Override
        public final java.lang.Object getYears() {
            return this.years;
        }

        @Override
        public final java.lang.Object getAlgorithm() {
            return this.algorithm;
        }

        @Override
        public final java.lang.Object getCaStatus() {
            return this.caStatus;
        }

        @Override
        public final java.lang.Object getCountryCode() {
            return this.countryCode;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("commonName", om.valueToTree(this.getCommonName()));
            data.set("locality", om.valueToTree(this.getLocality()));
            data.set("organization", om.valueToTree(this.getOrganization()));
            data.set("organizationUnit", om.valueToTree(this.getOrganizationUnit()));
            data.set("state", om.valueToTree(this.getState()));
            data.set("years", om.valueToTree(this.getYears()));
            if (this.getAlgorithm() != null) {
                data.set("algorithm", om.valueToTree(this.getAlgorithm()));
            }
            if (this.getCaStatus() != null) {
                data.set("caStatus", om.valueToTree(this.getCaStatus()));
            }
            if (this.getCountryCode() != null) {
                data.set("countryCode", om.valueToTree(this.getCountryCode()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cas.RosPcaCertificateProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosPcaCertificateProps.Jsii$Proxy that = (RosPcaCertificateProps.Jsii$Proxy) o;

            if (!commonName.equals(that.commonName)) return false;
            if (!locality.equals(that.locality)) return false;
            if (!organization.equals(that.organization)) return false;
            if (!organizationUnit.equals(that.organizationUnit)) return false;
            if (!state.equals(that.state)) return false;
            if (!years.equals(that.years)) return false;
            if (this.algorithm != null ? !this.algorithm.equals(that.algorithm) : that.algorithm != null) return false;
            if (this.caStatus != null ? !this.caStatus.equals(that.caStatus) : that.caStatus != null) return false;
            return this.countryCode != null ? this.countryCode.equals(that.countryCode) : that.countryCode == null;
        }

        @Override
        public final int hashCode() {
            int result = this.commonName.hashCode();
            result = 31 * result + (this.locality.hashCode());
            result = 31 * result + (this.organization.hashCode());
            result = 31 * result + (this.organizationUnit.hashCode());
            result = 31 * result + (this.state.hashCode());
            result = 31 * result + (this.years.hashCode());
            result = 31 * result + (this.algorithm != null ? this.algorithm.hashCode() : 0);
            result = 31 * result + (this.caStatus != null ? this.caStatus.hashCode() : 0);
            result = 31 * result + (this.countryCode != null ? this.countryCode.hashCode() : 0);
            return result;
        }
    }
}
