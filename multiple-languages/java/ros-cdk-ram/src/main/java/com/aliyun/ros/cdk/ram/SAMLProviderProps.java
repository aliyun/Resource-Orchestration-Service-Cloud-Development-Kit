package com.aliyun.ros.cdk.ram;

/**
 * Properties for defining a `ALIYUN::RAM::SAMLProvider`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.59.0 (build eb02c92)", date = "2022-06-08T09:23:35.970Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ram.$Module.class, fqn = "@alicloud/ros-cdk-ram.SAMLProviderProps")
@software.amazon.jsii.Jsii.Proxy(SAMLProviderProps.Jsii$Proxy.class)
public interface SAMLProviderProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property samlProviderName: IdP Name.
     * <p>
     * The IdP name can contain a maximum of 128 characters and only letters, numbers, and the following special characters are accepted: hyphens (-), periods (.), and underscores (_). It cannot start or end with a special character.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSamlProviderName();

    /**
     * Property description: The description can contain a maximum of 256 characters.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property samlMetadataDocument: SAML metadata document.
     * <p>
     * The content must be 1 to 102,400 bytes in length.You must specify one of the SAMLMetadataDocument and SAMLMetadataDocumentURL properties, but you cannot specify both of them.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSamlMetadataDocument() {
        return null;
    }

    /**
     * Property samlMetadataDocumentUrl: The URL for the file that contains the SAML metadata document.
     * <p>
     * The URL must point to a document located in an HTTP or HTTPS web server or an Alibaba Cloud OSS bucket. Examples: oss://ros/document/demo and oss://ros/document/demo?RegionId=cn-hangzhou. The URL can be up to 1,024 bytes in length.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSamlMetadataDocumentUrl() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link SAMLProviderProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link SAMLProviderProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<SAMLProviderProps> {
        java.lang.Object samlProviderName;
        java.lang.Object description;
        java.lang.Object samlMetadataDocument;
        java.lang.Object samlMetadataDocumentUrl;

        /**
         * Sets the value of {@link SAMLProviderProps#getSamlProviderName}
         * @param samlProviderName Property samlProviderName: IdP Name. This parameter is required.
         *                         The IdP name can contain a maximum of 128 characters and only letters, numbers, and the following special characters are accepted: hyphens (-), periods (.), and underscores (_). It cannot start or end with a special character.
         * @return {@code this}
         */
        public Builder samlProviderName(java.lang.String samlProviderName) {
            this.samlProviderName = samlProviderName;
            return this;
        }

        /**
         * Sets the value of {@link SAMLProviderProps#getSamlProviderName}
         * @param samlProviderName Property samlProviderName: IdP Name. This parameter is required.
         *                         The IdP name can contain a maximum of 128 characters and only letters, numbers, and the following special characters are accepted: hyphens (-), periods (.), and underscores (_). It cannot start or end with a special character.
         * @return {@code this}
         */
        public Builder samlProviderName(com.aliyun.ros.cdk.core.IResolvable samlProviderName) {
            this.samlProviderName = samlProviderName;
            return this;
        }

        /**
         * Sets the value of {@link SAMLProviderProps#getDescription}
         * @param description Property description: The description can contain a maximum of 256 characters.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link SAMLProviderProps#getDescription}
         * @param description Property description: The description can contain a maximum of 256 characters.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link SAMLProviderProps#getSamlMetadataDocument}
         * @param samlMetadataDocument Property samlMetadataDocument: SAML metadata document.
         *                             The content must be 1 to 102,400 bytes in length.You must specify one of the SAMLMetadataDocument and SAMLMetadataDocumentURL properties, but you cannot specify both of them.
         * @return {@code this}
         */
        public Builder samlMetadataDocument(java.lang.String samlMetadataDocument) {
            this.samlMetadataDocument = samlMetadataDocument;
            return this;
        }

        /**
         * Sets the value of {@link SAMLProviderProps#getSamlMetadataDocument}
         * @param samlMetadataDocument Property samlMetadataDocument: SAML metadata document.
         *                             The content must be 1 to 102,400 bytes in length.You must specify one of the SAMLMetadataDocument and SAMLMetadataDocumentURL properties, but you cannot specify both of them.
         * @return {@code this}
         */
        public Builder samlMetadataDocument(com.aliyun.ros.cdk.core.IResolvable samlMetadataDocument) {
            this.samlMetadataDocument = samlMetadataDocument;
            return this;
        }

        /**
         * Sets the value of {@link SAMLProviderProps#getSamlMetadataDocumentUrl}
         * @param samlMetadataDocumentUrl Property samlMetadataDocumentUrl: The URL for the file that contains the SAML metadata document.
         *                                The URL must point to a document located in an HTTP or HTTPS web server or an Alibaba Cloud OSS bucket. Examples: oss://ros/document/demo and oss://ros/document/demo?RegionId=cn-hangzhou. The URL can be up to 1,024 bytes in length.
         * @return {@code this}
         */
        public Builder samlMetadataDocumentUrl(java.lang.String samlMetadataDocumentUrl) {
            this.samlMetadataDocumentUrl = samlMetadataDocumentUrl;
            return this;
        }

        /**
         * Sets the value of {@link SAMLProviderProps#getSamlMetadataDocumentUrl}
         * @param samlMetadataDocumentUrl Property samlMetadataDocumentUrl: The URL for the file that contains the SAML metadata document.
         *                                The URL must point to a document located in an HTTP or HTTPS web server or an Alibaba Cloud OSS bucket. Examples: oss://ros/document/demo and oss://ros/document/demo?RegionId=cn-hangzhou. The URL can be up to 1,024 bytes in length.
         * @return {@code this}
         */
        public Builder samlMetadataDocumentUrl(com.aliyun.ros.cdk.core.IResolvable samlMetadataDocumentUrl) {
            this.samlMetadataDocumentUrl = samlMetadataDocumentUrl;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link SAMLProviderProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public SAMLProviderProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link SAMLProviderProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SAMLProviderProps {
        private final java.lang.Object samlProviderName;
        private final java.lang.Object description;
        private final java.lang.Object samlMetadataDocument;
        private final java.lang.Object samlMetadataDocumentUrl;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.samlProviderName = software.amazon.jsii.Kernel.get(this, "samlProviderName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.samlMetadataDocument = software.amazon.jsii.Kernel.get(this, "samlMetadataDocument", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.samlMetadataDocumentUrl = software.amazon.jsii.Kernel.get(this, "samlMetadataDocumentUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.samlProviderName = java.util.Objects.requireNonNull(builder.samlProviderName, "samlProviderName is required");
            this.description = builder.description;
            this.samlMetadataDocument = builder.samlMetadataDocument;
            this.samlMetadataDocumentUrl = builder.samlMetadataDocumentUrl;
        }

        @Override
        public final java.lang.Object getSamlProviderName() {
            return this.samlProviderName;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getSamlMetadataDocument() {
            return this.samlMetadataDocument;
        }

        @Override
        public final java.lang.Object getSamlMetadataDocumentUrl() {
            return this.samlMetadataDocumentUrl;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("samlProviderName", om.valueToTree(this.getSamlProviderName()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getSamlMetadataDocument() != null) {
                data.set("samlMetadataDocument", om.valueToTree(this.getSamlMetadataDocument()));
            }
            if (this.getSamlMetadataDocumentUrl() != null) {
                data.set("samlMetadataDocumentUrl", om.valueToTree(this.getSamlMetadataDocumentUrl()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ram.SAMLProviderProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            SAMLProviderProps.Jsii$Proxy that = (SAMLProviderProps.Jsii$Proxy) o;

            if (!samlProviderName.equals(that.samlProviderName)) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.samlMetadataDocument != null ? !this.samlMetadataDocument.equals(that.samlMetadataDocument) : that.samlMetadataDocument != null) return false;
            return this.samlMetadataDocumentUrl != null ? this.samlMetadataDocumentUrl.equals(that.samlMetadataDocumentUrl) : that.samlMetadataDocumentUrl == null;
        }

        @Override
        public final int hashCode() {
            int result = this.samlProviderName.hashCode();
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.samlMetadataDocument != null ? this.samlMetadataDocument.hashCode() : 0);
            result = 31 * result + (this.samlMetadataDocumentUrl != null ? this.samlMetadataDocumentUrl.hashCode() : 0);
            return result;
        }
    }
}
