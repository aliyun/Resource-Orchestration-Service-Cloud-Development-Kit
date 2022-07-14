package com.aliyun.ros.cdk.kms;

/**
 * Properties for defining a `ALIYUN::KMS::Alias`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.62.0 (build 293ac17)", date = "2022-07-13T09:24:21.273Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.kms.$Module.class, fqn = "@alicloud/ros-cdk-kms.AliasProps")
@software.amazon.jsii.Jsii.Proxy(AliasProps.Jsii$Proxy.class)
public interface AliasProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property aliasName: - The display name of the key.
     * <p>
     * You can use the alias to call APIs such as Encrypt, GenerateDataKey, and DescribeKey. - Not including the prefix, the minimum length of an alias is 1 and the maximum length is 255. - The prefix alias/ must be included.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAliasName();

    /**
     * Property keyId: Globally unique identifier of the CMK.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getKeyId();

    /**
     * @return a {@link Builder} of {@link AliasProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link AliasProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<AliasProps> {
        java.lang.Object aliasName;
        java.lang.Object keyId;

        /**
         * Sets the value of {@link AliasProps#getAliasName}
         * @param aliasName Property aliasName: - The display name of the key. This parameter is required.
         *                  You can use the alias to call APIs such as Encrypt, GenerateDataKey, and DescribeKey. - Not including the prefix, the minimum length of an alias is 1 and the maximum length is 255. - The prefix alias/ must be included.
         * @return {@code this}
         */
        public Builder aliasName(java.lang.String aliasName) {
            this.aliasName = aliasName;
            return this;
        }

        /**
         * Sets the value of {@link AliasProps#getAliasName}
         * @param aliasName Property aliasName: - The display name of the key. This parameter is required.
         *                  You can use the alias to call APIs such as Encrypt, GenerateDataKey, and DescribeKey. - Not including the prefix, the minimum length of an alias is 1 and the maximum length is 255. - The prefix alias/ must be included.
         * @return {@code this}
         */
        public Builder aliasName(com.aliyun.ros.cdk.core.IResolvable aliasName) {
            this.aliasName = aliasName;
            return this;
        }

        /**
         * Sets the value of {@link AliasProps#getKeyId}
         * @param keyId Property keyId: Globally unique identifier of the CMK. This parameter is required.
         * @return {@code this}
         */
        public Builder keyId(java.lang.String keyId) {
            this.keyId = keyId;
            return this;
        }

        /**
         * Sets the value of {@link AliasProps#getKeyId}
         * @param keyId Property keyId: Globally unique identifier of the CMK. This parameter is required.
         * @return {@code this}
         */
        public Builder keyId(com.aliyun.ros.cdk.core.IResolvable keyId) {
            this.keyId = keyId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link AliasProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public AliasProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link AliasProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AliasProps {
        private final java.lang.Object aliasName;
        private final java.lang.Object keyId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.aliasName = software.amazon.jsii.Kernel.get(this, "aliasName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.keyId = software.amazon.jsii.Kernel.get(this, "keyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.aliasName = java.util.Objects.requireNonNull(builder.aliasName, "aliasName is required");
            this.keyId = java.util.Objects.requireNonNull(builder.keyId, "keyId is required");
        }

        @Override
        public final java.lang.Object getAliasName() {
            return this.aliasName;
        }

        @Override
        public final java.lang.Object getKeyId() {
            return this.keyId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("aliasName", om.valueToTree(this.getAliasName()));
            data.set("keyId", om.valueToTree(this.getKeyId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-kms.AliasProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            AliasProps.Jsii$Proxy that = (AliasProps.Jsii$Proxy) o;

            if (!aliasName.equals(that.aliasName)) return false;
            return this.keyId.equals(that.keyId);
        }

        @Override
        public final int hashCode() {
            int result = this.aliasName.hashCode();
            result = 31 * result + (this.keyId.hashCode());
            return result;
        }
    }
}
