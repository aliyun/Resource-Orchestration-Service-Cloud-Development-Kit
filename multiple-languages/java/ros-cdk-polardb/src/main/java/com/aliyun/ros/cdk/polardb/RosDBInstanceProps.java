package com.aliyun.ros.cdk.polardb;

/**
 * Properties for defining a <code>ALIYUN::POLARDB::DBInstance</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-01T09:26:38.821Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.polardb.$Module.class, fqn = "@alicloud/ros-cdk-polardb.RosDBInstanceProps")
@software.amazon.jsii.Jsii.Proxy(RosDBInstanceProps.Jsii$Proxy.class)
public interface RosDBInstanceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCharacterSetName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbClusterId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAccountName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAccountPrivilege() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCollate() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCtype() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbDescription() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosDBInstanceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosDBInstanceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosDBInstanceProps> {
        java.lang.Object characterSetName;
        java.lang.Object dbClusterId;
        java.lang.Object dbName;
        java.lang.Object accountName;
        java.lang.Object accountPrivilege;
        java.lang.Object collate;
        java.lang.Object ctype;
        java.lang.Object dbDescription;

        /**
         * Sets the value of {@link RosDBInstanceProps#getCharacterSetName}
         * @param characterSetName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder characterSetName(java.lang.String characterSetName) {
            this.characterSetName = characterSetName;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getCharacterSetName}
         * @param characterSetName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder characterSetName(com.aliyun.ros.cdk.core.IResolvable characterSetName) {
            this.characterSetName = characterSetName;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getDbClusterId}
         * @param dbClusterId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbClusterId(java.lang.String dbClusterId) {
            this.dbClusterId = dbClusterId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getDbClusterId}
         * @param dbClusterId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbClusterId(com.aliyun.ros.cdk.core.IResolvable dbClusterId) {
            this.dbClusterId = dbClusterId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getDbName}
         * @param dbName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbName(java.lang.String dbName) {
            this.dbName = dbName;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getDbName}
         * @param dbName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbName(com.aliyun.ros.cdk.core.IResolvable dbName) {
            this.dbName = dbName;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getAccountName}
         * @param accountName the value to be set.
         * @return {@code this}
         */
        public Builder accountName(java.lang.String accountName) {
            this.accountName = accountName;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getAccountName}
         * @param accountName the value to be set.
         * @return {@code this}
         */
        public Builder accountName(com.aliyun.ros.cdk.core.IResolvable accountName) {
            this.accountName = accountName;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getAccountPrivilege}
         * @param accountPrivilege the value to be set.
         * @return {@code this}
         */
        public Builder accountPrivilege(java.lang.String accountPrivilege) {
            this.accountPrivilege = accountPrivilege;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getAccountPrivilege}
         * @param accountPrivilege the value to be set.
         * @return {@code this}
         */
        public Builder accountPrivilege(com.aliyun.ros.cdk.core.IResolvable accountPrivilege) {
            this.accountPrivilege = accountPrivilege;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getCollate}
         * @param collate the value to be set.
         * @return {@code this}
         */
        public Builder collate(java.lang.String collate) {
            this.collate = collate;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getCollate}
         * @param collate the value to be set.
         * @return {@code this}
         */
        public Builder collate(com.aliyun.ros.cdk.core.IResolvable collate) {
            this.collate = collate;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getCtype}
         * @param ctype the value to be set.
         * @return {@code this}
         */
        public Builder ctype(java.lang.String ctype) {
            this.ctype = ctype;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getCtype}
         * @param ctype the value to be set.
         * @return {@code this}
         */
        public Builder ctype(com.aliyun.ros.cdk.core.IResolvable ctype) {
            this.ctype = ctype;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getDbDescription}
         * @param dbDescription the value to be set.
         * @return {@code this}
         */
        public Builder dbDescription(java.lang.String dbDescription) {
            this.dbDescription = dbDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getDbDescription}
         * @param dbDescription the value to be set.
         * @return {@code this}
         */
        public Builder dbDescription(com.aliyun.ros.cdk.core.IResolvable dbDescription) {
            this.dbDescription = dbDescription;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosDBInstanceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosDBInstanceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosDBInstanceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosDBInstanceProps {
        private final java.lang.Object characterSetName;
        private final java.lang.Object dbClusterId;
        private final java.lang.Object dbName;
        private final java.lang.Object accountName;
        private final java.lang.Object accountPrivilege;
        private final java.lang.Object collate;
        private final java.lang.Object ctype;
        private final java.lang.Object dbDescription;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.characterSetName = software.amazon.jsii.Kernel.get(this, "characterSetName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbClusterId = software.amazon.jsii.Kernel.get(this, "dbClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbName = software.amazon.jsii.Kernel.get(this, "dbName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.accountName = software.amazon.jsii.Kernel.get(this, "accountName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.accountPrivilege = software.amazon.jsii.Kernel.get(this, "accountPrivilege", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.collate = software.amazon.jsii.Kernel.get(this, "collate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ctype = software.amazon.jsii.Kernel.get(this, "ctype", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbDescription = software.amazon.jsii.Kernel.get(this, "dbDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.characterSetName = java.util.Objects.requireNonNull(builder.characterSetName, "characterSetName is required");
            this.dbClusterId = java.util.Objects.requireNonNull(builder.dbClusterId, "dbClusterId is required");
            this.dbName = java.util.Objects.requireNonNull(builder.dbName, "dbName is required");
            this.accountName = builder.accountName;
            this.accountPrivilege = builder.accountPrivilege;
            this.collate = builder.collate;
            this.ctype = builder.ctype;
            this.dbDescription = builder.dbDescription;
        }

        @Override
        public final java.lang.Object getCharacterSetName() {
            return this.characterSetName;
        }

        @Override
        public final java.lang.Object getDbClusterId() {
            return this.dbClusterId;
        }

        @Override
        public final java.lang.Object getDbName() {
            return this.dbName;
        }

        @Override
        public final java.lang.Object getAccountName() {
            return this.accountName;
        }

        @Override
        public final java.lang.Object getAccountPrivilege() {
            return this.accountPrivilege;
        }

        @Override
        public final java.lang.Object getCollate() {
            return this.collate;
        }

        @Override
        public final java.lang.Object getCtype() {
            return this.ctype;
        }

        @Override
        public final java.lang.Object getDbDescription() {
            return this.dbDescription;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("characterSetName", om.valueToTree(this.getCharacterSetName()));
            data.set("dbClusterId", om.valueToTree(this.getDbClusterId()));
            data.set("dbName", om.valueToTree(this.getDbName()));
            if (this.getAccountName() != null) {
                data.set("accountName", om.valueToTree(this.getAccountName()));
            }
            if (this.getAccountPrivilege() != null) {
                data.set("accountPrivilege", om.valueToTree(this.getAccountPrivilege()));
            }
            if (this.getCollate() != null) {
                data.set("collate", om.valueToTree(this.getCollate()));
            }
            if (this.getCtype() != null) {
                data.set("ctype", om.valueToTree(this.getCtype()));
            }
            if (this.getDbDescription() != null) {
                data.set("dbDescription", om.valueToTree(this.getDbDescription()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-polardb.RosDBInstanceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosDBInstanceProps.Jsii$Proxy that = (RosDBInstanceProps.Jsii$Proxy) o;

            if (!characterSetName.equals(that.characterSetName)) return false;
            if (!dbClusterId.equals(that.dbClusterId)) return false;
            if (!dbName.equals(that.dbName)) return false;
            if (this.accountName != null ? !this.accountName.equals(that.accountName) : that.accountName != null) return false;
            if (this.accountPrivilege != null ? !this.accountPrivilege.equals(that.accountPrivilege) : that.accountPrivilege != null) return false;
            if (this.collate != null ? !this.collate.equals(that.collate) : that.collate != null) return false;
            if (this.ctype != null ? !this.ctype.equals(that.ctype) : that.ctype != null) return false;
            return this.dbDescription != null ? this.dbDescription.equals(that.dbDescription) : that.dbDescription == null;
        }

        @Override
        public final int hashCode() {
            int result = this.characterSetName.hashCode();
            result = 31 * result + (this.dbClusterId.hashCode());
            result = 31 * result + (this.dbName.hashCode());
            result = 31 * result + (this.accountName != null ? this.accountName.hashCode() : 0);
            result = 31 * result + (this.accountPrivilege != null ? this.accountPrivilege.hashCode() : 0);
            result = 31 * result + (this.collate != null ? this.collate.hashCode() : 0);
            result = 31 * result + (this.ctype != null ? this.ctype.hashCode() : 0);
            result = 31 * result + (this.dbDescription != null ? this.dbDescription.hashCode() : 0);
            return result;
        }
    }
}
