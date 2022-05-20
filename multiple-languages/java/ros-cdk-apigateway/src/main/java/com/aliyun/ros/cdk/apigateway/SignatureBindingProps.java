package com.aliyun.ros.cdk.apigateway;

/**
 * Properties for defining a `ALIYUN::ApiGateway::SignatureBinding`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.59.0 (build eb02c92)", date = "2022-05-20T02:42:00.903Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apigateway.$Module.class, fqn = "@alicloud/ros-cdk-apigateway.SignatureBindingProps")
@software.amazon.jsii.Jsii.Proxy(SignatureBindingProps.Jsii$Proxy.class)
public interface SignatureBindingProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property apiIds: APIs to bind with the signature.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getApiIds();

    /**
     * Property groupId: The id of group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getGroupId();

    /**
     * Property signatureId: The id of the Signature.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSignatureId();

    /**
     * Property stageName: Bind signature in this stage.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getStageName();

    /**
     * @return a {@link Builder} of {@link SignatureBindingProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link SignatureBindingProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<SignatureBindingProps> {
        java.lang.Object apiIds;
        java.lang.Object groupId;
        java.lang.Object signatureId;
        java.lang.Object stageName;

        /**
         * Sets the value of {@link SignatureBindingProps#getApiIds}
         * @param apiIds Property apiIds: APIs to bind with the signature. This parameter is required.
         * @return {@code this}
         */
        public Builder apiIds(java.util.List<? extends java.lang.Object> apiIds) {
            this.apiIds = apiIds;
            return this;
        }

        /**
         * Sets the value of {@link SignatureBindingProps#getApiIds}
         * @param apiIds Property apiIds: APIs to bind with the signature. This parameter is required.
         * @return {@code this}
         */
        public Builder apiIds(com.aliyun.ros.cdk.core.IResolvable apiIds) {
            this.apiIds = apiIds;
            return this;
        }

        /**
         * Sets the value of {@link SignatureBindingProps#getGroupId}
         * @param groupId Property groupId: The id of group. This parameter is required.
         * @return {@code this}
         */
        public Builder groupId(java.lang.String groupId) {
            this.groupId = groupId;
            return this;
        }

        /**
         * Sets the value of {@link SignatureBindingProps#getGroupId}
         * @param groupId Property groupId: The id of group. This parameter is required.
         * @return {@code this}
         */
        public Builder groupId(com.aliyun.ros.cdk.core.IResolvable groupId) {
            this.groupId = groupId;
            return this;
        }

        /**
         * Sets the value of {@link SignatureBindingProps#getSignatureId}
         * @param signatureId Property signatureId: The id of the Signature. This parameter is required.
         * @return {@code this}
         */
        public Builder signatureId(java.lang.String signatureId) {
            this.signatureId = signatureId;
            return this;
        }

        /**
         * Sets the value of {@link SignatureBindingProps#getSignatureId}
         * @param signatureId Property signatureId: The id of the Signature. This parameter is required.
         * @return {@code this}
         */
        public Builder signatureId(com.aliyun.ros.cdk.core.IResolvable signatureId) {
            this.signatureId = signatureId;
            return this;
        }

        /**
         * Sets the value of {@link SignatureBindingProps#getStageName}
         * @param stageName Property stageName: Bind signature in this stage. This parameter is required.
         * @return {@code this}
         */
        public Builder stageName(java.lang.String stageName) {
            this.stageName = stageName;
            return this;
        }

        /**
         * Sets the value of {@link SignatureBindingProps#getStageName}
         * @param stageName Property stageName: Bind signature in this stage. This parameter is required.
         * @return {@code this}
         */
        public Builder stageName(com.aliyun.ros.cdk.core.IResolvable stageName) {
            this.stageName = stageName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link SignatureBindingProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public SignatureBindingProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link SignatureBindingProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SignatureBindingProps {
        private final java.lang.Object apiIds;
        private final java.lang.Object groupId;
        private final java.lang.Object signatureId;
        private final java.lang.Object stageName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.apiIds = software.amazon.jsii.Kernel.get(this, "apiIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.groupId = software.amazon.jsii.Kernel.get(this, "groupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.signatureId = software.amazon.jsii.Kernel.get(this, "signatureId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.stageName = software.amazon.jsii.Kernel.get(this, "stageName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.apiIds = java.util.Objects.requireNonNull(builder.apiIds, "apiIds is required");
            this.groupId = java.util.Objects.requireNonNull(builder.groupId, "groupId is required");
            this.signatureId = java.util.Objects.requireNonNull(builder.signatureId, "signatureId is required");
            this.stageName = java.util.Objects.requireNonNull(builder.stageName, "stageName is required");
        }

        @Override
        public final java.lang.Object getApiIds() {
            return this.apiIds;
        }

        @Override
        public final java.lang.Object getGroupId() {
            return this.groupId;
        }

        @Override
        public final java.lang.Object getSignatureId() {
            return this.signatureId;
        }

        @Override
        public final java.lang.Object getStageName() {
            return this.stageName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("apiIds", om.valueToTree(this.getApiIds()));
            data.set("groupId", om.valueToTree(this.getGroupId()));
            data.set("signatureId", om.valueToTree(this.getSignatureId()));
            data.set("stageName", om.valueToTree(this.getStageName()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apigateway.SignatureBindingProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            SignatureBindingProps.Jsii$Proxy that = (SignatureBindingProps.Jsii$Proxy) o;

            if (!apiIds.equals(that.apiIds)) return false;
            if (!groupId.equals(that.groupId)) return false;
            if (!signatureId.equals(that.signatureId)) return false;
            return this.stageName.equals(that.stageName);
        }

        @Override
        public final int hashCode() {
            int result = this.apiIds.hashCode();
            result = 31 * result + (this.groupId.hashCode());
            result = 31 * result + (this.signatureId.hashCode());
            result = 31 * result + (this.stageName.hashCode());
            return result;
        }
    }
}
