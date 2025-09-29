package com.aliyun.ros.cdk.esa;

/**
 * Properties for defining a <code>RosClientCaCertificate</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-clientcacertificate
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:25.537Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.RosClientCaCertificateProps")
@software.amazon.jsii.Jsii.Proxy(RosClientCaCertificateProps.Jsii$Proxy.class)
public interface RosClientCaCertificateProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCertificate();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSiteId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getClientCaCertName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosClientCaCertificateProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosClientCaCertificateProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosClientCaCertificateProps> {
        java.lang.Object certificate;
        java.lang.Object siteId;
        java.lang.Object clientCaCertName;

        /**
         * Sets the value of {@link RosClientCaCertificateProps#getCertificate}
         * @param certificate the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder certificate(java.lang.String certificate) {
            this.certificate = certificate;
            return this;
        }

        /**
         * Sets the value of {@link RosClientCaCertificateProps#getCertificate}
         * @param certificate the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder certificate(com.aliyun.ros.cdk.core.IResolvable certificate) {
            this.certificate = certificate;
            return this;
        }

        /**
         * Sets the value of {@link RosClientCaCertificateProps#getSiteId}
         * @param siteId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder siteId(java.lang.Number siteId) {
            this.siteId = siteId;
            return this;
        }

        /**
         * Sets the value of {@link RosClientCaCertificateProps#getSiteId}
         * @param siteId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder siteId(com.aliyun.ros.cdk.core.IResolvable siteId) {
            this.siteId = siteId;
            return this;
        }

        /**
         * Sets the value of {@link RosClientCaCertificateProps#getClientCaCertName}
         * @param clientCaCertName the value to be set.
         * @return {@code this}
         */
        public Builder clientCaCertName(java.lang.String clientCaCertName) {
            this.clientCaCertName = clientCaCertName;
            return this;
        }

        /**
         * Sets the value of {@link RosClientCaCertificateProps#getClientCaCertName}
         * @param clientCaCertName the value to be set.
         * @return {@code this}
         */
        public Builder clientCaCertName(com.aliyun.ros.cdk.core.IResolvable clientCaCertName) {
            this.clientCaCertName = clientCaCertName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosClientCaCertificateProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosClientCaCertificateProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosClientCaCertificateProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosClientCaCertificateProps {
        private final java.lang.Object certificate;
        private final java.lang.Object siteId;
        private final java.lang.Object clientCaCertName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.certificate = software.amazon.jsii.Kernel.get(this, "certificate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.siteId = software.amazon.jsii.Kernel.get(this, "siteId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.clientCaCertName = software.amazon.jsii.Kernel.get(this, "clientCaCertName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.certificate = java.util.Objects.requireNonNull(builder.certificate, "certificate is required");
            this.siteId = java.util.Objects.requireNonNull(builder.siteId, "siteId is required");
            this.clientCaCertName = builder.clientCaCertName;
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
        public final java.lang.Object getClientCaCertName() {
            return this.clientCaCertName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("certificate", om.valueToTree(this.getCertificate()));
            data.set("siteId", om.valueToTree(this.getSiteId()));
            if (this.getClientCaCertName() != null) {
                data.set("clientCaCertName", om.valueToTree(this.getClientCaCertName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-esa.RosClientCaCertificateProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosClientCaCertificateProps.Jsii$Proxy that = (RosClientCaCertificateProps.Jsii$Proxy) o;

            if (!certificate.equals(that.certificate)) return false;
            if (!siteId.equals(that.siteId)) return false;
            return this.clientCaCertName != null ? this.clientCaCertName.equals(that.clientCaCertName) : that.clientCaCertName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.certificate.hashCode();
            result = 31 * result + (this.siteId.hashCode());
            result = 31 * result + (this.clientCaCertName != null ? this.clientCaCertName.hashCode() : 0);
            return result;
        }
    }
}
