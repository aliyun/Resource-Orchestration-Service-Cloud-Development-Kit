package com.aliyun.ros.cdk.esa;

/**
 * Properties for defining a <code>OriginCaCertificate</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-origincacertificate
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:26.106Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.OriginCaCertificateProps")
@software.amazon.jsii.Jsii.Proxy(OriginCaCertificateProps.Jsii$Proxy.class)
public interface OriginCaCertificateProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property certificate: Certificate content.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCertificate();

    /**
     * Property siteId: The website ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSiteId();

    /**
     * Property name: The certificate name.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
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
     * @return a {@link Builder} of {@link OriginCaCertificateProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link OriginCaCertificateProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<OriginCaCertificateProps> {
        java.lang.Object certificate;
        java.lang.Object siteId;
        java.lang.Object name;
        java.lang.Object validityDays;

        /**
         * Sets the value of {@link OriginCaCertificateProps#getCertificate}
         * @param certificate Property certificate: Certificate content. This parameter is required.
         * @return {@code this}
         */
        public Builder certificate(java.lang.String certificate) {
            this.certificate = certificate;
            return this;
        }

        /**
         * Sets the value of {@link OriginCaCertificateProps#getCertificate}
         * @param certificate Property certificate: Certificate content. This parameter is required.
         * @return {@code this}
         */
        public Builder certificate(com.aliyun.ros.cdk.core.IResolvable certificate) {
            this.certificate = certificate;
            return this;
        }

        /**
         * Sets the value of {@link OriginCaCertificateProps#getSiteId}
         * @param siteId Property siteId: The website ID. This parameter is required.
         * @return {@code this}
         */
        public Builder siteId(java.lang.Number siteId) {
            this.siteId = siteId;
            return this;
        }

        /**
         * Sets the value of {@link OriginCaCertificateProps#getSiteId}
         * @param siteId Property siteId: The website ID. This parameter is required.
         * @return {@code this}
         */
        public Builder siteId(com.aliyun.ros.cdk.core.IResolvable siteId) {
            this.siteId = siteId;
            return this;
        }

        /**
         * Sets the value of {@link OriginCaCertificateProps#getName}
         * @param name Property name: The certificate name.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link OriginCaCertificateProps#getName}
         * @param name Property name: The certificate name.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link OriginCaCertificateProps#getValidityDays}
         * @param validityDays Property validityDays: The validity period of the certificate.
         *                     Unit: day.
         * @return {@code this}
         */
        public Builder validityDays(java.lang.Number validityDays) {
            this.validityDays = validityDays;
            return this;
        }

        /**
         * Sets the value of {@link OriginCaCertificateProps#getValidityDays}
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
         * @return a new instance of {@link OriginCaCertificateProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public OriginCaCertificateProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link OriginCaCertificateProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements OriginCaCertificateProps {
        private final java.lang.Object certificate;
        private final java.lang.Object siteId;
        private final java.lang.Object name;
        private final java.lang.Object validityDays;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.certificate = software.amazon.jsii.Kernel.get(this, "certificate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.siteId = software.amazon.jsii.Kernel.get(this, "siteId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.validityDays = software.amazon.jsii.Kernel.get(this, "validityDays", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.certificate = java.util.Objects.requireNonNull(builder.certificate, "certificate is required");
            this.siteId = java.util.Objects.requireNonNull(builder.siteId, "siteId is required");
            this.name = builder.name;
            this.validityDays = builder.validityDays;
        }

        @Override
        public final java.lang.Object getCertificate() {
            return this.certificate;
        }

        @Override
        public final java.lang.Object getSiteId() {
            return this.siteId;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
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
            data.set("siteId", om.valueToTree(this.getSiteId()));
            if (this.getName() != null) {
                data.set("name", om.valueToTree(this.getName()));
            }
            if (this.getValidityDays() != null) {
                data.set("validityDays", om.valueToTree(this.getValidityDays()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-esa.OriginCaCertificateProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            OriginCaCertificateProps.Jsii$Proxy that = (OriginCaCertificateProps.Jsii$Proxy) o;

            if (!certificate.equals(that.certificate)) return false;
            if (!siteId.equals(that.siteId)) return false;
            if (this.name != null ? !this.name.equals(that.name) : that.name != null) return false;
            return this.validityDays != null ? this.validityDays.equals(that.validityDays) : that.validityDays == null;
        }

        @Override
        public final int hashCode() {
            int result = this.certificate.hashCode();
            result = 31 * result + (this.siteId.hashCode());
            result = 31 * result + (this.name != null ? this.name.hashCode() : 0);
            result = 31 * result + (this.validityDays != null ? this.validityDays.hashCode() : 0);
            return result;
        }
    }
}
