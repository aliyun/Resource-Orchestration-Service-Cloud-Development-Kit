package com.aliyun.ros.cdk.polardb;

/**
 * Properties for defining a <code>GlobalDatabaseNetwork</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-globaldatabasenetwork
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:49.392Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.polardb.$Module.class, fqn = "@alicloud/ros-cdk-polardb.GlobalDatabaseNetworkProps")
@software.amazon.jsii.Jsii.Proxy(GlobalDatabaseNetworkProps.Jsii$Proxy.class)
public interface GlobalDatabaseNetworkProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property dbClusterId: The ID of the primary cluster.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbClusterId();

    /**
     * Property gdnDescription: The description of the GDN.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getGdnDescription() {
        return null;
    }

    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link GlobalDatabaseNetworkProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link GlobalDatabaseNetworkProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<GlobalDatabaseNetworkProps> {
        java.lang.Object dbClusterId;
        java.lang.Object gdnDescription;
        java.lang.Object resourceGroupId;

        /**
         * Sets the value of {@link GlobalDatabaseNetworkProps#getDbClusterId}
         * @param dbClusterId Property dbClusterId: The ID of the primary cluster. This parameter is required.
         * @return {@code this}
         */
        public Builder dbClusterId(java.lang.String dbClusterId) {
            this.dbClusterId = dbClusterId;
            return this;
        }

        /**
         * Sets the value of {@link GlobalDatabaseNetworkProps#getDbClusterId}
         * @param dbClusterId Property dbClusterId: The ID of the primary cluster. This parameter is required.
         * @return {@code this}
         */
        public Builder dbClusterId(com.aliyun.ros.cdk.core.IResolvable dbClusterId) {
            this.dbClusterId = dbClusterId;
            return this;
        }

        /**
         * Sets the value of {@link GlobalDatabaseNetworkProps#getGdnDescription}
         * @param gdnDescription Property gdnDescription: The description of the GDN.
         * @return {@code this}
         */
        public Builder gdnDescription(java.lang.String gdnDescription) {
            this.gdnDescription = gdnDescription;
            return this;
        }

        /**
         * Sets the value of {@link GlobalDatabaseNetworkProps#getGdnDescription}
         * @param gdnDescription Property gdnDescription: The description of the GDN.
         * @return {@code this}
         */
        public Builder gdnDescription(com.aliyun.ros.cdk.core.IResolvable gdnDescription) {
            this.gdnDescription = gdnDescription;
            return this;
        }

        /**
         * Sets the value of {@link GlobalDatabaseNetworkProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link GlobalDatabaseNetworkProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link GlobalDatabaseNetworkProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public GlobalDatabaseNetworkProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link GlobalDatabaseNetworkProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements GlobalDatabaseNetworkProps {
        private final java.lang.Object dbClusterId;
        private final java.lang.Object gdnDescription;
        private final java.lang.Object resourceGroupId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.dbClusterId = software.amazon.jsii.Kernel.get(this, "dbClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.gdnDescription = software.amazon.jsii.Kernel.get(this, "gdnDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.dbClusterId = java.util.Objects.requireNonNull(builder.dbClusterId, "dbClusterId is required");
            this.gdnDescription = builder.gdnDescription;
            this.resourceGroupId = builder.resourceGroupId;
        }

        @Override
        public final java.lang.Object getDbClusterId() {
            return this.dbClusterId;
        }

        @Override
        public final java.lang.Object getGdnDescription() {
            return this.gdnDescription;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("dbClusterId", om.valueToTree(this.getDbClusterId()));
            if (this.getGdnDescription() != null) {
                data.set("gdnDescription", om.valueToTree(this.getGdnDescription()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-polardb.GlobalDatabaseNetworkProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            GlobalDatabaseNetworkProps.Jsii$Proxy that = (GlobalDatabaseNetworkProps.Jsii$Proxy) o;

            if (!dbClusterId.equals(that.dbClusterId)) return false;
            if (this.gdnDescription != null ? !this.gdnDescription.equals(that.gdnDescription) : that.gdnDescription != null) return false;
            return this.resourceGroupId != null ? this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.dbClusterId.hashCode();
            result = 31 * result + (this.gdnDescription != null ? this.gdnDescription.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            return result;
        }
    }
}
