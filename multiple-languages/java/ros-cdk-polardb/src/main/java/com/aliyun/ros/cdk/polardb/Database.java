package com.aliyun.ros.cdk.polardb;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::POLARDB::Database</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:27.987Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.polardb.$Module.class, fqn = "@alicloud/ros-cdk-polardb.Database")
public class Database extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.polardb.IDatabase {

    protected Database(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Database(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Database(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.polardb.DatabaseProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Database(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.polardb.DatabaseProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.polardb.DatabaseProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.polardb.DatabaseProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.polardb.Database}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.polardb.Database> {
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
        private final com.aliyun.ros.cdk.polardb.DatabaseProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.polardb.DatabaseProps.Builder();
        }

        /**
         * Property characterSetName: The character set of the database.
         * <p>
         * For more information, see Character sets.
         * <p>
         * @return {@code this}
         * @param characterSetName Property characterSetName: The character set of the database. This parameter is required.
         */
        public Builder characterSetName(final java.lang.String characterSetName) {
            this.props.characterSetName(characterSetName);
            return this;
        }
        /**
         * Property characterSetName: The character set of the database.
         * <p>
         * For more information, see Character sets.
         * <p>
         * @return {@code this}
         * @param characterSetName Property characterSetName: The character set of the database. This parameter is required.
         */
        public Builder characterSetName(final com.aliyun.ros.cdk.core.IResolvable characterSetName) {
            this.props.characterSetName(characterSetName);
            return this;
        }

        /**
         * Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a database is to be created.
         * <p>
         * @return {@code this}
         * @param dbClusterId Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a database is to be created. This parameter is required.
         */
        public Builder dbClusterId(final java.lang.String dbClusterId) {
            this.props.dbClusterId(dbClusterId);
            return this;
        }
        /**
         * Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a database is to be created.
         * <p>
         * @return {@code this}
         * @param dbClusterId Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a database is to be created. This parameter is required.
         */
        public Builder dbClusterId(final com.aliyun.ros.cdk.core.IResolvable dbClusterId) {
            this.props.dbClusterId(dbClusterId);
            return this;
        }

        /**
         * Property dbName: The name of the database to be created.
         * <p>
         * The name must comply with the following rules:
         * It must start with a lowercase letter and consist of lowercase letters, digits, hyphens
         * (-), and underscores (_).
         * It must end with a letter or a digit. It can be up to 64 characters in length.
         * <p>
         * @return {@code this}
         * @param dbName Property dbName: The name of the database to be created. This parameter is required.
         */
        public Builder dbName(final java.lang.String dbName) {
            this.props.dbName(dbName);
            return this;
        }
        /**
         * Property dbName: The name of the database to be created.
         * <p>
         * The name must comply with the following rules:
         * It must start with a lowercase letter and consist of lowercase letters, digits, hyphens
         * (-), and underscores (_).
         * It must end with a letter or a digit. It can be up to 64 characters in length.
         * <p>
         * @return {@code this}
         * @param dbName Property dbName: The name of the database to be created. This parameter is required.
         */
        public Builder dbName(final com.aliyun.ros.cdk.core.IResolvable dbName) {
            this.props.dbName(dbName);
            return this;
        }

        /**
         * Property accountName: The name of the database account to be used.
         * <p>
         * @return {@code this}
         * @param accountName Property accountName: The name of the database account to be used. This parameter is required.
         */
        public Builder accountName(final java.lang.String accountName) {
            this.props.accountName(accountName);
            return this;
        }
        /**
         * Property accountName: The name of the database account to be used.
         * <p>
         * @return {@code this}
         * @param accountName Property accountName: The name of the database account to be used. This parameter is required.
         */
        public Builder accountName(final com.aliyun.ros.cdk.core.IResolvable accountName) {
            this.props.accountName(accountName);
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
         * <p>
         * @return {@code this}
         * @param accountPrivilege Property accountPrivilege: The permissions of the database account on the database. This parameter is required.
         */
        public Builder accountPrivilege(final com.aliyun.ros.cdk.core.IResolvable accountPrivilege) {
            this.props.accountPrivilege(accountPrivilege);
            return this;
        }

        /**
         * Property collate: A locale setting that specifies the collation for newly created databases.
         * <p>
         * The locale must be compatible with the character set set by the CharacterSetName parameter.When the cluster is PolarDB PostgreSQL (compatible with Oracle) or PolarDB PostgreSQL, this parameter is required;
         * when the cluster is PolarDB MySQL, this parameter is not supported.
         * <p>
         * @return {@code this}
         * @param collate Property collate: A locale setting that specifies the collation for newly created databases. This parameter is required.
         */
        public Builder collate(final java.lang.String collate) {
            this.props.collate(collate);
            return this;
        }
        /**
         * Property collate: A locale setting that specifies the collation for newly created databases.
         * <p>
         * The locale must be compatible with the character set set by the CharacterSetName parameter.When the cluster is PolarDB PostgreSQL (compatible with Oracle) or PolarDB PostgreSQL, this parameter is required;
         * when the cluster is PolarDB MySQL, this parameter is not supported.
         * <p>
         * @return {@code this}
         * @param collate Property collate: A locale setting that specifies the collation for newly created databases. This parameter is required.
         */
        public Builder collate(final com.aliyun.ros.cdk.core.IResolvable collate) {
            this.props.collate(collate);
            return this;
        }

        /**
         * Property ctype: A locale setting that specifies the character classification of the database.
         * <p>
         * The locale must be compatible with the character set set by the CharacterSetName parameter.
         * It is consistent with the incoming information of Collate.
         * When the cluster is PolarDB PostgreSQL (compatible with Oracle) or PolarDB PostgreSQL, this parameter is required;
         * when the cluster is PolarDB MySQL, this parameter is optional.
         * <p>
         * @return {@code this}
         * @param ctype Property ctype: A locale setting that specifies the character classification of the database. This parameter is required.
         */
        public Builder ctype(final java.lang.String ctype) {
            this.props.ctype(ctype);
            return this;
        }
        /**
         * Property ctype: A locale setting that specifies the character classification of the database.
         * <p>
         * The locale must be compatible with the character set set by the CharacterSetName parameter.
         * It is consistent with the incoming information of Collate.
         * When the cluster is PolarDB PostgreSQL (compatible with Oracle) or PolarDB PostgreSQL, this parameter is required;
         * when the cluster is PolarDB MySQL, this parameter is optional.
         * <p>
         * @return {@code this}
         * @param ctype Property ctype: A locale setting that specifies the character classification of the database. This parameter is required.
         */
        public Builder ctype(final com.aliyun.ros.cdk.core.IResolvable ctype) {
            this.props.ctype(ctype);
            return this;
        }

        /**
         * Property dbDescription: The description of the database.
         * <p>
         * Valid values:
         * It cannot start with http:// or https://.
         * It must be 2 to 256 characters in length.
         * <p>
         * @return {@code this}
         * @param dbDescription Property dbDescription: The description of the database. This parameter is required.
         */
        public Builder dbDescription(final java.lang.String dbDescription) {
            this.props.dbDescription(dbDescription);
            return this;
        }
        /**
         * Property dbDescription: The description of the database.
         * <p>
         * Valid values:
         * It cannot start with http:// or https://.
         * It must be 2 to 256 characters in length.
         * <p>
         * @return {@code this}
         * @param dbDescription Property dbDescription: The description of the database. This parameter is required.
         */
        public Builder dbDescription(final com.aliyun.ros.cdk.core.IResolvable dbDescription) {
            this.props.dbDescription(dbDescription);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.polardb.Database}.
         */
        @Override
        public com.aliyun.ros.cdk.polardb.Database build() {
            return new com.aliyun.ros.cdk.polardb.Database(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
