package com.aliyun.ros.cdk.gpdb;

/**
 * Properties for defining a <code>InstancePublicConnection</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-instancepublicconnection
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:57.426Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.gpdb.$Module.class, fqn = "@alicloud/ros-cdk-gpdb.InstancePublicConnectionProps")
@software.amazon.jsii.Jsii.Proxy(InstancePublicConnectionProps.Jsii$Proxy.class)
public interface InstancePublicConnectionProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property connectionStringPrefix: The endpoint that is used to connect to the specified database.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getConnectionStringPrefix();

    /**
     * Property dbInstanceId: The ID of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbInstanceId();

    /**
     * Property port: The port number of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPort();

    /**
     * @return a {@link Builder} of {@link InstancePublicConnectionProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link InstancePublicConnectionProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<InstancePublicConnectionProps> {
        java.lang.Object connectionStringPrefix;
        java.lang.Object dbInstanceId;
        java.lang.Object port;

        /**
         * Sets the value of {@link InstancePublicConnectionProps#getConnectionStringPrefix}
         * @param connectionStringPrefix Property connectionStringPrefix: The endpoint that is used to connect to the specified database. This parameter is required.
         * @return {@code this}
         */
        public Builder connectionStringPrefix(java.lang.String connectionStringPrefix) {
            this.connectionStringPrefix = connectionStringPrefix;
            return this;
        }

        /**
         * Sets the value of {@link InstancePublicConnectionProps#getConnectionStringPrefix}
         * @param connectionStringPrefix Property connectionStringPrefix: The endpoint that is used to connect to the specified database. This parameter is required.
         * @return {@code this}
         */
        public Builder connectionStringPrefix(com.aliyun.ros.cdk.core.IResolvable connectionStringPrefix) {
            this.connectionStringPrefix = connectionStringPrefix;
            return this;
        }

        /**
         * Sets the value of {@link InstancePublicConnectionProps#getDbInstanceId}
         * @param dbInstanceId Property dbInstanceId: The ID of the instance. This parameter is required.
         * @return {@code this}
         */
        public Builder dbInstanceId(java.lang.String dbInstanceId) {
            this.dbInstanceId = dbInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link InstancePublicConnectionProps#getDbInstanceId}
         * @param dbInstanceId Property dbInstanceId: The ID of the instance. This parameter is required.
         * @return {@code this}
         */
        public Builder dbInstanceId(com.aliyun.ros.cdk.core.IResolvable dbInstanceId) {
            this.dbInstanceId = dbInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link InstancePublicConnectionProps#getPort}
         * @param port Property port: The port number of the instance. This parameter is required.
         * @return {@code this}
         */
        public Builder port(java.lang.Number port) {
            this.port = port;
            return this;
        }

        /**
         * Sets the value of {@link InstancePublicConnectionProps#getPort}
         * @param port Property port: The port number of the instance. This parameter is required.
         * @return {@code this}
         */
        public Builder port(com.aliyun.ros.cdk.core.IResolvable port) {
            this.port = port;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link InstancePublicConnectionProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public InstancePublicConnectionProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link InstancePublicConnectionProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements InstancePublicConnectionProps {
        private final java.lang.Object connectionStringPrefix;
        private final java.lang.Object dbInstanceId;
        private final java.lang.Object port;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.connectionStringPrefix = software.amazon.jsii.Kernel.get(this, "connectionStringPrefix", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbInstanceId = software.amazon.jsii.Kernel.get(this, "dbInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.port = software.amazon.jsii.Kernel.get(this, "port", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.connectionStringPrefix = java.util.Objects.requireNonNull(builder.connectionStringPrefix, "connectionStringPrefix is required");
            this.dbInstanceId = java.util.Objects.requireNonNull(builder.dbInstanceId, "dbInstanceId is required");
            this.port = java.util.Objects.requireNonNull(builder.port, "port is required");
        }

        @Override
        public final java.lang.Object getConnectionStringPrefix() {
            return this.connectionStringPrefix;
        }

        @Override
        public final java.lang.Object getDbInstanceId() {
            return this.dbInstanceId;
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
            data.set("dbInstanceId", om.valueToTree(this.getDbInstanceId()));
            data.set("port", om.valueToTree(this.getPort()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-gpdb.InstancePublicConnectionProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            InstancePublicConnectionProps.Jsii$Proxy that = (InstancePublicConnectionProps.Jsii$Proxy) o;

            if (!connectionStringPrefix.equals(that.connectionStringPrefix)) return false;
            if (!dbInstanceId.equals(that.dbInstanceId)) return false;
            return this.port.equals(that.port);
        }

        @Override
        public final int hashCode() {
            int result = this.connectionStringPrefix.hashCode();
            result = 31 * result + (this.dbInstanceId.hashCode());
            result = 31 * result + (this.port.hashCode());
            return result;
        }
    }
}
