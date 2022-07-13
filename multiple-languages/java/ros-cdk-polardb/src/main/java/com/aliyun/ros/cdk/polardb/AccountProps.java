package com.aliyun.ros.cdk.polardb;

/**
 * Properties for defining a `ALIYUN::POLARDB::Account`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.62.0 (build 293ac17)", date = "2022-07-13T09:24:21.492Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.polardb.$Module.class, fqn = "@alicloud/ros-cdk-polardb.AccountProps")
@software.amazon.jsii.Jsii.Proxy(AccountProps.Jsii$Proxy.class)
public interface AccountProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property accountName: The name of the database account.
     * <p>
     * The name must comply with the following rules:
     * <p>
     * <ul>
     * <li>It must start with a lowercase letter and consist of lowercase letters, digits, and underscores (_).</li>
     * <li>It can be up to 16 characters in length.</li>
     * </ul>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAccountName();

    /**
     * Property accountPassword: The password of the database account.
     * <p>
     * The password must comply with the following rules:
     * <p>
     * <ul>
     * <li>It must consist of uppercase letters, lowercase letters, digits, and special characters.</li>
     * <li>Special characters include exclamation points (!), number signs (#), dollar signs ($), percent signs (%), carets (^), ampersands (&amp;), asterisks (*), parentheses (()), underscores (_), plus signs (+), hyphens (-), and equal signs (=).</li>
     * <li>It must be 8 to 32 characters in length.</li>
     * </ul>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAccountPassword();

    /**
     * Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a database account is to be created.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbClusterId();

    /**
     * Property accountDescription: The description of the database account.
     * <p>
     * The description must comply with the following rules:
     * <p>
     * <ul>
     * <li>It cannot start with http:// or https://.</li>
     * <li>It must be 2 to 256 characters in length.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAccountDescription() {
        return null;
    }

    /**
     * Property accountPrivilege: The permissions of the database account on the database.
     * <p>
     * Valid values:
     * ReadWrite: has read and write permissions on the database.
     * ReadOnly: has the read-only permission on the database.
     * DMLOnly: runs only data manipulation language (DML) statements.
     * DDLOnly: runs only data definition language (DDL) statements.
     * Default value: ReadWrite.
     * Separate multiple permissions with a comma (,).
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAccountPrivilege() {
        return null;
    }

    /**
     * Property accountType: The type of the database account.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>Normal: standard account</li>
     * <li>Super: privileged account
     * Default value: Super.
     * Currently, POLARDB for PostgreSQL and POLARDB compatible with Oracle do not support standard accounts.
     * You can create only one privileged account for an ApsaraDB for POLARDB cluster.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAccountType() {
        return null;
    }

    /**
     * Property dbName: The name of the database whose access permissions are to be granted to the database account.
     * <p>
     * Separate multiple databases with a comma (,).
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link AccountProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link AccountProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<AccountProps> {
        java.lang.Object accountName;
        java.lang.Object accountPassword;
        java.lang.Object dbClusterId;
        java.lang.Object accountDescription;
        java.lang.Object accountPrivilege;
        java.lang.Object accountType;
        java.lang.Object dbName;

        /**
         * Sets the value of {@link AccountProps#getAccountName}
         * @param accountName Property accountName: The name of the database account. This parameter is required.
         *                    The name must comply with the following rules:
         *                    <p>
         *                    <ul>
         *                    <li>It must start with a lowercase letter and consist of lowercase letters, digits, and underscores (_).</li>
         *                    <li>It can be up to 16 characters in length.</li>
         *                    </ul>
         * @return {@code this}
         */
        public Builder accountName(java.lang.String accountName) {
            this.accountName = accountName;
            return this;
        }

        /**
         * Sets the value of {@link AccountProps#getAccountName}
         * @param accountName Property accountName: The name of the database account. This parameter is required.
         *                    The name must comply with the following rules:
         *                    <p>
         *                    <ul>
         *                    <li>It must start with a lowercase letter and consist of lowercase letters, digits, and underscores (_).</li>
         *                    <li>It can be up to 16 characters in length.</li>
         *                    </ul>
         * @return {@code this}
         */
        public Builder accountName(com.aliyun.ros.cdk.core.IResolvable accountName) {
            this.accountName = accountName;
            return this;
        }

        /**
         * Sets the value of {@link AccountProps#getAccountPassword}
         * @param accountPassword Property accountPassword: The password of the database account. This parameter is required.
         *                        The password must comply with the following rules:
         *                        <p>
         *                        <ul>
         *                        <li>It must consist of uppercase letters, lowercase letters, digits, and special characters.</li>
         *                        <li>Special characters include exclamation points (!), number signs (#), dollar signs ($), percent signs (%), carets (^), ampersands (&amp;), asterisks (*), parentheses (()), underscores (_), plus signs (+), hyphens (-), and equal signs (=).</li>
         *                        <li>It must be 8 to 32 characters in length.</li>
         *                        </ul>
         * @return {@code this}
         */
        public Builder accountPassword(java.lang.String accountPassword) {
            this.accountPassword = accountPassword;
            return this;
        }

        /**
         * Sets the value of {@link AccountProps#getAccountPassword}
         * @param accountPassword Property accountPassword: The password of the database account. This parameter is required.
         *                        The password must comply with the following rules:
         *                        <p>
         *                        <ul>
         *                        <li>It must consist of uppercase letters, lowercase letters, digits, and special characters.</li>
         *                        <li>Special characters include exclamation points (!), number signs (#), dollar signs ($), percent signs (%), carets (^), ampersands (&amp;), asterisks (*), parentheses (()), underscores (_), plus signs (+), hyphens (-), and equal signs (=).</li>
         *                        <li>It must be 8 to 32 characters in length.</li>
         *                        </ul>
         * @return {@code this}
         */
        public Builder accountPassword(com.aliyun.ros.cdk.core.IResolvable accountPassword) {
            this.accountPassword = accountPassword;
            return this;
        }

        /**
         * Sets the value of {@link AccountProps#getDbClusterId}
         * @param dbClusterId Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a database account is to be created. This parameter is required.
         * @return {@code this}
         */
        public Builder dbClusterId(java.lang.String dbClusterId) {
            this.dbClusterId = dbClusterId;
            return this;
        }

        /**
         * Sets the value of {@link AccountProps#getDbClusterId}
         * @param dbClusterId Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a database account is to be created. This parameter is required.
         * @return {@code this}
         */
        public Builder dbClusterId(com.aliyun.ros.cdk.core.IResolvable dbClusterId) {
            this.dbClusterId = dbClusterId;
            return this;
        }

        /**
         * Sets the value of {@link AccountProps#getAccountDescription}
         * @param accountDescription Property accountDescription: The description of the database account.
         *                           The description must comply with the following rules:
         *                           <p>
         *                           <ul>
         *                           <li>It cannot start with http:// or https://.</li>
         *                           <li>It must be 2 to 256 characters in length.</li>
         *                           </ul>
         * @return {@code this}
         */
        public Builder accountDescription(java.lang.String accountDescription) {
            this.accountDescription = accountDescription;
            return this;
        }

        /**
         * Sets the value of {@link AccountProps#getAccountDescription}
         * @param accountDescription Property accountDescription: The description of the database account.
         *                           The description must comply with the following rules:
         *                           <p>
         *                           <ul>
         *                           <li>It cannot start with http:// or https://.</li>
         *                           <li>It must be 2 to 256 characters in length.</li>
         *                           </ul>
         * @return {@code this}
         */
        public Builder accountDescription(com.aliyun.ros.cdk.core.IResolvable accountDescription) {
            this.accountDescription = accountDescription;
            return this;
        }

        /**
         * Sets the value of {@link AccountProps#getAccountPrivilege}
         * @param accountPrivilege Property accountPrivilege: The permissions of the database account on the database.
         *                         Valid values:
         *                         ReadWrite: has read and write permissions on the database.
         *                         ReadOnly: has the read-only permission on the database.
         *                         DMLOnly: runs only data manipulation language (DML) statements.
         *                         DDLOnly: runs only data definition language (DDL) statements.
         *                         Default value: ReadWrite.
         *                         Separate multiple permissions with a comma (,).
         * @return {@code this}
         */
        public Builder accountPrivilege(java.lang.String accountPrivilege) {
            this.accountPrivilege = accountPrivilege;
            return this;
        }

        /**
         * Sets the value of {@link AccountProps#getAccountPrivilege}
         * @param accountPrivilege Property accountPrivilege: The permissions of the database account on the database.
         *                         Valid values:
         *                         ReadWrite: has read and write permissions on the database.
         *                         ReadOnly: has the read-only permission on the database.
         *                         DMLOnly: runs only data manipulation language (DML) statements.
         *                         DDLOnly: runs only data definition language (DDL) statements.
         *                         Default value: ReadWrite.
         *                         Separate multiple permissions with a comma (,).
         * @return {@code this}
         */
        public Builder accountPrivilege(com.aliyun.ros.cdk.core.IResolvable accountPrivilege) {
            this.accountPrivilege = accountPrivilege;
            return this;
        }

        /**
         * Sets the value of {@link AccountProps#getAccountType}
         * @param accountType Property accountType: The type of the database account.
         *                    Valid values:
         *                    <p>
         *                    <ul>
         *                    <li>Normal: standard account</li>
         *                    <li>Super: privileged account
         *                    Default value: Super.
         *                    Currently, POLARDB for PostgreSQL and POLARDB compatible with Oracle do not support standard accounts.
         *                    You can create only one privileged account for an ApsaraDB for POLARDB cluster.</li>
         *                    </ul>
         * @return {@code this}
         */
        public Builder accountType(java.lang.String accountType) {
            this.accountType = accountType;
            return this;
        }

        /**
         * Sets the value of {@link AccountProps#getAccountType}
         * @param accountType Property accountType: The type of the database account.
         *                    Valid values:
         *                    <p>
         *                    <ul>
         *                    <li>Normal: standard account</li>
         *                    <li>Super: privileged account
         *                    Default value: Super.
         *                    Currently, POLARDB for PostgreSQL and POLARDB compatible with Oracle do not support standard accounts.
         *                    You can create only one privileged account for an ApsaraDB for POLARDB cluster.</li>
         *                    </ul>
         * @return {@code this}
         */
        public Builder accountType(com.aliyun.ros.cdk.core.IResolvable accountType) {
            this.accountType = accountType;
            return this;
        }

        /**
         * Sets the value of {@link AccountProps#getDbName}
         * @param dbName Property dbName: The name of the database whose access permissions are to be granted to the database account.
         *               Separate multiple databases with a comma (,).
         * @return {@code this}
         */
        public Builder dbName(java.lang.String dbName) {
            this.dbName = dbName;
            return this;
        }

        /**
         * Sets the value of {@link AccountProps#getDbName}
         * @param dbName Property dbName: The name of the database whose access permissions are to be granted to the database account.
         *               Separate multiple databases with a comma (,).
         * @return {@code this}
         */
        public Builder dbName(com.aliyun.ros.cdk.core.IResolvable dbName) {
            this.dbName = dbName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link AccountProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public AccountProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link AccountProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AccountProps {
        private final java.lang.Object accountName;
        private final java.lang.Object accountPassword;
        private final java.lang.Object dbClusterId;
        private final java.lang.Object accountDescription;
        private final java.lang.Object accountPrivilege;
        private final java.lang.Object accountType;
        private final java.lang.Object dbName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.accountName = software.amazon.jsii.Kernel.get(this, "accountName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.accountPassword = software.amazon.jsii.Kernel.get(this, "accountPassword", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbClusterId = software.amazon.jsii.Kernel.get(this, "dbClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.accountDescription = software.amazon.jsii.Kernel.get(this, "accountDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.accountPrivilege = software.amazon.jsii.Kernel.get(this, "accountPrivilege", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.accountType = software.amazon.jsii.Kernel.get(this, "accountType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbName = software.amazon.jsii.Kernel.get(this, "dbName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.accountName = java.util.Objects.requireNonNull(builder.accountName, "accountName is required");
            this.accountPassword = java.util.Objects.requireNonNull(builder.accountPassword, "accountPassword is required");
            this.dbClusterId = java.util.Objects.requireNonNull(builder.dbClusterId, "dbClusterId is required");
            this.accountDescription = builder.accountDescription;
            this.accountPrivilege = builder.accountPrivilege;
            this.accountType = builder.accountType;
            this.dbName = builder.dbName;
        }

        @Override
        public final java.lang.Object getAccountName() {
            return this.accountName;
        }

        @Override
        public final java.lang.Object getAccountPassword() {
            return this.accountPassword;
        }

        @Override
        public final java.lang.Object getDbClusterId() {
            return this.dbClusterId;
        }

        @Override
        public final java.lang.Object getAccountDescription() {
            return this.accountDescription;
        }

        @Override
        public final java.lang.Object getAccountPrivilege() {
            return this.accountPrivilege;
        }

        @Override
        public final java.lang.Object getAccountType() {
            return this.accountType;
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-polardb.AccountProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            AccountProps.Jsii$Proxy that = (AccountProps.Jsii$Proxy) o;

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
