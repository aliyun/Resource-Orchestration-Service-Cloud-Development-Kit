package com.aliyun.ros.cdk.alb;

/**
 * Properties for defining a <code>AdditionalCertificateAssociation</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-additionalcertificateassociation
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:43.221Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.AdditionalCertificateAssociationProps")
@software.amazon.jsii.Jsii.Proxy(AdditionalCertificateAssociationProps.Jsii$Proxy.class)
public interface AdditionalCertificateAssociationProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property certificates: The list of the additional certificates.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCertificates();

    /**
     * Property listenerId: The ID of the listener.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getListenerId();

    /**
     * @return a {@link Builder} of {@link AdditionalCertificateAssociationProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link AdditionalCertificateAssociationProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<AdditionalCertificateAssociationProps> {
        java.lang.Object certificates;
        java.lang.Object listenerId;

        /**
         * Sets the value of {@link AdditionalCertificateAssociationProps#getCertificates}
         * @param certificates Property certificates: The list of the additional certificates. This parameter is required.
         * @return {@code this}
         */
        public Builder certificates(com.aliyun.ros.cdk.core.IResolvable certificates) {
            this.certificates = certificates;
            return this;
        }

        /**
         * Sets the value of {@link AdditionalCertificateAssociationProps#getCertificates}
         * @param certificates Property certificates: The list of the additional certificates. This parameter is required.
         * @return {@code this}
         */
        public Builder certificates(java.util.List<? extends java.lang.Object> certificates) {
            this.certificates = certificates;
            return this;
        }

        /**
         * Sets the value of {@link AdditionalCertificateAssociationProps#getListenerId}
         * @param listenerId Property listenerId: The ID of the listener. This parameter is required.
         * @return {@code this}
         */
        public Builder listenerId(java.lang.String listenerId) {
            this.listenerId = listenerId;
            return this;
        }

        /**
         * Sets the value of {@link AdditionalCertificateAssociationProps#getListenerId}
         * @param listenerId Property listenerId: The ID of the listener. This parameter is required.
         * @return {@code this}
         */
        public Builder listenerId(com.aliyun.ros.cdk.core.IResolvable listenerId) {
            this.listenerId = listenerId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link AdditionalCertificateAssociationProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public AdditionalCertificateAssociationProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link AdditionalCertificateAssociationProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AdditionalCertificateAssociationProps {
        private final java.lang.Object certificates;
        private final java.lang.Object listenerId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.certificates = software.amazon.jsii.Kernel.get(this, "certificates", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.listenerId = software.amazon.jsii.Kernel.get(this, "listenerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.certificates = java.util.Objects.requireNonNull(builder.certificates, "certificates is required");
            this.listenerId = java.util.Objects.requireNonNull(builder.listenerId, "listenerId is required");
        }

        @Override
        public final java.lang.Object getCertificates() {
            return this.certificates;
        }

        @Override
        public final java.lang.Object getListenerId() {
            return this.listenerId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("certificates", om.valueToTree(this.getCertificates()));
            data.set("listenerId", om.valueToTree(this.getListenerId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-alb.AdditionalCertificateAssociationProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            AdditionalCertificateAssociationProps.Jsii$Proxy that = (AdditionalCertificateAssociationProps.Jsii$Proxy) o;

            if (!certificates.equals(that.certificates)) return false;
            return this.listenerId.equals(that.listenerId);
        }

        @Override
        public final int hashCode() {
            int result = this.certificates.hashCode();
            result = 31 * result + (this.listenerId.hashCode());
            return result;
        }
    }
}
