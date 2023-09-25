package com.aliyun.ros.cdk.apigateway;

/**
 * Properties for defining a <code>ALIYUN::ApiGateway::SignatureBinding</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-25T05:23:23.468Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apigateway.$Module.class, fqn = "@alicloud/ros-cdk-apigateway.RosSignatureBindingProps")
@software.amazon.jsii.Jsii.Proxy(RosSignatureBindingProps.Jsii$Proxy.class)
public interface RosSignatureBindingProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getApiIds();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getGroupId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSignatureId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getStageName();

    /**
     * @return a {@link Builder} of {@link RosSignatureBindingProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosSignatureBindingProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosSignatureBindingProps> {
        java.lang.Object apiIds;
        java.lang.Object groupId;
        java.lang.Object signatureId;
        java.lang.Object stageName;

        /**
         * Sets the value of {@link RosSignatureBindingProps#getApiIds}
         * @param apiIds the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder apiIds(java.util.List<? extends java.lang.Object> apiIds) {
            this.apiIds = apiIds;
            return this;
        }

        /**
         * Sets the value of {@link RosSignatureBindingProps#getApiIds}
         * @param apiIds the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder apiIds(com.aliyun.ros.cdk.core.IResolvable apiIds) {
            this.apiIds = apiIds;
            return this;
        }

        /**
         * Sets the value of {@link RosSignatureBindingProps#getGroupId}
         * @param groupId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder groupId(java.lang.String groupId) {
            this.groupId = groupId;
            return this;
        }

        /**
         * Sets the value of {@link RosSignatureBindingProps#getGroupId}
         * @param groupId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder groupId(com.aliyun.ros.cdk.core.IResolvable groupId) {
            this.groupId = groupId;
            return this;
        }

        /**
         * Sets the value of {@link RosSignatureBindingProps#getSignatureId}
         * @param signatureId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder signatureId(java.lang.String signatureId) {
            this.signatureId = signatureId;
            return this;
        }

        /**
         * Sets the value of {@link RosSignatureBindingProps#getSignatureId}
         * @param signatureId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder signatureId(com.aliyun.ros.cdk.core.IResolvable signatureId) {
            this.signatureId = signatureId;
            return this;
        }

        /**
         * Sets the value of {@link RosSignatureBindingProps#getStageName}
         * @param stageName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder stageName(java.lang.String stageName) {
            this.stageName = stageName;
            return this;
        }

        /**
         * Sets the value of {@link RosSignatureBindingProps#getStageName}
         * @param stageName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder stageName(com.aliyun.ros.cdk.core.IResolvable stageName) {
            this.stageName = stageName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosSignatureBindingProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosSignatureBindingProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosSignatureBindingProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosSignatureBindingProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apigateway.RosSignatureBindingProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosSignatureBindingProps.Jsii$Proxy that = (RosSignatureBindingProps.Jsii$Proxy) o;

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
