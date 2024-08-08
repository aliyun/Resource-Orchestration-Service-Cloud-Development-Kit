package com.aliyun.ros.cdk.clickhouse.datasource;

/**
 * Properties for defining a <code>RosDBClusters</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-clickhouse-dbclusters
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-08T09:17:08.135Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.clickhouse.$Module.class, fqn = "@alicloud/ros-cdk-clickhouse.datasource.RosDBClustersProps")
@software.amazon.jsii.Jsii.Proxy(RosDBClustersProps.Jsii$Proxy.class)
public interface RosDBClustersProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbClusterId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbClusterName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRefreshOptions() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosDBClustersProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosDBClustersProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosDBClustersProps> {
        java.lang.Object dbClusterId;
        java.lang.Object dbClusterName;
        java.lang.Object refreshOptions;

        /**
         * Sets the value of {@link RosDBClustersProps#getDbClusterId}
         * @param dbClusterId the value to be set.
         * @return {@code this}
         */
        public Builder dbClusterId(java.lang.String dbClusterId) {
            this.dbClusterId = dbClusterId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClustersProps#getDbClusterId}
         * @param dbClusterId the value to be set.
         * @return {@code this}
         */
        public Builder dbClusterId(com.aliyun.ros.cdk.core.IResolvable dbClusterId) {
            this.dbClusterId = dbClusterId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClustersProps#getDbClusterName}
         * @param dbClusterName the value to be set.
         * @return {@code this}
         */
        public Builder dbClusterName(java.lang.String dbClusterName) {
            this.dbClusterName = dbClusterName;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClustersProps#getDbClusterName}
         * @param dbClusterName the value to be set.
         * @return {@code this}
         */
        public Builder dbClusterName(com.aliyun.ros.cdk.core.IResolvable dbClusterName) {
            this.dbClusterName = dbClusterName;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClustersProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(java.lang.String refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClustersProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosDBClustersProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosDBClustersProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosDBClustersProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosDBClustersProps {
        private final java.lang.Object dbClusterId;
        private final java.lang.Object dbClusterName;
        private final java.lang.Object refreshOptions;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.dbClusterId = software.amazon.jsii.Kernel.get(this, "dbClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbClusterName = software.amazon.jsii.Kernel.get(this, "dbClusterName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.dbClusterId = builder.dbClusterId;
            this.dbClusterName = builder.dbClusterName;
            this.refreshOptions = builder.refreshOptions;
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
        public final java.lang.Object getRefreshOptions() {
            return this.refreshOptions;
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
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-clickhouse.datasource.RosDBClustersProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosDBClustersProps.Jsii$Proxy that = (RosDBClustersProps.Jsii$Proxy) o;

            if (this.dbClusterId != null ? !this.dbClusterId.equals(that.dbClusterId) : that.dbClusterId != null) return false;
            if (this.dbClusterName != null ? !this.dbClusterName.equals(that.dbClusterName) : that.dbClusterName != null) return false;
            return this.refreshOptions != null ? this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions == null;
        }

        @Override
        public final int hashCode() {
            int result = this.dbClusterId != null ? this.dbClusterId.hashCode() : 0;
            result = 31 * result + (this.dbClusterName != null ? this.dbClusterName.hashCode() : 0);
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            return result;
        }
    }
}
