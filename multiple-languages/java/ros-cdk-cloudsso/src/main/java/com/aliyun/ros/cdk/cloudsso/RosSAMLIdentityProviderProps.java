package com.aliyun.ros.cdk.cloudsso;

/**
 * Properties for defining a <code>RosSAMLIdentityProvider</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-samlidentityprovider
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:44.745Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudsso.$Module.class, fqn = "@alicloud/ros-cdk-cloudsso.RosSAMLIdentityProviderProps")
@software.amazon.jsii.Jsii.Proxy(RosSAMLIdentityProviderProps.Jsii$Proxy.class)
public interface RosSAMLIdentityProviderProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDirectoryId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEncodedMetadataDocument() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEntityId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLoginUrl() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSsoStatus() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getWantRequestSigned() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getX509Certificate() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosSAMLIdentityProviderProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosSAMLIdentityProviderProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosSAMLIdentityProviderProps> {
        java.lang.Object directoryId;
        java.lang.Object encodedMetadataDocument;
        java.lang.Object entityId;
        java.lang.Object loginUrl;
        java.lang.Object ssoStatus;
        java.lang.Object wantRequestSigned;
        java.lang.Object x509Certificate;

        /**
         * Sets the value of {@link RosSAMLIdentityProviderProps#getDirectoryId}
         * @param directoryId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder directoryId(java.lang.String directoryId) {
            this.directoryId = directoryId;
            return this;
        }

        /**
         * Sets the value of {@link RosSAMLIdentityProviderProps#getDirectoryId}
         * @param directoryId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder directoryId(com.aliyun.ros.cdk.core.IResolvable directoryId) {
            this.directoryId = directoryId;
            return this;
        }

        /**
         * Sets the value of {@link RosSAMLIdentityProviderProps#getEncodedMetadataDocument}
         * @param encodedMetadataDocument the value to be set.
         * @return {@code this}
         */
        public Builder encodedMetadataDocument(java.lang.String encodedMetadataDocument) {
            this.encodedMetadataDocument = encodedMetadataDocument;
            return this;
        }

        /**
         * Sets the value of {@link RosSAMLIdentityProviderProps#getEncodedMetadataDocument}
         * @param encodedMetadataDocument the value to be set.
         * @return {@code this}
         */
        public Builder encodedMetadataDocument(com.aliyun.ros.cdk.core.IResolvable encodedMetadataDocument) {
            this.encodedMetadataDocument = encodedMetadataDocument;
            return this;
        }

        /**
         * Sets the value of {@link RosSAMLIdentityProviderProps#getEntityId}
         * @param entityId the value to be set.
         * @return {@code this}
         */
        public Builder entityId(java.lang.String entityId) {
            this.entityId = entityId;
            return this;
        }

        /**
         * Sets the value of {@link RosSAMLIdentityProviderProps#getEntityId}
         * @param entityId the value to be set.
         * @return {@code this}
         */
        public Builder entityId(com.aliyun.ros.cdk.core.IResolvable entityId) {
            this.entityId = entityId;
            return this;
        }

        /**
         * Sets the value of {@link RosSAMLIdentityProviderProps#getLoginUrl}
         * @param loginUrl the value to be set.
         * @return {@code this}
         */
        public Builder loginUrl(java.lang.String loginUrl) {
            this.loginUrl = loginUrl;
            return this;
        }

        /**
         * Sets the value of {@link RosSAMLIdentityProviderProps#getLoginUrl}
         * @param loginUrl the value to be set.
         * @return {@code this}
         */
        public Builder loginUrl(com.aliyun.ros.cdk.core.IResolvable loginUrl) {
            this.loginUrl = loginUrl;
            return this;
        }

        /**
         * Sets the value of {@link RosSAMLIdentityProviderProps#getSsoStatus}
         * @param ssoStatus the value to be set.
         * @return {@code this}
         */
        public Builder ssoStatus(java.lang.String ssoStatus) {
            this.ssoStatus = ssoStatus;
            return this;
        }

        /**
         * Sets the value of {@link RosSAMLIdentityProviderProps#getSsoStatus}
         * @param ssoStatus the value to be set.
         * @return {@code this}
         */
        public Builder ssoStatus(com.aliyun.ros.cdk.core.IResolvable ssoStatus) {
            this.ssoStatus = ssoStatus;
            return this;
        }

        /**
         * Sets the value of {@link RosSAMLIdentityProviderProps#getWantRequestSigned}
         * @param wantRequestSigned the value to be set.
         * @return {@code this}
         */
        public Builder wantRequestSigned(java.lang.Boolean wantRequestSigned) {
            this.wantRequestSigned = wantRequestSigned;
            return this;
        }

        /**
         * Sets the value of {@link RosSAMLIdentityProviderProps#getWantRequestSigned}
         * @param wantRequestSigned the value to be set.
         * @return {@code this}
         */
        public Builder wantRequestSigned(com.aliyun.ros.cdk.core.IResolvable wantRequestSigned) {
            this.wantRequestSigned = wantRequestSigned;
            return this;
        }

        /**
         * Sets the value of {@link RosSAMLIdentityProviderProps#getX509Certificate}
         * @param x509Certificate the value to be set.
         * @return {@code this}
         */
        public Builder x509Certificate(java.lang.String x509Certificate) {
            this.x509Certificate = x509Certificate;
            return this;
        }

        /**
         * Sets the value of {@link RosSAMLIdentityProviderProps#getX509Certificate}
         * @param x509Certificate the value to be set.
         * @return {@code this}
         */
        public Builder x509Certificate(com.aliyun.ros.cdk.core.IResolvable x509Certificate) {
            this.x509Certificate = x509Certificate;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosSAMLIdentityProviderProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosSAMLIdentityProviderProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosSAMLIdentityProviderProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosSAMLIdentityProviderProps {
        private final java.lang.Object directoryId;
        private final java.lang.Object encodedMetadataDocument;
        private final java.lang.Object entityId;
        private final java.lang.Object loginUrl;
        private final java.lang.Object ssoStatus;
        private final java.lang.Object wantRequestSigned;
        private final java.lang.Object x509Certificate;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.directoryId = software.amazon.jsii.Kernel.get(this, "directoryId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.encodedMetadataDocument = software.amazon.jsii.Kernel.get(this, "encodedMetadataDocument", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.entityId = software.amazon.jsii.Kernel.get(this, "entityId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.loginUrl = software.amazon.jsii.Kernel.get(this, "loginUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ssoStatus = software.amazon.jsii.Kernel.get(this, "ssoStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.wantRequestSigned = software.amazon.jsii.Kernel.get(this, "wantRequestSigned", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.x509Certificate = software.amazon.jsii.Kernel.get(this, "x509Certificate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.directoryId = java.util.Objects.requireNonNull(builder.directoryId, "directoryId is required");
            this.encodedMetadataDocument = builder.encodedMetadataDocument;
            this.entityId = builder.entityId;
            this.loginUrl = builder.loginUrl;
            this.ssoStatus = builder.ssoStatus;
            this.wantRequestSigned = builder.wantRequestSigned;
            this.x509Certificate = builder.x509Certificate;
        }

        @Override
        public final java.lang.Object getDirectoryId() {
            return this.directoryId;
        }

        @Override
        public final java.lang.Object getEncodedMetadataDocument() {
            return this.encodedMetadataDocument;
        }

        @Override
        public final java.lang.Object getEntityId() {
            return this.entityId;
        }

        @Override
        public final java.lang.Object getLoginUrl() {
            return this.loginUrl;
        }

        @Override
        public final java.lang.Object getSsoStatus() {
            return this.ssoStatus;
        }

        @Override
        public final java.lang.Object getWantRequestSigned() {
            return this.wantRequestSigned;
        }

        @Override
        public final java.lang.Object getX509Certificate() {
            return this.x509Certificate;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("directoryId", om.valueToTree(this.getDirectoryId()));
            if (this.getEncodedMetadataDocument() != null) {
                data.set("encodedMetadataDocument", om.valueToTree(this.getEncodedMetadataDocument()));
            }
            if (this.getEntityId() != null) {
                data.set("entityId", om.valueToTree(this.getEntityId()));
            }
            if (this.getLoginUrl() != null) {
                data.set("loginUrl", om.valueToTree(this.getLoginUrl()));
            }
            if (this.getSsoStatus() != null) {
                data.set("ssoStatus", om.valueToTree(this.getSsoStatus()));
            }
            if (this.getWantRequestSigned() != null) {
                data.set("wantRequestSigned", om.valueToTree(this.getWantRequestSigned()));
            }
            if (this.getX509Certificate() != null) {
                data.set("x509Certificate", om.valueToTree(this.getX509Certificate()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cloudsso.RosSAMLIdentityProviderProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosSAMLIdentityProviderProps.Jsii$Proxy that = (RosSAMLIdentityProviderProps.Jsii$Proxy) o;

            if (!directoryId.equals(that.directoryId)) return false;
            if (this.encodedMetadataDocument != null ? !this.encodedMetadataDocument.equals(that.encodedMetadataDocument) : that.encodedMetadataDocument != null) return false;
            if (this.entityId != null ? !this.entityId.equals(that.entityId) : that.entityId != null) return false;
            if (this.loginUrl != null ? !this.loginUrl.equals(that.loginUrl) : that.loginUrl != null) return false;
            if (this.ssoStatus != null ? !this.ssoStatus.equals(that.ssoStatus) : that.ssoStatus != null) return false;
            if (this.wantRequestSigned != null ? !this.wantRequestSigned.equals(that.wantRequestSigned) : that.wantRequestSigned != null) return false;
            return this.x509Certificate != null ? this.x509Certificate.equals(that.x509Certificate) : that.x509Certificate == null;
        }

        @Override
        public final int hashCode() {
            int result = this.directoryId.hashCode();
            result = 31 * result + (this.encodedMetadataDocument != null ? this.encodedMetadataDocument.hashCode() : 0);
            result = 31 * result + (this.entityId != null ? this.entityId.hashCode() : 0);
            result = 31 * result + (this.loginUrl != null ? this.loginUrl.hashCode() : 0);
            result = 31 * result + (this.ssoStatus != null ? this.ssoStatus.hashCode() : 0);
            result = 31 * result + (this.wantRequestSigned != null ? this.wantRequestSigned.hashCode() : 0);
            result = 31 * result + (this.x509Certificate != null ? this.x509Certificate.hashCode() : 0);
            return result;
        }
    }
}
