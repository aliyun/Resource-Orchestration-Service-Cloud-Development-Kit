package com.aliyun.ros.cdk.redis;

/**
 * Properties for defining a <code>Connection</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-redis-connection
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:43.462Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.redis.$Module.class, fqn = "@alicloud/ros-cdk-redis.ConnectionProps")
@software.amazon.jsii.Jsii.Proxy(ConnectionProps.Jsii$Proxy.class)
public interface ConnectionProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property connectionStringPrefix: The prefix of the public endpoint.
     * <p>
     * The prefix must be 8 to 64 characters in length,
     * and can contain lowercase letters and digits.
     * It must start with a lowercase letter.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getConnectionStringPrefix();

    /**
     * Property connectionType: Allowed values: - Public: Public address.
     * <p>
     * <ul>
     * <li>Direct: Direct connection address. The instance is a cluster instance. You can apply for a direct connection endpoint as required.</li>
     * </ul>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getConnectionType();

    /**
     * Property instanceId: Instance ID (globally unique).
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

    /**
     * Property port: The service port number of the ApsaraDB for Redis instance.
     * <p>
     * Valid values: 1024 to 65535.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPort();

    /**
     * @return a {@link Builder} of {@link ConnectionProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ConnectionProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ConnectionProps> {
        java.lang.Object connectionStringPrefix;
        java.lang.Object connectionType;
        java.lang.Object instanceId;
        java.lang.Object port;

        /**
         * Sets the value of {@link ConnectionProps#getConnectionStringPrefix}
         * @param connectionStringPrefix Property connectionStringPrefix: The prefix of the public endpoint. This parameter is required.
         *                               The prefix must be 8 to 64 characters in length,
         *                               and can contain lowercase letters and digits.
         *                               It must start with a lowercase letter.
         * @return {@code this}
         */
        public Builder connectionStringPrefix(java.lang.String connectionStringPrefix) {
            this.connectionStringPrefix = connectionStringPrefix;
            return this;
        }

        /**
         * Sets the value of {@link ConnectionProps#getConnectionStringPrefix}
         * @param connectionStringPrefix Property connectionStringPrefix: The prefix of the public endpoint. This parameter is required.
         *                               The prefix must be 8 to 64 characters in length,
         *                               and can contain lowercase letters and digits.
         *                               It must start with a lowercase letter.
         * @return {@code this}
         */
        public Builder connectionStringPrefix(com.aliyun.ros.cdk.core.IResolvable connectionStringPrefix) {
            this.connectionStringPrefix = connectionStringPrefix;
            return this;
        }

        /**
         * Sets the value of {@link ConnectionProps#getConnectionType}
         * @param connectionType Property connectionType: Allowed values: - Public: Public address. This parameter is required.
         *                       <ul>
         *                       <li>Direct: Direct connection address. The instance is a cluster instance. You can apply for a direct connection endpoint as required.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder connectionType(java.lang.String connectionType) {
            this.connectionType = connectionType;
            return this;
        }

        /**
         * Sets the value of {@link ConnectionProps#getConnectionType}
         * @param connectionType Property connectionType: Allowed values: - Public: Public address. This parameter is required.
         *                       <ul>
         *                       <li>Direct: Direct connection address. The instance is a cluster instance. You can apply for a direct connection endpoint as required.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder connectionType(com.aliyun.ros.cdk.core.IResolvable connectionType) {
            this.connectionType = connectionType;
            return this;
        }

        /**
         * Sets the value of {@link ConnectionProps#getInstanceId}
         * @param instanceId Property instanceId: Instance ID (globally unique). This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link ConnectionProps#getInstanceId}
         * @param instanceId Property instanceId: Instance ID (globally unique). This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link ConnectionProps#getPort}
         * @param port Property port: The service port number of the ApsaraDB for Redis instance. This parameter is required.
         *             Valid values: 1024 to 65535.
         * @return {@code this}
         */
        public Builder port(java.lang.Number port) {
            this.port = port;
            return this;
        }

        /**
         * Sets the value of {@link ConnectionProps#getPort}
         * @param port Property port: The service port number of the ApsaraDB for Redis instance. This parameter is required.
         *             Valid values: 1024 to 65535.
         * @return {@code this}
         */
        public Builder port(com.aliyun.ros.cdk.core.IResolvable port) {
            this.port = port;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ConnectionProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ConnectionProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ConnectionProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ConnectionProps {
        private final java.lang.Object connectionStringPrefix;
        private final java.lang.Object connectionType;
        private final java.lang.Object instanceId;
        private final java.lang.Object port;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.connectionStringPrefix = software.amazon.jsii.Kernel.get(this, "connectionStringPrefix", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.connectionType = software.amazon.jsii.Kernel.get(this, "connectionType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.port = software.amazon.jsii.Kernel.get(this, "port", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.connectionStringPrefix = java.util.Objects.requireNonNull(builder.connectionStringPrefix, "connectionStringPrefix is required");
            this.connectionType = java.util.Objects.requireNonNull(builder.connectionType, "connectionType is required");
            this.instanceId = java.util.Objects.requireNonNull(builder.instanceId, "instanceId is required");
            this.port = java.util.Objects.requireNonNull(builder.port, "port is required");
        }

        @Override
        public final java.lang.Object getConnectionStringPrefix() {
            return this.connectionStringPrefix;
        }

        @Override
        public final java.lang.Object getConnectionType() {
            return this.connectionType;
        }

        @Override
        public final java.lang.Object getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.Object getPort() {
            return this.port;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("connectionStringPrefix", om.valueToTree(this.getConnectionStringPrefix()));
            data.set("connectionType", om.valueToTree(this.getConnectionType()));
            data.set("instanceId", om.valueToTree(this.getInstanceId()));
            data.set("port", om.valueToTree(this.getPort()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-redis.ConnectionProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ConnectionProps.Jsii$Proxy that = (ConnectionProps.Jsii$Proxy) o;

            if (!connectionStringPrefix.equals(that.connectionStringPrefix)) return false;
            if (!connectionType.equals(that.connectionType)) return false;
            if (!instanceId.equals(that.instanceId)) return false;
            return this.port.equals(that.port);
        }

        @Override
        public final int hashCode() {
            int result = this.connectionStringPrefix.hashCode();
            result = 31 * result + (this.connectionType.hashCode());
            result = 31 * result + (this.instanceId.hashCode());
            result = 31 * result + (this.port.hashCode());
            return result;
        }
    }
}
