package com.aliyun.ros.cdk.rds;

/**
 * A ROS resource type:  `ALIYUN::RDS::Database`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.55.1 (build 07d2d90)", date = "2022-03-17T08:21:16.201Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.rds.$Module.class, fqn = "@alicloud/ros-cdk-rds.Database")
public class Database extends com.aliyun.ros.cdk.core.Resource {

    protected Database(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Database(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::RDS::Database`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public Database(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.rds.DatabaseProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::RDS::Database`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Database(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.rds.DatabaseProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute DBInstanceId: The ID of the instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDbInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrDbInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute DBName: The name of the database.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDbName() {
        return software.amazon.jsii.Kernel.get(this, "attrDbName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.rds.Database}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.rds.Database> {
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
        private final com.aliyun.ros.cdk.rds.DatabaseProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.rds.DatabaseProps.Builder();
        }

        /**
         * Property characterSetName: The character set you want to use for the database.
         * <p>
         * Valid values:
         * MySQL and MariaDB: utf8 | gbk | latin1 | utf8mb4.
         * SQL Server: Chinese_PRC_CI_AS | Chinese_PRC_CS_AS | SQL_Latin1_General_CP1_CI_AS | SQL_Latin1_General_CP1_CS_AS
         * | Chinese_PRC_BIN.
         * PostgreSQL: KOI8U | UTF8 | WIN866 | WIN874 | WIN1250 | WIN1251 | WIN1252 | WIN1253 | WIN1254 |
         * WIN1255 | WIN1256 | WIN1257 | WIN1258 | EUC_CN | EUC_KR | EUC_TW | EUC_JP | EUC_JIS_2004
         * | KOI8R | MULE_INTERNAL | LATIN1 | LATIN2 | LATIN3 | LATIN4 | LATIN5 | LATIN6 | LATIN7
         * | LATIN8 | LATIN9 | LATIN10 | ISO_8859_5 | ISO_8859_6 | ISO_8859_7 | ISO_8859_8 |
         * SQL_ASCII.
         * <p>
         * @return {@code this}
         * @param characterSetName Property characterSetName: The character set you want to use for the database. This parameter is required.
         */
        public Builder characterSetName(final java.lang.String characterSetName) {
            this.props.characterSetName(characterSetName);
            return this;
        }
        /**
         * Property characterSetName: The character set you want to use for the database.
         * <p>
         * Valid values:
         * MySQL and MariaDB: utf8 | gbk | latin1 | utf8mb4.
         * SQL Server: Chinese_PRC_CI_AS | Chinese_PRC_CS_AS | SQL_Latin1_General_CP1_CI_AS | SQL_Latin1_General_CP1_CS_AS
         * | Chinese_PRC_BIN.
         * PostgreSQL: KOI8U | UTF8 | WIN866 | WIN874 | WIN1250 | WIN1251 | WIN1252 | WIN1253 | WIN1254 |
         * WIN1255 | WIN1256 | WIN1257 | WIN1258 | EUC_CN | EUC_KR | EUC_TW | EUC_JP | EUC_JIS_2004
         * | KOI8R | MULE_INTERNAL | LATIN1 | LATIN2 | LATIN3 | LATIN4 | LATIN5 | LATIN6 | LATIN7
         * | LATIN8 | LATIN9 | LATIN10 | ISO_8859_5 | ISO_8859_6 | ISO_8859_7 | ISO_8859_8 |
         * SQL_ASCII.
         * <p>
         * @return {@code this}
         * @param characterSetName Property characterSetName: The character set you want to use for the database. This parameter is required.
         */
        public Builder characterSetName(final com.aliyun.ros.cdk.core.IResolvable characterSetName) {
            this.props.characterSetName(characterSetName);
            return this;
        }

        /**
         * Property dbInstanceId: The ID of the instance.
         * <p>
         * @return {@code this}
         * @param dbInstanceId Property dbInstanceId: The ID of the instance. This parameter is required.
         */
        public Builder dbInstanceId(final java.lang.String dbInstanceId) {
            this.props.dbInstanceId(dbInstanceId);
            return this;
        }
        /**
         * Property dbInstanceId: The ID of the instance.
         * <p>
         * @return {@code this}
         * @param dbInstanceId Property dbInstanceId: The ID of the instance. This parameter is required.
         */
        public Builder dbInstanceId(final com.aliyun.ros.cdk.core.IResolvable dbInstanceId) {
            this.props.dbInstanceId(dbInstanceId);
            return this;
        }

        /**
         * Property dbName: The name of the database you want to create.
         * <p>
         * Note
         * The name must be 2 to 64 characters in length.
         * The name must start with a lowercase letter and end with a lowercase letter or digit.
         * The name can contain lowercase letters, digits, underscores (_), and hyphens (-).
         * The name must be unique in the instance.
         * For more information about invalid characters, see Forbidden keywords table.
         * <p>
         * @return {@code this}
         * @param dbName Property dbName: The name of the database you want to create. This parameter is required.
         */
        public Builder dbName(final java.lang.String dbName) {
            this.props.dbName(dbName);
            return this;
        }
        /**
         * Property dbName: The name of the database you want to create.
         * <p>
         * Note
         * The name must be 2 to 64 characters in length.
         * The name must start with a lowercase letter and end with a lowercase letter or digit.
         * The name can contain lowercase letters, digits, underscores (_), and hyphens (-).
         * The name must be unique in the instance.
         * For more information about invalid characters, see Forbidden keywords table.
         * <p>
         * @return {@code this}
         * @param dbName Property dbName: The name of the database you want to create. This parameter is required.
         */
        public Builder dbName(final com.aliyun.ros.cdk.core.IResolvable dbName) {
            this.props.dbName(dbName);
            return this;
        }

        /**
         * Property dbDescription: The description of the database.
         * <p>
         * The description must be 2 to 256 characters in length.
         * The description must start with a letter and can contain letters, digits, underscores
         * (_), and hyphens (-).
         * Note The description cannot start with http:// or https://.
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
         * The description must be 2 to 256 characters in length.
         * The description must start with a letter and can contain letters, digits, underscores
         * (_), and hyphens (-).
         * Note The description cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param dbDescription Property dbDescription: The description of the database. This parameter is required.
         */
        public Builder dbDescription(final com.aliyun.ros.cdk.core.IResolvable dbDescription) {
            this.props.dbDescription(dbDescription);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.rds.Database}.
         */
        @Override
        public com.aliyun.ros.cdk.rds.Database build() {
            return new com.aliyun.ros.cdk.rds.Database(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
