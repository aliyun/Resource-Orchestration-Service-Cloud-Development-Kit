package com.aliyun.ros.cdk.drds;

/**
 * Properties for defining a <code>DrdsDB</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-drds-drdsdb
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-24T05:57:05.778Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.drds.$Module.class, fqn = "@alicloud/ros-cdk-drds.DrdsDBProps")
@software.amazon.jsii.Jsii.Proxy(DrdsDBProps.Jsii$Proxy.class)
public interface DrdsDBProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property drdsInstanceId: DRDS instance ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDrdsInstanceId();

    /**
     * Property accountName: In the vertical split scenario, an account name with access rights to the corresponding database on all RDSs.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAccountName() {
        return null;
    }

    /**
     * Property dbInstanceIsCreating: Check whether the RDS instance is being created.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbInstanceIsCreating() {
        return null;
    }

    /**
     * Property dbInstType: The type of the attached storage.
     * <p>
     * Valid values:
     * RDS or POLARDB
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbInstType() {
        return null;
    }

    /**
     * Property dbName: Database Name.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbName() {
        return null;
    }

    /**
     * Property encode: Encoding used by the database.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEncode() {
        return null;
    }

    /**
     * Property instDbName:.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstDbName() {
        return null;
    }

    /**
     * Property password: The logon password of the database instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPassword() {
        return null;
    }

    /**
     * Property rdsInstance: This property is required only for vertical partitioning.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRdsInstance() {
        return null;
    }

    /**
     * Property type: Database Sharding method.
     * <p>
     * For more information, see scalability principle. Valid values:
     * HORIZONTAL: indicates HORIZONTAL partitioning, which is commonly known as database
     * and table sharding.
     * VERTICAL: indicates VERTICAL partitioning.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getType() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link DrdsDBProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link DrdsDBProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<DrdsDBProps> {
        java.lang.Object drdsInstanceId;
        java.lang.Object accountName;
        java.lang.Object dbInstanceIsCreating;
        java.lang.Object dbInstType;
        java.lang.Object dbName;
        java.lang.Object encode;
        java.lang.Object instDbName;
        java.lang.Object password;
        java.lang.Object rdsInstance;
        java.lang.Object type;

        /**
         * Sets the value of {@link DrdsDBProps#getDrdsInstanceId}
         * @param drdsInstanceId Property drdsInstanceId: DRDS instance ID. This parameter is required.
         * @return {@code this}
         */
        public Builder drdsInstanceId(java.lang.String drdsInstanceId) {
            this.drdsInstanceId = drdsInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link DrdsDBProps#getDrdsInstanceId}
         * @param drdsInstanceId Property drdsInstanceId: DRDS instance ID. This parameter is required.
         * @return {@code this}
         */
        public Builder drdsInstanceId(com.aliyun.ros.cdk.core.IResolvable drdsInstanceId) {
            this.drdsInstanceId = drdsInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link DrdsDBProps#getAccountName}
         * @param accountName Property accountName: In the vertical split scenario, an account name with access rights to the corresponding database on all RDSs.
         * @return {@code this}
         */
        public Builder accountName(java.lang.String accountName) {
            this.accountName = accountName;
            return this;
        }

        /**
         * Sets the value of {@link DrdsDBProps#getAccountName}
         * @param accountName Property accountName: In the vertical split scenario, an account name with access rights to the corresponding database on all RDSs.
         * @return {@code this}
         */
        public Builder accountName(com.aliyun.ros.cdk.core.IResolvable accountName) {
            this.accountName = accountName;
            return this;
        }

        /**
         * Sets the value of {@link DrdsDBProps#getDbInstanceIsCreating}
         * @param dbInstanceIsCreating Property dbInstanceIsCreating: Check whether the RDS instance is being created.
         * @return {@code this}
         */
        public Builder dbInstanceIsCreating(java.lang.Boolean dbInstanceIsCreating) {
            this.dbInstanceIsCreating = dbInstanceIsCreating;
            return this;
        }

        /**
         * Sets the value of {@link DrdsDBProps#getDbInstanceIsCreating}
         * @param dbInstanceIsCreating Property dbInstanceIsCreating: Check whether the RDS instance is being created.
         * @return {@code this}
         */
        public Builder dbInstanceIsCreating(com.aliyun.ros.cdk.core.IResolvable dbInstanceIsCreating) {
            this.dbInstanceIsCreating = dbInstanceIsCreating;
            return this;
        }

        /**
         * Sets the value of {@link DrdsDBProps#getDbInstType}
         * @param dbInstType Property dbInstType: The type of the attached storage.
         *                   Valid values:
         *                   RDS or POLARDB
         * @return {@code this}
         */
        public Builder dbInstType(java.lang.String dbInstType) {
            this.dbInstType = dbInstType;
            return this;
        }

        /**
         * Sets the value of {@link DrdsDBProps#getDbInstType}
         * @param dbInstType Property dbInstType: The type of the attached storage.
         *                   Valid values:
         *                   RDS or POLARDB
         * @return {@code this}
         */
        public Builder dbInstType(com.aliyun.ros.cdk.core.IResolvable dbInstType) {
            this.dbInstType = dbInstType;
            return this;
        }

        /**
         * Sets the value of {@link DrdsDBProps#getDbName}
         * @param dbName Property dbName: Database Name.
         * @return {@code this}
         */
        public Builder dbName(java.lang.String dbName) {
            this.dbName = dbName;
            return this;
        }

        /**
         * Sets the value of {@link DrdsDBProps#getDbName}
         * @param dbName Property dbName: Database Name.
         * @return {@code this}
         */
        public Builder dbName(com.aliyun.ros.cdk.core.IResolvable dbName) {
            this.dbName = dbName;
            return this;
        }

        /**
         * Sets the value of {@link DrdsDBProps#getEncode}
         * @param encode Property encode: Encoding used by the database.
         * @return {@code this}
         */
        public Builder encode(java.lang.String encode) {
            this.encode = encode;
            return this;
        }

        /**
         * Sets the value of {@link DrdsDBProps#getEncode}
         * @param encode Property encode: Encoding used by the database.
         * @return {@code this}
         */
        public Builder encode(com.aliyun.ros.cdk.core.IResolvable encode) {
            this.encode = encode;
            return this;
        }

        /**
         * Sets the value of {@link DrdsDBProps#getInstDbName}
         * @param instDbName Property instDbName:.
         * @return {@code this}
         */
        public Builder instDbName(com.aliyun.ros.cdk.core.IResolvable instDbName) {
            this.instDbName = instDbName;
            return this;
        }

        /**
         * Sets the value of {@link DrdsDBProps#getInstDbName}
         * @param instDbName Property instDbName:.
         * @return {@code this}
         */
        public Builder instDbName(java.util.List<? extends java.lang.Object> instDbName) {
            this.instDbName = instDbName;
            return this;
        }

        /**
         * Sets the value of {@link DrdsDBProps#getPassword}
         * @param password Property password: The logon password of the database instance.
         * @return {@code this}
         */
        public Builder password(java.lang.String password) {
            this.password = password;
            return this;
        }

        /**
         * Sets the value of {@link DrdsDBProps#getPassword}
         * @param password Property password: The logon password of the database instance.
         * @return {@code this}
         */
        public Builder password(com.aliyun.ros.cdk.core.IResolvable password) {
            this.password = password;
            return this;
        }

        /**
         * Sets the value of {@link DrdsDBProps#getRdsInstance}
         * @param rdsInstance Property rdsInstance: This property is required only for vertical partitioning.
         * @return {@code this}
         */
        public Builder rdsInstance(com.aliyun.ros.cdk.core.IResolvable rdsInstance) {
            this.rdsInstance = rdsInstance;
            return this;
        }

        /**
         * Sets the value of {@link DrdsDBProps#getRdsInstance}
         * @param rdsInstance Property rdsInstance: This property is required only for vertical partitioning.
         * @return {@code this}
         */
        public Builder rdsInstance(java.util.List<? extends java.lang.Object> rdsInstance) {
            this.rdsInstance = rdsInstance;
            return this;
        }

        /**
         * Sets the value of {@link DrdsDBProps#getType}
         * @param type Property type: Database Sharding method.
         *             For more information, see scalability principle. Valid values:
         *             HORIZONTAL: indicates HORIZONTAL partitioning, which is commonly known as database
         *             and table sharding.
         *             VERTICAL: indicates VERTICAL partitioning.
         * @return {@code this}
         */
        public Builder type(java.lang.String type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link DrdsDBProps#getType}
         * @param type Property type: Database Sharding method.
         *             For more information, see scalability principle. Valid values:
         *             HORIZONTAL: indicates HORIZONTAL partitioning, which is commonly known as database
         *             and table sharding.
         *             VERTICAL: indicates VERTICAL partitioning.
         * @return {@code this}
         */
        public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
            this.type = type;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link DrdsDBProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public DrdsDBProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link DrdsDBProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DrdsDBProps {
        private final java.lang.Object drdsInstanceId;
        private final java.lang.Object accountName;
        private final java.lang.Object dbInstanceIsCreating;
        private final java.lang.Object dbInstType;
        private final java.lang.Object dbName;
        private final java.lang.Object encode;
        private final java.lang.Object instDbName;
        private final java.lang.Object password;
        private final java.lang.Object rdsInstance;
        private final java.lang.Object type;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.drdsInstanceId = software.amazon.jsii.Kernel.get(this, "drdsInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.accountName = software.amazon.jsii.Kernel.get(this, "accountName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbInstanceIsCreating = software.amazon.jsii.Kernel.get(this, "dbInstanceIsCreating", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbInstType = software.amazon.jsii.Kernel.get(this, "dbInstType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbName = software.amazon.jsii.Kernel.get(this, "dbName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.encode = software.amazon.jsii.Kernel.get(this, "encode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instDbName = software.amazon.jsii.Kernel.get(this, "instDbName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.password = software.amazon.jsii.Kernel.get(this, "password", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.rdsInstance = software.amazon.jsii.Kernel.get(this, "rdsInstance", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.drdsInstanceId = java.util.Objects.requireNonNull(builder.drdsInstanceId, "drdsInstanceId is required");
            this.accountName = builder.accountName;
            this.dbInstanceIsCreating = builder.dbInstanceIsCreating;
            this.dbInstType = builder.dbInstType;
            this.dbName = builder.dbName;
            this.encode = builder.encode;
            this.instDbName = builder.instDbName;
            this.password = builder.password;
            this.rdsInstance = builder.rdsInstance;
            this.type = builder.type;
        }

        @Override
        public final java.lang.Object getDrdsInstanceId() {
            return this.drdsInstanceId;
        }

        @Override
        public final java.lang.Object getAccountName() {
            return this.accountName;
        }

        @Override
        public final java.lang.Object getDbInstanceIsCreating() {
            return this.dbInstanceIsCreating;
        }

        @Override
        public final java.lang.Object getDbInstType() {
            return this.dbInstType;
        }

        @Override
        public final java.lang.Object getDbName() {
            return this.dbName;
        }

        @Override
        public final java.lang.Object getEncode() {
            return this.encode;
        }

        @Override
        public final java.lang.Object getInstDbName() {
            return this.instDbName;
        }

        @Override
        public final java.lang.Object getPassword() {
            return this.password;
        }

        @Override
        public final java.lang.Object getRdsInstance() {
            return this.rdsInstance;
        }

        @Override
        public final java.lang.Object getType() {
            return this.type;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("drdsInstanceId", om.valueToTree(this.getDrdsInstanceId()));
            if (this.getAccountName() != null) {
                data.set("accountName", om.valueToTree(this.getAccountName()));
            }
            if (this.getDbInstanceIsCreating() != null) {
                data.set("dbInstanceIsCreating", om.valueToTree(this.getDbInstanceIsCreating()));
            }
            if (this.getDbInstType() != null) {
                data.set("dbInstType", om.valueToTree(this.getDbInstType()));
            }
            if (this.getDbName() != null) {
                data.set("dbName", om.valueToTree(this.getDbName()));
            }
            if (this.getEncode() != null) {
                data.set("encode", om.valueToTree(this.getEncode()));
            }
            if (this.getInstDbName() != null) {
                data.set("instDbName", om.valueToTree(this.getInstDbName()));
            }
            if (this.getPassword() != null) {
                data.set("password", om.valueToTree(this.getPassword()));
            }
            if (this.getRdsInstance() != null) {
                data.set("rdsInstance", om.valueToTree(this.getRdsInstance()));
            }
            if (this.getType() != null) {
                data.set("type", om.valueToTree(this.getType()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-drds.DrdsDBProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            DrdsDBProps.Jsii$Proxy that = (DrdsDBProps.Jsii$Proxy) o;

            if (!drdsInstanceId.equals(that.drdsInstanceId)) return false;
            if (this.accountName != null ? !this.accountName.equals(that.accountName) : that.accountName != null) return false;
            if (this.dbInstanceIsCreating != null ? !this.dbInstanceIsCreating.equals(that.dbInstanceIsCreating) : that.dbInstanceIsCreating != null) return false;
            if (this.dbInstType != null ? !this.dbInstType.equals(that.dbInstType) : that.dbInstType != null) return false;
            if (this.dbName != null ? !this.dbName.equals(that.dbName) : that.dbName != null) return false;
            if (this.encode != null ? !this.encode.equals(that.encode) : that.encode != null) return false;
            if (this.instDbName != null ? !this.instDbName.equals(that.instDbName) : that.instDbName != null) return false;
            if (this.password != null ? !this.password.equals(that.password) : that.password != null) return false;
            if (this.rdsInstance != null ? !this.rdsInstance.equals(that.rdsInstance) : that.rdsInstance != null) return false;
            return this.type != null ? this.type.equals(that.type) : that.type == null;
        }

        @Override
        public final int hashCode() {
            int result = this.drdsInstanceId.hashCode();
            result = 31 * result + (this.accountName != null ? this.accountName.hashCode() : 0);
            result = 31 * result + (this.dbInstanceIsCreating != null ? this.dbInstanceIsCreating.hashCode() : 0);
            result = 31 * result + (this.dbInstType != null ? this.dbInstType.hashCode() : 0);
            result = 31 * result + (this.dbName != null ? this.dbName.hashCode() : 0);
            result = 31 * result + (this.encode != null ? this.encode.hashCode() : 0);
            result = 31 * result + (this.instDbName != null ? this.instDbName.hashCode() : 0);
            result = 31 * result + (this.password != null ? this.password.hashCode() : 0);
            result = 31 * result + (this.rdsInstance != null ? this.rdsInstance.hashCode() : 0);
            result = 31 * result + (this.type != null ? this.type.hashCode() : 0);
            return result;
        }
    }
}
