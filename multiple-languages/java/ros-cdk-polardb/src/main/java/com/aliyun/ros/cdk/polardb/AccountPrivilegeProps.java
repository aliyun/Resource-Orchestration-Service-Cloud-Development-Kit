package com.aliyun.ros.cdk.polardb;

/**
 * Properties for defining a `ALIYUN::POLARDB::AccountPrivilege`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.68.0 (build b45f2f6)", date = "2022-09-23T09:09:11.068Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.polardb.$Module.class, fqn = "@alicloud/ros-cdk-polardb.AccountPrivilegeProps")
@software.amazon.jsii.Jsii.Proxy(AccountPrivilegeProps.Jsii$Proxy.class)
public interface AccountPrivilegeProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property accountName: The name of the database account to be granted access permissions.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAccountName();

    /**
     * Property accountPrivilege: The permissions of the database account on the database.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>ReadWrite: has read and write permissions on the database.</li>
     * <li>ReadOnly: has the read-only permission on the database.</li>
     * <li>DMLOnly: runs only data manipulation language (DML) statements.</li>
     * <li>DDLOnly: runs only data definition language (DDL) statements.
     * The number of account permissions specified by the AccountPrivilege parameter must be the same as that of database names specified by the DBName parameter. Each account permission must correspond to a database name in sequence.
     * Separate multiple permissions with a comma (,).</li>
     * </ul>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAccountPrivilege();

    /**
     * Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster to which a database account belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbClusterId();

    /**
     * Property dbName: The name of the database whose access permissions are to be granted to the database account.
     * <p>
     * You can grant access permissions on one or more databases to the database account.
     * Separate multiple databases with a comma (,).
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbName();

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
        java.lang.Object accountName;
        java.lang.Object accountPrivilege;
        java.lang.Object dbClusterId;
        java.lang.Object dbName;

        /**
         * Sets the value of {@link AccountPrivilegeProps#getAccountName}
         * @param accountName Property accountName: The name of the database account to be granted access permissions. This parameter is required.
         * @return {@code this}
         */
        public Builder accountName(java.lang.String accountName) {
            this.accountName = accountName;
            return this;
        }

        /**
         * Sets the value of {@link AccountPrivilegeProps#getAccountName}
         * @param accountName Property accountName: The name of the database account to be granted access permissions. This parameter is required.
         * @return {@code this}
         */
        public Builder accountName(com.aliyun.ros.cdk.core.IResolvable accountName) {
            this.accountName = accountName;
            return this;
        }

        /**
         * Sets the value of {@link AccountPrivilegeProps#getAccountPrivilege}
         * @param accountPrivilege Property accountPrivilege: The permissions of the database account on the database. This parameter is required.
         *                         Valid values:
         *                         <p>
         *                         <ul>
         *                         <li>ReadWrite: has read and write permissions on the database.</li>
         *                         <li>ReadOnly: has the read-only permission on the database.</li>
         *                         <li>DMLOnly: runs only data manipulation language (DML) statements.</li>
         *                         <li>DDLOnly: runs only data definition language (DDL) statements.
         *                         The number of account permissions specified by the AccountPrivilege parameter must be the same as that of database names specified by the DBName parameter. Each account permission must correspond to a database name in sequence.
         *                         Separate multiple permissions with a comma (,).</li>
         *                         </ul>
         * @return {@code this}
         */
        public Builder accountPrivilege(java.lang.String accountPrivilege) {
            this.accountPrivilege = accountPrivilege;
            return this;
        }

        /**
         * Sets the value of {@link AccountPrivilegeProps#getAccountPrivilege}
         * @param accountPrivilege Property accountPrivilege: The permissions of the database account on the database. This parameter is required.
         *                         Valid values:
         *                         <p>
         *                         <ul>
         *                         <li>ReadWrite: has read and write permissions on the database.</li>
         *                         <li>ReadOnly: has the read-only permission on the database.</li>
         *                         <li>DMLOnly: runs only data manipulation language (DML) statements.</li>
         *                         <li>DDLOnly: runs only data definition language (DDL) statements.
         *                         The number of account permissions specified by the AccountPrivilege parameter must be the same as that of database names specified by the DBName parameter. Each account permission must correspond to a database name in sequence.
         *                         Separate multiple permissions with a comma (,).</li>
         *                         </ul>
         * @return {@code this}
         */
        public Builder accountPrivilege(com.aliyun.ros.cdk.core.IResolvable accountPrivilege) {
            this.accountPrivilege = accountPrivilege;
            return this;
        }

        /**
         * Sets the value of {@link AccountPrivilegeProps#getDbClusterId}
         * @param dbClusterId Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster to which a database account belongs. This parameter is required.
         * @return {@code this}
         */
        public Builder dbClusterId(java.lang.String dbClusterId) {
            this.dbClusterId = dbClusterId;
            return this;
        }

        /**
         * Sets the value of {@link AccountPrivilegeProps#getDbClusterId}
         * @param dbClusterId Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster to which a database account belongs. This parameter is required.
         * @return {@code this}
         */
        public Builder dbClusterId(com.aliyun.ros.cdk.core.IResolvable dbClusterId) {
            this.dbClusterId = dbClusterId;
            return this;
        }

        /**
         * Sets the value of {@link AccountPrivilegeProps#getDbName}
         * @param dbName Property dbName: The name of the database whose access permissions are to be granted to the database account. This parameter is required.
         *               You can grant access permissions on one or more databases to the database account.
         *               Separate multiple databases with a comma (,).
         * @return {@code this}
         */
        public Builder dbName(java.lang.String dbName) {
            this.dbName = dbName;
            return this;
        }

        /**
         * Sets the value of {@link AccountPrivilegeProps#getDbName}
         * @param dbName Property dbName: The name of the database whose access permissions are to be granted to the database account. This parameter is required.
         *               You can grant access permissions on one or more databases to the database account.
         *               Separate multiple databases with a comma (,).
         * @return {@code this}
         */
        public Builder dbName(com.aliyun.ros.cdk.core.IResolvable dbName) {
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
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link AccountPrivilegeProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AccountPrivilegeProps {
        private final java.lang.Object accountName;
        private final java.lang.Object accountPrivilege;
        private final java.lang.Object dbClusterId;
        private final java.lang.Object dbName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.accountName = software.amazon.jsii.Kernel.get(this, "accountName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.accountPrivilege = software.amazon.jsii.Kernel.get(this, "accountPrivilege", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbClusterId = software.amazon.jsii.Kernel.get(this, "dbClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbName = software.amazon.jsii.Kernel.get(this, "dbName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.accountName = java.util.Objects.requireNonNull(builder.accountName, "accountName is required");
            this.accountPrivilege = java.util.Objects.requireNonNull(builder.accountPrivilege, "accountPrivilege is required");
            this.dbClusterId = java.util.Objects.requireNonNull(builder.dbClusterId, "dbClusterId is required");
            this.dbName = java.util.Objects.requireNonNull(builder.dbName, "dbName is required");
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
        public final java.lang.Object getDbClusterId() {
            return this.dbClusterId;
        }

        @Override
        public final java.lang.Object getDbName() {
            return this.dbName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("accountName", om.valueToTree(this.getAccountName()));
            data.set("accountPrivilege", om.valueToTree(this.getAccountPrivilege()));
            data.set("dbClusterId", om.valueToTree(this.getDbClusterId()));
            data.set("dbName", om.valueToTree(this.getDbName()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-polardb.AccountPrivilegeProps"));
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
            if (!dbClusterId.equals(that.dbClusterId)) return false;
            return this.dbName.equals(that.dbName);
        }

        @Override
        public final int hashCode() {
            int result = this.accountName.hashCode();
            result = 31 * result + (this.accountPrivilege.hashCode());
            result = 31 * result + (this.dbClusterId.hashCode());
            result = 31 * result + (this.dbName.hashCode());
            return result;
        }
    }
}
