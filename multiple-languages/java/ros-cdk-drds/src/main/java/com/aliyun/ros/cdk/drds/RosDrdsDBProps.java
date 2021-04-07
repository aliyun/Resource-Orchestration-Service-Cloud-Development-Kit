package com.aliyun.ros.cdk.drds;

/**
 * Properties for defining a `ALIYUN::DRDS::DrdsDB`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.27.0 (build 07d848a)", date = "2021-04-07T04:01:42.098Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.drds.$Module.class, fqn = "@alicloud/ros-cdk-drds.RosDrdsDBProps")
@software.amazon.jsii.Jsii.Proxy(RosDrdsDBProps.Jsii$Proxy.class)
public interface RosDrdsDBProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDrdsInstanceId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAccountName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbInstanceIsCreating() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbInstType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEncode() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstDbName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPassword() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRdsInstance() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getType() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosDrdsDBProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosDrdsDBProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosDrdsDBProps> {
        private java.lang.Object drdsInstanceId;
        private java.lang.Object accountName;
        private java.lang.Object dbInstanceIsCreating;
        private java.lang.Object dbInstType;
        private java.lang.Object dbName;
        private java.lang.Object encode;
        private java.lang.Object instDbName;
        private java.lang.Object password;
        private java.lang.Object rdsInstance;
        private java.lang.Object type;

        /**
         * Sets the value of {@link RosDrdsDBProps#getDrdsInstanceId}
         * @param drdsInstanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder drdsInstanceId(java.lang.String drdsInstanceId) {
            this.drdsInstanceId = drdsInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosDrdsDBProps#getDrdsInstanceId}
         * @param drdsInstanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder drdsInstanceId(com.aliyun.ros.cdk.core.IResolvable drdsInstanceId) {
            this.drdsInstanceId = drdsInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosDrdsDBProps#getAccountName}
         * @param accountName the value to be set.
         * @return {@code this}
         */
        public Builder accountName(java.lang.String accountName) {
            this.accountName = accountName;
            return this;
        }

        /**
         * Sets the value of {@link RosDrdsDBProps#getAccountName}
         * @param accountName the value to be set.
         * @return {@code this}
         */
        public Builder accountName(com.aliyun.ros.cdk.core.IResolvable accountName) {
            this.accountName = accountName;
            return this;
        }

        /**
         * Sets the value of {@link RosDrdsDBProps#getDbInstanceIsCreating}
         * @param dbInstanceIsCreating the value to be set.
         * @return {@code this}
         */
        public Builder dbInstanceIsCreating(java.lang.Boolean dbInstanceIsCreating) {
            this.dbInstanceIsCreating = dbInstanceIsCreating;
            return this;
        }

        /**
         * Sets the value of {@link RosDrdsDBProps#getDbInstanceIsCreating}
         * @param dbInstanceIsCreating the value to be set.
         * @return {@code this}
         */
        public Builder dbInstanceIsCreating(com.aliyun.ros.cdk.core.IResolvable dbInstanceIsCreating) {
            this.dbInstanceIsCreating = dbInstanceIsCreating;
            return this;
        }

        /**
         * Sets the value of {@link RosDrdsDBProps#getDbInstType}
         * @param dbInstType the value to be set.
         * @return {@code this}
         */
        public Builder dbInstType(java.lang.String dbInstType) {
            this.dbInstType = dbInstType;
            return this;
        }

        /**
         * Sets the value of {@link RosDrdsDBProps#getDbInstType}
         * @param dbInstType the value to be set.
         * @return {@code this}
         */
        public Builder dbInstType(com.aliyun.ros.cdk.core.IResolvable dbInstType) {
            this.dbInstType = dbInstType;
            return this;
        }

        /**
         * Sets the value of {@link RosDrdsDBProps#getDbName}
         * @param dbName the value to be set.
         * @return {@code this}
         */
        public Builder dbName(java.lang.String dbName) {
            this.dbName = dbName;
            return this;
        }

        /**
         * Sets the value of {@link RosDrdsDBProps#getDbName}
         * @param dbName the value to be set.
         * @return {@code this}
         */
        public Builder dbName(com.aliyun.ros.cdk.core.IResolvable dbName) {
            this.dbName = dbName;
            return this;
        }

        /**
         * Sets the value of {@link RosDrdsDBProps#getEncode}
         * @param encode the value to be set.
         * @return {@code this}
         */
        public Builder encode(java.lang.String encode) {
            this.encode = encode;
            return this;
        }

        /**
         * Sets the value of {@link RosDrdsDBProps#getEncode}
         * @param encode the value to be set.
         * @return {@code this}
         */
        public Builder encode(com.aliyun.ros.cdk.core.IResolvable encode) {
            this.encode = encode;
            return this;
        }

        /**
         * Sets the value of {@link RosDrdsDBProps#getInstDbName}
         * @param instDbName the value to be set.
         * @return {@code this}
         */
        public Builder instDbName(com.aliyun.ros.cdk.core.IResolvable instDbName) {
            this.instDbName = instDbName;
            return this;
        }

        /**
         * Sets the value of {@link RosDrdsDBProps#getInstDbName}
         * @param instDbName the value to be set.
         * @return {@code this}
         */
        public Builder instDbName(java.util.List<? extends java.lang.Object> instDbName) {
            this.instDbName = instDbName;
            return this;
        }

        /**
         * Sets the value of {@link RosDrdsDBProps#getPassword}
         * @param password the value to be set.
         * @return {@code this}
         */
        public Builder password(java.lang.String password) {
            this.password = password;
            return this;
        }

        /**
         * Sets the value of {@link RosDrdsDBProps#getPassword}
         * @param password the value to be set.
         * @return {@code this}
         */
        public Builder password(com.aliyun.ros.cdk.core.IResolvable password) {
            this.password = password;
            return this;
        }

        /**
         * Sets the value of {@link RosDrdsDBProps#getRdsInstance}
         * @param rdsInstance the value to be set.
         * @return {@code this}
         */
        public Builder rdsInstance(com.aliyun.ros.cdk.core.IResolvable rdsInstance) {
            this.rdsInstance = rdsInstance;
            return this;
        }

        /**
         * Sets the value of {@link RosDrdsDBProps#getRdsInstance}
         * @param rdsInstance the value to be set.
         * @return {@code this}
         */
        public Builder rdsInstance(java.util.List<? extends java.lang.Object> rdsInstance) {
            this.rdsInstance = rdsInstance;
            return this;
        }

        /**
         * Sets the value of {@link RosDrdsDBProps#getType}
         * @param type the value to be set.
         * @return {@code this}
         */
        public Builder type(java.lang.String type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link RosDrdsDBProps#getType}
         * @param type the value to be set.
         * @return {@code this}
         */
        public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
            this.type = type;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosDrdsDBProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosDrdsDBProps build() {
            return new Jsii$Proxy(drdsInstanceId, accountName, dbInstanceIsCreating, dbInstType, dbName, encode, instDbName, password, rdsInstance, type);
        }
    }

    /**
     * An implementation for {@link RosDrdsDBProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosDrdsDBProps {
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
        protected Jsii$Proxy(final java.lang.Object drdsInstanceId, final java.lang.Object accountName, final java.lang.Object dbInstanceIsCreating, final java.lang.Object dbInstType, final java.lang.Object dbName, final java.lang.Object encode, final java.lang.Object instDbName, final java.lang.Object password, final java.lang.Object rdsInstance, final java.lang.Object type) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.drdsInstanceId = java.util.Objects.requireNonNull(drdsInstanceId, "drdsInstanceId is required");
            this.accountName = accountName;
            this.dbInstanceIsCreating = dbInstanceIsCreating;
            this.dbInstType = dbInstType;
            this.dbName = dbName;
            this.encode = encode;
            this.instDbName = instDbName;
            this.password = password;
            this.rdsInstance = rdsInstance;
            this.type = type;
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-drds.RosDrdsDBProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosDrdsDBProps.Jsii$Proxy that = (RosDrdsDBProps.Jsii$Proxy) o;

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
