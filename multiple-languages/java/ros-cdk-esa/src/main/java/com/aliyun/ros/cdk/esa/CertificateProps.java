package com.aliyun.ros.cdk.esa;

/**
 * Properties for defining a <code>Certificate</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-certificate
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:56.434Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.CertificateProps")
@software.amazon.jsii.Jsii.Proxy(CertificateProps.Jsii$Proxy.class)
public interface CertificateProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property createdType: The certificate type.
     * <p>
     * <ul>
     * <li>cas (Certificate Center Certificate)</li>
     * <li>upload (custom upload certificate)</li>
     * <li>free( Free certificate).</li>
     * </ul>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCreatedType();

    /**
     * Property domains: A list of domain names.
     * <p>
     * Multiple domain names are separated by commas.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDomains();

    /**
     * Property siteId: The site ID, which can be obtained by calling the ListSites interface.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSiteId();

    /**
     * Property casId: Cloud certificate ID.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCasId() {
        return null;
    }

    /**
     * Property certId: The certificate Id.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCertId() {
        return null;
    }

    /**
     * Property certificate: Certificate content.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCertificate() {
        return null;
    }

    /**
     * Property certName: The certificate name.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCertName() {
        return null;
    }

    /**
     * Property privateKey: The certificate private key.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPrivateKey() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link CertificateProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link CertificateProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<CertificateProps> {
        java.lang.Object createdType;
        java.lang.Object domains;
        java.lang.Object siteId;
        java.lang.Object casId;
        java.lang.Object certId;
        java.lang.Object certificate;
        java.lang.Object certName;
        java.lang.Object privateKey;

        /**
         * Sets the value of {@link CertificateProps#getCreatedType}
         * @param createdType Property createdType: The certificate type. This parameter is required.
         *                    <ul>
         *                    <li>cas (Certificate Center Certificate)</li>
         *                    <li>upload (custom upload certificate)</li>
         *                    <li>free( Free certificate).</li>
         *                    </ul>
         * @return {@code this}
         */
        public Builder createdType(java.lang.String createdType) {
            this.createdType = createdType;
            return this;
        }

        /**
         * Sets the value of {@link CertificateProps#getCreatedType}
         * @param createdType Property createdType: The certificate type. This parameter is required.
         *                    <ul>
         *                    <li>cas (Certificate Center Certificate)</li>
         *                    <li>upload (custom upload certificate)</li>
         *                    <li>free( Free certificate).</li>
         *                    </ul>
         * @return {@code this}
         */
        public Builder createdType(com.aliyun.ros.cdk.core.IResolvable createdType) {
            this.createdType = createdType;
            return this;
        }

        /**
         * Sets the value of {@link CertificateProps#getDomains}
         * @param domains Property domains: A list of domain names. This parameter is required.
         *                Multiple domain names are separated by commas.
         * @return {@code this}
         */
        public Builder domains(com.aliyun.ros.cdk.core.IResolvable domains) {
            this.domains = domains;
            return this;
        }

        /**
         * Sets the value of {@link CertificateProps#getDomains}
         * @param domains Property domains: A list of domain names. This parameter is required.
         *                Multiple domain names are separated by commas.
         * @return {@code this}
         */
        public Builder domains(java.util.List<? extends java.lang.Object> domains) {
            this.domains = domains;
            return this;
        }

        /**
         * Sets the value of {@link CertificateProps#getSiteId}
         * @param siteId Property siteId: The site ID, which can be obtained by calling the ListSites interface. This parameter is required.
         * @return {@code this}
         */
        public Builder siteId(java.lang.Number siteId) {
            this.siteId = siteId;
            return this;
        }

        /**
         * Sets the value of {@link CertificateProps#getSiteId}
         * @param siteId Property siteId: The site ID, which can be obtained by calling the ListSites interface. This parameter is required.
         * @return {@code this}
         */
        public Builder siteId(com.aliyun.ros.cdk.core.IResolvable siteId) {
            this.siteId = siteId;
            return this;
        }

        /**
         * Sets the value of {@link CertificateProps#getCasId}
         * @param casId Property casId: Cloud certificate ID.
         * @return {@code this}
         */
        public Builder casId(java.lang.String casId) {
            this.casId = casId;
            return this;
        }

        /**
         * Sets the value of {@link CertificateProps#getCasId}
         * @param casId Property casId: Cloud certificate ID.
         * @return {@code this}
         */
        public Builder casId(com.aliyun.ros.cdk.core.IResolvable casId) {
            this.casId = casId;
            return this;
        }

        /**
         * Sets the value of {@link CertificateProps#getCertId}
         * @param certId Property certId: The certificate Id.
         * @return {@code this}
         */
        public Builder certId(java.lang.String certId) {
            this.certId = certId;
            return this;
        }

        /**
         * Sets the value of {@link CertificateProps#getCertId}
         * @param certId Property certId: The certificate Id.
         * @return {@code this}
         */
        public Builder certId(com.aliyun.ros.cdk.core.IResolvable certId) {
            this.certId = certId;
            return this;
        }

        /**
         * Sets the value of {@link CertificateProps#getCertificate}
         * @param certificate Property certificate: Certificate content.
         * @return {@code this}
         */
        public Builder certificate(java.lang.String certificate) {
            this.certificate = certificate;
            return this;
        }

        /**
         * Sets the value of {@link CertificateProps#getCertificate}
         * @param certificate Property certificate: Certificate content.
         * @return {@code this}
         */
        public Builder certificate(com.aliyun.ros.cdk.core.IResolvable certificate) {
            this.certificate = certificate;
            return this;
        }

        /**
         * Sets the value of {@link CertificateProps#getCertName}
         * @param certName Property certName: The certificate name.
         * @return {@code this}
         */
        public Builder certName(java.lang.String certName) {
            this.certName = certName;
            return this;
        }

        /**
         * Sets the value of {@link CertificateProps#getCertName}
         * @param certName Property certName: The certificate name.
         * @return {@code this}
         */
        public Builder certName(com.aliyun.ros.cdk.core.IResolvable certName) {
            this.certName = certName;
            return this;
        }

        /**
         * Sets the value of {@link CertificateProps#getPrivateKey}
         * @param privateKey Property privateKey: The certificate private key.
         * @return {@code this}
         */
        public Builder privateKey(java.lang.String privateKey) {
            this.privateKey = privateKey;
            return this;
        }

        /**
         * Sets the value of {@link CertificateProps#getPrivateKey}
         * @param privateKey Property privateKey: The certificate private key.
         * @return {@code this}
         */
        public Builder privateKey(com.aliyun.ros.cdk.core.IResolvable privateKey) {
            this.privateKey = privateKey;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link CertificateProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public CertificateProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link CertificateProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements CertificateProps {
        private final java.lang.Object createdType;
        private final java.lang.Object domains;
        private final java.lang.Object siteId;
        private final java.lang.Object casId;
        private final java.lang.Object certId;
        private final java.lang.Object certificate;
        private final java.lang.Object certName;
        private final java.lang.Object privateKey;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.createdType = software.amazon.jsii.Kernel.get(this, "createdType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.domains = software.amazon.jsii.Kernel.get(this, "domains", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.siteId = software.amazon.jsii.Kernel.get(this, "siteId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.casId = software.amazon.jsii.Kernel.get(this, "casId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.certId = software.amazon.jsii.Kernel.get(this, "certId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.certificate = software.amazon.jsii.Kernel.get(this, "certificate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.certName = software.amazon.jsii.Kernel.get(this, "certName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.privateKey = software.amazon.jsii.Kernel.get(this, "privateKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.createdType = java.util.Objects.requireNonNull(builder.createdType, "createdType is required");
            this.domains = java.util.Objects.requireNonNull(builder.domains, "domains is required");
            this.siteId = java.util.Objects.requireNonNull(builder.siteId, "siteId is required");
            this.casId = builder.casId;
            this.certId = builder.certId;
            this.certificate = builder.certificate;
            this.certName = builder.certName;
            this.privateKey = builder.privateKey;
        }

        @Override
        public final java.lang.Object getCreatedType() {
            return this.createdType;
        }

        @Override
        public final java.lang.Object getDomains() {
            return this.domains;
        }

        @Override
        public final java.lang.Object getSiteId() {
            return this.siteId;
        }

        @Override
        public final java.lang.Object getCasId() {
            return this.casId;
        }

        @Override
        public final java.lang.Object getCertId() {
            return this.certId;
        }

        @Override
        public final java.lang.Object getCertificate() {
            return this.certificate;
        }

        @Override
        public final java.lang.Object getCertName() {
            return this.certName;
        }

        @Override
        public final java.lang.Object getPrivateKey() {
            return this.privateKey;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("createdType", om.valueToTree(this.getCreatedType()));
            data.set("domains", om.valueToTree(this.getDomains()));
            data.set("siteId", om.valueToTree(this.getSiteId()));
            if (this.getCasId() != null) {
                data.set("casId", om.valueToTree(this.getCasId()));
            }
            if (this.getCertId() != null) {
                data.set("certId", om.valueToTree(this.getCertId()));
            }
            if (this.getCertificate() != null) {
                data.set("certificate", om.valueToTree(this.getCertificate()));
            }
            if (this.getCertName() != null) {
                data.set("certName", om.valueToTree(this.getCertName()));
            }
            if (this.getPrivateKey() != null) {
                data.set("privateKey", om.valueToTree(this.getPrivateKey()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-esa.CertificateProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            CertificateProps.Jsii$Proxy that = (CertificateProps.Jsii$Proxy) o;

            if (!createdType.equals(that.createdType)) return false;
            if (!domains.equals(that.domains)) return false;
            if (!siteId.equals(that.siteId)) return false;
            if (this.casId != null ? !this.casId.equals(that.casId) : that.casId != null) return false;
            if (this.certId != null ? !this.certId.equals(that.certId) : that.certId != null) return false;
            if (this.certificate != null ? !this.certificate.equals(that.certificate) : that.certificate != null) return false;
            if (this.certName != null ? !this.certName.equals(that.certName) : that.certName != null) return false;
            return this.privateKey != null ? this.privateKey.equals(that.privateKey) : that.privateKey == null;
        }

        @Override
        public final int hashCode() {
            int result = this.createdType.hashCode();
            result = 31 * result + (this.domains.hashCode());
            result = 31 * result + (this.siteId.hashCode());
            result = 31 * result + (this.casId != null ? this.casId.hashCode() : 0);
            result = 31 * result + (this.certId != null ? this.certId.hashCode() : 0);
            result = 31 * result + (this.certificate != null ? this.certificate.hashCode() : 0);
            result = 31 * result + (this.certName != null ? this.certName.hashCode() : 0);
            result = 31 * result + (this.privateKey != null ? this.privateKey.hashCode() : 0);
            return result;
        }
    }
}
