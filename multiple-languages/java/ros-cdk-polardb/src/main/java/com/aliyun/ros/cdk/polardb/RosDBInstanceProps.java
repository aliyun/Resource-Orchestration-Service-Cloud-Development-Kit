package com.aliyun.ros.cdk.polardb;

/**
 * Properties for defining a `ALIYUN::POLARDB::DBInstance`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:34.282Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.polardb.$Module.class, fqn = "@alicloud/ros-cdk-polardb.RosDBInstanceProps")
@software.amazon.jsii.Jsii.Proxy(RosDBInstanceProps.Jsii$Proxy.class)
public interface RosDBInstanceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getCharacterSetName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getDbClusterId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getDbName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getAccountName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getAccountPrivilege() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDbDescription() {
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
        private java.lang.String characterSetName;
        private java.lang.String dbClusterId;
        private java.lang.String dbName;
        private java.lang.String accountName;
        private java.lang.String accountPrivilege;
        private java.lang.String dbDescription;

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
         * Sets the value of {@link RosDBInstanceProps#getDbClusterId}
         * @param dbClusterId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbClusterId(java.lang.String dbClusterId) {
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
         * Sets the value of {@link RosDBInstanceProps#getAccountName}
         * @param accountName the value to be set.
         * @return {@code this}
         */
        public Builder accountName(java.lang.String accountName) {
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
         * Sets the value of {@link RosDBInstanceProps#getDbDescription}
         * @param dbDescription the value to be set.
         * @return {@code this}
         */
        public Builder dbDescription(java.lang.String dbDescription) {
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
            return new Jsii$Proxy(characterSetName, dbClusterId, dbName, accountName, accountPrivilege, dbDescription);
        }
    }

    /**
     * An implementation for {@link RosDBInstanceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosDBInstanceProps {
        private final java.lang.String characterSetName;
        private final java.lang.String dbClusterId;
        private final java.lang.String dbName;
        private final java.lang.String accountName;
        private final java.lang.String accountPrivilege;
        private final java.lang.String dbDescription;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.characterSetName = software.amazon.jsii.Kernel.get(this, "characterSetName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.dbClusterId = software.amazon.jsii.Kernel.get(this, "dbClusterId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.dbName = software.amazon.jsii.Kernel.get(this, "dbName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.accountName = software.amazon.jsii.Kernel.get(this, "accountName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.accountPrivilege = software.amazon.jsii.Kernel.get(this, "accountPrivilege", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.dbDescription = software.amazon.jsii.Kernel.get(this, "dbDescription", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String characterSetName, final java.lang.String dbClusterId, final java.lang.String dbName, final java.lang.String accountName, final java.lang.String accountPrivilege, final java.lang.String dbDescription) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.characterSetName = java.util.Objects.requireNonNull(characterSetName, "characterSetName is required");
            this.dbClusterId = java.util.Objects.requireNonNull(dbClusterId, "dbClusterId is required");
            this.dbName = java.util.Objects.requireNonNull(dbName, "dbName is required");
            this.accountName = accountName;
            this.accountPrivilege = accountPrivilege;
            this.dbDescription = dbDescription;
        }

        @Override
        public final java.lang.String getCharacterSetName() {
            return this.characterSetName;
        }

        @Override
        public final java.lang.String getDbClusterId() {
            return this.dbClusterId;
        }

        @Override
        public final java.lang.String getDbName() {
            return this.dbName;
        }

        @Override
        public final java.lang.String getAccountName() {
            return this.accountName;
        }

        @Override
        public final java.lang.String getAccountPrivilege() {
            return this.accountPrivilege;
        }

        @Override
        public final java.lang.String getDbDescription() {
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
            return this.dbDescription != null ? this.dbDescription.equals(that.dbDescription) : that.dbDescription == null;
        }

        @Override
        public final int hashCode() {
            int result = this.characterSetName.hashCode();
            result = 31 * result + (this.dbClusterId.hashCode());
            result = 31 * result + (this.dbName.hashCode());
            result = 31 * result + (this.accountName != null ? this.accountName.hashCode() : 0);
            result = 31 * result + (this.accountPrivilege != null ? this.accountPrivilege.hashCode() : 0);
            result = 31 * result + (this.dbDescription != null ? this.dbDescription.hashCode() : 0);
            return result;
        }
    }
}
