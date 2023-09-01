package com.aliyun.ros.cdk.polardb;

/**
 * Properties for defining a <code>ALIYUN::POLARDB::DBClusterEndpointAddress</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-01T09:26:38.814Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.polardb.$Module.class, fqn = "@alicloud/ros-cdk-polardb.RosDBClusterEndpointAddressProps")
@software.amazon.jsii.Jsii.Proxy(RosDBClusterEndpointAddressProps.Jsii$Proxy.class)
public interface RosDBClusterEndpointAddressProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbClusterId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbEndpointId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getConnectionStringPrefix() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNetType() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosDBClusterEndpointAddressProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosDBClusterEndpointAddressProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosDBClusterEndpointAddressProps> {
        java.lang.Object dbClusterId;
        java.lang.Object dbEndpointId;
        java.lang.Object connectionStringPrefix;
        java.lang.Object netType;

        /**
         * Sets the value of {@link RosDBClusterEndpointAddressProps#getDbClusterId}
         * @param dbClusterId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbClusterId(java.lang.String dbClusterId) {
            this.dbClusterId = dbClusterId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterEndpointAddressProps#getDbClusterId}
         * @param dbClusterId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbClusterId(com.aliyun.ros.cdk.core.IResolvable dbClusterId) {
            this.dbClusterId = dbClusterId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterEndpointAddressProps#getDbEndpointId}
         * @param dbEndpointId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbEndpointId(java.lang.String dbEndpointId) {
            this.dbEndpointId = dbEndpointId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterEndpointAddressProps#getDbEndpointId}
         * @param dbEndpointId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbEndpointId(com.aliyun.ros.cdk.core.IResolvable dbEndpointId) {
            this.dbEndpointId = dbEndpointId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterEndpointAddressProps#getConnectionStringPrefix}
         * @param connectionStringPrefix the value to be set.
         * @return {@code this}
         */
        public Builder connectionStringPrefix(java.lang.String connectionStringPrefix) {
            this.connectionStringPrefix = connectionStringPrefix;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterEndpointAddressProps#getConnectionStringPrefix}
         * @param connectionStringPrefix the value to be set.
         * @return {@code this}
         */
        public Builder connectionStringPrefix(com.aliyun.ros.cdk.core.IResolvable connectionStringPrefix) {
            this.connectionStringPrefix = connectionStringPrefix;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterEndpointAddressProps#getNetType}
         * @param netType the value to be set.
         * @return {@code this}
         */
        public Builder netType(java.lang.String netType) {
            this.netType = netType;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterEndpointAddressProps#getNetType}
         * @param netType the value to be set.
         * @return {@code this}
         */
        public Builder netType(com.aliyun.ros.cdk.core.IResolvable netType) {
            this.netType = netType;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosDBClusterEndpointAddressProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosDBClusterEndpointAddressProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosDBClusterEndpointAddressProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosDBClusterEndpointAddressProps {
        private final java.lang.Object dbClusterId;
        private final java.lang.Object dbEndpointId;
        private final java.lang.Object connectionStringPrefix;
        private final java.lang.Object netType;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.dbClusterId = software.amazon.jsii.Kernel.get(this, "dbClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbEndpointId = software.amazon.jsii.Kernel.get(this, "dbEndpointId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.connectionStringPrefix = software.amazon.jsii.Kernel.get(this, "connectionStringPrefix", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.netType = software.amazon.jsii.Kernel.get(this, "netType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.dbClusterId = java.util.Objects.requireNonNull(builder.dbClusterId, "dbClusterId is required");
            this.dbEndpointId = java.util.Objects.requireNonNull(builder.dbEndpointId, "dbEndpointId is required");
            this.connectionStringPrefix = builder.connectionStringPrefix;
            this.netType = builder.netType;
        }

        @Override
        public final java.lang.Object getDbClusterId() {
            return this.dbClusterId;
        }

        @Override
        public final java.lang.Object getDbEndpointId() {
            return this.dbEndpointId;
        }

        @Override
        public final java.lang.Object getConnectionStringPrefix() {
            return this.connectionStringPrefix;
        }

        @Override
        public final java.lang.Object getNetType() {
            return this.netType;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("dbClusterId", om.valueToTree(this.getDbClusterId()));
            data.set("dbEndpointId", om.valueToTree(this.getDbEndpointId()));
            if (this.getConnectionStringPrefix() != null) {
                data.set("connectionStringPrefix", om.valueToTree(this.getConnectionStringPrefix()));
            }
            if (this.getNetType() != null) {
                data.set("netType", om.valueToTree(this.getNetType()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-polardb.RosDBClusterEndpointAddressProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosDBClusterEndpointAddressProps.Jsii$Proxy that = (RosDBClusterEndpointAddressProps.Jsii$Proxy) o;

            if (!dbClusterId.equals(that.dbClusterId)) return false;
            if (!dbEndpointId.equals(that.dbEndpointId)) return false;
            if (this.connectionStringPrefix != null ? !this.connectionStringPrefix.equals(that.connectionStringPrefix) : that.connectionStringPrefix != null) return false;
            return this.netType != null ? this.netType.equals(that.netType) : that.netType == null;
        }

        @Override
        public final int hashCode() {
            int result = this.dbClusterId.hashCode();
            result = 31 * result + (this.dbEndpointId.hashCode());
            result = 31 * result + (this.connectionStringPrefix != null ? this.connectionStringPrefix.hashCode() : 0);
            result = 31 * result + (this.netType != null ? this.netType.hashCode() : 0);
            return result;
        }
    }
}
