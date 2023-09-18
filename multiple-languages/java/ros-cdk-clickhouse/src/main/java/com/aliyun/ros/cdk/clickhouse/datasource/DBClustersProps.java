package com.aliyun.ros.cdk.clickhouse.datasource;

/**
 * Properties for defining a <code>DATASOURCE::ClickHouse::DBClusters</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-15T09:57:23.917Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.clickhouse.$Module.class, fqn = "@alicloud/ros-cdk-clickhouse.datasource.DBClustersProps")
@software.amazon.jsii.Jsii.Proxy(DBClustersProps.Jsii$Proxy.class)
public interface DBClustersProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property dbClusterId: Instance ID.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbClusterId() {
        return null;
    }

    /**
     * Property dbClusterName: The cluster description information.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbClusterName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link DBClustersProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link DBClustersProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<DBClustersProps> {
        java.lang.Object dbClusterId;
        java.lang.Object dbClusterName;

        /**
         * Sets the value of {@link DBClustersProps#getDbClusterId}
         * @param dbClusterId Property dbClusterId: Instance ID.
         * @return {@code this}
         */
        public Builder dbClusterId(java.lang.String dbClusterId) {
            this.dbClusterId = dbClusterId;
            return this;
        }

        /**
         * Sets the value of {@link DBClustersProps#getDbClusterId}
         * @param dbClusterId Property dbClusterId: Instance ID.
         * @return {@code this}
         */
        public Builder dbClusterId(com.aliyun.ros.cdk.core.IResolvable dbClusterId) {
            this.dbClusterId = dbClusterId;
            return this;
        }

        /**
         * Sets the value of {@link DBClustersProps#getDbClusterName}
         * @param dbClusterName Property dbClusterName: The cluster description information.
         * @return {@code this}
         */
        public Builder dbClusterName(java.lang.String dbClusterName) {
            this.dbClusterName = dbClusterName;
            return this;
        }

        /**
         * Sets the value of {@link DBClustersProps#getDbClusterName}
         * @param dbClusterName Property dbClusterName: The cluster description information.
         * @return {@code this}
         */
        public Builder dbClusterName(com.aliyun.ros.cdk.core.IResolvable dbClusterName) {
            this.dbClusterName = dbClusterName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link DBClustersProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public DBClustersProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link DBClustersProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DBClustersProps {
        private final java.lang.Object dbClusterId;
        private final java.lang.Object dbClusterName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.dbClusterId = software.amazon.jsii.Kernel.get(this, "dbClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbClusterName = software.amazon.jsii.Kernel.get(this, "dbClusterName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.dbClusterId = builder.dbClusterId;
            this.dbClusterName = builder.dbClusterName;
        }

        @Override
        public final java.lang.Object getDbClusterId() {
            return this.dbClusterId;
        }

        @Override
        public final java.lang.Object getDbClusterName() {
            return this.dbClusterName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getDbClusterId() != null) {
                data.set("dbClusterId", om.valueToTree(this.getDbClusterId()));
            }
            if (this.getDbClusterName() != null) {
                data.set("dbClusterName", om.valueToTree(this.getDbClusterName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-clickhouse.datasource.DBClustersProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            DBClustersProps.Jsii$Proxy that = (DBClustersProps.Jsii$Proxy) o;

            if (this.dbClusterId != null ? !this.dbClusterId.equals(that.dbClusterId) : that.dbClusterId != null) return false;
            return this.dbClusterName != null ? this.dbClusterName.equals(that.dbClusterName) : that.dbClusterName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.dbClusterId != null ? this.dbClusterId.hashCode() : 0;
            result = 31 * result + (this.dbClusterName != null ? this.dbClusterName.hashCode() : 0);
            return result;
        }
    }
}
