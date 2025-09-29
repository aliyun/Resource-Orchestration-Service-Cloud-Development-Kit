package com.aliyun.ros.cdk.esa;

/**
 * Properties for defining a <code>RosClientCertificate</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-clientcertificate
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:25.538Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.RosClientCertificateProps")
@software.amazon.jsii.Jsii.Proxy(RosClientCertificateProps.Jsii$Proxy.class)
public interface RosClientCertificateProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSiteId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getValidityDays();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCsr() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPkeyType() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosClientCertificateProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosClientCertificateProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosClientCertificateProps> {
        java.lang.Object siteId;
        java.lang.Object validityDays;
        java.lang.Object csr;
        java.lang.Object pkeyType;

        /**
         * Sets the value of {@link RosClientCertificateProps#getSiteId}
         * @param siteId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder siteId(java.lang.Number siteId) {
            this.siteId = siteId;
            return this;
        }

        /**
         * Sets the value of {@link RosClientCertificateProps#getSiteId}
         * @param siteId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder siteId(com.aliyun.ros.cdk.core.IResolvable siteId) {
            this.siteId = siteId;
            return this;
        }

        /**
         * Sets the value of {@link RosClientCertificateProps#getValidityDays}
         * @param validityDays the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder validityDays(java.lang.Number validityDays) {
            this.validityDays = validityDays;
            return this;
        }

        /**
         * Sets the value of {@link RosClientCertificateProps#getValidityDays}
         * @param validityDays the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder validityDays(com.aliyun.ros.cdk.core.IResolvable validityDays) {
            this.validityDays = validityDays;
            return this;
        }

        /**
         * Sets the value of {@link RosClientCertificateProps#getCsr}
         * @param csr the value to be set.
         * @return {@code this}
         */
        public Builder csr(java.lang.String csr) {
            this.csr = csr;
            return this;
        }

        /**
         * Sets the value of {@link RosClientCertificateProps#getCsr}
         * @param csr the value to be set.
         * @return {@code this}
         */
        public Builder csr(com.aliyun.ros.cdk.core.IResolvable csr) {
            this.csr = csr;
            return this;
        }

        /**
         * Sets the value of {@link RosClientCertificateProps#getPkeyType}
         * @param pkeyType the value to be set.
         * @return {@code this}
         */
        public Builder pkeyType(java.lang.String pkeyType) {
            this.pkeyType = pkeyType;
            return this;
        }

        /**
         * Sets the value of {@link RosClientCertificateProps#getPkeyType}
         * @param pkeyType the value to be set.
         * @return {@code this}
         */
        public Builder pkeyType(com.aliyun.ros.cdk.core.IResolvable pkeyType) {
            this.pkeyType = pkeyType;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosClientCertificateProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosClientCertificateProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosClientCertificateProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosClientCertificateProps {
        private final java.lang.Object siteId;
        private final java.lang.Object validityDays;
        private final java.lang.Object csr;
        private final java.lang.Object pkeyType;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.siteId = software.amazon.jsii.Kernel.get(this, "siteId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.validityDays = software.amazon.jsii.Kernel.get(this, "validityDays", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.csr = software.amazon.jsii.Kernel.get(this, "csr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.pkeyType = software.amazon.jsii.Kernel.get(this, "pkeyType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.siteId = java.util.Objects.requireNonNull(builder.siteId, "siteId is required");
            this.validityDays = java.util.Objects.requireNonNull(builder.validityDays, "validityDays is required");
            this.csr = builder.csr;
            this.pkeyType = builder.pkeyType;
        }

        @Override
        public final java.lang.Object getSiteId() {
            return this.siteId;
        }

        @Override
        public final java.lang.Object getValidityDays() {
            return this.validityDays;
        }

        @Override
        public final java.lang.Object getCsr() {
            return this.csr;
        }

        @Override
        public final java.lang.Object getPkeyType() {
            return this.pkeyType;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("siteId", om.valueToTree(this.getSiteId()));
            data.set("validityDays", om.valueToTree(this.getValidityDays()));
            if (this.getCsr() != null) {
                data.set("csr", om.valueToTree(this.getCsr()));
            }
            if (this.getPkeyType() != null) {
                data.set("pkeyType", om.valueToTree(this.getPkeyType()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-esa.RosClientCertificateProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosClientCertificateProps.Jsii$Proxy that = (RosClientCertificateProps.Jsii$Proxy) o;

            if (!siteId.equals(that.siteId)) return false;
            if (!validityDays.equals(that.validityDays)) return false;
            if (this.csr != null ? !this.csr.equals(that.csr) : that.csr != null) return false;
            return this.pkeyType != null ? this.pkeyType.equals(that.pkeyType) : that.pkeyType == null;
        }

        @Override
        public final int hashCode() {
            int result = this.siteId.hashCode();
            result = 31 * result + (this.validityDays.hashCode());
            result = 31 * result + (this.csr != null ? this.csr.hashCode() : 0);
            result = 31 * result + (this.pkeyType != null ? this.pkeyType.hashCode() : 0);
            return result;
        }
    }
}
