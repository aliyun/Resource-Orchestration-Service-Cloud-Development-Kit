package com.aliyun.ros.cdk.polardb;

/**
 * Properties for defining a <code>Backup</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-backup
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:42.359Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.polardb.$Module.class, fqn = "@alicloud/ros-cdk-polardb.BackupProps")
@software.amazon.jsii.Jsii.Proxy(BackupProps.Jsii$Proxy.class)
public interface BackupProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property dbClusterId: The cluster ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbClusterId();

    /**
     * @return a {@link Builder} of {@link BackupProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link BackupProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<BackupProps> {
        java.lang.Object dbClusterId;

        /**
         * Sets the value of {@link BackupProps#getDbClusterId}
         * @param dbClusterId Property dbClusterId: The cluster ID. This parameter is required.
         * @return {@code this}
         */
        public Builder dbClusterId(java.lang.String dbClusterId) {
            this.dbClusterId = dbClusterId;
            return this;
        }

        /**
         * Sets the value of {@link BackupProps#getDbClusterId}
         * @param dbClusterId Property dbClusterId: The cluster ID. This parameter is required.
         * @return {@code this}
         */
        public Builder dbClusterId(com.aliyun.ros.cdk.core.IResolvable dbClusterId) {
            this.dbClusterId = dbClusterId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link BackupProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public BackupProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link BackupProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements BackupProps {
        private final java.lang.Object dbClusterId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.dbClusterId = software.amazon.jsii.Kernel.get(this, "dbClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.dbClusterId = java.util.Objects.requireNonNull(builder.dbClusterId, "dbClusterId is required");
        }

        @Override
        public final java.lang.Object getDbClusterId() {
            return this.dbClusterId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("dbClusterId", om.valueToTree(this.getDbClusterId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-polardb.BackupProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            BackupProps.Jsii$Proxy that = (BackupProps.Jsii$Proxy) o;

            return this.dbClusterId.equals(that.dbClusterId);
        }

        @Override
        public final int hashCode() {
            int result = this.dbClusterId.hashCode();
            return result;
        }
    }
}
