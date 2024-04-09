package com.aliyun.ros.cdk.rds;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::RDS::Account</code>, which is used to create a database account for an ApsaraDB for RDS instance.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-04-09T06:05:34.682Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.rds.$Module.class, fqn = "@alicloud/ros-cdk-rds.Account")
public class Account extends com.aliyun.ros.cdk.core.Resource {

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
    public Account(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.rds.AccountProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Account(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.rds.AccountProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AccountName: Account name.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAccountName() {
        return software.amazon.jsii.Kernel.get(this, "attrAccountName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.rds.AccountProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.rds.AccountProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.rds.AccountProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.rds.Account}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.rds.Account> {
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
        private final com.aliyun.ros.cdk.rds.AccountProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.rds.AccountProps.Builder();
        }

        /**
         * Property accountName: Account name, which must be unique and meet the following requirements: Start with a letter;
         * <p>
         * Consist of lower-case letters, digits, and underscores (_);
         * Length:
         * MySQL 8.0 and 5.7: 2-32 characters.
         * MySQL 5.6、MariaDB and PostgreSQL Local version: 2-16 characters.
         * SQL Server: 2-64 characters.
         * PostgreSQL Cloud version: 2-63 characters.
         * <p>
         * @return {@code this}
         * @param accountName Property accountName: Account name, which must be unique and meet the following requirements: Start with a letter;. This parameter is required.
         */
        public Builder accountName(final java.lang.String accountName) {
            this.props.accountName(accountName);
            return this;
        }
        /**
         * Property accountName: Account name, which must be unique and meet the following requirements: Start with a letter;
         * <p>
         * Consist of lower-case letters, digits, and underscores (_);
         * Length:
         * MySQL 8.0 and 5.7: 2-32 characters.
         * MySQL 5.6、MariaDB and PostgreSQL Local version: 2-16 characters.
         * SQL Server: 2-64 characters.
         * PostgreSQL Cloud version: 2-63 characters.
         * <p>
         * @return {@code this}
         * @param accountName Property accountName: Account name, which must be unique and meet the following requirements: Start with a letter;. This parameter is required.
         */
        public Builder accountName(final com.aliyun.ros.cdk.core.IResolvable accountName) {
            this.props.accountName(accountName);
            return this;
        }

        /**
         * Property accountPassword: The account password for the database instance.
         * <p>
         * It may consist of letters, digits, or underlines, with a length of 8 to 32 characters.
         * <p>
         * @return {@code this}
         * @param accountPassword Property accountPassword: The account password for the database instance. This parameter is required.
         */
        public Builder accountPassword(final java.lang.String accountPassword) {
            this.props.accountPassword(accountPassword);
            return this;
        }
        /**
         * Property accountPassword: The account password for the database instance.
         * <p>
         * It may consist of letters, digits, or underlines, with a length of 8 to 32 characters.
         * <p>
         * @return {@code this}
         * @param accountPassword Property accountPassword: The account password for the database instance. This parameter is required.
         */
        public Builder accountPassword(final com.aliyun.ros.cdk.core.IResolvable accountPassword) {
            this.props.accountPassword(accountPassword);
            return this;
        }

        /**
         * Property dbInstanceId: RDS instance ID.
         * <p>
         * @return {@code this}
         * @param dbInstanceId Property dbInstanceId: RDS instance ID. This parameter is required.
         */
        public Builder dbInstanceId(final java.lang.String dbInstanceId) {
            this.props.dbInstanceId(dbInstanceId);
            return this;
        }
        /**
         * Property dbInstanceId: RDS instance ID.
         * <p>
         * @return {@code this}
         * @param dbInstanceId Property dbInstanceId: RDS instance ID. This parameter is required.
         */
        public Builder dbInstanceId(final com.aliyun.ros.cdk.core.IResolvable dbInstanceId) {
            this.props.dbInstanceId(dbInstanceId);
            return this;
        }

        /**
         * Property accountDescription: Account remarks.
         * <p>
         * It cannot begin with http:// or https://.
         * It must start with a Chinese character or English letter.
         * It can include Chinese and English characters/letters, underscores (_), hyphens (-), and digits.
         * The length may be 2-256 characters.
         * <p>
         * @return {@code this}
         * @param accountDescription Property accountDescription: Account remarks. This parameter is required.
         */
        public Builder accountDescription(final java.lang.String accountDescription) {
            this.props.accountDescription(accountDescription);
            return this;
        }
        /**
         * Property accountDescription: Account remarks.
         * <p>
         * It cannot begin with http:// or https://.
         * It must start with a Chinese character or English letter.
         * It can include Chinese and English characters/letters, underscores (_), hyphens (-), and digits.
         * The length may be 2-256 characters.
         * <p>
         * @return {@code this}
         * @param accountDescription Property accountDescription: Account remarks. This parameter is required.
         */
        public Builder accountDescription(final com.aliyun.ros.cdk.core.IResolvable accountDescription) {
            this.props.accountDescription(accountDescription);
            return this;
        }

        /**
         * Property accountType: Privilege type of account.
         * <p>
         * Normal: Common privilege.
         * Super: High privilege. And the default value is Normal.
         * Sysadmin: Super privileges (SA) (only supported by SQL Server)
         * This parameter is valid for MySQL 5.5/5.6 only.
         * MySQL 5.7, SQL Server 2012/2016, PostgreSQL, and PPAS each can have only one initial account. Other accounts are created by the initial account that has logged on to the database.
         * <p>
         * @return {@code this}
         * @param accountType Property accountType: Privilege type of account. This parameter is required.
         */
        public Builder accountType(final java.lang.String accountType) {
            this.props.accountType(accountType);
            return this;
        }
        /**
         * Property accountType: Privilege type of account.
         * <p>
         * Normal: Common privilege.
         * Super: High privilege. And the default value is Normal.
         * Sysadmin: Super privileges (SA) (only supported by SQL Server)
         * This parameter is valid for MySQL 5.5/5.6 only.
         * MySQL 5.7, SQL Server 2012/2016, PostgreSQL, and PPAS each can have only one initial account. Other accounts are created by the initial account that has logged on to the database.
         * <p>
         * @return {@code this}
         * @param accountType Property accountType: Privilege type of account. This parameter is required.
         */
        public Builder accountType(final com.aliyun.ros.cdk.core.IResolvable accountType) {
            this.props.accountType(accountType);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.rds.Account}.
         */
        @Override
        public com.aliyun.ros.cdk.rds.Account build() {
            return new com.aliyun.ros.cdk.rds.Account(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
