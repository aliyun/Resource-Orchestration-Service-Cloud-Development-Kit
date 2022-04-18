package com.aliyun.ros.cdk.apigateway;

/**
 * Properties for defining a `ALIYUN::ApiGateway::PluginAttachment`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.56.0 (build 55e7d15)", date = "2022-04-18T07:25:24.607Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apigateway.$Module.class, fqn = "@alicloud/ros-cdk-apigateway.RosPluginAttachmentProps")
@software.amazon.jsii.Jsii.Proxy(RosPluginAttachmentProps.Jsii$Proxy.class)
public interface RosPluginAttachmentProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getApiId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPluginId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getStageName();

    /**
     * @return a {@link Builder} of {@link RosPluginAttachmentProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosPluginAttachmentProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosPluginAttachmentProps> {
        java.lang.Object apiId;
        java.lang.Object pluginId;
        java.lang.Object stageName;

        /**
         * Sets the value of {@link RosPluginAttachmentProps#getApiId}
         * @param apiId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder apiId(java.lang.String apiId) {
            this.apiId = apiId;
            return this;
        }

        /**
         * Sets the value of {@link RosPluginAttachmentProps#getApiId}
         * @param apiId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder apiId(com.aliyun.ros.cdk.core.IResolvable apiId) {
            this.apiId = apiId;
            return this;
        }

        /**
         * Sets the value of {@link RosPluginAttachmentProps#getPluginId}
         * @param pluginId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder pluginId(java.lang.String pluginId) {
            this.pluginId = pluginId;
            return this;
        }

        /**
         * Sets the value of {@link RosPluginAttachmentProps#getPluginId}
         * @param pluginId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder pluginId(com.aliyun.ros.cdk.core.IResolvable pluginId) {
            this.pluginId = pluginId;
            return this;
        }

        /**
         * Sets the value of {@link RosPluginAttachmentProps#getStageName}
         * @param stageName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder stageName(java.lang.String stageName) {
            this.stageName = stageName;
            return this;
        }

        /**
         * Sets the value of {@link RosPluginAttachmentProps#getStageName}
         * @param stageName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder stageName(com.aliyun.ros.cdk.core.IResolvable stageName) {
            this.stageName = stageName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosPluginAttachmentProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosPluginAttachmentProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosPluginAttachmentProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosPluginAttachmentProps {
        private final java.lang.Object apiId;
        private final java.lang.Object pluginId;
        private final java.lang.Object stageName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.apiId = software.amazon.jsii.Kernel.get(this, "apiId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.pluginId = software.amazon.jsii.Kernel.get(this, "pluginId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.stageName = software.amazon.jsii.Kernel.get(this, "stageName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.apiId = java.util.Objects.requireNonNull(builder.apiId, "apiId is required");
            this.pluginId = java.util.Objects.requireNonNull(builder.pluginId, "pluginId is required");
            this.stageName = java.util.Objects.requireNonNull(builder.stageName, "stageName is required");
        }

        @Override
        public final java.lang.Object getApiId() {
            return this.apiId;
        }

        @Override
        public final java.lang.Object getPluginId() {
            return this.pluginId;
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

            data.set("apiId", om.valueToTree(this.getApiId()));
            data.set("pluginId", om.valueToTree(this.getPluginId()));
            data.set("stageName", om.valueToTree(this.getStageName()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apigateway.RosPluginAttachmentProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosPluginAttachmentProps.Jsii$Proxy that = (RosPluginAttachmentProps.Jsii$Proxy) o;

            if (!apiId.equals(that.apiId)) return false;
            if (!pluginId.equals(that.pluginId)) return false;
            return this.stageName.equals(that.stageName);
        }

        @Override
        public final int hashCode() {
            int result = this.apiId.hashCode();
            result = 31 * result + (this.pluginId.hashCode());
            result = 31 * result + (this.stageName.hashCode());
            return result;
        }
    }
}
