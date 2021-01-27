package com.aliyun.ros.cdk.polardb;

/**
 * Properties for defining a `ALIYUN::POLARDB::Account`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:34.251Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.polardb.$Module.class, fqn = "@alicloud/ros-cdk-polardb.RosAccountProps")
@software.amazon.jsii.Jsii.Proxy(RosAccountProps.Jsii$Proxy.class)
public interface RosAccountProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getAccountName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getAccountPassword();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getDbClusterId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getAccountDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getAccountPrivilege() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getAccountType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDbName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosAccountProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosAccountProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosAccountProps> {
        private java.lang.String accountName;
        private java.lang.String accountPassword;
        private java.lang.String dbClusterId;
        private java.lang.String accountDescription;
        private java.lang.String accountPrivilege;
        private java.lang.String accountType;
        private java.lang.String dbName;

        /**
         * Sets the value of {@link RosAccountProps#getAccountName}
         * @param accountName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder accountName(java.lang.String accountName) {
            this.accountName = accountName;
            return this;
        }

        /**
         * Sets the value of {@link RosAccountProps#getAccountPassword}
         * @param accountPassword the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder accountPassword(java.lang.String accountPassword) {
            this.accountPassword = accountPassword;
            return this;
        }

        /**
         * Sets the value of {@link RosAccountProps#getDbClusterId}
         * @param dbClusterId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbClusterId(java.lang.String dbClusterId) {
            this.dbClusterId = dbClusterId;
            return this;
        }

        /**
         * Sets the value of {@link RosAccountProps#getAccountDescription}
         * @param accountDescription the value to be set.
         * @return {@code this}
         */
        public Builder accountDescription(java.lang.String accountDescription) {
            this.accountDescription = accountDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosAccountProps#getAccountPrivilege}
         * @param accountPrivilege the value to be set.
         * @return {@code this}
         */
        public Builder accountPrivilege(java.lang.String accountPrivilege) {
            this.accountPrivilege = accountPrivilege;
            return this;
        }

        /**
         * Sets the value of {@link RosAccountProps#getAccountType}
         * @param accountType the value to be set.
         * @return {@code this}
         */
        public Builder accountType(java.lang.String accountType) {
            this.accountType = accountType;
            return this;
        }

        /**
         * Sets the value of {@link RosAccountProps#getDbName}
         * @param dbName the value to be set.
         * @return {@code this}
         */
        public Builder dbName(java.lang.String dbName) {
            this.dbName = dbName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosAccountProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosAccountProps build() {
            return new Jsii$Proxy(accountName, accountPassword, dbClusterId, accountDescription, accountPrivilege, accountType, dbName);
        }
    }

    /**
     * An implementation for {@link RosAccountProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosAccountProps {
        private final java.lang.String accountName;
        private final java.lang.String accountPassword;
        private final java.lang.String dbClusterId;
        private final java.lang.String accountDescription;
        private final java.lang.String accountPrivilege;
        private final java.lang.String accountType;
        private final java.lang.String dbName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.accountName = software.amazon.jsii.Kernel.get(this, "accountName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.accountPassword = software.amazon.jsii.Kernel.get(this, "accountPassword", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.dbClusterId = software.amazon.jsii.Kernel.get(this, "dbClusterId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.accountDescription = software.amazon.jsii.Kernel.get(this, "accountDescription", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.accountPrivilege = software.amazon.jsii.Kernel.get(this, "accountPrivilege", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.accountType = software.amazon.jsii.Kernel.get(this, "accountType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.dbName = software.amazon.jsii.Kernel.get(this, "dbName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String accountName, final java.lang.String accountPassword, final java.lang.String dbClusterId, final java.lang.String accountDescription, final java.lang.String accountPrivilege, final java.lang.String accountType, final java.lang.String dbName) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.accountName = java.util.Objects.requireNonNull(accountName, "accountName is required");
            this.accountPassword = java.util.Objects.requireNonNull(accountPassword, "accountPassword is required");
            this.dbClusterId = java.util.Objects.requireNonNull(dbClusterId, "dbClusterId is required");
            this.accountDescription = accountDescription;
            this.accountPrivilege = accountPrivilege;
            this.accountType = accountType;
            this.dbName = dbName;
        }

        @Override
        public final java.lang.String getAccountName() {
            return this.accountName;
        }

        @Override
        public final java.lang.String getAccountPassword() {
            return this.accountPassword;
        }

        @Override
        public final java.lang.String getDbClusterId() {
            return this.dbClusterId;
        }

        @Override
        public final java.lang.String getAccountDescription() {
            return this.accountDescription;
        }

        @Override
        public final java.lang.String getAccountPrivilege() {
            return this.accountPrivilege;
        }

        @Override
        public final java.lang.String getAccountType() {
            return this.accountType;
        }

        @Override
        public final java.lang.String getDbName() {
            return this.dbName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("accountName", om.valueToTree(this.getAccountName()));
            data.set("accountPassword", om.valueToTree(this.getAccountPassword()));
            data.set("dbClusterId", om.valueToTree(this.getDbClusterId()));
            if (this.getAccountDescription() != null) {
                data.set("accountDescription", om.valueToTree(this.getAccountDescription()));
            }
            if (this.getAccountPrivilege() != null) {
                data.set("accountPrivilege", om.valueToTree(this.getAccountPrivilege()));
            }
            if (this.getAccountType() != null) {
                data.set("accountType", om.valueToTree(this.getAccountType()));
            }
            if (this.getDbName() != null) {
                data.set("dbName", om.valueToTree(this.getDbName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-polardb.RosAccountProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosAccountProps.Jsii$Proxy that = (RosAccountProps.Jsii$Proxy) o;

            if (!accountName.equals(that.accountName)) return false;
            if (!accountPassword.equals(that.accountPassword)) return false;
            if (!dbClusterId.equals(that.dbClusterId)) return false;
            if (this.accountDescription != null ? !this.accountDescription.equals(that.accountDescription) : that.accountDescription != null) return false;
            if (this.accountPrivilege != null ? !this.accountPrivilege.equals(that.accountPrivilege) : that.accountPrivilege != null) return false;
            if (this.accountType != null ? !this.accountType.equals(that.accountType) : that.accountType != null) return false;
            return this.dbName != null ? this.dbName.equals(that.dbName) : that.dbName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.accountName.hashCode();
            result = 31 * result + (this.accountPassword.hashCode());
            result = 31 * result + (this.dbClusterId.hashCode());
            result = 31 * result + (this.accountDescription != null ? this.accountDescription.hashCode() : 0);
            result = 31 * result + (this.accountPrivilege != null ? this.accountPrivilege.hashCode() : 0);
            result = 31 * result + (this.accountType != null ? this.accountType.hashCode() : 0);
            result = 31 * result + (this.dbName != null ? this.dbName.hashCode() : 0);
            return result;
        }
    }
}
