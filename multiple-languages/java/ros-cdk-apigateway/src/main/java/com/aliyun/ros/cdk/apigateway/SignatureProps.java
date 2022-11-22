package com.aliyun.ros.cdk.apigateway;

/**
 * Properties for defining a `ALIYUN::ApiGateway::Signature`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.71.0 (build f1f58ae)", date = "2022-11-22T06:16:27.589Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apigateway.$Module.class, fqn = "@alicloud/ros-cdk-apigateway.SignatureProps")
@software.amazon.jsii.Jsii.Proxy(SignatureProps.Jsii$Proxy.class)
public interface SignatureProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property signatureKey: The key of the signature.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSignatureKey();

    /**
     * Property signatureName: The name of the Signature.Need [4, 50] Chinese\English\Number characters or "_",and should start with Chinese/English character.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSignatureName();

    /**
     * Property signatureSecret: The secret of the signature.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSignatureSecret();

    /**
     * @return a {@link Builder} of {@link SignatureProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link SignatureProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<SignatureProps> {
        java.lang.Object signatureKey;
        java.lang.Object signatureName;
        java.lang.Object signatureSecret;

        /**
         * Sets the value of {@link SignatureProps#getSignatureKey}
         * @param signatureKey Property signatureKey: The key of the signature. This parameter is required.
         * @return {@code this}
         */
        public Builder signatureKey(java.lang.String signatureKey) {
            this.signatureKey = signatureKey;
            return this;
        }

        /**
         * Sets the value of {@link SignatureProps#getSignatureKey}
         * @param signatureKey Property signatureKey: The key of the signature. This parameter is required.
         * @return {@code this}
         */
        public Builder signatureKey(com.aliyun.ros.cdk.core.IResolvable signatureKey) {
            this.signatureKey = signatureKey;
            return this;
        }

        /**
         * Sets the value of {@link SignatureProps#getSignatureName}
         * @param signatureName Property signatureName: The name of the Signature.Need [4, 50] Chinese\English\Number characters or "_",and should start with Chinese/English character. This parameter is required.
         * @return {@code this}
         */
        public Builder signatureName(java.lang.String signatureName) {
            this.signatureName = signatureName;
            return this;
        }

        /**
         * Sets the value of {@link SignatureProps#getSignatureName}
         * @param signatureName Property signatureName: The name of the Signature.Need [4, 50] Chinese\English\Number characters or "_",and should start with Chinese/English character. This parameter is required.
         * @return {@code this}
         */
        public Builder signatureName(com.aliyun.ros.cdk.core.IResolvable signatureName) {
            this.signatureName = signatureName;
            return this;
        }

        /**
         * Sets the value of {@link SignatureProps#getSignatureSecret}
         * @param signatureSecret Property signatureSecret: The secret of the signature. This parameter is required.
         * @return {@code this}
         */
        public Builder signatureSecret(java.lang.String signatureSecret) {
            this.signatureSecret = signatureSecret;
            return this;
        }

        /**
         * Sets the value of {@link SignatureProps#getSignatureSecret}
         * @param signatureSecret Property signatureSecret: The secret of the signature. This parameter is required.
         * @return {@code this}
         */
        public Builder signatureSecret(com.aliyun.ros.cdk.core.IResolvable signatureSecret) {
            this.signatureSecret = signatureSecret;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link SignatureProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public SignatureProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link SignatureProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SignatureProps {
        private final java.lang.Object signatureKey;
        private final java.lang.Object signatureName;
        private final java.lang.Object signatureSecret;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.signatureKey = software.amazon.jsii.Kernel.get(this, "signatureKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.signatureName = software.amazon.jsii.Kernel.get(this, "signatureName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.signatureSecret = software.amazon.jsii.Kernel.get(this, "signatureSecret", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.signatureKey = java.util.Objects.requireNonNull(builder.signatureKey, "signatureKey is required");
            this.signatureName = java.util.Objects.requireNonNull(builder.signatureName, "signatureName is required");
            this.signatureSecret = java.util.Objects.requireNonNull(builder.signatureSecret, "signatureSecret is required");
        }

        @Override
        public final java.lang.Object getSignatureKey() {
            return this.signatureKey;
        }

        @Override
        public final java.lang.Object getSignatureName() {
            return this.signatureName;
        }

        @Override
        public final java.lang.Object getSignatureSecret() {
            return this.signatureSecret;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("signatureKey", om.valueToTree(this.getSignatureKey()));
            data.set("signatureName", om.valueToTree(this.getSignatureName()));
            data.set("signatureSecret", om.valueToTree(this.getSignatureSecret()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apigateway.SignatureProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            SignatureProps.Jsii$Proxy that = (SignatureProps.Jsii$Proxy) o;

            if (!signatureKey.equals(that.signatureKey)) return false;
            if (!signatureName.equals(that.signatureName)) return false;
            return this.signatureSecret.equals(that.signatureSecret);
        }

        @Override
        public final int hashCode() {
            int result = this.signatureKey.hashCode();
            result = 31 * result + (this.signatureName.hashCode());
            result = 31 * result + (this.signatureSecret.hashCode());
            return result;
        }
    }
}
