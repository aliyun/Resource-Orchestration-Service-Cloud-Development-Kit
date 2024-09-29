package com.aliyun.ros.cdk.ram;

/**
 * Properties for defining a <code>RosSAMLProvider</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-samlprovider
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-29T07:52:41.641Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ram.$Module.class, fqn = "@alicloud/ros-cdk-ram.RosSAMLProviderProps")
@software.amazon.jsii.Jsii.Proxy(RosSAMLProviderProps.Jsii$Proxy.class)
public interface RosSAMLProviderProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSamlProviderName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEncodedSamlMetadataDocument() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSamlMetadataDocument() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSamlMetadataDocumentUrl() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosSAMLProviderProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosSAMLProviderProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosSAMLProviderProps> {
        java.lang.Object samlProviderName;
        java.lang.Object description;
        java.lang.Object encodedSamlMetadataDocument;
        java.lang.Object samlMetadataDocument;
        java.lang.Object samlMetadataDocumentUrl;

        /**
         * Sets the value of {@link RosSAMLProviderProps#getSamlProviderName}
         * @param samlProviderName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder samlProviderName(java.lang.String samlProviderName) {
            this.samlProviderName = samlProviderName;
            return this;
        }

        /**
         * Sets the value of {@link RosSAMLProviderProps#getSamlProviderName}
         * @param samlProviderName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder samlProviderName(com.aliyun.ros.cdk.core.IResolvable samlProviderName) {
            this.samlProviderName = samlProviderName;
            return this;
        }

        /**
         * Sets the value of {@link RosSAMLProviderProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosSAMLProviderProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosSAMLProviderProps#getEncodedSamlMetadataDocument}
         * @param encodedSamlMetadataDocument the value to be set.
         * @return {@code this}
         */
        public Builder encodedSamlMetadataDocument(java.lang.String encodedSamlMetadataDocument) {
            this.encodedSamlMetadataDocument = encodedSamlMetadataDocument;
            return this;
        }

        /**
         * Sets the value of {@link RosSAMLProviderProps#getEncodedSamlMetadataDocument}
         * @param encodedSamlMetadataDocument the value to be set.
         * @return {@code this}
         */
        public Builder encodedSamlMetadataDocument(com.aliyun.ros.cdk.core.IResolvable encodedSamlMetadataDocument) {
            this.encodedSamlMetadataDocument = encodedSamlMetadataDocument;
            return this;
        }

        /**
         * Sets the value of {@link RosSAMLProviderProps#getSamlMetadataDocument}
         * @param samlMetadataDocument the value to be set.
         * @return {@code this}
         */
        public Builder samlMetadataDocument(java.lang.String samlMetadataDocument) {
            this.samlMetadataDocument = samlMetadataDocument;
            return this;
        }

        /**
         * Sets the value of {@link RosSAMLProviderProps#getSamlMetadataDocument}
         * @param samlMetadataDocument the value to be set.
         * @return {@code this}
         */
        public Builder samlMetadataDocument(com.aliyun.ros.cdk.core.IResolvable samlMetadataDocument) {
            this.samlMetadataDocument = samlMetadataDocument;
            return this;
        }

        /**
         * Sets the value of {@link RosSAMLProviderProps#getSamlMetadataDocumentUrl}
         * @param samlMetadataDocumentUrl the value to be set.
         * @return {@code this}
         */
        public Builder samlMetadataDocumentUrl(java.lang.String samlMetadataDocumentUrl) {
            this.samlMetadataDocumentUrl = samlMetadataDocumentUrl;
            return this;
        }

        /**
         * Sets the value of {@link RosSAMLProviderProps#getSamlMetadataDocumentUrl}
         * @param samlMetadataDocumentUrl the value to be set.
         * @return {@code this}
         */
        public Builder samlMetadataDocumentUrl(com.aliyun.ros.cdk.core.IResolvable samlMetadataDocumentUrl) {
            this.samlMetadataDocumentUrl = samlMetadataDocumentUrl;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosSAMLProviderProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosSAMLProviderProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosSAMLProviderProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosSAMLProviderProps {
        private final java.lang.Object samlProviderName;
        private final java.lang.Object description;
        private final java.lang.Object encodedSamlMetadataDocument;
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
            this.encodedSamlMetadataDocument = software.amazon.jsii.Kernel.get(this, "encodedSamlMetadataDocument", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
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
            this.encodedSamlMetadataDocument = builder.encodedSamlMetadataDocument;
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
        public final java.lang.Object getEncodedSamlMetadataDocument() {
            return this.encodedSamlMetadataDocument;
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
            if (this.getEncodedSamlMetadataDocument() != null) {
                data.set("encodedSamlMetadataDocument", om.valueToTree(this.getEncodedSamlMetadataDocument()));
            }
            if (this.getSamlMetadataDocument() != null) {
                data.set("samlMetadataDocument", om.valueToTree(this.getSamlMetadataDocument()));
            }
            if (this.getSamlMetadataDocumentUrl() != null) {
                data.set("samlMetadataDocumentUrl", om.valueToTree(this.getSamlMetadataDocumentUrl()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ram.RosSAMLProviderProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosSAMLProviderProps.Jsii$Proxy that = (RosSAMLProviderProps.Jsii$Proxy) o;

            if (!samlProviderName.equals(that.samlProviderName)) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.encodedSamlMetadataDocument != null ? !this.encodedSamlMetadataDocument.equals(that.encodedSamlMetadataDocument) : that.encodedSamlMetadataDocument != null) return false;
            if (this.samlMetadataDocument != null ? !this.samlMetadataDocument.equals(that.samlMetadataDocument) : that.samlMetadataDocument != null) return false;
            return this.samlMetadataDocumentUrl != null ? this.samlMetadataDocumentUrl.equals(that.samlMetadataDocumentUrl) : that.samlMetadataDocumentUrl == null;
        }

        @Override
        public final int hashCode() {
            int result = this.samlProviderName.hashCode();
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.encodedSamlMetadataDocument != null ? this.encodedSamlMetadataDocument.hashCode() : 0);
            result = 31 * result + (this.samlMetadataDocument != null ? this.samlMetadataDocument.hashCode() : 0);
            result = 31 * result + (this.samlMetadataDocumentUrl != null ? this.samlMetadataDocumentUrl.hashCode() : 0);
            return result;
        }
    }
}
