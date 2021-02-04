package com.aliyun.ros.cdk.cas;

/**
 * Properties for defining a `ALIYUN::CAS::Certificate`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-02-04T07:29:35.187Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cas.$Module.class, fqn = "@alicloud/ros-cdk-cas.RosCertificateProps")
@software.amazon.jsii.Jsii.Proxy(RosCertificateProps.Jsii$Proxy.class)
public interface RosCertificateProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getCert();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getKey();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getLang() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getSourceIp() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosCertificateProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosCertificateProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosCertificateProps> {
        private java.lang.String cert;
        private java.lang.String key;
        private java.lang.String name;
        private java.lang.String lang;
        private java.lang.String sourceIp;

        /**
         * Sets the value of {@link RosCertificateProps#getCert}
         * @param cert the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder cert(java.lang.String cert) {
            this.cert = cert;
            return this;
        }

        /**
         * Sets the value of {@link RosCertificateProps#getKey}
         * @param key the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder key(java.lang.String key) {
            this.key = key;
            return this;
        }

        /**
         * Sets the value of {@link RosCertificateProps#getName}
         * @param name the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosCertificateProps#getLang}
         * @param lang the value to be set.
         * @return {@code this}
         */
        public Builder lang(java.lang.String lang) {
            this.lang = lang;
            return this;
        }

        /**
         * Sets the value of {@link RosCertificateProps#getSourceIp}
         * @param sourceIp the value to be set.
         * @return {@code this}
         */
        public Builder sourceIp(java.lang.String sourceIp) {
            this.sourceIp = sourceIp;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosCertificateProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosCertificateProps build() {
            return new Jsii$Proxy(cert, key, name, lang, sourceIp);
        }
    }

    /**
     * An implementation for {@link RosCertificateProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosCertificateProps {
        private final java.lang.String cert;
        private final java.lang.String key;
        private final java.lang.String name;
        private final java.lang.String lang;
        private final java.lang.String sourceIp;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.cert = software.amazon.jsii.Kernel.get(this, "cert", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.key = software.amazon.jsii.Kernel.get(this, "key", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.lang = software.amazon.jsii.Kernel.get(this, "lang", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.sourceIp = software.amazon.jsii.Kernel.get(this, "sourceIp", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String cert, final java.lang.String key, final java.lang.String name, final java.lang.String lang, final java.lang.String sourceIp) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.cert = java.util.Objects.requireNonNull(cert, "cert is required");
            this.key = java.util.Objects.requireNonNull(key, "key is required");
            this.name = java.util.Objects.requireNonNull(name, "name is required");
            this.lang = lang;
            this.sourceIp = sourceIp;
        }

        @Override
        public final java.lang.String getCert() {
            return this.cert;
        }

        @Override
        public final java.lang.String getKey() {
            return this.key;
        }

        @Override
        public final java.lang.String getName() {
            return this.name;
        }

        @Override
        public final java.lang.String getLang() {
            return this.lang;
        }

        @Override
        public final java.lang.String getSourceIp() {
            return this.sourceIp;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("cert", om.valueToTree(this.getCert()));
            data.set("key", om.valueToTree(this.getKey()));
            data.set("name", om.valueToTree(this.getName()));
            if (this.getLang() != null) {
                data.set("lang", om.valueToTree(this.getLang()));
            }
            if (this.getSourceIp() != null) {
                data.set("sourceIp", om.valueToTree(this.getSourceIp()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cas.RosCertificateProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosCertificateProps.Jsii$Proxy that = (RosCertificateProps.Jsii$Proxy) o;

            if (!cert.equals(that.cert)) return false;
            if (!key.equals(that.key)) return false;
            if (!name.equals(that.name)) return false;
            if (this.lang != null ? !this.lang.equals(that.lang) : that.lang != null) return false;
            return this.sourceIp != null ? this.sourceIp.equals(that.sourceIp) : that.sourceIp == null;
        }

        @Override
        public final int hashCode() {
            int result = this.cert.hashCode();
            result = 31 * result + (this.key.hashCode());
            result = 31 * result + (this.name.hashCode());
            result = 31 * result + (this.lang != null ? this.lang.hashCode() : 0);
            result = 31 * result + (this.sourceIp != null ? this.sourceIp.hashCode() : 0);
            return result;
        }
    }
}
