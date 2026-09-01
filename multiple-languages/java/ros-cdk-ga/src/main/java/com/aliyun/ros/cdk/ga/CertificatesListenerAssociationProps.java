package com.aliyun.ros.cdk.ga;

/**
 * Properties for defining a <code>CertificatesListenerAssociation</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-certificateslistenerassociation
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-08-31T09:19:27.760Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ga.$Module.class, fqn = "@alicloud/ros-cdk-ga.CertificatesListenerAssociationProps")
@software.amazon.jsii.Jsii.Proxy(CertificatesListenerAssociationProps.Jsii$Proxy.class)
public interface CertificatesListenerAssociationProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property acceleratorId: The ID of the Global Accelerator instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAcceleratorId();

    /**
     * Property certificates: The additional certificates to associate with the HTTPS listener.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCertificates();

    /**
     * Property listenerId: The ID of the HTTPS listener.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getListenerId();

    /**
     * @return a {@link Builder} of {@link CertificatesListenerAssociationProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link CertificatesListenerAssociationProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<CertificatesListenerAssociationProps> {
        java.lang.Object acceleratorId;
        java.lang.Object certificates;
        java.lang.Object listenerId;

        /**
         * Sets the value of {@link CertificatesListenerAssociationProps#getAcceleratorId}
         * @param acceleratorId Property acceleratorId: The ID of the Global Accelerator instance. This parameter is required.
         * @return {@code this}
         */
        public Builder acceleratorId(java.lang.String acceleratorId) {
            this.acceleratorId = acceleratorId;
            return this;
        }

        /**
         * Sets the value of {@link CertificatesListenerAssociationProps#getAcceleratorId}
         * @param acceleratorId Property acceleratorId: The ID of the Global Accelerator instance. This parameter is required.
         * @return {@code this}
         */
        public Builder acceleratorId(com.aliyun.ros.cdk.core.IResolvable acceleratorId) {
            this.acceleratorId = acceleratorId;
            return this;
        }

        /**
         * Sets the value of {@link CertificatesListenerAssociationProps#getCertificates}
         * @param certificates Property certificates: The additional certificates to associate with the HTTPS listener. This parameter is required.
         * @return {@code this}
         */
        public Builder certificates(com.aliyun.ros.cdk.core.IResolvable certificates) {
            this.certificates = certificates;
            return this;
        }

        /**
         * Sets the value of {@link CertificatesListenerAssociationProps#getCertificates}
         * @param certificates Property certificates: The additional certificates to associate with the HTTPS listener. This parameter is required.
         * @return {@code this}
         */
        public Builder certificates(java.util.List<? extends java.lang.Object> certificates) {
            this.certificates = certificates;
            return this;
        }

        /**
         * Sets the value of {@link CertificatesListenerAssociationProps#getListenerId}
         * @param listenerId Property listenerId: The ID of the HTTPS listener. This parameter is required.
         * @return {@code this}
         */
        public Builder listenerId(java.lang.String listenerId) {
            this.listenerId = listenerId;
            return this;
        }

        /**
         * Sets the value of {@link CertificatesListenerAssociationProps#getListenerId}
         * @param listenerId Property listenerId: The ID of the HTTPS listener. This parameter is required.
         * @return {@code this}
         */
        public Builder listenerId(com.aliyun.ros.cdk.core.IResolvable listenerId) {
            this.listenerId = listenerId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link CertificatesListenerAssociationProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public CertificatesListenerAssociationProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link CertificatesListenerAssociationProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements CertificatesListenerAssociationProps {
        private final java.lang.Object acceleratorId;
        private final java.lang.Object certificates;
        private final java.lang.Object listenerId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.acceleratorId = software.amazon.jsii.Kernel.get(this, "acceleratorId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.certificates = software.amazon.jsii.Kernel.get(this, "certificates", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.listenerId = software.amazon.jsii.Kernel.get(this, "listenerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.acceleratorId = java.util.Objects.requireNonNull(builder.acceleratorId, "acceleratorId is required");
            this.certificates = java.util.Objects.requireNonNull(builder.certificates, "certificates is required");
            this.listenerId = java.util.Objects.requireNonNull(builder.listenerId, "listenerId is required");
        }

        @Override
        public final java.lang.Object getAcceleratorId() {
            return this.acceleratorId;
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

            data.set("acceleratorId", om.valueToTree(this.getAcceleratorId()));
            data.set("certificates", om.valueToTree(this.getCertificates()));
            data.set("listenerId", om.valueToTree(this.getListenerId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ga.CertificatesListenerAssociationProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            CertificatesListenerAssociationProps.Jsii$Proxy that = (CertificatesListenerAssociationProps.Jsii$Proxy) o;

            if (!acceleratorId.equals(that.acceleratorId)) return false;
            if (!certificates.equals(that.certificates)) return false;
            return this.listenerId.equals(that.listenerId);
        }

        @Override
        public final int hashCode() {
            int result = this.acceleratorId.hashCode();
            result = 31 * result + (this.certificates.hashCode());
            result = 31 * result + (this.listenerId.hashCode());
            return result;
        }
    }
}
