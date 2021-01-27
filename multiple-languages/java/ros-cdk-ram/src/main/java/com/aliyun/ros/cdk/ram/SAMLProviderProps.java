package com.aliyun.ros.cdk.ram;

/**
 * Properties for defining a `ALIYUN::RAM::SAMLProvider`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:34.386Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ram.$Module.class, fqn = "@alicloud/ros-cdk-ram.SAMLProviderProps")
@software.amazon.jsii.Jsii.Proxy(SAMLProviderProps.Jsii$Proxy.class)
public interface SAMLProviderProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getSamlProviderName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getSamlMetadataDocument() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getSamlMetadataDocumentUrl() {
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
        private java.lang.String samlProviderName;
        private java.lang.String description;
        private java.lang.String samlMetadataDocument;
        private java.lang.String samlMetadataDocumentUrl;

        /**
         * Sets the value of {@link SAMLProviderProps#getSamlProviderName}
         * @param samlProviderName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder samlProviderName(java.lang.String samlProviderName) {
            this.samlProviderName = samlProviderName;
            return this;
        }

        /**
         * Sets the value of {@link SAMLProviderProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link SAMLProviderProps#getSamlMetadataDocument}
         * @param samlMetadataDocument the value to be set.
         * @return {@code this}
         */
        public Builder samlMetadataDocument(java.lang.String samlMetadataDocument) {
            this.samlMetadataDocument = samlMetadataDocument;
            return this;
        }

        /**
         * Sets the value of {@link SAMLProviderProps#getSamlMetadataDocumentUrl}
         * @param samlMetadataDocumentUrl the value to be set.
         * @return {@code this}
         */
        public Builder samlMetadataDocumentUrl(java.lang.String samlMetadataDocumentUrl) {
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
            return new Jsii$Proxy(samlProviderName, description, samlMetadataDocument, samlMetadataDocumentUrl);
        }
    }

    /**
     * An implementation for {@link SAMLProviderProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SAMLProviderProps {
        private final java.lang.String samlProviderName;
        private final java.lang.String description;
        private final java.lang.String samlMetadataDocument;
        private final java.lang.String samlMetadataDocumentUrl;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.samlProviderName = software.amazon.jsii.Kernel.get(this, "samlProviderName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.samlMetadataDocument = software.amazon.jsii.Kernel.get(this, "samlMetadataDocument", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.samlMetadataDocumentUrl = software.amazon.jsii.Kernel.get(this, "samlMetadataDocumentUrl", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String samlProviderName, final java.lang.String description, final java.lang.String samlMetadataDocument, final java.lang.String samlMetadataDocumentUrl) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.samlProviderName = java.util.Objects.requireNonNull(samlProviderName, "samlProviderName is required");
            this.description = description;
            this.samlMetadataDocument = samlMetadataDocument;
            this.samlMetadataDocumentUrl = samlMetadataDocumentUrl;
        }

        @Override
        public final java.lang.String getSamlProviderName() {
            return this.samlProviderName;
        }

        @Override
        public final java.lang.String getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.String getSamlMetadataDocument() {
            return this.samlMetadataDocument;
        }

        @Override
        public final java.lang.String getSamlMetadataDocumentUrl() {
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
