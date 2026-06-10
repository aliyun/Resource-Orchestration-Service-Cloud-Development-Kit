package com.aliyun.ros.cdk.cas;

/**
 * Properties for defining a <code>UserCertificate</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cas-usercertificate
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T10:39:53.109Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cas.$Module.class, fqn = "@alicloud/ros-cdk-cas.UserCertificateProps")
@software.amazon.jsii.Jsii.Proxy(UserCertificateProps.Jsii$Proxy.class)
public interface UserCertificateProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property cert: The certificate content in PEM format.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCert() {
        return null;
    }

    /**
     * Property certificateName: Custom certificate name.
     * <p>
     * Maximum supported character length:128. All character types are supported, including letters, numbers and underscores.
     * The certificate name under the same user cannot be duplicated.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCertificateName() {
        return null;
    }

    /**
     * Property encryptCert: The content of the encryption certificate in PEM format.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEncryptCert() {
        return null;
    }

    /**
     * Property encryptPrivateKey: The private key content of the encryption certificate in PEM format.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEncryptPrivateKey() {
        return null;
    }

    /**
     * Property key: The private key content of the certificate in PEM format.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getKey() {
        return null;
    }

    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property resourceId: Resource ID.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceId() {
        return null;
    }

    /**
     * Property signCert: The signature certificate content in PEM format.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSignCert() {
        return null;
    }

    /**
     * Property signPrivateKey: The private key content of the signature certificate in PEM format.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSignPrivateKey() {
        return null;
    }

    /**
     * Property tags: Tags of certificate.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.cas.RosUserCertificate.TagsProperty> getTags() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link UserCertificateProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link UserCertificateProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<UserCertificateProps> {
        java.lang.Object cert;
        java.lang.Object certificateName;
        java.lang.Object encryptCert;
        java.lang.Object encryptPrivateKey;
        java.lang.Object key;
        java.lang.Object resourceGroupId;
        java.lang.Object resourceId;
        java.lang.Object signCert;
        java.lang.Object signPrivateKey;
        java.util.List<com.aliyun.ros.cdk.cas.RosUserCertificate.TagsProperty> tags;

        /**
         * Sets the value of {@link UserCertificateProps#getCert}
         * @param cert Property cert: The certificate content in PEM format.
         * @return {@code this}
         */
        public Builder cert(java.lang.String cert) {
            this.cert = cert;
            return this;
        }

        /**
         * Sets the value of {@link UserCertificateProps#getCert}
         * @param cert Property cert: The certificate content in PEM format.
         * @return {@code this}
         */
        public Builder cert(com.aliyun.ros.cdk.core.IResolvable cert) {
            this.cert = cert;
            return this;
        }

        /**
         * Sets the value of {@link UserCertificateProps#getCertificateName}
         * @param certificateName Property certificateName: Custom certificate name.
         *                        Maximum supported character length:128. All character types are supported, including letters, numbers and underscores.
         *                        The certificate name under the same user cannot be duplicated.
         * @return {@code this}
         */
        public Builder certificateName(java.lang.String certificateName) {
            this.certificateName = certificateName;
            return this;
        }

        /**
         * Sets the value of {@link UserCertificateProps#getCertificateName}
         * @param certificateName Property certificateName: Custom certificate name.
         *                        Maximum supported character length:128. All character types are supported, including letters, numbers and underscores.
         *                        The certificate name under the same user cannot be duplicated.
         * @return {@code this}
         */
        public Builder certificateName(com.aliyun.ros.cdk.core.IResolvable certificateName) {
            this.certificateName = certificateName;
            return this;
        }

        /**
         * Sets the value of {@link UserCertificateProps#getEncryptCert}
         * @param encryptCert Property encryptCert: The content of the encryption certificate in PEM format.
         * @return {@code this}
         */
        public Builder encryptCert(java.lang.String encryptCert) {
            this.encryptCert = encryptCert;
            return this;
        }

        /**
         * Sets the value of {@link UserCertificateProps#getEncryptCert}
         * @param encryptCert Property encryptCert: The content of the encryption certificate in PEM format.
         * @return {@code this}
         */
        public Builder encryptCert(com.aliyun.ros.cdk.core.IResolvable encryptCert) {
            this.encryptCert = encryptCert;
            return this;
        }

        /**
         * Sets the value of {@link UserCertificateProps#getEncryptPrivateKey}
         * @param encryptPrivateKey Property encryptPrivateKey: The private key content of the encryption certificate in PEM format.
         * @return {@code this}
         */
        public Builder encryptPrivateKey(java.lang.String encryptPrivateKey) {
            this.encryptPrivateKey = encryptPrivateKey;
            return this;
        }

        /**
         * Sets the value of {@link UserCertificateProps#getEncryptPrivateKey}
         * @param encryptPrivateKey Property encryptPrivateKey: The private key content of the encryption certificate in PEM format.
         * @return {@code this}
         */
        public Builder encryptPrivateKey(com.aliyun.ros.cdk.core.IResolvable encryptPrivateKey) {
            this.encryptPrivateKey = encryptPrivateKey;
            return this;
        }

        /**
         * Sets the value of {@link UserCertificateProps#getKey}
         * @param key Property key: The private key content of the certificate in PEM format.
         * @return {@code this}
         */
        public Builder key(java.lang.String key) {
            this.key = key;
            return this;
        }

        /**
         * Sets the value of {@link UserCertificateProps#getKey}
         * @param key Property key: The private key content of the certificate in PEM format.
         * @return {@code this}
         */
        public Builder key(com.aliyun.ros.cdk.core.IResolvable key) {
            this.key = key;
            return this;
        }

        /**
         * Sets the value of {@link UserCertificateProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link UserCertificateProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link UserCertificateProps#getResourceId}
         * @param resourceId Property resourceId: Resource ID.
         * @return {@code this}
         */
        public Builder resourceId(java.lang.String resourceId) {
            this.resourceId = resourceId;
            return this;
        }

        /**
         * Sets the value of {@link UserCertificateProps#getResourceId}
         * @param resourceId Property resourceId: Resource ID.
         * @return {@code this}
         */
        public Builder resourceId(com.aliyun.ros.cdk.core.IResolvable resourceId) {
            this.resourceId = resourceId;
            return this;
        }

        /**
         * Sets the value of {@link UserCertificateProps#getSignCert}
         * @param signCert Property signCert: The signature certificate content in PEM format.
         * @return {@code this}
         */
        public Builder signCert(java.lang.String signCert) {
            this.signCert = signCert;
            return this;
        }

        /**
         * Sets the value of {@link UserCertificateProps#getSignCert}
         * @param signCert Property signCert: The signature certificate content in PEM format.
         * @return {@code this}
         */
        public Builder signCert(com.aliyun.ros.cdk.core.IResolvable signCert) {
            this.signCert = signCert;
            return this;
        }

        /**
         * Sets the value of {@link UserCertificateProps#getSignPrivateKey}
         * @param signPrivateKey Property signPrivateKey: The private key content of the signature certificate in PEM format.
         * @return {@code this}
         */
        public Builder signPrivateKey(java.lang.String signPrivateKey) {
            this.signPrivateKey = signPrivateKey;
            return this;
        }

        /**
         * Sets the value of {@link UserCertificateProps#getSignPrivateKey}
         * @param signPrivateKey Property signPrivateKey: The private key content of the signature certificate in PEM format.
         * @return {@code this}
         */
        public Builder signPrivateKey(com.aliyun.ros.cdk.core.IResolvable signPrivateKey) {
            this.signPrivateKey = signPrivateKey;
            return this;
        }

        /**
         * Sets the value of {@link UserCertificateProps#getTags}
         * @param tags Property tags: Tags of certificate.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.cas.RosUserCertificate.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.cas.RosUserCertificate.TagsProperty>)tags;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link UserCertificateProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public UserCertificateProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link UserCertificateProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements UserCertificateProps {
        private final java.lang.Object cert;
        private final java.lang.Object certificateName;
        private final java.lang.Object encryptCert;
        private final java.lang.Object encryptPrivateKey;
        private final java.lang.Object key;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object resourceId;
        private final java.lang.Object signCert;
        private final java.lang.Object signPrivateKey;
        private final java.util.List<com.aliyun.ros.cdk.cas.RosUserCertificate.TagsProperty> tags;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.cert = software.amazon.jsii.Kernel.get(this, "cert", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.certificateName = software.amazon.jsii.Kernel.get(this, "certificateName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.encryptCert = software.amazon.jsii.Kernel.get(this, "encryptCert", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.encryptPrivateKey = software.amazon.jsii.Kernel.get(this, "encryptPrivateKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.key = software.amazon.jsii.Kernel.get(this, "key", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceId = software.amazon.jsii.Kernel.get(this, "resourceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.signCert = software.amazon.jsii.Kernel.get(this, "signCert", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.signPrivateKey = software.amazon.jsii.Kernel.get(this, "signPrivateKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cas.RosUserCertificate.TagsProperty.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.cert = builder.cert;
            this.certificateName = builder.certificateName;
            this.encryptCert = builder.encryptCert;
            this.encryptPrivateKey = builder.encryptPrivateKey;
            this.key = builder.key;
            this.resourceGroupId = builder.resourceGroupId;
            this.resourceId = builder.resourceId;
            this.signCert = builder.signCert;
            this.signPrivateKey = builder.signPrivateKey;
            this.tags = (java.util.List<com.aliyun.ros.cdk.cas.RosUserCertificate.TagsProperty>)builder.tags;
        }

        @Override
        public final java.lang.Object getCert() {
            return this.cert;
        }

        @Override
        public final java.lang.Object getCertificateName() {
            return this.certificateName;
        }

        @Override
        public final java.lang.Object getEncryptCert() {
            return this.encryptCert;
        }

        @Override
        public final java.lang.Object getEncryptPrivateKey() {
            return this.encryptPrivateKey;
        }

        @Override
        public final java.lang.Object getKey() {
            return this.key;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getResourceId() {
            return this.resourceId;
        }

        @Override
        public final java.lang.Object getSignCert() {
            return this.signCert;
        }

        @Override
        public final java.lang.Object getSignPrivateKey() {
            return this.signPrivateKey;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.cas.RosUserCertificate.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getCert() != null) {
                data.set("cert", om.valueToTree(this.getCert()));
            }
            if (this.getCertificateName() != null) {
                data.set("certificateName", om.valueToTree(this.getCertificateName()));
            }
            if (this.getEncryptCert() != null) {
                data.set("encryptCert", om.valueToTree(this.getEncryptCert()));
            }
            if (this.getEncryptPrivateKey() != null) {
                data.set("encryptPrivateKey", om.valueToTree(this.getEncryptPrivateKey()));
            }
            if (this.getKey() != null) {
                data.set("key", om.valueToTree(this.getKey()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getResourceId() != null) {
                data.set("resourceId", om.valueToTree(this.getResourceId()));
            }
            if (this.getSignCert() != null) {
                data.set("signCert", om.valueToTree(this.getSignCert()));
            }
            if (this.getSignPrivateKey() != null) {
                data.set("signPrivateKey", om.valueToTree(this.getSignPrivateKey()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cas.UserCertificateProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            UserCertificateProps.Jsii$Proxy that = (UserCertificateProps.Jsii$Proxy) o;

            if (this.cert != null ? !this.cert.equals(that.cert) : that.cert != null) return false;
            if (this.certificateName != null ? !this.certificateName.equals(that.certificateName) : that.certificateName != null) return false;
            if (this.encryptCert != null ? !this.encryptCert.equals(that.encryptCert) : that.encryptCert != null) return false;
            if (this.encryptPrivateKey != null ? !this.encryptPrivateKey.equals(that.encryptPrivateKey) : that.encryptPrivateKey != null) return false;
            if (this.key != null ? !this.key.equals(that.key) : that.key != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.resourceId != null ? !this.resourceId.equals(that.resourceId) : that.resourceId != null) return false;
            if (this.signCert != null ? !this.signCert.equals(that.signCert) : that.signCert != null) return false;
            if (this.signPrivateKey != null ? !this.signPrivateKey.equals(that.signPrivateKey) : that.signPrivateKey != null) return false;
            return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
        }

        @Override
        public final int hashCode() {
            int result = this.cert != null ? this.cert.hashCode() : 0;
            result = 31 * result + (this.certificateName != null ? this.certificateName.hashCode() : 0);
            result = 31 * result + (this.encryptCert != null ? this.encryptCert.hashCode() : 0);
            result = 31 * result + (this.encryptPrivateKey != null ? this.encryptPrivateKey.hashCode() : 0);
            result = 31 * result + (this.key != null ? this.key.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.resourceId != null ? this.resourceId.hashCode() : 0);
            result = 31 * result + (this.signCert != null ? this.signCert.hashCode() : 0);
            result = 31 * result + (this.signPrivateKey != null ? this.signPrivateKey.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            return result;
        }
    }
}
