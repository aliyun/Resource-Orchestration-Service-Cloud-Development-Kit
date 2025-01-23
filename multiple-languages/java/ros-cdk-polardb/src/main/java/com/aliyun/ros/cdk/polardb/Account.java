package com.aliyun.ros.cdk.polardb;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::POLARDB::Account</code>, which is used to create a database account for a specified PolarDB cluster.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:42.349Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.polardb.$Module.class, fqn = "@alicloud/ros-cdk-polardb.Account")
public class Account extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.polardb.IAccount {

    protected Account(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Account(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public Account(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.polardb.AccountProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Account(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.polardb.AccountProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.polardb.AccountProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.polardb.AccountProps.class));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    protected void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.String getId() {
        return software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    protected void setId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "id", java.util.Objects.requireNonNull(value, "id is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.polardb.Account}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.polardb.Account> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.polardb.AccountProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.polardb.AccountProps.Builder();
        }

        /**
         * Property accountName: The name of the database account.
         * <p>
         * The name must comply with the following rules:
         * <p>
         * <ul>
         * <li>It must start with a lowercase letter and consist of lowercase letters, digits, and underscores (_).</li>
         * <li>It can be up to 16 characters in length.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param accountName Property accountName: The name of the database account. This parameter is required.
         */
        public Builder accountName(final java.lang.String accountName) {
            this.props.accountName(accountName);
            return this;
        }
        /**
         * Property accountName: The name of the database account.
         * <p>
         * The name must comply with the following rules:
         * <p>
         * <ul>
         * <li>It must start with a lowercase letter and consist of lowercase letters, digits, and underscores (_).</li>
         * <li>It can be up to 16 characters in length.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param accountName Property accountName: The name of the database account. This parameter is required.
         */
        public Builder accountName(final com.aliyun.ros.cdk.core.IResolvable accountName) {
            this.props.accountName(accountName);
            return this;
        }

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
         * <p>
         * @return {@code this}
         * @param accountPassword Property accountPassword: The password of the database account. This parameter is required.
         */
        public Builder accountPassword(final java.lang.String accountPassword) {
            this.props.accountPassword(accountPassword);
            return this;
        }
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
         * <p>
         * @return {@code this}
         * @param accountPassword Property accountPassword: The password of the database account. This parameter is required.
         */
        public Builder accountPassword(final com.aliyun.ros.cdk.core.IResolvable accountPassword) {
            this.props.accountPassword(accountPassword);
            return this;
        }

        /**
         * Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a database account is to be created.
         * <p>
         * @return {@code this}
         * @param dbClusterId Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a database account is to be created. This parameter is required.
         */
        public Builder dbClusterId(final java.lang.String dbClusterId) {
            this.props.dbClusterId(dbClusterId);
            return this;
        }
        /**
         * Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a database account is to be created.
         * <p>
         * @return {@code this}
         * @param dbClusterId Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a database account is to be created. This parameter is required.
         */
        public Builder dbClusterId(final com.aliyun.ros.cdk.core.IResolvable dbClusterId) {
            this.props.dbClusterId(dbClusterId);
            return this;
        }

        /**
         * Property accountDescription: The description of the database account.
         * <p>
         * The description must comply with the following rules:
         * <p>
         * <ul>
         * <li>It cannot start with http:// or https://.</li>
         * <li>It must be 2 to 256 characters in length.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param accountDescription Property accountDescription: The description of the database account. This parameter is required.
         */
        public Builder accountDescription(final java.lang.String accountDescription) {
            this.props.accountDescription(accountDescription);
            return this;
        }
        /**
         * Property accountDescription: The description of the database account.
         * <p>
         * The description must comply with the following rules:
         * <p>
         * <ul>
         * <li>It cannot start with http:// or https://.</li>
         * <li>It must be 2 to 256 characters in length.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param accountDescription Property accountDescription: The description of the database account. This parameter is required.
         */
        public Builder accountDescription(final com.aliyun.ros.cdk.core.IResolvable accountDescription) {
            this.props.accountDescription(accountDescription);
            return this;
        }

        /**
         * Property accountPrivilege: The permissions of the database account on the database.
         * <p>
         * Valid values:
         * ReadWrite: has read and write permissions on the database.
         * ReadOnly: has the read-only permission on the database.
         * DMLOnly: runs only data manipulation language (DML) statements.
         * DDLOnly: runs only data definition language (DDL) statements.
         * ReadIndex: has read and index permissions on the database.
         * Default value: ReadWrite.
         * Separate multiple permissions with a comma (,).
         * <p>
         * @return {@code this}
         * @param accountPrivilege Property accountPrivilege: The permissions of the database account on the database. This parameter is required.
         */
        public Builder accountPrivilege(final java.lang.String accountPrivilege) {
            this.props.accountPrivilege(accountPrivilege);
            return this;
        }
        /**
         * Property accountPrivilege: The permissions of the database account on the database.
         * <p>
         * Valid values:
         * ReadWrite: has read and write permissions on the database.
         * ReadOnly: has the read-only permission on the database.
         * DMLOnly: runs only data manipulation language (DML) statements.
         * DDLOnly: runs only data definition language (DDL) statements.
         * ReadIndex: has read and index permissions on the database.
         * Default value: ReadWrite.
         * Separate multiple permissions with a comma (,).
         * <p>
         * @return {@code this}
         * @param accountPrivilege Property accountPrivilege: The permissions of the database account on the database. This parameter is required.
         */
        public Builder accountPrivilege(final com.aliyun.ros.cdk.core.IResolvable accountPrivilege) {
            this.props.accountPrivilege(accountPrivilege);
            return this;
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
         * <p>
         * @return {@code this}
         * @param accountType Property accountType: The type of the database account. This parameter is required.
         */
        public Builder accountType(final java.lang.String accountType) {
            this.props.accountType(accountType);
            return this;
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
         * <p>
         * @return {@code this}
         * @param accountType Property accountType: The type of the database account. This parameter is required.
         */
        public Builder accountType(final com.aliyun.ros.cdk.core.IResolvable accountType) {
            this.props.accountType(accountType);
            return this;
        }

        /**
         * Property dbName: The name of the database whose access permissions are to be granted to the database account.
         * <p>
         * Separate multiple databases with a comma (,).
         * <p>
         * @return {@code this}
         * @param dbName Property dbName: The name of the database whose access permissions are to be granted to the database account. This parameter is required.
         */
        public Builder dbName(final java.lang.String dbName) {
            this.props.dbName(dbName);
            return this;
        }
        /**
         * Property dbName: The name of the database whose access permissions are to be granted to the database account.
         * <p>
         * Separate multiple databases with a comma (,).
         * <p>
         * @return {@code this}
         * @param dbName Property dbName: The name of the database whose access permissions are to be granted to the database account. This parameter is required.
         */
        public Builder dbName(final com.aliyun.ros.cdk.core.IResolvable dbName) {
            this.props.dbName(dbName);
            return this;
        }

        /**
         * Property privForAllDb: Whether to grant permissions to all libraries in the current cluster and any libraries that will be added in the future.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>0 (default)): Not authorized.</li>
         * <li>1: Authorization.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param privForAllDb Property privForAllDb: Whether to grant permissions to all libraries in the current cluster and any libraries that will be added in the future. This parameter is required.
         */
        public Builder privForAllDb(final java.lang.String privForAllDb) {
            this.props.privForAllDb(privForAllDb);
            return this;
        }
        /**
         * Property privForAllDb: Whether to grant permissions to all libraries in the current cluster and any libraries that will be added in the future.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>0 (default)): Not authorized.</li>
         * <li>1: Authorization.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param privForAllDb Property privForAllDb: Whether to grant permissions to all libraries in the current cluster and any libraries that will be added in the future. This parameter is required.
         */
        public Builder privForAllDb(final com.aliyun.ros.cdk.core.IResolvable privForAllDb) {
            this.props.privForAllDb(privForAllDb);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.polardb.Account}.
         */
        @Override
        public com.aliyun.ros.cdk.polardb.Account build() {
            return new com.aliyun.ros.cdk.polardb.Account(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
