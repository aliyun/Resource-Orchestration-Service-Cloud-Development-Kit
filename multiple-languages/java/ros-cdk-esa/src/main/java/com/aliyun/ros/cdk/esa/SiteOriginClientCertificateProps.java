package com.aliyun.ros.cdk.esa;

/**
 * Properties for defining a <code>SiteOriginClientCertificate</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-siteoriginclientcertificate
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:50.272Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.SiteOriginClientCertificateProps")
@software.amazon.jsii.Jsii.Proxy(SiteOriginClientCertificateProps.Jsii$Proxy.class)
public interface SiteOriginClientCertificateProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property certificate: The certificate content.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCertificate();

    /**
     * Property privateKey: The private key of the certificate.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPrivateKey();

    /**
     * Property siteId: Site ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSiteId();

    /**
     * Property siteOriginClientCertificateName: The certificate name.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSiteOriginClientCertificateName() {
        return null;
    }

    /**
     * Property validityDays: The validity period of the certificate.
     * <p>
     * Unit: day.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getValidityDays() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link SiteOriginClientCertificateProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link SiteOriginClientCertificateProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<SiteOriginClientCertificateProps> {
        java.lang.Object certificate;
        java.lang.Object privateKey;
        java.lang.Object siteId;
        java.lang.Object siteOriginClientCertificateName;
        java.lang.Object validityDays;

        /**
         * Sets the value of {@link SiteOriginClientCertificateProps#getCertificate}
         * @param certificate Property certificate: The certificate content. This parameter is required.
         * @return {@code this}
         */
        public Builder certificate(java.lang.String certificate) {
            this.certificate = certificate;
            return this;
        }

        /**
         * Sets the value of {@link SiteOriginClientCertificateProps#getCertificate}
         * @param certificate Property certificate: The certificate content. This parameter is required.
         * @return {@code this}
         */
        public Builder certificate(com.aliyun.ros.cdk.core.IResolvable certificate) {
            this.certificate = certificate;
            return this;
        }

        /**
         * Sets the value of {@link SiteOriginClientCertificateProps#getPrivateKey}
         * @param privateKey Property privateKey: The private key of the certificate. This parameter is required.
         * @return {@code this}
         */
        public Builder privateKey(java.lang.String privateKey) {
            this.privateKey = privateKey;
            return this;
        }

        /**
         * Sets the value of {@link SiteOriginClientCertificateProps#getPrivateKey}
         * @param privateKey Property privateKey: The private key of the certificate. This parameter is required.
         * @return {@code this}
         */
        public Builder privateKey(com.aliyun.ros.cdk.core.IResolvable privateKey) {
            this.privateKey = privateKey;
            return this;
        }

        /**
         * Sets the value of {@link SiteOriginClientCertificateProps#getSiteId}
         * @param siteId Property siteId: Site ID. This parameter is required.
         * @return {@code this}
         */
        public Builder siteId(java.lang.Number siteId) {
            this.siteId = siteId;
            return this;
        }

        /**
         * Sets the value of {@link SiteOriginClientCertificateProps#getSiteId}
         * @param siteId Property siteId: Site ID. This parameter is required.
         * @return {@code this}
         */
        public Builder siteId(com.aliyun.ros.cdk.core.IResolvable siteId) {
            this.siteId = siteId;
            return this;
        }

        /**
         * Sets the value of {@link SiteOriginClientCertificateProps#getSiteOriginClientCertificateName}
         * @param siteOriginClientCertificateName Property siteOriginClientCertificateName: The certificate name.
         * @return {@code this}
         */
        public Builder siteOriginClientCertificateName(java.lang.String siteOriginClientCertificateName) {
            this.siteOriginClientCertificateName = siteOriginClientCertificateName;
            return this;
        }

        /**
         * Sets the value of {@link SiteOriginClientCertificateProps#getSiteOriginClientCertificateName}
         * @param siteOriginClientCertificateName Property siteOriginClientCertificateName: The certificate name.
         * @return {@code this}
         */
        public Builder siteOriginClientCertificateName(com.aliyun.ros.cdk.core.IResolvable siteOriginClientCertificateName) {
            this.siteOriginClientCertificateName = siteOriginClientCertificateName;
            return this;
        }

        /**
         * Sets the value of {@link SiteOriginClientCertificateProps#getValidityDays}
         * @param validityDays Property validityDays: The validity period of the certificate.
         *                     Unit: day.
         * @return {@code this}
         */
        public Builder validityDays(java.lang.Number validityDays) {
            this.validityDays = validityDays;
            return this;
        }

        /**
         * Sets the value of {@link SiteOriginClientCertificateProps#getValidityDays}
         * @param validityDays Property validityDays: The validity period of the certificate.
         *                     Unit: day.
         * @return {@code this}
         */
        public Builder validityDays(com.aliyun.ros.cdk.core.IResolvable validityDays) {
            this.validityDays = validityDays;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link SiteOriginClientCertificateProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public SiteOriginClientCertificateProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link SiteOriginClientCertificateProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SiteOriginClientCertificateProps {
        private final java.lang.Object certificate;
        private final java.lang.Object privateKey;
        private final java.lang.Object siteId;
        private final java.lang.Object siteOriginClientCertificateName;
        private final java.lang.Object validityDays;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.certificate = software.amazon.jsii.Kernel.get(this, "certificate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.privateKey = software.amazon.jsii.Kernel.get(this, "privateKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.siteId = software.amazon.jsii.Kernel.get(this, "siteId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.siteOriginClientCertificateName = software.amazon.jsii.Kernel.get(this, "siteOriginClientCertificateName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.validityDays = software.amazon.jsii.Kernel.get(this, "validityDays", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.certificate = java.util.Objects.requireNonNull(builder.certificate, "certificate is required");
            this.privateKey = java.util.Objects.requireNonNull(builder.privateKey, "privateKey is required");
            this.siteId = java.util.Objects.requireNonNull(builder.siteId, "siteId is required");
            this.siteOriginClientCertificateName = builder.siteOriginClientCertificateName;
            this.validityDays = builder.validityDays;
        }

        @Override
        public final java.lang.Object getCertificate() {
            return this.certificate;
        }

        @Override
        public final java.lang.Object getPrivateKey() {
            return this.privateKey;
        }

        @Override
        public final java.lang.Object getSiteId() {
            return this.siteId;
        }

        @Override
        public final java.lang.Object getSiteOriginClientCertificateName() {
            return this.siteOriginClientCertificateName;
        }

        @Override
        public final java.lang.Object getValidityDays() {
            return this.validityDays;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("certificate", om.valueToTree(this.getCertificate()));
            data.set("privateKey", om.valueToTree(this.getPrivateKey()));
            data.set("siteId", om.valueToTree(this.getSiteId()));
            if (this.getSiteOriginClientCertificateName() != null) {
                data.set("siteOriginClientCertificateName", om.valueToTree(this.getSiteOriginClientCertificateName()));
            }
            if (this.getValidityDays() != null) {
                data.set("validityDays", om.valueToTree(this.getValidityDays()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-esa.SiteOriginClientCertificateProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            SiteOriginClientCertificateProps.Jsii$Proxy that = (SiteOriginClientCertificateProps.Jsii$Proxy) o;

            if (!certificate.equals(that.certificate)) return false;
            if (!privateKey.equals(that.privateKey)) return false;
            if (!siteId.equals(that.siteId)) return false;
            if (this.siteOriginClientCertificateName != null ? !this.siteOriginClientCertificateName.equals(that.siteOriginClientCertificateName) : that.siteOriginClientCertificateName != null) return false;
            return this.validityDays != null ? this.validityDays.equals(that.validityDays) : that.validityDays == null;
        }

        @Override
        public final int hashCode() {
            int result = this.certificate.hashCode();
            result = 31 * result + (this.privateKey.hashCode());
            result = 31 * result + (this.siteId.hashCode());
            result = 31 * result + (this.siteOriginClientCertificateName != null ? this.siteOriginClientCertificateName.hashCode() : 0);
            result = 31 * result + (this.validityDays != null ? this.validityDays.hashCode() : 0);
            return result;
        }
    }
}
