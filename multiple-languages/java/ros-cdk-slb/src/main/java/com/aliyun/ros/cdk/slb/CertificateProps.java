package com.aliyun.ros.cdk.slb;

/**
 * Properties for defining a <code>ALIYUN::SLB::Certificate</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-25T10:01:47.641Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.slb.$Module.class, fqn = "@alicloud/ros-cdk-slb.CertificateProps")
@software.amazon.jsii.Jsii.Proxy(CertificateProps.Jsii$Proxy.class)
public interface CertificateProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property aliCloudCertificateId: The ID of the Alibaba Cloud certificate.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAliCloudCertificateId() {
        return null;
    }

    /**
     * Property aliCloudCertificateName: The name of the Alibaba Cloud certificate.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAliCloudCertificateName() {
        return null;
    }

    /**
     * Property certificate: The content of the certificate public key.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCertificate() {
        return null;
    }

    /**
     * Property certificateName: The name of the certificate.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCertificateName() {
        return null;
    }

    /**
     * Property certificateType: The type of the certificate.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCertificateType() {
        return null;
    }

    /**
     * Property privateKey: The private key.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPrivateKey() {
        return null;
    }

    /**
     * Property resourceGroupId: Resource group id.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property tags: Tags to attach to instance.
     * <p>
     * Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.slb.RosCertificate.TagsProperty> getTags() {
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
        java.lang.Object aliCloudCertificateId;
        java.lang.Object aliCloudCertificateName;
        java.lang.Object certificate;
        java.lang.Object certificateName;
        java.lang.Object certificateType;
        java.lang.Object privateKey;
        java.lang.Object resourceGroupId;
        java.util.List<com.aliyun.ros.cdk.slb.RosCertificate.TagsProperty> tags;

        /**
         * Sets the value of {@link CertificateProps#getAliCloudCertificateId}
         * @param aliCloudCertificateId Property aliCloudCertificateId: The ID of the Alibaba Cloud certificate.
         * @return {@code this}
         */
        public Builder aliCloudCertificateId(java.lang.String aliCloudCertificateId) {
            this.aliCloudCertificateId = aliCloudCertificateId;
            return this;
        }

        /**
         * Sets the value of {@link CertificateProps#getAliCloudCertificateId}
         * @param aliCloudCertificateId Property aliCloudCertificateId: The ID of the Alibaba Cloud certificate.
         * @return {@code this}
         */
        public Builder aliCloudCertificateId(com.aliyun.ros.cdk.core.IResolvable aliCloudCertificateId) {
            this.aliCloudCertificateId = aliCloudCertificateId;
            return this;
        }

        /**
         * Sets the value of {@link CertificateProps#getAliCloudCertificateName}
         * @param aliCloudCertificateName Property aliCloudCertificateName: The name of the Alibaba Cloud certificate.
         * @return {@code this}
         */
        public Builder aliCloudCertificateName(java.lang.String aliCloudCertificateName) {
            this.aliCloudCertificateName = aliCloudCertificateName;
            return this;
        }

        /**
         * Sets the value of {@link CertificateProps#getAliCloudCertificateName}
         * @param aliCloudCertificateName Property aliCloudCertificateName: The name of the Alibaba Cloud certificate.
         * @return {@code this}
         */
        public Builder aliCloudCertificateName(com.aliyun.ros.cdk.core.IResolvable aliCloudCertificateName) {
            this.aliCloudCertificateName = aliCloudCertificateName;
            return this;
        }

        /**
         * Sets the value of {@link CertificateProps#getCertificate}
         * @param certificate Property certificate: The content of the certificate public key.
         * @return {@code this}
         */
        public Builder certificate(java.lang.String certificate) {
            this.certificate = certificate;
            return this;
        }

        /**
         * Sets the value of {@link CertificateProps#getCertificate}
         * @param certificate Property certificate: The content of the certificate public key.
         * @return {@code this}
         */
        public Builder certificate(com.aliyun.ros.cdk.core.IResolvable certificate) {
            this.certificate = certificate;
            return this;
        }

        /**
         * Sets the value of {@link CertificateProps#getCertificateName}
         * @param certificateName Property certificateName: The name of the certificate.
         * @return {@code this}
         */
        public Builder certificateName(java.lang.String certificateName) {
            this.certificateName = certificateName;
            return this;
        }

        /**
         * Sets the value of {@link CertificateProps#getCertificateName}
         * @param certificateName Property certificateName: The name of the certificate.
         * @return {@code this}
         */
        public Builder certificateName(com.aliyun.ros.cdk.core.IResolvable certificateName) {
            this.certificateName = certificateName;
            return this;
        }

        /**
         * Sets the value of {@link CertificateProps#getCertificateType}
         * @param certificateType Property certificateType: The type of the certificate.
         * @return {@code this}
         */
        public Builder certificateType(java.lang.String certificateType) {
            this.certificateType = certificateType;
            return this;
        }

        /**
         * Sets the value of {@link CertificateProps#getCertificateType}
         * @param certificateType Property certificateType: The type of the certificate.
         * @return {@code this}
         */
        public Builder certificateType(com.aliyun.ros.cdk.core.IResolvable certificateType) {
            this.certificateType = certificateType;
            return this;
        }

        /**
         * Sets the value of {@link CertificateProps#getPrivateKey}
         * @param privateKey Property privateKey: The private key.
         * @return {@code this}
         */
        public Builder privateKey(java.lang.String privateKey) {
            this.privateKey = privateKey;
            return this;
        }

        /**
         * Sets the value of {@link CertificateProps#getPrivateKey}
         * @param privateKey Property privateKey: The private key.
         * @return {@code this}
         */
        public Builder privateKey(com.aliyun.ros.cdk.core.IResolvable privateKey) {
            this.privateKey = privateKey;
            return this;
        }

        /**
         * Sets the value of {@link CertificateProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: Resource group id.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link CertificateProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: Resource group id.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link CertificateProps#getTags}
         * @param tags Property tags: Tags to attach to instance.
         *             Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.slb.RosCertificate.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.slb.RosCertificate.TagsProperty>)tags;
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
        private final java.lang.Object aliCloudCertificateId;
        private final java.lang.Object aliCloudCertificateName;
        private final java.lang.Object certificate;
        private final java.lang.Object certificateName;
        private final java.lang.Object certificateType;
        private final java.lang.Object privateKey;
        private final java.lang.Object resourceGroupId;
        private final java.util.List<com.aliyun.ros.cdk.slb.RosCertificate.TagsProperty> tags;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.aliCloudCertificateId = software.amazon.jsii.Kernel.get(this, "aliCloudCertificateId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.aliCloudCertificateName = software.amazon.jsii.Kernel.get(this, "aliCloudCertificateName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.certificate = software.amazon.jsii.Kernel.get(this, "certificate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.certificateName = software.amazon.jsii.Kernel.get(this, "certificateName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.certificateType = software.amazon.jsii.Kernel.get(this, "certificateType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.privateKey = software.amazon.jsii.Kernel.get(this, "privateKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.slb.RosCertificate.TagsProperty.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.aliCloudCertificateId = builder.aliCloudCertificateId;
            this.aliCloudCertificateName = builder.aliCloudCertificateName;
            this.certificate = builder.certificate;
            this.certificateName = builder.certificateName;
            this.certificateType = builder.certificateType;
            this.privateKey = builder.privateKey;
            this.resourceGroupId = builder.resourceGroupId;
            this.tags = (java.util.List<com.aliyun.ros.cdk.slb.RosCertificate.TagsProperty>)builder.tags;
        }

        @Override
        public final java.lang.Object getAliCloudCertificateId() {
            return this.aliCloudCertificateId;
        }

        @Override
        public final java.lang.Object getAliCloudCertificateName() {
            return this.aliCloudCertificateName;
        }

        @Override
        public final java.lang.Object getCertificate() {
            return this.certificate;
        }

        @Override
        public final java.lang.Object getCertificateName() {
            return this.certificateName;
        }

        @Override
        public final java.lang.Object getCertificateType() {
            return this.certificateType;
        }

        @Override
        public final java.lang.Object getPrivateKey() {
            return this.privateKey;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.slb.RosCertificate.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getAliCloudCertificateId() != null) {
                data.set("aliCloudCertificateId", om.valueToTree(this.getAliCloudCertificateId()));
            }
            if (this.getAliCloudCertificateName() != null) {
                data.set("aliCloudCertificateName", om.valueToTree(this.getAliCloudCertificateName()));
            }
            if (this.getCertificate() != null) {
                data.set("certificate", om.valueToTree(this.getCertificate()));
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
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
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

            if (this.aliCloudCertificateId != null ? !this.aliCloudCertificateId.equals(that.aliCloudCertificateId) : that.aliCloudCertificateId != null) return false;
            if (this.aliCloudCertificateName != null ? !this.aliCloudCertificateName.equals(that.aliCloudCertificateName) : that.aliCloudCertificateName != null) return false;
            if (this.certificate != null ? !this.certificate.equals(that.certificate) : that.certificate != null) return false;
            if (this.certificateName != null ? !this.certificateName.equals(that.certificateName) : that.certificateName != null) return false;
            if (this.certificateType != null ? !this.certificateType.equals(that.certificateType) : that.certificateType != null) return false;
            if (this.privateKey != null ? !this.privateKey.equals(that.privateKey) : that.privateKey != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
        }

        @Override
        public final int hashCode() {
            int result = this.aliCloudCertificateId != null ? this.aliCloudCertificateId.hashCode() : 0;
            result = 31 * result + (this.aliCloudCertificateName != null ? this.aliCloudCertificateName.hashCode() : 0);
            result = 31 * result + (this.certificate != null ? this.certificate.hashCode() : 0);
            result = 31 * result + (this.certificateName != null ? this.certificateName.hashCode() : 0);
            result = 31 * result + (this.certificateType != null ? this.certificateType.hashCode() : 0);
            result = 31 * result + (this.privateKey != null ? this.privateKey.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            return result;
        }
    }
}
