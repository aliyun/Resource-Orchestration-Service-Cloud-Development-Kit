package com.aliyun.ros.cdk.graphdatabase.datasource;

/**
 * Properties for defining a <code>DbInstances</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-graphdatabase-dbinstances
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-12-26T06:30:16.565Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.graphdatabase.$Module.class, fqn = "@alicloud/ros-cdk-graphdatabase.datasource.DbInstancesProps")
@software.amazon.jsii.Jsii.Proxy(DbInstancesProps.Jsii$Proxy.class)
public interface DbInstancesProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property dbInstanceDescription: According to the practical example or notes.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbInstanceDescription() {
        return null;
    }

    /**
     * Property dbInstanceId: The first ID of the resource.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbInstanceId() {
        return null;
    }

    /**
     * Property resourceGroupId: Resource Group ID.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link DbInstancesProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link DbInstancesProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<DbInstancesProps> {
        java.lang.Object dbInstanceDescription;
        java.lang.Object dbInstanceId;
        java.lang.Object resourceGroupId;

        /**
         * Sets the value of {@link DbInstancesProps#getDbInstanceDescription}
         * @param dbInstanceDescription Property dbInstanceDescription: According to the practical example or notes.
         * @return {@code this}
         */
        public Builder dbInstanceDescription(java.lang.String dbInstanceDescription) {
            this.dbInstanceDescription = dbInstanceDescription;
            return this;
        }

        /**
         * Sets the value of {@link DbInstancesProps#getDbInstanceDescription}
         * @param dbInstanceDescription Property dbInstanceDescription: According to the practical example or notes.
         * @return {@code this}
         */
        public Builder dbInstanceDescription(com.aliyun.ros.cdk.core.IResolvable dbInstanceDescription) {
            this.dbInstanceDescription = dbInstanceDescription;
            return this;
        }

        /**
         * Sets the value of {@link DbInstancesProps#getDbInstanceId}
         * @param dbInstanceId Property dbInstanceId: The first ID of the resource.
         * @return {@code this}
         */
        public Builder dbInstanceId(java.lang.String dbInstanceId) {
            this.dbInstanceId = dbInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link DbInstancesProps#getDbInstanceId}
         * @param dbInstanceId Property dbInstanceId: The first ID of the resource.
         * @return {@code this}
         */
        public Builder dbInstanceId(com.aliyun.ros.cdk.core.IResolvable dbInstanceId) {
            this.dbInstanceId = dbInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link DbInstancesProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: Resource Group ID.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link DbInstancesProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: Resource Group ID.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link DbInstancesProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public DbInstancesProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link DbInstancesProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DbInstancesProps {
        private final java.lang.Object dbInstanceDescription;
        private final java.lang.Object dbInstanceId;
        private final java.lang.Object resourceGroupId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.dbInstanceDescription = software.amazon.jsii.Kernel.get(this, "dbInstanceDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbInstanceId = software.amazon.jsii.Kernel.get(this, "dbInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.dbInstanceDescription = builder.dbInstanceDescription;
            this.dbInstanceId = builder.dbInstanceId;
            this.resourceGroupId = builder.resourceGroupId;
        }

        @Override
        public final java.lang.Object getDbInstanceDescription() {
            return this.dbInstanceDescription;
        }

        @Override
        public final java.lang.Object getDbInstanceId() {
            return this.dbInstanceId;
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

            if (this.getDbInstanceDescription() != null) {
                data.set("dbInstanceDescription", om.valueToTree(this.getDbInstanceDescription()));
            }
            if (this.getDbInstanceId() != null) {
                data.set("dbInstanceId", om.valueToTree(this.getDbInstanceId()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-graphdatabase.datasource.DbInstancesProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            DbInstancesProps.Jsii$Proxy that = (DbInstancesProps.Jsii$Proxy) o;

            if (this.dbInstanceDescription != null ? !this.dbInstanceDescription.equals(that.dbInstanceDescription) : that.dbInstanceDescription != null) return false;
            if (this.dbInstanceId != null ? !this.dbInstanceId.equals(that.dbInstanceId) : that.dbInstanceId != null) return false;
            return this.resourceGroupId != null ? this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.dbInstanceDescription != null ? this.dbInstanceDescription.hashCode() : 0;
            result = 31 * result + (this.dbInstanceId != null ? this.dbInstanceId.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            return result;
        }
    }
}
