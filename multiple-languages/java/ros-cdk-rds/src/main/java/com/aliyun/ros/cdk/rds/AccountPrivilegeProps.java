package com.aliyun.ros.cdk.rds;

/**
 * Properties for defining a `ALIYUN::RDS::AccountPrivilege`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:34.393Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.rds.$Module.class, fqn = "@alicloud/ros-cdk-rds.AccountPrivilegeProps")
@software.amazon.jsii.Jsii.Proxy(AccountPrivilegeProps.Jsii$Proxy.class)
public interface AccountPrivilegeProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getAccountName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getAccountPrivilege();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getDbInstanceId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getDbName();

    /**
     * @return a {@link Builder} of {@link AccountPrivilegeProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link AccountPrivilegeProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<AccountPrivilegeProps> {
        private java.lang.String accountName;
        private java.lang.String accountPrivilege;
        private java.lang.String dbInstanceId;
        private java.lang.String dbName;

        /**
         * Sets the value of {@link AccountPrivilegeProps#getAccountName}
         * @param accountName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder accountName(java.lang.String accountName) {
            this.accountName = accountName;
            return this;
        }

        /**
         * Sets the value of {@link AccountPrivilegeProps#getAccountPrivilege}
         * @param accountPrivilege the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder accountPrivilege(java.lang.String accountPrivilege) {
            this.accountPrivilege = accountPrivilege;
            return this;
        }

        /**
         * Sets the value of {@link AccountPrivilegeProps#getDbInstanceId}
         * @param dbInstanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbInstanceId(java.lang.String dbInstanceId) {
            this.dbInstanceId = dbInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link AccountPrivilegeProps#getDbName}
         * @param dbName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbName(java.lang.String dbName) {
            this.dbName = dbName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link AccountPrivilegeProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public AccountPrivilegeProps build() {
            return new Jsii$Proxy(accountName, accountPrivilege, dbInstanceId, dbName);
        }
    }

    /**
     * An implementation for {@link AccountPrivilegeProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AccountPrivilegeProps {
        private final java.lang.String accountName;
        private final java.lang.String accountPrivilege;
        private final java.lang.String dbInstanceId;
        private final java.lang.String dbName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.accountName = software.amazon.jsii.Kernel.get(this, "accountName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.accountPrivilege = software.amazon.jsii.Kernel.get(this, "accountPrivilege", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.dbInstanceId = software.amazon.jsii.Kernel.get(this, "dbInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.dbName = software.amazon.jsii.Kernel.get(this, "dbName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String accountName, final java.lang.String accountPrivilege, final java.lang.String dbInstanceId, final java.lang.String dbName) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.accountName = java.util.Objects.requireNonNull(accountName, "accountName is required");
            this.accountPrivilege = java.util.Objects.requireNonNull(accountPrivilege, "accountPrivilege is required");
            this.dbInstanceId = java.util.Objects.requireNonNull(dbInstanceId, "dbInstanceId is required");
            this.dbName = java.util.Objects.requireNonNull(dbName, "dbName is required");
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
        public final java.lang.String getDbInstanceId() {
            return this.dbInstanceId;
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
            data.set("accountPrivilege", om.valueToTree(this.getAccountPrivilege()));
            data.set("dbInstanceId", om.valueToTree(this.getDbInstanceId()));
            data.set("dbName", om.valueToTree(this.getDbName()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-rds.AccountPrivilegeProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            AccountPrivilegeProps.Jsii$Proxy that = (AccountPrivilegeProps.Jsii$Proxy) o;

            if (!accountName.equals(that.accountName)) return false;
            if (!accountPrivilege.equals(that.accountPrivilege)) return false;
            if (!dbInstanceId.equals(that.dbInstanceId)) return false;
            return this.dbName.equals(that.dbName);
        }

        @Override
        public final int hashCode() {
            int result = this.accountName.hashCode();
            result = 31 * result + (this.accountPrivilege.hashCode());
            result = 31 * result + (this.dbInstanceId.hashCode());
            result = 31 * result + (this.dbName.hashCode());
            return result;
        }
    }
}
