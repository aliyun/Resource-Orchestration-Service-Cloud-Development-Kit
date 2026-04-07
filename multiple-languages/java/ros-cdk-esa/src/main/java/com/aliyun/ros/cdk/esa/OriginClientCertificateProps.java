package com.aliyun.ros.cdk.esa;

/**
 * Properties for defining a <code>OriginClientCertificate</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-originclientcertificate
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:26.108Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.OriginClientCertificateProps")
@software.amazon.jsii.Jsii.Proxy(OriginClientCertificateProps.Jsii$Proxy.class)
public interface OriginClientCertificateProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property certificate: The certificate content.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCertificate();

    /**
     * Property privateKey: The private key of the certificate.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPrivateKey();

    /**
     * Property siteId: The website ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSiteId();

    /**
     * Property hostnames: The domain names to associate.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHostnames() {
        return null;
    }

    /**
     * Property originClientCertificateName: The certificate name.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOriginClientCertificateName() {
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
     * @return a {@link Builder} of {@link OriginClientCertificateProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link OriginClientCertificateProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<OriginClientCertificateProps> {
        java.lang.Object certificate;
        java.lang.Object privateKey;
        java.lang.Object siteId;
        java.lang.Object hostnames;
        java.lang.Object originClientCertificateName;
        java.lang.Object validityDays;

        /**
         * Sets the value of {@link OriginClientCertificateProps#getCertificate}
         * @param certificate Property certificate: The certificate content. This parameter is required.
         * @return {@code this}
         */
        public Builder certificate(java.lang.String certificate) {
            this.certificate = certificate;
            return this;
        }

        /**
         * Sets the value of {@link OriginClientCertificateProps#getCertificate}
         * @param certificate Property certificate: The certificate content. This parameter is required.
         * @return {@code this}
         */
        public Builder certificate(com.aliyun.ros.cdk.core.IResolvable certificate) {
            this.certificate = certificate;
            return this;
        }

        /**
         * Sets the value of {@link OriginClientCertificateProps#getPrivateKey}
         * @param privateKey Property privateKey: The private key of the certificate. This parameter is required.
         * @return {@code this}
         */
        public Builder privateKey(java.lang.String privateKey) {
            this.privateKey = privateKey;
            return this;
        }

        /**
         * Sets the value of {@link OriginClientCertificateProps#getPrivateKey}
         * @param privateKey Property privateKey: The private key of the certificate. This parameter is required.
         * @return {@code this}
         */
        public Builder privateKey(com.aliyun.ros.cdk.core.IResolvable privateKey) {
            this.privateKey = privateKey;
            return this;
        }

        /**
         * Sets the value of {@link OriginClientCertificateProps#getSiteId}
         * @param siteId Property siteId: The website ID. This parameter is required.
         * @return {@code this}
         */
        public Builder siteId(java.lang.Number siteId) {
            this.siteId = siteId;
            return this;
        }

        /**
         * Sets the value of {@link OriginClientCertificateProps#getSiteId}
         * @param siteId Property siteId: The website ID. This parameter is required.
         * @return {@code this}
         */
        public Builder siteId(com.aliyun.ros.cdk.core.IResolvable siteId) {
            this.siteId = siteId;
            return this;
        }

        /**
         * Sets the value of {@link OriginClientCertificateProps#getHostnames}
         * @param hostnames Property hostnames: The domain names to associate.
         * @return {@code this}
         */
        public Builder hostnames(com.aliyun.ros.cdk.core.IResolvable hostnames) {
            this.hostnames = hostnames;
            return this;
        }

        /**
         * Sets the value of {@link OriginClientCertificateProps#getHostnames}
         * @param hostnames Property hostnames: The domain names to associate.
         * @return {@code this}
         */
        public Builder hostnames(java.util.List<? extends java.lang.Object> hostnames) {
            this.hostnames = hostnames;
            return this;
        }

        /**
         * Sets the value of {@link OriginClientCertificateProps#getOriginClientCertificateName}
         * @param originClientCertificateName Property originClientCertificateName: The certificate name.
         * @return {@code this}
         */
        public Builder originClientCertificateName(java.lang.String originClientCertificateName) {
            this.originClientCertificateName = originClientCertificateName;
            return this;
        }

        /**
         * Sets the value of {@link OriginClientCertificateProps#getOriginClientCertificateName}
         * @param originClientCertificateName Property originClientCertificateName: The certificate name.
         * @return {@code this}
         */
        public Builder originClientCertificateName(com.aliyun.ros.cdk.core.IResolvable originClientCertificateName) {
            this.originClientCertificateName = originClientCertificateName;
            return this;
        }

        /**
         * Sets the value of {@link OriginClientCertificateProps#getValidityDays}
         * @param validityDays Property validityDays: The validity period of the certificate.
         *                     Unit: day.
         * @return {@code this}
         */
        public Builder validityDays(java.lang.Number validityDays) {
            this.validityDays = validityDays;
            return this;
        }

        /**
         * Sets the value of {@link OriginClientCertificateProps#getValidityDays}
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
         * @return a new instance of {@link OriginClientCertificateProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public OriginClientCertificateProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link OriginClientCertificateProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements OriginClientCertificateProps {
        private final java.lang.Object certificate;
        private final java.lang.Object privateKey;
        private final java.lang.Object siteId;
        private final java.lang.Object hostnames;
        private final java.lang.Object originClientCertificateName;
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
            this.hostnames = software.amazon.jsii.Kernel.get(this, "hostnames", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.originClientCertificateName = software.amazon.jsii.Kernel.get(this, "originClientCertificateName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
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
            this.hostnames = builder.hostnames;
            this.originClientCertificateName = builder.originClientCertificateName;
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
        public final java.lang.Object getHostnames() {
            return this.hostnames;
        }

        @Override
        public final java.lang.Object getOriginClientCertificateName() {
            return this.originClientCertificateName;
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
            if (this.getHostnames() != null) {
                data.set("hostnames", om.valueToTree(this.getHostnames()));
            }
            if (this.getOriginClientCertificateName() != null) {
                data.set("originClientCertificateName", om.valueToTree(this.getOriginClientCertificateName()));
            }
            if (this.getValidityDays() != null) {
                data.set("validityDays", om.valueToTree(this.getValidityDays()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-esa.OriginClientCertificateProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            OriginClientCertificateProps.Jsii$Proxy that = (OriginClientCertificateProps.Jsii$Proxy) o;

            if (!certificate.equals(that.certificate)) return false;
            if (!privateKey.equals(that.privateKey)) return false;
            if (!siteId.equals(that.siteId)) return false;
            if (this.hostnames != null ? !this.hostnames.equals(that.hostnames) : that.hostnames != null) return false;
            if (this.originClientCertificateName != null ? !this.originClientCertificateName.equals(that.originClientCertificateName) : that.originClientCertificateName != null) return false;
            return this.validityDays != null ? this.validityDays.equals(that.validityDays) : that.validityDays == null;
        }

        @Override
        public final int hashCode() {
            int result = this.certificate.hashCode();
            result = 31 * result + (this.privateKey.hashCode());
            result = 31 * result + (this.siteId.hashCode());
            result = 31 * result + (this.hostnames != null ? this.hostnames.hashCode() : 0);
            result = 31 * result + (this.originClientCertificateName != null ? this.originClientCertificateName.hashCode() : 0);
            result = 31 * result + (this.validityDays != null ? this.validityDays.hashCode() : 0);
            return result;
        }
    }
}
