package com.aliyun.ros.cdk.gpdb;

/**
 * Properties for defining a <code>DBResourceGroup</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-dbresourcegroup
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:50.931Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.gpdb.$Module.class, fqn = "@alicloud/ros-cdk-gpdb.DBResourceGroupProps")
@software.amazon.jsii.Jsii.Proxy(DBResourceGroupProps.Jsii$Proxy.class)
public interface DBResourceGroupProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property dbInstanceId: The instance ID.&gt; You can call the [DescribeDBInstances](~~ 86911 ~~) operation to view the instance IDs of all AnalyticDB PostgreSQL instances in the target region.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbInstanceId();

    /**
     * Property resourceGroupConfig: Resource group configuration.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getResourceGroupConfig();

    /**
     * Property resourceGroupName: Resource group name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getResourceGroupName();

    /**
     * @return a {@link Builder} of {@link DBResourceGroupProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link DBResourceGroupProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<DBResourceGroupProps> {
        java.lang.Object dbInstanceId;
        java.lang.Object resourceGroupConfig;
        java.lang.Object resourceGroupName;

        /**
         * Sets the value of {@link DBResourceGroupProps#getDbInstanceId}
         * @param dbInstanceId Property dbInstanceId: The instance ID.&gt; You can call the [DescribeDBInstances](~~ 86911 ~~) operation to view the instance IDs of all AnalyticDB PostgreSQL instances in the target region. This parameter is required.
         * @return {@code this}
         */
        public Builder dbInstanceId(java.lang.String dbInstanceId) {
            this.dbInstanceId = dbInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link DBResourceGroupProps#getDbInstanceId}
         * @param dbInstanceId Property dbInstanceId: The instance ID.&gt; You can call the [DescribeDBInstances](~~ 86911 ~~) operation to view the instance IDs of all AnalyticDB PostgreSQL instances in the target region. This parameter is required.
         * @return {@code this}
         */
        public Builder dbInstanceId(com.aliyun.ros.cdk.core.IResolvable dbInstanceId) {
            this.dbInstanceId = dbInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link DBResourceGroupProps#getResourceGroupConfig}
         * @param resourceGroupConfig Property resourceGroupConfig: Resource group configuration. This parameter is required.
         * @return {@code this}
         */
        public Builder resourceGroupConfig(com.aliyun.ros.cdk.core.IResolvable resourceGroupConfig) {
            this.resourceGroupConfig = resourceGroupConfig;
            return this;
        }

        /**
         * Sets the value of {@link DBResourceGroupProps#getResourceGroupConfig}
         * @param resourceGroupConfig Property resourceGroupConfig: Resource group configuration. This parameter is required.
         * @return {@code this}
         */
        public Builder resourceGroupConfig(java.util.Map<java.lang.String, ? extends java.lang.Object> resourceGroupConfig) {
            this.resourceGroupConfig = resourceGroupConfig;
            return this;
        }

        /**
         * Sets the value of {@link DBResourceGroupProps#getResourceGroupName}
         * @param resourceGroupName Property resourceGroupName: Resource group name. This parameter is required.
         * @return {@code this}
         */
        public Builder resourceGroupName(java.lang.String resourceGroupName) {
            this.resourceGroupName = resourceGroupName;
            return this;
        }

        /**
         * Sets the value of {@link DBResourceGroupProps#getResourceGroupName}
         * @param resourceGroupName Property resourceGroupName: Resource group name. This parameter is required.
         * @return {@code this}
         */
        public Builder resourceGroupName(com.aliyun.ros.cdk.core.IResolvable resourceGroupName) {
            this.resourceGroupName = resourceGroupName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link DBResourceGroupProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public DBResourceGroupProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link DBResourceGroupProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DBResourceGroupProps {
        private final java.lang.Object dbInstanceId;
        private final java.lang.Object resourceGroupConfig;
        private final java.lang.Object resourceGroupName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.dbInstanceId = software.amazon.jsii.Kernel.get(this, "dbInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupConfig = software.amazon.jsii.Kernel.get(this, "resourceGroupConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupName = software.amazon.jsii.Kernel.get(this, "resourceGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.dbInstanceId = java.util.Objects.requireNonNull(builder.dbInstanceId, "dbInstanceId is required");
            this.resourceGroupConfig = java.util.Objects.requireNonNull(builder.resourceGroupConfig, "resourceGroupConfig is required");
            this.resourceGroupName = java.util.Objects.requireNonNull(builder.resourceGroupName, "resourceGroupName is required");
        }

        @Override
        public final java.lang.Object getDbInstanceId() {
            return this.dbInstanceId;
        }

        @Override
        public final java.lang.Object getResourceGroupConfig() {
            return this.resourceGroupConfig;
        }

        @Override
        public final java.lang.Object getResourceGroupName() {
            return this.resourceGroupName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("dbInstanceId", om.valueToTree(this.getDbInstanceId()));
            data.set("resourceGroupConfig", om.valueToTree(this.getResourceGroupConfig()));
            data.set("resourceGroupName", om.valueToTree(this.getResourceGroupName()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-gpdb.DBResourceGroupProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            DBResourceGroupProps.Jsii$Proxy that = (DBResourceGroupProps.Jsii$Proxy) o;

            if (!dbInstanceId.equals(that.dbInstanceId)) return false;
            if (!resourceGroupConfig.equals(that.resourceGroupConfig)) return false;
            return this.resourceGroupName.equals(that.resourceGroupName);
        }

        @Override
        public final int hashCode() {
            int result = this.dbInstanceId.hashCode();
            result = 31 * result + (this.resourceGroupConfig.hashCode());
            result = 31 * result + (this.resourceGroupName.hashCode());
            return result;
        }
    }
}
