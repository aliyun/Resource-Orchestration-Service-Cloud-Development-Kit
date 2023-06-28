package com.aliyun.ros.cdk.tsdb;

/**
 * Properties for defining a <code>ALIYUN::TSDB::InfluxDBDatabase</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.84.0 (build 5404dcf)", date = "2023-06-28T08:22:30.671Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.tsdb.$Module.class, fqn = "@alicloud/ros-cdk-tsdb.InfluxDBDatabaseProps")
@software.amazon.jsii.Jsii.Proxy(InfluxDBDatabaseProps.Jsii$Proxy.class)
public interface InfluxDBDatabaseProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property dbName: The name of database.
     * <p>
     * The name can at most be 64 characters in length and can contain lowercase letters, digits, and underscores (_). It must start with a letter and end with a letter or digit.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbName();

    /**
     * Property instanceId: The ID of TSDB for InfluxDB.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

    /**
     * @return a {@link Builder} of {@link InfluxDBDatabaseProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link InfluxDBDatabaseProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<InfluxDBDatabaseProps> {
        java.lang.Object dbName;
        java.lang.Object instanceId;

        /**
         * Sets the value of {@link InfluxDBDatabaseProps#getDbName}
         * @param dbName Property dbName: The name of database. This parameter is required.
         *               The name can at most be 64 characters in length and can contain lowercase letters, digits, and underscores (_). It must start with a letter and end with a letter or digit.
         * @return {@code this}
         */
        public Builder dbName(java.lang.String dbName) {
            this.dbName = dbName;
            return this;
        }

        /**
         * Sets the value of {@link InfluxDBDatabaseProps#getDbName}
         * @param dbName Property dbName: The name of database. This parameter is required.
         *               The name can at most be 64 characters in length and can contain lowercase letters, digits, and underscores (_). It must start with a letter and end with a letter or digit.
         * @return {@code this}
         */
        public Builder dbName(com.aliyun.ros.cdk.core.IResolvable dbName) {
            this.dbName = dbName;
            return this;
        }

        /**
         * Sets the value of {@link InfluxDBDatabaseProps#getInstanceId}
         * @param instanceId Property instanceId: The ID of TSDB for InfluxDB. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link InfluxDBDatabaseProps#getInstanceId}
         * @param instanceId Property instanceId: The ID of TSDB for InfluxDB. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link InfluxDBDatabaseProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public InfluxDBDatabaseProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link InfluxDBDatabaseProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements InfluxDBDatabaseProps {
        private final java.lang.Object dbName;
        private final java.lang.Object instanceId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.dbName = software.amazon.jsii.Kernel.get(this, "dbName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.dbName = java.util.Objects.requireNonNull(builder.dbName, "dbName is required");
            this.instanceId = java.util.Objects.requireNonNull(builder.instanceId, "instanceId is required");
        }

        @Override
        public final java.lang.Object getDbName() {
            return this.dbName;
        }

        @Override
        public final java.lang.Object getInstanceId() {
            return this.instanceId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("dbName", om.valueToTree(this.getDbName()));
            data.set("instanceId", om.valueToTree(this.getInstanceId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-tsdb.InfluxDBDatabaseProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            InfluxDBDatabaseProps.Jsii$Proxy that = (InfluxDBDatabaseProps.Jsii$Proxy) o;

            if (!dbName.equals(that.dbName)) return false;
            return this.instanceId.equals(that.instanceId);
        }

        @Override
        public final int hashCode() {
            int result = this.dbName.hashCode();
            result = 31 * result + (this.instanceId.hashCode());
            return result;
        }
    }
}
