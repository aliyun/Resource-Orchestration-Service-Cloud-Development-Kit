package com.aliyun.ros.cdk.polardb.datasource;

/**
 * Properties for defining a <code>DATASOURCE::POLARDB::GlobalDatabaseNetworks</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-11-07T09:08:36.516Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.polardb.$Module.class, fqn = "@alicloud/ros-cdk-polardb.datasource.GlobalDatabaseNetworksProps")
@software.amazon.jsii.Jsii.Proxy(GlobalDatabaseNetworksProps.Jsii$Proxy.class)
public interface GlobalDatabaseNetworksProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property dbClusterId: The ID of the cluster.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbClusterId() {
        return null;
    }

    /**
     * Property gdnId: The ID of the GDN.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getGdnId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link GlobalDatabaseNetworksProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link GlobalDatabaseNetworksProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<GlobalDatabaseNetworksProps> {
        java.lang.Object dbClusterId;
        java.lang.Object gdnId;

        /**
         * Sets the value of {@link GlobalDatabaseNetworksProps#getDbClusterId}
         * @param dbClusterId Property dbClusterId: The ID of the cluster.
         * @return {@code this}
         */
        public Builder dbClusterId(java.lang.String dbClusterId) {
            this.dbClusterId = dbClusterId;
            return this;
        }

        /**
         * Sets the value of {@link GlobalDatabaseNetworksProps#getDbClusterId}
         * @param dbClusterId Property dbClusterId: The ID of the cluster.
         * @return {@code this}
         */
        public Builder dbClusterId(com.aliyun.ros.cdk.core.IResolvable dbClusterId) {
            this.dbClusterId = dbClusterId;
            return this;
        }

        /**
         * Sets the value of {@link GlobalDatabaseNetworksProps#getGdnId}
         * @param gdnId Property gdnId: The ID of the GDN.
         * @return {@code this}
         */
        public Builder gdnId(java.lang.String gdnId) {
            this.gdnId = gdnId;
            return this;
        }

        /**
         * Sets the value of {@link GlobalDatabaseNetworksProps#getGdnId}
         * @param gdnId Property gdnId: The ID of the GDN.
         * @return {@code this}
         */
        public Builder gdnId(com.aliyun.ros.cdk.core.IResolvable gdnId) {
            this.gdnId = gdnId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link GlobalDatabaseNetworksProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public GlobalDatabaseNetworksProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link GlobalDatabaseNetworksProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements GlobalDatabaseNetworksProps {
        private final java.lang.Object dbClusterId;
        private final java.lang.Object gdnId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.dbClusterId = software.amazon.jsii.Kernel.get(this, "dbClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.gdnId = software.amazon.jsii.Kernel.get(this, "gdnId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.dbClusterId = builder.dbClusterId;
            this.gdnId = builder.gdnId;
        }

        @Override
        public final java.lang.Object getDbClusterId() {
            return this.dbClusterId;
        }

        @Override
        public final java.lang.Object getGdnId() {
            return this.gdnId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getDbClusterId() != null) {
                data.set("dbClusterId", om.valueToTree(this.getDbClusterId()));
            }
            if (this.getGdnId() != null) {
                data.set("gdnId", om.valueToTree(this.getGdnId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-polardb.datasource.GlobalDatabaseNetworksProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            GlobalDatabaseNetworksProps.Jsii$Proxy that = (GlobalDatabaseNetworksProps.Jsii$Proxy) o;

            if (this.dbClusterId != null ? !this.dbClusterId.equals(that.dbClusterId) : that.dbClusterId != null) return false;
            return this.gdnId != null ? this.gdnId.equals(that.gdnId) : that.gdnId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.dbClusterId != null ? this.dbClusterId.hashCode() : 0;
            result = 31 * result + (this.gdnId != null ? this.gdnId.hashCode() : 0);
            return result;
        }
    }
}
