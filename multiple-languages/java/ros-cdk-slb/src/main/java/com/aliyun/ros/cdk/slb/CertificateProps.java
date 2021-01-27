package com.aliyun.ros.cdk.slb;

/**
 * Properties for defining a `ALIYUN::SLB::Certificate`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:34.557Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.slb.$Module.class, fqn = "@alicloud/ros-cdk-slb.CertificateProps")
@software.amazon.jsii.Jsii.Proxy(CertificateProps.Jsii$Proxy.class)
public interface CertificateProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getCertificate();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getAliCloudCertificateId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getAliCloudCertificateName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getCertificateName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getCertificateType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getPrivateKey() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getResourceGroupId() {
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
        private java.lang.String certificate;
        private java.lang.String aliCloudCertificateId;
        private java.lang.String aliCloudCertificateName;
        private java.lang.String certificateName;
        private java.lang.String certificateType;
        private java.lang.String privateKey;
        private java.lang.String resourceGroupId;

        /**
         * Sets the value of {@link CertificateProps#getCertificate}
         * @param certificate the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder certificate(java.lang.String certificate) {
            this.certificate = certificate;
            return this;
        }

        /**
         * Sets the value of {@link CertificateProps#getAliCloudCertificateId}
         * @param aliCloudCertificateId the value to be set.
         * @return {@code this}
         */
        public Builder aliCloudCertificateId(java.lang.String aliCloudCertificateId) {
            this.aliCloudCertificateId = aliCloudCertificateId;
            return this;
        }

        /**
         * Sets the value of {@link CertificateProps#getAliCloudCertificateName}
         * @param aliCloudCertificateName the value to be set.
         * @return {@code this}
         */
        public Builder aliCloudCertificateName(java.lang.String aliCloudCertificateName) {
            this.aliCloudCertificateName = aliCloudCertificateName;
            return this;
        }

        /**
         * Sets the value of {@link CertificateProps#getCertificateName}
         * @param certificateName the value to be set.
         * @return {@code this}
         */
        public Builder certificateName(java.lang.String certificateName) {
            this.certificateName = certificateName;
            return this;
        }

        /**
         * Sets the value of {@link CertificateProps#getCertificateType}
         * @param certificateType the value to be set.
         * @return {@code this}
         */
        public Builder certificateType(java.lang.String certificateType) {
            this.certificateType = certificateType;
            return this;
        }

        /**
         * Sets the value of {@link CertificateProps#getPrivateKey}
         * @param privateKey the value to be set.
         * @return {@code this}
         */
        public Builder privateKey(java.lang.String privateKey) {
            this.privateKey = privateKey;
            return this;
        }

        /**
         * Sets the value of {@link CertificateProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link CertificateProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public CertificateProps build() {
            return new Jsii$Proxy(certificate, aliCloudCertificateId, aliCloudCertificateName, certificateName, certificateType, privateKey, resourceGroupId);
        }
    }

    /**
     * An implementation for {@link CertificateProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements CertificateProps {
        private final java.lang.String certificate;
        private final java.lang.String aliCloudCertificateId;
        private final java.lang.String aliCloudCertificateName;
        private final java.lang.String certificateName;
        private final java.lang.String certificateType;
        private final java.lang.String privateKey;
        private final java.lang.String resourceGroupId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.certificate = software.amazon.jsii.Kernel.get(this, "certificate", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.aliCloudCertificateId = software.amazon.jsii.Kernel.get(this, "aliCloudCertificateId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.aliCloudCertificateName = software.amazon.jsii.Kernel.get(this, "aliCloudCertificateName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.certificateName = software.amazon.jsii.Kernel.get(this, "certificateName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.certificateType = software.amazon.jsii.Kernel.get(this, "certificateType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.privateKey = software.amazon.jsii.Kernel.get(this, "privateKey", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String certificate, final java.lang.String aliCloudCertificateId, final java.lang.String aliCloudCertificateName, final java.lang.String certificateName, final java.lang.String certificateType, final java.lang.String privateKey, final java.lang.String resourceGroupId) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.certificate = java.util.Objects.requireNonNull(certificate, "certificate is required");
            this.aliCloudCertificateId = aliCloudCertificateId;
            this.aliCloudCertificateName = aliCloudCertificateName;
            this.certificateName = certificateName;
            this.certificateType = certificateType;
            this.privateKey = privateKey;
            this.resourceGroupId = resourceGroupId;
        }

        @Override
        public final java.lang.String getCertificate() {
            return this.certificate;
        }

        @Override
        public final java.lang.String getAliCloudCertificateId() {
            return this.aliCloudCertificateId;
        }

        @Override
        public final java.lang.String getAliCloudCertificateName() {
            return this.aliCloudCertificateName;
        }

        @Override
        public final java.lang.String getCertificateName() {
            return this.certificateName;
        }

        @Override
        public final java.lang.String getCertificateType() {
            return this.certificateType;
        }

        @Override
        public final java.lang.String getPrivateKey() {
            return this.privateKey;
        }

        @Override
        public final java.lang.String getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("certificate", om.valueToTree(this.getCertificate()));
            if (this.getAliCloudCertificateId() != null) {
                data.set("aliCloudCertificateId", om.valueToTree(this.getAliCloudCertificateId()));
            }
            if (this.getAliCloudCertificateName() != null) {
                data.set("aliCloudCertificateName", om.valueToTree(this.getAliCloudCertificateName()));
            }
            if (this.getCertificateName() != null) {
                data.set("certificateName", om.valueToTree(this.getCertificateName()));
            }
            if (this.getCertificateType() != null) {
                data.set("certificateType", om.valueToTree(this.getCertificateType()));
            }
            if (this.getPrivateKey() != null) {
                data.set("privateKey", om.valueToTree(this.getPrivateKey()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-slb.CertificateProps"));
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

            if (!certificate.equals(that.certificate)) return false;
            if (this.aliCloudCertificateId != null ? !this.aliCloudCertificateId.equals(that.aliCloudCertificateId) : that.aliCloudCertificateId != null) return false;
            if (this.aliCloudCertificateName != null ? !this.aliCloudCertificateName.equals(that.aliCloudCertificateName) : that.aliCloudCertificateName != null) return false;
            if (this.certificateName != null ? !this.certificateName.equals(that.certificateName) : that.certificateName != null) return false;
            if (this.certificateType != null ? !this.certificateType.equals(that.certificateType) : that.certificateType != null) return false;
            if (this.privateKey != null ? !this.privateKey.equals(that.privateKey) : that.privateKey != null) return false;
            return this.resourceGroupId != null ? this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.certificate.hashCode();
            result = 31 * result + (this.aliCloudCertificateId != null ? this.aliCloudCertificateId.hashCode() : 0);
            result = 31 * result + (this.aliCloudCertificateName != null ? this.aliCloudCertificateName.hashCode() : 0);
            result = 31 * result + (this.certificateName != null ? this.certificateName.hashCode() : 0);
            result = 31 * result + (this.certificateType != null ? this.certificateType.hashCode() : 0);
            result = 31 * result + (this.privateKey != null ? this.privateKey.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            return result;
        }
    }
}
