package com.aliyun.ros.cdk.alb;

/**
 * Properties for defining a `ALIYUN::ALB::BackendServerAttachment`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.55.1 (build 07d2d90)", date = "2022-04-07T03:17:40.294Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.BackendServerAttachmentProps")
@software.amazon.jsii.Jsii.Proxy(BackendServerAttachmentProps.Jsii$Proxy.class)
public interface BackendServerAttachmentProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property serverGroupId: The ID of the server group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getServerGroupId();

    /**
     * Property servers: The backend servers that you want to add to the server group.
     * <p>
     * You can specify up to
     * 40 servers in each call.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getServers();

    /**
     * @return a {@link Builder} of {@link BackendServerAttachmentProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link BackendServerAttachmentProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<BackendServerAttachmentProps> {
        java.lang.Object serverGroupId;
        java.lang.Object servers;

        /**
         * Sets the value of {@link BackendServerAttachmentProps#getServerGroupId}
         * @param serverGroupId Property serverGroupId: The ID of the server group. This parameter is required.
         * @return {@code this}
         */
        public Builder serverGroupId(java.lang.String serverGroupId) {
            this.serverGroupId = serverGroupId;
            return this;
        }

        /**
         * Sets the value of {@link BackendServerAttachmentProps#getServerGroupId}
         * @param serverGroupId Property serverGroupId: The ID of the server group. This parameter is required.
         * @return {@code this}
         */
        public Builder serverGroupId(com.aliyun.ros.cdk.core.IResolvable serverGroupId) {
            this.serverGroupId = serverGroupId;
            return this;
        }

        /**
         * Sets the value of {@link BackendServerAttachmentProps#getServers}
         * @param servers Property servers: The backend servers that you want to add to the server group. This parameter is required.
         *                You can specify up to
         *                40 servers in each call.
         * @return {@code this}
         */
        public Builder servers(com.aliyun.ros.cdk.core.IResolvable servers) {
            this.servers = servers;
            return this;
        }

        /**
         * Sets the value of {@link BackendServerAttachmentProps#getServers}
         * @param servers Property servers: The backend servers that you want to add to the server group. This parameter is required.
         *                You can specify up to
         *                40 servers in each call.
         * @return {@code this}
         */
        public Builder servers(java.util.List<? extends java.lang.Object> servers) {
            this.servers = servers;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link BackendServerAttachmentProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public BackendServerAttachmentProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link BackendServerAttachmentProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements BackendServerAttachmentProps {
        private final java.lang.Object serverGroupId;
        private final java.lang.Object servers;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.serverGroupId = software.amazon.jsii.Kernel.get(this, "serverGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.servers = software.amazon.jsii.Kernel.get(this, "servers", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.serverGroupId = java.util.Objects.requireNonNull(builder.serverGroupId, "serverGroupId is required");
            this.servers = java.util.Objects.requireNonNull(builder.servers, "servers is required");
        }

        @Override
        public final java.lang.Object getServerGroupId() {
            return this.serverGroupId;
        }

        @Override
        public final java.lang.Object getServers() {
            return this.servers;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("serverGroupId", om.valueToTree(this.getServerGroupId()));
            data.set("servers", om.valueToTree(this.getServers()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-alb.BackendServerAttachmentProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            BackendServerAttachmentProps.Jsii$Proxy that = (BackendServerAttachmentProps.Jsii$Proxy) o;

            if (!serverGroupId.equals(that.serverGroupId)) return false;
            return this.servers.equals(that.servers);
        }

        @Override
        public final int hashCode() {
            int result = this.serverGroupId.hashCode();
            result = 31 * result + (this.servers.hashCode());
            return result;
        }
    }
}
