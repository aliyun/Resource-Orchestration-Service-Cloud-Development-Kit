package com.aliyun.ros.cdk.esa;

/**
 * Properties for defining a <code>Kv</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-kv
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:56.586Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.KvProps")
@software.amazon.jsii.Jsii.Proxy(KvProps.Jsii$Proxy.class)
public interface KvProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property key: The key name.
     * <p>
     * The name can be up to 512 characters in length and cannot contain spaces or backslashes ().
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getKey();

    /**
     * Property namespace: The name specified when calling [CreatevNamespace] https://help.aliyun.com/document_detail/2850317.html.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNamespace();

    /**
     * Property value: The content of the key.
     * <p>
     * If the content has more than 256 characters in length, the system displays the first 100 and the last 100 characters, and omits the middle part.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getValue();

    /**
     * Property expiration: The content of the key, which can be up to 2 MB (2 × 1000 × 1000).
     * <p>
     * If the content is larger than 2 MB, call [PutKvWithHighCapacity] https://www.alibabacloud.com/help/en/doc-detail/2850486.html.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getExpiration() {
        return null;
    }

    /**
     * Property expirationTtl: The time when the key-value pair expires, which cannot be earlier than the current time.
     * <p>
     * The value is a timestamp in seconds. If you specify both Expiration and ExpirationTtl, only ExpirationTtl takes effect.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getExpirationTtl() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link KvProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link KvProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<KvProps> {
        java.lang.Object key;
        java.lang.Object namespace;
        java.lang.Object value;
        java.lang.Object expiration;
        java.lang.Object expirationTtl;

        /**
         * Sets the value of {@link KvProps#getKey}
         * @param key Property key: The key name. This parameter is required.
         *            The name can be up to 512 characters in length and cannot contain spaces or backslashes ().
         * @return {@code this}
         */
        public Builder key(java.lang.String key) {
            this.key = key;
            return this;
        }

        /**
         * Sets the value of {@link KvProps#getKey}
         * @param key Property key: The key name. This parameter is required.
         *            The name can be up to 512 characters in length and cannot contain spaces or backslashes ().
         * @return {@code this}
         */
        public Builder key(com.aliyun.ros.cdk.core.IResolvable key) {
            this.key = key;
            return this;
        }

        /**
         * Sets the value of {@link KvProps#getNamespace}
         * @param namespace Property namespace: The name specified when calling [CreatevNamespace] https://help.aliyun.com/document_detail/2850317.html. This parameter is required.
         * @return {@code this}
         */
        public Builder namespace(java.lang.String namespace) {
            this.namespace = namespace;
            return this;
        }

        /**
         * Sets the value of {@link KvProps#getNamespace}
         * @param namespace Property namespace: The name specified when calling [CreatevNamespace] https://help.aliyun.com/document_detail/2850317.html. This parameter is required.
         * @return {@code this}
         */
        public Builder namespace(com.aliyun.ros.cdk.core.IResolvable namespace) {
            this.namespace = namespace;
            return this;
        }

        /**
         * Sets the value of {@link KvProps#getValue}
         * @param value Property value: The content of the key. This parameter is required.
         *              If the content has more than 256 characters in length, the system displays the first 100 and the last 100 characters, and omits the middle part.
         * @return {@code this}
         */
        public Builder value(java.lang.String value) {
            this.value = value;
            return this;
        }

        /**
         * Sets the value of {@link KvProps#getValue}
         * @param value Property value: The content of the key. This parameter is required.
         *              If the content has more than 256 characters in length, the system displays the first 100 and the last 100 characters, and omits the middle part.
         * @return {@code this}
         */
        public Builder value(com.aliyun.ros.cdk.core.IResolvable value) {
            this.value = value;
            return this;
        }

        /**
         * Sets the value of {@link KvProps#getExpiration}
         * @param expiration Property expiration: The content of the key, which can be up to 2 MB (2 × 1000 × 1000).
         *                   If the content is larger than 2 MB, call [PutKvWithHighCapacity] https://www.alibabacloud.com/help/en/doc-detail/2850486.html.
         * @return {@code this}
         */
        public Builder expiration(java.lang.Number expiration) {
            this.expiration = expiration;
            return this;
        }

        /**
         * Sets the value of {@link KvProps#getExpiration}
         * @param expiration Property expiration: The content of the key, which can be up to 2 MB (2 × 1000 × 1000).
         *                   If the content is larger than 2 MB, call [PutKvWithHighCapacity] https://www.alibabacloud.com/help/en/doc-detail/2850486.html.
         * @return {@code this}
         */
        public Builder expiration(com.aliyun.ros.cdk.core.IResolvable expiration) {
            this.expiration = expiration;
            return this;
        }

        /**
         * Sets the value of {@link KvProps#getExpirationTtl}
         * @param expirationTtl Property expirationTtl: The time when the key-value pair expires, which cannot be earlier than the current time.
         *                      The value is a timestamp in seconds. If you specify both Expiration and ExpirationTtl, only ExpirationTtl takes effect.
         * @return {@code this}
         */
        public Builder expirationTtl(java.lang.Number expirationTtl) {
            this.expirationTtl = expirationTtl;
            return this;
        }

        /**
         * Sets the value of {@link KvProps#getExpirationTtl}
         * @param expirationTtl Property expirationTtl: The time when the key-value pair expires, which cannot be earlier than the current time.
         *                      The value is a timestamp in seconds. If you specify both Expiration and ExpirationTtl, only ExpirationTtl takes effect.
         * @return {@code this}
         */
        public Builder expirationTtl(com.aliyun.ros.cdk.core.IResolvable expirationTtl) {
            this.expirationTtl = expirationTtl;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link KvProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public KvProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link KvProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements KvProps {
        private final java.lang.Object key;
        private final java.lang.Object namespace;
        private final java.lang.Object value;
        private final java.lang.Object expiration;
        private final java.lang.Object expirationTtl;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.key = software.amazon.jsii.Kernel.get(this, "key", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.namespace = software.amazon.jsii.Kernel.get(this, "namespace", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.value = software.amazon.jsii.Kernel.get(this, "value", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.expiration = software.amazon.jsii.Kernel.get(this, "expiration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.expirationTtl = software.amazon.jsii.Kernel.get(this, "expirationTtl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.key = java.util.Objects.requireNonNull(builder.key, "key is required");
            this.namespace = java.util.Objects.requireNonNull(builder.namespace, "namespace is required");
            this.value = java.util.Objects.requireNonNull(builder.value, "value is required");
            this.expiration = builder.expiration;
            this.expirationTtl = builder.expirationTtl;
        }

        @Override
        public final java.lang.Object getKey() {
            return this.key;
        }

        @Override
        public final java.lang.Object getNamespace() {
            return this.namespace;
        }

        @Override
        public final java.lang.Object getValue() {
            return this.value;
        }

        @Override
        public final java.lang.Object getExpiration() {
            return this.expiration;
        }

        @Override
        public final java.lang.Object getExpirationTtl() {
            return this.expirationTtl;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("key", om.valueToTree(this.getKey()));
            data.set("namespace", om.valueToTree(this.getNamespace()));
            data.set("value", om.valueToTree(this.getValue()));
            if (this.getExpiration() != null) {
                data.set("expiration", om.valueToTree(this.getExpiration()));
            }
            if (this.getExpirationTtl() != null) {
                data.set("expirationTtl", om.valueToTree(this.getExpirationTtl()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-esa.KvProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            KvProps.Jsii$Proxy that = (KvProps.Jsii$Proxy) o;

            if (!key.equals(that.key)) return false;
            if (!namespace.equals(that.namespace)) return false;
            if (!value.equals(that.value)) return false;
            if (this.expiration != null ? !this.expiration.equals(that.expiration) : that.expiration != null) return false;
            return this.expirationTtl != null ? this.expirationTtl.equals(that.expirationTtl) : that.expirationTtl == null;
        }

        @Override
        public final int hashCode() {
            int result = this.key.hashCode();
            result = 31 * result + (this.namespace.hashCode());
            result = 31 * result + (this.value.hashCode());
            result = 31 * result + (this.expiration != null ? this.expiration.hashCode() : 0);
            result = 31 * result + (this.expirationTtl != null ? this.expirationTtl.hashCode() : 0);
            return result;
        }
    }
}
