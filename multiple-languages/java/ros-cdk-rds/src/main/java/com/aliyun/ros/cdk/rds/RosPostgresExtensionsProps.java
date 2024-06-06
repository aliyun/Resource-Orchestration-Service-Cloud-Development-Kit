package com.aliyun.ros.cdk.rds;

/**
 * Properties for defining a <code>RosPostgresExtensions</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-postgresextensions
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-06T03:35:17.042Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.rds.$Module.class, fqn = "@alicloud/ros-cdk-rds.RosPostgresExtensionsProps")
@software.amazon.jsii.Jsii.Proxy(RosPostgresExtensionsProps.Jsii$Proxy.class)
public interface RosPostgresExtensionsProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAccountName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbInstanceId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getExtensions() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRiskConfirmed() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSourceDatabase() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosPostgresExtensionsProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosPostgresExtensionsProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosPostgresExtensionsProps> {
        java.lang.Object accountName;
        java.lang.Object dbInstanceId;
        java.lang.Object dbName;
        java.lang.Object extensions;
        java.lang.Object resourceGroupId;
        java.lang.Object riskConfirmed;
        java.lang.Object sourceDatabase;

        /**
         * Sets the value of {@link RosPostgresExtensionsProps#getAccountName}
         * @param accountName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder accountName(java.lang.String accountName) {
            this.accountName = accountName;
            return this;
        }

        /**
         * Sets the value of {@link RosPostgresExtensionsProps#getAccountName}
         * @param accountName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder accountName(com.aliyun.ros.cdk.core.IResolvable accountName) {
            this.accountName = accountName;
            return this;
        }

        /**
         * Sets the value of {@link RosPostgresExtensionsProps#getDbInstanceId}
         * @param dbInstanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbInstanceId(java.lang.String dbInstanceId) {
            this.dbInstanceId = dbInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosPostgresExtensionsProps#getDbInstanceId}
         * @param dbInstanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbInstanceId(com.aliyun.ros.cdk.core.IResolvable dbInstanceId) {
            this.dbInstanceId = dbInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosPostgresExtensionsProps#getDbName}
         * @param dbName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbName(java.lang.String dbName) {
            this.dbName = dbName;
            return this;
        }

        /**
         * Sets the value of {@link RosPostgresExtensionsProps#getDbName}
         * @param dbName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbName(com.aliyun.ros.cdk.core.IResolvable dbName) {
            this.dbName = dbName;
            return this;
        }

        /**
         * Sets the value of {@link RosPostgresExtensionsProps#getExtensions}
         * @param extensions the value to be set.
         * @return {@code this}
         */
        public Builder extensions(com.aliyun.ros.cdk.core.IResolvable extensions) {
            this.extensions = extensions;
            return this;
        }

        /**
         * Sets the value of {@link RosPostgresExtensionsProps#getExtensions}
         * @param extensions the value to be set.
         * @return {@code this}
         */
        public Builder extensions(java.util.List<? extends java.lang.Object> extensions) {
            this.extensions = extensions;
            return this;
        }

        /**
         * Sets the value of {@link RosPostgresExtensionsProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosPostgresExtensionsProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosPostgresExtensionsProps#getRiskConfirmed}
         * @param riskConfirmed the value to be set.
         * @return {@code this}
         */
        public Builder riskConfirmed(java.lang.Boolean riskConfirmed) {
            this.riskConfirmed = riskConfirmed;
            return this;
        }

        /**
         * Sets the value of {@link RosPostgresExtensionsProps#getRiskConfirmed}
         * @param riskConfirmed the value to be set.
         * @return {@code this}
         */
        public Builder riskConfirmed(com.aliyun.ros.cdk.core.IResolvable riskConfirmed) {
            this.riskConfirmed = riskConfirmed;
            return this;
        }

        /**
         * Sets the value of {@link RosPostgresExtensionsProps#getSourceDatabase}
         * @param sourceDatabase the value to be set.
         * @return {@code this}
         */
        public Builder sourceDatabase(java.lang.String sourceDatabase) {
            this.sourceDatabase = sourceDatabase;
            return this;
        }

        /**
         * Sets the value of {@link RosPostgresExtensionsProps#getSourceDatabase}
         * @param sourceDatabase the value to be set.
         * @return {@code this}
         */
        public Builder sourceDatabase(com.aliyun.ros.cdk.core.IResolvable sourceDatabase) {
            this.sourceDatabase = sourceDatabase;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosPostgresExtensionsProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosPostgresExtensionsProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosPostgresExtensionsProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosPostgresExtensionsProps {
        private final java.lang.Object accountName;
        private final java.lang.Object dbInstanceId;
        private final java.lang.Object dbName;
        private final java.lang.Object extensions;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object riskConfirmed;
        private final java.lang.Object sourceDatabase;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.accountName = software.amazon.jsii.Kernel.get(this, "accountName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbInstanceId = software.amazon.jsii.Kernel.get(this, "dbInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbName = software.amazon.jsii.Kernel.get(this, "dbName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.extensions = software.amazon.jsii.Kernel.get(this, "extensions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.riskConfirmed = software.amazon.jsii.Kernel.get(this, "riskConfirmed", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceDatabase = software.amazon.jsii.Kernel.get(this, "sourceDatabase", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.accountName = java.util.Objects.requireNonNull(builder.accountName, "accountName is required");
            this.dbInstanceId = java.util.Objects.requireNonNull(builder.dbInstanceId, "dbInstanceId is required");
            this.dbName = java.util.Objects.requireNonNull(builder.dbName, "dbName is required");
            this.extensions = builder.extensions;
            this.resourceGroupId = builder.resourceGroupId;
            this.riskConfirmed = builder.riskConfirmed;
            this.sourceDatabase = builder.sourceDatabase;
        }

        @Override
        public final java.lang.Object getAccountName() {
            return this.accountName;
        }

        @Override
        public final java.lang.Object getDbInstanceId() {
            return this.dbInstanceId;
        }

        @Override
        public final java.lang.Object getDbName() {
            return this.dbName;
        }

        @Override
        public final java.lang.Object getExtensions() {
            return this.extensions;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getRiskConfirmed() {
            return this.riskConfirmed;
        }

        @Override
        public final java.lang.Object getSourceDatabase() {
            return this.sourceDatabase;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("accountName", om.valueToTree(this.getAccountName()));
            data.set("dbInstanceId", om.valueToTree(this.getDbInstanceId()));
            data.set("dbName", om.valueToTree(this.getDbName()));
            if (this.getExtensions() != null) {
                data.set("extensions", om.valueToTree(this.getExtensions()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getRiskConfirmed() != null) {
                data.set("riskConfirmed", om.valueToTree(this.getRiskConfirmed()));
            }
            if (this.getSourceDatabase() != null) {
                data.set("sourceDatabase", om.valueToTree(this.getSourceDatabase()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-rds.RosPostgresExtensionsProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosPostgresExtensionsProps.Jsii$Proxy that = (RosPostgresExtensionsProps.Jsii$Proxy) o;

            if (!accountName.equals(that.accountName)) return false;
            if (!dbInstanceId.equals(that.dbInstanceId)) return false;
            if (!dbName.equals(that.dbName)) return false;
            if (this.extensions != null ? !this.extensions.equals(that.extensions) : that.extensions != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.riskConfirmed != null ? !this.riskConfirmed.equals(that.riskConfirmed) : that.riskConfirmed != null) return false;
            return this.sourceDatabase != null ? this.sourceDatabase.equals(that.sourceDatabase) : that.sourceDatabase == null;
        }

        @Override
        public final int hashCode() {
            int result = this.accountName.hashCode();
            result = 31 * result + (this.dbInstanceId.hashCode());
            result = 31 * result + (this.dbName.hashCode());
            result = 31 * result + (this.extensions != null ? this.extensions.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.riskConfirmed != null ? this.riskConfirmed.hashCode() : 0);
            result = 31 * result + (this.sourceDatabase != null ? this.sourceDatabase.hashCode() : 0);
            return result;
        }
    }
}
